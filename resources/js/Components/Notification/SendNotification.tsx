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
        <div>
            <h3>Send Notification</h3>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Course ID"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            />
            <button onClick={handleSendNotification}>Send Notification</button>
        </div>
    );
};

export default SendNotification;
