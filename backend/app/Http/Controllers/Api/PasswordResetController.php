<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class PasswordResetController extends Controller
{

    public function findAccount(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return jsonResponse(false, "No account found with this email");
        }

        // Generate a 6-digit OTP
        $otp = rand(100000, 999999);

        // Store OTP and its expiration (e.g., 10 minutes) in user's record
        $user->otp            = $otp;
        $user->otp_expires_at = now()->addMinutes(10);
        $user->save();

        sendPhpMailer("Your OTP code is: $otp", "Your Password Reset OTP", $user->email);


        return jsonResponse(true, "OTP sent to your email");
    }

    public function verifyOTP(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return jsonResponse(false, "No account found with this email");
        }

        if ($user->otp !== $request->otp || now()->greaterThan($user->otp_expires_at)) {
            return jsonResponse(false, "Invalid or expired OTP");
        }

        return jsonResponse(true, "OTP verified successfully");
    }

    public function resetPassword(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return jsonResponse(false, "No account found with this email");
        }

        if (!$user->otp) {
            return jsonResponse(false, "Invalid or expired OTP");
        }

        $user->password = Hash::make($request->new_password);
        $user->otp = null;
        $user->otp_expires_at = null;
        $user->save();

        return jsonResponse(true, "Password reset successfully");
    }

    public function resentOTP(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return jsonResponse(false, "No account found with this email");
        }


        if (!$user->otp || $user->otp_expires_at) {
            $diffInMinute = (int) now()->diffInMinutes($user->otp_expires_at);

            if ($diffInMinute > 0) {
                return jsonResponse(false, "Please wait $diffInMinute minutes before requesting a new OTP");
            }
        }

        // Generate a new 6-digit OTP
        $otp = rand(100000, 999999);

        // Update OTP and its expiration
        $user->otp = $otp;
        $user->otp_expires_at = now()->addMinutes(10);
        $user->save();

        sendPhpMailer("Your OTP code is: $otp", "Your Password Reset OTP", $user->email);

        return jsonResponse(true, "OTP sent to your email");
    }
}
