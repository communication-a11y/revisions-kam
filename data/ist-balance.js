LECONS.push({
  id: "ist-balance",
  cahier: "sciences",
  matiere: "IST",
  titre: "La balance",
  date: "2026-10-13",
  photos: ["DJI_20261118221940_0132_D.jpg"],
  retiens:
    "<p>La <b>balance</b> est un <b>instrument de mesure</b> qui sert à connaître la <b>masse</b> des objets.</p>" +
    "<p>Il existe différentes sortes de balances : la <b>balance Roberval</b> (à deux plateaux), la <b>balance électronique</b>, la <b>balance romaine</b>, la <b>bascule</b>, le <b>pèse-bébé</b>…</p>" +
    "<p>Les qualités d'une bonne balance sont la <b>justesse</b>, la <b>sensibilité</b> et la <b>fidélité</b>.</p>",
  astuce: "Une bonne balance est <b>J S F</b> : <b>J</b>uste, <b>S</b>ensible, <b>F</b>idèle.",
  regle: "La balance est un instrument qui mesure la masse des objets. Une bonne balance est juste, sensible et fidèle.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert une balance ?", choix: ["à connaître la masse des objets", "à mesurer une longueur", "à connaître l'heure"], r: "à connaître la masse des objets", expl: "La balance mesure la masse." },
      { t: "qcm", q: "La balance est…", choix: ["un instrument de mesure", "un appareil de cuisine", "un outil du maçon"], r: "un instrument de mesure", expl: "Elle mesure la masse." },
      { t: "vf", q: "La balance Roberval a deux plateaux.", r: true, expl: "C'est celle de la photocopie du cahier." },
      { t: "qcm", q: "Combien de qualités d'une bonne balance cite la leçon ?", choix: ["trois", "deux", "cinq"], r: "trois", expl: "La justesse, la sensibilité et la fidélité." },
      { t: "vf", q: "On utilise une règle pour connaître la masse d'un sac de riz.", r: false, expl: "La règle mesure les longueurs ; pour la masse, il faut une balance." }
    ],
    [
      { t: "classer", q: "Est-ce une sorte de balance ?", cases: ["sorte de balance", "autre instrument"], items: [["la balance Roberval", "sorte de balance"], ["la bascule", "sorte de balance"], ["le pèse-bébé", "sorte de balance"], ["la règle", "autre instrument"], ["la balance romaine", "sorte de balance"], ["le thermomètre", "autre instrument"]], expl: "La règle mesure les longueurs, le thermomètre la température." },
      { t: "saisie", q: "Quelle balance utilise-t-on au dispensaire pour peser un nourrisson ?", r: ["le pèse-bébé", "pèse-bébé", "un pèse-bébé"], expl: "Le pèse-bébé." },
      { t: "trous", q: "Complète.", texte: "Les qualités d'une bonne balance sont la [justesse], la [sensibilité] et la [fidélité].", expl: "Trois qualités : J, S, F." },
      { t: "qcm", q: "Quelle grandeur mesure la balance ?", choix: ["la masse", "la longueur", "la durée"], r: "la masse", expl: "La masse s'exprime en grammes, en kilogrammes…" },
      { t: "qcm", q: "Laquelle de ces balances a deux plateaux ?", choix: ["la balance Roberval", "la balance électronique", "le pèse-bébé"], r: "la balance Roberval", expl: "La balance Roberval a deux plateaux." },
      { t: "vf", q: "La balance électronique est une sorte de balance.", r: true, expl: "Elle est citée dans la leçon." },
      { t: "saisie", q: "Comment s'appelle la balance à deux plateaux de la leçon ? La balance …", r: "Roberval", expl: "La balance Roberval." },
      { t: "qcm", q: "Laquelle de ces balances n'est PAS citée dans la leçon ?", choix: ["la balance à ressort de poche", "la balance romaine", "la bascule", "le pèse-bébé"], r: "la balance à ressort de poche", expl: "La leçon cite la balance Roberval, la balance électronique, la balance romaine, la bascule et le pèse-bébé." },
    ],
    [
      { t: "qcm", q: "Une balance qui montre toujours le même résultat quand on pèse plusieurs fois le même objet est…", choix: ["fidèle", "cassée", "romaine"], r: "fidèle", expl: "Fidèle : elle redonne toujours le même résultat." },
      { t: "qcm", q: "Une balance qui donne la masse exacte de l'objet est…", choix: ["juste", "lourde", "fidèle seulement"], r: "juste", expl: "La justesse, c'est donner la vraie masse." },
      { t: "qcm", q: "Une balance qui réagit même pour un tout petit objet est…", choix: ["sensible", "juste", "électronique"], r: "sensible", expl: "La sensibilité, c'est réagir à une très petite masse." },
      { t: "vf", q: "Une balance qui indique 2 kg pour un sac de 5 kg est juste.", r: false, expl: "Elle n'est pas juste : elle ne donne pas la vraie masse." },
      { t: "relier", q: "Relie chaque qualité à sa signification.", paires: [["la justesse", "donne la vraie masse"], ["la sensibilité", "réagit à une très petite masse"], ["la fidélité", "redonne toujours le même résultat"]], expl: "Les trois qualités d'une bonne balance." },
      { t: "saisie", q: "Que mesure-t-on avec une balance ? La …", r: "masse", expl: "La masse des objets." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La balance est un instrument de [mesure] qui sert à connaître la [masse] des objets. Une bonne balance est juste, [sensible] et fidèle.", expl: "Toute la leçon." },
      { t: "qcm", q: "Au marché, Fatou pèse trois fois le même sac de mangues : la balance indique 3 kg, puis 4 kg, puis 2 kg. Quelle qualité manque à cette balance ?", choix: ["la fidélité", "la couleur", "la taille"], r: "la fidélité", expl: "Une balance fidèle redonne toujours le même résultat pour le même objet." },
      { t: "qcm", q: "Au dispensaire de Ziguinchor, l'infirmière pèse le petit frère d'Awa. Quelle balance utilise-t-elle ?", choix: ["le pèse-bébé", "la bascule des camions", "la balance romaine du boucher"], r: "le pèse-bébé", expl: "Le pèse-bébé est fait pour les nourrissons." },
      { t: "vf", q: "La justesse, la sensibilité et la fidélité sont les trois qualités d'une bonne balance.", r: true, expl: "C'est exactement la leçon." },
      { t: "classer", q: "Défi : qualité d'une balance ou sorte de balance ?", cases: ["qualité", "sorte de balance"], items: [["la justesse", "qualité"], ["la balance romaine", "sorte de balance"], ["la fidélité", "qualité"], ["la bascule", "sorte de balance"], ["la sensibilité", "qualité"], ["la balance électronique", "sorte de balance"]], expl: "Ne confonds pas les qualités et les sortes de balances." }
    ]
  ]
});
