<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * Verify the user's email and log them in.
     */
    public function __invoke($id, $hash): RedirectResponse
    {
        $user = Admin::findOrFail($id);

        // Manually check hash
        if (sha1($user->email) !== $hash) {
            abort(403);
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        // Log in the user after verification
        Auth::login($user);

        session()->regenerate();

        $dashboardRoute = $user->role === 'superadmin' 
        ? 'admin.dashboard' 
        : 'operator.dashboard';

        return redirect()->route($dashboardRoute)->with('verified', true);
    }
}
