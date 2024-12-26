<?php

namespace App\Http\Controllers\Backend\Instructors;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Instructor;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Enrollment;
use App\Models\Payment;

class InstructorDashboardController extends Controller
{
    public function index()
    {
        // Vérifier si l'utilisateur est connecté
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();

        // Vérifiez si l'utilisateur a le rôle d'instructeur
        if ($user->role_id !== config('roles.instructor')) {
            abort(403, 'Unauthorized action.');
        }

        // Données spécifiques à l'instructeur
        $totalCourses = Course::where('instructor_id', $user->id)->count();
        $totalLessons = Lesson::whereHas('course', function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })->count();
        $totalEnrollments = Enrollment::whereHas('course', function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })->count();
        $totalRevenue = Payment::whereHas('course', function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })->sum('amount');

        // Données spécifiques pour les 30 derniers jours
        $lastMonthCourses = Course::where('instructor_id', $user->id)
            ->where('created_at', '>=', now()->subDays(30))
            ->count();
        $lastMonthRevenue = Payment::whereHas('course', function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })->where('created_at', '>=', now()->subDays(30))->sum('amount');

        // Récupérer les 5 derniers cours créés par l'instructeur
        $recentCourses = Course::where('instructor_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        // Données pour les graphiques (exemple simple)
        $monthlyRevenue = Payment::selectRaw('MONTH(created_at) as month, SUM(amount) as total')
            ->whereHas('course', function ($query) use ($user) {
                $query->where('instructor_id', $user->id);
            })
            ->whereYear('created_at', date('Y'))
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('total', 'month')
            ->toArray();

        $data = compact(
            'totalCourses',
            'totalLessons',
            'totalEnrollments',
            'totalRevenue',
            'lastMonthCourses',
            'lastMonthRevenue',
            'recentCourses',
            'monthlyRevenue'
        );

        return Inertia::render('Backend/Dashboard/InstructorDashboard', $data);
    }
}
