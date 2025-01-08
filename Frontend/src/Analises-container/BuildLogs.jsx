import React, { useState, useEffect } from 'react'
import Response1 from '../All-responses/Response1';
import Response2 from '../All-responses/Response2';
import Response3 from '../All-responses/Response3';
import Response4 from '../All-responses/Response4';
import Response5 from '../All-responses/Response5';

function BuildLogs({jsonData, setJsonData }) {
    const [step, setStep] = useState(0); // Step to control which component to display

    useEffect(() => {
        // Only trigger the next component after 1 second delay
        if (step < 5) {
            const timeout = setTimeout(() => {
                setStep(step + 1);
            }, 1000); // Adjust the time delay as per your preference (1 second here)
            return () => clearTimeout(timeout); // Clear timeout if component unmounts before delay
        }
    }, [step]);

    return (
        <div className='text-white overflow-y-auto max-h-[30vh]'>

            {/* Tell number of columns and column names */}
            {step >= 1 && <Response1 res1={true} jsonData={jsonData} />}

            {/* Number of rows */}
            {step >= 2 && <Response2 res1={true} jsonData={jsonData} />}

            {/* Null values found */}
            {step >= 3 && <Response3 res1={true} jsonData={jsonData} />}

            {/* Cleaning by removing null values */}
            {step >= 4 && <Response4 res1={true} jsonData={jsonData} setJsonData={setJsonData} />}

            {/* Cleaning by removing null values */}
            {step >= 5 && <Response5 res1={true} jsonData={jsonData} />}
            
        </div>
    );
}

export default BuildLogs;
