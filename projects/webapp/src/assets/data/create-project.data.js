export default {
  progress: {},
  title: 'Neues Projekt',
  navigation: {
    next: 'Weiter',
    back: 'Zurück',
    create: 'Erstellen',
  },
  steps: ['Beschreibung 1/2', 'Beschreibung 2/2', 'Gesuche', 'Einstellungen'],
  requestsStep: {
    title: ['Projektgesuche', 'Erstellte Gesuche'],
    description:
      'Gesuche in dem Projekt zeigen anderen Nusszopfer:innen, was für die Projektumsetzung noch alles benötigt wird.',
    action: 'Gesuch erstellen',
    info: 'Gesuche für das Projekt kannst Du entweder jetzt oder später erstellen.',
  },
  notify: {
    request: {
      loading: 'Gesuch erstellen...',
      success: 'Gesuch wurde erstellt.',
      error: 'Sorry, das Gesuch konnte nicht erstellt werden.',
    },
    project: {
      loading: 'Projekt erstellen...',
      success: 'Projekt wurde erstellt.',
      errors: [
        'Sorry, das Projekt konnte nicht erstellt werden.',
        'Bitte überprüfe deine Eingaben oder versuche es später erneut.',
      ],
    },
  },
}
