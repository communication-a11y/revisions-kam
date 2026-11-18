LECONS.push({
  id: "ma-mes-perimetre-valeur-totale",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre à partir de la valeur totale et de la valeur unitaire",
  date: "2026-11-02",
  photos: ["DJI_20261118221143_0086_D.jpg", "DJI_20261118221147_0087_D.jpg"],
  retiens:
    "<p>On connaît la <b>dépense totale</b> (valeur totale, VT) et le <b>prix d'un mètre</b> (valeur unitaire, VU). La division VT : VU donne la <b>longueur</b> de fil ou de grillage achetée.</p>" +
    "<p><b>1. Un rang avec une porte</b></p>" +
    "<p><b>Périmètre = VT : VU + Porte</b></p>" +
    "<p>Exemple : après avoir aménagé une porte de 5 m, un jardinier dépense 122 500 F de grillage à 500 F le mètre.<br>" +
    "Longueur du grillage : 122 500 : 500 = 245 m<br>Périmètre : 245 m + 5 m = 250 m</p>" +
    "<p><b>2. Plusieurs rangs avec une porte</b></p>" +
    "<p><b>Périmètre = (VT : VU) : nombre de rangées + Porte</b></p>" +
    "<p>Exemple : un jardin est clôturé avec 3 rangées de fil barbelé et une porte de 2 m. On dépense 24 000 F pour le fil, à 200 F le mètre.<br>" +
    "Longueur totale du fil : 24 000 : 200 = 120 m<br>Longueur d'une rangée : 120 m : 3 = 40 m<br>Périmètre : 40 m + 2 m = 42 m</p>",
  astuce: "Trois questions dans l'ordre : <b>combien de mètres</b> ai-je achetés ? (VT : VU) — <b>combien pour un rang</b> ? (: rangées) — <b>quel tour complet</b> ? (+ porte).",
  regle: "Longueur achetée = valeur totale : valeur unitaire. Puis on divise par le nombre de rangées et on ajoute la porte pour obtenir le périmètre.",
  niveaux: [
    [
      { t: "qcm", q: "Dans « 500 F le mètre », 500 F est…", choix: ["la valeur unitaire", "la valeur totale", "le périmètre"], r: "la valeur unitaire", expl: "C'est le prix d'une unité (un mètre) : la valeur unitaire (VU)." },
      { t: "qcm", q: "Dans « il dépense 122 500 F », 122 500 F est…", choix: ["la valeur totale", "la valeur unitaire", "la longueur du grillage"], r: "la valeur totale", expl: "C'est la dépense pour tout le grillage : la valeur totale (VT)." },
      { t: "qcm", q: "Quelle opération donne la longueur de grillage achetée ?", choix: ["VT : VU", "VT × VU", "VT − VU", "VU : VT"], r: "VT : VU", expl: "Longueur = dépense totale : prix d'un mètre." },
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["VT", "valeur totale"], ["VU", "valeur unitaire"], ["VT : VU", "longueur achetée"]], expl: "On divise la valeur totale par la valeur unitaire pour trouver le nombre de mètres." },
      { t: "vf", q: "Après avoir trouvé la longueur du grillage, on ajoute la porte pour obtenir le périmètre.", r: true, expl: "Le grillage ne passe pas devant la porte : on l'ajoute pour avoir tout le tour." },
      { t: "saisie", q: "122 500 F de grillage à 500 F le mètre. Longueur du grillage = … m", r: "245", nombre: true, unite: "m", expl: "122 500 : 500 = 245 m." }
    ],
    [
      { t: "saisie", q: "Grillage : 245 m, porte de 5 m. Périmètre = … m", r: "250", nombre: true, unite: "m", expl: "245 + 5 = 250 m." },
      { t: "saisie", q: "50 000 F de grillage à 250 F le mètre. Longueur = … m", r: "200", nombre: true, unite: "m", expl: "50 000 : 250 = 200 m." },
      { t: "saisie", q: "50 000 F de grillage à 250 F le mètre (un rang), porte de 3 m. Périmètre = … m", r: "203", nombre: true, unite: "m", expl: "50 000 : 250 = 200 m ; 200 + 3 = 203 m." },
      { t: "saisie", q: "36 000 F de fil à 400 F le mètre (un rang), porte de 2 m. Périmètre = … m", r: "92", nombre: true, unite: "m", expl: "36 000 : 400 = 90 m ; 90 + 2 = 92 m." },
      { t: "saisie", q: "24 000 F de fil à 200 F le mètre. Longueur totale du fil = … m", r: "120", nombre: true, unite: "m", expl: "24 000 : 200 = 120 m." },
      { t: "saisie", q: "120 m de fil en 3 rangées. Longueur d'une rangée = … m", r: "40", nombre: true, unite: "m", expl: "120 : 3 = 40 m." },
      { t: "saisie", q: "Rangée de 40 m, porte de 2 m. Périmètre = … m", r: "42", nombre: true, unite: "m", expl: "40 + 2 = 42 m." },
      { t: "saisie", q: "60 000 F de fil à 300 F le mètre, 2 rangées, porte de 4 m. Périmètre = … m", r: "104", nombre: true, unite: "m", expl: "60 000 : 300 = 200 m ; 200 : 2 = 100 m ; 100 + 4 = 104 m." }
    ],
    [
      { t: "qcm", q: "48 000 F de fil à 200 F le mètre, 3 rangées, porte de 2 m. Dans quel ordre fait-on les calculs ?", choix: ["48 000 : 200, puis : 3, puis + 2", "48 000 : 3, puis + 2, puis : 200", "48 000 + 2, puis : 200, puis : 3"], r: "48 000 : 200, puis : 3, puis + 2", expl: "Longueur achetée (240 m), une rangée (80 m), périmètre (82 m)." },
      { t: "qcm", q: "Fatou écrit : 30 000 × 300 pour trouver la longueur de fil achetée à 300 F le mètre. Que faut-il faire ?", choix: ["Diviser : 30 000 : 300 = 100 m", "Ajouter : 30 000 + 300", "Rien, c'est juste"], r: "Diviser : 30 000 : 300 = 100 m", expl: "Pour trouver le nombre de mètres, on divise la valeur totale par la valeur unitaire." },
      { t: "saisie", q: "96 000 F de fil à 150 F le mètre, 4 rangées, porte de 4 m. Périmètre = … m", r: "164", nombre: true, unite: "m", expl: "96 000 : 150 = 640 m ; 640 : 4 = 160 m ; 160 + 4 = 164 m." },
      { t: "saisie", q: "Un rang de grillage acheté 87 500 F à 350 F le mètre, porte de 3 m. Périmètre = … m", r: "253", nombre: true, unite: "m", expl: "87 500 : 350 = 250 m ; 250 + 3 = 253 m." },
      { t: "vf", q: "Si le mètre de fil coûte plus cher, avec la même somme on achète moins de fil.", r: true, expl: "On divise la même valeur totale par une valeur unitaire plus grande : le résultat est plus petit." },
      { t: "trous", q: "Complète (45 000 F de fil à 250 F le mètre, 2 rangées, porte de 1 m).", nombre: true, texte: "Longueur achetée : [180] m — une rangée : [90] m — périmètre : [91] m", expl: "45 000 : 250 = 180 ; 180 : 2 = 90 ; 90 + 1 = 91." }
    ],
    [
      { t: "probleme", q: "Après avoir aménagé une porte de 5 m, un jardinier dépense 122 500 F de grillage à 500 F le mètre pour sécuriser son jardin. Trouve son périmètre.", etapes: [{ q: "Étape 1 : longueur du grillage (en m)", r: "245", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "250", unite: "m" }], expl: "122 500 : 500 = 245 m ; 245 + 5 = 250 m." },
      { t: "probleme", q: "Ton père clôture son jardin avec 3 rangées de fil barbelé en laissant une porte de 2 m. Il dépense 24 000 F pour acheter le fil à 200 F le mètre. Trouve le périmètre du jardin.", etapes: [{ q: "Étape 1 : longueur totale du fil (en m)", r: "120", unite: "m" }, { q: "Étape 2 : longueur d'une rangée (en m)", r: "40", unite: "m" }, { q: "Étape 3 : périmètre (en m)", r: "42", unite: "m" }], expl: "24 000 : 200 = 120 m ; 120 : 3 = 40 m ; 40 + 2 = 42 m." },
      { t: "probleme", q: "Mamadou dépense 73 500 F pour clôturer un champ carré avec 3 rangées de fil à 250 F le mètre. Il laisse une entrée de 2 m.", etapes: [{ q: "Étape 1 : longueur totale du fil (en m)", r: "294", unite: "m" }, { q: "Étape 2 : longueur d'une rangée (en m)", r: "98", unite: "m" }, { q: "Étape 3 : périmètre (en m)", r: "100", unite: "m" }, { q: "Étape 4 : côté du champ (en m)", r: "25", unite: "m" }], expl: "73 500 : 250 = 294 m ; 294 : 3 = 98 m ; 98 + 2 = 100 m ; 100 : 4 = 25 m." },
      { t: "probleme", q: "Pour un jardin rectangulaire de 52 m de long, on achète un seul rang de grillage pour 90 000 F, à 500 F le mètre. On a laissé une porte de 4 m.", etapes: [{ q: "Étape 1 : longueur du grillage (en m)", r: "180", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "184", unite: "m" }, { q: "Étape 3 : demi-périmètre (en m)", r: "92", unite: "m" }, { q: "Étape 4 : largeur du jardin (en m)", r: "40", unite: "m" }], expl: "90 000 : 500 = 180 m ; 180 + 4 = 184 m ; 184 : 2 = 92 m ; 92 − 52 = 40 m." },
      { t: "qcm", q: "Une coopérative dépense 120 000 F de fil à 400 F le mètre pour 2 rangées autour d'un verger, avec un portail de 5 m. Quel est le périmètre du verger ?", choix: ["155 m", "150 m", "305 m", "145 m"], r: "155 m", expl: "120 000 : 400 = 300 m ; 300 : 2 = 150 m ; 150 + 5 = 155 m." }
    ]
  ]
});
