<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Socialite;


class UserController extends Controller
{

    public function user()
    {
        return jsonResponse(true, "User Data", [
            'user' => auth()->user(),
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

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            return jsonResponse(true, "Login successful", [
                'user' => $user,
                'token' => $token
            ]);
        }

        return jsonResponse(false, "Login failed");
    }

    public function googleLogin(Request $request)
    {
        try {
            $token      = $request->token;
            $googleUser = Socialite::driver('google')->userFromToken($token);
            $id         = $googleUser->getId();

            $user = User::where('provider_id', $id)->where('provider', 'google')->first();

            if (!$user) {
                $user = new User();
                $user->name        = $googleUser->getName();
                $user->email       = $googleUser->getEmail();
                $user->provider    = 'google';
                $user->provider_id = $id;
                $user->password    = Hash::make(uniqid()); // Generate a random password
                $user->save();
            }
            $token = $user->createToken('auth_token')->plainTextToken;
            return jsonResponse(true, "Login successful", [
                'user' => $user,
                'token' => $token
            ]);
        } catch (\Exception $e) {
            return jsonResponse(false, "Google login failed: " . $e->getMessage());
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return jsonResponse(true, "Logged out successfully");
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validator = Validator::make($request->all(), [
            'name'        => 'required|required|string|max:255',
            'email'       => 'required|required|string|email|max:255|unique:users,email,' . $user->id,
            'address'     => 'required|string|max:255',
            'city'        => 'required|string|max:255',
            'state'       => 'required|string|max:255',
            'postal_code' => 'required|string|max:20',
            'country'     => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return jsonResponse(false, $validator->errors()->all());
        }

        $user->name        = $request->name;
        $user->email       = $request->email;
        $user->address     = $request->address;
        $user->city        = $request->city;
        $user->state       = $request->state;
        $user->postal_code = $request->postal_code;
        $user->country     = $request->country;
        $user->save();

        return jsonResponse(true, "Profile updated successfully", [
            'user' => $user,
        ]);
    }

    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'current_password' => 'required|string',
            'password'         => 'required|string|min:5|confirmed',
        ]);

        if ($validator->fails()) {
            return jsonResponse(false, $validator->errors()->all());
        }

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return jsonResponse(false, "Current password is incorrect");
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return jsonResponse(true, "Password updated successfully");
    }
}
