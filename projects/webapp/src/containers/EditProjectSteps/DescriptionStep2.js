import { Text, Input } from 'ui-library/stories/atoms'
import { Popover } from 'ui-library/stories/molecules'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'

const DescriptionStep2 = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <div className="flex mb-3 space-x-2">
          <Text>Projektteam</Text>
          <Popover />
        </div>
        <RichTextEditor onChange={console.log} />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <div className="flex mb-3 space-x-2">
          <Text>Projektmotto</Text>
          <Popover />
        </div>
        <Input as="textarea" />
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default DescriptionStep2
