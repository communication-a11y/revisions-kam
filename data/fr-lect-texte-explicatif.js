// À VÉRIFIER : la définition du cahier (photo 0015) contient une phrase incohérente : « a pour objectif d'informer, de faire comprendre un d'informer une situation… ». On a écrit « d'informer et de faire comprendre quelque chose (un phénomène, une situation…) » : à confirmer avec le maître.
// Ce module réunit les deux leçons de lecture sur le texte explicatif : « Étude de textes explicatifs » (0015, vers le 16 sept.) et « Manifester sa compréhension d'un texte explicatif » (« Les îles », 0022, 24 sept.). Le texte « Les îles » n'est pas recopié dans le cahier : seul son plan est travaillé. Le texte sur le baobab est un texte d'entraînement écrit pour l'application.
LECONS.push({
  id: "fr-lect-texte-explicatif",
  cahier: "francais",
  matiere: "Lecture",
  titre: "Le texte explicatif (étude et compréhension : « Les îles »)",
  date: "2026-09-24",
  photos: ["DJI_20261118220140_0015_D.jpg", "DJI_20261118220245_0022_D.jpg"],
  retiens:
    "<p>Un <b>texte explicatif</b> a pour objectif d'<b>informer</b> et de <b>faire comprendre</b> quelque chose (un phénomène, une situation…) en répondant aux questions « <b>pourquoi ?</b> » ou « <b>comment ?</b> ».</p>" +
    "<p>Pour rendre le propos clair et accessible, l'auteur peut s'appuyer sur plusieurs procédés :</p><ul>" +
    "<li>la <b>définition</b> : le sens d'un terme (ex : le texte « Les îles », page 18) ;</li>" +
    "<li>l'<b>énumération</b> : une liste des causes, des conséquences, des problèmes, des solutions… (ex : le texte « Le village inondé », page 27).</li></ul>" +
    "<p>Un texte explicatif a trois parties :</p><ol>" +
    "<li>l'<b>introduction</b> : elle présente le sujet ;</li>" +
    "<li>le <b>développement</b> : il fournit les causes, les raisons, les particularités ou les explications. C'est le cœur du texte ;</li>" +
    "<li>la <b>conclusion</b> : elle résume brièvement l'explication.</li></ol>" +
    "<p><b>Le texte « Les îles »</b> (livre de lecture, page 18) : l'auteur écrit pour <b>expliquer</b> ce qu'est une île. Il commence par <b>définir</b> les îles. Les informations sont données dans cet ordre :<br>1. la définition des îles ; 2. la particularité des îles ; 3. les problèmes des îles ; 4. la conclusion.<br>C'est un texte explicatif (informatif).</p>",
  astuce: "Introduction = de quoi on parle. Développement = pourquoi, comment (le cœur). Conclusion = on résume en une ou deux phrases.",
  regle: "Le texte explicatif informe et fait comprendre en répondant à « pourquoi ? » ou « comment ? ». Il a une introduction, un développement (le cœur du texte) et une conclusion, et utilise la définition et l'énumération.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert un texte explicatif ?", choix: ["à informer et faire comprendre", "à raconter une histoire inventée", "à faire rire"], r: "à informer et faire comprendre", expl: "Il répond aux questions pourquoi ? ou comment ?" },
      { t: "qcm", q: "À quelles questions répond un texte explicatif ?", choix: ["pourquoi ? comment ?", "qui ? quand ?", "combien ? où ?"], r: "pourquoi ? comment ?", expl: "C'est écrit dans la leçon." },
      { t: "relier", q: "Relie chaque partie à son rôle.", paires: [["l'introduction", "présente le sujet"], ["le développement", "donne les causes et les explications"], ["la conclusion", "résume l'explication"]], expl: "Trois parties : introduction, développement, conclusion." },
      { t: "vf", q: "Le développement est le cœur du texte explicatif.", r: true, expl: "C'est lui qui fournit les causes, les raisons et les explications." },
      { t: "vf", q: "Dans le texte « Les îles », l'auteur commence par raconter une aventure.", r: false, expl: "Il commence par définir les îles." },
      { t: "qcm", q: "Quel titre est celui d'un texte explicatif ?", choix: ["Pourquoi la mer est-elle salée ?", "Le lièvre et la tortue", "Lettre à mon cousin"], r: "Pourquoi la mer est-elle salée ?", expl: "Le titre pose une question « pourquoi ? » : on va expliquer." }
    ],
    [
      { t: "qcm", q: "« Une île est une terre entourée d'eau de tous côtés. » Quel procédé l'auteur utilise-t-il ?", choix: ["la définition", "l'énumération", "le dialogue"], r: "la définition", expl: "La phrase donne le sens du mot « île »." },
      { t: "qcm", q: "« L'inondation a plusieurs causes : les fortes pluies, les canaux bouchés et les maisons construites dans les zones basses. » Quel procédé ?", choix: ["l'énumération", "la définition", "la conclusion"], r: "l'énumération", expl: "L'auteur fait la liste des causes." },
      { t: "relier", q: "Relie chaque procédé à ce qu'il fait.", paires: [["la définition", "donne le sens d'un terme"], ["l'énumération", "fait la liste des causes ou des solutions"]], expl: "Deux procédés pour rendre le propos clair." },
      { t: "qcm", q: "Dans le texte « Les îles », quelle information vient en premier ?", choix: ["la définition des îles", "les problèmes des îles", "la conclusion"], r: "la définition des îles", expl: "Ordre : définition, particularité, problèmes, conclusion." },
      { t: "qcm", q: "Dans « Les îles », que trouve-t-on juste après la définition ?", choix: ["la particularité des îles", "la conclusion", "les problèmes des îles"], r: "la particularité des îles", expl: "1. définition ; 2. particularité ; 3. problèmes ; 4. conclusion." },
      { t: "saisie", q: "Comment appelle-t-on la partie qui présente le sujet ?", r: ["l'introduction", "introduction"], expl: "L'introduction présente le sujet." },
      { t: "saisie", q: "Comment appelle-t-on la partie qui résume brièvement l'explication ?", r: ["la conclusion", "conclusion"], expl: "La conclusion résume l'explication." },
      { t: "classer", q: "Range ces textes.", cases: ["texte explicatif", "autre texte"], items: [["Comment se forme la pluie ?", "texte explicatif"], ["Le conte de Leuk le lièvre", "autre texte"], ["Pourquoi le baobab perd-il ses feuilles ?", "texte explicatif"], ["Une lettre à ma grand-mère", "autre texte"], ["Comment les abeilles fabriquent le miel", "texte explicatif"], ["Un poème sur la mer", "autre texte"]], expl: "Le texte explicatif répond à pourquoi ? ou comment ?" }
    ],
    [
      { t: "classer", q: "Lis ces phrases d'un texte sur le baobab et range-les dans la bonne partie.", cases: ["introduction", "développement", "conclusion"], items: [["Au Sénégal, pendant la saison sèche, les baobabs n'ont plus de feuilles. Pourquoi ?", "introduction"], ["Les feuilles laissent échapper de l'eau.", "développement"], ["Pendant la saison sèche, il ne pleut pas : l'arbre doit donc garder son eau.", "développement"], ["Ainsi, en perdant ses feuilles, le baobab peut attendre la saison des pluies.", "conclusion"]], expl: "L'introduction pose la question, le développement explique, la conclusion résume." },
      { t: "qcm", q: "Dans le texte sur le baobab, à quelle question l'auteur répond-il ?", choix: ["Pourquoi le baobab perd-il ses feuilles ?", "Combien mesure un baobab ?", "Qui a planté le baobab ?"], r: "Pourquoi le baobab perd-il ses feuilles ?", expl: "L'introduction se termine par « Pourquoi ? »." },
      { t: "qcm", q: "Quelle phrase pourrait servir de conclusion ?", choix: ["Voilà pourquoi le baobab perd ses feuilles : il garde ainsi son eau.", "Il était une fois un baobab géant.", "Le baobab a des feuilles."], r: "Voilà pourquoi le baobab perd ses feuilles : il garde ainsi son eau.", expl: "La conclusion résume brièvement l'explication." },
      { t: "qcm", q: "Pourquoi l'auteur d'un texte explicatif utilise-t-il des définitions ?", choix: ["pour que le lecteur comprenne les mots difficiles", "pour faire peur au lecteur", "pour raconter une histoire"], r: "pour que le lecteur comprenne les mots difficiles", expl: "La définition rend le propos clair et accessible." },
      { t: "vf", q: "Un texte explicatif est aussi appelé texte informatif dans le cahier.", r: true, expl: "« C'est un texte explicatif (informatif). »" },
      { t: "qcm", q: "« Les problèmes des îles » : quel procédé l'auteur utilise-t-il sans doute pour les présenter ?", choix: ["l'énumération", "la définition", "le dialogue"], r: "l'énumération", expl: "Pour présenter plusieurs problèmes, on en fait la liste : c'est l'énumération." }
    ],
    [
      { t: "qcm", q: "Remets les parties d'un texte explicatif dans l'ordre.", choix: ["introduction — développement — conclusion", "développement — introduction — conclusion", "conclusion — développement — introduction"], r: "introduction — développement — conclusion", expl: "On présente le sujet, on explique, puis on résume." },
      { t: "trous", q: "Complète le plan du texte « Les îles ».", texte: "1. la [définition] des îles ; 2. la [particularité] des îles ; 3. les [problèmes] des îles ; 4. la [conclusion].", expl: "C'est l'ordre relevé dans le cahier." },
      { t: "dictee", texte: "Un texte explicatif répond aux questions pourquoi ou comment pour faire comprendre un phénomène.", expl: "pourquoi, comment, phénomène : mots clés de la leçon." },
      { t: "qcm", q: "Dans quelle partie l'auteur donne-t-il les causes et les raisons ?", choix: ["le développement", "l'introduction", "la conclusion"], r: "le développement", expl: "Le développement fournit les causes, les raisons, les explications." },
      { t: "trous", q: "Complète la définition.", texte: "Un texte explicatif a pour objectif d'[informer] et de faire [comprendre] en répondant aux questions « pourquoi ? » ou « [comment] ? ».", expl: "C'est la définition de la leçon." }
    ]
  ]
});
