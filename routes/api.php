<?php

use App\Http\Controllers\ApplicationCotroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Task;

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
Route::post('/task', [Task::class, 'AddTask']);
Route::post('/task_img', [Task::class, 'AddIMGforTask']);
Route::post('/application', [ApplicationCotroller::class, 'AddApplication']);

Route::patch('/concept', [Controller::class, 'PatchConcept']);
Route::patch('/task', [Task::class, 'PatchTask']);

Route::delete('/concept', [Controller::class, 'DelConcept']);
Route::delete('/task', [Task::class, 'DelTask']);
Route::delete('/task_img', [Task::class, 'DelIMG']);