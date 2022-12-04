import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextUIProvider } from '@nextui-org/react';
import AppContext from "../components/AppContext"
import { useState, useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  const [tokenContext, setTokenContext] = useState(null)
  const [usernameContext, setUsernameContext] = useState(null)
  const [roleContext, setRoleContext] = useState(null)

  useEffect(() => {
      const token = window.localStorage.getItem("x-token");
      const username = window.localStorage.getItem("username");
      if (token && username) {
        setTokenContext(token)
        setUsernameContext(username)
      }
  });

  return (
    <AppContext.Provider value={{ usernameContext, setUsernameContext, tokenContext, setTokenContext, roleContext, setRoleContext }}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </AppContext.Provider>
  )
}

export default MyApp;
