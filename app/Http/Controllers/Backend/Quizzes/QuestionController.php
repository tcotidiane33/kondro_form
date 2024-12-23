<?php

namespace App\Http\Controllers\Backend\Quizzes;

use App\Models\Question;
use App\Models\Option;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quiz;
use Inertia\Inertia;
use Exception;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $questions = Question::with('options')->paginate(10);
        return Inertia::render('Backend/Quiz/Questions/Index', [
            'questions' => $questions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $quizzes = Quiz::all();
        return Inertia::render('Backend/Quiz/Questions/Create', [
            'quizzes' => $quizzes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'questionType' => 'required|in:multiple_choice,true_false,short_answer',
            'questionContent' => 'required|string|max:255',
            'options' => 'array',
            'options.*.option_text' => 'required_if:questionType,multiple_choice|string|max:255',
            'options.*.is_correct' => 'required_if:questionType,multiple_choice|boolean',
        ]);

        try {
            $question = new Question;
            $question->quiz_id = $request->quiz_id;
            $question->type = $request->questionType;
            $question->content = $request->questionContent;

            if ($question->save()) {
                if ($request->questionType === 'multiple_choice') {
                    foreach ($request->options as $option) {
                        $question->options()->create($option);
                    }
                }
                return redirect()->route('questions.index')->with('success', 'Question created successfully.');
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
    public function show(Question $question)
    {
        $question->load('options');
        return Inertia::render('Backend/Quiz/Questions/Show', [
            'question' => $question,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $quizzes = Quiz::all();
        $question = Question::with('options')->findOrFail($id);
        return Inertia::render('Backend/Quiz/Questions/Edit', [
            'quizzes' => $quizzes,
            'question' => $question,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'questionType' => 'required|in:multiple_choice,true_false,short_answer',
            'questionContent' => 'required|string|max:255',
            'options' => 'array',
            'options.*.option_text' => 'required_if:questionType,multiple_choice|string|max:255',
            'options.*.is_correct' => 'required_if:questionType,multiple_choice|boolean',
        ]);

        try {
            $question = Question::findOrFail($id);
            $question->quiz_id = $request->quiz_id;
            $question->type = $request->questionType;
            $question->content = $request->questionContent;

            if ($question->save()) {
                if ($request->questionType === 'multiple_choice') {
                    $question->options()->delete();
                    foreach ($request->options as $option) {
                        $question->options()->create($option);
                    }
                }
                return redirect()->route('questions.index')->with('success', 'Question updated successfully.');
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
        $question = Question::findOrFail($id);
        $question->delete();

        return redirect()->route('questions.index')->with('success', 'Question deleted successfully.');
    }
}
