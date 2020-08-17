import SVG from 'react-inlinesvg'
import { Page, NewsletterSection } from '../containers'
import { Button, Link, Text, LINK_TYPES, TEXT_TYPE, LINK_TEXT_COLORS, BTN_COLORS } from '../stories/atoms'

const Index = () => {
  const scrollIntoView = id => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Page>
      <header className="px-6 bg-white sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
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
                Mit dem Nusszopf findest du Mitstreiter:innen und Projekte, teilst Ressourcen, Wissen und vieles mehr,
                um mehr Ideen und Projekte zu verwirklichen.
              </Text>
              <Button
                onClick={() => scrollIntoView('newsletter')}
                label="Zu den Nusszopfnews"
                className="mt-8 sm:mt-12"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="px-6 py-12 text-yellow-700 bg-yellow-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <Text type={TEXT_TYPE.titleSm}>
            Der Nusszopf ist derzeit im Aufbau und zukünfig ein digitales und analoges Netzwerk, was dich bei deinen
            Ideen und Projekten unterstützen soll.
          </Text>
        </div>
      </div>
      <div className="px-6 py-12 text-pink-600 bg-turquoise-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-4">
            Deine Benefits
          </Text>
          <div className="flex flex-wrap mt-3">
            <div className="mb-8 sm:pr-4 lg:pr-6 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Mitstreiter:innen
              </Text>
              <Text className="hyphens-auto">Suche und finde Mitstreitern:innen für deine Ideen und Projekte.</Text>
            </div>
            <div className="mb-8 sm:pl-4 lg:pl-3 lg:pr-3 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Ressourcen
              </Text>
              <Text>Finde und teile benötigte Ressourcen mit dem Nusszopf-Netzwerk.</Text>
            </div>
            <div className="mb-8 sm:pr-4 lg:pr-0 lg:pl-6 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Wissen und Erfahrungen
              </Text>
              <Text className="hyphens-auto">
                Tausche dich zu guten Tips, Wissen und Erfahrungen mit anderen Nusszöpfen aus.
              </Text>
            </div>
            <div className="mb-8 sm:pl-4 lg:mb-0 lg:pl-0 lg:pr-6 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Tolle Projekte
              </Text>
              <Text>Mache bei spannenden Projekten mit.</Text>
            </div>
            <div className="mb-8 sm:mb-0 sm:pr-4 lg:pr-3 lg:pl-3 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Gesellschaft
              </Text>
              <Text>Werde Teil einer bunten, kreativen Kultur des Miteinanders.</Text>
            </div>
            <div className="sm:pl-4 lg:pl-6 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Spaß und Freude
              </Text>
              <Text>Inspiriere und unterstütze dich und andere.</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-12 text-yellow-100 bg-red-400 sm:px-16">
        <div className=" lg:container sm:max-w-xl sm:mx-auto">
          <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-6">
            Gesellschaft der Ideen
          </Text>
          <div className="sm:flex sm:justify-between">
            <div className="sm:w-2/3 lg:w-1/2">
              <Text className="sm:mr-10 lg:mr-0">
                Wir wollen mit Euch zur Gesellschaft der Ideen werden und machen deshalb beim Ideen&shy;wettbewerb für
                soziale Inovationen vom BMBF mit. Ab Herbst 2020 kommen die besten Ideen in die Entscheidungsrunde.
                Drückt uns die Daumen! Mehr Informationen zum Wettbewerb findet ihr unter der{' '}
                <Link
                  href="https://www.gesellschaft-der-ideen.de/"
                  title="Zum Gesellschaft der Ideen Wettbewerb"
                  color={LINK_TEXT_COLORS.yellow100yellow200}
                  ariaLabel="Zum Gesellschaft der Ideen Wettbewerb">
                  öffenlichen Webseite
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
        </div>
      </div>
      <div className="px-6 py-12 text-blue-700 bg-pink-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-6">
            Nusszopf Mitstreiter:innen
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
              <h4 className="text-xl font-bold">Partner:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Meldet euch bitte per E-Mail bei uns, falls Du oder dein Unter&shy;nehmen uns und unser Projekt
                unterstützen wollt.
              </p>
            </div>
            <div className="mb-8 lg:pl-3 lg:mb-0 lg:pr-3 lg:w-1/3">
              <h4 className="text-xl font-bold">Sponsor:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Wir möchten ein Partner&shy;schafts&shy;netzwerk aufbauen und suchen aktuell Partner:innen. Falls du
                oder dein Unter&shy;nehmen interessiert seid, sind wir gespannt von dir per E-Mail zu hören.
              </p>
            </div>
            <div className=" lg:pl-6 lg:mb-0 lg:w-1/3">
              <h4 className="text-xl font-bold">Feedback</h4>
              <p className="text-xl font-medium leading-snug">
                Um den Nusszopf stätig verbessern zu können, freuen wir uns, wenn du deine Gedanken, Ideen und Wünsche
                zum Nusszopf mit uns teilst.
              </p>
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
        </div>
      </div>
      <NewsletterSection />
    </Page>
  )
}

export default Index
