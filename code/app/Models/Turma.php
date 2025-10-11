<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Turma extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'turmas';

    protected $fillable = [
        'nome',
        'codigo_entradas'
    ];

    protected $casts = [
        'codigo_entradas' => 'array'
    ];

    public function alunos() {
        return $this->hasMany(Aluno::class, 'turma_id');
    }

    public function aulas() {
        return $this->hasMany(Aula::class, 'turma_id');
    }
}
