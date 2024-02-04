<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\NormalUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
class AuthController extends Controller
{
public function register(Request $request)
    {
        
        $incomingFields = $request->validate([
            'name' => ['required', 'min:2', 'max:10', Rule::unique('normal_users', 'name'), 'alpha'],
            'lName' => ['required', 'min:2', 'max:10', Rule::unique('normal_users', 'lName'), 'alpha'],
            'email' => ['required', 'email', Rule::unique('normal_users', 'email')],
            'password' => ['required', 'min:10', 'max:200'],

        ]);


        // $incomingFields['password'] = bcrypt($incomingFields['password']);
        // if($request->hasFile('image')){
        //     $incomingFields['image'] = $request->file('image')->store('images','public');
        // }

        
        $user = NormalUser::create($incomingFields);
        
        // $user->sendEmailVerificationNotification();

        return redirect('http://localhost:3000/');
    }
    // login a user method
public function login(Request $request)
    {
        $incomingFields = $request->validate([
            'loginemail' => 'required',
            'loginpassword' => 'required'
        ]);
        $credentials = [
            'email' => $request->loginemail,
            'password' => $request->loginpassword
        ];
        if (Auth::guard('NormalUser')->attempt($credentials)) {
            return redirect('http://localhost:3000/');
        }
        else {

            return redirect('http://localhost:3000/signinfalse');
        }
        
    
}
    // get the authenticated user method
    public function user($id) {
        $user = User::find($id);
        
        return response()->json($user); 
    }

    public function show(Request $request) {
        $user = NormalUser::where('email', $request->email)->first();

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

    // public function editUser(Request $request){
        
    // }
}
