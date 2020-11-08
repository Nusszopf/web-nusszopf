import { Input } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import { createProjectData as data } from '../../assets/data'
import FieldTitle from './components/FieldTitel'

const DescriptionStep2 = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <FieldTitle info={data.descriptionStep2.team.info}>{data.descriptionStep2.team.title}</FieldTitle>
        <RichTextEditor onChange={console.log} />
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <FieldTitle info={data.descriptionStep2.motto.info}>{data.descriptionStep2.motto.title}</FieldTitle>
        <Input as="textarea" color="whiteLilac800" placeholder={data.descriptionStep2.motto.placeholder} />
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default DescriptionStep2
