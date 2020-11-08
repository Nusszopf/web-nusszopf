import { Text, Radiobox, Switch } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { useRadioState, RadioGroup } from 'reakit/Radio'
import FieldTitle from './components/FieldTitel'

const SettingsStep = () => {
  const radio = useRadioState({ state: 'private' })

  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <FieldTitle info="Info">Sichtbarkeit</FieldTitle>
        <RadioGroup {...radio} aria-label="visibility">
          <Radiobox
            {...radio}
            value="public"
            label={
              <>
                <Text as="p" variant="textSmMedium">
                  Öffentlich
                </Text>
                <Text as="p" variant="textXs">
                  Projekt kann über Nusszopf und Suchmaschinen gefunden werden
                </Text>
              </>
            }
          />
          <Radiobox
            {...radio}
            className="mt-4"
            value="private"
            label={
              <>
                <Text as="p" variant="textSmMedium">
                  Geheim
                </Text>
                <Text as="p" variant="textXs">
                  Projekt ist nur zugänglich unter diesem Link: nusszopf.org/nusszopf
                </Text>
              </>
            }
          />
        </RadioGroup>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <FieldTitle info="Info">Kontakt</FieldTitle>
        <Switch
          color="lilac800"
          onCheck={console.log}
          label={
            <>
              Direkt kontaktieren unter <i>finn@nusszopf.org</i>
            </>
          }
        />
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default SettingsStep
