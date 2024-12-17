<?php

namespace App\Http\Controllers\Backend\Courses;

use App\Http\Controllers\Controller;
use App\Models\Chapter;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChapterController extends Controller
{
    public function index(Lesson $lesson)
    {
        $chapters = $lesson->chapters;
        return Inertia::render('Courses/Chapters/Index', compact('lesson', 'chapters'));
    }

    public function create(Lesson $lesson)
    {
        return Inertia::render('Courses/Chapters/Create', compact('lesson'));
    }

    public function store(Request $request, Lesson $lesson)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
        ]);

        $lesson->chapters()->create($request->all());

        return redirect()->route('lessons.chapters.index', $lesson)->with('success', 'Chapitre créé avec succès.');
    }

    public function show(Lesson $lesson, Chapter $chapter)
    {
        return Inertia::render('Courses/Chapters/Show', compact('lesson', 'chapter'));
    }

    public function edit(Lesson $lesson, Chapter $chapter)
    {
        return Inertia::render('Courses/Chapters/Edit', compact('lesson', 'chapter'));
    }

    public function update(Request $request, Lesson $lesson, Chapter $chapter)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
        ]);

        $chapter->update($request->all());

        return redirect()->route('lessons.chapters.index', $lesson)->with('success', 'Chapitre mis à jour avec succès.');
    }

    public function destroy(Lesson $lesson, Chapter $chapter)
    {
        $chapter->delete();

        return redirect()->route('lessons.chapters.index', $lesson)->with('success', 'Chapitre supprimé avec succès.');
    }
}
