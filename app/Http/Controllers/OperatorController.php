<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\SystemLog;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class OperatorController extends Controller
{
    public function index()
    {
        $operators = Admin::where('role', 'operator')->get();

        return Inertia::render('admin/operators', [
            'operators' => $operators,
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
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $operator = Admin::create([
            'id' => (string) Str::uuid(),
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'operator',
        ]);

        $user = Auth::user()?->full_name ?? 'System';

        $this->createSystemLog(
            'Operator Created',
            "Operator {$operator->first_name} {$operator->last_name} ({$operator->email}) was created by {$user}.",
            'create'
        );

        return redirect()->route('operators.index')->with('success', 'Operator created successfully.');
    }

    public function update(Request $request, Admin $operator)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email,' . $operator->id,
        ]);

        $operator->update($request->only('first_name', 'last_name', 'email'));
        
        $user = Auth::user()?->full_name ?? 'System';

        $this->createSystemLog(
            'Operator Updated',
            "Operator {$operator->first_name} {$operator->last_name} ({$operator->email}) was updated by {$user}.",
            'update'
        );


        return redirect()->route('operators.index')->with('success', 'Operator updated successfully.');
    }

    public function destroy(Admin $operator)
    {
        $operatorName = "{$operator->first_name} {$operator->last_name}";
        $operator->delete();

        $user = Auth::user()?->full_name ?? 'System';

        $this->createSystemLog(
            'Operator Deleted',
            "Operator {$operatorName} ({$operator->email}) was deleted by {$user}.",
            'delete'
        );

        return redirect()->route('operators.index')->with('success', 'Operator deleted successfully');
    }
}
