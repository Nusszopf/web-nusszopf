import PropTypes from 'prop-types'

import { Switch } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

const ContactField = ({ formik, user, ...props }) => (
  <>
    <FieldTitle info={cms.contact.info} {...props}>
      {cms.contact.title}
    </FieldTitle>
    <Switch
      name="contact"
      color="lilac"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      checked={formik.values.contact}
      label={
        <>
          {cms.contact.label[0]} <i className="hyphens-auto">{user?.data?.email}</i> {cms.contact.label[1]}
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
