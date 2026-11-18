// À VÉRIFIER : la règle de divisibilité par 3 est recopiée au cahier « si la somme des chiffres est égale à 3 ou 6 ou 9 » et par 9 « égale à 9 » (photo 0064). Le module donne la règle exacte : somme des chiffres MULTIPLE de 3 (resp. de 9) ; la version du cahier est gardée comme astuce (additionner les chiffres jusqu'à n'en avoir qu'un).
LECONS.push({
  id: "ma-num-divisibilite",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Les caractères de divisibilité par 2, 3, 5 et 9",
  date: "2026-09-21",
  photos: ["DJI_20261118220805_0064_D.jpg", "DJI_20261118220814_0065_D.jpg"],
  retiens:
    "<p>Un nombre est divisible par :</p>" +
    "<ul><li><b>2</b> s'il est <b>pair</b>, c'est-à-dire terminé par <b>0, 2, 4, 6 ou 8</b>. Ex : 1 800 ; 142 ; 44.</li><li><b>5</b> s'il est terminé par <b>0 ou 5</b>. Ex : 15 ; 40.</li><li><b>3</b> si la <b>somme de ses chiffres est un multiple de 3</b> (3, 6, 9, 12, 15, 18…). Ex : 7 005 → 7 + 0 + 0 + 5 = 12, et 12 est un multiple de 3 (1 + 2 = 3).</li><li><b>9</b> si la <b>somme de ses chiffres est un multiple de 9</b> (9, 18, 27…). Ex : 405 → 4 + 0 + 5 = 9.</li></ul>" +
    "<p><b>Remarque</b></p>" +
    "<ul><li>Un nombre divisible par 3 n'est pas obligatoirement divisible par 9. Ex : 15 est divisible par 3 (1 + 5 = 6), mais pas par 9.</li><li>Un nombre divisible par 9 est aussi divisible par 3. Ex : 18 (1 + 8 = 9) est divisible à la fois par 3 et par 9.</li></ul>",
  astuce: "Si la somme des chiffres est grande, additionne encore ses chiffres : 7 005 → 12 → 1 + 2 = 3. Pour être divisible par 3, il faut arriver à <b>3, 6 ou 9</b> ; pour être divisible par 9, il faut arriver à <b>9</b>.",
  regle: "Par 2 : terminé par 0, 2, 4, 6, 8. Par 5 : terminé par 0 ou 5. Par 3 : somme des chiffres multiple de 3. Par 9 : somme des chiffres multiple de 9.",
  niveaux: [
    [
      { t: "qcm", q: "Un nombre est divisible par 2 quand il est…", choix: ["pair", "impair", "terminé par 5", "plus grand que 2"], r: "pair", expl: "Divisible par 2 = pair, terminé par 0, 2, 4, 6 ou 8." },
      { t: "qcm", q: "Par quel chiffre se termine un nombre divisible par 5 ?", choix: ["0 ou 5", "2 ou 5", "5 seulement", "0, 2, 4, 6 ou 8"], r: "0 ou 5", expl: "Un nombre divisible par 5 se termine par 0 ou par 5." },
      { t: "vf", q: "142 est divisible par 2.", r: true, expl: "142 se termine par 2 : il est pair." },
      { t: "vf", q: "40 est divisible par 5.", r: true, expl: "40 se termine par 0." },
      { t: "qcm", q: "Pour savoir si 405 est divisible par 9, je…", choix: ["fais la somme de ses chiffres", "regarde son dernier chiffre", "regarde son premier chiffre"], r: "fais la somme de ses chiffres", expl: "Pour 3 et pour 9, on additionne les chiffres : 4 + 0 + 5 = 9." },
      { t: "vf", q: "Un nombre divisible par 9 est aussi divisible par 3.", r: true, expl: "C'est la remarque de la leçon : 18 est divisible par 9 et aussi par 3." }
    ],
    [
      { t: "classer", q: "Ce nombre est-il divisible par 2 ?", cases: ["divisible par 2", "pas divisible par 2"], items: [["1 800", "divisible par 2"], ["37", "pas divisible par 2"], ["44", "divisible par 2"], ["925", "pas divisible par 2"], ["1 006", "divisible par 2"], ["71", "pas divisible par 2"]], expl: "Regarde le dernier chiffre : 0, 2, 4, 6 ou 8 → divisible par 2." },
      { t: "classer", q: "Ce nombre est-il divisible par 5 ?", cases: ["divisible par 5", "pas divisible par 5"], items: [["15", "divisible par 5"], ["40", "divisible par 5"], ["52", "pas divisible par 5"], ["105", "divisible par 5"], ["3 000", "divisible par 5"], ["504", "pas divisible par 5"]], expl: "Seul le dernier chiffre compte : 0 ou 5 → divisible par 5." },
      { t: "saisie", q: "Calcule la somme des chiffres de 7 005.", r: "12", expl: "7 + 0 + 0 + 5 = 12." },
      { t: "qcm", q: "7 005 est-il divisible par 3 ?", choix: ["Oui, car 7 + 0 + 0 + 5 = 12 et 12 est un multiple de 3", "Non, car il se termine par 5", "Non, car 12 n'est pas égal à 3"], r: "Oui, car 7 + 0 + 0 + 5 = 12 et 12 est un multiple de 3", expl: "La somme n'a pas besoin d'être égale à 3 : il suffit qu'elle soit un multiple de 3 (12 → 1 + 2 = 3)." },
      { t: "saisie", q: "Calcule la somme des chiffres de 405.", r: "9", expl: "4 + 0 + 5 = 9 : 405 est divisible par 9 (et par 3)." },
      { t: "vf", q: "18 est divisible par 3 et par 9.", r: true, expl: "1 + 8 = 9 : 18 est divisible par 9, donc aussi par 3." },
      { t: "vf", q: "15 est divisible par 9.", r: false, expl: "1 + 5 = 6 : 6 n'est pas un multiple de 9. 15 est divisible par 3, pas par 9." },
      { t: "classer", q: "Ce nombre est-il divisible par 3 ? Additionne ses chiffres.", cases: ["divisible par 3", "pas divisible par 3"], items: [["51", "divisible par 3"], ["74", "pas divisible par 3"], ["123", "divisible par 3"], ["250", "pas divisible par 3"], ["9 315", "divisible par 3"], ["1 001", "pas divisible par 3"]], expl: "51 → 6 ; 123 → 6 ; 9 315 → 18 : multiples de 3. 74 → 11 ; 250 → 7 ; 1 001 → 2 : non." },
      { t: "classer", q: "Ce nombre est-il divisible par 9 ? Additionne ses chiffres.", cases: ["divisible par 9", "pas divisible par 9"], items: [["81", "divisible par 9"], ["99", "divisible par 9"], ["108", "divisible par 9"], ["2 016", "divisible par 9"], ["105", "pas divisible par 9"], ["300", "pas divisible par 9"], ["1 234", "pas divisible par 9"], ["57", "pas divisible par 9"]], expl: "81 → 9 ; 99 → 18 ; 108 → 9 ; 2 016 → 9. Mais 105 → 6 ; 300 → 3 ; 1 234 → 10 ; 57 → 12." },
      { t: "trous", q: "Complète.", texte: "270 se termine par 0 : il est divisible par [2] et par [5]. La somme de ses chiffres est [9] : il est aussi divisible par 3 et par 9.", nombre: true, expl: "Terminé par 0 → divisible par 2 et par 5. 2 + 7 + 0 = 9 → divisible par 9 et par 3." }
    ],
    [
      { t: "qcm", q: "Quel nombre est divisible par 3 mais PAS par 9 ?", choix: ["15", "18", "27", "81"], r: "15", expl: "1 + 5 = 6 : multiple de 3, pas de 9. Pour 18, 27 et 81, la somme est 9." },
      { t: "qcm", q: "Quel nombre est divisible à la fois par 2 et par 5 ?", choix: ["130", "135", "132", "155"], r: "130", expl: "Pour être divisible par 2 et par 5, il faut finir par 0." },
      { t: "vf", q: "7 005 est divisible par 9.", r: false, expl: "7 + 0 + 0 + 5 = 12 : 12 est un multiple de 3, mais pas de 9." },
      { t: "vf", q: "Un nombre dont la somme des chiffres vaut 12 est divisible par 3.", r: true, expl: "12 est un multiple de 3 (3 × 4 = 12). La somme n'a pas besoin d'être exactement 3, 6 ou 9." },
      { t: "qcm", q: "5 994 est divisible…", choix: ["par 3 et par 9", "par 3 seulement", "par 9 seulement", "ni par 3, ni par 9"], r: "par 3 et par 9", expl: "5 + 9 + 9 + 4 = 27 : 27 est un multiple de 9 (2 + 7 = 9), donc aussi de 3." },
      { t: "saisie", q: "Quel chiffre faut-il écrire à la place du ? pour que 5?3 soit divisible par 9 ?", r: "1", expl: "5 + 1 + 3 = 9. Avec un autre chiffre, la somme ne serait pas un multiple de 9." },
      { t: "classer", q: "Range chaque nombre.", cases: ["par 2 et par 5", "par 5 seulement", "par 2 seulement"], items: [["60", "par 2 et par 5"], ["75", "par 5 seulement"], ["84", "par 2 seulement"], ["1 000", "par 2 et par 5"], ["205", "par 5 seulement"], ["316", "par 2 seulement"]], expl: "Fini par 0 → par 2 et par 5 ; fini par 5 → par 5 seulement ; fini par 2, 4, 6, 8 → par 2 seulement." }
    ],
    [
      { t: "qcm", q: "Le directeur veut ranger les 135 élèves de l'école en rangs de 5, sans qu'il reste personne. Est-ce possible ?", choix: ["Oui, car 135 se termine par 5", "Non, car 135 est impair", "Non, car 135 ne se termine pas par 0"], r: "Oui, car 135 se termine par 5", expl: "Un nombre terminé par 0 ou 5 est divisible par 5 : 135 élèves font 27 rangs de 5." },
      { t: "qcm", q: "Au marché, Khady veut partager 1 254 F entre ses 2 enfants, sans reste. Est-ce possible ?", choix: ["Oui, car 1 254 est pair", "Non, car 1 254 est impair", "Non, car 1 254 ne se termine pas par 0"], r: "Oui, car 1 254 est pair", expl: "1 254 se termine par 4 : il est pair, donc divisible par 2." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Cherche les plus petits nombres de 3 chiffres qui conviennent.", etapes: [{ q: "Le plus petit nombre de 3 chiffres divisible par 2 et par 5 :", r: "100" }, { q: "Le plus petit nombre de 3 chiffres divisible par 3 :", r: "102" }, { q: "Le plus petit nombre de 3 chiffres divisible par 9 :", r: "108" }], expl: "100 finit par 0. 1 + 0 + 2 = 3. 1 + 0 + 8 = 9 (de 100 à 107, la somme va seulement de 1 à 8)." },
      { t: "classer", q: "Range chaque nombre.", cases: ["par 9 (donc aussi par 3)", "par 3, mais pas par 9", "ni par 3, ni par 9"], items: [["711", "par 9 (donc aussi par 3)"], ["1 008", "par 9 (donc aussi par 3)"], ["222", "par 3, mais pas par 9"], ["4 002", "par 3, mais pas par 9"], ["1 000", "ni par 3, ni par 9"], ["3 104", "ni par 3, ni par 9"]], expl: "711 → 9 ; 1 008 → 9 ; 222 → 6 ; 4 002 → 6 ; 1 000 → 1 ; 3 104 → 8." },
      { t: "vf", q: "3 330 est divisible par 2, par 3, par 5 et par 9.", r: true, expl: "Il finit par 0 (par 2 et par 5) et 3 + 3 + 3 + 0 = 9 (par 9 et par 3)." },
      { t: "saisie", q: "Quel chiffre des unités faut-il écrire pour que 47? soit divisible par 2 ET par 5 ?", r: "0", expl: "Pour être divisible à la fois par 2 et par 5, un nombre doit se terminer par 0 : 470." }
    ]
  ]
});
