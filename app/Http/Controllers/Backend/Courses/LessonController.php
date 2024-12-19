<?php

namespace App\Http\Controllers\Backend\Courses;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::all();
        return Inertia::render('Courses/Lessons/Index', ['lessons' => $lessons]);
    }

    public function create()
    {
        $courses = Course::all();
        return Inertia::render('Courses/Lessons/Create', ['courses' => $courses]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'course_id' => 'required|exists:courses,id',
            'description' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        Lesson::create([
            'title' => $request->input('title'),
            'course_id' => $request->input('course_id'),
            'description' => $request->input('description'),
            'notes' => $request->input('notes'),
        ]);

        return redirect()->route('lessons.index')->with('success', 'Leçon créée avec succès.');
    }

    public function show(Lesson $lesson)
    {
        $lesson->load('course');
        return Inertia::render('Courses/Lessons/Show', ['lesson' => $lesson]);
    }

    public function edit(Lesson $lesson)
    {
        $courses = Course::all();
        return Inertia::render('Courses/Lessons/Edit', ['lesson' => $lesson, 'courses' => $courses]);
    }

    public function update(Request $request, Lesson $lesson)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'course_id' => 'required|exists:courses,id',
            'description' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        $lesson->update([
            'title' => $request->input('title'),
            'course_id' => $request->input('course_id'),
            'description' => $request->input('description'),
            'notes' => $request->input('notes'),
        ]);

        return redirect()->route('lessons.index')->with('success', 'Leçon mise à jour avec succès.');
    }

    public function destroy(Request $request, Lesson $lesson)
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->input('password'), $user->password)) {
            return redirect()->route('lessons.index')->withErrors(['password' => 'Le mot de passe est incorrect.']);
        }

        $lesson->delete();

        return redirect()->route('lessons.index')->with('success', 'Leçon supprimée avec succès.');
    }
}
