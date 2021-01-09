export default {
  subscribe: {
    heading: 'Nussiger Newsletter',
    description: (
      <>
        Wir versorgen euch mit backfrischen Nusszopf&shy;neuigkeiten, inspirierenden Projekten und allem, was uns sonst
        noch so einfällt.
      </>
    ),
    contact: {
      text: 'Füge den Nusszopf zu deinen Kontakten hinzu, damit unsere E-Mails dich sicher erreichen',
      link: {
        text: 'Kontakt speichern',
        meta: 'Nusszopf als Kontakt speichern',
        href: '/contact/nusszopf-vcard.vcf',
      },
    },
    name: {
      meta: 'Name',
      errorMessages: ['Maximal 50 Zeichen', 'Gib einen Namen ein'],
    },
    email: {
      meta: 'E-Mail-Adresse',
      errorMessages: ['Keine valide E-Mail-Adresse', 'Gib eine E-Mail-Adresse ein'],
    },
    privacy: {
      meta: 'Bestätigung der Datenschutzerklärung',
      errorMessages: ['Stimme den Datenschutzbestimmungen zu'],
      label: {
        text: ['Ich stimme den', 'Datenschutzbestimmungen', 'zu'],
        meta: 'Zum Datenschutz',
      },
    },
    notify: {
      loading: 'Deine Anmeldung wird bearbeitet.',
      error: 'Sorry, es ist ein Fehler aufgetreten. Bitte versuche es erneut oder melde dich bei mail@nusszopf.org.',
      success: 'E-Mail verschickt! Bitte bestätige deine Anmeldung.',
    },
  },
  subscribeConfirm: {
    heading: 'Juhuu! Nussige News!',
    textA: 'wurde zum Newsletter angemeldet.',
    textB: 'Schön, dass Du mit dabei bist!',
    logo: 'Zum Nusszopf',
    action: {
      meta: 'Zum Nusszopf',
      text: 'Zum Nusszopf',
    },
  },
  unsubscribe: {
    heading: <>Newsletter&shy;abmeldung</>,
    description: <>Bitte trage die E-Mail-Adresse ein, die Du abmelden möchtest:</>,
    logo: 'Zum Nusszopf',
    email: {
      meta: 'E-Mail-Adresse',
      errorMessages: ['Keine valide E-Mail-Adresse.', 'Gib eine E-Mail-Adresse ein.'],
    },
    notify: {
      loading: 'Deine Abmeldung wird bearbeitet.',
      error: 'Sorry, es ist ein Fehler aufgetreten. Bitte versuche es erneut oder melde dich bei mail@nusszopf.org.',
      success: 'E-Mail verschickt! Bitte bestätige deine Abmeldung.',
    },
  },
  unsubscribeConfirm: {
    heading: 'Schade Marmelade',
    textA: 'wurde vom Newsletter abgemeldet.',
    textB: 'Wir freuen uns über dein Feedback was wir am Newsletter verbessern können.',
    logo: 'Zum Nusszopf',
    action: {
      meta: 'E-Mail an Nusszopf schreiben',
      href: 'mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback',
      text: 'Feedback senden',
    },
  },
}
