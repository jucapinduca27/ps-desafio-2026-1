<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => (string) \Illuminate\Support\Str::uuid(),
            'name' => fake()->randomElement(['Bola de Basquete','Camisa de Time','Chuteira Nike']),
            'brand' => fake()->company(),
            'price' => fake()->randomFloat(2,50,500),
            'image'=> 'https://via.placeholder.com/640x480.png',
            'release_year'=> fake()->year(),
            'quantity'=> fake()->numberBetween(1,100),
            'category_id' => \App\Models\Category::inRandomOrder()->first()->id,
        ];
    }
}
