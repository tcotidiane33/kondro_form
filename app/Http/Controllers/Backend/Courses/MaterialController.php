<?php

namespace App\Http\Controllers\Backend\Courses;

use Exception;
use Inertia\Inertia;
use App\Models\Lesson;
use App\Models\Material;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Course\Materials\AddNewRequest;
use App\Http\Requests\Backend\Course\Materials\UpdateRequest;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materials = Material::all();
        return Inertia::render('Backend/Courses/Materials/Index', ['materials' => $materials]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $lesson= Lesson::get();
        $lessons = Lesson::all();
        return Inertia::render('Backend/Courses/Materials/Create', ['lessons' => $lessons]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddNewRequest $request)
    {
        try {
            $material = new Material;
            $material->title = $request->materialTitle;
            $material->lesson_id = $request->lessonId;
            $material->type = $request->materialType;
            $material->content = $request->content;
            $material->content_url = $request->contentURL;

            if ($request->hasFile('content')) {
                $contentName = rand(111, 999) . time() . '.' . $request->content->extension();
                $request->content->move(public_path('uploads/courses/contents'), $contentName);
                $material->content = $contentName;
            }
            if ($material->save()) {
                return redirect()->route('material.index')->with('success', 'Data Saved');;
            } else {
                return redirect()->back()->withInput()->with('error', 'Please try again');
            }
        } catch (Exception $e) {
            dd($e);
            return redirect()->back()->withInput()->with('error', 'Please try again');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $material = Material::findOrFail($id);
        return Inertia::render('Backend/Courses/Materials/Show', ['material' => $material]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $lesson= Lesson::get();
        $material = Material::findOrFail(encryptor('decrypt', $id));
        return view('backend.course.material.edit', compact('lesson', 'material'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        try {
            $material = Material::findOrFail(encryptor('decrypt', $id));
            $material->title = $request->materialTitle;
            $material->lesson_id = $request->lessonId;
            $material->type = $request->materialType;
            $material->content = $request->content;
            $material->content_url = $request->contentURL;

            if ($request->hasFile('content')) {
                $contentName = rand(111, 999) . time() . '.' . $request->content->extension();
                $request->content->move(public_path('uploads/courses/contents'), $contentName);
                $material->content = $contentName;
            }
            if ($material->save()) {
                $this->notice::success('Data Saved');
                return redirect()->route('material.index');
            } else {
                $this->notice::error('Please try again');
                return redirect()->back()->withInput();
            }
        } catch (Exception $e) {
            dd($e);
            $this->notice::error('Please try again');
            return redirect()->back()->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $material = Material::findOrFail($id);
            if ($material->delete()) {
                return redirect()->route('material.index')->with('success', 'Data Deleted');
            } else {
                return redirect()->back()->with('error', 'Please try again');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Please try again');
        }
    }
}
