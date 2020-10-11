import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Text, TEXT_TYPE, Button, Input, INPUT_COLORS } from 'ui-library/stories/atoms'

const SignUpForm = ({ className, onSubmit }) => (
  <div className={classnames('w-full', className)} data-test="signup form">
    <Formik
      initialValues={{ username: '', password: '', email: '' }}
      onSubmit={onSubmit}
      validationSchema={object({
        username: string()
          .max(15, 'Dein Name sollte zwischen 1 und 15 Zeichen sein')
          .required('Bitte gib einen Namen ein'),
        email: string().email('Bitte gib eine valide E-Mail-Adresse ein').required('Bitte gib eine E-Mail-Adresse ein'),
        password: string().required('Bitte gib ein Passwort ein'),
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
              color={INPUT_COLORS.whiteGray600}
            />
            <ErrorMessage
              name="username"
              type={TEXT_TYPE.textSm}
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
          <div className="mt-6 space-x-4 text-center">
            <Button type="submit" label="Registrieren" />
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

SignUpForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default SignUpForm
