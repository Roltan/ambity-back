<?php

use App\Http\Controllers\ApplicationCotroller;
use App\Http\Controllers\Controller;
use App\Http\Controllers\task;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/concept', [Controller::class, 'GetConcept']);
Route::get('/task', [task::class, 'GetTasks']);
Route::get('/task/{id}', [task::class, 'GetTask']);
Route::get('/application', [ApplicationCotroller::class, 'GetApplication']);
