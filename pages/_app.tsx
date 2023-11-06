import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import Head from "next/head";

import Layout from "../src/commons/layout";
import { GlobalStyle } from "../src/commons/style/global.style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>blog</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
