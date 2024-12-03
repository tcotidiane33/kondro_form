<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Students\AuthController;
use App\Http\Controllers\Students\DashboardController;
use App\Http\Controllers\Backend\Quizzes\QuizController;
use App\Http\Controllers\Backend\Setting\RoleController;
use App\Http\Controllers\Backend\Setting\UserController;
use App\Http\Controllers\Backend\Courses\CourseController;
use App\Http\Controllers\Backend\Quizzes\AnswerController;
use App\Http\Controllers\Backend\Courses\MaterialController;
use App\Http\Controllers\Backend\Quizzes\QuestionController;
use App\Http\Controllers\Backend\Setting\PermissionController;
use App\Http\Controllers\Backend\Courses\CourseCategoryController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['guest'])->group(function () {
    Route::get('/students/auth/register', [AuthController::class, 'signUpForm'])->name('students.auth.register');
    Route::post('/students/auth/register', [AuthController::class, 'signUpStore'])->name('students.auth.register.store');
    Route::get('/students/auth/login', [AuthController::class, 'signInForm'])->name('students.auth.login');
    Route::post('/students/auth/login', [AuthController::class, 'signInStore'])->name('students.auth.login.store');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/edit', [UserController::class, 'editProfile'])->name('profile.edit');
    Route::put('/profile/update/{id}', [UserController::class, 'updateProfile'])->name('profile.update');

    Route::get('/backend/user', [UserController::class, 'index'])->name('user.index');
    Route::get('/backend/user/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/backend/user', [UserController::class, 'store'])->name('user.store');
    Route::get('/backend/user/{id}', [UserController::class, 'show'])->name('user.show');
    Route::get('/backend/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/backend/user/{id}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/backend/user/{id}', [UserController::class, 'destroy'])->name('user.destroy');

    Route::get('/students/dashboard', [DashboardController::class, 'index'])->name('students.dashboard');
    Route::get('/students/profile', [\App\Http\Controllers\Students\ProfileController::class, 'index'])->name('students.profile');
    Route::post('/students/profile/save_profile', [\App\Http\Controllers\Students\ProfileController::class, 'save_profile'])->name('students.profile.save');
    Route::post('/students/profile/change_password', [\App\Http\Controllers\Students\ProfileController::class, 'change_password'])->name('students.profile.change_password');
    Route::post('/students/profile/change_image', [\App\Http\Controllers\Students\ProfileController::class, 'changeImage'])->name('students.profile.change_image');

    Route::get('/materials', [MaterialController::class, 'index'])->name('material.index');
    Route::get('/materials/create', [MaterialController::class, 'create'])->name('material.create');
    Route::post('/materials', [MaterialController::class, 'store'])->name('material.store');
    Route::get('/materials/{id}', [MaterialController::class, 'show'])->name('material.show');
    Route::get('/materials/{id}/edit', [MaterialController::class, 'edit'])->name('material.edit');
    Route::put('/materials/{id}', [MaterialController::class, 'update'])->name('material.update');
    Route::delete('/materials/{id}', [MaterialController::class, 'destroy'])->name('material.destroy');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('roles', RoleController::class);
    Route::resource('permissions', PermissionController::class);
    Route::resource('courses', CourseController::class);
    Route::resource('course-categories', CourseCategoryController::class);
    Route::resource('quizzes', QuizController::class);
    Route::resource('questions', QuestionController::class);
    Route::resource('answers', AnswerController::class);
    Route::resource('users', UserController::class);
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/admin/courses', [AdminController::class, 'manageCourses'])->name('admin.courses.index');
    Route::get('/admin/lessons', [AdminController::class, 'manageLessons'])->name('admin.lessons.index');
    Route::get('/admin/materials', [AdminController::class, 'manageMaterials'])->name('admin.materials.index');
    Route::get('/admin/users/{id}', [AdminController::class, 'showUser'])->name('admin.users.show');

    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    // Routes pour la gestion des utilisateurs
    Route::get('/users', [UserController::class, 'index'])->name('admin.users.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/users', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin.users.destroy');

    // Routes pour la gestion des cours
    Route::get('/courses', [CourseController::class, 'index'])->name('admin.courses.index');
    Route::get('/courses/create', [CourseController::class, 'create'])->name('admin.courses.create');
    Route::post('/courses', [CourseController::class, 'store'])->name('admin.courses.store');
    Route::get('/courses/{id}/edit', [CourseController::class, 'edit'])->name('admin.courses.edit');
    Route::put('/courses/{id}', [CourseController::class, 'update'])->name('admin.courses.update');
    Route::delete('/courses/{id}', [CourseController::class, 'destroy'])->name('admin.courses.destroy');

    // Routes pour la gestion des leçons
    Route::get('/lessons', [LessonController::class, 'index'])->name('admin.lessons.index');
    Route::get('/lessons/create', [LessonController::class, 'create'])->name('admin.lessons.create');
    Route::post('/lessons', [LessonController::class, 'store'])->name('admin.lessons.store');
    Route::get('/lessons/{id}/edit', [LessonController::class, 'edit'])->name('admin.lessons.edit');
    Route::put('/lessons/{id}', [LessonController::class, 'update'])->name('admin.lessons.update');
    Route::delete('/lessons/{id}', [LessonController::class, 'destroy'])->name('admin.lessons.destroy');

    // Routes pour la gestion des matériaux
    Route::get('/materials', [MaterialController::class, 'index'])->name('admin.materials.index');
    Route::get('/materials/create', [MaterialController::class, 'create'])->name('admin.materials.create');
    Route::post('/materials', [MaterialController::class, 'store'])->name('admin.materials.store');
    Route::get('/materials/{id}/edit', [MaterialController::class, 'edit'])->name('admin.materials.edit');
    Route::put('/materials/{id}', [MaterialController::class, 'update'])->name('admin.materials.update');
    Route::delete('/materials/{id}', [MaterialController::class, 'destroy'])->name('admin.materials.destroy');
});
require __DIR__.'/auth.php';
