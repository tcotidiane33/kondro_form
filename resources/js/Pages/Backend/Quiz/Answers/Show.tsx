import React from 'react';

interface Answer {
    id: number;
    answer: string;
}

interface Props {
    answer: Answer;
}

const Show: React.FC<Props> = ({ answer }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">{answer.answer}</h1>
                <p>ID: {answer.id}</p>
            </div>
        </div>
    );
};

export default Show;
