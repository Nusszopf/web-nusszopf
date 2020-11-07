import { useState } from 'react'
import { useRouter } from 'next/router'
import { Text, Button, Progressbar } from 'ui-library/stories/atoms'
import { FormikStepper, useFormikStepper } from 'ui-library/stories/molecules'
import { FramedGridCard } from 'ui-library/stories/templates'
import { Page, DescriptionStep1, DescriptionStep2, SettingsStep } from '../../../containers'
import { useFetchUser } from '../../../utils/services/auth.service'

const EditProject = () => {
  const router = useRouter()
  const { user: authUser } = useFetchUser({ required: true })
  const { id } = router.query
  const [project, setProject] = useState()
  const stepper = useFormikStepper({
    onSubmit: (values, helpers) => () => console.log('submit', values),
    initialValues: { name: '', email: '' },
  })

  return (
    <Page
      navHeader={{ visible: true, goBackUri: 'back' }}
      showFooter={false}
      noindex={true}
      className="text-lilac-800 bg-lilac-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-lilac-100"
        headerColor="bg-lilac-400 lg:bg-lilac-100">
        <FramedGridCard.Header className="bg-lilac-400">
          <Progressbar label="Label" progress={stepper.progress ?? 0} />
          <div className="flex items-end justify-between">
            <Text as="h1" variant="textLg" className="mb-2 ">
              Neues Projekt
            </Text>
            <div>
              <Button variant="outline" color="lilac800" className="mr-5" onClick={stepper.goBack}>
                Zurück
              </Button>
              <Button variant="outline" color="lilac800" onClick={stepper.formik.submitForm}>
                Weiter
              </Button>
            </div>
          </div>
        </FramedGridCard.Header>
        <FormikStepper {...stepper}>
          <DescriptionStep1 />
          <DescriptionStep2 />
          <SettingsStep />
        </FormikStepper>
      </FramedGridCard>
    </Page>
  )
}

export default EditProject
