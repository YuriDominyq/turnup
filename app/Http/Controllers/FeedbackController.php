<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'ride_id' => 'required|exists:rides,ride_id',
            'drivers_id' => 'required|exists:drivers,drivers_id',
            'commuter_id' => 'required|exists:commuters,commuter_id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:500',
        ]);

        $feedback = Feedback::create($validated);

        $driver = Driver::find($validated['drivers_id']);
        if($driver){
            $averageRating = Feedback::where('drivers_id', $driver->drivers_id)->avg('rating');
            $driver->rating = round($averageRating, 2);
            $driver->save();
        }

        return response()->json([
            'message' => 'Feedback submitted successfully!',
            'data' => $feedback,
        ], 201);
    }

    public function index()
    {
         $feedbacks = Feedback::with([
            'ride.route',
            'ride.startStop',
            'ride.endStop',
            'driver',
            'commuter'
        ])->latest()->get();

        return response()->json($feedbacks);
    }

    public function show($id)
    {
        $feedback = Feedback::with([
            'ride.route',
            'ride.startStop',
            'ride.endStop',
            'driver',
            'commuter'
        ])->findOrFail($id);

        return response()->json($feedback);
    }
}