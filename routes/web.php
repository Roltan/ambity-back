<?php

use App\Http\Controllers\ApplicationCotroller;
use App\Http\Controllers\Controller;
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

Route::get('/', [Controller::class, 'GetIndex']);
Route::get('/cases', [Controller::class, 'GetCases']);
Route::get('/client', [Controller::class, 'GetClient']);
Route::get('/vacancy', [Controller::class, 'GetVacancy']);
Route::get('/case/{urlCase}', [Controller::class, 'GetCase']);
Route::get('/services/{services}', [Controller::class, 'GetServices']);