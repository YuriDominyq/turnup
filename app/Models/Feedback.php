<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedback';
    protected $primaryKey = 'feedback_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'feedback_id',
        'ride_id',
        'drivers_id',
        'commuter_id',
        'rating',
        'comment',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($model){
            if(empty($model->feedback_id)){
                $model->feedback_id = self::generateCustomId(0);
            }
        });
    }

    private static function generateCustomId()
    {
        $year = date('Y');
        $prefix = "FDB-$year-";
        $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';

        $randomPart = '';
        for($i = 0; $i < 3; $i++){
            $randomPart .= $letters[rand(0, 25)];
        }
        for($i = 0; $i < 3; $i++){
            $randomPart .= $numbers[rand(0, 9)];
        }

        $id = $prefix . $randomPart;

        while(self::where('feedback_id', $id)->exists()){
            $randomPart = '';

            for ($i = 0; $i < 3; $i++) {
                $randomPart .= $letters[rand(0, 25)];
            }
            for ($i = 0; $i < 3; $i++) {
                $randomPart .= $numbers[rand(0, 9)];
            }
            $id = $prefix . $randomPart;
        }

        return $id;
    }

    public function ride()
    {
        return $this->belongsTo(Ride::class, 'ride_id', 'ride_id');
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class, 'drivers_id', 'drivers_id');
    }

    public function commuter()
    {
        return $this->belongsTo(Commuter::class, 'commuter_id', 'commuter_id');
    }
}