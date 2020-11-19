import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { ArrowLeft } from 'react-feather'

import { Route } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'
import navHeaderData from './navHeader.data'

const NavHeader = ({ router }) => (
  <Frame as="header" className="my-12">
    <div className="relative flex items-center max-w-2xl mx-auto">
      <Route
        className="md:absolute md:top-0 md:left-0 md:-ml-16 md:-mt-1 lg:-ml-24"
        variant="button"
        size="circle"
        color="turquoise700Turquoise500"
        href="/"
        title={navHeaderData.home.meta}
        ariaLabel={navHeaderData.home.meta}>
        <ArrowLeft size={27} />
      </Route>
      <Route
        className="ml-4 sm:ml-6 md:ml-0"
        textType="text-lg sm:text-xl sm:font-medium sm:leading-snug"
        color="turquoise400"
        textVariant="textMd"
        href="/legalNotice"
        as={router?.route === '/legalNotice' ? 'h1' : 'h3'}
        title={navHeaderData.legalNotice.meta}
        ariaLabel={navHeaderData.legalNotice.meta}
        active={router?.route === '/legalNotice'}>
        {navHeaderData.legalNotice.text}
      </Route>
      <Route
        className="ml-4 sm:ml-6"
        color="turquoise400"
        textVariant="textMd"
        textType="text-lg sm:text-xl sm:font-medium sm:leading-snug"
        href="/privacy"
        as={router?.route === '/privacy' ? 'h1' : 'h3'}
        title={navHeaderData.privacy.meta}
        ariaLabel={navHeaderData.privacy.meta}
        active={router?.route === '/privacy'}>
        {navHeaderData.privacy.text}
      </Route>
    </div>
  </Frame>
)

NavHeader.propTypes = {
  router: PropTypes.object,
}

export default withRouter(NavHeader)
