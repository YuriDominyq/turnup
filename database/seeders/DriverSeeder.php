<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Driver;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $operator = Admin::where('role', 'operator')->first();

        if (!$operator) {
            $this->command->info('No operator found. Please create an operator first.');
            return;
        }

        Driver::create([
            'first_name' => 'George',
            'last_name' => 'Bush',
            'email' => 'driver123@example.com',
            'password' => Hash::make('password123'),
            'operator_id' => $operator->id,
            'status' => 'Active',
            'rating' => 4.5,
            'total_trips' => 10,
            'earnings' => 1500,
        ]);
    }
}
