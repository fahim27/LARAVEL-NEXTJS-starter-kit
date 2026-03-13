<?php

use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

// Route::middleware("web")->group(function () {

// });

Route::controller(PostController::class)->prefix('posts')->group(function () {
    Route::get("", 'index');
    Route::get("single-post/{id}", 'singlePost');
});

Route::middleware(['auth:sanctum'])->get('/users', function (Request $request) {
    return $request->user();
});

Route::get('/debug-auth', function (Request $request) {
    return [
        'authenticated_via_web' => Auth::guard('web')->check(),
        'authenticated_via_sanctum' => Auth::guard('sanctum')->check(),
        'session_id' => session()->getId(),
        'user' => $request->user(),
    ];
});

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(UserController::class)->prefix('user')->group(function () {
        Route::get('dashboard', 'dashboard');
        Route::get('profile', 'profile');
        Route::post('logout', 'logout');
    });
});
