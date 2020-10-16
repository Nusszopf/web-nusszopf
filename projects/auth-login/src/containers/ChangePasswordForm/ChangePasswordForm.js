import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Text, Button, Input } from 'ui-library/stories/atoms'

const ChangePasswordForm = ({ className, onSubmit }) => (
  <div className={classnames('w-full', className)} data-test="signup form">
    <Formik
      initialValues={{ email: '' }}
      onSubmit={onSubmit}
      validationSchema={object({
        email: string().email('Bitte gib eine valide E-Mail-Adresse ein').required('Bitte gib eine E-Mail-Adresse ein'),
      })}>
      {formikProps => (
        <Form>
          <Text className="mb-4">Wir senden dir einen Link zu, mit dem du ein neues Passwort setzen kannst.</Text>
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
          <div className="mt-6 space-x-4 text-center">
            <Button type="submit">Absenden</Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

ChangePasswordForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default ChangePasswordForm
