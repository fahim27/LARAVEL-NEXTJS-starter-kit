<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;



Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'ok'
    ]);
});

Route::get('/', function () {
    return view('welcome');
});
