// À VÉRIFIER : au cahier (photo 2026-11-25_29), « 7 m² = 100 dm² » : il faut lire 1 m² = 100 dm².
// Exercices tirés du Palier 5 p. 57 (photo 2026-11-25_25). Deux réponses de Kam à revoir : 0,5 km² + 12 dam² = 501 200 m²
// (et non 5 001 200) ; 38 cm² + 2,5 m² = 2 503 800 mm² (et non 25 003 800). Les formules d'aire du carré et du rectangle
// viennent des objectifs du Palier 5 (« calculer l'aire du carré, du rectangle »).
LECONS.push({
  id: "ma-mes-aires",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures d'aires (surfaces)",
  date: "2026-11-24",
  photos: ["2026-11-25_28.jpg", "2026-11-25_29.jpg", "2026-11-25_25.jpg", "2026-11-25_26.jpg", "2026-11-25_27.jpg"],
  retiens:
    "<p>L'<b>aire</b> est la superficie (la surface) d'une figure géométrique. L'aire se mesure. Le <b>mètre carré (m²)</b> est l'unité principale des mesures de surfaces.</p>" +
    "<ul><li>Les <b>multiples</b> du m² sont : le km², le hm², le dam².</li>" +
    "<li>Les <b>sous-multiples</b> du m² sont : le dm², le cm², le mm².</li></ul>" +
    "<table><tr><th>km²</th><th>hm²</th><th>dam²</th><th>m²</th><th>dm²</th><th>cm²</th><th>mm²</th></tr>" +
    "<tr><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td></tr></table>" +
    "<p>Dans le tableau, chaque unité a <b>deux colonnes</b> : chaque unité vaut <b>100 fois</b> l'unité suivante.<br>1 dam² = 100 m² — 1 m² = 100 dm² — 1 dm² = 100 cm²</p>" +
    "<p><b>Rappel (Palier 5) :</b> aire du carré = côté × côté ; aire du rectangle = longueur × largeur. Pour additionner des aires, on les convertit d'abord dans la même unité.</p>",
  astuce: "Pour convertir, on avance de <b>2 chiffres par unité</b> : 17 dam² → 17|00 m² = 1 700 m². Quand tu places un nombre à virgule, mets le chiffre des unités dans la colonne <b>u</b> de son unité.",
  regle: "Le m² est l'unité principale des aires ; chaque unité d'aire vaut 100 fois l'unité immédiatement inférieure (2 colonnes par unité dans le tableau).",
  niveaux: [
    [
      { t: "qcm", q: "Quelle est l'unité principale des mesures d'aires ?", choix: ["le mètre carré (m²)", "le mètre (m)", "le litre (l)"], r: "le mètre carré (m²)", expl: "L'aire se mesure en m², ses multiples et sous-multiples." },
      { t: "qcm", q: "1 dam² = …", choix: ["100 m²", "10 m²", "1 000 m²"], r: "100 m²", expl: "Chaque unité d'aire vaut 100 fois la suivante." },
      { t: "qcm", q: "1 m² = …", choix: ["100 dm²", "10 dm²", "1 000 dm²"], r: "100 dm²", expl: "Deux colonnes par unité : 1 m² = 100 dm²." },
      { t: "classer", q: "Multiple ou sous-multiple du m² ?", cases: ["multiple", "sous-multiple"], items: [["km²", "multiple"], ["hm²", "multiple"], ["dam²", "multiple"], ["dm²", "sous-multiple"], ["cm²", "sous-multiple"], ["mm²", "sous-multiple"]], expl: "Plus grand que le m² : multiple ; plus petit : sous-multiple." },
      { t: "vf", q: "Dans le tableau des aires, chaque unité a deux colonnes.", r: true, expl: "Une colonne pour les dizaines (d), une pour les unités (u)." },
      { t: "ordre", q: "Range du plus grand au plus petit.", r: "km² hm² dam² m² dm² cm² mm²", expl: "C'est l'ordre du tableau." }
    ],
    [
      { t: "saisie", q: "17 dam² = … m²", r: "1700", nombre: true, unite: "m²", expl: "17|00 : 17 dam² = 1 700 m²." },
      { t: "saisie", q: "5 hm² = … m²", r: "50000", nombre: true, unite: "m²", expl: "1 hm² = 10 000 m² ; 5 hm² = 50 000 m²." },
      { t: "saisie", q: "1 300 dm² = … m²", r: "13", nombre: true, unite: "m²", expl: "100 dm² = 1 m² ; 1 300 dm² = 13 m²." },
      { t: "saisie", q: "45 000 cm² = … m²", r: "4,5", nombre: true, unite: "m²", expl: "1 m² = 10 000 cm² ; 45 000 : 10 000 = 4,5 m²." },
      { t: "saisie", q: "2 400 mm² = … m²", r: "0,0024", nombre: true, unite: "m²", expl: "1 m² = 1 000 000 mm² ; 2 400 mm² = 0,0024 m²." },
      { t: "saisie", q: "3 m² = … dm²", r: "300", nombre: true, unite: "dm²", expl: "1 m² = 100 dm²." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1 km² = [100] hm² — 1 hm² = [100] dam² — 1 dm² = [100] cm²", expl: "Chaque unité vaut 100 fois la suivante." },
      { t: "saisie", q: "6 km² = … m²", r: "6000000", nombre: true, unite: "m²", expl: "1 km² = 1 000 000 m²." },
      { t: "qcm", q: "Un carré de 1 m de côté a une aire de…", choix: ["1 m²", "4 m²", "100 m²"], r: "1 m²", expl: "1 m × 1 m = 1 m²." }
    ],
    [
      { t: "saisie", q: "0,5 km² et 12 dam² = … m²", r: "501200", nombre: true, unite: "m²", aide: "0,5 km² = 50 hm² = 500 000 m².", expl: "0,5 km² = 500 000 m² ; 12 dam² = 1 200 m² ; 500 000 + 1 200 = 501 200 m²." },
      { t: "saisie", q: "45 dam² + 5 hm² = … m²", r: "54500", nombre: true, unite: "m²", expl: "4 500 m² + 50 000 m² = 54 500 m²." },
      { t: "saisie", q: "6 km² + 250 hm² = … m²", r: "8500000", nombre: true, unite: "m²", expl: "6 000 000 + 2 500 000 = 8 500 000 m²." },
      { t: "saisie", q: "3 400 m² + 66 dam² = … hm²", r: "1", nombre: true, unite: "hm²", expl: "3 400 + 6 600 = 10 000 m² = 1 hm²." },
      { t: "saisie", q: "38 cm² + 2,5 m² = … mm²", r: "2503800", nombre: true, unite: "mm²", aide: "2,5 m² : le 2 va dans la colonne u des m².", expl: "38 cm² = 3 800 mm² ; 2,5 m² = 2 500 000 mm² ; total 2 503 800 mm²." },
      { t: "saisie", q: "9 dm² + 1 100 cm² = … m²", r: "0,2", nombre: true, unite: "m²", expl: "900 cm² + 1 100 cm² = 2 000 cm² = 0,2 m²." },
      { t: "saisie", q: "545 mm² + 1 dm² 5 cm² 55 mm² = … cm²", r: "111", nombre: true, unite: "cm²", expl: "5,45 + 100 + 5 + 0,55 = 111 cm²." },
      { t: "qcm", q: "Pourquoi 2,5 m² ne s'écrit-il pas « 25 » dans les colonnes des m² ?", choix: ["parce que 2 est le chiffre des unités : il va dans la colonne u", "parce qu'on ne met jamais de virgule", "parce que 25 est trop grand"], r: "parce que 2 est le chiffre des unités : il va dans la colonne u", expl: "2,5 m² = 2 m² et 50 dm² : le 5 va dans les dm²." }
    ],
    [
      { t: "probleme", q: "Un tailleur veut découper, dans un tissu de 40 dm² d'aire, une nappe carrée de 6 dm de côté.", etapes: [{ q: "Étape 1 : aire de la nappe (dm²)", r: "36", unite: "dm²" }, { q: "Étape 2 : tissu restant (dm²)", r: "4", unite: "dm²" }], expl: "6 × 6 = 36 dm² ; 36 est moins que 40 : c'est possible, et il reste 4 dm²." },
      { t: "saisie", q: "Un champ carré a une aire de 64 m². Quelle est la mesure d'un côté ?", r: "8", nombre: true, unite: "m", aide: "Quel nombre multiplié par lui-même donne 64 ?", expl: "8 × 8 = 64 : le côté mesure 8 m." },
      { t: "saisie", q: "Rectangle de 12 m de long et 6,5 m de large. Aire = …", r: "78", nombre: true, unite: "m²", expl: "12 × 6,5 = 78 m²." },
      { t: "saisie", q: "Rectangle d'aire 414 m² et de longueur 23 m. Largeur = …", r: "18", nombre: true, unite: "m", expl: "414 : 23 = 18 m." },
      { t: "probleme", q: "La cour de l'école est un rectangle de 40 m sur 25 m.", etapes: [{ q: "Étape 1 : aire en m²", r: "1000", unite: "m²" }, { q: "Étape 2 : aire en dam²", r: "10", unite: "dam²" }], expl: "40 × 25 = 1 000 m² = 10 dam²." }
    ]
  ]
});
