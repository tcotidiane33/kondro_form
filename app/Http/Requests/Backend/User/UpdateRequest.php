<?php
// filepath: /c:/xampp/htdocs/xlearn3/app/Http/Requests/Backend/User/UpdateRequest.php
namespace App\Http\Requests\Backend\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true; // Vous pouvez ajouter une logique d'autorisation ici si nécessaire
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules()
    {
        return [
            'userName' => 'required|string|max:255',
            'emailAddress' => 'required|string|email|max:255|unique:users,email,' . $this->route('id'),
            'contactNumber' => 'nullable|string|max:255',
            'roleId' => 'required|exists:roles,id',
            'fullAccess' => 'required|boolean',
            'status' => 'required|boolean',
            'password' => 'nullable|string|min:8|confirmed',
            'image' => 'nullable|image|max:2048',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages()
    {
        return [
            'userName.required' => 'Le nom est obligatoire.',
            'emailAddress.required' => 'L\'adresse e-mail est obligatoire.',
            'emailAddress.email' => 'L\'adresse e-mail doit être une adresse e-mail valide.',
            'emailAddress.unique' => 'L\'adresse e-mail est déjà utilisée.',
            'roleId.required' => 'Le rôle est obligatoire.',
            'roleId.exists' => 'Le rôle sélectionné est invalide.',
            'fullAccess.required' => 'Le champ d\'accès complet est obligatoire.',
            'status.required' => 'Le statut est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
            'image.image' => 'Le fichier doit être une image.',
            'image.max' => 'L\'image ne doit pas dépasser 2 Mo.',
        ];
    }
}
