import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Eye, EyeOff } from 'react-feather'

import { Text, Button } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'

const PasswordForm = ({ className, loading, onSubmit }) => {
  const _csrf = useRef()
  const _ticket = useRef()
  const _email = useRef()
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
        initialValues={{ password: '' }}
        onSubmit={({ password }) =>
          onSubmit({
            password,
            csrf: _csrf?.current?.value,
            ticket: _ticket?.current?.value,
            email: _email?.current?.value,
          })
        }
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
          <Form id="change-password-form" action="/lo/reset" method="post">
            <InputGroup>
              <InputGroup.Input
                autoComplete="off"
                name="password"
                type={isEyeOpen ? 'text' : 'password'}
                value={formikProps.values.password}
                aria-label="Passwort"
                placeholder="Passwort"
                disabled={loading}
                i
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
      <div id="reset-view" className="hidden">
        <form id="change-password-form" action="/lo/reset" method="post">
          <input ref={_csrf} type="hidden" name="_csrf" value="{{csrf_token}}" />
          <input ref={_ticket} type="hidden" name="ticket" value="{{ticket}}" />
          <input ref={_email} type="hidden" name="email" value="{{email}}" />
        </form>
      </div>
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
