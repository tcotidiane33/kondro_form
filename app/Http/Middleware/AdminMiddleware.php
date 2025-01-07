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
        // Vérifie si l'utilisateur est authentifié
        if (!Auth::check()) {
            return redirect('/login')->with('error', 'Vous devez être connecté pour accéder à cette page.');
        }

        // Vérifie si l'utilisateur a le rôle d'administrateur
        if (Auth::user()->isAdmin()) {
            return $next($request);
        }

        //     // Vérifie si l'utilisateur a le rôle d'administrateur
        // if (Auth::user()->role && Auth::user()->role->name === 'Admin') {
        //     return $next($request);
        // }

        
        // Si l'utilisateur n'est pas administrateur, redirigez-le avec un message d'erreur
        return redirect('/')->with('error', 'Vous n\'avez pas accès à l\'administration.');
    }
}
