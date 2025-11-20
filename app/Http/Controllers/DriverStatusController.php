<?php

namespace App\Http\Controllers;

use App\Models\Driver;

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
        });

        return response()->json($data);
    }
}