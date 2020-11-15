export default {
  progress: {},
  title: 'Neues Projekt',
  navigation: {
    next: 'Weiter',
    back: 'Zurück',
    create: 'Erstellen',
  },
  steps: ['Beschreibung 1/2', 'Beschreibung 2/2', 'Einstellungen'],
  descriptionStep1: {
    title: {
      title: 'Titel*',
      info: 'Info',
      placeholder: 'Wie heißt das Projekt?',
      error: ['Nicht mehr als 30 Zeichen', 'Gib einen Titel ein'],
    },
    goal: {
      title: 'Ziel des Projekts*',
      info: 'Info',
      placeholder: 'Wie lässt sich das Ziel des Projektes in einem Satz beschreiben?',
      error: ['Nicht mehr als 150 Zeichen', 'Gib ein Ziel ein'],
    },
    project: {
      title: 'Projektbeschreibung*',
      info: 'Info',
      placeholder: 'Was muss man über das Projekt wissen?',
      error: ['Maximale Zeichenlänge erreicht', 'Gib eine Beschreibung ein'],
    },
    location: {
      title: 'Ort*',
      info: 'Info',
      placeholder: 'Ort',
      action: 'Projekt ist unabhänging vom Ort',
      error: ['Gib einen Ort ein', 'Wähle einen Ort aus der Liste aus'],
    },
    period: {
      title: 'Projektzeitraum*',
      info: 'Info',
      action: {
        switch: 'Projektzeitraum ist flexibel',
        from: 'Von',
        to: 'Bis',
        placeholder: 'dd.mm.yyyy',
      },
      error: [
        'Gib ein Startdatum ein',
        'Nicht im Format dd.mm.yyyy',
        'Gib ein Enddatum ein',
        'Enddatum vor Startdatum',
      ],
    },
  },
  descriptionStep2: {
    team: {
      title: 'Projektteam',
      info: 'Info',
      placeholder:
        'Wer macht alles wie bei dem Projekt mit? Wie arbeitet ihr so zusammen / wollt ihr zusammen arbeiten? Wie organisiert ihr euch? Was gibt es über euch unbedingt zu wissen?',
      error: 'Maximale Zeichenlänge erreicht',
    },
    motto: {
      title: 'Projektmotto',
      info: 'Info',
      placeholder: 'Was ist das Projektmotto?',
      error: 'Nicht mehr als 200 Zeichen',
    },
  },
  SettingsStep: {
    visibility: {
      title: 'Sichtbarkeit',
      info: 'Wähle aus, für wen das Projekt sichtbar sein soll: alle oder Personen mit Zugang zum Link.',
      public: {
        title: 'Öffentlich',
        description: 'Projekt kann über Nusszopf und Suchmaschinen gefunden werden.',
      },
      private: {
        title: 'Privat',
        description: 'Projekt ist nur zugänglich unter einem geheimen Link.',
      },
    },
    contact: {
      title: 'Kontakt',
      info: 'Info',
      action: 'Direkt kontaktieren unter',
    },
  },
}
