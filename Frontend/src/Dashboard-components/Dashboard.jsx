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
      <Sidebar setSection={setSection} />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 bg-opacity-10 text-white">
        {/* Add your dashboard content here */}
        {section === "Dataset" && <Dataset jsonData={jsonData} />}
        {section === "StockPerformance" && <StockPerformance jsonData={jsonData} setJsonData={setJsonData}/>}
        {section === "DemoTrading" && <DemoTrading jsonData={jsonData}/>}
      </div>
    </div>
  );
}

export default Dashboard;
