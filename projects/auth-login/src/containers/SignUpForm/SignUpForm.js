import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string, mixed } from 'yup'

import { Text, Button, Input, Link, Checkbox } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'
import { Eye, EyeOff } from 'react-feather'

const SignUpForm = ({ className, onSubmit }) => {
  const [isEyeOpen, setEye] = useState(false)
  return (
    <div className={classnames('w-full', className)} data-test="signup form">
      <Formik
        initialValues={{ username: '', password: '', email: '', privacy: false }}
        onSubmit={onSubmit}
        validationSchema={object({
          username: string()
            .max(15, 'Dein Name sollte zwischen 1 und 15 Zeichen sein')
            .required('Bitte gib einen Namen ein'),
          email: string()
            .email('Bitte gib eine valide E-Mail-Adresse ein')
            .required('Bitte gib eine E-Mail-Adresse ein'),
          password: string().required('Bitte gib ein Passwort ein'),
          privacy: mixed().oneOf([true], 'Bitte bestätige die Datenschutzerklärung'),
        })}>
        {formikProps => (
          <Form>
            <div>
              <Field
                as={Input}
                autoComplete="off"
                name="username"
                type="username"
                aria-label="Name"
                placeholder="Name"
                disabled={false}
                color="whiteGray600"
              />
              <ErrorMessage
                name="username"
                style="textSm"
                className="mt-2 ml-6 italic text-gray-600"
                component={Text}
              />
            </div>
            <div className="mt-4">
              <Field
                as={Input}
                autoComplete="off"
                name="email"
                type="email"
                aria-label="E-Mail-Adresse"
                placeholder="E-Mail-Adresse"
                disabled={false}
                color="whiteGray600"
              />
              <ErrorMessage name="email" style="textSm" className="mt-2 ml-6 italic text-gray-600" component={Text} />
            </div>
            <div className="mt-4">
              <InputGroup>
                <InputGroup.Input
                  autoComplete="off"
                  name="password"
                  type={isEyeOpen ? 'text' : 'password'}
                  value={formikProps.values.password}
                  aria-label="Passwort"
                  placeholder="Passwort"
                  disabled={false}
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                />
                <InputGroup.RightElement onClick={() => setEye(isEyeOpen => !isEyeOpen)}>
                  {isEyeOpen ? <Eye size={26} /> : <EyeOff size={26} />}
                </InputGroup.RightElement>
              </InputGroup>
              <ErrorMessage
                name="password"
                style="textSm"
                className="mt-2 ml-6 italic text-gray-600"
                component={Text}
              />
            </div>
            <div className="mt-4">
              <Field
                as={Checkbox}
                checked={formikProps.values.privacy}
                name="privacy"
                aria-label="Datenschutzerklärung"
                label={
                  <>
                    Bestätigung der{' '}
                    <Link
                      href="https://nusszopf.org/privacy"
                      textStyle="textSm"
                      border="small"
                      color="gray600transparent"
                      title="Zum Datenschutz"
                      ariaLabel="Zum Datenschutz">
                      Datenschutzerklärung
                    </Link>
                  </>
                }
              />
              <ErrorMessage name="privacy" style="textSm" className="mt-2 ml-6 italic text-gray-600" component={Text} />
            </div>
            <div className="mt-6 mb-1 text-center">
              <Button type="submit">Registrieren</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
SignUpForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default SignUpForm
