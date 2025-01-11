import React from 'react';

function DemoTrading({ jsonData }) {
  // Initial investment amount
  const initialInvestment = 1000; // Modify this value as needed

  // Calculate the total money by reinvesting each day (using Open and High)
  const calculateTotalHigh = () => {
    let currentInvestment = initialInvestment;

    jsonData.forEach((data) => {
      if (data.Open && data.High) {
        // Calculate the amount after reinvesting for the day
        currentInvestment = (currentInvestment * data.High) / data.Open;
      }
    });

    return currentInvestment.toFixed(2); // Return total with two decimal places
  };

  // Calculate the total money by reinvesting each day (using Open and Low)
  const calculateTotalLow = () => {
    let currentInvestment = initialInvestment;

    jsonData.forEach((data) => {
      if (data.Open && data.Low) {
        // Calculate the amount after reinvesting for the day
        currentInvestment = (currentInvestment * data.Low) / data.Open;
      }
    });

    return currentInvestment.toFixed(2); // Return total with two decimal places
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 className='font-bold text-center m-10 text-3xl'>Demo Trading</h1>
      <p className='font-mono text-center m-10 text-xl'>
        Starting with an initial investment of <strong>${initialInvestment}</strong>,
        reinvesting daily:
      </p>
      <div className="flex gap-5 md:flex-row flex-col text-lg text-center">

        <h2 className=' bg-gray-600 mx-10 p-5 rounded-full bg-opacity-50'>
          If you withdraw daily when the stock is highest then your
          Total Money becomes: <span className="font-bold">${calculateTotalHigh()}</span></h2>
        <h2 className=' bg-gray-600 mx-10 p-5 rounded-full bg-opacity-50'>
          If you withdraw daily when the stock is lowest then your
          Total Money becomes: <span className="font-bold">${calculateTotalLow()}</span> </h2>
      </div>
      <p className='text-sm text-center text-gray-500 mt-10'>
        <strong>Disclaimer:</strong> While the highest profit might seem exciting, keep in mind
        that stock market trading involves risks, and focusing solely on the potential gains
        may lead to underestimating potential losses. Always invest wisely and consider the
        risks involved.
      </p>
    </div>
  );
}

export default DemoTrading;
