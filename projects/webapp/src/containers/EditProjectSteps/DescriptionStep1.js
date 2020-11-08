import { Text, Input, Switch } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import FieldTitle from './components/FieldTitel'

const DescriptionStep1 = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <>
          <FieldTitle info="Info">Titel*</FieldTitle>
          <Input />
        </>
        <>
          <FieldTitle info="Info" className="mt-8">
            Ziel des Projekts*
          </FieldTitle>
          <Input as="textarea" />
        </>
        <>
          <FieldTitle info="Info" className="mt-8">
            Projektbeschreibung*
          </FieldTitle>
          <RichTextEditor onChange={console.log} />
        </>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <>
          <FieldTitle info="Info">Ort*</FieldTitle>
          <Switch color="lilac800" onCheck={console.log} label="Projekt ist abhänging vom Ort" />
          <Input className="mt-4" />
        </>
        <>
          <FieldTitle className="mt-8" info="Info">
            Projektzeitraum*
          </FieldTitle>
          <Switch color="lilac800" onCheck={console.log} label="Projektzeitraum ist flexibel" />
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
        </>
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default DescriptionStep1
