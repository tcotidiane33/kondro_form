<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
<<<<<<< HEAD
=======
        'lesson_id',
>>>>>>> c3bfa8409ed690d46be910b00f1d26386d1c2ba3
        'title',
        'type',
        'content',
        'content_url',
<<<<<<< HEAD
        'lesson_id',
    ];

=======
    ];
>>>>>>> c3bfa8409ed690d46be910b00f1d26386d1c2ba3
    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
