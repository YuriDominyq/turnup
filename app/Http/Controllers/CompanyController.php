<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Route;
use App\Models\SystemLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::with('route')->get();
        $routes = Route::all();

        return inertia('admin/company', [
            'companies' => $companies,
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
        $request->validate([
            'company_name' => 'required|string|max:255',
            'route_id' => 'required|exists:routes,id',
        ]);

        $company = Company::create([
            'company_name' => $request->company_name,
            'route_id' => $request->route_id,
        ]);

        $user = Auth::user()?->full_name ?? 'System';

        $this->createSystemLog(
            'Company Created',
            "{$user} created a new company named {$company->company_name}.",
            'create'
        );

       return redirect()->route('admin.company.index')
            ->with('success', 'Company created successfully');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'route_id' => 'required|exists:routes,id',
        ]);

        $company = Company::findOrFail($id);

        $company->update([
            'company_name' => $request->company_name,
            'route_id' => $request->route_id,
        ]);

        $user = Auth::user()?->full_name ?? 'System';

        $this->createSystemLog(
            'Company Updated',
            "{$user} updated the company named {$company->company_name}.",
            'update'
        );

       return redirect()->route('admin.company.index')
          ->with('success', 'Company updated successfully');
    }

    public function destroy($id)
    {
        $company = Company::findOrFail($id);
        $company->delete();

        $user = Auth::user()->name ?? 'System';

        $this->createSystemLog(
            'Company Deleted',
            "{$user} deleted a company named {$company->company_name}.",
            'delete'
        );

        return redirect()->route('admin.company.index')
            ->with('success', 'Company deleted successfully.');
    }
}
