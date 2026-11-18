LECONS.push({
  id: "ma-mes-longueur-cloture",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul de la longueur de la clôture",
  date: "2026-10-15",
  photos: ["DJI_20261118221112_0081_D.jpg", "DJI_20261118221119_0082_D.jpg", "DJI_20261118221123_0083_D.jpg"],
  retiens:
    "<p><b>1. Avec une porte (une seule rangée)</b></p>" +
    "<p>Exemple : un jardin rectangulaire mesure 25 m sur 18 m. On l'entoure d'un grillage en laissant une porte de 5 m.<br>" +
    "Périmètre du jardin : (25 m + 18 m) × 2 = 86 m<br>Longueur de grillage : 86 m − 5 m = 81 m</p>" +
    "<p><b>Longueur de la clôture = Périmètre − Porte</b></p>" +
    "<p><b>2. Avec plusieurs rangées</b></p>" +
    "<p>Exemple : Ali clôture son champ carré de 50 m de côté avec trois rangées de fil de fer, en laissant une entrée de 2 m.<br>" +
    "Périmètre : 50 m × 4 = 200 m<br>Périmètre sans la porte : 200 m − 2 m = 198 m<br>Longueur de la clôture : 198 m × 3 = 594 m</p>" +
    "<p><b>Longueur de la clôture = (Périmètre − Porte) × nombre de rangées</b></p>" +
    "<p>À ne pas confondre : la longueur du jardin ≠ la longueur de la clôture ; la largeur du jardin ≠ la largeur de la porte.</p>",
  astuce: "On fait le tour du champ, on <b>saute la porte</b>, puis on refait ce tour autant de fois qu'il y a de rangées.",
  regle: "Longueur de la clôture = Périmètre − Porte. Avec plusieurs rangées, on multiplie le périmètre sans la porte par le nombre de rangées.",
  niveaux: [
    [
      { t: "qcm", q: "Pourquoi retire-t-on la largeur de la porte du périmètre ?", choix: ["Parce qu'on ne pose pas de fil à l'endroit de la porte.", "Parce que la porte est plus longue que le champ.", "Pour trouver la largeur du champ."], r: "Parce qu'on ne pose pas de fil à l'endroit de la porte.", expl: "La porte laisse un passage : il n'y a pas de clôture à cet endroit." },
      { t: "qcm", q: "Quelle formule donne la longueur de la clôture avec une porte ?", choix: ["Périmètre − Porte", "Périmètre + Porte", "Périmètre × Porte"], r: "Périmètre − Porte", expl: "On fait le tour, moins le passage de la porte." },
      { t: "vf", q: "La longueur du jardin et la longueur de la clôture, c'est la même chose.", r: false, expl: "La longueur du jardin est un côté ; la longueur de la clôture est (presque) tout le tour." },
      { t: "qcm", q: "Avec 3 rangées de fil, la longueur de fil est…", choix: ["3 fois le périmètre sans la porte", "le périmètre + 3", "le périmètre : 3"], r: "3 fois le périmètre sans la porte", expl: "Chaque rangée fait le tour sans la porte : on multiplie par 3." },
      { t: "relier", q: "Relie chaque situation à son calcul.", paires: [["Une rangée, pas de porte", "Périmètre"], ["Une rangée, une porte", "Périmètre − Porte"], ["Plusieurs rangées, une porte", "(Périmètre − Porte) × rangées"]], expl: "On part toujours du périmètre, on retire la porte, puis on multiplie par le nombre de rangées." },
      { t: "saisie", q: "Le périmètre d'un champ est 120 m. On laisse une porte de 3 m. Longueur de la clôture = … m", r: "117", nombre: true, unite: "m", expl: "120 m − 3 m = 117 m." }
    ],
    [
      { t: "saisie", q: "Jardin rectangulaire de 25 m sur 18 m, porte de 5 m. Périmètre = … m", r: "86", nombre: true, unite: "m", expl: "(25 + 18) × 2 = 86 m." },
      { t: "saisie", q: "Même jardin (périmètre 86 m, porte de 5 m). Longueur du grillage = … m", r: "81", nombre: true, unite: "m", expl: "86 − 5 = 81 m." },
      { t: "saisie", q: "Champ carré de 30 m de côté, porte de 2 m. Longueur de la clôture = … m", r: "118", nombre: true, unite: "m", expl: "30 × 4 = 120 m ; 120 − 2 = 118 m." },
      { t: "saisie", q: "Terrain rectangulaire de 40 m sur 25 m, porte de 4 m. Longueur de la clôture = … m", r: "126", nombre: true, unite: "m", expl: "(40 + 25) × 2 = 130 m ; 130 − 4 = 126 m." },
      { t: "saisie", q: "Champ carré de 50 m de côté, entrée de 2 m, 3 rangées. Périmètre sans la porte = … m", r: "198", nombre: true, unite: "m", expl: "50 × 4 = 200 m ; 200 − 2 = 198 m." },
      { t: "saisie", q: "Même champ (198 m sans la porte, 3 rangées). Longueur de la clôture = … m", r: "594", nombre: true, unite: "m", expl: "198 × 3 = 594 m." },
      { t: "saisie", q: "Enclos carré de 20 m de côté, porte de 1,5 m, 2 rangées. Longueur de fil = … m", r: "157", nombre: true, unite: "m", expl: "20 × 4 = 80 m ; 80 − 1,5 = 78,5 m ; 78,5 × 2 = 157 m." },
      { t: "saisie", q: "Verger rectangulaire de 35 m sur 15 m, porte de 4 m, 4 rangées. Longueur de fil = … m", r: "384", nombre: true, unite: "m", expl: "(35 + 15) × 2 = 100 m ; 100 − 4 = 96 m ; 96 × 4 = 384 m." }
    ],
    [
      { t: "qcm", q: "Champ carré de 50 m de côté, porte de 2 m, 3 rangées. Quel calcul est juste ?", choix: ["(200 − 2) × 3", "200 × 3 − 2", "200 − 2 × 3", "(200 + 2) × 3"], r: "(200 − 2) × 3", aide: "La porte est sautée à chaque rangée.", expl: "On retire la porte AVANT de multiplier : (200 − 2) × 3 = 594 m. 200 × 3 − 2 = 598 m serait faux." },
      { t: "qcm", q: "Un jardin mesure 30 m de long et 20 m de large, avec une porte de 3 m. Fatou écrit : 30 − 3 = 27 m. Quelle est son erreur ?", choix: ["Elle a pris la longueur du jardin au lieu du périmètre.", "Elle a oublié d'ajouter la porte.", "Il n'y a pas d'erreur."], r: "Elle a pris la longueur du jardin au lieu du périmètre.", expl: "Il faut le périmètre : (30 + 20) × 2 = 100 m, puis 100 − 3 = 97 m." },
      { t: "vf", q: "Pour une clôture sans porte et à une seule rangée, la longueur de la clôture est égale au périmètre.", r: true, expl: "Rien à retirer, rien à multiplier : clôture = périmètre." },
      { t: "saisie", q: "Champ rectangulaire de 1 hm sur 60 m, porte de 5 m. Longueur de la clôture = … m", r: "315", nombre: true, unite: "m", aide: "Convertis 1 hm en mètres.", expl: "1 hm = 100 m ; (100 + 60) × 2 = 320 m ; 320 − 5 = 315 m." },
      { t: "saisie", q: "Poulailler carré de 6,5 m de côté, porte de 1 m, 5 rangées de grillage. Longueur de grillage = … m", r: "125", nombre: true, unite: "m", expl: "6,5 × 4 = 26 m ; 26 − 1 = 25 m ; 25 × 5 = 125 m." },
      { t: "trous", q: "Complète (champ carré de 40 m de côté, porte de 4 m, 2 rangées).", nombre: true, texte: "Périmètre : [160] m — sans la porte : [156] m — clôture : [312] m", expl: "40 × 4 = 160 ; 160 − 4 = 156 ; 156 × 2 = 312." }
    ],
    [
      { t: "probleme", q: "Pour protéger son jardin rectangulaire de 45 m sur 30 m, Ibrahima pose 3 rangées de fil de fer en laissant une porte de 3 m. Le fil coûte 100 F le mètre.", etapes: [{ q: "Étape 1 : périmètre du jardin (en m)", r: "150", unite: "m" }, { q: "Étape 2 : périmètre sans la porte (en m)", r: "147", unite: "m" }, { q: "Étape 3 : longueur de fil (en m)", r: "441", unite: "m" }, { q: "Étape 4 : dépense (en F)", r: "44100", unite: "F" }], expl: "(45 + 30) × 2 = 150 m ; 150 − 3 = 147 m ; 147 × 3 = 441 m ; 441 × 100 = 44 100 F." },
      { t: "probleme", q: "Un éleveur clôture un enclos carré de 60 m de côté avec 2 rangées de fil, en laissant une entrée de 4 m. Le fil est vendu en rouleaux de 100 m.", etapes: [{ q: "Étape 1 : périmètre sans l'entrée (en m)", r: "236", unite: "m" }, { q: "Étape 2 : longueur de fil (en m)", r: "472", unite: "m" }, { q: "Étape 3 : nombre de rouleaux à acheter", r: "5" }], expl: "60 × 4 = 240 m ; 240 − 4 = 236 m ; 236 × 2 = 472 m. 4 rouleaux ne font que 400 m : il en faut 5." },
      { t: "probleme", q: "Le terrain de l'école de Ziguinchor mesure 80 m de long et 55 m de large. On l'entoure d'un grillage d'une seule rangée, avec un portail de 6 m.", etapes: [{ q: "Étape 1 : périmètre du terrain (en m)", r: "270", unite: "m" }, { q: "Étape 2 : longueur du grillage (en m)", r: "264", unite: "m" }], expl: "(80 + 55) × 2 = 270 m ; 270 − 6 = 264 m." },
      { t: "probleme", q: "Khady entoure son potager carré de 12 m de côté avec 4 rangées de fil, et laisse une porte de 1 m. Elle a déjà 100 m de fil.", etapes: [{ q: "Étape 1 : longueur de fil nécessaire (en m)", r: "188", unite: "m" }, { q: "Étape 2 : longueur de fil qui lui manque (en m)", r: "88", unite: "m" }], expl: "12 × 4 = 48 m ; 48 − 1 = 47 m ; 47 × 4 = 188 m ; 188 − 100 = 88 m." },
      { t: "qcm", q: "Un champ carré de 25 m de côté a une porte de 3 m et 2 rangées de fil. Quelle est la longueur de fil ?", choix: ["194 m", "200 m", "197 m", "97 m"], r: "194 m", expl: "25 × 4 = 100 m ; 100 − 3 = 97 m ; 97 × 2 = 194 m." }
    ]
  ]
});
