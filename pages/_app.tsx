import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export function reportWebVitals(metric) {
  console.log(JSON.stringify(metric, null, 2));
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
