/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReakitProvider } from 'reakit'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'

require('typeface-barlow')

import 'ui-library/styles/tailwind.css'
import { LoadingIndicator } from 'ui-library/stories/atoms'
import { ToastsProvider } from 'ui-library/services/Toasts.service'
import { SearchContextProvider } from '../utils/services/search.service'
import { AuthContextProvider } from '../utils/services/auth.service'
import { useApollo } from '../utils/libs/apolloClient'

export default function NusszopfApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const [isPageLoading, setIsPageLoading] = useState(false)
  useEffect(() => {
    // polyfill: https://github.com/iamdustan/smoothscroll
    smoothscroll.polyfill()

    // Page Load Indicator
    Router.events.on('routeChangeStart', () => {
      clearTimeout(window.loadingTimer)
      window.loadingTimer = setTimeout(() => {
        clearTimeout(window.loadingTimer)
        setIsPageLoading(true)
      }, 350)
    })
    Router.events.on('routeChangeComplete', () => {
      clearTimeout(window.loadingTimer)
      setIsPageLoading(false)
    })
    Router.events.on('routeChangeError', () => {
      clearTimeout(window.loadingTimer)
      setIsPageLoading(false)
    })
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <div id="nusszopf" className="flex flex-col min-h-screen">
        <LoadingIndicator className={isPageLoading ? '' : 'hidden'} />
        <ApolloProvider client={apolloClient}>
          <ReakitProvider>
            <ToastsProvider>
              <AuthContextProvider>
                <SearchContextProvider>
                  <Component {...pageProps} />
                </SearchContextProvider>
              </AuthContextProvider>
            </ToastsProvider>
          </ReakitProvider>
        </ApolloProvider>
      </div>
    </>
  )
}
