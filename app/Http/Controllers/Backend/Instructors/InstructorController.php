<?php

namespace App\Http\Controllers\Backend\Instructors;

use Exception;
use App\Models\Role;
use App\Models\User;
use App\Models\Instructor;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Students\Auth\SignInRequest;
use App\Http\Requests\Instructors\Auth\SignUpRequest;
use App\Http\Requests\Backend\Instructors\AddNewRequest;
use App\Http\Requests\Backend\Instructors\UpdateRequest;

class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  
    public function index()
    {
        $instructor = Instructor::paginate(10);
        // return view('frontend.instructorProfile', compact('instructor'));
        return view('backend.instructor.index', compact('instructor'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $role = Role::get();
        return view('backend.instructor.create', compact('role'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddNewRequest $request)
    {
        try {
            DB::beginTransaction();
            $instructor = new Instructor;
            $instructor->name_en = $request->fullName_en;
            $instructor->contact_en = $request->contactNumber_en;
            $instructor->email = $request->emailAddress;
            $instructor->role_id = $request->roleId;
            $instructor->bio = $request->bio;
            $instructor->designation = $request->designation;
            $instructor->title = $request->title;
            $instructor->status = $request->status;
            $instructor->password = Hash::make($request->password);
            $instructor->language = 'fr';
            $instructor->access_block = $request->access_block;
            if ($request->hasFile('image')) {
                $imageName = (Role::find($request->roleId)->name) . '_' .  $request->fullName_en . '_' . rand(999, 111) .  '.' . $request->image->extension();
                $request->image->move(public_path('uploads/users'), $imageName);
                $instructor->image = $imageName;
            }

            if ($instructor->save()) {
                $user = new User;
                $user->instructor_id = $instructor->id;
                $user->name_en = $request->fullName_en;
                $user->email = $request->emailAddress;
                $user->contact_en = $request->contactNumber_en;
                $user->role_id = $request->roleId;
                $user->status = $request->status;
                $user->password = Hash::make($request->password);
                if (isset($imageName)) {
                    $user->image = $imageName; // Save the image name in the users table
                }
                if ($user->save()) {
                    DB::commit();
                    $this->notice::success('Successfully saved');
                    return redirect()->route('instructor.index');
                }
            } else
                return redirect()->back()->withInput()->with('error', 'Please try again');
        } catch (Exception $e) {
            dd($e);
            return redirect()->back()->withInput()->with('error', 'Please try again');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Instructor $instructor)
    {
        //
    }

    public function frontShow($id)
    {
        $instructor = Instructor::findOrFail(encryptor('decrypt', $id));
        // dd($course); 
        return view('frontend.instructorProfile', compact('instructor'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $role = Role::get();
        $instructor = Instructor::findOrFail(encryptor('decrypt', $id));
        return view('backend.instructor.edit', compact('role', 'instructor'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        try {
            $instructor = Instructor::findOrFail(encryptor('decrypt', $id));
            $instructor->name_en = $request->fullName_en;
            $instructor->contact_en = $request->contactNumber_en;
            $instructor->email = $request->emailAddress;
            $instructor->role_id = $request->roleId;
            $instructor->bio = $request->bio;
            $instructor->designation = $request->designation;
            $instructor->title = $request->title;
            $instructor->status = $request->status;
            $instructor->password = Hash::make($request->password);
            $instructor->language = 'fr';
            $instructor->access_block = $request->access_block;
            if ($request->hasFile('image')) {
                $imageName = (Role::find($request->roleId)->name) . '_' .  $request->fullName_en . '_' . rand(999, 111) .  '.' . $request->image->extension();
                $request->image->move(public_path('uploads/users'), $imageName);
                $instructor->image = $imageName;
            }

            if ($instructor->save()) {
                $user = User::where('instructor_id', $instructor->id)->first();
                $user->instructor_id = $instructor->id;
                $user->name_en = $request->fullName_en;
                $user->email = $request->emailAddress;
                $user->contact_en = $request->contactNumber_en;
                $user->role_id = $request->roleId;
                $user->status = $request->status;
                $user->password = Hash::make($request->password);
                if (isset($imageName)) {
                    $user->image = $imageName; // Save the image name in the users table
                }
                if ($user->save()) {
                    DB::commit();
                    $this->notice::success('Successfully saved');
                    return redirect()->route('instructor.index');
                }
            }
            return redirect()->back()->withInput()->with('error', 'Please try again');
        } catch (Exception $e) {
            // dd($e);
            return redirect()->back()->withInput()->with('error', 'Please try again');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $data = Instructor::findOrFail(encryptor('decrypt', $id));
        $image_path = public_path('uploads/instructors') . $data->image;

        if ($data->delete()) {
            if (File::exists($image_path))
                File::delete($image_path);

            return redirect()->back();
        }
    }


    // Auth Systeme 
    public function signUpForm()
    {
        return view('backend.instructor.auth.register');
    }

    public function signUpStore(SignUpRequest $request)
    {
        try {
            DB::beginTransaction();
            $instructor = new Instructor;
            $instructor->name_en = $request->name;
            $instructor->email = $request->email;
            $instructor->password = Hash::make($request->password);
            $instructor->contact_en = $request->contact_en;  // Ajoutez cette ligne
            $instructor->role_id = Role::where('name', 'instructor')->first()->id;
            $instructor->status = 1; // Actif par défaut, peut être changé selon vos besoins

            if ($instructor->save()) {
                $user = new User;
                $user->instructor_id = $instructor->id;
                $user->name_en = $request->name;
                $user->email = $request->email;
                $user->contact_en = $request->contact_en; // Ajoutez cette ligne
                $user->role_id = $instructor->role_id;
                $user->status = $instructor->status;
                $user->password = $instructor->password;

                if ($user->save()) {
                    DB::commit();
                    $this->setSession($instructor);
                    return redirect()->route('instructorDashboard')->with('success', 'Successfully registered and logged in');
                }
            }
            DB::rollback();
            return redirect()->back()->withInput()->with('error', 'Registration failed. Please try again.');
        } catch (Exception $e) {
            DB::rollback();
            return redirect()->back()->withInput()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    public function signInForm()
    {
        return view('backend.instructor.auth.login');
    }

    public function signInCheck(SignInRequest $request)
    {
        try {
            $instructor = Instructor::where('email', $request->email)->first();
            if ($instructor && $instructor->status == 1) {
                if (Hash::check($request->password, $instructor->password)) {
                    $this->setSession($instructor);
                    return redirect()->route('instructorDashboard')->with('success', 'Successfully logged in');
                }
            }
            return redirect()->back()->with('error', 'Invalid credentials or account is inactive');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }

    private function setSession($instructor)
    {
        request()->session()->put([
            'instructorId' => encryptor('encrypt', $instructor->id),
            'instructorName' => encryptor('encrypt', $instructor->name_en),
            'instructorEmail' => encryptor('encrypt', $instructor->email),
            'instructorLogin' => 1,
            'instructorImage' => $instructor->image ?? 'No Image Found'
        ]);
    }

    public function signOut()
    {
        request()->session()->forget([
            'instructorId', 'instructorName', 'instructorEmail', 'instructorLogin', 'instructorImage'
        ]);
        return redirect()->route('instructorLogin')->with('success', 'Successfully logged out');
    }
}
