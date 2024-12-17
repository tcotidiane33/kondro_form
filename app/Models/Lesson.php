<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'course_id',
        'description',
        'notes',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function material()
    {
        return $this->hasMany(Material::class);
    }
    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }
}
