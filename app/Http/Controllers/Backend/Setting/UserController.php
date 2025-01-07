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

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('role')->paginate(10);
        return Inertia::render('Backend/Admin/Users/Index', ['users' => $users, 'roles' => Role::all(), 'search' => '']);
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
            $data = new User();
            $data->name = $request->userName;
            $data->email = $request->emailAddress;
            $data->contact = $request->contactNumber;
            $data->role_id = $request->roleId;
            $data->language = 'fr';
            $data->full_access = $request->fullAccess;
            $data->status = $request->status;
            $data->password = Hash::make($request->password);

            if ($request->hasFile('image')) {
                $imageName = rand(111, 999) . time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/users'), $imageName);
                $data->image = $imageName;
            }

            if ($data->save()) {
                return redirect()->route('admin.users.index')->with('success', 'User created successfully');
            } else {
                return redirect()->back()->withInput()->with('error', 'Failed to create user');
            }
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
        return Inertia::render('Backend/Admin/Users/Edit', ['user' => $user, 'roles' => $roles]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        try {
            $data = User::findOrFail($id);
            $data->name = $request->userName;
            $data->email = $request->emailAddress;
            $data->contact = $request->contactNumber;
            $data->role_id = $request->roleId;
            $data->language = 'fr';
            $data->full_access = $request->fullAccess;
            $data->status = $request->status;

            if ($request->password) {
                $data->password = Hash::make($request->password);
            }

            if ($request->hasFile('image')) {
                $imageName = rand(111, 999) . time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/users'), $imageName);
                $data->image = $imageName;
            }

            if ($data->save()) {
                \Log::info('User updated successfully', ['user' => $data]);
                return redirect()->route('admin.users.index')->with('success', 'User updated successfully');
            } else {
                return redirect()->back()->withInput()->with('error', 'Failed to update user');
            }
        } catch (Exception $e) {
            \Log::error($e->getMessage());
            return redirect()->back()->withInput()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $data = User::findOrFail($id);
            $image_path = public_path('uploads/users/') . $data->image;

            if ($data->delete()) {
                if (File::exists($image_path)) {
                    File::delete($image_path);
                }
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
    public function updateProfile(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'contact' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        try {
            $user = User::findOrFail($id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->contact = $request->contact;

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
