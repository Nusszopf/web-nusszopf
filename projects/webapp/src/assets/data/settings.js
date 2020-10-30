export default {
  title: 'Einstellungen',
  newsletter: {
    title: 'Newsletter',
    subscribe: {
      description:
        'Wir versorgen Dich mit backfrischen Nusszopf­neuigkeiten, inspirierenden Projekten und allem, was uns sonst noch so einfällt.',
      privacy: [
        <>Bestätigung der</>,
        {
          href: '/privacy',
          meta: 'Zum Datenschutz',
          text: 'Datenschutzerklärung',
        },
      ],
      action: 'Anmelden',
    },
    unsubscribe: {
      description: 'Du möchtest dich vom nussigsten Newsletter aller Zeiten abmelden?',
      confirm: 'Willst du dich wirklich vom Newsletter abmelden?',
      action: 'Abmelden',
    },
  },
  sponsoring: {
    title: 'Fördermitgliedschaft',
    description: 'Prüfe Deine Mitgliedschaft unter unserer Förderungswebseite.',
    action: {
      href: 'https://steadyhq.com/de/nusszopf',
      meta: 'Zur Förderwebseite',
      text: 'Prüfen',
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
    description: 'Nach dem Löschen können die Daten nicht wieder hergestellt werden.',
    confirm: 'Willst du deinen Account wirklich löschen?',
    action: 'Account löschen',
  },
}
