// Le prénom de l'exemple du cahier (« Aston est studieuse », lecture incertaine) est remplacé par « Awa ».
LECONS.push({
  id: "fr-orth-quand-quant-quen",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les homophones quand, quant, qu'en",
  date: "2026-10-20",
  photos: ["DJI_20261118220552_0045_D.jpg", "DJI_20261118220559_0046_D.jpg"],
  retiens:
    "<p>On écrit :</p><ul>" +
    "<li><b>quand</b> s'il exprime le <b>temps</b>. On peut le remplacer par <b>lorsque</b>.<br>Ex : Je partirai <b>quand</b> il sera là.</li>" +
    "<li><b>quant</b> s'il est suivi de <b>à, au, aux</b>.<br>Ex : Awa est studieuse. <b>Quant à</b> David, il s'amuse toujours.</li>" +
    "<li><b>qu'en</b> si on peut le remplacer par <b>que en</b>.<br>Ex : La mer est agitée. <b>Qu'en</b> penses-tu ? (que penses-tu <b>de cela</b> ?)</li></ul>",
  astuce: "<b>quand</b> → lorsque (le temps). <b>quant</b> → toujours suivi de à, au, aux. <b>qu'en</b> → que + en.",
  regle: "quand = lorsque (temps) ; quant est toujours suivi de à, au, aux ; qu'en = que en.",
  niveaux: [
    [
      { t: "qcm", q: "On écrit « quand » s'il exprime…", choix: ["le temps", "le lieu", "la cause"], r: "le temps", expl: "« quand » exprime le temps ; on peut le remplacer par « lorsque »." },
      { t: "qcm", q: "Par quel mot peut-on remplacer « quand » ?", choix: ["lorsque", "que en", "à propos"], r: "lorsque", expl: "Je partirai quand il sera là = je partirai lorsqu'il sera là." },
      { t: "qcm", q: "« quant » est toujours suivi de…", choix: ["à, au ou aux", "un verbe", "un point"], r: "à, au ou aux", expl: "quant à, quant au, quant aux." },
      { t: "vf", q: "On écrit « qu'en » quand on peut le remplacer par « que en ».", r: true, expl: "Qu'en penses-tu ? = Que penses-tu de cela ?" },
      { t: "relier", q: "Relie chaque homophone à son truc.", paires: [["quand", "lorsque"], ["quant", "suivi de à, au, aux"], ["qu'en", "que en"]], expl: "Ce sont les trois moyens de la leçon." },
      { t: "qcm", q: "« Je partirai … il sera là. »", choix: ["quand", "quant", "qu'en"], r: "quand", expl: "On peut dire « lorsqu'il sera là » : c'est le temps." }
    ],
    [
      { t: "trous", q: "Complète avec quand, quant ou qu'en.", texte: "[Quand] il pleut, je reste à la maison. — Awa aime lire ; [quant] à Moussa, il préfère jouer. — La mer est agitée. [Qu'en] penses-tu ?", expl: "lorsque → quand ; suivi de à → quant ; que en → qu'en." },
      { t: "qcm", q: "« … la cloche sonne, les élèves sortent. »", choix: ["Quand", "Quant", "Qu'en"], r: "Quand", expl: "Lorsque la cloche sonne : c'est le temps." },
      { t: "qcm", q: "« Fatou est arrivée ; … aux autres, ils sont en retard. »", choix: ["quant", "quand", "qu'en"], r: "quant", expl: "Suivi de « aux » : quant." },
      { t: "qcm", q: "« Voici mon dessin. … dis-tu ? »", choix: ["Qu'en", "Quand", "Quant"], r: "Qu'en", expl: "Que dis-tu de cela ? → que en → qu'en." },
      { t: "qcm", q: "« … pars-tu pour Saint-Louis ? »", choix: ["Quand", "Quant", "Qu'en"], r: "Quand", expl: "On demande le moment : quand." },
      { t: "classer", q: "Range ces phrases selon le mot qui manque.", cases: ["quand", "quant", "qu'en"], items: [["… tu auras fini, appelle-moi.", "quand"], ["… au repas, il est prêt.", "quant"], ["… penses-tu ?", "qu'en"], ["… il fait chaud, on boit beaucoup.", "quand"], ["… à moi, je reste ici.", "quant"], ["Ce film ? … dit ton frère ?", "qu'en"]], expl: "lorsque → quand ; à, au, aux → quant ; que en → qu'en." },
      { t: "vf", q: "Dans « Quant à mon frère, il dort », on peut remplacer « quant » par « lorsque ».", r: false, expl: "« Lorsque à mon frère » ne veut rien dire : ici c'est « quant », suivi de « à »." },
      { t: "saisie", q: "Écris le mot qui manque (quand, quant ou qu'en) : « … aux bagages, ils sont dans le car. »", r: "Quant", expl: "Suivi de « aux » : quant." },
      { t: "saisie", q: "Écris le mot qui manque (quand, quant ou qu'en) : « Je serai content … tu viendras. »", r: "quand", expl: "Lorsque tu viendras : c'est le temps." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Quant au marché, il ouvre à huit heures.", "Quand au marché, il ouvre à huit heures.", "Qu'en au marché, il ouvre à huit heures."], r: "Quant au marché, il ouvre à huit heures.", expl: "Suivi de « au » : quant." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Quand le soleil se couche, les pêcheurs rentrent.", "Quant le soleil se couche, les pêcheurs rentrent.", "Qu'en le soleil se couche, les pêcheurs rentrent."], r: "Quand le soleil se couche, les pêcheurs rentrent.", expl: "Lorsque le soleil se couche : quand." },
      { t: "saisie", q: "Écris le mot qui manque : « Tu as lu ce conte ? … retiens-tu ? »", r: "Qu'en", expl: "Que retiens-tu de ce conte ? → que en → qu'en." },
      { t: "trous", q: "Complète avec quand, quant ou qu'en.", texte: "[Quand] l'harmattan souffle, la poussière envahit tout. [Quant] aux enfants, ils se couvrent le visage. Cette saison est difficile ; [qu'en] disent les anciens ?", expl: "lorsque → quand ; aux → quant ; que en → qu'en." },
      { t: "vf", q: "« Quand » peut servir à poser une question sur le moment.", r: true, expl: "Quand arrives-tu ? On demande le moment : c'est le temps." },
      { t: "saisie", q: "Remplace « lorsque » par « quand » : « Lorsque la pluie tombe, les champs verdissent. »", r: "Quand la pluie tombe, les champs verdissent.", large: true, expl: "lorsque = quand : on garde le même sens (le temps)." },
      { t: "relier", q: "Relie chaque début de phrase à sa fin.", paires: [["Quand le car arrive,", "les voyageurs descendent."], ["Quant aux bagages,", "ils restent sur le toit."], ["Le voyage est long ;", "qu'en pense le chauffeur ?"]], expl: "Temps : quand ; suivi de aux : quant ; que en : qu'en." }
    ],
    [
      { t: "dictee", texte: "Quand la pluie tombe sur Ziguinchor, les enfants courent se mettre à l'abri.", expl: "Lorsque la pluie tombe : quand." },
      { t: "dictee", texte: "Ibrahima a fini ses devoirs ; quant à sa cousine, elle joue encore dans la cour.", expl: "Suivi de « à » : quant." },
      { t: "dictee", texte: "Le maître nous montre une carte du Sénégal. Qu'en pensez-vous ?", expl: "Que pensez-vous de cela ? → qu'en." },
      { t: "trous", q: "Complète ce dialogue.", texte: "— [Quand] partons-nous au village ? — Demain matin. [Quant] à ton frère, il nous rejoindra le soir. — Et le cadeau pour grand-mère, [qu'en] fais-tu ?", expl: "quand (le moment) ; quant à ; qu'en (que fais-tu de cela ?)." },
      { t: "qcm", q: "Dans quelle phrase faut-il écrire « quant » ?", choix: ["… aux poules, elles dorment déjà.", "… il fait nuit, les poules dorment.", "Ces poules, … fais-tu ?"], r: "… aux poules, elles dorment déjà.", expl: "Suivi de « aux » : quant." }
    ]
  ]
});
