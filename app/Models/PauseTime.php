<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PauseTime extends Model
{
    use HasFactory;
    protected $fillable = [
        'google_calender_id',
        'day',
        'start_pouse',
        'end_pouse',
      
    ];
}

