// À VÉRIFIER : dans le cahier (photo 0017), le NB dit « La plupart des verbes conservent le radical pour toutes les formes conjuguées ; ce sont des verbes particuliers », ce qui contredit l'exemple de boire. Une phrase manque : on a écrit « Certains verbes changent de radical : ce sont des verbes particuliers. »
LECONS.push({
  id: "fr-conj-verbes-groupes",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes : infinitif, classement et forme conjuguée",
  date: "2026-09-17",
  photos: ["DJI_20261118220154_0016_D.jpg", "DJI_20261118220159_0017_D.jpg", "DJI_20261118220209_0018_D.jpg"],
  retiens:
    "<p>Le verbe est le <b>noyau</b> de la phrase. Il nous dit ce que font les personnes, les animaux ou les choses.</p>" +
    "<p>Un verbe à l'<b>infinitif</b> se compose de deux parties : le <b>radical</b> et la <b>terminaison</b>.<br>Ex : présent<b>er</b> (radical présent-, terminaison -er) ; rend<b>re</b> (radical rend-, terminaison -re).</p>" +
    "<p>On classe les verbes en <b>3 groupes</b> selon leur terminaison à l'infinitif :</p>" +
    "<table><tr><th>groupe</th><th>quels verbes ?</th><th>exemples</th></tr>" +
    "<tr><td><b>1er groupe</b></td><td>tous les verbes en <b>-er</b>, sauf aller</td><td>chanter, crier, nager</td></tr>" +
    "<tr><td><b>2e groupe</b></td><td>les verbes en <b>-ir</b> qui font leur participe présent en <b>-issant</b></td><td>finir → en finissant</td></tr>" +
    "<tr><td><b>3e groupe</b></td><td>les verbes en <b>-oir</b>, <b>-re</b>, et les verbes en <b>-ir</b> qui font leur participe présent en <b>-ant</b></td><td>lire → en lisant ; boire → en buvant</td></tr></table>" +
    "<p><b>NB :</b> la plupart des verbes gardent le même radical à toutes les formes conjuguées. <b>Certains verbes changent de radical : ce sont des verbes particuliers.</b><br>Ex : boire a plusieurs radicaux : <b>boi</b>- (je bois), <b>buv</b>- (nous buvons), <b>boiv</b>- (ils boivent).</p>" +
    "<p>Les verbes <b>avoir</b> et <b>être</b> n'appartiennent à aucun groupe : ce sont des <b>auxiliaires</b>.</p>" +
    "<p>Dans une phrase, le verbe est le plus souvent <b>conjugué</b> (je bois, nous buvons). Pour savoir à quel groupe il appartient, on cherche son infinitif (boire).</p>",
  astuce: "Pour départager un verbe en -ir, dis « en … » : en fin<b>issant</b> → 2e groupe ; en part<b>ant</b> → 3e groupe.",
  regle: "1er groupe : verbes en -er (sauf aller). 2e groupe : verbes en -ir avec « en -issant ». 3e groupe : tous les autres (-oir, -re, -ir avec « en -ant »). Avoir et être sont des auxiliaires.",
  niveaux: [
    [
      { t: "qcm", q: "Quel est le verbe dans la phrase : « Awa <b>lave</b> les assiettes. » ?", choix: ["Awa", "lave", "assiettes"], r: "lave", expl: "Le verbe dit ce que fait Awa : elle lave. C'est le noyau de la phrase." },
      { t: "qcm", q: "Dans « chanter », quelle est la terminaison ?", choix: ["-er", "chant-", "-ter"], r: "-er", expl: "chanter = radical <b>chant-</b> + terminaison <b>-er</b>." },
      { t: "vf", q: "Le verbe « aller » appartient au 1er groupe.", r: false, expl: "Le 1er groupe contient tous les verbes en -er <b>sauf aller</b>." },
      { t: "vf", q: "Avoir et être n'appartiennent à aucun groupe : ce sont des auxiliaires.", r: true, expl: "C'est écrit dans la leçon : avoir et être sont des auxiliaires." },
      { t: "qcm", q: "« finir » fait « en finissant ». Il est du…", choix: ["1er groupe", "2e groupe", "3e groupe"], r: "2e groupe", expl: "Verbe en -ir avec un participe présent en <b>-issant</b> : 2e groupe." },
      { t: "classer", q: "Range chaque verbe dans son groupe.", cases: ["1er groupe", "2e groupe", "3e groupe"], items: [["danser", "1er groupe"], ["grandir", "2e groupe"], ["lire", "3e groupe"], ["crier", "1er groupe"], ["choisir", "2e groupe"], ["boire", "3e groupe"]], expl: "-er → 1er groupe ; -ir avec « en -issant » → 2e groupe ; -re → 3e groupe." }
    ],
    [
      { t: "saisie", q: "Écris l'infinitif du verbe : « Nous <b>mangeons</b> du riz. »", r: "manger", expl: "mangeons vient du verbe <b>manger</b> (1er groupe)." },
      { t: "saisie", q: "Écris l'infinitif du verbe : « Moussa <b>finit</b> son travail. »", r: "finir", expl: "finit vient du verbe <b>finir</b> (2e groupe)." },
      { t: "saisie", q: "Écris l'infinitif du verbe : « Les enfants <b>boivent</b> de l'eau. »", r: "boire", expl: "boivent vient du verbe <b>boire</b> (3e groupe), qui change de radical." },
      { t: "saisie", q: "Écris le radical du verbe <b>danser</b>.", r: ["dans", "dans-"], expl: "danser = <b>dans-</b> + -er." },
      { t: "saisie", q: "Écris le participe présent de <b>grandir</b> : en …", r: "grandissant", expl: "en grand<b>issant</b> : c'est pour cela que grandir est du 2e groupe." },
      { t: "saisie", q: "Écris le participe présent de <b>partir</b> : en …", r: "partant", expl: "en part<b>ant</b> (sans -iss-) : partir est du 3e groupe." },
      { t: "relier", q: "Relie chaque verbe à son groupe.", paires: [["marcher", "1er groupe"], ["réussir", "2e groupe"], ["voir", "3e groupe"], ["être", "auxiliaire"]], expl: "marcher (-er), réussir (en réussissant), voir (-oir), être (auxiliaire)." },
      { t: "classer", q: "Ces verbes finissent tous par -ir. Range-les.", cases: ["2e groupe (en -issant)", "3e groupe (en -ant)"], items: [["bondir", "2e groupe (en -issant)"], ["dormir", "3e groupe (en -ant)"], ["obéir", "2e groupe (en -issant)"], ["venir", "3e groupe (en -ant)"], ["remplir", "2e groupe (en -issant)"], ["courir", "3e groupe (en -ant)"]], expl: "en bondissant, en obéissant, en remplissant → 2e groupe ; en dormant, en venant, en courant → 3e groupe." },
      { t: "qcm", q: "À quel groupe appartient <b>recevoir</b> ?", choix: ["1er groupe", "2e groupe", "3e groupe", "aucun groupe"], r: "3e groupe", expl: "Les verbes en <b>-oir</b> sont du 3e groupe." }
    ],
    [
      { t: "qcm", q: "Quelle phrase contient un verbe du 2e groupe ?", choix: ["Fatou sort de la classe.", "Fatou rougit de joie.", "Fatou court vite.", "Fatou dort tard."], r: "Fatou rougit de joie.", expl: "rougir → en roug<b>issant</b> : 2e groupe. Sortir, courir et dormir font « en -ant »." },
      { t: "vf", q: "Tous les verbes terminés par -ir sont du 2e groupe.", r: false, expl: "Non : partir, venir, courir… font « en -ant » et sont du 3e groupe." },
      { t: "qcm", q: "Le verbe <b>boire</b> est un verbe particulier parce que…", choix: ["il change de radical", "il finit par -re", "il n'a pas de radical"], r: "il change de radical", expl: "boire a plusieurs radicaux : boi-, buv-, boiv-. Les verbes qui changent de radical sont des verbes particuliers." },
      { t: "relier", q: "Relie chaque forme de <b>boire</b> à son radical.", paires: [["je bois", "boi-"], ["nous buvons", "buv-"], ["ils boivent", "boiv-"]], expl: "Trois radicaux pour un même verbe : c'est un verbe particulier." },
      { t: "saisie", q: "Écris l'infinitif du verbe : « Ibrahima <b>a</b> un vélo neuf. »", r: "avoir", expl: "a vient de <b>avoir</b>, un auxiliaire." },
      { t: "saisie", q: "Écris l'infinitif du verbe : « Nous <b>allons</b> à Thiès. »", r: "aller", expl: "allons vient de <b>aller</b> : il finit par -er mais n'est pas du 1er groupe." },
      { t: "classer", q: "Range ces verbes.", cases: ["1er groupe", "2e groupe", "3e groupe", "auxiliaire"], items: [["aller", "3e groupe"], ["payer", "1er groupe"], ["avoir", "auxiliaire"], ["applaudir", "2e groupe"], ["prendre", "3e groupe"], ["être", "auxiliaire"]], expl: "aller est l'exception des verbes en -er ; avoir et être sont des auxiliaires." }
    ],
    [
      { t: "trous", q: "Écris l'infinitif de chaque verbe en gras du texte : « Khady <b>écrit</b> une lettre, puis elle <b>choisit</b> une enveloppe et elle <b>colle</b> un timbre. »", texte: "écrit → [écrire] ; choisit → [choisir] ; colle → [coller]", expl: "écrire (3e groupe), choisir (2e groupe), coller (1er groupe)." },
      { t: "qcm", q: "Dans « Les pêcheurs <b>partent</b> en mer et <b>remplissent</b> la pirogue », les deux verbes sont…", choix: ["du 3e groupe puis du 2e groupe", "tous les deux du 2e groupe", "du 1er groupe puis du 3e groupe", "tous les deux du 3e groupe"], r: "du 3e groupe puis du 2e groupe", expl: "partir → en partant (3e groupe) ; remplir → en remplissant (2e groupe)." },
      { t: "saisie", q: "Trouve l'intrus (le seul verbe qui n'est pas du 1er groupe) : jouer, aller, chanter, sauter.", r: "aller", expl: "aller finit par -er mais n'est pas du 1er groupe." },
      { t: "saisie", q: "Trouve l'intrus (le seul verbe qui n'est pas du 2e groupe) : finir, bondir, sortir, grandir.", r: "sortir", expl: "en sortant (sans -iss-) : sortir est du 3e groupe." },
      { t: "dictee", texte: "Le verbe est le noyau de la phrase et il se compose d'un radical et d'une terminaison.", expl: "Retiens bien : radical + terminaison." }
    ]
  ]
});
