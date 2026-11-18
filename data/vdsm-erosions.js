// Note : la photocopie écrit « L'érosion maritime : il est lié » et « L'érosion éolienne : il relève » ; corrigé en « elle » (érosion est féminin).
LECONS.push({
  id: "vdsm-erosions",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les érosions",
  date: "2026-10-06",
  photos: ["DJI_20261118221432_0107_D.jpg"],
  retiens:
    "<p>Il y a <b>érosion</b> lorsque notre environnement est dégradé par la force des <b>éléments naturels</b> : les eaux de ruissellement, l'avancée de la mer et le vent qui souffle. Il y a plusieurs formes d'érosion.</p>" +
    "<table><tr><th>Érosion</th><th>Ce qui se passe</th><th>Solutions</th></tr>" +
    "<tr><td><b>hydrique</b> (l'eau)</td><td>Les eaux de ruissellement creusent des <b>ravins</b> ou <b>lessivent</b> les sols, qui deviennent pauvres.</td><td>Construire des <b>canalisations</b> ; <b>reboiser</b> les zones arides pour aider à fixer le sol.</td></tr>" +
    "<tr><td><b>maritime</b> ou côtière (la mer)</td><td>Elle est liée à l'<b>avancée de la mer</b>, à cause du réchauffement climatique et de l'extraction du sable marin pour la construction.</td><td>Construire des <b>digues</b> ou des <b>épis</b> de protection ; installer des <b>rochers brise-vagues</b> ; draguer l'estuaire pour remblayer la côte ; <b>interdire l'extraction du sable marin</b>.</td></tr>" +
    "<tr><td><b>éolienne</b> (le vent)</td><td>Le vent emporte les éléments qui enrichissent le sol, et le sable lui-même est emporté.</td><td>Aménager des <b>brise-vents</b> ; le <b>reboisement</b>.</td></tr></table>",
  astuce: "<b>H</b>ydrique comme H₂O (l'eau). <b>Éo</b>lienne comme <b>Éo</b>le, le dieu du vent (et les éoliennes qui tournent au vent). <b>Mari</b>time comme <b>mer</b>.",
  regle: "L'érosion est la dégradation du milieu par l'eau (hydrique), la mer (maritime) ou le vent (éolienne). Le reboisement aide contre l'eau et le vent ; digues, épis et brise-vagues protègent la côte.",
  niveaux: [
    [
      { t: "qcm", q: "Il y a érosion quand l'environnement est dégradé par…", choix: ["la force des éléments naturels", "les animaux domestiques", "les élèves"], r: "la force des éléments naturels", expl: "L'eau, la mer et le vent sont des éléments naturels." },
      { t: "relier", q: "Relie chaque érosion à l'élément qui la cause.", paires: [["érosion hydrique", "les eaux de ruissellement"], ["érosion maritime", "l'avancée de la mer"], ["érosion éolienne", "le vent"]], expl: "Hydrique = eau ; maritime = mer ; éolienne = vent." },
      { t: "vf", q: "L'érosion éolienne est causée par le vent.", r: true, expl: "Éolienne vient d'Éole, le dieu du vent." },
      { t: "vf", q: "L'érosion hydrique est causée par la mer qui avance.", r: false, expl: "C'est l'érosion maritime. L'érosion hydrique vient des eaux de ruissellement." },
      { t: "qcm", q: "Les eaux de ruissellement…", choix: ["creusent des ravins et appauvrissent les sols", "rendent les sols plus riches", "font pousser les arbres"], r: "creusent des ravins et appauvrissent les sols", expl: "Elles lessivent les sols et les rendent pauvres." }
    ],
    [
      { t: "classer", q: "Range chaque solution sous la bonne érosion.", cases: ["érosion hydrique", "érosion maritime", "érosion éolienne"], items: [["construire des canalisations", "érosion hydrique"], ["construire des digues", "érosion maritime"], ["installer des rochers brise-vagues", "érosion maritime"], ["aménager des brise-vents", "érosion éolienne"], ["interdire l'extraction du sable marin", "érosion maritime"]], expl: "Canalisations pour l'eau ; digues et brise-vagues pour la mer ; brise-vents pour le vent." },
      { t: "qcm", q: "À Saint-Louis, la mer avance et détruit des maisons de pêcheurs. Quelle érosion ?", choix: ["l'érosion maritime", "l'érosion éolienne", "l'érosion hydrique"], r: "l'érosion maritime", expl: "L'avancée de la mer = érosion maritime (ou côtière)." },
      { t: "qcm", q: "Pendant l'hivernage à Kolda, l'eau de pluie creuse un ravin au milieu de la route. Quelle érosion ?", choix: ["l'érosion hydrique", "l'érosion maritime", "l'érosion éolienne"], r: "l'érosion hydrique", expl: "Les eaux de ruissellement creusent des ravins." },
      { t: "qcm", q: "À Matam, le vent emporte la bonne terre des champs. Quelle érosion ?", choix: ["l'érosion éolienne", "l'érosion hydrique", "l'érosion maritime"], r: "l'érosion éolienne", expl: "Le vent qui souffle emporte les éléments qui enrichissent le sol." },
      { t: "saisie", q: "Une rangée d'arbres plantée pour arrêter le vent s'appelle un …", r: ["brise-vent", "un brise-vent"], expl: "Brise-vent : il « brise » la force du vent." },
      { t: "vf", q: "Le reboisement aide à lutter contre l'érosion hydrique et contre l'érosion éolienne.", r: true, expl: "Les racines fixent le sol et les arbres freinent le vent." },
      { t: "qcm", q: "Quelles sont les deux causes de l'avancée de la mer citées au cahier ?", choix: ["le réchauffement climatique et l'extraction du sable marin", "les feux de brousse et la pêche", "le vent et la pluie"], r: "le réchauffement climatique et l'extraction du sable marin", expl: "Ce sont les deux causes de l'érosion maritime dans la leçon." },
      { t: "trous", q: "Complète.", texte: "L'érosion [hydrique] est due à l'eau, l'érosion [maritime] est due à la mer et l'érosion [éolienne] est due au vent.", expl: "Hydrique, maritime, éolienne." }
    ],
    [
      { t: "qcm", q: "Pourquoi reboiser les zones arides aide-t-il contre l'érosion hydrique ?", choix: ["les racines des arbres fixent le sol", "les arbres attirent la mer", "les arbres font plus de ruissellement"], r: "les racines des arbres fixent le sol", expl: "Le cahier dit : reboiser « pour aider à fixer le sol »." },
      { t: "vf", q: "Une digue protège contre l'érosion éolienne.", r: false, expl: "La digue protège la côte contre la mer : c'est une solution à l'érosion maritime." },
      { t: "saisie", q: "Quel autre nom l'érosion maritime porte-t-elle dans la leçon sur les formes de dégradation ? L'érosion …", r: ["côtière", "l'érosion côtière", "érosion côtière"], expl: "Maritime ou côtière : c'est la même érosion, due à l'avancée de la mer." },
      { t: "qcm", q: "Que veut dire « lessiver les sols » ?", choix: ["emporter les éléments qui les rendent riches", "les laver pour les rendre plus fertiles", "les sécher au soleil"], r: "emporter les éléments qui les rendent riches", expl: "Un sol lessivé devient pauvre." },
      { t: "classer", q: "Range chaque phrase sous la bonne érosion.", cases: ["hydrique", "maritime", "éolienne"], items: [["des ravins se creusent", "hydrique"], ["la plage recule", "maritime"], ["le sable s'envole", "éolienne"], ["les sols sont lessivés", "hydrique"], ["la mer détruit des maisons", "maritime"], ["le sol perd sa bonne terre à cause du vent", "éolienne"]], expl: "Eau, mer ou vent : cherche l'élément en cause." },
      { t: "relier", q: "Relie chaque ouvrage à son rôle.", paires: [["la digue", "arrêter la mer"], ["le brise-vent", "freiner le vent"], ["la canalisation", "conduire l'eau de pluie"], ["les rochers brise-vagues", "casser la force des vagues"]], expl: "Chaque ouvrage combat un élément." },
      { t: "vf", q: "Interdire l'extraction du sable marin aide à lutter contre l'érosion maritime.", r: true, expl: "Prendre le sable des plages fait avancer la mer." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Au bord de la mer, à Rufisque, la côte recule : c'est l'érosion [maritime]. Pour protéger la ville, on construit des [digues] et on interdit l'extraction du [sable] marin. Dans les champs de Kaffrine, le vent emporte la terre : c'est l'érosion [éolienne]. On y plante des [brise-vents].", expl: "Mer → digues et sable protégé ; vent → brise-vents." },
      { t: "qcm", q: "Quelle solution sert contre DEUX formes d'érosion ?", choix: ["le reboisement", "la digue", "les rochers brise-vagues"], r: "le reboisement", expl: "Le reboisement est cité contre l'érosion hydrique et contre l'érosion éolienne." },
      { t: "classer", q: "Cause ou solution de l'érosion maritime ?", cases: ["cause", "solution"], items: [["l'extraction du sable marin", "cause"], ["le réchauffement climatique", "cause"], ["construire des épis de protection", "solution"], ["remblayer la côte", "solution"], ["installer des rochers brise-vagues", "solution"]], expl: "L'extraction et le réchauffement font avancer la mer ; les ouvrages la retiennent." },
      { t: "saisie", q: "Comment appelle-t-on l'érosion causée par les eaux de ruissellement ?", r: ["l'érosion hydrique", "érosion hydrique", "hydrique"], expl: "Hydrique = eau." },
      { t: "qcm", q: "Laquelle de ces phrases est juste ?", choix: ["Le vent emporte les éléments qui enrichissent le sol.", "Le vent rend le sol plus riche.", "La mer recule quand on prend le sable."], r: "Le vent emporte les éléments qui enrichissent le sol.", expl: "C'est l'érosion éolienne : le sol devient pauvre." }
    ]
  ]
});
