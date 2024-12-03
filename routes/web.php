<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\Quizzes\QuizController;
use App\Http\Controllers\Backend\Setting\RoleController;
use App\Http\Controllers\Backend\Setting\UserController;
use App\Http\Controllers\Backend\Courses\CourseController;
use App\Http\Controllers\Backend\Quizzes\AnswerController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/edit', [UserController::class, 'editProfile'])->name('profile.edit');
    Route::put('/profile/update/{id}', [UserController::class, 'updateProfile'])->name('profile.update');
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
require __DIR__.'/auth.php';
