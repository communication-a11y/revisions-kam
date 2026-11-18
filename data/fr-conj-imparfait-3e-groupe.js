// À VÉRIFIER : le cahier (photo 0051) écrit « résoudre (en résolvant) → tu résolais » ; la forme correcte, conforme au participe présent, est « tu résolvais ».
LECONS.push({
  id: "fr-conj-imparfait-3e-groupe",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes du 3e groupe à l'imparfait de l'indicatif",
  date: "2026-11-04",
  photos: ["DJI_20261118220630_0050_D.jpg", "DJI_20261118220633_0051_D.jpg"],
  retiens:
    "<p>Pour conjuguer un verbe du 3e groupe à l'imparfait, je cherche le <b>participe présent</b> du verbe (en …ant), j'enlève <b>-ant</b> et j'ajoute la terminaison.</p>" +
    "<table><tr><th>infinitif</th><th>participe présent</th><th>imparfait</th></tr>" +
    "<tr><td>venir</td><td>en ven<b>ant</b></td><td>je ven<b>ais</b></td></tr>" +
    "<tr><td>peindre</td><td>en peign<b>ant</b></td><td>je peign<b>ais</b></td></tr>" +
    "<tr><td>résoudre</td><td>en résolv<b>ant</b></td><td>tu résolv<b>ais</b></td></tr></table>" +
    "<p><b>NB :</b> les terminaisons sont toujours <b>ais, ais, ait, ions, iez, aient</b>.</p>" +
    "<table><tr><th>prendre (en prenant)</th></tr><tr><td>je pren<b>ais</b></td></tr><tr><td>tu pren<b>ais</b></td></tr><tr><td>il pren<b>ait</b></td></tr>" +
    "<tr><td>nous pren<b>ions</b></td></tr><tr><td>vous pren<b>iez</b></td></tr><tr><td>ils pren<b>aient</b></td></tr></table>",
  astuce: "Dis « en … » : en buv<b>ant</b> → je buv<b>ais</b> ; en écriv<b>ant</b> → j'écriv<b>ais</b>. Le participe présent te donne le bon radical.",
  regle: "3e groupe à l'imparfait : radical du participe présent (sans -ant) + ais, ais, ait, ions, iez, aient. Ex : en buvant → je buvais.",
  niveaux: [
    [
      { t: "qcm", q: "Pour trouver le radical d'un verbe du 3e groupe à l'imparfait, je cherche…", choix: ["son participe présent", "son passé simple", "son futur"], r: "son participe présent", expl: "venir → en venant → je venais." },
      { t: "qcm", q: "venir (en venant) → je …", choix: ["venais", "viens", "viendrais", "venai"], r: "venais", expl: "radical ven- + ais : je ven<b>ais</b>." },
      { t: "qcm", q: "boire (en buvant) → il …", choix: ["buvait", "boivait", "boirait", "boit"], r: "buvait", expl: "radical buv- + ait : il buv<b>ait</b>." },
      { t: "vf", q: "À l'imparfait, les verbes du 3e groupe ont les mêmes terminaisons que les autres : ais, ais, ait, ions, iez, aient.", r: true, expl: "C'est le NB de la leçon." },
      { t: "vf", q: "peindre → je peindais.", r: false, expl: "en peignant → je peign<b>ais</b>." },
      { t: "relier", q: "Relie chaque verbe à son participe présent.", paires: [["lire", "en lisant"], ["écrire", "en écrivant"], ["faire", "en faisant"], ["craindre", "en craignant"], ["voir", "en voyant"]], expl: "Ces participes donnent les radicaux de l'imparfait : lis-, écriv-, fais-, craign-, voy-." }
    ],
    [
      { t: "saisie", q: "lire (en lisant) → je …", r: "lisais", expl: "je lis<b>ais</b>" },
      { t: "saisie", q: "écrire (en écrivant) → nous …", r: "écrivions", expl: "nous écriv<b>ions</b>" },
      { t: "saisie", q: "faire (en faisant) → ils …", r: "faisaient", expl: "ils fais<b>aient</b>" },
      { t: "saisie", q: "prendre (en prenant) → tu …", r: "prenais", expl: "tu pren<b>ais</b>" },
      { t: "saisie", q: "résoudre (en résolvant) → tu …", r: "résolvais", expl: "tu résolv<b>ais</b>" },
      { t: "saisie", q: "dire (en disant) → vous …", r: "disiez", expl: "vous dis<b>iez</b>" },
      { t: "saisie", q: "partir (en partant) → elle …", r: "partait", expl: "elle part<b>ait</b>" },
      { t: "saisie", q: "Écris le participe présent de <b>mettre</b> : en …", r: "mettant", expl: "en mett<b>ant</b> → je mettais." },
      { t: "trous", q: "Conjugue <b>venir</b> à l'imparfait.", texte: "je [venais] — tu [venais] — il [venait] — nous [venions] — vous [veniez] — ils [venaient]", expl: "radical ven- + ais, ais, ait, ions, iez, aient." }
    ],
    [
      { t: "qcm", q: "voir (en voyant) → nous …", choix: ["voyions", "voyons", "voions"], r: "voyions", expl: "radical voy- + ions : nous voy<b>i</b>ons. (nous voyons, c'est le présent.)" },
      { t: "qcm", q: "craindre (en craignant) → ils …", choix: ["craignaient", "craindaient", "craignent"], r: "craignaient", expl: "radical craign- + aient." },
      { t: "qcm", q: "Quelle phrase est à l'imparfait ?", choix: ["Nous buvions du lait.", "Nous buvons du lait.", "Nous boirons du lait."], r: "Nous buvions du lait.", expl: "-ions est la terminaison de l'imparfait avec nous." },
      { t: "saisie", q: "Corrige le verbe : « Autrefois, tu résolais vite les problèmes. »", r: "résolvais", expl: "en résolvant → tu résolv<b>ais</b>." },
      { t: "saisie", q: "Corrige le verbe : « Mon grand-père peindait des pirogues. »", r: "peignait", expl: "en peignant → il peign<b>ait</b>." },
      { t: "saisie", q: "Mets à l'imparfait : « Je lis un conte. »", r: "Je lisais un conte.", large: true, expl: "en lisant → je lis<b>ais</b>." },
      { t: "trous", q: "Complète à l'imparfait.", texte: "Quand il [pleuvait] (pleuvoir), nous [prenions] (prendre) nos parapluies. Les enfants [couraient] (courir) et vous [riiez] (rire).", expl: "en pleuvant, en prenant, en courant, en riant → pleuvait, prenions, couraient, riiez (deux i)." }
    ],
    [
      { t: "dictee", texte: "Autrefois, les élèves écrivaient sur des ardoises et ils lisaient à voix haute.", expl: "en écrivant → écriv<b>aient</b> ; en lisant → lis<b>aient</b>." },
      { t: "dictee", texte: "Chaque matin, ma grand-mère faisait du feu et nous buvions du café.", expl: "fais<b>ait</b>, buv<b>ions</b>." },
      { t: "trous", q: "Mets les verbes à l'imparfait.", texte: "Au village, les hommes [partaient] (partir) tôt au champ. Ils [prenaient] (prendre) leurs outils. Les femmes [faisaient] (faire) la cuisine et nous [disions] (dire) des devinettes.", expl: "partaient, prenaient, faisaient, disions." },
      { t: "saisie", q: "Écris la phrase à l'imparfait : « Vous écrivez et vous peignez. »", r: "Vous écriviez et vous peigniez.", large: true, expl: "en écrivant → écriv<b>iez</b> ; en peignant → peign<b>iez</b>." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Il venait souvent.", "Nous mettions la table.", "Tu boivais trop vite.", "Elles craignaient l'orage."], r: "Tu boivais trop vite.", expl: "en buvant → tu <b>buvais</b>." }
    ]
  ]
});
