import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

interface Course {
    id: number;
    title: string;
}

interface Props {
    courses: Course[];
}

const Create: React.FC<Props> = ({ courses }) => {
    const { data, setData, post, errors } = useForm({
        title: '',
        course_id: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('quizzes.store'));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, rgb(169, 196, 230) 39%, rgb(222, 208, 208) 76%, rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-6">Create Quiz</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.title && <div className="text-red-600 text-sm mt-1">{errors.title}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">Course</label>
                        <select
                            id="course_id"
                            value={data.course_id}
                            onChange={(e) => setData('course_id', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select a course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.title}
                                </option>
                            ))}
                        </select>
                        {errors.course_id && <div className="text-red-600 text-sm mt-1">{errors.course_id}</div>}
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
