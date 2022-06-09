<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tracks extends Model
{
    use HasFactory;
    public $fillable = [
        'title',
        'track_type_id',
        'track_frequency',
        'duration_in_mins',
        'skill_level',
        'skip_weekends',
        'start_date',
        'end_date',
        'has_end_date',
        'student_capacity',
        'medium_of_instruction',
        'delivery_method',
        'rate_per_class',
        'is_first_class_free',
        'enrolment_start_date',
        'created_by',
        'updated_by'
    ];

}
