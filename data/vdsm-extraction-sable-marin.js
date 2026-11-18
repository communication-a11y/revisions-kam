// À VÉRIFIER : la transcription lit peut-être « pratiquer les mers » au lieu de « protéger les mers » ; le module retient « protéger les mers ». « trouver des sites d'extraction » est rendu par « trouver d'autres sites d'extraction » (sens probable).
LECONS.push({
  id: "vdsm-extraction-sable-marin",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "L'extraction du sable marin",
  date: "2026-11-03",
  photos: ["DJI_20261118221532_0115_D.jpg"],
  retiens:
    "<p>L'<b>extraction du sable marin</b> est une pratique utilisée pour <b>prélever et exploiter</b> le sable des plages de mer.</p>" +
    "<p><b>Les causes</b> : la construction des habitations et des routes ; la commercialisation (la vente) du sable…</p>" +
    "<p><b>Les conséquences</b> : l'<b>avancée de la mer</b> ; la destruction des côtes ; l'érosion des plages…</p>" +
    "<p><b>Pour lutter contre l'extraction du sable</b>, il faut : sensibiliser les populations ; protéger les mers ; limiter l'extraction ; trouver d'autres sites d'extraction ; installer des <b>brigades de surveillance</b>.</p>",
  astuce: "Extraire, c'est « tirer dehors » : on tire le sable hors de la plage… et la mer prend sa place.",
  regle: "On prend le sable des plages pour construire et pour le vendre. Résultat : la mer avance et les côtes sont détruites. Il faut sensibiliser, limiter l'extraction et surveiller les plages.",
  niveaux: [
    [
      { t: "qcm", q: "L'extraction du sable marin, c'est…", choix: ["prélever et exploiter le sable des plages", "planter des arbres sur la plage", "pêcher des poissons"], r: "prélever et exploiter le sable des plages", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "Pourquoi prend-on le sable des plages ?", choix: ["pour construire des maisons et des routes", "pour nourrir les poissons", "pour arrêter la mer"], r: "pour construire des maisons et des routes", expl: "La construction est la première cause citée." },
      { t: "vf", q: "L'extraction du sable marin fait avancer la mer.", r: true, expl: "Sans sable, la plage disparaît et la mer avance." },
      { t: "vf", q: "L'extraction du sable marin protège les côtes.", r: false, expl: "Au contraire, elle détruit les côtes." },
      { t: "qcm", q: "Quelle est une <b>solution</b> ?", choix: ["installer des brigades de surveillance", "vendre plus de sable", "construire avec le sable des plages"], r: "installer des brigades de surveillance", expl: "Les brigades empêchent de prendre le sable." }
    ],
    [
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["la construction des habitations", "cause"], ["la commercialisation du sable", "cause"], ["l'avancée de la mer", "conséquence"], ["la destruction des côtes", "conséquence"], ["limiter l'extraction", "solution"], ["sensibiliser les populations", "solution"]], expl: "Pourquoi on le fait, ce que ça provoque, comment lutter." },
      { t: "qcm", q: "La nuit, des charretiers remplissent leurs charrettes avec le sable de la plage de Malika. Que font-ils ?", choix: ["une extraction de sable marin", "un reboisement", "une sensibilisation"], r: "une extraction de sable marin", expl: "Prendre le sable de la plage, c'est l'extraire." },
      { t: "saisie", q: "Complète : la commercialisation du sable, c'est la … du sable.", r: "vente", expl: "Commercialiser = vendre." },
      { t: "vf", q: "L'érosion des plages est une conséquence de l'extraction du sable marin.", r: true, expl: "C'est cité au cahier." },
      { t: "relier", q: "Relie chaque mot à son sens.", paires: [["extraire", "retirer, tirer dehors"], ["commercialiser", "vendre"], ["brigade", "groupe de surveillants"], ["côte", "bord de la mer"]], expl: "Ces mots sont dans la leçon." },
      { t: "qcm", q: "À quoi sert une brigade de surveillance sur la plage ?", choix: ["empêcher qu'on prenne le sable", "vendre le sable", "construire des routes"], r: "empêcher qu'on prenne le sable", expl: "Elle surveille et arrête les extractions." },
      { t: "vf", q: "Limiter l'extraction est une solution.", r: true, expl: "Moins on prend de sable, moins la côte recule." },
      { t: "trous", q: "Complète.", texte: "Les conséquences de l'extraction du sable marin sont l'avancée de la [mer], la destruction des [côtes] et l'érosion des [plages].", expl: "Trois conséquences du cahier." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une conséquence de l'extraction du sable marin ?", choix: ["la plantation d'arbres", "l'avancée de la mer", "la destruction des côtes", "l'érosion des plages"], r: "la plantation d'arbres", expl: "Planter des arbres n'a rien à voir avec l'extraction du sable." },
      { t: "qcm", q: "Pourquoi trouver d'autres sites d'extraction ?", choix: ["pour ne plus prendre le sable des plages", "pour vendre plus de sable de plage", "pour faire avancer la mer"], r: "pour ne plus prendre le sable des plages", expl: "On a besoin de sable pour construire, mais on doit laisser celui des plages." },
      { t: "vf", q: "L'extraction du sable marin est une des causes de l'érosion maritime.", r: true, expl: "La leçon sur les érosions le dit aussi : l'avancée de la mer vient en partie de l'extraction du sable marin." },
      { t: "classer", q: "Ce geste aide-t-il la plage ou l'abîme-t-il ?", cases: ["aide la plage", "abîme la plage"], items: [["acheter du sable de plage pour construire", "abîme la plage"], ["signaler les charrettes de sable", "aide la plage"], ["expliquer le danger aux voisins", "aide la plage"], ["prendre le sable la nuit", "abîme la plage"], ["respecter l'interdiction d'extraction", "aide la plage"]], expl: "Tout ce qui retire le sable abîme la plage." },
      { t: "saisie", q: "Quel verbe veut dire « retirer le sable de la plage » ? (on le trouve dans le titre, sous forme de nom : l'extraction)", r: "extraire", expl: "L'extraction → extraire." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut limiter l'extraction du sable marin.", expl: "C'est une solution." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "À Thiaroye, on prend le sable de la plage pour construire des [habitations] et des routes. À cause de cela, la [mer] avance et détruit les [côtes]. Pour lutter, il faut installer des brigades de [surveillance] et [sensibiliser] les populations.", expl: "Causes, conséquences, solutions." },
      { t: "qcm", q: "Le maçon de Mamadou propose d'acheter du sable de plage, moins cher. Que lui répondre ?", choix: ["Non, cela fait avancer la mer : il faut un sable d'un autre site.", "Oui, c'est sans danger.", "Oui, et prenons-en encore plus."], r: "Non, cela fait avancer la mer : il faut un sable d'un autre site.", expl: "Il faut trouver d'autres sites d'extraction." },
      { t: "classer", q: "Classe chaque élément.", cases: ["cause", "conséquence", "solution"], items: [["construire des routes", "cause"], ["l'érosion des plages", "conséquence"], ["installer des brigades de surveillance", "solution"], ["vendre le sable", "cause"], ["protéger les mers", "solution"]], expl: "Les trois parties de la leçon." },
      { t: "vf", q: "Sensibiliser les populations veut dire leur expliquer le danger de l'extraction.", r: true, expl: "Sensibiliser, c'est informer pour changer les comportements." },
      { t: "qcm", q: "Quel lien y a-t-il entre l'extraction du sable et l'érosion côtière ?", choix: ["l'extraction fait reculer la côte", "l'extraction arrête l'érosion", "aucun lien"], r: "l'extraction fait reculer la côte", expl: "Moins de sable = la mer avance = érosion côtière." }
    ]
  ]
});
