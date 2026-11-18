LECONS.push({
  id: "vdsm-pollution-marine",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les formes de dégradation des ressources : la pollution marine",
  date: "2026-10-15",
  photos: ["DJI_20261118221459_0111_D.jpg"],
  retiens:
    "<p>La <b>pollution marine</b> est la présence de déchets dans les océans.</p>" +
    "<p><b>Les causes</b> : le rejet de produits physiques ou chimiques toxiques ; les déchets jetés par l'homme sur les sols ; les <b>eaux usées</b> qui polluent les fleuves et finissent dans les mers ; les <b>marées noires</b>.</p>" +
    "<p><b>Les conséquences</b> : la disparition de certaines espèces animales ; elle favorise des maladies…</p>" +
    "<p><b>Pour lutter contre la pollution marine</b>, il faut : arrêter de jeter des eaux usées en mer ; arrêter de jeter des déchets ; éviter les marées noires ; surveiller les mers ; sensibiliser les populations…</p>",
  astuce: "Ce qu'on jette par terre ou dans le fleuve finit souvent… dans la mer.",
  regle: "La pollution marine, c'est la présence de déchets dans les océans (produits toxiques, déchets, eaux usées, marées noires). Elle tue des animaux marins et favorise des maladies. On la combat en ne jetant plus rien, en surveillant les mers et en sensibilisant.",
  niveaux: [
    [
      { t: "qcm", q: "La pollution marine, c'est…", choix: ["la présence de déchets dans les océans", "la pollution de l'air des villes", "l'avancée de la mer"], r: "la présence de déchets dans les océans", expl: "Marine = de la mer." },
      { t: "vf", q: "Les marées noires causent la pollution marine.", r: true, expl: "Une marée noire, c'est du pétrole répandu en mer." },
      { t: "vf", q: "Les déchets jetés sur le sol ne peuvent jamais arriver dans la mer.", r: false, expl: "Le cahier explique que les déchets et les eaux usées finissent par se retrouver dans les mers." },
      { t: "qcm", q: "Laquelle est une <b>conséquence</b> de la pollution marine ?", choix: ["la disparition de certaines espèces animales", "plus de poissons dans la mer", "une mer plus propre"], r: "la disparition de certaines espèces animales", expl: "Les animaux marins meurent dans une eau polluée." },
      { t: "qcm", q: "Laquelle est une <b>solution</b> ?", choix: ["arrêter de jeter des déchets", "verser les eaux usées en mer", "jeter les sachets sur la plage"], r: "arrêter de jeter des déchets", expl: "C'est une des solutions du cahier." }
    ],
    [
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["les eaux usées versées dans le fleuve", "cause"], ["les marées noires", "cause"], ["la disparition d'espèces animales", "conséquence"], ["des maladies", "conséquence"], ["surveiller les mers", "solution"], ["sensibiliser les populations", "solution"]], expl: "Ce qui salit la mer, ce que ça produit, ce qui la protège." },
      { t: "qcm", q: "À Hann, Aïssatou voit des égouts se vider directement dans la mer. Que se passe-t-il ?", choix: ["une pollution marine par les eaux usées", "une érosion éolienne", "un feu de brousse"], r: "une pollution marine par les eaux usées", expl: "Les eaux usées versées en mer polluent l'océan." },
      { t: "saisie", q: "Comment appelle-t-on le pétrole répandu en grande quantité sur la mer ? Une marée …", r: "noire", expl: "Marée noire : la mer devient noire de pétrole." },
      { t: "vf", q: "Les eaux usées peuvent polluer d'abord les fleuves, puis la mer.", r: true, expl: "Le cahier dit qu'elles polluent les fleuves et se retrouvent finalement dans les mers." },
      { t: "vf", q: "Surveiller les mers aide à lutter contre la pollution marine.", r: true, expl: "C'est une solution du cahier." },
      { t: "relier", q: "Relie chaque cause à la solution qui la combat.", paires: [["jeter des eaux usées en mer", "arrêter de jeter des eaux usées"], ["jeter des déchets", "arrêter de jeter des déchets"], ["les marées noires", "éviter les marées noires"]], expl: "Chaque cause a sa solution." },
      { t: "qcm", q: "Que veut dire « marine » dans « pollution marine » ?", choix: ["de la mer", "de l'air", "de la forêt"], r: "de la mer", expl: "Marin, marine : qui concerne la mer." },
      { t: "trous", q: "Complète.", texte: "La pollution marine est la présence de [déchets] dans les [océans].", expl: "C'est la définition du cahier." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une cause de la pollution marine ?", choix: ["surveiller les mers", "les marées noires", "les produits chimiques toxiques", "les eaux usées"], r: "surveiller les mers", expl: "Surveiller les mers est une solution." },
      { t: "vf", q: "La pollution marine favorise des maladies.", r: true, expl: "C'est une conséquence citée au cahier." },
      { t: "classer", q: "Ce geste salit-il la mer ou la protège-t-il ?", cases: ["salit la mer", "protège la mer"], items: [["jeter un sachet plastique sur la plage", "salit la mer"], ["vider de l'huile de moteur dans le caniveau", "salit la mer"], ["ramasser les déchets de la plage", "protège la mer"], ["mettre les ordures à la poubelle", "protège la mer"], ["expliquer aux pêcheurs de ne rien jeter", "protège la mer"]], expl: "Ce qui finit dans l'eau salit la mer." },
      { t: "qcm", q: "Pourquoi un sachet jeté dans un caniveau à Dakar peut-il polluer la mer ?", choix: ["l'eau le transporte jusqu'à la mer", "le vent le transforme en sable", "il disparaît tout seul"], r: "l'eau le transporte jusqu'à la mer", expl: "Les déchets jetés sur les sols se retrouvent finalement dans les mers." },
      { t: "saisie", q: "Complète : les eaux usées polluent les fleuves et se retrouvent finalement dans les …", r: "mers", expl: "Tout finit dans la mer." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut arrêter de jeter des déchets en mer.", expl: "C'est une solution contre la pollution marine." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "La pollution marine est causée par les eaux [usées], les produits toxiques et les marées [noires]. Elle entraîne la disparition de certaines espèces [animales]. Pour lutter, il faut [surveiller] les mers et [sensibiliser] les populations.", expl: "Causes, conséquence, solutions." },
      { t: "qcm", q: "Les élèves de la classe de Kam veulent agir pour la mer à Yoff. Quelle action est la plus utile ?", choix: ["nettoyer la plage et expliquer aux gens de ne plus rien jeter", "laisser les déchets sur le sable", "jeter les bouteilles dans les vagues"], r: "nettoyer la plage et expliquer aux gens de ne plus rien jeter", expl: "Arrêter de jeter des déchets et sensibiliser : deux solutions du cahier." },
      { t: "classer", q: "Classe chaque élément.", cases: ["cause", "conséquence", "solution"], items: [["les produits chimiques toxiques", "cause"], ["les poissons meurent", "conséquence"], ["éviter les marées noires", "solution"], ["les déchets jetés sur les sols", "cause"], ["arrêter de jeter des eaux usées en mer", "solution"]], expl: "Trois parties de la leçon." },
      { t: "vf", q: "Une marée noire est une solution contre la pollution marine.", r: false, expl: "C'est une cause : le pétrole pollue la mer." },
      { t: "relier", q: "Relie chaque pollution à ce qu'elle salit.", paires: [["pollution marine", "la mer"], ["pollution atmosphérique", "l'air"], ["pollution du sol", "la terre"]], expl: "Marine = mer ; atmosphérique = air." }
    ]
  ]
});
