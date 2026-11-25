// À VÉRIFIER : l'exemple du cahier écrit 15000 − 8246 = 6754, mais l'opération posée en dessous calcule 15000 − 6754 = 8246 (photo 0069). Le module pose 15 000 − 8 246 = 6 754.
LECONS.push({
  id: "ma-num-soustraction",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La soustraction des nombres entiers",
  date: "2026-09-28",
  photos: ["DJI_20261118220845_0068_D.jpg", "DJI_20261118220859_0069_D.jpg"],
  retiens:
    "<p>Je pose une <b>soustraction</b> pour calculer <b>un reste, un manque, une différence</b>.</p>" +
    "<p>Dans une soustraction, le <b>plus grand nombre</b> se place toujours <b>en premier</b> (en haut).</p>" +
    "<p>Ensuite, je mets <b>les unités sous les unités, les dizaines sous les dizaines</b>… On n'oublie pas les <b>retenues</b> s'il y en a.</p>" +
    "<p>Ex : 15 000 − 8 246 = 6 754</p>" +
    "<table><tr><th></th><th>dm</th><th>um</th><th>c</th><th>d</th><th>u</th></tr>" +
    "<tr><td></td><td>1</td><td>5</td><td>0</td><td>0</td><td>0</td></tr>" +
    "<tr><td>−</td><td></td><td>8</td><td>2</td><td>4</td><td>6</td></tr>" +
    "<tr><td></td><td></td><td><b>6</b></td><td><b>7</b></td><td><b>5</b></td><td><b>4</b></td></tr>" +
    "</table>",
  astuce: "Pour vérifier une soustraction, additionne le résultat et le petit nombre : 6 754 + 8 246 = 15 000. Tu dois retrouver le grand nombre.",
  regle: "Le plus grand nombre en premier ; unités sous unités, dizaines sous dizaines ; on commence par la droite et on n'oublie pas les retenues.",
  niveaux: [
    [
      { t: "qcm", q: "On pose une soustraction pour calculer…", choix: ["un reste, un manque ou une différence", "un total", "le prix de plusieurs objets"], r: "un reste, un manque ou une différence", expl: "Reste, manque, différence : ce sont les trois sens de la soustraction." },
      { t: "qcm", q: "Dans une soustraction, le plus grand nombre se place…", choix: ["en premier (en haut)", "en second (en bas)", "où l'on veut"], r: "en premier (en haut)", expl: "Le plus grand nombre se trouve toujours au début." },
      { t: "vf", q: "Pour poser 15 000 − 8 246, je place le 6 de 8 246 sous le dernier 0 de 15 000.", r: true, expl: "Unités sous unités : le 6 (unités) va sous le 0 des unités." },
      { t: "vf", q: "15 000 − 8 246 = 6 754", r: true, expl: "C'est l'exemple du cahier. Vérification : 6 754 + 8 246 = 15 000." },
      { t: "classer", q: "Quelle opération faut-il faire ? « Je cherche… »", cases: ["addition", "soustraction"], items: [["le total de deux achats", "addition"], ["ce qui reste après une dépense", "soustraction"], ["combien il manque pour acheter un vélo", "soustraction"], ["l'écart d'âge entre deux frères", "soustraction"], ["la longueur de deux routes mises bout à bout", "addition"], ["le nombre d'élèves de deux classes réunies", "addition"]], expl: "Reste, manque, écart (différence) → soustraction. Réunion, total → addition." },
      { t: "qcm", q: "Quelle soustraction peut-on faire avec les nombres entiers ?", choix: ["850 − 320", "320 − 850"], r: "850 − 320", expl: "Le plus grand nombre doit être en premier : 850 − 320 = 530." }
    ],
    [
      { t: "saisie", q: "9 875 − 3 452 = ?", r: ["6 423", "6423", "6.423"], expl: "Pas de retenue : 6 423." },
      { t: "saisie", q: "7 304 − 2 568 = ?", r: ["4 736", "4736", "4.736"], expl: "Attention aux retenues : 4 736. Vérifie : 4 736 + 2 568 = 7 304." },
      { t: "saisie", q: "15 000 − 8 246 = ?", r: ["6 754", "6754", "6.754"], expl: "C'est l'exemple du cahier : 6 754." },
      { t: "saisie", q: "50 000 − 12 345 = ?", r: ["37 655", "37655", "37.655"], expl: "37 655. Vérifie : 37 655 + 12 345 = 50 000." },
      { t: "saisie", q: "4 070 − 1 985 = ?", r: ["2 085", "2085", "2.085"], expl: "2 085. Vérifie : 2 085 + 1 985 = 4 070." },
      { t: "saisie", q: "63 418 − 9 579 = ?", r: ["53 839", "53839", "53.839"], expl: "53 839. Vérifie : 53 839 + 9 579 = 63 418." },
      { t: "trous", q: "Calcule 842 − 367 colonne par colonne.", texte: "Unités : 2 − 7, c'est impossible ; je fais 12 − 7 = [5] et je retiens 1. Dizaines : 6 + 1 = 7 ; 4 − 7 est impossible, je fais 14 − 7 = [7] et je retiens 1. Centaines : 3 + 1 = 4 ; 8 − 4 = [4]. Résultat : [475].", nombre: true, expl: "La retenue s'ajoute au chiffre du bas de la colonne suivante. Vérifie : 475 + 367 = 842." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Moussa avait 25 000 F. Il achète un pantalon à 8 750 F.", etapes: [{ q: "Combien lui reste-t-il ?", r: "16250", unite: "F" }], expl: "Je cherche un reste : 25 000 − 8 750 = 16 250 F." },
      { t: "saisie", q: "Quelle est la différence entre 1 000 et 368 ?", r: "632", expl: "La différence se calcule par une soustraction : 1 000 − 368 = 632." }
    ],
    [
      { t: "vf", q: "Pour calculer 8 246 − 15 000, je place 8 246 en haut.", r: false, expl: "Le plus grand nombre doit toujours être en premier. On calcule 15 000 − 8 246." },
      { t: "qcm", q: "Aïssatou a trouvé 8 000 − 2 376 = 5 624. Son résultat est-il juste ?", choix: ["Oui, car 5 624 + 2 376 = 8 000", "Non, car 5 624 + 2 376 = 7 000", "Non, il faut trouver 6 624"], r: "Oui, car 5 624 + 2 376 = 8 000", expl: "On vérifie avec une addition : on retrouve bien 8 000." },
      { t: "saisie", q: "100 000 − 1 = ?", r: ["99 999", "99999", "99.999"], expl: "100 000 − 1 = 99 999." },
      { t: "saisie", q: "10 000 − 4 507 = ?", r: ["5 493", "5493", "5.493"], expl: "Beaucoup de retenues : 5 493. Vérifie : 5 493 + 4 507 = 10 000." },
      { t: "saisie", q: "Combien manque-t-il pour aller de 2 750 à 5 000 ?", r: ["2 250", "2250", "2.250"], expl: "Un manque se calcule par une soustraction : 5 000 − 2 750 = 2 250." },
      { t: "relier", q: "Relie chaque soustraction à son résultat.", paires: [["1 000 − 1", "999"], ["5 000 − 2 500", "2 500"], ["3 000 − 1 200", "1 800"], ["10 000 − 9 990", "10"], ["700 − 350", "350"]], expl: "Tu peux vérifier chaque résultat par une addition." },
      { t: "qcm", q: "Quelle addition permet de vérifier 15 000 − 8 246 = 6 754 ?", choix: ["6 754 + 8 246", "15 000 + 8 246", "15 000 + 6 754"], r: "6 754 + 8 246", expl: "Résultat + petit nombre = grand nombre : 6 754 + 8 246 = 15 000." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un vendeur de Thiaroye a 1 500 mangues. Il en vend 875 le matin et 438 l'après-midi.", etapes: [{ q: "Nombre de mangues vendues :", r: "1313" }, { q: "Nombre de mangues qui restent :", r: "187" }], expl: "875 + 438 = 1 313 ; 1 500 − 1 313 = 187 mangues." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Fatou veut acheter un téléphone à 45 000 F. Elle a économisé 28 750 F et son père lui donne 10 000 F.", etapes: [{ q: "Combien Fatou a-t-elle maintenant ?", r: "38750", unite: "F" }, { q: "Combien lui manque-t-il ?", r: "6250", unite: "F" }], expl: "28 750 + 10 000 = 38 750 ; 45 000 − 38 750 = 6 250 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un car doit faire un trajet de 264 km. Il s'arrête une première fois après 98 km, puis roule encore 115 km.", etapes: [{ q: "Distance déjà parcourue :", r: "213", unite: "km" }, { q: "Distance qui reste à parcourir :", r: "51", unite: "km" }], expl: "98 + 115 = 213 ; 264 − 213 = 51 km." },
      { t: "qcm", q: "Moustapha dit : « 4 000 − 1 999 = 2 999 ». Qu'en penses-tu ?", choix: ["Faux, c'est 2 001", "Vrai", "Faux, c'est 3 001"], r: "Faux, c'est 2 001", expl: "4 000 − 1 999 = 2 001. Vérification : 2 001 + 1 999 = 4 000." },
      { t: "trous", q: "Trouve le nombre qui manque.", texte: "9 000 − [3500] = 5 500", nombre: true, expl: "On cherche ce qu'on enlève : 9 000 − 5 500 = 3 500." },
      { t: "saisie", q: "Pose et calcule : 8 897,64 − 7 956 = …", r: "941,64", nombre: true, aide: "Aligne les virgules : 7 956 = 7 956,00.", expl: "8 897,64 − 7 956,00 = 941,64." },
      { t: "saisie", q: "Pose et calcule : 951 − 198,671 = …", r: "752,329", nombre: true, aide: "Écris 951 = 951,000 pour avoir autant de chiffres après la virgule.", expl: "951,000 − 198,671 = 752,329." },
      { t: "probleme", q: "Fatou a 25 000 F. Elle achète 3 paires de chaussures à 2 500 F la paire, une robe à 3 500 F et 5 boîtes de perles à 500 F la boîte.", etapes: [{ q: "Étape 1 : prix des chaussures", r: "7500", unite: "F" }, { q: "Étape 2 : prix des perles", r: "2500", unite: "F" }, { q: "Étape 3 : dépense totale", r: "13500", unite: "F" }, { q: "Étape 4 : somme qui lui reste", r: "11500", unite: "F" }], expl: "2 500 × 3 = 7 500 ; 500 × 5 = 2 500 ; 7 500 + 3 500 + 2 500 = 13 500 ; 25 000 − 13 500 = 11 500 F." },
      { t: "saisie", q: "Pose et calcule : 540 − 50,7 = …", r: "489,3", nombre: true, aide: "Écris 540 = 540,0 : on complète par un zéro.", expl: "540,0 − 50,7 = 489,3." }
    ]
  ]
});
