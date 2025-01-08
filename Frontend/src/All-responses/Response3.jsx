import React, { useState, useEffect } from 'react'

function Response3({ res1, jsonData }) {

    const [response3, setResponse3] = useState(null); // To store the API response
    const [error3, setError3] = useState(null); // To handle errors, if any

    // Function to send JSON data to the backend
    const handlePostRequest = async () => {
        try {
            const res = await fetch('https://quant-data-analyser-backend.onrender.com/process_csv_null_values', { // Replace with your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData), // Send the JSON data
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();

            setResponse3(data); // Update the state with the response data
        } catch (err) {
            console.error('Error sending data to backend:', err);
            setError3(err.message);
        }
    };

    // Trigger the POST request when res1 is not null or undefined
    useEffect(() => {
        if (res1) {
            handlePostRequest(); // Only call the POST request when res1 is valid
        }
    }, [res1]); // The useEffect hook will run every time res1 changes

    return (
        <div>
            {response3 && (
                <div className="p-1 rounded">
                    <span className="font-bold text-green-600">{"Response from Backend==>"}</span>
                    {/* Display number of columns and column names */}
                    <p className='inline'>
                        <strong className='inline px-2'>Null Values found:</strong> {response3.message},
                    </p>
                </div>
            )}

            {error3 && (
                <div className="text-red-500 p-1 rounded">
                    <h3 className="font-bold inline">{"Response from Backend==> "} &nbsp;Error:</h3>
                    <p className='px-2 inline'>{error3}</p>
                </div>
            )}
        </div>
    )
}

export default Response3;
