import PropTypes from 'prop-types'
import { string } from 'yup'

import { Text, Input } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const MottoFieldValidationSchema = string().max(200, cms.motto.error)

const MottoField = ({ formik, ...props }) => (
  <>
    <FieldTitle info={cms.motto.info} {...props}>
      {cms.motto.title}
    </FieldTitle>
    <Input
      as="textarea"
      color="lilac"
      name="motto"
      maxLength={200}
      value={formik.values.motto}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder={cms.motto.placeholder}
    />
    {formik?.errors?.motto && formik.touched?.motto && (
      <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
        {formik.errors.motto}
      </Text>
    )}
  </>
)

MottoField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default MottoField
