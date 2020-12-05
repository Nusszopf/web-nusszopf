export default {
  title: 'Einstellungen',
  newsletter: {
    title: 'Newsletter',
    subscribe: {
      description:
        'Wir versorgen Dich mit backfrischen Nusszopf­neuigkeiten, inspirierenden Projekten und allem, was uns sonst noch so einfällt.',
      notify: {
        loading: 'Du wirst angemeldet.',
        error: 'Sorry, da lief etwas schief.',
        success: 'Du bist jetzt angemeldet!',
      },
      field: {
        validation: 'Bitte bestätigen',
        aria: 'Datenschutzerklärung',
        label: [
          'Ich stimme den',
          {
            href: '/privacy',
            meta: 'Zum Datenschutz',
            text: 'Datenschutzbedingungen',
          },
          'zu',
        ],
      },
      action: 'Anmelden',
    },
    unsubscribe: {
      description: 'Du möchtest dich vom nussigsten Newsletter aller Zeiten abmelden?',
      confirm: 'Willst Du dich wirklich vom Newsletter abmelden?',
      notify: {
        loading: 'Du wirst abgemeldet.',
        error: 'Sorry, da lief etwas schief.',
        success: 'Du bist jetzt abgemeldet!',
      },
      action: 'Abmelden',
    },
  },
  sponsoring: {
    title: 'Fördermitgliedschaft',
    description: 'Passe deine Mitgliedschaft auf unserer Steady-Förderungswebseite an.',
    action: {
      href: 'https://steadyhq.com/de/nusszopf',
      meta: 'Zur Steady-Förderungswebseite',
      text: 'Steady öffnen',
    },
  },
  info: [
    <>Bei Fragen kannst Du dich immer unter</>,
    {
      href: 'mailto:mail@nusszopf.org',
      meta: 'E-Mail an Nusszopf senden',
      text: 'mail@nusszopf.org',
    },
    <>bei uns melden!</>,
  ],

  delete: {
    title: 'Account löschen',
    description: 'Nach dem Löschen können deine Daten nicht wieder hergestellt werden.',
    confirm: 'Willst du deinen Account wirklich löschen?',
    notify: {
      loading: 'Dein Account wird gelöscht.',
      error: 'Sorry, da lief etwas schief.',
      success: 'Dein Account wurde gelöscht!',
    },
    action: 'Account löschen',
  },
}
