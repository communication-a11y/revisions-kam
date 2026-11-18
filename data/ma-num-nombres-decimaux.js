LECONS.push({
  id: "ma-num-nombres-decimaux",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Les nombres décimaux",
  date: "2026-11-10",
  photos: ["DJI_20261118221235_0094_D.jpg", "DJI_20261118221240_0095_D.jpg"],
  retiens:
    "<p>Un <b>nombre décimal</b> s'écrit avec une <b>virgule</b> qui sépare la <b>partie entière</b> (à gauche) de la <b>partie décimale</b> (à droite).</p>" +
    "<p>3,9 se lit « trois virgule neuf ».</p>" +
    "<p>On peut aussi lire un nombre décimal de deux manières :<br>36,6 = 3 dizaines 6 unités et 6 dixièmes ;<br>36,6 = 36 unités et 6 dixièmes.</p>" +
    "<table><tr><th colspan='3'>partie entière</th><th colspan='3'>partie décimale</th></tr>" +
    "<tr><td>centaines</td><td>dizaines</td><td>unités</td><td>dixièmes</td><td>centièmes</td><td>millièmes</td></tr>" +
    "<tr><td>5</td><td>4</td><td>9,</td><td>1</td><td>3</td><td>7</td></tr>" +
    "</table>" +
    "<p>(549,137)</p>" +
    "<p><b>NB :</b> entre deux nombres entiers qui se suivent, on peut intercaler des nombres décimaux.<br>Ex : entre 3 et 4 : 3 – 3,1 – 3,2 – 3,3 – 3,4 – 3,5 – 3,6 – 3,7 – 3,8 – 3,9 – 4</p>",
  astuce: "La virgule se place juste après le chiffre des <b>unités</b>. Juste après la virgule viennent les <b>dixièmes</b>, puis les <b>centièmes</b>, puis les <b>millièmes</b>.",
  regle: "La virgule sépare la partie entière (à gauche) de la partie décimale (à droite) ; après la virgule : dixièmes, centièmes, millièmes.",
  niveaux: [
    [
      { t: "qcm", q: "Dans 36,6, quelle est la partie entière ?", choix: ["36", "6", "366", "3"], r: "36", expl: "La partie entière est à gauche de la virgule : 36." },
      { t: "qcm", q: "Dans 549,137, quelle est la partie décimale ?", choix: ["137", "549", "7", "1"], r: "137", expl: "La partie décimale est à droite de la virgule : 137." },
      { t: "qcm", q: "Comment lit-on 3,9 ?", choix: ["trois virgule neuf", "trente-neuf", "trois cent neuf"], r: "trois virgule neuf", expl: "On lit la partie entière, puis « virgule », puis la partie décimale." },
      { t: "vf", q: "La virgule sépare la partie entière de la partie décimale.", r: true, expl: "Partie entière à gauche, partie décimale à droite." },
      { t: "relier", q: "Dans 549,137, relie chaque chiffre à son rang.", paires: [["5", "centaines"], ["4", "dizaines"], ["9", "unités"], ["1", "dixièmes"], ["3", "centièmes"], ["7", "millièmes"]], expl: "Les unités sont juste avant la virgule, les dixièmes juste après." },
      { t: "vf", q: "36,6 = 36 unités et 6 dixièmes", r: true, expl: "C'est la deuxième manière de lire 36,6 donnée dans la leçon." }
    ],
    [
      { t: "saisie", q: "Écris en chiffres : 3 dizaines 6 unités et 6 dixièmes.", r: "36.6", nombre: true, expl: "3 dizaines 6 unités = 36 ; 6 dixièmes après la virgule : 36,6." },
      { t: "saisie", q: "Écris en chiffres : 7 unités 4 dixièmes 5 centièmes.", r: "7.45", nombre: true, expl: "7 unités, puis 4 dixièmes et 5 centièmes : 7,45." },
      { t: "saisie", q: "Écris en chiffres : 2 centaines 8 unités 3 dixièmes.", r: "208.3", nombre: true, expl: "2 centaines, 0 dizaine, 8 unités : 208 ; puis 3 dixièmes : 208,3." },
      { t: "saisie", q: "Écris en chiffres : 12 unités et 5 centièmes.", r: "12.05", nombre: true, expl: "Il n'y a pas de dixièmes : on écrit 0 au rang des dixièmes. 12,05." },
      { t: "qcm", q: "Dans 84,26, quel est le chiffre des centièmes ?", choix: ["6", "2", "4", "8"], r: "6", expl: "Après la virgule : 2 dixièmes, 6 centièmes." },
      { t: "qcm", q: "Dans 731,508, quel est le chiffre des dixièmes ?", choix: ["5", "0", "8", "1"], r: "5", expl: "Le chiffre des dixièmes est juste après la virgule : 5." },
      { t: "trous", q: "Complète la suite entre 3 et 4.", texte: "3 – 3,1 – 3,2 – [3,3] – 3,4 – [3,5] – 3,6 – 3,7 – [3,8] – 3,9 – 4", nombre: true, expl: "On avance d'un dixième à chaque fois." },
      { t: "qcm", q: "Comment lit-on 5,7 ?", choix: ["cinq virgule sept", "cinquante-sept", "cinq cent sept"], r: "cinq virgule sept", expl: "Partie entière 5, virgule, partie décimale 7." },
      { t: "classer", q: "Range ces nombres.", cases: ["s'écrit avec une virgule", "s'écrit sans virgule"], items: [["45", "s'écrit sans virgule"], ["4,5", "s'écrit avec une virgule"], ["120", "s'écrit sans virgule"], ["0,8", "s'écrit avec une virgule"], ["3,25", "s'écrit avec une virgule"], ["1 000", "s'écrit sans virgule"]], expl: "Les nombres avec une partie décimale s'écrivent avec une virgule." }
    ],
    [
      { t: "qcm", q: "Quel nombre est compris entre 7 et 8 ?", choix: ["7,4", "8,1", "6,9", "74"], r: "7,4", expl: "7,4 a pour partie entière 7 : il est entre 7 et 8." },
      { t: "vf", q: "Dans 0,7, la partie entière est 0.", r: true, expl: "À gauche de la virgule, il y a 0 : 0 unité et 7 dixièmes." },
      { t: "saisie", q: "Écris en chiffres : 5 centaines 4 dizaines 9 unités 1 dixième 3 centièmes 7 millièmes.", r: "549.137", nombre: true, expl: "C'est le nombre du tableau de la leçon : 549,137." },
      { t: "saisie", q: "Écris en chiffres : 6 unités et 7 millièmes.", r: "6.007", nombre: true, expl: "Ni dixièmes ni centièmes : on écrit deux zéros. 6,007." },
      { t: "qcm", q: "20,03 = ?", choix: ["20 unités et 3 centièmes", "20 unités et 3 dixièmes", "2 dizaines et 3 dixièmes"], r: "20 unités et 3 centièmes", expl: "Après la virgule : 0 dixième, 3 centièmes." },
      { t: "qcm", q: "Dans 63,9, quel est le chiffre des unités ?", choix: ["3", "6", "9"], r: "3", expl: "Le chiffre des unités est juste avant la virgule : 3. Le 6 est celui des dizaines." },
      { t: "relier", q: "Relie chaque écriture au bon nombre.", paires: [["2 dizaines 5 dixièmes", "20,5"], ["2 unités 5 dixièmes", "2,5"], ["25 unités 5 centièmes", "25,05"], ["2 dizaines 5 unités", "25"]], expl: "Place chaque chiffre à son rang, et mets des zéros aux rangs vides." }
    ],
    [
      { t: "trous", q: "Entre 9 et 10, on peut intercaler des nombres décimaux. Complète.", texte: "9 – 9,1 – 9,2 – [9,3] – 9,4 – 9,5 – [9,6] – 9,7 – 9,8 – [9,9] – 10", nombre: true, expl: "On avance d'un dixième à chaque fois." },
      { t: "qcm", q: "Awa mesure 1 m et 4 dixièmes de mètre. Elle mesure…", choix: ["1,4 m", "14 m", "1,04 m", "4,1 m"], r: "1,4 m", expl: "1 unité et 4 dixièmes : 1,4 m." },
      { t: "saisie", q: "Une bouteille contient 1 litre et 5 dixièmes de litre. Écris sa contenance en litres.", r: "1.5", nombre: true, expl: "1 unité, 5 dixièmes : 1,5 l.", unite: "l" },
      { t: "saisie", q: "Quel nombre a pour partie entière 8 et pour partie décimale 25 ?", r: "8.25", nombre: true, expl: "8 à gauche de la virgule, 25 à droite : 8,25." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Regarde bien le nombre 507,264.", etapes: [{ q: "Chiffre des dizaines :", r: "0" }, { q: "Chiffre des dixièmes :", r: "2" }, { q: "Chiffre des millièmes :", r: "4" }], expl: "5 centaines, 0 dizaine, 7 unités ; 2 dixièmes, 6 centièmes, 4 millièmes." }
    ]
  ]
});
