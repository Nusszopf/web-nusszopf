import { useFormikContext } from 'formik'
import { object } from 'yup'

import { FramedGridCard } from 'ui-library/stories/templates'
import { useScrollTop } from '~/utils/helper'
import {
  TitleField,
  TitleFieldValidationSchema,
  GoalField,
  GoalFieldValidationSchema,
  ProjectField,
  ProjectFieldValidationSchema,
  LocationField,
  LocationFieldValidationSchema,
  useLocationField,
  PeriodField,
  PeriodFieldValidationSchema,
} from '../ProjectForm'

export const step1ValidationSchema = object({
  title: TitleFieldValidationSchema,
  goal: GoalFieldValidationSchema,
  description: ProjectFieldValidationSchema,
  location: LocationFieldValidationSchema,
  period: PeriodFieldValidationSchema,
})

const DescriptionStep1 = () => {
  useScrollTop()
  const formik = useFormikContext()
  const { locations, handleLocationSelect, handleSearchTermChange, handleSearchTermClear } = useLocationField(formik)

  return (
    <>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <TitleField formik={formik} />
        <GoalField formik={formik} className="mt-8" />
        <ProjectField formik={formik} className="mt-6" />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <LocationField
          className="mt-4 lg:mt-0"
          formik={formik}
          handleLocationSelect={handleLocationSelect}
          handleSearchTermChange={handleSearchTermChange}
          handleSearchTermClear={handleSearchTermClear}
          locations={locations}
        />
        <PeriodField formik={formik} />
      </FramedGridCard.Body.Col>
    </>
  )
}

export default DescriptionStep1
