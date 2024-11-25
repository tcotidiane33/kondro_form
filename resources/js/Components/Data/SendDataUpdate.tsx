import React, { useState } from 'react';
import axios from 'axios';

const SendDataUpdate = () => {
    const [courseId, setCourseId] = useState('');
    const [updatedData, setUpdatedData] = useState('');

    const handleSendDataUpdate = async () => {
        try {
            await axios.post('/api/send-data-update', { courseId, updatedData });
            alert('Data update sent successfully');
        } catch (error) {
            console.error('Error sending data update:', error);
            alert('Failed to send data update');
        }
    };

    return (
        <div>
            <h3>Send Data Update</h3>
            <input
                type="text"
                placeholder="Course ID"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Updated Data"
                value={updatedData}
                onChange={(e) => setUpdatedData(e.target.value)}
            />
            <button onClick={handleSendDataUpdate}>Send Data Update</button>
        </div>
    );
};

export default SendDataUpdate;
