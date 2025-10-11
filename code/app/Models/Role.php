<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $fillable = ['nome'];

    public function rotas() {
        return $this->belongsToMany(Rota::class, 'roles_rotas', 'role_id', 'rota_id');
    }

}
