import React from 'react';

interface Question {
    id: number;
    content: string;
    type: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
}

interface Props {
    question: Question;
}

const Show: React.FC<Props> = ({ question }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">{question.content}</h1>
                <p>ID: {question.id}</p>
                <p>Type: {question.type}</p>
                {question.type === 'multiple_choice' && (
                    <>
                        <p>Option A: {question.option_a}</p>
                        <p>Option B: {question.option_b}</p>
                        <p>Option C: {question.option_c}</p>
                        <p>Option D: {question.option_d}</p>
                    </>
                )}
                <p>Correct Answer: {question.correct_answer}</p>
            </div>
        </div>
    );
};

export default Show;
