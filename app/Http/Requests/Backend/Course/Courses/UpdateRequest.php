<?php

namespace App\Http\Requests\Backend\Course\Courses;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'course_category_id' => 'required|exists:course_categories,id',
            'instructor_id' => 'required|exists:instructors,id',
            'type' => 'required|string|in:free,paid,subscription',
            'price' => 'required|numeric',
            'old_price' => 'nullable|numeric',
            'subscription_price' => 'nullable|numeric',
            'start_from' => 'nullable|date',
            'duration' => 'nullable|integer',
            'lesson' => 'nullable|integer',
            'prerequisites' => 'nullable|string',
            'difficulty' => 'nullable|string|in:beginner,intermediate,advanced',
            'course_code' => 'nullable|string|max:255',
            'image' => 'nullable|string|max:255',
            'thumbnail_image' => 'nullable|string|max:255',
            'thumbnail_video' => 'nullable|string|max:255',
            'status' => 'required|integer|in:0,1,2',
            'language' => 'required|string|in:en,fr',
            'tag' => 'nullable|string|in:popular,featured,upcoming',
        ];
    }
}
