import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { object } from 'yup'

import { Text } from 'ui-library/stories/atoms'
import { Progressbar } from 'ui-library/stories/molecules'
import { emptyRichText, Stepper, useStepper } from 'ui-library/stories/organisms'
import { FramedGridCard } from 'ui-library/stories/templates'
import useProjectsService from '~/utils/services/projects.service'
import { withAuth } from '~/utils/hoc'
import { Page } from '~/components'
import {
  DescriptionStep1,
  DescriptionStep2,
  SettingsStep,
  RequestsStep,
  Navigation,
  step1ValidationSchema,
  step2ValidationSchema,
} from '~/containers'
import { createProjectData as content } from '~/assets/data'

const CreateProject = ({ user }) => {
  const { addProject, addLoading, addRequestsLoading } = useProjectsService({ user })
  const router = useRouter()
  const stepper = useStepper()

  const handleSubmit = async (values, helpers) => {
    const isFormComplete = stepper.goForward(values, helpers)
    if (isFormComplete) {
      const hasCreated = await addProject(user, values)
      if (hasCreated) {
        router.push('/user/profile')
      }
    }
  }

  return (
    <Page
      navHeader={{ visible: true, goBackUri: '/user/profile' }}
      footer={{ className: 'bg-white lg:bg-lilac-100' }}
      noindex={true}
      className="bg-white text-lilac-800 lg:bg-lilac-100">
      <Formik
        initialValues={{
          title: '',
          goal: '',
          description: emptyRichText,
          requests: [],
          location: {
            remote: false,
            searchTerm: '',
            data: {},
          },
          period: {
            flexible: false,
            from: '',
            to: '',
          },
          team: emptyRichText,
          motto: '',
          visibility: 'public',
          contact: false,
        }}
        validationSchema={stepper?.currentChild?.props?.validationSchema ?? object({})}
        onSubmit={handleSubmit}>
        {formik => (
          <FramedGridCard
            className="lg:mb-20 lg:mt-12"
            bodyColor="bg-white lg:bg-lilac-100"
            headerColor="bg-lilac-300 lg:bg-lilac-100">
            <FramedGridCard.Header className="bg-lilac-300">
              <Progressbar label={content.steps[stepper?.step ?? 0]} progress={stepper?.progress} />
              <Text as="h1" variant="textLg" className="block mt-3 hyphens-auto">
                {formik?.values?.title?.length > 0 ? formik.values.title : content.title}
              </Text>
            </FramedGridCard.Header>
            <Form>
              <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white">
                <Stepper {...stepper}>
                  <DescriptionStep1 validationSchema={step1ValidationSchema} />
                  <DescriptionStep2 validationSchema={step2ValidationSchema} />
                  <RequestsStep />
                  <SettingsStep user={user} />
                </Stepper>
                <FramedGridCard.Body.Col variant="oneCol" className="mt-12 mb-4 md:mb-0 lg:col-start-2">
                  <Navigation
                    className="flex items-center justify-center mx-auto"
                    stepper={stepper}
                    formik={formik}
                    loading={addLoading || addRequestsLoading}
                  />
                </FramedGridCard.Body.Col>
              </FramedGridCard.Body>
            </Form>
          </FramedGridCard>
        )}
      </Formik>
    </Page>
  )
}

CreateProject.propTypes = {
  user: PropTypes.object,
}

export default withAuth(CreateProject, { isAuthRequired: true })
