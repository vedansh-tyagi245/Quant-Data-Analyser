import React, { useState } from 'react'

function BuildLogs({csvData, setCsvData, jsonData, setJsonData}) {

    const [response, setResponse] = useState(null); // To store the API response
    const [error, setError] = useState(null); // To handle errors, if any

    // Function to send JSON data to the backend
    const handlePostRequest = async () => {
        try {
            const res = await fetch('http://127.0.0.1:5000/process_csv', { // Replace with your backend endpoint
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
                <div className="bg-green-500 p-4 rounded">
                    <h3 className="font-bold">Response from Backend:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
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