import React, { useState } from 'react'
import Response1 from '../All-responses/Response1';
import Response2 from '../All-responses/Response2';
import Response3 from '../All-responses/Response3';
import Response4 from '../All-responses/Response4';

function BuildLogs({ csvData, setCsvData, jsonData, setJsonData }) {

    const [res1, setRes1] = useState(true);

    return (
        <div className='text-white'>

            {/* Show response for response1 */}
            <Response1 res1={res1} jsonData={jsonData} />
            <Response2 res1={res1} jsonData={jsonData} />
            <Response3 res1={res1} jsonData={jsonData} />
            <Response4 res1={res1} jsonData={jsonData} setJsonData={setJsonData}/>
        </div>
    );
}

export default BuildLogs;
