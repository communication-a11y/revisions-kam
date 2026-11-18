LECONS.push({
  id: "ma-mes-capacites",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de capacité",
  date: "2026-09-22",
  photos: ["DJI_20261118220814_0065_D.jpg"],
  retiens:
    "<p>Pour mesurer des liquides (eau, huile, lait…), on utilise des mesures de capacité.</p>" +
    "<p>Le <b>litre (l)</b> est l'unité principale des mesures de capacité.</p>" +
    "<ul><li>Les <b>multiples</b> du litre sont : le décalitre (<b>dal</b>) et l'hectolitre (<b>hl</b>).</li>" +
    "<li>Les <b>sous-multiples</b> du litre sont : le décilitre (<b>dl</b>), le centilitre (<b>cl</b>) et le millilitre (<b>ml</b>).</li></ul>" +
    "<table><tr><th>hl</th><th>dal</th><th>l</th><th>dl</th><th>cl</th><th>ml</th></tr>" +
    "<tr><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>" +
    "<p>On lit dans le tableau : 1 hl = 100 l et 1 l = 1 000 ml. Comme pour les longueurs, on passe d'une colonne à l'autre en multipliant ou en divisant par 10.</p>",
  astuce: "Les préfixes sont les mêmes que pour le mètre : <b>déca</b> (10), <b>hecto</b> (100), <b>déci</b>, <b>centi</b>, <b>milli</b>. Seule l'unité change : l au lieu de m.",
  regle: "Dans le tableau hl, dal, l, dl, cl, ml, chaque unité vaut 10 fois celle qui est à sa droite.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle est l'unité principale des mesures de capacité ?", choix: ["le litre", "le mètre", "le gramme", "le centilitre"], r: "le litre", expl: "On mesure les liquides en litres : c'est l'unité principale." },
      { t: "qcm", q: "Avec quelle mesure exprime-t-on la quantité d'huile dans une bouteille ?", choix: ["une mesure de capacité", "une mesure de longueur", "une mesure de masse"], r: "une mesure de capacité", expl: "L'huile est un liquide : on la mesure en litres, c'est une capacité." },
      { t: "classer", q: "Multiple ou sous-multiple du litre ?", cases: ["multiple du litre", "sous-multiple du litre"], items: [["hl", "multiple du litre"], ["cl", "sous-multiple du litre"], ["dal", "multiple du litre"], ["ml", "sous-multiple du litre"], ["dl", "sous-multiple du litre"]], expl: "Multiples : dal, hl. Sous-multiples : dl, cl, ml." },
      { t: "relier", q: "Relie chaque abréviation à son nom.", paires: [["hl", "hectolitre"], ["dal", "décalitre"], ["dl", "décilitre"], ["cl", "centilitre"], ["ml", "millilitre"]], expl: "Les préfixes sont les mêmes qu'avec le mètre." },
      { t: "vf", q: "1 hl = 100 l.", r: true, expl: "hl, dal, l : deux colonnes, donc 1 hl = 100 l." },
      { t: "trous", q: "Complète l'ordre des unités, de la plus grande à la plus petite.", texte: "hl — [dal] — l — [dl] — cl — [ml]", expl: "hl, dal, l, dl, cl, ml." }
    ],
    [
      { t: "saisie", q: "4 l = … dl", r: "40", nombre: true, unite: "dl", expl: "1 l = 10 dl, donc 4 l = 40 dl." },
      { t: "saisie", q: "2 l = … cl", r: "200", nombre: true, unite: "cl", expl: "1 l = 100 cl, donc 2 l = 200 cl." },
      { t: "saisie", q: "3 l = … ml", r: "3000", nombre: true, unite: "ml", expl: "1 l = 1 000 ml, donc 3 l = 3 000 ml." },
      { t: "saisie", q: "5 hl = … l", r: "500", nombre: true, unite: "l", expl: "1 hl = 100 l, donc 5 hl = 500 l." },
      { t: "saisie", q: "6 dal = … l", r: "60", nombre: true, unite: "l", expl: "1 dal = 10 l, donc 6 dal = 60 l." },
      { t: "saisie", q: "20 dl = … l", r: "2", nombre: true, unite: "l", expl: "10 dl = 1 l, donc 20 dl = 2 l." },
      { t: "saisie", q: "4 000 ml = … l", r: "4", nombre: true, unite: "l", expl: "1 000 ml = 1 l, donc 4 000 ml = 4 l." },
      { t: "saisie", q: "7 cl = … ml", r: "70", nombre: true, unite: "ml", expl: "1 cl = 10 ml, donc 7 cl = 70 ml." },
      { t: "relier", q: "Relie les capacités égales.", paires: [["1 hl", "100 l"], ["1 dal", "10 l"], ["1 l", "100 cl"], ["1 dl", "10 cl"], ["1 cl", "10 ml"]], expl: "Chaque unité vaut 10 fois celle qui la suit dans le tableau." }
    ],
    [
      { t: "saisie", q: "250 cl = … l", r: "2,5", nombre: true, unite: "l", expl: "250 cl = 2 l 50 cl = 2,5 l." },
      { t: "saisie", q: "1,5 l = … cl", r: "150", nombre: true, unite: "cl", expl: "1,5 l = 1 l 5 dl = 150 cl." },
      { t: "saisie", q: "750 ml = … l", r: "0,75", nombre: true, unite: "l", expl: "750 ml = 0 l 7 dl 5 cl = 0,75 l." },
      { t: "saisie", q: "33 cl = … ml", r: "330", nombre: true, unite: "ml", expl: "1 cl = 10 ml, donc 33 cl = 330 ml." },
      { t: "saisie", q: "2 hl 5 l = … l", r: "205", nombre: true, unite: "l", expl: "2 hl = 200 l ; 200 l + 5 l = 205 l." },
      { t: "qcm", q: "Quelle capacité est la plus grande ?", choix: ["1 l", "90 cl", "800 ml", "9 dl"], r: "1 l", aide: "Convertis tout en centilitres.", expl: "1 l = 100 cl ; 90 cl ; 800 ml = 80 cl ; 9 dl = 90 cl. C'est 1 l." },
      { t: "vf", q: "1 l = 100 ml.", r: false, expl: "Entre l et ml, il y a trois colonnes : 1 l = 1 000 ml." }
    ],
    [
      { t: "probleme", q: "La maman d'Awa achète 3 bouteilles d'huile de 1,5 l chacune.", etapes: [{ q: "Étape 1 : quantité totale d'huile (en l)", r: "4,5", unite: "l" }, { q: "Étape 2 : cette quantité en cl", r: "450", unite: "cl" }], expl: "1,5 l × 3 = 4,5 l ; 4,5 l = 450 cl." },
      { t: "probleme", q: "Un bidon contient 20 l de jus de bissap. On le verse dans des bouteilles de 50 cl.", etapes: [{ q: "Étape 1 : 20 l en cl", r: "2000", unite: "cl" }, { q: "Étape 2 : nombre de bouteilles remplies", r: "40" }], expl: "20 l = 2 000 cl ; 2 000 cl : 50 cl = 40 bouteilles. On convertit d'abord pour avoir la même unité." },
      { t: "probleme", q: "Pour remplir un fût de 2 hl, Mamadou apporte l'eau du puits avec un seau de 10 l.", etapes: [{ q: "Étape 1 : capacité du fût en l", r: "200", unite: "l" }, { q: "Étape 2 : nombre de seaux nécessaires", r: "20" }], expl: "2 hl = 200 l ; 200 l : 10 l = 20 seaux." },
      { t: "probleme", q: "Une théière contient 75 cl de thé. Khady sert 6 verres de 10 cl.", etapes: [{ q: "Étape 1 : thé servi (en cl)", r: "60", unite: "cl" }, { q: "Étape 2 : thé qui reste dans la théière (en cl)", r: "15", unite: "cl" }], expl: "10 cl × 6 = 60 cl ; 75 cl − 60 cl = 15 cl." },
      { t: "trous", q: "Complète.", nombre: true, texte: "3 dal = [30] l — 1 l = [10] dl — 0,5 l = [50] cl — 1 200 ml = [1,2|1.2] l", expl: "3 dal = 30 l ; 1 l = 10 dl ; 0,5 l = 50 cl ; 1 200 ml = 1,2 l." }
    ]
  ]
});
