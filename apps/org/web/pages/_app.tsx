import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@desterlib/ui/web/chakra';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to DesterLib</title>
      </Head>
      <main className="app">
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
