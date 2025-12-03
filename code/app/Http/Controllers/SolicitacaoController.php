<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

use App\Models\Solicitacao;
use App\Models\Professor;

class SolicitacaoController extends Controller
{

    private function validateSolicitacao(array $input, string $context) {
        $rules = [];
        $messages = [];

        if ($context === 'store') {
            $rules = ['descricao' => ['required']];
            $messages = ['descricao.required' => 'Campo descrição obrigatório'];
        }

        if ($context === 'update') {
            $rules = [
                'status' => ['required', Rule::in(['em_analise', 'aprovada', 'reprovada'])], 
            ];
            $messages = [
                'status.required' => 'Campo status obrigatório',
                'status.in' => 'Status inválido',
            ];
        }

        return Validator::make($input, $rules, $messages);
    }


    public function index() {
        $usuario = auth()->user();
        $lista_solicitacoes = Solicitacao::with('professor.user:id,name')->get();

        switch ($usuario->role_id) {
            case 2:
                $lista_solicitacoes = Solicitacao::where('professor_id', $usuario->professor->id)->with('professor.user:id,name')->get();
                break;
            case 3:
                $lista_solicitacoes = Solicitacao::with('professor.user:id,name')->get();
                break;
        }

        return Inertia::render('Solicitacoes', ['lista_solicitacoes' => $lista_solicitacoes, 'role_id' => $usuario->role_id]);
    }


    public function store(Request $request) {
        $input = $request->all();
        $validator = $this->validateSolicitacao($input, 'store');
        
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $user = auth()->user();
        $professor = Professor::where('user_id', $user->id)->first();

        if (!$professor) {
            return redirect()->back()->withErrors(['professor' => 'Professor não encontrado para o usuário atual.']);
        }

        $solicitacao = Solicitacao::create([
            'descricao' => $input['descricao'],
            'status' => 'em_analise',
            'professor_id' => $professor->id
        ]);

        return redirect()->back()->with('success');  
    }

    public function update(Request $request, Solicitacao $solicitacao) {
        $input = $request->all();
        $validator = $this->validateSolicitacao($input, 'update');

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $solicitacao->update([
            'status' => $input['status'],
            'descricao' => $input['descricao']
        ]);

        return redirect()->back()->with('success');   
    }


    function destroy(Solicitacao $solicitacao) {
        $solicitacao->delete();
        return redirect()->back()->with('success');
    }

}