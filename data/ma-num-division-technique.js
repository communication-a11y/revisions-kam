// À VÉRIFIER : le NB du cahier (photo 0088) est confus : « Pour diviser un nombre entier par un nombre entier égal ou supérieur au diviseur ». Le module l'interprète comme : on prend au dividende assez de chiffres pour obtenir un nombre égal ou supérieur au diviseur (ce que montrent les arcs rouges sur 108 et 62 dans les exemples).
LECONS.push({
  id: "ma-num-division-technique",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La technique opératoire de la division à un ou deux chiffres au quotient",
  date: "2026-11-03",
  photos: ["DJI_20261118221147_0087_D.jpg", "DJI_20261118221156_0088_D.jpg"],
  retiens:
    "<p>Division d'un nombre entier par un nombre entier.</p>" +
    "<p><b>Ex 1 : 108 : 12.</b> 10 est plus petit que 12, alors je prends <b>108</b>. En 108, combien de fois 12 ? <b>9</b> fois (9 × 12 = 108). 108 − 108 = 0. Le quotient est 9, le reste 0.</p>" +
    "<table><tr><td>108</td><td>12</td></tr>" +
    "<tr><td>− 108</td><td><b>9</b></td></tr>" +
    "<tr><td>000</td><td></td></tr>" +
    "</table>" +
    "<p><b>Ex 2 : 625 : 25.</b> Je prends <b>62</b>. En 62, combien de fois 25 ? <b>2</b> fois (2 × 25 = 50). 62 − 50 = 12. J'<b>abaisse</b> le 5 : 125. En 125, combien de fois 25 ? <b>5</b> fois (5 × 25 = 125). 125 − 125 = 0. Le quotient est 25.</p>" +
    "<table><tr><td>625</td><td>25</td></tr>" +
    "<tr><td>− 50↓</td><td><b>25</b></td></tr>" +
    "<tr><td>125</td><td></td></tr>" +
    "<tr><td>− 125</td><td></td></tr>" +
    "<tr><td>000</td><td></td></tr>" +
    "</table>" +
    "<p><b>NB :</b></p>" +
    "<ul><li>on prend au dividende assez de chiffres pour avoir un nombre <b>égal ou supérieur au diviseur</b> ;</li><li>on effectue l'opération (combien de fois ? on multiplie, on soustrait) ;</li><li>on <b>abaisse le chiffre suivant</b> du dividende avant de poursuivre l'opération ;</li><li>et ainsi de suite jusqu'à la fin.</li></ul>",
  astuce: "À chaque tour : <b>combien de fois ? → je multiplie → je soustrais → j'abaisse</b>. Le reste doit toujours être plus petit que le diviseur.",
  regle: "On prend assez de chiffres pour dépasser (ou égaler) le diviseur, on cherche combien de fois, on multiplie, on soustrait, puis on abaisse le chiffre suivant.",
  niveaux: [
    [
      { t: "qcm", q: "Pour calculer 625 : 25, par quoi commence-t-on ?", choix: ["on prend 62", "on prend 6", "on prend 625"], r: "on prend 62", expl: "6 est plus petit que 25 ; 62 est plus grand : on commence par 62." },
      { t: "qcm", q: "En 62, combien de fois 25 ?", choix: ["2", "3", "1"], r: "2", expl: "2 × 25 = 50 et 3 × 25 = 75, c'est trop : 2 fois." },
      { t: "vf", q: "Après avoir soustrait, on abaisse le chiffre suivant du dividende.", r: true, expl: "62 − 50 = 12, puis on abaisse le 5 : 125." },
      { t: "qcm", q: "108 : 12 = ?", choix: ["9", "8", "10", "90"], r: "9", expl: "9 × 12 = 108." },
      { t: "vf", q: "Pour calculer 108 : 12, on prend d'abord 10.", r: false, expl: "10 est plus petit que 12 : on doit prendre 108." },
      { t: "relier", q: "Relie chaque division à son quotient.", paires: [["108 : 12", "9"], ["625 : 25", "25"], ["75 : 5", "15"], ["72 : 6", "12"]], expl: "Vérifie avec une multiplication : 9 × 12 = 108 ; 25 × 25 = 625 ; 15 × 5 = 75 ; 12 × 6 = 72." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 625 : 25.", etapes: [{ q: "En 62, combien de fois 25 ?", r: "2" }, { q: "62 − 50 = ?", r: "12" }, { q: "Après avoir abaissé le 5, quel nombre obtient-on ?", r: "125" }, { q: "Quel est le quotient de 625 : 25 ?", r: "25" }], expl: "2 fois 25 = 50 ; 62 − 50 = 12 ; on abaisse 5 → 125 ; 5 fois 25 = 125. Quotient 25." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 384 : 6.", etapes: [{ q: "En 38, combien de fois 6 ?", r: "6" }, { q: "Quel est le premier reste (38 − 36) ?", r: "2" }, { q: "Quel est le quotient de 384 : 6 ?", r: "64" }], expl: "6 × 6 = 36 ; 38 − 36 = 2 ; on abaisse 4 → 24 ; 4 × 6 = 24. Quotient 64." },
      { t: "saisie", q: "96 : 4 = ?", r: "24", expl: "En 9, 2 fois 4 (reste 1) ; on abaisse 6 → 16 ; 4 fois 4. Quotient 24." },
      { t: "saisie", q: "455 : 5 = ?", r: "91", expl: "En 45, 9 fois 5 (reste 0) ; on abaisse 5 → 5 ; 1 fois 5. Quotient 91." },
      { t: "saisie", q: "432 : 12 = ?", r: "36", expl: "En 43, 3 fois 12 (reste 7) ; on abaisse 2 → 72 ; 6 fois 12. Quotient 36." },
      { t: "saisie", q: "918 : 27 = ?", r: "34", expl: "En 91, 3 fois 27 (reste 10) ; on abaisse 8 → 108 ; 4 fois 27. Quotient 34." },
      { t: "saisie", q: "1 344 : 32 = ?", r: "42", expl: "En 134, 4 fois 32 (reste 6) ; on abaisse 4 → 64 ; 2 fois 32. Quotient 42." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 587 : 9.", etapes: [{ q: "Quotient :", r: "65" }, { q: "Reste :", r: "2" }], expl: "En 58, 6 fois 9 (reste 4) ; on abaisse 7 → 47 ; 5 fois 9 = 45, reste 2. Vérification : (65 × 9) + 2 = 587." },
      { t: "saisie", q: "2 052 : 54 = ?", r: "38", expl: "En 205, 3 fois 54 (reste 43) ; on abaisse 2 → 432 ; 8 fois 54. Quotient 38." }
    ],
    [
      { t: "qcm", q: "Combien de chiffres aura le quotient de 384 : 6 ?", choix: ["2", "1", "3"], r: "2", expl: "3 est plus petit que 6, on commence par 38 : il reste ensuite un seul chiffre à abaisser. Le quotient a 2 chiffres (64)." },
      { t: "saisie", q: "420 : 6 = ?", r: "70", expl: "En 42, 7 fois 6 (reste 0) ; on abaisse 0 → 0 ; 0 fois 6 : on écrit 0 au quotient ! Quotient 70." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 963 : 32.", etapes: [{ q: "Quotient :", r: "30" }, { q: "Reste :", r: "3" }], expl: "En 96, 3 fois 32 (reste 0) ; on abaisse 3 → 3 ; en 3, 0 fois 32 : on écrit 0. Quotient 30, reste 3." },
      { t: "vf", q: "Le quotient de 963 : 32 est 3.", r: false, expl: "Après avoir abaissé le 3, on doit écrire 0 au quotient : 30 (reste 3)." },
      { t: "qcm", q: "Aïssatou a trouvé 875 : 25 = 35. Comment vérifier ?", choix: ["35 × 25 = 875", "35 + 25 = 875", "875 × 25"], r: "35 × 25 = 875", expl: "Dividende = quotient × diviseur + reste : 35 × 25 = 875, le reste est 0." },
      { t: "saisie", q: "1 000 : 40 = ?", r: "25", expl: "En 100, 2 fois 40 (reste 20) ; on abaisse 0 → 200 ; 5 fois 40. Quotient 25." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 500 : 12.", etapes: [{ q: "Quotient :", r: "41" }, { q: "Reste :", r: "8" }], expl: "En 50, 4 fois 12 (reste 2) ; on abaisse 0 → 20 ; 1 fois 12, reste 8. Vérification : (41 × 12) + 8 = 500." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une école reçoit 624 cahiers à partager également entre ses 24 classes. Un cahier coûte 300 F.", etapes: [{ q: "Nombre de cahiers par classe :", r: "26" }, { q: "Prix des cahiers d'une classe :", r: "7800", unite: "F" }], expl: "624 : 24 = 26 cahiers ; 300 × 26 = 7 800 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un marchand met 875 kg de riz en sacs de 25 kg. Il vend chaque sac 12 500 F.", etapes: [{ q: "Nombre de sacs :", r: "35" }, { q: "Somme reçue pour tous les sacs :", r: "437500", unite: "F" }], expl: "875 : 25 = 35 sacs ; 12 500 × 35 = 437 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un champ de 828 m de long est partagé en 36 parcelles de même longueur.", etapes: [{ q: "Longueur d'une parcelle :", r: "23", unite: "m" }, { q: "Longueur de 5 parcelles :", r: "115", unite: "m" }], expl: "828 : 36 = 23 m ; 23 × 5 = 115 m." },
      { t: "qcm", q: "Quel est le quotient de 1 512 : 28 ?", choix: ["54", "45", "504", "64"], r: "54", expl: "En 151, 5 fois 28 (reste 11) ; on abaisse 2 → 112 ; 4 fois 28. Quotient 54." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "On range 1 000 mangues dans des caisses de 48 mangues.", etapes: [{ q: "Nombre de caisses pleines :", r: "20" }, { q: "Nombre de mangues qui restent :", r: "40" }], expl: "En 100, 2 fois 48 (reste 4) ; on abaisse 0 → 40 ; 0 fois 48 : quotient 20, reste 40." }
    ]
  ]
});
