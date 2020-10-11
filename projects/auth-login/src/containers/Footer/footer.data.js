/* eslint-disable react/display-name */
import { SVGPoweredByVercel } from '../../assets/images'

export default {
  home: {
    href: 'https://nusszopf.org',
    meta: 'Zum Nusszopf',
  },
  brand: {
    href: 'https://vercel.com?utm_source=nusszopf&utm_campaign=oss',
    meta: 'Zu Vercel',
    logo: props => <SVGPoweredByVercel {...props} />,
  },
}
