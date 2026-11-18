LECONS.push({
  id: "ge-elevage",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "L'élevage au Sénégal (1re partie et suite)",
  date: "2026-10-14",
  photos: ["DJI_20261118222132_0145_D.jpg", "DJI_20261118222145_0147_D.jpg", "DJI_20261118222153_0148_D.jpg"],
  retiens:
    "<p>L'élevage au Sénégal est pratiqué sous <b>deux formes</b> :</p>" +
    "<p>1. <b>L'élevage extensif ou nomade</b> : les animaux se déplacent sur de grandes étendues à la recherche de pâturages. C'est l'<b>élevage traditionnel</b>, surtout pratiqué par les <b>Peuls</b> dans la <b>zone sylvopastorale</b>. Il dépend fortement de la pluviométrie.</p>" +
    "<p>2. <b>L'élevage intensif ou sédentaire</b> se pratique dans des <b>fermes</b>, sur des espaces réduits. C'est l'<b>élevage moderne</b> : il donne d'importants rendements en lait et en viande, et les animaux sont mieux soignés.</p>" +
    "<p><b>Mots importants</b></p>" +
    "<ul><li><b>Pâturage</b> : endroit où les animaux trouvent leur nourriture.</li>" +
    "<li><b>Nomade</b> : éleveur qui se déplace avec son troupeau.</li>" +
    "<li><b>Sédentaire</b> : éleveur qui reste sur place avec son troupeau.</li>" +
    "<li><b>Transhumance</b> : déplacement périodique du bétail vers d'autres localités à la recherche de pâturages.</li></ul>" +
    "<p><b>Les animaux élevés</b> : les bovins (bœufs), les ovins (moutons), les caprins (chèvres), les porcins (porcs), les canins (chiens), la volaille (poules, canards…), les équins (chevaux), les asins (ânes), les félins (chats)… L'ensemble des animaux élevés s'appelle le <b>cheptel</b>.</p>" +
    "<p><b>Les ressources de l'élevage</b> : le lait, la viande, le cuir, le beurre, les cornes, les œufs… Certains animaux servent aussi au transport et aux travaux des champs.</p>" +
    "<p><b>Les problèmes</b> : le manque de pâturages, le nomadisme, l'aridité du sol et du climat, les maladies.</p>" +
    "<p><b>Les solutions</b> : créer des centres de recherches zootechniques ; construire des forages dans les zones d'élevage ; améliorer les espèces animales et les vacciner ; moderniser les techniques d'élevage ; pratiquer l'<b>insémination artificielle</b> (déposer la semence du mâle dans l'organe génital de la femelle).</p>",
  astuce: "<b>Bo</b>vins comme <b>bœ</b>uf ; <b>é</b>quins comme <b>é</b>quitation (le cheval) ; <b>a</b>sins comme <b>â</b>ne ; <b>ca</b>prins comme <b>ca</b>bri (la petite chèvre).",
  regle: "L'élevage extensif (nomade, traditionnel) déplace les troupeaux vers les pâturages ; l'élevage intensif (sédentaire, moderne) se fait dans des fermes avec de gros rendements.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de formes d'élevage y a-t-il au Sénégal dans ta leçon ?", choix: ["deux", "quatre", "une seule"], r: "deux", expl: "L'élevage extensif (nomade) et l'élevage intensif (sédentaire)." },
      { t: "qcm", q: "Qui pratique surtout l'élevage extensif ?", choix: ["les Peuls", "les Lébous", "les Perses"], r: "les Peuls", expl: "Les Peuls, dans la zone sylvopastorale." },
      { t: "vf", q: "L'élevage intensif se pratique dans des fermes.", r: true, expl: "C'est l'élevage moderne, sur des espaces réduits." },
      { t: "qcm", q: "Un pâturage, c'est…", choix: ["un endroit où les animaux trouvent leur nourriture", "une maison pour les poules", "un médicament pour les vaches"], r: "un endroit où les animaux trouvent leur nourriture", expl: "Les troupeaux se déplacent à la recherche de pâturages." },
      { t: "classer", q: "Range ces mots.", cases: ["élevage extensif", "élevage intensif"], items: [["nomade", "élevage extensif"], ["sédentaire", "élevage intensif"], ["traditionnel", "élevage extensif"], ["moderne", "élevage intensif"], ["dépend de la pluie", "élevage extensif"], ["fermes", "élevage intensif"]], expl: "Extensif = nomade, traditionnel ; intensif = sédentaire, moderne." }
    ],
    [
      { t: "relier", q: "Relie chaque nom savant à l'animal.", paires: [["les bovins", "les bœufs"], ["les ovins", "les moutons"], ["les caprins", "les chèvres"], ["les équins", "les chevaux"], ["les asins", "les ânes"]], expl: "Ce sont les noms des groupes d'animaux élevés." },
      { t: "saisie", q: "Comment appelle-t-on l'ensemble des animaux élevés ?", r: "le cheptel", expl: "C'est le cheptel." },
      { t: "saisie", q: "Comment appelle-t-on le déplacement périodique du bétail à la recherche de pâturages ?", r: "la transhumance", expl: "La transhumance." },
      { t: "qcm", q: "Les poules et les canards font partie de…", choix: ["la volaille", "les bovins", "les félins"], r: "la volaille", expl: "La volaille : poules, canards…" },
      { t: "classer", q: "Range ces ressources.", cases: ["produit de l'élevage", "pas un produit de l'élevage"], items: [["le lait", "produit de l'élevage"], ["le cuir", "produit de l'élevage"], ["les œufs", "produit de l'élevage"], ["le mil", "pas un produit de l'élevage"], ["le beurre", "produit de l'élevage"], ["le poisson de mer", "pas un produit de l'élevage"]], expl: "Le mil vient de l'agriculture, le poisson de mer de la pêche." },
      { t: "vf", q: "Certains animaux servent au transport et aux travaux des champs.", r: true, expl: "Par exemple l'âne et le cheval tirent les charrettes." },
      { t: "trous", q: "Complète.", texte: "L'élevage [extensif] ou nomade est pratiqué par les Peuls. L'élevage [intensif] ou sédentaire se fait dans des fermes.", expl: "Les deux formes d'élevage." },
      { t: "qcm", q: "Un éleveur qui reste sur place avec son troupeau est…", choix: ["sédentaire", "nomade", "transhumant"], r: "sédentaire", expl: "Le sédentaire reste sur place, le nomade se déplace." },
      { t: "relier", q: "Relie.", paires: [["les porcins", "les porcs"], ["les canins", "les chiens"], ["les félins", "les chats"]], expl: "D'autres noms d'animaux élevés." }
    ],
    [
      { t: "classer", q: "Range ces problèmes et solutions.", cases: ["problème", "solution"], items: [["le manque de pâturages", "problème"], ["les maladies", "problème"], ["construire des forages", "solution"], ["vacciner les animaux", "solution"], ["l'aridité du climat", "problème"], ["créer des centres de recherches zootechniques", "solution"]], expl: "Les difficultés de l'élevage et leurs remèdes." },
      { t: "qcm", q: "Pourquoi construire des forages dans les zones d'élevage ?", choix: ["pour donner de l'eau aux troupeaux", "pour chercher de l'or", "pour pêcher"], r: "pour donner de l'eau aux troupeaux", expl: "Avec de l'eau sur place, les troupeaux se déplacent moins." },
      { t: "vf", q: "L'élevage extensif ne dépend pas de la pluie.", r: false, expl: "Il dépend fortement de la pluviométrie : sans pluie, pas d'herbe dans les pâturages." },
      { t: "qcm", q: "Pourquoi l'élevage intensif donne-t-il plus de lait et de viande ?", choix: ["les animaux sont bien nourris et bien soignés à la ferme", "les animaux marchent beaucoup", "les animaux mangent du sable"], r: "les animaux sont bien nourris et bien soignés à la ferme", expl: "C'est un élevage moderne avec une meilleure couverture sanitaire." },
      { t: "saisie", q: "Les moutons font partie des … (nom savant)", r: "ovins", expl: "Les ovins = les moutons." },
      { t: "saisie", q: "Les chèvres font partie des … (nom savant)", r: "caprins", expl: "Les caprins = les chèvres." },
      { t: "vf", q: "Le nomadisme est cité parmi les problèmes de l'élevage.", r: true, expl: "Les déplacements fatiguent les animaux et rendent les soins difficiles." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'élevage extensif est un élevage [nomade] pratiqué par les Peuls. L'élevage intensif est un élevage [moderne] qui se fait dans des fermes. L'ensemble des animaux élevés s'appelle le [cheptel]. Le déplacement du bétail à la recherche de pâturages s'appelle la [transhumance].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Pendant la saison sèche, Samba conduit ses bœufs du Ferlo vers le sud pour trouver de l'herbe, puis il revient. Comment appelle-t-on ce déplacement ?", choix: ["la transhumance", "l'insémination", "la pisciculture"], r: "la transhumance", expl: "C'est un déplacement périodique du bétail à la recherche de pâturages." },
      { t: "qcm", q: "Fatou a une ferme près de Thiès avec des vaches laitières bien soignées et vaccinées. Quel élevage pratique-t-elle ?", choix: ["l'élevage intensif", "l'élevage extensif", "la transhumance"], r: "l'élevage intensif", expl: "Ferme, soins, rendement en lait : c'est l'élevage intensif." },
      { t: "relier", q: "Relie chaque problème à une solution.", paires: [["les maladies", "vacciner les animaux"], ["le manque d'eau", "construire des forages"], ["des races peu productives", "améliorer les espèces animales"]], expl: "Chaque solution répond à un problème." },
      { t: "classer", q: "Défi : range ces animaux dans leur groupe.", cases: ["bovins", "ovins", "équins", "asins"], items: [["le taureau", "bovins"], ["la vache", "bovins"], ["le bélier", "ovins"], ["la brebis", "ovins"], ["le cheval", "équins"], ["l'âne", "asins"]], expl: "Bovins : bœufs, vaches ; ovins : moutons ; équins : chevaux ; asins : ânes." }
    ]
  ]
});
