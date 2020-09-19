/* eslint-disable react/display-name */
import { SVGAlgoliaLogo, SVGAuth0Logo, SVGSanityLogo, SVGVercelLogo } from '../logos'

export default {
  heading: 'Zopfstarke Mitstreiter:innen',
  list: [
    {
      href: 'https://www.sanity.io/',
      meta: 'Zu Sanity',
      logo: props => <SVGSanityLogo {...props} />,
    },
    {
      href: 'https://vercel.com?utm_source=nusszopf&utm_campaign=oss',
      meta: 'Zu Vercel',
      logo: props => <SVGVercelLogo {...props} />,
    },
    {
      href: 'https://auth0.com/',
      meta: 'Zu Auth0',
      logo: props => <SVGAuth0Logo {...props} />,
    },
    {
      href: 'https://www.algolia.com/',
      meta: 'Zu Algolia',
      logo: props => <SVGAlgoliaLogo {...props} />,
    },
  ],
  options: [
    {
      title: 'Werde Sponsor:in!',
      description: 'Der Nusszopf ist ein Non-Profit-Herzensprojekt: Unterstütze ihn, damit er dich unterstützen kann!',
    },
    {
      title: 'Werde Partner:in!',
      description: (
        <>
          Zusammen mit passenden Vereinen, Unternehmen und anderen Organi&shy;sationen wollen wir ein
          Partner:innen&shy;netzwerk aufbauen.
        </>
      ),
    },
    {
      title: 'Gib´ uns Feedback!',
      description: (
        <>
          Teile deine Ideen und Wünsche mit uns, damit wir den Nusszopf weiter verbessern und an deine Bedürfnisse
          anpassen können.
        </>
      ),
    },
  ],
  action: {
    text: 'Mitstreiter:in werden',
    href: 'mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback',
    meta: 'E-Mail an Nusszopf schreiben',
  },
}
