LECONS.push({
  id: "vdsm-degradation-ressources",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les formes de dégradation des ressources du milieu",
  date: "2026-09-18",
  photos: ["DJI_20261118221345_0101_D.jpg", "DJI_20261118221356_0102_D.jpg"],
  retiens:
    "<p>L'<b>environnement</b>, c'est ce qui nous entoure. Il subit des <b>agressions dues à l'homme et à la nature</b>. Il en résulte la <b>dégradation des ressources</b>, qui se présente sous diverses formes :</p>" +
    "<ul>" +
    "<li>le <b>déboisement</b> ou la <b>déforestation</b> ;</li>" +
    "<li>la <b>surexploitation</b> des ressources du sol, du sous-sol et des eaux ;</li>" +
    "<li>l'<b>érosion éolienne</b>, avec le <b>vent</b> qui emporte le sable ;</li>" +
    "<li>l'<b>érosion hydrique</b>, avec le <b>ruissellement des eaux</b> ;</li>" +
    "<li>l'<b>érosion côtière</b>, avec l'<b>avancée de la mer</b> ;</li>" +
    "<li>l'<b>extraction du sable marin</b> ;</li>" +
    "<li>les <b>feux de brousse</b>, qui participent à la déforestation ;</li>" +
    "<li>la <b>pollution</b> du sol, de l'eau et de l'air.</li>" +
    "</ul>",
  astuce: "Trois érosions, trois coupables : <b>éolienne</b> = le vent (Éole, dieu du vent), <b>hydrique</b> = l'eau qui ruisselle, <b>côtière</b> = la mer qui avance sur la côte.",
  regle: "L'environnement est abîmé par l'homme et par la nature : déboisement, surexploitation, érosions (vent, eau, mer), extraction du sable marin, feux de brousse et pollution.",
  niveaux: [
    [
      { t: "qcm", q: "L'environnement, c'est…", choix: ["ce qui nous entoure", "seulement la forêt", "seulement la mer"], r: "ce qui nous entoure", expl: "L'environnement, c'est tout ce qui nous entoure : le sol, l'eau, l'air, les arbres, les animaux…" },
      { t: "qcm", q: "Qui cause la dégradation des ressources du milieu ?", choix: ["l'homme et la nature", "seulement l'homme", "seulement la nature"], r: "l'homme et la nature", expl: "Le cahier dit que l'environnement subit des agressions dues à l'homme ET à la nature." },
      { t: "vf", q: "Les feux de brousse participent à la déforestation.", r: true, expl: "En brûlant les arbres, les feux de brousse font disparaître la forêt." },
      { t: "qcm", q: "Dans l'érosion <b>éolienne</b>, qu'est-ce qui emporte le sable ?", choix: ["le vent", "la pluie", "la mer"], r: "le vent", expl: "Éolienne vient d'Éole, le dieu du vent : c'est le vent qui emporte le sable." },
      { t: "qcm", q: "L'érosion <b>côtière</b> est causée par…", choix: ["l'avancée de la mer", "le vent du désert", "les feux de brousse"], r: "l'avancée de la mer", expl: "La côte, c'est le bord de la mer : l'érosion côtière vient de l'avancée de la mer." },
      { t: "vf", q: "La pollution peut toucher le sol, l'eau et l'air.", r: true, expl: "Le cahier cite la pollution du sol, de l'eau et de l'air." }
    ],
    [
      { t: "relier", q: "Relie chaque érosion à sa cause.", paires: [["érosion éolienne", "le vent"], ["érosion hydrique", "le ruissellement des eaux"], ["érosion côtière", "l'avancée de la mer"]], expl: "Éolienne = vent ; hydrique = eau ; côtière = mer." },
      { t: "qcm", q: "Après de fortes pluies à Kaffrine, l'eau qui coule creuse des ravins dans le champ de Moussa. C'est…", choix: ["l'érosion hydrique", "l'érosion éolienne", "l'érosion côtière"], r: "l'érosion hydrique", expl: "« Hydrique » veut dire « lié à l'eau » : c'est le ruissellement des eaux." },
      { t: "qcm", q: "À Louga, le vent de l'harmattan emporte le sable des champs. C'est…", choix: ["l'érosion éolienne", "l'érosion hydrique", "la pollution de l'eau"], r: "l'érosion éolienne", expl: "Quand c'est le vent qui emporte le sable, on parle d'érosion éolienne." },
      { t: "qcm", q: "À Rufisque, la mer avance et détruit des maisons au bord de la plage. C'est…", choix: ["l'érosion côtière", "l'érosion éolienne", "le déboisement"], r: "l'érosion côtière", expl: "L'avancée de la mer sur la côte, c'est l'érosion côtière." },
      { t: "saisie", q: "Le déboisement s'appelle aussi la …", r: "déforestation", expl: "Le cahier écrit : « le déboisement ou la déforestation »." },
      { t: "vf", q: "Prendre trop de ressources du sol, du sous-sol et des eaux s'appelle la surexploitation.", r: true, expl: "Sur-exploiter, c'est exploiter trop, plus que ce que la nature peut donner." },
      { t: "vf", q: "L'extraction du sable marin est une forme de dégradation des ressources.", r: true, expl: "Retirer le sable des plages abîme les côtes : c'est une forme de dégradation." },
      { t: "classer", q: "Range chaque forme de dégradation selon ce qu'elle abîme d'abord.", cases: ["les arbres", "le sol et la côte"], items: [["le déboisement", "les arbres"], ["les feux de brousse", "les arbres"], ["l'érosion éolienne", "le sol et la côte"], ["l'érosion côtière", "le sol et la côte"], ["l'extraction du sable marin", "le sol et la côte"], ["la déforestation", "les arbres"]], expl: "Déboisement, déforestation et feux de brousse détruisent les arbres ; les érosions et l'extraction du sable abîment le sol et la côte." },
      { t: "trous", q: "Complète avec les mots de la leçon.", texte: "L'[environnement], c'est ce qui nous entoure. Il subit des [agressions] dues à l'homme et à la [nature].", expl: "C'est la première phrase de la leçon." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces formes de dégradation n'est PAS une érosion ?", choix: ["les feux de brousse", "l'érosion hydrique", "l'érosion éolienne", "l'érosion côtière"], r: "les feux de brousse", expl: "Les feux de brousse détruisent la végétation par le feu ; les érosions sont dues au vent, à l'eau ou à la mer." },
      { t: "vf", q: "L'érosion hydrique est causée par le vent.", r: false, expl: "Hydrique = eau. C'est l'érosion <b>éolienne</b> qui est causée par le vent." },
      { t: "vf", q: "Seul l'homme abîme l'environnement.", r: false, expl: "La nature aussi : le vent, la pluie et la mer provoquent des érosions." },
      { t: "saisie", q: "Comment appelle-t-on l'érosion causée par l'avancée de la mer ?", r: ["l'érosion côtière", "érosion côtière", "côtière"], expl: "La côte est le bord de la mer : érosion côtière." },
      { t: "qcm", q: "Que veut dire « érosion <b>hydrique</b> » ?", choix: ["érosion due à l'eau", "érosion due au feu", "érosion due au vent"], r: "érosion due à l'eau", expl: "Hydrique vient d'un mot qui veut dire « eau », comme dans « hydraulique »." },
      { t: "classer", q: "Cause humaine ou cause naturelle ?", cases: ["surtout l'homme", "surtout la nature"], items: [["le déboisement", "surtout l'homme"], ["l'extraction du sable marin", "surtout l'homme"], ["la pollution des usines", "surtout l'homme"], ["le vent qui emporte le sable", "surtout la nature"], ["le ruissellement des eaux de pluie", "surtout la nature"], ["la surexploitation des eaux", "surtout l'homme"]], expl: "Couper, extraire, polluer, surexploiter : c'est l'homme. Le vent et la pluie : c'est la nature." }
    ],
    [
      { t: "trous", q: "Complète la liste des formes de dégradation.", texte: "l'érosion [éolienne] avec le vent ; l'érosion [hydrique] avec le ruissellement des eaux ; l'érosion [côtière] avec l'avancée de la mer ; les feux de [brousse] qui participent à la déforestation.", expl: "Éolienne (vent), hydrique (eau), côtière (mer), feux de brousse." },
      { t: "qcm", q: "Fatou voit des camions prendre le sable de la plage de Malika. De quelle forme de dégradation s'agit-il ?", choix: ["l'extraction du sable marin", "l'érosion éolienne", "la pollution de l'air"], r: "l'extraction du sable marin", expl: "Prendre le sable de la plage, c'est l'extraction du sable marin." },
      { t: "relier", q: "Relie chaque situation à la forme de dégradation.", paires: [["On coupe tous les arbres de la forêt.", "le déboisement"], ["Une usine rejette de la fumée noire.", "la pollution de l'air"], ["Le feu ravage la brousse en saison sèche.", "les feux de brousse"], ["Les pêcheurs prennent trop de poissons.", "la surexploitation"]], expl: "Couper les arbres = déboisement ; fumée = pollution de l'air ; feu = feux de brousse ; trop prendre = surexploitation." },
      { t: "vf", q: "La pollution du sol, de l'eau et de l'air fait partie des formes de dégradation des ressources.", r: true, expl: "C'est la dernière forme citée dans la leçon." },
      { t: "saisie", q: "Comment appelle-t-on l'érosion causée par le vent ?", r: ["l'érosion éolienne", "érosion éolienne", "éolienne"], expl: "Le vent → érosion éolienne." },
      { t: "qcm", q: "Pourquoi dit-on que les feux de brousse participent à la déforestation ?", choix: ["parce qu'ils détruisent les arbres", "parce qu'ils font avancer la mer", "parce qu'ils apportent la pluie"], r: "parce qu'ils détruisent les arbres", expl: "Moins d'arbres = déforestation." }
    ]
  ]
});
