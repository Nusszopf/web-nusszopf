import PropTypes from 'prop-types'
import { useRadioState, RadioGroup } from 'reakit/Radio'
import { truncate } from 'lodash'

import { Text, Radiobox } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

const ContactField = ({ formik, user, loading, ...props }) => {
  const radio = useRadioState({ state: formik.values.contact, orientation: 'vertical' })
  return (
    <>
      <FieldTitle info={cms.contact.info} {...props}>
        {cms.contact.title}
      </FieldTitle>
      <RadioGroup {...radio} aria-label={cms.visibility.title}>
        <Radiobox
          data-test="radio_direct_project-contact"
          {...radio}
          name="contact"
          value={true}
          onChange={() => formik.setFieldValue('contact', true)}
          label={
            <>
              <Text variant="textSmMedium">{cms.contact.radio1[0]}</Text>
              <Text variant="textSm">
                {cms.contact.radio1[1]}{' '}
                <span className="underline">{truncate(loading ? '' : user.data.private.email, { length: 25 })}</span>
              </Text>
            </>
          }
        />
        <Radiobox
          data-test="radio_direct_project-contact"
          {...radio}
          name="contact"
          value={false}
          onChange={() => formik.setFieldValue('contact', false)}
          className="mt-4"
          label={
            <>
              <Text variant="textSmMedium">{cms.contact.radio2[0]}</Text>
              <Text variant="textSm">{cms.contact.radio2[1]}</Text>
            </>
          }
        />
      </RadioGroup>
    </>
  )
}

ContactField.propTypes = {
  formik: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool,
}

export default ContactField
