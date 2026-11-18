// À VÉRIFIER : le cahier (0104) écrit « Les organisations scolaires participent à l'exécution de l'école » (sens douteux) ; le module écrit « participent à la gestion et au bon fonctionnement de l'école ».
LECONS.push({
  id: "ve-organisations-communautaires",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations communautaires",
  date: "2026-09-21",
  photos: ["DJI_20261118221356_0102_D.jpg", "DJI_20261118221414_0104_D.jpg", "DJI_20261118221418_0105_D.jpg"],
  retiens:
    "<p>Les <b>organisations communautaires</b> sont des organisations <b>locales</b> qui participent au développement du pays. Parmi elles, on peut citer :</p>" +
    "<p><b>Les organisations scolaires et parascolaires</b></p>" +
    "<ul><li>le <b>CGE</b> : Comité de Gestion de l'École ;</li><li>l'<b>APE</b> : Association des Parents d'Élèves ;</li><li>l'<b>AME</b> : Association des Mères d'Élèves ;</li><li>la <b>CS</b> : Coopérative Scolaire.</li></ul>" +
    "<p><b>Autres organisations</b></p>" +
    "<ul><li>le <b>GIE</b> : Groupement d'Intérêt Économique ;</li><li>le <b>GPF</b> : Groupement de Promotion Féminine ;</li><li>l'<b>ASC</b> : Association Sportive et Culturelle ;</li><li>l'<b>ONG</b> : Organisation Non Gouvernementale.</li></ul>" +
    "<p><b>Pour bien fonctionner</b>, une organisation communautaire doit avoir : un <b>bureau</b> composé de membres ; une <b>mission</b> ; un <b>règlement intérieur</b> ; des <b>activités</b> ; un mode de désignation des responsables ; des critères d'<b>adhésion</b>.</p>" +
    "<p><b>Les domaines d'intervention</b></p>" +
    "<ul><li>Les organisations scolaires participent à la gestion et au bon fonctionnement de l'école.</li>" +
    "<li>Les ASC participent au développement du sport et de la culture.</li>" +
    "<li>Les GIE et les GPF aident les hommes et les femmes à se développer avec des activités rentables.</li>" +
    "<li>Les ONG aident les populations en construisant des écoles, des forages, des puits…, surtout en milieu rural.</li></ul>",
  astuce: "Lis bien chaque sigle : il dit souvent ce que fait l'organisation. <b>A</b>SC = <b>S</b>port et <b>C</b>ulture ; G<b>P</b>F = <b>P</b>romotion <b>F</b>éminine (les femmes).",
  regle: "Les organisations communautaires sont des organisations locales (CGE, APE, AME, CS, GIE, GPF, ASC, ONG) qui aident au développement. Pour fonctionner, elles ont un bureau, une mission, un règlement intérieur, des activités et des critères d'adhésion.",
  niveaux: [
    [
      { t: "qcm", q: "Les organisations communautaires sont des organisations…", choix: ["locales qui participent au développement du pays", "étrangères qui font la guerre", "commerciales qui cherchent à gagner de l'argent"], r: "locales qui participent au développement du pays", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "Que veut dire <b>APE</b> ?", choix: ["Association des Parents d'Élèves", "Association pour l'École", "Amicale des Professeurs d'École"], r: "Association des Parents d'Élèves", expl: "APE : les parents d'élèves." },
      { t: "qcm", q: "Que veut dire <b>ASC</b> ?", choix: ["Association Sportive et Culturelle", "Association Scolaire et Communale", "Amicale des Sages du Conseil"], r: "Association Sportive et Culturelle", expl: "Les ASC organisent le sport et la culture dans les quartiers, comme les navétanes." },
      { t: "vf", q: "La coopérative scolaire (CS) est une organisation scolaire.", r: true, expl: "Elle fait partie des organisations scolaires et parascolaires." },
      { t: "vf", q: "Une organisation communautaire n'a besoin d'aucune règle.", r: false, expl: "Elle doit avoir un règlement intérieur, une mission, un bureau…" },
      { t: "qcm", q: "Le <b>GPF</b> s'occupe surtout…", choix: ["des femmes", "des élèves", "des sportifs"], r: "des femmes", expl: "GPF : Groupement de Promotion Féminine." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["CGE", "Comité de Gestion de l'École"], ["AME", "Association des Mères d'Élèves"], ["GIE", "Groupement d'Intérêt Économique"], ["ONG", "Organisation Non Gouvernementale"], ["CS", "Coopérative Scolaire"]], expl: "Le sigle est formé des premières lettres des mots importants." },
      { t: "classer", q: "Organisation scolaire ou autre organisation ?", cases: ["scolaire ou parascolaire", "autre organisation"], items: [["le CGE", "scolaire ou parascolaire"], ["l'APE", "scolaire ou parascolaire"], ["l'AME", "scolaire ou parascolaire"], ["la CS", "scolaire ou parascolaire"], ["le GIE", "autre organisation"], ["l'ASC", "autre organisation"], ["l'ONG", "autre organisation"], ["le GPF", "autre organisation"]], expl: "Les quatre premières concernent l'école." },
      { t: "relier", q: "Relie chaque organisation à son domaine d'intervention.", paires: [["l'ASC", "le sport et la culture"], ["le GPF", "des activités rentables pour les femmes"], ["l'ONG", "des écoles, forages et puits"], ["l'APE", "l'école"]], expl: "Le domaine se lit souvent dans le sigle." },
      { t: "qcm", q: "Les femmes du quartier d'Awa se regroupent pour transformer et vendre des céréales. Elles forment…", choix: ["un GPF", "une ASC", "un CGE"], r: "un GPF", expl: "Un Groupement de Promotion Féminine aide les femmes à avoir des activités rentables." },
      { t: "qcm", q: "Les jeunes de Pikine organisent un tournoi de football et une soirée théâtrale. C'est le rôle…", choix: ["de l'ASC", "de l'AME", "du GIE"], r: "de l'ASC", expl: "L'Association Sportive et Culturelle développe le sport et la culture." },
      { t: "saisie", q: "Quel est le sigle de l'Organisation Non Gouvernementale ?", r: "ONG", expl: "O-N-G." },
      { t: "vf", q: "Les ONG construisent surtout des écoles, des forages et des puits en milieu rural.", r: true, expl: "C'est ce que dit le cahier." },
      { t: "trous", q: "Complète.", texte: "Pour bien fonctionner, une organisation communautaire doit avoir un [bureau] composé de membres, une [mission] et un [règlement] intérieur.", expl: "Ce sont les éléments de fonctionnement." },
      { t: "saisie", q: "Que veut dire le sigle GIE ?", r: ["Groupement d'Intérêt Économique", "groupement d'intérêt économique"], large: true, expl: "GIE : Groupement d'Intérêt Économique." }
    ],
    [
      { t: "qcm", q: "Les GIE et les GPF aident les hommes et les femmes à se développer grâce à…", choix: ["des activités rentables", "des tournois de football", "des puits gratuits"], r: "des activités rentables", expl: "Rentable = qui rapporte de l'argent." },
      { t: "vf", q: "L'AME est l'Association des Maîtres d'École.", r: false, expl: "Piège : AME = Association des Mères d'Élèves." },
      { t: "qcm", q: "Que veut dire « critères d'adhésion » ?", choix: ["les conditions pour devenir membre", "le salaire des membres", "les vacances des membres"], r: "les conditions pour devenir membre", expl: "Adhérer, c'est devenir membre." },
      { t: "classer", q: "Est-ce nécessaire au fonctionnement d'une organisation communautaire ?", cases: ["nécessaire", "pas dans la leçon"], items: [["un bureau", "nécessaire"], ["une mission", "nécessaire"], ["un règlement intérieur", "nécessaire"], ["des critères d'adhésion", "nécessaire"], ["une armée", "pas dans la leçon"], ["un drapeau national", "pas dans la leçon"]], expl: "Bureau, mission, règlement, activités, désignation des responsables, critères d'adhésion." },
      { t: "saisie", q: "Quel est le sigle du Comité de Gestion de l'École ?", r: "CGE", expl: "C-G-E." },
      { t: "relier", q: "Relie chaque situation à l'organisation qui agit.", paires: [["Un forage est construit dans un village de Kédougou.", "une ONG"], ["Des parents se réunissent pour aider l'école.", "l'APE"], ["Les élèves vendent des cahiers à prix réduit.", "la coopérative scolaire"]], expl: "Pense au domaine de chaque organisation." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Les ASC développent le sport et la culture.", expl: "C'est le domaine d'intervention des ASC." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Dans le village de Khady, l'[ONG] a construit un puits. Les femmes du [GPF] cultivent un jardin et vendent les légumes. Les jeunes de l'[ASC] organisent un tournoi. À l'école, les parents sont réunis dans l'[APE].", expl: "Chaque organisation a son domaine." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Les organisations communautaires participent au développement du pays.", "Les organisations communautaires sont toutes des écoles.", "Les organisations communautaires viennent de l'étranger."], r: "Les organisations communautaires participent au développement du pays.", expl: "Ce sont des organisations locales qui aident au développement." },
      { t: "classer", q: "Range chaque organisation selon son domaine.", cases: ["l'école", "l'économie", "le sport et la culture"], items: [["le CGE", "l'école"], ["l'AME", "l'école"], ["le GIE", "l'économie"], ["le GPF", "l'économie"], ["l'ASC", "le sport et la culture"]], expl: "École, économie, sport et culture." },
      { t: "saisie", q: "Quel est le sigle de l'Association des Mères d'Élèves ?", r: "AME", expl: "A-M-E." },
      { t: "vf", q: "Une organisation communautaire doit avoir un mode de désignation de ses responsables.", r: true, expl: "On doit savoir comment on choisit le président, le trésorier…" }
    ]
  ]
});
