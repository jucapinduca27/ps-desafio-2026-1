<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Product::with('category'); // eager loading 

        if ($request->filled('sport')){ // Add filtro por tipo de esporte
                $query->where('sport', $request->sport);
        }
        if ($request->filled('gender')){ // Add filtro por gênero
                $query->where('gender', $request->gender);
        }
        if ($request->filled('type')){ // Add filtro por tipo de vestimenta
                $query->where('type', $request->type);
        }
        if ($request->filled('category_id')){
                $query->where('category_id', $request->category_id);
        }
        return ProductResource::collection($query->paginate(20));
        //$products = $query->get();
        //return ProductResource::collection($products); // usar collection para mostrar lista de produtos
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image_url' =>  'nullable|url', // Deixar required desativado por enquanto
            'release_year' => 'required|integer',
            'quantity' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
            'sport' => 'nullable|string',
            'gender'=> 'nullable|string',
            'type' => 'nullable|string'
            
        ]);
        $product = Product::create($validated);
        return new ProductResource($product);
    }
    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return new ProductResource($product->load('category'));
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image_url' =>  'nullable|url', // Adicionar link imagem direto (image ou image_url?)
            'release_year' => 'required|integer',
            'quantity' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
            'sport' => 'nullable|string',
            'gender'=> 'nullable|string',
            'type' => 'nullable|string'
        ]);
        $product->update($validated);
        return new ProductResource($product);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Produto removido!']);
    }
}
