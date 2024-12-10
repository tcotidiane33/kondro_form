<?php
namespace App\Helpers;

use Illuminate\Support\Facades\Auth;

if (!function_exists('fullAccess')) {
    function fullAccess()
    {
        $user = Auth::user();
        return $user && $user->full_access == 1;
    }
}
