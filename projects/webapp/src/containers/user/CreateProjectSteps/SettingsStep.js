import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import { FramedGridCard } from 'ui-library/stories/templates'
import { useScrollTop } from '~/utils/helper'
import { ContactField, VisibilityField } from '../ProjectForm'

const SettingsStep = ({ user }) => {
  useScrollTop()
  const formik = useFormikContext()

  return (
    <>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <VisibilityField formik={formik} />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <ContactField formik={formik} user={user} className="mt-6 lg:mt-0" />
      </FramedGridCard.Body.Col>
    </>
  )
}

SettingsStep.propTypes = {
  user: PropTypes.object,
}

export default SettingsStep
