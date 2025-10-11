<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TurmaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('turmas')->insert([
            ['nome' => 'Turma Mista - 2023 - Luigi', 'codigo_entradas' => json_encode(['231072', '231041'])],
            ['nome' => 'Turma CC - 2024 - Amanda', 'codigo_entradas' => json_encode(['241041', '242041'])],
            ['nome' => 'Turma ADS - 2025', 'codigo_entradas' => json_encode(['251454'])]
        ]);
    }
}
