import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Eye, EyeOff } from 'react-feather'

import { Text, Button, Input } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'
import { SVGAppleLogo, SVGGoogleLogo } from '../../assets/images'
import { formsData as cms } from '../../assets/data'

const LoginForm = ({ className, loading, onSubmit, onLoginWithGoogle, onLoginWithApple, onForgotPassword }) => {
  const [isEyeOpen, setEye] = useState(false)
  return (
    <div className={classnames('w-full text-steel-700', className)} data-test="login form">
      <Formik
        initialValues={{ password: '', emailOrName: '' }}
        onSubmit={onSubmit}
        validationSchema={object({
          emailOrName: string().required(cms.login.fields.emailOrName.validation[0]),
          password: string().required(cms.login.fields.password.validation[0]),
        })}>
        {formikProps => (
          <Form>
            <div>
              <Field
                as={Input}
                autoComplete="off"
                name="emailOrName"
                type="text"
                aria-label={cms.login.fields.emailOrName.aria}
                placeholder={cms.login.fields.emailOrName.placeholder}
              />
              <ErrorMessage name="emailOrName" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </div>
            <div className="mt-4">
              <InputGroup>
                <InputGroup.Input
                  autoComplete="off"
                  name="password"
                  type={isEyeOpen ? 'text' : 'password'}
                  value={formikProps.values.password}
                  aria-label={cms.login.fields.password.aria}
                  placeholder={cms.login.fields.password.placeholder}
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                />
                <InputGroup.RightElement onClick={() => setEye(isEyeOpen => !isEyeOpen)}>
                  {isEyeOpen ? <Eye size={24} /> : <EyeOff size={24} />}
                </InputGroup.RightElement>
              </InputGroup>
              <ErrorMessage name="password" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </div>
            <div className="mt-5 space-x-4 text-center">
              <Button type="submit" className="mb-4 bg-steel-100" disabled={loading}>
                {cms.login.actions.login}
              </Button>
              <Button onClick={onForgotPassword} className="mb-4" disabled={loading}>
                {cms.login.actions.forgot}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-10 h-px mr-3 bg-steel-700 sm:w-20" />
          <Text className="text-center" variant="textSm">
            {cms.login.seperator}
          </Text>
          <div className="w-10 h-px ml-3 bg-steel-700 sm:w-20" />
        </div>
        <div className="mt-6 text-center">
          <Button
            disabled
            className="mr-3 sm:mr-4 bg-steel-100"
            onClick={onLoginWithApple}
            iconLeft={<SVGAppleLogo className="w-auto h-5 mr-2" />}>
            Apple
          </Button>
          <Button
            disabled={loading}
            className="bg-steel-100"
            onClick={onLoginWithGoogle}
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
  loading: PropTypes.bool,
}

export default LoginForm
