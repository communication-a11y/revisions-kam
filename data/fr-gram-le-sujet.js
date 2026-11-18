// À VÉRIFIER : au cahier, « un sujet partiel : plusieurs sujets + 1 verbe » ; le terme juste est « sujet multiple » (corrigé dans le module).
// À VÉRIFIER : exemple d'analyse « hurlant des chiens affamés » → « hurlent des chiens affamés » (il faut un verbe conjugué).
// À VÉRIFIER : exemple de proposition sujet « Que ta maladie soit guérit » : incomplet (pas de verbe principal) ; le module écrit « Que ta maladie soit guérie nous réjouit. » et n'en fait pas d'exercice.
LECONS.push({
  id: "fr-gram-le-sujet",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le sujet de la phrase",
  date: "2026-10-08",
  photos: ["DJI_20261118220457_0036_D.jpg", "DJI_20261118220502_0037_D.jpg"],
  retiens:
    "<p>Dans une phrase, le <b>sujet</b> indique qui fait l'action.<br>Ex : Pasteur découvre le vaccin contre la rage. <b>Pasteur</b> est le sujet de la phrase.</p>" +
    "<p>On trouve le sujet en posant la question <b>« Qui est-ce qui ? »</b> devant le verbe.<br>Ex : Qui est-ce qui découvre le vaccin ? Pasteur.</p>" +
    "<p><b>Le sujet peut être :</b></p><ul>" +
    "<li>un nom propre ou un nom commun : <b>Pasteur</b> a créé des vaccins. <b>Un vaccin</b> aide notre corps à lutter contre une maladie.</li>" +
    "<li>un verbe à l'infinitif : <b>Soigner</b> est le rôle des médecins.</li>" +
    "<li>une proposition : <b>Que ta maladie soit guérie</b> nous réjouit.</li>" +
    "<li>un pronom personnel : <b>Il</b> est un grand scientifique.</li>" +
    "<li>un groupe nominal (déterminant + nom + adjectif) : <b>La recherche médicale</b> fait de grands progrès.</li></ul>" +
    "<p><b>Un sujet peut être aussi :</b></p><ul>" +
    "<li>un sujet <b>multiple</b> : plusieurs sujets pour 1 verbe ;</li>" +
    "<li>un sujet <b>commun</b> : 1 sujet pour plusieurs verbes ;</li>" +
    "<li>un sujet <b>inversé</b> : le sujet est après le verbe ;</li>" +
    "<li>un sujet <b>éloigné</b> : le sujet est loin de son verbe.</li></ul>" +
    "<p><b>Exemple d'analyse</b><br>Dans le village endormi, hurlent des <b>chiens</b> affamés.<br>chiens : nom commun d'animal, sujet inversé de hurler, masculin pluriel.</p>",
  astuce: "Encadre le sujet avec <b>« C'est… qui »</b> : « C'est Pasteur qui découvre le vaccin. » Ça marche aussi quand le sujet est après le verbe.",
  regle: "Le sujet indique qui fait l'action. On le trouve avec la question « Qui est-ce qui ? » posée devant le verbe.",
  niveaux: [
    [
      { t: "qcm", q: "Le sujet indique…", choix: ["qui fait l'action", "où se passe l'action", "quand se passe l'action"], r: "qui fait l'action", expl: "Le sujet, c'est celui qui fait l'action." },
      { t: "qcm", q: "Quelle question pose-t-on pour trouver le sujet ?", choix: ["Qui est-ce qui ?", "Où ?", "Quand ?", "Comment ?"], r: "Qui est-ce qui ?", expl: "« Qui est-ce qui » + verbe : la réponse est le sujet." },
      { t: "qcm", q: "« Pasteur découvre le vaccin contre la rage. » Quel est le sujet ?", choix: ["Pasteur", "le vaccin", "la rage"], r: "Pasteur", expl: "Qui est-ce qui découvre ? Pasteur." },
      { t: "qcm", q: "« Awa pile le mil. » Quel est le sujet ?", choix: ["Awa", "pile", "le mil"], r: "Awa", expl: "Qui est-ce qui pile le mil ? Awa." },
      { t: "vf", q: "Un pronom personnel comme « il » peut être sujet.", r: true, expl: "Ex : « Il est un grand scientifique. »" },
      { t: "relier", q: "Relie chaque sorte de sujet à sa définition.", paires: [["sujet multiple", "plusieurs sujets, 1 verbe"], ["sujet commun", "1 sujet, plusieurs verbes"], ["sujet inversé", "sujet après le verbe"], ["sujet éloigné", "sujet loin du verbe"]], expl: "Ce sont les quatre cas particuliers de la leçon." }
    ],
    [
      { t: "saisie", q: "Écris le sujet du verbe : « Les pêcheurs rentrent au port. »", r: "Les pêcheurs", expl: "Qui est-ce qui rentre ? Les pêcheurs." },
      { t: "saisie", q: "Écris le sujet du verbe : « Mon grand frère conduit un taxi. »", r: "Mon grand frère", expl: "Qui est-ce qui conduit ? Mon grand frère." },
      { t: "saisie", q: "Écris le sujet du verbe : « Nager est bon pour la santé. »", r: "Nager", aide: "Le sujet peut être un verbe à l'infinitif.", expl: "C'est nager qui est bon pour la santé : le sujet est un verbe à l'infinitif." },
      { t: "classer", q: "Range chaque sujet souligné selon sa nature.", cases: ["nom propre", "groupe nominal", "pronom personnel", "verbe à l'infinitif"], items: [["<b>Moussa</b> dort.", "nom propre"], ["<b>Elle</b> chante.", "pronom personnel"], ["<b>Lire</b> m'amuse.", "verbe à l'infinitif"], ["<b>La petite chèvre</b> bêle.", "groupe nominal"], ["<b>Nous</b> partons.", "pronom personnel"], ["<b>Dakar</b> grandit.", "nom propre"]], expl: "Le sujet peut être un nom, un groupe nominal, un pronom ou un infinitif." },
      { t: "qcm", q: "« La recherche médicale fait de grands progrès. » Le sujet est…", choix: ["un nom propre", "un groupe nominal", "un pronom personnel"], r: "un groupe nominal", expl: "« La recherche médicale » : déterminant + nom + adjectif, c'est un groupe nominal." },
      { t: "qcm", q: "« Soigner est le rôle des médecins. » Le sujet est…", choix: ["un verbe à l'infinitif", "un nom commun", "un pronom"], r: "un verbe à l'infinitif", expl: "« Soigner » est un verbe à l'infinitif qui est sujet." },
      { t: "qcm", q: "« Fatou et Khady vont au marché. » C'est un sujet…", choix: ["multiple", "commun", "inversé"], r: "multiple", expl: "Deux sujets (Fatou et Khady) pour un seul verbe." },
      { t: "qcm", q: "« Le berger appelle, rassemble et compte ses moutons. » C'est un sujet…", choix: ["multiple", "commun", "éloigné"], r: "commun", expl: "Un seul sujet (le berger) pour trois verbes." },
      { t: "vf", q: "Dans « Au loin passe une pirogue », le sujet est « Au loin ».", r: false, expl: "Qui est-ce qui passe ? une pirogue. Le sujet est inversé, après le verbe." }
    ],
    [
      { t: "qcm", q: "« Dans le village endormi, hurlent des chiens affamés. » Le sujet est…", choix: ["le village", "des chiens affamés", "endormi"], r: "des chiens affamés", expl: "Qui est-ce qui hurle ? des chiens affamés. Le sujet est inversé." },
      { t: "qcm", q: "« Mon cousin, qui habite à Ziguinchor depuis dix ans, arrive demain. » C'est un sujet…", choix: ["inversé", "éloigné", "multiple"], r: "éloigné", expl: "Le sujet « Mon cousin » est loin de son verbe « arrive »." },
      { t: "saisie", q: "Écris le sujet du verbe : « Sur la branche chantait un oiseau. »", r: "un oiseau", expl: "Qui est-ce qui chantait ? un oiseau : sujet inversé." },
      { t: "saisie", q: "Écris le sujet du verbe : « Où vont les enfants ? »", r: "les enfants", expl: "Qui est-ce qui va ? les enfants : sujet inversé dans la question." },
      { t: "relier", q: "Relie chaque phrase à la sorte de sujet.", paires: [["Le lion et la hyène se disputent.", "sujet multiple"], ["La fillette court et saute.", "sujet commun"], ["Arrive enfin le car.", "sujet inversé"], ["Le car, plein de voyageurs fatigués, arrive.", "sujet éloigné"]], expl: "Multiple, commun, inversé, éloigné." },
      { t: "qcm", q: "Analyse « chiens » dans « Dans le village endormi, hurlent des chiens affamés. »", choix: ["nom commun d'animal, sujet inversé de hurler, masculin pluriel", "nom propre, sujet de endormir, masculin singulier", "nom commun, complément du verbe hurler, masculin pluriel"], r: "nom commun d'animal, sujet inversé de hurler, masculin pluriel", expl: "C'est l'analyse du cahier : chiens est sujet inversé de hurler." },
      { t: "vf", q: "Le sujet est toujours placé juste avant le verbe.", r: false, expl: "Il peut être inversé (après le verbe) ou éloigné (loin du verbe)." }
    ],
    [
      { t: "trous", q: "Écris le sujet de chaque verbe en gras.", texte: "Le matin, ma mère <b>prépare</b> le petit-déjeuner : [ma mère]. — Dans la cour <b>jouent</b> mes petits frères : [mes petits frères]. — Courir <b>fatigue</b> Ibrahima : [Courir].", expl: "Pose « Qui est-ce qui ? » devant chaque verbe." },
      { t: "dictee", texte: "Sur la plage de Mbour, les pêcheurs et leurs femmes attendent les pirogues.", expl: "Sujet multiple : les pêcheurs et leurs femmes → attendent (pluriel)." },
      { t: "dictee", texte: "Dans le ciel de Dakar passent de grands oiseaux blancs.", expl: "Sujet inversé : de grands oiseaux blancs → passent (pluriel)." },
      { t: "qcm", q: "Dans quelle phrase le sujet est-il <b>inversé</b> ?", choix: ["Au bord du fleuve pousse un grand baobab.", "Un grand baobab pousse au bord du fleuve.", "Le baobab pousse et grandit.", "Le baobab et le fromager poussent."], r: "Au bord du fleuve pousse un grand baobab.", expl: "Le sujet « un grand baobab » est après le verbe « pousse »." },
      { t: "classer", q: "Range ces phrases selon la sorte de sujet.", cases: ["sujet multiple", "sujet commun", "sujet inversé"], items: [["Awa et Moussa dansent.", "sujet multiple"], ["Awa chante et danse.", "sujet commun"], ["Que dit le maître ?", "sujet inversé"], ["Le coq et la poule picorent.", "sujet multiple"], ["Le coq chante, mange et dort.", "sujet commun"], ["Là-bas brille la lune.", "sujet inversé"]], expl: "Plusieurs sujets ? un sujet pour plusieurs verbes ? sujet après le verbe ?" }
    ]
  ]
});
