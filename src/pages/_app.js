/* eslint-disable react/prop-types */
import Router from 'next/router'
import NProgress from 'nprogress'
import smoothscroll from 'smoothscroll-polyfill'
import '../styles/tailwind.css'
import '../styles/global.css'
import { useEffect } from 'react'

let loadingTimer
Router.events.on('routeChangeStart', () => {
  NProgress.configure({ showSpinner: false })
  loadingTimer = setTimeout(() => NProgress.start(), 350)
})
Router.events.on('routeChangeComplete', () => {
  clearTimeout(loadingTimer)
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  clearTimeout(loadingTimer)
  NProgress.done()
})

export default function NusszopfApp({ Component, pageProps }) {
  useEffect(() => {
    // polyfill: https://github.com/iamdustan/smoothscroll
    smoothscroll.polyfill()
  }, [])

  return <Component {...pageProps} />
}
