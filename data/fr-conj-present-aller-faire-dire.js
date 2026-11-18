LECONS.push({
  id: "fr-conj-present-aller-faire-dire",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le présent de l'indicatif des verbes aller, faire et dire",
  date: "2026-10-12",
  photos: ["DJI_20261118220513_0039_D.jpg"],
  retiens:
    "<p>Les verbes <b>aller</b>, <b>faire</b> et <b>dire</b> ont des conjugaisons particulières : <b>leur radical change</b> selon les personnes.</p>" +
    "<table><tr><th>aller</th><th>faire</th><th>dire</th></tr>" +
    "<tr><td>je vais</td><td>je fais</td><td>je dis</td></tr><tr><td>tu vas</td><td>tu fais</td><td>tu dis</td></tr>" +
    "<tr><td>il / elle va</td><td>il / elle fait</td><td>il / elle dit</td></tr><tr><td>nous allons</td><td>nous faisons</td><td>nous disons</td></tr>" +
    "<tr><td>vous allez</td><td>vous <b>faites</b></td><td>vous <b>dites</b></td></tr><tr><td>ils / elles vont</td><td>ils / elles font</td><td>ils / elles disent</td></tr></table>" +
    "<p>Les verbes <b>prédire</b>, <b>contredire</b>, <b>interdire</b>, <b>médire</b> se conjuguent comme dire, sauf à la 2e personne du pluriel : ils se terminent par <b>-ez</b>.<br>Ex : vous contredis<b>ez</b>, vous interdis<b>ez</b>.</p>" +
    "<p><b>Attention !</b> Le verbe <b>maudire</b> se conjugue comme le verbe finir aux personnes du pluriel.<br>Ex : nous maudi<b>ss</b>ons, ils maudi<b>ss</b>ent.</p>",
  astuce: "Trois formes en « -tes » à retenir : vous <b>êtes</b>, vous <b>faites</b>, vous <b>dites</b>. Jamais « vous faisez » ni « vous disez ».",
  regle: "aller : vais, vas, va, allons, allez, vont. faire : fais, fais, fait, faisons, faites, font. dire : dis, dis, dit, disons, dites, disent. Mais vous interdisez, vous prédisez.",
  niveaux: [
    [
      { t: "qcm", q: "aller → je …", choix: ["vais", "vas", "va", "alle"], r: "vais", expl: "je vais, tu vas, il va." },
      { t: "qcm", q: "faire → vous …", choix: ["faites", "faisez", "fesez", "faitez"], r: "faites", expl: "vous <b>faites</b>, une forme à bien retenir." },
      { t: "qcm", q: "dire → vous …", choix: ["dites", "disez", "ditez", "dissez"], r: "dites", expl: "vous <b>dites</b>." },
      { t: "vf", q: "Le radical du verbe aller change selon les personnes.", r: true, expl: "je <b>v</b>ais, nous <b>all</b>ons : le radical change." },
      { t: "vf", q: "On dit « vous interdites ».", r: false, expl: "interdire se conjugue comme dire SAUF avec vous : vous interdis<b>ez</b>." },
      { t: "relier", q: "Relie chaque sujet à la bonne forme de <b>aller</b>.", paires: [["je", "vais"], ["tu", "vas"], ["il", "va"], ["nous", "allons"], ["ils", "vont"]], expl: "vais, vas, va, allons, allez, vont." }
    ],
    [
      { t: "saisie", q: "aller → ils …", r: "vont", expl: "ils vont" },
      { t: "saisie", q: "aller → vous …", r: "allez", expl: "vous allez" },
      { t: "saisie", q: "faire → nous …", r: "faisons", expl: "nous faisons" },
      { t: "saisie", q: "faire → elles …", r: "font", expl: "elles font" },
      { t: "saisie", q: "faire → il …", r: "fait", expl: "il fai<b>t</b>" },
      { t: "saisie", q: "dire → ils …", r: "disent", expl: "ils disent" },
      { t: "saisie", q: "dire → tu …", r: "dis", expl: "tu dis" },
      { t: "trous", q: "Conjugue <b>faire</b> au présent.", texte: "je [fais] — tu [fais] — il [fait] — nous [faisons] — vous [faites] — ils [font]", expl: "fais, fais, fait, faisons, faites, font." },
      { t: "trous", q: "Conjugue <b>dire</b> au présent.", texte: "je [dis] — tu [dis] — il [dit] — nous [disons] — vous [dites] — ils [disent]", expl: "dis, dis, dit, disons, dites, disent." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["vous prédisez", "vous prédites", "vous prédisiez"], r: "vous prédisez", expl: "prédire fait -ez avec vous : vous prédis<b>ez</b>." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous maudissons", "nous maudisons", "nous maudons"], r: "nous maudissons", expl: "maudire se conjugue comme finir au pluriel : nous maudi<b>ss</b>ons." },
      { t: "saisie", q: "contredire → vous …", r: "contredisez", expl: "vous contredis<b>ez</b>" },
      { t: "saisie", q: "maudire → ils …", r: "maudissent", expl: "ils maudi<b>ss</b>ent, comme ils finissent." },
      { t: "saisie", q: "Corrige le verbe : « Vous faisez vos devoirs. »", r: "faites", expl: "vous <b>faites</b>" },
      { t: "saisie", q: "Corrige le verbe : « Les enfants allent à l'école. »", r: "vont", expl: "aller : ils <b>vont</b>." },
      { t: "classer", q: "Range ces formes.", cases: ["bien écrit", "faux"], items: [["vous dites", "bien écrit"], ["vous disez", "faux"], ["vous interdisez", "bien écrit"], ["vous interdites", "faux"], ["ils font", "bien écrit"], ["ils faisent", "faux"]], expl: "vous dites, mais vous interdisez ; ils font." },
      { t: "saisie", q: "Mets au pluriel : « Tu vas au marché. » → Vous …", r: "Vous allez au marché.", large: true, expl: "aller : vous allez." }
    ],
    [
      { t: "dictee", texte: "Vous faites vos exercices pendant que nous allons chercher de l'eau.", expl: "vous faites, nous allons." },
      { t: "dictee", texte: "Le maître interdit le bruit et les élèves disent qu'ils vont se taire.", expl: "il interdit, ils disent, ils vont." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "Le dimanche, nous [allons] (aller) à la plage de Yoff. Papa [fait] (faire) du thé. Vous [dites] (dire) bonjour aux voisins et vous leur [interdisez] (interdire) de crier.", expl: "allons, fait, dites, interdisez." },
      { t: "saisie", q: "Écris la phrase avec « vous » : « Tu dis la vérité et tu fais ton travail. »", r: "Vous dites la vérité et vous faites votre travail.", large: true, expl: "vous dites, vous faites." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Je vais à Mbour.", "Vous médisez de vos amis.", "Ils font la vaisselle.", "Vous disez merci."], r: "Vous disez merci.", expl: "dire : vous <b>dites</b>." }
    ]
  ]
});
