// À VÉRIFIER : au cahier (photo 0093), les formules de la ligne ouverte sont mal parenthésées :
// « LI = (LT : NO) − 1 » et « LI = (LT : NO) + 1 ». On ne retranche pas 1 à une longueur : on corrige le NOMBRE
// d'intervalles avant de diviser. Le module enseigne LI = LT : (NO − 1) et LI = LT : (NO + 1),
// comme l'exemple du cahier lui-même (51 − 1 = 50 intervalles ; 450 : 50 = 9 m).
LECONS.push({
  id: "ma-mes-longueur-intervalle",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul de la longueur d'un intervalle (LI) et de la longueur totale (LT)",
  date: "2026-11-09",
  photos: ["DJI_20261118221221_0092_D.jpg", "DJI_20261118221227_0093_D.jpg", "DJI_20261118221235_0094_D.jpg"],
  retiens:
    "<p>LI = longueur d'un intervalle ; LT = longueur totale ; NO = nombre d'objets.</p>" +
    "<p><b>Sur une ligne fermée</b> (il y a autant d'intervalles que d'objets) :</p>" +
    "<ul><li><b>LI = LT : NO</b></li><li><b>LT = LI × NO</b></li></ul>" +
    "<p>Exemple : une parcelle rectangulaire de 140 m de périmètre est entourée d'un grillage soutenu par 35 piquets. Longueur d'un intervalle : 140 m : 35 = 4 m.</p>" +
    "<p><b>Sur une ligne ouverte</b>, on cherche d'abord le <b>nombre d'intervalles</b>, puis on divise :</p>" +
    "<table><tr><th>Ligne ouverte</th><th>Longueur d'un intervalle</th></tr>" +
    "<tr><td>un objet à chaque extrémité</td><td>LI = LT : (NO − 1)</td></tr>" +
    "<tr><td>un objet à une seule extrémité</td><td>LI = LT : NO</td></tr>" +
    "<tr><td>aucun objet aux extrémités</td><td>LI = LT : (NO + 1)</td></tr></table>" +
    "<p>Exemple : tout au long d'une avenue de 450 m, on a planté 51 arbres, un à chaque extrémité.<br>" +
    "Nombre d'intervalles : 51 − 1 = 50<br>Longueur d'un intervalle : 450 m : 50 = 9 m</p>" +
    "<p>Pour trouver la longueur totale, on fait l'inverse : <b>LT = LI × nombre d'intervalles</b>.</p>",
  astuce: "On ne divise jamais une longueur par un nombre d'<b>objets</b> sans réfléchir : on divise par le nombre d'<b>intervalles</b>. Fais le croquis, compte les intervalles, puis divise.",
  regle: "Longueur d'un intervalle = longueur totale : nombre d'intervalles ; longueur totale = longueur d'un intervalle × nombre d'intervalles. Le nombre d'intervalles dépend de la ligne (fermée ou ouverte) et des extrémités.",
  niveaux: [
    [
      { t: "qcm", q: "Sur une ligne fermée, comment calcule-t-on la longueur d'un intervalle ?", choix: ["LT : NO", "LT × NO", "LT − NO"], r: "LT : NO", expl: "Sur une ligne fermée, il y a autant d'intervalles que d'objets : on partage la longueur totale par NO." },
      { t: "qcm", q: "Sur une ligne fermée, comment calcule-t-on la longueur totale ?", choix: ["LI × NO", "LI : NO", "LI + NO"], r: "LI × NO", expl: "On met bout à bout autant d'intervalles que d'objets : LT = LI × NO." },
      { t: "qcm", q: "Ligne ouverte avec un arbre à chaque extrémité : quelle formule est juste ?", choix: ["LI = LT : (NO − 1)", "LI = (LT : NO) − 1", "LI = LT : NO"], r: "LI = LT : (NO − 1)", expl: "On enlève 1 au nombre d'arbres pour avoir le nombre d'intervalles, puis on divise la longueur par ce nombre." },
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["LI", "longueur d'un intervalle"], ["LT", "longueur totale"], ["NO", "nombre d'objets"]], expl: "Ce sont les abréviations de la leçon." },
      { t: "vf", q: "Pour l'avenue de 450 m avec 51 arbres (un à chaque bout), il y a 50 intervalles.", r: true, expl: "51 − 1 = 50 intervalles, puis 450 : 50 = 9 m." },
      { t: "saisie", q: "Parcelle de 140 m de périmètre, 35 piquets tout autour. Longueur d'un intervalle = … m", r: "4", nombre: true, unite: "m", expl: "Ligne fermée : 140 : 35 = 4 m." }
    ],
    [
      { t: "saisie", q: "Ligne fermée : 120 m, 30 piquets. LI = … m", r: "4", nombre: true, unite: "m", expl: "120 : 30 = 4 m." },
      { t: "saisie", q: "Ligne fermée : 24 poteaux espacés de 5 m. LT = … m", r: "120", nombre: true, unite: "m", expl: "LT = LI × NO = 5 × 24 = 120 m." },
      { t: "saisie", q: "Avenue de 450 m, 51 arbres, un à chaque extrémité. LI = … m", r: "9", nombre: true, unite: "m", expl: "51 − 1 = 50 intervalles ; 450 : 50 = 9 m." },
      { t: "saisie", q: "Rue de 200 m, 21 lampadaires, un à chaque bout. LI = … m", r: "10", nombre: true, unite: "m", expl: "21 − 1 = 20 intervalles ; 200 : 20 = 10 m." },
      { t: "saisie", q: "Allée de 60 m, 12 pots, un pot à une seule extrémité. LI = … m", r: "5", nombre: true, unite: "m", expl: "NI = NO = 12 ; 60 : 12 = 5 m." },
      { t: "saisie", q: "Corde de 36 m tendue entre deux poteaux, 8 fanions, aucun contre les poteaux. LI = … m", r: "4", nombre: true, unite: "m", expl: "8 + 1 = 9 intervalles ; 36 : 9 = 4 m." },
      { t: "saisie", q: "Ligne ouverte, un arbre à chaque bout : 15 arbres espacés de 6 m. LT = … m", r: "84", nombre: true, unite: "m", expl: "15 − 1 = 14 intervalles ; 14 × 6 = 84 m." },
      { t: "saisie", q: "Rond-point : 18 palmiers espacés de 3 m. Longueur du tour = … m", r: "54", nombre: true, unite: "m", expl: "Ligne fermée : 18 × 3 = 54 m." },
      { t: "saisie", q: "Ligne ouverte sans objet aux bouts : 9 bornes espacées de 2 m. LT = … m", r: "20", nombre: true, unite: "m", expl: "9 + 1 = 10 intervalles ; 10 × 2 = 20 m." }
    ],
    [
      { t: "qcm", q: "Rue de 300 m, 31 arbres, un à chaque bout. Fatou calcule (300 : 31) − 1. Quel est le bon calcul ?", choix: ["300 : (31 − 1) = 10 m", "300 : 31 + 1", "300 − 31"], r: "300 : (31 − 1) = 10 m", expl: "On corrige d'abord le nombre d'intervalles (31 − 1 = 30), puis on divise : 300 : 30 = 10 m." },
      { t: "qcm", q: "Une haie de 48 m, 11 piquets, aucun aux extrémités. Combien mesure un intervalle ?", choix: ["4 m", "4,8 m", "4,36 m"], r: "4 m", expl: "11 + 1 = 12 intervalles ; 48 : 12 = 4 m." },
      { t: "vf", q: "Sur une ligne fermée de 100 m avec 20 piquets, et sur une ligne ouverte de 100 m avec 21 piquets dont un à chaque bout, l'intervalle est le même.", r: true, expl: "Fermée : 100 : 20 = 5 m. Ouverte : 21 − 1 = 20 intervalles, 100 : 20 = 5 m." },
      { t: "saisie", q: "Piste de 1 km, un poteau à chaque bout, 101 poteaux. LI = … m", r: "10", nombre: true, unite: "m", aide: "Convertis 1 km en mètres.", expl: "1 km = 1 000 m ; 101 − 1 = 100 intervalles ; 1 000 : 100 = 10 m." },
      { t: "saisie", q: "Clôture d'un champ carré de 40 m de côté, un piquet tous les 2 m. Nombre de piquets = …", r: "80", nombre: true, expl: "Périmètre : 40 × 4 = 160 m. Ligne fermée : NO = NI = 160 : 2 = 80 piquets." },
      { t: "saisie", q: "Rue de 90 m, un arbre à chaque bout, un arbre tous les 6 m. Nombre d'arbres = …", r: "16", nombre: true, expl: "90 : 6 = 15 intervalles ; un arbre à chaque bout : NO = 15 + 1 = 16 arbres." },
      { t: "trous", q: "Complète.", nombre: true, texte: "Ligne fermée, 300 m, 60 piquets → LI = [5] m — Ligne ouverte, un objet à chaque bout, 41 objets, 200 m → LI = [5] m — Ligne ouverte, rien aux bouts, 4 objets, LI = 3 m → LT = [15] m", expl: "300 : 60 = 5 ; 200 : (41 − 1) = 5 ; (4 + 1) × 3 = 15." }
    ],
    [
      { t: "probleme", q: "Un cultivateur plante des arbres sur les deux longueurs de son champ, espacés de 5 m. Il y a un arbre à chaque coin et 9 arbres sur chaque longueur. Trouve la longueur du champ.", etapes: [{ q: "Étape 1 : nombre d'intervalles sur une longueur", r: "8" }, { q: "Étape 2 : longueur du champ (en m)", r: "40", unite: "m" }], expl: "Ligne ouverte avec un arbre à chaque bout : 9 − 1 = 8 intervalles ; 8 × 5 = 40 m." },
      { t: "probleme", q: "Six enfants jouent à la chandelle. Ils sont assis en cercle et chaque intervalle mesure 1,5 m. Trouve la longueur du cercle.", etapes: [{ q: "Étape 1 : nombre d'intervalles", r: "6" }, { q: "Étape 2 : longueur du cercle (en m)", r: "9", unite: "m" }], expl: "Le cercle est une ligne fermée : 6 enfants, 6 intervalles ; 6 × 1,5 = 9 m." },
      { t: "probleme", q: "Pour protéger une parcelle rectangulaire de 140 m de périmètre, on l'entoure d'un grillage soutenu par 35 piquets. Chaque piquet coûte 750 F.", etapes: [{ q: "Étape 1 : longueur d'un intervalle (en m)", r: "4", unite: "m" }, { q: "Étape 2 : prix des piquets (en F)", r: "26250", unite: "F" }], expl: "Ligne fermée : 140 : 35 = 4 m ; 750 × 35 = 26 250 F." },
      { t: "probleme", q: "La mairie de Thiès plante des arbres des deux côtés d'une avenue de 450 m, avec un arbre à chaque extrémité et un arbre tous les 9 m.", etapes: [{ q: "Étape 1 : nombre d'intervalles d'un côté", r: "50" }, { q: "Étape 2 : nombre d'arbres d'un côté", r: "51" }, { q: "Étape 3 : nombre d'arbres en tout", r: "102" }], expl: "450 : 9 = 50 intervalles ; un arbre à chaque bout : 50 + 1 = 51 ; deux côtés : 51 × 2 = 102 arbres." },
      { t: "probleme", q: "Autour d'un terrain carré de 25 m de côté, on plante un poteau tous les 2,5 m.", etapes: [{ q: "Étape 1 : périmètre du terrain (en m)", r: "100", unite: "m" }, { q: "Étape 2 : nombre de poteaux", r: "40" }], expl: "25 × 4 = 100 m ; ligne fermée : NO = NI = 100 : 2,5 = 40 poteaux." }
    ]
  ]
});
