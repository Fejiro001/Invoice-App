<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'payment_due' => $this->faker->dateTimeBetween('+1 day', '+1 month'),
            'description' => $this->faker->sentence(),
            'payment_terms' => $this->faker->numberBetween(1, 30),
            'client_name' => $this->faker->name(),
            'client_email' => $this->faker->unique()->safeEmail(),
            'status' => $this->faker->randomElement(['paid', 'pending', 'draft']),
            'sender_address' => json_encode([
                'street' => $this->faker->streetAddress(),
                'city' => $this->faker->city(),
                'postCode' => $this->faker->postcode(),
                'country' => $this->faker->country(),
            ]),
            'client_address' => json_encode([
                'street' => $this->faker->streetAddress(),
                'city' => $this->faker->city(),
                'postCode' => $this->faker->postcode(),
                'country' => $this->faker->country(),
            ]),
            'total' => $this->faker->randomFloat(2, 100, 20000),
        ];
    }
}
