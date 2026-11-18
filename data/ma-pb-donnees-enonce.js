LECONS.push({
  id: "ma-pb-donnees-enonce",
  cahier: "maths",
  matiere: "Résolution de problèmes",
  titre: "Les types de données d'un énoncé",
  date: "2026-09-18",
  photos: ["DJI_20261118220759_0063_D.jpg"],
  retiens:
    "<ul><li>On appelle <b>donnée utile</b> toute donnée qui participe à la résolution d'un problème.</li><li>On appelle <b>donnée inutile</b> toute donnée qui ne participe ni au raisonnement, ni à la résolution d'un problème.</li><li>Une <b>donnée manquante</b> est une donnée inconnue qui rend impossible la résolution d'un problème.</li></ul>" +
    "<p>Exemple : « Awa, 11 ans, achète 3 cahiers à 250 F l'un. Combien dépense-t-elle ? »<br>Données utiles : 3 cahiers, 250 F. Donnée inutile : 11 ans.</p>",
  astuce: "Lis d'abord la <b>question</b>, puis demande-toi pour chaque nombre : « Est-ce que j'en ai besoin pour répondre ? »",
  regle: "Une donnée utile sert à résoudre le problème ; une donnée inutile ne sert pas ; une donnée manquante empêche de le résoudre.",
  niveaux: [
    [
      { t: "qcm", q: "Une donnée utile est une donnée qui…", choix: ["participe à la résolution du problème", "ne sert à rien", "manque dans l'énoncé"], r: "participe à la résolution du problème", expl: "Une donnée utile participe à la résolution du problème." },
      { t: "qcm", q: "Une donnée inutile est une donnée qui…", choix: ["ne participe ni au raisonnement ni à la résolution", "permet de trouver la réponse", "rend le problème impossible"], r: "ne participe ni au raisonnement ni à la résolution", expl: "On peut l'enlever : on trouve quand même la réponse." },
      { t: "qcm", q: "Une donnée manquante…", choix: ["rend impossible la résolution du problème", "est écrite deux fois", "est toujours un prix"], r: "rend impossible la résolution du problème", expl: "Sans elle, on ne peut pas résoudre le problème." },
      { t: "relier", q: "Relie chaque type de donnée à sa définition.", paires: [["donnée utile", "elle sert à résoudre"], ["donnée inutile", "elle ne sert pas"], ["donnée manquante", "elle est absente : on ne peut pas résoudre"]], expl: "Utile, inutile, manquante : ce sont les trois types de données." },
      { t: "vf", q: "« Awa, 11 ans, achète 3 cahiers à 250 F l'un. Combien dépense-t-elle ? » L'âge d'Awa est une donnée inutile.", r: true, expl: "L'âge ne sert pas à calculer la dépense." },
      { t: "vf", q: "Dans ce même problème, « 250 F » est une donnée utile.", r: true, expl: "Il faut le prix d'un cahier pour calculer la dépense : 250 F × 3 = 750 F." }
    ],
    [
      { t: "classer", q: "« Moussa a 10 ans. Il habite à Pikine. Il a 35 billes rouges et 20 billes bleues. Combien de billes a-t-il ? » Range chaque donnée.", cases: ["donnée utile", "donnée inutile"], items: [["35 billes rouges", "donnée utile"], ["20 billes bleues", "donnée utile"], ["il habite à Pikine", "donnée inutile"], ["il a 10 ans", "donnée inutile"]], expl: "Pour trouver le nombre de billes, il faut seulement 35 et 20 : 35 + 20 = 55." },
      { t: "qcm", q: "« Fatou achète 4 kg de sucre. Combien paie-t-elle ? » Quelle donnée manque ?", choix: ["le prix d'un kilo de sucre", "la masse du sucre", "le nom de la vendeuse"], r: "le prix d'un kilo de sucre", expl: "Sans le prix d'un kilo, on ne peut pas calculer : c'est une donnée manquante." },
      { t: "qcm", q: "« Un car de 60 places part de Dakar à 7 h avec 45 passagers. Combien de places restent libres ? » Quelle donnée est inutile ?", choix: ["7 h", "60 places", "45 passagers"], r: "7 h", expl: "L'heure de départ ne sert pas au calcul : 60 − 45." },
      { t: "saisie", q: "Résous le problème du car : combien de places restent libres ?", r: "15", expl: "60 − 45 = 15 places libres." },
      { t: "qcm", q: "« Khady a 2 000 F. Elle achète du pain et du lait. Combien lui reste-t-il ? » Que remarques-tu ?", choix: ["Il manque des données : le prix du pain et celui du lait", "Toutes les données sont là", "2 000 F est une donnée inutile"], r: "Il manque des données : le prix du pain et celui du lait", expl: "Sans ces prix, on ne peut pas calculer ce qui reste." },
      { t: "classer", q: "« Un lundi, Ibrahima, élève de CM2, achète un sac de riz de 50 kg à 17 500 F et une bouteille d'huile de 5 l à 6 000 F. Combien a-t-il dépensé ? » Range chaque donnée.", cases: ["donnée utile", "donnée inutile"], items: [["17 500 F", "donnée utile"], ["6 000 F", "donnée utile"], ["50 kg", "donnée inutile"], ["5 l", "donnée inutile"], ["un lundi", "donnée inutile"], ["élève de CM2", "donnée inutile"]], expl: "Pour la dépense, seuls les prix comptent : 17 500 + 6 000." },
      { t: "saisie", q: "Résous le problème d'Ibrahima : combien a-t-il dépensé ?", r: ["23 500", "23500", "23.500"], expl: "17 500 + 6 000 = 23 500 F.", unite: "F" },
      { t: "vf", q: "Une donnée inutile peut être un nombre.", r: true, expl: "Oui : dans le problème d'Ibrahima, 50 kg et 5 l sont des nombres, mais ils ne servent pas." },
      { t: "classer", q: "Peut-on résoudre ce problème ?", cases: ["on peut le résoudre", "il manque une donnée"], items: [["Awa a 500 F. Elle dépense 200 F. Combien lui reste-t-il ?", "on peut le résoudre"], ["Moussa achète 6 mangues. Combien paie-t-il ?", "il manque une donnée"], ["Une classe a 25 filles et 22 garçons. Combien d'élèves a-t-elle ?", "on peut le résoudre"], ["Un bus transporte des passagers. Combien descendent à Thiès ?", "il manque une donnée"]], expl: "Pour Moussa, il manque le prix d'une mangue ; pour le bus, il manque le nombre de passagers qui descendent." }
    ],
    [
      { t: "qcm", q: "« Le père de Mamadou a 42 ans. Il achète 3 sacs de ciment à 4 500 F le sac. Combien paie-t-il ? » Combien y a-t-il de données utiles ?", choix: ["2", "3", "1"], r: "2", expl: "3 sacs et 4 500 F sont utiles ; 42 ans est inutile." },
      { t: "saisie", q: "Résous ce problème : combien paie le père de Mamadou ?", r: ["13 500", "13500", "13.500"], expl: "4 500 F × 3 = 13 500 F.", unite: "F" },
      { t: "vf", q: "Si une donnée manque, on peut quand même trouver la réponse en devinant.", r: false, expl: "Une donnée manquante rend la résolution impossible : on ne devine pas en maths." },
      { t: "qcm", q: "« Un marchand a 120 œufs. Il en casse 8, puis vend les autres à 100 F l'œuf. Combien gagne-t-il ? » Quelles données sont utiles ?", choix: ["120 œufs, 8 œufs cassés et 100 F", "seulement 120 œufs et 100 F", "seulement 8 et 100 F"], r: "120 œufs, 8 œufs cassés et 100 F", expl: "Il faut enlever les œufs cassés : les trois données sont utiles." },
      { t: "saisie", q: "Résous le problème du marchand d'œufs : combien gagne-t-il ?", r: ["11 200", "11200", "11.200"], expl: "120 − 8 = 112 œufs ; 112 × 100 = 11 200 F.", unite: "F" },
      { t: "classer", q: "« Aïssatou a 10 ans. Pour sa fête, elle invite 12 amies. Au marché de Colobane, elle achète 3 bouteilles de jus à 1 000 F et un gâteau à 5 500 F. Combien dépense-t-elle ? » Range chaque donnée.", cases: ["donnée utile", "donnée inutile"], items: [["3 bouteilles", "donnée utile"], ["1 000 F", "donnée utile"], ["5 500 F", "donnée utile"], ["10 ans", "donnée inutile"], ["12 amies", "donnée inutile"], ["Colobane", "donnée inutile"]], expl: "Pour la dépense, il faut le nombre de bouteilles, leur prix et le prix du gâteau." },
      { t: "qcm", q: "Dans le problème d'Aïssatou, quelle question rendrait la donnée « 12 amies » utile ?", choix: ["Combien de personnes seront à la fête avec Aïssatou ?", "Combien coûte le gâteau ?", "Où se trouve le marché ?"], r: "Combien de personnes seront à la fête avec Aïssatou ?", expl: "Une donnée est utile ou inutile selon la question posée : ici, 12 + 1 = 13 personnes." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Aïssatou a 10 ans. Pour sa fête, elle invite 12 amies. Elle achète 3 bouteilles de jus à 1 000 F et un gâteau à 5 500 F. Combien dépense-t-elle ? »", etapes: [{ q: "Prix des bouteilles de jus :", r: "3000", unite: "F" }, { q: "Dépense totale :", r: "8500", unite: "F" }], expl: "1 000 × 3 = 3 000 F ; 3 000 + 5 500 = 8 500 F. L'âge et le nombre d'amies sont inutiles." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Un car de 70 places conduit par Modou part de Thiès à 8 h avec 52 passagers. À Rufisque, 13 passagers descendent et 6 montent. Combien de passagers arrivent à Dakar ? »", etapes: [{ q: "Passagers après la descente de Rufisque :", r: "39" }, { q: "Passagers à l'arrivée à Dakar :", r: "45" }], expl: "52 − 13 = 39 ; 39 + 6 = 45. Inutiles : 70 places, Modou, 8 h." },
      { t: "qcm", q: "« Moussa range ses livres sur 4 étagères. Combien de livres a-t-il ? » Quelle donnée manque ?", choix: ["le nombre de livres sur chaque étagère", "la couleur des étagères", "l'âge de Moussa"], r: "le nombre de livres sur chaque étagère", expl: "Sans savoir combien il y a de livres par étagère, on ne peut pas répondre." },
      { t: "qcm", q: "« Awa achète 5 pagnes. Combien paie-t-elle ? » Que faut-il ajouter pour pouvoir résoudre ?", choix: ["le prix d'un pagne", "l'âge d'Awa", "la couleur des pagnes"], r: "le prix d'un pagne", expl: "Le prix d'un pagne est la donnée manquante." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "On complète le problème : « Awa achète 5 pagnes à 3 500 F l'un. Elle paie avec 20 000 F. Combien lui rend-on ? »", etapes: [{ q: "Prix des 5 pagnes :", r: "17500", unite: "F" }, { q: "Somme rendue à Awa :", r: "2500", unite: "F" }], expl: "3 500 × 5 = 17 500 F ; 20 000 − 17 500 = 2 500 F." }
    ]
  ]
});
