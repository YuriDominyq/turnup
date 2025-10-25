<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class SystemLog extends Model
{
    protected $fillable = [
        'log_id',
        'title',
        'description',
        'type',
        'time',
    ];

    public static function generateLogId()
    {
        $date = now()->format('Ymd');

        $lastLog = self::whereDate('created_at', now()->toDateString())
            ->orderBy('id', 'desc')
            ->first();

        if($lastLog){
            $lastNumber = (int) substr($lastLog->log_id, -4);
            $nextNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $nextNumber = '0001';
        }     

        return 'LOG-' . $date . '-' . $nextNumber;
    }
}
