<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Ride extends Model
{
    use HasFactory;

    protected $table = 'rides';
    protected $primaryKey = 'ride_id';
    public $incrementing = false;
    protected $keyType = 'string';


    protected $fillable = [
        'ride_id',
        'driver_id',
        'commuter_id',
        'route_id',
        'start_stop_id',
        'end_stop_id',
        'start_lat',
        'start_lng',
        'end_lat',
        'end_lng',
        'status',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model){
            if(empty($model->ride_id)){
                $model->ride_id = self::generateRideId();
            }
        });
    }

    private static function generateRideId()
    {
        $prefix = 'RIDE-' . date('Y') . '-';
        $random = strtoupper(Str::random(5));
        $id = $prefix . $random;

        while (self::where('ride_id', $id)->exists()){
            $random = strtoupper(Str::random(5));
            $id = $prefix . $random;
        }

        return $id;
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class, 'driver_id', 'drivers_id');
    }

    public function commuter()
    {
        return $this->belongsTo(Commuter::class, 'commuter_id', 'commuter_id');
    }

    public function route()
    {
        return $this->belongsTo(Route::class, 'route_id', 'id');
    }

    public function startStop()
    {
        return $this->belongsTo(Stop::class, 'start_stop_id', 'id');
    }

    public function endStop()
    {
        return $this->belongsTo(Stop::class, 'end_stop_id', 'id');
    }
}
