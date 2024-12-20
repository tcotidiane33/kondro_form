<?php

namespace App\Http\Controllers\Backend\Courses;

use App\Http\Controllers\Controller;
use App\Models\Chapter;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChapterController extends Controller
{
    public function index()
    {
        $chapters = Chapter::with('course')->get();
        return Inertia::render('Courses/Chapters/Index', compact('chapters'));
    }

    public function create()
    {
        $courses = Course::all();
        return Inertia::render('Courses/Chapters/Create', compact('courses'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'course_id' => 'required|exists:courses,id',
        ]);

        Chapter::create($request->all());

        return redirect()->route('chapters.index')->with('success', 'Chapitre créé avec succès.');
    }

    public function show(Chapter $chapter)
    {
        $chapter->load('course', 'lessons');
        return Inertia::render('Courses/Chapters/Show', compact('chapter'));
    }

    public function edit(Chapter $chapter)
    {
        $courses = Course::all();
        return Inertia::render('Courses/Chapters/Edit', compact('chapter', 'courses'));
    }

    public function update(Request $request, Chapter $chapter)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'course_id' => 'required|exists:courses,id',
        ]);

        $chapter->update($request->all());

        return redirect()->route('chapters.index')->with('success', 'Chapitre mis à jour avec succès.');
    }

    public function destroy(Chapter $chapter)
    {
        $chapter->delete();

        return redirect()->route('chapters.index')->with('success', 'Chapitre supprimé avec succès.');
    }
}
