<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\SystemLog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        session()->regenerate();
        
        $user = Auth::user();
        
        SystemLog::create([
            'log_id' => SystemLog::generateLogId(),
            'title' => $user->isSuperAdmin() ? 'Super Admin Login' : ($user->isOperator() ? 'Operator Login' : 'User Login'),
            'description' => $user->email . ' logged in successfully.',
            'type' => 'login',
        ]);


        if ($user->isSuperAdmin()) {
            return redirect()->intended(route('admin.dashboard'));
        }

        if ($user->isOperator()) {
            return redirect()->intended(route('operator.dashboard'));
        }

        return redirect('/');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = Auth::user();

        if($user){
            SystemLog::create([
                'log_id' => SystemLog::generateLogId(),
                'title' => $user->isSuperAdmin() ? 'Super Admin Logout' : ($user->isOperator() ? 'Operator Logout' : 'User Logout'),
                'description' => $user->email . ' logged out.',
                'type' => 'logout',
            ]);
        }

        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
