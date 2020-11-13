import { useFormikContext } from 'formik'
import { useRadioState, RadioGroup } from 'reakit/Radio'

import { Text, Radiobox, Switch } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { useUser } from '../../utils/helper'
import { createProjectData as data } from '../../assets/data'
import FieldTitle from './components/FieldTitel'

const SettingsStep = () => {
  const formik = useFormikContext()
  const { loading, ...user } = useUser()
  const radio = useRadioState({ state: formik.values.visibility })

  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <FieldTitle info={data.SettingsStep.visibility.info}>{data.SettingsStep.visibility.title}</FieldTitle>
        <RadioGroup {...radio} aria-label="visibility">
          <Radiobox
            {...radio}
            name="visibility"
            value="public"
            onChange={formik.handleChange}
            label={
              <>
                <Text as="p" variant="textSmMedium">
                  {data.SettingsStep.visibility.public.title}
                </Text>
                <Text as="p" variant="textXs">
                  {data.SettingsStep.visibility.public.description}
                </Text>
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
                <Text as="p" variant="textSmMedium">
                  {data.SettingsStep.visibility.private.title}
                </Text>
                <Text as="p" variant="textXs">
                  {data.SettingsStep.visibility.private.description}
                </Text>
              </>
            }
          />
        </RadioGroup>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <FieldTitle info="Info">Kontakt</FieldTitle>
        <Switch
          name="contact"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values.contact}
          color="lilac800"
          label={
            <>
              Direkt kontaktieren unter <i>{user?.data?.email}</i>
            </>
          }
        />
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default SettingsStep
