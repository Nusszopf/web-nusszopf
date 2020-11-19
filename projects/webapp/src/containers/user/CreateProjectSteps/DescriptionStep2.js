import { useFormikContext } from 'formik'
import { mixed, object, string } from 'yup'

import { Text, Input } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import { createProjectData as data } from '~/assets/data'
import { useScrollTop } from '~/utils/helper'
import { FieldTitle } from './components'

export const step2ValidationSchema = object({
  team: mixed().test('description', data.descriptionStep2.team.error, value =>
    JSON.stringify(value)?.length > 6000 ? false : true
  ),
  motto: string().max(200, data.descriptionStep2.motto.error),
})

const DescriptionStep2 = () => {
  useScrollTop()
  const formik = useFormikContext()
  return (
    <>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <FieldTitle info={data.descriptionStep2.team.info}>{data.descriptionStep2.team.title}</FieldTitle>
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
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <FieldTitle info={data.descriptionStep2.motto.info}>{data.descriptionStep2.motto.title}</FieldTitle>
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
      </FramedGridCard.Body.Col>
    </>
  )
}

export default DescriptionStep2
