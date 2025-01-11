import React from 'react';

function Should_Complete_date({ jsonData, setJsonData }) {
  // Helper function to parse DD/MM/YYYY into a Date object
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day); // Month is zero-based
  };

  // Helper function to format a Date object as DD/MM/YYYY
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Find missing dates and fill them with averages
  const fillMissingDatesWithAverages = () => {
    if (!jsonData || jsonData.length === 0) {
      console.log('No data available.');
      return;
    }

    // Extract and parse all dates from jsonData
    const dates = jsonData.map((item) => parseDate(item.Date));

    // Find minimum and maximum dates
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    // Create a Set of all provided dates in ISO format for quick lookup
    const dateSet = new Set(dates.map((d) => d.toISOString().split('T')[0]));

    // Calculate average values
    const total = {
      Open: 0,
      High: 0,
      Low: 0,
      Close: 0,
      Volume: 0,
    };

    jsonData.forEach((item) => {
      total.Open += parseFloat(item.Open) || 0;
      total.High += parseFloat(item.High) || 0;
      total.Low += parseFloat(item.Low) || 0;
      total.Close += parseFloat(item.Close) || 0;
      total.Volume += parseFloat(item.Volume) || 0;
    });

    const count = jsonData.length;

    const averages = {
      Open: total.Open / count,
      High: total.High / count,
      Low: total.Low / count,
      Close: total.Close / count,
      Volume: total.Volume / count,
    };

    // Find missing dates and fill them with averages in decreasing order
    const filledData = [...jsonData];
    for (let d = new Date(maxDate); d >= minDate; d.setDate(d.getDate() - 1)) {
      const dateString = d.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      if (!dateSet.has(dateString)) {
        filledData.push({
          Date: formatDate(new Date(d)), // Convert back to DD/MM/YYYY
          Open: averages.Open.toFixed(2),
          High: averages.High.toFixed(2),
          Low: averages.Low.toFixed(2),
          Close: averages.Close.toFixed(2),
          Volume: Math.round(averages.Volume), // Assuming Volume is an integer
        });
      }
    }

    // Sort the filled data by date (increasing order: earliest first)
    filledData.sort((a, b) => parseDate(a.Date) - parseDate(b.Date));

    // Update the jsonData with the new filled data
    setJsonData(filledData);
    console.log('Filled Data:', filledData);
    alert('Missing values have been filled with averages. View your dataset again to see updates');
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] space-y-6">
      <div className="text-center text-xl font-bold text-white">
        You have missing date values!
      </div>
      <div className="w-[80vw] max-w-md space-y-4">
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow"
          onClick={() => {
            fillMissingDatesWithAverages();
          }}
        >
          Fill missing values with Average
        </button>
      </div>
    </div>
  );
}

export default Should_Complete_date;
