/* eslint-disable react/display-name */
import { SVGDDCLogo } from '../logos'

export default {
  heading: (
    <>
      WAS IST GUT – Wettbewerb<br className="hidden sm:inline"></br> für weltverbesserndes Design
    </>
  ),

  description: (
    <>
      Auch ein Nusszopf muss seine Brötchen verdienen: Um den Nusszopf dauerhaft umsetzen zu können, haben wir das
      Projekt bei einem Wettbewerb des Deutschen Designer Clubs eingereicht. Neuig&shy;keiten gibt es im Frühjahr 2021,
      drückt die Daumen!
    </>
  ),
  infoText: 'Mehr Informationen:',
  infoLink: {
    text: 'ddc.de/was-ist-gut',
    href: 'https://www.ddc.de/de/wettbewerb/was-ist-gut/index.php',
    meta: 'Zum WAS IST GUT Wettbewerb',
  },
  host: {
    href: 'https://www.ddc.de/index.php',
    meta: 'Zum Deutschen Designer Club',
    logo: props => <SVGDDCLogo {...props} />,
  },
}
