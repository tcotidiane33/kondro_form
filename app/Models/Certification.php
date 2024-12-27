<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'is_pro',
        'discount',
    ];

    public function trainingOffers()
    {
        return $this->hasMany(TrainingOffer::class);
    }
}
