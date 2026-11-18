// À VÉRIFIER : le cahier ne contient pas (encore) de leçon sur le cercle. L'exercice « circonférence 47 cm → diamètre, rayon »,
// déjà travaillé avec le parent, est placé ici en BONUS dans le Défi, avec la formule donnée dans l'énoncé.
LECONS.push({
  id: "ma-mes-perimetre-rectangle",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre et des dimensions du rectangle",
  date: "2026-10-14",
  photos: ["DJI_20261118221108_0080_D.jpg", "DJI_20261118221112_0081_D.jpg"],
  retiens:
    "<p>Les <b>dimensions</b> du rectangle sont la <b>longueur</b> (L) et la <b>largeur</b> (l).</p>" +
    "<p><b>Périmètre = (Longueur + largeur) × 2</b> ou <b>Demi-périmètre × 2</b></p>" +
    "<p><b>Demi-périmètre = Périmètre : 2</b> ou <b>Longueur + largeur</b></p>" +
    "<p>Pour calculer une dimension connaissant le périmètre, on trouve <b>d'abord le demi-périmètre</b>, puis :</p>" +
    "<ul><li><b>Longueur = Demi-périmètre − largeur</b></li>" +
    "<li><b>largeur = Demi-périmètre − Longueur</b></li></ul>" +
    "<p>Exemple : un jardin de 25 m sur 18 m a pour périmètre (25 + 18) × 2 = 86 m. Si l'on sait seulement que le périmètre vaut 86 m et la longueur 25 m : demi-périmètre 86 : 2 = 43 m, largeur 43 − 25 = 18 m.</p>",
  astuce: "Le demi-périmètre, c'est <b>une longueur + une largeur</b> : la moitié du tour. On commence toujours par lui quand on cherche une dimension.",
  regle: "Périmètre = (L + l) × 2. Pour trouver une dimension : demi-périmètre = P : 2, puis on retire la dimension connue.",
  niveaux: [
    [
      { t: "qcm", q: "Quelles sont les dimensions d'un rectangle ?", choix: ["la longueur et la largeur", "le côté et le périmètre", "la hauteur et la base"], r: "la longueur et la largeur", expl: "Un rectangle a une longueur et une largeur : ce sont ses dimensions." },
      { t: "qcm", q: "Quelle formule donne le périmètre du rectangle ?", choix: ["(L + l) × 2", "L + l", "L × 4", "(L + l) : 2"], r: "(L + l) × 2", expl: "Le rectangle a 2 longueurs et 2 largeurs : (L + l) × 2." },
      { t: "qcm", q: "Que représente L + l ?", choix: ["le demi-périmètre", "le périmètre", "la largeur"], r: "le demi-périmètre", expl: "Une longueur plus une largeur, c'est la moitié du tour : le demi-périmètre." },
      { t: "vf", q: "Pour trouver la largeur à partir du périmètre, on calcule d'abord le demi-périmètre.", r: true, expl: "C'est la règle de la leçon : demi-périmètre d'abord, puis on retire la longueur." },
      { t: "relier", q: "Relie chaque grandeur cherchée à sa formule.", paires: [["Périmètre", "(L + l) × 2"], ["Demi-périmètre", "P : 2"], ["Longueur", "Demi-périmètre − l"], ["largeur", "Demi-périmètre − L"]], expl: "Ce sont les quatre formules de la leçon." },
      { t: "saisie", q: "Un rectangle mesure 4 cm sur 2 cm. Son périmètre = … cm", r: "12", nombre: true, unite: "cm", expl: "(4 + 2) × 2 = 6 × 2 = 12 cm." }
    ],
    [
      { t: "saisie", q: "L = 8 cm, l = 5 cm. Périmètre = … cm", r: "26", nombre: true, unite: "cm", expl: "(8 + 5) × 2 = 13 × 2 = 26 cm." },
      { t: "saisie", q: "L = 25 m, l = 18 m. Périmètre = … m", r: "86", nombre: true, unite: "m", expl: "(25 + 18) × 2 = 43 × 2 = 86 m." },
      { t: "saisie", q: "L = 40 m, l = 25 m. Périmètre = … m", r: "130", nombre: true, unite: "m", expl: "(40 + 25) × 2 = 65 × 2 = 130 m." },
      { t: "saisie", q: "L = 12,5 m, l = 7,5 m. Périmètre = … m", r: "40", nombre: true, unite: "m", expl: "(12,5 + 7,5) × 2 = 20 × 2 = 40 m." },
      { t: "saisie", q: "Périmètre = 50 cm. Demi-périmètre = … cm", r: "25", nombre: true, unite: "cm", expl: "50 : 2 = 25 cm." },
      { t: "saisie", q: "Périmètre = 86 m, L = 25 m. Largeur = … m", r: "18", nombre: true, unite: "m", expl: "Demi-périmètre : 86 : 2 = 43 m ; largeur : 43 − 25 = 18 m." },
      { t: "saisie", q: "Périmètre = 130 m, l = 25 m. Longueur = … m", r: "40", nombre: true, unite: "m", expl: "Demi-périmètre : 130 : 2 = 65 m ; longueur : 65 − 25 = 40 m." },
      { t: "saisie", q: "Demi-périmètre = 45 m, L = 30 m. Largeur = … m", r: "15", nombre: true, unite: "m", expl: "45 − 30 = 15 m." },
      { t: "saisie", q: "L = 60 m, l = 35 m. Demi-périmètre = … m", r: "95", nombre: true, unite: "m", expl: "60 + 35 = 95 m." }
    ],
    [
      { t: "qcm", q: "Moussa calcule le périmètre d'un rectangle de 6 m sur 4 m et écrit 6 + 4 = 10 m. Qu'a-t-il trouvé ?", choix: ["le demi-périmètre ; le périmètre est 20 m", "le bon périmètre", "la largeur"], r: "le demi-périmètre ; le périmètre est 20 m", expl: "6 + 4 = 10 m est le demi-périmètre. Il faut encore multiplier par 2 : 20 m." },
      { t: "qcm", q: "Périmètre 70 m, longueur 20 m. Quel calcul est juste pour la largeur ?", choix: ["70 : 2 − 20", "70 − 20", "(70 − 20) × 2", "70 : 4"], r: "70 : 2 − 20", expl: "Demi-périmètre 35 m, puis 35 − 20 = 15 m. Retirer 20 directement de 70 est une erreur fréquente." },
      { t: "saisie", q: "L = 1,2 m, l = 80 cm. Périmètre = … m", r: "4", nombre: true, unite: "m", aide: "Mets d'abord les deux dimensions dans la même unité.", expl: "80 cm = 0,8 m ; (1,2 + 0,8) × 2 = 2 × 2 = 4 m." },
      { t: "saisie", q: "Périmètre = 1 km, l = 200 m. Longueur = … m", r: "300", nombre: true, unite: "m", expl: "1 km = 1 000 m ; demi-périmètre 500 m ; longueur 500 − 200 = 300 m." },
      { t: "saisie", q: "Périmètre = 37 m, L = 11 m. Largeur = … m", r: "7,5", nombre: true, unite: "m", expl: "Demi-périmètre : 37 : 2 = 18,5 m ; largeur : 18,5 − 11 = 7,5 m." },
      { t: "vf", q: "Un rectangle de 10 m sur 5 m et un carré de 7,5 m de côté ont le même périmètre.", r: true, expl: "Rectangle : (10 + 5) × 2 = 30 m. Carré : 7,5 × 4 = 30 m." },
      { t: "trous", q: "Complète le tableau (en m).", nombre: true, texte: "L = 30, l = 20 → P = [100] — P = 64, L = 20 → l = [12] — P = 90, l = 15 → L = [30]", expl: "(30 + 20) × 2 = 100 ; 64 : 2 = 32, 32 − 20 = 12 ; 90 : 2 = 45, 45 − 15 = 30." }
    ],
    [
      { t: "probleme", q: "Deux terrains ont chacun un périmètre de 196 m. L'un est carré. L'autre est rectangulaire et mesure 53 m de long.", etapes: [{ q: "Étape 1 : côté du terrain carré (en m)", r: "49", unite: "m" }, { q: "Étape 2 : demi-périmètre du terrain rectangulaire (en m)", r: "98", unite: "m" }, { q: "Étape 3 : largeur du terrain rectangulaire (en m)", r: "45", unite: "m" }], expl: "Carré : 196 : 4 = 49 m. Rectangle : 196 : 2 = 98 m, puis 98 − 53 = 45 m." },
      { t: "probleme", q: "Un jardin rectangulaire mesure 600 m de demi-périmètre. La longueur dépasse la largeur de 40 m. Trouve les dimensions du jardin.", etapes: [{ q: "Étape 1 : deux largeurs = 600 − 40 (en m)", r: "560", unite: "m" }, { q: "Étape 2 : largeur (en m)", r: "280", unite: "m" }, { q: "Étape 3 : longueur (en m)", r: "320", unite: "m" }], expl: "Si on enlève les 40 m de plus, il reste deux largeurs : 600 − 40 = 560 m ; largeur 560 : 2 = 280 m ; longueur 280 + 40 = 320 m. Vérification : 280 + 320 = 600 m." },
      { t: "probleme", q: "Un champ rectangulaire de Thiès mesure 120 m sur 80 m. Le propriétaire veut l'entourer d'un fil qui coûte 300 F le mètre.", etapes: [{ q: "Étape 1 : périmètre du champ (en m)", r: "400", unite: "m" }, { q: "Étape 2 : prix du fil (en F)", r: "120000", unite: "F" }], expl: "(120 + 80) × 2 = 400 m ; 400 × 300 = 120 000 F." },
      { t: "probleme", q: "La cour rectangulaire de l'école a un périmètre de 150 m. Sa largeur mesure 30 m.", etapes: [{ q: "Étape 1 : demi-périmètre (en m)", r: "75", unite: "m" }, { q: "Étape 2 : longueur (en m)", r: "45", unite: "m" }, { q: "Étape 3 : de combien la longueur dépasse-t-elle la largeur ? (en m)", r: "15", unite: "m" }], expl: "150 : 2 = 75 m ; 75 − 30 = 45 m ; 45 − 30 = 15 m." },
      { t: "probleme", q: "<b>Bonus</b> (le cercle, pas encore vu au cahier) : le tour d'un cercle s'appelle la <b>circonférence</b>. On trouve le <b>diamètre</b> en divisant la circonférence par 3,14, et le <b>rayon</b> est la moitié du diamètre. Un cercle a une circonférence de 47 cm. Arrondis au centième.", etapes: [{ q: "Étape 1 : diamètre (47 : 3,14), en cm", r: ["14,97", "14,96"], unite: "cm" }, { q: "Étape 2 : rayon (diamètre : 2), en cm", r: ["7,48", "7,49"], unite: "cm" }], expl: "47 : 3,14 ≈ 14,97 cm ; 14,97 : 2 ≈ 7,48 cm (environ 7,5 cm)." }
    ]
  ]
});
