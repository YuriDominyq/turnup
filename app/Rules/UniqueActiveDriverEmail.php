<?php

namespace App\Rules;

use App\Models\Driver;

class UniqueActiveDriverEmail implements Rule
{
    public function __invoke($attribute, $value, $fail)
    {
        $exists = Driver::where('email', $value)
            ->whereHas('route', fn($q) => $q->where('disabled', false))
            ->exists();

        if ($exists) {
            $fail('The email is already taken for an active route.');
        }
    }
}
