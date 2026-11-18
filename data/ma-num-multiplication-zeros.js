// À VÉRIFIER : résultat de 1347 × 120 : le cahier semble porter 161 660 (photo 0078, chiffre surchargé) ; le bon résultat 161 640 est utilisé.
// À VÉRIFIER : la règle du cahier dit « quand le multiplicande ET le multiplicateur se terminent par… » ; l'exemple 1347 × 120 montre qu'il suffit que l'un des deux finisse par des zéros. Le module écrit « le multiplicande ou le multiplicateur (ou les deux) ».
LECONS.push({
  id: "ma-num-multiplication-zeros",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La multiplication des nombres entiers : les cas particuliers",
  date: "2026-10-12",
  photos: ["DJI_20261118221051_0078_D.jpg", "DJI_20261118221101_0079_D.jpg"],
  retiens:
    "<p>Quand le multiplicande ou le multiplicateur (ou les deux) se terminent par un, deux, trois zéros ou plus, on effectue la multiplication <b>sans tenir compte des zéros</b>, puis on <b>les ajoute à la droite du produit</b> (le résultat).</p>" +
    "<p>Ex : 1 347 × 120 → je calcule 1 347 × 12 = 16 164, puis j'ajoute le zéro : <b>161 640</b>.</p>" +
    "<table><tr><td>×</td><td></td><td></td><td>1</td><td>3</td><td>4</td><td>7</td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td>1</td><td>2</td><td>0</td></tr>" +
    "<tr><td></td><td></td><td></td><td>2</td><td>6</td><td>9</td><td>4</td></tr>" +
    "<tr><td>+</td><td></td><td>1</td><td>3</td><td>4</td><td>7</td><td>·</td></tr>" +
    "<tr><td></td><td><b>1</b></td><td><b>6</b></td><td><b>1</b></td><td><b>6</b></td><td><b>4</b></td><td><b>0</b></td></tr>" +
    "</table>" +
    "<p>Ex : 96 240 × 400 → je calcule 9 624 × 4 = 38 496, puis j'ajoute les 3 zéros : <b>38 496 000</b>.</p>" +
    "<p>Si des zéros sont <b>intercalés</b> (au milieu) dans le multiplicateur, on peut les remplacer par des points.<br>Ex : 347 × 1 002</p>" +
    "<table><tr><td>×</td><td></td><td></td><td></td><td>3</td><td>4</td><td>7</td></tr>" +
    "<tr><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>2</td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td>6</td><td>9</td><td>4</td></tr>" +
    "<tr><td>+</td><td>3</td><td>4</td><td>7</td><td>·</td><td>·</td><td>·</td></tr>" +
    "<tr><td></td><td><b>3</b></td><td><b>4</b></td><td><b>7</b></td><td><b>6</b></td><td><b>9</b></td><td><b>4</b></td></tr>" +
    "</table>",
  astuce: "Cache les zéros de la fin avec ton doigt, calcule, puis rends-les tous au produit. Les zéros du milieu, eux, ne s'enlèvent pas !",
  regle: "On multiplie sans les zéros de la fin, puis on écrit tous ces zéros à la droite du produit ; les zéros intercalés du multiplicateur se remplacent par des points.",
  niveaux: [
    [
      { t: "qcm", q: "Pour calculer 1 347 × 120, je calcule d'abord…", choix: ["1 347 × 12", "1 347 × 120 en entier", "134 × 12"], r: "1 347 × 12", expl: "On ne tient pas compte du zéro de 120, puis on l'ajoute au produit." },
      { t: "vf", q: "96 240 × 400 = 38 496 000", r: true, expl: "9 624 × 4 = 38 496, puis on ajoute les 3 zéros (1 de 96 240 et 2 de 400)." },
      { t: "qcm", q: "Pour 96 240 × 400, combien de zéros faut-il ajouter au produit ?", choix: ["3", "2", "1", "4"], r: "3", expl: "Un zéro à la fin de 96 240 et deux à la fin de 400 : 3 zéros." },
      { t: "vf", q: "Pour 347 × 1 002, on peut remplacer les zéros du milieu par des points.", r: true, expl: "Les zéros intercalés du multiplicateur se remplacent par des points : 347 · · ·" },
      { t: "qcm", q: "1 347 × 120 = ?", choix: ["161 640", "16 164", "161 660", "1 616 400"], r: "161 640", expl: "1 347 × 12 = 16 164, puis on ajoute un zéro : 161 640." },
      { t: "relier", q: "Relie chaque multiplication à son produit.", paires: [["30 × 20", "600"], ["400 × 5", "2 000"], ["250 × 40", "10 000"], ["12 × 300", "3 600"]], expl: "3 × 2 = 6 → 600 ; 4 × 5 = 20 → 2 000 ; 25 × 4 = 100 → 10 000 ; 12 × 3 = 36 → 3 600." }
    ],
    [
      { t: "saisie", q: "23 × 40 = ?", r: "920", expl: "23 × 4 = 92, puis un zéro : 920." },
      { t: "saisie", q: "150 × 30 = ?", r: ["4 500", "4500", "4.500"], expl: "15 × 3 = 45, puis deux zéros : 4 500." },
      { t: "saisie", q: "1 200 × 60 = ?", r: ["72 000", "72000", "72.000"], expl: "12 × 6 = 72, puis trois zéros : 72 000." },
      { t: "saisie", q: "4 500 × 300 = ?", r: ["1 350 000", "1350000", "1.350.000"], expl: "45 × 3 = 135, puis quatre zéros : 1 350 000." },
      { t: "saisie", q: "2 340 × 50 = ?", r: ["117 000", "117000", "117.000"], expl: "234 × 5 = 1 170, puis deux zéros : 117 000." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Calcule 1 347 × 120 comme dans le cahier.", etapes: [{ q: "1 347 × 12 = ?", r: "16164" }, { q: "1 347 × 120 = ?", r: "161640" }], expl: "On calcule sans le zéro, puis on l'ajoute : 161 640." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Calcule 96 240 × 400.", etapes: [{ q: "9 624 × 4 = ?", r: "38496" }, { q: "Combien de zéros faut-il ajouter ?", r: "3" }, { q: "96 240 × 400 = ?", r: "38496000" }], expl: "38 496 suivi de 3 zéros : 38 496 000." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Calcule 347 × 1 002 en remplaçant les zéros du milieu par des points.", etapes: [{ q: "347 × 2 = ?", r: "694" }, { q: "347 × 1 002 = ?", r: "347694" }], expl: "694 + 347 000 = 347 694." },
      { t: "saisie", q: "625 × 1 003 = ?", r: ["626 875", "626875", "626.875"], expl: "625 × 3 = 1 875 ; 625 décalé de 3 rangs = 625 000 ; 1 875 + 625 000 = 626 875." }
    ],
    [
      { t: "qcm", q: "205 × 30 = ?", choix: ["6 150", "615", "61 500", "6 015"], r: "6 150", expl: "Le zéro de 205 est au milieu : on le garde ! 205 × 3 = 615, puis le zéro de 30 : 6 150." },
      { t: "vf", q: "Pour calculer 506 × 20, j'enlève tous les zéros et je calcule 56 × 2.", r: false, expl: "Seuls les zéros de la fin s'enlèvent. On calcule 506 × 2 = 1 012, puis on ajoute un zéro." },
      { t: "saisie", q: "506 × 20 = ?", r: ["10 120", "10120", "10.120"], expl: "506 × 2 = 1 012, puis un zéro : 10 120." },
      { t: "saisie", q: "7 000 × 800 = ?", r: ["5 600 000", "5600000", "5.600.000"], expl: "7 × 8 = 56, puis 5 zéros : 5 600 000." },
      { t: "saisie", q: "412 × 2 005 = ?", r: ["826 060", "826060", "826.060"], expl: "412 × 5 = 2 060 ; 412 × 2 (décalé de 3 rangs) = 824 000 ; 2 060 + 824 000 = 826 060." },
      { t: "qcm", q: "Fatou a trouvé 3 600 × 50 = 18 000. Qu'en penses-tu ?", choix: ["Faux : il manque un zéro, c'est 180 000", "Vrai", "Faux : c'est 1 800 000"], r: "Faux : il manque un zéro, c'est 180 000", expl: "36 × 5 = 180, puis 3 zéros (deux de 3 600 et un de 50) : 180 000." },
      { t: "trous", q: "Complète.", texte: "800 × 50 : je calcule 8 × 5 = [40], puis j'ajoute [3] zéros : [40000].", nombre: true, expl: "Deux zéros dans 800, un dans 50 : 3 zéros. 40 suivi de 000 = 40 000." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une coopérative de Kaolack vend 250 sacs d'arachide de 100 kg, à 30 000 F le sac.", etapes: [{ q: "Masse totale :", r: "25000", unite: "kg" }, { q: "Prix total :", r: "7500000", unite: "F" }], expl: "100 kg × 250 = 25 000 kg ; 30 000 F × 250 = 7 500 000 F (25 × 3 = 75, puis 5 zéros)." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pour la fête de l'école, 120 élèves paient chacun 1 500 F et 40 parents paient chacun 2 000 F.", etapes: [{ q: "Somme payée par les élèves :", r: "180000", unite: "F" }, { q: "Somme payée par les parents :", r: "80000", unite: "F" }, { q: "Somme totale :", r: "260000", unite: "F" }], expl: "1 500 × 120 = 180 000 ; 2 000 × 40 = 80 000 ; 180 000 + 80 000 = 260 000 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "À chaque voyage, un camion transporte 40 sacs de ciment de 50 kg. Il fait 300 voyages.", etapes: [{ q: "Masse transportée à chaque voyage :", r: "2000", unite: "kg" }, { q: "Masse totale transportée :", r: "600000", unite: "kg" }], expl: "50 × 40 = 2 000 kg ; 2 000 × 300 = 600 000 kg." },
      { t: "saisie", q: "1 005 × 300 = ?", r: ["301 500", "301500", "301.500"], expl: "Le zéro du milieu de 1 005 reste. 1 005 × 3 = 3 015, puis deux zéros : 301 500." },
      { t: "qcm", q: "Quelle multiplication donne 4 800 000 ?", choix: ["1 200 × 4 000", "120 × 4 000", "1 200 × 400", "12 × 4 000"], r: "1 200 × 4 000", expl: "12 × 4 = 48, et il faut 5 zéros : 1 200 (2 zéros) × 4 000 (3 zéros)." }
    ]
  ]
});
