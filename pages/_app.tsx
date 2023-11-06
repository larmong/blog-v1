import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>blog</title>
        <link rel='icon' href='/images/logo.svg' />
      </Head>
        <Component {...pageProps} />
    </Fragment>
  );
}
