import PropTypes from 'prop-types'
import { string } from 'yup'
import { Text, Input } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const TitleFieldValidationSchema = string().max(40, cms.title.error[0]).required(cms.title.error[1])

const TitleField = ({ formik }) => (
  <>
    <FieldTitle info={cms.title.info}>{cms.title.title}</FieldTitle>
    <Input
      name="title"
      color="lilac"
      aria-label={cms.title.title}
      maxLength={40}
      value={formik.values.title}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder={cms.title.placeholder}
    />
    {formik.errors?.title && formik.touched?.title && (
      <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
        {formik.errors.title}
      </Text>
    )}
  </>
)

TitleField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default TitleField
