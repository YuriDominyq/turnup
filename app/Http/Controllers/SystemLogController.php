<?php

namespace App\Http\Controllers;

use App\Models\SystemLog;

class SystemLogController extends Controller
{
    public function index()
    {
        return response()->json([
            'systemLogs' => SystemLog::orderBy('time', 'desc')->take(20)->get()
        ]);
    }
}
