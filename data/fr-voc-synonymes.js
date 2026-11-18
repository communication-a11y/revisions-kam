LECONS.push({
  id: "fr-voc-synonymes",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les synonymes",
  date: "2026-09-16",
  photos: ["DJI_20261118220140_0015_D.jpg", "DJI_20261118220154_0016_D.jpg"],
  retiens:
    "<p>Les <b>synonymes</b> sont des mots qui ont un <b>sens proche</b>.</p>" +
    "<p>Ex : Mon père a acheté une <b>belle voiture</b> bleue. Son ancienne <b>automobile</b> n'était plus très <b>jolie</b>.<br>" +
    "Les noms <b>voiture</b> et <b>automobile</b> ont le même sens. Les adjectifs <b>belle</b> et <b>jolie</b> signifient presque la même chose.</p>" +
    "<p>Certains synonymes ont un sens <b>plus ou moins fort</b>.<br>Ex : Je trouve ta voiture <b>superbe</b>, elle est vraiment <b>magnifique</b> !<br>" +
    "<b>Superbe</b> et <b>magnifique</b> ont un sens plus fort que belle et jolie.</p>",
  astuce: "Un synonyme doit pouvoir <b>remplacer</b> le mot dans la phrase sans changer le sens. Il est de la même nature : un nom pour un nom, un adjectif pour un adjectif, un verbe pour un verbe.",
  regle: "Deux synonymes ont un sens proche et peuvent se remplacer dans la phrase. Certains sont plus forts que d'autres (belle < magnifique).",
  niveaux: [
    [
      { t: "qcm", q: "Que sont des synonymes ?", choix: ["des mots qui ont un sens proche", "des mots de sens contraire", "des mots qui se prononcent pareil"], r: "des mots qui ont un sens proche", expl: "C'est la définition de la leçon." },
      { t: "qcm", q: "Quel est le synonyme de <b>voiture</b> ?", choix: ["automobile", "route", "chauffeur"], r: "automobile", expl: "voiture et automobile ont le même sens." },
      { t: "qcm", q: "Quel est le synonyme de <b>jolie</b> ?", choix: ["belle", "laide", "petite"], r: "belle", expl: "belle et jolie signifient presque la même chose." },
      { t: "vf", q: "« Magnifique » a un sens plus fort que « jolie ».", r: true, expl: "Superbe et magnifique sont plus forts que belle et jolie." },
      { t: "vf", q: "« Grand » et « petit » sont des synonymes.", r: false, expl: "Ils ont des sens opposés : ce sont des contraires." },
      { t: "relier", q: "Relie chaque mot à son synonyme.", paires: [["voiture", "automobile"], ["content", "heureux"], ["maison", "habitation"], ["commencer", "débuter"], ["peur", "frayeur"]], expl: "Chaque paire a un sens proche." }
    ],
    [
      { t: "qcm", q: "Remplace le mot en gras par un synonyme : « Awa est <b>rapide</b> à la course. »", choix: ["vive", "lente", "fatiguée"], r: "vive", expl: "rapide et vive ont un sens proche ici." },
      { t: "qcm", q: "Remplace le mot en gras : « Le maître nous <b>donne</b> un exercice. »", choix: ["propose", "prend", "efface"], r: "propose", expl: "donner un exercice = proposer un exercice." },
      { t: "qcm", q: "Remplace le mot en gras : « Moussa a <b>peur</b> du noir. »", choix: ["la frayeur", "la joie", "le courage"], r: "la frayeur", expl: "peur et frayeur sont synonymes." },
      { t: "qcm", q: "Quel mot n'est PAS un synonyme de <b>content</b> ?", choix: ["triste", "heureux", "joyeux", "ravi"], r: "triste", expl: "triste est le contraire de content." },
      { t: "saisie", q: "Écris le synonyme de <b>automobile</b> donné dans la leçon.", r: "voiture", expl: "voiture et automobile ont le même sens." },
      { t: "classer", q: "Range ces mots selon leur sens.", cases: ["proche de « beau »", "proche de « content »"], items: [["joli", "proche de « beau »"], ["joyeux", "proche de « content »"], ["magnifique", "proche de « beau »"], ["heureux", "proche de « content »"], ["superbe", "proche de « beau »"], ["ravi", "proche de « content »"]], expl: "Chaque groupe réunit des synonymes." },
      { t: "relier", q: "Relie chaque verbe à son synonyme.", paires: [["crier", "hurler"], ["regarder", "observer"], ["finir", "terminer"], ["bâtir", "construire"]], expl: "Ces verbes ont un sens proche." },
      { t: "qcm", q: "Dans « Mon père a acheté une belle voiture. Son ancienne automobile n'était plus très jolie. », pourquoi l'auteur emploie-t-il « automobile » ?", choix: ["pour ne pas répéter « voiture »", "parce que c'est une autre voiture plus grande", "parce que « voiture » est faux"], r: "pour ne pas répéter « voiture »", expl: "Les synonymes servent à éviter les répétitions." }
    ],
    [
      { t: "classer", q: "Range ces adjectifs : sens normal ou sens fort ?", cases: ["sens normal", "sens fort"], items: [["beau", "sens normal"], ["magnifique", "sens fort"], ["chaud", "sens normal"], ["brûlant", "sens fort"], ["fatigué", "sens normal"], ["épuisé", "sens fort"]], expl: "magnifique, brûlant, épuisé disent la même chose en plus fort." },
      { t: "qcm", q: "Quel synonyme est le plus fort ?", choix: ["glacial", "frais", "froid"], r: "glacial", expl: "glacial = très, très froid." },
      { t: "qcm", q: "Quel synonyme est le plus fort ?", choix: ["immense", "grand", "haut"], r: "immense", expl: "immense = très grand." },
      { t: "qcm", q: "Range du moins fort au plus fort : bon, délicieux.", choix: ["bon, puis délicieux", "délicieux, puis bon"], r: "bon, puis délicieux", expl: "délicieux veut dire « très bon »." },
      { t: "vf", q: "Dans « Il fait une chaleur terrible », on peut remplacer « chaleur » par « fournaise » pour dire que c'est encore plus fort.", r: true, expl: "fournaise est un synonyme fort de chaleur." },
      { t: "qcm", q: "Quel mot peut remplacer « joli » dans « un joli dessin » sans changer la nature du mot ?", choix: ["beau", "beauté", "embellir"], r: "beau", expl: "joli est un adjectif : son synonyme doit aussi être un adjectif. beauté est un nom, embellir un verbe." }
    ],
    [
      { t: "qcm", q: "Trouve l'intrus (celui qui n'est pas synonyme des autres) : maison, demeure, habitation, jardin.", choix: ["jardin", "maison", "demeure", "habitation"], r: "jardin", expl: "maison, demeure, habitation ont un sens proche ; le jardin est autre chose." },
      { t: "qcm", q: "Trouve l'intrus : rapide, vif, lent, prompt.", choix: ["lent", "rapide", "vif", "prompt"], r: "lent", expl: "lent est le contraire des autres." },
      { t: "trous", q: "Remplace chaque mot entre parenthèses par le synonyme proposé dans la liste : <i>automobile, jolie, magnifique</i>.", texte: "Fatou a une [jolie] (belle) robe. Son père conduit une [automobile] (voiture) neuve. La fête était [magnifique] (superbe) !", expl: "belle = jolie ; voiture = automobile ; superbe = magnifique." },
      { t: "dictee", texte: "Mon père a acheté une belle voiture bleue et son ancienne automobile n'était plus jolie.", expl: "voiture / automobile et belle / jolie sont des synonymes." },
      { t: "qcm", q: "Quelle phrase évite une répétition grâce à un synonyme ?", choix: ["Le chat dort. Le matou ronronne.", "Le chat dort. Le chat ronronne.", "Le chat dort. Le chien aboie."], r: "Le chat dort. Le matou ronronne.", expl: "matou est un synonyme de chat (chat mâle) : il évite de répéter le même mot." }
    ]
  ]
});
