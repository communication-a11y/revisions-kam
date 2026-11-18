// Corrections : « Les prépositions usuelle » → « usuelles » ; « Lorqu'on » → « Lorsqu'on ».
LECONS.push({
  id: "fr-orth-prepositions",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les prépositions",
  date: "2026-11-12",
  photos: ["DJI_20261118220644_0053_D.jpg", "DJI_20261118220650_0054_D.jpg"],
  retiens:
    "<p>La <b>préposition</b> est un mot <b>invariable</b> qui sert à relier deux noms, ou un verbe à un nom.<br>Ex : Il part <b>en</b> ville. Le vélo <b>de</b> Jean a disparu.</p>" +
    "<p>Les prépositions usuelles sont : <b>à, dans, par, pour, en, vers, avec, de, sans, sous…</b></p>" +
    "<p><b>NB :</b> lorsqu'on a un verbe derrière une préposition, ce verbe se met à l'<b>infinitif</b>.<br>Ex : Il vient <b>de partir</b>. Il vient <b>de rentrer</b>.</p>",
  astuce: "Après une préposition, remplace le verbe par <b>prendre</b> ou <b>vendre</b> : « Il vient de (mang…) » → « Il vient de <b>prendre</b> » : c'est l'infinitif, donc on écrit <b>manger</b>, avec -er.",
  regle: "La préposition est un mot invariable qui relie deux mots (à, dans, par, pour, en, vers, avec, de, sans, sous…). Un verbe placé après une préposition se met à l'infinitif.",
  niveaux: [
    [
      { t: "qcm", q: "Une préposition est un mot…", choix: ["invariable", "qui s'accorde avec le nom", "qui se conjugue"], r: "invariable", expl: "La préposition ne change jamais : ni genre, ni nombre." },
      { t: "qcm", q: "Quel mot est une préposition ?", choix: ["avec", "maison", "chanter", "joli"], r: "avec", expl: "« avec » fait partie des prépositions usuelles." },
      { t: "qcm", q: "« Le vélo de Jean a disparu. » Quelle est la préposition ?", choix: ["de", "vélo", "a"], r: "de", expl: "« de » relie le nom « vélo » au nom « Jean »." },
      { t: "vf", q: "Après une préposition, le verbe se met à l'infinitif.", r: true, expl: "Ex : Il vient de partir." },
      { t: "classer", q: "Préposition ou pas ?", cases: ["préposition", "autre mot"], items: [["dans", "préposition"], ["sous", "préposition"], ["table", "autre mot"], ["pour", "préposition"], ["courir", "autre mot"], ["sans", "préposition"], ["vers", "préposition"], ["rouge", "autre mot"]], expl: "Prépositions usuelles : à, dans, par, pour, en, vers, avec, de, sans, sous…" },
      { t: "qcm", q: "« Il part en ville. » Quelle est la préposition ?", choix: ["en", "part", "ville"], r: "en", expl: "« en » relie le verbe « part » au nom « ville »." }
    ],
    [
      { t: "trous", q: "Complète avec une préposition (aide : dans, sous, avec, pour).", texte: "Le chat dort [sous] la table. — Awa range ses habits [dans] l'armoire. — Je mange [avec] une cuillère. — Ce cadeau est [pour] toi.", expl: "Chaque préposition relie deux mots et donne un sens précis." },
      { t: "saisie", q: "Écris la préposition : « Moussa marche vers la mosquée. »", r: "vers", expl: "« vers » relie le verbe « marche » au nom « mosquée »." },
      { t: "saisie", q: "Écris la préposition : « Khady boit son thé sans sucre. »", r: "sans", expl: "« sans » relie « thé » à « sucre »." },
      { t: "qcm", q: "« Il vient de … »", choix: ["partir", "partit", "parti"], r: "partir", expl: "Après la préposition « de », le verbe est à l'infinitif." },
      { t: "qcm", q: "« Awa sort pour … du pain. »", choix: ["acheter", "acheté", "achète"], r: "acheter", expl: "Après « pour », le verbe se met à l'infinitif : acheter." },
      { t: "qcm", q: "« Il est parti sans … au revoir. »", choix: ["dire", "dit", "dis"], r: "dire", expl: "Après « sans », infinitif : dire." },
      { t: "trous", q: "Écris le verbe à l'infinitif après la préposition.", texte: "Il vient de [rentrer] (rentrer). — Nous allons au marché pour [vendre] (vendre) nos légumes. — Elle commence à [lire] (lire).", expl: "Après une préposition, le verbe reste à l'infinitif." },
      { t: "relier", q: "Relie chaque début de phrase à la bonne préposition.", paires: [["Le livre est posé", "sur la table."], ["Le poisson nage", "dans l'eau."], ["Je vais à l'école", "avec mon frère."], ["Le chien dort", "sous l'arbre."]], expl: "La préposition précise le rapport entre les mots." },
      { t: "vf", q: "La préposition « sous » change de forme selon que le nom est masculin ou féminin.", r: false, expl: "La préposition est invariable : sous le lit, sous la table, sous les arbres." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Il vient de manger.", "Il vient de mangé.", "Il vient de mangez."], r: "Il vient de manger.", aide: "Remplace par « prendre ».", expl: "Après « de », infinitif : manger (« il vient de prendre »)." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Elle travaille pour réussir.", "Elle travaille pour réussit.", "Elle travaille pour réussis."], r: "Elle travaille pour réussir.", expl: "Après « pour », infinitif : réussir." },
      { t: "saisie", q: "Écris le verbe correctement : « Fatou est venue pour (aider) sa mère. »", r: "aider", expl: "Après « pour » : infinitif en -er." },
      { t: "saisie", q: "Écris le verbe correctement : « Les enfants rentrent sans (parler). »", r: "parler", expl: "Après « sans » : infinitif." },
      { t: "trous", q: "Écris -er ou -é.", texte: "Il a fini de mang[er]. — Il a mang[é] tout le riz. — Ils sont partis sans chant[er]. — Elle commence à dans[er].", aide: "Après une préposition : -er.", expl: "Après de, sans, à : infinitif en -er. Après « a » (avoir), c'est le participe passé : mangé." },
      { t: "vf", q: "Dans « Il commence à écrire », « à » est une préposition et « écrire » est à l'infinitif.", r: true, expl: "Après la préposition « à », le verbe reste à l'infinitif." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Mamadou vient de rentrer du champ.", expl: "Après « de », le verbe « rentrer » est à l'infinitif." }
    ],
    [
      { t: "dictee", texte: "Mamadou vient de rentrer du champ avec son père pour se reposer.", expl: "Prépositions : de, avec, pour ; « rentrer » et « se reposer » sont à l'infinitif." },
      { t: "dictee", texte: "Sans attendre, Awa part en ville pour acheter des tissus.", expl: "Après sans et pour, les verbes sont à l'infinitif : attendre, acheter." },
      { t: "trous", q: "Complète ce texte (aide : à, avec).", texte: "Ce matin, Ibrahima est parti [à] l'école [avec] son cartable. Il marche vite pour ne pas arriv[er] en retard. Il vient de travers[er] la route.", expl: "Prépositions : à, avec ; après pour et de, infinitif en -er." },
      { t: "qcm", q: "Combien de prépositions dans « Le chat de Fatou dort sous le lit avec sa balle » ?", choix: ["deux", "trois", "quatre"], r: "trois", expl: "de, sous, avec." },
      { t: "saisie", q: "Corrige le verbe mal écrit : « Il est sorti pour joué au ballon. »", r: "jouer", expl: "Après « pour », le verbe se met à l'infinitif : jouer." }
    ]
  ]
});
