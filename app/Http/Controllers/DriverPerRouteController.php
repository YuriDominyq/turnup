<?php

namespace App\Http\Controllers;

use App\Models\Route;

class DriverPerRouteController extends Controller
{
    public function driversPerRoute()
    {
        $routes = Route::withCount('drivers')->get();

        $data = $routes->map(fn($route) => [
            'route_name' => "{$route->first_terminal} ↔ {$route->second_terminal}",
            'driverCount' => $route->drivers_count,
        ]);

        return response()->json($data);
    }
}
