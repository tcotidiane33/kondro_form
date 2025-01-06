<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Students\AuthController;
// use App\Http\Controllers\Students\DashboardController;
use App\Http\Controllers\Backend\Labs\LabController;
use App\Http\Controllers\Backend\Blog\BlogController;
use App\Http\Controllers\Backend\About\AboutController;
use App\Http\Controllers\Backend\Events\EventController;
use App\Http\Controllers\Backend\Forums\ForumController;
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
use App\Http\Controllers\Backend\Business\BusinessController;
use App\Http\Controllers\Backend\Setting\DashboardController;
use App\Http\Controllers\Backend\Setting\PermissionController;
use App\Http\Controllers\Backend\Admin\AdminDashboardController;
use App\Http\Controllers\Backend\Individual\IndividualController;
use App\Http\Controllers\Backend\Courses\CourseCategoryController;
use App\Http\Controllers\Backend\Enrollments\EnrollmentController;
use App\Http\Controllers\Backend\Students\StudentDashboardController;
use App\Http\Controllers\Backend\Certifications\CertificationController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware(['guest' ])->group(function () {
    Route::get('/students/auth/register', [AuthController::class, 'signUpForm'])->name('students.auth.register');
    Route::post('/students/auth/register', [AuthController::class, 'signUpStore'])->name('students.auth.register.store');
    Route::get('/student/auth/login', [AuthController::class, 'signInForm'])->name('students.auth.login');
    Route::post('/student/auth/login', [AuthController::class, 'signInStore'])->name('students.auth.login.store');

});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'admin'])->name('dashboard');

Route::middleware(['auth', 'verified', 'admin' ])->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::get('/profile/edit', [UserController::class, 'editProfile'])->name('profile.edit');
    // Route::put('/profile/update/{id}', [UserController::class, 'updateProfile'])->name('profile.update');

    Route::resource('lessons', LessonController::class);
    Route::resource('chapters', ChapterController::class);
    Route::get('/backend/user', [UserController::class, 'index'])->name('user.index');
    Route::get('/backend/user/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/backend/user', [UserController::class, 'store'])->name('user.store');
    Route::get('/backend/user/{id}', [UserController::class, 'show'])->name('user.show');
    Route::get('/backend/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/backend/user/{id}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/backend/user/{id}', [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('materials/view', [LessonController::class, 'viewMaterials'])->name('materials.view');
    Route::post('lessons/{lesson}/materials', [LessonController::class, 'addMaterial'])->name('lessons.materials.store');
    Route::get('lessons/{lesson}/materials/{material}/edit', [LessonController::class, 'editMaterial'])->name('lessons.materials.edit');
    Route::put('lessons/{lesson}/materials/{material}', [LessonController::class, 'updateMaterial'])->name('lessons.materials.update');
    Route::delete('lessons/{lesson}/materials/{material}', [LessonController::class, 'deleteMaterial'])->name('lessons.materials.destroy');
    Route::get('courses/all', [CourseController::class, 'index'])->name('courses.alls');

    // Routes pour les enrollements
    Route::get('/enrollments', [EnrollmentController::class, 'index'])->name('enrollments.index');
    Route::post('/enrollments/enroll/{courseId}', [EnrollmentController::class, 'enroll'])->name('enrollments.enroll');
    Route::post('/enrollments/unenroll/{courseId}', [EnrollmentController::class, 'unenroll'])->name('enrollments.unenroll');
    Route::post('/wishlist/add/{courseId}', [EnrollmentController::class, 'addToWishlist'])->name('wishlist.add');
    // Routes pour les certifications
    Route::get('/certifications', [CertificationController::class, 'index'])->name('certifications.index');
    Route::get('/certifications/{id}', [CertificationController::class, 'show'])->name('certifications.show');
    Route::post('/certifications/request', [CertificationController::class, 'requestCertificate'])->name('certifications.request');

    Route::get('/labs', [LabController::class, 'index'])->name('labs.index');
    Route::get('/discussion-forum', [ForumController::class, 'index'])->name('discussion-forum.index');

    Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/blog/{id}', [BlogController::class, 'show'])->name('blog.show');

    Route::get('/events', [EventController::class, 'index'])->name('events.index');
    Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');

    Route::get('/about', [AboutController::class, 'index'])->name('about.index');
    Route::get('/business', [BusinessController::class, 'index'])->name('business.index');

    Route::get('/individual', [IndividualController::class, 'index'])->name('individual.index');
    Route::get('/individual/apply', [IndividualController::class, 'apply'])->name('individual.apply');
    Route::post('/individual/apply', [IndividualController::class, 'storeApplication'])->name('individual.storeApplication');


});

// Pour les étudiants
Route::prefix('students')->middleware(['auth', 'verified' ])->group(function () {
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
Route::prefix('instructor')->middleware(['auth', 'verified' ])->group(function () {

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

Route::middleware(['auth', 'verified'])->group(function () {
    // Pour les administrateurs
    Route::middleware(['admin' ])->prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

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

        // Route pour la gestion des rôles
        Route::get('/roles/create', [RoleController::class, 'create'])->name('roles.create');
        Route::post('/roles', [RoleController::class, 'store'])->name('roles.store');
        Route::get('/roles/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
        Route::put('/roles/{role}', [RoleController::class, 'update'])->name('roles.update');
        Route::delete('/roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
        Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
    }); // end of admin middleware
}); // end of admin middleware

require __DIR__ . '/auth.php';
