/* eslint-disable react/prop-types */
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/tailwind.css'

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
  return <Component {...pageProps} />
}
