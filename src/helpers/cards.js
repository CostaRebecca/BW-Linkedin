const suggestedCards = [
  {
    title: { txt: "Dove lavori attualmente?", icon: false },
    text: ": Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni del profilo.",
    button: {
      type: "button",
      icon: false,
      btnText: "Aggiungi Posizione",
      modal: { "data-bs-toggle": "modal", "data-bs-target": "#experiencesForm" }
    }
  },
  {
    title: { txt: "In quale settore lavori?", icon: false },
    text: "Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo.",
    button: { type: "button", icon: false, btnText: "Aggiungi settore" }
  },
  {
    title: { txt: "Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti", icon: false },
    text: "Gli utenti con una foto del profilo ricevono fino a 2,3 volte più visualizzazioni del profilo.",
    button: {
      type: "button",
      icon: false,
      btnText: "Aggiungi foto"
    }
  },
  {
    title: { txt: "Quale scuola o università hai frequentato?", icon: false },
    text: "Gli utenti che includono una scuola o università ricevono fino a 2,2 volte più visualizzazioni del profilo.",
    button: {
      type: "button",
      icon: false,
      btnText: "Aggiungi foto"
    }
  },
  {
    title: {
      txt: "Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa",
      icon: false
    },
    text: "Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo",
    button: {
      type: "button",
      icon: false,
      btnText: "Aggiungi foto"
    }
  }
];

const userCards = [
  {
    title: { txt: "Mostra ai recruiter che sei disponibile a lavorare", icon: false },
    text: ": sei tu che decidi chi può vedere questa informazione.",
    button: {
      type: "link",
      icon: false,
      btnText: "Inizia"
    }
  },
  {
    title: { txt: "Fai sapere che stai facendo selezione", icon: false },
    text: ": e attrai candidati qualificati.",
    button: { type: "link", icon: false, btnText: "Inizia" }
  },
  {
    title: { txt: "Metti in risalto i servizi", icon: false },
    text: ": che offri, così tu e la tua azienda potrete apparire nei risultati di ricerca.",
    button: {
      type: "link",
      icon: false,
      btnText: "Inizia"
    }
  }
];

export { userCards, suggestedCards };
