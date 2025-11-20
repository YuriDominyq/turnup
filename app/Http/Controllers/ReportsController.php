<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ReportsController extends Controller
{
    public function index()
    {
        $reports = DB::table('reports')->orderBy('created_at', 'desc')->get();
        
        $reports = $reports->map(function($report) {
            $report->url = Storage::disk('r2')->url($report->path);
            return $report;
        });

        return response()->json(['reports' => $reports]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx',
        ]);

        $file = $request->file('file');
        $filename = time() . '_' . $file->getClientOriginalName();
        $path = $file->storeAs('reports', $filename, 'r2');

        DB::table('reports')->insert([
            'filename' => $filename,
            'path' => $path,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'success' => true,
            'report' => [
                'filename' => $filename,
                'url' => Storage::disk('r2')->url($path),
                'created_at' => now()
            ]
        ]);
    }
}