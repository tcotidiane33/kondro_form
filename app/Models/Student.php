<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'contact', 'email', 'role_id', 'date_of_birth',
        'gender', 'image', 'bio', 'profession', 'nationality',
        'address', 'city', 'state', 'postcode', 'country',
        'status', 'password', 'language', 'access_block', 'user_id'
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'enrollments');
    }

    public function lessons()
    {
        return $this->belongsToMany(Lesson::class, 'progress')->withPivot('progress_percentage', 'completed');
    }

    public function quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'quiz_student');
    }
}
