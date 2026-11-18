// À VÉRIFIER : le titre et le début de cette leçon (définition des appareils électriques) sont sur la photo 0128, illisible ; la date est incertaine (début octobre 2026). La leçon « Le levier et la poulie » (même photo 0128) est illisible : seul le dessin légendé de la poulie (photo 0130) est repris ici ; rien n'est dit du levier.
LECONS.push({
  id: "ist-types-appareils",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les types d'appareils (et la poulie)",
  date: "2026-10-06",
  photos: ["DJI_20261118221922_0130_D.jpg", "DJI_20261118221927_0131_D.jpg"],
  retiens:
    "<p>Les <b>appareils électriques</b> fonctionnent avec le courant électrique et produisent par exemple le son, le froid, le mouvement… Ce courant peut provenir d'un <b>panneau solaire</b>. Exemples : la radio, le téléviseur, le ventilateur…</p>" +
    "<p>Les <b>appareils électroniques</b> s'occupent du <b>traitement de l'information</b>. Ils n'utilisent en général que des courants électriques faibles. Exemples : l'ordinateur, la tablette, le téléphone…</p>" +
    "<p>Les <b>appareils ménagers</b> servent à <b>préparer ou cuisiner les aliments</b>… Exemples : le réfrigérateur, la cuisinière, le réchaud à gaz, le grille-pain…</p>" +
    "<p>Les <b>appareils mécaniques</b> <b>transforment une force</b> qu'on leur applique en une force plus ou moins grande. Exemples : le vélo, la poulie, la brouette…</p>" +
    "<p><b>La poulie</b> (dessin du cahier) : elle est formée d'une <b>chape</b> (la pièce qui tient la roue, accrochée au crochet), d'une <b>roue à gorge</b> sur laquelle passe une <b>corde ou une chaîne</b> ; au bout de la corde, on accroche la <b>charge</b> (par exemple un seau).</p>",
  astuce: "<b>Électronique</b> → <b>information</b> (ordinateur, téléphone) ; <b>ménager</b> → la <b>cuisine</b> de la maison ; <b>mécanique</b> → la <b>force</b> des bras ou des jambes (vélo, brouette, poulie).",
  regle: "Appareils électriques : son, froid, mouvement (radio, ventilateur). Électroniques : information (ordinateur, téléphone). Ménagers : cuisine (cuisinière, réfrigérateur). Mécaniques : transforment une force (vélo, poulie, brouette).",
  niveaux: [
    [
      { t: "qcm", q: "À quoi servent les appareils électroniques ?", choix: ["au traitement de l'information", "à cuisiner", "à soulever des charges"], r: "au traitement de l'information", expl: "Ordinateur, tablette, téléphone traitent l'information." },
      { t: "qcm", q: "À quoi servent les appareils ménagers ?", choix: ["à préparer ou cuisiner les aliments", "à envoyer des messages", "à rouler"], r: "à préparer ou cuisiner les aliments", expl: "Réfrigérateur, cuisinière, réchaud à gaz, grille-pain." },
      { t: "qcm", q: "Que font les appareils mécaniques ?", choix: ["ils transforment une force en une force plus ou moins grande", "ils traitent l'information", "ils produisent du froid"], r: "ils transforment une force en une force plus ou moins grande", expl: "Vélo, poulie, brouette." },
      { t: "vf", q: "Le courant électrique peut provenir d'un panneau solaire.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "classer", q: "Range ces appareils.", cases: ["électronique", "mécanique"], items: [["l'ordinateur", "électronique"], ["le vélo", "mécanique"], ["la tablette", "électronique"], ["la brouette", "mécanique"], ["le téléphone", "électronique"], ["la poulie", "mécanique"]], expl: "Électronique : information. Mécanique : force." }
    ],
    [
      { t: "classer", q: "Range les exemples de la leçon.", cases: ["électrique", "électronique", "ménager", "mécanique"], items: [["le ventilateur", "électrique"], ["la radio", "électrique"], ["l'ordinateur", "électronique"], ["le réchaud à gaz", "ménager"], ["le grille-pain", "ménager"], ["la brouette", "mécanique"]], expl: "Ce sont les exemples du cahier." },
      { t: "relier", q: "Relie chaque type d'appareil à sa fonction.", paires: [["électronique", "traiter l'information"], ["ménager", "préparer les aliments"], ["mécanique", "transformer une force"]], expl: "Chaque famille a sa fonction." },
      { t: "relier", q: "Relie chaque partie de la poulie à sa description.", paires: [["la chape", "tient la roue, sous le crochet"], ["la roue à gorge", "la roue qui tourne"], ["la corde ou la chaîne", "passe sur la roue"], ["la charge", "ce qu'on soulève"]], expl: "C'est le dessin de la poulie du cahier." },
      { t: "saisie", q: "Sur quelle sorte de roue passe la corde d'une poulie ? Une roue à …", r: "gorge", expl: "La roue à gorge a un creux où passe la corde." },
      { t: "qcm", q: "Le seau accroché au bout de la corde d'une poulie s'appelle…", choix: ["la charge", "la chape", "la gorge"], r: "la charge", expl: "La charge est ce qu'on soulève." },
      { t: "vf", q: "Le téléviseur est donné comme exemple d'appareil électrique.", r: true, expl: "Radio, téléviseur, ventilateur." },
      { t: "trous", q: "Complète.", texte: "Le vélo, la poulie et la brouette sont des appareils [mécaniques]. L'ordinateur et la tablette sont des appareils [électroniques].", expl: "Deux familles d'appareils." },
      { t: "qcm", q: "Les appareils électroniques utilisent en général…", choix: ["des courants électriques faibles", "des courants très forts", "uniquement du gaz"], r: "des courants électriques faibles", expl: "C'est ce que dit la leçon." },
      { t: "saisie", q: "Comment s'appelle la pièce de la poulie qui tient la roue ?", r: "la chape", expl: "La chape, accrochée au crochet." }
    ],
    [
      { t: "qcm", q: "Le réfrigérateur fonctionne à l'électricité. Dans quelle famille la leçon le range-t-elle ?", choix: ["les appareils ménagers", "les appareils mécaniques", "les appareils électroniques"], r: "les appareils ménagers", expl: "Il sert à conserver les aliments à la maison : la leçon le range dans les appareils ménagers." },
      { t: "qcm", q: "Pourquoi la brouette est-elle un appareil mécanique ?", choix: ["elle aide à transporter une charge lourde avec moins de force", "elle traite l'information", "elle produit du froid"], r: "elle aide à transporter une charge lourde avec moins de force", expl: "Elle transforme la force qu'on lui applique." },
      { t: "vf", q: "Une poulie fonctionne avec le courant électrique.", r: false, expl: "La poulie est un appareil mécanique : elle fonctionne avec la force de celui qui tire la corde." },
      { t: "classer", q: "Range ces appareils de la maison d'Aïssatou.", cases: ["électronique", "ménager"], items: [["la tablette", "électronique"], ["la cuisinière", "ménager"], ["le téléphone", "électronique"], ["le réfrigérateur", "ménager"], ["l'ordinateur", "électronique"], ["le grille-pain", "ménager"]], expl: "Électronique : information. Ménager : cuisine." },
      { t: "qcm", q: "Quel appareil produit du mouvement pour rafraîchir la pièce ?", choix: ["le ventilateur", "la brouette", "la tablette"], r: "le ventilateur", expl: "Le ventilateur est un appareil électrique." },
      { t: "saisie", q: "D'où peut provenir le courant électrique, en plus du réseau ? D'un panneau …", r: "solaire", expl: "D'un panneau solaire." },
      { t: "vf", q: "Pour remonter un seau d'un puits, une poulie est utile.", r: true, expl: "La corde passe sur la roue à gorge et on tire la charge vers le haut." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Les appareils [électroniques] traitent l'information. Les appareils [ménagers] servent à préparer les aliments. Les appareils [mécaniques] transforment une force. Dans une poulie, la corde passe sur la roue à [gorge].", expl: "Toute la leçon." },
      { t: "classer", q: "Défi : range tous ces appareils.", cases: ["électrique", "électronique", "ménager", "mécanique"], items: [["la radio", "électrique"], ["le ventilateur", "électrique"], ["la tablette", "électronique"], ["le réchaud à gaz", "ménager"], ["le vélo", "mécanique"], ["la poulie", "mécanique"]], expl: "Révise les quatre familles." },
      { t: "qcm", q: "Mamadou remonte un seau d'eau du puits avec une corde passée sur une roue. Il utilise…", choix: ["une poulie, appareil mécanique", "un ordinateur, appareil électronique", "une cuisinière, appareil ménager"], r: "une poulie, appareil mécanique", expl: "Corde, roue, charge : c'est une poulie." },
      { t: "relier", q: "Relie chaque appareil à sa famille.", paires: [["le téléphone", "électronique"], ["la cuisinière", "ménager"], ["la brouette", "mécanique"], ["la radio", "électrique"]], expl: "Les exemples de la leçon." },
      { t: "vf", q: "Le vélo transforme la force des jambes du cycliste : c'est un appareil mécanique.", r: true, expl: "C'est un exemple d'appareil mécanique." }
    ]
  ]
});
