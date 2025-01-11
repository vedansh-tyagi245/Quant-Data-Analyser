import React, { useState, useEffect } from 'react';
import _ from 'lodash'; // For calculations
import Graph from './Graph';

function Stock_analyze({ jsonData }) {
    const [summaryStats, setSummaryStats] = useState({});
    const [content, setContent] = useState('Statistics');

    useEffect(() => {
        if (jsonData && jsonData.length > 0) {
            performAnalysis(jsonData);
        }
    }, [jsonData]);

    const calculateStats = (values) => {
        const n = values.length;
        const sorted = [...values].sort((a, b) => a - b);
        const median = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];
        const mean = _.mean(values);
        const min = _.min(values);
        const max = _.max(values);
        const stdDev = Math.sqrt(_.mean(values.map((v) => (v - mean) ** 2)));
        return { mean, median, min, max, stdDev };
    };

    const performAnalysis = (data) => {
        // Parse and prepare data
        const parsedData = data.map((d) => ({
            ...d,
            Date: new Date(d.Date.split('/').reverse().join('-')),
            Open: parseFloat(d.Open),
            High: parseFloat(d.High),
            Low: parseFloat(d.Low),
            Close: parseFloat(d.Close),
            Volume: parseInt(d.Volume, 10),
        }));

        // Sort by date (latest first)
        const sortedData = _.orderBy(parsedData, ['Date'], ['desc']);

        // Descriptive Statistics
        const stats = {
            Open: calculateStats(sortedData.map((d) => d.Open)),
            High: calculateStats(sortedData.map((d) => d.High)),
            Low: calculateStats(sortedData.map((d) => d.Low)),
            Close: calculateStats(sortedData.map((d) => d.Close)),
            Volume: calculateStats(sortedData.map((d) => d.Volume)),
        };
        setSummaryStats(stats);
    };

    return (
        <div className="p-6 bg-gray-900 bg-opacity-0">
            {/* Buttons */}
            <div className="flex justify-center space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setContent('Statistics')}
                >
                    Statistics
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setContent('Graph')}
                >
                    Graph
                </button>
            </div>
            {content == 'Statistics' && <div className="statistics">

                <h1 className="text-2xl font-bold mb-4">Stock Analysis</h1>

                {/* Summary Statistics */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Summary Statistics</h2>
                    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">Metric</th>
                                <th className="border border-gray-400 px-4 py-2">Mean</th>
                                <th className="border border-gray-400 px-4 py-2">Median</th>
                                <th className="border border-gray-400 px-4 py-2">Min</th>
                                <th className="border border-gray-400 px-4 py-2">Max</th>
                                <th className="border border-gray-400 px-4 py-2">Std Dev</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(summaryStats).map(([key, stats]) => (
                                <tr key={key}>
                                    <td className="border border-gray-400 px-4 py-2">{key}</td>
                                    <td className="border border-gray-400 px-4 py-2">{stats.mean.toFixed(2)}</td>
                                    <td className="border border-gray-400 px-4 py-2">{stats.median.toFixed(2)}</td>
                                    <td className="border border-gray-400 px-4 py-2">{stats.min.toFixed(2)}</td>
                                    <td className="border border-gray-400 px-4 py-2">{stats.max.toFixed(2)}</td>
                                    <td className="border border-gray-400 px-4 py-2">{stats.stdDev.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}

            {content == 'Graph' && <div className="graph">
                <Graph jsonData={jsonData} />
            </div>
            }


        </div>
    );
}

export default Stock_analyze;
