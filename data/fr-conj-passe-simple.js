LECONS.push({
  id: "fr-conj-passe-simple",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le passé simple des verbes en -er et en -ir",
  date: "2026-11-16",
  photos: ["DJI_20261118220650_0054_D.jpg", "DJI_20261118220656_0055_D.jpg"],
  retiens:
    "<p>Le passé simple est un temps simple qu'on utilise <b>à l'écrit</b>, surtout dans les contes et les récits. Il indique une action <b>complètement achevée</b>.</p>" +
    "<p>Les verbes en <b>-er</b> (et le verbe aller) : on entend <b>a</b>.</p>" +
    "<table><tr><th>chanter</th><th>aller</th></tr>" +
    "<tr><td>je chant<b>ai</b></td><td>j'all<b>ai</b></td></tr><tr><td>tu chant<b>as</b></td><td>tu all<b>as</b></td></tr>" +
    "<tr><td>il chant<b>a</b></td><td>il all<b>a</b></td></tr><tr><td>nous chant<b>âmes</b></td><td>nous all<b>âmes</b></td></tr>" +
    "<tr><td>vous chant<b>âtes</b></td><td>vous all<b>âtes</b></td></tr><tr><td>ils chant<b>èrent</b></td><td>ils all<b>èrent</b></td></tr></table>" +
    "<p>Les verbes du 2<sup>e</sup> groupe (en <b>-ir</b>, comme finir) : on entend <b>i</b>.</p>" +
    "<table><tr><th>bondir</th></tr><tr><td>je bond<b>is</b></td></tr><tr><td>tu bond<b>is</b></td></tr><tr><td>il bond<b>it</b></td></tr>" +
    "<tr><td>nous bond<b>îmes</b></td></tr><tr><td>vous bond<b>îtes</b></td></tr><tr><td>ils bond<b>irent</b></td></tr></table>",
  astuce: "<b>nous</b> et <b>vous</b> portent un chapeau : â, î. Avec <b>ils</b>, les verbes en -er font « -èrent » avec un accent grave.",
  regle: "verbes en -er : ai, as, a, âmes, âtes, èrent. Verbes en -ir (2e groupe) : is, is, it, îmes, îtes, irent.",
  niveaux: [
    [
      { t: "qcm", q: "« Le lion <b>arriva</b> au village. » L'action est…", choix: ["finie, dans le passé", "en train de se passer", "pas encore arrivée"], r: "finie, dans le passé", expl: "Le passé simple raconte une action complètement achevée." },
      { t: "qcm", q: "Dans quel texte trouve-t-on surtout le passé simple ?", choix: ["un conte", "une conversation au téléphone", "un message vocal"], r: "un conte", expl: "Le passé simple s'utilise à l'écrit, dans les récits et les contes." },
      { t: "qcm", q: "chanter → il …", choix: ["chanta", "chantit", "chantait", "chantat"], r: "chanta", expl: "Verbe en -er : avec il, la terminaison est <b>-a</b>." },
      { t: "qcm", q: "finir → il …", choix: ["finit", "fina", "finissa", "finat"], r: "finit", expl: "Verbe du 2e groupe : avec il, la terminaison est <b>-it</b>." },
      { t: "vf", q: "Avec « nous », les verbes en -er se terminent par <b>-âmes</b> au passé simple.", r: true, expl: "nous chantâmes, nous allâmes : avec le chapeau sur le a." },
      { t: "classer", q: "Range chaque verbe selon la voyelle qu'on entend au passé simple.", cases: ["on entend « a »", "on entend « i »"], items: [["marcher", "on entend « a »"], ["grandir", "on entend « i »"], ["danser", "on entend « a »"], ["choisir", "on entend « i »"], ["aller", "on entend « a »"], ["finir", "on entend « i »"]], expl: "Verbes en -er (et aller) : a. Verbes du 2e groupe en -ir : i." }
    ],
    [
      { t: "saisie", q: "parler → je …", r: "parlai", expl: "je parl<b>ai</b>" },
      { t: "saisie", q: "danser → tu …", r: "dansas", expl: "tu dans<b>as</b>" },
      { t: "saisie", q: "grandir → elle …", r: "grandit", expl: "elle grand<b>it</b>" },
      { t: "saisie", q: "jouer → nous …", r: "jouâmes", aide: "N'oublie pas le chapeau sur le a.", expl: "nous jou<b>âmes</b>" },
      { t: "saisie", q: "choisir → vous …", r: "choisîtes", aide: "Le chapeau va sur le i.", expl: "vous chois<b>îtes</b>" },
      { t: "saisie", q: "marcher → ils …", r: "marchèrent", aide: "Accent grave sur le e.", expl: "ils march<b>èrent</b>" },
      { t: "saisie", q: "réussir → elles …", r: "réussirent", expl: "elles réuss<b>irent</b>" },
      { t: "saisie", q: "aller → j' …", r: "allai", expl: "Aller se conjugue comme les verbes en -er : j'all<b>ai</b>." },
      { t: "relier", q: "Relie chaque sujet au verbe <b>chanter</b> bien conjugué.", paires: [["je", "chantai"], ["tu", "chantas"], ["il", "chanta"], ["nous", "chantâmes"], ["vous", "chantâtes"], ["ils", "chantèrent"]] },
      { t: "trous", q: "Conjugue <b>bondir</b> au passé simple.", texte: "je [bondis] — tu [bondis] — il [bondit] — nous [bondîmes] — vous [bondîtes] — ils [bondirent]", expl: "is, is, it, îmes, îtes, irent." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils allèrent", "ils allirent", "ils allairent", "ils allérent"], r: "ils allèrent", expl: "aller suit les verbes en -er : ils all<b>èrent</b>, avec un accent grave." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous finîmes", "nous finâmes", "nous finimes", "nous finissâmes"], r: "nous finîmes", expl: "2e groupe : nous fin<b>îmes</b>, avec le chapeau sur le i." },
      { t: "vf", q: "« tu chanta » est bien écrit.", r: false, expl: "Avec tu, il faut un <b>s</b> : tu chant<b>as</b>." },
      { t: "vf", q: "« je bondis » peut être au présent ou au passé simple.", r: true, expl: "Pour les verbes en -ir, je et tu ont la même forme au présent et au passé simple. C'est la phrase qui dit si c'est fini." },
      { t: "trous", q: "Mets les verbes au passé simple.", texte: "Le soir, Awa [rentra] (rentrer) à la maison. Elle [finit] (finir) ses devoirs, puis ses frères [jouèrent] (jouer) avec elle. Ils [applaudirent] (applaudir) quand elle [gagna] (gagner).", expl: "rentra, finit, jouèrent, applaudirent, gagna." },
      { t: "saisie", q: "Trouve l'erreur et écris le verbe juste : « Hier, vous chantates très bien. »", r: "chantâtes", expl: "vous chant<b>âtes</b> : il manque le chapeau sur le a." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Les enfants bondirent de joie.", expl: "bondir → ils bondirent." },
      { t: "saisie", q: "Écris la phrase au passé simple : « Nous traversons la rue. »", r: "Nous traversâmes la rue.", large: true, casse: false, expl: "traverser → nous travers<b>âmes</b>." }
    ],
    [
      { t: "dictee", texte: "Le chasseur entra dans la forêt et choisit un grand arbre.", expl: "entrer → il entra ; choisir → il choisit." },
      { t: "dictee", texte: "Les élèves écoutèrent le maître puis ils finirent leur travail.", expl: "ils écout<b>èrent</b> (verbe en -er), ils fin<b>irent</b> (2e groupe)." },
      { t: "trous", q: "Conte : mets les verbes au passé simple.", texte: "Un jour, le roi [convoqua] (convoquer) ses ministres. Ils [arrivèrent] (arriver) très vite. Le roi [réfléchit] (réfléchir) longtemps, puis il [parla] (parler). Nous [applaudîmes] (applaudir) tous.", expl: "convoqua, arrivèrent, réfléchit, parla, applaudîmes." },
      { t: "qcm", q: "Dans quelle phrase le verbe est-il au passé simple ?", choix: ["Il remplit le seau d'eau hier soir.", "Il remplira le seau demain.", "Il remplissait le seau chaque matin.", "Il a rempli le seau."], r: "Il remplit le seau d'eau hier soir.", expl: "« hier soir » montre que l'action est finie : remplit est au passé simple." },
      { t: "saisie", q: "Écris la phrase au passé simple : « Vous obéissez à vos parents. »", r: "Vous obéîtes à vos parents.", large: true, expl: "obéir → vous obé<b>îtes</b>." },
      { t: "saisie", q: "Écris la phrase au passé simple : « Elles vont au marché. »", r: "Elles allèrent au marché.", large: true, expl: "aller → elles all<b>èrent</b>." }
    ]
  ]
});
