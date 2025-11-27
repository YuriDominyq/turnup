<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Route;
use App\Models\SystemLog;
use Illuminate\Support\Facades\Auth;

class RouteController extends Controller
{
    private function createSystemLog($title, $description, $type = 'info')
    {
        SystemLog::create([
            'log_id' => SystemLog::generateLogId(),
            'title' => $title,
            'description' => $description,
            'type' => $type,
            'time' => now(),
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'first_terminal' => 'required|string|max:255',
            'second_terminal' => 'required|string|max:255',
            'stops' => 'required|array|min:2',
            'stops.*.name' => 'required|string|max:255',
            'stops.*.lat' => 'required|numeric',
            'stops.*.lng' => 'required|numeric',
            'color' => 'nullable|string|size:7',
            'type' => 'required|in:main,festival,detour,emergency',
            'disabled' => 'nullable|boolean',
        ]);


        $route = Route::create([
            'first_terminal' => $request->first_terminal,
            'second_terminal'=> $request->second_terminal,
            'created_by' => $request->user()->id,
            'polyline' => $request->polyline,
            'color' => $request->color ?? '#3388ff',
            'type' => $request->type,
            'disabled' => $request->disabled ?? false,
        ]);

        foreach ($request->stops as $index => $stop){
            $route->stops()->create([
                'name' => $stop['name'],
                'lat' => $stop['lat'],
                'lng' => $stop['lng'],
                'order' => $index
            ]);
        }

        $user = Auth::user()?->full_name ?? 'System';

        $this->createSystemLog(
            'Route Created',
            "Route {$route->first_terminal} - {$route->second_terminal} was created by {$user}.",
            'create',
        );

        return response()->json($route->load('stops'));
    }

    public function index()
    {
        $query = Route::with('stops')
                  ->whereIn('type', ['main', 'festival']);

        if (!Auth::user()->isSuperAdmin()) {
            $query->where('disabled', false);
        }

        return $query->get();
    }

    public function destroy($id)
    {
        try{
            $route = Route::findOrFail($id);
            $routeName = "{$route->first_terminal} - {$route->second_terminal}";


            $route->stops()->delete();
            $route->delete();

            $user = Auth::user()?->full_name ?? 'System';
            
            $this->createSystemLog(
                'Route Deleted',
                "Route {$routeName} was deleted by {$user}.",
                'delete'
            );
    
            return response()->json(['message' => 'Route deleted successfully']);

        }catch(\Exception $e){
            return response()->json(['message' => 'Failed to delete route'], 500);
        }
    }

    public function toggleDisable($id)
    {
        $route = Route::findOrFail($id);

        if ($route->disabled) {
            Route::where('first_terminal', $route->first_terminal)
                ->where('second_terminal', $route->second_terminal)
                ->where('id', '!=', $route->id)
                ->update(['disabled' => true]);

            $route->disabled = false;
        } else {
            $route->disabled = true;
        }

        $route->save();

        $user = Auth::user()?->full_name ?? 'System';
        $this->createSystemLog(
            'Route Status Changed',
            "Route {$route->first_terminal} - {$route->second_terminal} ({$route->type}) disabled status set to {$route->disabled} by {$user}.",
            'update'
        );


        return response()->json([
            'id' => $route->id,
            'disabled' => $route->disabled,
            'message' => 'Route status updated successfully'
        ]);
    }

}
