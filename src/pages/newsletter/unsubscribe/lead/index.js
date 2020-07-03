import PropTypes from 'prop-types'
import sanity from '../../../../utils/libs/sanity'
import { Heading } from '../../../../components/atoms'
import { Page } from '../../../../components/molecules'
import { RenderSanitySections } from '../../../../components/organisms'

const UnsubscribeLead = ({ sanity }) => (
  <Page noindex={true} footer={[{ text: 'Zurück zur Startseite', href: '/', mode: null }]}>
    <Heading as="h1">Abmeldung vom Newsletter</Heading>
    <RenderSanitySections sections={sanity.content} />
  </Page>
)

export async function getStaticProps() {
  const query = `
    *[_type == 'page' && page == "Newsletter (Abmeldung)"]{
      title,
      content
    }
  `
  const res = await sanity.fetch(query)
  return {
    props: {
      sanity: res[0],
    },
  }
}

UnsubscribeLead.propTypes = {
  sanity: PropTypes.object,
}

export default UnsubscribeLead
