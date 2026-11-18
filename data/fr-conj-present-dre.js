// À VÉRIFIER : fautes de recopie corrigées dans le cahier (photo 0030) : « ils vendend » → « ils vendent » ; « Nous résoluons » → « nous résolvons ». La règle « les en indre … le modifient » a été complétée en « les verbes en -indre … modifient leur radical ».
LECONS.push({
  id: "fr-conj-present-dre",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes en -dre au présent de l'indicatif",
  date: "2026-09-30",
  photos: ["DJI_20261118220350_0029_D.jpg", "DJI_20261118220401_0030_D.jpg"],
  retiens:
    "<p>Tous les verbes terminés à l'infinitif par <b>-dre</b>, comme attendre ou défendre, <b>conservent le d</b> à toutes les personnes.</p>" +
    "<table><tr><th>vendre</th></tr><tr><td>je ven<b>ds</b></td></tr><tr><td>tu ven<b>ds</b></td></tr><tr><td>il ven<b>d</b></td></tr>" +
    "<tr><td>nous ven<b>dons</b></td></tr><tr><td>vous ven<b>dez</b></td></tr><tr><td>ils ven<b>dent</b></td></tr></table>" +
    "<p>Les verbes de la famille de <b>prendre</b> (apprendre, comprendre…) conservent le <b>d</b> aux 3 personnes du singulier et modifient leur radical aux 3 personnes du pluriel :<br>je pren<b>ds</b>, tu pren<b>ds</b>, il pren<b>d</b>, nous pren<b>ons</b>, vous pren<b>ez</b>, ils pre<b>nn</b>ent.</p>" +
    "<p>Cependant, les verbes en <b>-soudre</b> (résoudre, dissoudre…) et les verbes en <b>-indre</b> (craindre, joindre…) <b>perdent le d</b> au singulier et modifient leur radical au pluriel.</p>" +
    "<table><tr><th>craindre</th><th>résoudre</th></tr>" +
    "<tr><td>je crain<b>s</b></td><td>je réso<b>us</b></td></tr><tr><td>tu crain<b>s</b></td><td>tu réso<b>us</b></td></tr>" +
    "<tr><td>il crain<b>t</b></td><td>il réso<b>ut</b></td></tr><tr><td>nous crai<b>gn</b>ons</td><td>nous réso<b>lv</b>ons</td></tr>" +
    "<tr><td>vous crai<b>gn</b>ez</td><td>vous réso<b>lv</b>ez</td></tr><tr><td>ils crai<b>gn</b>ent</td><td>ils réso<b>lv</b>ent</td></tr></table>",
  astuce: "vendre, attendre : le d reste toujours (il vend, sans t). Craindre, peindre, résoudre : plus de d au singulier (il craint, il résout).",
  regle: "Verbes en -dre : ds, ds, d, dons, dez, dent. Prendre : ils prennent. Verbes en -indre et -soudre : s, s, t au singulier, et le radical change au pluriel (nous craignons, nous résolvons).",
  niveaux: [
    [
      { t: "qcm", q: "vendre → il …", choix: ["vend", "vent", "vends", "vende"], r: "vend", expl: "Le d reste à toutes les personnes : il ven<b>d</b>, sans t." },
      { t: "qcm", q: "craindre → il …", choix: ["craint", "craind", "crainds", "craigne"], r: "craint", expl: "Les verbes en -indre perdent le d au singulier : il crain<b>t</b>." },
      { t: "qcm", q: "prendre → ils …", choix: ["prennent", "prendent", "prenent", "prends"], r: "prennent", expl: "Au pluriel, le radical change : ils pre<b>nn</b>ent." },
      { t: "vf", q: "Les verbes comme attendre gardent le d à toutes les personnes.", r: true, expl: "j'attends, il attend, nous attendons… le d est toujours là." },
      { t: "vf", q: "On écrit « je résouds » avec un d.", r: false, expl: "Les verbes en -soudre perdent le d : je réso<b>us</b>." },
      { t: "classer", q: "Range ces verbes.", cases: ["garde le d (comme vendre)", "perd le d (comme craindre)"], items: [["attendre", "garde le d (comme vendre)"], ["peindre", "perd le d (comme craindre)"], ["répondre", "garde le d (comme vendre)"], ["joindre", "perd le d (comme craindre)"], ["perdre", "garde le d (comme vendre)"], ["résoudre", "perd le d (comme craindre)"]], expl: "Les verbes en -indre et en -soudre perdent le d au singulier." }
    ],
    [
      { t: "saisie", q: "attendre → j' …", r: "attends", expl: "j'atten<b>ds</b>" },
      { t: "saisie", q: "répondre → tu …", r: "réponds", expl: "tu répon<b>ds</b>" },
      { t: "saisie", q: "entendre → il …", r: "entend", expl: "il enten<b>d</b> : le d reste, pas de t." },
      { t: "saisie", q: "vendre → ils …", r: "vendent", expl: "ils ven<b>dent</b>" },
      { t: "saisie", q: "comprendre → nous …", r: "comprenons", expl: "Au pluriel, le d disparaît : nous compren<b>ons</b>." },
      { t: "saisie", q: "apprendre → elles …", r: "apprennent", expl: "elles appre<b>nn</b>ent, comme ils prennent." },
      { t: "saisie", q: "peindre → je …", r: "peins", expl: "-indre : je pein<b>s</b>, sans d." },
      { t: "saisie", q: "joindre → nous …", r: "joignons", expl: "nous joi<b>gn</b>ons, comme nous craignons." },
      { t: "trous", q: "Conjugue <b>résoudre</b> au présent.", texte: "je [résous] — tu [résous] — il [résout] — nous [résolvons] — vous [résolvez] — ils [résolvent]", expl: "us, us, ut au singulier ; radical résolv- au pluriel." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous prenons", "nous prendons", "nous prennons"], r: "nous prenons", expl: "nous pren<b>ons</b> : sans d et avec un seul n." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils craignent", "ils craindent", "ils crainent"], r: "ils craignent", expl: "Au pluriel, le radical devient craign- : ils crai<b>gn</b>ent." },
      { t: "saisie", q: "Corrige le verbe : « Les marchands vendend du poisson. »", r: "vendent", expl: "ils ven<b>dent</b> : la terminaison est -ent." },
      { t: "saisie", q: "Corrige le verbe : « Nous résoluons le problème. »", r: "résolvons", expl: "nous réso<b>lv</b>ons." },
      { t: "saisie", q: "Corrige le verbe : « Le chien mort le voleur. »", r: "mord", expl: "mordre garde le d : il mor<b>d</b>." },
      { t: "saisie", q: "Mets au pluriel : « Il éteint la lampe. » → Ils …", r: "Ils éteignent la lampe.", large: true, expl: "éteindre : ils étei<b>gn</b>ent." },
      { t: "trous", q: "Complète au présent.", texte: "Fatou [attend] (attendre) le car rapide. Elle [craint] (craindre) d'être en retard. Ses frères [comprennent] (comprendre) et ils [descendent] (descendre) avec elle.", expl: "attend, craint, comprennent, descendent." }
    ],
    [
      { t: "dictee", texte: "Le peintre peint le mur pendant que nous attendons dans la cour.", expl: "il pein<b>t</b> (-indre), nous atten<b>dons</b> (le d reste)." },
      { t: "dictee", texte: "Les élèves comprennent la leçon et ils résolvent tous les problèmes.", expl: "compre<b>nn</b>ent, réso<b>lv</b>ent." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "Au marché de Ziguinchor, la vendeuse [vend] (vendre) des mangues. Je [prends] (prendre) un panier. Vous [répondez] (répondre) à ses questions et nous [rejoignons] (rejoindre) maman.", expl: "vend, prends, répondez, rejoignons." },
      { t: "saisie", q: "Écris la phrase avec « nous » : « Je prends mon cahier et je résous l'exercice. »", r: "Nous prenons notre cahier et nous résolvons l'exercice.", large: true, expl: "nous pren<b>ons</b>, nous réso<b>lv</b>ons." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Tu perds ton stylo.", "Il prend le bus.", "Elle peind la porte.", "Ils apprennent vite."], r: "Elle peind la porte.", expl: "peindre perd le d au singulier : elle pein<b>t</b>." }
    ]
  ]
});
