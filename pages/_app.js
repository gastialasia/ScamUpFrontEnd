import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextUIProvider } from '@nextui-org/react';
import AppContext from "../components/AppContext"
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [tokenContext, setTokenContext] = useState(null)
  const [usernameContext, setUsernameContext] = useState(null)
  return (
    <AppContext.Provider value={{ usernameContext, setUsernameContext, tokenContext, setTokenContext }}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </AppContext.Provider>
  )
}

export default MyApp;
