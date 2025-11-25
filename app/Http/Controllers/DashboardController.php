<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('admin/dashboard', [
            'auth' => [
                'user' => $user ? $user->append('full_photo_url')->only([
                    'id', 'first_name', 'last_name', 'email', 'role', 'photo_url', 'full_photo_url'
                ]) : null,
            ],
        ]);
    }
}
