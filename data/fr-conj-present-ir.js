LECONS.push({
  id: "fr-conj-present-ir",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes du 2e et du 3e groupe terminés par -ir au présent de l'indicatif",
  date: "2026-09-28",
  photos: ["DJI_20261118220325_0026_D.jpg", "DJI_20261118220333_0027_D.jpg"],
  retiens:
    "<p>Tous les verbes du <b>2e groupe</b>, comme envahir, prennent les mêmes terminaisons : <b>is, is, it, issons, issez, issent</b>.<br>Ex : j'envahis… nous envahissons.</p>" +
    "<p>Les verbes du 3e groupe en <b>-tir</b>, comme partir, sentir, mentir, perdent le <b>t</b> aux deux premières personnes du singulier et se terminent par <b>s, s, t, ons, ez, ent</b>.</p>" +
    "<table><tr><th>envahir (2e groupe)</th><th>partir (3e groupe)</th></tr>" +
    "<tr><td>j'envah<b>is</b></td><td>je par<b>s</b></td></tr><tr><td>tu envah<b>is</b></td><td>tu par<b>s</b></td></tr>" +
    "<tr><td>il envah<b>it</b></td><td>il par<b>t</b></td></tr><tr><td>nous envah<b>issons</b></td><td>nous part<b>ons</b></td></tr>" +
    "<tr><td>vous envah<b>issez</b></td><td>vous part<b>ez</b></td></tr><tr><td>ils envah<b>issent</b></td><td>ils part<b>ent</b></td></tr></table>" +
    "<p>Les verbes du 3e groupe en <b>-enir</b>, comme tenir et venir, se conjuguent ainsi :<br>je vien<b>s</b>, tu vien<b>s</b>, il vien<b>t</b>, nous venons, vous venez, ils vie<b>nn</b>ent.</p>" +
    "<p>Les verbes en <b>-vrir</b>, comme couvrir, et quelques verbes comme offrir et cueillir prennent les terminaisons des verbes du <b>1er groupe</b> : <b>e, es, e, ons, ez, ent</b>.<br>Ex : j'offr<b>e</b>, tu offr<b>es</b>, il offr<b>e</b>, nous offr<b>ons</b>, vous offr<b>ez</b>, ils offr<b>ent</b>.</p>",
  astuce: "2e groupe : on entend « iss » avec nous, vous, ils (nous finissons). Venir et tenir : deux n avec ils (ils viennent, ils tiennent).",
  regle: "2e groupe : is, is, it, issons, issez, issent. Verbes en -tir : je pars, il part. Venir, tenir : je viens, ils viennent. Couvrir, offrir, cueillir : e, es, e, ons, ez, ent.",
  niveaux: [
    [
      { t: "qcm", q: "finir → nous …", choix: ["finissons", "finons", "finisons", "finirons"], r: "finissons", expl: "2e groupe : nous fin<b>issons</b>." },
      { t: "qcm", q: "partir → je …", choix: ["pars", "part", "partis", "parte"], r: "pars", expl: "Les verbes en -tir perdent le t avec je et tu : je par<b>s</b>." },
      { t: "qcm", q: "venir → ils …", choix: ["viennent", "venent", "vienent", "venissent"], r: "viennent", expl: "ils vie<b>nn</b>ent, avec deux n." },
      { t: "vf", q: "Le verbe « offrir » prend les terminaisons du 1er groupe : j'offre, tu offres, il offre.", r: true, expl: "offrir, cueillir et les verbes en -vrir se terminent par e, es, e…" },
      { t: "vf", q: "Avec « il », on écrit « il par » sans t.", r: false, expl: "Le t ne disparaît qu'avec je et tu. Avec il : il par<b>t</b>." },
      { t: "classer", q: "Range ces verbes selon leurs terminaisons au présent.", cases: ["is, is, it…", "e, es, e…"], items: [["grandir", "is, is, it…"], ["ouvrir", "e, es, e…"], ["choisir", "is, is, it…"], ["cueillir", "e, es, e…"], ["obéir", "is, is, it…"], ["couvrir", "e, es, e…"]], expl: "Le 2e groupe fait is, is, it ; ouvrir, couvrir, cueillir font e, es, e." }
    ],
    [
      { t: "saisie", q: "grandir → tu …", r: "grandis", expl: "tu grand<b>is</b>" },
      { t: "saisie", q: "réussir → vous …", r: "réussissez", expl: "vous réuss<b>issez</b>" },
      { t: "saisie", q: "remplir → elles …", r: "remplissent", expl: "elles rempl<b>issent</b>" },
      { t: "saisie", q: "sentir → je …", r: "sens", expl: "Le t disparaît avec je : je sen<b>s</b>." },
      { t: "saisie", q: "mentir → il …", r: "ment", expl: "Avec il, le t revient : il men<b>t</b>." },
      { t: "saisie", q: "tenir → tu …", r: "tiens", expl: "tu tien<b>s</b>, comme tu viens." },
      { t: "saisie", q: "ouvrir → j' …", r: "ouvre", expl: "ouvrir prend les terminaisons du 1er groupe : j'ouvr<b>e</b>." },
      { t: "saisie", q: "cueillir → nous …", r: "cueillons", expl: "nous cueill<b>ons</b>, comme un verbe du 1er groupe." },
      { t: "trous", q: "Conjugue <b>venir</b> au présent.", texte: "je [viens] — tu [viens] — il [vient] — nous [venons] — vous [venez] — ils [viennent]", expl: "Le radical change : vien- / ven- / vienn-." },
      { t: "relier", q: "Relie chaque sujet à la bonne forme de <b>partir</b>.", paires: [["je", "pars"], ["il", "part"], ["nous", "partons"], ["vous", "partez"], ["ils", "partent"]], expl: "s, s, t, ons, ez, ent." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous partons", "nous partissons", "nous parons"], r: "nous partons", expl: "partir est du 3e groupe : pas de -iss-. nous part<b>ons</b>." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["il offre", "il offrit", "il offert"], r: "il offre", expl: "offrir : terminaisons du 1er groupe, il offr<b>e</b>." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils tiennent", "ils tienent", "ils tenent"], r: "ils tiennent", expl: "Comme venir : ils tie<b>nn</b>ent." },
      { t: "saisie", q: "Mets le verbe au présent : « Tu ouvris la porte. »", r: "ouvres", expl: "ouvrir au présent : tu ouvr<b>es</b>, comme tu chantes." },
      { t: "saisie", q: "Corrige le verbe : « Les élèves obéisent au maître. »", r: "obéissent", expl: "2e groupe : ils obé<b>issent</b>, avec deux s." },
      { t: "saisie", q: "Mets au pluriel : « Je sors de la maison. » → Nous …", r: "Nous sortons de la maison.", large: true, expl: "sortir, comme partir : nous sort<b>ons</b>." },
      { t: "trous", q: "Complète au présent.", texte: "Le soleil [envahit] (envahir) la cour. Les enfants [sortent] (sortir) jouer. Awa [cueille] (cueillir) des fleurs et elle les [offre] (offrir) à sa mère. Nous [revenons] (revenir) à midi.", expl: "envahit, sortent, cueille, offre, revenons." },
      { t: "classer", q: "Range ces formes.", cases: ["bien écrit", "faux"], items: [["tu sens", "bien écrit"], ["tu sents", "faux"], ["ils viennent", "bien écrit"], ["ils venent", "faux"], ["vous choisissez", "bien écrit"], ["vous choisez", "faux"]], expl: "tu sen<b>s</b>, ils vie<b>nn</b>ent, vous chois<b>issez</b>." }
    ],
    [
      { t: "dictee", texte: "Les enfants finissent leurs devoirs puis ils partent jouer au ballon.", expl: "fin<b>issent</b> (2e groupe), par<b>tent</b> (3e groupe)." },
      { t: "dictee", texte: "Le matin, je cueille des mangues et je les offre à mes voisins.", expl: "cueill<b>e</b>, offr<b>e</b> : terminaisons du 1er groupe." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "Chaque samedi, Ibrahima [vient] (venir) chez nous. Il [ouvre] (ouvrir) le portail et nous [partons] (partir) au marché. Là-bas, nous [choisissons] (choisir) des légumes et vous [remplissez] (remplir) les paniers.", expl: "vient, ouvre, partons, choisissons, remplissez." },
      { t: "saisie", q: "Écris la phrase avec « ils » : « Il tient la corde et il ne ment jamais. »", r: "Ils tiennent la corde et ils ne mentent jamais.", large: true, expl: "ils tie<b>nn</b>ent, ils ment<b>ent</b>." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Tu couvres la marmite.", "Nous bâtissons une case.", "Elle sert le repas.", "Je part à l'école."], r: "Je part à l'école.", expl: "Avec je, le t disparaît : je par<b>s</b>." }
    ]
  ]
});
