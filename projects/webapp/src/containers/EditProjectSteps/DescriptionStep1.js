import { Text, Input, Switch } from 'ui-library/stories/atoms'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import { createProjectData as data } from '../../assets/data'
import FieldTitle from './components/FieldTitel'

const DescriptionStep1 = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <>
          <FieldTitle info={data.descriptionStep1.title.info}>{data.descriptionStep1.title.title}</FieldTitle>
          <Input placeholder={data.descriptionStep1.title.placeholder} />
        </>
        <>
          <FieldTitle info={data.descriptionStep1.goal.info} className="mt-8">
            {data.descriptionStep1.goal.title}
          </FieldTitle>
          <Input as="textarea" placeholder={data.descriptionStep1.goal.placeholder} />
        </>
        <>
          <FieldTitle info={data.descriptionStep1.project.info} className="mt-8">
            {data.descriptionStep1.project.title}
          </FieldTitle>
          <RichTextEditor onChange={console.log} />
        </>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <>
          <FieldTitle info={data.descriptionStep1.location.info}>{data.descriptionStep1.location.title}</FieldTitle>
          <Switch color="lilac800" onCheck={console.log} label={data.descriptionStep1.location.action} />
          <Input className="mt-4" placeholder={data.descriptionStep1.location.placeholder} />
        </>
        <>
          <FieldTitle className="mt-8" info={data.descriptionStep1.period.info}>
            {data.descriptionStep1.period.title}
          </FieldTitle>
          <Switch color="lilac800" onCheck={console.log} label={data.descriptionStep1.period.action.switch} />
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <Text variant="textXs" className="w-12 uppercase">
                {data.descriptionStep1.period.action.from}
              </Text>
              <Input type="date" />
            </div>
            <div className="flex items-center">
              <Text variant="textXs" className="w-12 uppercase">
                {data.descriptionStep1.period.action.to}
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
