<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class AnalyticsAIController extends Controller
{
    public function summarizeDrivers()
    {
        // Fetch data from your own API
        $routesData = Http::get(url('/analytics/drivers-per-route'))->json();

        // Call OpenAI API
        $response = Http::withToken(env('OPENAI_API_KEY'))
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-3.5-turbo',
                'messages' => [
                    [
                        'role' => 'user',
                        'content' => "Here is the current number of drivers per route: "
                            . json_encode($routesData)
                            . ". Provide a 4-point summary:
                               1. Which routes are well-staffed
                               2. Which routes are under-staffed
                               3. Any imbalance trends
                               4. Recommendations to optimize driver allocation"
                    ]
                ],
                'temperature' => 0.7,
                'max_tokens' => 400
            ]);

        $summary = $response->json()['choices'][0]['message']['content'] ?? 'No summary generated.';

        return response()->json(['summary' => $summary]);
    }
}
