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
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('brand');
            $table->decimal('price',10,2);
            $table->string('image')->nullable();
            $table->integer('release_year'); // Colocar integer?
            $table->integer('quantity')->default(0);
            $table->string('sport')->nullable();
            $table->string('gender')->nullable();
            $table->string('type')->nullable();
            $table->foreignUuid('category_id')->constrained()->onDelete('restrict'); //cascade permitia que eu apagasse a categoria com produto dentro
            $table->timestamps(); //categoryid constrained to categories?

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
