import SVG from 'react-inlinesvg'
import { ArrowLeft } from 'react-feather'

import { Page, NewsletterSection } from '../containers'
import { Button, NavItem, Link, LINK_TYPES, BTN_COLORS, Text, TEXT_TYPE, NAVITEM_TYPES } from '../stories/atoms'

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
      <div className="px-6 py-12 bg-yellow-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <Text type={TEXT_TYPE.titleSm} className="text-yellow-700 ">
            Der Nusszopf ist derzeit im Aufbau und zukünfig ein digitales und analoges Netzwerk, was dich bei deinen
            Ideen und Projekten unterstützen soll.
          </Text>
        </div>
      </div>
      <div className="px-6 py-12 bg-turquoise-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-4 text-pink-600">
            Deine Benefits
          </Text>
          <div className="flex flex-wrap mt-3">
            <div className="mb-8 text-pink-600 sm:pr-4 lg:pr-6 sm:w-1/2 lg:w-1/3">
              <Text as="h4" type={TEXT_TYPE.titleSm}>
                Mitstreiter:innen
              </Text>
              <Text className="hyphens-auto">Suche und finde Mitstreitern:innen für deine Ideen und Projekte.</Text>
            </div>
            <div className="mb-8 text-pink-600 sm:pl-4 lg:pl-3 lg:pr-3 sm:w-1/2 lg:w-1/3">
              <h4 className="text-xl font-bold">Ressourcen</h4>
              <p className="text-xl font-medium leading-snug">
                Finde und teile benötigte Ressourcen mit dem Nusszopf-Netzwerk.
              </p>
            </div>
            <div className="mb-8 text-pink-600 sm:pr-4 lg:pr-0 lg:pl-6 sm:w-1/2 lg:w-1/3">
              <h4 className="text-xl font-bold">Wissen und Erfahrungen</h4>
              <p className="text-xl font-medium leading-snug hyphens-auto">
                Tausche dich zu guten Tips, Wissen und Erfahrungen mit anderen Nusszöpfen aus.
              </p>
            </div>
            <div className="mb-8 text-pink-600 sm:pl-4 lg:mb-0 lg:pl-0 lg:pr-6 sm:w-1/2 lg:w-1/3">
              <h4 className="text-xl font-bold">Tolle Projekte</h4>
              <p className="text-xl font-medium leading-snug">Mache bei spannenden Projekten mit.</p>
            </div>
            <div className="mb-8 text-pink-600 sm:mb-0 sm:pr-4 lg:pr-3 lg:pl-3 sm:w-1/2 lg:w-1/3">
              <h4 className="text-xl font-bold">Gesellschaft</h4>
              <p className="text-xl font-medium leading-snugauto">
                Werde Teil einer bunten, kreativen Kultur des Miteinanders.
              </p>
            </div>
            <div className="text-pink-600 sm:pl-4 lg:pl-6 sm:w-1/2 lg:w-1/3">
              <h4 className="text-xl font-bold">Spaß und Freude</h4>
              <p className="text-xl font-medium leading-snug">Inspiriere und unterstütze dich und andere.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-12 bg-red-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <h3 className="mb-6 text-3xl font-bold text-yellow-100">Gesellschaft der Ideen</h3>
          <div className="sm:flex sm:justify-between">
            <div className="sm:w-2/3 lg:w-1/2">
              <p className="text-xl leading-snug text-yellow-100 sm:mr-10 lg:mr-0">
                Wir wollen mit Euch zur Gesellschaft der Ideen werden und machen deshalb beim Ideen&shy;wettbewerb für
                soziale Inovationen vom BMBF mit. Ab Herbst 2020 kommen die besten Ideen in die Entscheidungsrunde.
                Drückt uns die Daumen! Mehr Informationen zum Wettbewerb findet ihr unter der{' '}
                <a
                  className="font-semibold underline"
                  href="https://www.gesellschaft-der-ideen.de/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Zum Gesellschaft der Ideen Wettbewerb"
                  aria-label="Zum Gesellschaft der Ideen Wettbewerb">
                  öffenlichen Webseite
                </a>
                .
              </p>
            </div>
            <div className="sm:w-1/3 lg:w-1/2">
              <a
                className="block w-48 mx-auto mt-12 sm:mt-0 sm:mx-0 sm:ml-auto lg:w-64 lg:mx-auto"
                href="https://www.bmbf.de/"
                rel="noopener noreferrer"
                target="_blank"
                title="Zum Bundesministerium für Bildung und Forschung"
                aria-label="Zum Bundesministerium für Bildung und Forschung">
                <SVG src="/images/logos/bmbf-logo.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-12 bg-pink-400 sm:px-16">
        <div className="lg:container sm:max-w-xl sm:mx-auto">
          <h3 className="mb-6 text-3xl font-bold text-blue-700">Nusszopf Mitstreiter:innen</h3>
          <div className="flex flex-wrap items-center mb-6 -ml-4">
            <a
              href="https://www.sanity.io/"
              rel="noopener noreferrer"
              target="_blank"
              title="Zu sanity"
              aria-label="Zu sanity">
              <SVG className="w-32 p-4" src="/images/logos/sanity-logo.svg" />
            </a>
            <a
              href="https://vercel.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="Zu vercel"
              aria-label="Zu vercel">
              <SVG className="w-32 p-4" src="/images/logos/vercel-logo.svg" />
            </a>
            <a
              href="https://auth0.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="Zu auth0"
              aria-label="Zu auth0">
              <SVG className="w-32 p-4" src="/images/logos/auth0-logo.svg" />
            </a>
            <a
              href="https://www.algolia.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="Zu algolia"
              aria-label="Zu algolia">
              <SVG className="w-32 p-4" src="/images/logos/algolia-logo.svg" />
            </a>
          </div>
          <div className="flex flex-wrap mb-12 lg:mb-8">
            <div className="mb-8 text-blue-700 lg:mb-0 lg:pr-6 lg:w-1/3">
              <h4 className="text-xl font-bold">Partner:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Meldet euch bitte per E-Mail bei uns, falls Du oder dein Unter&shy;nehmen uns und unser Projekt
                unterstützen wollt.
              </p>
            </div>
            <div className="mb-8 text-blue-700 lg:pl-3 lg:mb-0 lg:pr-3 lg:w-1/3">
              <h4 className="text-xl font-bold">Sponsor:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Wir möchten ein Partner&shy;schafts&shy;netzwerk aufbauen und suchen aktuell Partner:innen. Falls du
                oder dein Unter&shy;nehmen interessiert seid, sind wir gespannt von dir per E-Mail zu hören.
              </p>
            </div>
            <div className="text-blue-700 lg:pl-6 lg:mb-0 lg:w-1/3">
              <h4 className="text-xl font-bold">Feedback</h4>
              <p className="text-xl font-medium leading-snug">
                Um den Nusszopf stätig verbessern zu können, freuen wir uns, wenn du deine Gedanken, Ideen und Wünsche
                zum Nusszopf mit uns teilst.
              </p>
            </div>
          </div>
          <a
            href="mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback"
            className="inline-block w-full px-5 py-4 text-lg font-bold text-center text-pink-400 transition-shadow duration-150 ease-in-out bg-blue-700 rounded-full outline-none sm:px-8 sm:w-auto hover:shadow-outline:blue-700 focus:outline-none focus:shadow-outline:blue-700">
            Kontakt aufnehmen
          </a>
        </div>
      </div>
      <NewsletterSection />
    </Page>
  )
}

export default Index
