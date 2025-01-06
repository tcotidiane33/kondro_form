<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class TrackUserActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $user = Auth::user();
            $now = Carbon::now();

            // Enregistrer la dernière connexion
            if (!$user->last_login_at) {
                $user->last_login_at = $now;
            }

            // Calculer l'intervalle entre la dernière déconnexion et la reconnexion
            if ($user->last_logout_at) {
                $interval = $now->diffInSeconds($user->last_logout_at);
                $user->last_login_interval = $interval;
            }

            // Mettre à jour la dernière connexion
            $user->last_login_at = $now;
            $user->save();
        }

        return $next($request);
    }

    /**
     * Handle tasks after the response has been sent to the browser.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Http\Response  $response
     * @return void
     */
    public function terminate($request, $response)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user->last_logout_at = Carbon::now();
            $user->save();
        }
    }
}
