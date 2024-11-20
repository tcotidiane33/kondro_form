<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCategory extends Model
{
    use HasFactory;

    // public function course(){
    //     return $this->hasMany(Course::class);
    // }

    protected $fillable = [
        'category_name',
        'category_status',
        'category_image',
    ];

    public function trainingOffers()
    {
        return $this->hasMany(TrainingOffer::class);
    }
    public function courses()
    {
        return $this->hasMany(Course::class, 'course_category_id');
    }
}
