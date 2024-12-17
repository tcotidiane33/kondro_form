<?php

namespace App\Http\Controllers\Backend\Courses;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

        Lesson::create($request->all());

        return redirect()->route('lessons.index')->with('success', 'Leçon créée avec succès.');
    }

    public function show(Lesson $lesson)
    {
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

        $lesson->update($request->all());

        return redirect()->route('lessons.index')->with('success', 'Leçon mise à jour avec succès.');
    }

    public function destroy(Lesson $lesson)
    {
        $lesson->delete();

        return redirect()->route('lessons.index')->with('success', 'Leçon supprimée avec succès.');
    }
}
