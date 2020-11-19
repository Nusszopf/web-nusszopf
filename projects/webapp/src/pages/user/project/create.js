import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import { object } from 'yup'

import { useToasts } from 'ui-library/services/Toasts.service'
import { Text, Progressbar } from 'ui-library/stories/atoms'
import { Stepper, useStepper } from 'ui-library/stories/molecules'
import { emptyRichText } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import apollo from '~/utils/services/apollo.service'
import { useEntireUser } from '~/utils/services/auth.service'
import { Page } from '~/components'
import {
  DescriptionStep1,
  DescriptionStep2,
  SettingsStep,
  Navigation,
  step1ValidationSchema,
  step2ValidationSchema,
} from '~/containers'
import { createProjectData as content } from '~/assets/data'

const CreateProject = () => {
  const user = useEntireUser()
  const router = useRouter()
  const { notify } = useToasts()
  const stepper = useStepper()
  const [addProject, { loading: projectLoading }] = apollo.useAddProject()

  const handleSubmit = async (values, helpers) => {
    const isFormComplete = stepper.goForward(values, helpers)
    if (isFormComplete) {
      notify({
        type: 'loading',
        message: 'Dein Projekt wird erstellt.',
      })
      try {
        const data = apollo.serializeProject(values, user)
        await addProject({
          variables: { project: data },
        })
        // todo update cache
        router.push('/user/profile')
        notify({
          type: 'success',
          message: 'Dein Projekt wurde erstellt.',
        })
      } catch (error) {
        notify({
          type: 'loading',
          message: 'Dein Projekt wird erstellt.',
        })
      }
    }
  }

  return (
    <Page
      navHeader={{ visible: true, goBackUri: '/user/profile' }}
      showFooter={false}
      noindex={true}
      className="bg-white text-lilac-800 lg:bg-lilac-100">
      <Formik
        initialValues={{
          title: '',
          goal: '',
          description: emptyRichText,
          location: {
            remote: true,
            searchTerm: '',
            data: {},
          },
          period: {
            flexible: true,
            from: '',
            to: '',
          },
          team: emptyRichText,
          motto: '',
          visibility: 'private',
          contact: false,
        }}
        validationSchema={stepper?.currentChild?.props?.validationSchema ?? object({})}
        onSubmit={handleSubmit}>
        {formik => (
          <FramedGridCard
            className="lg:mb-20 lg:mt-12"
            bodyColor="bg-white lg:bg-lilac-100"
            headerColor="bg-lilac-400 lg:bg-lilac-100">
            <FramedGridCard.Header className="bg-lilac-400">
              <Progressbar label={content.steps[stepper.step]} progress={stepper?.progress ?? 0} />
              <Text as="h1" variant="textLg" className="block mt-3 break-all">
                {formik?.values?.title?.length > 0 ? formik.values.title : content.title}
              </Text>
            </FramedGridCard.Header>
            <Form>
              <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white">
                <Stepper {...stepper}>
                  <DescriptionStep1 validationSchema={step1ValidationSchema} />
                  <DescriptionStep2 validationSchema={step2ValidationSchema} />
                  <SettingsStep />
                </Stepper>
                <FramedGridCard.Body.Col variant="oneCol" className="mt-12 mb-4 md:mb-0 lg:col-start-2">
                  <Navigation
                    className="flex justify-center mx-auto"
                    stepper={stepper}
                    formik={formik}
                    loading={projectLoading}
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

export default CreateProject
