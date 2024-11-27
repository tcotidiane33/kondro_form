<?php

namespace App\Http\Controllers\Backend\Courses;

use File;
use Exception;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Instructor;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Http\Controllers\Controller;
use App\Services\RabbitMQ\DataSyncProducer;
use App\Http\Requests\Backend\Course\Courses\AddNewRequest;
use App\Http\Requests\Backend\Course\Courses\UpdateRequest;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::all();
        return Inertia::render('Courses/Index', [
            'courses' => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $courseCategories = CourseCategory::all();
        $instructors = Instructor::all();
        return Inertia::render('Courses/Create', ['courseCategories' => $courseCategories, 'instructors' => $instructors]);
    }

     /**
     * Store a newly created resource in storage.
     */
    public function store(AddNewRequest $request)
    {
        try {
            $course = new Course;
            $course->title = $request->courseTitle;
            $course->description = $request->courseDescription;
            $course->course_category_id = $request->categoryId;
            $course->instructor_id = $request->instructorId;
            $course->type = $request->courseType;
            $course->price = $request->coursePrice;
            $course->old_price = $request->courseOldPrice;
            $course->subscription_price = $request->subscriptionPrice;
            $course->start_from = $request->start_from;
            $course->duration = $request->duration;
            $course->lesson = $request->lesson;
            $course->difficulty = $request->courseDifficulty;
            $course->course_code = $request->course_code;
            $course->prerequisites = $request->prerequisites;
            $course->thumbnail_video = $request->thumbnail_video;
            $course->tag = $request->tag;
            $course->language = 'fr';

            if ($request->hasFile('image')) {
                $imageName = rand(111, 999) . time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/courses'), $imageName);
                $course->image = $imageName;
            }
            if ($request->hasFile('thumbnail_image')) {
                $thumbnailImageName = rand(111, 999) . time() . '.' . $request->thumbnail_image->extension();
                $request->thumbnail_image->move(public_path('uploads/courses/thumbnails'), $thumbnailImageName);
                $course->thumbnail_image = $thumbnailImageName;
            }

            if ($course->save()) {
                // Envoyer une mise à jour des données via RabbitMQ
                DataSyncProducer::sendDataUpdate($course->id, $course->toArray());
                return redirect()->route('courses.index')->with('success', 'Course created successfully.');
            } else {
                return redirect()->back()->withInput()->with('error', 'Please try again');
            }
        } catch (Exception $e) {
            \Log::error('Error creating course: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Please try again');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $course = Course::findOrFail($id);
        $courseCategories = CourseCategory::all();
        $instructors = Instructor::all();
        return Inertia::render('Courses/Edit', ['course' => $course, 'courseCategories' => $courseCategories, 'instructors' => $instructors]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        try {
            $course = Course::findOrFail($id);
            $course->title = $request->courseTitle;
            $course->description = $request->courseDescription;
            $course->course_category_id = $request->categoryId;
            $course->instructor_id = $request->instructorId;
            $course->type = $request->courseType;
            $course->price = $request->coursePrice;
            $course->old_price = $request->courseOldPrice;
            $course->subscription_price = $request->subscriptionPrice;
            $course->start_from = $request->start_from;
            $course->duration = $request->duration;
            $course->lesson = $request->lesson;
            $course->difficulty = $request->courseDifficulty;
            $course->course_code = $request->course_code;
            $course->prerequisites = $request->prerequisites;
            $course->thumbnail_video = $request->thumbnail_video;
            $course->tag = $request->tag;
            $course->language = 'fr';

            if ($request->hasFile('image')) {
                $imageName = rand(111, 999) . time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/courses'), $imageName);
                $course->image = $imageName;
            }
            if ($request->hasFile('thumbnail_image')) {
                $thumbnailImageName = rand(111, 999) . time() . '.' . $request->thumbnail_image->extension();
                $request->thumbnail_image->move(public_path('uploads/courses/thumbnails'), $thumbnailImageName);
                $course->thumbnail_image = $thumbnailImageName;
            }

            if ($course->save()) {
                // Envoyer une mise à jour des données via RabbitMQ
                DataSyncProducer::sendDataUpdate($course->id, $course->toArray());
                return redirect()->route('courses.index')->with('success', 'Course updated successfully.');
            } else {
                return redirect()->back()->withInput()->with('error', 'Please try again');
            }
        } catch (Exception $e) {
            return redirect()->back()->withInput()->with('error', 'Please try again');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $course = Course::findOrFail($id);
            if ($course->delete()) {
                // Envoyer une mise à jour des données via RabbitMQ
                DataSyncProducer::sendDataUpdate($course->id, ['deleted' => true]);
                return redirect()->route('courses.index')->with('success', 'Course deleted successfully.');
            } else {
                return redirect()->back()->with('error', 'Please try again');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Please try again');
        }
    }
}
