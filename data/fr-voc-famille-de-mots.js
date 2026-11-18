LECONS.push({
  id: "fr-voc-famille-de-mots",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les mots de la même famille",
  date: "2026-10-12",
  photos: ["DJI_20261118220502_0037_D.jpg", "DJI_20261118220508_0038_D.jpg"],
  retiens:
    "<p>Une <b>famille de mots</b> rassemble tous les mots construits à partir d'un même mot.<br>" +
    "Ex : Le <b>jardinier jardine</b> dans son <b>jardin</b>. La <b>danseuse</b> et le <b>danseur dansent</b> sur la piste de <b>danse</b>.</p>" +
    "<p>Les mots d'une famille sont formés à partir d'une partie commune appelée le <b>radical</b>. Ils font tous penser à la même chose : ils ont la même idée.<br>" +
    "Ex : <b>mont</b>er, <b>mont</b>agne, <b>mont</b>agneux → radical : <b>mont</b>.</p>" +
    "<p>Une famille de mots peut être constituée de <b>noms</b>, d'<b>adjectifs</b> et de <b>verbes</b>.<br>" +
    "Ex : Le chemin est <b>long</b> (adjectif). Les promeneurs <b>longent</b> (verbe) l'orée du bois. Ce pré a une <b>longueur</b> (nom) de cent mètres.</p>" +
    "<p><b>Attention !</b> Des mots peuvent avoir des lettres communes mais ne pas être de la même famille.<br>Ex : <b>terre</b> et <b>terreur</b> ; <b>couper</b> et <b>couple</b>.</p>",
  astuce: "Pour vérifier, demande-toi : est-ce que les deux mots ont la même idée ? Terre (le sol) et terreur (la grande peur) n'ont pas la même idée : pas la même famille.",
  regle: "Les mots d'une même famille ont le même radical ET la même idée. Avoir des lettres en commun ne suffit pas (terre / terreur).",
  niveaux: [
    [
      { t: "qcm", q: "Quel mot est de la famille de <b>jardin</b> ?", choix: ["jardinier", "jaune", "jarre"], r: "jardinier", expl: "Le jardinier travaille au jardin : même radical, même idée." },
      { t: "qcm", q: "Quel est le radical de <b>montagne</b>, <b>monter</b>, <b>montagneux</b> ?", choix: ["mont", "mon", "agne"], r: "mont", expl: "C'est l'exemple de la leçon : radical mont." },
      { t: "vf", q: "« terre » et « terreur » sont de la même famille.", r: false, expl: "Ils ont des lettres communes, mais pas la même idée." },
      { t: "vf", q: "« danse », « danseur » et « dansent » sont de la même famille.", r: true, expl: "Ils sont construits à partir du même mot et font penser à la même chose." },
      { t: "qcm", q: "Une famille de mots peut contenir…", choix: ["des noms, des adjectifs et des verbes", "seulement des noms", "seulement des verbes"], r: "des noms, des adjectifs et des verbes", expl: "long (adjectif), longer (verbe), longueur (nom)." },
      { t: "classer", q: "Range ces mots dans leur famille.", cases: ["famille de « jardin »", "famille de « danse »"], items: [["jardiner", "famille de « jardin »"], ["danseuse", "famille de « danse »"], ["jardinier", "famille de « jardin »"], ["danser", "famille de « danse »"], ["jardinage", "famille de « jardin »"], ["danseur", "famille de « danse »"]], expl: "Chaque famille a son radical : jardin-, dans-." }
    ],
    [
      { t: "qcm", q: "Quel mot est de la famille de <b>long</b> ?", choix: ["longueur", "loge", "loin"], r: "longueur", expl: "long, longer, longueur : même radical." },
      { t: "qcm", q: "Quel mot est de la famille de <b>pêche</b> ?", choix: ["pêcheur", "pelle", "perle"], r: "pêcheur", expl: "Le pêcheur fait la pêche." },
      { t: "qcm", q: "Quel mot est de la famille de <b>fleur</b> ?", choix: ["fleuriste", "flèche", "fleuve"], r: "fleuriste", expl: "Le fleuriste vend des fleurs ; le fleuve n'a rien à voir." },
      { t: "saisie", q: "Écris le nom de la famille de <b>long</b> qui désigne une mesure (dans la leçon : « une … de cent mètres »).", r: "longueur", expl: "Ce pré a une longueur de cent mètres." },
      { t: "saisie", q: "Écris le verbe de la famille de <b>jardin</b>.", r: "jardiner", expl: "Le jardinier jardine : verbe jardiner." },
      { t: "relier", q: "Relie chaque mot à un mot de sa famille.", paires: [["école", "écolier"], ["chant", "chanteur"], ["lait", "laitier"], ["pêche", "pêcheur"], ["mont", "montagne"]], expl: "Même radical, même idée." },
      { t: "classer", q: "Range ces mots de la famille de « long » selon leur nature.", cases: ["nom", "adjectif", "verbe"], items: [["longueur", "nom"], ["long", "adjectif"], ["longer", "verbe"], ["allonger", "verbe"], ["longue", "adjectif"]], expl: "Une famille peut réunir des noms, des adjectifs et des verbes." },
      { t: "qcm", q: "Quel est le radical commun de <b>chanter</b>, <b>chanteur</b>, <b>chanteuse</b> ?", choix: ["chant", "chan", "eur"], r: "chant", expl: "chant- est la partie commune." }
    ],
    [
      { t: "qcm", q: "Trouve l'intrus dans la famille : terre, terrain, enterrer, terreur.", choix: ["terreur", "terrain", "enterrer", "terre"], r: "terreur", expl: "terreur veut dire grande peur : il n'a pas la même idée que terre." },
      { t: "qcm", q: "Trouve l'intrus dans la famille : couper, coupure, découper, couple.", choix: ["couple", "coupure", "découper", "couper"], r: "couple", expl: "Un couple, ce sont deux personnes : rien à voir avec couper." },
      { t: "qcm", q: "Trouve l'intrus dans la famille : chat, chaton, chatte, château.", choix: ["château", "chaton", "chatte", "chat"], r: "château", expl: "Un château est une grande maison fortifiée : pas la même idée que chat." },
      { t: "qcm", q: "Trouve l'intrus dans la famille : bois, boisé, boiser, boisson.", choix: ["boisson", "boisé", "boiser", "bois"], r: "boisson", expl: "La boisson vient de boire, pas du bois." },
      { t: "vf", q: "Deux mots qui commencent par les mêmes lettres sont toujours de la même famille.", r: false, expl: "Non : terre / terreur, couper / couple. Il faut aussi la même idée." },
      { t: "saisie", q: "Écris l'adjectif de la famille de <b>montagne</b> (dans la leçon).", r: "montagneux", expl: "monter, montagne, montagneux." },
      { t: "trous", q: "Complète avec un mot de la même famille.", texte: "Le [jardinier] jardine dans son jardin. Les promeneurs [longent] le chemin long. La danseuse [danse] sur la piste.", expl: "jardinier, longent, danse." }
    ],
    [
      { t: "dictee", texte: "Le jardinier jardine dans son jardin pendant que la danseuse danse.", expl: "Deux familles : jardin- et dans-." },
      { t: "dictee", texte: "Les promeneurs longent le chemin qui a une longueur de cent mètres.", expl: "longer, longueur : famille de long." },
      { t: "classer", q: "Ces mots sont-ils de la famille de « terre » ?", cases: ["même famille", "pas la même famille"], items: [["terrain", "même famille"], ["terreur", "pas la même famille"], ["enterrer", "même famille"], ["terrible", "pas la même famille"], ["terrasse", "même famille"], ["terminer", "pas la même famille"]], expl: "terrain, enterrer, terrasse ont l'idée du sol ; terreur, terrible, terminer non." },
      { t: "qcm", q: "Quelle phrase contient trois mots de la même famille ?", choix: ["Le pêcheur va pêcher : la pêche est bonne.", "Le pêcheur mange une pêche et une poire.", "Le pêcheur prend sa pirogue et part en mer."], r: "Le pêcheur va pêcher : la pêche est bonne.", expl: "pêcheur, pêcher, pêche (l'activité) : même radical, même idée." },
      { t: "saisie", q: "Trouve le nom de métier de la famille de <b>lait</b>.", r: "laitier", expl: "Le laitier vend du lait." }
    ]
  ]
});
