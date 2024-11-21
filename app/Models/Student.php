<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'contact', 'email', 'role_id', 'date_of_birth',
        'gender', 'status', 'password', 'language', 'access_block'
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

    public function enrollemnt()
    {
        return $this->hasMany(Enrollment::class);
    }

}
