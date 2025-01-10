<?php

namespace App\Http\Controllers\Backend\Setting;

use File;
use Exception;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Backend\User\AddNewRequest;
use App\Http\Requests\Backend\User\UpdateRequest;
use App\Http\Requests\Backend\User\UpdateProfileRequest;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class UserController extends Controller
{
    use AuthorizesRequests;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('role')->paginate(10);
        $roles = Role::all();
        return Inertia::render('Backend/Admin/Users/Index', ['users' => $users, 'roles' => $roles]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        return Inertia::render('Backend/Admin/Users/Create', ['roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddNewRequest $request)
    {
        try {
            $validated = $request->validated();

            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'contact' => $validated['contact'] ?? null,
                'role_id' => $validated['role_id'],
                'password' => Hash::make($validated['password']),
                'language' => $validated['language'] ?? 'fr',
                'image' => $validated['image'] ?? null,
                'full_access' => $validated['full_access'] ?? 0,
                'status' => $validated['status'] ?? 1,
                'instructor_id' => $validated['instructor_id'] ?? null,
            ]);

            if ($request->hasFile('image')) {
                $imageName = rand(111, 999) . time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/users'), $imageName);
                $user->image = $imageName;
                $user->save();
            }

            // return response()->json($user, 201);
            return Inertia::render('Backend/Admin/Users/Index', [
                'users' => User::with('role')->paginate(10), // Rechargez les utilisateurs
                'roles' => Role::all(), // Rechargez les rôles
                'flash' => [
                    'success' => 'Utilisateur créé avec succès.',
                ],
            ]);
        } catch (Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->withInput()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::with('role', 'courses')->findOrFail($id);

        if ($user->role->name === 'Student') {
            return Inertia::render('Backend/User/StudentOverview', ['user' => $user]);
        } elseif ($user->role->name === 'Instructor') {
            return Inertia::render('Backend/User/InstructorOverview', ['user' => $user]);
        } elseif ($user->role->name === 'Admin') {
            $users = User::with('role')->get();
            return Inertia::render('Backend/User/AdminOverview', ['user' => $user, 'users' => $users]);
        }

        return redirect()->back()->with('error', 'Role not recognized');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $roles = Role::all();
        $user = User::findOrFail($id);
        // Vérifiez si l'utilisateur actuel a la permission de modifier l'utilisateur cible
        // $this->authorize('user.edit', $user);

        return Inertia::render('Backend/Admin/Users/Edit', ['user' => $user, 'roles' => $roles]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, User $user)
    {
        // Vérifiez si l'utilisateur actuel a la permission de modifier l'utilisateur cible
        $this->authorize('update', $user);

        try {
            // Passer l'utilisateur à la requête
            $request->merge(['user' => $user]);
 
            \Log::info('Updating user: ' . $user->id);

            // Mettre à jour l'utilisateur
            $user->update($request->validated());

            \Log::info('User updated successfully: ' . $user->id);

            return redirect()->route('admin.users.index')->with('success', 'Utilisateur mis à jour avec succès.');
        } catch (Exception $e) {
            \Log::error('Error updating user: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Une erreur s\'est produite lors de la mise à jour de l\'utilisateur.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $data = User::findOrFail($id);

            if ($data->image) {
                $image_path = public_path('uploads/users/') . $data->image;
                if (File::exists($image_path)) {
                    File::delete($image_path);
                }
            }

            if ($data->delete()) {
                return redirect()->route('admin.users.index')->with('success', 'User deleted successfully');
            } else {
                return redirect()->back()->with('error', 'Failed to delete user');
            }
        } catch (Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Update the profile of the specified user.
     */
    public function updateProfile(UpdateProfileRequest $request, $id)
    {
        try {
            $validated = $request->validated();
            $user = User::findOrFail($id);

            $user->name = $validated['name'];
            $user->email = $validated['email'];
            $user->contact = $validated['contact'];

            if ($request->hasFile('image')) {
                $imageName = time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/users'), $imageName);
                $user->image = $imageName;
            }

            if ($user->save()) {
                return redirect()->route('profile.edit')->with('success', 'Profile updated successfully');
            } else {
                return redirect()->back()->withInput()->with('error', 'Failed to update profile');
            }
        } catch (Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->withInput()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }
}
