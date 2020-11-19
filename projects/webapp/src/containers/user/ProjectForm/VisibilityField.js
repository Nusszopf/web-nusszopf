import PropTypes from 'prop-types'
import { useRadioState, RadioGroup } from 'reakit/Radio'

import { Text, Radiobox } from 'ui-library/stories/atoms'
import { createProjectData as data } from '~/assets/data'
import FieldTitle from './FieldTitle'

const VisibilityField = ({ formik, ...props }) => {
  const radio = useRadioState({ state: formik.values.visibility })
  return (
    <>
      <FieldTitle info={data.SettingsStep.visibility.info} {...props}>
        {data.SettingsStep.visibility.title}
      </FieldTitle>
      <RadioGroup {...radio} aria-label="visibility">
        <Radiobox
          {...radio}
          name="visibility"
          value="public"
          onChange={formik.handleChange}
          label={
            <>
              <Text variant="textSmMedium">{data.SettingsStep.visibility.public.title}</Text>
              <Text variant="textXs">{data.SettingsStep.visibility.public.description}</Text>
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
              <Text variant="textSmMedium">{data.SettingsStep.visibility.private.title}</Text>
              <Text variant="textXs">{data.SettingsStep.visibility.private.description}</Text>
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
