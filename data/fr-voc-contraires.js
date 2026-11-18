// À VÉRIFIER : le cahier (photo 0020) écrit « certains contraires sont des mots qui appartiennent à la même . » ; le mot manquant est très probablement « famille ».
LECONS.push({
  id: "fr-voc-contraires",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les contraires",
  date: "2026-09-21",
  photos: ["DJI_20261118220216_0019_D.jpg", "DJI_20261118220225_0020_D.jpg"],
  retiens:
    "<p>Deux noms, deux adjectifs ou deux verbes de <b>sens opposé</b> sont des <b>contraires</b>.</p>" +
    "<ul><li>deux noms : La Terre subit des <b>réchauffements</b> ou des <b>refroidissements</b>.</li>" +
    "<li>deux adjectifs : La météo annonce parfois du <b>beau</b> temps, parfois du <b>mauvais</b> temps.</li>" +
    "<li>deux verbes : Les températures risquent de <b>monter</b> ou de <b>descendre</b> selon le vent.</li></ul>" +
    "<p>Certains contraires sont des mots qui appartiennent à la <b>même famille</b> : ils sont construits à partir d'un radical et d'un <b>préfixe</b>.<br>" +
    "Ex : Mon nouvel anorak est très <b>confortable</b>, l'ancien était devenu <b>in</b>confortable.</p>",
  astuce: "Le contraire est toujours de la même nature : un nom ↔ un nom (le jour ↔ la nuit), un adjectif ↔ un adjectif (chaud ↔ froid), un verbe ↔ un verbe (ouvrir ↔ fermer).",
  regle: "Deux contraires ont des sens opposés et sont de la même nature. On peut parfois former un contraire avec un préfixe : confortable → inconfortable.",
  niveaux: [
    [
      { t: "qcm", q: "Que sont des contraires ?", choix: ["des mots de sens opposé", "des mots de sens proche", "des mots qui s'écrivent pareil"], r: "des mots de sens opposé", expl: "Deux contraires ont des sens opposés." },
      { t: "qcm", q: "Quel est le contraire de <b>monter</b> ?", choix: ["descendre", "grimper", "courir"], r: "descendre", expl: "Les températures montent ou descendent." },
      { t: "qcm", q: "Quel est le contraire de <b>beau</b> (temps) ?", choix: ["mauvais", "joli", "chaud"], r: "mauvais", expl: "du beau temps / du mauvais temps." },
      { t: "vf", q: "« réchauffement » et « refroidissement » sont deux noms contraires.", r: true, expl: "Ce sont deux noms de sens opposé." },
      { t: "vf", q: "« confortable » et « inconfortable » sont des contraires de la même famille.", r: true, expl: "inconfortable = préfixe in- + confortable." },
      { t: "relier", q: "Relie chaque mot à son contraire.", paires: [["grand", "petit"], ["ouvrir", "fermer"], ["le jour", "la nuit"], ["rapide", "lent"], ["entrer", "sortir"]], expl: "Chaque paire a des sens opposés." }
    ],
    [
      { t: "saisie", q: "Écris le contraire de <b>chaud</b>.", r: "froid", expl: "chaud ↔ froid" },
      { t: "saisie", q: "Écris le contraire de <b>gagner</b> (un match).", r: "perdre", expl: "gagner ↔ perdre" },
      { t: "saisie", q: "Écris le contraire de <b>possible</b> avec un préfixe.", r: "impossible", expl: "im- + possible : impossible." },
      { t: "saisie", q: "Écris le contraire de <b>connu</b> avec un préfixe.", r: "inconnu", expl: "in- + connu : inconnu." },
      { t: "saisie", q: "Écris le contraire de <b>faire</b> avec un préfixe.", r: "défaire", expl: "dé- + faire : défaire." },
      { t: "classer", q: "Range ces paires de contraires selon leur nature.", cases: ["deux noms", "deux adjectifs", "deux verbes"], items: [["la paix / la guerre", "deux noms"], ["propre / sale", "deux adjectifs"], ["aimer / détester", "deux verbes"], ["le début / la fin", "deux noms"], ["riche / pauvre", "deux adjectifs"], ["allumer / éteindre", "deux verbes"]], expl: "Les deux mots d'une paire de contraires sont toujours de la même nature." },
      { t: "qcm", q: "Quel est le contraire de <b>heureux</b> ?", choix: ["malheureux", "joyeux", "content"], r: "malheureux", expl: "mal- + heureux : malheureux." },
      { t: "qcm", q: "Quel est le contraire de <b>la joie</b> ?", choix: ["la tristesse", "triste", "pleurer"], r: "la tristesse", expl: "joie est un nom : son contraire doit être un nom, la tristesse." }
    ],
    [
      { t: "classer", q: "Comment est formé le contraire ?", cases: ["avec un préfixe", "avec un autre mot"], items: [["poli / impoli", "avec un préfixe"], ["haut / bas", "avec un autre mot"], ["obéir / désobéir", "avec un préfixe"], ["vieux / jeune", "avec un autre mot"], ["lisible / illisible", "avec un préfixe"], ["acheter / vendre", "avec un autre mot"]], expl: "impoli, désobéir, illisible : préfixe + mot. bas, jeune, vendre : un mot différent." },
      { t: "qcm", q: "Le contraire de <b>patient</b> est…", choix: ["impatient", "inpatient", "dépatient"], r: "impatient", expl: "Devant p, on écrit im- : impatient." },
      { t: "saisie", q: "Écris le contraire de <b>honnête</b> avec un préfixe.", r: "malhonnête", expl: "mal- + honnête : malhonnête." },
      { t: "saisie", q: "Écris le contraire de <b>coller</b> avec un préfixe.", r: "décoller", expl: "dé- + coller : décoller." },
      { t: "qcm", q: "« Le magasin est <b>ouvert</b>. » Quelle phrase dit le contraire ?", choix: ["Le magasin est fermé.", "Le magasin est grand.", "Le magasin est neuf."], r: "Le magasin est fermé.", expl: "ouvert ↔ fermé" },
      { t: "saisie", q: "Écris la phrase contraire en changeant le mot en gras : « L'eau du puits est <b>propre</b>. »", r: "L'eau du puits est sale.", large: true, expl: "propre ↔ sale" },
      { t: "vf", q: "« la joie » et « triste » sont des contraires.", r: false, expl: "la joie est un nom et triste un adjectif : deux contraires sont de la même nature. On dit la joie ↔ la tristesse, ou joyeux ↔ triste." }
    ],
    [
      { t: "trous", q: "Écris le contraire du mot entre parenthèses.", texte: "Hier, il faisait [froid] (chaud). Les enfants sont [sortis] (entrés) de la classe en [riant] (pleurant).", expl: "chaud ↔ froid, entrer ↔ sortir, pleurer ↔ rire." },
      { t: "trous", q: "Forme le contraire avec un préfixe.", texte: "un travail possible → un travail [impossible] ; un élève obéissant → un élève [désobéissant] ; un mot connu → un mot [inconnu]", expl: "im-, dés-, in- servent à former des contraires." },
      { t: "dictee", texte: "La météo annonce parfois du beau temps et parfois du mauvais temps.", expl: "beau / mauvais : deux adjectifs contraires." },
      { t: "qcm", q: "Trouve l'intrus (la paire qui n'est PAS une paire de contraires).", choix: ["joli / beau", "monter / descendre", "jour / nuit", "propre / sale"], r: "joli / beau", expl: "joli et beau ont un sens proche : ce sont des synonymes." },
      { t: "saisie", q: "Écris la phrase contraire en changeant les deux mots en gras : « Le petit garçon <b>monte</b> vers le <b>haut</b> de la colline. »", r: "Le petit garçon descend vers le bas de la colline.", large: true, expl: "monter ↔ descendre, haut ↔ bas." }
    ]
  ]
});
