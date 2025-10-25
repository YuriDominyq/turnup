<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Show the email verification prompt page.
     */
    public function __invoke(Request $request): Response|RedirectResponse
    {
         $user = $request->user();

        return $user->hasVerifiedEmail()
            ? redirect()->intended(
                $user->role === 'superadmin' 
                    ? route('admin.dashboard', absolute: false) 
                    : route('operator.dashboard', absolute: false)
            )
            : Inertia::render('auth/verify-email', [
                'status' => $request->session()->get('status')
            ]);
    }
}
