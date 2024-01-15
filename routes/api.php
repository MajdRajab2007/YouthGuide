<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

Route::get('users/{email}', function (Request $request)
{
    $user = User::where('email', $request->email)->first();

    if ($user) {
        return response()->json([
            'status' => true,
            'message' => 'User found successfully.',
            'data' => $user
        ]);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'User not found.',
        ]);
    }
}
);


Route::get('user/', function (Request $request) {

    $users = User::all();

    return response()->json($users);
});
