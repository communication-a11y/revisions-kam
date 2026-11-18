// À VÉRIFIER : au cahier (photo 0098), la formule est recopiée à l'envers : « Échelle = Dimension réelle (convertie) / Dimension sur le plan ».
// Le module enseigne : Échelle = dimension sur le plan / dimension réelle (mêmes unités). Le résultat de l'exemple du cahier (1/2 000) reste juste.
LECONS.push({
  id: "ma-mes-calcul-echelle",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul de l'échelle",
  date: "2026-11-18",
  photos: ["DJI_20261118221301_0098_D.jpg"],
  retiens:
    "<p><b>Échelle = dimension sur le plan / dimension réelle</b>, les deux dimensions étant exprimées <b>dans la même unité</b>.</p>" +
    "<p>Comme le numérateur d'une échelle vaut 1, on procède ainsi :</p>" +
    "<ul><li>on convertit la dimension réelle dans l'unité du plan ;</li>" +
    "<li>on divise la dimension réelle par la dimension sur le plan : on obtient le <b>dénominateur</b> ;</li>" +
    "<li>on écrit l'échelle : 1/dénominateur.</li></ul>" +
    "<p>Exemple : ton père veut connaître le périmètre de son jardin, qui mesure 60 mm sur 40 mm sur le plan. Il ignore l'échelle ; il mesure la longueur réelle et trouve 120 m.<br>" +
    "On convertit : 120 m = 120 000 mm.<br>120 000 : 60 = 2 000<br>L'échelle est <b>1/2 000</b>.</p>",
  astuce: "Pose-toi la question : « 1 mm (ou 1 cm) du plan représente combien dans la réalité ? » La réponse, c'est le dénominateur.",
  regle: "Échelle = dimension sur le plan / dimension réelle, dans la même unité. Le dénominateur = dimension réelle convertie : dimension sur le plan.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle formule donne l'échelle ?", choix: ["dimension sur le plan / dimension réelle", "dimension réelle / dimension sur le plan", "dimension réelle × dimension sur le plan"], r: "dimension sur le plan / dimension réelle", expl: "Le plan est au numérateur, la réalité au dénominateur : c'est pour cela qu'on obtient 1/100, 1/1 000…" },
      { t: "vf", q: "Avant de calculer l'échelle, il faut mettre les deux dimensions dans la même unité.", r: true, expl: "On ne peut comparer que des longueurs exprimées dans la même unité." },
      { t: "qcm", q: "Sur le plan : 1 cm. En réalité : 100 cm. L'échelle est…", choix: ["1/100", "100/1", "1/10"], r: "1/100", expl: "1 cm du plan pour 100 cm réels : 1/100." },
      { t: "qcm", q: "Sur le plan : 60 mm. En réalité : 120 000 mm. Quel calcul donne le dénominateur ?", choix: ["120 000 : 60", "60 : 120 000", "120 000 × 60", "120 000 − 60"], r: "120 000 : 60", expl: "120 000 : 60 = 2 000 : l'échelle est 1/2 000." },
      { t: "relier", q: "Relie chaque situation à son échelle.", paires: [["1 cm pour 10 cm", "1/10"], ["1 cm pour 50 cm", "1/50"], ["1 cm pour 1 000 cm", "1/1 000"], ["1 mm pour 2 000 mm", "1/2 000"]], expl: "Le dénominateur est la longueur réelle représentée par une unité du plan." },
      { t: "saisie", q: "Plan : 5 cm. Réalité : 500 cm. Échelle = 1/…", r: "100", nombre: true, expl: "500 : 5 = 100 : l'échelle est 1/100." }
    ],
    [
      { t: "saisie", q: "Plan : 4 cm. Réalité : 40 m = 4 000 cm. Échelle = 1/…", r: "1000", nombre: true, expl: "4 000 : 4 = 1 000 : l'échelle est 1/1 000." },
      { t: "saisie", q: "Plan : 8 cm. Réalité : 4 m. Échelle = 1/…", r: "50", nombre: true, aide: "4 m = 400 cm.", expl: "4 m = 400 cm ; 400 : 8 = 50 : l'échelle est 1/50." },
      { t: "saisie", q: "Plan : 6 cm. Réalité : 120 m. Échelle = 1/…", r: "2000", nombre: true, expl: "120 m = 12 000 cm ; 12 000 : 6 = 2 000 : l'échelle est 1/2 000." },
      { t: "saisie", q: "Plan : 25 mm. Réalité : 50 m. Échelle = 1/…", r: "2000", nombre: true, expl: "50 m = 50 000 mm ; 50 000 : 25 = 2 000 : l'échelle est 1/2 000." },
      { t: "saisie", q: "Plan : 2 cm. Réalité : 1 km. Échelle = 1/…", r: "50000", nombre: true, expl: "1 km = 100 000 cm ; 100 000 : 2 = 50 000 : l'échelle est 1/50 000." },
      { t: "saisie", q: "Plan : 10 cm. Réalité : 20 m. Échelle = 1/…", r: "200", nombre: true, expl: "20 m = 2 000 cm ; 2 000 : 10 = 200 : l'échelle est 1/200." },
      { t: "saisie", q: "Plan : 7 cm. Réalité : 70 km (Dakar–Thiès). Échelle = 1/…", r: "1000000", nombre: true, expl: "70 km = 7 000 000 cm ; 7 000 000 : 7 = 1 000 000 : l'échelle est 1/1 000 000." },
      { t: "trous", q: "Complète les conversions avant le calcul.", nombre: true, texte: "120 m = [120000] mm — 40 m = [4000] cm — 3 km = [300000] cm", expl: "1 m = 1 000 mm = 100 cm ; 1 km = 100 000 cm." }
    ],
    [
      { t: "qcm", q: "Plan : 60 mm. Réalité : 120 m. Awa écrit 120 : 60 = 2, donc l'échelle est 1/2. Quelle est son erreur ?", choix: ["Elle n'a pas converti : 120 m = 120 000 mm, l'échelle est 1/2 000.", "Il fallait faire 60 : 120.", "Il n'y a pas d'erreur."], r: "Elle n'a pas converti : 120 m = 120 000 mm, l'échelle est 1/2 000.", expl: "Les deux dimensions doivent être dans la même unité avant la division." },
      { t: "qcm", q: "Fatou écrit l'échelle « 2 000/1 ». Pourquoi est-ce faux ?", choix: ["Le numérateur d'une échelle vaut toujours 1 : c'est 1/2 000.", "Il fallait écrire 1/20.", "C'est juste."], r: "Le numérateur d'une échelle vaut toujours 1 : c'est 1/2 000.", expl: "Échelle = plan / réalité : le plan est le plus petit, il est au numérateur." },
      { t: "saisie", q: "Plan : 3 cm. Réalité : 15 km. Échelle = 1/…", r: "500000", nombre: true, expl: "15 km = 1 500 000 cm ; 1 500 000 : 3 = 500 000 : l'échelle est 1/500 000." },
      { t: "saisie", q: "Plan : 12 cm. Réalité : 6 m. Échelle = 1/…", r: "50", nombre: true, expl: "6 m = 600 cm ; 600 : 12 = 50 : l'échelle est 1/50." },
      { t: "vf", q: "Un plan au 1/50 et un plan au 1/5 000 : le second représente les objets plus petits.", r: true, expl: "Au 1/5 000, 1 cm représente 5 000 cm : le dessin est beaucoup plus réduit." },
      { t: "saisie", q: "Une pirogue de 15 m est dessinée par un trait de 3 cm. Échelle = 1/…", r: "500", nombre: true, expl: "15 m = 1 500 cm ; 1 500 : 3 = 500 : l'échelle est 1/500." }
    ],
    [
      { t: "probleme", q: "Ton père veut connaître le périmètre de son jardin, qui mesure 60 mm sur 40 mm sur le plan. Il mesure la longueur réelle et trouve 120 m.", etapes: [{ q: "Étape 1 : 120 m en mm", r: "120000", unite: "mm" }, { q: "Étape 2 : dénominateur de l'échelle (échelle = 1/…)", r: "2000" }, { q: "Étape 3 : largeur réelle (en m)", r: "80", unite: "m" }, { q: "Étape 4 : périmètre réel du jardin (en m)", r: "400", unite: "m" }], expl: "120 m = 120 000 mm ; 120 000 : 60 = 2 000, échelle 1/2 000 ; largeur : 40 × 2 000 = 80 000 mm = 80 m ; périmètre : (120 + 80) × 2 = 400 m." },
      { t: "probleme", q: "Sur un plan, la cour de l'école mesure 9 cm. En réalité, elle mesure 45 m. Sur le même plan, le préau mesure 2 cm.", etapes: [{ q: "Étape 1 : dénominateur de l'échelle (1/…)", r: "500" }, { q: "Étape 2 : longueur réelle du préau (en m)", r: "10", unite: "m" }], expl: "45 m = 4 500 cm ; 4 500 : 9 = 500, échelle 1/500 ; préau : 2 × 500 = 1 000 cm = 10 m." },
      { t: "probleme", q: "Sur une carte, Dakar et Thiès (70 km) sont à 7 cm l'une de l'autre. Sur la même carte, Dakar et Mbour sont à 8 cm.", etapes: [{ q: "Étape 1 : dénominateur de l'échelle (1/…)", r: "1000000" }, { q: "Étape 2 : distance réelle Dakar–Mbour (en km)", r: "80", unite: "km" }], expl: "70 km = 7 000 000 cm ; 7 000 000 : 7 = 1 000 000 ; 8 × 1 000 000 = 8 000 000 cm = 80 km." },
      { t: "probleme", q: "Sur le plan d'une maison, la chambre de Mamadou mesure 8 cm de long. En réalité, elle mesure 4 m. Le salon mesure 14 cm sur ce plan.", etapes: [{ q: "Étape 1 : dénominateur de l'échelle (1/…)", r: "50" }, { q: "Étape 2 : longueur réelle du salon (en m)", r: "7", unite: "m" }], expl: "4 m = 400 cm ; 400 : 8 = 50 ; salon : 14 × 50 = 700 cm = 7 m." },
      { t: "qcm", q: "Un terrain de football de 100 m est dessiné par un trait de 5 cm. Quelle est l'échelle ?", choix: ["1/2 000", "1/20", "1/200", "1/20 000"], r: "1/2 000", expl: "100 m = 10 000 cm ; 10 000 : 5 = 2 000 : l'échelle est 1/2 000." }
    ]
  ]
});
