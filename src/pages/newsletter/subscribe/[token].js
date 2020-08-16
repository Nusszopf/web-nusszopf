import PropTypes from 'prop-types'
import Link from 'next/link'
import { ArrowLeft } from 'react-feather'
import { Page } from '../../../containers'

const SubscribeConfirm = ({ lead }) => {
  // TODO: ui design
  return (
    <Page>
      <div className="h-full px-4 bg-blue-400">
        <div className="sm:flex sm:flex-col sm:justify-center sm:h-full lg:container sm:mx-auto sm:max-w-xl ">
          <img
            className="self-center w-3/5 pt-12 mx-auto mb-10 sm:w-64 sm:mb-20"
            src="/images/logos/nusszopf-big-yellow.png"
            alt="nusszopf"
            title="<3 Nusszopf"
            aria-label="Nusszopf"
          />
          <h1 className="mb-4 text-3xl font-semibold leading-tight text-yellow-300">Juhuu! Geschafft!</h1>
          <p className="text-xl font-medium leading-snug text-yellow-300">
            <span className="font-bold underline ">{lead.email}</span> wurde erfolgreich bei uns hinterlegt. Du bekommst
            jetzt von uns mindestens einmal pro Monat ein Update zum Nusszopf-Projekt.
          </p>
          <p className="mt-4 text-xl italic font-medium leading-snug text-yellow-300">Danke!</p>
          <p className="text-xl italic font-medium leading-snug text-yellow-300">Nusszopf</p>
          <div>
            <Link href="/">
              <a className="inline-block w-full px-5 py-4 mt-12 mb-20 text-lg font-bold text-blue-400 transition-shadow duration-150 ease-in-out bg-blue-200 rounded-full outline-none sm:mb-0 sm:mt-20 sm:px-8 sm:w-auto hover:shadow-outline:blue-200 focus:outline-none focus:shadow-outline:blue-200">
                <span className="flex items-center justify-center -ml-1">
                  <ArrowLeft strokeWidth="3" className="mr-2" />
                  Zur Startseite
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

SubscribeConfirm.propTypes = {
  lead: PropTypes.objectOf({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
}

export default SubscribeConfirm

export const getServerSideProps = async ctx => {
  const { token } = ctx.query
  let lead
  try {
    const response = await fetch(`${process.env.DOMAIN}/api/newsletter/subscribe-confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
    if (response.ok) {
      lead = await response.json()
      return { props: { lead } }
    } else {
      // TODO: logError(`newsletter-subscribe-confirm: ${my-response-message}`)
      return { props: { lead: { email: 'finn@nuss.de', name: 'Finn' } } }
      // ctx.res.writeHead(302, { Location: '/404' })
      // ctx.res.end()
    }
  } catch (error) {
    // TODO: logError(`newsletter-subscribe-confirm: ${error.message}`)
    return { props: { lead: { email: 'finn@nuss.de', name: 'Finn' } } }
    // ctx.res.writeHead(302, { Location: '/404' })
    // ctx.res.end()
  }
}
