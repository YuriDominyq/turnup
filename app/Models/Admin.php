<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;

class Admin extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $table = 'admins';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id', 
        'first_name', 
        'last_name', 
        'phone', 
        'photo_url', 
        'email', 
        'password', 
        'role'
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $appends = ['full_photo_url'];

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function isSuperAdmin(): bool
    {
        return $this->role === 'superadmin';
    }

    public function isOperator():bool
    {
        return $this->role === 'operator';
    }

    
    public function getFullPhotoUrlAttribute()
    {
        if (empty($this->attributes['photo_url'])) {
            return null;
        }
        
        return Storage::disk('r2')->temporaryUrl(
            $this->attributes['photo_url'],
            now()->addMinutes(10)
        );
    }
}
