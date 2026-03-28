<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    protected $category;

    public function __construct(Category $category)
    {
         $this->category = $category; // construtor criado
    }
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse// vai listar todas categorias no bd
    {
        $categories = $this->category->all();
        return response()->json(data:$categories, status: Response::HTTP_OK); 
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request): JsonResponse
    {
        $validated = $request->validate(['name' => 'required|string|unique:categories']);
        $category = Category::create($validated);
        return response()->json($category);
    }
    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $category = $this->category->findOrFail($id); 
        return response()->json(data:$category, status: Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = Category::findOrFail($id);
        $validated = $request->validate([
            'name'=> 'required|string|max:255|unique:categories,name,' .$category->id,
        ]);
        $category->update($validated);
        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $category = $this->category->findOrFail($id);
        if(!$category){ // Se a categoria não existir, não dá pra deletar
            return response()->json(['message'=>'Categoria não encontrada']);
        }
        if($category->products()->count()> 0){ // Se a categoria tiver produtos vinculados, não dá pra deletar
            return response()->json([
                'error'=>'Operação não permitida!',
                'message' => 'Tal categoria possui produtos vinculados, por isso não pode ser deletada'
            ]);
        }
        $category->delete();
        return response()->json(data: ['Message'=> 'Categoria deletada!']);

    }
}
