<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Aluno;
use App\Models\Professor;
use App\Models\Turma;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
    */

    private function validateUser(array $input) {
        return Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:100', 'regex:/@(?:edu\.)?unifil\.br$/i', Rule::unique(User::class)->whereNull('deleted_at')],
            'matricula' => ['required', 'string', 'size:9', Rule::unique(User::class)->whereNull('deleted_at')]
        ], [
            'email.unique' => 'Já existe um usuário com este e-mail',
            'email.regex' => 'O e-mail deve ser de domínio Unifil',
            'matricula.unique' => 'Já existe um usuário com esta matrícula',
            'matricula.size' => 'A matrícula deve ter 9 caracteres',
            'name.required' => 'Campo nome obrigatório',
            'email.required' => 'Campo email obrigatório',
            'matricula.required' => 'Campo matrícula obrigatório'
        ]);
    }

    public function store(Request $request) {
        $input = $request->all();

        $validator = $this->validateUser($input);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        # Busca as informações base
        $user = User::withTrashed()->where('email', $input['email'])->where('matricula', $input['matricula'])->first();
        $codigoEntrada = User::matricula_info($input['matricula']);
        $turma = Turma::whereJsonContains('codigo_entradas', $codigoEntrada)->first();

        # Se o usuário não existir
        if (!$user) {

            if (!$turma) {
                throw ValidationException::withMessages(['matricula' => 'Nenhuma turma encontrada para a matrícula informada']);
            }

            # Criação do usuário
            $user = User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'matricula' => $input['matricula'],
                'password' => Hash::make($input['password']),
                'role_id' => 1
            ]);

            Aluno::create(['user_id' => $user->id, 'turma_id' => $turma->id]);
        }

        # Se o usuário esta deletado
        if ($user->trashed()) {
            $aluno = Aluno::withTrashed()->where('user_id', $user->id)->first();
            $professor = Professor::withTrashed()->where('user_id', $user->id)->first();
            
            $user->restore();

            $user->update([
                'password' => Hash::make($input['password']),
                'role_id' => 1
            ]);

            if ($professor) {
                $professor->delete();
            }

            if ($aluno->trashed()) {
                $aluno->restore();
                $aluno->turma_id = $turma->id;
                $aluno->save();

            } elseif (!$aluno) {
                Aluno::create(['user_id' => $usuario->id, 'turma_id' => $turma->id]);
            }
        }

        event(new Registered($user));
        Auth::login($user);

        return to_route('dashboard');
    }
}
