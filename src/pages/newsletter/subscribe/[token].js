import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { ArrowRight } from 'react-feather'

import { Page, PageBrand } from '../../../containers'
import { Text, TEXT_TYPE, Route, ROUTE_TYPES, BTN_COLORS } from '../../../stories/atoms'
import { FrameFullCenter } from '../../../stories/templates'
import { confirmNewsletterSubscription } from '../../../utils/services/newsletter.service'

const SubscribeConfirm = ({ lead }) => (
  <Page showFooter={false}>
    <FrameFullCenter
      className="text-yellow-300 bg-blue-400"
      flex="justify-center"
      footer={<PageBrand className="mt-24" color="pink" />}>
      <div className="w-full max-w-xl sm:mt-12">
        <SVG
          className="flex-shrink-0 w-48 mx-auto mb-10 sm:mb-20"
          src="/images/logos/nusszopf-big.svg"
          title="<3 Nusszopf"
          aria-label="Nusszopf"
        />
        <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-4 text-yellow-300">
          Juhuu! Vielen Dank für Dein Interesse!
        </Text>
        <Text className="mb-4">
          <span className="font-bold">{lead.email}</span> wurde erfolgreich bei uns hinterlegt. Du bekommst jetzt von
          uns mindestens einmal pro Monat ein Update zum Nusszopf-Projekt.
        </Text>
        <Text className="mb-8 italic">
          Frische Grüße<br></br>Dein Nusszopf-Team
        </Text>
        <Route
          type={ROUTE_TYPES.buttonIconRight}
          color={BTN_COLORS.blue400blue200}
          href="/"
          title="Zum Nusszopf"
          ariaLabel="Zum Nusszopf"
          icon={ArrowRight}>
          Zum Nusszopf
        </Route>
      </div>
    </FrameFullCenter>
  </Page>
)

SubscribeConfirm.propTypes = {
  lead: PropTypes.objectOf({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
}

export default SubscribeConfirm

export const getServerSideProps = async ctx => {
  try {
    const { token } = ctx.query
    const response = await confirmNewsletterSubscription(token)
    if (response.ok) {
      const lead = await response.json()
      return { props: { lead } }
    } else {
      // TODO: logError(`newsletter-subscribe-confirm: ${my-response-message}`)
      // return { props: { lead: { email: 'finn@nuss.de', name: 'Finn' } } }
      ctx.res.writeHead(302, { Location: '/404' })
      ctx.res.end()
    }
  } catch (error) {
    // TODO: logError(`newsletter-subscribe-confirm: ${error.message}`)
    ctx.res.writeHead(302, { Location: '/500' })
    ctx.res.end()
  }
}
