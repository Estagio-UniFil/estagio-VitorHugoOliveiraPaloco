<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Professor extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'professores';

    protected $fillable = [
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function materias() {
        return $this->hasMany(Materia::class, 'professor_id');
    }

    public function solicitacoes() {
        return $this->hasMany(Solicitacao::class, 'professor_id');
    }
}
