import React, { useState } from 'react'
import Navbar from './Navbar'
import UploadFile from '../File-Upload-components/UploadFile'
import Analyze from '../Analises-container/Analyze';

function HomePage({ link, setLink }) {

    const [showAnalyze, setShowAnalyze] = useState(false);
    const [csvData, setCsvData] = useState(null);
    const [jsonData, setJsonData] = useState(null);

    return (
        <div><div className='bg-grid-white h-[100vh]'>

            {/* Navbar Components */}
            <Navbar />

            {/* Hero Section */}
            {!showAnalyze &&
                <div className='flex flex-col justify-center items-center h-[70vh] px-4'>
                    <div className="font-mono text-white font-bold w-full max-w-4xl text-center">
                        <div className='text-4xl sm:text-5xl lg:text-6xl leading-tight'>
                            Stock market analyzer
                        </div>
                        <div className='text-lg sm:text-xl lg:text-2xl mt-4'>
                            Transform the Way You Analyze Data—100% Faster, 100% Smarter.
                        </div>
                        <div className="btn flex flex-wrap justify-center gap-4 mt-6">
                            <button
                                type="button"
                                className='text-violet-800 px-5 py-1 bg-[rgb(255,255,255)] font-sans rounded-full text-lg sm:text-xl lg:text-2xl hover:bg-violet-300 transition-all bg-opacity-90'>
                                View Tutorial
                            </button>
                            <UploadFile showAnalyze={showAnalyze} setShowAnalyze={setShowAnalyze} csvData={csvData} setCsvData={setCsvData} jsonData={jsonData} setJsonData={setJsonData} />
                        </div>
                        Choose only csv file
                    </div>
                </div>
            }
            {/* Display CSV Data in Table */}
            {showAnalyze && <Analyze csvData={csvData} setCsvData={setCsvData} jsonData={jsonData} setJsonData={setJsonData} />}
        </div>
        </div>
    )
}

export default HomePage