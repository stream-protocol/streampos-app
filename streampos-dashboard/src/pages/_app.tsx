import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, PageProps }: AppProps) {
  return <Component {...PageProps} />;
}

export default MyApp;
