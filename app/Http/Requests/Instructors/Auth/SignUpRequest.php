<?php

namespace App\Http\Requests\Instructors\Auth;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:instructors',
            'password' => 'required|string|min:8|confirmed',
            'contact' => 'required|string|max:20',  // Ajoutez cette ligne
        ];
    }
}
