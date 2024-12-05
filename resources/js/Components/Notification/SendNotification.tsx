import React, { useState } from 'react';
import axios from 'axios';

const SendNotification = () => {
    const [userId, setUserId] = useState('');
    const [courseId, setCourseId] = useState('');

    const handleSendNotification = async () => {
        try {
            await axios.post('/api/send-notification', { userId, courseId });
            alert('Notification sent successfully');
        } catch (error) {
            console.error('Error sending notification:', error);
            alert('Failed to send notification');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Notification</h3>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseId">
                    Course ID
                </label>
                <input
                    id="courseId"
                    type="text"
                    placeholder="Enter Course ID"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                onClick={handleSendNotification}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send Notification
            </button>
        </div>
    );
};

export default SendNotification;
