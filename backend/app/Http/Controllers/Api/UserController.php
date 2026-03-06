<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        $request->validate([
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        $attempt = auth()->attempt(['email' => $request->email, 'password' => $request->password]);

        if (!$attempt) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
            ]);
        }

        $user = auth()->user();

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'data'    => [
                'token' => $user->createToken('auth_token')->plainTextToken,
                'user'  => $user
            ]
        ]);
    }
}
