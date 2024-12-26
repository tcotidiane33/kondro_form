<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable, SoftDeletes;

    // The attributes that are mass assignable.
    protected $fillable = [
        'name',
        'email',
        'password',
        'contact', // Ajoutez cette ligne si elle n'est pas déjà présente
        'role_id',
        'status',
        'instructor_id',
    ];

    // The attributes that should be hidden for serialization.
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // The attributes that should be cast.
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function isAdmin()
    {
        return $this->role->name === 'Admin';
    }

    public function isInstructor()
    {
        return $this->role->name === 'Instructor';
    }

    public function isStudent()
    {
        return $this->role->name === 'Student';
    }

    // relation with role
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function instructors()
    {
        $this->belongsTo(Instructor::class);
    }

    public function discussion()
    {
        return $this->hasMany(Discussion::class);
    }

    public function message()
    {
        return $this->hasMany(Message::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class, 'instructor_id');
    }


    public function student()
    {
        return $this->hasOne(Student::class);
    }

    public function instructor()
    {
        return $this->belongsTo(Instructor::class);
    }
}
