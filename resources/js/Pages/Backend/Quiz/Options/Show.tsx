import React from 'react';

interface Option {
    id: number;
    option_text: string;
    is_correct: boolean;
}

interface Props {
    option: Option;
}

const Show: React.FC<Props> = ({ option }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">{option.option_text}</h1>
                <p>ID: {option.id}</p>
                <p>Is Correct: {option.is_correct ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

export default Show;
