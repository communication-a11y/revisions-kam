LECONS.push({
  id: "ma-pb-types-questions",
  cahier: "maths",
  matiere: "Résolution de problèmes",
  titre: "Les types de questions d'un énoncé",
  date: "2026-09-25",
  photos: ["DJI_20261118220845_0068_D.jpg"],
  retiens:
    "<ul><li>On appelle <b>questions intermédiaires</b> les questions cachées ou posées dans un énoncé et qui mènent à une question finale.</li><li>La <b>question finale</b> termine la résolution d'un problème.</li></ul>" +
    "<p>Exemple : « Moussa achète 3 cahiers à 250 F l'un et un stylo à 150 F. Il paie avec un billet de 1 000 F. Combien lui rend-on ? »</p>" +
    "<table><tr><th>question</th><th>type</th><th>réponse</th></tr>" +
    "<tr><td>Combien coûtent les 3 cahiers ?</td><td>intermédiaire (cachée)</td><td>250 F × 3 = 750 F</td></tr>" +
    "<tr><td>Combien Moussa dépense-t-il en tout ?</td><td>intermédiaire (cachée)</td><td>750 F + 150 F = 900 F</td></tr>" +
    "<tr><td>Combien lui rend-on ?</td><td>finale</td><td>1 000 F − 900 F = 100 F</td></tr>" +
    "</table>",
  astuce: "Avant de calculer, demande-toi : « Qu'est-ce que je dois savoir d'abord pour répondre à la dernière question ? » Ce sont les questions intermédiaires.",
  regle: "Les questions intermédiaires (posées ou cachées) mènent à la question finale ; la question finale termine la résolution du problème.",
  niveaux: [
    [
      { t: "qcm", q: "Une question intermédiaire…", choix: ["mène à la question finale", "termine le problème", "ne sert à rien"], r: "mène à la question finale", expl: "Les questions intermédiaires sont des étapes vers la question finale." },
      { t: "qcm", q: "La question finale…", choix: ["termine la résolution du problème", "est toujours la première", "est toujours cachée"], r: "termine la résolution du problème", expl: "C'est la dernière question : sa réponse termine le problème." },
      { t: "vf", q: "Une question intermédiaire peut être cachée, c'est-à-dire pas écrite dans l'énoncé.", r: true, expl: "Les questions intermédiaires sont cachées ou posées." },
      { t: "vf", q: "Dans l'exemple de Moussa, « Combien lui rend-on ? » est la question finale.", r: true, expl: "C'est la dernière réponse à trouver : 100 F." },
      { t: "relier", q: "Relie.", paires: [["question intermédiaire", "elle mène à la question finale"], ["question finale", "elle termine la résolution"], ["question cachée", "pas écrite, mais à trouver"]], expl: "Une question cachée est une question intermédiaire qui n'est pas écrite dans l'énoncé." },
      { t: "qcm", q: "Dans l'exemple de Moussa, que faut-il calculer en premier ?", choix: ["le prix des 3 cahiers", "la monnaie rendue", "le prix du stylo seul"], r: "le prix des 3 cahiers", expl: "250 F × 3 = 750 F : c'est la première question intermédiaire (cachée)." }
    ],
    [
      { t: "classer", q: "« Fatou achète 2 kg de viande à 4 000 F le kilo et 3 kg d'oignons à 500 F le kilo. Elle paie avec un billet de 10 000 F. Combien lui rend-on ? » Range chaque question.", cases: ["question intermédiaire", "question finale"], items: [["Combien coûte la viande ?", "question intermédiaire"], ["Combien coûtent les oignons ?", "question intermédiaire"], ["Combien dépense-t-elle en tout ?", "question intermédiaire"], ["Combien lui rend-on ?", "question finale"]], expl: "Les trois premières questions mènent à la dernière, qui termine le problème." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Fatou achète 2 kg de viande à 4 000 F le kilo et 3 kg d'oignons à 500 F le kilo. Elle paie avec un billet de 10 000 F. Combien lui rend-on ? »", etapes: [{ q: "Prix de la viande :", r: "8000", unite: "F" }, { q: "Prix des oignons :", r: "1500", unite: "F" }, { q: "Dépense totale :", r: "9500", unite: "F" }, { q: "Somme rendue :", r: "500", unite: "F" }], expl: "4 000 × 2 = 8 000 ; 500 × 3 = 1 500 ; 8 000 + 1 500 = 9 500 ; 10 000 − 9 500 = 500 F." },
      { t: "qcm", q: "« Un car transporte 45 passagers à l'aller et 38 au retour. Le ticket coûte 1 500 F. Quelle est la recette totale ? » Quelle est la question intermédiaire cachée ?", choix: ["Combien de passagers en tout ?", "Quelle est la recette totale ?", "Combien coûte le ticket ?"], r: "Combien de passagers en tout ?", expl: "Il faut d'abord le nombre total de passagers, puis on multiplie par le prix du ticket." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du car (aller 45 passagers, retour 38, ticket 1 500 F).", etapes: [{ q: "Nombre total de passagers :", r: "83" }, { q: "Recette totale :", r: "124500", unite: "F" }], expl: "45 + 38 = 83 ; 1 500 × 83 = 124 500 F." },
      { t: "vf", q: "Un problème peut avoir plusieurs questions intermédiaires, mais une seule question finale.", r: true, expl: "La question finale termine la résolution : c'est la dernière." },
      { t: "qcm", q: "Dans quel ordre répond-on aux questions ?", choix: ["d'abord les questions intermédiaires, puis la question finale", "d'abord la question finale", "dans n'importe quel ordre"], r: "d'abord les questions intermédiaires, puis la question finale", expl: "Les questions intermédiaires mènent à la question finale." },
      { t: "qcm", q: "« Ibrahima a 50 poules. Chaque poule pond 2 œufs par jour. Il vend les œufs 100 F l'un. Combien gagne-t-il par jour ? » Quelle est la question intermédiaire ?", choix: ["Combien d'œufs ramasse-t-il par jour ?", "Combien gagne-t-il par jour ?", "Combien a-t-il de poules ?"], r: "Combien d'œufs ramasse-t-il par jour ?", expl: "On calcule d'abord les œufs (50 × 2 = 100), puis le gain." },
      { t: "saisie", q: "Résous le problème d'Ibrahima : combien gagne-t-il par jour ?", r: ["10 000", "10000", "10.000"], expl: "50 × 2 = 100 œufs ; 100 × 100 F = 10 000 F.", unite: "F" }
    ],
    [
      { t: "qcm", q: "« Awa a 5 000 F. Elle achète 3 savons à 400 F l'un. Combien lui reste-t-il ? » Quelle est la question intermédiaire cachée ?", choix: ["Combien coûtent les 3 savons ?", "Combien lui reste-t-il ?", "Combien Awa a-t-elle ?"], r: "Combien coûtent les 3 savons ?", expl: "Il faut d'abord le prix des savons : 400 × 3 = 1 200 F." },
      { t: "saisie", q: "Résous le problème d'Awa : combien lui reste-t-il ?", r: ["3 800", "3800", "3.800"], expl: "400 × 3 = 1 200 F ; 5 000 − 1 200 = 3 800 F.", unite: "F" },
      { t: "vf", q: "Une question intermédiaire n'est jamais écrite dans l'énoncé.", r: false, expl: "Elle peut être cachée OU posée dans l'énoncé." },
      { t: "qcm", q: "« Un vendeur achète 20 pastèques à 600 F l'une. Il les revend 900 F l'une. » Quelle question peut être la question finale ?", choix: ["Quel est son bénéfice ?", "Combien a-t-il payé les pastèques ?", "Combien a-t-il reçu en les vendant ?"], r: "Quel est son bénéfice ?", expl: "Pour le bénéfice, il faut d'abord le prix d'achat et le prix de vente : ce sont les questions intermédiaires." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du vendeur de pastèques.", etapes: [{ q: "Prix d'achat des 20 pastèques :", r: "12000", unite: "F" }, { q: "Prix de vente des 20 pastèques :", r: "18000", unite: "F" }, { q: "Bénéfice :", r: "6000", unite: "F" }], expl: "600 × 20 = 12 000 ; 900 × 20 = 18 000 ; 18 000 − 12 000 = 6 000 F." },
      { t: "trous", q: "Complète avec « intermédiaire » ou « finale ».", texte: "Dans l'exemple de Moussa, « Combien coûtent les 3 cahiers ? » est une question [intermédiaire] ; « Combien lui rend-on ? » est la question [finale].", expl: "La première mène à la dernière ; la dernière termine le problème." }
    ],
    [
      { t: "qcm", q: "« Pour la Tabaski, le père de Mamadou a 200 000 F. Il achète un mouton à 125 000 F, 3 sacs d'oignons à 7 500 F l'un et 10 kg de pommes de terre à 600 F le kilo. » Quelle question finale convient ?", choix: ["Combien d'argent lui reste-t-il ?", "Combien coûte le mouton ?", "Combien de sacs d'oignons achète-t-il ?"], r: "Combien d'argent lui reste-t-il ?", expl: "Le prix du mouton et le nombre de sacs sont déjà donnés : ce ne sont pas des questions à poser." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème de la Tabaski : combien d'argent reste-t-il au père de Mamadou ?", etapes: [{ q: "Prix des oignons :", r: "22500", unite: "F" }, { q: "Prix des pommes de terre :", r: "6000", unite: "F" }, { q: "Dépense totale :", r: "153500", unite: "F" }, { q: "Argent qui reste :", r: "46500", unite: "F" }], expl: "7 500 × 3 = 22 500 ; 600 × 10 = 6 000 ; 125 000 + 22 500 + 6 000 = 153 500 ; 200 000 − 153 500 = 46 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Une école de Ziguinchor a 6 classes de 42 élèves. Chaque élève reçoit 4 cahiers. Combien de cahiers faut-il ? »", etapes: [{ q: "Question intermédiaire : combien d'élèves y a-t-il ?", r: "252" }, { q: "Question finale : combien de cahiers faut-il ?", r: "1008" }], expl: "42 × 6 = 252 élèves ; 4 × 252 = 1 008 cahiers." },
      { t: "qcm", q: "« Un car fait 2 voyages par jour avec 35 passagers à chaque fois. Le ticket coûte 2 000 F. Quelle est la recette du jour ? » Quelle question intermédiaire faut-il se poser ?", choix: ["Combien de passagers par jour ?", "Combien coûte le car ?", "À quelle heure part le car ?"], r: "Combien de passagers par jour ?", expl: "35 × 2 = 70 passagers, puis on multiplie par le prix du ticket." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du car (2 voyages de 35 passagers, ticket à 2 000 F).", etapes: [{ q: "Passagers par jour :", r: "70" }, { q: "Recette du jour :", r: "140000", unite: "F" }], expl: "35 × 2 = 70 ; 2 000 × 70 = 140 000 F." }
    ]
  ]
});
