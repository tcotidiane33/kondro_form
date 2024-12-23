<?php

namespace App\Http\Controllers\Backend\Quizzes;

use Exception;
use App\Models\Quiz;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $quizzes = Quiz::paginate(10);
        return Inertia::render('Backend/Quiz/Quizzes/Index', [
            'quizzes' => $quizzes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $course = Course::get();
        return Inertia::render('Backend/Quiz/Quizzes/Create', [
            'courses' => $course,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'course_id' => 'required|exists:courses,id',
        ]);

        try {
            $quiz = new Quiz;
            $quiz->title = $request->title;
            $quiz->course_id = $request->course_id;

            if ($quiz->save()) {
                return redirect()->route('quizzes.index')->with('success', 'Quiz created successfully.');
            } else {
                return redirect()->back()->with('error', 'Please try again')->withInput();
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', $e->getMessage())->withInput();
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Quiz $quiz)
    {
        return Inertia::render('Backend/Quiz/Quizzes/Show', [
            'quiz' => $quiz,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $course = Course::get();
        $quiz = Quiz::findOrFail(encryptor('decrypt', $id));
        return Inertia::render('Backend/Quiz/Quizzes/Edit', [
            'courses' => $course,
            'quiz' => $quiz,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $quiz = Quiz::findOrFail(encryptor('decrypt', $id));
            $quiz->title = $request->quizTitle;
            $quiz->course_id = $request->courseId;

            if ($quiz->save()) {
                return redirect()->route('quizzes.index')->with('success', 'Data Saved');
            } else {
                return redirect()->back()->with('error', 'Please try again')->withInput();
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', $e->getMessage())->withInput();
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $data = Quiz::findOrFail(encryptor('decrypt', $id));
        if ($data->delete()) {
            return redirect()->back()->with('success', 'Data Deleted!');
        }
    }
}
