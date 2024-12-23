import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

interface Question {
    id: number;
    content: string;
}

interface Props {
    questions: Question[];
}

const Create: React.FC<Props> = ({ questions }) => {
    const { data, setData, post, errors } = useForm({
        option_text: '',
        question_id: '',
        is_correct: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('options.store'));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Create Option</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="option_text" className="block text-sm font-medium text-gray-700">Option Text</label>
                        <input
                            type="text"
                            id="option_text"
                            value={data.option_text}
                            onChange={(e) => setData('option_text', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.option_text && <div className="text-red-600 text-sm mt-1">{errors.option_text}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="question_id" className="block text-sm font-medium text-gray-700">Question</label>
                        <select
                            id="question_id"
                            value={data.question_id}
                            onChange={(e) => setData('question_id', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select a question</option>
                            {questions.map((question) => (
                                <option key={question.id} value={question.id}>
                                    {question.content}
                                </option>
                            ))}
                        </select>
                        {errors.question_id && <div className="text-red-600 text-sm mt-1">{errors.question_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="is_correct" className="block text-sm font-medium text-gray-700">Is Correct</label>
                        <input
                            type="checkbox"
                            id="is_correct"
                            checked={data.is_correct}
                            onChange={(e) => setData('is_correct', e.target.checked)}
                            className="mt-1 block"
                        />
                        {errors.is_correct && <div className="text-red-600 text-sm mt-1">{errors.is_correct}</div>}
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
