<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();

            $table->string('img');
            $table->string('h1');
            $table->string('h2');
            $table->string('url');
            
            $table->string('client');
            $table->string('services');
            $table->string('sait');
            $table->string('sait_url');
            $table->text('about_project');
            $table->text('purpose');
            $table->text('idea');
            $table->text('trademark_style');
            $table->string('guideline');
            $table->text('result');
            $table->text('team');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
