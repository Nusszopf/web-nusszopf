import { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Eye, EyeOff } from 'react-feather'

import { Text, Button } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'
import { formData as cms } from '../../assets/data'

const PasswordForm = ({ className, loading, onSubmit }) => {
  const [isEyeOpen, setEye] = useState(false)
  return (
    <div className={classnames('w-full text-steel-700', className)} data-test="signup form">
      <Text as="h1" variant="textXl" className="mb-5 text-center">
        {cms.title}
      </Text>
      <Text variant="textSmMedium" className="mb-4 hyphens-auto">
        {cms.description}
      </Text>
      <Formik
        initialValues={{ password: '' }}
        onSubmit={onSubmit}
        validationSchema={object({
          password: string()
            .min(8, cms.field.validation[0])
            .matches(/[a-z]/, cms.field.validation[1])
            .matches(/[A-Z]/, cms.field.validation[2])
            .matches(/\d/, cms.field.validation[3])
            .matches(/[!@#$%^&*]/, cms.field.validation[4])
            .required(cms.field.validation[5]),
        })}>
        {formikProps => (
          <Form>
            <InputGroup>
              <InputGroup.Input
                autoComplete="off"
                name="password"
                type={isEyeOpen ? 'text' : 'password'}
                value={formikProps.values.password}
                aria-label={cms.field.aria}
                placeholder={cms.field.placeholder}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
              />
              <InputGroup.RightElement onClick={() => setEye(isEyeOpen => !isEyeOpen)}>
                {isEyeOpen ? <Eye size={26} /> : <EyeOff size={26} />}
              </InputGroup.RightElement>
            </InputGroup>
            <ErrorMessage name="password" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            <div className="mt-6 text-center">
              <Button type="submit" className="bg-steel-100" disabled={loading}>
                {cms.action}
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
