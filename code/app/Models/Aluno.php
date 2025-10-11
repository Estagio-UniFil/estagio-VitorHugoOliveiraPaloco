<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Aluno extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'alunos';

    protected $fillable = [
        'user_id',
        'turma_id'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function turma() {
        return $this->belongsTo(Turma::class, 'turma_id');
    }
}
