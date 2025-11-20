<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;

class TopDriverController extends Controller
{
    public function topDrivers()
    {
        $topDrivers = Driver::select(
            'drivers_id',
            'first_name',
            'last_name',
            'avatar_url',
            'rating'
        )
        ->orderByDesc('rating')
        ->limit(5)
        ->get();

        return response()->json($topDrivers);
    }
}