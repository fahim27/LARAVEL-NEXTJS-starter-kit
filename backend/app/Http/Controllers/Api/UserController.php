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
        $validator = Validator::make($request->all(), [
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return jsonResponse(false, $validator->errors()->all());
        }

        // Explicitly use the 'web' guard to ensure the session is set
        if (!Auth::guard('web')->attempt($request->only('email', 'password'))) {
            return jsonResponse(false, "Invalid credentials");
        }

        // This is what makes the cookie "Authenticated"

        // 1. Link the user to the session
        $request->session()->regenerate();

        // 2. Add a dummy value to ensure the session isn't "empty"
        $request->session()->put('login_time', now()->timestamp);

        // 3. FORCE the driver to write the file right now
        $request->session()->save();

        return jsonResponse(true, "Login successful", ['user' => Auth::user()]);
    }
}
