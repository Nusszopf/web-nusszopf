import PropTypes from 'prop-types'
import sanity from '../utils/libs/sanity'
import { Heading } from '../components/atoms'
import { Page } from '../components/molecules'
import { RenderSanitySections } from '../components/organisms'

const Impressum = ({ sanity }) => (
  <Page noindex={true} footer={[{ text: 'Zurück zur Startseite', href: '/', mode: null }]}>
    <Heading as="h1">{sanity.title}</Heading>
    <RenderSanitySections sections={sanity.content} />
  </Page>
)

export async function getStaticProps() {
  const query = `
    *[_type == 'page' && page == "Impressum"]{
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

Impressum.propTypes = {
  sanity: PropTypes.object,
}

export default Impressum
