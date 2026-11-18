LECONS.push({
  id: "ma-mes-perimetre-carre",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre et du côté du carré",
  date: "2026-10-08",
  photos: ["DJI_20261118221038_0077_D.jpg"],
  retiens:
    "<p>Le <b>périmètre</b>, c'est le <b>pourtour</b> d'une figure : la longueur de la ligne qui en fait le tour.</p>" +
    "<p>Le carré a 4 côtés égaux (c), donc :</p>" +
    "<table><tr><th>Je cherche</th><th>Formule</th></tr>" +
    "<tr><td>le périmètre</td><td>Périmètre = c + c + c + c ou <b>c × 4</b></td></tr>" +
    "<tr><td>le côté</td><td><b>Côté = Périmètre : 4</b></td></tr></table>" +
    "<p>Exemple : un carré de 6 cm de côté a un périmètre de 6 × 4 = 24 cm. Un carré de 24 cm de périmètre a un côté de 24 : 4 = 6 cm.</p>",
  astuce: "Le carré a <b>4</b> côtés égaux : on <b>multiplie</b> par 4 pour aller du côté au périmètre, on <b>divise</b> par 4 pour revenir au côté.",
  regle: "Dans un carré, Périmètre = côté × 4 et côté = Périmètre : 4.",
  niveaux: [
    [
      { t: "qcm", q: "Le périmètre d'une figure, c'est…", choix: ["la longueur de son pourtour", "la surface à l'intérieur", "la longueur d'un seul côté"], r: "la longueur de son pourtour", expl: "Périmètre = pourtour : on fait le tour de la figure." },
      { t: "qcm", q: "Combien de côtés égaux a un carré ?", choix: ["4", "2", "3"], r: "4", expl: "Le carré a 4 côtés égaux : c'est pour cela qu'on multiplie par 4." },
      { t: "qcm", q: "Quelle formule donne le périmètre du carré ?", choix: ["c × 4", "c × 2", "c + 4", "c : 4"], r: "c × 4", expl: "c + c + c + c = c × 4." },
      { t: "qcm", q: "Quelle formule donne le côté du carré quand on connaît le périmètre ?", choix: ["Périmètre : 4", "Périmètre × 4", "Périmètre − 4", "Périmètre : 2"], r: "Périmètre : 4", expl: "On partage le périmètre en 4 côtés égaux." },
      { t: "vf", q: "Pour un carré de 3 cm de côté : 3 + 3 + 3 + 3 = 3 × 4 = 12 cm.", r: true, expl: "Les deux calculs donnent le même périmètre : 12 cm." },
      { t: "relier", q: "Relie chaque carré à son périmètre.", paires: [["côté 2 cm", "8 cm"], ["côté 5 cm", "20 cm"], ["côté 10 cm", "40 cm"], ["côté 1 cm", "4 cm"]], expl: "On multiplie le côté par 4." }
    ],
    [
      { t: "saisie", q: "Côté : 5 cm. Périmètre = … cm", r: "20", nombre: true, unite: "cm", expl: "5 × 4 = 20 cm." },
      { t: "saisie", q: "Côté : 12 m. Périmètre = … m", r: "48", nombre: true, unite: "m", expl: "12 × 4 = 48 m." },
      { t: "saisie", q: "Côté : 25 m. Périmètre = … m", r: "100", nombre: true, unite: "m", expl: "25 × 4 = 100 m." },
      { t: "saisie", q: "Côté : 7,5 m. Périmètre = … m", r: "30", nombre: true, unite: "m", expl: "7,5 × 4 = 30 m." },
      { t: "saisie", q: "Périmètre : 36 cm. Côté = … cm", r: "9", nombre: true, unite: "cm", expl: "36 : 4 = 9 cm." },
      { t: "saisie", q: "Périmètre : 100 m. Côté = … m", r: "25", nombre: true, unite: "m", expl: "100 : 4 = 25 m." },
      { t: "saisie", q: "Périmètre : 240 m. Côté = … m", r: "60", nombre: true, unite: "m", expl: "240 : 4 = 60 m." },
      { t: "saisie", q: "Périmètre : 58 cm. Côté = … cm", r: "14,5", nombre: true, unite: "cm", expl: "58 : 4 = 14,5 cm." },
      { t: "classer", q: "Pour chaque question, faut-il multiplier ou diviser par 4 ?", cases: ["× 4", ": 4"], items: [["On connaît le côté, on cherche le périmètre.", "× 4"], ["On connaît le périmètre, on cherche le côté.", ": 4"], ["Combien de fil pour faire le tour d'un champ carré de 30 m de côté ?", "× 4"], ["Un terrain carré a 80 m de pourtour : combien mesure un côté ?", ": 4"]], expl: "Du côté vers le périmètre : × 4. Du périmètre vers le côté : : 4." }
    ],
    [
      { t: "saisie", q: "Côté : 1,25 m. Périmètre = … m", r: "5", nombre: true, unite: "m", expl: "1,25 × 4 = 5 m." },
      { t: "saisie", q: "Périmètre : 2 km. Côté = … m", r: "500", nombre: true, unite: "m", aide: "Convertis d'abord en mètres.", expl: "2 km = 2 000 m ; 2 000 : 4 = 500 m." },
      { t: "saisie", q: "Côté : 35 cm. Périmètre en m = … m", r: "1,4", nombre: true, unite: "m", expl: "35 × 4 = 140 cm = 1,4 m." },
      { t: "qcm", q: "Awa calcule le périmètre d'un carré de 8 m de côté et écrit 8 × 2 = 16 m. Où est l'erreur ?", choix: ["Il faut multiplier par 4 : 32 m.", "Il faut additionner : 8 + 4 = 12 m.", "Il n'y a pas d'erreur."], r: "Il faut multiplier par 4 : 32 m.", expl: "Le carré a 4 côtés : 8 × 4 = 32 m." },
      { t: "vf", q: "Si on double le côté d'un carré, son périmètre double aussi.", r: true, expl: "Côté 5 cm : périmètre 20 cm. Côté 10 cm : périmètre 40 cm. Le périmètre double." },
      { t: "saisie", q: "Un carré a le même périmètre qu'un triangle dont les trois côtés mesurent 9 cm, 10 cm et 13 cm. Côté du carré = … cm", r: "8", nombre: true, unite: "cm", expl: "Périmètre du triangle : 9 + 10 + 13 = 32 cm ; côté du carré : 32 : 4 = 8 cm." }
    ],
    [
      { t: "probleme", q: "Un terrain carré a un périmètre de 196 m. Trouve la longueur de son côté.", etapes: [{ q: "Côté du terrain (en m)", r: "49", unite: "m" }], expl: "Côté = Périmètre : 4 = 196 : 4 = 49 m. Vérification : 49 × 4 = 196 m." },
      { t: "probleme", q: "Le papa de Khady veut entourer son jardin carré de 15 m de côté avec un grillage. Le mètre de grillage coûte 1 000 F.", etapes: [{ q: "Étape 1 : périmètre du jardin (en m)", r: "60", unite: "m" }, { q: "Étape 2 : prix du grillage (en F)", r: "60000", unite: "F" }], expl: "15 × 4 = 60 m ; 60 × 1 000 = 60 000 F." },
      { t: "probleme", q: "Pour s'entraîner, Mamadou fait 3 fois le tour d'un terrain de football carré de 80 m de côté.", etapes: [{ q: "Étape 1 : périmètre du terrain (en m)", r: "320", unite: "m" }, { q: "Étape 2 : distance parcourue (en m)", r: "960", unite: "m" }], expl: "80 × 4 = 320 m ; 320 × 3 = 960 m." },
      { t: "probleme", q: "Fatou a un fil de 1 m. Elle l'utilise entièrement pour former un carré.", etapes: [{ q: "Étape 1 : 1 m en cm", r: "100", unite: "cm" }, { q: "Étape 2 : côté du carré (en cm)", r: "25", unite: "cm" }], expl: "1 m = 100 cm ; le fil forme le pourtour : 100 : 4 = 25 cm." },
      { t: "probleme", q: "Un champ carré a 72 m de côté. Un autre champ carré a un périmètre 2 fois plus petit.", etapes: [{ q: "Étape 1 : périmètre du premier champ (en m)", r: "288", unite: "m" }, { q: "Étape 2 : périmètre du second champ (en m)", r: "144", unite: "m" }, { q: "Étape 3 : côté du second champ (en m)", r: "36", unite: "m" }], expl: "72 × 4 = 288 m ; 288 : 2 = 144 m ; 144 : 4 = 36 m." }
    ]
  ]
});
