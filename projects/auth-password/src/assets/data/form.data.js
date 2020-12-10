export default {
  action: 'Speichern',
  title: 'Neues Passwort erstellen',
  description: 'Mit deinem neuen Passwort kannst Du dich wie gewohnt einloggen.',
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
