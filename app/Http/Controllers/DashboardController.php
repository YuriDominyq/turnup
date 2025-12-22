<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        $headers = [
            'Cache-Control' => 'no-store, no-cache, must-revalidate, max-age=0',
            'Pragma'        => 'no-cache',
            'Expires'       => 'Sat, 01 Jan 2000 00:00:00 GMT',
        ];

        if (!$user) {
            return redirect('/login')->withHeaders($headers);
        }

        return Inertia::render('admin/dashboard', [
            'auth' => [
                'user' => $user ? $user->append('full_photo_url')->only([
                    'id', 'first_name', 'last_name', 'email', 'role', 'photo_url', 'full_photo_url'
                ]) : null,
            ],
        ])->withHeaders($headers);
    }
}
