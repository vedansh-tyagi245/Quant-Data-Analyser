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
                <div className='flex flex-col justify-center items-center h-[70vh] px-4 mt-20'>
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
                    <div class="text-white mt-5">
                        <h2 class="text-xl font-semibold mb-0 text-center font-mono">This is the csv format required</h2>
                        <table class="min-w-full table-auto border-collapserounded-lg overflow-hidden rounded-3xl">
                            <thead>
                                <tr class="bg-gray-700 text-white bg-opacity-60 hover:bg-gray-500">
                                    <th class="px-6 py-2 text-center">Date</th>
                                    <th class="px-6 py-2 text-center">Open</th>
                                    <th class="px-6 py-2 text-center">Close</th>
                                    <th class="px-6 py-2 text-center">Low</th>
                                    <th class="px-6 py-2 text-center">High</th>
                                    <th class="px-6 py-2 text-center">Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-gray-600 hover:bg-gray-500 bg-opacity-50">
                                    <td class="px-6 py-2 text-center">01/01/2025</td>
                                    <td class="px-6 py-2 text-center">450</td>
                                    <td class="px-6 py-2 text-center">460</td>
                                    <td class="px-6 py-2 text-center">440</td>
                                    <td class="px-6 py-2 text-center">470</td>
                                    <td class="px-6 py-2 text-center">99999999</td>
                                </tr>
                                <tr class="bg-gray-600 hover:bg-gray-500 bg-opacity-50">
                                    <td class="px-6 py-2 text-center">02-01-2025</td>
                                    <td class="px-6 py-2 text-center">460</td>
                                    <td class="px-6 py-2 text-center">450</td>
                                    <td class="px-6 py-2 text-center">440</td>
                                    <td class="px-6 py-2 text-center">470</td>
                                    <td class="px-6 py-2 text-center">499999940</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="restrictions p-6 bg-gray-800 rounded-lg shadow-lg text-white mt-5">
                            <isindex class="block mb-4 text-blue-500">Please adhere to the following restrictions:</isindex>
                            <ul class="list-disc pl-6 space-y-2">
                                <li class="text-lg text-gray-300">1. Column Names should be exactly the above ones with correct upper and lowercase characters</li>
                                <li class="text-lg text-gray-300">2. Date can be any DD/MM/YYYY, DD-MM-YYYY, MM/DD/YYYY, or MM-DD/YYYY</li>
                            </ul>
                        </div>

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