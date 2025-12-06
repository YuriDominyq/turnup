<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Support\Facades\Http;

class DriverStatusController extends Controller
{
    public function statusDistribution()
    {
        $statuses = ['active', 'pending', 'suspended', 'inactive'];

        $data = collect($statuses)->map(function ($status) {
            return [
                'name' => ucfirst($status),
                'value' => Driver::where('status', $status)->count(),
                'color' => match($status) {
                    'active' => '#10b981',
                    'pending' => '#facc15',
                    'suspended' => '#f87171',
                    'inactive' => '#6b7280',
                    default => '#d1d5db',
                },
            ];
        })->toArray();

        $aiSummary = 'AI summary not available at the moment.';
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
                'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/chat/completions', [
                "model" => "gpt-3.5-turbo",
                "messages" => [
                    [
                        "role" => "system",
                        "content" => "You are a helpful assistant for driver analytics."
                    ],
                    [
                        "role" => "user",
                        "content" => "Here is the current number of drivers by status: "
                            . json_encode($data)
                            . ". Provide a 3-point summary:
                                1. Which statuses are dominant
                                2. Any potential concerns
                                3. Recommendations to improve driver"
                    ]
                ],
                "temperature" => 0.7,
                "max_tokens" => 250
            ]);
            
            $aiSummary = $response->json()['choices'][0]['message']['content'] ?? $aiSummary;
            
            return response()->json([
                'data' => $data,
                'ai_summary' => $aiSummary
            ]);
    }
}