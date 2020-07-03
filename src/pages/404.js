import { Page } from '../components/molecules'
import { Heading } from '../components/atoms'

const Custom404 = () => (
  <Page noindex={true}>
    <Heading>Die Seite konnte nicht gefunden werden</Heading>
  </Page>
)

export default Custom404
