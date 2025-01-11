import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Adjust the import path based on your file structure
import Dataset from './Dataset-components/Dataset';
import StockPerformance from './Stock-Performance-components/StockPerformance';
import DemoTrading from './DemoTrading-components/DemoTrading';

function Dashboard({ jsonData, setJsonData }) {

  const [section, setSection] = useState('Dataset');

  return (
    <div className="flex h-[89vh]">
      {/* Sidebar */}
      <Sidebar section={section} setSection={setSection} />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 bg-opacity-10 text-white">
        {/* Add your dashboard content here */}
        {section === "Dataset" && <Dataset jsonData={jsonData} />}
        {section === "StockPerformance" && <StockPerformance jsonData={jsonData} setJsonData={setJsonData} />}
        {section === "DemoTrading" && <DemoTrading jsonData={jsonData} />}
        {section === "Null" && <div className='flex justify-center items-center h-[80vh]'>
          <div className="h-[20vh] w-[80vw] text-center rounded-3xl pt-[5vh] font-bold font-mono">
            This feature is under construction. It will be available only to our premium members.
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Dashboard;
