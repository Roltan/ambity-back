<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\task;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/concept', [Controller::class, 'AddConcept']);
Route::post('/task', [task::class, 'AddTask']);
Route::post('/task_img', [task::class, 'AddIMGforTask']);

Route::patch('/concept', [Controller::class, 'PatchConcept']);
Route::patch('/task', [task::class, 'PatchTask']);
