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
            ['rota' => 'dashboard'],

            ['rota' => 'usuariosIndex'],
            ['rota' => 'usuariosStore'],
            ['rota' => 'usuariosUpdate'],
            ['rota' => 'usuariosDestroy'],

            ['rota' => 'materiasIndex'],
            ['rota' => 'materiasStore'],
            ['rora' => 'materiasUpdate'],
            ['rota' => 'materiasDestroy'],

            ['rota' => 'solicitacoesIndex'],
            ['rota' => 'solicitacoesStore'],
            ['rota' => 'solicitacoesUpdate'],
            ['rota' => 'solicitacoesDestroy'],

            ['rota' => 'turmasIndex'],
            ['rota' => 'turmasStore'],
            ['rota' => 'turmasUpdate'],
            ['rota' => 'turmasDestroy'],
            ['rota' => 'turmasShow'],

            ['rota' => 'aulasStore'],
            ['rota' => 'aulasUpdate'],
            ['rota' => 'aulasDestroy']
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

            ['role_id' => 3, 'rota_id' => 14],
            ['role_id' => 3, 'rota_id' => 15],
            ['role_id' => 3, 'rota_id' => 16],
            ['role_id' => 3, 'rota_id' => 17],
            ['role_id' => 3, 'rota_id' => 18],

            ['role_id' => 3, 'rota_id' => 19],
            ['role_id' => 3, 'rota_id' => 20],
            ['role_id' => 3, 'rota_id' => 21]
        ]);
    }
}
