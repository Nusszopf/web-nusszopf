export default {
  action: 'Speichern',
  title: 'Neues Passwort vergeben',
  description: 'Nach dem Speichern kannst Du dich gleich wieder wie gewohnt einloggen.',
  field: {
    aria: 'Passwort',
    placeholder: 'Passwort',
    validation: [
      'Mindestens 8 Zeichen',
      'Mindestens ein Kleinbuchstabe',
      'Mindestens ein Großbuchstabe',
      'Mindestens eine Ziffer',
      'Mindestens ein Sonderzeichen (!@#$%^&*)',
      'Gib ein Passwort ein',
    ],
  },
}
