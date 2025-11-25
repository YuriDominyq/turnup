<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\ProfileUpdateRequest;
use App\Models\SystemLog;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('settings/profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => $request->session()->get('status'),
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

    /**
     * Update the user's profile settings.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();

        $user->fill($request->validated());

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        if ($request->hasFile('photo_url')) {
            $file = $request->file('photo_url');

            if ($file->isValid()) {

                // Delete old photo from R2
                if ($user->photo_url) {
                    Storage::disk('r2')->delete($user->photo_url);
                }

                // Upload new photo to R2
                $path = $file->store('profile-photos', 'r2');

                // Save only the R2 path
                $user->photo_url = $path;
            }
        }

        $user->save();

        $this->createSystemLog(
            'Profile Updated',
            "User {$user->id} ({$user->first_name} {$user->last_name}) updated their profile",
            'update'
        );

        return to_route('profile.edit');
    }


    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

         $this->createSystemLog(
            'Account Deleted',
            "User {$user->id} ({$user->first_name} {$user->last_name}) deleted their account",
            'delete'
        );

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
