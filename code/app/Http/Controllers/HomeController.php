<?php

namespace App\Http\Controllers;

use App\Models\Aula;
use App\Models\Turma;
use App\Models\Materia;
use App\Models\Professor;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $usuario = auth()->user();

        switch ($usuario->role_id) {
            case 1:
                $minhas_aulas = Aula::where('turma_id', $usuario->aluno->turma_id)
                    ->with(['materia', 'professor.user'])
                    ->get()
                    ->map(function($aula) {
                        return [
                            'dia' => $aula->dia,
                            'turno' => $aula->turno,
                            'sala' => $aula->sala,
                            'classroom' => $aula->classroom,
                            'materia' => $aula->materia->nome ?? 'Sem matéria',
                            'professor' => $aula->professor?->user?->name ?? 'Sem professor',
                            'turma' => $aula->turma?->nome
                        ];
                    });
                break;
            default:
                $minhas_aulas = Aula::where('professor_id', $usuario->professor->id)
                    ->with(['materia', 'professor.user'])
                    ->get()
                    ->map(function($aula) {
                        return [
                            'dia' => $aula->dia,
                            'turno' => $aula->turno,
                            'sala' => $aula->sala,
                            'classroom' => $aula->classroom,
                            'materia' => $aula->materia->nome ?? 'Sem matéria',
                            'professor' => $aula->professor?->user?->name ?? 'Sem professor',
                            'turma' => $aula->turma?->nome
                        ];
                    });
                break;
        }

        return Inertia::render('MinhasAulas', ['aulas' => $minhas_aulas]);
    }
}