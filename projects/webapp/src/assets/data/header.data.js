/* eslint-disable react/display-name */
import { SVGNusszopfLogoBig } from '../logos'

export default {
  logo: {
    title: '<3 Nusszopf',
    ariaLabel: 'Nusszopf',
    component: props => <SVGNusszopfLogoBig {...props} />,
  },
  title: <>Netzwerk für gemeinsame Ideen und Projekte</>,
  subtitle: (
    <>
      Hast Du auch ständig tolle Ideen, die Du verwirklichen möchtest? Hier findest Du die perfekten Zutaten für zopfige
      Ideenumsetzungen!
    </>
  ),
  info: [
    <>Wir sind am Kneten: Der Nusszopf wird grundlegend überarbeitet!</>,
    <>
      Hier findet ihr aktuell den veralteten ersten Prototyp des Netzwerks. Wie bei jedem guten Hefeteig üblich, haben
      wir den Nusszopf ein wenig ruhen lassen und sind jetzt mit einem Testrezept für eine neue Nusszopfversion zurück –
      "Nusszopf für Communities":
    </>,
    [
      'Den aktuellen Nusszopf sorgfältig mit Open Source Prinzipien zu einem offenen, mitgestaltbaren und dezentralen Konzept vermengen.',
      'Das Konzept mit einer bereits bestehenden Community testen und nach deren Bedarfen verfeinern.',
      'Testzopf backen. Genau analysieren und gegebenenfalls das Rezept anpassen.',
      'Nach erfolgreicher Verköstigung: Rezept veröffentlichen und alle können den Nusszopf nach eigenem Geschmack und Bedarf nachbacken!',
    ],
    <>
      Wie das alles funktionieren kann? Unsere Vision ist, ein öffentlich zugängliches und benutzbares Softwarepaket vom
      Nusszopf zu schnüren. Communities können so ein eigenes schwarzes Brett à la Nusszopf auf ihren Webseiten
      veröffentlichen und dessen Funktionen ganz für sich anpassen. So pflegt das Nusszopf Netzwerk das Softwarepaket
      und entwickelt es bedürfnisorientiert weiter.
    </>,
  ],
}
