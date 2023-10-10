// components/Navbar.tsx
import { useWallet } from '@solana/wallet-adapter-react';

function Navbar() {
  const { connect, connected } = useWallet();

  return (
    <div className="nav-bar bg-blue-900 p-4 text-white">
      <h1 className="text-2xl">StreamPOS</h1>
      <button onClick={connected ? undefined : connect}>
        {connected ? 'Connected' : 'Connect Wallet'}
      </button>
    </div>
  );
}

export default Navbar;
