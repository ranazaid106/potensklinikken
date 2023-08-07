<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoogleCalender extends Model
{
    use HasFactory;
    protected $fillable =[
        'start_time',
        'end_time',
        'day',
        'day_number',
        'start_time_short',
        'end_time_short',
        'start_date',
        'end_date',
        'inser_id',
    ];

   
}

