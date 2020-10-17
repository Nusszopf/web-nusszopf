import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Text, Button, Input } from 'ui-library/stories/atoms'
import { SVGAppleLogo, SVGGoogleLogo } from '../../assets/images'

const LoginForm = ({ className, onSubmit, onLoginWithGoogle, onLoginWithApple, onForgotPassword }) => (
  <div className={classnames('w-full', className)} data-test="login form">
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
              color="whiteGray600"
            />
            <ErrorMessage
              name="emailOrName"
              style="textSm"
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
              color="whiteGray600"
            />
            <ErrorMessage name="password" style="textSm" className="mt-2 ml-6 italic text-gray-600" component={Text} />
          </div>
          <div className="mt-5 space-x-4 text-center">
            <Button type="submit">Anmelden</Button>
            <Button color="gray600gray200" onClick={onForgotPassword}>
              Passwort vergessen
            </Button>
          </div>
        </Form>
      )}
    </Formik>
    <div>
      <div className="flex items-center justify-center mt-6">
        <div className="w-20 h-px mr-3 bg-gray-600" />
        <Text className="text-center" style="textSm">
          Oder einloggen mit
        </Text>
        <div className="w-20 h-px ml-3 bg-gray-600" />
      </div>
      <div className="mt-6 text-center">
        <Button
          disabled
          className="mr-2"
          onClick={onLoginWithApple}
          iconLeft={<SVGAppleLogo className="w-auto h-5 mr-2" />}>
          Apple
        </Button>
        <Button className="ml-2" onClick={onLoginWithGoogle} iconLeft={<SVGGoogleLogo className="w-auto h-5 mr-2" />}>
          Google
        </Button>
      </div>
    </div>
  </div>
)

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onLoginWithGoogle: PropTypes.func,
  onLoginWithApple: PropTypes.func,
  onForgotPassword: PropTypes.func,
}

export default LoginForm
