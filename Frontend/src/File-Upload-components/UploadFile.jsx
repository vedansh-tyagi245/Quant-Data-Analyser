import React, { useState } from 'react'
import Papa from 'papaparse';  // You need to install papaparse for CSV parsing
import CSVTable from '../CSV-Table-components/CSVTable';
import Navbar from '../home-components/Navbar';
import Analyze from '../Analises-container/Analyze';

function UploadFile({ link, setLink }) {
    const [file, setFile] = useState(null);
    const [csvData, setCsvData] = useState(null);
    const [jsonData, setJsonData] = useState(null);
    const [showAnalyze, setShowAnalyze] = useState(false);

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
                    const rawCsvData = result.data; // The raw CSV data
                    setCsvData(rawCsvData);

                    // Convert CSV data to JSON format
                    const jsonFormat = rawCsvData.map((row) => {
                        return row; // Each row is already a JSON object if header: true
                    });

                    setJsonData(jsonFormat);
                    console.log("JSON Data:", jsonFormat); // Log JSON data to console
                    setShowAnalyze(true);
                },
                header: true, // assuming CSV has headers
            });
        }
    };

    return (
        <>
            <div className='bg-grid-white h-[100vh]'>
                <Navbar />

                {/* Full form container */}
                {!showAnalyze && <div>

                    <form className="flex items-end space-x-1 justify-center h-[35vh]">

                        {/* Choose file button */}
                        <label className="block bg-gray-700 bg-opacity-30 rounded-l-full p-4 h-16">
                            <input type="file" accept=".csv" onChange={handleFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-300" />
                        </label>

                        {/* Upload Button */}
                        <button
                            onClick={handleUpload}
                            disabled={!file} // Disable the button if no file is selected
                            className={`py-4 px-4 h-16 rounded-r-3xl transition text-white ${file
                                ? "bg-gray-400 hover:bg-gray-600 bg-opacity-20"
                                : "bg-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Upload
                        </button>
                    </form>
                    <div className='text-purple-600 text-center'>Choose only csv file</div>
                </div>

                }

                {/* Display CSV Data in Table */}
                {showAnalyze && <Analyze csvData={csvData} setCsvData={setCsvData} jsonData={jsonData} setJsonData={setJsonData} />}
            </div>
        </>
    )
}

export default UploadFile