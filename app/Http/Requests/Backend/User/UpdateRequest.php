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


Dans votre code, vous utilisez la méthode `can` pour vérifier si l'utilisateur actuel a la permission de mettre à jour l'utilisateur cible (`$this->user`). Cette méthode repose sur les **Policies** de Laravel, qui sont un mécanisme pour gérer les autorisations dans une application Laravel.

Pour que cela fonctionne correctement, vous devez définir une **Policy** pour le modèle `User`. Voici comment vous pouvez procéder :

---

### 1. **Créer une Policy pour le modèle `User`**
Laravel fournit une commande Artisan pour générer une Policy. Exécutez la commande suivante dans votre terminal :

```bash
php artisan make:policy UserPolicy --model=User
```

Cela créera un fichier `UserPolicy.php` dans le dossier `app/Policies`.

---

### 2. **Définir la méthode `update` dans la Policy**
Ouvrez le fichier `UserPolicy.php` et définissez la méthode `update`. Cette méthode détermine si l'utilisateur actuel peut mettre à jour l'utilisateur cible.

Voici un exemple de ce à quoi cela pourrait ressembler :

```php
namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    /**
     * Détermine si l'utilisateur peut mettre à jour un autre utilisateur.
     */
    public function update(User $currentUser, User $targetUser): bool
    {
        // Exemple : Seul un administrateur ou l'utilisateur lui-même peut se mettre à jour
        return $currentUser->role_id === 1 || $currentUser->id === $targetUser->id;
    }
}
```

Dans cet exemple :
- `$currentUser` est l'utilisateur actuellement connecté.
- `$targetUser` est l'utilisateur que l'on souhaite modifier.
- La logique ici est que seul un administrateur (`role_id === 1`) ou l'utilisateur lui-même peut mettre à jour un utilisateur.

Vous pouvez adapter cette logique en fonction de vos besoins (par exemple, en vérifiant les permissions spécifiques dans la table `permissions`).

---

### 3. **Enregistrer la Policy**
Laravel doit savoir que la `UserPolicy` est associée au modèle `User`. Pour cela, ouvrez le fichier `app/Providers/AuthServiceProvider.php` et enregistrez la Policy dans la méthode `boot` :

```php
use App\Models\User;
use App\Policies\UserPolicy;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        User::class => UserPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}
```

---

### 4. **Utiliser la méthode `can` dans votre `UpdateRequest`**
Dans votre classe `UpdateRequest`, vous utilisez déjà la méthode `can` pour vérifier si l'utilisateur actuel a la permission de mettre à jour l'utilisateur cible :

```php
public function authorize(): bool
{
    $this->user = $this->route('user');
    return $this->user !== null && $this->user()->can('update', $this->user);
}
```

Ici :
- `$this->user()` renvoie l'utilisateur actuellement authentifié.
- `can('update', $this->user)` vérifie si l'utilisateur actuel a la permission de mettre à jour `$this->user` en utilisant la méthode `update` définie dans la `UserPolicy`.

---

### 5. **Vérifier les permissions spécifiques**
Si vous souhaitez vérifier des permissions spécifiques (par exemple, `user.edit`), vous pouvez utiliser la méthode `can` directement avec le nom de la permission. Cependant, cela nécessite que vous ayez configuré un système de permissions dans votre application.

Par exemple, si vous avez une table `permissions` et que vous utilisez un package comme **Spatie Laravel Permission**, vous pouvez faire quelque chose comme ceci :

```php
public function authorize(): bool
{
    $this->user = $this->route('user');
    return $this->user !== null && $this->user()->can('user.edit');
}
```

Cela vérifie si l'utilisateur actuel a la permission `user.edit`.

---

### 6. **Utiliser les Gates (optionnel)**
Si vous ne souhaitez pas utiliser de Policy, vous pouvez définir une **Gate** dans `AuthServiceProvider` :

```php
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->registerPolicies();

        Gate::define('update-user', function (User $currentUser, User $targetUser) {
            return $currentUser->role_id === 1 || $currentUser->id === $targetUser->id;
        });
    }
}
```

Ensuite, dans votre `UpdateRequest`, vous pouvez utiliser la Gate comme ceci :

```php
public function authorize(): bool
{
    $this->user = $this->route('user');
    return $this->user !== null && Gate::allows('update-user', $this->user);
}
```

---

### 7. **Tester votre autorisation**
Pour tester si tout fonctionne correctement, vous pouvez :
1. Connectez-vous en tant qu'administrateur et essayez de modifier un utilisateur.
2. Connectez-vous en tant qu'utilisateur normal et essayez de modifier un autre utilisateur (cela devrait échouer).
3. Connectez-vous en tant qu'utilisateur normal et essayez de modifier votre propre profil (cela devrait réussir si la logique le permet).

---

### Résumé
- **Policy** : Utilisez une Policy pour définir la logique d'autorisation.
- **`can`** : Utilisez la méthode `can` pour vérifier les permissions dans votre `UpdateRequest`.
- **Permissions spécifiques** : Si vous avez un système de permissions, vous pouvez vérifier des permissions spécifiques comme `user.edit`.
- **Gates** : Vous pouvez également utiliser des Gates pour gérer les autorisations.

Cela vous permettra de gérer les autorisations de manière propre et sécurisée dans votre application Laravel.
