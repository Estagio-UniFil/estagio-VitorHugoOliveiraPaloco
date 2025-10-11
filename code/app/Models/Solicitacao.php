<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Solicitacao extends Model
{
    use HasFactory;

    protected $table = 'solicitacoes';

    protected $fillable = [
        'descricao',
        'status',
        'professor_id'
    ];

    public function professor() {
        return $this->belongsTo(Professor::class, 'professor_id')->withTrashed();
    }
}
