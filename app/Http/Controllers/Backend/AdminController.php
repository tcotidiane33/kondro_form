<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Material;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $users = User::with('role')->get();
        $courses = Course::all();
        $lessons = Lesson::all();
        $materials = Material::all();

        return Inertia::render('Backend/Admin/Dashboard', [
            'users' => $users,
            'courses' => $courses,
            'lessons' => $lessons,
            'materials' => $materials,
        ]);
    }

    public function manageCourses()
    {
        $courses = Course::all();
        return Inertia::render('Backend/Admin/Courses/Index', ['courses' => $courses]);
    }

    public function manageLessons()
    {
        $lessons = Lesson::all();
        return Inertia::render('Backend/Admin/Lessons/Index', ['lessons' => $lessons]);
    }

    public function manageMaterials()
    {
        $materials = Material::all();
        return Inertia::render('Backend/Admin/Materials/Index', ['materials' => $materials]);
    }

    public function showUser($id)
    {
        $user = User::with(['role', 'courses'])->findOrFail($id);
        return Inertia::render('Backend/Admin/UserOverview', ['user' => $user]);
    }
}
