<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'matricula' => fake()->unique()->numerify('231#######'),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            // role_id deve ser passado quando criar
        ];
    }

    /**
     * Define email conforme role
     */
    public function configure()
    {
        return $this->afterMaking(function ($user) {
            if (isset($user->role_id)) {
                if ($user->role_id == 1) {
                    $user->email = fake()->unique()->userName() . '@edu.unifil.br';
                } elseif (in_array($user->role_id, [2, 3])) {
                    $user->email = fake()->unique()->userName() . '@unifil.br';
                }
            }
        });
    }

}
