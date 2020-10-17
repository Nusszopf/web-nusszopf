/* eslint-disable react/display-name */
import { SVGPoweredByVercel } from '../../assets/images'

export default {
  home: {
    href: 'https://nusszopf.org',
    meta: 'Zum Nusszopf',
  },
  sponsors: [
    {
      href: 'https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss',
      meta: 'Zu Auth0',
      logo: props => (
        <img alt="JWT Auth for open source projects" src="//cdn.auth0.com/oss/badges/a0-badge-dark.png" {...props} />
      ),
    },
    {
      href: 'https://vercel.com?utm_source=nusszopf&utm_campaign=oss',
      meta: 'Zu Vercel',
      logo: props => <SVGPoweredByVercel {...props} />,
    },
  ],
}
