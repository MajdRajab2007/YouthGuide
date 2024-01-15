<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostsController;
use App\Models\User;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware(['cors'])->prefix('auth')->group(function () {
// });


Route::get('users/{email}',[AuthController::class,'show']);

//find by tag name(video / graphic...)
Route::get('posts/tag/{tag_name}',[PostsController::class,'showByTag']);

//get post by tag and coding language
Route::get('posts/tag_lang/{tag_name}/{coding_language_name}',[PostsController::class,'showByTagAndLanguage']);

Route::get('posts/{id}',[PostsController::class,'showById']);
