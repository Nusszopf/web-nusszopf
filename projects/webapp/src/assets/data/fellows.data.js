/* eslint-disable react/display-name */
import { SVGAuth0Logo, SVGSanityLogo, SVGVercelLogo, SVGLocationIQLogo } from '../logos'

export default {
  heading: 'Zopfstarke Mitstreiter:innen',
  listInfo: 'Wir werden unterstützt von:',
  list: [
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
      href: 'https://www.sanity.io/',
      meta: 'Zu Sanity',
      logo: props => <SVGSanityLogo {...props} />,
    },
    {
      href: 'https://locationiq.com/',
      meta: 'Zu LocationIQ',
      logo: props => <SVGLocationIQLogo {...props} />,
    },
  ],
  options: [
    {
      title: 'Werde Fördermitglied!',
      description: (
        <>
          Der Nusszopf ist ein Non-Profit- Herzens­projekt. Unterstütze ihn auf unserer Förderungs&shy;webseite, damit
          er dich unterstützen kann.
        </>
      ),
      action: {
        text: 'Mehr erfahren',
        href: 'https://steadyhq.com/de/nusszopf',
        meta: 'Zur Förderungswebseite',
        type: 'url',
      },
    },
    {
      title: 'Werde Partner:in!',
      description: (
        <>
          Zusammen mit passenden Vereinen, Unternehmen und anderen Organi&shy;sationen wollen wir ein
          Partner:innen&shy;netzwerk aufbauen.
        </>
      ),
      action: {
        text: 'Partner:in werden',
        href: 'mailto:mail@nusszopf.org?subject=Nussige Partnerschaft',
        meta: 'E-Mail an Nusszopf schreiben',
        type: 'mail',
      },
    },
    {
      title: 'Gib uns Feedback!',
      description: (
        <>
          Teile deine Ideen und Wünsche mit uns, damit wir den Nusszopf weiter ver&shy;bessern und an deine Bedürfnisse
          anpassen können.
        </>
      ),
      action: {
        text: 'Feedback senden',
        href: 'mailto:mail@nusszopf.org?subject=Nussiges Feedback',
        meta: 'E-Mail an Nusszopf schreiben',
        type: 'mail',
      },
    },
  ],
}
