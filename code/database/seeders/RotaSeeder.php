<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rotas')->insert([
            ['rota' => 'home'],

            ['rota' => 'usuarios.index'],
            ['rota' => 'usuarios.store'],
            ['rota' => 'usuarios.update'],
            ['rota' => 'usuarios.destroy'],

            ['rota' => 'materias.index'],
            ['rota' => 'materias.store'],
            ['rora' => 'materias.update'],
            ['rota' => 'materias.destroy'],

            ['rota' => 'solicitacoes.index'],
            ['rota' => 'solicitacoes.store'],
            ['rota' => 'solicitacoes.update'],
            ['rota' => 'solicitacoes.destroy'],
        ]);

        DB::table('roles_rotas')->insert([
            ['role_id' => 3, 'rota_id' => 1],
            ['role_id' => 2, 'rota_id' => 1],
            ['role_id' => 1, 'rota_id' => 1],

            ['role_id' => 3, 'rota_id' => 2],
            ['role_id' => 3, 'rota_id' => 3],
            ['role_id' => 3, 'rota_id' => 4],
            ['role_id' => 3, 'rota_id' => 5],

            ['role_id' => 3, 'rota_id' => 6],
            ['role_id' => 3, 'rota_id' => 7],
            ['role_id' => 3, 'rota_id' => 8],
            ['role_id' => 3, 'rota_id' => 9],

            ['role_id' => 3, 'rota_id' => 10],
            ['role_id' => 3, 'rota_id' => 11],
            ['role_id' => 3, 'rota_id' => 12],
            ['role_id' => 3, 'rota_id' => 13],
            
        ]);
    }
}
