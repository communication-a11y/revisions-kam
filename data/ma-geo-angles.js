// À VÉRIFIER : au cahier (photo 0071), l'angle aigu « mesure − 90° » et l'angle obtus « mesure + 90° ».
// Le module écrit « moins de 90° » et « plus de 90° » (un angle n'est jamais négatif), et précise que l'angle obtus reste plus petit qu'un angle plat (180°).
LECONS.push({
  id: "ma-geo-angles",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Les angles",
  date: "2026-10-01",
  photos: ["DJI_20261118220908_0070_D.jpg", "DJI_20261118220914_0071_D.jpg", "DJI_20261118220918_0072_D.jpg"],
  retiens:
    "<p>Un <b>angle</b> est l'écartement entre deux droites qui se coupent en un même point. Il existe 4 sortes d'angles :</p>" +
    "<table><tr><th>Angle</th><th>Mesure</th></tr>" +
    "<tr><td><b>droit</b></td><td>toujours 90° (degrés)</td></tr>" +
    "<tr><td><b>aigu</b></td><td>moins de 90° : il est plus petit qu'un angle droit</td></tr>" +
    "<tr><td><b>obtus</b></td><td>plus de 90° : il est plus grand qu'un angle droit (mais plus petit qu'un angle plat)</td></tr>" +
    "<tr><td><b>plat</b></td><td>180° : ses deux côtés forment une ligne droite</td></tr></table>" +
    "<p>NB : pour mesurer un angle, on prend une règle et un <b>rapporteur</b>.</p>",
  astuce: "Compare avec le coin d'une feuille (angle droit) : plus fermé, c'est <b>aigu</b> ; plus ouvert, c'est <b>obtus</b> ; tout à plat, c'est <b>plat</b>.",
  regle: "Angle droit = 90° ; aigu : moins de 90° ; obtus : plus de 90° (et moins de 180°) ; plat = 180°.",
  niveaux: [
    [
      { t: "qcm", q: "Combien mesure un angle droit ?", choix: ["90°", "180°", "45°", "100°"], r: "90°", expl: "Un angle droit mesure toujours 90°." },
      { t: "qcm", q: "Combien mesure un angle plat ?", choix: ["180°", "90°", "360°"], r: "180°", expl: "Un angle plat mesure 180° : ses côtés sont alignés." },
      { t: "qcm", q: "Un angle plus petit qu'un angle droit est…", choix: ["aigu", "obtus", "plat"], r: "aigu", expl: "L'angle aigu mesure moins de 90°." },
      { t: "qcm", q: "Un angle plus grand qu'un angle droit, mais plus petit qu'un angle plat, est…", choix: ["obtus", "aigu", "droit"], r: "obtus", expl: "L'angle obtus mesure plus de 90°." },
      { t: "qcm", q: "Quel instrument sert à mesurer un angle ?", choix: ["le rapporteur", "le compas", "la balance"], r: "le rapporteur", expl: "On mesure un angle avec une règle et un rapporteur." },
      { t: "relier", q: "Relie chaque angle à sa mesure.", paires: [["angle droit", "90°"], ["angle plat", "180°"], ["angle aigu", "moins de 90°"], ["angle obtus", "plus de 90°"]], expl: "Ce sont les 4 sortes d'angles de la leçon." }
    ],
    [
      { t: "classer", q: "Range chaque angle selon sa mesure.", cases: ["aigu", "droit", "obtus", "plat"], items: [["45°", "aigu"], ["90°", "droit"], ["120°", "obtus"], ["180°", "plat"], ["30°", "aigu"], ["150°", "obtus"], ["60°", "aigu"], ["100°", "obtus"]], expl: "Moins de 90° : aigu ; 90° : droit ; entre 90° et 180° : obtus ; 180° : plat." },
      { t: "saisie", q: "Un angle de 70° est un angle …", r: "aigu", expl: "70° est moins que 90° : angle aigu." },
      { t: "saisie", q: "Un angle de 135° est un angle …", r: "obtus", expl: "135° est plus que 90° : angle obtus." },
      { t: "saisie", q: "Un angle dont les deux côtés forment une ligne droite est un angle …", r: "plat", expl: "Côtés alignés : angle plat, 180°." },
      { t: "qcm", q: "Le coin d'une feuille de cahier forme un angle…", choix: ["droit", "aigu", "obtus"], r: "droit", expl: "Les bords d'une feuille sont perpendiculaires : angle droit." },
      { t: "qcm", q: "À 3 heures, les aiguilles d'une horloge forment un angle…", choix: ["droit", "plat", "aigu"], r: "droit", expl: "Une aiguille sur 12, l'autre sur 3 : un quart de tour, 90°." },
      { t: "qcm", q: "À 6 heures, les aiguilles d'une horloge forment un angle…", choix: ["plat", "droit", "obtus"], r: "plat", expl: "Une aiguille sur 12, l'autre sur 6 : elles forment une ligne droite, 180°." },
      { t: "trous", q: "Complète.", texte: "Un angle droit mesure [90]°. Un angle plat mesure [180]°. Un angle [aigu] est plus petit qu'un angle droit. Un angle [obtus] est plus grand qu'un angle droit.", expl: "Droit 90°, plat 180°, aigu plus petit, obtus plus grand." }
    ],
    [
      { t: "qcm", q: "Un angle de 89° est…", choix: ["aigu", "droit", "obtus"], r: "aigu", expl: "89° est un tout petit peu moins que 90° : il est aigu." },
      { t: "qcm", q: "Un angle de 91° est…", choix: ["obtus", "droit", "aigu"], r: "obtus", expl: "91° dépasse 90° : il est obtus." },
      { t: "qcm", q: "À 1 heure, les aiguilles d'une horloge forment un angle…", choix: ["aigu", "obtus", "droit"], r: "aigu", expl: "L'écart entre 12 et 1 est plus petit qu'un quart de tour : angle aigu." },
      { t: "qcm", q: "À 5 heures, les aiguilles d'une horloge forment un angle…", choix: ["obtus", "aigu", "plat"], r: "obtus", expl: "Entre 12 et 5, l'écart dépasse le quart de tour (3 h) sans atteindre le demi-tour (6 h) : angle obtus." },
      { t: "vf", q: "Un angle obtus peut mesurer 200°.", r: false, expl: "L'angle obtus est plus grand que l'angle droit mais plus petit que l'angle plat : entre 90° et 180°." },
      { t: "vf", q: "Deux angles droits mis côte à côte forment un angle plat.", r: true, expl: "90° + 90° = 180° : c'est un angle plat." },
      { t: "vf", q: "« Un angle aigu mesure − 90° » signifie qu'il mesure moins de 90°.", r: true, expl: "Le signe − de la classe veut dire « moins de ». Un angle n'est jamais négatif : on écrit « moins de 90° »." }
    ],
    [
      { t: "saisie", q: "Un angle plat est partagé en deux angles. L'un mesure 130°. L'autre mesure … °", r: "50", nombre: true, unite: "°", expl: "Un angle plat mesure 180° : 180 − 130 = 50°." },
      { t: "saisie", q: "Un angle droit est partagé en deux angles. L'un mesure 35°. L'autre mesure … °", r: "55", nombre: true, unite: "°", expl: "Un angle droit mesure 90° : 90 − 35 = 55°." },
      { t: "saisie", q: "La moitié d'un angle droit mesure … °", r: "45", nombre: true, unite: "°", expl: "90 : 2 = 45° : c'est un angle aigu." },
      { t: "classer", q: "Un angle plat est partagé en deux. Range chaque partie selon sa sorte.", cases: ["aigu", "droit", "obtus"], items: [["l'autre partie quand l'une mesure 150°", "aigu"], ["l'autre partie quand l'une mesure 90°", "droit"], ["l'autre partie quand l'une mesure 40°", "obtus"], ["l'autre partie quand l'une mesure 100°", "aigu"]], expl: "180 − 150 = 30° (aigu) ; 180 − 90 = 90° (droit) ; 180 − 40 = 140° (obtus) ; 180 − 100 = 80° (aigu)." },
      { t: "trous", q: "Complète la leçon.", texte: "Un angle est l'[écartement] entre deux droites qui se coupent en un même point. Pour mesurer un angle, je prends une règle et un [rapporteur].", expl: "Définition de l'angle et instrument de mesure, tels qu'au cahier." }
    ]
  ]
});
