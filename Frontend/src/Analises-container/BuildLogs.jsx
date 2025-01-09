import React, { useState, useEffect, useRef } from 'react'
import Response1 from '../All-responses/Response1';
import Response2 from '../All-responses/Response2';
import Response3 from '../All-responses/Response3';
import Response4 from '../All-responses/Response4';
import Response5 from '../All-responses/Response5';
import Response6 from '../All-responses/Response6';
import Response7 from '../All-responses/Response7';
import Response8 from '../All-responses/Response8';

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
    const [success7, setSuccess7] = useState(false);
    const [success8, setSuccess8] = useState(false);

    useEffect(() => {
        // Only trigger the next component after 1 second delay
        if (step < 8) {
            const timeout = setTimeout(() => {
                setStep(step + 1);
            }, 1000); // Adjust the time delay as per your preference (1 second here)
            return () => clearTimeout(timeout); // Clear timeout if component unmounts before delay
        }
    }, [step]);

    return (
        <div className='text-white overflow-y-auto max-h-[34vh]' ref={containerRef}>

            {/* Tell number of columns and column names */}
            {step >= 1 && <Response1 res1={true} jsonData={jsonData} setSuccess1={setSuccess1} />}

            {/* Number of rows */}
            {step >= 1 && success1 && <Response2 res1={true} jsonData={jsonData} setSuccess2={setSuccess2} />}

            {/* Null values found */}
            {step >= 1 && success2 && <Response3 res1={true} jsonData={jsonData} setSuccess3={setSuccess3} />}

            {/* Cleaning by removing null values */}
            {step >= 1 && success3 && <Response4 res1={true} jsonData={jsonData} setJsonData={setJsonData} setSuccess4={setSuccess4} />}

            {/* Printing new number of rows */}
            {step >= 1 && success4 && <Response5 res1={true} jsonData={jsonData} setSuccess5={setSuccess5} />}

            {/* Removing any character present in Low,high,close, volume only int or double numbers allowed */}
            {step >= 1 && success5 && <Response6 res1={true} jsonData={jsonData} setJsonData={setJsonData} setSuccess6={setSuccess6} />}

            {/* Changing / to - in all the dates entries */}
            {step >= 1 && success6 && <Response7 res1={true} jsonData={jsonData} setJsonData={setJsonData} setSuccess7={setSuccess7} />}

            {/* Changing Date format to DD-MM-YYYY */}
            {step >= 1 && success7 && <Response8 res1={true} jsonData={jsonData} setJsonData={setJsonData} setSuccess8={setSuccess8} />}

        </div>
    );
}

export default BuildLogs;
