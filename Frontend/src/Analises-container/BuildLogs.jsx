import React, { useState } from 'react'

function BuildLogs({ csvData, setCsvData, jsonData, setJsonData }) {

    const [response, setResponse] = useState(null); // To store the API response
    const [error, setError] = useState(null); // To handle errors, if any

    // Function to send JSON data to the backend
    const handlePostRequest = async () => {
        try {
            const res = await fetch('https://quant-data-analyser-backend.onrender.com/process_csv', { // Replace with your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData), // Send the JSON data
            });

            if (!res.ok) {
                console.log(jsonData)
                console.log(JSON.stringify(jsonData, null, 2));
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            setResponse(data); // Update the state with the response data
        } catch (err) {
            console.error('Error sending data to backend:', err);
            setError(err.message);
        }
    };

    return (
        <div className='text-white'>
            <div className="mb-4">
                <button
                    onClick={handlePostRequest}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send Data to Backend
                </button>
            </div>

            {/* Show response or error */}
            {response && (
                <div className="p-4 rounded">
                    <span className="font-bold text-red-600">{"Response from Backend==>"}</span>
                    {/* Display number of columns and column names */}
                    <p className='inline'><strong className='inline px-2'>Number of columns:</strong> {response.number_of_columns},</p>
                    <p className='inline'><strong className='inline px-2'>Column names:{" {"}</strong></p>
                    <ul className='inline'>
                        {response.column_names.map((column, index) => (
                            <li key={index} className='inline pr-2'>{column},</li>
                        ))}
                        <strong>{"}"}</strong>
                    </ul>
                </div>
            )}

            {error && (
                <div className="bg-red-500 p-4 rounded">
                    <h3 className="font-bold">Error:</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default BuildLogs;
