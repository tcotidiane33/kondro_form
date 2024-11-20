<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckInstructor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {   
        if (!session()->has('instructorLogin') || session('instructorLogin') != 1) {
            return redirect()->route('instructorLogin')->with('error', 'Please login first');
        }
        return $next($request);
    }
}
