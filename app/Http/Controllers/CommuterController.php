<?php

namespace App\Http\Controllers;

use App\Mail\CommuterVerificationMail;
use App\Models\Commuter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class CommuterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:15|unique:commuters,phone',
            'email' => 'required|string|email|max:255|unique:commuters',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $otp = rand(100000, 999999);

        $commuter = Commuter::create([
            'commuter_id' => uniqid('CMR-'),
            'first_name'  => $request->first_name,
            'last_name'   => $request->last_name,
            'phone'       => $request->phone,
            'email'       => $request->email,
            'password'    => Hash::make($request->password),
            'photo'       => $request->photo ?? null,
            'otp_code'    => $otp,
            'is_verified' => 0,
        ]);

       Mail::to($request->email)->send(new CommuterVerificationMail($commuter, $otp));

        return response()->json([
            'message' => 'Registered successfully. Please check your email for the OTP code to verify your account.',
            'commuter' => $commuter
        ], 201);
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp_code' => 'required|string', 
        ]);

        $commuter = Commuter::where('email', $request->email)->first();

        if(!$commuter) {
            return response()->json(['message' => 'Commuter not found.'], 404);
        }

        if($commuter->otp_code === $request->otp_code) {
            $commuter->is_verified = 1;
            $commuter->otp_code = null; 
            $commuter->save();

            return response()->json(['message' => 'Account verified successfully.'], 200);
        } else {
            return response()->json(['message' => 'Invalid OTP code.'], 400);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $commuter = Commuter::where('email', $request->email)->first();

        if(!$commuter || !Hash::check($request->password, $commuter->password)) {
            return response()->json(['message' => 'Invalid credentials.'], 401);
        }

        if($commuter->is_verified == 0) {
            return response()->json(['message' => 'Account not verified. Please verify your account first.'], 403);
        }

        return response()->json([
            'message' => 'Login successful.',
            'commuter' => $commuter,
        ]);
    }
}
