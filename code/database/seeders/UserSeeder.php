<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Aluno;
use App\Models\Professor;
use App\Models\Turma;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $turmas = Turma::all();

        // Usuários fixo
        $usersFixos = [
            ['name' => 'Vitor Hugo Oliveira Paloco', 'matricula' => '231072104', 'email' => 'vitor.paloco@edu.unifil.br', 'password' => Hash::make('teste123'), 'role_id' => 3],
            ['name' => 'Simone Tanaka', 'matricula' => '231000011', 'email' => 'simone.tanaka@unifil.br', 'password' => Hash::make('teste123'), 'role_id' => 3],
            ['name' => 'Ricardo Petri', 'matricula' => '231000012', 'email' => 'ricardo.petri@unifil.br', 'password' => Hash::make('teste123'), 'role_id' => 2],
            ['name' => 'Pedro Henrique Ramoni Ouro', 'matricula' => '231072392', 'email' => 'pedro.ramoni@edu.unifil.br', 'password' => Hash::make('teste123'), 'role_id' => 1],
        ];

        foreach ($usersFixos as $userFixo) {
            $id = DB::table('users')->insertGetId(array_merge($userFixo, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));

            if ($userFixo['role_id'] == 1) {
                DB::table('alunos')->insert([
                    'user_id' => $id,
                    'turma_id' => 1,
                    'created_at' => now()
                ]);
            } else {
                DB::table('professores')->insert([
                    'user_id' => $id,
                    'created_at' => now()
                ]);
            }
        }

        // // Usuários aleatórios
        // User::factory()->count(2)->create(['role_id' => 3])->each(function ($user) {
        //     $user->professor()->create([]);
        // });

        // User::factory()->count(10)->create(['role_id' => 2])->each(function ($user) {
        //     $user->professor()->create([]);
        // });

        // User::factory()->count(70)->create(['role_id' => 1])->each(function ($user) use ($turmas) {
        //     $user->aluno()->create([
        //         'turma_id' => $turmas->random()->id
        //     ]);
        // });
    }
}
