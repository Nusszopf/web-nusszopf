import SVG from 'react-inlinesvg'
import Link from 'next/link'

const Index = () => (
  <>
    <header className="px-4 bg-white">
      <div className="xl:container xl:mx-auto">
        <div className="flex flex-col pb-12">
          <div className="xl:w-1/2">
            <img
              className="w-3/4 mx-auto mt-12 mb-8"
              src="/images/logos/logo-nusszopf-bunt.png"
              alt="nusszopf logo"
              aria-label="nusszopf logo"
            />
          </div>
          <div className="xl:w-1/2">
            <h1 className="text-3xl font-semibold leading-tight text-black">
              Netzwerk für gemeinsame Ideen und Projekte
            </h1>
            <h2 className="mt-5 text-xl font-medium text-black">
              Mit dem Nusszopf findest du Mitstreiter:innen und Projekte, teilst Ressourcen, Wissen und vieles mehr, um
              mehr Ideen und Projekte zu verwirklichen.
            </h2>
            <button className="px-5 py-3 mt-6 font-bold text-white transition-shadow duration-150 ease-in-out bg-black rounded-full outline-none hover:shadow-outline:black focus:outline-none focus:shadow-outline:black">
              Zu den Nusszopfnews
            </button>
          </div>
        </div>
      </div>
    </header>
    <div className="px-4 py-12 bg-yellow-400">
      <div className="xl:container xl:mx-auto">
        <p className="text-2xl font-bold text-yellow-700 ">
          Der Nusszopf ist derzeit im Aufbau und zukünfig ein digitales und analoges Netzwerk, was dich bei deinen Ideen
          und Projekten unterstützen soll.
        </p>
      </div>
    </div>
    <div className="px-4 py-12 bg-turquoise-400">
      <div className="xl:container xl:mx-auto">
        <h3 className="text-3xl font-bold text-pink-600">Deine Benefits</h3>
        <div className="flex flex-wrap mt-3">
          <div className="mt-4 text-pink-600 xl:w-1/3">
            <h4 className="font-bold">Mitstreiter:innen</h4>
            <p className="font-medium">Suche und finde Mitstreitern:innen für deine Ideen und Projekte.</p>
          </div>
          <div className="mt-8 text-pink-600 xl:w-1/3">
            <h4 className="font-bold">Ressourcen</h4>
            <p className="font-medium">Finde und teile benötigte Ressourcen mit dem Nusszopf-Netzwerk.</p>
          </div>
          <div className="mt-8 text-pink-600 xl:w-1/3">
            <h4 className="font-bold">Wissen und Erfahrungen</h4>
            <p className="font-medium">
              Tausche dich zu guten Tips, Wissen und Erfahrungen mit anderen Nusszöpfen aus.
            </p>
          </div>
          <div className="mt-8 text-pink-600 xl:w-1/3">
            <h4 className="font-bold">Tolle Projekte</h4>
            <p className="font-medium">Mache bei spannenden Projekten mit.</p>
          </div>
          <div className="mt-8 text-pink-600 xl:w-1/3">
            <h4 className="font-bold">Geselleschaft</h4>
            <p className="font-medium">Werde Teil einer bunten, kreativen Kultur des Miteinanders.</p>
          </div>
          <div className="mt-8 text-pink-600 xl:w-1/3">
            <h4 className="font-bold">Spaß und Freude</h4>
            <p className="font-medium">Inspiriere und unterstütze dich und andere.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-12 bg-red-400">
      <div className="xl:container xl:mx-auto">
        <h3 className="text-3xl font-bold text-yellow-100">Gesellschaft der Ideen</h3>
        <p className="mt-5 text-yellow-100">
          Wir wollen mit Euch zur Gesellschaft der Ideen werden und machen deshalb beim Ideenwettbewerb für soziale
          Inovationen vom BMBF mit. Ab Herbst 2020 kommen die besten Ideen in die Entscheidungsrunde. Drückt uns die
          Daumen! Mehr Informationen zum Wettbewerb findet ihr unter der{' '}
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
        <a
          href="https://www.bmbf.de/"
          rel="noopener noreferrer"
          target="_blank"
          title="Zum Bundesministerium für Bildung und Forschung"
          aria-label="Zum Bundesministerium für Bildung und Forschung">
          <SVG className="w-40 mx-auto mt-8" src="/images/logos/bmbf-logo.svg" />
        </a>
      </div>
    </div>
    <div className="px-4 py-12 bg-pink-400">
      <div className="xl:container xl:mx-auto">
        <h3 className="text-3xl font-bold text-blue-700">Nusszopf Mitstreiter:innen</h3>
        <div className="flex flex-wrap items-center mt-8 -ml-4">
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
          <a href="https://auth0.com/" rel="noopener noreferrer" target="_blank" title="Zu auth0" aria-label="Zu auth0">
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
        <div className="flex flex-wrap mt-6">
          <div className="mt-3 text-blue-700 xl:w-1/3">
            <h4 className="font-bold">Sponsor:innen</h4>
            <p className="font-medium">
              Meldet euch bitte per E-Mail bei uns, falls Du oder dein Unternehmen uns und unser Projekt unterstützen
              wollt.
            </p>
          </div>
          <div className="mt-8 text-blue-700 xl:w-1/3">
            <h4 className="font-bold">Partner:innen</h4>
            <p className="font-medium">
              Wir möchten ein Partnerschaftsnetzwerk aufbauen und suchen aktuell Partner:innen. Falls du oder dein
              Unternehmen interessiert seid, sind wir gespannt von dir per E-Mail zu hören.
            </p>
          </div>
          <div className="mt-8 text-blue-700 xl:w-1/3">
            <h4 className="font-bold">Feedback</h4>
            <p className="font-medium">
              Um den Nusszopf stätig verbessern zu können, freuen wir uns, wenn du deine Gedanken, Ideen und Wünsche zum
              Nusszopf mit uns teilst.
            </p>
          </div>
        </div>
        <button className="px-5 py-3 mt-6 font-bold text-pink-400 transition-shadow duration-150 ease-in-out bg-blue-700 rounded-full outline-none hover:shadow-outline:blue-700 focus:outline-none focus:shadow-outline:blue-700">
          Kontakt aufnehmen
        </button>
      </div>
    </div>
    <div id="newsletter" className="px-4 py-12 bg-blue-400">
      <div className="xl:container xl:mx-auto">
        <div>
          <h3 className="text-3xl font-bold text-yellow-200">Newsletter</h3>
          <p className="mt-4 text-xl text-yellow-200">
            Wir möchten dich mindestens einmal pro Monat zu allen relevaten Informationen und Neuigkeiten zum Nusszopf
            informieren. Durch die Anmeldung bekommst du die News von uns direkt in deinen Posteingang.
          </p>
        </div>
        <div className="mt-8">
          <input
            className="block w-full px-5 py-3 text-yellow-200 placeholder-yellow-200 transition-shadow duration-150 ease-in-out bg-blue-400 border-2 border-yellow-200 rounded-full appearance-none hover:shadow-outline:yellow-200 focus:placeholder-blue-400 focus:outline-none focus:shadow-outline:yellow-200"
            type="text"
            aria-label="text"
            placeholder="Name"
          />
          <input
            className="block w-full px-5 py-3 mt-4 text-yellow-200 placeholder-yellow-200 transition-shadow duration-150 ease-in-out bg-blue-400 border-2 border-yellow-200 rounded-full appearance-none hover:shadow-outline:yellow-200 focus:placeholder-blue-400 focus:outline-none focus:shadow-outline:yellow-200"
            type="email"
            aria-label="email"
            placeholder="E-Mail-Adresse"
          />
          <button className="px-5 py-3 mt-6 font-bold text-blue-400 transition-shadow duration-150 ease-in-out bg-yellow-200 rounded-full outline-none hover:shadow-outline:yellow-200 focus:outline-none focus:shadow-outline:yellow-200">
            Absenden
          </button>
        </div>
      </div>
    </div>
    <footer className="h-32 px-4 py-6 bg-turquoise-700">
      <div className="h-full xl:container xl:mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-center">
            <Link href="/legalNotice">
              <a className="mr-8 underline text-turquoise-400">Impressum</a>
            </Link>
            <Link href="/privacy">
              <a className="underline text-turquoise-400">Datenschutz</a>
            </Link>
          </div>
          <div className="flex justify-center mt-5">
            <SVG
              className="w-6 mr-6"
              src="/images/logos/nusszopf-logo-small.svg"
              title="<3 Nusszopf"
              aria-label="nusszopf"
            />
            <a
              href="https://vercel.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="Zu Vercel"
              aria-label="Zu vercel">
              <SVG className="w-24" src="/images/logos/powered-by-vercel-turquoise.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Index
