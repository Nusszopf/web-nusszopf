import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import { object } from 'yup'

import { Text, Button, Progressbar } from 'ui-library/stories/atoms'
import { Stepper, useStepper } from 'ui-library/stories/molecules'
import { emptyRichText } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import { Page, DescriptionStep1, DescriptionStep2, SettingsStep, step1ValidationSchema } from '../../../containers'
import { useFetchUser } from '../../../utils/services/auth.service'
import { createProjectData as data } from '../../../assets/data'

const EditProject = () => {
  const router = useRouter()
  const { user: authUser } = useFetchUser({ required: true })
  const { id } = router.query
  const [project, setProject] = useState()
  const stepper = useStepper({})

  const handleSubmit = (values, helpers) => {
    const isFormComplete = stepper.goForward(values, helpers)
    if (isFormComplete) {
      console.log('send data', values)
    }
  }

  return (
    <Page
      navHeader={{ visible: true, goBackUri: 'back' }}
      showFooter={false}
      noindex={true}
      className="text-lilac-800 bg-lilac-100">
      <Formik
        initialValues={{
          title: '',
          goal: '',
          description: emptyRichText,
          location: {
            remote: true,
            name: '',
            geo: {
              lat: '',
              lng: '',
            },
          },
          period: {
            flexible: true,
            from: '',
            to: '',
          },
          team: '',
          motto: '',
          visibility: 'private',
          contact: 'mail@nusszopf.org',
        }}
        validationSchema={stepper?.currentChild?.props?.validationSchema ?? object({})}
        onSubmit={handleSubmit}
        validateOnMount={false}
        enableReinitialize={false}>
        {formik => (
          <FramedGridCard
            className="lg:mb-20 lg:mt-12"
            bodyColor="bg-white lg:bg-lilac-100"
            headerColor="bg-lilac-400 lg:bg-lilac-100">
            <FramedGridCard.Header className="bg-lilac-400">
              <Progressbar label="Label" progress={stepper?.progress ?? 0} />
              <div className="flex items-end justify-between">
                <div className="mb-2 break-all lg:mr-12 lg:mb-0">
                  <Text as="h1" variant="textLg">
                    {formik?.values?.title?.length > 0 ? formik.values.title : data.title}
                  </Text>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="outline" color="lilac800" className="mr-5" onClick={stepper?.goBack}>
                    {data.navigation.back}
                  </Button>
                  <Button variant="outline" color="lilac800" onClick={formik.submitForm}>
                    {stepper?.progress === 100 ? data.navigation.create : data.navigation.next}
                  </Button>
                </div>
              </div>
            </FramedGridCard.Header>
            <Form>
              <Stepper {...stepper}>
                <DescriptionStep1 validationSchema={step1ValidationSchema} />
                <DescriptionStep2 />
                <SettingsStep />
              </Stepper>
            </Form>
          </FramedGridCard>
        )}
      </Formik>
    </Page>
  )
}

export default EditProject
