<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class AnalyticsAIController extends Controller
{
    public function summarizeDrivers()
    {
        // Fetch data from your own API
        $routesData = Http::get(url('/analytics/drivers-per-route'))->json();

        // Call Gemini API
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('GEMINI_API_KEY'),
            'Content-Type' => 'application/json',
        ])->post('https://gemini.googleapis.com/v1/models/text-bison-001:generate', [
            "prompt" => [
                "text" => "Here is the current number of drivers per route: "
                    . json_encode($routesData)
                    . ". Provide a 4-point summary:
                       1. Which routes are well-staffed
                       2. Which routes are under-staffed
                       3. Any imbalance trends
                       4. Recommendations to optimize driver allocation"
            ],
            "temperature" => 0.7,
            "maxOutputTokens" => 400
        ]);

        $summary = $response->json()['candidates'][0]['output'] ?? 'No summary generated.';

        return response()->json(['summary' => $summary]);
    }
}
