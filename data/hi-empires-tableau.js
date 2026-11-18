// À VÉRIFIER : l'année exacte du déclin du Mali est floue au cahier (« 14?5 », photos 0148 et 0152). Le module n'indique que le 15e siècle.
// À VÉRIFIER : pour le Songhaï, le tableau du cahier dit « déclin 17e siècle » ; la leçon associée attribuait ce déclin aux Almoravides (erreur : ils sont du 11e siècle). Le module ne reprend pas les Almoravides pour le Songhaï.
LECONS.push({
  id: "hi-empires-tableau",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Le tableau récapitulatif sur les empires",
  date: "2026-11-09",
  photos: ["DJI_20261118222211_0152_D.jpg"],
  retiens:
    "<table><tr><th>Empires</th><th>Titres</th><th>Capitale</th><th>Faits marquants</th></tr>" +
    "<tr><td><b>Ghana</b></td><td>Tounka ou Kaya Maghan</td><td>Koumbi-Saleh</td><td>apogée au 10<sup>e</sup> siècle ; attaque des Almoravides (prise de la capitale en 1076) ; conquis par le Mali en 1240</td></tr>" +
    "<tr><td><b>Mali</b></td><td>Mansa</td><td>Niani</td><td>bataille de Kirina en 1235 ; apogée au 14<sup>e</sup> siècle ; déclin au 15<sup>e</sup> siècle</td></tr>" +
    "<tr><td><b>Songhaï</b></td><td>Sonni ou Askia</td><td>Gao</td><td>apogée au 16<sup>e</sup> siècle ; attaque marocaine en 1591 ; déclin au 17<sup>e</sup> siècle</td></tr></table>",
  astuce: "Les apogées vont de deux siècles en deux siècles : Ghana <b>10</b>e, Mali <b>14</b>e, Songhaï <b>16</b>e. Les capitales dans l'ordre : <b>K</b>oumbi, <b>N</b>iani, <b>G</b>ao.",
  regle: "Ghana : Tounka, Koumbi-Saleh, apogée au 10e siècle. Mali : Mansa, Niani, apogée au 14e siècle. Songhaï : Sonni ou Askia, Gao, apogée au 16e siècle.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque empire à sa capitale.", paires: [["Ghana", "Koumbi-Saleh"], ["Mali", "Niani"], ["Songhaï", "Gao"]], expl: "Ce sont les trois capitales du tableau." },
      { t: "relier", q: "Relie chaque empire au titre de son souverain.", paires: [["Ghana", "Tounka ou Kaya Maghan"], ["Mali", "Mansa"], ["Songhaï", "Sonni ou Askia"]], expl: "Chaque empire a son titre royal." },
      { t: "qcm", q: "Quel est le plus ancien des trois empires ?", choix: ["le Ghana", "le Mali", "le Songhaï"], r: "le Ghana", expl: "Le Ghana existait déjà au 4e siècle." },
      { t: "vf", q: "Niani était la capitale de l'empire du Mali.", r: true, expl: "Oui : Niani pour le Mali." },
      { t: "qcm", q: "Dans quel empire le souverain s'appelait-il le Mansa ?", choix: ["le Mali", "le Ghana", "le Songhaï"], r: "le Mali", expl: "Mansa = empereur du Mali." }
    ],
    [
      { t: "relier", q: "Relie chaque empire au siècle de son apogée.", paires: [["Ghana", "10e siècle"], ["Mali", "14e siècle"], ["Songhaï", "16e siècle"]], expl: "Les apogées se suivent dans le temps." },
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1076", "les Almoravides prennent la capitale du Ghana"], ["1235", "bataille de Kirina"], ["1240", "le Mali conquiert le Ghana"], ["1591", "attaque marocaine contre le Songhaï"]], expl: "Les grandes dates du tableau." },
      { t: "saisie", q: "Quelle était la capitale de l'empire du Ghana ?", r: "Koumbi-Saleh", aide: "Deux mots reliés par un trait d'union.", expl: "Koumbi-Saleh." },
      { t: "saisie", q: "Quelle était la capitale de l'empire songhaï ?", r: "Gao", expl: "Gao." },
      { t: "qcm", q: "Dans quel empire a eu lieu la bataille de Kirina ?", choix: ["le Mali", "le Ghana", "le Songhaï"], r: "le Mali", expl: "En 1235, Soundiata fonde l'empire du Mali." },
      { t: "qcm", q: "Quel empire a subi une attaque marocaine en 1591 ?", choix: ["le Songhaï", "le Mali", "le Ghana"], r: "le Songhaï", expl: "L'empire songhaï, dont la capitale était Gao." },
      { t: "vf", q: "L'apogée du Mali se situe au 14e siècle.", r: true, expl: "C'est l'époque de Kankou Moussa (pèlerinage en 1324)." },
      { t: "classer", q: "Range chaque mot dans son empire.", cases: ["Ghana", "Mali", "Songhaï"], items: [["Tounka", "Ghana"], ["Koumbi-Saleh", "Ghana"], ["Mansa", "Mali"], ["Niani", "Mali"], ["Askia", "Songhaï"], ["Gao", "Songhaï"]], expl: "Titres et capitales des trois empires." }
    ],
    [
      { t: "vf", q: "Le Songhaï a atteint son apogée avant le Ghana.", r: false, expl: "C'est l'inverse : Ghana au 10e siècle, Songhaï au 16e siècle." },
      { t: "qcm", q: "Quel empire a été conquis par un autre empire de ce tableau ?", choix: ["le Ghana, conquis par le Mali", "le Mali, conquis par le Ghana", "le Songhaï, conquis par le Ghana"], r: "le Ghana, conquis par le Mali", expl: "En 1240, le Mali conquiert le Ghana. Plus tard, le Songhaï prend la place du Mali." },
      { t: "classer", q: "Range chaque fait dans son empire.", cases: ["Ghana", "Mali", "Songhaï"], items: [["attaque des Almoravides", "Ghana"], ["bataille de Kirina", "Mali"], ["attaque marocaine de 1591", "Songhaï"], ["apogée au 10e siècle", "Ghana"], ["apogée au 14e siècle", "Mali"], ["apogée au 16e siècle", "Songhaï"]], expl: "Les faits marquants du tableau." },
      { t: "qcm", q: "Quel titre ne correspond PAS au Ghana ?", choix: ["Askia", "Tounka", "Kaya Maghan"], r: "Askia", expl: "Askia est un titre du Songhaï." },
      { t: "saisie", q: "Quel titre portaient les souverains du Mali ?", r: "Mansa", expl: "Mansa." },
      { t: "vf", q: "Le déclin du Mali se situe au 15e siècle.", r: true, expl: "Le tableau indique le 15e siècle." }
    ],
    [
      { t: "trous", q: "Complète le tableau en phrases.", texte: "Le Ghana avait pour capitale [Koumbi-Saleh] et son roi portait le titre de [Tounka]. Le Mali avait pour capitale [Niani] et son roi était le [Mansa]. Le Songhaï avait pour capitale [Gao].", expl: "Le tableau récapitulatif en phrases." },
      { t: "qcm", q: "Remets les empires dans l'ordre de leur apogée.", choix: ["Ghana – Mali – Songhaï", "Mali – Ghana – Songhaï", "Songhaï – Mali – Ghana"], r: "Ghana – Mali – Songhaï", expl: "10e, 14e, puis 16e siècle." },
      { t: "probleme", q: "Le Mali conquiert le Ghana en 1240. Les Marocains attaquent le Songhaï en 1591.", etapes: [{ q: "Étape 1 : combien d'années séparent la bataille de Kirina (1235) de la conquête du Ghana (1240) ?", r: "5", unite: "ans" }, { q: "Étape 2 : combien d'années séparent la conquête du Ghana (1240) de l'attaque marocaine (1591) ?", r: "351", unite: "ans" }], expl: "1240 − 1235 = 5 ; 1591 − 1240 = 351." },
      { t: "relier", q: "Défi : relie chaque souverain à son empire.", paires: [["le Kaya Maghan", "Ghana"], ["Soundiata Keïta", "Mali"], ["Askia Mohammed", "Songhaï"]], expl: "Un souverain célèbre pour chaque empire." },
      { t: "vf", q: "Koumbi-Saleh, Niani et Gao sont les capitales, dans l'ordre, du Ghana, du Mali et du Songhaï.", r: true, expl: "C'est exactement le tableau." }
    ]
  ]
});
