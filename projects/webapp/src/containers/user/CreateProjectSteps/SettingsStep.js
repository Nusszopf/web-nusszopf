import { useFormikContext } from 'formik'

import { FramedGridCard } from 'ui-library/stories/templates'
import { useEntireUser } from '~/utils/services/auth.service'
import { useScrollTop } from '~/utils/helper'
import { ContactField, VisibilityField } from '../ProjectForm'

const SettingsStep = () => {
  useScrollTop()
  const formik = useFormikContext()
  const user = useEntireUser()

  return (
    <>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <VisibilityField formik={formik} />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <ContactField formik={formik} user={user} className="mt-4 lg:mt-0" />
      </FramedGridCard.Body.Col>
    </>
  )
}

export default SettingsStep
