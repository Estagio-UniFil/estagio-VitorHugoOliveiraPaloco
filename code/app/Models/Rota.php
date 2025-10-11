<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rota extends Model
{
    protected $table = 'rotas';
    protected $fillable = ['rota'];

    public function users() {
        return $this->hasMany(User::class);
    }

    public function roles() {
        return $this->belongsToMany(Role::class, 'roles_rotas', 'rota_id', 'role_id');
    }

}
