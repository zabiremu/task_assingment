<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', 'App\Http\Controllers\Auth\AuthController@login');
Route::post('/register', 'App\Http\Controllers\Auth\AuthController@register');
Route::post('/logout', 'App\Http\Controllers\Auth\AuthController@logout');
Route::get('/users', 'App\Http\Controllers\Auth\AuthController@users');

Route::get('/task', 'App\Http\Controllers\Task\TaskController@index');
Route::post('/create-task', 'App\Http\Controllers\Task\TaskController@create');
Route::get('/edit/{id}', 'App\Http\Controllers\Task\TaskController@edit');
Route::post('/update/{id}', 'App\Http\Controllers\Task\TaskController@update');
Route::get('/destroy/{id}', 'App\Http\Controllers\Task\TaskController@destroy');