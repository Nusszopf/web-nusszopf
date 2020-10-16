import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Text, Button, Input } from 'ui-library/stories/atoms'

const LoginForm = ({ className, onSubmit, onLoginWithGoogle, onLoginWithApple }) => (
  <div className={classnames('w-full', className)} data-test="login form">
    <div className="flex flex-col mb-4 space-y-4">
      <Button onClick={onLoginWithApple}>Mit Apple anmelden</Button>
      <Button onClick={onLoginWithGoogle}>Mit Google anmelden</Button>
    </div>
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
          <div className="mt-6 space-x-4 text-center">
            <Button type="submit">Anmelden</Button>
            <Button color="gray600gray200">Passwort vergessen</Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onLoginWithGoogle: PropTypes.func,
  onLoginWithApple: PropTypes.func,
}

export default LoginForm
