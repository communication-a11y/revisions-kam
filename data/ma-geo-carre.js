LECONS.push({
  id: "ma-geo-carre",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le carré : construction et propriétés",
  date: "2026-10-07",
  photos: ["DJI_20261118221008_0075_D.jpg"],
  retiens:
    "<p>Un <b>carré</b> est un quadrilatère (une figure à 4 côtés) qui a :</p>" +
    "<ul><li><b>4 côtés égaux</b> ;</li><li><b>4 angles droits</b> ;</li><li><b>4 sommets</b>.</li></ul>" +
    "<p>La <b>médiane</b> est le segment qui relie les milieux de deux côtés opposés. Le carré a 2 médianes.</p>" +
    "<p>La <b>diagonale</b> est le segment qui relie deux sommets opposés. Le carré a 2 diagonales.</p>" +
    "<p>Les médianes et les diagonales se coupent <b>au même point</b>, le centre du carré.</p>" +
    "<p>Exemple : dans le carré ABCD de 4 cm de côté (A en haut à gauche, B en haut à droite, C en bas à droite, D en bas à gauche), les diagonales sont [AC] et [BD].</p>" +
    "<p>Pour le construire sur ton cahier, on utilise la règle et l'équerre.</p>",
  astuce: "<b>Diagonale</b> : d'un coin au coin d'en face. <b>Médiane</b> : du milieu d'un côté au milieu du côté d'en face.",
  regle: "Le carré a 4 côtés égaux, 4 angles droits et 4 sommets. Diagonale : relie deux sommets opposés. Médiane : relie les milieux de deux côtés opposés.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de côtés égaux a un carré ?", choix: ["4", "2", "3"], r: "4", expl: "Le carré a 4 côtés égaux." },
      { t: "qcm", q: "Combien d'angles droits a un carré ?", choix: ["4", "2", "0"], r: "4", expl: "Les 4 angles du carré sont droits." },
      { t: "qcm", q: "Un quadrilatère est une figure qui a…", choix: ["4 côtés", "3 côtés", "5 côtés"], r: "4 côtés", expl: "quadri = quatre : un quadrilatère a 4 côtés." },
      { t: "qcm", q: "Le segment qui relie deux sommets opposés s'appelle…", choix: ["une diagonale", "une médiane", "un côté"], r: "une diagonale", expl: "La diagonale va d'un sommet au sommet opposé." },
      { t: "qcm", q: "Le segment qui relie les milieux de deux côtés opposés s'appelle…", choix: ["une médiane", "une diagonale", "un sommet"], r: "une médiane", expl: "La médiane relie les milieux de deux côtés opposés." },
      { t: "vf", q: "Les médianes et les diagonales d'un carré se coupent au même point.", r: true, expl: "Elles passent toutes par le centre du carré." }
    ],
    [
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["diagonale", "relie deux sommets opposés"], ["médiane", "relie les milieux de deux côtés opposés"], ["sommet", "point où deux côtés se rejoignent"], ["côté", "segment qui borde la figure"]], expl: "Ce sont les mots de la leçon." },
      { t: "saisie", q: "Combien de diagonales a un carré ?", r: "2", nombre: true, expl: "Il y a 2 paires de sommets opposés : 2 diagonales." },
      { t: "saisie", q: "Combien de médianes a un carré ?", r: "2", nombre: true, expl: "Il y a 2 paires de côtés opposés : 2 médianes." },
      { t: "saisie", q: "Combien de sommets a un carré ?", r: "4", nombre: true, expl: "Le carré a 4 sommets, un à chaque coin." },
      { t: "qcm", q: "Dans le carré ABCD, quel segment est une diagonale ?", choix: ["[AC]", "[AB]", "[BC]", "[CD]"], r: "[AC]", expl: "A et C sont des sommets opposés : [AC] est une diagonale. [AB], [BC], [CD] sont des côtés." },
      { t: "qcm", q: "Dans le carré ABCD, quel est le sommet opposé à B ?", choix: ["D", "A", "C"], r: "D", expl: "B est en haut à droite, D en bas à gauche : ils sont opposés. La diagonale est [BD]." },
      { t: "trous", q: "Complète.", texte: "Un carré est un quadrilatère qui a 4 côtés [égaux], 4 angles [droits] et 4 [sommets].", expl: "Ce sont les trois propriétés du carré." },
      { t: "classer", q: "Dans le carré ABCD, range chaque segment.", cases: ["côté", "diagonale"], items: [["[AB]", "côté"], ["[AC]", "diagonale"], ["[BC]", "côté"], ["[BD]", "diagonale"], ["[CD]", "côté"], ["[DA]", "côté"]], expl: "Un côté relie deux sommets voisins ; une diagonale relie deux sommets opposés." }
    ],
    [
      { t: "vf", q: "Une figure à 4 côtés égaux mais sans angle droit est un carré.", r: false, expl: "Il faut aussi 4 angles droits pour que ce soit un carré." },
      { t: "vf", q: "Une figure à 4 angles droits dont les côtés ne sont pas tous égaux est un carré.", r: false, expl: "Il faut aussi 4 côtés égaux. Sinon, c'est un rectangle." },
      { t: "qcm", q: "Une médiane d'un carré passe…", choix: ["par les milieux de deux côtés opposés", "par deux sommets opposés", "par un seul sommet"], r: "par les milieux de deux côtés opposés", expl: "C'est la diagonale qui passe par deux sommets opposés." },
      { t: "qcm", q: "Dans le carré ABCD, la médiane verticale relie…", choix: ["le milieu de [AB] et le milieu de [DC]", "A et C", "B et D"], r: "le milieu de [AB] et le milieu de [DC]", expl: "[AB] (en haut) et [DC] (en bas) sont des côtés opposés : la médiane relie leurs milieux." },
      { t: "saisie", q: "Combien de segments (médianes et diagonales) se coupent au centre du carré ?", r: "4", nombre: true, expl: "2 médianes + 2 diagonales = 4 segments, qui se coupent au même point." },
      { t: "qcm", q: "Quel instrument permet de vérifier qu'un angle du carré est droit ?", choix: ["l'équerre", "le compas", "la balance"], r: "l'équerre", expl: "On pose l'angle droit de l'équerre sur le coin du carré." }
    ],
    [
      { t: "trous", q: "Complète la leçon.", texte: "La médiane est le segment qui relie les [milieux] des côtés opposés. La diagonale est le segment qui relie deux [sommets] opposés. Les médianes et les diagonales se coupent au même [point].", expl: "Définitions du cahier." },
      { t: "saisie", q: "Le carré ABCD a 4 cm de côté. Combien mesure son périmètre ? … cm", r: "16", nombre: true, unite: "cm", expl: "4 côtés égaux : 4 × 4 = 16 cm." },
      { t: "saisie", q: "Le carré ABCD a 4 cm de côté. Une médiane relie les milieux de deux côtés opposés. Combien mesure-t-elle ? … cm", r: "4", nombre: true, unite: "cm", aide: "La médiane traverse le carré d'un côté à l'autre, bien droit.", expl: "La médiane va droit d'un côté au côté d'en face : elle a la longueur du côté, 4 cm." },
      { t: "qcm", q: "Awa décrit une figure : « 4 sommets, 4 côtés de 5 cm, et tous ses coins s'ajustent à l'angle droit de l'équerre. » C'est…", choix: ["un carré", "un rectangle non carré", "un triangle"], r: "un carré", expl: "4 côtés égaux et 4 angles droits : c'est un carré." },
      { t: "classer", q: "Vrai ou faux pour le carré ?", cases: ["vrai", "faux"], items: [["Il a 4 côtés égaux.", "vrai"], ["Il a 3 sommets.", "faux"], ["Il a 2 diagonales.", "vrai"], ["Ses médianes relient deux sommets.", "faux"], ["Il a 4 angles droits.", "vrai"], ["Ses diagonales et médianes se coupent au même point.", "vrai"]], expl: "Carré : 4 côtés égaux, 4 angles droits, 4 sommets, 2 diagonales, 2 médianes qui se coupent au centre." }
    ]
  ]
});
