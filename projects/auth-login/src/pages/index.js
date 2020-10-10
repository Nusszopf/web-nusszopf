import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { isEmpty } from 'lodash'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { Text, TEXT_TYPE, Button, Input, INPUT_COLORS } from 'ui-library/stories/atoms'
import { Page } from '../containers'

export default function IndexPage() {
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (isEmpty(router.query)) return
    console.log(router.query)
    const params = {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      audience: router.query['audience'],
      redirectUri: router.query['redirect_uri'],
      scope: router.query['scope'],
      responseType: 'token id_token code',
    }
    console.log(params)
    const webAuth = new WebAuth(params)
    // webAuth.authorize()
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
