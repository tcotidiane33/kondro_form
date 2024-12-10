<?php

namespace App\Http\Controllers\Backend\Setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Instructor;
use App\Models\Lesson;
use App\Models\User;
use App\Models\Student;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Payment;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Vérifier si l'utilisateur est connecté
        if (!Auth::check()) {
            return redirect()->route('login');
        }


        $user = Auth::user();

        // Données communes à tous les tableaux de bord
        $totalStudents = Student::count();
        $totalInstructors = Instructor::count();
        $totalCourses = Course::count();
        $totalLessons = Lesson::count();
        $totalEnrollments = Enrollment::count();
        $totalRevenue = Payment::sum('amount');

        // Données spécifiques pour les 30 derniers jours
        $lastMonthStudents = Student::where('created_at', '>=', now()->subDays(30))->count();
        $lastMonthCourses = Course::where('created_at', '>=', now()->subDays(30))->count();
        $lastMonthRevenue = Payment::where('created_at', '>=', now()->subDays(30))->sum('amount');

        // Récupérer les 5 derniers étudiants inscrits
        $recentStudents = Student::orderBy('created_at', 'desc')->take(5)->get();

        // Données pour les graphiques (exemple simple)
        $monthlyRevenue = Payment::selectRaw('MONTH(created_at) as month, SUM(amount) as total')
            ->whereYear('created_at', date('Y'))
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('total', 'month')
            ->toArray();

        $data = compact(
            'totalStudents',
            'totalCourses',
            'totalLessons',
            'totalInstructors',
            'totalEnrollments',
            'totalRevenue',
            'lastMonthStudents',
            'lastMonthCourses',
            'lastMonthRevenue',
            'recentStudents',
            'monthlyRevenue'
        );

        if ($user->role->identity === 'admin' && $user->full_access == 1) {
            return Inertia::render('Backend/Dashboard/AdminDashboard', $data);
        } elseif ($user->role->identity === 'instructor') {
            // Ajouter des données spécifiques pour les instructeurs si nécessaire
            $instructorCourses = Course::where('instructor_id', $user->id)->count();
            $instructorStudents = Enrollment::whereHas('course', function ($query) use ($user) {
                $query->where('instructor_id', $user->id);
            })->count();
            $data['instructorCourses'] = $instructorCourses;
            $data['instructorStudents'] = $instructorStudents;

            return Inertia::render('Backend/Dashboard/InstructorDashboard', $data);
        } else {
            return Inertia::render('Backend/Dashboard/Dashboard', $data);
        }
    }
}
