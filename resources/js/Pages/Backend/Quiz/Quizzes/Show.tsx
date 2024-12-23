import React from 'react';

interface Quiz {
    id: number;
    title: string;
}

interface Props {
    quiz: Quiz;
}

const Show: React.FC<Props> = ({ quiz }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, rgb(169, 196, 230) 39%, rgb(222, 208, 208) 76%, rgba(166, 164, 164, 0.8) 100%)' }}>

                <h1>{quiz.title}</h1>
                <p>ID: {quiz.id}</p>
            </div>
        </div>
    );
};

export default Show;
