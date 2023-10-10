// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
