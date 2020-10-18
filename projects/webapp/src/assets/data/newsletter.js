export default {
  subscribe: {
    heading: 'Nussiger Newsletter',
    description: (
      <>
        Wir versorgen euch mit backfrischen Nusszopf&shy;neuigkeiten, inspirierenden Projekten und allem, was uns sonst
        noch so einfällt.
      </>
    ),
    name: {
      meta: 'Name',
      errorMessages: ['Der Name sollte nicht länger als 50 Zeichen sein', 'Bitte trage einen Namen ein.'],
    },
    email: {
      meta: 'E-Mail-Adresse',
      errorMessages: ['Bitte trage eine valide E-Mail-Adresse ein.', 'Bitte trage eine E-Mail-Adresse ein.'],
    },
    privacy: {
      meta: 'Bestätigung der Datenschutzerklärung',
      errorMessages: ['Bitte bestätige die Datenschutzerklärung.'],
      label: {
        textA: 'Bestätigung der',
        textB: 'Datenschutzerklärung',
        meta: 'Zum Datenschutz',
      },
    },
    alerts: {
      loading: 'Deine Anmeldung wird bearbeitet.',
      error: 'Sorry, es ist ein Fehler aufgetreten. Bitte versuche es nochmal oder melde dich bei mail@nusszopf.org.',
      success: 'E-Mail verschickt! Bitte bestätige deine Anmeldung.',
    },
  },
  subscribeConfirm: {
    heading: 'Juhuu! Nussige News!',
    textA: 'wurde zum Newsletter angemeldet.',
    textB: 'Schön, dass Du mit dabei bist!',
    logo: 'Zum Nusszopf',
  },
  unsubscribe: {
    heading: <>Newsletter&shy;abmeldung</>,
    description: <>Bitte trage die E-Mail-Adresse ein, die Du abmelden möchtest:</>,
    logo: 'Zum Nusszopf',
    email: {
      meta: 'E-Mail-Adresse',
      errorMessages: ['Bitte trage eine valide E-Mail-Adresse ein.', 'Bitte trage eine E-Mail-Adresse ein.'],
    },
    alerts: {
      loading: 'Deine Abmeldung wird bearbeitet.',
      error: 'Sorry, es ist ein Fehler aufgetreten. Bitte versuche es nochmal oder melde dich bei mail@nusszopf.org.',
      success: 'E-Mail verschickt! Bitte bestätige deine Abmeldung.',
    },
  },
  unsubscribeConfirm: {
    heading: 'Schade Marmelade',
    textA: 'wurde vom Newsletter abgemeldet.',
    textB: 'Wir freuen uns über dein Feedback!',
    logo: 'Zum Nusszopf',
    action: {
      meta: 'E-Mail an Nusszopf schreiben',
      href: 'mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback',
      text: 'Feedback senden',
    },
  },
}
