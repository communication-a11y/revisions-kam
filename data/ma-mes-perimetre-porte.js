// À VÉRIFIER : au cahier (photo 0084), l'exemple est écrit « 162 m + 2 m = 170 m » ; l'énoncé (photo 0083) donne 168 m de fil.
// Le module utilise le calcul juste : 168 m + 2 m = 170 m.
LECONS.push({
  id: "ma-mes-perimetre-porte",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre avec une porte connaissant la longueur de la clôture",
  date: "2026-10-19",
  photos: ["DJI_20261118221123_0083_D.jpg", "DJI_20261118221130_0084_D.jpg"],
  retiens:
    "<p>Cette fois, on connaît la longueur de la clôture et on cherche le <b>périmètre</b> du terrain. On fait le chemin inverse : on <b>rajoute</b> la porte.</p>" +
    "<p><b>A. Un rang avec une porte</b></p>" +
    "<p>Exemple : pour clôturer son terrain, un jardinier a utilisé 168 m de fil de fer, avec une porte de 2 m.<br>" +
    "168 m = longueur d'un rang ; 2 m = largeur de la porte.<br>Périmètre du terrain : 168 m + 2 m = 170 m</p>" +
    "<p><b>Périmètre = Longueur d'une rangée + Porte</b></p>" +
    "<p><b>B. Plusieurs rangs avec une porte</b></p>" +
    "<p>Exemple : un jardinier a utilisé 1 424 m de fil de fer, disposé en 4 rangées, pour sécuriser son verger. Il a aménagé une porte de 4 m.<br>" +
    "Longueur d'une rangée : 1 424 m : 4 = 356 m<br>Périmètre : 356 m + 4 m = 360 m</p>" +
    "<p><b>Périmètre = (Longueur de la clôture : nombre de rangées) + Porte</b></p>",
  astuce: "Clôture → périmètre : on fait les opérations <b>à l'envers</b>. On <b>divise</b> par le nombre de rangées, puis on <b>ajoute</b> la porte.",
  regle: "Périmètre = (longueur de la clôture : nombre de rangées) + porte. On divise d'abord, on ajoute la porte ensuite.",
  niveaux: [
    [
      { t: "qcm", q: "On connaît la longueur du fil (un seul rang) et la porte. Pour trouver le périmètre, on…", choix: ["ajoute la porte", "retire la porte", "multiplie par la porte"], r: "ajoute la porte", expl: "Le fil ne passe pas devant la porte : pour avoir le tour complet, on ajoute la porte." },
      { t: "qcm", q: "Avec 4 rangées de fil, comment trouve-t-on la longueur d'une rangée ?", choix: ["longueur totale du fil : 4", "longueur totale du fil × 4", "longueur totale du fil − 4"], r: "longueur totale du fil : 4", expl: "Les 4 rangées ont la même longueur : on partage en 4." },
      { t: "vf", q: "Le périmètre est plus grand que la longueur d'une rangée quand il y a une porte.", r: true, expl: "Périmètre = rangée + porte : il est plus grand de la largeur de la porte." },
      { t: "relier", q: "Relie chaque situation à sa formule.", paires: [["Un rang, une porte", "Rangée + Porte"], ["Plusieurs rangs, une porte", "(Clôture : rangées) + Porte"], ["Clôture connue du périmètre (leçon précédente)", "(Périmètre − Porte) × rangées"]], expl: "Pour trouver le périmètre, on fait le chemin inverse du calcul de la clôture." },
      { t: "saisie", q: "Un jardinier a utilisé 168 m de fil (un rang), avec une porte de 2 m. Périmètre = … m", r: "170", nombre: true, unite: "m", expl: "168 m + 2 m = 170 m." },
      { t: "classer", q: "Dans le problème du verger (1 424 m de fil, 4 rangées, porte de 4 m), range chaque opération.", cases: ["1re opération", "2e opération"], items: [["1 424 : 4 = 356", "1re opération"], ["356 + 4 = 360", "2e opération"]], expl: "On cherche d'abord la longueur d'une rangée, puis on ajoute la porte." }
    ],
    [
      { t: "saisie", q: "Un rang de 95 m de fil, porte de 5 m. Périmètre = … m", r: "100", nombre: true, unite: "m", expl: "95 + 5 = 100 m." },
      { t: "saisie", q: "Un rang de 237 m de grillage, porte de 3 m. Périmètre = … m", r: "240", nombre: true, unite: "m", expl: "237 + 3 = 240 m." },
      { t: "saisie", q: "1 424 m de fil en 4 rangées. Longueur d'une rangée = … m", r: "356", nombre: true, unite: "m", expl: "1 424 : 4 = 356 m." },
      { t: "saisie", q: "Rangée de 356 m, porte de 4 m. Périmètre = … m", r: "360", nombre: true, unite: "m", expl: "356 + 4 = 360 m." },
      { t: "saisie", q: "600 m de fil en 3 rangées, porte de 2 m. Périmètre = … m", r: "202", nombre: true, unite: "m", expl: "600 : 3 = 200 m ; 200 + 2 = 202 m." },
      { t: "saisie", q: "450 m de fil en 5 rangées, porte de 1,5 m. Périmètre = … m", r: "91,5", nombre: true, unite: "m", expl: "450 : 5 = 90 m ; 90 + 1,5 = 91,5 m." },
      { t: "saisie", q: "784 m de fil en 2 rangées, porte de 8 m. Périmètre = … m", r: "400", nombre: true, unite: "m", expl: "784 : 2 = 392 m ; 392 + 8 = 400 m." },
      { t: "trous", q: "Complète.", nombre: true, texte: "Un rang de 146 m + porte de 4 m = [150] m — 3 rangs : 297 m de fil → une rangée = [99] m → périmètre avec une porte de 1 m = [100] m", expl: "146 + 4 = 150 ; 297 : 3 = 99 ; 99 + 1 = 100." }
    ],
    [
      { t: "qcm", q: "900 m de fil en 3 rangées, porte de 3 m. Quel calcul donne le périmètre ?", choix: ["900 : 3 + 3", "900 + 3 : 3", "900 × 3 + 3", "(900 − 3) : 3"], r: "900 : 3 + 3", expl: "D'abord une rangée (900 : 3 = 300 m), puis on ajoute la porte : 303 m." },
      { t: "qcm", q: "Awa a 300 m de fil pour un seul rang et une porte de 5 m. Elle écrit : 300 − 5 = 295 m. A-t-elle raison ?", choix: ["Non, il faut ajouter la porte : 305 m.", "Oui, on retire toujours la porte.", "Non, il faut multiplier : 1 500 m."], r: "Non, il faut ajouter la porte : 305 m.", expl: "On cherche le périmètre à partir de la clôture : on ajoute la porte. On la retire seulement quand on cherche la clôture à partir du périmètre." },
      { t: "vf", q: "Sans porte et avec un seul rang, le périmètre est égal à la longueur du fil.", r: true, expl: "Rien à ajouter : le fil fait exactement le tour." },
      { t: "saisie", q: "1,2 km de fil en 4 rangées, porte de 2 m. Périmètre = … m", r: "302", nombre: true, unite: "m", aide: "Convertis 1,2 km en mètres.", expl: "1,2 km = 1 200 m ; 1 200 : 4 = 300 m ; 300 + 2 = 302 m." },
      { t: "saisie", q: "Un champ carré est clôturé avec un rang de 196 m de fil et une porte de 4 m. Côté du champ = … m", r: "50", nombre: true, unite: "m", expl: "Périmètre : 196 + 4 = 200 m ; côté : 200 : 4 = 50 m." },
      { t: "saisie", q: "Un enclos est clôturé avec 3 rangées : 357 m de fil, porte de 1 m. Périmètre = … m", r: "120", nombre: true, unite: "m", expl: "357 : 3 = 119 m ; 119 + 1 = 120 m." }
    ],
    [
      { t: "probleme", q: "Ali a utilisé 594 m de fil de fer pour clôturer son champ carré avec 3 rangées, en laissant une entrée de 2 m.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "198", unite: "m" }, { q: "Étape 2 : périmètre du champ (en m)", r: "200", unite: "m" }, { q: "Étape 3 : côté du champ (en m)", r: "50", unite: "m" }], expl: "594 : 3 = 198 m ; 198 + 2 = 200 m ; 200 : 4 = 50 m." },
      { t: "probleme", q: "Un jardinier a posé 1 160 m de fil en 4 rangées autour d'un jardin rectangulaire, avec une porte de 10 m. Le jardin mesure 90 m de long.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "290", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "300", unite: "m" }, { q: "Étape 3 : demi-périmètre (en m)", r: "150", unite: "m" }, { q: "Étape 4 : largeur du jardin (en m)", r: "60", unite: "m" }], expl: "1 160 : 4 = 290 m ; 290 + 10 = 300 m ; 300 : 2 = 150 m ; 150 − 90 = 60 m." },
      { t: "probleme", q: "Moussa a utilisé 316 m de fil en 2 rangées pour clôturer un poulailler carré, avec une porte de 2 m.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "158", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "160", unite: "m" }, { q: "Étape 3 : côté du poulailler (en m)", r: "40", unite: "m" }], expl: "316 : 2 = 158 m ; 158 + 2 = 160 m ; 160 : 4 = 40 m." },
      { t: "probleme", q: "Pour son verger de Saint-Louis, un cultivateur a utilisé 2 385 m de fil en 5 rangées, avec un portail de 3 m.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "477", unite: "m" }, { q: "Étape 2 : périmètre du verger (en m)", r: "480", unite: "m" }], expl: "2 385 : 5 = 477 m ; 477 + 3 = 480 m." },
      { t: "qcm", q: "Un terrain est clôturé avec 3 rangées de fil et une porte de 4 m. On a utilisé 1 488 m de fil. Quel est le périmètre ?", choix: ["500 m", "496 m", "1 492 m", "4 468 m"], r: "500 m", expl: "1 488 : 3 = 496 m ; 496 + 4 = 500 m." }
    ]
  ]
});
