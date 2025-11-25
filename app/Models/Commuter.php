<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commuter extends Model
{
    use HasFactory;

    protected $table = 'commuters';
    protected $primaryKey = 'commuter_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'commuter_id',
        'first_name',
        'last_name',
        'phone',
        'email',
        'password',
        'photo',
        'otp_code',
        'is_verified',
    ];

    protected $hidden = [
        'password',
        'otp_code',
    ];
    
    public function rides()
    {
        return $this->hasMany(Ride::class, 'commuter_id', 'commuter_id');
    }
}