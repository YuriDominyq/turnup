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
                return[
                    'user' => Auth::check()
                        ? [
                            'id' => Auth::id(),
                            'name' => Auth::user()->name,
                            'email' => Auth::user()->email,
                            'role' => Auth::user()->role,
                        ] : null,
                ];
            }
         ]);
         
         
        if(!cache()->has('php_start_time')){
            cache()->forever('php_start_time', Carbon::now()->timestamp);
        }
    }
}
