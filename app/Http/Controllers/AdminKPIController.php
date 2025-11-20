<?php

namespace App\Http\Controllers;

class AdminKPIController extends Controller
{
    public function getKPIData()
    {
        $totalCommuters = \App\Models\Commuter::count();
        $totalRoutes = \App\Models\Route::count();

        return response()->json([
            'totalCommuters' => $totalCommuters,
            'totalRoutes' => $totalRoutes,
        ]);
    }
}