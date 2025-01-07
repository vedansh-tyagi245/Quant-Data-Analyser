import React from 'react';

function CSVTable({ csvData, setCsvData }) {
    return (
        <div>
            {/* Display CSV Data in Table */}
            {csvData && (
                <div className="overflow-y-auto max-h-[80vh] p-0 border border-gray-300 rounded-md" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((header, index) => (
                                    <th
                                        key={index}
                                        className="border p-2 text-left bg-gray-100 sticky top-0 z-10"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((row, index) => (
                                <tr key={index} className="border-b">
                                    {Object.values(row).map((value, index) => (
                                        <td key={index} className="border p-2">
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
    