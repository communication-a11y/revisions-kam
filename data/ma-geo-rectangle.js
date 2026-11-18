// À VÉRIFIER : au cahier (photo 0080), « Il y a 2 médianes de mêmes mesures qui se coupent perpendiculairement ».
// Dans un rectangle de 4 cm sur 2 cm, les médianes mesurent 4 cm et 2 cm : elles ne sont pas égales. Ce sont les DIAGONALES
// qui ont la même mesure. Le module enseigne : diagonales de même longueur ; médianes perpendiculaires (non égales).
LECONS.push({
  id: "ma-geo-rectangle",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le rectangle : construction et propriétés",
  date: "2026-10-13",
  photos: ["DJI_20261118221101_0079_D.jpg", "DJI_20261118221108_0080_D.jpg"],
  retiens:
    "<p>Un <b>rectangle</b> est un quadrilatère qui a :</p>" +
    "<ul><li><b>4 côtés égaux 2 à 2</b> : les côtés opposés ont la même longueur ;</li><li><b>4 angles droits</b> ;</li><li><b>4 sommets</b>.</li></ul>" +
    "<p>Ses <b>dimensions</b> sont la <b>longueur</b> et la <b>largeur</b>. Exemple : un rectangle de 4 cm sur 2 cm (longueur 4 cm, largeur 2 cm).</p>" +
    "<p>Le rectangle a <b>2 diagonales de même mesure</b> (elles relient les sommets opposés) et <b>2 médianes qui se coupent perpendiculairement</b> (elles relient les milieux des côtés opposés). Les médianes n'ont pas la même mesure : dans le rectangle de 4 cm sur 2 cm, l'une mesure 4 cm, l'autre 2 cm.</p>" +
    "<p>Pour le construire sur ton cahier, on utilise la règle et l'équerre.</p>",
  astuce: "Le rectangle ressemble au carré (4 angles droits) mais ses côtés ne sont égaux que <b>deux par deux</b> : deux longueurs, deux largeurs.",
  regle: "Le rectangle a 4 angles droits, 4 sommets et des côtés opposés égaux (2 longueurs, 2 largeurs). Ses 2 diagonales ont la même mesure ; ses 2 médianes se coupent perpendiculairement.",
  niveaux: [
    [
      { t: "qcm", q: "Combien d'angles droits a un rectangle ?", choix: ["4", "2", "1"], r: "4", expl: "Comme le carré, le rectangle a 4 angles droits." },
      { t: "qcm", q: "Les côtés d'un rectangle sont…", choix: ["égaux 2 à 2", "tous égaux", "tous différents"], r: "égaux 2 à 2", expl: "Les deux longueurs sont égales, les deux largeurs aussi." },
      { t: "qcm", q: "Quelles sont les dimensions d'un rectangle ?", choix: ["la longueur et la largeur", "la base et la hauteur", "le rayon et le diamètre"], r: "la longueur et la largeur", expl: "On donne un rectangle par sa longueur et sa largeur : 4 cm sur 2 cm." },
      { t: "vf", q: "Un rectangle a 4 sommets.", r: true, expl: "Un sommet à chaque coin : 4 sommets." },
      { t: "vf", q: "Les deux diagonales d'un rectangle ont la même mesure.", r: true, expl: "C'est une propriété du rectangle : ses diagonales sont égales." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["diagonale", "relie deux sommets opposés"], ["médiane", "relie les milieux de deux côtés opposés"], ["longueur", "le plus grand côté"], ["largeur", "le plus petit côté"]], expl: "Vocabulaire du rectangle." }
    ],
    [
      { t: "saisie", q: "Combien de diagonales a un rectangle ?", r: "2", nombre: true, expl: "Deux paires de sommets opposés : 2 diagonales." },
      { t: "saisie", q: "Combien de médianes a un rectangle ?", r: "2", nombre: true, expl: "Deux paires de côtés opposés : 2 médianes." },
      { t: "trous", q: "Complète.", texte: "Un rectangle est un [quadrilatère] qui a 4 côtés égaux 2 à 2, 4 angles [droits] et 4 [sommets].", expl: "Ce sont les propriétés de la leçon." },
      { t: "qcm", q: "Un rectangle mesure 4 cm sur 2 cm. Combien mesure le côté opposé à la longueur ?", choix: ["4 cm", "2 cm", "6 cm"], r: "4 cm", expl: "Les côtés opposés sont égaux : l'autre longueur mesure aussi 4 cm." },
      { t: "qcm", q: "Les deux médianes d'un rectangle se coupent…", choix: ["perpendiculairement", "sans former d'angle droit", "jamais"], r: "perpendiculairement", expl: "L'une est horizontale, l'autre verticale : elles forment des angles droits." },
      { t: "classer", q: "Carré, rectangle ou les deux ?", cases: ["carré seulement", "rectangle et carré"], items: [["4 côtés égaux", "carré seulement"], ["4 angles droits", "rectangle et carré"], ["4 sommets", "rectangle et carré"], ["côtés opposés égaux", "rectangle et carré"], ["2 diagonales de même mesure", "rectangle et carré"]], expl: "Le carré a toutes les propriétés du rectangle, avec en plus 4 côtés égaux." },
      { t: "saisie", q: "Rectangle de 4 cm sur 2 cm. La médiane qui relie les milieux des deux largeurs mesure … cm", r: "4", nombre: true, unite: "cm", expl: "Elle traverse le rectangle dans le sens de la longueur : 4 cm." },
      { t: "saisie", q: "Rectangle de 4 cm sur 2 cm. La médiane qui relie les milieux des deux longueurs mesure … cm", r: "2", nombre: true, unite: "cm", expl: "Elle traverse le rectangle dans le sens de la largeur : 2 cm." }
    ],
    [
      { t: "vf", q: "Les deux médianes d'un rectangle de 4 cm sur 2 cm ont la même mesure.", r: false, expl: "L'une mesure 4 cm et l'autre 2 cm. Ce sont les diagonales qui ont la même mesure." },
      { t: "vf", q: "Un carré est un rectangle particulier, dont les 4 côtés sont égaux.", r: true, expl: "Le carré a 4 angles droits et des côtés opposés égaux, comme le rectangle ; en plus, tous ses côtés sont égaux." },
      { t: "vf", q: "Une figure à 4 côtés égaux 2 à 2, sans angle droit, est un rectangle.", r: false, expl: "Un rectangle doit avoir 4 angles droits." },
      { t: "qcm", q: "Dans le rectangle EFGH, la diagonale [EG] mesure 5 cm. Combien mesure la diagonale [FH] ?", choix: ["5 cm", "on ne peut pas savoir", "2,5 cm"], r: "5 cm", expl: "Les deux diagonales d'un rectangle ont la même mesure." },
      { t: "qcm", q: "Moussa dit : « Dans un rectangle, les médianes ont la même mesure. » Que lui réponds-tu ?", choix: ["Non : ce sont les diagonales qui ont la même mesure.", "Oui, c'est toujours vrai.", "Non : un rectangle n'a pas de médianes."], r: "Non : ce sont les diagonales qui ont la même mesure.", expl: "Les médianes d'un rectangle ne sont égales que si c'est un carré." },
      { t: "classer", q: "Range chaque propriété du rectangle.", cases: ["propriété des diagonales", "propriété des médianes"], items: [["relient les sommets opposés", "propriété des diagonales"], ["relient les milieux des côtés opposés", "propriété des médianes"], ["ont la même mesure", "propriété des diagonales"], ["se coupent perpendiculairement", "propriété des médianes"]], expl: "Diagonales : sommets opposés, même mesure. Médianes : milieux des côtés, perpendiculaires." }
    ],
    [
      { t: "trous", q: "Complète.", texte: "Le rectangle a 2 [diagonales] de même mesure et 2 [médianes] qui se coupent perpendiculairement. Ses dimensions sont la [longueur] et la [largeur].", expl: "Propriétés du rectangle." },
      { t: "saisie", q: "Rectangle de 6 cm sur 3 cm. Combien mesure son périmètre ? … cm", r: "18", nombre: true, unite: "cm", expl: "(6 + 3) × 2 = 18 cm." },
      { t: "qcm", q: "Fatou décrit une figure : « 4 angles droits, deux côtés de 7 cm et deux côtés de 4 cm. » C'est…", choix: ["un rectangle", "un carré", "un triangle"], r: "un rectangle", expl: "4 angles droits et des côtés égaux 2 à 2 (mais pas tous égaux) : un rectangle." },
      { t: "qcm", q: "Dans un rectangle de 5 cm sur 3 cm, que mesurent les deux médianes ?", choix: ["5 cm et 3 cm", "5 cm et 5 cm", "3 cm et 3 cm"], r: "5 cm et 3 cm", expl: "Chaque médiane traverse le rectangle d'un côté à l'autre : l'une dans le sens de la longueur (5 cm), l'autre dans le sens de la largeur (3 cm)." },
      { t: "classer", q: "Vrai ou faux pour le rectangle ?", cases: ["vrai", "faux"], items: [["Il a 4 angles droits.", "vrai"], ["Ses 4 côtés sont toujours égaux.", "faux"], ["Ses diagonales ont la même mesure.", "vrai"], ["Ses médianes ont toujours la même mesure.", "faux"], ["Ses médianes se coupent perpendiculairement.", "vrai"], ["Ses côtés opposés sont égaux.", "vrai"]], expl: "Rectangle : 4 angles droits, côtés opposés égaux, diagonales égales, médianes perpendiculaires." }
    ]
  ]
});
