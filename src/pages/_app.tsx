import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>wmh 的主页</title>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="application-name" content="wmh 的主页"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="apple-mobile-web-app-title" content="wmh 的主页"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="keywords" content="wmh, wmhwiki, wmh1024"/>
        <meta
          name="description"
          content="这里是 wmh 的主页！鸟要高飞先振翅，人求上进先读书。"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
