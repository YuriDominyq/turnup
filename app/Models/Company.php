<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
   protected $table = 'company';
   protected $primaryKey = 'company_id';

   public $incrementing = false;
   protected $keyType = 'string';

   protected $fillable = [
        'company_id',
        'company_name',
        'route_id',
   ];

   protected static function boot()
   {
        parent::boot();

        static::creating(function ($model) {
            if(empty($model->company_id)){
                do{
                    $randomId = 'COMP' . strtoupper(Str::random(6));
                }while (self::where('company_id', $randomId)->exists());

                $model->company_id = $randomId;
            }
        });
   }

   public function route(){
        return $this->belongsTo(Route::class, 'route_id', 'id');
   }

}
