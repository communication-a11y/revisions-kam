// Précision ajoutée : le cahier dit que acheter, racheter, crocheter « ne doublent pas la consonne t » sans dire qu'ils prennent un accent grave ; on a écrit « j'achète » (forme correcte), comme pour « je pèle ».
LECONS.push({
  id: "fr-conj-present-eter-eler",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes terminés par -eter ou -eler au présent de l'indicatif",
  date: "2026-09-24",
  photos: ["DJI_20261118220245_0022_D.jpg", "DJI_20261118220259_0023_D.jpg"],
  retiens:
    "<p><b>Règle :</b> les verbes en <b>-eter</b> ou en <b>-eler</b>, comme jeter ou rappeler, prennent <b>deux t</b> ou <b>deux l</b> devant le <b>e muet</b>.</p>" +
    "<table><tr><th>jeter</th><th>rappeler</th></tr>" +
    "<tr><td>je je<b>tte</b></td><td>je rappe<b>lle</b></td></tr><tr><td>tu je<b>ttes</b></td><td>tu rappe<b>lles</b></td></tr>" +
    "<tr><td>il / elle je<b>tte</b></td><td>il / elle rappe<b>lle</b></td></tr><tr><td>nous je<b>tons</b></td><td>nous rappe<b>lons</b></td></tr>" +
    "<tr><td>vous je<b>tez</b></td><td>vous rappe<b>lez</b></td></tr><tr><td>ils / elles je<b>ttent</b></td><td>ils / elles rappe<b>llent</b></td></tr></table>" +
    "<p><b>Exceptions :</b></p><ul>" +
    "<li>Des verbes en <b>-eler</b> ne doublent pas le l et prennent un <b>accent grave</b> sur le e : geler (congeler, surgeler, décongeler), peler, harceler, ciseler, démanteler.<br>Ex : peler → je p<b>è</b>le, nous pelons.</li>" +
    "<li>Des verbes en <b>-eter</b> ne doublent pas le t : acheter, racheter, crocheter… (j'ach<b>è</b>te, nous achetons).</li></ul>",
  astuce: "On double la consonne quand la fin du verbe est muette : je je<b>tte</b>, ils appe<b>llent</b>. Avec nous et vous, on entend -ons et -ez : une seule consonne.",
  regle: "jeter, appeler… doublent t ou l devant un e muet (je jette, ils appellent) ; avec nous et vous, une seule consonne. Exceptions : geler, peler, acheter… prennent un accent grave (je pèle, j'achète).",
  niveaux: [
    [
      { t: "qcm", q: "jeter → je …", choix: ["jette", "jete", "jète", "jettes"], r: "jette", expl: "Devant le e muet, on double le t : je je<b>tt</b>e." },
      { t: "qcm", q: "appeler → nous …", choix: ["appelons", "appellons", "appèlons"], r: "appelons", expl: "Avec nous, la terminaison -ons se prononce : un seul l." },
      { t: "vf", q: "On écrit « ils rappellent » avec deux l.", r: true, expl: "-ent est muet : on double le l." },
      { t: "vf", q: "On écrit « vous jettez » avec deux t.", r: false, expl: "Avec vous, on entend -ez : un seul t. vous je<b>t</b>ez." },
      { t: "qcm", q: "Lequel de ces verbes est une exception (il ne double pas sa consonne) ?", choix: ["peler", "jeter", "appeler", "rappeler"], r: "peler", expl: "peler prend un accent grave : je p<b>è</b>le." },
      { t: "relier", q: "Relie chaque sujet au verbe <b>jeter</b> bien conjugué.", paires: [["je", "jette"], ["tu", "jettes"], ["nous", "jetons"], ["vous", "jetez"], ["ils", "jettent"]], expl: "Deux t devant le e muet ; un seul t avec nous et vous." }
    ],
    [
      { t: "saisie", q: "appeler → tu …", r: "appelles", expl: "tu appe<b>ll</b>es : deux l devant le e muet." },
      { t: "saisie", q: "rappeler → il …", r: "rappelle", expl: "il rappe<b>ll</b>e" },
      { t: "saisie", q: "jeter → elles …", r: "jettent", expl: "elles je<b>tt</b>ent" },
      { t: "saisie", q: "épeler → j' …", r: "épelle", expl: "épeler se conjugue comme appeler : j'épe<b>ll</b>e." },
      { t: "saisie", q: "projeter → nous …", r: "projetons", expl: "Avec nous : un seul t. nous proje<b>t</b>ons." },
      { t: "saisie", q: "peler → je …", r: "pèle", aide: "C'est une exception.", expl: "peler ne double pas le l, il prend un accent grave : je p<b>è</b>le." },
      { t: "saisie", q: "geler → il …", r: "gèle", expl: "geler est une exception : il g<b>è</b>le." },
      { t: "saisie", q: "acheter → j' …", r: "achète", expl: "acheter ne double pas le t : j'ach<b>è</b>te." },
      { t: "trous", q: "Conjugue <b>appeler</b> au présent.", texte: "j'[appelle] — tu [appelles] — il [appelle] — nous [appelons] — vous [appelez] — ils [appellent]", expl: "Deux l devant le e muet, un seul avec nous et vous." }
    ],
    [
      { t: "classer", q: "Range ces verbes.", cases: ["double la consonne", "prend un accent grave"], items: [["jeter", "double la consonne"], ["geler", "prend un accent grave"], ["appeler", "double la consonne"], ["acheter", "prend un accent grave"], ["rappeler", "double la consonne"], ["peler", "prend un accent grave"]], expl: "geler, peler, acheter sont les exceptions de la leçon." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous gelons", "nous gèlons", "nous gellons"], r: "nous gelons", expl: "Comme dans l'exemple du cahier (nous pelons) : avec nous, pas d'accent et un seul l." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils achètent", "ils achettent", "ils achetent"], r: "ils achètent", expl: "acheter ne double pas le t ; devant le e muet il prend un accent grave." },
      { t: "saisie", q: "Corrige le verbe : « Le vendeur rapelle son client. »", r: "rappelle", expl: "rappeler : deux p, et deux l devant le e muet. Il ra<b>pp</b>e<b>ll</b>e." },
      { t: "saisie", q: "Corrige le verbe : « Maman pelle les oignons. »", r: "pèle", expl: "peler est une exception : elle p<b>è</b>le (une pelle est un outil !)." },
      { t: "saisie", q: "Mets au singulier : « Nous jetons les papiers. » → Je …", r: "Je jette les papiers.", large: true, expl: "je je<b>tt</b>e : deux t devant le e muet." },
      { t: "trous", q: "Complète au présent.", texte: "Le maître [appelle] (appeler) les élèves. Nous [épelons] (épeler) les mots. Ce soir, l'eau du frigo [gèle] (geler). Papa [achète] (acheter) du pain.", expl: "appelle, épelons, gèle, achète." }
    ],
    [
      { t: "dictee", texte: "Le pêcheur jette son filet et appelle ses amis sur la plage.", expl: "je<b>tt</b>e, appe<b>ll</b>e : deux consonnes devant le e muet." },
      { t: "dictee", texte: "Nous achetons des mangues et Fatou pèle les fruits.", expl: "achetons (avec nous), p<b>è</b>le (exception)." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "Au marché de Thiès, les vendeuses [appellent] (appeler) les clients. Moussa [achète] (acheter) des oranges et il les [pèle] (peler). Vous [jetez] (jeter) les peaux à la poubelle.", expl: "appellent, achète, pèle, jetez." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Tu rappelles ton frère.", "Nous jetons la balle.", "L'eau gelle dans le congélateur.", "J'achète un cahier."], r: "L'eau gelle dans le congélateur.", expl: "geler est une exception : il g<b>è</b>le." },
      { t: "saisie", q: "Écris la phrase au présent avec « ils » : « Tu appelles le chien et tu lui jettes un os. »", r: "Ils appellent le chien et ils lui jettent un os.", large: true, expl: "ils appe<b>ll</b>ent, ils je<b>tt</b>ent." }
    ]
  ]
});
