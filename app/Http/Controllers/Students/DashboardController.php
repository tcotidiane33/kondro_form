<?php
namespace App\Http\Controllers\Students;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Student;
use App\Models\Checkout;
use App\Models\Enrollment;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $student_info = Auth::user();
        $enrollment = Enrollment::where('student_id', $student_info->id)->with('course')->get();
        $courses = Course::all();
        $checkout = Checkout::where('student_id', $student_info->id)->with('course')->get();

        return Inertia::render('Students/Dashboard', [
            'student_info' => $student_info,
            'enrollment' => $enrollment,
            'courses' => $courses,
            'checkout' => $checkout,
        ]);
    }
}
