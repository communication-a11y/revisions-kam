LECONS.push({
  id: "hi-empire-ghana",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'empire du Ghana",
  date: "2026-10-12",
  photos: ["DJI_20261118222127_0144_D.jpg", "DJI_20261118222132_0145_D.jpg", "DJI_20261118222140_0146_D.jpg"],
  retiens:
    "<p><b>Origine</b> : le Ghana est le plus ancien royaume, puis empire, africain connu. Il existait au <b>4<sup>e</sup> siècle</b> et s'appelait <b>Ouagadou</b>.</p>" +
    "<p><b>Étendue</b> : à son <b>apogée</b>, au <b>10<sup>e</sup> siècle</b>, le Ghana s'étendait de l'Adrar mauritanien au Fouta-Djalon, et de l'embouchure du fleuve Sénégal à la boucle du Niger.</p>" +
    "<p><b>Organisation administrative</b> :</p>" +
    "<ul><li>le Ghana était dirigé par un empereur puissant, le <b>Kaya Maghan</b>, ou « <b>maître de l'or</b> », qui a doté l'empire d'une solide organisation ; il confiait à ses hommes l'armée, les impôts, la justice… ;</li>" +
    "<li>l'empereur portait le titre de <b>Tounka</b> ;</li>" +
    "<li>la succession était <b>matrilinéaire</b> : à la mort de l'empereur, c'est le <b>fils de sa sœur</b> qui lui succédait ;</li>" +
    "<li>la capitale était <b>Koumbi-Saleh</b>, composée de deux villes : la ville du palais royal et l'autre ville.</li></ul>" +
    "<p><b>Activités économiques</b> : l'économie reposait sur le commerce de produits (or, esclaves…) vendus aux Arabes. On pratiquait l'élevage et l'agriculture. L'empire possédait des <b>mines d'or</b> et tirait profit des impôts du <b>commerce transsaharien</b> : il était très riche.</p>" +
    "<p><b>Le déclin</b> :</p>" +
    "<ul><li>en <b>1052</b>, les <b>Almoravides</b> attaquèrent le Ghana pour convertir la population à l'islam ;</li>" +
    "<li>en <b>1076</b>, ils envahirent la capitale : l'empire entra en déclin ;</li>" +
    "<li>en <b>1240</b>, le Ghana fut conquis par son voisin, l'<b>empire du Mali</b>.</li></ul>",
  astuce: "Ghana : <b>G</b>uerre des Almoravides en 1052, <b>c</b>apitale prise en 1076, <b>M</b>ali vainqueur en 1240.",
  regle: "Le Ghana (Ouagadou) avait pour capitale Koumbi-Saleh ; son empereur était le Kaya Maghan (« maître de l'or »), avec le titre de Tounka. Apogée au 10e siècle, attaque des Almoravides (1052-1076), conquête par le Mali en 1240.",
  niveaux: [
    [
      { t: "qcm", q: "Quel était l'ancien nom du Ghana ?", choix: ["Ouagadou", "Niani", "Gao"], r: "Ouagadou", expl: "Le Ghana s'appelait Ouagadou." },
      { t: "qcm", q: "Que veut dire « Kaya Maghan » ?", choix: ["maître de l'or", "roi des rois", "chef de l'armée"], r: "maître de l'or", expl: "Le Kaya Maghan était le « maître de l'or »." },
      { t: "qcm", q: "Quelle était la capitale du Ghana ?", choix: ["Koumbi-Saleh", "Niani", "Gao"], r: "Koumbi-Saleh", expl: "Niani est la capitale du Mali, Gao celle du Songhaï." },
      { t: "vf", q: "Le Ghana est le plus ancien empire africain connu de ta leçon.", r: true, expl: "Il est connu dès le 4e siècle." },
      { t: "vf", q: "L'empire du Ghana était très pauvre.", r: false, expl: "Il était très riche grâce à l'or et aux impôts du commerce transsaharien." },
      { t: "qcm", q: "Quel titre portait l'empereur du Ghana ?", choix: ["Tounka", "Mansa", "Askia"], r: "Tounka", expl: "Tounka pour le Ghana, Mansa pour le Mali, Askia pour le Songhaï." }
    ],
    [
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["4e siècle", "le Ghana existe déjà"], ["10e siècle", "apogée du Ghana"], ["1052", "attaque des Almoravides"], ["1076", "prise de la capitale"], ["1240", "conquête par le Mali"]], expl: "Ce sont les grandes dates de l'empire du Ghana." },
      { t: "saisie", q: "En quelle année les Almoravides ont-ils attaqué le Ghana ?", r: "1052", nombre: true, expl: "En 1052, pour convertir la population à l'islam." },
      { t: "saisie", q: "En quelle année le Ghana fut-il conquis par le Mali ?", r: "1240", nombre: true, expl: "En 1240." },
      { t: "qcm", q: "Pourquoi les Almoravides ont-ils attaqué le Ghana ?", choix: ["pour convertir la population à l'islam", "pour acheter du sel", "pour construire des pyramides"], r: "pour convertir la population à l'islam", expl: "C'est ce que dit la leçon." },
      { t: "trous", q: "Complète.", texte: "À son apogée, au [10]e siècle, le Ghana s'étendait de l'Adrar mauritanien au Fouta-Djalon.", nombre: true, expl: "L'apogée du Ghana se situe au 10e siècle." },
      { t: "qcm", q: "D'où venait la richesse du Ghana ?", choix: ["des mines d'or et des impôts du commerce transsaharien", "de la pêche industrielle", "des usines de sucre"], r: "des mines d'or et des impôts du commerce transsaharien", expl: "L'or et les taxes sur le commerce à travers le Sahara rendaient l'empire très riche." },
      { t: "vf", q: "Au Ghana, on pratiquait aussi l'élevage et l'agriculture.", r: true, expl: "C'est dans la partie « activités économiques »." },
      { t: "saisie", q: "Quel empire voisin a conquis le Ghana en 1240 ?", r: ["le Mali", "Mali", "l'empire du Mali"], expl: "L'empire du Mali." },
      { t: "qcm", q: "À qui le Ghana vendait-il ses produits ?", choix: ["aux Arabes", "aux Perses", "aux Égyptiens"], r: "aux Arabes", expl: "L'or, les esclaves… étaient vendus aux Arabes." }
    ],
    [
      { t: "qcm", q: "Au Ghana, la succession était matrilinéaire. À la mort de l'empereur, qui lui succédait ?", choix: ["le fils de sa sœur", "son propre fils", "son frère aîné"], r: "le fils de sa sœur", expl: "Matrilinéaire : le pouvoir passe par la lignée de la mère, donc au fils de la sœur." },
      { t: "vf", q: "En 1076, les Almoravides envahirent la capitale du Ghana.", r: true, expl: "Après cela, l'empire entra en déclin." },
      { t: "vf", q: "Koumbi-Saleh était composée d'une seule ville.", r: false, expl: "Elle était composée de deux villes." },
      { t: "qcm", q: "Le Kaya Maghan confiait à ses hommes…", choix: ["l'armée, les impôts, la justice", "la construction des pyramides", "la traduction des hiéroglyphes"], r: "l'armée, les impôts, la justice", expl: "Il a doté l'empire d'une solide organisation." },
      { t: "classer", q: "Range ces informations.", cases: ["organisation", "économie", "déclin"], items: [["le Kaya Maghan", "organisation"], ["la succession matrilinéaire", "organisation"], ["les mines d'or", "économie"], ["le commerce transsaharien", "économie"], ["l'attaque des Almoravides", "déclin"], ["la conquête par le Mali", "déclin"]], expl: "Ce sont les trois parties de la leçon." },
      { t: "saisie", q: "Comment s'appelaient les guerriers qui ont attaqué le Ghana en 1052 ?", r: "les Almoravides", aide: "Leur nom commence par « Al ».", expl: "Les Almoravides." },
      { t: "qcm", q: "Jusqu'où s'étendait le Ghana à l'est ?", choix: ["jusqu'à la boucle du Niger", "jusqu'à l'Égypte", "jusqu'à la mer Rouge"], r: "jusqu'à la boucle du Niger", expl: "De l'embouchure du Sénégal à la boucle du Niger." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le Ghana, appelé autrefois [Ouagadou], avait pour capitale [Koumbi-Saleh]. Son empereur, le Kaya Maghan, était le « maître de l'[or] ». Les Almoravides l'attaquèrent en [1052] et il fut conquis par le Mali en [1240].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Remets dans l'ordre : quelle suite est juste ?", choix: ["apogée – attaque des Almoravides – conquête par le Mali", "conquête par le Mali – apogée – attaque des Almoravides", "attaque des Almoravides – conquête par le Mali – apogée"], r: "apogée – attaque des Almoravides – conquête par le Mali", expl: "10e siècle, puis 1052-1076, puis 1240." },
      { t: "probleme", q: "Le Ghana atteint son apogée au 10e siècle. Les Almoravides attaquent en 1052 et prennent la capitale en 1076. Le Mali le conquiert en 1240.", etapes: [{ q: "Étape 1 : combien d'années séparent l'attaque des Almoravides (1052) de la prise de la capitale (1076) ?", r: "24", unite: "ans" }, { q: "Étape 2 : combien d'années séparent la prise de la capitale (1076) de la conquête par le Mali (1240) ?", r: "164", unite: "ans" }], expl: "1076 − 1052 = 24 ; 1240 − 1076 = 164." },
      { t: "vf", q: "Le Ghana a été conquis par l'empire du Mali, né ensuite de ses ruines.", r: true, expl: "Le Mali est né des ruines du Ghana et l'a conquis en 1240." },
      { t: "relier", q: "Relie.", paires: [["Kaya Maghan", "maître de l'or"], ["Tounka", "titre de l'empereur"], ["Koumbi-Saleh", "capitale"], ["matrilinéaire", "le fils de la sœur succède"]], expl: "Le vocabulaire de l'organisation du Ghana." }
    ]
  ]
});
