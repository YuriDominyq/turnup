<?php

namespace App\Services;

use App\Models\Route;

class RouteService
{
    public static function findFastestRoute($originStopId, $destinationStopId)
    {
        $routes = Route::with('stops')->get();
        $bestRoute = null;
        $shortestSegment = PHP_INT_MAX;

        foreach ($routes as $route) {
            $stops = $route->stops->sortBy('order');
            $stopIds = $stops->pluck('id')->toArray();

            $originIndex = array_search($originStopId, $stopIds);
            $destIndex = array_search($destinationStopId, $stopIds);

            if ($originIndex !== false && $destIndex !== false && $originIndex < $destIndex) {
                $segmentLength = $destIndex - $originIndex;

                if ($segmentLength < $shortestSegment) {
                    $shortestSegment = $segmentLength;
                    $bestRoute = [
                        'route_id' => $route->id,
                        'polyline' => $route->polyline,
                        'origin_index' => $originIndex,
                        'destination_index' => $destIndex
                    ];
                }
            }
        }

        return $bestRoute;
    }

    public static function findRouteWithTransfer($originStopId, $destinationStopId)
    {
        $routes = Route::with('stops')->get();
        $originRoutes = $routes->filter(fn($r) => $r->stops->pluck('id')->contains($originStopId));
        $destinationRoutes = $routes->filter(fn($r) => $r->stops->pluck('id')->contains($destinationStopId));

        foreach ($originRoutes as $originRoute) {
            foreach ($destinationRoutes as $destRoute) {
            
                if (
                    $originRoute->first_terminal === $destRoute->first_terminal &&
                    $originRoute->second_terminal === $destRoute->second_terminal
                ) {
                    return null;
                }
        
                $originStopIds = $originRoute->stops->pluck('id');
                $destStopIds = $destRoute->stops->pluck('id');

                $transferStops = $originStopIds->intersect($destStopIds);

                if ($transferStops->isNotEmpty()) {

                    $transferStopId = $transferStops->first();

                    return [
                        'routes' => [
                            [
                                'route_id' => $originRoute->id,
                                'polyline' => $originRoute->polyline,
                            ],
                            [
                                'route_id' => $destRoute->id,
                                'polyline' => $destRoute->polyline,
                            ]
                        ],
                        'transfer_stop_id' => $transferStopId
                    ];
                }
            }
        }

        return null;
    }
}
