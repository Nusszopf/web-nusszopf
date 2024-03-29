import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { isEmpty } from 'lodash'

import { FramedCard } from 'ui-library/stories/templates'
import { Tab } from 'ui-library/stories/organisms'
import { Link } from 'ui-library/stories/atoms'
import { useToasts } from 'ui-library/services/Toasts.service'
import { ChangePasswordForm, LoginForm, SignUpForm, Page } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'
import { pageData as cms } from '../assets/data'

const Views = {
  signInUp: 'signInUp',
  password: 'password',
}

// currently invisible captcha is used, to be able to have one captcha for the whole page
// - captcha will only be visible if auth0 detects some sort of risk
// - docs: https://auth0.com/docs/attack-protection/bot-detection

export default function IndexPage() {
  const { notify } = useToasts()
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
  const [view, setView] = useState(Views.signInUp)
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState()

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
      leeway: 60,
    }
    const webAuth = new WebAuth(params)
    setWebAuth(webAuth)
  }, [router.query])

  useEffect(() => {
    if (webAuth && !captcha) {
      const _captcha = webAuth.renderCaptcha(document.querySelector('.captcha-container'), { lang: 'de' })
      setCaptcha(_captcha)
    }
  }, [webAuth, captcha])

  const showError = (i = 0) => {
    notify({
      type: 'error',
      message: cms.notify.error[i],
    })
  }

  // https://auth0.com/docs/api/authentication#login
  const handleLogin = values => {
    setLoading(true)
    notify({ type: 'loading', message: cms.notify.login.loading })
    try {
      webAuth.login(
        {
          realm: 'Username-Password-Authentication',
          username: values.emailOrName,
          password: values.password,
          captcha: captcha?.getValue(),
        },
        (error, response) => {
          setLoading(false)
          if (error) {
            showError()
            captcha?.reload()
          }
          // redirect
        }
      )
    } catch (error) {
      setLoading(false)
      showError()
      captcha?.reload()
    }
  }

  const handleGoogleLogin = () => {
    setLoading(true)
    notify({ type: 'loading', message: cms.notify.login.loading })
    try {
      webAuth.authorize(
        {
          connection: 'google-oauth2',
        },
        (error, response) => {
          setLoading(false)
          if (error) showError()
          // redirect
        }
      )
    } catch (error) {
      setLoading(false)
      showError()
    }
  }

  // todo: create auth0-apple connection
  const handleAppleLogin = () => {
    setLoading(true)
    notify({ type: 'loading', message: cms.notify.login.loading })
    try {
      webAuth.authorize(
        {
          connection: 'apple',
        },
        (error, response) => {
          setLoading(false)
          if (error) showError()
          // redirect
        }
      )
    } catch (error) {
      setLoading(false)
      showError()
    }
  }

  // https://auth0.com/docs/api/authentication#signup
  const handleSignup = values => {
    setLoading(true)
    notify({ type: 'loading', message: cms.notify.signup.loading })
    try {
      webAuth.redirect.signupAndLogin(
        {
          connection: 'Username-Password-Authentication',
          username: values.username,
          email: values.email,
          password: values.password,
          captcha: captcha?.getValue(),
          user_metadata: {
            newsletter: values.newsletter ? 'true' : 'false',
            isTestUser:
              window.location.href.match(/web.dev/gm) || process.env.VERCEL_ENV !== 'production' ? 'true' : 'false',
          },
        },
        (error, response) => {
          setLoading(false)
          if (error) {
            const errorType = error.statusCode === 400 ? 1 : 0
            showError(errorType)
            captcha?.reload()
          }
          // redirect
        }
      )
    } catch (error) {
      setLoading(false)
      showError()
      captcha?.reload()
    }
  }

  // https://auth0.com/docs/api/authentication#change-password
  const handleChangePassword = values => {
    setLoading(true)
    notify({
      type: 'loading',
      message: cms.notify.change.loading,
    })
    try {
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
              type: 'success',
              message: cms.notify.change.success,
            })
          }
        }
      )
    } catch (error) {
      setLoading(false)
      showError()
    }
  }

  return (
    <Page>
      <div className="captcha-container" />
      <FramedCard className="bg-white">
        <Link variant="svg" href="https://nusszopf.org" title={cms.logo.meta} ariaLabel={cms.logo.meta}>
          <SVGNusszopfLogoBig className="h-full w-36" />
        </Link>
        {view === Views.password ? (
          <ChangePasswordForm
            loading={loading}
            className="mt-10 sm:mt-12"
            onSubmit={handleChangePassword}
            onCancel={() => {
              setView(Views.signInUp)
              window.scrollTo(0, 0)
            }}
          />
        ) : (
          <Tab ariaLabel="Auth Navigation" className="mt-12" labelLeft={cms.tab[0]} labelRight={cms.tab[1]}>
            <Tab.Panel>
              <LoginForm
                loading={loading}
                className="mt-5"
                onSubmit={handleLogin}
                onLoginWithGoogle={handleGoogleLogin}
                onLoginWithApple={handleAppleLogin}
                onForgotPassword={() => {
                  setView(Views.password)
                  window.scrollTo(0, 0)
                }}
              />
            </Tab.Panel>
            <Tab.Panel>
              <SignUpForm loading={loading} className="mt-5" onSubmit={handleSignup} />
            </Tab.Panel>
          </Tab>
        )}
      </FramedCard>
    </Page>
  )
}
