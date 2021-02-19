export default {
  notify: {
    loading: 'Nachricht wird versendet...',
    success: 'Nachricht versendet!',
    error: 'Nachricht konnte leider nicht versendet werden',
  },
  dialog: {
    aria: 'Kontaktieren',
    description: 'Schreibe dem Projekt eine Nachricht. Diese wird für dich über den Nusszopf per E-Mail versendet.',
  },
  validation: {
    email: ['Gib eine valide E-Mail-Adresse ein', 'Gib eine E-Mail-Adresse ein'],
    msg: ['Maximal 2000 Zeichen', 'Bitte schreibe eine Nachricht'],
  },
  fields: {
    email: {
      title: 'Deine E-Mail-Adresse*',
      placeholder: 'beispiel@mail.de',
      info: 'Gib eine E-Mail-Adresse ein, unter welcher Du von dem Projekt kontaktiert werden kannst.',
    },
    msg: {
      title: 'Deine Nachricht*',
      placeholder: '...',
    },
  },
  actions: {
    submit: 'Senden',
    cancel: 'Abbrechen',
  },
  confirm: 'Willst Du wirklich abbrechen? Deine Nachricht wird nicht gespeichert.',
}
