<?php

use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

// header("Access-Control-Allow-Origin: *");

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group.
|
*/


Route::post('/user/register', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);

Route::controller(PostController::class)->prefix('posts')->group(function () {
    Route::get("", 'index');
    Route::get("single-post/{id}", 'singlePost');
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
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
