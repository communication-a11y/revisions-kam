// À VÉRIFIER : la règle 1 du cahier cite « 10 000 » mais dit « on écrit 1 – 2 ou 3 zéros » (photo 0072). Le module dit « autant de zéros qu'il y en a dans 10, 100, 1 000… (1, 2, 3 ou 4 zéros) ».
// À VÉRIFIER : les exemples décimaux 1,25 × 10 = 12,5 et 3,6 × 100 = 360 viennent de la photo floue 0073 (lecture probable ; les deux calculs sont justes).
LECONS.push({
  id: "ma-num-multiplier-par-10-100-1000",
  cahier: "maths",
  matiere: "Calcul mental",
  titre: "Multiplier un nombre par 10, 100, 1 000",
  date: "2026-10-05",
  photos: ["DJI_20261118220918_0072_D.jpg", "DJI_20261118220925_0073_D.jpg"],
  retiens:
    "<p><b>1.</b> Pour multiplier un <b>nombre entier</b> par 10, 100, 1 000 ou 10 000…, on écrit à sa droite <b>autant de zéros</b> qu'il y en a dans 10, 100, 1 000… (1, 2, 3 ou 4 zéros).<br>Ex : 76 × 100 = 7 600</p>" +
    "<p><b>2.</b> Pour multiplier un <b>nombre décimal</b> par 10, 100, 1 000…, on <b>déplace la virgule</b> de 1, 2 ou 3 rangs <b>vers la droite</b>.<br>Ex : 1,25 × 10 = 12,5 ; 3,6 × 100 = 360 (quand il n'y a plus de chiffre, on complète par un zéro).</p>",
  astuce: "× 10 : 1 zéro ou 1 rang. × 100 : 2 zéros ou 2 rangs. × 1 000 : 3 zéros ou 3 rangs. Compte les zéros du 10, du 100 ou du 1 000 !",
  regle: "Nombre entier × 10, 100, 1 000 : on écrit 1, 2 ou 3 zéros à droite. Nombre décimal : on déplace la virgule de 1, 2 ou 3 rangs vers la droite.",
  niveaux: [
    [
      { t: "qcm", q: "76 × 100 = ?", choix: ["7 600", "760", "76 000", "7 060"], r: "7 600", expl: "100 a deux zéros : on écrit deux zéros à droite de 76." },
      { t: "qcm", q: "Pour multiplier un nombre entier par 1 000, j'écris à sa droite…", choix: ["3 zéros", "1 zéro", "2 zéros", "4 zéros"], r: "3 zéros", expl: "1 000 a trois zéros." },
      { t: "vf", q: "Pour multiplier 1,25 par 10, je déplace la virgule d'un rang vers la droite.", r: true, expl: "× 10 : la virgule avance d'un rang vers la droite : 12,5." },
      { t: "qcm", q: "1,25 × 10 = ?", choix: ["12,5", "0,125", "125", "1,250"], r: "12,5", expl: "La virgule se déplace d'un rang vers la droite : 1,25 devient 12,5." },
      { t: "vf", q: "3,6 × 100 = 360", r: true, expl: "La virgule avance de 2 rangs ; il manque un chiffre, on complète par un zéro : 360." },
      { t: "relier", q: "Relie chaque multiplication au nombre de zéros à écrire (nombre entier).", paires: [["× 10", "1 zéro"], ["× 100", "2 zéros"], ["× 1 000", "3 zéros"], ["× 10 000", "4 zéros"]], expl: "On écrit autant de zéros qu'il y en a dans le multiplicateur." }
    ],
    [
      { t: "saisie", q: "45 × 10 = ?", r: "450", expl: "Un zéro à droite : 450." },
      { t: "saisie", q: "38 × 100 = ?", r: ["3 800", "3800", "3.800"], expl: "Deux zéros à droite : 3 800." },
      { t: "saisie", q: "7 × 1 000 = ?", r: ["7 000", "7000", "7.000"], expl: "Trois zéros à droite : 7 000." },
      { t: "saisie", q: "250 × 100 = ?", r: ["25 000", "25000", "25.000"], expl: "On garde le zéro de 250 et on en ajoute deux : 25 000." },
      { t: "saisie", q: "63 × 10 000 = ?", r: ["630 000", "630000", "630.000"], expl: "Quatre zéros à droite : 630 000." },
      { t: "saisie", q: "4,7 × 10 = ?", r: "47", nombre: true, expl: "La virgule avance d'un rang : 47." },
      { t: "saisie", q: "2,35 × 100 = ?", r: "235", nombre: true, expl: "La virgule avance de deux rangs : 235." },
      { t: "saisie", q: "0,8 × 10 = ?", r: "8", nombre: true, expl: "La virgule avance d'un rang : 8." },
      { t: "saisie", q: "1,456 × 1 000 = ?", r: ["1 456", "1456", "1.456"], expl: "La virgule avance de trois rangs : 1 456." },
      { t: "trous", q: "Complète.", texte: "12 × 10 = [120] ; 12 × 100 = [1200] ; 12 × 1 000 = [12000]", nombre: true, expl: "1, 2 puis 3 zéros : 120 ; 1 200 ; 12 000." }
    ],
    [
      { t: "saisie", q: "3,6 × 1 000 = ?", r: ["3 600", "3600", "3.600"], expl: "La virgule avance de 3 rangs ; on complète par deux zéros : 3 600." },
      { t: "saisie", q: "0,05 × 100 = ?", r: "5", nombre: true, expl: "La virgule avance de 2 rangs : 0,05 devient 5." },
      { t: "saisie", q: "5,2 × 100 = ?", r: "520", expl: "2 rangs : 5,2 → 52, puis on complète par un zéro : 520." },
      { t: "saisie", q: "120 × 1 000 = ?", r: ["120 000", "120000", "120.000"], expl: "Trois zéros de plus : 120 000." },
      { t: "qcm", q: "4,5 × 100 = ?", choix: ["450", "4,500", "45", "4 500"], r: "450", expl: "Avec un nombre décimal, on n'ajoute pas les zéros après la virgule : on déplace la virgule de 2 rangs → 450." },
      { t: "vf", q: "2,5 × 10 = 2,50", r: false, expl: "On déplace la virgule d'un rang vers la droite : 2,5 × 10 = 25. Écrire 2,50 ne change pas le nombre." },
      { t: "saisie", q: "Par combien faut-il multiplier 0,72 pour obtenir 72 ?", r: "100", expl: "La virgule a avancé de 2 rangs : c'est × 100." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "À Dakar, un sac de riz coûte 18 500 F. Une boutique en achète 10, puis une autre en achète 100.", etapes: [{ q: "Prix de 10 sacs :", r: "185000", unite: "F" }, { q: "Prix de 100 sacs :", r: "1850000", unite: "F" }], expl: "18 500 × 10 = 185 000 F (un zéro) ; 18 500 × 100 = 1 850 000 F (deux zéros)." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une bouteille contient 1,5 l d'eau.", etapes: [{ q: "Combien de litres dans 10 bouteilles ?", r: "15", unite: "l" }, { q: "Combien de litres dans 100 bouteilles ?", r: "150", unite: "l" }], expl: "1,5 × 10 = 15 l ; 1,5 × 100 = 150 l (on complète par un zéro)." },
      { t: "qcm", q: "Un ticket de bus coûte 150 F. Combien coûtent 1 000 tickets ?", choix: ["150 000 F", "15 000 F", "1 500 000 F", "1 500 F"], r: "150 000 F", expl: "150 × 1 000 : on écrit trois zéros à droite de 150 → 150 000 F." },
      { t: "saisie", q: "Un pas de Mamadou mesure 0,65 m. Quelle distance fait-il en 100 pas ?", r: "65", nombre: true, expl: "0,65 × 100 : la virgule avance de 2 rangs → 65 m.", unite: "m" },
      { t: "trous", q: "Complète.", texte: "0,125 × 10 = [1,25] ; 0,125 × 100 = [12,5] ; 0,125 × 1 000 = [125]", nombre: true, expl: "La virgule avance de 1, puis 2, puis 3 rangs." },
      { t: "saisie", q: "Quel nombre multiplié par 100 donne 4 700 ?", r: "47", expl: "47 × 100 = 4 700 (on écrit deux zéros)." }
    ]
  ]
});
