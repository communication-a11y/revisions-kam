// Début de la leçon retrouvé sur la photo 2026-11-25_29 (mercredi 25 novembre) ; figure sur 2026-11-25_19.
// Le cahier dit que la corde « ne passe pas par le centre » : en géométrie, le diamètre est la plus grande des cordes.
// Le module garde la leçon du cahier et ne pose aucune question piège là-dessus.
LECONS.push({
  id: "ma-geo-cercle",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le cercle",
  date: "2026-11-25",
  photos: ["2026-11-25_29.jpg", "2026-11-25_16.jpg", "2026-11-25_19.jpg"],
  retiens:
    "<p>Le <b>cercle</b> est une <b>ligne fermée</b> dont les points sont situés <b>à égale distance</b> d'un point appelé <b>centre du cercle</b>.</p>" +
    "<ul><li>Le <b>disque</b> est l'aire (la surface) délimitée par le cercle.</li>" +
    "<li>La <b>circonférence</b> ou <b>périmètre</b> est la longueur du cercle.</li>" +
    "<li>Le <b>rayon</b> est un segment qui joint le centre à un point du cercle.</li>" +
    "<li>Le <b>diamètre</b> est un segment qui passe par le centre et partage le cercle en 2 demi-cercles. Il mesure <b>2 fois le rayon</b>.</li>" +
    "<li>La <b>corde</b> joint deux points du cercle sans passer par le centre.</li>" +
    "<li>L'<b>arc</b> est la partie du cercle comprise entre deux points.</li></ul>" +
    "<p>Ex : pour construire un cercle de 8 cm de diamètre, on ouvre le compas de la moitié de 8 cm : le rayon mesure <b>4 cm</b>.</p>",
  astuce: "<b>Diamètre = rayon × 2</b> et <b>rayon = diamètre : 2</b>. Le compas s'ouvre toujours de la longueur du rayon.",
  regle: "Tous les points du cercle sont à la même distance du centre : c'est le rayon. Le diamètre passe par le centre et mesure deux rayons.",
  niveaux: [
    [
      { t: "qcm", q: "Comment s'appelle le point situé à égale distance de tous les points du cercle ?", choix: ["le centre", "le rayon", "l'arc"], r: "le centre", expl: "Tous les points du cercle sont à la même distance du centre." },
      { t: "qcm", q: "Le segment qui joint le centre à un point du cercle s'appelle…", choix: ["le rayon", "le diamètre", "la corde"], r: "le rayon", expl: "Le rayon va du centre jusqu'au cercle." },
      { t: "qcm", q: "La longueur du cercle s'appelle…", choix: ["la circonférence", "le disque", "le rayon"], r: "la circonférence", expl: "La circonférence, ou périmètre, est la longueur du cercle." },
      { t: "vf", q: "Le diamètre passe par le centre du cercle.", r: true, expl: "Il partage le cercle en 2 demi-cercles." },
      { t: "vf", q: "Le disque est la longueur du cercle.", r: false, expl: "Le disque est la surface ; la longueur, c'est la circonférence." }
    ],
    [
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["rayon", "du centre à un point du cercle"], ["diamètre", "passe par le centre"], ["corde", "joint deux points du cercle"], ["arc", "partie du cercle entre deux points"], ["disque", "surface du cercle"]], expl: "Les mots de la leçon." },
      { t: "saisie", q: "Un cercle a 8 cm de diamètre. Son rayon mesure…", r: "4", nombre: true, unite: "cm", expl: "Rayon = diamètre : 2 = 8 : 2 = 4 cm." },
      { t: "saisie", q: "Un cercle a 5 cm de rayon. Son diamètre mesure…", r: "10", nombre: true, unite: "cm", expl: "Diamètre = rayon × 2 = 5 × 2 = 10 cm." },
      { t: "saisie", q: "Diamètre : 12 cm. Rayon = …", r: "6", nombre: true, unite: "cm", expl: "12 : 2 = 6 cm." },
      { t: "qcm", q: "Pour tracer un cercle de 6 cm de diamètre, j'ouvre mon compas de…", choix: ["3 cm", "6 cm", "12 cm"], r: "3 cm", expl: "Le compas s'ouvre de la longueur du rayon : 6 : 2 = 3 cm." },
      { t: "qcm", q: "En combien de parties le diamètre partage-t-il le cercle ?", choix: ["2 demi-cercles", "3 parties", "4 quarts"], r: "2 demi-cercles", expl: "Le diamètre partage le cercle en 2 demi-cercles." },
      { t: "trous", q: "Complète.", nombre: true, texte: "rayon 7 cm → diamètre [14] cm — diamètre 20 cm → rayon [10] cm — rayon 2,5 cm → diamètre [5] cm", expl: "Diamètre = rayon × 2 ; rayon = diamètre : 2." },
      { t: "vf", q: "Tous les rayons d'un même cercle ont la même longueur.", r: true, expl: "Tous les points du cercle sont à égale distance du centre." }
    ],
    [
      { t: "saisie", q: "Diamètre : 9 cm. Rayon = …", r: "4,5", nombre: true, unite: "cm", expl: "9 : 2 = 4,5 cm." },
      { t: "qcm", q: "Combien de rayons mesure un diamètre ?", choix: ["2", "1", "4"], r: "2", expl: "Le diamètre va d'un bord à l'autre en passant par le centre : 2 rayons." },
      { t: "classer", q: "Longueur ou surface ?", cases: ["une longueur", "une surface"], items: [["le rayon", "une longueur"], ["le diamètre", "une longueur"], ["la circonférence", "une longueur"], ["le disque", "une surface"]], expl: "Seul le disque est une surface ; les autres se mesurent en cm, m…" },
      { t: "saisie", q: "Un rond-point a un rayon de 15 m. Quel est son diamètre ?", r: "30", nombre: true, unite: "m", expl: "15 × 2 = 30 m." },
      { t: "qcm", q: "Deux cercles : le premier a un rayon de 4 cm, le second un diamètre de 7 cm. Lequel est le plus grand ?", choix: ["le premier", "le second", "ils sont égaux"], r: "le premier", expl: "Premier : diamètre 4 × 2 = 8 cm, plus grand que 7 cm." },
      { t: "qcm", q: "La partie du cercle comprise entre deux points s'appelle…", choix: ["un arc", "une corde", "un rayon"], r: "un arc", expl: "L'arc est un morceau du cercle lui-même ; la corde est le segment droit qui joint les deux points." }
    ],
    [
      { t: "probleme", q: "Moussa trace un cercle de 10 cm de diamètre, puis un autre cercle de même centre dont le rayon est 2 cm plus long.", etapes: [{ q: "Étape 1 : rayon du premier cercle", r: "5", unite: "cm" }, { q: "Étape 2 : rayon du second cercle", r: "7", unite: "cm" }, { q: "Étape 3 : diamètre du second cercle", r: "14", unite: "cm" }], expl: "10 : 2 = 5 ; 5 + 2 = 7 ; 7 × 2 = 14 cm." },
      { t: "probleme", q: "Une table ronde a 1,2 m de diamètre. On veut la recouvrir d'une nappe ronde qui dépasse de 10 cm tout autour.", etapes: [{ q: "Étape 1 : rayon de la table en cm", r: "60", unite: "cm" }, { q: "Étape 2 : rayon de la nappe en cm", r: "70", unite: "cm" }, { q: "Étape 3 : diamètre de la nappe en cm", r: "140", unite: "cm" }], expl: "1,2 m = 120 cm ; 120 : 2 = 60 ; 60 + 10 = 70 ; 70 × 2 = 140 cm." },
      { t: "trous", q: "Complète la leçon.", texte: "Le [rayon] joint le centre à un point du cercle. Le [diamètre] passe par le centre. La longueur du cercle est la [circonférence]. La surface du cercle est le [disque].", expl: "Les quatre mots essentiels." },
      { t: "qcm", q: "Pour dessiner un cercle de 16 cm de diamètre sur le tableau, la maîtresse attache une craie à une ficelle. Quelle longueur de ficelle doit-elle laisser ?", choix: ["8 cm", "16 cm", "32 cm"], r: "8 cm", expl: "La ficelle joue le rôle du rayon : 16 : 2 = 8 cm." },
      { t: "vf", q: "Si deux cercles ont le même diamètre, ils ont aussi le même rayon.", r: true, expl: "Le rayon est toujours la moitié du diamètre." },
      { t: "qcm", q: "Le cercle est une ligne…", choix: ["fermée", "ouverte", "droite"], r: "fermée", expl: "Le cercle est une ligne fermée dont tous les points sont à égale distance du centre." },
      { t: "vf", q: "Sur la figure, le segment qui va du centre O au point A du cercle est un rayon.", r: true, expl: "Il joint le centre à un point du cercle." }
    ]
  ]
});
