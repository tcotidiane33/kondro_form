<?php

namespace App\Http\Controllers\Students;

use Exception;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ProfileUpdateRequest;

class ProfileController extends Controller
{
    /**
     * Afficher le profil de l'étudiant.
     */
    public function index()
    {
        $student = Auth::user();
        $enrollments = Enrollment::where('student_id', $student->id)->get();
        return Inertia::render('Students/Profile', [
            'student' => $student,
            'enrollments' => $enrollments,
        ]);
    }

    /**
     * Mettre à jour le profil de l'étudiant.
     */
    public function save_profile(ProfileUpdateRequest $request)
    {
        try {
            $user = Auth::user();
            $student = Student::where('email', $user->email)->first();
            $student->fill([
                'name' => $request->fullName,
                'contact' => $request->contactNumber,
                'email' => $request->emailAddress,
                'date_of_birth' => $request->dob,
                'gender' => $request->gender,
                'bio' => $request->bio,
                'profession' => $request->profession,
                'nationality' => $request->nationality,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'postcode' => $request->postcode,
                'country' => $request->country,
            ]);

            if ($request->hasFile('image')) {
                // Supprimer l'ancienne image si elle existe
                if ($student->image) {
                    Storage::disk('public')->delete($student->image);
                }

                // Enregistrer la nouvelle image
                $imagePath = $request->file('image')->store('images', 'public');
                $student->image = $imagePath;
            }

            $student->save();

            return redirect()->back()->with('success', 'Profile updated successfully');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }
    public function edit()
    {
        // $user = Auth::user();
        $student = Auth::user();
        // $student = Student::where('email', $user->email)->first();
        return Inertia::render('Students/EditProfile', [
            'student' => $student,
        ]);
    }

    /**
     * Mettre à jour le profil de l'étudiant.
     */
    public function update(ProfileUpdateRequest $request)
    {
        try {
            $student = Auth::user();
            $student->fill([
                'name' => $request->fullName,
                'contact' => $request->contactNumber,
                'email' => $request->emailAddress,
                'date_of_birth' => $request->dob,
                'gender' => $request->gender,
                'bio' => $request->bio,
                'profession' => $request->profession,
                'nationality' => $request->nationality,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'postcode' => $request->postcode,
                'country' => $request->country,
            ]);

            if ($request->hasFile('image')) {
                // Supprimer l'ancienne image si elle existe
                if ($student->image) {
                    Storage::disk('public')->delete($student->image);
                }

                // Enregistrer la nouvelle image
                $imagePath = $request->file('image')->store('images', 'public');
                $student->image = $imagePath;
            }

            $student->save();

            return redirect()->route('student.profile')->with('success', 'Profil mis à jour avec succès');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Une erreur est survenue: ' . $e->getMessage());
        }
    }
    /**
     * Changer l'image de profil de l'étudiant.
     */
    public function changeImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        try {
            $student = Auth::user();

            if ($request->hasFile('image')) {
                // Supprimer l'ancienne image si elle existe
                if ($student->image) {
                    Storage::disk('public')->delete($student->image);
                }

                // Enregistrer la nouvelle image
                $imagePath = $request->file('image')->store('images', 'public');
                $student->image = $imagePath;

                if ($student->save()) {
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
     * Changer le mot de passe de l'étudiant.
     */
    public function change_password(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'password' => 'required|string|confirmed|min:8',
        ]);

        try {
            $student = Auth::user();

            // Valider le mot de passe actuel
            if (!Hash::check($request->current_password, $student->password)) {
                return redirect()->back()->with('error', 'Current password is incorrect');
            }

            // Mettre à jour le mot de passe
            $student->password = Hash::make($request->password);

            if ($student->save()) {
                return redirect()->back()->with('success', 'Password changed successfully');
            } else {
                return redirect()->back()->with('error', 'Failed to change password');
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }
}
