// Formulation du cahier ajustée : « le pronom relatif complète un nom… » → c'est la proposition relative qui complète
// l'antécédent ; le pronom relatif le remplace. Leçon marquée « 1re partie » : à enrichir quand la suite arrivera.
LECONS.push({
  id: "fr-gram-subordonnee-relative",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "La proposition principale et la proposition subordonnée relative (1re partie)",
  date: "2026-11-26",
  photos: ["2026-11-26_02.jpg", "2026-11-26_03.jpg"],
  retiens:
    "<p>Une proposition qui ne se suffit pas à elle-même est une proposition <b>subordonnée</b>.</p>" +
    "<p>Elle complète une proposition <b>principale</b>, qui peut à elle seule former une phrase qui a un sens. La subordonnée ne le peut pas.</p>" +
    "<p>La <b>proposition subordonnée relative</b> est toujours introduite par un <b>pronom relatif</b> (qui, que, quoi, dont, où, lequel, laquelle…).</p>" +
    "<p>Elle complète un <b>nom</b> de la proposition principale, que l'on appelle l'<b>antécédent</b>.</p>" +
    "<p>Ex : Je vois <b>l'homme</b> <u>qui joue à la corde</u>.<br>principale : Je vois l'homme — antécédent : l'homme — subordonnée relative : qui joue à la corde</p>",
  astuce: "Cache la subordonnée relative : la principale garde un sens (« Je vois l'homme. »). La relative seule (« qui joue à la corde ») ne veut rien dire.",
  regle: "La principale a un sens toute seule ; la subordonnée relative, introduite par un pronom relatif, complète un nom de la principale : l'antécédent.",
  niveaux: [
    [
      { t: "vf", q: "Une proposition subordonnée peut former à elle seule une phrase qui a un sens.", r: false, expl: "Elle ne se suffit pas à elle-même : c'est la principale qui a un sens seule." },
      { t: "qcm", q: "Quelle proposition peut former à elle seule une phrase qui a un sens ?", choix: ["la principale", "la subordonnée", "aucune"], r: "la principale", expl: "La principale se suffit à elle-même." },
      { t: "qcm", q: "Par quel mot la subordonnée relative est-elle toujours introduite ?", choix: ["un pronom relatif", "une conjonction de coordination", "un article"], r: "un pronom relatif", expl: "qui, que, quoi, dont, où, lequel…" },
      { t: "qcm", q: "Comment appelle-t-on le nom complété par la subordonnée relative ?", choix: ["l'antécédent", "le sujet", "le complément d'objet"], r: "l'antécédent", expl: "L'antécédent est placé avant le pronom relatif, dans la principale." },
      { t: "classer", q: "Pronom relatif ou non ?", cases: ["pronom relatif", "autre mot"], items: [["qui", "pronom relatif"], ["dont", "pronom relatif"], ["lequel", "pronom relatif"], ["où", "pronom relatif"], ["et", "autre mot"], ["mais", "autre mot"]], expl: "et, mais sont des conjonctions de coordination." }
    ],
    [
      { t: "qcm", q: "« Je vois l'homme qui joue à la corde. » Quelle est la subordonnée relative ?", choix: ["qui joue à la corde", "Je vois l'homme", "Je vois"], r: "qui joue à la corde", expl: "Elle commence par le pronom relatif « qui »." },
      { t: "qcm", q: "« Je vois l'homme qui joue à la corde. » Quel est l'antécédent ?", choix: ["l'homme", "la corde", "je"], r: "l'homme", expl: "« qui » remplace l'homme : c'est l'homme qui joue." },
      { t: "saisie", q: "Écris le pronom relatif : « Le livre que tu lis est à Awa. »", r: "que", expl: "« que » introduit la relative « que tu lis »." },
      { t: "saisie", q: "Écris l'antécédent : « La maison où j'habite est grande. »", r: ["la maison", "maison"], expl: "« où » remplace la maison." },
      { t: "qcm", q: "« Moussa mange la mangue qu'il a cueillie. » Quelle est la proposition principale ?", choix: ["Moussa mange la mangue", "qu'il a cueillie", "il a cueillie"], r: "Moussa mange la mangue", expl: "Elle a un sens seule ; « qu'il a cueillie » ne peut pas rester seule." },
      { t: "relier", q: "Relie chaque phrase à son antécédent.", paires: [["Le car qui part est plein.", "le car"], ["La fille dont je parle chante.", "la fille"], ["Le champ où il travaille est loin.", "le champ"], ["Le poisson que Fatou achète est frais.", "le poisson"]], expl: "L'antécédent est le nom placé juste avant le pronom relatif." },
      { t: "vf", q: "Dans « Le maître que nous aimons est malade », « que nous aimons » est une subordonnée relative.", r: true, expl: "Introduite par « que », elle complète « le maître »." },
      { t: "classer", q: "Principale ou subordonnée relative ?", cases: ["principale", "subordonnée relative"], items: [["J'ai un ami", "principale"], ["qui habite à Thiès", "subordonnée relative"], ["La robe est belle", "principale"], ["que maman a cousue", "subordonnée relative"]], expl: "La relative commence par un pronom relatif et ne peut pas rester seule." }
    ],
    [
      { t: "qcm", q: "« Le stylo avec lequel j'écris est bleu. » Quel est le pronom relatif ?", choix: ["lequel", "avec", "le"], r: "lequel", expl: "« avec » est une préposition placée devant le pronom relatif « lequel »." },
      { t: "qcm", q: "Dans « Le garçon qui court est mon frère », où se trouve la subordonnée relative ?", choix: ["au milieu de la principale", "après la principale", "avant la principale"], r: "au milieu de la principale", expl: "Principale : « Le garçon est mon frère » ; la relative « qui court » se glisse après l'antécédent." },
      { t: "ordre", q: "Remets les mots dans l'ordre.", r: "Awa regarde l'oiseau qui chante.", expl: "« qui chante » suit son antécédent « l'oiseau »." },
      { t: "saisie", q: "Relie les deux phrases avec « qui » : « J'ai un chat. Le chat dort beaucoup. »", r: ["J'ai un chat qui dort beaucoup", "J'ai un chat qui dort beaucoup."], large: true, expl: "« qui » remplace « le chat » pour éviter la répétition." },
      { t: "vf", q: "Dans « Qui a pris mon cahier ? », « qui » introduit une subordonnée relative.", r: false, expl: "Ici « qui » pose une question : il n'y a pas d'antécédent." },
      { t: "qcm", q: "Quelle phrase contient une subordonnée relative ?", choix: ["La pirogue que je vois rentre au port.", "La pirogue rentre au port et les pêcheurs chantent.", "La pirogue rentre-t-elle au port ?"], r: "La pirogue que je vois rentre au port.", expl: "« que je vois » est introduite par un pronom relatif et complète « la pirogue »." }
    ],
    [
      { t: "trous", q: "Complète la leçon.", texte: "La subordonnée relative est introduite par un [pronom] relatif. Elle complète un nom de la proposition [principale], appelé l'[antécédent].", expl: "Les trois mots clés de la leçon." },
      { t: "dictee", texte: "Le pêcheur qui rentre au port vend le poisson que nous aimons.", expl: "Deux relatives : « qui rentre au port » (antécédent : le pêcheur) et « que nous aimons » (antécédent : le poisson)." },
      { t: "saisie", q: "Relie les deux phrases avec « que » : « Fatou lit un livre. Le maître a donné ce livre. » → Fatou lit le livre …", r: ["que le maître a donné", "que le maître a donné."], large: true, expl: "« que » remplace « le livre », complément de « a donné »." },
      { t: "classer", q: "Antécédent de la relative ou non ?", cases: ["antécédent", "pas l'antécédent"], items: [["l'école (dans « l'école où je vais »)", "antécédent"], ["la femme (dans « la femme qui chante »)", "antécédent"], ["je (dans « l'école où je vais »)", "pas l'antécédent"], ["chante (dans « la femme qui chante »)", "pas l'antécédent"]], expl: "L'antécédent est toujours le nom remplacé par le pronom relatif." },
      { t: "qcm", q: "« Les enfants dont tu parles jouent dans la cour. » Quelle est la principale ?", choix: ["Les enfants jouent dans la cour", "dont tu parles", "tu parles"], r: "Les enfants jouent dans la cour", expl: "Sans la relative « dont tu parles », la phrase garde tout son sens." }
    ]
  ]
});
