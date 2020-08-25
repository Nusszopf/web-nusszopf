import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { ArrowLeft } from 'react-feather'
import { Page, PageBrand } from '../containers'
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

const Privacy = ({ router }) => (
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
            Benennung der verantwortlichen Stelle
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </Text>
          <Text type={TEXT_TYPE.textSm} className="mb-3">
            Michael Schwarz & Melina Oppelt<br></br>Schertlinstraße 10<br></br>86159 Augsburg
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf
            Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung
            per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
            unberührt.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
            Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der
            folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{' '}
            <Link
              color={LINK_TEXT_COLORS.turquoise400turquoise800}
              href="https://www.bfdi.bund.de"
              title="Zu BfDI"
              ariaLabel="Zu BfDI">
              https://www.bfdi.bund.de
            </Link>
            .
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Recht auf Datenübertragbarkeit
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem
            maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Recht auf Auskunft, Berichtigung, Sperrung, Löschung
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft
            über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der
            Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich
            und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum
            aufgeführten Kontaktmöglichkeiten an uns wenden.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Server-Log-Dateien
          </Text>
          <Text type={TEXT_TYPE.textSm} className="mb-3">
            In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr
            Browser automatisch an uns übermittelt. Dies sind:
          </Text>
          <ul className="pl-6 mb-3 text-lg font-normal list-disc">
            <li>Besuchte Seite auf unserer Domain </li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL </li>
            <li>Hostname des zugreifenden Rechners</li>
            <li> IP-Adresse</li>
          </ul>
          <Text type={TEXT_TYPE.textSm}>
            Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung
            bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
            vorvertraglicher Maßnahmen gestattet.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            SSL- bzw. TLS-Verschlüsselung
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
            Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
            über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an
            der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            Newsletter-Daten
          </Text>
          <Text type={TEXT_TYPE.textSm} className="mb-3">
            Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der
            angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten
            werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand
            des Newsletters. Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist
            jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den
            "Austragen"-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge
            bleibt vom Widerruf unberührt. Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der
            Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden
            sein, verbleiben diese weiterhin bei uns.
          </Text>
        </div>
        <div>
          <Text type={TEXT_TYPE.textSm} className="italic">
            Quelle: Datenschutz-Konfigurator von{' '}
            <Link
              color={LINK_TEXT_COLORS.turquoise400turquoise800}
              href="https://www.mein-datenschutzbeauftragter.de/"
              ariaLabel="Zu mein-datenschutzbeauftragter.de"
              title="Zu mein-datenschutzbeauftragter.de">
              mein-datenschutzbeauftragter.de
            </Link>
            .
          </Text>
        </div>
      </div>
      <PageBrand className="mt-16 sm:mt-24" color="turquoise" />
    </Frame>
  </Page>
)

Privacy.propTypes = {
  router: PropTypes.object,
}

export default withRouter(Privacy)
