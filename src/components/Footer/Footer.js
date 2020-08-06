import Link from 'next/link'
import SVG from 'react-inlinesvg'

const Footer = () => (
  <footer className="h-40 px-4 pt-10 pb-4 bg-turquoise-700">
    <div className="h-full xl:container xl:mx-auto">
      <div className="flex flex-col h-full">
        <div className="flex justify-center">
          <Link href="/legalNotice">
            <a className="mr-8 text-lg underline text-turquoise-400">Impressum</a>
          </Link>
          <Link href="/privacy">
            <a className="text-lg underline text-turquoise-400">Datenschutz</a>
          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/">
            <a title="<3 Nusszopf" aria-label="nusszopf">
              <SVG className="w-6 mr-6" src="/images/logos/nusszopf-logo-small.svg" />
            </a>
          </Link>
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
)

export default Footer
