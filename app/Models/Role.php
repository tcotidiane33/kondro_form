<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
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
        'guard_name',
        'identity',
    ];

    // relation with user
    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class);
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
      public function permissions(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
      {
          return $this->belongsToMany(Permission::class, 'role_has_permissions');
      }
}
