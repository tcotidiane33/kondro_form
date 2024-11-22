<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        // 'permissions',
        'identity',

    ];

    // relation with user
    public function users()
    {
        return $this->hasMany(User::class);
    }
    public function students()
    {
        return $this->hasMany(Student::class);
    }

    public function instructors()
    {
        $this->hasMany(Instructor::class);
    }

    /**
     * The permissions that belong to the role.
      */
      public function permissions()
      {
          return $this->belongsToMany(Permission::class, 'permission_role');
      }
}
