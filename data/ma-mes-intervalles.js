LECONS.push({
  id: "ma-mes-intervalles",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les intervalles",
  date: "2026-11-05",
  photos: ["DJI_20261118221212_0090_D.jpg", "DJI_20261118221215_0091_D.jpg"],
  retiens:
    "<p>Un <b>intervalle</b> est l'espace entre deux objets voisins (arbres, poteaux, piquets…). On note NO le nombre d'objets et NI le nombre d'intervalles.</p>" +
    "<p><b>Sur une ligne fermée</b> (cercle, tour d'un champ) :</p>" +
    "<p><b>Nombre d'intervalles = nombre d'objets</b> (NI = NO). Exemple : 6 arbres autour d'un cercle → 6 intervalles ; 4 objets aux coins d'un rectangle → 4 intervalles.</p>" +
    "<p><b>Sur une ligne ouverte</b> (une rue, un côté de champ), le nombre d'objets n'est pas toujours égal au nombre d'intervalles. Il faut chaque fois faire un <b>croquis</b>.</p>" +
    "<table><tr><th>Ligne ouverte</th><th>Règle</th></tr>" +
    "<tr><td>un objet à une seule extrémité</td><td>NO = NI</td></tr>" +
    "<tr><td>un objet à chaque extrémité</td><td>NO = NI + 1</td></tr>" +
    "<tr><td>rien aux extrémités</td><td>NO = NI − 1</td></tr></table>",
  astuce: "Fais le croquis avec tes doigts : 3 doigts levés, il y a 2 espaces entre eux. Avec un objet à chaque bout, il y a <b>un intervalle de moins</b> que d'objets.",
  regle: "Ligne fermée : autant d'intervalles que d'objets. Ligne ouverte avec un objet à chaque bout : un intervalle de moins ; sans objet aux bouts : un intervalle de plus ; avec un objet à un seul bout : autant.",
  niveaux: [
    [
      { t: "qcm", q: "Qu'est-ce qu'un intervalle ?", choix: ["l'espace entre deux objets voisins", "le nombre d'objets", "la longueur totale de la ligne"], r: "l'espace entre deux objets voisins", expl: "Un intervalle, c'est l'écart entre deux arbres, deux poteaux… qui se suivent." },
      { t: "classer", q: "Ligne fermée ou ligne ouverte ?", cases: ["ligne fermée", "ligne ouverte"], items: [["le tour d'un rond-point", "ligne fermée"], ["une rue droite", "ligne ouverte"], ["le pourtour d'un champ", "ligne fermée"], ["un côté d'un terrain", "ligne ouverte"], ["un cercle d'enfants", "ligne fermée"], ["une allée de l'école", "ligne ouverte"]], expl: "Une ligne fermée revient à son point de départ (on fait le tour) ; une ligne ouverte a deux bouts." },
      { t: "qcm", q: "On plante 6 arbres autour d'un cercle. Combien y a-t-il d'intervalles ?", choix: ["6", "5", "7"], r: "6", expl: "Sur une ligne fermée, nombre d'intervalles = nombre d'objets." },
      { t: "qcm", q: "Sur une ligne ouverte avec un objet à chaque extrémité, on a…", choix: ["NO = NI + 1", "NO = NI", "NO = NI − 1"], r: "NO = NI + 1", expl: "Il y a un objet de plus que d'intervalles : 3 objets, 2 intervalles." },
      { t: "vf", q: "Sur une ligne ouverte, il faut faire un croquis pour ne pas se tromper.", r: true, expl: "C'est le conseil de la leçon : le croquis montre s'il y a des objets aux extrémités." },
      { t: "relier", q: "Relie chaque situation à sa règle.", paires: [["ligne fermée", "NI = NO"], ["ligne ouverte, un objet à chaque bout", "NO = NI + 1"], ["ligne ouverte, rien aux bouts", "NO = NI − 1"], ["ligne ouverte, un objet à un seul bout", "NO = NI"]], expl: "Ce sont les quatre cas de la leçon." }
    ],
    [
      { t: "saisie", q: "4 piquets aux 4 coins d'un enclos carré. Nombre d'intervalles = …", r: "4", nombre: true, expl: "Le tour de l'enclos est une ligne fermée : 4 objets, 4 intervalles." },
      { t: "saisie", q: "Ligne ouverte, un poteau à chaque bout : 10 poteaux. Nombre d'intervalles = …", r: "9", nombre: true, expl: "NO = NI + 1, donc NI = 10 − 1 = 9." },
      { t: "saisie", q: "Ligne ouverte, rien aux bouts : 10 poteaux. Nombre d'intervalles = …", r: "11", nombre: true, expl: "NO = NI − 1, donc NI = 10 + 1 = 11." },
      { t: "saisie", q: "Ligne ouverte, un poteau à un seul bout : 10 poteaux. Nombre d'intervalles = …", r: "10", nombre: true, expl: "NO = NI : 10 intervalles." },
      { t: "saisie", q: "Autour d'un rond-point, 15 lampadaires. Nombre d'intervalles = …", r: "15", nombre: true, expl: "Ligne fermée : NI = NO = 15." },
      { t: "saisie", q: "Le long d'une allée, un arbre à chaque bout, 12 intervalles. Nombre d'arbres = …", r: "13", nombre: true, expl: "NO = NI + 1 = 12 + 1 = 13." },
      { t: "saisie", q: "Le long d'un mur, aucun pot aux bouts, 8 intervalles. Nombre de pots = …", r: "7", nombre: true, expl: "NO = NI − 1 = 8 − 1 = 7." },
      { t: "saisie", q: "Autour d'un champ, 20 intervalles entre les piquets. Nombre de piquets = …", r: "20", nombre: true, expl: "Ligne fermée : NO = NI = 20." }
    ],
    [
      { t: "qcm", q: "Une corde est tendue entre deux arbres. On y accroche 5 lanternes, aucune contre les arbres. Combien y a-t-il d'intervalles ?", choix: ["6", "5", "4"], r: "6", aide: "Fais un croquis : arbre — lanterne — … — lanterne — arbre.", expl: "Rien aux extrémités : NI = NO + 1 = 6." },
      { t: "qcm", q: "Moussa plante 8 arbres le long d'une route, un à chaque bout. Il dit : « Il y a 8 intervalles. » A-t-il raison ?", choix: ["Non, il y en a 7.", "Oui.", "Non, il y en a 9."], r: "Non, il y en a 7.", expl: "Avec un objet à chaque extrémité, NI = NO − 1 = 7." },
      { t: "vf", q: "Pour le même nombre d'arbres, une ligne fermée a un intervalle de plus qu'une ligne ouverte avec un arbre à chaque bout.", r: true, expl: "Ligne fermée : NI = NO. Ligne ouverte avec un arbre à chaque bout : NI = NO − 1. La différence est de 1." },
      { t: "classer", q: "Combien d'intervalles pour 6 objets ?", cases: ["5 intervalles", "6 intervalles", "7 intervalles"], items: [["ligne ouverte, un objet à chaque bout", "5 intervalles"], ["ligne fermée", "6 intervalles"], ["ligne ouverte, un objet à un seul bout", "6 intervalles"], ["ligne ouverte, rien aux bouts", "7 intervalles"]], expl: "6 − 1 = 5 ; 6 ; 6 ; 6 + 1 = 7." },
      { t: "saisie", q: "Six enfants jouent à la chandelle, assis en cercle. Nombre d'intervalles entre eux = …", r: "6", nombre: true, expl: "Le cercle est une ligne fermée : 6 enfants, 6 intervalles." },
      { t: "saisie", q: "Une rue droite a 25 lampadaires, un à chaque extrémité. Nombre d'intervalles = …", r: "24", nombre: true, expl: "NI = NO − 1 = 25 − 1 = 24." }
    ],
    [
      { t: "probleme", q: "Un cultivateur plante des arbres sur les deux longueurs de son champ rectangulaire. Il met un arbre à chaque coin et 9 arbres sur chaque longueur.", etapes: [{ q: "Étape 1 : nombre d'intervalles sur une longueur", r: "8" }, { q: "Étape 2 : nombre total d'arbres plantés", r: "18" }, { q: "Étape 3 : nombre total d'intervalles sur les deux longueurs", r: "16" }], expl: "Une longueur est une ligne ouverte avec un arbre à chaque bout : 9 − 1 = 8 intervalles. Deux longueurs : 9 × 2 = 18 arbres et 8 × 2 = 16 intervalles." },
      { t: "probleme", q: "Autour d'une parcelle, on a planté 35 piquets pour tenir un grillage. Le long du chemin qui y mène, on a planté 35 arbres, un à chaque bout.", etapes: [{ q: "Étape 1 : intervalles autour de la parcelle", r: "35" }, { q: "Étape 2 : intervalles le long du chemin", r: "34" }], expl: "Le tour de la parcelle est une ligne fermée : 35. Le chemin est une ligne ouverte avec un arbre à chaque bout : 35 − 1 = 34." },
      { t: "probleme", q: "Pour la fête de l'école, Awa accroche des fanions le long d'une corde tendue entre deux murs, sans fanion contre les murs. Il y a 11 espaces.", etapes: [{ q: "Nombre de fanions", r: "10" }], expl: "Rien aux extrémités : NO = NI − 1 = 11 − 1 = 10." },
      { t: "probleme", q: "Le long d'une avenue, on a planté 51 arbres, un à chaque extrémité. On en plante autant de l'autre côté.", etapes: [{ q: "Étape 1 : intervalles d'un côté", r: "50" }, { q: "Étape 2 : intervalles des deux côtés", r: "100" }], expl: "51 − 1 = 50 intervalles d'un côté ; 50 × 2 = 100 pour les deux côtés." },
      { t: "qcm", q: "Un terrain carré a un piquet à chaque coin et 4 piquets entre deux coins, sur chaque côté. Combien y a-t-il de piquets en tout ?", choix: ["20", "24", "16", "21"], r: "20", aide: "Fais un croquis et ne compte pas deux fois les coins.", expl: "4 coins + 4 piquets × 4 côtés = 4 + 16 = 20. Le tour est une ligne fermée : 20 piquets, 20 intervalles." }
    ]
  ]
});
