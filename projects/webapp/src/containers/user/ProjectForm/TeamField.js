import PropTypes from 'prop-types'
import { mixed } from 'yup'

import { Text } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { createProjectData as data } from '~/assets/data'
import FieldTitle from './FieldTitle'

export const TeamFieldValidationSchema = mixed().test('description', data.descriptionStep2.team.error, value =>
  JSON.stringify(value)?.length > 6000 ? false : true
)
const TeamField = ({ formik, ...props }) => (
  <>
    <FieldTitle info={data.descriptionStep2.team.info} {...props}>
      {data.descriptionStep2.team.title}
    </FieldTitle>
    <RichTextEditor
      name="team"
      onChange={value => formik.setFieldValue('team', value)}
      onBlur={() => formik.setFieldTouched('team')}
      initialState={formik.values.team}
      placeholder={data.descriptionStep2.team.placeholder}
    />
    {formik?.errors?.team && formik.touched?.team && (
      <Text variant="textXs" className="mt-2 ml-4 italic">
        {formik.errors.team}
      </Text>
    )}
  </>
)

TeamField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default TeamField
