<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json(Auth::user(), Response::HTTP_OK);
    });
});

/*Route::get(uri: '/category', action: [CategoryController::class, 'index']);
Route::post(uri: '/category', action: [CategoryController::class,'store']);
Route::get(uri: '/category/{id}',action: [CategoryController:: class, 'show']);
Route::put(uri: '/category/{id}', action:[CategoryController:: class, 'update']);
Route::delete(uri:'/category/{id}', action:[CategoryController:: class, 'destroy']);*/

Route::apiResource(name:'/categories', controller:CategoryController::class);
Route::apiResource(name:'/products', controller:ProductController::class);

// Dentro do middleware, precisaria de autenticação para os requests!

Route::middleware(['auth:sanctum', 'can:admin'])->group(function () {
    Route::apiResource('/users', UserController::class);
});

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';
