/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReakitProvider } from 'reakit'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'

require('typeface-barlow')

import '../styles/tailwind.css'
import { ToastsProvider } from 'ui-library/services/Toasts.service'
import { useApollo } from '../utils/libs/apolloClient'

export default function NusszopfApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    // polyfill: https://github.com/iamdustan/smoothscroll
    smoothscroll.polyfill()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <div id="nusszopf" className="flex flex-col h-screen">
        <ApolloProvider client={apolloClient}>
          <ReakitProvider>
            <ToastsProvider>
              <Component {...pageProps} />
            </ToastsProvider>
          </ReakitProvider>
        </ApolloProvider>
      </div>
    </>
  )
}
