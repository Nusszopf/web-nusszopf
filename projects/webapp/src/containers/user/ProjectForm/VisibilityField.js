import PropTypes from 'prop-types'
import { useRadioState, RadioGroup } from 'reakit/Radio'

import { Text, Radiobox } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

const VisibilityField = ({ formik, ...props }) => {
  const radio = useRadioState({ state: formik.values.visibility })
  return (
    <>
      <FieldTitle info={cms.visibility.info} {...props}>
        {cms.visibility.title}
      </FieldTitle>
      <RadioGroup {...radio} aria-label="visibility">
        <Radiobox
          {...radio}
          name="visibility"
          value="public"
          onChange={formik.handleChange}
          label={
            <>
              <Text variant="textSmMedium">{cms.visibility.public.title}</Text>
              <Text variant="textSm">{cms.visibility.public.description}</Text>
            </>
          }
        />
        <Radiobox
          {...radio}
          name="visibility"
          onChange={formik.handleChange}
          className="mt-4"
          value="private"
          label={
            <>
              <Text variant="textSmMedium">{cms.visibility.private.title}</Text>
              <Text variant="textSm">{cms.visibility.private.description}</Text>
            </>
          }
        />
      </RadioGroup>
    </>
  )
}

VisibilityField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default VisibilityField
