<?php

namespace Database\Factories;

use App\Models\Briefcase;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BriefcasesTagCon>
 */
class BriefcasesTagConFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'briefcase_id' => Briefcase::get()->random()->id,
            'tag_ig' => Tag::get()->random()->id
        ];
    }
}
