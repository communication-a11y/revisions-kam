LECONS.push({
  id: "ma-num-grands-nombres",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Les grands nombres",
  date: "2026-09-16",
  photos: ["DJI_20261118220744_0061_D.jpg"],
  retiens:
    "<p>Pour lire un grand nombre, on commence par la <b>plus grande classe</b> (celle de gauche).</p>" +
    "<p>Les classes sont, de droite à gauche : les <b>unités simples</b>, les <b>mille</b>, les <b>millions</b>, les <b>milliards</b>. Chaque classe est subdivisée en <b>unités</b>, <b>dizaines</b> et <b>centaines</b> : elle a 3 chiffres.</p>" +
    "<p>Il faut <b>séparer les classes</b> : par un point dans le cahier (5.000.250.008) ou par un petit espace (5 000 250 008).</p>" +
    "<p>Ex : 999 000 000 + 1 million = 1 000 000 000 = <b>1 milliard</b>.<br>5 milliards 250 mille 8 = <b>5 000 250 008</b></p>" +
    "<table><tr><th colspan='3'>milliards</th><th colspan='3'>millions</th><th colspan='3'>mille</th><th colspan='3'>unités simples</th></tr>" +
    "<tr><td>c</td><td>d</td><td>u</td><td>c</td><td>d</td><td>u</td><td>c</td><td>d</td><td>u</td><td>c</td><td>d</td><td>u</td></tr>" +
    "<tr><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>" +
    "<tr><td></td><td></td><td>5</td><td>0</td><td>0</td><td>0</td><td>2</td><td>5</td><td>0</td><td>0</td><td>0</td><td>8</td></tr>" +
    "</table>",
  astuce: "Mille = 1 suivi de 3 zéros (1 000). Un million = 6 zéros (1 000 000). Un milliard = 9 zéros (1 000 000 000). Quand une classe est vide, on écrit <b>000</b>.",
  regle: "On lit un grand nombre classe par classe, en commençant par la plus grande ; chaque classe a 3 chiffres : centaines, dizaines, unités.",
  niveaux: [
    [
      { t: "qcm", q: "Pour lire un grand nombre, par quelle classe commence-t-on ?", choix: ["par la plus grande classe", "par la classe des unités simples", "par la classe des mille"], r: "par la plus grande classe", expl: "On lit de gauche à droite, en commençant par la plus grande classe." },
      { t: "qcm", q: "Combien de chiffres compte une classe complète ?", choix: ["3", "2", "4", "10"], r: "3", expl: "Chaque classe a des centaines, des dizaines et des unités : 3 chiffres." },
      { t: "relier", q: "Relie chaque nombre à son nom.", paires: [["100", "cent"], ["1 000", "mille"], ["1 000 000", "un million"], ["1 000 000 000", "un milliard"]], expl: "Mille : 3 zéros ; un million : 6 zéros ; un milliard : 9 zéros." },
      { t: "vf", q: "999 000 000 + 1 000 000 = 1 000 000 000", r: true, expl: "999 millions + 1 million = 1 000 millions, c'est-à-dire 1 milliard." },
      { t: "qcm", q: "Dans 5 000 250 008, quel est le chiffre des unités de milliards ?", choix: ["5", "2", "8", "0"], r: "5", expl: "La classe des milliards est la première à gauche : ici, elle contient seulement 5." },
      { t: "vf", q: "Un milliard s'écrit avec 6 zéros.", r: false, expl: "Un milliard s'écrit avec 9 zéros : 1 000 000 000. C'est un million qui a 6 zéros." }
    ],
    [
      { t: "saisie", q: "Écris en chiffres : 5 milliards 250 mille 8.", r: ["5 000 250 008", "5000250008", "5.000.250.008"], expl: "Milliards : 5 ; millions : 000 ; mille : 250 ; unités : 008. On obtient 5 000 250 008." },
      { t: "saisie", q: "Écris en chiffres : 3 millions 400 mille.", r: ["3 400 000", "3400000", "3.400.000"], expl: "Millions : 3 ; mille : 400 ; unités : 000. On obtient 3 400 000." },
      { t: "saisie", q: "Écris en chiffres : 12 milliards 7 millions 15.", r: ["12 007 000 015", "12007000015", "12.007.000.015"], expl: "Milliards : 12 ; millions : 007 ; mille : 000 ; unités : 015. On obtient 12 007 000 015." },
      { t: "saisie", q: "Écris en chiffres : deux cent quarante-six millions cinq cent mille.", r: ["246 500 000", "246500000", "246.500.000"], expl: "Millions : 246 ; mille : 500 ; unités : 000. On obtient 246 500 000." },
      { t: "qcm", q: "Comment lit-on 4 008 300 ?", choix: ["quatre millions huit mille trois cents", "quatre millions huit cent mille trois cents", "quarante millions huit mille trois cents", "quatre milliards huit mille trois cents"], r: "quatre millions huit mille trois cents", expl: "Classes : 4 | 008 | 300 → quatre millions, huit mille, trois cents." },
      { t: "qcm", q: "Comment lit-on 2 015 000 060 ?", choix: ["deux milliards quinze millions soixante", "deux milliards cent cinquante millions soixante", "deux millions quinze mille soixante", "vingt milliards quinze millions soixante"], r: "deux milliards quinze millions soixante", expl: "Classes : 2 | 015 | 000 | 060 → deux milliards, quinze millions, soixante." },
      { t: "trous", q: "Dans le nombre 7 352 418 096, écris le chiffre demandé.", texte: "centaines de millions : [3] — dizaines de mille : [1] — unités de milliards : [7] — centaines (unités simples) : [0]", nombre: true, expl: "Découpe en classes : 7 | 352 | 418 | 096." },
      { t: "saisie", q: "999 000 000 + 1 000 000 = ?", r: ["1 000 000 000", "1000000000", "1.000.000.000"], expl: "999 millions + 1 million = 1 000 millions = 1 milliard." },
      { t: "saisie", q: "Combien y a-t-il de millions dans un milliard ?", r: ["1 000", "1000", "1.000"], expl: "1 milliard = 1 000 millions, car 999 millions + 1 million = 1 milliard." }
    ],
    [
      { t: "qcm", q: "Écris en chiffres : « six millions quarante ».", choix: ["6 000 040", "6 040 000", "6 000 400", "640"], r: "6 000 040", expl: "Millions : 6 ; mille : 000 (classe vide) ; unités : 040." },
      { t: "qcm", q: "Où faut-il séparer les classes dans 45000300 ?", choix: ["45 000 300", "450 003 00", "4 500 0300", "45 0003 00"], r: "45 000 300", expl: "On fait des paquets de 3 chiffres en partant de la droite : 300, puis 000, puis 45." },
      { t: "vf", q: "« 30 250 400 » se lit « trente millions deux cent cinquante mille quatre cents ».", r: true, expl: "30 | 250 | 400 : trente millions, deux cent cinquante mille, quatre cents." },
      { t: "saisie", q: "Écris en chiffres : huit milliards huit.", r: ["8 000 000 008", "8000000008", "8.000.000.008"], expl: "Les classes des millions et des mille sont vides : 8 000 000 008." },
      { t: "saisie", q: "Quel nombre vient juste après 4 999 999 ?", r: ["5 000 000", "5000000", "5.000.000"], expl: "4 999 999 + 1 = 5 000 000 (5 millions)." },
      { t: "saisie", q: "Quel nombre vient juste avant 1 000 000 000 ?", r: ["999 999 999", "999999999", "999.999.999"], expl: "1 000 000 000 − 1 = 999 999 999." },
      { t: "classer", q: "Range chaque nombre selon sa plus grande classe.", cases: ["classe des mille", "classe des millions", "classe des milliards"], items: [["45 000", "classe des mille"], ["3 200 000", "classe des millions"], ["1 000 000 000", "classe des milliards"], ["999 999", "classe des mille"], ["12 000 000", "classe des millions"], ["7 000 000 003", "classe des milliards"]], expl: "Compte les classes de 3 chiffres en partant de la droite : 2 classes = mille, 3 = millions, 4 = milliards." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une entreprise de Dakar a gagné 2 milliards 500 millions de francs CFA en 2025 et 1 milliard 750 millions en 2026.", etapes: [{ q: "Écris en chiffres le gain de 2025.", r: "2500000000", unite: "F" }, { q: "Écris en chiffres le gain de 2026.", r: "1750000000", unite: "F" }, { q: "Combien a-t-elle gagné en tout ?", r: "4250000000", unite: "F" }], expl: "2 500 000 000 F + 1 750 000 000 F = 4 250 000 000 F." },
      { t: "qcm", q: "Le budget d'une commune est de « trois milliards quarante millions » de francs. Quelle écriture est juste ?", choix: ["3 040 000 000 F", "3 400 000 000 F", "3 000 040 000 F", "340 000 000 F"], r: "3 040 000 000 F", expl: "Milliards : 3 ; millions : 040 ; mille : 000 ; unités : 000." },
      { t: "trous", q: "Complète la lecture du nombre 6 105 020 300.", texte: "six [milliards] cent cinq [millions] vingt [mille] trois cents", expl: "6 | 105 | 020 | 300 : on nomme chaque classe après son nombre." },
      { t: "saisie", q: "Écris le plus grand nombre de 10 chiffres.", r: ["9 999 999 999", "9999999999", "9.999.999.999"], expl: "On met des 9 partout : 9 999 999 999." },
      { t: "saisie", q: "Ajoute 1 million à 7 999 000 000.", r: ["8 000 000 000", "8000000000", "8.000.000.000"], expl: "7 999 millions + 1 million = 8 000 millions = 8 milliards : 8 000 000 000." }
    ]
  ]
});
