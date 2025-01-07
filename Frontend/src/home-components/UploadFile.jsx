import React, { useState } from 'react'
import Navbar from './Navbar';
import Papa from 'papaparse';  // You need to install papaparse for CSV parsing
import CSVTable from './CSVTable';

function UploadFile() {
    const [file, setFile] = useState(null);
    const [csvData, setCsvData] = useState(null);
    const [showCsvTable, setShowCsvTable] = useState(false);

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    // Handle file upload and parse the CSV
    const handleUpload = (e) => {
        e.preventDefault(); // Prevent the default form submission and page reload
        if (file) {
            Papa.parse(file, {
                complete: (result) => {
                    setCsvData(result.data);
                    setShowCsvTable(true);
                },
                header: true,  // assuming CSV has headers
            });
        }
    };

    return (
        <>
        {/* <div className='bg-grid-white h-[100vh]'>
            <Navbar /> */}

            {/* Full form container */}
            {/* {!showCsvTable &&
                <form className="flex items-center space-x-1 justify-center h-[70vh]"> */}

                    {/* Choose file button */}
                    {/* <label className="block bg-gray-700 bg-opacity-30 rounded-l-full p-4 h-16">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" accept=".csv" onChange={handleFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-300" />
                    </label> */}

                    {/* Upload Button */}
                    {/* <button
                        onClick={handleUpload}
                        disabled={!file} // Disable the button if no file is selected
                        className={`py-4 px-4 h-16 rounded-r-3xl transition text-white ${file
                            ? "bg-gray-400 hover:bg-gray-600 bg-opacity-20"
                            : "bg-gray-500 cursor-not-allowed"
                        }`}
                        >
                        Upload
                    </button>
                </form> */}
            {/* } */}

            {/* Display CSV Data in Table */}
            {/* {showCsvTable && <CSVTable csvData={csvData} setCsvData={setCsvData} />}
        </div> */}
        hello
            </>
    )
}

export default UploadFile