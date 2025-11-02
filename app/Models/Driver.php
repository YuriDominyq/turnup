<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Driver extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $primaryKey = 'drivers_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'drivers_id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'password',
        'vehicle_type',
        'license_plate',
        'route_id',
        'operator_id',
        'avatar_url',
        'status',
        'rating',
        'total_trips',
        'license_url',
        'registration_url',
        'insurance_url',
        'franchise_url',
    ];

    protected $hidden = ['password'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model){
            if(empty($model->drivers_id)){
                $model->drivers_id = self::generateCustomId();
            }
        });
    }

    private static function generateCustomId()
    {
        $year = date('Y');
        $prefix = "DRV-$year-";
        $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        $randomLetters = '';
        for($i = 0; $i < 3; $i++){
            $randomLetters .= $letters[rand(0, 25)];
        }

        $id = $prefix . $randomLetters;

        while(self::where('drivers_id', $id)->exists()){
            $randomLetters = '';
            for($i = 0; $i < 3; $i++){
                $randomLetters .= $letters[rand(0, 25)];
            }
            $id = $prefix . $randomLetters;
        }

        return $id;
    }

    public function route()
    {
        return $this->belongsTo(Route::class, 'route_id', 'id');
    }

    public function operator()
    {
        return $this->belongsTo(Admin::class, 'operator_id', 'id');
    }

    public function checkIns()
    {
        return $this->hasMany(DriverCheckIn::class, 'driver_id', 'drivers_id');
    }

    public function rides()
    {
        return $this->hasMany(Ride::class, 'driver_id', 'drivers_id');
    }
}
