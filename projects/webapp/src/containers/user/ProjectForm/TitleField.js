import PropTypes from 'prop-types'
import { string } from 'yup'
import { Text, Input } from 'ui-library/stories/atoms'
import { createProjectData as data } from '~/assets/data'
import { FieldTitle } from '~/components'

export const TitleFieldValidationSchema = string()
  .max(30, data.descriptionStep1.title.error[0])
  .required(data.descriptionStep1.title.error[1])

const TitleField = ({ formik }) => (
  <>
    <FieldTitle info={data.descriptionStep1.title.info}>{data.descriptionStep1.title.title}</FieldTitle>
    <Input
      name="title"
      maxLength={30}
      value={formik.values.title}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder={data.descriptionStep1.title.placeholder}
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
