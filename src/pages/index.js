import { Page, NewsletterSection } from '../containers'
import { Button, Link, Text, LINK_TYPES, TEXT_TYPE, LINK_TEXT_COLORS, BTN_COLORS } from '../stories/atoms'
import { Frame } from '../stories/templates'
import { SVGNusszopfLogoBig, SVGBmbfLogo, SVGAlgoliaLogo, SVGAuth0Logo, SVGVercelLogo, SVGSanityLogo } from '../assets'

const Index = () => {
  const scrollIntoView = id => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Page>
      <Frame as="header" className="bg-white">
        <div className="flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-20 lg:flex-row xl:pt-32 xl:pb-32">
          <div className="lg:w-1/2 lg:pr-8 lg:self-center">
            <SVGNusszopfLogoBig
              className="w-3/4 mx-auto lg:w-full xl:w-4/5"
              title="<3 Nusszopf"
              aria-label="Nusszopf"
            />
          </div>
          <div className="mt-8 sm:mt-16 lg:mt-0 lg:pl-8 lg:w-1/2 xl:self-center">
            <Text as="h1" type={TEXT_TYPE.titleLg} className="max-w-md text-gray-600">
              Netzwerk für gemeinsame Ideen und Projekte
            </Text>
            <Text as="h2" type={TEXT_TYPE.textLg} className="mt-5 text-gray-600">
              Hast Du auch ständig tolle Ideen, die Du verwirklichen möchtest? Hier findest Du die perfekten Zutaten für
              zopfige Ideenumsetzungen!
            </Text>
          </div>
        </div>
      </Frame>
      <Frame className="pt-12 pb-16 text-yellow-700 bg-yellow-400 sm:pt-16 sm:pb-18">
        <div className="flex flex-col max-w-2xl mx-auto xl:max-w-3xl">
          <Text type={TEXT_TYPE.textXl}>
            Der Nusszopf wird gerade noch fertig geknetet. Bald kannst Du dich anmelden, Ideen teilen,
            Mitstreiter:in&shy;nen und Ressourcen finden und wirst bei deinen Ideen analog und digital unterstützt.
          </Text>
          <Button
            color={BTN_COLORS.yellow400yellow700}
            onClick={() => scrollIntoView('newsletter')}
            label="Nusszopf Neuigkeiten"
            className="self-center hidden mt-10 sm:mt-12"
          />
        </div>
      </Frame>
      <Frame className="pt-12 pb-16 text-pink-600 bg-turquoise-400 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
          Nusszopf Erfolgsrezept für Ideen und Projekte
        </Text>
        <div className="flex flex-wrap">
          <div className="mb-8 sm:pr-4 xl:pr-10 lg:pr-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Passende Mitstreiter:innen
            </Text>
            <Text>Finde genau die richtigen Nusszopfer:innen für dein Projekt!</Text>
          </div>
          <div className="mb-8 sm:pl-4 lg:pl-3 lg:pr-3 xl:pl-5 xl:pr-5 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Ressourcenvielfalt
            </Text>
            <Text>Teile deine Ressourcen mit anderen und andere teilen ihre Ressourcen mit dir!</Text>
          </div>
          <div className="mb-8 sm:pr-4 lg:pr-0 xl:pl-10 lg:pl-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Wissen & Erfahrungen
            </Text>
            <Text>Tausche dich mit anderen Nusszopfer:innen aus!</Text>
          </div>
          <div className="mb-8 sm:pl-4 lg:mb-0 lg:pl-0 lg:pr-6 xl:pr-10 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Tolle Projekte
            </Text>
            <Text>Mach´ bei spannenden Projekten mit!</Text>
          </div>
          <div className="mb-8 sm:mb-0 sm:pr-4 lg:pr-3 lg:pl-3 xl:pl-5 xl:pr-5 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gemeinschaft
            </Text>
            <Text>Werde Teil einer bunten und kreativen Kultur des Miteinanders!</Text>
          </div>
          <div className="sm:pl-4 lg:pl-6 xl:pl-10 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gegenseitige Inspiration
            </Text>
            <Text>Inspiriere dich und andere zu neuen Ideen, Sichtweisen und Lösungen!</Text>
          </div>
        </div>
      </Frame>
      <Frame id="bmbf" className="pt-12 pb-16 text-yellow-100 bg-red-400 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
        <div className="lg:flex">
          <div className="lg:w-2/3 xl:w-7/12">
            <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-8 xl:mb-10">
              Gesellschaft der Ideen – <br></br>Wettbewerb für Soziale Innovationen
            </Text>
            <Text className="mb-4 sm:mb-5">
              Auch ein Nusszopf muss seine Brötchen verdienen: Um den Nusszopf dauerhaft umsetzen zu können, haben wir
              das Projekt bei einem Wettbewerb des BMBF eingereicht. Neuigkeiten gibt es ab Herbst 2020, drückt die
              Daumen!
            </Text>
            <Text>
              Mehr Informationen:{' '}
              <Link
                href="https://www.gesellschaft-der-ideen.de/"
                title="Zum Gesellschaft der Ideen Wettbewerb"
                color={LINK_TEXT_COLORS.yellow100yellow200}
                ariaLabel="Zum Gesellschaft der Ideen Wettbewerb">
                gesellschaft-der-ideen.de
              </Link>
            </Text>
          </div>
          <div className="mt-16 lg:ml-4 xl:ml-0 lg:mt-4 lg:self-center lg:w-1/3 xl:w-5/12">
            <Link
              className="block w-48 mx-auto lg:w-56 xl:w-64"
              type={LINK_TYPES.svg}
              href="https://www.bmbf.de/"
              title="Zum Bundesministerium für Bildung und Forschung"
              ariaLabel="Zum Bundesministerium für Bildung und Forschung">
              <SVGBmbfLogo />
            </Link>
          </div>
        </div>
      </Frame>
      <Frame className="pt-12 pb-16 text-blue-700 bg-pink-400 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-6">
          Zopfstarke Mitstreiter:innen
        </Text>
        <div className="flex flex-wrap items-center mb-6 -ml-4">
          <Link type={LINK_TYPES.svg} href="https://www.sanity.io/" title="Zu Sanity" ariaLabel="Zu Sanity">
            <SVGSanityLogo className="w-32 p-4" />
          </Link>
          <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu Vercel">
            <SVGVercelLogo className="w-32 p-4" />
          </Link>
          <Link type={LINK_TYPES.svg} href="https://auth0.com/" title="Zu Auth0" ariaLabel="Zu Auth0">
            <SVGAuth0Logo className="w-32 p-4" />
          </Link>
          <Link type={LINK_TYPES.svg} href="https://www.algolia.com/" title="Zu Algolia" ariaLabel="Zu Algolia">
            <SVGAlgoliaLogo className="w-32 p-4" />
          </Link>
        </div>
        <div className="flex flex-wrap mb-10 sm:mb-12 xl:mb-16">
          <div className="mb-8 lg:mb-0 lg:pr-6 lg:w-1/3 xl:pr-10">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Werde Sponsor:in!
            </Text>
            <Text>
              Der Nusszopf ist ein Non-Profit-Herzensprojekt: Unterstütze ihn, damit er dich unterstützen kann!
            </Text>
          </div>
          <div className="mb-8 lg:pl-3 lg:mb-0 lg:pr-3 lg:w-1/3 xl:pr-5 xl:pl-5">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Werde Partner:in!
            </Text>
            <Text>
              Zusammen mit passenden Vereinen, Unternehmen und anderen Organi&shy;sationen wollen wir ein
              Partner:innen&shy;netzwerk aufbauen.
            </Text>
          </div>
          <div className="lg:pl-6 lg:mb-0 lg:w-1/3 xl:pl-10">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gib´ uns Feedback!
            </Text>
            <Text className="hyphens-auto">
              Teile deine Ideen und Wünsche mit uns, damit wir den Nusszopf weiter verbessern und an deine Bedürfnisse
              anpassen können.
            </Text>
          </div>
        </div>
        <div className="w-full text-center">
          <Link
            type={LINK_TYPES.button}
            color={BTN_COLORS.pink400blue700}
            title="E-Mail an Nusszopf schreiben"
            ariaLabel="E-Mail an Nusszopf schreiben"
            href="mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback">
            Mitstreiter:in werden
          </Link>
        </div>
      </Frame>
      <NewsletterSection className="hidden" />
    </Page>
  )
}

export default Index
