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
        'status', 'password', 'language', 'access_block'
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function answer()
    {
        return $this->hasMany(Answer::class);
    }

    public function review()
    {
        return $this->hasMany(Review::class);
    }

    public function enrollment()
    {
        return $this->hasMany(Enrollment::class);
    }
}
