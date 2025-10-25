<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stop;

class StopController extends Controller
{
    public function search(Request $request)
    {
        $query = Stop::query();

        if($search = $request->input('q')){
            $query->where('name', 'LIKE', "%{$search}%");
        }

        $stops = $query->with('route')->get();

        return response()->json($stops);
    }
}
