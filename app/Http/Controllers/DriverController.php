<?php

namespace App\Http\Controllers;

use App\Mail\DriverApprovedMail;
use App\Models\Driver;
use App\Models\Route;
use App\Models\SystemLog;
use App\Rules\UniqueActiveDriverEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;


class DriverController extends Controller
{

    public function index()
    {
       $drivers = Driver::where('operator_id', Auth::id())
            ->with('route')
            ->get();

         $routes = Route::where('disabled', false)
                  ->whereIn('type', ['main', 'festival'])
                  ->get();
        
        return Inertia::render('operator/driver', [
            'drivers' => $drivers,
            'routes' => $routes,
        ]);
    }

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
        $validated = $request->validate([
           'first_name' => 'required|string|max:255',
           'last_name'  => 'required|string|max:255',
           'email' => ['required', 'email', UniqueActiveDriverEmail::class],
           'phone'      => 'nullable|string|max:20',
           'password'   => 'required|string|confirmed|min:6',
           'vehicle_type' => 'nullable|string|max:100',
           'license_plate' => 'nullable|string|max:100',
           'route_id'   => 'nullable|exists:routes,id',
           'avatar'     => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
           'status'     => 'nullable|in:active,inactive,pending,suspended',
           'rating'     => 'nullable|numeric|min:0|max:5',
           'total_trips'=> 'nullable|integer|min:0',
           'license_url'      => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
           'registration_url' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
           'insurance_url'    => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
           'franchise_url'    => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
        ]);

        $validated['password'] = bcrypt($validated['password']);
        $validated['operator_id'] = Auth::id();
        $validated['status'] = 'pending';
        $validated['rating'] = 0.0;
        $validated['total_trips'] = 0;

         foreach (['avatar', 'license_url', 'registration_url', 'insurance_url', 'franchise_url'] as $fileField) {
            if ($request->hasFile($fileField)) {
                $validated[$fileField] = '/storage/' . $request->file($fileField)->store('drivers', 'public');
            }
        }

        $driver = Driver::create($validated);

        $this->createSystemLog(
            'Driver Created',
            Auth::user()->name . " created driver {$driver->first_name} {$driver->last_name}",
            'create'
        );
         
        return redirect()->route('operator.driver.index')
            ->with('success', 'Driver created successfully');
    }

    public function update(Request $request, Driver $driver)
    {
        $validated = $request->validate([
            'first_name' => 'sometimes|required|string|max:255',
            'last_name'  => 'sometimes|required|string|max:255',
            'email'      => 'sometimes|email|unique:drivers,email,' . $driver->drivers_id . ',drivers_id',
            'phone'      => 'nullable|string|max:20',
            'password'   => 'sometimes|required|string|confirmed|min:6',
            'vehicle_type' => 'nullable|string|max:100',
            'license_plate' => 'nullable|string|max:100',
            'route_id'   => 'nullable|exists:routes,id',
            'avatar'     => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
            'status'     => 'nullable|in:active,inactive,pending,suspended',
            'rating'     => 'nullable|numeric|min:0|max:5',
            'total_trips'=> 'nullable|integer|min:0',
            'license_url'      => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'registration_url' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'insurance_url'    => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'franchise_url'    => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
        ]);
        
        if ($request->filled('password')) {
            $validated['password'] = bcrypt($request->password);
        }

         foreach (['avatar', 'license_url', 'registration_url', 'insurance_url', 'franchise_url'] as $fileField) {
        if ($request->hasFile($fileField)) {
            $validated[$fileField] = '/storage/' . $request->file($fileField)->store('drivers', 'public');
            }
        }
        
        $driver->update($validated);

        $this->createSystemLog(
            'Driver Updated',
            Auth::user()->name . " updated driver {$driver->first_name} {$driver->last_name}.",
            'update'
        );

        return redirect()->route('operator.driver.index')
            ->with('success', 'Driver updated successfully');
    }

    public function destroy(Driver $driver)
    {
       $driver->delete();
        
       $this->createSystemLog(
            'Driver Deleted',
            Auth::user()->name . " deleted driver {$driver->first_name} {$driver->last_name}.",
            'delete'
        );

        return response()->json(['message' => 'Driver deleted successfully']);
    }

    public function approve(Driver $driver)
    {
        $driver->update(['status' => 'active']);

         try {
            Mail::to($driver->email)->send(new DriverApprovedMail($driver));
            $emailStatus = 'Email notification sent!';
        } catch (\Exception $e) {
            Log::error('Failed to send approval email: ' . $e->getMessage());
            $emailStatus = 'Driver approved, but failed to send email.';
        }


        $this->createSystemLog(
            'Driver Approved',
            Auth::user()->name . " approved driver {$driver->first_name} {$driver->last_name}.",
            'update'
        );

        return response()->json([
            'message' => 'Driver approved successfully',
            'driver' => $driver
        ]);
    }

    public function reject(Driver $driver)
    {
        $driver->update(['status' => 'inactive']);

        $this->createSystemLog(
            'Driver Rejected',
            Auth::user()->name . " rejected driver {$driver->first_name} {$driver->last_name}.",
            'update'
        );

        return redirect()->route('operator.driver.index')
            ->with('success', 'Driver rejected successfully');
    }
}
