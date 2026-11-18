// À VÉRIFIER : la légende du rond central des tenailles est peu lisible (« le point ? », photo 0129) ; elle n'est pas utilisée. L'étape 3 de l'arrachage d'un clou est recopiée telle qu'au cahier (« appuyer sur l'axe »).
LECONS.push({
  id: "ist-outils-marteau-tenailles-pince",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les outils simples : le marteau, les tenailles, la pince universelle",
  date: "2026-09-29",
  photos: ["DJI_20261118221859_0127_D.jpg", "DJI_20261118221915_0129_D.jpg"],
  retiens:
    "<p>Le <b>marteau</b> sert à <b>enfoncer un clou</b> ou à <b>battre le fer</b>. L'effet d'un coup de marteau s'appelle l'<b>effet de choc</b>.<br>Ses parties : la <b>table</b> (la face plate qui frappe), la <b>panne</b> (le côté étroit de la tête) et le manche.</p>" +
    "<p>Les <b>tenailles</b> servent à <b>arracher un clou</b> selon la technique suivante :</p>" +
    "<ul><li>1. écarter les branches ;</li><li>2. saisir la tête du clou entre les mâchoires ;</li><li>3. appuyer sur l'axe ;</li><li>4. exercer une pression vers le bas.</li></ul>" +
    "<p>Ses parties : les <b>branches</b> et les <b>mâchoires</b>.</p>" +
    "<p>La <b>pince universelle</b> est un outil qui a <b>plusieurs fonctions</b> : elle sert à <b>serrer</b> deux objets pour les tirer et les maintenir ; elle sert aussi à <b>couper</b> ou à <b>enlever des clous</b>.<br>Ses parties : la <b>mâchoire</b> et les <b>branches</b>.</p>",
  astuce: "Le marteau <b>enfonce</b>, les tenailles <b>arrachent</b>, la pince universelle fait un peu <b>tout</b> (d'où son nom).",
  regle: "Le marteau enfonce les clous (effet de choc) ; les tenailles arrachent les clous ; la pince universelle serre, maintient, coupe et enlève les clous.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert le marteau ?", choix: ["à enfoncer un clou", "à arracher un clou", "à couper du papier"], r: "à enfoncer un clou", expl: "Il sert aussi à battre le fer." },
      { t: "qcm", q: "À quoi servent les tenailles ?", choix: ["à arracher un clou", "à enfoncer un clou", "à étaler le mortier"], r: "à arracher un clou", expl: "On saisit la tête du clou entre les mâchoires et on tire." },
      { t: "qcm", q: "Pourquoi dit-on que la pince est « universelle » ?", choix: ["parce qu'elle a plusieurs fonctions", "parce qu'elle vient de l'univers", "parce qu'elle est très grande"], r: "parce qu'elle a plusieurs fonctions", expl: "Elle serre, maintient, coupe et enlève les clous." },
      { t: "vf", q: "L'effet d'un coup de marteau s'appelle l'effet de choc.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "relier", q: "Relie chaque outil à son usage principal.", paires: [["le marteau", "enfoncer un clou"], ["les tenailles", "arracher un clou"], ["la pince universelle", "serrer, couper, maintenir"]], expl: "Trois outils, trois usages." }
    ],
    [
      { t: "relier", q: "Relie chaque étape à son numéro pour arracher un clou avec les tenailles.", paires: [["étape 1", "écarter les branches"], ["étape 2", "saisir la tête du clou entre les mâchoires"], ["étape 3", "appuyer sur l'axe"], ["étape 4", "exercer une pression vers le bas"]], expl: "C'est la technique de la leçon, dans l'ordre." },
      { t: "classer", q: "Range ces parties.", cases: ["marteau", "tenailles"], items: [["la table", "marteau"], ["la panne", "marteau"], ["les mâchoires", "tenailles"], ["les branches", "tenailles"]], expl: "Le marteau a une table et une panne ; les tenailles ont des mâchoires et des branches." },
      { t: "qcm", q: "Quelle partie du marteau frappe le clou ?", choix: ["la table", "la panne", "la mâchoire"], r: "la table", expl: "La table est la face plate de la tête du marteau." },
      { t: "saisie", q: "Quel outil prends-tu pour enfoncer un clou dans une planche ?", r: ["le marteau", "un marteau", "marteau"], expl: "Le marteau enfonce les clous." },
      { t: "saisie", q: "Quel outil prends-tu pour arracher un clou tordu ?", r: ["les tenailles", "des tenailles", "tenailles"], expl: "Les tenailles arrachent les clous." },
      { t: "vf", q: "La pince universelle peut aussi couper.", r: true, expl: "Elle sert à couper ou à enlever des clous." },
      { t: "trous", q: "Complète.", texte: "Les tenailles saisissent la tête du clou entre les [mâchoires]. Il faut d'abord écarter les [branches].", expl: "Les deux parties des tenailles." },
      { t: "qcm", q: "Que fait-on en dernier pour arracher un clou avec les tenailles ?", choix: ["exercer une pression vers le bas", "écarter les branches", "saisir la tête du clou"], r: "exercer une pression vers le bas", expl: "C'est l'étape 4." },
      { t: "vf", q: "Le marteau sert aussi à battre le fer.", r: true, expl: "Le forgeron bat le fer avec un marteau." }
    ],
    [
      { t: "qcm", q: "Que fait-on juste avant de saisir la tête du clou ?", choix: ["écarter les branches", "exercer une pression vers le bas", "appuyer sur l'axe"], r: "écarter les branches", expl: "Étape 1 : écarter les branches ; étape 2 : saisir le clou." },
      { t: "vf", q: "Les tenailles servent à enfoncer les clous.", r: false, expl: "Elles servent à les arracher. C'est le marteau qui enfonce." },
      { t: "qcm", q: "Le papa de Moussa veut tenir fermement un petit fil de fer et le couper. Quel outil choisit-il ?", choix: ["la pince universelle", "le marteau", "la truelle"], r: "la pince universelle", expl: "Elle serre, maintient et coupe." },
      { t: "classer", q: "Range ces actions.", cases: ["marteau", "tenailles", "pince universelle"], items: [["enfoncer un clou", "marteau"], ["battre le fer", "marteau"], ["arracher un clou", "tenailles"], ["maintenir deux objets serrés", "pince universelle"], ["couper un fil", "pince universelle"]], expl: "Chaque outil a ses fonctions." },
      { t: "saisie", q: "Comment s'appelle l'effet d'un coup de marteau ? L'effet de …", r: "choc", expl: "L'effet de choc." },
      { t: "qcm", q: "Comment s'appelle le côté étroit de la tête du marteau ?", choix: ["la panne", "la table", "la branche"], r: "la panne", expl: "La table est la face plate ; la panne est le côté étroit." },
      { t: "vf", q: "La pince universelle a une mâchoire et des branches.", r: true, expl: "C'est ce que montre le dessin du cahier." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le [marteau] enfonce les clous. Les [tenailles] arrachent les clous. La pince [universelle] a plusieurs fonctions : serrer, couper, enlever des clous.", expl: "Les trois outils de la leçon." },
      { t: "qcm", q: "Ibrahima a planté un clou au mauvais endroit. Que doit-il faire ?", choix: ["l'arracher avec les tenailles, puis le replanter avec le marteau", "le couper avec des ciseaux", "l'étaler avec la truelle"], r: "l'arracher avec les tenailles, puis le replanter avec le marteau", expl: "Les tenailles arrachent, le marteau enfonce." },
      { t: "relier", q: "Défi : relie chaque partie à son outil.", paires: [["la table", "le marteau"], ["les mâchoires qui saisissent le clou", "les tenailles"], ["les dents", "la scie"], ["les deux lames mobiles", "les ciseaux"]], expl: "Tu révises aussi la leçon sur la scie et les ciseaux." },
      { t: "vf", q: "Le marteau, les tenailles et la pince sont des objets techniques.", r: true, expl: "Ils sont fabriqués par l'homme dans un but utile." },
      { t: "qcm", q: "Dans quel ordre fait-on les deux premières étapes avec les tenailles ?", choix: ["écarter les branches, puis saisir la tête du clou", "saisir la tête du clou, puis écarter les branches", "appuyer vers le bas, puis écarter les branches"], r: "écarter les branches, puis saisir la tête du clou", expl: "Il faut ouvrir les tenailles avant de saisir le clou." }
    ]
  ]
});
