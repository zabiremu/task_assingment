<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
   public function login(Request $request)      
   {
       $credentials = $request->only('email', 'password');

       if (auth()->attempt(credentials: $credentials)) {
           $user = auth()->user();
           $token = $user->createToken('authToken')->accessToken;

           return response()->json([
               'user' => $user,
               'token' => $token
           ]);
       }

       return response()->json([
           'message' => 'Invalid credentials'
       ], 401);
   }

   public function register(Request $request){
        $Validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);
        if($Validator->fails()){
            return response()->json([
                'message' => $Validator->errors()->first()
            ], 400);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $token = $user->createToken('authToken')->accessToken;
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
   }

    public function logout(Request $request)
    {
         $request->user()->token()->revoke();
    
         return response()->json([
              'message' => 'Logged out'
         ]);
    }

    public function users(Request $request)
    {
        $user = User::latest()->get();
        return response()->json([
            'user' => $user
        ]);
    }
}
