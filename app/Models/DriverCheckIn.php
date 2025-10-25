<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class DriverCheckIn extends Model
{
    protected $table = 'driver_check_ins';

    protected $primaryKey = 'check_in_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'check_in_id',
        'driver_id',
        'status',
        'check_in_time',
        'date',
    ];

    public function driver()
    {
        return $this->belongsTo(Driver::class, 'driver_id', 'drivers_id');
    }

    protected static function booted()
    {
        static::creating(function ($checkin){
            if(empty($checkin->check_in_id)){
                $year = date('Y');
                $randomLetters = Str::upper(Str::random(3));
                $checkin->check_in_id = 'CHECK' . $year . $randomLetters;
            }
        });
    }
}
