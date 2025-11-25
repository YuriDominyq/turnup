<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
         Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));
         
        Inertia::share([
            'auth' => function () {
                $user = Auth::user();
                if (!$user) return null;

                return [
                    'user' => [
                        'id' => $user->id,
                        'first_name' => $user->first_name,
                        'last_name' => $user->last_name,
                        'email' => $user->email,
                        'role' => $user->role,
                        'photo_url' => $user->photo_url,
                        'full_photo_url' => $user->full_photo_url,
                        'email_verified_at' => $user->email_verified_at,
                    ]
                ];
            }
        ]);
         
         
        if(!cache()->has('php_start_time')){
            cache()->forever('php_start_time', Carbon::now()->timestamp);
        }
    }
}
