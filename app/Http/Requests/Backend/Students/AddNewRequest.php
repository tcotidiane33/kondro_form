<?php

namespace App\Http\Requests\Backend\Students;

use Illuminate\Foundation\Http\FormRequest;

class AddNewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fullName' => 'required|max:255',
            'emailAddress' => 'required|email|unique:students,email',
            'contactNumber' => 'required|unique:students,contact_en',
            'roleId' => 'required|exists:roles,id',
            'birthDate' => 'required|date',
            'gender' => 'required|in:male,female,other',
            'status' => 'required|boolean',
            'password' => 'required|min:8|confirmed',
        ];
    }
}
