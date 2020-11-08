export default {
  progress: {},
  descriptionStep1: {
    title: {
      title: 'Titel*',
      info: 'Info',
      placeholder: 'Wie heißt das Projekt?',
    },
    goal: {
      title: 'Ziel des Projekts*',
      info: 'Info',
      placeholder: 'Wie lässt sich das Ziel des Projektes in einem Satz beschreiben?',
    },
    project: {
      title: 'Projektbeschreibung*',
      info: 'Info',
      placeholder: 'Was muss man über das Projekt wissen?',
    },
    location: {
      title: 'Ort*',
      info: 'Info',
      placeholder: 'Ort',
      action: 'Projekt ist abhänging vom Ort',
    },
    period: {
      title: 'Projektzeitraum*',
      info: 'Info',
      action: {
        switch: 'Projektzeitraum ist flexibel',
        from: 'Von',
        to: 'Bis',
      },
    },
  },
  descriptionStep2: {
    team: {
      title: 'Projektteam',
      info: 'Info',
      placeholder:
        'Wer macht alles wie bei dem Projekt mit? Wie arbeitet ihr so zusammen / wollt ihr zusammen arbeiten? Wie organisiert ihr euch? Was gibt es über euch unbedingt zu wissen?',
    },
    motto: {
      title: 'Projektmotto',
      info: 'Info',
      placeholder: 'Was ist das Projektmotto?',
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
