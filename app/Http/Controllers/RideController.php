<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ride;
use App\Models\Stop;

class RideController extends Controller
{
    /**
     * Start a new ride
     */
    public function startRide(Request $request)
    {
       $validated = $request->validate([
            'driver_id' => 'required|string|exists:drivers,drivers_id',
            'commuter_id' => 'required|string|exists:commuters,commuter_id',
            'route_id' => 'nullable|integer|exists:routes,id',
            'start_stop_id' => 'nullable|integer|exists:stops,id',
            'start_lat' => 'required|numeric',
            'start_lng' => 'required|numeric',
        ]);

        $existingRide = Ride::where('commuter_id', $validated['commuter_id'])
                            ->where('status', 'ongoing')
                            ->first();
        
        if($existingRide){
            return response()->json([
                'message' => 'Commuter already has an ongoing ride.',
                'ride' => $existingRide
            ], 409);
        }
        
        $nearestStartStop = null;
        if (!empty($validated['route_id'])) {
            $nearestStartStop = Stop::where('route_id', $validated['route_id'])
                ->orderByRaw("power(lat - ?, 2) + power(lng - ?, 2) ASC", [
                    $validated['start_lat'],
                    $validated['start_lng']
                ])
                ->first();
        }

        $ride = Ride::create([
            'driver_id' => $validated['driver_id'],
            'commuter_id' => $validated['commuter_id'],
            'route_id' => $validated['route_id'] ?? null,
            'start_stop_id' => $nearestStartStop->id ?? null,
            'start_lat' => $validated['start_lat'],
            'start_lng' => $validated['start_lng'],
            'status' => 'ongoing',
        ]);

         return response()->json([
            'message' => 'Ride started successfully.',
            'ride' => $ride->load(['driver', 'commuter', 'route', 'startStop'])
        ], 201);
    }

    /**
     * End a ride
     */
    public function endRide(Request $request, $ride_id)
    {
        $validated = $request->validate([
            'end_lat' => 'required|numeric',
            'end_lng' => 'required|numeric',
            'end_stop_id' => 'nullable|integer|exists:stops,id',
        ]);

        $ride = Ride::findOrFail($ride_id);

        if($ride->status === 'completed'){
            return response()->json(['message' => 'Ride already completed.'], 400);
        }
        
        $nearestEndStop = null;
        $nearestEndStop = Stop::query()
            ->when($ride->route_id, fn($q) => $q->where('route_id', $ride->route_id))
            ->orderByRaw("power(lat - ?, 2) + power(lng - ?, 2) ASC", [
                $validated['end_lat'],
                $validated['end_lng']
            ])
            ->first();


        $ride->update([
            'end_lat' => $validated['end_lat'],
            'end_lng' => $validated['end_lng'],
            'end_stop_id' => $nearestEndStop->id ?? null,
            'status' => 'completed',
        ]);

        return response()->json([
            'message' => 'Ride ended successfully',
            'ride' => $ride->load(['driver', 'commuter', 'route', 'startStop', 'endStop' ])
        ]);
    }

    /**
     * Get all rides
     */
    public function index()
    {
        $rides = Ride::with(['driver', 'commuter', 'route', 'startStop', 'endStop'])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($rides);    
    }
    
    /**
     * Get ride by ID
     */
    public function show($ride_id)
    {
        $ride = Ride::with(['driver', 'commuter', 'route', 'startStop', 'endStop'])
            ->findOrFail($ride_id);

        return response()->json($ride);    
    }
}