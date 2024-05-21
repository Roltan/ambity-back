<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Briefcase>
 */
class BriefcaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'img' => $this->faker->imageUrl(),
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->text(),
            'url' => $this->faker->word(),
            'video' => $this->faker->imageUrl(),
            'html' => $this->faker->text(),
            'seo_title' => $this->faker->word(),
            'seo_description' => $this->faker->text(),
            'seo_image' => $this->faker->imageUrl(),
            'og_url' => $this->faker->url(),
            'og_image' => $this->faker->word(),
            'og_type' => $this->faker->imageUrl(),
            'og_title' => $this->faker->word(),
            'og_description' => $this->faker->text(),
        ];
    }
}
