import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

interface Quiz {
    id: number;
    title: string;
}

interface Props {
    quizzes: Quiz[];
}

const Create: React.FC<Props> = ({ quizzes }) => {
    const { data, setData, post, errors } = useForm({
        quiz_id: '',
        questionType: 'multiple_choice',
        questionContent: '',
        options: [
            { option_text: '', is_correct: false },
            { option_text: '', is_correct: false },
            { option_text: '', is_correct: false },
            { option_text: '', is_correct: false },
        ],
    });

    const handleOptionChange = (index: number, field: string, value: any) => {
        const newOptions = [...data.options];
        newOptions[index][field] = value;
        setData('options', newOptions);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('questions.store'));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Create Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="quiz_id" className="block text-sm font-medium text-gray-700">Quiz</label>
                        <select
                            id="quiz_id"
                            value={data.quiz_id}
                            onChange={(e) => setData('quiz_id', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select a quiz</option>
                            {quizzes.map((quiz) => (
                                <option key={quiz.id} value={quiz.id}>
                                    {quiz.title}
                                </option>
                            ))}
                        </select>
                        {errors.quiz_id && <div className="text-red-600 text-sm mt-1">{errors.quiz_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="questionType" className="block text-sm font-medium text-gray-700">Question Type</label>
                        <select
                            id="questionType"
                            value={data.questionType}
                            onChange={(e) => setData('questionType', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="multiple_choice">Multiple Choice</option>
                            <option value="true_false">True/False</option>
                            <option value="short_answer">Short Answer</option>
                        </select>
                        {errors.questionType && <div className="text-red-600 text-sm mt-1">{errors.questionType}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="questionContent" className="block text-sm font-medium text-gray-700">Question Content</label>
                        <input
                            type="text"
                            id="questionContent"
                            value={data.questionContent}
                            onChange={(e) => setData('questionContent', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.questionContent && <div className="text-red-600 text-sm mt-1">{errors.questionContent}</div>}
                    </div>
                    {data.questionType === 'multiple_choice' && (
                        <>
                            {data.options.map((option, index) => (
                                <div key={index} className="mb-4">
                                    <label htmlFor={`option${index}`} className="block text-sm font-medium text-gray-700">Option {String.fromCharCode(65 + index)}</label>
                                    <input
                                        type="text"
                                        id={`option${index}`}
                                        value={option.option_text}
                                        onChange={(e) => handleOptionChange(index, 'option_text', e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <label className="inline-flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            checked={option.is_correct}
                                            onChange={(e) => handleOptionChange(index, 'is_correct', e.target.checked)}
                                            className="form-checkbox"
                                        />
                                        <span className="ml-2">Correct</span>
                                    </label>
                                    {errors[`options.${index}.option_text`] && <div className="text-red-600 text-sm mt-1">{errors[`options.${index}.option_text`]}</div>}
                                    {errors[`options.${index}.is_correct`] && <div className="text-red-600 text-sm mt-1">{errors[`options.${index}.is_correct`]}</div>}
                                </div>
                            ))}
                        </>
                    )}
                    {data.questionType === 'true_false' && (
                        <div className="mb-4">
                            <label htmlFor="correctAnswer" className="block text-sm font-medium text-gray-700">Correct Answer</label>
                            <select
                                id="correctAnswer"
                                value={data.correctAnswer}
                                onChange={(e) => setData('correctAnswer', e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                            {errors.correctAnswer && <div className="text-red-600 text-sm mt-1">{errors.correctAnswer}</div>}
                        </div>
                    )}
                    {data.questionType === 'short_answer' && (
                        <div className="mb-4">
                            <label htmlFor="correctAnswer" className="block text-sm font-medium text-gray-700">Correct Answer</label>
                            <input
                                type="text"
                                id="correctAnswer"
                                value={data.correctAnswer}
                                onChange={(e) => setData('correctAnswer', e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.correctAnswer && <div className="text-red-600 text-sm mt-1">{errors.correctAnswer}</div>}
                        </div>
                    )}
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
