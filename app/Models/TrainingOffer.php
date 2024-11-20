<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingOffer extends Model
{
    use HasFactory;

    protected $fillable = [
        'instructor_id',
        'title',
        'description',
        'price',
        'status',
        'subscription_type',
        'access_level',
        'duration_months',
        'max_participants',
        'features',
        'platforms',
        'technologies',
        'certification_id',
        'start_date',
        'end_date',
        'is_live_event',
        'additional_materials',
    ];

    protected $casts = [
        'features' => 'array',
        'platforms' => 'array',
        'technologies' => 'array',
        'additional_materials' => 'array',
        'is_live_event' => 'boolean',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }


    public function courseCategory()
    {
        return $this->belongsTo(CourseCategory::class, 'course_category_id');
    }

    public function trainingOffer()
    {
        return $this->belongsTo(TrainingOffer::class);
    }
}
