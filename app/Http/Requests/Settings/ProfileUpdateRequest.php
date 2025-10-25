<?php

namespace App\Http\Requests\Settings;

use App\Models\Admin;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * @method \App\Models\Admin|null user()
 */

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        /** @var \App\Models\Admin $admin */
        $admin = $this->user();

        return [
            'first_name' => ['sometimes', 'string', 'max:255'],
            'last_name' => ['sometimes', 'string', 'max:255'],

            'email' => [
                'sometimes',
                'string',
                'email',
                'max:255',
                Rule::unique(Admin::class)->ignore($admin->id),
            ],

            'phone' => ['nullable', 'string', 'max:20'],
            'photo_url' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ];
    }

    protected function prepareForValidation()
    {
        if ($this->has('email')) {
            $this->merge([
            'email' => strtolower($this->input('email')),
        ]);
    }
    }
}
