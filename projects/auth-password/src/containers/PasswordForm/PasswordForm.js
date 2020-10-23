import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Eye, EyeOff } from 'react-feather'

import { Text, Button } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'

const PasswordForm = ({ className, loading, onSubmit }) => {
  const [isEyeOpen, setEye] = useState(false)
  return (
    <div className={classnames('w-full text-gray-500', className)} data-test="signup form">
      <Text as="h1" variant="textXl" className="mb-5 text-center">
        Neues Passwort vergeben
      </Text>
      <Text variant="textSmMedium" className="mb-4">
        Nach dem Speichern kannst Du dich gleich wieder wie gewohnt einloggen.
      </Text>
      <Formik
        initialValues={{ password: '', _csrf: '', ticket: '', email: '' }}
        onSubmit={onSubmit}
        validationSchema={object({
          password: string()
            .min(8, 'Mindestens 8 Zeichen')
            .matches(/[a-z]/, 'Mindestens ein Kleinbuchstabe')
            .matches(/[A-Z]/, 'Mindestens ein Großbuchstabe')
            .matches(/\d/, 'Mindestens eine Ziffer')
            .matches(/[!@#$%^&*]/, 'Mindestens ein Sonderzeichen (!@#$%^&*)')
            .required('Bitte gib ein Passwort ein'),
        })}>
        {formikProps => (
          <Form>
            <input
              type="hidden"
              name="_csrf"
              value="{{csrf_token}}"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            <input
              type="hidden"
              name="ticket"
              value="{{ticket}}"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            <input
              type="hidden"
              name="email"
              value="{{email}}"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            <InputGroup>
              <InputGroup.Input
                autoComplete="off"
                name="password"
                type={isEyeOpen ? 'text' : 'password'}
                value={formikProps.values.password}
                aria-label="Passwort"
                placeholder="Passwort"
                disabled={loading}
                color="whiteGray500"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
              />
              <InputGroup.RightElement onClick={() => setEye(isEyeOpen => !isEyeOpen)}>
                {isEyeOpen ? (
                  <Eye size={26} className={classnames({ 'opacity-50': loading })} />
                ) : (
                  <EyeOff size={26} className={classnames({ 'opacity-50': loading })} />
                )}
              </InputGroup.RightElement>
            </InputGroup>
            <ErrorMessage name="password" variant="textSm" className="mt-2 ml-6 italic" component={Text} />
            <div className="mt-6 text-center">
              <Button type="submit" color="whiteGray500" disabled={loading}>
                Speichern
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

PasswordForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
}

export default PasswordForm
