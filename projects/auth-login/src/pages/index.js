import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { isEmpty } from 'lodash'

import { FrameFullCenter } from 'ui-library/stories/templates'
import { Tab } from 'ui-library/stories/molecules'
import { ChangePasswordForm, LoginForm, SignUpForm, Page } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'

// works: login, signup, password-request
// todo: apple-login, google-login update settings
// todo: validation password: https://github.com/auth0/password-sheriff oder regex?
// todo: refactor components, notifications component, design
// todo: password reset page -> readme.md
// test: at the moment stylesheets, etc. are getting loaded too slow from auth0...

const Views = {
  signInUp: 'signInUp',
  password: 'password',
}

export default function IndexPage() {
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
  const [view, setView] = useState(Views.signInUp)
  // const [error, setError] = useState()

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

  // https://auth0.com/docs/api/authentication#login
  const handleLogin = values => {
    webAuth.login(
      {
        realm: 'Username-Password-Authentication',
        username: values.emailOrName,
        password: values.password,
      },
      (error, response) => {
        console.log(error)
        console.log(response)
      }
    )
  }

  const handleGoogleLogin = () => {
    webAuth.authorize(
      {
        connection: 'google-oauth2',
      },
      (error, response) => {
        console.log(error)
        console.log(response)
      }
    )
  }

  // todo: create auth0-apple connection
  const handleAppleLogin = () => {
    webAuth.authorize(
      {
        connection: 'apple',
      },
      (error, response) => {
        console.log(error)
        console.log(response)
      }
    )
  }

  // https://auth0.com/docs/api/authentication#signup
  const handleSignup = values => {
    webAuth.redirect.signupAndLogin(
      {
        connection: 'Username-Password-Authentication',
        username: values.username,
        email: values.email,
        password: values.password,
      },
      (error, response) => {
        console.log(error)
        console.log(response)
      }
    )
  }

  // https://auth0.com/docs/api/authentication#change-password
  const handleChangePassword = values => {
    webAuth.changePassword(
      {
        connection: 'Username-Password-Authentication',
        email: values.email,
      },
      (error, response) => {
        console.log(error)
        console.log(response)
      }
    )
  }

  return (
    <Page className="bg-white">
      <FrameFullCenter fullScreen={false}>
        <div className="flex flex-col items-center w-full max-w-sm mx-auto">
          <SVGNusszopfLogoBig className="w-40 h-full" />
          {view === Views.signInUp && (
            <Tab ariaLabel="Auth Navigation" className="mt-12" labelLeft="Einloggen" labelRight="Registrieren">
              <Tab.Panel>
                <LoginForm
                  className="mt-5"
                  onSubmit={handleLogin}
                  onLoginWithGoogle={handleGoogleLogin}
                  onLoginWithApple={handleAppleLogin}
                  onForgotPassword={() => setView(Views.password)}
                />
              </Tab.Panel>
              <Tab.Panel>
                <SignUpForm className="mt-5" onSubmit={handleSignup} />
              </Tab.Panel>
            </Tab>
          )}
          {view === Views.password && (
            <ChangePasswordForm
              className="mt-12"
              onSubmit={handleChangePassword}
              onCancel={() => setView(Views.signInUp)}
            />
          )}
        </div>
      </FrameFullCenter>
    </Page>
  )
}
