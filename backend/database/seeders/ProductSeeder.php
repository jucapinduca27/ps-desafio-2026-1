<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vestuario = Category::where('name','Vestuário')->first();
        $calcados = Category::where('name','Calçados')->first();
        $equipamentos = Category::where('name','Equipamentos')->first();
        Product::create([
            'name' => 'Chuteira Nike Phantom GX',
            'brand' => 'Nike',
            'price' => 899.90,
            'sport' => 'Futebol',
            'gender' => 'Masculino',
            'type' => 'Chuteira',
            'image_url' => 'https://images.nike.com/exemplo-chuteira.png', 
            'release_year' => '2024',
            'quantity' => 15,
            'category_id' => $calcados->id,
        ]);
        Product::create([
            'name' => 'Smartwatch Mi Band',
            'brand' => 'Xiaomi',
            'price' => 1299.90,
            'sport' => 'Corrida',
            'gender' => 'Unissex',
            'type' => 'Relógio',
            'image_url' => 'https://images.nike.com/exemplo-jordan.png',
            'release_year' => '2024',
            'quantity' => 8,
            'category_id' => $equipamentos->id,
        ]);
        
        Product::create([
            'name' => 'Camisa Seleção Brasileira Volei',
            'brand' => 'Nike',
            'price' => 349.90,
            'sport' => 'Vôlei',
            'gender' => 'Feminino',
            'type' => 'Camiseta',
            'image_url' => 'https://exemplo.com/camisa-brasil.png',
            'release_year' => '2024',
            'quantity' => 25,
            'category_id' => $vestuario->id,
        ]);
        Product::create([
            'name' => 'Óculos natação',
            'brand' => 'Reebok',
            'price' => 349.90,
            'sport' => 'Natação',
            'gender' => 'Unissex',
            'type' => 'Óculos',
            'image_url' => 'https://exemplo.com/camisa-brasil.png',
            'release_year' => '2000',
            'quantity' => 30,
            'category_id' => $equipamentos->id,
        ]);
        Product::create([
            'name' => 'Bola Basquete',
            'brand' => 'Adidas',
            'price' => 349.90,
            'sport' => 'Basquete',
            'gender' => 'Unissex',
            'type' => 'Bola',
            'image_url' => 'https://exemplo.com/camisa-brasil.png',
            'release_year' => '2024',
            'quantity' => 25,
            'category_id' => $equipamentos->id,
        ]);
        Product::create([
            'name' => 'Camisa Lakers',
            'brand' => 'Adidas',
            'price' => 349.90,
            'sport' => 'Basquete',
            'gender' => 'Unissex',
            'type' => 'Camiseta',
            'image_url' => 'https://exemplo.com/camisa-brasil.png',
            'release_year' => '2024',
            'quantity' => 25,
            'category_id' => $vestuario->id,
        ]);
    }
}
