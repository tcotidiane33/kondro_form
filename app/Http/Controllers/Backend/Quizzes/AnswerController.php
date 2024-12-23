<?php

namespace App\Http\Controllers\Backend\Quizzes;

use App\Models\Answer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Exception;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $answers = Answer::paginate(10);
        return Inertia::render('Backend/Quiz/Answers/Index', [
            'answers' => $answers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Quiz/Answers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'answer' => 'required|string',
            'question_id' => 'required|exists:questions,id',
            'student_id' => 'required|exists:students,id',
        ]);

        try {
            $answer = new Answer;
            $answer->answer = $request->answer;
            $answer->question_id = $request->question_id;
            $answer->student_id = $request->student_id;

            if ($answer->save()) {
                return redirect()->route('answers.index')->with('success', 'Answer created successfully.');
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
    public function show(Answer $answer)
    {
        return Inertia::render('Backend/Quiz/Answers/Show', [
            'answer' => $answer,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $answer = Answer::findOrFail($id);
        return Inertia::render('Backend/Quiz/Answers/Edit', [
            'answer' => $answer,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'answer' => 'required|string',
            'question_id' => 'required|exists:questions,id',
            'student_id' => 'required|exists:students,id',
        ]);

        try {
            $answer = Answer::findOrFail($id);
            $answer->answer = $request->answer;
            $answer->question_id = $request->question_id;
            $answer->student_id = $request->student_id;

            if ($answer->save()) {
                return redirect()->route('answers.index')->with('success', 'Answer updated successfully.');
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
        $answer = Answer::findOrFail($id);
        $answer->delete();

        return redirect()->route('answers.index')->with('success', 'Answer deleted successfully.');
    }
}
