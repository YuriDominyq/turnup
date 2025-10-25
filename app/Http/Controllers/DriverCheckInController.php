<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\DriverCheckIn;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class DriverCheckInController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'driver_id' => 'required|exists:drivers,drivers_id',
            'status' => 'required|in:checked-in,not-checked-in,late',
        ]);

        $today = Carbon::now('Asia/Manila')->format('Y-m-d');

        $existing = DriverCheckIn::where('driver_id', $request->driver_id)
                                    ->where('date', $today)
                                    ->first();
        
        if($existing){
            return response()->json([
                'success' => false,
                'message' => 'Driver already checked in today',
                'check_in' => $existing
            ], 400);
        }                            

        $checkin = DriverCheckIn::create([
            'driver_id' => $request->driver_id,
            'status' => $request->status,
            'check_in_time' => now(),
            'date' => $today,
        ]);

        return response()->json([
            'success' => true,
            'check_in' => $checkin
        ]);
    }

    public function index()
    {
        $today = Carbon::now('Asia/Manila')->format('Y-m-d');

        $drivers = Driver::with(['checkIns' => function($q) use ($today) {
            $q->where('date', $today);
        },
            'route'
        ])->get();

        $checkIns = $drivers->map(function($driver) use ($today) {
            $checkin = $driver->checkIns->first();
            return [
                'id' => $driver->drivers_id,
                'driver' => $driver,
                'status' => $checkin ? $checkin->status : 'not-checked-in',
                'check_in_time' => $checkin ? $checkin->check_in_time : null,
            ];
        });

        return response()->json($checkIns);
    }

    public function indexWeb()
    {
        $today = Carbon::now('Asia/Manila')->format('Y-m-d');

        $drivers = Driver::with(['checkIns' => function($q) use ($today) {
            $q->where('date', $today);
        },
            'route'
        ])->get();

        $checkIns = $drivers->map(function($driver) use ($today) {
            $checkin = $driver->checkIns->first();
            return [
                'id' => $driver->drivers_id,
                'driver' => $driver,
                'status' => $checkin ? $checkin->status : 'not-checked-in',
                'check_in_time' => $checkin ? $checkin->check_in_time : null,
            ];
        });

        return Inertia::render('operator/checkin', [
            'checkIns' => $checkIns,
        ]);
    }

    public function deleteToday(Driver $driver)
    {
        $today = Carbon::now('Asia/Manila')->format('Y-m-d');

        DriverCheckIn::where('driver_id', $driver->drivers_id)
                    ->where('date', $today)
                    ->delete();

        return response()->json([
            'success' => true,
            'message' => 'Driver check-in removed'
        ]);           
    }
}
