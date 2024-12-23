import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

interface Course {
    id: number;
    title: string;
}

interface Quiz {
    id: number;
    title: string;
    course_id: number;
}

interface Props {
    courses: Course[];
    quiz: Quiz;
}

const Edit: React.FC<Props> = ({ courses, quiz }) => {
    const { data, setData, put, errors } = useForm({
        quizTitle: quiz.title,
        courseId: quiz.course_id,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('quizzes.update', quiz.id));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, rgb(169, 196, 230) 39%, rgb(222, 208, 208) 76%, rgba(166, 164, 164, 0.8) 100%)' }}>
                <h1>Edit Quiz</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="quizTitle">Quiz Title</label>
                        <input
                            type="text"
                            id="quizTitle"
                            value={data.quizTitle}
                            onChange={(e) => setData('quizTitle', e.target.value)}
                        />
                        {errors.quizTitle && <div>{errors.quizTitle}</div>}
                    </div>
                    <div>
                        <label htmlFor="courseId">Course</label>
                        <select
                            id="courseId"
                            value={data.courseId}
                            onChange={(e) => setData('courseId', e.target.value)}
                        >
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.title}
                                </option>
                            ))}
                        </select>
                        {errors.courseId && <div>{errors.courseId}</div>}
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
