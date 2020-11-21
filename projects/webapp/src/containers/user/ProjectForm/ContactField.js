import PropTypes from 'prop-types'

import { Switch } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'

const ContactField = ({ formik, user, ...props }) => (
  <>
    <FieldTitle info="Info" {...props}>
      Kontakt
    </FieldTitle>
    <Switch
      name="contact"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      checked={formik.values.contact}
      color="lilac800"
      label={
        <>
          Direkt kontaktieren unter <i className="hyphens-auto">{user?.data?.email}</i>
        </>
      }
    />
  </>
)

ContactField.propTypes = {
  formik: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default ContactField
