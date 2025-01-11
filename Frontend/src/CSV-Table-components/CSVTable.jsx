import React from 'react';

function CSVTable({ csvData, setCsvData }) {
    return (
        <div>
            {/* Display CSV Data in Table */}
            {csvData && (
                <div
                    className="mt-1 overflow-y-auto overflow-x-auto max-w-[90vw] max-h-[40vh] p-0 border rounded-md text-center mx-auto"
                    style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                >
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th
                                    className="border border-gray-500 p-2 bg-black bg-opacity-60 text-white sticky top-0 z-10 text-center"
                                >
                                    Line No.
                                </th>
                                {Object.keys(csvData[0]).map((header, index) => (
                                    <th
                                        key={index}
                                        className="border border-gray-500 p-2 bg-black bg-opacity-60 text-white sticky top-0 z-10 text-center"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((row, index) => (
                                <tr key={index} className="border-b">
                                    {/* Display line number */}
                                    <td className="border border-gray-500 p-2 text-white bg-black bg-opacity-50 text-center hover:bg-opacity-5">
                                        {index + 1}
                                    </td>
                                    {Object.values(row).map((value, index) => (
                                        <td
                                            key={index}
                                            className="border border-gray-500 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-5"
                                        >
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default CSVTable;
