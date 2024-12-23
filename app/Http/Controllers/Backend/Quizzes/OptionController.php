<?php

namespace App\Http\Controllers\Backend\Quizzes;

use App\Models\Option;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Question;
use Inertia\Inertia;
use Exception;

class OptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $options = Option::paginate(20);
        return Inertia::render('Backend/Quiz/Options/Index', [
            'options' => $options,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $questions = Question::all();
        return Inertia::render('Backend/Quiz/Options/Create', [
            'questions' => $questions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'option_text' => 'required|string|max:255',
            'question_id' => 'required|exists:questions,id',
            'is_correct' => 'required|boolean',

        ]);

        try {
            $option = new Option;
            $option->option_text = $request->option_text;
            $option->question_id = $request->question_id;
            $option->is_correct = $request->is_correct;

            if ($option->save()) {
                return redirect()->route('options.index')->with('success', 'Option created successfully.');
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
    public function show(Option $option)
    {
        return Inertia::render('Backend/Quiz/Options/Show', [
            'option' => $option,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $questions = Question::all();
        $option = Option::findOrFail($id);
        return Inertia::render('Backend/Quiz/Options/Edit', [
            'questions' => $questions,
            'option' => $option,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'option_text' => 'required|string|max:255',
            'question_id' => 'required|exists:questions,id',
            'is_correct' => 'required|boolean',

        ]);

        try {
            $option = Option::findOrFail($id);
            $option->option_text = $request->option_text;
            $option->question_id = $request->question_id;
            $option->is_correct = $request->is_correct;

            if ($option->save()) {
                return redirect()->route('options.index')->with('success', 'Option updated successfully.');
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
        $option = Option::findOrFail($id);
        $option->delete();

        return redirect()->route('options.index')->with('success', 'Option deleted successfully.');
    }
}
