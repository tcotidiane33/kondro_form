<?php

namespace App\Http\Controllers\Backend\Instructors;

use Exception;
use App\Models\Instructor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Afficher le profil de l'instructeur.
     */
    public function index()
    {
        $instructor = Auth::user();
        return Inertia::render('Instructors/Profile', [
            'instructor' => $instructor,
        ]);
    }

    /**
     * Mettre à jour le profil de l'instructeur.
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'contact' => 'nullable|string|max:255',
            'bio' => 'nullable|string',
        ]);

        try {
            $instructor = Auth::user();
            $instructor->name = $request->name;
            $instructor->email = $request->email;
            $instructor->contact = $request->contact;
            $instructor->bio = $request->bio;

            if ($instructor->save()) {
                return redirect()->back()->with('success', 'Profile updated successfully');
            } else {
                return redirect()->back()->with('error', 'Failed to update profile');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    public function edit()
    {
        $instructor = Auth::user();
        return Inertia::render('Instructors/EditProfile', [
            'instructor' => $instructor,
        ]);
    }

    /**
     * Changer l'image de profil de l'instructeur.
     */
    public function changeImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        try {
            $instructor = Auth::user();

            if ($request->hasFile('image')) {
                // Supprimer l'ancienne image si elle existe
                if ($instructor->image) {
                    Storage::disk('public')->delete($instructor->image);
                }

                // Enregistrer la nouvelle image
                $imagePath = $request->file('image')->store('images', 'public');
                $instructor->image = $imagePath;

                if ($instructor->save()) {
                    return redirect()->back()->with('success', 'Profile image updated successfully');
                } else {
                    return redirect()->back()->with('error', 'Failed to update profile image');
                }
            } else {
                return redirect()->back()->with('error', 'Please select a valid image file');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Changer le mot de passe de l'instructeur.
     */
    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'password' => 'required|string|confirmed|min:8',
        ]);

        try {
            $instructor = Auth::user();

            // Valider le mot de passe actuel
            if (!Hash::check($request->current_password, $instructor->password)) {
                return redirect()->back()->with('error', 'Current password is incorrect');
            }

            // Mettre à jour le mot de passe
            $instructor->password = Hash::make($request->password);

            if ($instructor->save()) {
                return redirect()->back()->with('success', 'Password changed successfully');
            } else {
                return redirect()->back()->with('error', 'Failed to change password');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }
}
