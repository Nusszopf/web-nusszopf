import PropTypes from 'prop-types'
import { mixed } from 'yup'

import { RichTextEditor } from 'ui-library/stories/organisms'
import { Text } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const ProjectFieldValidationSchema = mixed()
  .test('description_max', cms.project.error[0], value => (JSON.stringify(value)?.length > 6000 ? false : true))
  .test('description_required', cms.project.error[1], value => {
    if (value?.length <= 1) {
      if (value[0].children?.length <= 1) {
        const child = value[0].children[0]
        if (Object.prototype.hasOwnProperty.call(child, 'text')) {
          return child.text?.length > 0 ? true : false
        }
      }
    }
    return true
  })

const ProjectField = ({ formik, ...props }) => (
  <>
    <FieldTitle info={cms.project.info} {...props}>
      {cms.project.title}
    </FieldTitle>
    <RichTextEditor
      name="description"
      onChange={value => formik.setFieldValue('description', value)}
      onBlur={() => formik.setFieldTouched('description')}
      initialState={formik.values.description}
      placeholder={cms.project.placeholder}
    />
    {formik?.errors?.description && formik.touched?.description && (
      <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
        {formik.errors.description}
      </Text>
    )}
  </>
)

ProjectField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default ProjectField
