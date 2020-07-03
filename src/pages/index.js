import PropTypes from 'prop-types'
import sanity from '../utils/libs/sanity'
import { Heading } from '../components/atoms'
import { Page } from '../components/molecules'
import { RenderSanitySections } from '../components/organisms'
import styles from './index.module.scss'

const Index = ({ sanity }) => {
  return (
    <Page
      description={sanity.description}
      image={{
        url: sanity.ogImage.asset.url,
        width: sanity.ogImageWidth,
        height: sanity.ogImageHeight,
      }}
      title={sanity.title}
      footer={[
        { href: '/imprint', text: 'Impressum', mode: null },
        { href: '/privacy', text: 'Datenschutz', mode: null },
      ]}>
      <Heading as="h1">{sanity.title}</Heading>
      <Heading as="h2" className={styles.subtitle}>
        {sanity.subtitle}
      </Heading>
      <RenderSanitySections sections={sanity.content} />
    </Page>
  )
}

export async function getStaticProps() {
  const query = `
    *[_type == 'page' && page == "Home"]{
      ...,
      ogImage {
        asset->{url}
      },
    }
  `
  const res = await sanity.fetch(query)
  return {
    props: {
      sanity: res[0],
    },
  }
}

Index.propTypes = {
  sanity: PropTypes.object,
}

export default Index
