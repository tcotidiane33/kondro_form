<?php

namespace App\Http\Controllers\Backend\Courses;

use App\Models\CourseCategory;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Backend\Course\CourseCategory\UpdateRequest;

class CourseCategoryController extends Controller
{
    public function index()
    {
        $courseCategories = CourseCategory::all();
        return Inertia::render('CourseCategories/Index', ['courseCategories' => $courseCategories]);
    }

    public function create()
    {
        return Inertia::render('CourseCategories/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_name' => 'required|max:255',
            'category_status' => 'required|boolean',
            'category_image' => 'nullable|string|max:255',
        ]);

        CourseCategory::create($request->all());

        return redirect()->route('course-categories.index')->with('success', 'Course category created successfully.');
    }

    public function update(UpdateRequest $request, CourseCategory $courseCategory)
    {
        $courseCategory->update($request->validated());

        return redirect()->route('course-categories.index')->with('success', 'Course category updated successfully.');
    }

    public function destroy(CourseCategory $courseCategory)
    {
        $courseCategory->delete();

        return redirect()->route('course-categories.index')->with('success', 'Course category deleted successfully.');
    }

    public function edit(CourseCategory $courseCategory)
    {
        return Inertia::render('CourseCategories/Edit', ['courseCategory' => $courseCategory]);
    }

}
