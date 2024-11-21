<?php

namespace App\Http\Requests\Backend\User;

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
            'userName' => 'required|max:255',
            'emailAddress' => 'required|email|unique:users,email',
            'contactNumber' => 'required|unique:users,contact_en',
            'roleId' => 'required|exists:roles,id',
            'password' => 'required|min:8|confirmed',
            'fullAccess' => 'required|boolean',
            'status' => 'required|boolean',
        ];
    }
}
