<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */    /**
          * Détermine si l'utilisateur peut mettre à jour un autre utilisateur.
          */
    public function update(User $currentUser, User $targetUser): bool
    {
        // Exemple : Seul un administrateur ou l'utilisateur lui-même peut se mettre à jour
        // return $currentUser->role_id === 1 || $currentUser->id === $targetUser->id;
        // Vérifiez si l'utilisateur actuel a la permission de mettre à jour l'utilisateur cible
        return $currentUser->hasPermissionTo('user.edit') || $currentUser->id === $targetUser->id;
    }
    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $model): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, User $model): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, User $model): bool
    {
        return false;
    }
}
