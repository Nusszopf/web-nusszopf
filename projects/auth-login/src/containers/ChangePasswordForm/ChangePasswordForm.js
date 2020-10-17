import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Text, Button, Input } from 'ui-library/stories/atoms'

const ChangePasswordForm = ({ className, loading, onSubmit, onCancel }) => (
  <div className={classnames('w-full text-gray-500', className)} data-test="signup form">
    <Text as="h1" style="textXl" className="mb-5 text-center">
      Passwort vergessen
    </Text>
    <Text style="textSmMedium" className="mb-4">
      Wir senden dir einen Link zu, mit dem du ein neues Passwort setzen kannst.
    </Text>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={onSubmit}
      validationSchema={object({
        email: string().email('Bitte gib eine valide E-Mail-Adresse ein').required('Bitte gib eine E-Mail-Adresse ein'),
      })}>
      {formikProps => (
        <Form>
          <Field
            as={Input}
            autoComplete="off"
            name="email"
            type="email"
            aria-label="E-Mail-Adresse"
            placeholder="E-Mail-Adresse"
            disabled={loading}
            color="whiteGray500"
          />
          <ErrorMessage name="email" style="textSm" className="mt-2 ml-6 italic text-gray-600" component={Text} />
          <div className="mt-6 space-x-4 text-center">
            <Button type="submit" color="whiteGray500" disabled={loading}>
              Senden
            </Button>
            <Button onClick={onCancel} color="gray500Gray200" disabled={loading}>
              Abbrechen
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

ChangePasswordForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
}

export default ChangePasswordForm
