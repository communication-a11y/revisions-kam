// À VÉRIFIER : au cahier (photo 0149), la matière première de GMD et de NMA est notée « Farine ». La farine est le produit fini ; la matière première est le blé. Le module écrit « blé ».
// À VÉRIFIER : quelques cases des tableaux sont floues (photos 0149 et 0151) : 2e produit de la SONACOS, produits finis de SODEFITEX/NSTS, 2e produit de la SAR. Elles ne sont pas utilisées en exercice. « SABADOLA » corrigé en « Sabodala » (mine d'or).
LECONS.push({
  id: "ge-industrie",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "L'industrie au Sénégal",
  date: "2026-11-04",
  photos: ["DJI_20261118222156_0149_D.jpg", "DJI_20261118222207_0151_D.jpg"],
  retiens:
    "<p>Les industries transforment des produits du sous-sol, de la pêche, de l'agriculture et des matières importées. Le Sénégal possède des industries variées.</p>" +
    "<table><tr><th>Usines</th><th>Matières premières</th><th>Produits finis</th></tr>" +
    "<tr><th colspan='3'>1. Industries alimentaires</th></tr>" +
    "<tr><td>SONACOS</td><td>arachide</td><td>huile…</td></tr>" +
    "<tr><td>CSS</td><td>canne à sucre</td><td>sucre</td></tr>" +
    "<tr><td>SOBOA</td><td>fruits</td><td>boissons gazeuses</td></tr>" +
    "<tr><td>SAPROLAIT</td><td>lait naturel</td><td>lait en poudre, en boîte</td></tr>" +
    "<tr><td>GMD</td><td>blé</td><td>farine, pâtes alimentaires</td></tr>" +
    "<tr><td>NMA</td><td>blé</td><td>farine de blé, aliment de bétail</td></tr>" +
    "<tr><th colspan='3'>2. Industries textiles</th></tr>" +
    "<tr><td>SODEFITEX, NSTS</td><td>coton en graine, fil…</td><td>coton, tissu</td></tr>" +
    "<tr><th colspan='3'>3. Industries chimiques</th></tr>" +
    "<tr><td>NSOA</td><td>arachide</td><td>savon</td></tr>" +
    "<tr><td>ICS</td><td>phosphates</td><td>engrais</td></tr>" +
    "<tr><td>SAR</td><td>pétrole brut</td><td>essence…</td></tr>" +
    "<tr><th colspan='3'>4. Industries minières</th></tr>" +
    "<tr><td>SOCOCIM</td><td>gisement</td><td>ciment</td></tr>" +
    "<tr><td>Sabodala</td><td>gisement</td><td>or</td></tr>" +
    "<tr><th colspan='3'>5. Industries mécaniques</th></tr>" +
    "<tr><td>SENBUS</td><td>pièces détachées</td><td>véhicules « Tata »</td></tr>" +
    "<tr><td>SEMI</td><td>pièces détachées</td><td>matériels marins</td></tr></table>" +
    "<p><b>Mots importants</b></p>" +
    "<ul><li>Une <b>matière première</b> : c'est un produit destiné à être transformé.</li>" +
    "<li>Un <b>produit fini</b> : c'est un produit qui, après transformation, est prêt à être utilisé.</li></ul>",
  astuce: "Matière <b>première</b> = ce qui entre en <b>premier</b> dans l'usine. Produit <b>fini</b> = ce qui sort à la <b>fin</b>.",
  regle: "Une usine transforme une matière première (arachide, canne à sucre, phosphates…) en produit fini (huile, sucre, engrais…).",
  niveaux: [
    [
      { t: "qcm", q: "Qu'est-ce qu'une matière première ?", choix: ["un produit destiné à être transformé", "un produit prêt à être utilisé", "un produit cassé"], r: "un produit destiné à être transformé", expl: "La matière première entre dans l'usine pour être transformée." },
      { t: "qcm", q: "Qu'est-ce qu'un produit fini ?", choix: ["un produit prêt à être utilisé après transformation", "un produit qui sort de la terre", "un produit qu'on jette"], r: "un produit prêt à être utilisé après transformation", expl: "Le produit fini sort de l'usine, prêt à l'emploi." },
      { t: "qcm", q: "Que produit la CSS à partir de la canne à sucre ?", choix: ["du sucre", "du savon", "du ciment"], r: "du sucre", expl: "CSS : canne à sucre → sucre." },
      { t: "classer", q: "Matière première ou produit fini ?", cases: ["matière première", "produit fini"], items: [["l'arachide", "matière première"], ["l'huile", "produit fini"], ["la canne à sucre", "matière première"], ["le sucre", "produit fini"], ["le pétrole brut", "matière première"], ["l'essence", "produit fini"]], expl: "La matière première entre dans l'usine, le produit fini en sort." },
      { t: "vf", q: "L'ICS transforme les phosphates en engrais.", r: true, expl: "ICS : phosphates → engrais." }
    ],
    [
      { t: "relier", q: "Relie chaque usine à son produit fini.", paires: [["SONACOS", "huile"], ["CSS", "sucre"], ["SOBOA", "boissons gazeuses"], ["SAPROLAIT", "lait en poudre"], ["SOCOCIM", "ciment"]], expl: "C'est le tableau de la leçon." },
      { t: "relier", q: "Relie chaque usine à sa matière première.", paires: [["ICS", "phosphates"], ["SAR", "pétrole brut"], ["NSOA", "arachide"], ["GMD", "blé"]], expl: "GMD transforme le blé en farine et en pâtes." },
      { t: "saisie", q: "Quelle usine transforme la canne à sucre en sucre ? (sigle)", r: ["CSS", "C.S.S"], expl: "La CSS, à Richard-Toll." },
      { t: "qcm", q: "Dans quelle famille d'industries range-t-on la SOCOCIM (ciment) ?", choix: ["les industries minières", "les industries alimentaires", "les industries textiles"], r: "les industries minières", expl: "Le ciment vient d'un gisement du sous-sol." },
      { t: "qcm", q: "Que produit la SENBUS avec des pièces détachées ?", choix: ["des véhicules « Tata »", "de l'huile", "des engrais"], r: "des véhicules « Tata »", expl: "C'est une industrie mécanique." },
      { t: "vf", q: "La NSOA fabrique du savon avec de l'arachide.", r: true, expl: "C'est une industrie chimique." },
      { t: "classer", q: "Range chaque usine dans sa famille.", cases: ["alimentaire", "chimique", "minière", "mécanique"], items: [["CSS", "alimentaire"], ["SOBOA", "alimentaire"], ["ICS", "chimique"], ["SAR", "chimique"], ["Sabodala", "minière"], ["SEMI", "mécanique"]], expl: "Les familles d'industries du tableau." },
      { t: "saisie", q: "Que produit la mine de Sabodala ?", r: "l'or", expl: "Sabodala est une mine d'or." },
      { t: "qcm", q: "Que fabrique la NMA, en plus de la farine de blé ?", choix: ["de l'aliment de bétail", "du sucre", "du ciment"], r: "de l'aliment de bétail", expl: "NMA : blé → farine de blé, aliment de bétail." }
    ],
    [
      { t: "vf", q: "La farine est la matière première de la GMD.", r: false, expl: "La matière première est le blé ; la farine est le produit fini." },
      { t: "qcm", q: "L'arachide est la matière première de deux usines du tableau. Lesquelles ?", choix: ["la SONACOS et la NSOA", "la CSS et la SAR", "l'ICS et la SOCOCIM"], r: "la SONACOS et la NSOA", expl: "SONACOS : huile ; NSOA : savon." },
      { t: "classer", q: "Range ces usines.", cases: ["industrie alimentaire", "industrie chimique"], items: [["SAPROLAIT", "industrie alimentaire"], ["NSOA", "industrie chimique"], ["GMD", "industrie alimentaire"], ["ICS", "industrie chimique"], ["SONACOS", "industrie alimentaire"], ["SAR", "industrie chimique"]], expl: "Attention : l'arachide va à la SONACOS (alimentaire, huile) et à la NSOA (chimique, savon)." },
      { t: "qcm", q: "D'où viennent les produits transformés par les industries ?", choix: ["du sous-sol, de la pêche, de l'agriculture et des importations", "seulement de la mer", "seulement de l'étranger"], r: "du sous-sol, de la pêche, de l'agriculture et des importations", expl: "C'est la première phrase de la leçon." },
      { t: "saisie", q: "Quelle est la matière première de l'ICS ?", r: "les phosphates", expl: "L'ICS transforme les phosphates en engrais." },
      { t: "relier", q: "Relie chaque matière première à son produit fini.", paires: [["lait naturel", "lait en poudre"], ["phosphates", "engrais"], ["fruits", "boissons gazeuses"], ["blé", "pâtes alimentaires"]], expl: "Chaque matière première devient un produit fini." },
      { t: "vf", q: "La SEMI fabrique des matériels marins.", r: true, expl: "C'est une industrie mécanique, avec des pièces détachées." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Une usine transforme une matière [première] en produit [fini]. Par exemple, la CSS transforme la canne à sucre en [sucre] et l'ICS transforme les phosphates en [engrais].", expl: "Le principe de l'industrie." },
      { t: "qcm", q: "Awa achète un paquet de pâtes au marché de Thiès. Quelle usine a pu le fabriquer, et avec quoi ?", choix: ["la GMD, avec du blé", "la SOCOCIM, avec un gisement", "la SAR, avec du pétrole"], r: "la GMD, avec du blé", expl: "GMD : blé → farine, pâtes alimentaires." },
      { t: "qcm", q: "Le papa de Moussa met de l'engrais dans son champ d'arachide. Quelle usine fabrique cet engrais ?", choix: ["l'ICS", "la SOBOA", "la SENBUS"], r: "l'ICS", expl: "L'ICS transforme les phosphates en engrais." },
      { t: "classer", q: "Défi : range ces usines dans leur famille.", cases: ["alimentaire", "chimique", "minière", "mécanique"], items: [["SAPROLAIT", "alimentaire"], ["NSOA", "chimique"], ["SOCOCIM", "minière"], ["SENBUS", "mécanique"], ["NMA", "alimentaire"], ["Sabodala", "minière"]], expl: "Révise le tableau famille par famille." },
      { t: "vf", q: "L'arachide peut donner de l'huile à la SONACOS et du savon à la NSOA.", r: true, expl: "Une même matière première peut aller dans deux industries différentes." }
    ]
  ]
});
