import { useFormikContext } from 'formik'
import { object } from 'yup'

import { FramedGridCard } from 'ui-library/stories/templates'
import { useScrollTop } from '~/utils/helper'
import {
  MottoField,
  MottoFieldValidationSchema,
  TeamField,
  TeamFieldValidationSchema,
} from '~/containers/user/ProjectForm'

export const step2ValidationSchema = object({
  team: TeamFieldValidationSchema,
  motto: MottoFieldValidationSchema,
})

const DescriptionStep2 = () => {
  useScrollTop()
  const formik = useFormikContext()
  return (
    <>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <TeamField formik={formik} />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <MottoField formik={formik} className="mt-5 lg:mt-0" />
      </FramedGridCard.Body.Col>
    </>
  )
}

export default DescriptionStep2
