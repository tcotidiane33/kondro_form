<?php

namespace App\Http\Controllers\Backend\Students;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\Role;

class StudentDashboardController extends Controller
{
    public function index()
    {
        Log::info('StudentDashboardController@index: Start');

        // Vérifier si l'utilisateur est connecté
        if (!Auth::check()) {
            Log::warning('StudentDashboardController@index: User not authenticated');
            return redirect()->route('login');
        }

        $user = Auth::user();
        Log::info('StudentDashboardController@index: User authenticated', ['user_id' => $user->id]);

        // Vérifiez si l'utilisateur a le rôle d'étudiant
        $studentRole = Role::where('identity', 'student')->first();
        if ($user->role_id !== $studentRole->id) {
            Log::warning('StudentDashboardController@index: Unauthorized action', ['user_id' => $user->id, 'role_id' => $user->role_id]);
            abort(403, 'Unauthorized action.');
        }

        Log::info('StudentDashboardController@index: User is a student', ['user_id' => $user->id]);

        // Récupérer l'étudiant correspondant
        $student = Student::where('user_id', $user->id)->first();

        if (!$student) {
            Log::error('StudentDashboardController@index: Student not found', ['user_id' => $user->id]);
            abort(404, 'Student not found.');
        }

        // Récupérer les données nécessaires pour le tableau de bord
        $courses = $student->courses()->with('lessons')->get();
        $answers = $student->answers()->with('question')->get();
        $role = $user->role->name; // Récupérer le nom du rôle

        $data = [
            'student' => $student,
            'courses' => $courses,
            'answers' => $answers,
            'role' => $role, // Inclure le rôle dans les données
        ];

        return Inertia::render('Backend/Dashboard/Dashboard', $data)->with([
            'auth' => [
            'user' => auth()->user()->load('role'),
            ],
        ]);
    }
}
