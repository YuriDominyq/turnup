<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Support\Facades\Http;

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
        
        $aiSummary = 'AI summary not available at the moment.';
        
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
            'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/chat/completions', [
                "model" => "gpt-3.5-turbo",
                "messages" => [
                    [
                        "role" => "system",
                        "content" => "You are an assistant providing analytics for top drivers."
                    ],
                    [
                        "role" => "user",
                        "content" => "Here are the top 5 drivers with their ratings: "
                            . json_encode($topDrivers)
                            . ". Provide a 3-point analysis: 
                              1. Who is performing the best, 
                              2. Any trends in ratings, 
                              3. Suggestions to improve lower-rated drivers."
                    ]
                ],
                "temperature" => 0.7,
                "max_tokens" => 250
            ]);
            
            $aiSummary = $response->json()['choices'][0]['message']['content'] ?? $aiSummary;
            
            return response()->json([
                'data' => $topDrivers,
                'ai_summary' => $aiSummary
            ]);
    }
}