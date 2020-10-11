import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { isEmpty } from 'lodash'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { Text, TEXT_TYPE } from 'ui-library/stories/atoms'
import { ChangePasswordForm, LoginForm, SignUpForm, Page } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'

// works: login, signup, password-request
// todo: apple-login, google-login update settings
// todo: validation password: https://github.com/auth0/password-sheriff oder regex?
// test: at the moment stylesheets, etc. are getting loaded too slow from auth0...

export default function IndexPage() {
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
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
          <SVGNusszopfLogoBig className="w-32 h-full" />
          <div className="w-full my-8">
            <Text className="mb-6 text-center" type={TEXT_TYPE.titleMd}>
              Anmelden
            </Text>
            <LoginForm
              onSubmit={handleLogin}
              onLoginWithGoogle={handleGoogleLogin}
              onLoginWithApple={handleAppleLogin}
            />
          </div>
          <div className="w-full mt-16">
            <Text className="mb-6 text-center" type={TEXT_TYPE.titleMd}>
              Registrieren
            </Text>
            <SignUpForm onSubmit={handleSignup} />
          </div>
          <div className="w-full mt-16">
            <Text className="mb-6 text-center" type={TEXT_TYPE.titleMd}>
              Passwort ändern
            </Text>
            <ChangePasswordForm onSubmit={handleChangePassword} />
          </div>
        </div>
      </FrameFullCenter>
    </Page>
  )
}
