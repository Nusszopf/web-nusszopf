import SVG from 'react-inlinesvg'
import { Page, NewsletterSection } from '../containers'
import { Button, Link, Text, LINK_TYPES, TEXT_TYPE, LINK_TEXT_COLORS, BTN_COLORS } from '../stories/atoms'
import { Frame } from '../stories/templates'

const Index = () => {
  const scrollIntoView = id => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Page>
      <Frame as="header" className="bg-white">
        <div className="flex flex-col pt-12 pb-12 sm:pt-20 lg-12 sm:pb-20 lg:pt-24 lg:flex-row">
          <div className="lg:w-1/2">
            <SVG
              className="w-3/4 mx-auto lg:w-full lg:pr-8"
              src="/images/logos/nusszopf-big.svg"
              title="<3 Nusszopf"
              aria-label="Nusszopf"
            />
          </div>
          <div className="mt-8 sm:mt-16 lg:mt-0 lg:pl-8 lg:w-1/2">
            <Text as="h1" type={TEXT_TYPE.titleLg} className="max-w-md text-gray-600">
              Netzwerk für gemeinsame Ideen und Projekte
            </Text>
            <Text as="h2" type={TEXT_TYPE.subtitleLg} className="max-w-lg mt-5 text-gray-600">
              Hast Du auch ständig tolle Ideen, die Du verwirklichen möchtest? Der Nusszopf hilft: Hier findest Du die
              perfekten Zutaten für zopfige Ideenumsetzungen!
            </Text>
            <Button
              onClick={() => scrollIntoView('bmbf')}
              label="Für den Nusszopf abstimmen"
              className="mt-8 sm:mt-12"
            />
          </div>
        </div>
      </Frame>
      <Frame className="py-12 text-yellow-700 bg-yellow-400">
        {/* <Text as="h3" type={TEXT_TYPE.titleSm}>
          Der Nusszopf wird gerade noch fertig geknetet.{' '} 
        </Text>
        <Button onClick={() => scrollIntoView('newsletter')} label="Nusszopf Neuigkeiten" className="mt-8 sm:mt-12" /> */}
        <Text type={TEXT_TYPE.titleSm}>
          Bald kannst Du dich anmelden, Ideen teilen, Mitstreiter:innen und Ressourcen finden und wirst bei deinen Ideen
          analog und digital unterstützt.
        </Text>
      </Frame>
      <Frame className="py-12 text-pink-600 bg-turquoise-400">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-4">
          Nusszopf Erfolgsrezept für Ideen und Projekte
        </Text>
        <div className="flex flex-wrap mt-3">
          <div className="mb-8 sm:pr-4 lg:pr-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Passende Mitstreiter:innen
            </Text>
            <Text className="hyphens-auto">Finde genau die richtigen Nusszopfer:innen für dein Projekt!</Text>
          </div>
          <div className="mb-8 sm:pl-4 lg:pl-3 lg:pr-3 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Ressourcenvielfalt
            </Text>
            <Text>Teile deine Ressourcen mit anderen und andere teilen ihre Ressourcen mit dir!</Text>
          </div>
          <div className="mb-8 sm:pr-4 lg:pr-0 lg:pl-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Wissen, Erfahrungen, Lernen
            </Text>
            <Text className="hyphens-auto">Tausche dich mit anderen Nusszopfer:innen aus!</Text>
          </div>
          <div className="mb-8 sm:pl-4 lg:mb-0 lg:pl-0 lg:pr-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Tolle Projekte
            </Text>
            <Text>Mach´ bei spannenden Projekten mit!</Text>
          </div>
          <div className="mb-8 sm:mb-0 sm:pr-4 lg:pr-3 lg:pl-3 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gemeinschaft
            </Text>
            <Text>Werde Teil einer bunten und kreativen Kultur des Miteinanders!</Text>
          </div>
          <div className="sm:pl-4 lg:pl-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gegenseitige Inspiration
            </Text>
            <Text>Inspiriere dich und andere zu neuen Ideen, Sichtweisen und Lösungen!</Text>
          </div>
        </div>
      </Frame>
      <Frame id="bmbf" className="py-12 text-yellow-100 bg-red-400">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-6">
          Gesellschaft der Ideen – Wettbewerb für Soziale Innovationen
        </Text>
        <div className="sm:flex sm:justify-between">
          <div className="sm:w-2/3 lg:w-1/2">
            <Text className="sm:mr-10 lg:mr-0">
              Auch ein Nusszopf muss seine Brötchen verdienen: Um den Nusszopf dauerhaft umsetzen zu können, haben wir
              das Projekt bei einem Wettbewerb des Bundesministeriums für Bildung und Forschung eingereicht. Neuigkeiten
              gibt es ab Herbst 2020, drückt die Daumen! Mehr Informationen:{' '}
              <Link
                href="https://www.gesellschaft-der-ideen.de/"
                title="Zum Gesellschaft der Ideen Wettbewerb"
                color={LINK_TEXT_COLORS.yellow100yellow200}
                ariaLabel="Zum Gesellschaft der Ideen Wettbewerb">
                gesellschaft-der-ideen.de
              </Link>
              .
            </Text>
          </div>
          <div className="sm:w-1/3 lg:w-1/2">
            <Link
              type={LINK_TYPES.svg}
              href="https://www.bmbf.de/"
              title="Zum Bundesministerium für Bildung und Forschung"
              ariaLabel="Zum Bundesministerium für Bildung und Forschung"
              className="block w-48 mx-auto mt-12 sm:mt-0 sm:mx-0 sm:ml-auto lg:w-64 lg:mx-auto">
              <SVG src="/images/logos/bmbf-logo.svg" />
            </Link>
          </div>
        </div>
      </Frame>
      <Frame className="py-12 text-blue-700 bg-pink-400">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-6">
          Zopfstarke Mitstreiter:innen
        </Text>
        <div className="flex flex-wrap items-center mb-6 -ml-4">
          <Link type={LINK_TYPES.svg} href="https://www.sanity.io/" title="Zu Sanity" ariaLabel="Zu Sanity">
            <SVG className="w-32 p-4" src="/images/logos/sanity-logo.svg" />
          </Link>
          <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu Vercel">
            <SVG className="w-32 p-4" src="/images/logos/vercel-logo.svg" />
          </Link>
          <Link type={LINK_TYPES.svg} href="https://auth0.com/" title="Zu Auth0" ariaLabel="Zu Auth0">
            <SVG className="w-32 p-4" src="/images/logos/auth0-logo.svg" />
          </Link>
          <Link type={LINK_TYPES.svg} href="https://www.algolia.com/" title="Zu Algolia" ariaLabel="Zu Algolia">
            <SVG className="w-32 p-4" src="/images/logos/algolia-logo.svg" />
          </Link>
        </div>
        <div className="flex flex-wrap mb-12 lg:mb-8">
          <div className="mb-8 lg:mb-0 lg:pr-6 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Werde Sponsor:in!
            </Text>

            <Text>
              Der Nusszopf ist ein Non-Profit- Herzensprojekt: Unterstütze ihn, damit er dich unterstützen kann!
            </Text>
          </div>
          <div className="mb-8 lg:pl-3 lg:mb-0 lg:pr-3 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Werde Partner:in!
            </Text>
            <Text>
              Gemeinsam können wir alles schaffen. Zusammen mit passenden Vereinen, Unternehmen und anderen
              Organisationen wollen wir ein Partner:innennetzwerk aufbauen.
            </Text>
          </div>
          <div className=" lg:pl-6 lg:mb-0 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gib´ uns Feedback!
            </Text>
            <Text>
              Teile deine Gedanken, Ideen und Wünsche mit uns, damit wir den Nusszopf immer weiter verbessern und an
              deine Bedürfnisse anpassen können.
            </Text>
          </div>
        </div>
        <Link
          type={LINK_TYPES.button}
          color={BTN_COLORS.pink400blue700}
          title="E-Mail an Nusszopf schreiben"
          ariaLabel="E-Mail an Nusszopf schreiben"
          href="mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback">
          Kontakt aufnehmen
        </Link>
      </Frame>
      <NewsletterSection />
    </Page>
  )
}

export default Index
