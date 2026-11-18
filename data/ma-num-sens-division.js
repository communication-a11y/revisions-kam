LECONS.push({
  id: "ma-num-sens-division",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Le sens de la division",
  date: "2026-10-20",
  photos: ["DJI_20261118221130_0084_D.jpg", "DJI_20261118221134_0085_D.jpg"],
  retiens:
    "<p>La <b>division</b> est une opération qui permet de trouver :</p>" +
    "<ul><li>le <b>nombre d'unités</b> (le nombre de parts) ;</li><li>le prix, la masse, la longueur, la capacité <b>de l'unité</b>, ou la <b>valeur d'une part</b>, à partir de la valeur totale.</li></ul>" +
    "<p><b>VU = VT : NU</b> et <b>NU = VT : VU</b><br>(VU = valeur unitaire ; VT = valeur totale ; NU = nombre d'unités)</p>" +
    "<table><tr><td>dividende → <b>375</b></td><td><b>15</b> ← diviseur</td></tr>" +
    "<tr><td>− 375</td><td><b>25</b> ← quotient</td></tr>" +
    "<tr><td>reste → <b>0</b></td><td></td></tr>" +
    "</table>" +
    "<p><b>Dividende = (quotient × diviseur) + reste</b><br>Ex : 375 = (25 × 15) + 0</p>",
  astuce: "On divise la <b>valeur totale</b> : par le nombre d'unités pour trouver la valeur d'une unité, ou par la valeur d'une unité pour trouver le nombre d'unités.",
  regle: "VU = VT : NU et NU = VT : VU. Dividende = (quotient × diviseur) + reste.",
  niveaux: [
    [
      { t: "relier", q: "Dans la division 375 : 15 = 25 (reste 0), relie chaque nombre à son nom.", paires: [["375", "dividende"], ["15", "diviseur"], ["25", "quotient"], ["0", "reste"]], expl: "On divise le dividende par le diviseur ; on obtient le quotient et le reste." },
      { t: "relier", q: "Relie chaque abréviation à sa signification.", paires: [["VU", "valeur unitaire"], ["VT", "valeur totale"], ["NU", "nombre d'unités"]], expl: "VU = valeur d'une unité ; VT = valeur de toutes les unités ; NU = combien il y a d'unités." },
      { t: "qcm", q: "On connaît le prix de 6 cahiers. Pour trouver le prix d'un cahier, on fait…", choix: ["une division", "une addition", "une multiplication"], r: "une division", expl: "VU = VT : NU." },
      { t: "vf", q: "VU = VT : NU", r: true, expl: "La valeur d'une unité = valeur totale divisée par le nombre d'unités." },
      { t: "qcm", q: "NU = ?", choix: ["VT : VU", "VT × VU", "VU : VT"], r: "VT : VU", expl: "Le nombre d'unités = valeur totale divisée par la valeur d'une unité." },
      { t: "vf", q: "Dividende = (quotient × diviseur) + reste", r: true, expl: "Ex : 375 = (25 × 15) + 0." }
    ],
    [
      { t: "saisie", q: "6 cahiers coûtent 1 800 F. Combien coûte un cahier ?", r: "300", expl: "VU = VT : NU = 1 800 : 6 = 300 F.", unite: "F" },
      { t: "saisie", q: "Awa partage 48 mangues entre 8 enfants. Combien de mangues reçoit chaque enfant ?", r: "6", expl: "Valeur d'une part : 48 : 8 = 6 mangues." },
      { t: "saisie", q: "On coupe un rouleau de 120 m en morceaux de 10 m. Combien de morceaux obtient-on ?", r: "12", expl: "NU = VT : VU = 120 : 10 = 12 morceaux." },
      { t: "saisie", q: "5 sacs pèsent 250 kg en tout. Combien pèse un sac ?", r: "50", expl: "VU = VT : NU = 250 : 5 = 50 kg.", unite: "kg" },
      { t: "saisie", q: "VT = 2 400 F et VU = 400 F. Combien vaut NU ?", r: "6", expl: "NU = VT : VU = 2 400 : 400 = 6." },
      { t: "saisie", q: "Dans une division, le quotient est 7, le diviseur 9 et le reste 4. Quel est le dividende ?", r: "67", expl: "Dividende = (7 × 9) + 4 = 63 + 4 = 67." },
      { t: "trous", q: "Complète l'égalité de la division 375 : 15.", texte: "375 = ([25] × 15) + [0]", nombre: true, expl: "Dividende = (quotient × diviseur) + reste." },
      { t: "classer", q: "Que cherche-t-on ?", cases: ["la valeur d'une unité (VU)", "le nombre d'unités (NU)"], items: [["le prix d'un pain, si 5 pains coûtent 750 F", "la valeur d'une unité (VU)"], ["le nombre de sacs de 50 kg dans 1 000 kg", "le nombre d'unités (NU)"], ["la masse d'un carton, si 4 cartons pèsent 36 kg", "la valeur d'une unité (VU)"], ["le nombre de bidons de 2 l pour 30 l", "le nombre d'unités (NU)"], ["la longueur d'un morceau, si on coupe 60 m en 4", "la valeur d'une unité (VU)"], ["le nombre de tickets à 150 F avec 900 F", "le nombre d'unités (NU)"]], expl: "On cherche la valeur d'une seule chose → VU. On cherche combien de choses → NU." },
      { t: "saisie", q: "Avec 1 200 F, combien d'oranges à 100 F l'une Awa peut-elle acheter ?", r: "12", expl: "NU = VT : VU = 1 200 : 100 = 12 oranges." }
    ],
    [
      { t: "qcm", q: "47 : 5 = 9, reste 2. Quelle égalité le vérifie ?", choix: ["(9 × 5) + 2 = 47", "(9 + 5) × 2 = 47", "9 × 5 × 2 = 47"], r: "(9 × 5) + 2 = 47", expl: "Dividende = (quotient × diviseur) + reste : 45 + 2 = 47." },
      { t: "vf", q: "Si 7 savons coûtent 1 400 F, un savon coûte 1 400 F × 7.", r: false, expl: "Pour la valeur d'une unité, on divise : 1 400 : 7 = 200 F." },
      { t: "saisie", q: "Le quotient est 12, le diviseur 15 et le reste 3. Quel est le dividende ?", r: "183", expl: "(12 × 15) + 3 = 180 + 3 = 183." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Divise 63 par 8.", etapes: [{ q: "Quel est le quotient ?", r: "7" }, { q: "Quel est le reste ?", r: "7" }], expl: "8 × 7 = 56 ; 63 − 56 = 7. Vérification : (7 × 8) + 7 = 63." },
      { t: "qcm", q: "Moussa dit : « 50 : 6 = 8, reste 2 ». A-t-il raison ?", choix: ["Oui, car (8 × 6) + 2 = 50", "Non, car (8 × 6) + 2 = 52", "Non, le reste est 3"], r: "Oui, car (8 × 6) + 2 = 50", expl: "48 + 2 = 50 : on retrouve bien le dividende." },
      { t: "saisie", q: "Un car transporte 360 passagers en 9 voyages, avec le même nombre à chaque fois. Combien de passagers par voyage ?", r: "40", expl: "VU = VT : NU = 360 : 9 = 40 passagers." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Khady a 2 300 F. Le kilo de sucre coûte 500 F. Elle achète le plus de kilos possible.", etapes: [{ q: "Combien de kilos achète-t-elle ?", r: "4", unite: "kg" }, { q: "Combien d'argent lui reste-t-il ?", r: "300", unite: "F" }], expl: "2 300 : 500 = 4, reste 300. Vérification : (4 × 500) + 300 = 2 300." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un commerçant achète 8 sacs de riz pour 140 000 F. Il revend chaque sac 19 000 F.", etapes: [{ q: "Prix d'achat d'un sac :", r: "17500", unite: "F" }, { q: "Bénéfice sur un sac :", r: "1500", unite: "F" }], expl: "VU = 140 000 : 8 = 17 500 F ; 19 000 − 17 500 = 1 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une couturière a 36 m de tissu. Il faut 4 m pour une robe. Elle vend chaque robe 7 500 F.", etapes: [{ q: "Combien de robes peut-elle coudre ?", r: "9" }, { q: "Combien gagne-t-elle en vendant toutes les robes ?", r: "67500", unite: "F" }], expl: "NU = 36 : 4 = 9 robes ; 7 500 × 9 = 67 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une école de 375 élèves a 15 classes qui ont toutes le même nombre d'élèves. 3 classes partent en excursion.", etapes: [{ q: "Nombre d'élèves par classe :", r: "25" }, { q: "Nombre d'élèves qui partent :", r: "75" }], expl: "375 : 15 = 25 élèves ; 25 × 3 = 75 élèves." },
      { t: "qcm", q: "VT = 9 000 F et NU = 12. Combien vaut VU ?", choix: ["750 F", "108 000 F", "8 988 F", "900 F"], r: "750 F", expl: "VU = VT : NU = 9 000 : 12 = 750 F." },
      { t: "trous", q: "Complète.", texte: "Dans 375 : 15 = 25, 375 est le [dividende], 15 est le [diviseur] et 25 est le [quotient].", expl: "Dividende : diviseur = quotient." }
    ]
  ]
});
