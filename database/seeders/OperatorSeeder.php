<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class OperatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Admin::create([
            'id' => Str::uuid(),
            'first_name' => 'Dummy',
            'last_name' => 'Operator',
            'phone' => '09123456789',
            'photo_url' => null,
            'email' => 'operator@example.com',
            'password' => Hash::make('password123'),
            'role' => 'operator',
            'email_verified_at' => now(),
        ]);
    }
}
