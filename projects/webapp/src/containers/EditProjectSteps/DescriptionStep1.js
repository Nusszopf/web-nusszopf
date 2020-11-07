import { Text, Input, Switch } from 'ui-library/stories/atoms'
import { Popover } from 'ui-library/stories/molecules'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'

const DescriptionStep1 = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <div>
          <div className="flex mb-3 space-x-2">
            <Text>Titel*</Text>
            <Popover />
          </div>
          <Input />
        </div>
        <div>
          <div className="flex mt-8 mb-3 space-x-2">
            <Text>Ziel des Projekts*</Text>
            <Popover />
          </div>
          <Input as="textarea" />
        </div>
        <div>
          <div className="flex mt-8 mb-3 space-x-2">
            <Text>Projektbeschreibung*</Text>
            <Popover />
          </div>
          <RichTextEditor onChange={console.log} />
        </div>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <div>
          <div className="flex mb-3 space-x-2">
            <Text>Ort*</Text>
            <Popover />
          </div>
          <div className="flex items-start space-x-4">
            <Switch size="small" />
            <Text variant="textSm" className="-mt-px">
              Projekt ist abhänging vom Ort
            </Text>
          </div>
          <Input className="mt-4" />
        </div>
        <div>
          <div className="flex mt-8 mb-3 space-x-2">
            <Text>Projektzeitraum*</Text>
            <Popover />
          </div>
          <div className="flex items-start space-x-4">
            <Switch size="small" />
            <Text variant="textSm" className="-mt-px">
              Projektzeitraum ist flexibel
            </Text>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <Text variant="textXs" className="w-12 uppercase">
                Von
              </Text>
              <Input type="date" />
            </div>
            <div className="flex items-center">
              <Text variant="textXs" className="w-12 uppercase">
                Bis
              </Text>
              <Input type="date" />
            </div>
          </div>
        </div>
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default DescriptionStep1
