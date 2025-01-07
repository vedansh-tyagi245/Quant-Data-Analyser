import React from 'react'
import CSVTable from '../CSV-Table-components/CSVTable'
import BuildLogs from './BuildLogs'

function Analyze({ csvData, setCsvData, jsonData, setJsonData }) {
  return (
    <div className='overflow-y-auto max-h-[100vh]'>

      {/* Table container */}
      {/* <div className='h-[55vh] w-[60vw] flex justify-center items-center mx-auto bg-gray-900 bg-opacity-70'> */}
      <div>
        <CSVTable csvData={csvData} setCsvData={setCsvData} />
      </div>

      {/* Logs section */}
      <div className="mt-5 h-[35vh] w-[90vw] border bg-black mx-auto bg-opacity-50">
        <BuildLogs csvData={csvData} setCsvData={setCsvData} jsonData={jsonData} setJsonData={setJsonData} />
      </div>
    </div>
  )
}

export default Analyze