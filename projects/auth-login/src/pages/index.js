import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { isEmpty } from 'lodash'

import { FrameFullCenter } from 'ui-library/stories/templates'
import { Tab } from 'ui-library/stories/molecules'
import { Link, LinkType } from 'ui-library/stories/atoms'
import { useToasts } from 'ui-library/services/Toasts.service'
import { ChangePasswordForm, LoginForm, SignUpForm, Page } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'

// done: login, signup, password-request
// done: refactor components, notifications component, design
// todo: apple-login, google-login update settings
// todo: validation password: https://github.com/auth0/password-sheriff oder regex?
// todo: password reset page -> readme.md
// todo: at the moment stylesheets, etc. are getting loaded too slow from auth0... -> add css inline

const Views = {
  signInUp: 'signInUp',
  password: 'password',
}

export default function IndexPage() {
  const { notify } = useToasts()
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
  const [view, setView] = useState(Views.signInUp)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isEmpty(router.query)) return
    const params = {
      overrides: {
        __tenant: process.env.AUTH0_TENANT,
        __token_issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      },
      audience: router.query['audience'],
      auth0Client: router.query['auth0Client'],
      clientID: router.query['client'],
      domain: process.env.AUTH0_DOMAIN,
      protocol: router.query['protocol'],
      redirectUri: router.query['redirect_uri'],
      responseType: router.query['response_type'],
      scope: router.query['scope'],
      state: router.query['state'],
    }
    const webAuth = new WebAuth(params)
    setWebAuth(webAuth)
  }, [router.query])

  const showError = () => {
    notify({
      type: 'error',
      message: 'Sorry, es ist ein Fehler aufgetreten. Bitte versuche es nochmal oder melde dich bei mail@nusszopf.org.',
    })
  }

  // https://auth0.com/docs/api/authentication#login
  const handleLogin = values => {
    setLoading(true)
    notify({ type: 'loading', message: 'Du wirst einloggt.' })
    webAuth.login(
      {
        realm: 'Username-Password-Authentication',
        username: values.emailOrName,
        password: values.password,
      },
      (error, response) => {
        setLoading(false)
        if (error) showError()
        // redirect
        console.log(response)
      }
    )
  }

  const handleGoogleLogin = () => {
    setLoading(true)
    notify({ type: 'loading', message: 'Du wirst einloggt.' })
    webAuth.authorize(
      {
        connection: 'google-oauth2',
      },
      (error, response) => {
        setLoading(false)
        if (error) showError()
        // redirect
        console.log(response)
      }
    )
  }

  // todo: create auth0-apple connection
  const handleAppleLogin = () => {
    setLoading(true)
    notify({ type: 'loading', message: 'Du wirst einloggt.' })
    webAuth.authorize(
      {
        connection: 'apple',
      },
      (error, response) => {
        setLoading(false)
        if (error) showError()
        // redirect
        console.log(response)
      }
    )
  }

  // https://auth0.com/docs/api/authentication#signup
  const handleSignup = values => {
    setLoading(true)
    notify({ type: 'loading', message: 'Du wirst registriert.' })
    webAuth.redirect.signupAndLogin(
      {
        connection: 'Username-Password-Authentication',
        username: values.username,
        email: values.email,
        password: values.password,
      },
      (error, response) => {
        setLoading(false)
        if (error) showError()
        // redirect
        console.log(response)
      }
    )
  }

  // https://auth0.com/docs/api/authentication#change-password
  const handleChangePassword = values => {
    setLoading(true)
    notify({
      type: 'loading',
      message: 'Anfrage wird bearbeitet.',
    })
    webAuth.changePassword(
      {
        connection: 'Username-Password-Authentication',
        email: values.email,
      },
      (error, response) => {
        setLoading(false)
        if (error) showError()
        if (response) {
          notify({
            type: 'info',
            message: 'E-Mail verschickt! Schaue bitte in dein Postfach.',
          })
        }
      }
    )
  }

  return (
    <Page className="bg-white">
      <FrameFullCenter fullScreen={false}>
        <div className="flex flex-col items-center w-full max-w-sm mx-auto">
          <Link type={LinkType.svg} href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
            <SVGNusszopfLogoBig className="w-40 h-full" />
          </Link>
          {view === Views.password ? (
            <ChangePasswordForm
              loading={loading}
              className="mt-10 sm:mt-12"
              onSubmit={handleChangePassword}
              onCancel={() => setView(Views.signInUp)}
            />
          ) : (
            <Tab ariaLabel="Auth Navigation" className="mt-12" labelLeft="Einloggen" labelRight="Registrieren">
              <Tab.Panel>
                <LoginForm
                  loading={loading}
                  className="mt-5"
                  onSubmit={handleLogin}
                  onLoginWithGoogle={handleGoogleLogin}
                  onLoginWithApple={handleAppleLogin}
                  onForgotPassword={() => setView(Views.password)}
                />
              </Tab.Panel>
              <Tab.Panel>
                <SignUpForm loading={loading} className="mt-5" onSubmit={handleSignup} />
              </Tab.Panel>
            </Tab>
          )}
        </div>
      </FrameFullCenter>
    </Page>
  )
}
