<?php

namespace App\Http\Controllers\Backend\Setting;

use Exception;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Authentication\SignInRequest;
use App\Http\Requests\Authentication\SignUpRequest;

class AuthenticationController extends Controller
{
    public function signUpForm()
    {
        return view('backend.Authentication.register');
    }

    public function signUpStore(SignUpRequest $request)
    {
        try {
            $user = new User;
            $user->name_en = $request->name;
            $user->contact_en = $request->contact_en;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->role_id = 4;
            // dd($request->all()); 
            if ($user->save())
                return redirect('login')->with('success', 'Successfully Registered');
            else
                return redirect('login')->with('danger', 'Please Try Again');
        } catch (Exception $e) {
            dd($e);
            return redirect('login')->with('danger', 'Please Try Again');
        }
    }

    public function signInForm()
    {
        return view('backend.Authentication.login');
    }

    public function signInCheck(SignInRequest $request)
{
    try {
        $user = User::where(function($query) use ($request) {
            $query->where('contact_en', $request->username)
                  ->orWhere('email', $request->username);
        })->with('role')->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return redirect()->route('login')->with('error', 'Invalid credentials');
        }

        if ($user->status != 1) {
            return redirect()->route('login')->with('error', 'Account is inactive');
        }

        Auth::login($user);
        $this->setSession($user);
        return redirect()->route('dashboard')->with('success', 'Successfully Logged In');

    } catch (Exception $e) {
        \Log::error('Login error: ' . $e->getMessage());
        return redirect()->route('login')->with('error', 'An error occurred. Please try again.');
    }
}

public function setSession($user)
{
    $sessionData = [
        'userId' => encryptor('encrypt', $user->id),
        'userName' => encryptor('encrypt', $user->name_en),
        'emailAddress' => encryptor('encrypt', $user->email),
        'role_id' => encryptor('encrypt', $user->role_id),
        'accessType' => encryptor('encrypt', $user->full_access),
        'language' => encryptor('encrypt', $user->language),
        'image' => $user->image ?? 'No Image Found',
    ];

    if ($user->role) {
        $sessionData['role'] = encryptor('encrypt', $user->role->name);
        $sessionData['roleIdentitiy'] = encryptor('encrypt', $user->role->identity);
    }

    if ($user->instructor) {
        $sessionData['instructorImage'] = $user->instructor->image ?? 'No instructorImage Found';
    }

    session($sessionData);
}

    public function signOut()
    {
        request()->session()->flush();
        return redirect('login')->with('danger', 'Succesfully Logged Out');
    }

    public function show(User $data)
    {
        return view('backend.user.userProfile', compact('data'));
    }
}
