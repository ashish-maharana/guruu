<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachSubject extends Model
{
    use HasFactory;

    public $fillable = [
        'user_id',
        'teach',
    ];

    protected $casts = [
        'teach' => 'array'
    ];
}
