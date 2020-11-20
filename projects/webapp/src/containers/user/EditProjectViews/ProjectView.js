import PropTypes from 'prop-types'
import { Form, Formik } from 'formik'
import { object } from 'yup'
import { isValid, parseISO } from 'date-fns'

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
} from '../ProjectForm'

const ProjectView = ({ project }) => {
  const parseDate = _date => {
    const date = parseISO(_date)
    if (isValid(date)) {
      return date.toLocaleDateString('de-DE')
    } else {
      return ''
    }
  }

  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{
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
      }}
      validationSchema={object({
        title: TitleFieldValidationSchema,
        goal: GoalFieldValidationSchema,
        description: ProjectFieldValidationSchema,
        location: LocationFieldValidationSchema,
        period: PeriodFieldValidationSchema,
        team: TeamFieldValidationSchema,
        motto: MottoFieldValidationSchema,
      })}
      onSubmit={handleSubmit}>
      {formik => (
        <Form>
          <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
            <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
              <TitleField formik={formik} />
              <GoalField formik={formik} className="mt-6" />
              <ProjectField formik={formik} className="mt-6" />
            </FramedGridCard.Body.Col>
            <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
              <LocationField className="mt-4 lg:mt-0" formik={formik} />
              <PeriodField formik={formik} />
              <TeamField formik={formik} className="mt-6" />
              <MottoField formik={formik} className="mt-6" />
            </FramedGridCard.Body.Col>
            <FramedGridCard.Body.Col variant="oneCol" className="flex justify-center mt-12 mb-4 md:mb-0 lg:col-start-2">
              <Button type="submit" size="large" color="lilac800">
                Speichern
              </Button>
            </FramedGridCard.Body.Col>
          </FramedGridCard.Body>
        </Form>
      )}
    </Formik>
  )
}

ProjectView.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectView
