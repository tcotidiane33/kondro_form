<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable, SoftDeletes;

    // The attributes that are mass assignable.
    protected $fillable = [
        'name',
        'email',
        'password',
        'contact', 
        'role_id',
        'image',
        'language',
        'full_access',
        'status',
        'instructor_id',
        'last_login_at',
        'last_logout_at',
        'last_login_interval'
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

    protected $dates = [
        'last_login_at',
        'last_logout_at'
    ];
    //
    public function getLastLoginIntervalAttribute($value)
    {
        if ($value === null) {
            return 'N/A'; // Valeur par défaut si last_login_interval est null
        }

        return Carbon::createFromTimestamp($value)->diffForHumans();
    }

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
