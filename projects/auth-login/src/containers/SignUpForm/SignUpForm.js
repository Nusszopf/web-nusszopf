import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string, mixed } from 'yup'
import { Eye, EyeOff } from 'react-feather'

import { Text, Button, Input, Link, Checkbox } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'
import { formsData as cms } from '../../assets/data'

const SignUpForm = ({ loading, className, onSubmit }) => {
  const [isEyeOpen, setEye] = useState(false)
  return (
    <div className={classnames('w-full text-steel-700', className)} data-test="signup form">
      <Formik
        initialValues={{ username: '', password: '', email: '', privacy: false, newsletter: false }}
        onSubmit={onSubmit}
        validationSchema={object({
          username: string()
            .matches(/^\S*$/, cms.signup.fields.username.validation[0])
            .max(15, cms.signup.fields.username.validation[1])
            .required(cms.signup.fields.username.validation[2]),
          email: string().email(cms.signup.fields.email.validation[0]).required(cms.signup.fields.email.validation[1]),
          // Auth0 Password Strength: Dashboard/Authentication/Database/PasswordPolicy
          password: string()
            .min(8, cms.signup.fields.password.validation[0])
            .matches(/[a-z]/, cms.signup.fields.password.validation[1])
            .matches(/[A-Z]/, cms.signup.fields.password.validation[2])
            .matches(/\d/, cms.signup.fields.password.validation[3])
            .matches(/[!@#$%^&*]/, cms.signup.fields.password.validation[4])
            .required(cms.signup.fields.password.validation[5]),
          privacy: mixed().oneOf([true], cms.signup.fields.privacy.validation[0]),
        })}>
        {formikProps => (
          <Form>
            <div>
              <Field
                as={Input}
                autoComplete="off"
                name="username"
                type="username"
                aria-label={cms.signup.fields.username.aria}
                placeholder={cms.signup.fields.username.placeholder}
              />
              <ErrorMessage name="username" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </div>
            <div className="mt-4">
              <Field
                as={Input}
                autoComplete="off"
                name="email"
                type="email"
                aria-label={cms.signup.fields.email.aria}
                placeholder={cms.signup.fields.email.placeholder}
              />
              <ErrorMessage name="email" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </div>
            <div className="mt-4">
              <InputGroup>
                <InputGroup.Input
                  autoComplete="off"
                  name="password"
                  type={isEyeOpen ? 'text' : 'password'}
                  value={formikProps.values.password}
                  aria-label={cms.signup.fields.password.aria}
                  placeholder={cms.signup.fields.password.placeholder}
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                />
                <InputGroup.RightElement onClick={() => setEye(isEyeOpen => !isEyeOpen)}>
                  {isEyeOpen ? <Eye size={24} /> : <EyeOff size={24} />}
                </InputGroup.RightElement>
              </InputGroup>
              <ErrorMessage name="password" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </div>
            <div className="mt-4">
              <Field
                as={Checkbox}
                disabled={loading}
                checked={formikProps.values.privacy}
                name="privacy"
                aria-label={cms.signup.fields.privacy.aria}
                label={
                  <>
                    {cms.signup.fields.privacy.link.label[0]}{' '}
                    <Link
                      href="https://nusszopf.org/privacy"
                      color="current"
                      textVariant="textSm"
                      title={cms.signup.fields.privacy.link.meta}
                      ariaLabel={cms.signup.fields.privacy.link.meta}>
                      {cms.signup.fields.privacy.link.label[1]}
                    </Link>{' '}
                    {cms.signup.fields.privacy.link.label[2]}
                  </>
                }
              />
              <ErrorMessage name="privacy" variant="textSm" className="mt-1 mb-3 ml-4 italic" component={Text} />
            </div>
            <div className="mt-2">
              <Field
                className="whitespace-normal"
                as={Checkbox}
                disabled={loading}
                checked={formikProps.values.newsletter}
                name="newsletter"
                aria-label={cms.signup.fields.newsletter.aria}
                label={cms.signup.fields.newsletter.label}
              />
            </div>
            <div className="mt-6 text-center">
              <Button type="submit" className="bg-steel-100" disabled={loading}>
                {cms.signup.action}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
SignUpForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
}

export default SignUpForm
