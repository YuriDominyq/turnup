<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DriverCheckInController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\OperatorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RouteController;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Middleware\NoCache;

Route::middleware(['auth', 'verified', 'role:superadmin', CorsMiddleware::class])->group(function () {
    Route::post('routes', [RouteController::class, 'store']);
    Route::get('routes', [RouteController::class, 'index']);
});

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/version', function () {
    return response()->json([
        'version' => config('app.version', '1.0.0')
    ]);
});

Route::middleware(['auth', 'verified', 'role:superadmin', NoCache::class])->group(function () {
    Route::get('admin/dashboard', [DashboardController::class, 'index'])
        ->name('admin.dashboard');

    Route::get('admin/maproute', function () {
        return Inertia::render('admin/maproute');
    })->name('admin.maproute');
});

Route::middleware(['auth', 'verified', 'role:superadmin', NoCache::class])->group(function () {
    Route::get('admin/operators', [OperatorController::class, 'index'])->name('admin.operators.index');
    Route::get('admin/operators/create', [OperatorController::class, 'create'])->name('admin.operators.create');
    Route::post('admin/operators', [OperatorController::class, 'store'])->name('admin.operators.store');
    Route::get('admin/operators/{operator}/edit', [OperatorController::class, 'edit'])->name('admin.operators.edit');
    Route::put('admin/operators/{operator}', [OperatorController::class, 'update'])->name('admin.operators.update');
    Route::delete('admin/operators/{operator}', [OperatorController::class, 'destroy'])->name('admin.operators.destroy');
});

Route::middleware(['auth', 'verified', 'role:operator', NoCache::class])->group(function () {
    Route::get('operator/dashboard', function () {
        return Inertia::render('operator/dashboard');
    })->name('operator.dashboard');
    
    Route::get('operator/driver', [DriverController::class, 'index'])->name('operator.driver.index');
    Route::post('operator/driver', [DriverController::class, 'store'])->name('operator.driver.store');
    Route::get('operator/driver/{driver}', [DriverController::class, 'show'])->name('operator.driver.show');
    Route::put('operator/driver/{driver}', [DriverController::class, 'update'])->name('operator.driver.update');
    Route::delete('operator/driver/{driver}', [DriverController::class, 'destroy'])->name('operator.driver.destroy');
    Route::post('/operator/driver/{driver}/approve', [DriverController::class, 'approve'])->name('operator.driver.approve');
    Route::post('/operator/driver/{driver}/reject', [DriverController::class, 'reject'])->name('operator.driver.reject');

    Route::get('operator/map', function () {
        return Inertia::render('operator/map');
    })->name('operator.map');

    Route::get('operator/problems', function () {
        return Inertia::render('operator/problems');
    })->name('operator.problems');

    Route::get('operator/checkin', [DriverCheckInController::class, 'indexWeb'])->name('operator.checkin');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
