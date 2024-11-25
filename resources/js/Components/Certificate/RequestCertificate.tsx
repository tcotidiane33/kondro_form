import React, { useState } from 'react';
import axios from 'axios';

const RequestCertificate = () => {
    const [userId, setUserId] = useState('');
    const [courseId, setCourseId] = useState('');

    const handleRequestCertificate = async () => {
        try {
            await axios.post('/api/request-certificate', { userId, courseId });
            alert('Certificate request sent successfully');
        } catch (error) {
            console.error('Error requesting certificate:', error);
            alert('Failed to request certificate');
        }
    };

    return (
        <div>
            <h3>Request Certificate</h3>
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
            <button onClick={handleRequestCertificate}>Request Certificate</button>
        </div>
    );
};

export default RequestCertificate;
