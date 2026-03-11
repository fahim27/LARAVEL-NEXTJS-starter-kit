<?php

use Illuminate\Support\Facades\Route;

// header("Access-Control-Allow-Origin: *");


Route::get('/', function () {
    echo time();
});
