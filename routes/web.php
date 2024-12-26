<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Students\AuthController;
// use App\Http\Controllers\Students\DashboardController;
use App\Http\Controllers\Backend\Quizzes\QuizController;
use App\Http\Controllers\Backend\Setting\RoleController;
use App\Http\Controllers\Backend\Setting\UserController;
use App\Http\Controllers\Backend\Courses\CourseController;
use App\Http\Controllers\Backend\Courses\LessonController;
use App\Http\Controllers\Backend\Quizzes\AnswerController;
use App\Http\Controllers\Backend\Quizzes\OptionController;
use App\Http\Controllers\Backend\Courses\ChapterController;
use App\Http\Controllers\Backend\Courses\MaterialController;
use App\Http\Controllers\Backend\Quizzes\QuestionController;
use App\Http\Controllers\Backend\Students\StudentController;
use App\Http\Controllers\Backend\Setting\DashboardController;
use App\Http\Controllers\Backend\Setting\PermissionController;
use App\Http\Controllers\Backend\Courses\CourseCategoryController;
use App\Http\Controllers\Backend\Students\StudentDashboardController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware(['guest'])->group(function () {
    Route::get('/students/auth/register', [AuthController::class, 'signUpForm'])->name('students.auth.register');
    Route::post('/students/auth/register', [AuthController::class, 'signUpStore'])->name('students.auth.register.store');
    Route::get('/student/auth/login', [AuthController::class, 'signInForm'])->name('students.auth.login');
    Route::post('/student/auth/login', [AuthController::class, 'signInStore'])->name('students.auth.login.store');

});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'admin'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::get('/profile/edit', [UserController::class, 'editProfile'])->name('profile.edit');
    // Route::put('/profile/update/{id}', [UserController::class, 'updateProfile'])->name('profile.update');

    Route::get('/backend/user', [UserController::class, 'index'])->name('user.index');
    Route::get('/backend/user/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/backend/user', [UserController::class, 'store'])->name('user.store');
    Route::get('/backend/user/{id}', [UserController::class, 'show'])->name('user.show');
    Route::get('/backend/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/backend/user/{id}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/backend/user/{id}', [UserController::class, 'destroy'])->name('user.destroy');
    Route::resource('lessons', LessonController::class);
    Route::resource('chapters', ChapterController::class);
    Route::get('materials/view', [LessonController::class, 'viewMaterials'])->name('materials.view');
    Route::post('lessons/{lesson}/materials', [LessonController::class, 'addMaterial'])->name('lessons.materials.store');
    Route::get('lessons/{lesson}/materials/{material}/edit', [LessonController::class, 'editMaterial'])->name('lessons.materials.edit');
    Route::put('lessons/{lesson}/materials/{material}', [LessonController::class, 'updateMaterial'])->name('lessons.materials.update');
    Route::delete('lessons/{lesson}/materials/{material}', [LessonController::class, 'deleteMaterial'])->name('lessons.materials.destroy');


    // Pour les étudiants
    // Route pour le tableau de bord des étudiants
    // Route::get('/student/dashboard', [DashboardController::class, 'index'])->name('student.dashboard');
// Pour les étudiants
    Route::prefix('students')->group(function () {
        Route::get('/', [StudentController::class, 'index'])->name('students.index');
        // Route::get('/dashboard', [DashboardController::class, 'index'])->name('student.dashboard');
        Route::get('/dashboard', [StudentDashboardController::class, 'index'])->name('student.dashboard');

        Route::get('/create', [StudentController::class, 'create'])->name('students.create');
        Route::post('/students', [StudentController::class, 'store'])->name('students.store');
        Route::get('/{id}/edit', [StudentController::class, 'edit'])->name('students.edit');
        Route::put('/{id}', [StudentController::class, 'update'])->name('students.update');
        Route::delete('/{id}', [StudentController::class, 'destroy'])->name('students.destroy');

        Route::get('/profile', [App\Http\Controllers\Students\ProfileController::class, 'index'])->name('student.profile');
        Route::get('/profile/edit', [App\Http\Controllers\Students\ProfileController::class, 'edit'])->name('student.profile.edit');
        Route::post('/profile/update', [App\Http\Controllers\Students\ProfileController::class, 'update'])->name('student.profile.update');
        // Route::post('/profile/update', [App\Http\Controllers\Students\ProfileController::class, 'save_profile'])->name('student.profile.update');
        Route::post('/profile/change-image', [App\Http\Controllers\Students\ProfileController::class, 'changeImage'])->name('student.profile.changeImage');
        Route::get('/courses', [CourseController::class, 'index'])->name('student.courses');
        Route::get('/courses/{id}', [CourseController::class, 'show'])->name('student.courses.show');
        // Route::post('/courses/enroll', [EnrollmentController::class, 'enroll'])->name('student.courses.enroll');
        // Route::get('/progress', [ProgressController::class, 'index'])->name('student.progress');
        // Route::get('/certificates', [CertificateController::class, 'index'])->name('student.certificates');
        // Route::post('/certificates/request', [CertificateController::class, 'request'])->name('student.certificates.request');
        // Route::get('/notifications', [NotificationController::class, 'index'])->name('student.notifications');
        // Route::get('/messages', [MessageController::class, 'index'])->name('student.messages');
        // Route::post('/messages/send', [MessageController::class, 'send'])->name('student.messages.send');
        // Route::get('/forums', [ForumController::class, 'index'])->name('student.forums');
        // Route::post('/forums/create', [ForumController::class, 'store'])->name('student.forums.create');
        // Route::get('/recommendations', [RecommendationController::class, 'index'])->name('student.recommendations');
        // Route::get('/support', [SupportController::class, 'index'])->name('support');
    });

    // Pour les instructeurs
    // Route::prefix('instructor')->middleware(['auth', 'verified', 'checkRole:instructor'])->group(function () {
    Route::prefix('instructor')->middleware(['auth', 'verified'])->group(function () {

        Route::get('/dashboard', [DashboardController::class, 'index'])->name('instructor.dashboard');

        Route::get('/profile/edit', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'edit'])->name('instructor.profile.edit');
        Route::get('/profile', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'index'])->name('instructor.profile');
        Route::post('/profile/update', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'save_profile'])->name('instructor.profile.update');
        Route::post('/profile/change-image', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'changeImage'])->name('instructor.profile.changeImage');
        Route::get('/courses', [CourseController::class, 'index'])->name('instructor.courses');
        Route::get('/courses/create', [CourseController::class, 'create'])->name('instructor.courses.create');
        Route::post('/courses', [CourseController::class, 'store'])->name('instructor.courses.store');
        Route::get('/courses/{id}', [CourseController::class, 'show'])->name('instructor.courses.show');
        Route::get('/courses/{id}/edit', [CourseController::class, 'edit'])->name('instructor.courses.edit');
        Route::put('/courses/{id}', [CourseController::class, 'update'])->name('instructor.courses.update');
        Route::delete('/courses/{id}', [CourseController::class, 'destroy'])->name('instructor.courses.destroy');

        // Route::get('/progress', [ProgressController::class, 'index'])->name('instructor.progress');
        // Route::get('/certificates', [CertificateController::class, 'index'])->name('instructor.certificates');
        // Route::post('/certificates/request', [CertificateController::class, 'request'])->name('instructor.certificates.request');
        // Route::get('/notifications', [NotificationController::class, 'index'])->name('instructor.notifications');
        // Route::get('/messages', [MessageController::class, 'index'])->name('instructor.messages');
        // Route::post('/messages/send', [MessageController::class, 'send'])->name('instructor.messages.send');
        // Route::get('/forums', [ForumController::class, 'index'])->name('instructor.forums');
        // Route::post('/forums/create', [ForumController::class, 'store'])->name('instructor.forums.create');
        // Route::get('/recommendations', [RecommendationController::class, 'index'])->name('instructor.recommendations');
        // Route::get('/support', [SupportController::class, 'index'])->name('support');


        Route::resource('courses', CourseController::class);
        Route::resource('course-categories', CourseCategoryController::class);
        Route::resource('quizzes', QuizController::class);
        Route::resource('questions', QuestionController::class);
        Route::resource('options', OptionController::class);
        Route::resource('answers', AnswerController::class);
    });
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/courses', [AdminController::class, 'manageCourses'])->name('admin.courses.index');
    Route::get('/lessons', [AdminController::class, 'manageLessons'])->name('admin.lessons.index');
    Route::get('/materials', [AdminController::class, 'manageMaterials'])->name('admin.materials.index');
    Route::get('/users/{id}', [AdminController::class, 'showUser'])->name('admin.users.show');

    Route::get('/profile', [App\Http\Controllers\Backend\Admin\ProfileController::class, 'index'])->name('admin.profile');
    Route::get('/profile/edit', [App\Http\Controllers\Backend\Admin\ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::post('/profile/update', [App\Http\Controllers\Backend\Admin\ProfileController::class, 'update'])->name('admin.profile.update');

    // Routes pour la gestion des utilisateurs
    Route::get('/users', [UserController::class, 'index'])->name('admin.users.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/users', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin.users.destroy');

});
require __DIR__ . '/auth.php';
