<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Détermine si l'utilisateur est autorisé à faire cette requête.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Règles de validation qui s'appliquent à la requête.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'fullName' => 'required|string|max:255',
            'contactNumber' => 'nullable|string|max:255',
            'emailAddress' => 'required|string|email|max:255|unique:students,email,' . $this->user()->id,
            'dob' => 'nullable|date',
            'gender' => 'nullable|string|in:homme,femme,autre',
            'bio' => 'nullable|string',
            'profession' => 'nullable|string|max:255',
            'nationality' => 'nullable|string|max:255',
            'address' => 'nullable|string',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'postcode' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ];
    }
}
