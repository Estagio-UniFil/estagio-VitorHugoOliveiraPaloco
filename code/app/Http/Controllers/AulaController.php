<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use App\Models\Aula;
use App\Models\Turma;
use App\Models\Materia;
use App\Models\Professor;

class AulaController extends Controller
{
    private function validateAula(array $input) {
        return Validator::make($input, [
            'dia' => ['required'],
            'turno' => ['required'],
            'sala' => ['required'],
            'materia_id' => ['required', Rule::exists(Materia::class, 'id')->whereNull('deleted_at')],
            'turma_id' => ['required', Rule::exists(Turma::class, 'id')->whereNull('deleted_at')]
        ], 
        [
            'dia.required' => 'Campo dia obrigatório',
            'turno.required' => 'Campo turno obrigatório',
            'sala.required' => 'Campo sala obrigatório',
            'materia_id.required' => 'Campo matéria obrigatório',
            'turma_id.required' => 'Campo turma obrigatório'
        ]);
    }

    public function store(Request $request, Turma $turma) {
        $input = $request->all();
        $validator = $this->validateAula($input);

        $materia = Materia::findOrFail($input['materia_id']);
        $professor = $input['professor_id'] ?? $materia->professor_id;
        
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $aula = Aula::create([
            'dia' => $input['dia'],
            'turno' => $input['turno'],
            'sala' => $input['sala'],
            'classroom' => $input['classroom'] ?? null,
            'materia_id' => $materia->id,
            'turma_id' => $turma->id,
            'professor_id' => $professor
        ]);

        return redirect()->back()->with('success');  
    }

    public function update(Request $request, Turma $turma, $aulaId) {
        $input = $request->all();

        // Busca a aula dentro da turma
        $aula = $turma->aulas()->findOrFail($aulaId);

        $validator = $this->validateAula($input);

        $materia = Materia::findOrFail($input['materia_id'] ?? $aula->materia_id);
        $professor = $input['professor_id'] ?? $materia->professor_id;

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $aula->update([
            'dia' => $input['dia'],
            'turno' => $input['turno'],
            'sala' => $input['sala'],
            'classroom' => $input['classroom'] ?? null,
            'materia_id' => $materia->id,
            'professor_id' => $professor
        ]);

        return redirect()->back()->with('success');
    }


    public function destroy(Turma $turma, $aulaId) {
        $aula = $turma->aulas()->findOrFail($aulaId);
        $aula->delete();

        return redirect()->back()->with('success');
    }
}