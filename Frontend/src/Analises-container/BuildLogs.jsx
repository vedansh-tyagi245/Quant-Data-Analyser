import React, { useState, useEffect, useRef } from 'react'
import Response1 from '../All-responses/Response1';
import Response2 from '../All-responses/Response2';
import Response3 from '../All-responses/Response3';
import Response4 from '../All-responses/Response4';
import Response5 from '../All-responses/Response5';
import Response6 from '../All-responses/Response6';

function BuildLogs({ jsonData, setJsonData }) {

    const containerRef = useRef(null); // Create a reference to the container div

    useEffect(() => {
        // Set the scroll position to the bottom of the container
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [jsonData]); // Re-run the effect whenever jsonData changes

    const [step, setStep] = useState(0); // Step to control which component to display
    const [success1, setSuccess1] = useState(false);
    const [success2, setSuccess2] = useState(false);
    const [success3, setSuccess3] = useState(false);
    const [success4, setSuccess4] = useState(false);
    const [success5, setSuccess5] = useState(false);
    const [success6, setSuccess6] = useState(false);

    useEffect(() => {
        // Only trigger the next component after 1 second delay
        if (step < 6) {
            const timeout = setTimeout(() => {
                setStep(step + 1);
            }, 1000); // Adjust the time delay as per your preference (1 second here)
            return () => clearTimeout(timeout); // Clear timeout if component unmounts before delay
        }
    }, [step]);

    return (
        <div className='text-white overflow-y-auto max-h-[30vh]' ref={containerRef}>

            {/* Tell number of columns and column names */}
            {step >= 1 && <Response1 res1={true} jsonData={jsonData} setSuccess1={setSuccess1} />}

            {/* Number of rows */}
            {step >= 2 && <Response2 res1={true} jsonData={jsonData} setSuccess2={setSuccess2} />}

            {/* Null values found */}
            {step >= 3 && <Response3 res1={true} jsonData={jsonData} setSuccess3={setSuccess3} />}

            {/* Cleaning by removing null values */}
            {step >= 4 && <Response4 res1={true} jsonData={jsonData} setJsonData={setJsonData} setSuccess4={setSuccess4} />}

            {/* Printing new number of rows */}
            {step >= 5 && <Response5 res1={true} jsonData={jsonData} setSuccess5={setSuccess5} />}

            {/* Removing any character present in Low,high,close, volume only int or double numbers allowed */}
            {step >= 6 && <Response6 res1={true} jsonData={jsonData} setJsonData={setJsonData} setSuccess6={setSuccess6} />}

        </div>
    );
}

export default BuildLogs;
