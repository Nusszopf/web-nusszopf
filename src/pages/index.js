import SVG from 'react-inlinesvg'
import Page from '../components/Page/Page'
import NewsletterSection from '../components/NewsletterSection/NewsletterSection'

const Index = () => {
  const scrollIntoView = id => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Page>
      <header className="px-4 bg-white sm:px-16">
        <div className="xl:container xl:mx-auto">
          <div className="flex flex-col pb-12">
            <div className="">
              <img
                className="w-3/4 mx-auto mt-20"
                src="/images/logos/logo-nusszopf-bunt.png"
                alt="nusszopf logo"
                aria-label="nusszopf logo"
              />
            </div>
            <div className="mt-8 sm:mt-16">
              <h1 className="max-w-md text-4xl font-semibold leading-tight text-black">
                Netzwerk für gemeinsame Ideen und Projekte
              </h1>
              <h2 className="mt-5 text-2xl font-medium text-black">
                Mit dem Nusszopf findest du Mitstreiter:innen und Projekte, teilst Ressourcen, Wissen und vieles mehr,
                um mehr Ideen und Projekte zu verwirklichen.
              </h2>
              <button
                onClick={() => scrollIntoView('newsletter')}
                className="w-full py-4 mt-8 text-lg font-bold text-white transition-shadow duration-150 ease-in-out bg-black rounded-full outline-none sm:mt-12 sm:px-8 sm:w-auto hover:shadow-outline:black focus:outline-none focus:shadow-outline:black">
                Zu den Nusszopfnews
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="px-4 py-12 bg-yellow-400 sm:px-16">
        <div className="xl:container xl:mx-auto">
          <p className="text-xl font-bold text-yellow-700 ">
            Der Nusszopf ist derzeit im Aufbau und zukünfig ein digitales und analoges Netzwerk, was dich bei deinen
            Ideen und Projekten unterstützen soll.
          </p>
        </div>
      </div>
      <div className="px-4 py-12 bg-turquoise-400 sm:px-16">
        <div className="xl:container xl:mx-auto">
          <h3 className="mb-4 text-3xl font-bold text-pink-600">Deine Benefits</h3>
          <div className="flex flex-wrap mt-3">
            <div className="mb-8 text-pink-600 sm:pr-4 sm:w-1/2 xl:w-1/3">
              <h4 className="text-xl font-bold">Mitstreiter:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Suche und finde Mitstreitern:innen für deine Ideen und Projekte.
              </p>
            </div>
            <div className="mb-8 text-pink-600 sm:pl-4 sm:w-1/2 xl:w-1/3">
              <h4 className="text-xl font-bold">Ressourcen</h4>
              <p className="text-xl font-medium leading-snug">
                Finde und teile benötigte Ressourcen mit dem Nusszopf-Netzwerk.
              </p>
            </div>
            <div className="mb-8 text-pink-600 sm:pr-4 sm:w-1/2 xl:w-1/3">
              <h4 className="text-xl font-bold">Wissen und Erfahrungen</h4>
              <p className="text-xl font-medium leading-snug">
                Tausche dich zu guten Tips, Wissen und Erfahrungen mit anderen Nusszöpfen aus.
              </p>
            </div>
            <div className="mb-8 text-pink-600 sm:pl-4 sm:w-1/2 xl:w-1/3">
              <h4 className="text-xl font-bold">Tolle Projekte</h4>
              <p className="text-xl font-medium leading-snug">Mache bei spannenden Projekten mit.</p>
            </div>
            <div className="text-pink-600 sm:pr-4 sm:w-1/2 xl:w-1/3">
              <h4 className="text-xl font-bold">Gesellschaft</h4>
              <p className="text-xl font-medium leading-snug">
                Werde Teil einer bunten, kreativen Kultur des Miteinanders.
              </p>
            </div>
            <div className="text-pink-600 sm:pl-4 sm:w-1/2 xl:w-1/3">
              <h4 className="text-xl font-bold">Spaß und Freude</h4>
              <p className="text-xl font-medium leading-snug">Inspiriere und unterstütze dich und andere.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 bg-red-400 sm:px-16">
        <div className="xl:container xl:mx-auto">
          <h3 className="text-3xl font-bold text-yellow-100">Gesellschaft der Ideen</h3>
          <div className="sm:flex sm:justify-between">
            <div className="sm:w-2/3">
              <p className="mt-5 text-xl leading-snug text-yellow-100 sm:mr-10">
                Wir wollen mit Euch zur Gesellschaft der Ideen werden und machen deshalb beim Ideenwettbewerb für
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
            <div className="sm:w-1/3 sm:self-center">
              <a
                href="https://www.bmbf.de/"
                rel="noopener noreferrer"
                target="_blank"
                title="Zum Bundesministerium für Bildung und Forschung"
                aria-label="Zum Bundesministerium für Bildung und Forschung">
                <SVG className="w-48 mx-auto mt-12 sm:mt-0 sm:mx-0 sm:ml-auto" src="/images/logos/bmbf-logo.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 bg-pink-400 sm:px-16">
        <div className="xl:container xl:mx-auto">
          <h3 className="mb-8 text-3xl font-bold text-blue-700">Nusszopf Mitstreiter:innen</h3>
          <div className="flex flex-wrap mb-10 sm:mb-0">
            <div className="mb-8 text-blue-700 sm:pr-4 sm:w-1/2 sm:order-1">
              <h4 className="text-xl font-bold">Sponsor:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Meldet euch bitte per E-Mail bei uns, falls Du oder dein Unternehmen uns und unser Projekt unterstützen
                wollt.
              </p>
            </div>
            <div className="mb-8 text-blue-700 sm:pr-4 sm:mb-12 sm:w-1/2 sm:order-3">
              <h4 className="text-xl font-bold">Partner:innen</h4>
              <p className="text-xl font-medium leading-snug">
                Wir möchten ein Partnerschaftsnetzwerk aufbauen und suchen aktuell Partner:innen. Falls du oder dein
                Unternehmen interessiert seid, sind wir gespannt von dir per E-Mail zu hören.
              </p>
            </div>
            <div className="text-blue-700 sm:mb-8 sm:pl-4 sm:w-1/2 sm:order-2">
              <h4 className="text-xl font-bold">Feedback</h4>
              <p className="text-xl font-medium leading-snug">
                Um den Nusszopf stätig verbessern zu können, freuen wir uns, wenn du deine Gedanken, Ideen und Wünsche
                zum Nusszopf mit uns teilst.
              </p>
            </div>
          </div>
          <a
            href="mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback"
            className="inline-block w-full px-5 py-4 mb-10 text-lg font-bold text-center text-pink-400 transition-shadow duration-150 ease-in-out bg-blue-700 rounded-full outline-none sm:px-8 sm:w-auto hover:shadow-outline:blue-700 focus:outline-none focus:shadow-outline:blue-700">
            Kontakt aufnehmen
          </a>
          <div className="flex flex-wrap items-center justify-center -ml-4">
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
        </div>
      </div>
      <NewsletterSection />
    </Page>
  )
}

export default Index
