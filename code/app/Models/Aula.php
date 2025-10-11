<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Aula extends Model
{
    use HasFactory;

    protected $table = 'aulas';

    protected $fillable = [
        'dia',
        'turno',
        'sala',
        'classroom',
        'materia_id',
        'turma_id',
        'professor_id'
    ];

    public function turma() {
        return $this->belongsTo(Turma::class, 'turma_id')->withTrashed();
    }

    public function materia() {
        return $this->belongsTo(Materia::class, 'materia_id')->withTrashed();
    }

    public function professor() {
        return $this->belongsTo(Professor::class, 'professor_id')->withTrashed();
    }
}
