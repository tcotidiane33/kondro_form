<?php

namespace App\Http\Requests\Backend\Students;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateRequest extends FormRequest
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
    public function rules(Request $r): array
    {
        $id = encryptor('decrypt', $r->uptoken);
        return [
            'fullName_en' => 'required|max:255',
            'emailAddress' => 'required|email|unique:students,email,'.$id,
            'contactNumber_en' => 'required|unique:students,contact_en,'.$id,
            'roleId' => 'required|exists:roles,id',
            'birthDate' => 'required|date',
            'gender' => 'required|in:male,female,other',
            'status' => 'required|boolean',
            'password' => 'nullable|min:8|confirmed',
        ];
    }
}
