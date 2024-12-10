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
use App\Http\Controllers\Backend\Quizzes\AnswerController;
use App\Http\Controllers\Backend\Courses\MaterialController;
use App\Http\Controllers\Backend\Quizzes\QuestionController;
use App\Http\Controllers\Backend\Students\StudentController;
use App\Http\Controllers\Backend\Setting\DashboardController;
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

    // Pour les étudiants
    // Route pour le tableau de bord des étudiants
    // Route::get('/student/dashboard', [DashboardController::class, 'index'])->name('student.dashboard');
// Pour les étudiants
    Route::get('/student/dashboard', function () {
        return Inertia::render('Backend/Dashboard/Dashboard', [
            'totalStudents' => \App\Models\Student::count(),
            'totalInstructors' => \App\Models\Instructor::count(),
            'totalCourses' => \App\Models\Course::count(),
            'totalLessons' => \App\Models\Lesson::count(),
            'totalEnrollments' => \App\Models\Enrollment::count(),
            'totalRevenue' => \App\Models\Payment::sum('amount'),
            'lastMonthStudents' => \App\Models\Student::where('created_at', '>=', now()->subDays(30))->count(),
            'lastMonthCourses' => \App\Models\Course::where('created_at', '>=', now()->subDays(30))->count(),
            'lastMonthRevenue' => \App\Models\Payment::where('created_at', '>=', now()->subDays(30))->sum('amount'),
            'recentStudents' => \App\Models\Student::orderBy('created_at', 'desc')->take(5)->get(),
            'monthlyRevenue' => \App\Models\Payment::selectRaw('MONTH(created_at) as month, SUM(amount) as total')
                ->whereYear('created_at', date('Y'))
                ->groupBy('month')
                ->orderBy('month')
                ->pluck('total', 'month')
                ->toArray(),
        ]);
    })->name('student.dashboard');
    Route::get('/students', [StudentController::class, 'index'])->name('students.index');
    Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');
    Route::post('/students', [StudentController::class, 'store'])->name('students.store');
    Route::get('/students/{id}/edit', [StudentController::class, 'edit'])->name('students.edit');
    Route::put('/students/{id}', [StudentController::class, 'update'])->name('students.update');
    Route::delete('/students/{id}', [StudentController::class, 'destroy'])->name('students.destroy');


    Route::get('/student/profile', [App\Http\Controllers\Students\ProfileController::class, 'index'])->name('student.profile');
    Route::get('/student/profile/edit', [App\Http\Controllers\Students\ProfileController::class, 'edit'])->name('student.profile.edit');
    Route::post('/student/profile/update', [App\Http\Controllers\Students\ProfileController::class, 'update'])->name('student.profile.update');
    // Route::post('/student/profile/update', [App\Http\Controllers\Students\ProfileController::class, 'save_profile'])->name('student.profile.update');
    Route::post('/student/profile/change-image', [App\Http\Controllers\Students\ProfileController::class, 'changeImage'])->name('student.profile.changeImage');
    Route::get('/student/courses', [CourseController::class, 'index'])->name('student.courses');
    Route::get('/student/courses/{id}', [CourseController::class, 'show'])->name('student.courses.show');
    Route::post('/student/courses/enroll', [EnrollmentController::class, 'enroll'])->name('student.courses.enroll');
    Route::get('/student/progress', [ProgressController::class, 'index'])->name('student.progress');
    Route::get('/student/certificates', [CertificateController::class, 'index'])->name('student.certificates');
    Route::post('/student/certificates/request', [CertificateController::class, 'request'])->name('student.certificates.request');
    Route::get('/student/notifications', [NotificationController::class, 'index'])->name('student.notifications');
    Route::get('/student/messages', [MessageController::class, 'index'])->name('student.messages');
    Route::post('/student/messages/send', [MessageController::class, 'send'])->name('student.messages.send');
    Route::get('/student/forums', [ForumController::class, 'index'])->name('student.forums');
    Route::post('/student/forums/create', [ForumController::class, 'store'])->name('student.forums.create');
    Route::get('/student/recommendations', [RecommendationController::class, 'index'])->name('student.recommendations');
    Route::get('/support', [SupportController::class, 'index'])->name('support');

    // Pour les instructeurs
    Route::get('/instructor/dashboard', function () {
        $user = Auth::user();
        $data = [
            'totalStudents' => \App\Models\Student::count(),
            'totalInstructors' => \App\Models\Instructor::count(),
            'totalCourses' => \App\Models\Course::count(),
            'totalLessons' => \App\Models\Lesson::count(),
            'totalEnrollments' => \App\Models\Enrollment::count(),
            'totalRevenue' => \App\Models\Payment::sum('amount'),
            'lastMonthStudents' => \App\Models\Student::where('created_at', '>=', now()->subDays(30))->count(),
            'lastMonthCourses' => \App\Models\Course::where('created_at', '>=', now()->subDays(30))->count(),
            'lastMonthRevenue' => \App\Models\Payment::where('created_at', '>=', now()->subDays(30))->sum('amount'),
            'recentStudents' => \App\Models\Student::orderBy('created_at', 'desc')->take(5)->get(),
            'monthlyRevenue' => \App\Models\Payment::selectRaw('MONTH(created_at) as month, SUM(amount) as total')
                ->whereYear('created_at', date('Y'))
                ->groupBy('month')
                ->orderBy('month')
                ->pluck('total', 'month')
                ->toArray(),
            'instructorCourses' => \App\Models\Course::where('instructor_id', $user->id)->count(),
            'instructorStudents' => \App\Models\Enrollment::whereHas('course', function ($query) use ($user) {
                $query->where('instructor_id', $user->id);
            })->count(),
        ];
        return Inertia::render('Backend/Dashboard/InstructorDashboard', $data);
    })->name('instructor.dashboard');
    Route::get('/instructor/profile/edit', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'edit'])->name('instructor.profile.edit');
    Route::get('/instructor/profile', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'index'])->name('instructor.profile');
    Route::post('/instructor/profile/update', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'save_profile'])->name('instructor.profile.update');
    Route::post('/instructor/profile/change-image', [App\Http\Controllers\Backend\Instructors\ProfileController::class, 'changeImage'])->name('instructor.profile.changeImage');
    Route::get('/instructor/courses', [CourseController::class, 'index'])->name('instructor.courses');
    Route::get('/instructor/courses/create', [CourseController::class, 'create'])->name('instructor.courses.create');
    Route::post('/instructor/courses', [CourseController::class, 'store'])->name('instructor.courses.store');
    Route::get('/instructor/courses/{id}', [CourseController::class, 'show'])->name('instructor.courses.show');
    Route::get('/instructor/courses/{id}/edit', [CourseController::class, 'edit'])->name('instructor.courses.edit');
    Route::put('/instructor/courses/{id}', [CourseController::class, 'update'])->name('instructor.courses.update');
    Route::delete('/instructor/courses/{id}', [CourseController::class, 'destroy'])->name('instructor.courses.destroy');
    Route::get('/instructor/progress', [ProgressController::class, 'index'])->name('instructor.progress');
    Route::get('/instructor/certificates', [CertificateController::class, 'index'])->name('instructor.certificates');
    Route::post('/instructor/certificates/request', [CertificateController::class, 'request'])->name('instructor.certificates.request');
    Route::get('/instructor/notifications', [NotificationController::class, 'index'])->name('instructor.notifications');
    Route::get('/instructor/messages', [MessageController::class, 'index'])->name('instructor.messages');
    Route::post('/instructor/messages/send', [MessageController::class, 'send'])->name('instructor.messages.send');
    Route::get('/instructor/forums', [ForumController::class, 'index'])->name('instructor.forums');
    Route::post('/instructor/forums/create', [ForumController::class, 'store'])->name('instructor.forums.create');
    Route::get('/instructor/recommendations', [RecommendationController::class, 'index'])->name('instructor.recommendations');
    Route::get('/support', [SupportController::class, 'index'])->name('support');


    Route::get('/materials', [MaterialController::class, 'index'])->name('material.index');
    Route::get('/materials/create', [MaterialController::class, 'create'])->name('material.create');
    Route::post('/materials', [MaterialController::class, 'store'])->name('material.store');
    Route::get('/materials/{id}', [MaterialController::class, 'show'])->name('material.show');
    Route::get('/materials/{id}/edit', [MaterialController::class, 'edit'])->name('material.edit');
    Route::put('/materials/{id}', [MaterialController::class, 'update'])->name('material.update');
    Route::delete('/materials/{id}', [MaterialController::class, 'destroy'])->name('material.destroy');

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
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/courses', [AdminController::class, 'manageCourses'])->name('admin.courses.index');
    Route::get('/admin/lessons', [AdminController::class, 'manageLessons'])->name('admin.lessons.index');
    Route::get('/admin/materials', [AdminController::class, 'manageMaterials'])->name('admin.materials.index');
    Route::get('/admin/users/{id}', [AdminController::class, 'showUser'])->name('admin.users.show');

    Route::get('/admin/profile', [App\Http\Controllers\Backend\Admin\ProfileController::class, 'index'])->name('admin.profile');
    Route::get('/admin/profile/edit', [App\Http\Controllers\Backend\Admin\ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::post('/admin/profile/update', [App\Http\Controllers\Backend\Admin\ProfileController::class, 'update'])->name('admin.profile.update');


    // Routes pour la gestion des utilisateurs
    Route::get('/users', [UserController::class, 'index'])->name('admin.users.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/users', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin.users.destroy');

    // Routes pour la gestion des cours
    // Route::get('/courses', [CourseController::class, 'index'])->name('admin.courses.index');
    // Route::get('/courses/create', [CourseController::class, 'create'])->name('admin.courses.create');
    // Route::post('/courses', [CourseController::class, 'store'])->name('admin.courses.store');
    // Route::get('/courses/{id}/edit', [CourseController::class, 'edit'])->name('admin.courses.edit');
    // Route::put('/courses/{id}', [CourseController::class, 'update'])->name('admin.courses.update');
    // Route::delete('/courses/{id}', [CourseController::class, 'destroy'])->name('admin.courses.destroy');

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
require __DIR__ . '/auth.php';
