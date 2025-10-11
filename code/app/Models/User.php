<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'matricula',
        'email',
        'password',
        'role_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function aluno()
    {
        return $this->hasOne(Aluno::class)->withTrashed();
    }

    public function professor()
    {
        return $this->hasOne(Professor::class)->withTrashed();
    }

    public function acesso($rota)
    {
        return $this->role->rotas->contains('rota', $rota);
    }

    public static function matricula_info($matricula)
    {
        $ano = Str::of($matricula)->substr(0, 2);
        $entrada = Str::of($matricula)->substr(2, 1);
        $codigo_curso = Str::of($matricula)->substr(3, 3);

        return $ano . $entrada . $codigo_curso;
    }
}