// À VÉRIFIER : le cahier dit que l'armée coloniale avait « sept cent mille hommes dont deux mille cavaliers » : chiffre impossible
// (peut-être sept mille ?). Le module ne reprend pas l'effectif. Le cahier date la page « jeudi 25 novembre » : le 25 était un mercredi.
LECONS.push({
  id: "hi-bataille-pathe-badiane",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La bataille de Pathé Badiane",
  date: "2026-11-25",
  photos: ["2026-11-26_01.jpg"],
  retiens:
    "<p><b>Lat Dior Diop</b>, en exil, s'était converti à l'islam pour rester auprès de <b>Maba Diakhou Ba</b>, qui souhaitait voir naître un État islamique du Saloum (le <b>Rip</b>).</p>" +
    "<p>Pour contrecarrer les projets colonisateurs de la France, Maba eut l'idée de tendre une <b>embuscade</b> à l'armée coloniale dans un ravin de <b>Pathé Badiane</b>, le <b>30 novembre 1865</b>.</p>" +
    "<p>Avec Lat Dior, il remporta une éclatante <b>victoire</b> en mettant en déroute les troupes de l'armée coloniale dirigées par <b>Pinet-Laprade</b>.</p>" +
    "<p><b>Issue de la bataille :</b></p>" +
    "<ul><li><b>25 morts</b> et <b>80 blessés</b> dans les rangs de l'armée coloniale ;</li>" +
    "<li><b>2 canons</b> arrachés aux hommes de Pinet-Laprade ;</li>" +
    "<li>Pinet-Laprade lui-même est <b>blessé à l'épaule</b>.</li></ul>",
  astuce: "<b>30 novembre 1865</b> : Maba + Lat Dior, une embuscade dans un ravin, et Pinet-Laprade repart blessé à l'épaule.",
  regle: "Le 30 novembre 1865, Maba Diakhou Ba et Lat Dior battent l'armée coloniale de Pinet-Laprade grâce à une embuscade dans un ravin de Pathé Badiane, dans le Rip.",
  niveaux: [
    [
      { t: "qcm", q: "En quelle année a eu lieu la bataille de Pathé Badiane ?", choix: ["1865", "1886", "1817"], r: "1865", expl: "Le 30 novembre 1865." },
      { t: "qcm", q: "Qui a eu l'idée de tendre une embuscade à l'armée coloniale ?", choix: ["Maba Diakhou Ba", "Pinet-Laprade", "Coumba Ndoffène"], r: "Maba Diakhou Ba", expl: "C'est Maba qui prépara l'embuscade, avec Lat Dior à ses côtés." },
      { t: "vf", q: "À Pathé Badiane, Maba et Lat Dior ont remporté la victoire.", r: true, expl: "Ils ont mis en déroute les troupes coloniales." },
      { t: "qcm", q: "Qui dirigeait les troupes de l'armée coloniale ?", choix: ["Pinet-Laprade", "Lat Dior", "Maba Diakhou Ba"], r: "Pinet-Laprade", expl: "Pinet-Laprade commandait les troupes françaises." },
      { t: "qcm", q: "Où l'embuscade a-t-elle été tendue ?", choix: ["dans un ravin", "sur une île", "dans une ville fortifiée"], r: "dans un ravin", expl: "Un ravin de Pathé Badiane : l'ennemi ne pouvait pas voir venir l'attaque." }
    ],
    [
      { t: "trous", q: "Complète la date.", nombre: true, texte: "La bataille de Pathé Badiane a eu lieu le [30] novembre [1865].", expl: "30 novembre 1865." },
      { t: "relier", q: "Relie chaque personnage à ce qu'il a fait.", paires: [["Maba Diakhou Ba", "prépare l'embuscade"], ["Lat Dior Diop", "se convertit et combat avec Maba"], ["Pinet-Laprade", "dirige l'armée coloniale"]], expl: "Maba et Lat Dior d'un côté, Pinet-Laprade de l'autre." },
      { t: "qcm", q: "Pourquoi Lat Dior s'était-il converti à l'islam ?", choix: ["pour rester auprès de Maba", "pour devenir Damel du Walo", "pour aider l'armée coloniale"], r: "pour rester auprès de Maba", expl: "En exil, il s'était converti pour rester aux côtés de Maba Diakhou Ba." },
      { t: "qcm", q: "Que souhaitait voir naître Maba Diakhou Ba ?", choix: ["un État islamique du Saloum", "une colonie française", "un empire au Mali"], r: "un État islamique du Saloum", expl: "Un État islamique du Saloum, dans le Rip." },
      { t: "saisie", q: "Combien de morts l'armée coloniale a-t-elle eus à Pathé Badiane ?", r: "25", nombre: true, expl: "25 morts et 80 blessés." },
      { t: "saisie", q: "Combien de blessés dans les rangs de l'armée coloniale ?", r: "80", nombre: true, expl: "25 morts et 80 blessés." },
      { t: "saisie", q: "Combien de canons ont été arrachés aux hommes de Pinet-Laprade ?", r: "2", nombre: true, expl: "2 canons." },
      { t: "qcm", q: "Où Pinet-Laprade a-t-il été blessé ?", choix: ["à l'épaule", "à la jambe", "à la tête"], r: "à l'épaule", expl: "Le chef de l'armée coloniale est blessé à l'épaule." }
    ],
    [
      { t: "qcm", q: "Quel était le but de Maba en tendant cette embuscade ?", choix: ["contrecarrer les projets colonisateurs de la France", "devenir l'allié de la France", "conquérir l'Égypte"], r: "contrecarrer les projets colonisateurs de la France", expl: "Contrecarrer, c'est faire échouer : Maba voulait arrêter la conquête française." },
      { t: "vf", q: "Pathé Badiane se trouve dans le Rip, dans la région du Saloum.", r: true, expl: "Maba voulait un État islamique du Saloum (Rip)." },
      { t: "vf", q: "À Pathé Badiane, Lat Dior combattait contre Maba.", r: false, expl: "Lat Dior était aux côtés de Maba : ils ont gagné ensemble." },
      { t: "classer", q: "Dans quel camp ?", cases: ["camp de Maba", "armée coloniale"], items: [["Maba Diakhou Ba", "camp de Maba"], ["Lat Dior Diop", "camp de Maba"], ["Pinet-Laprade", "armée coloniale"], ["les 2 canons perdus", "armée coloniale"]], expl: "Maba et Lat Dior contre les troupes de Pinet-Laprade." },
      { t: "qcm", q: "Qu'est-ce qu'une embuscade ?", choix: ["une attaque surprise d'ennemis qu'on attend cachés", "une bataille en plein champ annoncée à l'avance", "un traité de paix"], r: "une attaque surprise d'ennemis qu'on attend cachés", expl: "Cachés dans le ravin, les guerriers de Maba ont surpris l'armée coloniale." },
      { t: "saisie", q: "Combien de soldats de l'armée coloniale ont été touchés (morts et blessés ensemble) ?", r: "105", nombre: true, expl: "25 morts + 80 blessés = 105." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le 30 novembre 1865, [Maba] Diakhou Ba et Lat [Dior] tendent une [embuscade] à l'armée coloniale dans un ravin de Pathé [Badiane]. Le chef des troupes coloniales, Pinet-[Laprade], est blessé à l'[épaule].", expl: "Les mots-clés de la leçon." },
      { t: "qcm", q: "Combien d'années se sont écoulées entre la bataille de Pathé Badiane (1865) et l'an 2000 ?", choix: ["135 ans", "145 ans", "125 ans"], r: "135 ans", expl: "2000 − 1865 = 135." },
      { t: "relier", q: "Relie chaque nombre à ce qu'il représente.", paires: [["1865", "année de la bataille"], ["30", "jour du mois de novembre"], ["25", "morts coloniaux"], ["80", "blessés coloniaux"], ["2", "canons pris"]], expl: "Les chiffres de la leçon." },
      { t: "qcm", q: "Lequel de ces faits n'appartient PAS à la bataille de Pathé Badiane ?", choix: ["le suicide collectif des femmes de Nder", "l'embuscade dans un ravin", "la blessure de Pinet-Laprade", "la prise de 2 canons"], r: "le suicide collectif des femmes de Nder", expl: "Nder, c'est l'histoire du Walo (1820)." },
      { t: "vf", q: "La bataille de Pathé Badiane fut une défaite pour l'armée coloniale.", r: true, expl: "Ses troupes ont été mises en déroute." }
    ]
  ]
});
