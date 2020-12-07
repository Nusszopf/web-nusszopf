/* eslint-disable react/prop-types */
import Head from 'next/head'
require('typeface-barlow')
import 'ui-library/styles/tailwind.css'
import { ToastsProvider } from 'ui-library/services/Toasts.service'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <div id="nusszopf" className="flex flex-col min-h-screen">
        <ToastsProvider>
          <Component {...pageProps} />
        </ToastsProvider>
      </div>
    </>
  )
}

export default App
