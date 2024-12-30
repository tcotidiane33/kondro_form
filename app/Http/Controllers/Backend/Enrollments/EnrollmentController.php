<?php

namespace App\Http\Controllers\Backend\Enrollments;

use Exception;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class EnrollmentController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $student = $user->student;
        $enrollments = Enrollment::where('student_id', $student->id)
            ->with(['course.instructor'])
            ->get();
        $wishlist = Wishlist::where('student_id', $student->id)
            ->with(['course.instructor'])
            ->get();

            // Ajout des statistiques pour chaque cours
        foreach ($enrollments as $enrollment) {
            $enrollment->course->enroll_count = Enrollment::where('course_id', $enrollment->course_id)->count();
            $enrollment->course->wishlist_count = Wishlist::where('course_id', $enrollment->course_id)->count();
        }

        foreach ($wishlist as $wish) {
            $wish->course->enroll_count = Enrollment::where('course_id', $wish->course_id)->count();
            $wish->course->wishlist_count = Wishlist::where('course_id', $wish->course_id)->count();
        }

        return Inertia::render('Backend/Enrollments/Index', [
            'enrollments' => $enrollments,
            'wishlist' => $wishlist
        ]);
    }

    public function enroll($courseId)
    {
        try {
            $user = Auth::user();
            $student = $user->student;

            // Vérifiez si l'étudiant est déjà inscrit à ce cours
            $existingEnrollment = Enrollment::where('student_id', $student->id)
                ->where('course_id', $courseId)
                ->first();

            if ($existingEnrollment) {
                return redirect()->back()->with('error', 'Vous êtes déjà inscrit à ce cours.');
            }

            $enrollment = new Enrollment();
            $enrollment->student_id = $student->id;
            $enrollment->course_id = $courseId;
            $enrollment->enrollment_date = now();
            $enrollment->save();

            return redirect()->route('student.dashboard')->with('success', 'Inscription réussie.');
        } catch (Exception $e) {
            Log::error('Erreur lors de l\'inscription de l\'étudiant : ' . $e->getMessage());
            return redirect()->back()->with('error', 'Veuillez réessayer.');
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

            return redirect()->route('student.dashboard')->with('success', 'Désinscription réussie.');
        } catch (Exception $e) {
            Log::error('Erreur lors de la désinscription de l\'étudiant : ' . $e->getMessage());
            return redirect()->back()->with('error', 'Veuillez réessayer.');
        }
    }

    public function addToWishlist($courseId)
    {
        try {
            $user = Auth::user();
            $student = $user->student;

            // Vérifiez si le cours est déjà dans la liste de souhaits
            $existingWishlist = Wishlist::where('student_id', $student->id)
                ->where('course_id', $courseId)
                ->first();

            if ($existingWishlist) {
                return redirect()->back()->with('error', 'Ce cours est déjà dans votre liste de souhaits.');
            }

            $wishlist = new Wishlist();
            $wishlist->student_id = $student->id;
            $wishlist->course_id = $courseId;
            $wishlist->save();

            return redirect()->route('student.dashboard')->with('success', 'Ajouté à la liste de souhaits avec succès.');
        } catch (Exception $e) {
            Log::error('Erreur lors de l\'ajout à la liste de souhaits : ' . $e->getMessage());
            return redirect()->back()->with('error', 'Veuillez réessayer.');
        }
    }
}
