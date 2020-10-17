import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Eye, EyeOff } from 'react-feather'

import { Text, Button, Input } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'
import { SVGAppleLogo, SVGGoogleLogo } from '../../assets/images'

const LoginForm = ({ className, onSubmit, onLoginWithGoogle, onLoginWithApple, onForgotPassword }) => {
  const [isEyeOpen, setEye] = useState(false)
  return (
    <div className={classnames('w-full text-gray-500', className)} data-test="login form">
      <Formik
        initialValues={{ password: '', emailOrName: '' }}
        onSubmit={onSubmit}
        validationSchema={object({
          emailOrName: string().required('Bitte gib Name oder E-Mail-Adresse ein'),
          password: string().required('Bitte gib ein Passwort ein'),
        })}>
        {formikProps => (
          <Form>
            <div>
              <Field
                as={Input}
                autoComplete="off"
                name="emailOrName"
                type="text"
                aria-label="E-Mail-Adresse / Name"
                placeholder="E-Mail-Adresse / Name"
                disabled={false}
                color="whiteGray500"
              />
              <ErrorMessage name="emailOrName" style="textSm" className="mt-2 ml-6 italic" component={Text} />
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
                  color="whiteGray500"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                />
                <InputGroup.RightElement onClick={() => setEye(isEyeOpen => !isEyeOpen)}>
                  {isEyeOpen ? <Eye size={26} /> : <EyeOff size={26} />}
                </InputGroup.RightElement>
              </InputGroup>
              <ErrorMessage name="password" style="textSm" className="mt-2 ml-6 italic" component={Text} />
            </div>
            <div className="mt-5 space-x-4 text-center">
              <Button type="submit" color="whiteGray500" className="mb-4">
                Einloggen
              </Button>
              <Button color="gray500Gray200" onClick={onForgotPassword} className="mb-4">
                Passwort vergessen
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-10 h-px mr-3 bg-gray-500 sm:w-20" />
          <Text className="text-center" style="textSm">
            Oder einloggen mit
          </Text>
          <div className="w-10 h-px ml-3 bg-gray-500 sm:w-20" />
        </div>
        <div className="mt-6 text-center">
          <Button
            disabled
            color="gray500Gray200"
            className="mr-3 sm:mr-4"
            onClick={onLoginWithApple}
            iconLeft={<SVGAppleLogo className="w-auto h-5 mr-2" />}>
            Apple
          </Button>
          <Button
            onClick={onLoginWithGoogle}
            color="gray500Gray200"
            iconLeft={<SVGGoogleLogo className="w-auto h-5 mr-2" />}>
            Google
          </Button>
        </div>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onLoginWithGoogle: PropTypes.func,
  onLoginWithApple: PropTypes.func,
  onForgotPassword: PropTypes.func,
}

export default LoginForm
