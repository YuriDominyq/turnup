<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Driver;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class DriverAPIController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $driver = Driver::where('email', $request->email)
            ->with('route')
            ->first();

        if(!$driver || !Hash::check($request->password, $driver->password)){
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect'],
            ]);
        }

        if($driver->status !== 'active'){
            $message = match($driver->status){
                'pending' => 'Your account is pending approval',
                'inactive' => 'Your account is inactive. Please contact support',
                'suspended' => 'Your account is suspended',
                default => 'Your account cannot login'
            };

            throw ValidationException::withMessages([
                'email' => [$message],
            ]);
        }

        $token = $driver->createToken('driver_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            'driver' => $driver,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function profile(Request $request)
    {
        $driver = $request->user()->load('route');
        return response()->json($driver);
    }

    public function updateProfile(Request $request)
    {
        $driver = $request->user();

        $data = $request->validate([
            'avatar' => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        if($request->hasFile('avatar')){
            $data['avatar'] = '/storage/' . $request->file('avatar')->store('drivers', 'public');
        }

        $driver->update($data);

        return response()->json([
            'message' => 'Profile updated successfully',
            'driver' => $driver,
        ]);
    }
}
