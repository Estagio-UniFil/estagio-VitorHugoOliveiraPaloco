<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

use App\Models\Materia;
use App\Models\Professor;

class MateriaController extends Controller
{
    private function validateMateria(array $input, $ignoreId = null) {
        return Validator::make($input, [
            'nome' => ['required', 'string', 'max:255', Rule::unique(Materia::class)->whereNull('deleted_at')->ignore($ignoreId)],
            'codigo' => ['required', 'string', 'max:255', Rule::unique(Materia::class)->whereNull('deleted_at')->ignore($ignoreId)],
            'curso' => ['required'],
            'tipo' => ['required'],
            'professor_id' => ['required', Rule::exists(Professor::class, 'id')->whereNull('deleted_at')]
        ], [
            'nome.unique' => 'Já existe uma matéria com este nome',
            'codigo.unique' => 'Já existe uma matéria com este código',
            'nome.required' => 'Campo nome obrigatório',
            'codigo.required' => 'Campo código obrigatório',
            'curso.required' => 'Campo curso obrigatório',
            'tipo.required' => 'Campo tipo obrigatório',
            'professor_id.required' => 'Campo professor obrigatório'
        ]);
    }

    public function index() {
        $lista_materias = Materia::with(['professor.user:id,name'])->get();
        $lista_professores = Professor::with('user:id,name')->get();
    
        return Inertia::render('Materias', ['lista_materias' => $lista_materias, 'lista_professores' => $lista_professores]);
    }

    public function store(Request $request) {
        $input = $request->all();

        $materia = Materia::onlyTrashed()
            ->where(function ($query) use ($input) { 
                $query->where('nome', $input['nome'])->where('codigo', $input['codigo']);
            })->first();

        if ($materia) {
            $materia->restore();
            return $this->update($request, $materia);
        } 

        $validator = $this->validateMateria($input);
        
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $materia = Materia::create([
            'nome' => $input['nome'],
            'codigo' => $input['codigo'],
            'curso' => $input['curso'],
            'tipo' => $input['tipo'],
            'professor_id' => $input['professor_id']
        ]);

        return redirect()->back()->with('success');
    
    }

    function update(Request $request, Materia $materia) {
        $input = $request->all();
        $validator = $this->validateMateria($input, $materia->id); 

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $materia->update([
            'nome' => $input['nome'],
            'codigo' => $input['codigo'],
            'curso' => $input['curso'],
            'tipo' => $input['tipo'],
            'professor_id' => $input['professor_id']
        ]);

        return back()->with('success', 'Matéria atualizada com sucesso!');  
    }

    function destroy(Materia $materia) {
        $materia->delete();
        return back()->with('success', 'Matéria excluída com sucesso!');
    }
}