LECONS.push({
  id: "vdsm-deboisement",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Le déboisement ou la déforestation",
  date: "2026-09-22",
  photos: ["DJI_20261118221404_0103_D.jpg", "DJI_20261118221414_0104_D.jpg"],
  retiens:
    "<p>Le <b>déboisement</b> est le phénomène de <b>réduction des surfaces de forêt</b>.</p>" +
    "<p><b>Les causes du déboisement</b></p>" +
    "<ul><li>l'abattage abusif des arbres ;</li><li>les feux de brousse ;</li><li>la construction d'infrastructures (routes, maisons…).</li></ul>" +
    "<p><b>Les conséquences du déboisement</b></p>" +
    "<ul><li>la désertification ;</li><li>la disparition d'espèces animales ;</li><li>la non-satisfaction des besoins vitaux (nourriture, logement) ;</li><li>le réchauffement climatique.</li></ul>" +
    "<p><b>Les solutions (mesures) contre le déboisement</b></p>" +
    "<ul><li>le reboisement (reboiser, c'est planter des arbres) ;</li><li>protéger les forêts, éviter les feux de brousse ;</li><li>sanctionner les auteurs (les coupeurs abusifs de bois).</li></ul>",
  astuce: "Pour chaque problème, pose trois questions : <b>Pourquoi ?</b> (les causes), <b>Et alors ?</b> (les conséquences), <b>Que faire ?</b> (les solutions).",
  regle: "Le déboisement est la réduction des surfaces de forêt. Causes : abattage abusif, feux de brousse, constructions. Conséquences : désertification, disparition d'animaux, réchauffement. Solutions : reboiser, protéger, sanctionner.",
  niveaux: [
    [
      { t: "qcm", q: "Le déboisement, c'est…", choix: ["la réduction des surfaces de forêt", "la plantation de nouveaux arbres", "l'arrosage des jardins"], r: "la réduction des surfaces de forêt", expl: "Déboiser, c'est enlever le bois, les arbres : la forêt devient plus petite." },
      { t: "vf", q: "Déboisement et déforestation veulent dire la même chose.", r: true, expl: "Le titre de la leçon dit : « Le déboisement ou la déforestation »." },
      { t: "qcm", q: "Laquelle est une <b>cause</b> du déboisement ?", choix: ["l'abattage abusif des arbres", "le reboisement", "la désertification"], r: "l'abattage abusif des arbres", expl: "Couper trop d'arbres fait disparaître la forêt : c'est une cause." },
      { t: "qcm", q: "Laquelle est une <b>solution</b> contre le déboisement ?", choix: ["le reboisement", "les feux de brousse", "la construction de routes"], r: "le reboisement", expl: "Reboiser, c'est replanter des arbres." },
      { t: "qcm", q: "Laquelle est une <b>conséquence</b> du déboisement ?", choix: ["la désertification", "l'abattage des arbres", "le reboisement"], r: "la désertification", expl: "Sans arbres, le sol s'appauvrit et le désert avance." },
      { t: "vf", q: "Les feux de brousse sont une cause du déboisement.", r: true, expl: "Le feu détruit les arbres de la brousse." }
    ],
    [
      { t: "classer", q: "Range chaque élément : cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["l'abattage abusif des arbres", "cause"], ["la construction d'infrastructures", "cause"], ["la désertification", "conséquence"], ["le réchauffement climatique", "conséquence"], ["le reboisement", "solution"], ["sanctionner les coupeurs abusifs", "solution"]], expl: "Les causes viennent avant, les conséquences après ; les solutions servent à lutter." },
      { t: "classer", q: "Encore un tri : cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["les feux de brousse", "cause"], ["la disparition d'espèces animales", "conséquence"], ["protéger les forêts", "solution"], ["la non-satisfaction des besoins vitaux", "conséquence"], ["éviter les feux de brousse", "solution"]], expl: "Les feux de brousse causent le déboisement ; on les évite pour protéger la forêt." },
      { t: "saisie", q: "Planter des arbres là où on les a coupés, c'est le …", r: "reboisement", expl: "Reboiser = remettre du bois, des arbres." },
      { t: "qcm", q: "Pourquoi les animaux disparaissent-ils quand la forêt est coupée ?", choix: ["ils perdent leur abri et leur nourriture", "ils ont trop d'eau", "ils deviennent trop nombreux"], r: "ils perdent leur abri et leur nourriture", expl: "La forêt est la maison des animaux : sans elle, ils disparaissent." },
      { t: "vf", q: "Construire des routes et des maisons peut entraîner le déboisement.", r: true, expl: "La construction d'infrastructures est une cause citée au cahier." },
      { t: "vf", q: "Le reboisement est une cause du déboisement.", r: false, expl: "Le reboisement est une solution : on replante des arbres." },
      { t: "relier", q: "Relie chaque mot à son sens.", paires: [["déboiser", "couper les arbres"], ["reboiser", "planter des arbres"], ["désertification", "avancée du désert"], ["abattage", "action de couper un arbre"]], expl: "Dé- = enlever ; re- = de nouveau." },
      { t: "qcm", q: "Les besoins vitaux cités au cahier sont…", choix: ["la nourriture et le logement", "la télévision et le téléphone", "les jeux et les vacances"], r: "la nourriture et le logement", expl: "La forêt donne des fruits, du bois pour construire… Sans elle, ces besoins ne sont plus satisfaits." },
      { t: "trous", q: "Complète la définition.", texte: "Le déboisement est le phénomène de [réduction] des surfaces de [forêt].", expl: "La forêt devient plus petite : sa surface est réduite." }
    ],
    [
      { t: "qcm", q: "Mamadou coupe chaque jour beaucoup d'arbres pour vendre du charbon de bois, sans en replanter. Que fait-il ?", choix: ["un abattage abusif", "un reboisement", "une protection de la forêt"], r: "un abattage abusif", expl: "Abusif veut dire « trop, plus que permis » : c'est une cause du déboisement." },
      { t: "qcm", q: "Que faut-il faire contre les coupeurs abusifs de bois ?", choix: ["les sanctionner", "les féliciter", "leur donner plus de haches"], r: "les sanctionner", expl: "Le cahier propose de sanctionner les auteurs." },
      { t: "vf", q: "Le réchauffement climatique est une conséquence du déboisement.", r: true, expl: "Les arbres rafraîchissent l'air ; quand ils disparaissent, la chaleur augmente." },
      { t: "vf", q: "La désertification est une solution contre le déboisement.", r: false, expl: "C'est une conséquence : le désert avance quand les arbres disparaissent." },
      { t: "saisie", q: "Comment appelle-t-on l'avancée du désert, conséquence du déboisement ?", r: "la désertification", expl: "Désert → désertification." },
      { t: "relier", q: "Relie chaque cause à une solution qui la combat.", paires: [["abattage abusif des arbres", "sanctionner les coupeurs abusifs"], ["feux de brousse", "éviter les feux de brousse"], ["forêt déjà coupée", "le reboisement"]], expl: "Chaque solution répond à une cause précise." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut protéger les forêts.", expl: "Protéger les forêts est une solution contre le déboisement." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "À cause de l'abattage abusif des arbres et des feux de [brousse], la forêt recule. Cela entraîne la [désertification] et la disparition d'espèces [animales]. Pour lutter, il faut pratiquer le [reboisement].", expl: "Causes, conséquences, solution." },
      { t: "qcm", q: "Au village d'Awa, la forêt a disparu. Quelle action est la plus utile pour la faire revenir ?", choix: ["organiser une journée de reboisement", "allumer des feux pour nettoyer", "construire une route dans la brousse"], r: "organiser une journée de reboisement", expl: "Pour que la forêt revienne, il faut replanter des arbres." },
      { t: "classer", q: "Bonne action pour la forêt ou mauvaise action ?", cases: ["bonne action", "mauvaise action"], items: [["planter un arbre", "bonne action"], ["éteindre un feu de brousse", "bonne action"], ["couper du bois sans limite", "mauvaise action"], ["mettre le feu à la brousse", "mauvaise action"], ["signaler un coupeur abusif", "bonne action"]], expl: "Ce qui protège la forêt est bon ; ce qui la détruit est mauvais." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Le déboisement provoque la désertification.", "La désertification provoque le reboisement.", "Le reboisement provoque le déboisement."], r: "Le déboisement provoque la désertification.", expl: "La cause (déboisement) entraîne la conséquence (désertification)." },
      { t: "saisie", q: "Écris le verbe qui veut dire « planter de nouveau des arbres ».", r: "reboiser", expl: "Re- (de nouveau) + boiser : reboiser." }
    ]
  ]
});
