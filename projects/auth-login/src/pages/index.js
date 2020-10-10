import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { isEmpty } from 'lodash'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { Text, TEXT_TYPE, Button, Input, INPUT_COLORS } from 'ui-library/stories/atoms'
import { Page } from '../containers'

// audience: "hasura"
// auth0Client: "eyJuYW1lIjoibmV4dGpzLWF1dGgwIiwidmVyc2lvbiI6IjAuMTYuMCJ9"
// clientID: "EwSzud3xk42bYp0myzuuSbR18jNTqp0t"
// domain: "auth.nusszopf.org"
// jwksURI: undefined
// overrides:
// __tenant: "nusszopf"
// __token_issuer: "https://auth.nusszopf.org/"
// __proto__: Object
// plugins: PluginHandler {plugins: Array(0)}
// popupOrigin: undefined
// protocol: "oauth2"
// redirectUri: "https://web.dev.nusszopf.org/api/callback"
// responseType: "code"
// response_type: "code"
// rootUrl: "https://auth.nusszopf.org"
// scope: "openid profile"
// state: "g6Fo2SA2UEszdWJKRnQzR3VNQUhpTVdKSDhiUkx1MEVENXR2UaN0aWTZIFV6SllIYnBQb2xzXzdDOEJEdUhKMVJNQWlQMUt0aVR2o2NpZNkgRXdTenVkM3hrNDJiWXAwbXl6dXVTYlIxOGpOVHFwMHQ"
// tenant: "nusszopf"
// token_issuer: "https://auth.nusszopf.org/"
// universalLoginPage: true

export default function IndexPage() {
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (isEmpty(router.query)) return
    console.log(router.query)
    const params = {
      overrides: {
        __tenant: 'nusszopf',
        __token_issuer: 'https://auth.nusszopf.org/',
      },
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      responseType: 'token token_id code',
      redirectUri: process.env.AUTH0_REDIRECT_URI,
      // ...router.query,
      state: router.query['state'],
    }
    console.log(params)
    const webAuth = new WebAuth(params)
    setWebAuth(webAuth)
  }, [router.query])

  const handleSubmit = values => {
    setError(false)
    try {
      webAuth.login(
        {
          realm: 'Username-Password-Authentication',
          username: values.email,
          password: values.password,
        },
        (error, response) => {
          setError(error.description)
          console.log(error)
        }
      )
    } catch {
      error => console.log(error)
    }
  }

  return (
    <Page className="bg-white">
      <FrameFullCenter fullScreen={false}>
        <div className="w-full max-w-xl mx-auto">
          <Text className="mb-12 text-center" type={TEXT_TYPE.titleMd}>
            Test Login
          </Text>
          <Formik
            initialValues={{ password: '', email: '' }}
            onSubmit={handleSubmit}
            validationSchema={object({
              email: string()
                .email('Bitte gib eine valide E-Mail-Adresse ein')
                .required('Bitte gib deine E-Mail-Adresse ein'),
              password: string().required('Bitte gib einen Name ein'),
            })}>
            {formikProps => (
              <Form>
                <div>
                  <Field
                    as={Input}
                    autoComplete="off"
                    name="email"
                    type="email"
                    aria-label="E-Mail-Adresse"
                    placeholder="E-Mail-Adresse"
                    disabled={false}
                    color={INPUT_COLORS.whiteGray600}
                  />
                  <ErrorMessage
                    name="email"
                    type={TEXT_TYPE.textSm}
                    className="mt-2 ml-6 italic text-gray-600"
                    component={Text}
                  />
                </div>
                <div className="mt-4">
                  <Field
                    as={Input}
                    autoComplete="off"
                    name="password"
                    type="password"
                    aria-label="Passwort"
                    placeholder="Passwort"
                    disabled={false}
                    color={INPUT_COLORS.whiteGray600}
                  />
                  <ErrorMessage
                    name="password"
                    type={TEXT_TYPE.textSm}
                    className="mt-2 ml-6 italic text-gray-600"
                    component={Text}
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button type="submit" label="Anmelden" />
                </div>
              </Form>
            )}
          </Formik>
          <div>{error && <Text className="mt-12 text-pink-500">{error}</Text>}</div>
        </div>
      </FrameFullCenter>
    </Page>
  )
}
