<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('web')->group(function () {
    Route::post('/user/register', [UserController::class, 'register']);
    Route::post('/user/login', [UserController::class, 'login']);
});

Route::get('/', function () {
    return view('welcome');
});
