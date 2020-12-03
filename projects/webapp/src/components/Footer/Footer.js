/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
import { Route } from 'ui-library/stories/atoms'
import { Footer as UIFooter } from 'ui-library/stories/organisims'
import footerData from './footer.data'

export const FOOTER_TYPE = {
  primary: 'primary',
  secondary: 'secondary',
}

const Footer = ({ type = FOOTER_TYPE.primary }) => (
  <>
    {type === FOOTER_TYPE.primary && (
      <UIFooter variant="col" className="bg-steel-200 text-steel-800">
        <UIFooter.LeftElement>
          <Route
            className="mr-8 sm:mr-10"
            href="/legalNotice"
            title={footerData.nav.legalNotice}
            ariaLabel={footerData.nav.legalNotice}>
            {footerData.nav.legalNotice}
          </Route>
          <Route href="/privacy" title={footerData.nav.privacy} ariaLabel={footerData.nav.privacy}>
            {footerData.nav.privacy}
          </Route>
        </UIFooter.LeftElement>
        <UIFooter.RightElement sponsors={['vercel']} />
      </UIFooter>
    )}
    {type === FOOTER_TYPE.secondary && (
      <UIFooter className="bg-blue-300">
        <UIFooter.LeftElement>
          <Route textVariant="textSmMedium" href="/" title={footerData.nav.home} ariaLabel={footerData.nav.home}>
            {footerData.nav.home}
          </Route>
        </UIFooter.LeftElement>
        <UIFooter.RightElement sponsors={['vercel']} />
      </UIFooter>
    )}
  </>
)

Footer.propTypes = {
  type: PropTypes.oneOf(Object.values(FOOTER_TYPE)),
}

export default Footer
