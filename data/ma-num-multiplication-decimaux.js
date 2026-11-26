// Les trois opérations du cahier (photos 2026-11-26_05 et _06) ont été vérifiées : elles sont justes.
LECONS.push({
  id: "ma-num-multiplication-decimaux",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La multiplication des nombres décimaux",
  date: "2026-11-26",
  photos: ["2026-11-26_04.jpg", "2026-11-26_05.jpg", "2026-11-26_06.jpg"],
  retiens:
    "<p><b>Règle :</b> pour multiplier des nombres décimaux :</p>" +
    "<ul><li>on effectue l'opération <b>sans s'occuper des virgules</b> ;</li>" +
    "<li>on fait le <b>total</b> du nombre de chiffres décimaux du multiplicande et du multiplicateur ;</li>" +
    "<li>on sépare, à la <b>droite</b> du produit, autant de chiffres décimaux qu'il y en a dans le total trouvé.</li></ul>" +
    "<p><b>A) Multiplicande décimal :</b> 9,375 × 35 → 9 375 × 35 = 328 125 → 3 chiffres décimaux → <b>328,125</b></p>" +
    "<p><b>B) Multiplicateur décimal :</b> 45 × 1,7 → 45 × 17 = 765 → 1 chiffre décimal → <b>76,5</b></p>" +
    "<p><b>C) Deux facteurs décimaux :</b> 4,76 × 25,4 → 476 × 254 = 120 904 → 2 + 1 = 3 chiffres décimaux → <b>120,904</b></p>",
  astuce: "Compte les chiffres <b>après la virgule</b> dans les deux nombres, additionne-les, puis place la virgule en partant de la <b>droite</b> du produit.",
  regle: "On multiplie sans les virgules, puis on sépare à droite du produit autant de chiffres décimaux qu'il y en a en tout dans les deux facteurs.",
  niveaux: [
    [
      { t: "qcm", q: "Pour multiplier des nombres décimaux, on commence par…", choix: ["multiplier sans s'occuper des virgules", "aligner les virgules", "supprimer les zéros"], r: "multiplier sans s'occuper des virgules", expl: "On place la virgule seulement à la fin." },
      { t: "saisie", q: "Combien de chiffres décimaux y a-t-il dans 9,375 ?", r: "3", nombre: true, expl: "3, 7 et 5 sont après la virgule." },
      { t: "saisie", q: "4,76 × 25,4 : combien de chiffres décimaux en tout ?", r: "3", nombre: true, expl: "2 (dans 4,76) + 1 (dans 25,4) = 3." },
      { t: "vf", q: "On sépare les chiffres décimaux en partant de la droite du produit.", r: true, expl: "On compte à partir de la droite." },
      { t: "qcm", q: "45 × 17 = 765. Combien fait 45 × 1,7 ?", choix: ["76,5", "7,65", "765"], r: "76,5", expl: "1 chiffre décimal en tout : 76,5." }
    ],
    [
      { t: "saisie", q: "9,375 × 35 = …", r: "328,125", nombre: true, aide: "9 375 × 35 = 328 125", expl: "3 chiffres décimaux : 328,125." },
      { t: "saisie", q: "45 × 1,7 = …", r: "76,5", nombre: true, expl: "45 × 17 = 765 ; 1 chiffre décimal : 76,5." },
      { t: "saisie", q: "4,76 × 25,4 = …", r: "120,904", nombre: true, expl: "476 × 254 = 120 904 ; 3 chiffres décimaux : 120,904." },
      { t: "saisie", q: "2,5 × 4 = …", r: "10", nombre: true, expl: "25 × 4 = 100 ; 1 chiffre décimal : 10,0 = 10." },
      { t: "saisie", q: "3,2 × 6 = …", r: "19,2", nombre: true, expl: "32 × 6 = 192 → 19,2." },
      { t: "saisie", q: "12 × 0,5 = …", r: "6", nombre: true, expl: "12 × 5 = 60 → 6,0 = 6." },
      { t: "saisie", q: "1,25 × 8 = …", r: "10", nombre: true, expl: "125 × 8 = 1 000 → 2 chiffres décimaux : 10,00 = 10." },
      { t: "saisie", q: "2,4 × 1,5 = …", r: "3,6", nombre: true, expl: "24 × 15 = 360 ; 2 chiffres décimaux : 3,60 = 3,6." },
      { t: "relier", q: "Relie chaque opération à son résultat.", paires: [["0,3 × 7", "2,1"], ["0,3 × 0,7", "0,21"], ["3 × 7", "21"], ["0,03 × 0,7", "0,021"]], expl: "Même calcul 3 × 7 = 21 ; seule la place de la virgule change (0, 1, 2 ou 3 chiffres décimaux)." }
    ],
    [
      { t: "saisie", q: "0,4 × 0,2 = …", r: "0,08", nombre: true, aide: "4 × 2 = 8, et il faut 2 chiffres décimaux.", expl: "2 chiffres décimaux : on ajoute un zéro devant : 0,08." },
      { t: "saisie", q: "0,05 × 3 = …", r: "0,15", nombre: true, expl: "5 × 3 = 15 ; 2 chiffres décimaux : 0,15." },
      { t: "qcm", q: "Fatou trouve 6,25 × 4 = 250. Où est son erreur ?", choix: ["elle a oublié la virgule : c'est 25", "elle a mal multiplié : c'est 24", "il n'y a pas d'erreur"], r: "elle a oublié la virgule : c'est 25", expl: "625 × 4 = 2 500 ; 2 chiffres décimaux : 25,00 = 25." },
      { t: "saisie", q: "3,75 × 2,4 = …", r: "9", nombre: true, expl: "375 × 24 = 9 000 ; 3 chiffres décimaux : 9,000 = 9." },
      { t: "vf", q: "Quand on multiplie par 0,5, le résultat est plus petit que le nombre de départ.", r: true, expl: "Multiplier par 0,5, c'est prendre la moitié : 12 × 0,5 = 6." },
      { t: "saisie", q: "15,6 × 0,25 = …", r: "3,9", nombre: true, expl: "156 × 25 = 3 900 ; 3 chiffres décimaux : 3,900 = 3,9." },
      { t: "qcm", q: "Sans calculer tout, quel est le bon résultat de 4,8 × 2,05 ?", choix: ["9,84", "98,4", "0,984"], r: "9,84", expl: "4,8 × 2 ≈ 10 : le résultat est proche de 10. (48 × 205 = 9 840 → 9,840.)" }
    ],
    [
      { t: "probleme", q: "Awa achète 2,5 kg de poisson à 1 800 F le kg et 1,5 kg de tomates à 600 F le kg.", etapes: [{ q: "Étape 1 : prix du poisson", r: "4500", unite: "F" }, { q: "Étape 2 : prix des tomates", r: "900", unite: "F" }, { q: "Étape 3 : dépense totale", r: "5400", unite: "F" }], expl: "1 800 × 2,5 = 4 500 F ; 600 × 1,5 = 900 F ; 4 500 + 900 = 5 400 F." },
      { t: "probleme", q: "Un champ rectangulaire mesure 12,5 m de long et 8,4 m de large.", etapes: [{ q: "Étape 1 : aire du champ", r: "105", unite: "m²" }, { q: "Étape 2 : demi-périmètre (longueur + largeur)", r: "20,9", unite: "m" }, { q: "Étape 3 : périmètre", r: "41,8", unite: "m" }], expl: "12,5 × 8,4 = 105 m² ; 12,5 + 8,4 = 20,9 m ; 20,9 × 2 = 41,8 m." },
      { t: "saisie", q: "Un litre d'huile pèse 0,92 kg. Combien pèsent 5 litres ?", r: "4,6", nombre: true, unite: "kg", expl: "0,92 × 5 = 4,60 = 4,6 kg." },
      { t: "probleme", q: "Moussa parcourt 3,75 km chaque jour pour aller à l'école et en revenir. Il va à l'école 5 jours par semaine.", etapes: [{ q: "Étape 1 : distance en une semaine", r: "18,75", unite: "km" }, { q: "Étape 2 : distance en 4 semaines", r: "75", unite: "km" }], expl: "3,75 × 5 = 18,75 km ; 18,75 × 4 = 75 km." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1,2 × 3 = [3,6|3.6] — 0,6 × 0,6 = [0,36|0.36] — 2,05 × 4 = [8,2|8.2]", expl: "12 × 3 = 36 → 3,6 ; 6 × 6 = 36 → 0,36 ; 205 × 4 = 820 → 8,20 = 8,2." }
    ]
  ]
});
