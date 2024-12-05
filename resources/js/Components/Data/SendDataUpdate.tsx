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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Data Update</h3>
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updatedData">
                    Updated Data
                </label>
                <input
                    id="updatedData"
                    type="text"
                    placeholder="Enter Updated Data"
                    value={updatedData}
                    onChange={(e) => setUpdatedData(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                onClick={handleSendDataUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send Data Update
            </button>
        </div>
    );
};

export default SendDataUpdate;
