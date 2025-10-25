<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_terminal', 'second_terminal', 'created_by', 'polyline', 'color'
    ];

    protected $casts = [
        'polyline' => 'array',
    ];

    public function admin(){
        return $this->belongsTo(Admin::class, 'created_by');
    }

    public function stops(){
        return $this->hasMany(Stop::class);
    }
}