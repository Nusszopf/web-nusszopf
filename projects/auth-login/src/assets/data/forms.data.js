export default {
  changePassword: {
    title: 'Passwort vergessen',
    description: 'Wir senden dir einen Link zu, mit dem Du ein neues Passwort erstellen kannst.',
    fields: {
      email: {
        aria: 'E-Mail-Adresse',
        placeholder: 'E-Mail-Adresse',
        validation: ['Bitte gib eine valide E-Mail-Adresse ein', 'Bitte gib eine E-Mail-Adresse ein'],
      },
    },
    actions: {
      send: 'Senden',
      cancel: 'Abbrechen',
    },
  },
  login: {
    actions: {
      login: 'Einloggen',
      forgot: 'Passwort vergessen',
    },
    seperator: 'Oder einloggen mit',
    fields: {
      emailOrName: {
        aria: 'E-Mail-Adresse / Name',
        placeholder: 'E-Mail-Adresse / Name',
        validation: ['Bitte gib deinen Name oder deine E-Mail-Adresse ein'],
      },
      password: {
        aria: 'Passwort',
        placeholder: 'Passwort',
        validation: ['Bitte gib ein Passwort ein'],
      },
    },
  },
  signup: {
    action: 'Registrieren',
    fields: {
      username: {
        aria: 'Name',
        placeholder: 'Name',
        validation: ['Keine Leerzeichen', 'Maximal 15 Zeichen', 'Gib einen Namen ein'],
      },
      email: {
        aria: 'E-Mail-Adresse',
        placeholder: 'E-Mail-Adresse',
        validation: ['Keine valide E-Mail-Adresse', 'Gib eine E-Mail-Adresse ein'],
      },
      password: {
        aria: 'Passwort',
        placeholder: 'Passwort',
        validation: [
          'Mindestens 8 Zeichen',
          'Mindestens ein Kleinbuchstabe',
          'Mindestens ein Großbuchstabe',
          'Mindestens eine Ziffer',
          'Mindestens ein Sonderzeichen (!@#$%^&*)',
          'Gib´ ein Passwort ein',
        ],
      },
      privacy: {
        aria: 'Datenschutzerklärung',
        validation: ['Bitte bestätigen'],
        link: {
          label: ['Ich stimme den', 'Datenschutzbedingungen', 'zu'],
          meta: 'Zum Datenschutz',
        },
      },
      newsletter: {
        aria: 'Nussigen Newsletter abon­nie­ren',
        label: 'Nussigen Newsletter abon­nie­ren',
      },
    },
  },
}
