<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

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
        return response()->json($query->get(), 200);
        //return Product::all();
        //return Product::with('category')->get(); 
        /*$products = Product::with('category')->get();
        return response()->json($products);*/
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
            'image' =>  'nullable', // Deixar required desativado por enquanto
            'release_year' => 'required|integer',
            'quantity' => 'required|integer',
            'category_id' => 'required|exists:categories,id'
            
        ]);
        return Product::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = \App\Models\Product::find($id);
        dd($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Produto removido com sucesso!']);
    }
}
