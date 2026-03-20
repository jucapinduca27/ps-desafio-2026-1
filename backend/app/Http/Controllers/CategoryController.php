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
        $data = $request->validated();
        $category = $this->category->create($data);
        return response()->json(data:$category,status:Response::HTTP_CREATED);
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
        $category = $this->category->findOrFail($id);
        $data = $request->validated();
        $category->update($data);
        return response()->json(data: $category, status: Response::HTTP_OK);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $category = $this->category->findOrFail($id);
        $category->delete();
        return response()->json(data: ['Message'=> 'Categoria deletada!']);

    }
}
