import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import MultiStepForm from './MultiStep/MultiStepForm';
import { CourseCategory, Instructor, Course } from '../../types/course';
import PublicLayout from '../../Layouts/PublicLayout';
import { PageProps } from '../../types/index';

const CreateCourse = () => {
    const { courseCategories, instructors, languages, user, isInstructor } = usePage<PageProps<{ courseCategories: CourseCategory[], instructors: Instructor[], languages: { code: string; name: string }[], user: any, isInstructor: boolean }>>().props;
    const { data, setData, post, errors } = useForm<Course>({
        title: '',
        description: '',
        course_category_id: 0,
        instructor_id: 0,
        type: 'paid',
        price: 0,
        old_price: 0,
        subscription_price: 0,
        start_from: '',
        duration: 0,
        lesson: 0,
        prerequisites: '',
        difficulty: 'beginner',
        course_code: '',
        image: null,
        thumbnail_image: null,
        thumbnail_video: '',
        status: 0,
        language: 'fr',
        tag: 'popular',
        chapters: [],
        lessons: [],
        quizzes: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('courses.store'), {
            forceFormData: true,
        });
    };

    const addChapter = () => {
        setData('chapters', [...data.chapters, { title: '', description: '' }]);
    };

    const addLesson = () => {
        setData('lessons', [...data.lessons, { title: '', content: '' }]);
    };

    const addQuiz = () => {
        setData('quizzes', [...data.quizzes, { question: '', answer: '' }]);
    };

    return (
        <PublicLayout>

        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Créer un nouveau cours</h1>
            <MultiStepForm
                courseCategories={courseCategories}
                instructors={instructors}
                languages={languages}
                formData={data}
                setFormData={setData}
                handleSubmit={handleSubmit}
                addChapter={addChapter}
                addLesson={addLesson}
                addQuiz={addQuiz}
                user={user}
                isInstructor={isInstructor}
            />
        </div>
        </PublicLayout>
    );
};

export default CreateCourse;
