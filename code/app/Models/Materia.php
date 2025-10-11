<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Materia extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'materias';

    protected $fillable = [
        'nome',
        'codigo',
        'curso',
        'tipo',
        'professor_id'
    ];

    public function professor() {
        return $this->belongsTo(Professor::class, 'professor_id')->withTrashed();
    }
}
