import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Page } from '../containers'
import { Frame } from '../stories/templates'
import {
  Link,
  Text,
  TEXT_TYPE,
  Route,
  ROUTE_TYPES,
  ROUTE_TEXT_COLORS,
  BTN_COLORS,
  LINK_TEXT_COLORS,
} from '../stories/atoms'
import { ArrowLeft } from 'react-feather'
import BrandFooter from '../containers/BrandFooter/BrandFooter'

const LegalNotice = ({ router }) => (
  <Page className="bg-turquoise-700 text-turquoise-300" showFooter={false}>
    <Frame as="header" className="my-12">
      <div className="relative flex items-center max-w-2xl mx-auto">
        <Route
          className="md:absolute md:top-0 md:left-0 md:-ml-16 md:-mt-1 lg:-ml-24"
          type={ROUTE_TYPES.icon}
          color={BTN_COLORS.turquoise700turquoise500}
          href="/"
          icon={ArrowLeft}
          title="Zum Nusszopf"
          ariaLabel="Zum Nusszopf"
        />
        <Route
          className="ml-4 sm:ml-6 md:ml-0"
          textType="text-lg sm:text-xl sm:font-medium sm:leading-snug"
          color={ROUTE_TEXT_COLORS.turquoise400}
          href="/legalNotice"
          as="h1"
          title="Zum Impressum"
          ariaLabel="Zum Impressum"
          active={router?.route === '/legalNotice'}>
          Impressum
        </Route>
        <Route
          className="ml-4 sm:ml-6"
          color={ROUTE_TEXT_COLORS.turquoise400}
          textType="text-lg sm:text-xl sm:font-medium sm:leading-snug"
          href="/privacy"
          title="Zum Datenschut"
          ariaLabel="Zum Datenschutz"
          active={router?.route === '/privacy'}>
          Datenschutz
        </Route>
      </div>
    </Frame>
    <Frame className="my-12 sm:my-20 hyphens-auto">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Angaben gemäß § 5 TMG
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Michael Schwarz<br></br>Schertlinstraße 10<br></br>86159 Augsburg
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Kontakt
          </Text>
          <Text type={TEXT_TYPE.textSm}>T: (+49) 179 422 53 70</Text>
          <Text type={TEXT_TYPE.textSm}>M: mail@nusszopf.org</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Melina Oppelt<br></br>Schertlinstraße 10<br></br>86159 Augsburg
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Haftung für Inhalte
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Haftung für Links
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte 2/ 4 waren
            zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
            ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Urheberrecht
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
            die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </Text>
        </div>
        <div>
          <Text type={TEXT_TYPE.textSm} className="italic">
            Quelle: Impressum-Konfigurator von{' '}
            <Link
              color={LINK_TEXT_COLORS.turquoise300turquoise500}
              href="https://www.e-recht24.de/"
              ariaLabel="Zu eRecht24"
              title="Zu eRecht24">
              e-recht24.de
            </Link>
            .
          </Text>
        </div>
      </div>
    </Frame>
    <BrandFooter className="mb-12" />
  </Page>
)

LegalNotice.propTypes = {
  router: PropTypes.object,
}

export default withRouter(LegalNotice)
