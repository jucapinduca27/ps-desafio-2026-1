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
        Schema::table('products', function (Blueprint $table) { //after para organização visual
            $table->string('sport')->nullable()->after('price'); // Futebol, Basquete, Vôlei, Natação, Corrida etc
            $table->string('gender')->nullable()->after('sport'); // Gênero masculino, feminino ou unissex
            $table->string('type')->nullable()->after('gender'); // Vestuário, Calçados, Acessórios etc
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn(['sport','gender','type']);
        });
    }
};
