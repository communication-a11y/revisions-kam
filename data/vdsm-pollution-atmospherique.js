LECONS.push({
  id: "vdsm-pollution-atmospherique",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "La pollution atmosphérique",
  date: "2026-10-13",
  photos: ["DJI_20261118221456_0110_D.jpg"],
  retiens:
    "<p>La <b>pollution atmosphérique</b> (ou <b>pollution de l'air</b>) est un changement négatif de la qualité de l'air.</p>" +
    "<p><b>Les causes</b> : les déchets des usines ; la fumée des voitures ; la poussière ; les produits chimiques et toxiques…</p>" +
    "<p><b>Les conséquences</b> : on attrape des maladies ; la disparition de certaines espèces animales et végétales ; les maladies épidémiques…</p>" +
    "<p><b>Pour lutter contre la pollution de l'air</b>, il faut : imposer une réglementation des émissions de gaz par les usines ; favoriser l'utilisation des véhicules électriques ; imposer une taxation plus élevée aux grands pollueurs…</p>",
  astuce: "<b>Atmosphère</b> = l'air qui entoure la Terre. Pollution atmosphérique = pollution de l'air.",
  regle: "La pollution atmosphérique, c'est l'air qui devient mauvais à cause des usines, des voitures, de la poussière et des produits toxiques. Elle rend malade ; on la combat par des règles pour les usines, des véhicules électriques et des taxes pour les pollueurs.",
  niveaux: [
    [
      { t: "qcm", q: "La pollution atmosphérique, c'est la pollution…", choix: ["de l'air", "de la mer", "du sol"], r: "de l'air", expl: "L'atmosphère, c'est l'air qui entoure la Terre." },
      { t: "qcm", q: "La pollution de l'air est…", choix: ["un changement négatif de la qualité de l'air", "un air plus pur", "un vent très fort"], r: "un changement négatif de la qualité de l'air", expl: "C'est la définition du cahier : l'air devient moins bon." },
      { t: "vf", q: "La fumée des voitures pollue l'air.", r: true, expl: "C'est une cause citée au cahier." },
      { t: "vf", q: "La pollution de l'air n'a aucun effet sur la santé.", r: false, expl: "Elle fait attraper des maladies, parfois des épidémies." },
      { t: "qcm", q: "Laquelle est une <b>cause</b> de la pollution de l'air ?", choix: ["les déchets des usines", "les véhicules électriques", "la plantation d'arbres"], r: "les déchets des usines", expl: "Les usines rejettent fumées et déchets dans l'air." }
    ],
    [
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["la fumée des voitures", "cause"], ["la poussière", "cause"], ["les maladies épidémiques", "conséquence"], ["la disparition d'espèces végétales", "conséquence"], ["favoriser les véhicules électriques", "solution"], ["taxer davantage les grands pollueurs", "solution"]], expl: "Ce qui salit l'air, ce que ça provoque, ce qui le protège." },
      { t: "qcm", q: "À Dakar, Moussa tousse à cause des fumées noires des vieux cars. De quoi s'agit-il ?", choix: ["de la pollution atmosphérique", "de l'érosion hydrique", "de la pollution marine"], r: "de la pollution atmosphérique", expl: "La fumée des véhicules pollue l'air que l'on respire." },
      { t: "saisie", q: "Complète : la pollution atmosphérique s'appelle aussi la pollution de l'…", r: "air", expl: "Atmosphérique = de l'air." },
      { t: "vf", q: "Les produits chimiques et toxiques peuvent polluer l'air.", r: true, expl: "Ils sont cités parmi les causes." },
      { t: "qcm", q: "Pourquoi favoriser les véhicules électriques ?", choix: ["ils ne rejettent pas de fumée", "ils vont plus vite", "ils coûtent moins cher"], r: "ils ne rejettent pas de fumée", expl: "Sans pot d'échappement, ils ne polluent pas l'air de la rue." },
      { t: "relier", q: "Relie chaque solution à ceux qu'elle concerne.", paires: [["réglementer les émissions de gaz", "les usines"], ["utiliser des véhicules électriques", "les automobilistes"], ["une taxe plus élevée", "les grands pollueurs"]], expl: "Chaque solution vise une source de pollution." },
      { t: "vf", q: "La pollution de l'air peut faire disparaître certaines espèces animales et végétales.", r: true, expl: "C'est une conséquence citée au cahier." },
      { t: "trous", q: "Complète.", texte: "Les causes de la pollution de l'air sont les déchets des [usines], la fumée des [voitures] et la [poussière].", expl: "Trois causes du cahier." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une solution contre la pollution de l'air ?", choix: ["brûler les ordures en plein air", "réglementer les émissions de gaz des usines", "favoriser les véhicules électriques"], r: "brûler les ordures en plein air", expl: "Brûler les ordures dégage de la fumée : cela pollue l'air." },
      { t: "qcm", q: "Une maladie <b>épidémique</b> est une maladie…", choix: ["qui touche beaucoup de personnes en même temps", "qui ne touche qu'une personne", "qui ne se soigne jamais"], r: "qui touche beaucoup de personnes en même temps", expl: "Une épidémie se répand dans une population." },
      { t: "vf", q: "Taxer plus les grands pollueurs les pousse à moins polluer.", r: true, expl: "Payer plus quand on pollue beaucoup encourage à réduire ses rejets." },
      { t: "classer", q: "Ce geste pollue-t-il l'air ou le protège-t-il ?", cases: ["pollue l'air", "protège l'air"], items: [["laisser tourner le moteur à l'arrêt", "pollue l'air"], ["brûler des pneus", "pollue l'air"], ["venir à l'école à pied", "protège l'air"], ["utiliser un véhicule électrique", "protège l'air"], ["une usine qui filtre ses fumées", "protège l'air"]], expl: "Tout ce qui rejette de la fumée pollue l'air." },
      { t: "saisie", q: "Quel mot savant veut dire « de l'air » dans « pollution … » ?", r: "atmosphérique", expl: "Pollution atmosphérique = pollution de l'air." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "La fumée des voitures pollue l'air.", expl: "C'est une cause de la pollution atmosphérique." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "La pollution [atmosphérique] est un changement négatif de la qualité de l'air. Elle est causée par la fumée des [voitures] et les déchets des [usines]. Elle provoque des [maladies]. Pour lutter, il faut favoriser les véhicules [électriques].", expl: "Définition, causes, conséquence, solution." },
      { t: "qcm", q: "Le maire de Thiès veut moins de pollution de l'air dans sa ville. Quelle décision est la meilleure ?", choix: ["obliger les usines à réduire leurs fumées", "autoriser les feux d'ordures", "ajouter des vieux camions"], r: "obliger les usines à réduire leurs fumées", expl: "Réglementer les émissions des usines est une solution du cahier." },
      { t: "classer", q: "Classe chaque élément.", cases: ["cause", "conséquence", "solution"], items: [["les produits toxiques", "cause"], ["on attrape des maladies", "conséquence"], ["réglementer les émissions de gaz", "solution"], ["les déchets des usines", "cause"], ["les maladies épidémiques", "conséquence"]], expl: "Révise bien les trois parties de la leçon." },
      { t: "vf", q: "La poussière fait partie des causes de la pollution de l'air.", r: true, expl: "Elle est citée au cahier." },
      { t: "qcm", q: "Que veut dire « émissions de gaz » ?", choix: ["les gaz rejetés dans l'air", "les émissions de télévision", "le gaz de la cuisine"], r: "les gaz rejetés dans l'air", expl: "Émettre, c'est rejeter, envoyer dehors." }
    ]
  ]
});
