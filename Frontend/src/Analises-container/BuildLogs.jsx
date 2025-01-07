import React, { useState } from 'react'
import Response1 from '../All-responses/Response1';
import Response2 from '../All-responses/Response2';

function BuildLogs({ csvData, setCsvData, jsonData, setJsonData }) {

    const [res1, setRes1] = useState(true);

    return (
        <div className='text-white'>

            {/* Show response for response1 */}
            <Response1 res1={res1} jsonData={jsonData} />
            <Response2 res1={res1} jsonData={jsonData} />
        </div>
    );
}

export default BuildLogs;
