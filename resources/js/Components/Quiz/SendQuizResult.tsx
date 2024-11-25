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
        <div>
            <h3>Send Quiz Result</h3>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Quiz ID"
                value={quizId}
                onChange={(e) => setQuizId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
            />
            <button onClick={handleSendQuizResult}>Send Quiz Result</button>
        </div>
    );
};

export default SendQuizResult;
