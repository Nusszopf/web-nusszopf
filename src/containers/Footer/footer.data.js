/* eslint-disable react/display-name */
import { SVGPoweredByVercel } from '../../assets/logos'

export default {
  nav: {
    home: 'Zum Nusszopf',
    privacy: 'Datenschutz',
    legalNotice: 'Impressum',
  },
  brand: {
    href: 'https://vercel.com?utm_source=nusszopf&utm_campaign=oss',
    meta: 'Zu Vercel',
    logo: props => <SVGPoweredByVercel {...props} />,
  },
}
