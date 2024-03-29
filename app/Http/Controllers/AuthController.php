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
            'occupation'=>['required'],
            'gender'=>['required'],
            'birthday'=>['required']


        ]);


        $incomingFields['password'] = bcrypt($incomingFields['password']);
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
        } else {

            return redirect('http://localhost:3000/signinfalse');
        }
    }
    // get the authenticated user method
    public function user($id)
    {
        $user = User::find($id);

        return response()->json($user);
    }

    public function show(Request $request)
    {
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
    public function editUser(Request $request)
    {
        // Retrieve the authenticated user
        $user = NormalUser::where('email', $request->email)->first();

        // Validate the incoming request
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Check if a new image file was uploaded
        if ($request->hasFile('image')) {
            // Get the new image file
            $image = $request->file('image');

            // Generate a unique filename for the new image
            $filename = uniqid() . '.' . $image->getClientOriginalExtension();

            // Move the new image file to the public/storage directory
            $image->storeAs('public/storage', $filename);

            // Update the user's image field with the new filename
            $user->image = $filename;
        }

        // Save the updated user to the database
        $user->save();

        // Return a response indicating success
        return response()->json([
            'status' => true,
            'message' => 'User updated successfully.',
        ]);
    }
    // public function editUser(Request $request){

    // }

    public function data(Request $request) {
        $user = NormalUser::where('email', $request->email)->first();

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'User not found.',
            ]);
        }
    }

    public function edit(Request $request) {
        $user = NormalUser::where('email',$request->email)->first();
        $incomingFields = $request->about;
        $user->about = $incomingFields;
        $user->save();
    }
}
