// À VÉRIFIER : photo 0073 floue : texte reconstitué. Les mots « unités identiques » sont devinés (rendus par « objets identiques ») ; le « NB : Il faut toujours décaler les zéros intercalaires » n'est pas sûr et n'est pas repris. Le décalage d'un rang vient de l'exemple net de la photo 0074 (1 351 × 52 = 70 252, juste).
LECONS.push({
  id: "ma-num-multiplication",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La multiplication des nombres entiers",
  date: "2026-10-05",
  photos: ["DJI_20261118220925_0073_D.jpg", "DJI_20261118220934_0074_D.jpg"],
  retiens:
    "<p>La <b>multiplication</b> est une opération qui permet, à partir de 2 nombres (le <b>multiplicande</b> et le <b>multiplicateur</b>), de trouver un troisième nombre (le <b>produit</b>).</p>" +
    "<p>Pour trouver la masse totale, le prix total, la quantité totale, la longueur totale de plusieurs objets identiques, on pose une multiplication.<br>Ex : 5 m + 5 m + 5 m + 5 m = 5 m × 4 = 20 m</p>" +
    "<p><b>Valeur totale = Valeur unitaire × Nombre d'unités</b></p>" +
    "<p>Exemple posé : 1 351 × 52 = 70 252. On multiplie d'abord par 2 (les unités), puis par 5 (les dizaines) : cette 2<sup>e</sup> ligne est <b>décalée d'un rang</b> vers la gauche (le point marque la place des unités).</p>" +
    "<table><tr><td>×</td><td></td><td>1</td><td>3</td><td>5</td><td>1</td><td>multiplicande</td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td>5</td><td>2</td><td>multiplicateur</td></tr>" +
    "<tr><td></td><td></td><td>2</td><td>7</td><td>0</td><td>2</td><td>1 351 × 2</td></tr>" +
    "<tr><td>+</td><td>6</td><td>7</td><td>5</td><td>5</td><td>·</td><td>1 351 × 5 dizaines</td></tr>" +
    "<tr><td></td><td><b>7</b></td><td><b>0</b></td><td><b>2</b></td><td><b>5</b></td><td><b>2</b></td><td>produit</td></tr>" +
    "</table>",
  astuce: "Valeur totale = Valeur unitaire × Nombre d'unités : le prix d'<b>un</b> objet multiplié par le <b>nombre</b> d'objets.",
  regle: "Multiplicande × multiplicateur = produit ; chaque nouvelle ligne de la multiplication posée est décalée d'un rang vers la gauche.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["multiplicande", "le nombre qu'on multiplie"], ["multiplicateur", "le nombre par lequel on multiplie"], ["produit", "le résultat"]], expl: "Dans 1 351 × 52 = 70 252 : 1 351 est le multiplicande, 52 le multiplicateur, 70 252 le produit." },
      { t: "qcm", q: "5 m + 5 m + 5 m + 5 m = ?", choix: ["5 m × 4", "5 m + 4", "5 m × 5", "4 m × 4"], r: "5 m × 4", expl: "On additionne 4 fois la même longueur : c'est 5 m × 4 = 20 m." },
      { t: "qcm", q: "Dans 1 351 × 52 = 70 252, quel est le produit ?", choix: ["70 252", "1 351", "52"], r: "70 252", expl: "Le produit est le résultat de la multiplication." },
      { t: "vf", q: "Valeur totale = Valeur unitaire × Nombre d'unités", r: true, expl: "C'est la formule encadrée de la leçon." },
      { t: "qcm", q: "Pour trouver le prix de 6 cahiers à 250 F l'un, je calcule…", choix: ["250 F × 6", "250 F + 6", "250 F − 6", "6 − 250 F"], r: "250 F × 6", expl: "Valeur unitaire (250 F) × nombre d'unités (6) = 1 500 F." },
      { t: "vf", q: "Dans 1 351 × 52, la 2e ligne (1 351 × 5) est décalée d'un rang vers la gauche.", r: true, expl: "Le 5 de 52 est un chiffre des dizaines : on décale d'un rang." }
    ],
    [
      { t: "saisie", q: "243 × 3 = ?", r: "729", expl: "3 × 3 = 9 ; 4 × 3 = 12 (je pose 2, je retiens 1) ; 2 × 3 + 1 = 7. Résultat : 729." },
      { t: "saisie", q: "1 205 × 4 = ?", r: ["4 820", "4820", "4.820"], expl: "Résultat : 4 820." },
      { t: "saisie", q: "326 × 25 = ?", r: ["8 150", "8150", "8.150"], expl: "326 × 5 = 1 630 ; 326 × 2 dizaines = 6 520 ; 1 630 + 6 520 = 8 150." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 1 351 × 52.", etapes: [{ q: "1 351 × 2 = ?", r: "2702" }, { q: "1 351 × 5 = ? (cette ligne sera décalée d'un rang)", r: "6755" }, { q: "Produit 1 351 × 52 = ?", r: "70252" }], expl: "2 702 + 67 550 = 70 252. C'est l'exemple du cahier." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 438 × 36.", etapes: [{ q: "438 × 6 = ?", r: "2628" }, { q: "438 × 3 = ? (ligne décalée d'un rang)", r: "1314" }, { q: "Produit 438 × 36 = ?", r: "15768" }], expl: "2 628 + 13 140 = 15 768." },
      { t: "saisie", q: "5 m × 4 = ? m", r: "20", expl: "5 m + 5 m + 5 m + 5 m = 20 m.", unite: "m" },
      { t: "saisie", q: "2 507 × 8 = ?", r: ["20 056", "20056", "20.056"], expl: "Résultat : 20 056." },
      { t: "saisie", q: "714 × 43 = ?", r: ["30 702", "30702", "30.702"], expl: "714 × 3 = 2 142 ; 714 × 4 dizaines = 28 560 ; total 30 702." },
      { t: "trous", q: "Complète la formule de la leçon.", texte: "Valeur [totale] = Valeur [unitaire] × Nombre d'[unités]", expl: "VT = VU × NU." }
    ],
    [
      { t: "vf", q: "Dans 438 × 36, on peut écrire la 2e ligne (438 × 3) sans la décaler.", r: false, expl: "Le 3 de 36 vaut 3 dizaines : il faut décaler la ligne d'un rang vers la gauche." },
      { t: "qcm", q: "Moussa a posé 245 × 13 et trouvé 980. Qu'a-t-il oublié ?", choix: ["de décaler la 2e ligne", "rien, c'est juste", "une retenue"], r: "de décaler la 2e ligne", expl: "Il a fait 735 + 245 = 980. Avec le décalage : 735 + 2 450 = 3 185." },
      { t: "saisie", q: "Écris le bon résultat de 245 × 13.", r: ["3 185", "3185", "3.185"], expl: "245 × 3 = 735 ; 245 × 1 dizaine = 2 450 ; 735 + 2 450 = 3 185." },
      { t: "saisie", q: "1 009 × 7 = ?", r: ["7 063", "7063", "7.063"], expl: "Attention aux zéros : 7 063." },
      { t: "saisie", q: "625 × 48 = ?", r: ["30 000", "30000", "30.000"], expl: "625 × 8 = 5 000 ; 625 × 4 dizaines = 25 000 ; total 30 000." },
      { t: "relier", q: "Relie chaque multiplication à son produit.", paires: [["25 × 4", "100"], ["12 × 12", "144"], ["15 × 6", "90"], ["250 × 4", "1 000"], ["11 × 11", "121"]], expl: "Calcule de tête ou pose l'opération." },
      { t: "saisie", q: "Un carton contient 24 bouteilles. Combien de bouteilles y a-t-il dans 15 cartons ?", r: "360", expl: "Valeur totale = 24 × 15 = 360 bouteilles." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Au marché Tilène, une vendeuse achète 12 sacs de riz de 50 kg, à 16 500 F le sac.", etapes: [{ q: "Masse totale de riz :", r: "600", unite: "kg" }, { q: "Prix total :", r: "198000", unite: "F" }], expl: "50 kg × 12 = 600 kg ; 16 500 F × 12 = 198 000 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une école commande 35 tables-bancs à 27 500 F l'une et 48 cahiers à 350 F l'un.", etapes: [{ q: "Prix des tables-bancs :", r: "962500", unite: "F" }, { q: "Prix des cahiers :", r: "16800", unite: "F" }, { q: "Dépense totale :", r: "979300", unite: "F" }], expl: "27 500 × 35 = 962 500 ; 350 × 48 = 16 800 ; 962 500 + 16 800 = 979 300 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un car fait 3 allers-retours entre deux villes chaque jour. Un aller fait 72 km.", etapes: [{ q: "Distance d'un aller-retour :", r: "144", unite: "km" }, { q: "Distance parcourue en un jour :", r: "432", unite: "km" }, { q: "Distance parcourue en 6 jours :", r: "2592", unite: "km" }], expl: "72 × 2 = 144 ; 144 × 3 = 432 ; 432 × 6 = 2 592 km." },
      { t: "qcm", q: "La valeur unitaire est 750 F et le nombre d'unités est 24. Quelle est la valeur totale ?", choix: ["18 000 F", "17 000 F", "1 800 F", "774 F"], r: "18 000 F", expl: "VT = VU × NU = 750 × 24 = 18 000 F." },
      { t: "saisie", q: "3 048 × 26 = ?", r: ["79 248", "79248", "79.248"], expl: "3 048 × 6 = 18 288 ; 3 048 × 2 dizaines = 60 960 ; 18 288 + 60 960 = 79 248." }
    ]
  ]
});
