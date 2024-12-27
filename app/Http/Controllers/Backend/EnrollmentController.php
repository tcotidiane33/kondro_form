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
    public function index()
    {
        $user = Auth::user();
        $student = $user->student;
        $enrollments = Enrollment::where('student_id', $student->id)->with('course')->get();

        return Inertia::render('Backend/Enrollments/Index', ['enrollments' => $enrollments]);
    }

    public function enroll($courseId)
    {
        try {
            $user = Auth::user();
            $student = $user->student;

            $enrollment = new Enrollment();
            $enrollment->student_id = $student->id;
            $enrollment->course_id = $courseId;
            $enrollment->enrollment_date = now();
            $enrollment->save();

            return redirect()->route('student.dashboard')->with('success', 'Enrolled successfully.');
        } catch (Exception $e) {
            Log::error('Error enrolling student: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Please try again.');
        }
    }

    public function unenroll($courseId)
    {
        try {
            $user = Auth::user();
            $student = $user->student;

            Enrollment::where('student_id', $student->id)
                ->where('course_id', $courseId)
                ->delete();

            return redirect()->route('student.dashboard')->with('success', 'Unenrolled successfully.');
        } catch (Exception $e) {
            Log::error('Error unenrolling student: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Please try again.');
        }
    }
}
