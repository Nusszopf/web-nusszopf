import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { mixed } from 'yup'
import { throttle } from 'lodash'

import { RichTextEditor } from 'ui-library/stories/organisms'
import { Text } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { requestFormData as cms } from '~/assets/data'

export const DescriptionFieldValidationSchema = mixed()
  .test('description_max', cms.description.error[0], value => (JSON.stringify(value)?.length > 6000 ? false : true))
  .test('description_required', cms.description.error[1], value => {
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

const DescriptionField = ({ formik, ...props }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    throttle(value => {
      formik.setFieldValue('description', value)
    }, 300),
    []
  )

  return (
    <>
      <FieldTitle info={cms.description.info} {...props}>
        {cms.description.title}
      </FieldTitle>
      <RichTextEditor
        name="description"
        color="stone"
        onChange={handleChange}
        onBlur={() => formik.setFieldTouched('description')}
        initialState={formik.values.description}
        placeholder={cms.description.placeholder}
      />
      {formik.errors?.description && formik.touched?.description && (
        <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
          {formik.errors.description}
        </Text>
      )}
    </>
  )
}

DescriptionField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default DescriptionField
