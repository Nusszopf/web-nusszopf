import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Text, Button, Input } from 'ui-library/stories/atoms'
import { formsData as cms } from '../../assets/data'

const ChangePasswordForm = ({ className, loading, onSubmit, onCancel }) => (
  <div className={classnames('w-full text-steel-700', className)} data-test="signup form">
    <Text as="h1" variant="textXl" className="mb-5 text-center">
      {cms.changePassword.title}
    </Text>
    <Text variant="textSmMedium" className="mb-4">
      {cms.changePassword.description}
    </Text>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={onSubmit}
      validationSchema={object({
        email: string()
          .email(cms.changePassword.fields.email.validation[0])
          .required(cms.changePassword.fields.email.validation[1]),
      })}>
      <Form>
        <Field
          as={Input}
          autoComplete="off"
          name="email"
          type="email"
          aria-label={cms.changePassword.fields.email.aria}
          placeholder={cms.changePassword.fields.email.placeholder}
        />
        <ErrorMessage name="email" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
        <div className="mt-6 space-x-4 text-center">
          <Button type="submit" className="bg-steel-100" disabled={loading}>
            {cms.changePassword.actions.send}
          </Button>
          <Button onClick={onCancel} disabled={loading}>
            {cms.changePassword.actions.cancel}
          </Button>
        </div>
      </Form>
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
