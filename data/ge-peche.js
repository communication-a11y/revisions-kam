LECONS.push({
  id: "ge-peche",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "La pêche au Sénégal (1re partie et suite)",
  date: "2026-09-30",
  photos: ["DJI_20261118222101_0140_D.jpg", "DJI_20261118222107_0141_D.jpg", "DJI_20261118222115_0142_D.jpg"],
  retiens:
    "<p>La pêche au Sénégal se pratique sous <b>deux formes</b> :</p>" +
    "<p>1. <b>La pêche artisanale</b> (maritime ou fluviale) se pratique avec des outils souvent rudimentaires : <b>pirogue</b> à rames ou à moteur, filet, hameçons, nasses… Elle est souvent pratiquée par les Lébous, les Wolofs… Les produits pêchés sont les sardines, les carpes, les mulets, les daurades, les crevettes…, destinés à la <b>consommation</b> et à la <b>vente</b>. Elle a un <b>faible rendement</b>.</p>" +
    "<p>2. <b>La pêche industrielle</b> se pratique avec des <b>bateaux</b> (thoniers, chalutiers, sardiniers…) et donne des <b>rendements importants</b>. Les produits pêchés (thons, mérous…) sont destinés à l'<b>exportation</b>.</p>" +
    "<p>Le Sénégal a plusieurs <b>ports de pêche</b> sur la côte : Saint-Louis, Louga (Lompoul), Thiès (Mbour, Kayar, Joal), Dakar (Yarakh), Ziguinchor…</p>" +
    "<p><b>L'aquaculture</b> : en plus de ces deux types de pêche, on pratique :</p>" +
    "<ul><li>la <b>pisciculture</b> (élevage de poissons) ;</li><li>l'<b>ostréiculture</b> (élevage d'huîtres) ;</li><li>la <b>crevetticulture</b> (élevage de crevettes).</li></ul>" +
    "<p>Il existe aussi une aquaculture de repeuplement et une aquaculture commerciale.</p>" +
    "<p><b>Les problèmes de la pêche</b> : le non-respect du repos biologique, l'insuffisance des moyens de conservation, l'utilisation de filets à mailles non conformes, la surexploitation des ressources…</p>" +
    "<p><b>Les solutions</b> : la gestion rationnelle des ressources, la réglementation des types de filets, la construction de quais de pêche équipés pour conserver le poisson…</p>",
  astuce: "<b>Piscis</b> = poisson (pisciculture) ; <b>ostréi</b> = huître (ostréiculture) ; <b>crevetti</b> = crevette.",
  regle: "La pêche artisanale utilise des pirogues, a un faible rendement et nourrit le marché local ; la pêche industrielle utilise des bateaux, a de forts rendements et exporte.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de formes de pêche y a-t-il au Sénégal dans ta leçon ?", choix: ["deux", "trois", "cinq"], r: "deux", expl: "La pêche artisanale et la pêche industrielle." },
      { t: "qcm", q: "Avec quoi pratique-t-on la pêche artisanale ?", choix: ["des pirogues", "de grands chalutiers", "des avions"], r: "des pirogues", expl: "Pirogue à rames ou à moteur, filets, hameçons, nasses." },
      { t: "qcm", q: "Où partent surtout les produits de la pêche industrielle ?", choix: ["à l'exportation", "au marché du village", "à la poubelle"], r: "à l'exportation", expl: "Thons, mérous… sont exportés." },
      { t: "vf", q: "La pêche artisanale a un faible rendement.", r: true, expl: "Ses outils sont souvent rudimentaires." },
      { t: "classer", q: "Range ces outils.", cases: ["pêche artisanale", "pêche industrielle"], items: [["la pirogue à rames", "pêche artisanale"], ["le chalutier", "pêche industrielle"], ["la nasse", "pêche artisanale"], ["le thonier", "pêche industrielle"], ["l'hameçon", "pêche artisanale"], ["le sardinier", "pêche industrielle"]], expl: "Pirogues et petits outils pour l'artisanale ; grands bateaux pour l'industrielle." }
    ],
    [
      { t: "relier", q: "Relie chaque activité à ce qu'on élève.", paires: [["la pisciculture", "des poissons"], ["l'ostréiculture", "des huîtres"], ["la crevetticulture", "des crevettes"]], expl: "Ce sont les activités d'aquaculture." },
      { t: "relier", q: "Relie chaque port de pêche à sa région.", paires: [["Kayar", "Thiès"], ["Yarakh", "Dakar"], ["Lompoul", "Louga"]], expl: "Mbour, Kayar et Joal sont dans la région de Thiès." },
      { t: "qcm", q: "Quel peuple est cité comme pratiquant souvent la pêche artisanale ?", choix: ["les Lébous", "les Touaregs", "les Perses"], r: "les Lébous", expl: "Les Lébous et les Wolofs." },
      { t: "saisie", q: "Comment appelle-t-on l'élevage de poissons ?", r: "la pisciculture", expl: "La pisciculture." },
      { t: "classer", q: "Range ces poissons selon la pêche citée dans la leçon.", cases: ["pêche artisanale", "pêche industrielle"], items: [["la sardine", "pêche artisanale"], ["le thon", "pêche industrielle"], ["le mulet", "pêche artisanale"], ["le mérou", "pêche industrielle"], ["la daurade", "pêche artisanale"]], expl: "C'est la répartition de la leçon." },
      { t: "vf", q: "La pêche artisanale peut être maritime ou fluviale.", r: true, expl: "En mer ou sur le fleuve." },
      { t: "trous", q: "Complète.", texte: "La pêche [industrielle] se pratique avec des bateaux et donne des rendements [importants].", expl: "Thoniers, chalutiers, sardiniers." },
      { t: "qcm", q: "Lequel de ces lieux est un port de pêche de la région de Thiès ?", choix: ["Joal", "Yarakh", "Lompoul"], r: "Joal", expl: "Mbour, Kayar et Joal sont dans la région de Thiès." },
      { t: "saisie", q: "Comment appelle-t-on l'élevage des huîtres ?", r: "l'ostréiculture", expl: "L'ostréiculture." }
    ],
    [
      { t: "classer", q: "Range ces problèmes et solutions.", cases: ["problème", "solution"], items: [["la surexploitation des ressources", "problème"], ["le non-respect du repos biologique", "problème"], ["la réglementation des filets", "solution"], ["le manque de moyens de conservation", "problème"], ["la construction de quais de pêche équipés", "solution"], ["la gestion rationnelle des ressources", "solution"]], expl: "Les difficultés de la pêche et leurs remèdes." },
      { t: "qcm", q: "Que veut dire « respecter le repos biologique » ?", choix: ["arrêter de pêcher pendant un temps pour laisser les poissons se reproduire", "dormir sur la pirogue", "pêcher la nuit seulement"], r: "arrêter de pêcher pendant un temps pour laisser les poissons se reproduire", expl: "Si on ne laisse pas les poissons se reproduire, il y en aura de moins en moins." },
      { t: "qcm", q: "Pourquoi les filets à mailles trop petites posent-ils problème ?", choix: ["ils attrapent aussi les tout petits poissons", "ils coûtent trop cher", "ils sont trop lourds"], r: "ils attrapent aussi les tout petits poissons", expl: "Les jeunes poissons n'ont pas le temps de grandir : c'est pourquoi on réglemente les filets." },
      { t: "vf", q: "La pêche industrielle a un faible rendement.", r: false, expl: "C'est la pêche artisanale qui a un faible rendement ; l'industrielle donne des rendements importants." },
      { t: "saisie", q: "Comment appelle-t-on l'élevage des crevettes ?", r: "la crevetticulture", expl: "La crevetticulture." },
      { t: "qcm", q: "Pourquoi construire des quais équipés pour la conservation ?", choix: ["pour que le poisson ne pourrisse pas", "pour faire du sport", "pour garer des voitures"], r: "pour que le poisson ne pourrisse pas", expl: "L'insuffisance des moyens de conservation est un problème de la pêche." },
      { t: "vf", q: "La pisciculture, l'ostréiculture et la crevetticulture sont des activités d'aquaculture.", r: true, expl: "L'aquaculture, c'est l'élevage d'animaux qui vivent dans l'eau." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La pêche [artisanale] se pratique avec des pirogues et a un faible rendement. La pêche industrielle se pratique avec des [bateaux] et ses produits sont destinés à l'[exportation]. L'élevage de poissons s'appelle la [pisciculture].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Ibrahima part de Kayar à l'aube avec sa pirogue à moteur et revient vendre ses sardines au marché. Quelle pêche pratique-t-il ?", choix: ["la pêche artisanale", "la pêche industrielle", "l'ostréiculture"], r: "la pêche artisanale", expl: "Pirogue, sardines, vente au marché : c'est la pêche artisanale." },
      { t: "qcm", q: "Un grand thonier pêche des tonnes de thons qui partent en Europe. Quelle pêche est-ce ?", choix: ["la pêche industrielle", "la pêche artisanale", "la pisciculture"], r: "la pêche industrielle", expl: "Grand bateau, gros rendement, exportation : c'est la pêche industrielle." },
      { t: "relier", q: "Relie chaque problème à sa solution.", paires: [["les filets à mailles non conformes", "réglementer les types de filets"], ["le manque de conservation", "construire des quais équipés"], ["la surexploitation", "gérer les ressources de façon rationnelle"]], expl: "Chaque solution répond à un problème." },
      { t: "classer", q: "Défi : range ces mots.", cases: ["pêche artisanale", "pêche industrielle", "aquaculture"], items: [["pirogue", "pêche artisanale"], ["chalutier", "pêche industrielle"], ["élevage d'huîtres", "aquaculture"], ["nasse", "pêche artisanale"], ["exportation de thons", "pêche industrielle"], ["élevage de crevettes", "aquaculture"]], expl: "Trois manières de tirer des produits de l'eau." }
    ]
  ]
});
