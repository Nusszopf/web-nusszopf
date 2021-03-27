import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { mixed } from 'yup'
import { throttle } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const TeamFieldValidationSchema = mixed().test('description', cms.team.error, value =>
  JSON.stringify(value)?.length > 6000 ? false : true
)
const TeamField = ({ formik, ...props }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    throttle(value => {
      formik.setFieldValue('team', value)
    }, 300),
    []
  )

  return (
    <>
      <FieldTitle info={cms.team.info} {...props}>
        {cms.team.title}
      </FieldTitle>
      <RichTextEditor
        data-test="input_project-team"
        ariaLabel={cms.team.title}
        name="team"
        onChange={handleChange}
        onBlur={() => formik.setFieldTouched('team')}
        initialState={formik.values.team}
        placeholder={cms.team.placeholder}
      />
      {formik.errors?.team && formik.touched?.team && (
        <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
          {formik.errors.team}
        </Text>
      )}
    </>
  )
}

TeamField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default TeamField
