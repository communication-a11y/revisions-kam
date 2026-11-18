// À VÉRIFIER : un des sites préhistoriques du Sénégal est un lac dont le nom est mal lisible au cahier (« Thiamassa ? », photo 0141). Il n'est pas cité dans le module et ne fait l'objet d'aucun exercice.
LECONS.push({
  id: "hi-prehistoire-afrique-senegal",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La préhistoire en Afrique et au Sénégal",
  date: "2026-10-01",
  photos: ["DJI_20261118222107_0141_D.jpg"],
  retiens:
    "<p>La Terre existe depuis des <b>milliards d'années</b>.</p>" +
    "<p>L'Afrique est le <b>berceau de l'humanité</b>, car les squelettes des <b>premiers hommes</b> ont été trouvés en Afrique.</p>" +
    "<p>Les principaux sites préhistoriques en Afrique se trouvent en <b>Afrique du Sud</b>, au <b>Kenya</b>, en <b>Tanzanie</b>, en <b>Éthiopie</b>, au <b>Niger</b>, au <b>Maroc</b>…</p>" +
    "<p>Les principaux sites préhistoriques au Sénégal sont : la <b>pointe de Fann</b>, le site de <b>Bel-Air</b>, les gisements des <b>Madeleines</b>, un lac (nom à vérifier avec le maître) et le <b>Niokolo-Koba</b>.</p>" +
    "<p>Au début du <b>20<sup>e</sup> siècle</b>, tout un outillage préhistorique a été découvert par des chercheurs de l'<b>IFAN</b> (Institut fondamental d'Afrique noire).</p>",
  astuce: "Les premiers hommes sont nés en Afrique : l'Afrique est le « berceau », comme le lit d'un bébé.",
  regle: "L'Afrique est le berceau de l'humanité, car on y a trouvé les squelettes des premiers hommes. Au Sénégal, les chercheurs de l'IFAN ont découvert des outils préhistoriques à Fann, à Bel-Air, aux Madeleines, au Niokolo-Koba…",
  niveaux: [
    [
      { t: "qcm", q: "Pourquoi dit-on que l'Afrique est le berceau de l'humanité ?", choix: ["parce que les squelettes des premiers hommes y ont été trouvés", "parce que c'est le plus grand continent", "parce qu'il y fait chaud"], r: "parce que les squelettes des premiers hommes y ont été trouvés", expl: "Les plus anciens squelettes humains ont été découverts en Afrique." },
      { t: "vf", q: "La Terre existe depuis des milliards d'années.", r: true, expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Que signifie le sigle IFAN ?", choix: ["Institut fondamental d'Afrique noire", "Institut français d'Afrique du Nord", "Institut des forêts africaines nationales"], r: "Institut fondamental d'Afrique noire", expl: "IFAN = Institut fondamental d'Afrique noire." },
      { t: "qcm", q: "Lequel de ces lieux est un site préhistorique du Sénégal ?", choix: ["la pointe de Fann", "le lac Victoria", "le mont Kilimandjaro"], r: "la pointe de Fann", expl: "La pointe de Fann, à Dakar, est un site préhistorique du Sénégal." },
      { t: "vf", q: "Le Kenya et l'Éthiopie ont des sites préhistoriques importants.", r: true, expl: "Ils font partie des principaux sites préhistoriques d'Afrique cités dans la leçon." }
    ],
    [
      { t: "classer", q: "Site préhistorique au Sénégal ou ailleurs en Afrique ?", cases: ["au Sénégal", "ailleurs en Afrique"], items: [["la pointe de Fann", "au Sénégal"], ["le Kenya", "ailleurs en Afrique"], ["Bel-Air", "au Sénégal"], ["la Tanzanie", "ailleurs en Afrique"], ["le Niokolo-Koba", "au Sénégal"], ["l'Afrique du Sud", "ailleurs en Afrique"]], expl: "Fann, Bel-Air, les Madeleines et le Niokolo-Koba sont au Sénégal." },
      { t: "saisie", q: "Au début de quel siècle les chercheurs de l'IFAN ont-ils découvert un outillage préhistorique ? (écris le nombre)", r: "20", nombre: true, expl: "Au début du 20e siècle." },
      { t: "trous", q: "Complète.", texte: "L'Afrique est le [berceau] de l'humanité, car les [squelettes] des premiers hommes y ont été trouvés.", expl: "C'est la phrase clé de la leçon." },
      { t: "qcm", q: "Qui a découvert l'outillage préhistorique du Sénégal ?", choix: ["des chercheurs de l'IFAN", "des pêcheurs de Kayar", "des soldats de l'empire du Mali"], r: "des chercheurs de l'IFAN", expl: "Ce sont des chercheurs de l'IFAN, au début du 20e siècle." },
      { t: "vf", q: "Le Maroc et le Niger font partie des sites préhistoriques d'Afrique cités dans la leçon.", r: true, expl: "La leçon cite l'Afrique du Sud, le Kenya, la Tanzanie, l'Éthiopie, le Niger et le Maroc." },
      { t: "qcm", q: "Les Madeleines, citées parmi les sites préhistoriques, sont…", choix: ["des gisements au Sénégal", "une ville d'Éthiopie", "un fleuve du Kenya"], r: "des gisements au Sénégal", expl: "Les gisements des Madeleines sont au Sénégal, au large de Dakar." },
      { t: "saisie", q: "Complète : le parc du Niokolo-… (écris la fin du nom)", r: "Koba", expl: "Le Niokolo-Koba est cité parmi les sites préhistoriques du Sénégal." },
      { t: "vf", q: "Les premiers hommes ont été trouvés en Europe.", r: false, expl: "Ils ont été trouvés en Afrique : c'est pour cela qu'elle est le berceau de l'humanité." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["La Terre existe depuis des milliards d'années.", "La Terre existe depuis 2 000 ans.", "La Terre existe depuis l'hégire."], r: "La Terre existe depuis des milliards d'années.", expl: "C'est ce que dit la leçon." },
      { t: "relier", q: "Relie.", paires: [["IFAN", "Institut fondamental d'Afrique noire"], ["berceau de l'humanité", "l'Afrique"], ["site de Dakar", "la pointe de Fann"]], expl: "Trois idées de la leçon." },
      { t: "vf", q: "Bel-Air est un site préhistorique du Kenya.", r: false, expl: "Bel-Air est un site préhistorique du Sénégal (à Dakar)." },
      { t: "qcm", q: "Que montrent les outils découverts par l'IFAN au Sénégal ?", choix: ["que des hommes vivaient au Sénégal pendant la préhistoire", "que le Sénégal n'existait pas", "que les outils viennent tous d'Europe"], r: "que des hommes vivaient au Sénégal pendant la préhistoire", expl: "Un outillage préhistorique est une trace (source muette) de la présence humaine." },
      { t: "classer", q: "Range ces mots.", cases: ["pays d'Afrique", "site du Sénégal"], items: [["l'Éthiopie", "pays d'Afrique"], ["les Madeleines", "site du Sénégal"], ["le Niger", "pays d'Afrique"], ["Bel-Air", "site du Sénégal"], ["le Maroc", "pays d'Afrique"]], expl: "Les sites du Sénégal sont Fann, Bel-Air, les Madeleines, le Niokolo-Koba…" },
      { t: "saisie", q: "Quel continent est le berceau de l'humanité ?", r: "l'Afrique", expl: "L'Afrique, car on y a trouvé les squelettes des premiers hommes." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'Afrique est le berceau de l'[humanité]. Au Sénégal, les sites préhistoriques sont la pointe de [Fann], le site de [Bel-Air], les gisements des Madeleines et le Niokolo-Koba. L'outillage a été découvert par l'[IFAN] au début du [20]e siècle.", expl: "Résumé complet." },
      { t: "qcm", q: "Awa visite la pointe de Fann avec sa classe. Le maître dit que c'est un site préhistorique. Cela veut dire…", choix: ["qu'on y a trouvé des traces d'hommes de la préhistoire", "qu'on y a construit une usine", "qu'un roi y habitait au 16e siècle"], r: "qu'on y a trouvé des traces d'hommes de la préhistoire", expl: "Un site préhistorique garde des traces (outils, restes) des hommes de la préhistoire." },
      { t: "vf", q: "L'outillage préhistorique du Sénégal a été découvert au début du 20e siècle.", r: true, expl: "Par des chercheurs de l'IFAN." },
      { t: "qcm", q: "Lequel n'est PAS un site préhistorique du Sénégal cité dans la leçon ?", choix: ["la Tanzanie", "la pointe de Fann", "Bel-Air", "le Niokolo-Koba"], r: "la Tanzanie", expl: "La Tanzanie est un pays d'Afrique de l'Est, pas un site du Sénégal." },
      { t: "classer", q: "Vrai résumé ou erreur ?", cases: ["juste", "faux"], items: [["L'Afrique est le berceau de l'humanité.", "juste"], ["L'IFAN a découvert des outils au Sénégal.", "juste"], ["Les premiers hommes viennent d'Amérique.", "faux"], ["La Terre a 100 ans.", "faux"]], expl: "Relis la leçon : la Terre a des milliards d'années, les premiers hommes viennent d'Afrique." }
    ]
  ]
});
