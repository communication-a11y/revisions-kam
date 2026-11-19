// À VÉRIFIER : la photocopie dit que les Blancs « instaurent la colonisation et l'esclavage ». La traite des esclaves a commencé bien avant la colonisation et la France a aboli l'esclavage dans ses colonies en 1848 : formulation gardée dans le résumé, mais aucune question n'est posée dessus.
// Correction : « Ils vont lutter promouvoir le christianisme » → « Ils vont promouvoir le christianisme ».
LECONS.push({
  id: "hi-senegal-apres-arrivee-blancs",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Le Sénégal après l'arrivée des Blancs",
  date: "2026-11-19",
  photos: ["2026-11-19_04.jpg"],
  retiens:
    "<p>Avec l'arrivée des Blancs, les <b>royaumes</b> sont attaqués et les <b>souverains</b> vaincus, exilés ou parfois tués.</p>" +
    "<p>Les Blancs imposent leur système politique et instaurent la <b>colonisation</b> et l'esclavage.</p>" +
    "<p>Le Sénégal était dirigé par un <b>gouverneur français</b>. La colonie était divisée en <b>cercles</b>. Chaque cercle était divisé en <b>subdivisions</b> ; chaque subdivision était divisée en <b>cantons</b> et chaque canton en <b>villages</b>.</p>" +
    "<p>Les Blancs vont aussi créer des <b>écoles</b>, des <b>routes</b>, des <b>hôpitaux</b>. Ils vont promouvoir le <b>christianisme</b>.</p>",
  astuce: "Du plus grand au plus petit : <b>colonie → cercle → subdivision → canton → village</b>. Comme des boîtes rangées les unes dans les autres.",
  regle: "Après l'arrivée des Blancs, les royaumes du Sénégal sont vaincus et le pays devient une colonie dirigée par un gouverneur français, divisée en cercles, subdivisions, cantons et villages.",
  niveaux: [
    [
      { t: "qcm", q: "Que deviennent les royaumes du Sénégal avec l'arrivée des Blancs ?", choix: ["Ils sont attaqués.", "Ils deviennent plus puissants.", "Ils restent en paix."], r: "Ils sont attaqués.", expl: "Les royaumes sont attaqués et les souverains vaincus." },
      { t: "qcm", q: "Qui dirigeait le Sénégal pendant la colonisation ?", choix: ["un gouverneur français", "un roi du Cayor", "un président sénégalais"], r: "un gouverneur français", expl: "Le Sénégal était dirigé par un gouverneur français." },
      { t: "vf", q: "Certains souverains vaincus ont été exilés ou parfois tués.", r: true, expl: "Les souverains sont vaincus, exilés ou parfois tués." },
      { t: "qcm", q: "En quoi la colonie était-elle d'abord divisée ?", choix: ["en cercles", "en régions", "en quartiers"], r: "en cercles", expl: "La colonie était divisée en cercles." },
      { t: "vf", q: "Les Blancs ont créé des écoles, des routes et des hôpitaux.", r: true, expl: "C'est ce que dit la leçon." }
    ],
    [
      { t: "ordre", q: "Range du plus grand au plus petit.", r: "colonie cercle subdivision canton village", expl: "La colonie est divisée en cercles, les cercles en subdivisions, les subdivisions en cantons, les cantons en villages." },
      { t: "trous", q: "Complète.", texte: "Chaque cercle était divisé en [subdivisions] ; chaque subdivision en [cantons] et chaque canton en [villages].", expl: "Du plus grand au plus petit : cercle, subdivision, canton, village." },
      { t: "saisie", q: "Quelle religion les Blancs ont-ils voulu promouvoir ?", r: ["le christianisme", "christianisme"], expl: "Ils vont promouvoir le christianisme." },
      { t: "classer", q: "Range ces faits.", cases: ["ce qui arrive aux royaumes", "ce que créent les Blancs"], items: [["les royaumes sont attaqués", "ce qui arrive aux royaumes"], ["les souverains sont vaincus", "ce qui arrive aux royaumes"], ["les souverains sont exilés", "ce qui arrive aux royaumes"], ["des écoles", "ce que créent les Blancs"], ["des routes", "ce que créent les Blancs"], ["des hôpitaux", "ce que créent les Blancs"]], expl: "D'un côté la défaite des royaumes, de l'autre ce que les colons construisent." },
      { t: "qcm", q: "Quel système politique s'installe au Sénégal ?", choix: ["la colonisation", "la démocratie", "le matrilignage"], r: "la colonisation", expl: "Les Blancs imposent leur système politique : la colonisation." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["souverain", "roi qui gouverne un royaume"], ["exilé", "obligé de quitter son pays"], ["gouverneur", "chef qui dirige la colonie"], ["colonie", "pays dominé par un autre pays"]], expl: "Les mots-clés de la leçon." },
      { t: "saisie", q: "Le Sénégal était dirigé par un gouverneur de quel pays ? (adjectif)", r: "français", expl: "Un gouverneur français." },
      { t: "vf", q: "Un canton est plus grand qu'un cercle.", r: false, expl: "C'est l'inverse : un cercle est divisé en subdivisions, puis en cantons." }
    ],
    [
      { t: "qcm", q: "Qu'est-ce qui est le plus petit ?", choix: ["le village", "le canton", "la subdivision", "le cercle"], r: "le village", expl: "Le canton est divisé en villages : le village est la plus petite division." },
      { t: "qcm", q: "Une subdivision est une partie…", choix: ["d'un cercle", "d'un canton", "d'un village"], r: "d'un cercle", expl: "Chaque cercle était divisé en subdivisions." },
      { t: "vf", q: "Avant l'arrivée des Blancs, le Sénégal était formé de plusieurs royaumes.", r: true, expl: "Revois la leçon « Les royaumes du Sénégal » : Cayor, Baol, Walo, Sine, Saloum…" },
      { t: "qcm", q: "« Les souverains sont exilés. » Cela veut dire qu'ils sont…", choix: ["obligés de partir loin de leur pays", "nommés gouverneurs", "devenus plus riches"], r: "obligés de partir loin de leur pays", expl: "Être exilé, c'est être chassé de son pays." },
      { t: "relier", q: "Relie chaque division à ce qu'elle contient.", paires: [["la colonie", "des cercles"], ["un cercle", "des subdivisions"], ["une subdivision", "des cantons"], ["un canton", "des villages"]], expl: "Chaque division contient la suivante, plus petite." },
      { t: "qcm", q: "Pourquoi peut-on dire que les rois ont perdu leur pouvoir ?", choix: ["parce que le pays est dirigé par un gouverneur français", "parce qu'ils ont construit des routes", "parce qu'ils sont devenus chrétiens"], r: "parce que le pays est dirigé par un gouverneur français", expl: "Les Blancs imposent leur système politique : c'est le gouverneur qui dirige." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Avec l'arrivée des Blancs, les [royaumes] sont attaqués et les souverains [vaincus]. Le Sénégal devient une [colonie] dirigée par un [gouverneur] français. Elle est divisée en [cercles], puis en subdivisions, en cantons et en villages.", expl: "Toute la leçon en un texte." },
      { t: "classer", q: "Avant ou après l'arrivée des Blancs ?", cases: ["avant", "après"], items: [["le roi est choisi par le matrilignage", "avant"], ["un gouverneur français dirige le pays", "après"], ["la victoire de Danki (1549)", "avant"], ["le pays est divisé en cercles", "après"], ["le Cayor et le Baol sont des royaumes libres", "avant"], ["des souverains sont exilés", "après"]], expl: "Avant : les royaumes et leurs rois. Après : la colonie, le gouverneur et ses divisions." },
      { t: "qcm", q: "Pendant la colonisation, un village faisait partie…", choix: ["d'un canton", "d'un royaume", "d'une école"], r: "d'un canton", expl: "Chaque canton était divisé en villages." },
      { t: "qcm", q: "Laquelle de ces phrases résume le mieux la leçon ?", choix: ["Les royaumes sont vaincus et le Sénégal devient une colonie française.", "Le Sénégal devient indépendant.", "Les royaumes du Sénégal s'unissent contre le Djolof."], r: "Les royaumes sont vaincus et le Sénégal devient une colonie française.", expl: "C'est l'idée principale de la leçon." },
      { t: "vf", q: "Pendant la colonisation, chaque village appartenait à un canton.", r: true, expl: "Chaque canton était divisé en villages." }
    ]
  ]
});
