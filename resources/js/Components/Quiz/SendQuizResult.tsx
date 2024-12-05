import React, { useState } from 'react';
import axios from 'axios';

const SendQuizResult = () => {
    const [userId, setUserId] = useState('');
    const [quizId, setQuizId] = useState('');
    const [score, setScore] = useState('');

    const handleSendQuizResult = async () => {
        try {
            await axios.post('/api/send-quiz-result', { userId, quizId, score });
            alert('Quiz result sent successfully');
        } catch (error) {
            console.error('Error sending quiz result:', error);
            alert('Failed to send quiz result');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Quiz Result</h3>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                    User ID
                </label>
                <input
                    id="userId"
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quizId">
                    Quiz ID
                </label>
                <input
                    id="quizId"
                    type="text"
                    placeholder="Enter Quiz ID"
                    value={quizId}
                    onChange={(e) => setQuizId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="score">
                    Score
                </label>
                <input
                    id="score"
                    type="text"
                    placeholder="Enter Score"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                onClick={handleSendQuizResult}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send Quiz Result
            </button>
        </div>
    );
};

export default SendQuizResult;
