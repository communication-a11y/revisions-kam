LECONS.push({
  id: "ist-ordinateur",
  cahier: "sciences",
  matiere: "IST",
  titre: "L'ordinateur",
  date: "2026-10-20",
  photos: ["DJI_20261118221940_0132_D.jpg", "DJI_20261118221950_0133_D.jpg"],
  retiens:
    "<p>L'<b>ordinateur</b> permet de <b>stocker</b> des informations, de <b>communiquer</b> et de faire des travaux de toutes sortes.</p>" +
    "<p>Les différentes parties d'un ordinateur sont : l'<b>unité centrale</b> (UC), l'<b>écran</b> (moniteur), le <b>clavier</b> et la <b>souris</b>.</p>" +
    "<p>Les <b>périphériques</b> d'un ordinateur sont : la <b>clé USB</b>, l'<b>imprimante</b>, le <b>scanner</b>, le <b>modem</b>.</p>" +
    "<p>Pour faire fonctionner un ordinateur fixe :</p>" +
    "<ul><li>il faut allumer l'<b>UC</b>, puis l'<b>écran</b> ;</li><li>attendre que tout s'affiche, puis commencer à travailler.</li></ul>" +
    "<p><b>NB</b> : tous les éléments de l'ordinateur fixe sont réunis dans l'<b>ordinateur portable</b>.</p>",
  astuce: "Les 4 parties : <b>U</b>C, <b>É</b>cran, <b>C</b>lavier, <b>S</b>ouris. Les périphériques s'ajoutent autour : clé USB, imprimante, scanner, modem.",
  regle: "Un ordinateur fixe a quatre parties : l'unité centrale, l'écran, le clavier et la souris. On allume d'abord l'UC, puis l'écran.",
  niveaux: [
    [
      { t: "qcm", q: "Que permet de faire un ordinateur ?", choix: ["stocker des informations, communiquer, faire des travaux", "seulement regarder la télévision", "cuire les aliments"], r: "stocker des informations, communiquer, faire des travaux", expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Que veut dire UC ?", choix: ["unité centrale", "unité de couleur", "union des claviers"], r: "unité centrale", expl: "UC = unité centrale." },
      { t: "vf", q: "L'écran s'appelle aussi le moniteur.", r: true, expl: "L'écran (moniteur)." },
      { t: "qcm", q: "Lequel de ces éléments est une partie de l'ordinateur fixe ?", choix: ["le clavier", "le réfrigérateur", "la truelle"], r: "le clavier", expl: "UC, écran, clavier, souris." },
      { t: "vf", q: "Dans l'ordinateur portable, tous les éléments de l'ordinateur fixe sont réunis.", r: true, expl: "C'est le NB de la leçon." }
    ],
    [
      { t: "classer", q: "Partie de l'ordinateur ou périphérique ?", cases: ["partie de l'ordinateur", "périphérique"], items: [["l'unité centrale", "partie de l'ordinateur"], ["la clé USB", "périphérique"], ["le clavier", "partie de l'ordinateur"], ["l'imprimante", "périphérique"], ["la souris", "partie de l'ordinateur"], ["le scanner", "périphérique"]], expl: "Les 4 parties : UC, écran, clavier, souris. Les périphériques : clé USB, imprimante, scanner, modem." },
      { t: "qcm", q: "Que faut-il allumer en premier ?", choix: ["l'unité centrale", "l'écran", "l'imprimante"], r: "l'unité centrale", expl: "On allume l'UC, puis l'écran." },
      { t: "saisie", q: "Combien de parties a l'ordinateur fixe d'après la leçon ?", r: "4", nombre: true, expl: "L'UC, l'écran, le clavier et la souris." },
      { t: "relier", q: "Relie chaque élément à son usage.", paires: [["le clavier", "taper des lettres"], ["l'écran", "voir ce qu'on fait"], ["l'imprimante", "sortir une feuille imprimée"], ["la clé USB", "emporter des fichiers"]], expl: "Chaque élément a son rôle." },
      { t: "trous", q: "Complète.", texte: "Pour faire fonctionner l'ordinateur fixe, il faut allumer l'[UC] puis l'[écran].", expl: "L'ordre de mise en marche." },
      { t: "vf", q: "Le modem est un périphérique de l'ordinateur.", r: true, expl: "Clé USB, imprimante, scanner, modem." },
      { t: "saisie", q: "Comment s'appelle aussi l'écran de l'ordinateur ?", r: "le moniteur", expl: "Le moniteur." },
      { t: "qcm", q: "Que fait-on après avoir allumé l'UC et l'écran ?", choix: ["attendre que tout s'affiche, puis travailler", "débrancher la souris", "éteindre l'UC"], r: "attendre que tout s'affiche, puis travailler", expl: "C'est la deuxième étape." }
    ],
    [
      { t: "vf", q: "Pour démarrer un ordinateur fixe, on allume d'abord l'écran, puis l'unité centrale.", r: false, expl: "C'est l'inverse : l'UC d'abord, puis l'écran." },
      { t: "qcm", q: "Moussa veut imprimer son exposé. De quel périphérique a-t-il besoin ?", choix: ["une imprimante", "un scanner", "un modem"], r: "une imprimante", expl: "L'imprimante sort le document sur papier." },
      { t: "qcm", q: "Khady veut mettre une photo papier dans l'ordinateur. Quel périphérique utilise-t-elle ?", choix: ["le scanner", "l'imprimante", "la clé USB"], r: "le scanner", expl: "Le scanner fait passer une image papier dans l'ordinateur." },
      { t: "classer", q: "Range ces éléments.", cases: ["partie de l'ordinateur", "périphérique", "n'appartient pas à l'ordinateur"], items: [["l'écran", "partie de l'ordinateur"], ["le modem", "périphérique"], ["le réchaud", "n'appartient pas à l'ordinateur"], ["la souris", "partie de l'ordinateur"], ["la clé USB", "périphérique"], ["le marteau", "n'appartient pas à l'ordinateur"]], expl: "Révise les parties et les périphériques." },
      { t: "saisie", q: "Quel périphérique branche-t-on pour emporter ses fichiers dans sa poche ? La clé …", r: "USB", expl: "La clé USB." },
      { t: "vf", q: "Un ordinateur portable n'a pas de clavier.", r: false, expl: "Il réunit tous les éléments de l'ordinateur fixe, clavier compris." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Les parties d'un ordinateur sont l'unité [centrale], l'écran, le [clavier] et la [souris]. Les périphériques sont la clé USB, l'imprimante, le [scanner] et le modem.", expl: "Toute la leçon." },
      { t: "relier", q: "Remets la mise en marche dans l'ordre : relie chaque étape à son numéro.", paires: [["1", "allumer l'unité centrale"], ["2", "allumer l'écran"], ["3", "attendre que tout s'affiche"], ["4", "commencer à travailler"]], expl: "UC, écran, attendre, travailler." },
      { t: "qcm", q: "Pourquoi l'ordinateur portable est-il pratique pour voyager ?", choix: ["parce que tous les éléments sont réunis dans un seul appareil", "parce qu'il n'a pas besoin d'écran", "parce qu'il fonctionne au gaz"], r: "parce que tous les éléments sont réunis dans un seul appareil", expl: "C'est le NB de la leçon." },
      { t: "vf", q: "L'ordinateur est un appareil électronique, car il traite l'information.", r: true, expl: "Tu l'as vu dans la leçon sur les types d'appareils." },
      { t: "qcm", q: "Lequel n'est PAS un périphérique cité dans la leçon ?", choix: ["la souris", "l'imprimante", "le scanner", "le modem"], r: "la souris", expl: "La souris est une des quatre parties de l'ordinateur, pas un périphérique." }
    ]
  ]
});
