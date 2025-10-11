<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\Aluno;
use App\Models\Professor;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Executa primeiro os outros Seeders
        $this->call(RoleSeeder::class);
        $this->call(RotaSeeder::class);
        $this->call(TurmaSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(MateriaSeeder::class);
    }
}