import PropTypes from 'prop-types'
import { string } from 'yup'
import { Text, Input } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const GoalFieldValidationSchema = string().max(150, cms.goal.error[0]).required(cms.goal.error[1])

const GoalField = ({ formik, ...props }) => (
  <>
    <FieldTitle info={cms.goal.info} {...props}>
      {cms.goal.title}
    </FieldTitle>
    <Input
      as="textarea"
      color="lilac"
      name="goal"
      maxLength={150}
      value={formik.values.goal}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder={cms.goal.placeholder}
    />
    {formik?.errors?.goal && formik.touched?.goal && (
      <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
        {formik.errors.goal}
      </Text>
    )}
  </>
)

GoalField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default GoalField
