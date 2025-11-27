<?php

use App\Http\Controllers\AdminKPIController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommuterController;
use App\Http\Controllers\DriverAPIController;
use App\Http\Controllers\DriverCheckInController;
use App\Http\Controllers\DriverPerRouteController;
use App\Http\Controllers\DriverStatusController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\StopController;
use App\Http\Controllers\TopDriverController;
use App\Models\Stop;
use App\Models\SystemLog;
use Illuminate\Http\Request;

Route::post('auth/register', [CommuterController::class, 'register']);
Route::post('auth/verify', [CommuterController::class, 'verifyOtp']);   
Route::post('auth/login', [CommuterController::class, 'login']);
Route::get('routes', [RouteController::class, 'index']);
Route::get('stops/search', [StopController::class, 'search']);
Route::get('commuter/driver-route/{driver}', [DriverAPIController::class, 'driverRouteForCommuter']);
Route::put('/commuter/{commuter_id}/update', [CommuterController::class, 'updateProfile']);
Route::put('/commuter/{commuter_id}/change-password', [CommuterController::class, 'changePassword']);


Route::get('/system-logs', function () {
    return response()->json([
        'systemLogs' => SystemLog::orderBy('created_at', 'desc')->get()
    ]);
});

Route::post('driver/login', [DriverAPIController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::post('driver/logout', [DriverAPIController::class, 'logout']);
    Route::get('driver/profile', [DriverAPIController::class, 'profile']);
    Route::post('driver/profile/update', [DriverAPIController::class, 'updateProfile']);
    Route::get('driver/{driver}', [DriverAPIController:: class, 'show']);

    Route::prefix('driver-check-ins')->group(function() {
        Route::post('/store', [DriverCheckInController::class, 'store']);
        Route::get('/', [DriverCheckInController::class, 'index']);
        
        Route::delete('/today/{driver}', [DriverCheckInController::class, 'deleteToday']);
    });
});

Route::post('/nearby-stop', function(Request $request){
    $lat = $request->lat;
    $lng = $request->lng;
    $radius = 0.5;

    $nearbyStops = Stop::select('*')
        ->selectRaw("(6371 * acos(
            cos(radians(?)) *
            cos(radians(lat)) *
            cos(radians(lng) - radians(?)) +
            sin(radians(?)) *
            sin(radians(lat))
        )) AS distance", [$lat, $lng, $lat])
         ->having('distance', '<', $radius)
         ->orderBy('distance')
         ->get();
    
    if($nearbyStops->isEmpty()){
        return response()->json(['message' => 'No nearby stops found'], 404);
    }
    
    $stop = $nearbyStops->first(function($s) {
        return $s->route && (!$s->route->disabled || in_array($s->route->type, ['festival', 'detour']));
    });
    
    if(!$stop) {
        return response()->json(['message' => 'No nearby stops with active routes found'], 404);
    }
   
    $route = $stop->route;

    return response()->json([
        'nearby_stop' => $stop,
        'route' => $route,
    ]);
});

Route::prefix('rides')->group(function () {
    Route::get('/', [RideController::class, 'index']);
    Route::get('/{ride_id}', [RideController::class, 'show']);
    Route::post('/start', [RideController::class, 'startRide']);
    Route::put('/end/{ride_id}', [RideController::class, 'endRide']);
});

Route::prefix('feedback')->group(function (){
    Route::post('/', [FeedbackController::class, 'store']);
    Route::get('/', [FeedbackController::class, 'index']);
    Route::get('/{id}', [FeedbackController::class, 'show']);
});

// Analytics
Route::get('/analytics/top-drivers', [TopDriverController::class, 'topDrivers']);
Route::get('/analytics/drivers-per-route', [DriverPerRouteController::class, 'driversPerRoute']);
Route::get('/analytics/driver-status', [DriverStatusController::class, 'statusDistribution']);
Route::get('/admin/kpi', [AdminKPIController::class, 'getKPIData']);

// Reports
Route::get('/reports', [ReportsController::class, 'index']);
Route::post('/reports', [ReportsController::class, 'store']);