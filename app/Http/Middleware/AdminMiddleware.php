<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // if (Auth::check() && Auth::user()->isAdmin()) {
        // if (Auth::check() && Auth::user()->role->identity === 'admin') {
        // if (Auth::check() && Auth::user()->role === 'Admin') {
        //     return $next($request);
        // }
        if (Auth::check() && Auth::user()->role && Auth::user()->role->identity === 'admin') {
            return $next($request);
        }

        return redirect('/')->with('error', 'Vous n\'avez pas accès à l\'administration.');
    }
}
