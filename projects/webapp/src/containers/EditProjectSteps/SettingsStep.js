import { Text, Radiobox, Switch } from 'ui-library/stories/atoms'
import { Popover } from 'ui-library/stories/molecules'
import { FramedGridCard } from 'ui-library/stories/templates'
import { useRadioState, RadioGroup } from 'reakit/Radio'

const SettingsStep = () => {
  const radio = useRadioState({ state: 'private' })

  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <div className="flex mb-3 space-x-2">
          <Text>Sichtbarkeit</Text>
          <Popover />
        </div>
        <RadioGroup {...radio} aria-label="visibility">
          <label>
            <div className="flex">
              <Radiobox {...radio} value="public" />
              <div>
                <Text as="p" variant="textSmMedium">
                  Öffentlich
                </Text>
                <Text as="p" variant="textXs">
                  Projekt kann über Nusszopf und Suchmaschinen gefunden werden
                </Text>
              </div>
            </div>
          </label>
          <label>
            <div className="flex mt-3">
              <Radiobox {...radio} value="private" />
              <div>
                <Text as="p" variant="textSmMedium">
                  Geheim
                </Text>
                <Text as="p" variant="textXs">
                  Projekt ist nur zugänglich unter diesem Link: nusszopf.org/nusszopf
                </Text>
              </div>
            </div>
          </label>
        </RadioGroup>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <div className="flex mb-3 space-x-2">
          <Text>Kontakt</Text>
          <Popover />
        </div>
        <div className="flex items-start space-x-4">
          <Switch size="small" />
          <Text variant="textSm" className="-mt-px">
            Direkt kontaktieren unter finn@nusszopf.org
          </Text>
        </div>
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default SettingsStep
