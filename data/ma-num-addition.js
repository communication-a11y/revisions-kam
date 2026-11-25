// À VÉRIFIER : la règle de l'addition est recopiée sans « les unités sous les unités » (photo 0066 : « on pose les unités sous les dizaines sous les dizaines… »). Le module donne la règle complète : unités sous les unités, dizaines sous les dizaines, centaines sous les centaines.
LECONS.push({
  id: "ma-num-addition",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "L'addition des nombres entiers",
  date: "2026-09-23",
  photos: ["DJI_20261118220819_0066_D.jpg"],
  retiens:
    "<p>L'<b>addition</b> est la réunion en une seule quantité de plusieurs quantités (masses, contenances, longueurs, prix…).</p>" +
    "<p>On ne peut additionner que des grandeurs <b>de même espèce</b> (même unité). Ex : 6 800 m + 7 550 m + 7 000 m = 21 350 m.</p>" +
    "<p>Pour effectuer une addition, on pose <b>les unités sous les unités, les dizaines sous les dizaines, les centaines sous les centaines</b>… On commence par la <b>droite</b> et on reporte les <b>retenues</b>.</p>" +
    "<table><tr><th></th><th>dm</th><th>um</th><th>c</th><th>d</th><th>u</th></tr>" +
    "<tr><td></td><td></td><td>6</td><td>8</td><td>0</td><td>0</td></tr>" +
    "<tr><td></td><td></td><td>7</td><td>5</td><td>5</td><td>0</td></tr>" +
    "<tr><td>+</td><td></td><td>7</td><td>0</td><td>0</td><td>0</td></tr>" +
    "<tr><td></td><td><b>2</b></td><td><b>1</b></td><td><b>3</b></td><td><b>5</b></td><td><b>0</b></td></tr>" +
    "</table>",
  astuce: "Un chiffre par colonne, bien alignés à droite : les unités de tous les nombres doivent être dans la même colonne.",
  regle: "On additionne seulement des grandeurs de même unité ; on pose unités sous unités, dizaines sous dizaines…, on commence par la droite et on reporte les retenues.",
  niveaux: [
    [
      { t: "qcm", q: "L'addition sert à…", choix: ["réunir plusieurs quantités en une seule", "partager une quantité", "chercher ce qui reste"], r: "réunir plusieurs quantités en une seule", expl: "L'addition est la réunion de plusieurs quantités en une seule." },
      { t: "vf", q: "On peut additionner 5 kg et 3 m.", r: false, expl: "On n'additionne que des grandeurs de même espèce : des kg avec des kg, des m avec des m." },
      { t: "qcm", q: "Pour poser une addition, on place…", choix: ["les unités sous les unités, les dizaines sous les dizaines…", "les nombres alignés à gauche", "le plus grand nombre en bas"], r: "les unités sous les unités, les dizaines sous les dizaines…", expl: "Chaque chiffre va dans sa colonne : unités sous unités, dizaines sous dizaines, etc." },
      { t: "qcm", q: "Par où commence-t-on une addition posée ?", choix: ["par la droite (les unités)", "par la gauche", "par le milieu"], r: "par la droite (les unités)", expl: "On commence par les unités, à droite, pour pouvoir reporter les retenues." },
      { t: "classer", q: "Peut-on faire directement cette addition ?", cases: ["oui, même unité", "non, unités différentes"], items: [["6 800 m + 7 550 m", "oui, même unité"], ["25 kg + 10 kg", "oui, même unité"], ["300 F + 2 l", "non, unités différentes"], ["4 m + 6 kg", "non, unités différentes"], ["12 l + 8 l", "oui, même unité"], ["50 F + 3 m", "non, unités différentes"]], expl: "On additionne seulement des grandeurs de même espèce." },
      { t: "vf", q: "6 800 m + 7 550 m + 7 000 m = 21 350 m", r: true, expl: "C'est l'exemple du cahier : 6 800 + 7 550 = 14 350 ; 14 350 + 7 000 = 21 350." }
    ],
    [
      { t: "saisie", q: "4 325 + 2 674 = ?", r: ["6 999", "6999", "6.999"], expl: "Sans retenue : 6 999." },
      { t: "saisie", q: "3 658 + 1 476 = ?", r: ["5 134", "5134", "5.134"], expl: "8 + 6 = 14, je pose 4 et retiens 1… Résultat : 5 134." },
      { t: "saisie", q: "25 806 + 9 397 = ?", r: ["35 203", "35203", "35.203"], expl: "N'oublie pas les retenues : 35 203." },
      { t: "saisie", q: "6 800 + 7 550 + 7 000 = ?", r: ["21 350", "21350", "21.350"], expl: "C'est l'exemple du cahier : 21 350." },
      { t: "saisie", q: "12 450 + 8 075 + 650 = ?", r: ["21 175", "21175", "21.175"], expl: "Aligne bien les unités : 650 n'a que 3 chiffres. Résultat : 21 175." },
      { t: "trous", q: "Calcule 478 + 356 colonne par colonne.", texte: "Unités : 8 + 6 = [14], j'écris [4] et je retiens 1. Dizaines : 1 + 7 + 5 = [13], j'écris [3] et je retiens 1. Centaines : 1 + 4 + 3 = [8]. Résultat : [834].", nombre: true, expl: "On commence par la droite et on reporte chaque retenue dans la colonne suivante." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Au marché, Awa achète un sac de riz à 15 500 F, de l'huile à 4 750 F et du sucre à 1 800 F.", etapes: [{ q: "Prix du riz et de l'huile :", r: "20250", unite: "F" }, { q: "Combien Awa dépense-t-elle en tout ?", r: "22050", unite: "F" }], expl: "15 500 + 4 750 = 20 250 ; 20 250 + 1 800 = 22 050 F." },
      { t: "saisie", q: "245 kg + 1 380 kg + 75 kg = ? kg", r: ["1 700", "1700", "1.700"], expl: "Même unité, on additionne : 1 700 kg.", unite: "kg" },
      { t: "vf", q: "Pour calculer 2 345 + 87, je place le 7 de 87 sous le 5 de 2 345.", r: true, expl: "Unités sous unités : le 7 (unités) va sous le 5 (unités)." }
    ],
    [
      { t: "vf", q: "Pour calculer 1 250 m + 3 km, je peux faire 1 250 + 3.", r: false, expl: "Les unités sont différentes. Il faut d'abord convertir : 3 km = 3 000 m." },
      { t: "saisie", q: "1 250 m + 3 km = ? m", r: ["4 250", "4250", "4.250"], expl: "3 km = 3 000 m ; 1 250 m + 3 000 m = 4 250 m.", unite: "m" },
      { t: "saisie", q: "99 999 + 1 = ?", r: ["100 000", "100000", "100.000"], expl: "Toutes les retenues s'enchaînent : 100 000." },
      { t: "saisie", q: "47 + 3 508 + 960 = ?", r: ["4 515", "4515", "4.515"], expl: "Attention à l'alignement des unités : 4 515." },
      { t: "qcm", q: "Moussa a calculé 5 607 + 2 895 = 7 402. Qu'en penses-tu ?", choix: ["Il a oublié des retenues", "Il a bien calculé", "Il a soustrait au lieu d'additionner"], r: "Il a oublié des retenues", expl: "6 + 8 + 1 = 15 : il fallait écrire 5 et retenir 1. Le bon résultat est 8 502." },
      { t: "saisie", q: "Écris le bon résultat de 5 607 + 2 895.", r: ["8 502", "8502", "8.502"], expl: "7 + 5 = 12 (je retiens 1) ; 1 + 0 + 9 = 10 (je retiens 1) ; 1 + 6 + 8 = 15 (je retiens 1) ; 1 + 5 + 2 = 8. Résultat : 8 502." },
      { t: "relier", q: "Relie chaque addition à son résultat.", paires: [["1 999 + 1", "2 000"], ["450 + 550", "1 000"], ["2 500 + 2 500", "5 000"], ["7 990 + 10", "8 000"], ["49 500 + 500", "50 000"]], expl: "Calcule de droite à gauche en pensant aux retenues." },
      { t: "vf", q: "Quand on additionne trois nombres, on peut avoir une retenue de 2.", r: true, expl: "Par exemple 9 + 9 + 9 = 27 : on écrit 7 et on retient 2." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un car part de Dakar avec 38 passagers. À Rufisque, 12 passagers montent ; à Thiès, 9 autres montent. Personne ne descend.", etapes: [{ q: "Nombre de passagers après Rufisque :", r: "50" }, { q: "Nombre de passagers après Thiès :", r: "59" }], expl: "38 + 12 = 50 ; 50 + 9 = 59 passagers." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un commerçant de Sandaga vend 1 250 kg de riz lundi, 2 375 kg mardi et 1 890 kg mercredi.", etapes: [{ q: "Riz vendu lundi et mardi :", r: "3625", unite: "kg" }, { q: "Riz vendu en trois jours :", r: "5515", unite: "kg" }], expl: "1 250 + 2 375 = 3 625 ; 3 625 + 1 890 = 5 515 kg." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Khady achète trois rouleaux de grillage : le premier mesure 125 m, le deuxième 248 m et le troisième 87 m.", etapes: [{ q: "Longueur des deux premiers rouleaux :", r: "373", unite: "m" }, { q: "Longueur totale de grillage :", r: "460", unite: "m" }], expl: "125 + 248 = 373 ; 373 + 87 = 460 m." },
      { t: "trous", q: "Complète la chaîne d'additions.", texte: "1 500 + 2 500 = [4000] ; 4 000 + 6 000 = [10000] ; 10 000 + 25 000 = [35000]", nombre: true, expl: "4 000, puis 10 000, puis 35 000." },
      { t: "qcm", q: "Fatou a 12 500 F. Sa tante lui donne 7 500 F et son oncle 5 000 F. Combien a-t-elle maintenant ?", choix: ["25 000 F", "20 000 F", "24 000 F", "15 000 F"], r: "25 000 F", expl: "12 500 + 7 500 = 20 000 ; 20 000 + 5 000 = 25 000 F." },
      { t: "saisie", q: "Pose et calcule : 259,6 + 1 234 + 2,74 = …", r: "1496,34", nombre: true, aide: "Aligne les virgules les unes sous les autres.", expl: "259,60 + 1 234,00 + 2,74 = 1 496,34." }
    ]
  ]
});
