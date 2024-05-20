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
        Schema::create('conacts', function (Blueprint $table) {
            $table->id();

            $table->string('phone');
            $table->string('email');
            $table->string('adres');
            $table->string('telegram');
            $table->string('vk');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conacts');
    }
};
