import { Input } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import FieldTitle from './components/FieldTitel'

const DescriptionStep2 = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <FieldTitle info="Info">Projektteam</FieldTitle>
        <RichTextEditor onChange={console.log} />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <FieldTitle info="Info">Projektmotto</FieldTitle>
        <Input as="textarea" />
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default DescriptionStep2
