<?php
namespace App\Http\Requests\Backend\User;


use Illuminate\Foundation\Http\FormRequest;
use App\Models\User;
class UpdateRequest extends FormRequest
{
    /**
     * L'utilisateur à mettre à jour.
     *
     * @var User|null
     */
    protected $user;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Récupérer l'utilisateur à partir de la route
        $this->user = $this->route('user'); // Correction ici : 'user' au lieu de 'admin'

        // Vérifier que l'utilisateur existe et que l'utilisateur actuel a la permission de le modifier
        return $this->user !== null && $this->user()->can('update', $this->user);

        //  5. Vérifier les permissions spécifiques // Si vous souhaitez vérifier des permissions spécifiques (par exemple, user.edit), vous pouvez utiliser la méthode can directement avec le nom de la permission. Cependant, cela nécessite que vous ayez configuré un système de permissions dans votre application. // Par exemple, si vous avez une table permissions et que vous utilisez un package comme Spatie Laravel Permission, vous pouvez faire quelque chose comme ceci :
        // return $this->user !== null && $this->user()->can('user.edit');

    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|max:255|unique:users,email,' . $this->user->id,
            'contact' => 'sometimes|string|max:255|unique:users,contact,' . $this->user->id,
            'role_id' => 'sometimes|exists:roles,id',
            'password' => 'sometimes|string|min:8',
            'language' => 'sometimes|string|max:255',
            'image' => 'sometimes|string|max:255',
            'full_access' => 'sometimes|boolean',
            'status' => 'sometimes|boolean',
            'instructor_id' => 'sometimes|exists:instructors,id',
        ];
    }
}

