import { useState } from 'react';
import axios from 'axios';
import { Connection } from '@solana/web3.js';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Example of using axios and Solana web3.js
  const fetchData = async () => {
    const response = await axios.get('API_ENDPOINT_HERE');
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const version = await connection.getVersion();
    console.log(version);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 p-4 shadow-lg">
        <img src="/path_to_logo.png" alt="StreamPOS Logo" className="mb-6 w-32 h-32 mx-auto" />
        <nav>
          <button onClick={() => setSelectedTab('overview')} className="block w-full text-left px-4 py-2 mb-2 bg-blue-600 text-white rounded">Overview</button>
          <button onClick={() => setSelectedTab('settings')} className="block w-full text-left px-4 py-2 mb-2 bg-blue-600 text-white rounded">Settings</button>
          {/* ... other buttons */}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 container mx-auto p-4">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">StreamPOS™</h1>
          <div>Customer / Earn Env</div>
        </header>
        <main>
          {selectedTab === 'overview' && <div>Overview content here</div>}
          {/* ... other content based on selected tab */}
        </main>
      </div>
    </div>
  );
}
