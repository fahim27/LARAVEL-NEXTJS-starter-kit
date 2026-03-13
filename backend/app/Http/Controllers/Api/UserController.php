<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function dashboard()
    {
        return response()->json([
            'success' => true,
            'data'    => [
                'user'  => auth()->user()
            ]
        ]);
    }
    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully',
            'data'    => [
                'token' => $user->createToken('auth_token')->plainTextToken,
                'user'  => $user
            ]
        ]);
    }

    public function login(Request $request)
    {
        dd(21);
        $validator = Validator::make($request->all(), [
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return jsonResponse(false, $validator->errors()->all());
        }

        $credentials = $request->only('email', 'password');

        // Explicitly use the 'web' guard to ensure the session is set
        if (Auth::attempt($credentials)) {
            // User authenticated successfully
            return jsonResponse(true, "Login successful", ['user' => Auth::user()]);
        } else {
            return jsonResponse(false, "Login failed");
        }

        $request->session()->regenerate();

        return jsonResponse(true, "Login successful", ['user' => Auth::user()]);
    }
}
