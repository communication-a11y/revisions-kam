// À VÉRIFIER : le bas de la photo 0095 (titre et définition de l'échelle) est flou. Le titre est reconstitué d'après la photo 0096 ;
// la définition est reformulée simplement, sans recopier la phrase incertaine du cahier.
LECONS.push({
  id: "ma-mes-echelle-dimensions",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Dimension réelle et dimension sur le plan (échelle)",
  date: "2026-11-16",
  photos: ["DJI_20261118221240_0095_D.jpg", "DJI_20261118221246_0096_D.jpg", "DJI_20261118221252_0097_D.jpg"],
  retiens:
    "<p>Sur un plan ou une carte, les objets sont dessinés plus petits qu'en réalité. L'<b>échelle</b> indique de combien ils ont été réduits. Elle s'écrit sous forme d'une <b>fraction</b> : 1/10 ; 1/100 ; 1/1 000…</p>" +
    "<p>Si j'écris <b>1/100</b>, cela signifie que <b>1 cm sur le plan représente 100 cm dans la réalité</b>. Le numérateur de l'échelle est toujours égal à 1.</p>" +
    "<p><b>1. Calcul de la dimension réelle</b></p>" +
    "<p><b>Dimension réelle = dimension sur le plan × dénominateur de l'échelle</b></p>" +
    "<p>Exemple : sur un plan à l'échelle 1/2 000, une rue mesure 9 mm. Dimension réelle : 9 mm × 2 000 = 18 000 mm, soit 18 m.</p>" +
    "<p><b>2. Calcul de la dimension sur le plan</b> (on dit aussi dimension réduite)</p>" +
    "<p><b>Dimension sur le plan = dimension réelle convertie : dénominateur de l'échelle</b></p>" +
    "<p>Exemple : la distance entre Dakar et Thiès est de 70 km. On la représente à l'échelle 1/1 000 000.<br>" +
    "On convertit : 70 km = 7 000 000 cm. Dimension sur le plan : 7 000 000 cm : 1 000 000 = 7 cm.</p>",
  astuce: "Du plan vers la réalité, on <b>agrandit</b> : on multiplie. De la réalité vers le plan, on <b>réduit</b> : on divise. Le résultat garde l'unité de départ ; on convertit ensuite si besoin.",
  regle: "Dimension réelle = dimension sur le plan × dénominateur ; dimension sur le plan = dimension réelle (convertie) : dénominateur.",
  niveaux: [
    [
      { t: "qcm", q: "À l'échelle 1/100, 1 cm sur le plan représente…", choix: ["100 cm dans la réalité", "1 cm dans la réalité", "100 m dans la réalité"], r: "100 cm dans la réalité", expl: "Le dénominateur dit combien de fois la réalité est plus grande : 1 cm → 100 cm." },
      { t: "qcm", q: "Le numérateur d'une échelle est toujours…", choix: ["1", "10", "100"], r: "1", expl: "Une échelle s'écrit 1/10, 1/100, 1/1 000… : le numérateur vaut 1." },
      { t: "qcm", q: "Pour trouver la dimension réelle, on…", choix: ["multiplie la dimension sur le plan par le dénominateur", "divise la dimension sur le plan par le dénominateur", "ajoute le dénominateur"], r: "multiplie la dimension sur le plan par le dénominateur", expl: "La réalité est plus grande que le plan : on multiplie." },
      { t: "qcm", q: "Pour trouver la dimension sur le plan, on…", choix: ["divise la dimension réelle par le dénominateur", "multiplie la dimension réelle par le dénominateur", "retire le dénominateur"], r: "divise la dimension réelle par le dénominateur", expl: "Le plan est plus petit que la réalité : on divise." },
      { t: "vf", q: "Sur un plan, une maison est dessinée plus petite qu'en réalité.", r: true, expl: "C'est le rôle de l'échelle : réduire pour faire tenir l'objet sur la feuille." },
      { t: "relier", q: "Relie chaque échelle à sa signification.", paires: [["1/10", "1 cm pour 10 cm"], ["1/100", "1 cm pour 100 cm"], ["1/1 000", "1 cm pour 1 000 cm"]], expl: "Le dénominateur indique la longueur réelle représentée par 1 cm du plan." }
    ],
    [
      { t: "saisie", q: "Échelle 1/100. Sur le plan : 5 cm. Dimension réelle = … cm", r: "500", nombre: true, unite: "cm", expl: "5 × 100 = 500 cm (soit 5 m)." },
      { t: "saisie", q: "Échelle 1/1 000. Sur le plan : 4 cm. Dimension réelle = … m", r: "40", nombre: true, unite: "m", expl: "4 × 1 000 = 4 000 cm = 40 m." },
      { t: "saisie", q: "Échelle 1/200. Sur le plan : 3 cm. Dimension réelle = … m", r: "6", nombre: true, unite: "m", expl: "3 × 200 = 600 cm = 6 m." },
      { t: "saisie", q: "Échelle 1/2 000. Une rue mesure 9 mm sur le plan. Dimension réelle = … m", r: "18", nombre: true, unite: "m", expl: "9 × 2 000 = 18 000 mm = 18 m." },
      { t: "saisie", q: "Échelle 1/50. Sur le plan : 8 cm. Dimension réelle = … m", r: "4", nombre: true, unite: "m", expl: "8 × 50 = 400 cm = 4 m." },
      { t: "saisie", q: "Échelle 1/100. Dimension réelle : 20 m = 2 000 cm. Dimension sur le plan = … cm", r: "20", nombre: true, unite: "cm", expl: "2 000 : 100 = 20 cm." },
      { t: "saisie", q: "Échelle 1/1 000. Dimension réelle : 50 m. Dimension sur le plan = … cm", r: "5", nombre: true, unite: "cm", aide: "Convertis d'abord 50 m en cm.", expl: "50 m = 5 000 cm ; 5 000 : 1 000 = 5 cm." },
      { t: "saisie", q: "Dakar–Thiès : 70 km, échelle 1/1 000 000. 70 km = 7 000 000 cm. Dimension sur le plan = … cm", r: "7", nombre: true, unite: "cm", expl: "7 000 000 : 1 000 000 = 7 cm." }
    ],
    [
      { t: "saisie", q: "Échelle 1/500. Sur le plan : 12 mm. Dimension réelle = … m", r: "6", nombre: true, unite: "m", expl: "12 × 500 = 6 000 mm = 6 m." },
      { t: "saisie", q: "Échelle 1/100 000. Dimension réelle : 3 km. Dimension sur le plan = … cm", r: "3", nombre: true, unite: "cm", expl: "3 km = 300 000 cm ; 300 000 : 100 000 = 3 cm." },
      { t: "qcm", q: "Moussa veut placer sur un plan au 1/1 000 un mur de 30 m. Il écrit 30 : 1 000 = 0,03. Quelle est son erreur ?", choix: ["Il n'a pas converti 30 m en cm : 3 000 cm : 1 000 = 3 cm.", "Il fallait multiplier.", "Il n'y a pas d'erreur."], r: "Il n'a pas converti 30 m en cm : 3 000 cm : 1 000 = 3 cm.", expl: "On convertit la dimension réelle avant de diviser ; ici en cm, l'unité du plan." },
      { t: "vf", q: "À l'échelle 1/1 000, un plan est plus réduit qu'à l'échelle 1/100.", r: true, expl: "Au 1/1 000, 1 cm représente 1 000 cm ; au 1/100, seulement 100 cm. Plus le dénominateur est grand, plus le dessin est réduit." },
      { t: "saisie", q: "Carte au 1/500 000. Deux villages sont à 4 cm l'un de l'autre. Distance réelle = … km", r: "20", nombre: true, unite: "km", expl: "4 × 500 000 = 2 000 000 cm = 20 km." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1/100 : 7 cm sur le plan → [7] m en réalité — 1/1 000 : 25 m en réalité → [2,5|2.5] cm sur le plan — 1/200 : 10 cm sur le plan → [20] m en réalité", expl: "7 × 100 = 700 cm = 7 m ; 2 500 cm : 1 000 = 2,5 cm ; 10 × 200 = 2 000 cm = 20 m." }
    ],
    [
      { t: "probleme", q: "Sur le plan d'une maison à l'échelle 1/50, la chambre de Khady mesure 10 cm sur 8 cm.", etapes: [{ q: "Étape 1 : longueur réelle (en m)", r: "5", unite: "m" }, { q: "Étape 2 : largeur réelle (en m)", r: "4", unite: "m" }, { q: "Étape 3 : périmètre réel de la chambre (en m)", r: "18", unite: "m" }], expl: "10 × 50 = 500 cm = 5 m ; 8 × 50 = 400 cm = 4 m ; (5 + 4) × 2 = 18 m." },
      { t: "probleme", q: "On veut dessiner un terrain rectangulaire de 30 m sur 20 m sur un plan à l'échelle 1/500.", etapes: [{ q: "Étape 1 : longueur sur le plan (en cm)", r: "6", unite: "cm" }, { q: "Étape 2 : largeur sur le plan (en cm)", r: "4", unite: "cm" }], expl: "30 m = 3 000 cm ; 3 000 : 500 = 6 cm. 20 m = 2 000 cm ; 2 000 : 500 = 4 cm." },
      { t: "probleme", q: "Sur une carte au 1/1 000 000, la route de Dakar à Saint-Louis mesure 26 cm.", etapes: [{ q: "Étape 1 : distance réelle en cm", r: "26000000", unite: "cm" }, { q: "Étape 2 : distance réelle en km", r: "260", unite: "km" }], expl: "26 × 1 000 000 = 26 000 000 cm = 260 km." },
      { t: "probleme", q: "La distance entre Dakar et Thiès est de 70 km. Elle est représentée à l'échelle 1/1 000 000. Trouve sa dimension sur le plan.", etapes: [{ q: "Étape 1 : 70 km en cm", r: "7000000", unite: "cm" }, { q: "Étape 2 : dimension sur le plan (en cm)", r: "7", unite: "cm" }], expl: "70 km = 7 000 000 cm ; 7 000 000 : 1 000 000 = 7 cm." },
      { t: "qcm", q: "Sur un plan au 1/200, la cour de l'école mesure 15 cm de long. Quelle est sa longueur réelle ?", choix: ["30 m", "3 m", "300 m", "15 m"], r: "30 m", expl: "15 × 200 = 3 000 cm = 30 m." }
    ]
  ]
});
