<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'course_category_id',
        'instructor_id',
        'type',
        'price',
        'old_price',
        'subscription_price',
        'start_from',
        'duration',
        'lesson',
        'prerequisites',
        'difficulty',
        'course_code',
        'image',
        'thumbnail_image',
        'thumbnail_video',
        'status',
        'language',
        'tag',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'old_price' => 'decimal:2',
        'subscription_price' => 'decimal:2',
        'start_from' => 'datetime',
        'duration' => 'integer',
        'lesson' => 'integer',
        'status' => 'integer',
    ];

    public function courseCategory()
    {
        return $this->belongsTo(CourseCategory::class);
    }

    // public function instructor()
    // {
    //     return $this->belongsTo(Instructor::class);
    // }
    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }
    public function material()
    {
        return $this->hasMany(Material::class);
    }

    public function quiz()
    {
        return $this->hasMany(Quiz::class);
    }

    public function review()
    {
        return $this->hasMany(Review::class);
    }

    public function discussion()
    {
        return $this->hasMany(Discussion::class);
    }

    public function enrollment()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function lesson()
    {
        return $this->hasMany(Lesson::class);
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }
}
