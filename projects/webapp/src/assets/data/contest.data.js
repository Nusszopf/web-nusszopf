/* eslint-disable react/display-name */
import { SVGAZLogo } from '../logos'

export default {
  heading: <>Augsburger Zukunftspreis 2021</>,
  description: (
    <>
      Auch ein Nusszopf muss seine Brötchen verdienen: Wir haben das Projekt bei dem Augsburger Zukunftspreis 2021
      eingereicht. Die Preisverleihung findet statt am Montag, den 16.05.22, wir sind fest am Daumen drücken!
    </>
  ),
  infoText: 'Mehr Informationen:',
  infoLink: {
    text: 'augsburg.de/zukunftspreis',
    href: 'https://www.nachhaltigkeit.augsburg.de/zukunftspreis',
    meta: 'Augsburger Zukunftspreis 2021',
  },
  host: {
    href: 'https://www.nachhaltigkeit.augsburg.de/zukunftspreis',
    meta: 'Zum Augsburger Zukunftspreis',
    logo: props => <SVGAZLogo {...props} />,
  },
}
