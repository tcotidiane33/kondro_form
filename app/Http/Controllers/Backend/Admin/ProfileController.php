<?php

namespace App\Http\Controllers\Backend\Admin;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Afficher le profil de l'administrateur.
     */
    public function index()
    {
        $admin = Auth::user();
        return Inertia::render('Admin/Profile', [
            'admin' => $admin,
        ]);
    }

    /**
     * Mettre à jour le profil de l'administrateur.
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . Auth::id(),
            'contact' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        try {
            $admin = Auth::user();
            $admin->name = $request->name;
            $admin->email = $request->email;
            $admin->contact = $request->contact;

            if ($request->hasFile('image')) {
                // Supprimer l'ancienne image si elle existe
                if ($admin->image) {
                    Storage::disk('public')->delete($admin->image);
                }

                // Enregistrer la nouvelle image
                $imagePath = $request->file('image')->store('images', 'public');
                $admin->image = $imagePath;
            }

            if ($admin->save()) {
                return redirect()->back()->with('success', 'Profile updated successfully');
            } else {
                return redirect()->back()->with('error', 'Failed to update profile');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Afficher le formulaire d'édition du profil de l'administrateur.
     */
    public function edit()
    {
        $admin = Auth::user();
        return Inertia::render('Admin/EditProfile', [
            'admin' => $admin,
        ]);
    }
}
