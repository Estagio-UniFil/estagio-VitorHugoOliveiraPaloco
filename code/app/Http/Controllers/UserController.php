<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

use App\Models\User;
use App\Models\Role;
use App\Models\Aluno;
use App\Models\Professor;
use App\Models\Turma;

class UserController extends Controller
{
    private function validateUser(array $input, $ignoreId = null) {
        return Validator::make($input, [
            'name' => ['required', 'string', 'max:255', Rule::unique(User::class)->whereNull('deleted_at')->ignore($ignoreId)],
            'email' => ['required', 'string', 'email', 'max:100', 'regex:/@(?:edu\.)?unifil\.br$/i', Rule::unique(User::class)->whereNull('deleted_at')->ignore($ignoreId)],
            'matricula' => ['required', 'string', 'min:9', 'max:9', Rule::unique(User::class)->whereNull('deleted_at')->ignore($ignoreId)],
            'role_id' => ['required']
        ], [
            'name.unique' => 'Já existe um usuário com este nome',
            'email.unique' => 'Já existe um usuário com este e-mail',
            'email.regex' => 'O e-mail deve ser de domínio Unifil',
            'matricula.unique' => 'Já existe um usuário com esta matrícula',
            'matricula.min' => 'A matrícula deve ter 9 caracteres',
            'matricula.max' => 'A matrícula deve ter 9 caracteres',
            'name.required' => 'Campo nome obrigatório',
            'email.required' => 'Campo email obrigatório',
            'matricula.required' => 'Campo matrícula obrigatório',
            'role_id.required' => 'Campo role obrigatório'
        ]);
    }

    public function index() {
        $lista_usuarios = User::with('role')->get();
        return Inertia::render('Usuarios', ['lista_usuarios' => $lista_usuarios]);
    }

    public function store(Request $request) {
        $input = $request->all();
        $input['role_id'] = $request->role_id ?? 1;

        // Verifica se o usuário está deletado (soft delete)
        $user = User::onlyTrashed()
            ->where('name', $input['name'])
            ->where('email', $input['email'])
            ->where('matricula', $input['matricula'])
            ->first();

        if ($user) {
            $user->restore();
            return $this->update($request, $user);
        }

        // Validação
        $validator = $this->validateUser($input);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $randomPassword = Str::random(10);

        // Criação do usuário
        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'matricula' => $input['matricula'],
            'password' => Hash::make($randomPassword),
            'role_id' => $input['role_id']
        ]);

        // Dependendo do role, cria registros relacionados
        if ($user->role_id == 1) {
            $codigoEntrada = $user->matricula_info();
            $turma = Turma::whereJsonContains('codigo_entradas', $codigoEntrada)->first();

            if (!$turma) {
                return back()->withErrors([
                    'turma' => 'Nenhuma turma encontrada para a matrícula informada'
                ])->withInput();
            }

            Aluno::create(['user_id' => $user->id, 'turma_id' => $turma->id]);
        } 
        
        elseif ($user->role_id == 2 || $user->role_id == 3) {
            Professor::create(['user_id' => $user->id]);
        }

        // Retorna para a página anterior com mensagem de sucesso
        return back()->with('message', 'Usuário criado com sucesso!');
    }

    function destroy(User $usuario) {
        $usuario->delete();

        if ($usuario->aluno) {
            $usuario->aluno->delete();
        }

        if ($usuario->professor) {
            $usuario->professor->delete();
        }

        return back()->with('message', 'Usuário removido com sucesso!'); 
    }

    function update(Request $request, User $usuario) {
        $input = $request->all();
        $validator = $this->validateUser($input, $usuario->id); 

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        # Verificação de mudança de role
        $roleAntiga = $usuario->role_id;
        $roleNova = $request->input('role_id');

        # Verificação de registros idênticos
        $aluno = Aluno::withTrashed()->where('user_id', $usuario->id)->first();
        $professor = Professor::withTrashed()->where('user_id', $usuario->id)->first();

        # Busca turma pela matrícula
        $codigoEntrada = User::matricula_info($input['matricula']);
        $turma = Turma::whereJsonContains('codigo_entradas', $codigoEntrada)->first();

        # Matricula sem turma encontrada
        if ($roleNova == 1 && !$turma) {
            return back()->withErrors('Nenhuma turma encontrada para a matrícula informada')->withInput();
        }

        # Quando não houver troca de sub-tabela
        if ($roleAntiga == $roleNova || (in_array($roleAntiga, [2,3]) && in_array($roleNova, [2,3]))) {
            # Troca para aluno
            if ($roleNova == 1) {
                # Checa se o registro existe
                if ($aluno) {
                    # Checa se o aluno esta ativo
                    if ($aluno->trashed()) {
                        $aluno->restore();
                    }
                    $aluno->turma_id = $turma->id;
                    $aluno->save();
                } else {
                    Aluno::create(['user_id' => $usuario->id, 'turma_id' => $turma->id]);
                }
            # Troca para professor
            } else {
                # Checa se o registro existe
                if ($professor) {
                    # Checa se o professor esta ativo
                    if ($professor->trashed()) {
                        $professor->restore();
                    }
                } else {
                    Professor::create(['user_id' => $usuario->id]);
                }
            }
        } 
        
        # Troca de aluno para professor
        elseif ($roleAntiga == 1 && in_array($roleNova, [2,3])) {
            if (!$aluno->trashed()) {
                $usuario->aluno->delete();
            }

            if ($professor) {
                if ($professor->trashed()) {
                    $professor->restore();
                }
            } else {
                Professor::create(['user_id' => $usuario->id]);
            }
        }

        # Troca de professor para aluno
        elseif (in_array($roleAntiga, [2,3]) && $roleNova == 1) {
            if (!$professor->trashed()) {
                $usuario->professor->delete();
            }

            if ($aluno) {
                if ($aluno->trashed()) {
                    $aluno->restore();
                }
                # Atualiza a turma com a matrícula atual
                $aluno->turma_id = $turma->id;
                $aluno->save();
            } else {
                Aluno::create(['user_id' => $usuario->id, 'turma_id' => $turma->id]);
            }
        }

        $usuario->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'matricula' => $request->input('matricula'),
            'role_id' => $roleNova
        ]);

        return back()->with('message', 'Usuário atualizado com sucesso!');   
    }
}