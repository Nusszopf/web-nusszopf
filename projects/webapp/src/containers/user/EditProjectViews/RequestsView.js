import { FramedGridCard } from 'ui-library/stories/templates'

const RequestsView = () => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        Gesuche...
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

export default RequestsView
