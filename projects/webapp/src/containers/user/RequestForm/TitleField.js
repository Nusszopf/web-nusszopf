import PropTypes from 'prop-types'
import { string } from 'yup'

import { Text, Input } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'

export const TitleFieldValidationSchema = string().max(30, 'max length error').required('required error')

const TitleField = ({ formik }) => (
  <>
    <FieldTitle info="info">Titel*</FieldTitle>
    <Input
      color="stone"
      name="title"
      maxLength={30}
      value={formik.values.title}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="Wer oder was wird gesucht?"
    />
    {formik?.errors?.title && formik.touched?.title && (
      <Text variant="textXs" className="mt-2 ml-4 italic">
        {formik.errors.title}
      </Text>
    )}
  </>
)

TitleField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default TitleField
