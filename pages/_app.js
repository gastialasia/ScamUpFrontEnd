import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextUIProvider } from '@nextui-org/react';
import NavbarNUI from "../components/NavbarNUI";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp;
