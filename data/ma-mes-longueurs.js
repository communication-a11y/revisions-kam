LECONS.push({
  id: "ma-mes-longueurs",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de longueur",
  date: "2026-09-15",
  photos: ["DJI_20261118220731_0060_D.jpg"],
  retiens:
    "<p>L'unité principale des mesures de longueur est le <b>mètre (m)</b>.</p>" +
    "<ul><li>Les <b>multiples</b> du mètre sont : le décamètre (<b>dam</b>), l'hectomètre (<b>hm</b>) et le kilomètre (<b>km</b>).</li>" +
    "<li>Les <b>sous-multiples</b> du mètre sont : le décimètre (<b>dm</b>), le centimètre (<b>cm</b>) et le millimètre (<b>mm</b>).</li></ul>" +
    "<p>Ces unités sont <b>10 fois</b> plus grandes ou plus petites les unes que les autres : chaque unité vaut 10 fois celle qui est à sa droite dans le tableau.</p>" +
    "<table><tr><th colspan='3'>multiples</th><th>unité principale</th><th colspan='3'>sous-multiples</th></tr>" +
    "<tr><td>km</td><td>hm</td><td>dam</td><td><b>m</b></td><td>dm</td><td>cm</td><td>mm</td></tr>" +
    "<tr><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>" +
    "<p>1 km = 1 000 m ; 1 m = 10 dm = 100 cm = 1 000 mm.</p>",
  astuce: "Pour convertir, écris le nombre dans le tableau : <b>un seul chiffre par colonne</b>, le chiffre des unités dans la colonne de l'unité donnée. Puis lis le nombre dans la nouvelle unité, en complétant avec des zéros ou en plaçant la virgule.",
  regle: "Dans le tableau km, hm, dam, m, dm, cm, mm, on passe d'une colonne à la suivante en multipliant ou en divisant par 10.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle est l'unité principale des mesures de longueur ?", choix: ["le mètre", "le kilomètre", "le centimètre", "le litre"], r: "le mètre", expl: "Le mètre (m) est l'unité principale ; les autres unités sont ses multiples ou ses sous-multiples." },
      { t: "classer", q: "Range chaque unité : multiple ou sous-multiple du mètre ?", cases: ["multiple du mètre", "sous-multiple du mètre"], items: [["km", "multiple du mètre"], ["dm", "sous-multiple du mètre"], ["hm", "multiple du mètre"], ["mm", "sous-multiple du mètre"], ["dam", "multiple du mètre"], ["cm", "sous-multiple du mètre"]], expl: "Multiples (plus grands que le mètre) : dam, hm, km. Sous-multiples (plus petits) : dm, cm, mm." },
      { t: "relier", q: "Relie chaque abréviation à son nom.", paires: [["km", "kilomètre"], ["hm", "hectomètre"], ["dam", "décamètre"], ["dm", "décimètre"], ["cm", "centimètre"], ["mm", "millimètre"]], expl: "kilo = 1 000, hecto = 100, déca = 10 ; déci = un dixième, centi = un centième, milli = un millième." },
      { t: "vf", q: "Un décimètre est 10 fois plus petit qu'un mètre.", r: true, expl: "1 m = 10 dm : le décimètre est 10 fois plus petit." },
      { t: "qcm", q: "Combien de mètres y a-t-il dans 1 km ?", choix: ["10", "100", "1 000", "10 000"], r: "1 000", expl: "km, hm, dam, m : trois colonnes, donc 1 km = 1 000 m." },
      { t: "trous", q: "Complète l'ordre des unités, de la plus grande à la plus petite.", texte: "km — [hm] — dam — [m] — dm — [cm] — mm", expl: "km, hm, dam, m, dm, cm, mm." }
    ],
    [
      { t: "saisie", q: "3 km = … m", r: "3000", nombre: true, unite: "m", expl: "1 km = 1 000 m, donc 3 km = 3 000 m." },
      { t: "saisie", q: "1 m = … cm", r: "100", nombre: true, unite: "cm", expl: "m, dm, cm : deux colonnes, donc 1 m = 100 cm." },
      { t: "saisie", q: "1 m = … mm", r: "1000", nombre: true, unite: "mm", expl: "m, dm, cm, mm : trois colonnes, donc 1 m = 1 000 mm." },
      { t: "saisie", q: "5 dam = … m", r: "50", nombre: true, unite: "m", expl: "1 dam = 10 m, donc 5 dam = 50 m." },
      { t: "saisie", q: "4 hm = … m", r: "400", nombre: true, unite: "m", expl: "1 hm = 100 m, donc 4 hm = 400 m." },
      { t: "saisie", q: "12 dm = … cm", r: "120", nombre: true, unite: "cm", expl: "1 dm = 10 cm, donc 12 dm = 120 cm." },
      { t: "saisie", q: "7 cm = … mm", r: "70", nombre: true, unite: "mm", expl: "1 cm = 10 mm, donc 7 cm = 70 mm." },
      { t: "saisie", q: "6 000 m = … km", r: "6", nombre: true, unite: "km", expl: "1 000 m = 1 km, donc 6 000 m = 6 km." },
      { t: "saisie", q: "300 cm = … m", r: "3", nombre: true, unite: "m", expl: "100 cm = 1 m, donc 300 cm = 3 m." },
      { t: "relier", q: "Relie les longueurs égales.", paires: [["1 km", "1 000 m"], ["1 hm", "100 m"], ["1 dam", "10 m"], ["1 m", "10 dm"], ["1 dm", "10 cm"]], expl: "Chaque unité vaut 10 fois celle qui la suit dans le tableau." }
    ],
    [
      { t: "saisie", q: "2 500 m = … km", r: "2,5", nombre: true, unite: "km", aide: "Place le 2 dans la colonne des km.", expl: "2 500 m = 2 km 500 m = 2,5 km." },
      { t: "saisie", q: "75 cm = … m", r: "0,75", nombre: true, unite: "m", expl: "Le 5 est dans la colonne des cm : 0 m 7 dm 5 cm = 0,75 m." },
      { t: "saisie", q: "3,4 m = … cm", r: "340", nombre: true, unite: "cm", expl: "3,4 m = 3 m 4 dm = 340 cm." },
      { t: "saisie", q: "8 mm = … cm", r: "0,8", nombre: true, unite: "cm", expl: "10 mm = 1 cm, donc 8 mm = 0,8 cm." },
      { t: "saisie", q: "6 km 250 m = … m", r: "6250", nombre: true, unite: "m", expl: "6 km = 6 000 m ; 6 000 m + 250 m = 6 250 m." },
      { t: "saisie", q: "450 cm = … m", r: "4,5", nombre: true, unite: "m", expl: "450 cm = 4 m 50 cm = 4,5 m." },
      { t: "qcm", q: "Quelle longueur est la plus grande ?", choix: ["1,5 km", "1 400 m", "140 dam", "14 hm"], r: "1,5 km", aide: "Convertis tout en mètres.", expl: "1,5 km = 1 500 m ; 1 400 m ; 140 dam = 1 400 m ; 14 hm = 1 400 m. C'est 1,5 km." },
      { t: "vf", q: "1 cm = 100 mm.", r: false, expl: "Le cm et le mm sont voisins dans le tableau : 1 cm = 10 mm seulement." }
    ],
    [
      { t: "probleme", q: "Moussa habite à 850 m de l'école. Il fait l'aller-retour deux fois par jour (le matin et l'après-midi).", etapes: [{ q: "Étape 1 : longueur d'un aller-retour (en m)", r: "1700", unite: "m" }, { q: "Étape 2 : distance parcourue dans la journée (en m)", r: "3400", unite: "m" }, { q: "Étape 3 : cette distance en km", r: "3,4", unite: "km" }], expl: "850 m × 2 = 1 700 m ; 1 700 m × 2 = 3 400 m = 3,4 km." },
      { t: "probleme", q: "Fatou a un ruban de 2 m. Elle coupe 3 morceaux de 45 cm chacun pour décorer des cadeaux.", etapes: [{ q: "Étape 1 : longueur du ruban en cm", r: "200", unite: "cm" }, { q: "Étape 2 : longueur utilisée (en cm)", r: "135", unite: "cm" }, { q: "Étape 3 : longueur qui reste (en cm)", r: "65", unite: "cm" }], expl: "2 m = 200 cm ; 45 cm × 3 = 135 cm ; 200 cm − 135 cm = 65 cm. On met tout dans la même unité avant de calculer." },
      { t: "probleme", q: "Un car part de Dakar. Il parcourt 35 km avant une pause, puis encore 35 km pour arriver à Thiès.", etapes: [{ q: "Étape 1 : distance totale en km", r: "70", unite: "km" }, { q: "Étape 2 : cette distance en m", r: "70000", unite: "m" }], expl: "35 km + 35 km = 70 km ; 70 km = 70 000 m." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1,2 km = [1200] m — 9 dm = [90] cm — 4 m 5 cm = [405] cm — 25 mm = [2,5|2.5] cm", expl: "1,2 km = 1 200 m ; 9 dm = 90 cm ; 4 m = 400 cm, + 5 cm = 405 cm ; 25 mm = 2,5 cm." },
      { t: "qcm", q: "Ibrahima mesure la longueur d'une table. Quelle unité est la mieux adaptée ?", choix: ["le centimètre", "le kilomètre", "l'hectomètre", "le litre"], r: "le centimètre", expl: "Une table mesure environ 1 m ou 150 cm : on choisit le mètre ou le centimètre. Le km sert pour les grandes distances, le litre mesure des liquides." }
    ]
  ]
});
