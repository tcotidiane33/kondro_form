import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

interface Props {}

const Create: React.FC<Props> = () => {
    const { data, setData, post, errors } = useForm({
        answer: '',
        question_id: '',
        student_id: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('answers.store'));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Create Answer</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
                        <textarea
                            id="answer"
                            value={data.answer}
                            onChange={(e) => setData('answer', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.answer && <div className="text-red-600 text-sm mt-1">{errors.answer}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="question_id" className="block text-sm font-medium text-gray-700">Question ID</label>
                        <input
                            type="text"
                            id="question_id"
                            value={data.question_id}
                            onChange={(e) => setData('question_id', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.question_id && <div className="text-red-600 text-sm mt-1">{errors.question_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="student_id" className="block text-sm font-medium text-gray-700">Student ID</label>
                        <input
                            type="text"
                            id="student_id"
                            value={data.student_id}
                            onChange={(e) => setData('student_id', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.student_id && <div className="text-red-600 text-sm mt-1">{errors.student_id}</div>}
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
