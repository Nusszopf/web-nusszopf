import { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { object } from 'yup'
import { isValid, parseISO } from 'date-fns'

import { useAuth } from '~/utils/services/auth.service'
import useProjectsService from '~/utils/services/projects.service'
import { Button } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import {
  MottoField,
  MottoFieldValidationSchema,
  TeamField,
  TeamFieldValidationSchema,
  TitleField,
  TitleFieldValidationSchema,
  GoalField,
  GoalFieldValidationSchema,
  ProjectField,
  ProjectFieldValidationSchema,
  LocationField,
  LocationFieldValidationSchema,
  PeriodField,
  PeriodFieldValidationSchema,
} from '~/containers/user/ProjectForm'
import { editProjectsViewsData as cms } from '~/assets/data'

const ProjectView = forwardRef(({ project }, ref) => {
  const { user } = useAuth()
  const { updateProject, updateLoading, serializeProjectDescription } = useProjectsService()
  const parseDate = _date => {
    const date = parseISO(_date)
    if (isValid(date)) {
      return date.toLocaleDateString('de-DE')
    } else {
      return ''
    }
  }

  const handleSubmit = newValues => {
    if (!formik.dirty) {
      return
    }
    const description = serializeProjectDescription(user, newValues)
    updateProject(project.id, description)
    formik.resetForm({ values: newValues })
  }

  const formik = useFormik({
    initialValues: {
      title: project.title,
      goal: project.goal,
      description: project.descriptionTemplate,
      location: {
        remote: project.location.remote,
        searchTerm: project.location.searchTerm,
        data: project.location.data,
      },
      period: {
        flexible: project.period.flexible,
        from: parseDate(project.period.from),
        to: parseDate(project.period.to),
      },
      team: project.teamTemplate,
      motto: project.motto,
    },
    validationSchema: object({
      title: TitleFieldValidationSchema,
      goal: GoalFieldValidationSchema,
      description: ProjectFieldValidationSchema,
      location: LocationFieldValidationSchema,
      period: PeriodFieldValidationSchema,
      team: TeamFieldValidationSchema,
      motto: MottoFieldValidationSchema,
    }),
    onSubmit: handleSubmit,
  })

  useImperativeHandle(ref, () => ({
    hasChanged: () => formik.dirty,
  }))

  return (
    <form onSubmit={formik.handleSubmit}>
      <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white text-lilac-800">
        <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
          <TitleField formik={formik} />
          <GoalField formik={formik} className="mt-8" />
          <ProjectField formik={formik} className="mt-7" />
          <MottoField formik={formik} className="mt-8" />
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
          <LocationField className="mt-3 lg:mt-0" formik={formik} />
          <PeriodField className="mt-7" formik={formik} />
          <TeamField formik={formik} className="mt-7" />
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="oneCol" className="flex justify-center mt-12 mb-4 md:mb-0 lg:col-start-2">
          <Button className="bg-lilac-200" type="submit" color="lilac" size="large" disabled={updateLoading}>
            {cms.projectView.save}
          </Button>
        </FramedGridCard.Body.Col>
      </FramedGridCard.Body>
    </form>
  )
})

ProjectView.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectView
