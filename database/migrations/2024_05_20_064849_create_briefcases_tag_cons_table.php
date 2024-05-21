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
        Schema::create('briefcases_tag_cons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('briefcase_id')->constrained('briefcases')->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();
            $table->timestamps();
        });
        // Schema::create('briefcases_tag_cons', function (Blueprint $table) {
        //     $table->id();
        //     $table->unsignedBigInteger('briefcase_id');
        //     $table->unsignedBigInteger('tag_id');

        //     $table->foreign('briefcase_id')->references('id')->on('briefcases')->onDelete('cascade');
        //     $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('briefcases_tag_cons');
    }
};
