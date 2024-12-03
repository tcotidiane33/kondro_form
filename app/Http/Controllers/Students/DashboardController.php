<?php

namespace App\Http\Controllers\Students;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Enrollment;
use App\Models\Course;
use App\Models\Checkout;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $student_info = Student::find(currentUserId());
        $enrollment = Enrollment::where('student_id', currentUserId())->with('course')->get();
        $courses = Course::all();
        $checkout = Checkout::where('student_id', currentUserId())->get();

        return Inertia::render('Students/Dashboard', [
            'student_info' => $student_info,
            'enrollment' => $enrollment,
            'courses' => $courses,
            'checkout' => $checkout,
        ]);
    }
}
