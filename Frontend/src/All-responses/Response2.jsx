import React, { useState, useEffect } from 'react'

function Response2({ res1, jsonData }) {

    const [response2, setResponse2] = useState(null); // To store the API response
    const [error2, setError2] = useState(null); // To handle errors, if any

    // Function to send JSON data to the backend
    const handlePostRequest = async () => {
        try {
            const res = await fetch('https://quant-data-analyser-backend.onrender.com/process_csv_rows', { // Replace with your backend endpoint
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
            setResponse2(data); // Update the state with the response data
        } catch (err) {
            console.error('Error sending data to backend:', err);
            setError2(err.message);
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
            {response2 && (
                <div className="p-4 rounded">
                    <span className="font-bold text-red-600">{"Response from Backend==>"}</span>
                    {/* Display number of columns and column names */}
                    <p className='inline'>
                        <strong className='inline px-2'>Number of Rows:</strong> {response2.number_of_rows},
                    </p>
                </div>
            )}

            {error2 && (
                <div className="bg-red-500 p-4 rounded">
                    <h3 className="font-bold">Error:</h3>
                    <p>{error2}</p>
                </div>
            )}
        </div>
    )
}

export default Response2;
