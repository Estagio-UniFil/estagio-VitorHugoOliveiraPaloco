<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

use App\Models\Turma;
use App\Models\Aluno;
use App\Models\Aula;
use App\Models\Materia;
use App\Models\Professor;

class TurmaController extends Controller
{
    private function validateTurma(array $input, $ignoreId = null) {
        return Validator::make($input, [
            'nome' => ['required', 'string', 'max:255', Rule::unique(Turma::class)->whereNull('deleted_at')->ignore($ignoreId)],
            'codigo_entradas'   => ['array', 'required'],
            'codigo_entradas.*' => ['string', 'max:6', 'distinct'],
        ], 
        [
            'nome.required' => 'Campo nome obrigatório',
            'nome.unique' => 'Já existe uma turma com este nome',
            'codigo_entradas.required' => 'Campo código de entradas obrigatório',
            'codigo_entradas.array' => 'O campo código de entradas deve ser um array',
            'codigo_entradas.*.distinct' => 'Os códigos de entrada não podem se repetir',
            'codigo_entradas.*.max' => 'Cada código de entrada deve ter no máximo 6 caracteres',
        ]);
    }

    public function index() {
        $lista_turmas = Turma::get();
        return Inertia::render('Turmas', ['lista_turmas' => $lista_turmas]);
    }

    public function store(Request $request) {
        $input = $request->all();

        $turma = Turma::onlyTrashed()
            ->where('nome', $input['nome'])
            ->first();

        if ($turma) {
            $turma->restore();
            return $this->update($request, $turma);
        } 

        $validator = $this->validateTurma($input);
        
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $turma = Turma::create([
            'nome' => $input['nome'],
            'codigo_entradas' => $input['codigo_entradas']
        ]);

        return redirect()->back()->with('success');  
    }

    function update(Request $request, Turma $turma) {
        $input = $request->all();
        $validator = $this->validateTurma($input, $turma->id); 

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $turma->update([
            'nome' => $input['nome'],
            'codigo_entradas' => $input['codigo_entradas']
        ]);

        return redirect()->back()->with('success'); 
    }

    function destroy(Turma $turma) {
        $turma->delete();
        return redirect()->route('turmasIndex')->with('success');   
    }

    function show(Turma $turma) {
        $aulas = Aula::where('turma_id', $turma->id)
            ->with(['materia', 'professor.user'])
            ->get()
            ->map(function($aula) {
                return [
                    'id' => $aula->id,
                    'dia' => $aula->dia,
                    'turno' => $aula->turno,
                    'sala' => $aula->sala,
                    'classroom' => $aula->classroom,
                    'materia' => $aula->materia->nome ?? 'Sem matéria',
                    'materia_id' => $aula->materia->id ?? null,
                    'professor' => $aula->professor?->user?->name ?? 'Sem professor',
                    'professor_id' => $aula->professor_id ?? null
                ];
            });

        $materias = Materia::select('id', 'nome')->orderBy('nome')->get();
        $professores = Professor::with('user:id,name')
            ->get()
            ->map(fn($p) => ['id' => $p->id, 'nome' => $p->user->name]);

        return Inertia::render('TurmaDetalhes', [
            'turma' => $turma,
            'aulas' => $aulas,
            'materias' => $materias,
            'professores' => $professores
        ]);
    }

}