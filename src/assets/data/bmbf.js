/* eslint-disable react/display-name */
import { SVGBmbfLogo } from '..'

export default {
  heading: (
    <>
      Gesellschaft der Ideen – <br></br>Wettbewerb für Soziale Innovationen
    </>
  ),

  description: (
    <>
      Auch ein Nusszopf muss seine Brötchen verdienen: Um den Nusszopf dauerhaft umsetzen zu können, haben wir das
      Projekt bei einem Wettbewerb des BMBF eingereicht. Neuigkeiten gibt es ab Herbst 2020, drückt die Daumen!
    </>
  ),
  infoText: 'Mehr Informationen:',
  infoLink: {
    text: 'gesellschaft-der-ideen.de',
    href: 'https://www.gesellschaft-der-ideen.de/',
    meta: 'Zum Gesellschaft der Ideen Wettbewerb',
  },
  host: {
    href: 'https://www.bmbf.de/',
    meta: 'Zum Bundesministerium für Bildung und Forschung',
    logo: props => <SVGBmbfLogo {...props} />,
  },
}
