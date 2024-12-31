<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use App\Models\Permission;
use Brian2694\Toastr\Facades\Toastr;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        if (!Session::has('userId') || Session::get('userId') == null) {
            return redirect()->route('logout')->with('method', 'POST');
        } else {
            $user = User::where('status', 1)->where('id', Session::get('userId'))->first();
            if (!$user) {
                return redirect()->route('logout')->with('method', 'POST');
            } else if ($user->full_access == "1" || $user->role == $role || $user->role == 'Admin') {
                return $next($request);
            } else {
                $auto_accept = array("POST", "PUT");
                if (in_array($request->route()->methods[0], $auto_accept)) {
                    return $next($request);
                } else {
                    if (Permission::where('role_id', $user->role_id)->where('name', $request->route()->getName())->exists())
                        return $next($request);
                    else {
                        Toastr::warning("You don't have permission to access this page");
                        return redirect()->back();
                    }
                }
            }
        }
        return redirect()->route('logout')->with('method', 'POST');
    }
}
