LECONS.push({
  id: "vdsm-feux-de-brousse",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les formes de dégradation des ressources : les feux de brousse",
  date: "2026-10-01",
  photos: ["DJI_20261118221418_0105_D.jpg"],
  retiens:
    "<p>Un <b>feu de brousse</b> est un <b>incendie</b> qui se propage sur une étendue boisée. Il peut être d'origine <b>naturelle</b> ou <b>humaine</b>.</p>" +
    "<p><b>Les causes</b> : fumer en brousse ; oublier d'éteindre un feu ; allumer un feu…</p>" +
    "<p><b>Les conséquences</b> : la pollution de l'air, la pollution de l'eau et des sols ; la disparition de certaines espèces animales et végétales ; la déforestation ; la destruction des terres…</p>" +
    "<p><b>Pour éviter les feux de brousse</b>, il faut : créer des <b>pare-feu</b> et <b>sensibiliser</b> les populations.</p>",
  astuce: "Un <b>pare-feu</b> « pare » le feu, comme un parapluie pare la pluie : c'est une bande de terre nettoyée où le feu ne trouve rien à brûler.",
  regle: "Un feu de brousse est un incendie dans une étendue boisée, d'origine naturelle ou humaine. Il pollue, détruit la forêt et les animaux. On le prévient avec des pare-feu et en sensibilisant les populations.",
  niveaux: [
    [
      { t: "qcm", q: "Un feu de brousse, c'est…", choix: ["un incendie qui se propage sur une étendue boisée", "un feu pour faire la cuisine", "un feu d'artifice"], r: "un incendie qui se propage sur une étendue boisée", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "Un feu de brousse peut être d'origine…", choix: ["naturelle ou humaine", "seulement naturelle", "seulement humaine"], r: "naturelle ou humaine", expl: "Il peut venir de la nature ou d'une action de l'homme." },
      { t: "vf", q: "Fumer en brousse peut provoquer un feu de brousse.", r: true, expl: "Une cigarette mal éteinte peut enflammer l'herbe sèche." },
      { t: "vf", q: "Les feux de brousse protègent les animaux.", r: false, expl: "Ils entraînent la disparition de certaines espèces animales et végétales." },
      { t: "qcm", q: "Quelle mesure aide à éviter les feux de brousse ?", choix: ["créer des pare-feu", "allumer des feux", "jeter des mégots dans l'herbe"], r: "créer des pare-feu", expl: "Le pare-feu arrête le feu car il n'y a plus rien à brûler." }
    ],
    [
      { t: "classer", q: "Cause ou conséquence du feu de brousse ?", cases: ["cause", "conséquence"], items: [["fumer en brousse", "cause"], ["oublier d'éteindre un feu", "cause"], ["allumer un feu", "cause"], ["la pollution de l'air", "conséquence"], ["la déforestation", "conséquence"], ["la destruction des terres", "conséquence"]], expl: "Les causes déclenchent le feu ; les conséquences sont les dégâts." },
      { t: "qcm", q: "Ibrahima a fait du thé dans la brousse et il part sans éteindre le feu. Quel risque ?", choix: ["un feu de brousse", "une inondation", "une érosion côtière"], r: "un feu de brousse", expl: "Oublier d'éteindre un feu est une cause des feux de brousse." },
      { t: "saisie", q: "Comment appelle-t-on la bande de terre nettoyée qui empêche le feu de passer ?", r: ["un pare-feu", "pare-feu", "le pare-feu"], expl: "Le pare-feu arrête la progression du feu." },
      { t: "vf", q: "Les feux de brousse polluent l'air.", r: true, expl: "La fumée pollue l'air." },
      { t: "vf", q: "Les feux de brousse peuvent aussi polluer l'eau et les sols.", r: true, expl: "Le cahier cite la pollution de l'eau et des sols." },
      { t: "qcm", q: "Que veut dire <b>sensibiliser</b> les populations ?", choix: ["leur expliquer les dangers pour qu'elles fassent attention", "les punir", "leur vendre des allumettes"], r: "leur expliquer les dangers pour qu'elles fassent attention", expl: "Sensibiliser, c'est informer pour faire changer les comportements." },
      { t: "trous", q: "Complète la définition.", texte: "Un feu de brousse est un [incendie] qui se propage sur une étendue [boisée].", expl: "Incendie = grand feu ; étendue boisée = couverte d'arbres." },
      { t: "relier", q: "Relie chaque conséquence à ce qu'elle abîme.", paires: [["la pollution de l'air", "l'air que l'on respire"], ["la déforestation", "les arbres"], ["la disparition d'espèces", "les animaux et les plantes"], ["la destruction des terres", "les champs"]], expl: "Le feu abîme tout le milieu." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une conséquence des feux de brousse ?", choix: ["la création de pare-feu", "la déforestation", "la pollution de l'air", "la disparition d'espèces végétales"], r: "la création de pare-feu", expl: "Créer des pare-feu est une solution, pas une conséquence." },
      { t: "vf", q: "Un feu de brousse est toujours causé par l'homme.", r: false, expl: "Il peut aussi être d'origine naturelle." },
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["allumer un feu en brousse", "cause"], ["la disparition d'espèces animales", "conséquence"], ["créer des pare-feu", "solution"], ["sensibiliser les populations", "solution"], ["fumer en brousse", "cause"], ["la déforestation", "conséquence"]], expl: "Trois colonnes : ce qui déclenche, ce que ça produit, ce qui protège." },
      { t: "saisie", q: "Les feux de brousse font disparaître les arbres. Comment s'appelle cette conséquence ? (un mot commençant par « dé »)", r: ["la déforestation", "déforestation"], expl: "Forêt qui disparaît = déforestation." },
      { t: "qcm", q: "Pourquoi les feux de brousse sont-ils fréquents en saison sèche ?", choix: ["parce que l'herbe sèche brûle facilement", "parce qu'il pleut beaucoup", "parce que les arbres sont mouillés"], r: "parce que l'herbe sèche brûle facilement", expl: "Le feu se propage vite dans l'herbe sèche." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut sensibiliser les populations.", expl: "Sensibiliser est une solution contre les feux de brousse." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Les feux de brousse sont causés par des gestes comme [fumer] en brousse ou oublier d'[éteindre] un feu. Ils entraînent la [déforestation] et la pollution de l'[air]. Pour les éviter, il faut créer des [pare-feu].", expl: "Causes, conséquences, solution." },
      { t: "qcm", q: "Le chef du village de Khady veut protéger la brousse avant la saison sèche. Que doit-il faire ?", choix: ["faire tracer des pare-feu et réunir les habitants pour les informer", "brûler les herbes un jour de vent", "laisser les enfants jouer avec des allumettes"], r: "faire tracer des pare-feu et réunir les habitants pour les informer", expl: "Pare-feu et sensibilisation : les deux solutions du cahier." },
      { t: "relier", q: "Relie chaque geste à ce qu'il provoque.", paires: [["jeter un mégot dans l'herbe sèche", "un feu de brousse"], ["tracer un pare-feu", "le feu s'arrête"], ["expliquer les dangers aux bergers", "moins de feux"]], expl: "Un geste imprudent cause le feu ; les bons gestes le préviennent." },
      { t: "vf", q: "Les feux de brousse détruisent les terres agricoles.", r: true, expl: "Le cahier cite la destruction des terres." },
      { t: "saisie", q: "Complète : un feu de brousse peut être d'origine naturelle ou …", r: "humaine", expl: "Origine naturelle ou humaine." }
    ]
  ]
});
