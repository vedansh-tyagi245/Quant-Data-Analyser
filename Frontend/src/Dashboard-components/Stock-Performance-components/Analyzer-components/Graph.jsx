import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary components for chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Graph({ jsonData }) {
    if (!jsonData || jsonData.length === 0) {
        return <div>No data available to display the graph.</div>;
    }

    // Prepare data for the chart
    const labels = jsonData.map((entry) => entry.Date); // Dates for x-axis
    const openPrices = jsonData.map((entry) => parseFloat(entry.Open));
    const highPrices = jsonData.map((entry) => parseFloat(entry.High));
    const lowPrices = jsonData.map((entry) => parseFloat(entry.Low));

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Open Prices',
                data: openPrices,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1,
            },
            {
                label: 'High Prices',
                data: highPrices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.1,
            },
            {
                label: 'Low Prices',
                data: lowPrices,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.2)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Stock Price Analysis (Open, High, Low)',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price',
                },
            },
        },
    };

    return (
        <div className="p-6 bg-gray-900 bg-opacity-0">
            <h1 className="text-xl font-bold mb-4 text-center">Stock Price Graph</h1>
            <div className="flex justify-left h-[63vh]">
                <Line data={chartData} options={options} />
                <div className="notepad font-mono  flex items-center">As you can see that High {">="} open it means if you successfully determine the peak point that you will having profits everyday</div>
            </div>
        </div>
    );
}

export default Graph;
