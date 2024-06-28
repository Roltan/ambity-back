<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Briefcase;
use App\Models\BriefcasesTagCon;
use App\Models\ClientLogo;
use App\Models\Contact;
use App\Models\Tag;
use App\Models\Vacancy;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Briefcase::factory(10)->create();
        Tag::factory(5)->create();
        BriefcasesTagCon::factory(10)->create();
        ClientLogo::factory(5)->create();
        Contact::factory(1)->create();
        Vacancy::factory(5)->create();
    }
}
