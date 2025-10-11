<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Professor;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Materia>
 */
class MateriaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cursos = ['CC', 'ES', 'ADS', 'Todas'];
        $tipos = ['Core', 'Flex'];

        return [
            'nome' => fake()->words(3, true), // gera algo como "Matemática Discreta Avançada"
            'codigo' => strtoupper(fake()->bothify('C######')), 
            'curso' => fake()->randomElement($cursos),
            'tipo' => fake()->randomElement($tipos),
            'professor_id' => Professor::inRandomOrder()->first()->id
        ];
    }
}
