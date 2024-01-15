<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\NormalUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
class AuthController extends Controller
{
public function register(Request $request)
    {
        
        $incomingFields = $request->validate([
            'name' => ['required', 'min:2', 'max:10', Rule::unique('users', 'name'), 'alpha'],
            'lName' => ['required', 'min:2', 'max:10', Rule::unique('users', 'lName'), 'alpha'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'min:8', 'max:200'],

        ]);


        $incomingFields['password'] = bcrypt($incomingFields['password']);

        $user = NormalUser::create($incomingFields);
        
        auth()->login($user);

        return redirect('http://localhost:3000/');
    }
    // login a user method
public function login(Request $request)
    {
        $incomingFields = $request->validate([
            'loginemail' => 'required',
            'loginpassword' => 'required'
        ]);
        if (auth()->attempt(['email' => $incomingFields['loginemail'], 'password' => $incomingFields['loginpassword']])) {
            return redirect('http://localhost:3000/');
        }
        else {

            return redirect('http://localhost:3000/signinfalse');
        }
        
    
}

    // logout a user method
    

    // get the authenticated user method
    public function user($id) {
        $user = User::find($id);
        
        return response()->json($user); 
    }
}
