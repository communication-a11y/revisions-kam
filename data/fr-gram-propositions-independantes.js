LECONS.push({
  id: "fr-gram-propositions-independantes",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les propositions indépendantes",
  date: "2026-11-24",
  photos: ["2026-11-25_22.jpg", "2026-11-25_21.jpg"],
  retiens:
    "<p>→ Une <b>phrase simple</b> contient un seul verbe conjugué.<br>Ex : L'athlète <b>aimerait</b> gagner la compétition cette année.</p>" +
    "<p>→ Une <b>phrase complexe</b> contient plusieurs verbes conjugués.<br>Ex : La sauteuse en hauteur <b>prend</b> son élan, <b>s'élève</b> vers la barre et <b>franchit</b> deux mètres.</p>" +
    "<p>→ Dans une phrase complexe, il y a <b>autant de propositions que de verbes conjugués</b>.<br>Ex : <u>Les spectateurs applaudissent</u> (1<sup>re</sup> proposition) <u>car c'est un saut magnifique</u> (2<sup>e</sup> proposition).</p>" +
    "<p><b>NB :</b></p>" +
    "<p>• Quand les propositions indépendantes sont reliées par une <b>conjonction de coordination</b>, on dit qu'elles sont <b>coordonnées</b>.<br>Ex : La souris danse <b>car</b> le chat est mort.<br>« La souris danse » : proposition indépendante ; « car le chat est mort » : proposition indépendante coordonnée.</p>" +
    "<p>• À l'intérieur de la phrase, quand des propositions sont reliées par un <b>signe de ponctuation</b> (virgule, point-virgule…), on dit qu'elles sont <b>juxtaposées</b>.</p>",
  astuce: "Compte les verbes conjugués : 1 verbe = phrase simple ; 2 verbes = 2 propositions. Un petit mot (mais, et, car…) les relie ? Coordonnées. Une virgule ? Juxtaposées.",
  regle: "Il y a autant de propositions que de verbes conjugués. Des propositions reliées par une conjonction de coordination sont coordonnées ; reliées par un signe de ponctuation, elles sont juxtaposées.",
  niveaux: [
    [
      { t: "qcm", q: "Une phrase simple contient…", choix: ["un seul verbe conjugué", "plusieurs verbes conjugués", "aucun verbe"], r: "un seul verbe conjugué", expl: "Ex : L'athlète aimerait gagner la compétition cette année." },
      { t: "qcm", q: "Une phrase complexe contient…", choix: ["plusieurs verbes conjugués", "un seul verbe conjugué", "seulement des noms"], r: "plusieurs verbes conjugués", expl: "Ex : La sauteuse prend son élan, s'élève vers la barre et franchit deux mètres." },
      { t: "vf", q: "Dans une phrase complexe, il y a autant de propositions que de verbes conjugués.", r: true, expl: "Chaque verbe conjugué forme une proposition." },
      { t: "qcm", q: "Des propositions reliées par une conjonction de coordination sont…", choix: ["coordonnées", "juxtaposées", "simples"], r: "coordonnées", expl: "Ex : La souris danse car le chat est mort." },
      { t: "qcm", q: "Des propositions reliées par une virgule sont…", choix: ["juxtaposées", "coordonnées", "complexes"], r: "juxtaposées", expl: "Signe de ponctuation → juxtaposées." }
    ],
    [
      { t: "saisie", q: "Combien de verbes conjugués : « La sauteuse prend son élan, s'élève vers la barre et franchit deux mètres. » ?", r: "3", nombre: true, expl: "prend, s'élève, franchit : 3 verbes, donc 3 propositions." },
      { t: "saisie", q: "Combien de propositions : « Les spectateurs applaudissent car c'est un saut magnifique. » ?", r: "2", nombre: true, expl: "applaudissent, est : 2 verbes conjugués." },
      { t: "classer", q: "Phrase simple ou phrase complexe ?", cases: ["phrase simple", "phrase complexe"], items: [["Awa lit un livre.", "phrase simple"], ["Moussa veut gagner le match.", "phrase simple"], ["Il pleut, nous restons à la maison.", "phrase complexe"], ["Fatou chante et Khady danse.", "phrase complexe"], ["Le car de Thiès arrive.", "phrase simple"], ["Je mange car j'ai faim.", "phrase complexe"]], expl: "Compte les verbes conjugués (« gagner » est à l'infinitif, il ne compte pas)." },
      { t: "qcm", q: "« L'athlète aimerait gagner la compétition. » Pourquoi est-ce une phrase simple ?", choix: ["« gagner » est à l'infinitif : un seul verbe conjugué", "il n'y a pas de virgule", "elle est courte"], r: "« gagner » est à l'infinitif : un seul verbe conjugué", expl: "Seul « aimerait » est conjugué." },
      { t: "classer", q: "Coordonnées ou juxtaposées ?", cases: ["coordonnées", "juxtaposées"], items: [["La souris danse car le chat est mort.", "coordonnées"], ["Il fait chaud, nous allons à la plage.", "juxtaposées"], ["Awa chante et Moussa danse.", "coordonnées"], ["Le soleil se lève ; les oiseaux chantent.", "juxtaposées"], ["Je voulais venir mais j'étais malade.", "coordonnées"], ["Le maître parle, les élèves écoutent.", "juxtaposées"]], expl: "Conjonction (car, et, mais…) → coordonnées. Ponctuation → juxtaposées." },
      { t: "saisie", q: "Écris la conjonction de coordination : « Les spectateurs applaudissent car c'est un saut magnifique. »", r: "car", expl: "« car » relie les deux propositions : elles sont coordonnées." },
      { t: "qcm", q: "Dans « La souris danse car le chat est mort », « car le chat est mort » est…", choix: ["une proposition indépendante coordonnée", "une phrase simple", "un complément du nom"], r: "une proposition indépendante coordonnée", expl: "Elle est reliée à la première par la conjonction « car »." },
      { t: "vf", q: "Une virgule peut relier deux propositions.", r: true, expl: "Elles sont alors juxtaposées." }
    ],
    [
      { t: "saisie", q: "Combien de propositions : « Mamadou se lève, se lave, s'habille et part à l'école. » ?", r: "4", nombre: true, expl: "se lève, se lave, s'habille, part : 4 verbes conjugués." },
      { t: "qcm", q: "« Le soleil brille, les enfants jouent et les parents se reposent. » Ces propositions sont…", choix: ["juxtaposées puis coordonnées", "toutes coordonnées", "toutes juxtaposées"], r: "juxtaposées puis coordonnées", expl: "Virgule entre les deux premières (juxtaposées), « et » avant la dernière (coordonnée)." },
      { t: "vf", q: "« Ils vont essayer de réparer la pirogue. » est une phrase complexe.", r: false, expl: "Seul « vont » est conjugué ; essayer et réparer sont à l'infinitif." },
      { t: "ordre", q: "Forme deux propositions coordonnées par « mais ».", r: "Awa voulait sortir mais il pleuvait.", expl: "« mais » relie deux propositions : elles sont coordonnées." },
      { t: "saisie", q: "Relie par une virgule : « Le maître entre. Les élèves se lèvent. » → une seule phrase.", r: "Le maître entre, les élèves se lèvent.", large: true, expl: "Avec une virgule, les deux propositions sont juxtaposées." },
      { t: "qcm", q: "Quelle phrase contient deux propositions juxtaposées ?", choix: ["Il fait nuit, la lune brille.", "Il fait nuit et la lune brille.", "La lune brille dans la nuit."], r: "Il fait nuit, la lune brille.", expl: "Deux verbes conjugués reliés par une virgule." }
    ],
    [
      { t: "dictee", texte: "Les spectateurs applaudissent car c'est un saut magnifique.", expl: "Deux propositions coordonnées par « car »." },
      { t: "dictee", texte: "La sauteuse prend son élan, s'élève vers la barre et franchit deux mètres.", expl: "Trois verbes conjugués : trois propositions." },
      { t: "trous", q: "Analyse « Il pleut, nous restons à la maison donc nous jouons aux cartes. »", texte: "nombre de propositions : [3] — les deux premières sont [juxtaposées] — la dernière est [coordonnée]", expl: "pleut, restons, jouons ; virgule → juxtaposées ; « donc » → coordonnée." },
      { t: "classer", q: "Combien de propositions ?", cases: ["une", "deux", "trois"], items: [["Fatou aime lire.", "une"], ["Fatou lit et Awa écrit.", "deux"], ["Je cours, je saute, je tombe.", "trois"], ["Le chien aboie, le chat s'enfuit.", "deux"]], expl: "Une proposition par verbe conjugué." },
      { t: "qcm", q: "Laquelle de ces phrases est une phrase simple ?", choix: ["Les élèves doivent apprendre leur leçon.", "Les élèves apprennent et le maître corrige.", "Les élèves écrivent, le maître lit."], r: "Les élèves doivent apprendre leur leçon.", expl: "Un seul verbe conjugué : « doivent »." }
    ]
  ]
});
