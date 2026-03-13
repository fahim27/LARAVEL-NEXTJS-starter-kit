<?php

use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;



Route::controller(PostController::class)->prefix('posts')->group(function () {
    Route::get("", 'index');
    Route::get("single-post/{id}", 'singlePost');
});

Route::post('/user/register', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('user', 'user');
        Route::post('update-profile', 'updateProfile');
        Route::post('change-password', 'updatePassword');
        Route::post('logout', 'logout');
    });
});
