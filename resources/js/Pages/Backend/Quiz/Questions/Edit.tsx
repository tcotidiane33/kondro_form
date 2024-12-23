/Backend/Quiz/Questions/Edit.tsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

interface Quiz {
    id: number;
    title: string;
}

interface Question {
    id: number;
    content: string;
    quiz_id: number;
    type: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
}

interface Props {
    quizzes: Quiz[];
    question: Question;
}

const Edit: React.FC<Props> = ({ quizzes, question }) => {
    const { data, setData, put, errors } = useForm({
        quiz_id: question.quiz_id,
        questionType: question.type,
        questionContent: question.content,
        optionA: question.option_a,
        optionB: question.option_b,
        optionC: question.option_c,
        optionD: question.option_d,
        correctAnswer: question.correct_answer,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('questions.update', question.id));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Edit Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="quiz_id" className="block text-sm font-medium text-gray-700">Quiz</label>
                        <select
                            id="quiz_id"
                            value={data.quiz_id}
                            onChange={(e) => setData('quiz_id', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
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
                            <div className="mb-4">
                                <label htmlFor="optionA" className="block text-sm font-medium text-gray-700">Option A</label>
                                <input
                                    type="text"
                                    id="optionA"
                                    value={data.optionA}
                                    onChange={(e) => setData('optionA', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.optionA && <div className="text-red-600 text-sm mt-1">{errors.optionA}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="optionB" className="block text-sm font-medium text-gray-700">Option B</label>
                                <input
                                    type="text"
                                    id="optionB"
                                    value={data.optionB}
                                    onChange={(e) => setData('optionB', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.optionB && <div className="text-red-600 text-sm mt-1">{errors.optionB}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="optionC" className="block text-sm font-medium text-gray-700">Option C</label>
                                <input
                                    type="text"
                                    id="optionC"
                                    value={data.optionC}
                                    onChange={(e) => setData('optionC', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.optionC && <div className="text-red-600 text-sm mt-1">{errors.optionC}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="optionD" className="block text-sm font-medium text-gray-700">Option D</label>
                                <input
                                    type="text"
                                    id="optionD"
                                    value={data.optionD}
                                    onChange={(e) => setData('optionD', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.optionD && <div className="text-red-600 text-sm mt-1">{errors.optionD}</div>}
                            </div>
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
                    {data.questionType !== 'true_false' && (
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
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
