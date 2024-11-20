<?php

namespace App\Http\Requests\TrainingForm;

use Illuminate\Foundation\Http\FormRequest;

class TrainingOfferRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'instructor_id' => 'required|exists:users,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'status' => 'required|in:pending,active,inactive',
            'subscription_type' => 'nullable|string',
            'access_level' => 'nullable|string',
            'duration_months' => 'nullable|integer',
            'max_participants' => 'nullable|integer',
            'features' => 'nullable|json',
            'platforms' => 'nullable|json',
            'technologies' => 'nullable|json',
            'certification_id' => 'nullable|exists:certifications,id',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_live_event' => 'boolean',
            'additional_materials' => 'nullable|json',
        ];
    }
}
