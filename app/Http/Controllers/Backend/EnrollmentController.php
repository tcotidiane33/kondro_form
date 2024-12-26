<?php

namespace App\Http\Controllers\Backend\Enrollments;

use Exception;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Backend\EnrollmentRequest;

class EnrollmentController extends Controller
{
    public function create()
    {
        $courses = Course::all();
        return Inertia::render('Backend/Enrollments/Create', ['courses' => $courses]);
    }

    public function store(EnrollmentRequest $request)
    {
        try {
            $user = Auth::user();
            $student = $user->student;

            $enrollment = new Enrollment();
            $enrollment->student_id = $student->id;
            $enrollment->course_id = $request->course_id;
            $enrollment->enrollment_date = $request->enrollment_date;
            $enrollment->save();

            return redirect()->route('student.dashboard')->with('success', 'Enrolled successfully.');
        } catch (Exception $e) {
            Log::error('Error enrolling student: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Please try again.');
        }
    }
}
