<?php

namespace App\Http\Controllers\Backend\Courses;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::with('chapter', 'course')->get();
        $chapters = Chapter::all();
        $courses = Course::with('chapters.lessons')->get();

        return Inertia::render('Courses/Lessons/Index', ['lessons' => $lessons,'chapters' => $chapters, 'courses' => $courses]);
    }

    public function create()
    {
        $chapters = Chapter::all();
        $courses = Course::all();
        return Inertia::render('Courses/Lessons/Create', ['chapters' => $chapters, 'courses' => $courses]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'chapter_id' => 'required|exists:chapters,id',
            'course_id' => 'required|exists:courses,id',
            'description' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        Lesson::create([
            'title' => $request->input('title'),
            'chapter_id' => $request->input('chapter_id'),
            'course_id' => $request->input('course_id'),
            'description' => $request->input('description'),
            'notes' => $request->input('notes'),
        ]);

        return redirect()->route('lessons.index')->with('success', 'Leçon créée avec succès.');
    }

    public function show(Lesson $lesson)
    {
        $lesson->load('chapter', 'course');
        return Inertia::render('Courses/Lessons/Show', ['lesson' => $lesson]);
    }

    public function edit(Lesson $lesson)
    {
        $chapters = Chapter::all();
        $courses = Course::all();
        return Inertia::render('Courses/Lessons/Edit', ['lesson' => $lesson, 'chapters' => $chapters, 'courses' => $courses]);
    }

    public function update(Request $request, Lesson $lesson)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'chapter_id' => 'required|exists:chapters,id',
            'course_id' => 'required|exists:courses,id',
            'description' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        $lesson->update([
            'title' => $request->input('title'),
            'chapter_id' => $request->input('chapter_id'),
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
