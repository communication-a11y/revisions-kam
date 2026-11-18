// À VÉRIFIER : au cahier (photo 0089), les angles notés en rouge sur le triangle AB = 5 cm, BC = 7 cm, angle B = 40° (environ 55° et 85°)
// ne correspondent pas à la figure (elle donnerait environ 95° et 45°) : ces valeurs ne sont pas reprises. Le triangle « quelconque »
// du cahier (5 cm, 4 cm, 3 cm) est en fait rectangle : il n'est pas utilisé comme exemple de triangle quelconque.
// Les exercices d'angles utilisent de nouvelles valeurs, toutes cohérentes (somme = 180°).
LECONS.push({
  id: "ma-geo-types-triangles",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Les types de triangles : découverte et construction",
  date: "2026-11-04",
  photos: ["DJI_20261118221156_0088_D.jpg", "DJI_20261118221204_0089_D.jpg", "DJI_20261118221212_0090_D.jpg"],
  retiens:
    "<p>Le <b>triangle</b> est une figure géométrique qui a <b>3 côtés</b>, <b>3 sommets</b> et <b>3 angles</b>.</p>" +
    "<p>Dans tout triangle, <b>la somme des angles fait 180°</b>.</p>" +
    "<table><tr><th>Triangle</th><th>Ce qui le reconnaît</th></tr>" +
    "<tr><td><b>quelconque</b></td><td>ni côtés égaux, ni angle droit</td></tr>" +
    "<tr><td><b>rectangle</b></td><td>un angle droit (90°)</td></tr>" +
    "<tr><td><b>isocèle</b></td><td>2 côtés égaux et 2 angles égaux</td></tr>" +
    "<tr><td><b>équilatéral</b></td><td>3 côtés égaux et 3 angles égaux</td></tr></table>" +
    "<p>NB : pour construire un triangle isocèle ou équilatéral, on utilise le <b>compas</b> et la <b>règle</b> ; on utilise le <b>rapporteur</b> pour mesurer les angles.</p>",
  astuce: "<b>Équi</b>-latéral : tous les côtés sont <b>égaux</b>. <b>Iso</b>-cèle : deux « jambes » pareilles. <b>Rectangle</b> : il a un coin comme le rectangle, un angle droit.",
  regle: "Un triangle a 3 côtés, 3 sommets, 3 angles, et la somme de ses angles fait 180°. Rectangle : un angle droit ; isocèle : 2 côtés égaux ; équilatéral : 3 côtés égaux.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de côtés a un triangle ?", choix: ["3", "4", "2"], r: "3", expl: "tri = trois : 3 côtés, 3 sommets, 3 angles." },
      { t: "qcm", q: "Combien fait la somme des angles d'un triangle ?", choix: ["180°", "90°", "360°"], r: "180°", expl: "Dans tout triangle, la somme des 3 angles fait 180°." },
      { t: "qcm", q: "Un triangle qui a un angle droit est un triangle…", choix: ["rectangle", "équilatéral", "isocèle"], r: "rectangle", expl: "Le triangle rectangle a un angle droit de 90°." },
      { t: "qcm", q: "Un triangle qui a 3 côtés égaux est un triangle…", choix: ["équilatéral", "isocèle", "rectangle"], r: "équilatéral", expl: "Équilatéral : 3 côtés égaux et 3 angles égaux." },
      { t: "qcm", q: "Un triangle qui a 2 côtés égaux est un triangle…", choix: ["isocèle", "équilatéral", "quelconque"], r: "isocèle", expl: "Isocèle : 2 côtés égaux et 2 angles égaux." },
      { t: "relier", q: "Relie chaque triangle à sa propriété.", paires: [["rectangle", "un angle droit"], ["isocèle", "2 côtés égaux"], ["équilatéral", "3 côtés égaux"], ["quelconque", "aucun côté égal, pas d'angle droit"]], expl: "Ce sont les types de triangles de la leçon." }
    ],
    [
      { t: "classer", q: "Range chaque triangle d'après ses côtés.", cases: ["équilatéral", "isocèle", "quelconque"], items: [["5 cm, 5 cm, 5 cm", "équilatéral"], ["6 cm, 6 cm, 4 cm", "isocèle"], ["3 cm, 5 cm, 6 cm", "quelconque"], ["7 cm, 7 cm, 7 cm", "équilatéral"], ["8 cm, 3 cm, 8 cm", "isocèle"], ["4 cm, 6 cm, 7 cm", "quelconque"]], expl: "3 côtés égaux : équilatéral ; 2 côtés égaux : isocèle ; aucun : quelconque." },
      { t: "saisie", q: "Deux angles d'un triangle mesurent 60° et 70°. Le troisième mesure … °", r: "50", nombre: true, unite: "°", expl: "60 + 70 = 130 ; 180 − 130 = 50°." },
      { t: "saisie", q: "Deux angles d'un triangle mesurent 45° et 100°. Le troisième mesure … °", r: "35", nombre: true, unite: "°", expl: "45 + 100 = 145 ; 180 − 145 = 35°." },
      { t: "saisie", q: "Dans un triangle rectangle, un des angles aigus mesure 35°. L'autre angle aigu mesure … °", r: "55", nombre: true, unite: "°", expl: "L'angle droit fait 90° : 90 + 35 = 125 ; 180 − 125 = 55°." },
      { t: "saisie", q: "Un triangle a 3 sommets, 3 côtés et … angles.", r: "3", nombre: true, expl: "Un triangle a 3 angles, un à chaque sommet." },
      { t: "qcm", q: "Pour construire un triangle équilatéral, on utilise…", choix: ["le compas et la règle", "la balance", "seulement l'équerre"], r: "le compas et la règle", expl: "Le compas permet de reporter la même longueur pour les 3 côtés." },
      { t: "qcm", q: "Pour mesurer un angle du triangle, on utilise…", choix: ["le rapporteur", "le compas", "le mètre ruban"], r: "le rapporteur", expl: "Le rapporteur mesure les angles en degrés." },
      { t: "trous", q: "Complète.", texte: "Le triangle isocèle a [2|deux] côtés égaux et 2 angles égaux. Le triangle équilatéral a [3|trois] côtés égaux et 3 angles égaux.", expl: "Isocèle : 2 ; équilatéral : 3." }
    ],
    [
      { t: "saisie", q: "Les 3 angles d'un triangle équilatéral sont égaux. Chacun mesure … °", r: "60", nombre: true, unite: "°", expl: "180 : 3 = 60°." },
      { t: "saisie", q: "Dans un triangle isocèle, l'angle entre les deux côtés égaux mesure 40°. Les deux autres angles sont égaux. Chacun mesure … °", r: "70", nombre: true, unite: "°", expl: "180 − 40 = 140 ; 140 : 2 = 70°." },
      { t: "vf", q: "Un triangle peut avoir deux angles droits.", r: false, expl: "90 + 90 = 180 : il ne resterait rien pour le troisième angle. Impossible." },
      { t: "vf", q: "Un triangle équilatéral est aussi isocèle.", r: true, expl: "Il a 3 côtés égaux, donc il en a au moins 2 égaux." },
      { t: "vf", q: "Un triangle peut être à la fois rectangle et isocèle.", r: true, expl: "Exemple : un angle droit et deux côtés égaux de part et d'autre ; les deux autres angles mesurent alors 45° chacun." },
      { t: "qcm", q: "Les angles d'un triangle mesurent 90°, 50° et 40°. Ce triangle est…", choix: ["rectangle", "équilatéral", "isocèle"], r: "rectangle", expl: "Il a un angle de 90° : c'est un triangle rectangle." },
      { t: "qcm", q: "Les angles d'un triangle mesurent 70°, 70° et 40°. Ce triangle est…", choix: ["isocèle", "rectangle", "équilatéral"], r: "isocèle", expl: "Il a 2 angles égaux : il est isocèle." }
    ],
    [
      { t: "qcm", q: "Aïssatou dit : « Les angles de mon triangle mesurent 60°, 70° et 60°. » Est-ce possible ?", choix: ["Non, car la somme fait 190°.", "Oui, c'est un triangle isocèle.", "Oui, c'est un triangle équilatéral."], r: "Non, car la somme fait 190°.", expl: "60 + 70 + 60 = 190°. La somme des angles d'un triangle doit faire 180°." },
      { t: "saisie", q: "Dans un triangle rectangle et isocèle, les deux angles aigus sont égaux. Chacun mesure … °", r: "45", nombre: true, unite: "°", expl: "180 − 90 = 90 ; 90 : 2 = 45°." },
      { t: "saisie", q: "Un triangle équilatéral a 6 cm de côté. Son périmètre = … cm", r: "18", nombre: true, unite: "cm", expl: "3 côtés égaux : 6 × 3 = 18 cm." },
      { t: "saisie", q: "Un triangle isocèle a deux côtés de 7 cm et un côté de 4 cm. Son périmètre = … cm", r: "18", nombre: true, unite: "cm", expl: "7 + 7 + 4 = 18 cm." },
      { t: "classer", q: "Range chaque triangle d'après ses angles.", cases: ["rectangle", "équilatéral", "isocèle non rectangle"], items: [["90°, 30°, 60°", "rectangle"], ["60°, 60°, 60°", "équilatéral"], ["50°, 50°, 80°", "isocèle non rectangle"], ["90°, 45°, 45°", "rectangle"], ["30°, 30°, 120°", "isocèle non rectangle"]], expl: "Un angle de 90° : rectangle. Trois angles de 60° : équilatéral. Deux angles égaux sans angle droit : isocèle." },
      { t: "trous", q: "Complète la leçon.", texte: "Le triangle est une figure qui a 3 [côtés], 3 [sommets] et 3 [angles]. La somme des angles fait [180]°.", expl: "Définition du triangle et somme des angles." }
    ]
  ]
});
