<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

Route::prefix('api')->group(function (){
    Route::apiResource('categories', CategoryController::class)->only(['index', 'show']); // cliente-público
    Route::apiResource('products', ProductController::class)->only(['index', 'show']); // cliente-público

    Route::middleware(['auth:sanctum', 'can:admin'])->group(function () { // admin-config depois?
    Route::apiResource('users', UserController::class);
    Route::apiResource('categories', CategoryController::class)->except(['index', 'show']);
    Route::apiResource('products', ProductController::class)->except(['index', 'show']);
 });
});


