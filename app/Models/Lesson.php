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
        'chapter_id',
        'description',
        'notes',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }

    public function materials()
    {
        return $this->hasMany(Material::class);
    }
    // public function chapters()
    // {
    //     return $this->hasMany(Chapter::class);
    // }
}
