LECONS.push({
  id: "fr-voc-homonymes",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les homonymes",
  date: "2026-10-14",
  photos: ["DJI_20261118220520_0040_D.jpg", "DJI_20261118220525_0041_D.jpg"],
  retiens:
    "<p>Certains mots ont la <b>même prononciation</b> mais pas le <b>même sens</b> : ce sont des <b>homonymes</b>.</p>" +
    "<p>Pour trouver leur orthographe exacte, il faut s'aider du <b>contexte</b> (les mots qui les entourent dans la phrase).</p>" +
    "<table><tr><th>phrase</th><th>mot</th><th>sens</th></tr>" +
    "<tr><td>La pelouse est d'un <b>vert</b> magnifique.</td><td>vert</td><td>la couleur</td></tr>" +
    "<tr><td>Le <b>ver</b> de terre est très utile pour aérer le sol.</td><td>ver</td><td>l'animal</td></tr>" +
    "<tr><td>La serre de son jardin est faite de panneaux de <b>verre</b>.</td><td>verre</td><td>la matière</td></tr>" +
    "<tr><td>Les nuages se dirigent <b>vers</b> le nord.</td><td>vers</td><td>la direction</td></tr></table>",
  astuce: "Lis toute la phrase avant d'écrire : c'est le sens qui choisit l'orthographe. Un vert (couleur), un ver (animal), un verre (pour boire ou matière), vers (direction).",
  regle: "Les homonymes se prononcent pareil mais n'ont pas le même sens ni, souvent, la même orthographe. C'est le contexte qui indique comment écrire le mot.",
  niveaux: [
    [
      { t: "qcm", q: "Que sont des homonymes ?", choix: ["des mots qui se prononcent pareil mais n'ont pas le même sens", "des mots de sens proche", "des mots de sens contraire"], r: "des mots qui se prononcent pareil mais n'ont pas le même sens", expl: "C'est la définition de la leçon." },
      { t: "qcm", q: "Comment savoir quel homonyme écrire ?", choix: ["en s'aidant du contexte", "en choisissant le plus court", "en écrivant toujours le même"], r: "en s'aidant du contexte", expl: "Les mots qui entourent l'homonyme dans la phrase indiquent son sens." },
      { t: "relier", q: "Relie chaque mot à son sens.", paires: [["vert", "la couleur"], ["ver", "l'animal"], ["verre", "la matière"], ["vers", "la direction"]], expl: "C'est l'exemple de la leçon." },
      { t: "vf", q: "« ver » et « verre » sont des homonymes.", r: true, expl: "Ils se prononcent de la même façon mais ont des sens différents." },
      { t: "vf", q: "« voiture » et « automobile » sont des homonymes.", r: false, expl: "Ils ont le même sens mais ne se prononcent pas pareil : ce sont des synonymes." },
      { t: "qcm", q: "« Le … de terre aère le sol. »", choix: ["ver", "vert", "verre", "vers"], r: "ver", expl: "Il s'agit de l'animal : le ver." }
    ],
    [
      { t: "qcm", q: "« La pelouse est d'un … magnifique. »", choix: ["vert", "ver", "verre", "vers"], r: "vert", expl: "Il s'agit de la couleur : vert." },
      { t: "qcm", q: "« Les oiseaux volent … le sud. »", choix: ["vers", "vert", "verre", "ver"], r: "vers", expl: "Il s'agit de la direction : vers." },
      { t: "qcm", q: "« Je bois un … d'eau. »", choix: ["verre", "vert", "ver", "vers"], r: "verre", expl: "Un verre pour boire, fait de verre." },
      { t: "qcm", q: "« Ma … prépare le repas. »", choix: ["mère", "mer", "maire"], r: "mère", expl: "La maman : la mère." },
      { t: "qcm", q: "« Les pirogues partent en … . »", choix: ["mer", "mère", "maire"], r: "mer", expl: "L'étendue d'eau salée : la mer." },
      { t: "qcm", q: "« Le … de la commune inaugure l'école. »", choix: ["maire", "mer", "mère"], r: "maire", expl: "Celui qui dirige la commune : le maire." },
      { t: "relier", q: "Relie chaque homonyme à son sens.", paires: [["le sang", "liquide rouge du corps"], ["cent", "le nombre 100"], ["sans", "le contraire de avec"]], expl: "sang, cent, sans se prononcent pareil." },
      { t: "relier", q: "Relie chaque homonyme à son sens.", paires: [["le pain", "aliment du boulanger"], ["le pin", "un arbre"], ["peint", "du verbe peindre"]], expl: "pain, pin, peint se prononcent pareil." }
    ],
    [
      { t: "trous", q: "Écris le bon homonyme : <i>vert, ver, verre, vers</i>.", texte: "Moussa marche [vers] la boutique. Il achète un [verre] et une chemise [verte]. Dans le jardin, il voit un [ver] de terre.", expl: "vers (direction), verre (objet), verte (couleur, accordée avec chemise), ver (animal)." },
      { t: "trous", q: "Écris le bon homonyme : <i>mer, mère, maire</i>.", texte: "La [mère] d'Awa habite près de la [mer]. Le [maire] de Mbour lui a rendu visite.", expl: "mère (maman), mer (eau salée), maire (chef de la commune)." },
      { t: "qcm", q: "« Il a payé … francs. »", choix: ["cent", "sang", "sans"], r: "cent", expl: "Le nombre : cent." },
      { t: "qcm", q: "« Il est parti … son sac. »", choix: ["sans", "cent", "sang"], r: "sans", expl: "Le contraire de avec : sans." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Le boulanger vend du pain.", "Le boulanger vend du pin.", "Le boulanger vend du peint."], r: "Le boulanger vend du pain.", expl: "L'aliment : le pain." },
      { t: "vf", q: "Dans « Il a mal au cou », on pourrait aussi écrire « coup ».", r: false, expl: "Le cou est la partie du corps ; un coup est un choc. Le contexte choisit « cou »." },
      { t: "qcm", q: "« Le joueur a reçu un … de pied. »", choix: ["coup", "cou", "coût"], r: "coup", expl: "Un choc : un coup." }
    ],
    [
      { t: "dictee", texte: "Le ver de terre glisse vers la pelouse verte au bord du jardin.", expl: "ver (animal), vers (direction), verte (couleur)." },
      { t: "dictee", texte: "Ma mère regarde la mer pendant que le maire parle aux pêcheurs.", expl: "mère, mer, maire : trois homonymes." },
      { t: "trous", q: "Complète avec <i>cent, sang, sans</i>.", texte: "L'infirmier fait une prise de [sang]. Il ne prend pas d'argent : c'est [sans] frais. Pourtant, ailleurs, cela coûte [cent] francs.", expl: "sang (liquide), sans (contraire de avec), cent (nombre)." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une erreur d'homonyme ?", choix: ["Je bois un vert de lait.", "Il marche vers l'école.", "La feuille est verte.", "Le ver aère la terre."], r: "Je bois un vert de lait.", expl: "Pour boire, c'est un <b>verre</b>." },
      { t: "classer", q: "Range chaque mot selon son sens.", cases: ["animal", "couleur", "objet ou matière", "direction"], items: [["un ver de terre", "animal"], ["un pagne vert", "couleur"], ["un verre cassé", "objet ou matière"], ["vers la mer", "direction"], ["une robe verte", "couleur"]], expl: "C'est le contexte qui donne le sens." }
    ]
  ]
});
