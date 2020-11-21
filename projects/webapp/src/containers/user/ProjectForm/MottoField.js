import PropTypes from 'prop-types'
import { string } from 'yup'

import { Text, Input } from 'ui-library/stories/atoms'
import { createProjectData as data } from '~/assets/data'
import { FieldTitle } from '~/components'

export const MottoFieldValidationSchema = string().max(200, data.descriptionStep2.motto.error)

const MottoField = ({ formik, ...props }) => (
  <>
    <FieldTitle info={data.descriptionStep2.motto.info} {...props}>
      {data.descriptionStep2.motto.title}
    </FieldTitle>
    <Input
      as="textarea"
      name="motto"
      maxLength={200}
      value={formik.values.motto}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      color="whiteLilac800"
      placeholder={data.descriptionStep2.motto.placeholder}
    />
    {formik?.errors?.motto && formik.touched?.motto && (
      <Text variant="textXs" className="mt-2 ml-4 italic">
        {formik.errors.motto}
      </Text>
    )}
  </>
)

MottoField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default MottoField
