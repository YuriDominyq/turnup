<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stop extends Model
{
    use HasFactory;

    protected $fillable = ['route_id', 'name', 'lat', 'lng', 'order'];

    public function route()
    {
        return $this->belongsTo(Route::class);
    }
}