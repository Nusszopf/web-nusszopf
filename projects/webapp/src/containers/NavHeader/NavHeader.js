import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { ArrowLeft } from 'react-feather'

import { Route, ROUTE_TYPES, ROUTE_TEXT_COLORS, BTN_COLORS } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'
import navHeaderData from './navHeader.data'

const NavHeader = ({ router }) => (
  <Frame as="header" className="my-12">
    <div className="relative flex items-center max-w-2xl mx-auto">
      <Route
        className="md:absolute md:top-0 md:left-0 md:-ml-16 md:-mt-1 lg:-ml-24"
        type={ROUTE_TYPES.icon}
        color={BTN_COLORS.turquoise700turquoise500}
        href="/"
        icon={ArrowLeft}
        title={navHeaderData.home.meta}
        ariaLabel={navHeaderData.home.meta}
      />
      <Route
        className="ml-4 sm:ml-6 md:ml-0"
        textType="text-lg sm:text-xl sm:font-medium sm:leading-snug"
        color={ROUTE_TEXT_COLORS.turquoise400}
        href="/legalNotice"
        as="h1"
        title={navHeaderData.legalNotice.meta}
        ariaLabel={navHeaderData.legalNotice.meta}
        active={router?.route === '/legalNotice'}>
        {navHeaderData.legalNotice.text}
      </Route>
      <Route
        className="ml-4 sm:ml-6"
        color={ROUTE_TEXT_COLORS.turquoise400}
        textType="text-lg sm:text-xl sm:font-medium sm:leading-snug"
        href="/privacy"
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
