<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'lesson_id',
        'content',
    ];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
