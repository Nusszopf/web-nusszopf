import PropTypes from 'prop-types'
import { string } from 'yup'
import { Text, Input } from 'ui-library/stories/atoms'
import { createProjectData as data } from '~/assets/data'
import { FieldTitle } from '~/components'

export const GoalFieldValidationSchema = string()
  .max(150, data.descriptionStep1.goal.error[0])
  .required(data.descriptionStep1.goal.error[1])

const GoalField = ({ formik, ...props }) => (
  <>
    <FieldTitle info={data.descriptionStep1.goal.info} {...props}>
      {data.descriptionStep1.goal.title}
    </FieldTitle>
    <Input
      as="textarea"
      name="goal"
      maxLength={150}
      value={formik.values.goal}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      color="whiteLilac800"
      placeholder={data.descriptionStep1.goal.placeholder}
    />
    {formik?.errors?.goal && formik.touched?.goal && (
      <Text variant="textXs" className="mt-2 ml-4 italic">
        {formik.errors.goal}
      </Text>
    )}
  </>
)

GoalField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default GoalField
