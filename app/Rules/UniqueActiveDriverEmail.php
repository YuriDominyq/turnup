<?php

namespace App\Rules;

use App\Models\Driver;

class UniqueActiveDriverEmail
{
    protected ?int $ignoreId;

    public function __construct(?int $ignoreId = null)
    {
        $this->ignoreId = $ignoreId;
    }

    public function __invoke($attribute, $value, $fail)
    {
        $query = Driver::where('email', $value)
                       ->whereHas('route', fn($q) => $q->where('disabled', false));

        if ($this->ignoreId) {
            $query->where('drivers_id', '!=', $this->ignoreId);
        }

        if ($query->exists()) {
            $fail('The email is already taken for an active route.');
        }
    }
}
