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
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">StreamPOS™</h1>
        <div>Customer / Earn Env</div>
      </header>
      <nav className="mb-4">
        <button onClick={() => setSelectedTab('overview')} className="mr-2 px-4 py-2 bg-blue-600 text-white rounded">Overview</button>
        <button onClick={() => setSelectedTab('settings')} className="mr-2 px-4 py-2 bg-blue-600 text-white rounded">Settings</button>
        {/* ... other buttons */}
      </nav>
      <main>
        {selectedTab === 'overview' && <div>Overview content here</div>}
        {/* ... other content based on selected tab */}
      </main>
    </div>
  );
}
