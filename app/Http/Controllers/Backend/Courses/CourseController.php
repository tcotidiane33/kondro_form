<?php

namespace App\Http\Controllers\Backend\Courses;

use File;
use Exception;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Instructor;
use Illuminate\Support\Str;
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
        $courses = Course::with('courseCategory', 'instructor')->get();
    $categories = CourseCategory::all();

    return Inertia::render('Courses/Index', [
        'courses' => $courses,
        'categories' => $categories,
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
       public function create()
    {
        $courseCategories = CourseCategory::all();
        $instructors = Instructor::all();
        $languages = [
            ['code' => 'en', 'name' => 'Anglais'],
            ['code' => 'fr', 'name' => 'Français']
        ];
        return Inertia::render('Courses/Create', [
            'courseCategories' => $courseCategories,
            'instructors' => $instructors,
            'languages' => $languages
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(AddNewRequest $request)
    {
        try {
            $course = new Course;
            $course->title = $request->title;
            $course->description = $request->description;
            $course->course_category_id = $request->course_category_id;
            $course->instructor_id = $request->instructor_id;
            $course->type = $request->type;
            $course->price = $request->price;
            $course->old_price = $request->old_price;
            $course->subscription_price = $request->subscription_price;
            $course->start_from = $request->start_from;
            $course->duration = $request->duration;
            $course->lesson = $request->lesson;
            $course->difficulty = $request->difficulty;
            $course->course_code = $request->course_code;
            $course->prerequisites = $request->prerequisites;
            $course->thumbnail_video = $request->thumbnail_video;
            $course->tag = $request->tag;
            $course->language = $request->language;
            $course->status = $request->status;


            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('images', 'public');
                $course->image = $imagePath;
            }

            if ($request->hasFile('thumbnail_image')) {
                $thumbnailImagePath = $request->file('thumbnail_image')->store('thumbnails', 'public');
                $course->thumbnail_image = $thumbnailImagePath;
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

            $course->fill($request->all());

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('images', 'public');
                $course->image = $imagePath;
            }

            if ($request->hasFile('thumbnail_image')) {
                $thumbnailImagePath = $request->file('thumbnail_image')->store('thumbnails', 'public');
                $course->thumbnail_image = $thumbnailImagePath;
            }

            if ($course->save()) {
                // Envoyer une mise à jour des données via RabbitMQ
                DataSyncProducer::sendDataUpdate($course->id, $course->toArray());
                return redirect()->route('courses.index')->with('success', 'Course updated successfully.');
            } else {
                return redirect()->back()->withInput()->with('error', 'Please try again');
            }
        } catch (Exception $e) {
            \Log::error('Error updating course: ' . $e->getMessage());
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

    private function saveBase64Image($base64Image, $path)
    {
        $image = str_replace('data:image/png;base64,', '', $base64Image);
        $image = str_replace(' ', '+', $image);
        $imageName = Str::random(10) . '.png';
        File::put(public_path($path) . '/' . $imageName, base64_decode($image));
        return ['filename' => $imageName];
    }
}
