var LECONS = window.LECONS = [];
window.VERSION_CONTENU = "202611182254";

/* ---- fr-conj-futur-simple.js ---- */
// À VÉRIFIER : (1) au futur, le cahier semble écrire « je chanterais » et « je nettoierais » (avec s, photos 0051-0052) : ce serait du conditionnel ; on a écrit « je chanterai », « je nettoierai ». (2) La règle sur -eter / -eler annonce « sauf les exceptions » sans les écrire (0052) : elles ne sont pas inventées ici ; le module renvoie à la leçon du présent sur -eter / -eler et ne les fait pas travailler. (3) « jeter : jetterai » → « je jetterai » ; « savoi » → « savoir ».
LECONS.push({
  id: "fr-conj-futur-simple",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le futur simple de l'indicatif",
  date: "2026-11-09",
  photos: ["DJI_20261118220633_0051_D.jpg", "DJI_20261118220639_0052_D.jpg"],
  retiens:
    "<p>Au futur simple, tous les verbes ont les mêmes terminaisons : <b>ai, as, a, ons, ez, ont</b>, toujours précédées de <b>r</b>.</p>" +
    "<p><b>NB :</b> les verbes du 1er et du 2e groupe conservent généralement leur <b>infinitif en entier</b>.<br>Ex : chanter → je chanter<b>ai</b> ; finir → je finir<b>ai</b>.</p>" +
    "<table><tr><th>chanter</th><th>finir</th></tr>" +
    "<tr><td>je chante<b>rai</b></td><td>je fini<b>rai</b></td></tr><tr><td>tu chante<b>ras</b></td><td>tu fini<b>ras</b></td></tr>" +
    "<tr><td>il chante<b>ra</b></td><td>il fini<b>ra</b></td></tr><tr><td>nous chante<b>rons</b></td><td>nous fini<b>rons</b></td></tr>" +
    "<tr><td>vous chante<b>rez</b></td><td>vous fini<b>rez</b></td></tr><tr><td>ils chante<b>ront</b></td><td>ils fini<b>ront</b></td></tr></table>" +
    "<p><b>Remarques sur les verbes du 1er groupe :</b></p><ul>" +
    "<li>verbes en <b>-yer</b> : le y devient <b>i</b>. Ex : nettoyer → je netto<b>i</b>erai.</li>" +
    "<li>en général, les verbes en <b>-eter</b> ou <b>-eler</b> s'écrivent avec <b>2 t</b> ou <b>2 l</b> : jeter → je je<b>tt</b>erai ; appeler → j'appe<b>ll</b>erai. Il y a des exceptions (revois la leçon sur les verbes en -eter et -eler au présent).</li></ul>" +
    "<p>La plupart des verbes du 3e groupe dont l'infinitif se termine par <b>-re</b> perdent le <b>e</b> : dire → je dir<b>ai</b>.</p>" +
    "<p>Pour certains verbes du 3e groupe, le <b>radical est modifié</b> :</p>" +
    "<table><tr><td>aller → j'irai</td><td>courir → je courrai</td></tr><tr><td>faire → je ferai</td><td>voir → je verrai</td></tr>" +
    "<tr><td>vouloir → je voudrai</td><td>mourir → je mourrai</td></tr><tr><td>venir → je viendrai</td><td>pouvoir → je pourrai</td></tr>" +
    "<tr><td>savoir → je saurai</td><td>boire → je boirai</td></tr><tr><td>s'asseoir → je m'assiérai</td><td></td></tr></table>",
  astuce: "Au futur, on entend toujours le <b>r</b> : je chante<b>r</b>ai, j'i<b>r</b>ai, je fe<b>r</b>ai. Avec je, pas de s : je chanterai (sans s), c'est le futur.",
  regle: "Futur : r + ai, as, a, ons, ez, ont. 1er et 2e groupes : infinitif entier (je chanterai, je finirai). Verbes en -re : on enlève le e (je dirai). Certains verbes changent de radical (j'irai, je ferai, je verrai).",
  niveaux: [
    [
      { t: "qcm", q: "Quelles sont les terminaisons du futur simple ?", choix: ["rai, ras, ra, rons, rez, ront", "ais, ais, ait, ions, iez, aient", "e, es, e, ons, ez, ent"], r: "rai, ras, ra, rons, rez, ront", expl: "ai, as, a, ons, ez, ont, toujours précédées de r." },
      { t: "qcm", q: "chanter → je …", choix: ["chanterai", "chanterais", "chantrai", "chanteré"], r: "chanterai", expl: "Futur avec je : -ai, sans s. je chanter<b>ai</b>." },
      { t: "qcm", q: "aller → j' …", choix: ["irai", "allerai", "vais", "irais"], r: "irai", expl: "aller change complètement de radical : j'<b>ir</b>ai." },
      { t: "vf", q: "Au futur, finir garde son infinitif en entier : je finirai.", r: true, expl: "1er et 2e groupes : on garde l'infinitif + ai, as, a…" },
      { t: "vf", q: "Au futur, on écrit « je dirai » : le e de « dire » disparaît.", r: true, expl: "Les verbes en -re perdent le e : dir- + ai." },
      { t: "relier", q: "Relie chaque verbe à sa forme au futur.", paires: [["faire", "je ferai"], ["voir", "je verrai"], ["venir", "je viendrai"], ["savoir", "je saurai"], ["pouvoir", "je pourrai"]], expl: "Ces verbes du 3e groupe changent de radical au futur." }
    ],
    [
      { t: "saisie", q: "danser → nous …", r: "danserons", expl: "infinitif entier + ons : nous danser<b>ons</b>." },
      { t: "saisie", q: "grandir → tu …", r: "grandiras", expl: "tu grandir<b>as</b>" },
      { t: "saisie", q: "nettoyer → je …", r: "nettoierai", aide: "Le y devient i.", expl: "je netto<b>i</b>erai" },
      { t: "saisie", q: "jeter → je …", r: "jetterai", expl: "deux t : je je<b>tt</b>erai." },
      { t: "saisie", q: "appeler → nous …", r: "appellerons", expl: "deux l : nous appe<b>ll</b>erons." },
      { t: "saisie", q: "dire → ils …", r: "diront", expl: "dir- + ont : ils dir<b>ont</b>." },
      { t: "saisie", q: "aller → vous …", r: "irez", expl: "vous ir<b>ez</b>" },
      { t: "saisie", q: "faire → elle …", r: "fera", expl: "elle fer<b>a</b>" },
      { t: "trous", q: "Conjugue <b>finir</b> au futur.", texte: "je [finirai] — tu [finiras] — il [finira] — nous [finirons] — vous [finirez] — ils [finiront]", expl: "finir + ai, as, a, ons, ez, ont." }
    ],
    [
      { t: "qcm", q: "courir → je …", choix: ["courrai", "courirai", "courai", "courerai"], r: "courrai", expl: "Deux r : je cou<b>rr</b>ai." },
      { t: "qcm", q: "voir → nous …", choix: ["verrons", "voirons", "voyerons", "verons"], r: "verrons", expl: "Radical verr- : nous verrons." },
      { t: "qcm", q: "Quelle phrase est au futur simple ?", choix: ["Demain, je chanterai à la fête.", "Hier, je chantais à la fête.", "Je chante à la fête."], r: "Demain, je chanterai à la fête.", expl: "« Demain » et la terminaison -rai montrent le futur." },
      { t: "classer", q: "Range ces verbes au futur.", cases: ["garde l'infinitif entier", "perd le e final", "change de radical"], items: [["parler → je parlerai", "garde l'infinitif entier"], ["choisir → je choisirai", "garde l'infinitif entier"], ["prendre → je prendrai", "perd le e final"], ["boire → je boirai", "perd le e final"], ["aller → j'irai", "change de radical"], ["vouloir → je voudrai", "change de radical"]], expl: "1er et 2e groupes : infinitif entier ; verbes en -re : sans e ; aller, vouloir… : nouveau radical." },
      { t: "saisie", q: "Corrige le verbe : « Demain, je nettoierais la cour. »", r: "nettoierai", expl: "Au futur, avec je : -ai sans s. je nettoier<b>ai</b>." },
      { t: "saisie", q: "Corrige le verbe : « Nous allerons à Thiès. »", r: "irons", expl: "aller au futur : nous <b>ir</b>ons." },
      { t: "saisie", q: "Mets au futur : « Il s'assied sur la natte. »", r: "Il s'assiéra sur la natte.", large: true, expl: "s'asseoir → je m'assiérai, il s'assiér<b>a</b>." },
      { t: "trous", q: "Complète au futur.", texte: "L'année prochaine, j'[irai] (aller) en 6e. Je [saurai] (savoir) beaucoup de choses. Mes parents [viendront] (venir) me voir et nous [boirons] (boire) du jus.", expl: "irai, saurai, viendront, boirons." }
    ],
    [
      { t: "dictee", texte: "Demain, nous irons au marché et nous choisirons du poisson pour la fête.", expl: "nous ir<b>ons</b> (aller), nous choisir<b>ons</b>." },
      { t: "dictee", texte: "Quand tu viendras, je te dirai tout et nous verrons la mer.", expl: "viendr<b>as</b>, dir<b>ai</b>, verr<b>ons</b>." },
      { t: "trous", q: "Mets les verbes au futur.", texte: "Samedi, Moussa [ira] (aller) à Saint-Louis. Il [prendra] (prendre) le car. Ses sœurs [feront] (faire) des gâteaux et vous [pourrez] (pouvoir) les goûter.", expl: "ira, prendra, feront, pourrez." },
      { t: "saisie", q: "Écris la phrase au futur : « Je cours et je vois la course. »", r: "Je courrai et je verrai la course.", large: true, expl: "je cou<b>rr</b>ai, je ve<b>rr</b>ai : deux r." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Tu finiras ton repas.", "Ils mourront de rire.", "Nous voudrons partir.", "Vous fairez la vaisselle."], r: "Vous fairez la vaisselle.", expl: "faire au futur : vous <b>ferez</b>." }
    ]
  ]
});


/* ---- fr-conj-imparfait-1er-2e-groupes.js ---- */
LECONS.push({
  id: "fr-conj-imparfait-1er-2e-groupes",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes du 1er et du 2e groupe à l'imparfait de l'indicatif",
  date: "2026-10-14",
  photos: ["DJI_20261118220525_0041_D.jpg", "DJI_20261118220534_0042_D.jpg"],
  retiens:
    "<p>À l'imparfait, tous les verbes se terminent par : <b>ais, ais, ait, ions, iez, aient</b>.</p>" +
    "<ul><li>Les verbes en <b>-cer</b>, comme lancer, prennent une <b>cédille</b> sous le c devant la lettre a.<br>Ex : je lan<b>ç</b>ais, mais nous lancions.</li>" +
    "<li>Les verbes en <b>-ger</b>, comme ranger, prennent un <b>e</b> devant la lettre a.<br>Ex : je rang<b>e</b>ais, mais nous rangions.</li>" +
    "<li>Les verbes en <b>-yer</b>, comme balayer, prennent un <b>i</b> après le y aux deux premières personnes du pluriel.<br>Ex : je balayais, nous balay<b>i</b>ons, vous balay<b>i</b>ez.</li></ul>" +
    "<p>Les verbes du <b>2e groupe</b> intercalent <b>-ss-</b> à toutes les personnes.<br>Ex : je fini<b>ss</b>ais, elle grandi<b>ss</b>ait, nous choisi<b>ss</b>ions.</p>" +
    "<p><b>Attention</b> aux verbes terminés par <b>-ier</b>, comme crier : nous cri<b>i</b>ons, vous cri<b>i</b>ez (deux i).</p>" +
    "<table><tr><th>chanter</th><th>finir</th></tr>" +
    "<tr><td>je chant<b>ais</b></td><td>je finiss<b>ais</b></td></tr><tr><td>tu chant<b>ais</b></td><td>tu finiss<b>ais</b></td></tr>" +
    "<tr><td>il chant<b>ait</b></td><td>il finiss<b>ait</b></td></tr><tr><td>nous chant<b>ions</b></td><td>nous finiss<b>ions</b></td></tr>" +
    "<tr><td>vous chant<b>iez</b></td><td>vous finiss<b>iez</b></td></tr><tr><td>ils chant<b>aient</b></td><td>ils finiss<b>aient</b></td></tr></table>",
  astuce: "La cédille et le e ne servent que devant <b>a</b> : je lançais, je mangeais. Devant i (nous lancions, nous mangions), on n'en a pas besoin.",
  regle: "Imparfait : ais, ais, ait, ions, iez, aient. 2e groupe : -ss- partout (je finissais). -cer : ç devant a ; -ger : ge devant a ; -yer et -ier : nous balayions, nous criions.",
  niveaux: [
    [
      { t: "qcm", q: "Quelles sont les terminaisons de l'imparfait ?", choix: ["ais, ais, ait, ions, iez, aient", "e, es, e, ons, ez, ent", "ai, as, a, ons, ez, ont"], r: "ais, ais, ait, ions, iez, aient", expl: "Tous les verbes ont ces terminaisons à l'imparfait." },
      { t: "qcm", q: "chanter → il …", choix: ["chantait", "chantais", "chante", "chantat"], r: "chantait", expl: "Avec il : -ait. il chant<b>ait</b>." },
      { t: "qcm", q: "finir → je …", choix: ["finissais", "finais", "finisais", "finirais"], r: "finissais", expl: "Le 2e groupe intercale -ss- : je fini<b>ss</b>ais." },
      { t: "vf", q: "On écrit « je lançais » avec une cédille.", r: true, expl: "Devant a, il faut une cédille pour garder le son [s]." },
      { t: "vf", q: "On écrit « nous mangeions » avec un e.", r: false, expl: "Devant i, pas besoin de e : nous mangions." },
      { t: "relier", q: "Relie chaque sujet à la bonne forme de <b>jouer</b>.", paires: [["je", "jouais"], ["il", "jouait"], ["nous", "jouions"], ["vous", "jouiez"], ["ils", "jouaient"]], expl: "ais, ais, ait, ions, iez, aient." }
    ],
    [
      { t: "saisie", q: "danser → nous …", r: "dansions", expl: "nous dans<b>ions</b>" },
      { t: "saisie", q: "parler → ils …", r: "parlaient", expl: "ils parl<b>aient</b>" },
      { t: "saisie", q: "grandir → elle …", r: "grandissait", expl: "elle grandi<b>ss</b>ait" },
      { t: "saisie", q: "choisir → vous …", r: "choisissiez", expl: "vous choisi<b>ss</b>iez" },
      { t: "saisie", q: "lancer → tu …", r: "lançais", expl: "Devant a : cédille. tu lan<b>ç</b>ais." },
      { t: "saisie", q: "ranger → il …", r: "rangeait", expl: "Devant a : on ajoute un e. il rang<b>e</b>ait." },
      { t: "saisie", q: "balayer → nous …", r: "balayions", expl: "y + ions : nous balay<b>i</b>ons." },
      { t: "saisie", q: "crier → nous …", r: "criions", expl: "radical cri- + ions : nous cri<b>i</b>ons, avec deux i." },
      { t: "trous", q: "Conjugue <b>manger</b> à l'imparfait.", texte: "je [mangeais] — tu [mangeais] — il [mangeait] — nous [mangions] — vous [mangiez] — ils [mangeaient]", expl: "Le e apparaît devant a : mangeais, mangeait, mangeaient." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous commencions", "nous commençions", "nous commenceions"], r: "nous commencions", expl: "Devant i, le c se prononce déjà [s] : pas de cédille." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["vous nettoyiez", "vous nettoyez", "vous nettoiez"], r: "vous nettoyiez", expl: "À l'imparfait, -yer prend un i après le y avec vous : vous netto<b>yi</b>ez. (vous nettoyez, c'est le présent.)" },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["nous remplissions", "nous remplisions", "nous remplions"], r: "nous remplissions", expl: "2e groupe : -ss- à toutes les personnes." },
      { t: "classer", q: "Range ces formes.", cases: ["bien écrit", "faux"], items: [["ils plaçaient", "bien écrit"], ["ils placaient", "faux"], ["je nageais", "bien écrit"], ["je nagais", "faux"], ["vous criiez", "bien écrit"], ["il finisait", "faux"]], expl: "pla<b>ç</b>aient, nag<b>e</b>ais, cri<b>i</b>ez, fini<b>ss</b>ait." },
      { t: "saisie", q: "Corrige le verbe : « Autrefois, ils voyagaient à pied. »", r: "voyageaient", expl: "Devant a, on ajoute un e : ils voyag<b>e</b>aient." },
      { t: "saisie", q: "Mets à l'imparfait : « Nous oublions nos cahiers. »", r: "Nous oubliions nos cahiers.", large: true, expl: "oublier finit par -ier : nous oubli<b>i</b>ons (deux i)." },
      { t: "trous", q: "Complète à l'imparfait.", texte: "Quand j'étais petite, je [jouais] (jouer) dans la cour. Mes frères [lançaient] (lancer) le ballon. Nous [obéissions] (obéir) à grand-mère et nous [essayions] (essayer) de l'aider.", expl: "jouais, lançaient, obéissions, essayions." }
    ],
    [
      { t: "dictee", texte: "Autrefois, les femmes du village pilaient le mil et chantaient ensemble.", expl: "pil<b>aient</b>, chant<b>aient</b>." },
      { t: "dictee", texte: "Chaque soir, nous rangions la maison et maman réfléchissait au repas.", expl: "rang<b>i</b>ons (pas de e devant i), réfléchi<b>ss</b>ait." },
      { t: "trous", q: "Mets les verbes à l'imparfait.", texte: "Le vieux pêcheur [avançait] (avancer) lentement. Il [nageait] (nager) chaque matin. Ses enfants [bâtissaient] (bâtir) une pirogue et vous [criiez] (crier) de joie.", expl: "avan<b>ç</b>ait, nag<b>e</b>ait, bâti<b>ss</b>aient, cri<b>i</b>ez." },
      { t: "saisie", q: "Écris la phrase à l'imparfait : « Nous balayons la classe et nous finissons à midi. »", r: "Nous balayions la classe et nous finissions à midi.", large: true, expl: "balay<b>i</b>ons, fini<b>ss</b>ions." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Tu mangeais vite.", "Ils effaçaient le tableau.", "Nous choisissions un livre.", "Elle rougisait de honte."], r: "Elle rougisait de honte.", expl: "2e groupe : elle rougi<b>ss</b>ait, avec deux s." }
    ]
  ]
});


/* ---- fr-conj-imparfait-3e-groupe.js ---- */
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


/* ---- fr-conj-passe-simple.js ---- */
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


/* ---- fr-conj-present-1er-groupe.js ---- */
LECONS.push({
  id: "fr-conj-present-1er-groupe",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Les verbes du 1er groupe au présent de l'indicatif",
  date: "2026-09-21",
  photos: ["DJI_20261118220209_0018_D.jpg", "DJI_20261118220216_0019_D.jpg"],
  retiens:
    "<p>Les verbes du 1er groupe se terminent tous de la même façon au présent : on enlève <b>-er</b> puis on ajoute les terminaisons <b>e, es, e, ons, ez, ent</b>.</p>" +
    "<table><tr><th>crier</th></tr><tr><td>je cri<b>e</b></td></tr><tr><td>tu cri<b>es</b></td></tr><tr><td>il / elle cri<b>e</b></td></tr>" +
    "<tr><td>nous cri<b>ons</b></td></tr><tr><td>vous cri<b>ez</b></td></tr><tr><td>ils / elles cri<b>ent</b></td></tr></table>" +
    "<p><b>Attention</b> aux verbes du 1er groupe terminés par <b>-yer</b>, <b>-ger</b> et <b>-cer</b> :</p>" +
    "<table><tr><th>verbes</th><th>exemples</th><th>ce qui change</th></tr>" +
    "<tr><td>en <b>-yer</b> : payer, essayer, nettoyer…</td><td>je paie, j'essaie</td><td>le <b>y</b> devient <b>i</b> devant le <b>e muet</b></td></tr>" +
    "<tr><td>en <b>-ger</b> : nager…</td><td>je nage, nous nag<b>e</b>ons</td><td>on ajoute un <b>e</b> après le g pour garder le son [ʒ] (« je »)</td></tr>" +
    "<tr><td>en <b>-cer</b> : tracer…</td><td>je trace, nous tra<b>ç</b>ons</td><td>on met une <b>cédille</b> sous le c devant o pour garder le son [s]</td></tr></table>",
  astuce: "Le e et la cédille ne servent qu'avec <b>nous</b>, devant -ons : nous mang<b>e</b>ons, nous lan<b>ç</b>ons. Le y devient i seulement quand on n'entend pas la fin : je nettoie, mais nous nettoyons.",
  regle: "Présent du 1er groupe : e, es, e, ons, ez, ent. -yer : y → i devant e muet ; -ger : nous …geons ; -cer : nous …çons.",
  niveaux: [
    [
      { t: "qcm", q: "Quelles sont les terminaisons du 1er groupe au présent ?", choix: ["e, es, e, ons, ez, ent", "s, s, t, ons, ez, ent", "ais, ais, ait, ions, iez, aient"], r: "e, es, e, ons, ez, ent", expl: "On enlève -er et on ajoute e, es, e, ons, ez, ent." },
      { t: "qcm", q: "crier → tu …", choix: ["cries", "crie", "criez", "cris"], r: "cries", expl: "Avec tu : <b>-es</b> → tu cri<b>es</b>." },
      { t: "vf", q: "On écrit « nous nageons » avec un e après le g.", r: true, expl: "Le e garde le son [ʒ] devant le o : nous nag<b>e</b>ons." },
      { t: "vf", q: "On écrit « nous tracons » sans cédille.", r: false, expl: "Il faut une cédille devant o pour garder le son [s] : nous tra<b>ç</b>ons." },
      { t: "qcm", q: "payer → je …", choix: ["paie", "pais", "payons", "paies"], r: "paie", aide: "Regarde le tableau de la leçon.", expl: "Le y devient i devant le e muet : je pa<b>i</b>e, comme dans le cahier." },
      { t: "relier", q: "Relie chaque sujet au verbe <b>crier</b> bien conjugué.", paires: [["je", "crie"], ["tu", "cries"], ["nous", "crions"], ["vous", "criez"], ["elles", "crient"]], expl: "e, es, e, ons, ez, ent." }
    ],
    [
      { t: "saisie", q: "chanter → nous …", r: "chantons", expl: "nous chant<b>ons</b>" },
      { t: "saisie", q: "danser → ils …", r: "dansent", expl: "ils dans<b>ent</b> : on n'entend pas -ent mais on l'écrit." },
      { t: "saisie", q: "manger → nous …", r: "mangeons", aide: "Pense au son « je » devant o.", expl: "nous mang<b>e</b>ons : le e garde le son [ʒ]." },
      { t: "saisie", q: "lancer → nous …", r: "lançons", aide: "Pense au son [s] devant o.", expl: "nous lan<b>ç</b>ons : la cédille garde le son [s]." },
      { t: "saisie", q: "nettoyer → je …", r: "nettoie", expl: "Le y devient i devant le e muet : je netto<b>i</b>e." },
      { t: "saisie", q: "essuyer → tu …", r: "essuies", expl: "tu essu<b>i</b>es : y → i devant le e muet." },
      { t: "saisie", q: "nettoyer → nous …", r: "nettoyons", expl: "Devant -ons, pas de e muet : le y reste. nous netto<b>y</b>ons." },
      { t: "trous", q: "Conjugue <b>commencer</b> au présent.", texte: "je [commence] — tu [commences] — il [commence] — nous [commençons] — vous [commencez] — ils [commencent]", expl: "La cédille n'apparaît qu'avec nous : nous commen<b>ç</b>ons." },
      { t: "classer", q: "Range ces formes : bien écrites ou fausses ?", cases: ["bien écrit", "faux"], items: [["nous rangeons", "bien écrit"], ["nous rangons", "faux"], ["nous avançons", "bien écrit"], ["nous avancons", "faux"], ["j'essaie", "bien écrit"], ["il nettoye", "faux"]], expl: "nous rang<b>e</b>ons, nous avan<b>ç</b>ons, il netto<b>i</b>e." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["vous nettoyez", "vous nettoiez", "vous nettoiyez"], r: "vous nettoyez", expl: "Devant -ez, il n'y a pas de e muet : le y reste." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils envoient", "ils envoyent", "ils envoyont"], r: "ils envoient", expl: "-ent est muet : le y devient i. ils envo<b>i</b>ent." },
      { t: "vf", q: "Avec « je », on écrit « je mangeons ».", r: false, expl: "Avec je : je mange. Le e ajouté ne sert que devant -ons." },
      { t: "saisie", q: "Corrige le verbe : « Nous partagons le repas. »", r: "partageons", expl: "nous partag<b>e</b>ons : on ajoute un e après le g." },
      { t: "saisie", q: "Corrige le verbe : « Nous placons les chaises. »", r: "plaçons", expl: "nous pla<b>ç</b>ons : la cédille devant o." },
      { t: "saisie", q: "Mets au pluriel : « J'essuie la table. » → Nous …", r: "Nous essuyons la table.", large: true, expl: "Avec nous, le y revient : nous essu<b>y</b>ons." },
      { t: "trous", q: "Complète au présent.", texte: "Mamadou [nage] (nager) dans le fleuve. Nous [nageons] (nager) avec lui. Ses sœurs [balaient|balayent] (balayer) la cour. Nous [effaçons] (effacer) le tableau.", expl: "il nage, nous nag<b>e</b>ons, elles bala<b>i</b>ent, nous effa<b>ç</b>ons." }
    ],
    [
      { t: "dictee", texte: "Nous mangeons du poisson et nous lançons les filets dans la mer.", expl: "mang<b>e</b>ons (e après g), lan<b>ç</b>ons (cédille)." },
      { t: "dictee", texte: "Ma tante nettoie la maison pendant que nous rangeons nos cahiers.", expl: "nett<b>oie</b> (y → i), rang<b>e</b>ons." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "Le matin, Aïssatou [essuie] (essuyer) les bols. Ses frères [voyagent] (voyager) vers Saint-Louis. Nous [commençons] (commencer) la classe à 8 heures et vous [employez] (employer) vos crayons neufs.", expl: "essu<b>i</b>e, voyagent, commen<b>ç</b>ons, emplo<b>y</b>ez." },
      { t: "saisie", q: "Écris la phrase avec « nous » : « Je change de place et je trace un trait. »", r: "Nous changeons de place et nous traçons un trait.", large: true, expl: "nous chang<b>e</b>ons, nous tra<b>ç</b>ons." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Nous corrigeons nos fautes.", "Ils aboient la nuit.", "Nous dénoncons le tricheur.", "Tu essaies encore."], r: "Nous dénoncons le tricheur.", expl: "dénoncer → nous dénon<b>ç</b>ons, avec une cédille." }
    ]
  ]
});


/* ---- fr-conj-present-aller-faire-dire.js ---- */
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


/* ---- fr-conj-present-dre.js ---- */
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


/* ---- fr-conj-present-eter-eler.js ---- */
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


/* ---- fr-conj-present-ir.js ---- */
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


/* ---- fr-conj-present-oir.js ---- */
LECONS.push({
  id: "fr-conj-present-oir",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le présent de l'indicatif : verbes en -oir",
  date: "2026-10-05",
  photos: ["DJI_20261118220421_0032_D.jpg"],
  retiens:
    "<p>Les verbes terminés par <b>-oir</b> à l'infinitif ont des formes, et parfois des terminaisons, <b>particulières</b> au présent de l'indicatif.</p>" +
    "<table><tr><th>recevoir</th><th>savoir</th><th>voir / prévoir</th></tr>" +
    "<tr><td>je reçois</td><td>je sais</td><td>je vois</td></tr><tr><td>tu reçois</td><td>tu sais</td><td>tu vois</td></tr>" +
    "<tr><td>il / elle reçoit</td><td>il / elle sait</td><td>il / elle voit</td></tr><tr><td>nous recevons</td><td>nous savons</td><td>nous voyons</td></tr>" +
    "<tr><td>vous recevez</td><td>vous savez</td><td>vous voyez</td></tr><tr><td>ils / elles reçoivent</td><td>ils / elles savent</td><td>ils / elles voient</td></tr></table>" +
    "<table><tr><th>pouvoir</th><th>devoir</th><th>valoir</th></tr>" +
    "<tr><td>je peux</td><td>je dois</td><td>je vaux</td></tr><tr><td>tu peux</td><td>tu dois</td><td>tu vaux</td></tr>" +
    "<tr><td>il / elle peut</td><td>il / elle doit</td><td>il / elle vaut</td></tr><tr><td>nous pouvons</td><td>nous devons</td><td>nous valons</td></tr>" +
    "<tr><td>vous pouvez</td><td>vous devez</td><td>vous valez</td></tr><tr><td>ils / elles peuvent</td><td>ils / elles doivent</td><td>ils / elles valent</td></tr></table>" +
    "<table><tr><th>s'asseoir (1re forme)</th><th>s'asseoir (2e forme)</th></tr>" +
    "<tr><td>je m'assieds</td><td>je m'assois</td></tr><tr><td>tu t'assieds</td><td>tu t'assois</td></tr>" +
    "<tr><td>il / elle s'assied</td><td>il / elle s'assoit</td></tr><tr><td>nous nous asseyons</td><td>nous nous assoyons</td></tr>" +
    "<tr><td>vous vous asseyez</td><td>vous vous assoyez</td></tr><tr><td>ils / elles s'asseyent</td><td>ils / elles s'assoient</td></tr></table>" +
    "<p><b>falloir</b> : il faut (seulement avec « il »). <b>pleuvoir</b> : il pleut, ils pleuvent.</p>",
  astuce: "Pouvoir et valoir finissent par <b>x</b> avec je et tu : je peux, tu vaux. Recevoir prend une cédille devant o : je re<b>ç</b>ois, mais nous recevons.",
  regle: "Les verbes en -oir changent de radical au présent : je reçois / nous recevons, je vois / nous voyons, je peux / ils peuvent, je dois / ils doivent. Pouvoir et valoir : x avec je et tu.",
  niveaux: [
    [
      { t: "qcm", q: "pouvoir → je …", choix: ["peux", "peus", "peut", "pouve"], r: "peux", expl: "Avec je et tu : je peu<b>x</b>, tu peu<b>x</b>." },
      { t: "qcm", q: "voir → nous …", choix: ["voyons", "voions", "voirons", "vions"], r: "voyons", expl: "Avec nous et vous, le radical devient voy- : nous voyons." },
      { t: "qcm", q: "savoir → il …", choix: ["sait", "sais", "sai", "savoit"], r: "sait", expl: "il sai<b>t</b>, avec un t." },
      { t: "vf", q: "On écrit « je reçois » avec une cédille.", r: true, expl: "La cédille garde le son [s] devant le o : je re<b>ç</b>ois." },
      { t: "vf", q: "Le verbe falloir se conjugue avec toutes les personnes : je faux, tu faux…", r: false, expl: "falloir ne s'emploie qu'avec il : <b>il faut</b>." },
      { t: "relier", q: "Relie chaque sujet à la bonne forme de <b>devoir</b>.", paires: [["je", "dois"], ["il", "doit"], ["nous", "devons"], ["vous", "devez"], ["ils", "doivent"]], expl: "Deux radicaux : doi- / dev- / doiv-." }
    ],
    [
      { t: "saisie", q: "recevoir → nous …", r: "recevons", expl: "nous recevons : pas de cédille devant e." },
      { t: "saisie", q: "recevoir → ils …", r: "reçoivent", expl: "ils re<b>ç</b>oivent : cédille devant o." },
      { t: "saisie", q: "savoir → vous …", r: "savez", expl: "vous savez" },
      { t: "saisie", q: "voir → elles …", r: "voient", expl: "elles voient" },
      { t: "saisie", q: "pouvoir → ils …", r: "peuvent", expl: "ils peuvent" },
      { t: "saisie", q: "valoir → tu …", r: "vaux", expl: "tu vau<b>x</b>, comme je peux." },
      { t: "saisie", q: "pleuvoir → il …", r: "pleut", expl: "il pleut" },
      { t: "saisie", q: "prévoir → nous …", r: "prévoyons", expl: "prévoir se conjugue comme voir : nous prévoyons." },
      { t: "trous", q: "Conjugue <b>pouvoir</b> au présent.", texte: "je [peux] — tu [peux] — il [peut] — nous [pouvons] — vous [pouvez] — ils [peuvent]", expl: "x, x, t, puis le radical pouv- et peuv-." },
      { t: "classer", q: "Range ces formes.", cases: ["bien écrit", "faux"], items: [["je sais", "bien écrit"], ["je sait", "faux"], ["il vaut", "bien écrit"], ["il vaux", "faux"], ["nous voyons", "bien écrit"], ["nous voions", "faux"]], expl: "je sai<b>s</b>, il vau<b>t</b>, nous vo<b>y</b>ons." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils doivent", "ils devent", "ils doient"], r: "ils doivent", expl: "ils doivent : radical doiv-." },
      { t: "qcm", q: "Quelle forme de s'asseoir est juste ?", choix: ["nous nous asseyons", "nous nous assisons", "nous nous asseons"], r: "nous nous asseyons", expl: "1re forme : nous nous asseyons (2e forme : nous nous assoyons)." },
      { t: "qcm", q: "Quelle forme de s'asseoir est juste ?", choix: ["je m'assieds", "je m'assied", "je m'assoie"], r: "je m'assieds", expl: "Avec je : je m'assied<b>s</b> (ou je m'assois). Avec il : il s'assied." },
      { t: "saisie", q: "Corrige le verbe : « Tu peut venir avec nous. »", r: "peux", expl: "Avec tu : tu peu<b>x</b>." },
      { t: "saisie", q: "Corrige le verbe : « Nous recevont des cadeaux. »", r: "recevons", expl: "Avec nous : -ons. nous recev<b>ons</b>." },
      { t: "saisie", q: "Mets au pluriel : « Je vois la mer. » → Nous …", r: "Nous voyons la mer.", large: true, expl: "voir : nous voyons." },
      { t: "trous", q: "Complète au présent.", texte: "Moussa [reçoit] (recevoir) une lettre. Il [doit] (devoir) répondre vite. Ses sœurs [savent] (savoir) écrire et elles [peuvent] (pouvoir) l'aider.", expl: "reçoit, doit, savent, peuvent." }
    ],
    [
      { t: "dictee", texte: "Quand il pleut, nous devons rester à la maison et nous voyons la cour mouillée.", expl: "il pleut, nous devons, nous voyons." },
      { t: "dictee", texte: "Les élèves reçoivent leurs bulletins et ils savent qu'ils peuvent mieux faire.", expl: "re<b>ç</b>oivent, savent, peuvent." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "À Saint-Louis, je [vois] (voir) le fleuve. Ce poisson [vaut] (valoir) mille francs. Vous [prévoyez] (prévoir) une promenade et nous nous [asseyons|assoyons] (s'asseoir) sur le banc.", expl: "vois, vaut, prévoyez, asseyons (ou assoyons)." },
      { t: "saisie", q: "Écris la phrase avec « ils » : « Il peut sortir car il sait sa leçon. »", r: "Ils peuvent sortir car ils savent leur leçon.", large: true, expl: "ils peuvent, ils savent ; sa leçon devient leur leçon." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Il faut partir.", "Tu dois manger.", "Je reçois un colis.", "Vous savaient nager."], r: "Vous savaient nager.", expl: "Au présent, avec vous : vous <b>savez</b>." }
    ]
  ]
});


/* ---- fr-conj-present-verbes-particuliers.js ---- */
LECONS.push({
  id: "fr-conj-present-verbes-particuliers",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le présent de l'indicatif : quelques verbes particuliers",
  date: "2026-10-07",
  photos: ["DJI_20261118220437_0034_D.jpg"],
  retiens:
    "<p>Beaucoup de verbes fréquents ont des <b>formes particulières</b> au présent de l'indicatif. Il faut les connaître parfaitement.</p>" +
    "<table><tr><th>lire</th><th>rire</th><th>écrire</th><th>boire</th><th>croire</th></tr>" +
    "<tr><td>je lis</td><td>je ris</td><td>j'écris</td><td>je bois</td><td>je crois</td></tr>" +
    "<tr><td>tu lis</td><td>tu ris</td><td>tu écris</td><td>tu bois</td><td>tu crois</td></tr>" +
    "<tr><td>il lit</td><td>il rit</td><td>il écrit</td><td>il boit</td><td>il croit</td></tr>" +
    "<tr><td>nous lisons</td><td>nous rions</td><td>nous écrivons</td><td>nous buvons</td><td>nous croyons</td></tr>" +
    "<tr><td>vous lisez</td><td>vous riez</td><td>vous écrivez</td><td>vous buvez</td><td>vous croyez</td></tr>" +
    "<tr><td>ils lisent</td><td>ils rient</td><td>ils écrivent</td><td>ils boivent</td><td>ils croient</td></tr></table>" +
    "<table><tr><th>vivre</th><th>suivre</th><th>mettre</th><th>battre</th><th>mourir</th></tr>" +
    "<tr><td>je vis</td><td>je suis</td><td>je mets</td><td>je bats</td><td>je meurs</td></tr>" +
    "<tr><td>tu vis</td><td>tu suis</td><td>tu mets</td><td>tu bats</td><td>tu meurs</td></tr>" +
    "<tr><td>il vit</td><td>il suit</td><td>il met</td><td>il bat</td><td>il meurt</td></tr>" +
    "<tr><td>nous vivons</td><td>nous suivons</td><td>nous mettons</td><td>nous battons</td><td>nous mourons</td></tr>" +
    "<tr><td>vous vivez</td><td>vous suivez</td><td>vous mettez</td><td>vous battez</td><td>vous mourez</td></tr>" +
    "<tr><td>ils vivent</td><td>ils suivent</td><td>ils mettent</td><td>ils battent</td><td>ils meurent</td></tr></table>" +
    "<table><tr><th>conduire</th><th>fuir</th><th>paraître</th><th>plaire</th></tr>" +
    "<tr><td>je conduis</td><td>je fuis</td><td>je parais</td><td>je plais</td></tr>" +
    "<tr><td>tu conduis</td><td>tu fuis</td><td>tu parais</td><td>tu plais</td></tr>" +
    "<tr><td>il conduit</td><td>il fuit</td><td>il paraît</td><td>il plaît</td></tr>" +
    "<tr><td>nous conduisons</td><td>nous fuyons</td><td>nous paraissons</td><td>nous plaisons</td></tr>" +
    "<tr><td>vous conduisez</td><td>vous fuyez</td><td>vous paraissez</td><td>vous plaisez</td></tr>" +
    "<tr><td>ils conduisent</td><td>ils fuient</td><td>ils paraissent</td><td>ils plaisent</td></tr></table>",
  astuce: "Au singulier, presque tous font <b>s, s, t</b> (je lis, tu lis, il lit). Mettre et battre gardent un seul t au singulier (il met, il bat). Paraître et plaire prennent un accent circonflexe avec il : il paraît, il plaît.",
  regle: "Ces verbes changent souvent de radical au pluriel : nous lisons, nous écrivons, nous buvons, nous croyons, nous fuyons, ils meurent. Au singulier : s, s, t.",
  niveaux: [
    [
      { t: "qcm", q: "lire → nous …", choix: ["lisons", "lirons", "lions", "lisez"], r: "lisons", expl: "Au pluriel, le radical devient lis- : nous lisons." },
      { t: "qcm", q: "boire → nous …", choix: ["buvons", "boivons", "boirons", "boions"], r: "buvons", expl: "boire change de radical : nous <b>buv</b>ons." },
      { t: "qcm", q: "écrire → il …", choix: ["écrit", "écris", "écrie", "écrivit"], r: "écrit", expl: "Avec il : -t. il écri<b>t</b>." },
      { t: "vf", q: "« je suis » peut venir du verbe suivre.", r: true, expl: "suivre : je suis, tu suis, il suit. Attention, c'est aussi « je suis » du verbe être !" },
      { t: "vf", q: "On écrit « il plait » sans accent.", r: false, expl: "Dans la leçon : il pla<b>î</b>t, avec un accent circonflexe." },
      { t: "relier", q: "Relie chaque verbe à sa forme avec « nous ».", paires: [["écrire", "nous écrivons"], ["croire", "nous croyons"], ["fuir", "nous fuyons"], ["rire", "nous rions"], ["mourir", "nous mourons"]], expl: "Chaque verbe a sa forme particulière : il faut les connaître." }
    ],
    [
      { t: "saisie", q: "rire → ils …", r: "rient", expl: "ils ri<b>ent</b>" },
      { t: "saisie", q: "croire → vous …", r: "croyez", expl: "vous cro<b>y</b>ez" },
      { t: "saisie", q: "boire → ils …", r: "boivent", expl: "ils <b>boiv</b>ent" },
      { t: "saisie", q: "mettre → je …", r: "mets", expl: "je me<b>ts</b> : un seul t au singulier." },
      { t: "saisie", q: "battre → il …", r: "bat", expl: "il ba<b>t</b> : un seul t." },
      { t: "saisie", q: "mourir → il …", r: "meurt", expl: "il meur<b>t</b>" },
      { t: "saisie", q: "conduire → nous …", r: "conduisons", expl: "nous condui<b>s</b>ons" },
      { t: "saisie", q: "paraître → il …", r: "paraît", aide: "N'oublie pas l'accent.", expl: "il para<b>î</b>t" },
      { t: "trous", q: "Conjugue <b>écrire</b> au présent.", texte: "j'[écris] — tu [écris] — il [écrit] — nous [écrivons] — vous [écrivez] — ils [écrivent]", expl: "Au pluriel, le radical devient écriv-." },
      { t: "classer", q: "Range ces formes.", cases: ["bien écrit", "faux"], items: [["nous buvons", "bien écrit"], ["nous boivons", "faux"], ["ils fuient", "bien écrit"], ["ils fuyent", "faux"], ["il met", "bien écrit"], ["il mett", "faux"]], expl: "nous buvons, ils fuient, il met." }
    ],
    [
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["ils meurent", "ils mourent", "ils meurrent"], r: "ils meurent", expl: "Avec ils, on retrouve meur- : ils meurent. Avec nous : nous mourons." },
      { t: "qcm", q: "Quelle forme est juste ?", choix: ["vous riez", "vous rissez", "vous rirez"], r: "vous riez", expl: "rire : vous riez (au présent)." },
      { t: "qcm", q: "Dans « Je suis mon grand frère au marché », « suis » vient du verbe…", choix: ["suivre", "être", "savoir"], r: "suivre", expl: "Je marche derrière mon frère : c'est le verbe suivre." },
      { t: "saisie", q: "Corrige le verbe : « Nous croions ce qu'il dit. »", r: "croyons", expl: "nous cro<b>y</b>ons" },
      { t: "saisie", q: "Corrige le verbe : « Les voleurs fuyent. »", r: "fuient", expl: "Avec ils : ils fu<b>i</b>ent. Le y ne sert qu'avec nous et vous." },
      { t: "saisie", q: "Mets au pluriel : « Il vit à Kaolack. » → Ils …", r: "Ils vivent à Kaolack.", large: true, expl: "vivre : ils viv<b>ent</b>." },
      { t: "trous", q: "Complète au présent.", texte: "Grand-père [lit] (lire) le journal. Les enfants [rient] (rire) dans la cour. Nous [mettons] (mettre) la table et vous [buvez] (boire) du jus de bissap.", expl: "lit, rient, mettons, buvez." }
    ],
    [
      { t: "dictee", texte: "Nous écrivons une lettre à nos cousins qui vivent à Ziguinchor.", expl: "nous écri<b>v</b>ons, ils viv<b>ent</b>." },
      { t: "dictee", texte: "Mon oncle conduit le car et les passagers croient qu'il va trop vite.", expl: "il condui<b>t</b>, ils cro<b>i</b>ent." },
      { t: "trous", q: "Mets les verbes au présent.", texte: "Ce film me [plaît] (plaire) beaucoup. Je [suis] (suivre) l'histoire avec attention. Le héros [paraît] (paraître) fatigué et ses ennemis [fuient] (fuir).", expl: "plaît, suis, paraît, fuient." },
      { t: "saisie", q: "Écris la phrase avec « nous » : « Je lis et je bois du thé. »", r: "Nous lisons et nous buvons du thé.", large: true, expl: "nous lisons, nous buvons." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une faute ?", choix: ["Tu bats le tam-tam.", "Elle écrit bien.", "Nous lisons le journal.", "Ils boient de l'eau."], r: "Ils boient de l'eau.", expl: "boire : ils <b>boivent</b>." }
    ]
  ]
});


/* ---- fr-conj-verbes-groupes.js ---- */
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


/* ---- fr-gram-article.js ---- */
// Précision : dans l'exemple d'analyse, le cahier écrit « Des : article contracté » ; le module écrit « article défini contracté » (de + les), comme dans la règle.
LECONS.push({
  id: "fr-gram-article",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Un déterminant : l'article",
  date: "2026-10-06",
  photos: ["DJI_20261118220426_0033_D.jpg"],
  retiens:
    "<p>L'article est un compagnon indispensable du <b>nom</b> : c'est un <b>déterminant</b>. Le déterminant <b>précède le nom</b> et varie en genre et en nombre avec ce nom.</p>" +
    "<p>Les principaux articles sont :</p>" +
    "<table><tr><th></th><th>singulier</th><th>pluriel</th></tr>" +
    "<tr><td>articles <b>définis</b></td><td>le, la, l'</td><td>les</td></tr>" +
    "<tr><td>articles <b>indéfinis</b></td><td>un, une</td><td>des</td></tr></table>" +
    "<p>Les articles <b>définis contractés</b> :</p>" +
    "<table><tr><td>à + le = <b>au</b></td><td>de + le = <b>du</b></td></tr>" +
    "<tr><td>à + les = <b>aux</b></td><td>de + les = <b>des</b></td></tr></table>" +
    "<p>Ex : <b>Les</b> femmes me chassent <b>des</b> cuisines.</p>" +
    "<p><b>Exemple d'analyse</b><br><b>Les</b> : article défini, détermine « femmes », féminin pluriel.<br><b>des</b> : article défini contracté (de + les), détermine « cuisines », féminin pluriel.</p>",
  astuce: "Pour savoir si <b>des</b> est contracté, remplace le nom par un nom au singulier : « chassées <b>des</b> cuisines » → « chassées <b>de la</b> cuisine ». Si on retrouve « de », c'est un article contracté.",
  regle: "L'article se place devant le nom et s'accorde avec lui. Définis : le, la, l', les. Indéfinis : un, une, des. Contractés : au, aux, du, des.",
  niveaux: [
    [
      { t: "qcm", q: "L'article se place…", choix: ["devant le nom", "après le nom", "après le verbe"], r: "devant le nom", expl: "Le déterminant précède le nom." },
      { t: "qcm", q: "Quel mot est un article indéfini ?", choix: ["le", "une", "la", "les"], r: "une", expl: "Les articles indéfinis sont un, une, des." },
      { t: "vf", q: "« le, la, l', les » sont des articles définis.", r: true, expl: "Au singulier le, la, l' ; au pluriel les." },
      { t: "vf", q: "L'article varie en genre et en nombre avec le nom.", r: true, expl: "le garçon, la fille, les enfants : l'article change avec le nom." },
      { t: "classer", q: "Range ces articles.", cases: ["défini", "indéfini"], items: [["le", "défini"], ["un", "indéfini"], ["la", "défini"], ["une", "indéfini"], ["les", "défini"], ["l'", "défini"]], expl: "Définis : le, la, l', les. Indéfinis : un, une, des." },
      { t: "relier", q: "Relie chaque contraction à l'article qu'elle donne.", paires: [["à + le", "au"], ["à + les", "aux"], ["de + le", "du"], ["de + les", "des"]], expl: "Ce sont les quatre articles définis contractés." }
    ],
    [
      { t: "trous", q: "Complète avec le, la, l' ou les.", texte: "[la] pirogue — [le] filet — [l']arbre — [les] pêcheurs — [l']école", expl: "Devant une voyelle, le et la deviennent l'." },
      { t: "trous", q: "Complète avec un, une ou des.", texte: "[une] mangue — [un] mouton — [des] enfants — [une] calebasse", expl: "un (masculin), une (féminin), des (pluriel)." },
      { t: "trous", q: "Remplace « à le », « à les », « de le », « de les » par l'article contracté.", texte: "Je vais [au] marché. — Il parle [aux] élèves. — Elle revient [du] champ. — Il sort [des] classes.", expl: "à + le = au ; à + les = aux ; de + le = du ; de + les = des." },
      { t: "qcm", q: "Dans « Les femmes me chassent des cuisines », quel est le genre et le nombre de « Les » ?", choix: ["masculin singulier", "féminin pluriel", "féminin singulier"], r: "féminin pluriel", expl: "« Les » détermine « femmes », féminin pluriel." },
      { t: "saisie", q: "Mets au pluriel : « la chèvre »", r: "les chèvres", expl: "la → les, et le nom prend un s." },
      { t: "saisie", q: "Mets au pluriel : « un cahier »", r: "des cahiers", expl: "un → des." },
      { t: "qcm", q: "Quel article convient ? « Moussa joue … ballon. »", choix: ["au", "aux", "à le", "du"], r: "au", expl: "On ne dit pas « à le » : à + le = au." },
      { t: "vf", q: "On peut écrire « Je vais à le marché ».", r: false, expl: "« à le » se contracte toujours en « au » : Je vais au marché." },
      { t: "qcm", q: "Quel article convient ? « Nous parlons … voisins. »", choix: ["à les", "aux", "au", "des"], r: "aux", expl: "à + les = aux." }
    ],
    [
      { t: "qcm", q: "« J'achète <b>des</b> mangues. » Ici, « des » est…", choix: ["un article indéfini", "un article défini contracté"], r: "un article indéfini", expl: "Au singulier on dirait « une mangue » : « des » est le pluriel de « une »." },
      { t: "qcm", q: "« Il revient <b>des</b> champs. » Ici, « des » est…", choix: ["un article indéfini", "un article défini contracté"], r: "un article défini contracté", expl: "Au singulier on dirait « du champ » : des = de + les." },
      { t: "trous", q: "Complète avec au, aux, du ou des.", texte: "Le car arrive [au] garage. — Elle donne du mil [aux] poules. — Le parfum [du] jasmin. — La voix [des] enfants.", expl: "à + le = au ; à + les = aux ; de + le = du ; de + les = des." },
      { t: "saisie", q: "Mets au pluriel : « l'oiseau du village »", r: "les oiseaux des villages", expl: "l' → les ; du → des ; oiseau → oiseaux." },
      { t: "vf", q: "Dans « la porte du garage », « du » est formé de « de + le ».", r: true, expl: "du = de + le." },
      { t: "relier", q: "Relie chaque article souligné à sa nature.", paires: [["<b>Les</b> enfants jouent.", "article défini"], ["<b>Un</b> enfant joue.", "article indéfini"], ["Il parle <b>aux</b> enfants.", "article défini contracté"]], expl: "les : défini ; un : indéfini ; aux = à + les : contracté." },
      { t: "saisie", q: "Mets au singulier : « Les filles reviennent des puits. »", r: "La fille revient du puits.", large: true, expl: "les → la ; des (de + les) → du (de + le)." }
    ],
    [
      { t: "dictee", texte: "Le matin, les enfants vont au marché avec un panier.", expl: "Le, les : définis ; au = à + le ; un : indéfini." },
      { t: "trous", q: "Écris la nature de chaque article (défini, indéfini, contracté).", texte: "<b>La</b> maîtresse ([défini]) donne <b>un</b> livre ([indéfini]) <b>aux</b> élèves ([contracté]).", expl: "la : défini ; un : indéfini ; aux = à + les : défini contracté." },
      { t: "qcm", q: "Analyse « du » dans « Elle sort du marché ».", choix: ["article défini contracté, détermine marché, masculin singulier", "article indéfini, détermine marché, masculin pluriel", "article défini, détermine Elle, féminin singulier"], r: "article défini contracté, détermine marché, masculin singulier", expl: "du = de + le, devant « marché », masculin singulier." },
      { t: "dictee", texte: "Mon oncle revient des champs et parle aux voisins du quartier.", expl: "des = de + les ; aux = à + les ; du = de + le." },
      { t: "saisie", q: "Mets au pluriel : « Le pêcheur parle au marchand. »", r: "Les pêcheurs parlent aux marchands.", large: true, expl: "le → les ; au → aux ; le verbe s'accorde : parlent." }
    ]
  ]
});


/* ---- fr-gram-cc-but-moyen.js ---- */
// À VÉRIFIER : au cahier, « CCM » désigne ici le complément de MOYEN, alors que dans la leçon du 3 novembre « CCM » désignait le complément de MANIÈRE. Le module écrit « CC de moyen » en entier et rappelle la différence.
// Corrections : « posez après le verbe » → « posée après le verbe » ; « pour réussir à son examen » → « pour réussir son examen ».
LECONS.push({
  id: "fr-gram-cc-but-moyen",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément circonstanciel de but (CCB) et le complément circonstanciel de moyen",
  date: "2026-11-10",
  photos: ["DJI_20261118220639_0052_D.jpg", "DJI_20261118220644_0053_D.jpg"],
  retiens:
    "<p>→ Le <b>CC de but (CCB)</b> exprime le but, c'est-à-dire l'objectif que l'on cherche à atteindre ou à éviter. Il répond à la question <b>« dans quel but ? »</b> posée après le verbe.<br>Ex : Elle se bat <b>pour réussir son examen</b>. (CCB)</p>" +
    "<p>→ Le <b>CC de moyen</b> est un mot ou un groupe de mots qui donne des précisions sur l'<b>instrument</b>, l'<b>outil</b> qui sert à réaliser l'action exprimée par le verbe. Il répond à la question <b>« avec quoi ? »</b>.<br>Ex : Je mange avec quoi ? <b>avec mes doigts</b>. (CC de moyen)</p>" +
    "<p>Le CC de moyen est souvent introduit par : avec, de, par, sans, à, au moyen de, grâce à…</p>" +
    "<p><b>Exemple d'analyse</b><br>L'élève trace un cercle avec un crayon.<br>crayon : nom commun de chose, CC de moyen de tracer.</p>" +
    "<p><b>Attention :</b> ne confonds pas le CC de <b>moyen</b> (avec quoi ? → avec un crayon) et le CC de <b>manière</b> (comment ? → avec soin), vu dans la leçon sur les compléments circonstanciels.</p>",
  astuce: "Le but, c'est <b>ce qu'on veut obtenir</b> : souvent « pour… » ou « afin de… ». Le moyen, c'est <b>l'outil</b> : on peut le tenir dans la main ou s'en servir.",
  regle: "CC de but : dans quel but ? (pour réussir, afin de…). CC de moyen : avec quoi ? (l'outil, l'instrument qui sert à faire l'action).",
  niveaux: [
    [
      { t: "qcm", q: "Le CC de but répond à la question…", choix: ["dans quel but ?", "avec quoi ?", "où ?", "quand ?"], r: "dans quel but ?", expl: "Le CCB exprime l'objectif que l'on cherche à atteindre." },
      { t: "qcm", q: "Le CC de moyen indique…", choix: ["l'outil, l'instrument", "le moment", "le lieu"], r: "l'outil, l'instrument", expl: "Il précise avec quoi on fait l'action." },
      { t: "qcm", q: "« Elle se bat pour réussir son examen. » Le CC de but est…", choix: ["pour réussir son examen", "Elle", "se bat"], r: "pour réussir son examen", expl: "Dans quel but se bat-elle ? pour réussir son examen." },
      { t: "qcm", q: "« L'élève trace un cercle avec un crayon. » Le CC de moyen est…", choix: ["avec un crayon", "un cercle", "L'élève"], r: "avec un crayon", expl: "Il trace avec quoi ? avec un crayon." },
      { t: "vf", q: "Le CC de moyen est souvent introduit par « avec », « grâce à » ou « au moyen de ».", r: true, expl: "Ce sont des mots qui introduisent souvent un CC de moyen." },
      { t: "relier", q: "Relie chaque complément à sa question.", paires: [["CC de but", "dans quel but ?"], ["CC de moyen", "avec quoi ?"], ["CC de manière", "comment ?"]], expl: "Trois compléments différents, trois questions différentes." }
    ],
    [
      { t: "classer", q: "Range les groupes en gras : but ou moyen ?", cases: ["but", "moyen"], items: [["Il étudie <b>pour devenir médecin</b>.", "but"], ["Il coupe le pain <b>avec un couteau</b>.", "moyen"], ["Awa économise <b>pour acheter un vélo</b>.", "but"], ["Le pêcheur attrape le poisson <b>avec un filet</b>.", "moyen"], ["Moussa court <b>afin d'arriver à l'heure</b>.", "but"], ["Fatou écrit <b>au stylo</b>.", "moyen"]], expl: "But : ce qu'on veut obtenir. Moyen : l'outil utilisé." },
      { t: "saisie", q: "Écris le CC de moyen : « Le paysan laboure son champ avec une charrue. »", r: "avec une charrue", expl: "Il laboure avec quoi ? avec une charrue." },
      { t: "saisie", q: "Écris le CC de but : « Khady se lève tôt pour aider sa mère. »", r: "pour aider sa mère", expl: "Dans quel but se lève-t-elle tôt ? pour aider sa mère." },
      { t: "saisie", q: "Écris le CC de moyen : « Ibrahima ouvre la porte avec une clé. »", r: "avec une clé", expl: "Il ouvre avec quoi ? avec une clé." },
      { t: "saisie", q: "Écris le CC de but : « Nous lavons nos mains pour éviter les maladies. »", r: "pour éviter les maladies", expl: "Le but peut être ce qu'on cherche à éviter." },
      { t: "qcm", q: "« Je mange avec mes doigts. » « avec mes doigts » est un CC de…", choix: ["but", "moyen", "lieu"], r: "moyen", expl: "Je mange avec quoi ? avec mes doigts : ce sont mes « outils »." },
      { t: "qcm", q: "Quel mot introduit souvent un CC de but ?", choix: ["pour", "sous", "dans"], r: "pour", expl: "« pour » + infinitif exprime souvent le but." },
      { t: "trous", q: "Complète avec un CC de moyen (aide : à la pelle, avec un balai, en pirogue).", texte: "Awa nettoie la cour [avec un balai]. — Les maçons creusent le trou [à la pelle]. — Les pêcheurs traversent le fleuve [en pirogue].", expl: "Chaque groupe indique l'outil ou le moyen utilisé." },
      { t: "vf", q: "Dans « Il travaille dur pour nourrir sa famille », « pour nourrir sa famille » est un CC de moyen.", r: false, expl: "C'est l'objectif : dans quel but travaille-t-il ? C'est un CC de but." }
    ],
    [
      { t: "qcm", q: "« Le menuisier travaille avec soin. » « avec soin » est un CC de…", choix: ["moyen", "manière", "but"], r: "manière", aide: "Le soin, est-ce un outil ?", expl: "Il travaille comment ? avec soin : c'est la manière, pas un outil." },
      { t: "qcm", q: "« Le menuisier travaille avec une scie. » « avec une scie » est un CC de…", choix: ["moyen", "manière", "but"], r: "moyen", expl: "Il travaille avec quoi ? avec une scie : c'est un outil." },
      { t: "classer", q: "Avec « avec » : moyen ou manière ?", cases: ["moyen", "manière"], items: [["Il frappe avec un marteau.", "moyen"], ["Il parle avec gentillesse.", "manière"], ["Elle coud avec une aiguille.", "moyen"], ["Elle chante avec joie.", "manière"], ["Il écrit avec une craie.", "moyen"], ["Il écoute avec attention.", "manière"]], expl: "Un objet qu'on utilise : moyen. Une façon de faire : manière." },
      { t: "qcm", q: "Analyse « crayon » dans « L'élève trace un cercle avec un crayon ».", choix: ["nom commun de chose, CC de moyen de tracer", "nom commun de chose, COD de tracer", "nom commun, CC de but de tracer"], r: "nom commun de chose, CC de moyen de tracer", expl: "C'est l'analyse du cahier." },
      { t: "saisie", q: "Ajoute un CC de but « pour réussir » à la phrase : « Mamadou révise ses leçons. »", r: "Mamadou révise ses leçons pour réussir.", large: true, expl: "Le CC de but se place souvent en fin de phrase." },
      { t: "vf", q: "Dans « Grâce à son téléphone, Awa appelle sa tante », il y a un CC de moyen.", r: true, expl: "Avec quoi appelle-t-elle ? grâce à son téléphone." },
      { t: "trous", q: "Écris « but » ou « moyen » pour chaque groupe en gras.", texte: "Grand-père fend le bois <b>avec une hache</b> ([moyen]) <b>pour faire du feu</b> ([but]).", expl: "La hache est l'outil ; faire du feu est l'objectif." }
    ],
    [
      { t: "dictee", texte: "Le paysan arrose ses plants avec un seau pour obtenir une bonne récolte.", expl: "« avec un seau » : CC de moyen ; « pour obtenir une bonne récolte » : CC de but." },
      { t: "dictee", texte: "Afin de ne pas être en retard, Aïssatou va à l'école à vélo.", expl: "« Afin de ne pas être en retard » : but ; « à vélo » : moyen." },
      { t: "trous", q: "Trouve le CC de moyen et le CC de but : « Le pêcheur répare sa pirogue avec des clous pour repartir en mer. »", texte: "CC de moyen : [avec des clous] — CC de but : [pour repartir en mer]", expl: "avec quoi ? avec des clous ; dans quel but ? pour repartir en mer." },
      { t: "relier", q: "Relie chaque groupe en gras à sa sorte de CC : « <b>Le matin</b>, Moussa arrose <b>avec un arrosoir</b> les fleurs du jardin <b>pour les faire pousser</b>. »", paires: [["Le matin", "CC de temps"], ["avec un arrosoir", "CC de moyen"], ["pour les faire pousser", "CC de but"]], expl: "quand ? avec quoi ? dans quel but ?" },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un CC de but ?", choix: ["Il se couche tôt pour être en forme.", "Il se couche tôt avec plaisir.", "Il se couche tôt dans sa chambre.", "Il se couche tôt à cause de la fatigue."], r: "Il se couche tôt pour être en forme.", expl: "Dans quel but se couche-t-il tôt ? pour être en forme." }
    ]
  ]
});


/* ---- fr-gram-cod-coi.js ---- */
// À VÉRIFIER : le cahier dit « On ne peut pas le supprimer » (le COD), avec l'exemple « Louise regarde la télévision », alors que « Louise regarde » garde un sens. Le module écrit « En général, on ne peut pas le supprimer » et n'en fait pas une règle absolue.
// Corrections : « COD du verbe regarde » → « du verbe regarder » ; « COI de s'intisser » → « s'intéresser ».
LECONS.push({
  id: "fr-gram-cod-coi",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément d'objet direct (COD) et le complément d'objet indirect (COI)",
  date: "2026-10-20",
  photos: ["DJI_20261118220547_0044_D.jpg", "DJI_20261118220552_0045_D.jpg"],
  retiens:
    "<p>→ Le <b>complément d'objet direct (COD)</b> complète le verbe. En général, on ne peut pas le supprimer. Il est placé <b>directement après le verbe</b>, sans petit mot entre les deux.<br>Ex : Louise regarde <b>la télévision</b>. « la télévision » est le COD du verbe regarder.</p>" +
    "<p>→ Pour trouver le COD, on pose la question <b>qui ?</b> ou <b>quoi ?</b> après le verbe.<br>Ex : Louise regarde quoi ? la télévision.</p>" +
    "<p>→ Le <b>complément d'objet indirect (COI)</b> complète aussi le verbe, mais il est relié au verbe par un petit mot appelé <b>préposition</b> (à, de…).<br>Ex : Le chanteur parle <b>à</b> ses admirateurs. Le chanteur parle <b>de</b> ses succès musicaux.</p>" +
    "<p>→ Pour trouver le COI, on pose la question <b>à qui ? à quoi ?</b> ou <b>de qui ? de quoi ?</b> après le verbe.<br>Ex : Le chanteur parle à qui ? à ses admirateurs.</p>" +
    "<p><b>Exemple d'analyse</b><br>La directrice félicite l'élève. Elle s'intéresse à son travail.<br><b>l'élève</b> : groupe nominal, COD de féliciter.<br><b>travail</b> : nom commun, COI de s'intéresser.</p>",
  astuce: "COD : <b>D</b> comme <b>D</b>irect, rien entre le verbe et lui. COI : <b>I</b> comme <b>I</b>ndirect, il y a un petit pont (à, de) entre le verbe et lui.",
  regle: "COD : verbe + qui ? ou quoi ? (sans préposition). COI : verbe + à qui ? à quoi ? de qui ? de quoi ? (avec une préposition).",
  niveaux: [
    [
      { t: "qcm", q: "Pour trouver le COD, on pose après le verbe la question…", choix: ["qui ? ou quoi ?", "à qui ? ou de quoi ?", "où ? ou quand ?"], r: "qui ? ou quoi ?", expl: "COD : verbe + qui ? ou quoi ?" },
      { t: "qcm", q: "Pour trouver le COI, on pose après le verbe la question…", choix: ["qui ? ou quoi ?", "à qui ? à quoi ? de qui ? de quoi ?", "comment ?"], r: "à qui ? à quoi ? de qui ? de quoi ?", expl: "Le COI est relié au verbe par une préposition (à, de)." },
      { t: "qcm", q: "« Louise regarde la télévision. » Le COD est…", choix: ["Louise", "regarde", "la télévision"], r: "la télévision", expl: "Louise regarde quoi ? la télévision." },
      { t: "qcm", q: "« Le chanteur parle à ses admirateurs. » Le COI est…", choix: ["Le chanteur", "à ses admirateurs", "parle"], r: "à ses admirateurs", expl: "Le chanteur parle à qui ? à ses admirateurs." },
      { t: "vf", q: "Le COI est relié au verbe par une préposition.", r: true, expl: "à, de… sont des prépositions." },
      { t: "vf", q: "Le COD est relié au verbe par une préposition.", r: false, expl: "Le COD est placé directement après le verbe, sans préposition." }
    ],
    [
      { t: "classer", q: "Le groupe en gras est-il COD ou COI ?", cases: ["COD", "COI"], items: [["Awa mange <b>une mangue</b>.", "COD"], ["Awa pense <b>à sa mère</b>.", "COI"], ["Moussa lave <b>la voiture</b>.", "COD"], ["Moussa parle <b>de son voyage</b>.", "COI"], ["Fatou écoute <b>la radio</b>.", "COD"], ["Fatou obéit <b>à son père</b>.", "COI"], ["Le berger garde <b>ses moutons</b>.", "COD"], ["Il se souvient <b>de son village</b>.", "COI"]], expl: "Pas de préposition : COD. Avec à ou de : COI." },
      { t: "saisie", q: "Écris le COD : « Khady prépare le thiéboudienne. »", r: "le thiéboudienne", expl: "Khady prépare quoi ? le thiéboudienne." },
      { t: "saisie", q: "Écris le COD : « Le maître appelle Ibrahima. »", r: "Ibrahima", expl: "Le maître appelle qui ? Ibrahima." },
      { t: "saisie", q: "Écris le COI : « Les élèves répondent au maître. »", r: "au maître", expl: "Les élèves répondent à qui ? au maître (au = à + le)." },
      { t: "saisie", q: "Écris le COI : « Mamadou rêve de la mer. »", r: "de la mer", expl: "Mamadou rêve de quoi ? de la mer." },
      { t: "qcm", q: "« Le chanteur parle de ses succès musicaux. » Quelle question permet de trouver le COI ?", choix: ["parle de quoi ?", "parle qui ?", "parle où ?"], r: "parle de quoi ?", expl: "Le chanteur parle de quoi ? de ses succès musicaux." },
      { t: "qcm", q: "Dans « Le chanteur parle à ses admirateurs », quelle est la préposition ?", choix: ["à", "ses", "parle"], r: "à", expl: "« à » relie le verbe à son COI." },
      { t: "relier", q: "Relie chaque phrase à la nature de son complément.", paires: [["Je bois du lait.", "COD"], ["Je pense à toi.", "COI"], ["Je cueille des fleurs.", "COD"], ["Je parle de l'école.", "COI"]], expl: "Avec à ou de juste après le verbe : COI." },
      { t: "vf", q: "Dans « Awa téléphone à sa tante », « à sa tante » est un COD.", r: false, expl: "Il y a la préposition « à » : c'est un COI." }
    ],
    [
      { t: "qcm", q: "« La directrice félicite l'élève. » Analyse « l'élève ».", choix: ["groupe nominal, COD de féliciter", "groupe nominal, COI de féliciter", "nom propre, sujet de féliciter"], r: "groupe nominal, COD de féliciter", expl: "La directrice félicite qui ? l'élève, sans préposition : COD." },
      { t: "qcm", q: "« Elle s'intéresse à son travail. » Analyse « travail ».", choix: ["nom commun, COI de s'intéresser", "nom commun, COD de s'intéresser", "nom commun, sujet de s'intéresser"], r: "nom commun, COI de s'intéresser", expl: "Elle s'intéresse à quoi ? à son travail : COI." },
      { t: "vf", q: "Dans « Le car va à Thiès », « à Thiès » est un COI.", r: false, expl: "« à Thiès » répond à la question où ? : c'est un lieu, pas un COI. Le COI répond à « à qui ? à quoi ? de qui ? de quoi ? »." },
      { t: "qcm", q: "Dans « Ibrahima aide sa grand-mère », le complément est…", choix: ["COD", "COI"], r: "COD", expl: "On dit « aider quelqu'un » : Ibrahima aide qui ? sa grand-mère, sans préposition." },
      { t: "qcm", q: "Dans « Ibrahima obéit à sa grand-mère », le complément est…", choix: ["COD", "COI"], r: "COI", expl: "On dit « obéir à quelqu'un » : il y a la préposition à." },
      { t: "trous", q: "Écris COD ou COI pour chaque groupe en gras.", texte: "Aïssatou écrit <b>une lettre</b> ([COD]). Elle pense <b>à son frère</b> ([COI]). Elle parle <b>de sa nouvelle école</b> ([COI]). Elle poste <b>la lettre</b> ([COD]).", expl: "Avec à ou de : COI. Sans préposition : COD." },
      { t: "ordre", q: "Remets les mots dans l'ordre (la phrase contient un COI).", r: "Les enfants obéissent à leurs parents.", expl: "obéir à qui ? à leurs parents : COI." }
    ],
    [
      { t: "dictee", texte: "Le pêcheur répare son filet et parle de sa pêche avec fierté.", expl: "« son filet » : COD de réparer ; « de sa pêche » : COI de parler." },
      { t: "trous", q: "Trouve le complément de chaque verbe et écris sa nature.", texte: "Moussa achète du pain : complément [du pain], nature [COD]. — Moussa pense à son examen : complément [à son examen], nature [COI].", expl: "achète quoi ? (COD) ; pense à quoi ? (COI)." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un COI ?", choix: ["Khady se moque de son frère.", "Khady regarde son frère.", "Khady appelle son frère.", "Khady attend son frère."], r: "Khady se moque de son frère.", expl: "se moquer de qui ? de son frère : il y a une préposition." },
      { t: "classer", q: "Range ces verbes : se construisent-ils avec un COD ou avec un COI ?", cases: ["avec un COD", "avec un COI"], items: [["manger (quelque chose)", "avec un COD"], ["penser (à quelque chose)", "avec un COI"], ["lire (quelque chose)", "avec un COD"], ["parler (de quelque chose)", "avec un COI"], ["construire (quelque chose)", "avec un COD"], ["obéir (à quelqu'un)", "avec un COI"]], expl: "Si le verbe demande à ou de, son complément est un COI." },
      { t: "dictee", texte: "Fatou lave les assiettes, puis elle téléphone à sa cousine de Saint-Louis.", expl: "« les assiettes » : COD ; « à sa cousine » : COI." }
    ]
  ]
});


/* ---- fr-gram-complements-circonstanciels.js ---- */
// À VÉRIFIER : dans cette leçon, le cahier abrège « CCM » pour le complément de MANIÈRE ; dans la leçon du 10 novembre, « CCM » désigne le complément de MOYEN. Le module écrit « CC de manière » en entier pour éviter la confusion.
// Corrections : « chambre : CCL » → « dans sa chambre : CCL » ; « A force du travailler : CC Cause d'aller tomber » → « à force de travailler : CC de cause de tomber » ; « Avec précaution : G N » → nature non reprise (c'est un groupe introduit par une préposition).
LECONS.push({
  id: "fr-gram-complements-circonstanciels",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les compléments circonstanciels (CC)",
  date: "2026-11-03",
  photos: ["DJI_20261118220623_0049_D.jpg", "DJI_20261118220630_0050_D.jpg"],
  retiens:
    "<p>Dans une phrase, les <b>compléments circonstanciels</b> apportent des précisions de <b>temps</b>, de <b>lieu</b>, de <b>manière</b>, de <b>cause</b>… En général, le CC peut être <b>supprimé</b> ou <b>déplacé</b>. On les appelle aussi les <b>compléments de phrase</b>.</p>" +
    "<p>Pour les trouver, on pose une question après le verbe :</p>" +
    "<table><tr><th>complément</th><th>question</th></tr>" +
    "<tr><td>CC de temps (CCT)</td><td>quand ?</td></tr>" +
    "<tr><td>CC de lieu (CCL)</td><td>où ?</td></tr>" +
    "<tr><td>CC de manière</td><td>comment ?</td></tr>" +
    "<tr><td>CC de cause</td><td>pourquoi ? pour quelle raison ?</td></tr></table>" +
    "<p>Ex : <b>La nuit</b>, il travaille <b>avec précaution</b> <b>dans sa chambre</b>. Il va tomber malade <b>à force de travailler</b>.</p>" +
    "<p><b>Exemple d'analyse</b><br>nuit : nom commun, CCT de travailler.<br>avec précaution : CC de manière de travailler.<br>dans sa chambre : CCL de travailler.<br>à force de travailler : CC de cause de tomber.</p>",
  astuce: "Essaie de déplacer ou d'enlever le groupe : si la phrase tient encore debout, c'est souvent un CC. « Il travaille dans sa chambre » → « Dans sa chambre, il travaille. »",
  regle: "Le CC précise les circonstances de l'action : quand ? (temps), où ? (lieu), comment ? (manière), pourquoi ? (cause). On peut en général le supprimer ou le déplacer.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque complément à sa question.", paires: [["CC de temps", "quand ?"], ["CC de lieu", "où ?"], ["CC de manière", "comment ?"], ["CC de cause", "pourquoi ?"]], expl: "Chaque CC répond à une question posée après le verbe." },
      { t: "qcm", q: "« La nuit, il travaille. » « La nuit » est un complément de…", choix: ["temps", "lieu", "manière", "cause"], r: "temps", expl: "Il travaille quand ? la nuit." },
      { t: "qcm", q: "« Il travaille dans sa chambre. » « dans sa chambre » est un complément de…", choix: ["temps", "lieu", "manière", "cause"], r: "lieu", expl: "Il travaille où ? dans sa chambre." },
      { t: "qcm", q: "« Il travaille avec précaution. » « avec précaution » est un complément de…", choix: ["temps", "lieu", "manière", "cause"], r: "manière", expl: "Il travaille comment ? avec précaution." },
      { t: "vf", q: "En général, on peut supprimer ou déplacer un complément circonstanciel.", r: true, expl: "C'est pour cela qu'on les appelle aussi compléments de phrase." },
      { t: "vf", q: "Pour trouver le CC de cause, on pose la question « où ? ».", r: false, expl: "Le CC de cause répond à « pourquoi ? » ou « pour quelle raison ? »." }
    ],
    [
      { t: "classer", q: "Range les groupes en gras.", cases: ["temps", "lieu", "manière", "cause"], items: [["<b>Demain</b>, nous irons à Thiès.", "temps"], ["Les enfants jouent <b>dans la cour</b>.", "lieu"], ["Awa marche <b>lentement</b>.", "manière"], ["Il est absent <b>à cause de la pluie</b>.", "cause"], ["<b>Le samedi</b>, Moussa va au champ.", "temps"], ["Le car roule <b>vers Saint-Louis</b>.", "lieu"], ["Fatou parle <b>avec douceur</b>.", "manière"], ["Le malade tremble <b>de fièvre</b>.", "cause"]], expl: "quand ? où ? comment ? pourquoi ?" },
      { t: "saisie", q: "Écris le CC de lieu : « Les pêcheurs se reposent sous le grand arbre. »", r: "sous le grand arbre", expl: "Ils se reposent où ? sous le grand arbre." },
      { t: "saisie", q: "Écris le CC de temps : « Chaque matin, Khady balaie la cour. »", r: "Chaque matin", expl: "Elle balaie quand ? chaque matin." },
      { t: "saisie", q: "Écris le CC de manière : « Le vieux pêcheur répare son filet avec patience. »", r: "avec patience", expl: "Il répare comment ? avec patience." },
      { t: "saisie", q: "Écris le CC de cause : « La route est fermée à cause des travaux. »", r: "à cause des travaux", expl: "Pourquoi la route est-elle fermée ? à cause des travaux." },
      { t: "qcm", q: "« Il va tomber malade à force de travailler. » « à force de travailler » est un CC de…", choix: ["temps", "lieu", "manière", "cause"], r: "cause", expl: "Pourquoi va-t-il tomber malade ? à force de travailler." },
      { t: "qcm", q: "Quelle question pose-t-on pour trouver le CC de temps ?", choix: ["quand ?", "où ?", "comment ?", "pourquoi ?"], r: "quand ?", expl: "Le CCT répond à « quand ? »." },
      { t: "trous", q: "Écris la question qui permet de trouver chaque CC en gras.", texte: "Il dort <b>dans la chambre</b> : [où] ? — Il dort <b>depuis midi</b> : [quand] ? — Il dort <b>profondément</b> : [comment] ? — Il dort <b>de fatigue</b> : [pourquoi] ?", expl: "Lieu : où ? Temps : quand ? Manière : comment ? Cause : pourquoi ?" },
      { t: "ordre", q: "Remets la phrase dans l'ordre en commençant par le CC de temps.", r: "Le soir, Mamadou révise ses leçons.", expl: "Le CC de temps « Le soir » est déplacé en tête, suivi d'une virgule." }
    ],
    [
      { t: "saisie", q: "Déplace le CC de lieu au début de la phrase : « Les enfants jouent au ballon sur la plage. »", r: "Sur la plage, les enfants jouent au ballon.", large: true, expl: "On peut déplacer le CC ; en tête de phrase, on met une virgule après." },
      { t: "saisie", q: "Supprime le CC de temps : « Hier, Awa a acheté des mangues. »", r: "Awa a acheté des mangues.", large: true, expl: "Sans le CC « Hier », la phrase garde son sens." },
      { t: "qcm", q: "Dans « Moussa mange une mangue sous le manguier », quel groupe peut être supprimé ?", choix: ["sous le manguier", "une mangue", "Moussa"], r: "sous le manguier", expl: "« sous le manguier » est un CC de lieu. « une mangue » est le COD et « Moussa » le sujet." },
      { t: "vf", q: "Dans « Awa regarde la télévision », « la télévision » est un CC.", r: false, expl: "On ne peut pas le déplacer : c'est un COD (regarde quoi ?)." },
      { t: "relier", q: "Analyse chaque CC de la phrase : « La nuit, il travaille avec précaution dans sa chambre. »", paires: [["La nuit", "CC de temps"], ["avec précaution", "CC de manière"], ["dans sa chambre", "CC de lieu"]], expl: "quand ? comment ? où ?" },
      { t: "qcm", q: "« Grâce à sa gentillesse, Khady a beaucoup d'amis. » « Grâce à sa gentillesse » est un CC de…", choix: ["cause", "manière", "lieu"], r: "cause", expl: "Pour quelle raison a-t-elle beaucoup d'amis ? grâce à sa gentillesse." },
      { t: "trous", q: "Complète la phrase avec les CC demandés (aide : au marché, vite, ce matin).", texte: "[Ce matin] (temps), maman est allée [au marché] (lieu) et elle est revenue [vite] (manière).", expl: "quand ? où ? comment ?" }
    ],
    [
      { t: "dictee", texte: "Le samedi matin, les femmes vendent leurs légumes au marché de Thiès.", expl: "« Le samedi matin » : CC de temps ; « au marché de Thiès » : CC de lieu." },
      { t: "dictee", texte: "À cause du vent, les pêcheurs rentrent lentement au port.", expl: "Cause : à cause du vent ; manière : lentement ; lieu : au port." },
      { t: "trous", q: "Écris la sorte de chaque CC en gras (temps, lieu, manière, cause).", texte: "<b>Pendant les vacances</b> ([temps]), Ibrahima travaille <b>dans le champ de son père</b> ([lieu]). Il travaille <b>avec courage</b> ([manière]), mais il s'arrête souvent <b>à cause de la chaleur</b> ([cause]).", expl: "quand ? où ? comment ? pourquoi ?" },
      { t: "qcm", q: "Combien de CC y a-t-il dans « Hier, à Dakar, il a plu très fort » ?", choix: ["un", "deux", "trois"], r: "trois", expl: "Hier (temps), à Dakar (lieu), très fort (manière)." },
      { t: "saisie", q: "Écris le CC de cause : « Les élèves sont restés en classe à cause de l'orage. »", r: "à cause de l'orage", expl: "Pourquoi sont-ils restés ? à cause de l'orage." }
    ]
  ]
});


/* ---- fr-gram-cos.js ---- */
// Correction : « Il faut pas confondre » → « Il ne faut pas confondre ».
LECONS.push({
  id: "fr-gram-cos",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément d'objet second (COS)",
  date: "2026-10-22",
  photos: ["DJI_20261118220559_0046_D.jpg"],
  retiens:
    "<p>Les verbes comme <b>donner, offrir, ordonner, rendre, écrire, demander, distribuer, envoyer, enseigner…</b> peuvent avoir un <b>COD</b> et un <b>COS</b>.</p>" +
    "<p>Le COS s'appelle aussi le <b>complément d'attribution (CA)</b>.</p>" +
    "<p>Ex : Le professeur enseigne <b>la géographie</b> (COD) <b>à ses élèves</b> (COS).</p>" +
    "<p><b>Exemple d'analyse</b><br><b>ses élèves</b> : groupe nominal, COS ou CA du verbe enseigner.</p>" +
    "<p><b>NB :</b> il ne faut pas confondre le CA et l'attribut du sujet.</p>",
  astuce: "Pose deux questions : enseigne <b>quoi ?</b> → la géographie (COD) ; enseigne la géographie <b>à qui ?</b> → à ses élèves (COS). Le COS vient en <b>second</b>, après le COD.",
  regle: "Avec des verbes comme donner, offrir, envoyer, enseigner, le COD répond à « quoi ? » et le COS (ou complément d'attribution) répond à « à qui ? »",
  niveaux: [
    [
      { t: "qcm", q: "Le COS s'appelle aussi…", choix: ["le complément d'attribution", "le complément du nom", "l'attribut du sujet"], r: "le complément d'attribution", expl: "COS = complément d'objet second = complément d'attribution (CA)." },
      { t: "qcm", q: "Quel verbe peut avoir un COD et un COS ?", choix: ["donner", "dormir", "tomber"], r: "donner", expl: "On donne quelque chose (COD) à quelqu'un (COS)." },
      { t: "qcm", q: "« Le professeur enseigne la géographie à ses élèves. » Le COS est…", choix: ["la géographie", "à ses élèves", "Le professeur"], r: "à ses élèves", expl: "Il enseigne la géographie à qui ? à ses élèves." },
      { t: "qcm", q: "Dans la même phrase, le COD est…", choix: ["la géographie", "à ses élèves", "enseigne"], r: "la géographie", expl: "Il enseigne quoi ? la géographie." },
      { t: "vf", q: "« offrir », « envoyer » et « distribuer » peuvent avoir un COS.", r: true, expl: "On offre, on envoie, on distribue quelque chose à quelqu'un." },
      { t: "vf", q: "CA et attribut du sujet, c'est la même chose.", r: false, expl: "La leçon dit qu'il ne faut pas les confondre." }
    ],
    [
      { t: "saisie", q: "Écris le COS : « Awa offre un cadeau à sa mère. »", r: "à sa mère", expl: "Awa offre un cadeau à qui ? à sa mère." },
      { t: "saisie", q: "Écris le COD : « Awa offre un cadeau à sa mère. »", r: "un cadeau", expl: "Awa offre quoi ? un cadeau." },
      { t: "saisie", q: "Écris le COS : « Le facteur distribue les lettres aux habitants. »", r: "aux habitants", expl: "Il distribue les lettres à qui ? aux habitants." },
      { t: "saisie", q: "Écris le COS : « Moussa envoie un message à son oncle. »", r: "à son oncle", expl: "Il envoie un message à qui ? à son oncle." },
      { t: "classer", q: "Range les groupes en gras : COD ou COS ?", cases: ["COD", "COS"], items: [["Je donne <b>du mil</b> aux poules.", "COD"], ["Je donne du mil <b>aux poules</b>.", "COS"], ["Il rend <b>le livre</b> à Fatou.", "COD"], ["Il rend le livre <b>à Fatou</b>.", "COS"], ["Elle écrit <b>une lettre</b> à son amie.", "COD"], ["Elle écrit une lettre <b>à son amie</b>.", "COS"]], expl: "quoi ? → COD ; à qui ? → COS." },
      { t: "relier", q: "Relie chaque question au complément qu'elle permet de trouver.", paires: [["donne quoi ?", "COD"], ["donne à qui ?", "COS"], ["qui donne ?", "sujet"]], expl: "Trois questions, trois fonctions." },
      { t: "qcm", q: "« Le maître demande le silence aux élèves. » Le COS est…", choix: ["le silence", "aux élèves", "Le maître"], r: "aux élèves", expl: "Il demande le silence à qui ? aux élèves." },
      { t: "trous", q: "Complète chaque phrase avec un COS (aide : à son frère, aux enfants, au vendeur).", texte: "Papa distribue des bonbons [aux enfants]. — Je rends la monnaie [au vendeur]. — Khady prête son vélo [à son frère].", expl: "Le COS répond à la question « à qui ? »." },
      { t: "vf", q: "Dans « Le berger garde ses moutons », il y a un COS.", r: false, expl: "Il y a seulement un COD (ses moutons). « garder » n'a pas ici de complément « à qui ? »." }
    ],
    [
      { t: "qcm", q: "Analyse « ses élèves » dans « Le professeur enseigne la géographie à ses élèves ».", choix: ["groupe nominal, COS ou CA du verbe enseigner", "groupe nominal, COD du verbe enseigner", "nom commun, sujet du verbe enseigner"], r: "groupe nominal, COS ou CA du verbe enseigner", expl: "C'est l'analyse du cahier." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un COD <b>et</b> un COS ?", choix: ["Ibrahima vend des arachides aux passants.", "Ibrahima vend des arachides.", "Ibrahima marche vers le marché.", "Ibrahima parle à son ami."], r: "Ibrahima vend des arachides aux passants.", expl: "vend quoi ? des arachides (COD) ; à qui ? aux passants (COS)." },
      { t: "vf", q: "Dans « Le maître écrit au tableau », « au tableau » est un COS.", r: false, expl: "« au tableau » répond à la question où ? : c'est un lieu, pas un COS." },
      { t: "saisie", q: "Ajoute le COS « à sa sœur » à la phrase : « Aïssatou raconte une histoire. »", r: "Aïssatou raconte une histoire à sa sœur.", large: true, expl: "Le COS se place en général après le COD." },
      { t: "ordre", q: "Remets les mots dans l'ordre.", r: "Le vendeur rend la monnaie au client.", expl: "rend quoi ? la monnaie (COD) ; à qui ? au client (COS)." },
      { t: "trous", q: "Écris COD ou COS sous chaque groupe en gras.", texte: "Grand-mère offre <b>un pagne</b> ([COD]) <b>à Khady</b> ([COS]).", expl: "offre quoi ? (COD) ; à qui ? (COS)." }
    ],
    [
      { t: "dictee", texte: "Le chef du village distribue des sacs de riz aux familles pauvres.", expl: "« des sacs de riz » : COD ; « aux familles pauvres » : COS." },
      { t: "dictee", texte: "Mamadou a envoyé une belle carte à sa tante de Ziguinchor.", expl: "« une belle carte » : COD ; « à sa tante de Ziguinchor » : COS." },
      { t: "trous", q: "Trouve le COD et le COS : « L'infirmière donne un médicament au malade. »", texte: "COD : [un médicament] — COS : [au malade]", expl: "donne quoi ? un médicament ; à qui ? au malade." },
      { t: "classer", q: "Ces phrases ont-elles un COS ?", cases: ["avec un COS", "sans COS"], items: [["Je prête mon stylo à Awa.", "avec un COS"], ["Je range mon stylo.", "sans COS"], ["Il offre des fleurs à sa mère.", "avec un COS"], ["Il arrose les fleurs.", "sans COS"], ["Elle envoie une lettre à son père.", "avec un COS"], ["Elle lit une lettre.", "sans COS"]], expl: "Le COS répond à « à qui ? » après le COD." },
      { t: "qcm", q: "Quel verbe de la liste du cahier complète la phrase ? « Le maître … la leçon à ses élèves. »", choix: ["enseigne", "dort", "arrive"], r: "enseigne", expl: "enseigner quelque chose (COD) à quelqu'un (COS)." }
    ]
  ]
});


/* ---- fr-gram-formes-de-phrases.js ---- */
// À VÉRIFIER : au cahier, « Une phrase dont le sujet est mis à la forme interrogative » est confus ; le module écrit « Une phrase mise à la forme interrogative ou interro-négative ».
// Corrections : « ou négation » → « ou négative » ; « Les forme négative » → « La forme négative » ; « n'ont ils pas » → « n'ont-ils pas ».
LECONS.push({
  id: "fr-gram-formes-de-phrases",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les formes de phrases",
  date: "2026-09-22",
  photos: ["DJI_20261118220234_0021_D.jpg", "DJI_20261118220310_0024_D.jpg"],
  retiens:
    "<p>La phrase déclarative peut être à la forme <b>affirmative</b> (positive) ou à la forme <b>négative</b>.</p>" +
    "<p>La forme négative s'oppose à la forme affirmative. En général, elle contient des <b>mots de négation</b> : ne… pas, ne… plus, ne… jamais, ne… point, ne… guère…</p>" +
    "<p>Ex : Les élèves recopient la leçon. (affirmative)<br>Les élèves <b>ne</b> recopient <b>pas</b> la leçon. (négative)</p>" +
    "<p>Une phrase mise à la forme <b>interrogative</b> ou <b>interro-négative</b> demande l'inversion du sujet (le sujet passe après le verbe).</p>" +
    "<p>Ex : Les passagers ont-ils préparé les bagages ? (interrogative)<br>Les passagers <b>n'</b>ont-ils <b>pas</b> préparé les bagages ? (interro-négative)</p>",
  astuce: "La négation, ce sont deux mots qui entourent le verbe : <b>ne</b> devant, <b>pas</b> (ou plus, jamais…) derrière. Devant une voyelle, ne devient <b>n'</b>.",
  regle: "La forme négative contient deux mots de négation autour du verbe (ne… pas, ne… plus, ne… jamais…). La forme interro-négative pose une question à la forme négative, avec le sujet inversé.",
  niveaux: [
    [
      { t: "qcm", q: "« Les élèves recopient la leçon. » Cette phrase est à la forme…", choix: ["affirmative", "négative", "interro-négative"], r: "affirmative", expl: "Il n'y a aucun mot de négation : la phrase est affirmative." },
      { t: "qcm", q: "« Les élèves ne recopient pas la leçon. » Cette phrase est à la forme…", choix: ["affirmative", "négative", "interrogative"], r: "négative", expl: "Elle contient « ne… pas » : elle est négative." },
      { t: "vf", q: "La forme affirmative s'appelle aussi la forme positive.", r: true, expl: "Affirmative = positive." },
      { t: "vf", q: "« ne… jamais » est un mot de négation.", r: true, expl: "ne… pas, ne… plus, ne… jamais, ne… point, ne… guère sont des mots de négation." },
      { t: "classer", q: "Range ces phrases selon leur forme.", cases: ["affirmative", "négative"], items: [["Awa chante bien.", "affirmative"], ["Awa ne chante jamais.", "négative"], ["Il pleut à Ziguinchor.", "affirmative"], ["Il ne pleut plus.", "négative"], ["Moussa n'aime pas le lait.", "négative"], ["Moussa aime le lait.", "affirmative"]], expl: "Une phrase négative contient des mots de négation." },
      { t: "qcm", q: "Quels mots entourent le verbe dans « Je ne mange guère » ?", choix: ["ne… guère", "je… mange", "ne… mange"], r: "ne… guère", expl: "« ne… guère » est un mot de négation en deux parties." }
    ],
    [
      { t: "saisie", q: "Mets à la forme négative avec « ne… pas » : « Fatou regarde la télévision. »", r: "Fatou ne regarde pas la télévision.", large: true, expl: "On place « ne » avant le verbe et « pas » après." },
      { t: "saisie", q: "Mets à la forme négative avec « ne… plus » : « Mon frère joue au football. »", r: "Mon frère ne joue plus au football.", large: true, expl: "ne + verbe + plus." },
      { t: "saisie", q: "Mets à la forme négative avec « ne… jamais » : « Ibrahima arrive en retard. »", r: "Ibrahima n'arrive jamais en retard.", large: true, aide: "Devant une voyelle, « ne » devient « n' ».", expl: "« arrive » commence par une voyelle : ne → n'." },
      { t: "saisie", q: "Mets à la forme affirmative : « Khady ne lave pas le linge. »", r: "Khady lave le linge.", large: true, expl: "On enlève les deux mots de négation." },
      { t: "qcm", q: "« Les passagers ont-ils préparé les bagages ? » Cette phrase est…", choix: ["affirmative", "négative", "interrogative", "interro-négative"], r: "interrogative", expl: "Elle pose une question, sans mot de négation." },
      { t: "qcm", q: "« Les passagers n'ont-ils pas préparé les bagages ? » Cette phrase est…", choix: ["affirmative", "négative", "interrogative", "interro-négative"], r: "interro-négative", expl: "C'est une question avec « n'… pas » : interro-négative." },
      { t: "relier", q: "Relie chaque phrase à sa forme.", paires: [["Tu viens.", "affirmative"], ["Tu ne viens pas.", "négative"], ["Viens-tu ?", "interrogative"], ["Ne viens-tu pas ?", "interro-négative"]], expl: "Quatre façons de dire une même idée." },
      { t: "trous", q: "Complète avec le mot de négation qui manque.", texte: "Je ne bois [pas] de café. — Il [ne] dort jamais l'après-midi. — Nous ne sortons [plus] le soir, depuis l'accident.", expl: "La négation a toujours deux parties." },
      { t: "vf", q: "Dans une phrase interrogative, le sujet peut passer après le verbe.", r: true, expl: "C'est l'inversion du sujet : « Ont-ils préparé… ? »" }
    ],
    [
      { t: "qcm", q: "Quelle phrase est bien écrite à la forme négative ?", choix: ["Il n'a pas faim.", "Il a pas faim.", "Il ne a pas faim.", "Il n'a faim."], r: "Il n'a pas faim.", expl: "Il faut les deux mots : n' (devant une voyelle) et pas." },
      { t: "qcm", q: "Quelle phrase est interro-négative ?", choix: ["Aimes-tu le mafé ?", "N'aimes-tu pas le mafé ?", "Tu n'aimes pas le mafé.", "Tu aimes le mafé."], r: "N'aimes-tu pas le mafé ?", expl: "Une question + une négation, avec le sujet inversé." },
      { t: "saisie", q: "Mets à la forme interrogative avec inversion du sujet : « Tu connais Saint-Louis. »", r: "Connais-tu Saint-Louis ?", large: true, expl: "Le sujet « tu » passe après le verbe, avec un trait d'union." },
      { t: "saisie", q: "Mets à la forme interro-négative : « Vous avez fini ? »", r: "N'avez-vous pas fini ?", large: true, expl: "n' + verbe-sujet + pas : « N'avez-vous pas fini ? »" },
      { t: "vf", q: "« Ils mangent jamais de viande. » est une phrase négative bien écrite.", r: false, expl: "Il manque « ne » : « Ils ne mangent jamais de viande. »" },
      { t: "trous", q: "Complète avec ne ou n'.", texte: "Elle [n']écoute pas. — Nous [ne] partons plus. — Je [n']oublie jamais mes affaires. — Tu [ne] parles guère.", expl: "Devant une voyelle, ne devient n'." },
      { t: "ordre", q: "Remets les mots dans l'ordre pour faire une phrase interro-négative.", r: "Les enfants n'ont-ils pas mangé ?", expl: "Sujet + n' + verbe-ils + pas + participe." }
    ],
    [
      { t: "dictee", texte: "Mamadou ne va plus au champ, car il n'a pas de charrette.", expl: "Deux négations : ne… plus et n'… pas." },
      { t: "dictee", texte: "Les pêcheurs n'ont-ils pas ramené de poisson ce matin ?", expl: "Phrase interro-négative : n'… pas, sujet inversé « ont-ils »." },
      { t: "saisie", q: "Mets à la forme négative avec « ne… jamais » : « Aïssatou oublie son cahier. »", r: "Aïssatou n'oublie jamais son cahier.", large: true, expl: "« oublie » commence par une voyelle : n'… jamais." },
      { t: "trous", q: "Écris la forme de chaque phrase : affirmative, négative, interrogative ou interro-négative.", texte: "La pirogue est-elle rentrée ? ([interrogative]) — Non, elle n'est pas rentrée. ([négative]) — Le vent ne souffle-t-il pas trop fort ? ([interro-négative]) — Le vent souffle fort. ([affirmative])", expl: "Cherche le point d'interrogation et les mots de négation." },
      { t: "qcm", q: "Une seule de ces phrases est à la forme négative. Laquelle ?", choix: ["Il n'est jamais en retard.", "Il est rarement en retard.", "Est-il en retard ?", "Comme il est en retard !"], r: "Il n'est jamais en retard.", expl: "Seule cette phrase contient deux mots de négation (n'… jamais). « rarement » n'est pas un mot de négation." }
    ]
  ]
});


/* ---- fr-gram-le-nom.js ---- */
LECONS.push({
  id: "fr-gram-le-nom",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le nom",
  date: "2026-09-29",
  photos: ["DJI_20261118220333_0027_D.jpg", "DJI_20261118220345_0028_D.jpg"],
  retiens:
    "<p>Les noms sont des mots qui désignent des <b>personnes</b>, des <b>animaux</b>, des <b>objets</b>, des <b>lieux</b>…</p>" +
    "<p>→ Les noms <b>communs</b> désignent les personnes, les animaux, les objets, les lieux… <b>en général</b>.</p>" +
    "<table><tr><th>nom commun</th><th>il désigne</th></tr>" +
    "<tr><td>garçon</td><td>une personne</td></tr><tr><td>lion</td><td>un animal</td></tr>" +
    "<tr><td>couteau</td><td>une chose (un objet)</td></tr><tr><td>maison</td><td>un lieu</td></tr></table>" +
    "<p>→ Les noms <b>propres</b> désignent les personnes, les animaux, les lieux <b>en particulier</b>. Ils commencent par une majuscule.<br>Ex : Omar, Ricky (un animal), Sénégal.</p>" +
    "<p><b>NB :</b> un nom commun a un <b>genre</b> (masculin ou féminin) et un <b>nombre</b> (singulier ou pluriel).</p>" +
    "<p><b>La fonction d'un nom</b> : le nom peut être <b>sujet du verbe</b> ou <b>complément</b> du nom ou du verbe.</p>",
  astuce: "Nom propre = <b>un seul</b> en particulier, avec une <b>majuscule</b> : Omar, Dakar. Nom commun = n'importe lequel : un garçon, une ville.",
  regle: "Le nom commun désigne en général (un garçon, une ville) ; le nom propre désigne en particulier et prend une majuscule (Omar, Dakar). Un nom commun a un genre et un nombre.",
  niveaux: [
    [
      { t: "qcm", q: "Quel mot est un nom ?", choix: ["manger", "maison", "joli", "vite"], r: "maison", expl: "« maison » désigne un lieu : c'est un nom." },
      { t: "qcm", q: "« lion » est un nom commun…", choix: ["de personne", "d'animal", "d'objet", "de lieu"], r: "d'animal", expl: "Le lion est un animal." },
      { t: "vf", q: "Un nom propre commence par une majuscule.", r: true, expl: "Omar, Sénégal, Dakar : les noms propres prennent une majuscule." },
      { t: "vf", q: "« garçon » est un nom propre.", r: false, expl: "« garçon » désigne n'importe quel garçon, en général : c'est un nom commun." },
      { t: "relier", q: "Relie chaque nom commun à ce qu'il désigne.", paires: [["garçon", "une personne"], ["lion", "un animal"], ["couteau", "un objet"], ["maison", "un lieu"]], expl: "Ce sont les exemples de la leçon." },
      { t: "classer", q: "Nom commun ou nom propre ?", cases: ["nom commun", "nom propre"], items: [["Omar", "nom propre"], ["ville", "nom commun"], ["Sénégal", "nom propre"], ["fleuve", "nom commun"], ["Thiès", "nom propre"], ["chien", "nom commun"]], expl: "Le nom propre désigne quelqu'un ou quelque chose en particulier et prend une majuscule." }
    ],
    [
      { t: "classer", q: "Range ces noms communs.", cases: ["personne", "animal", "objet", "lieu"], items: [["boulanger", "personne"], ["chèvre", "animal"], ["marmite", "objet"], ["marché", "lieu"], ["institutrice", "personne"], ["âne", "animal"], ["seau", "objet"], ["école", "lieu"]], expl: "Le nom désigne une personne, un animal, un objet ou un lieu." },
      { t: "qcm", q: "Quel est le genre du nom « pirogue » ?", choix: ["masculin", "féminin"], r: "féminin", expl: "On dit « une pirogue » : le nom est féminin." },
      { t: "qcm", q: "Quel est le nombre du nom « mangues » dans « des mangues » ?", choix: ["singulier", "pluriel"], r: "pluriel", expl: "Il y en a plusieurs : le nom est au pluriel." },
      { t: "qcm", q: "Dans « Ricky aboie », Ricky est…", choix: ["un nom commun de personne", "un nom propre d'animal", "un nom commun d'animal"], r: "un nom propre d'animal", expl: "Ricky est le nom d'un chien en particulier : c'est un nom propre d'animal." },
      { t: "saisie", q: "Écris ce nom propre avec sa majuscule : saint-louis", r: "Saint-Louis", expl: "Les noms de villes sont des noms propres : majuscules." },
      { t: "vf", q: "« Dakar » est un nom propre de lieu.", r: true, expl: "Dakar est une ville en particulier." },
      { t: "trous", q: "Trouve un nom propre pour chaque nom commun (aide : Sénégal, Awa, Ziguinchor).", texte: "une fille : [Awa] — un pays : [Sénégal] — une ville : [Ziguinchor]", expl: "Le nom propre désigne une fille, un pays, une ville en particulier." },
      { t: "relier", q: "Relie chaque nom à son genre et son nombre.", paires: [["le lion", "masculin singulier"], ["la maison", "féminin singulier"], ["les couteaux", "masculin pluriel"], ["les chèvres", "féminin pluriel"]], expl: "Un nom commun a un genre et un nombre." },
      { t: "qcm", q: "Dans « Le pêcheur répare son filet », quel nom est sujet du verbe ?", choix: ["pêcheur", "filet", "répare"], r: "pêcheur", expl: "Qui est-ce qui répare ? Le pêcheur : il est sujet du verbe." }
    ],
    [
      { t: "qcm", q: "Dans « Awa lave le seau », quelle est la fonction du nom « seau » ?", choix: ["sujet du verbe", "complément du verbe", "nom propre"], r: "complément du verbe", expl: "« seau » complète le verbe « lave » : Awa lave quoi ? le seau." },
      { t: "qcm", q: "Dans « La maison de Fatou est neuve », quelle est la fonction du nom « Fatou » ?", choix: ["sujet du verbe", "complément du nom", "complément du verbe"], r: "complément du nom", expl: "« de Fatou » complète le nom « maison »." },
      { t: "vf", q: "« Nom propre » est une fonction du nom.", r: false, expl: "Nom propre est une sorte de nom. Les fonctions sont : sujet, complément du nom, complément du verbe." },
      { t: "saisie", q: "Corrige la phrase en mettant les majuscules aux noms propres : « moussa habite à kaolack. »", r: "Moussa habite à Kaolack.", large: true, expl: "Moussa et Kaolack sont des noms propres." },
      { t: "classer", q: "Range ces noms selon leur genre.", cases: ["masculin", "féminin"], items: [["champ", "masculin"], ["charrette", "féminin"], ["mouton", "masculin"], ["calebasse", "féminin"], ["baobab", "masculin"], ["plage", "féminin"]], expl: "Mets « un » ou « une » devant le nom pour trouver son genre." },
      { t: "qcm", q: "Quel mot désigne un lieu <b>en particulier</b> ?", choix: ["la ville", "le village", "Rufisque", "le pays"], r: "Rufisque", expl: "Rufisque est un nom propre : une ville précise." }
    ],
    [
      { t: "dictee", texte: "Omar et son chien Ricky se promènent sur la plage de Yoff.", expl: "Omar, Ricky et Yoff sont des noms propres : majuscules." },
      { t: "trous", q: "Lis la phrase « Le berger de Thiès garde ses moutons » et réponds.", texte: "Le nom sujet du verbe : [berger] — Le nom propre : [Thiès] — Le nom complément du verbe : [moutons]", expl: "Qui est-ce qui garde ? le berger. Il garde quoi ? ses moutons. Thiès est un nom propre." },
      { t: "qcm", q: "Dans « Les amis de Fatou récitent la leçon », combien y a-t-il de noms communs ?", choix: ["un", "deux", "trois"], r: "deux", expl: "amis et leçon sont des noms communs ; Fatou est un nom propre." },
      { t: "relier", q: "Relie chaque nom souligné à sa fonction : « <b>Khady</b> donne le <b>livre</b> de <b>Moussa</b>. »", paires: [["Khady", "sujet du verbe"], ["livre", "complément du verbe"], ["Moussa", "complément du nom"]], expl: "Qui donne ? Khady. Elle donne quoi ? le livre. Le livre de qui ? de Moussa." },
      { t: "dictee", texte: "Au marché de Kaolack, ma tante vend des oignons et des tomates.", expl: "Kaolack prend une majuscule ; oignons et tomates sont au pluriel." }
    ]
  ]
});


/* ---- fr-gram-le-sujet.js ---- */
// À VÉRIFIER : au cahier, « un sujet partiel : plusieurs sujets + 1 verbe » ; le terme juste est « sujet multiple » (corrigé dans le module).
// À VÉRIFIER : exemple d'analyse « hurlant des chiens affamés » → « hurlent des chiens affamés » (il faut un verbe conjugué).
// À VÉRIFIER : exemple de proposition sujet « Que ta maladie soit guérit » : incomplet (pas de verbe principal) ; le module écrit « Que ta maladie soit guérie nous réjouit. » et n'en fait pas d'exercice.
LECONS.push({
  id: "fr-gram-le-sujet",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le sujet de la phrase",
  date: "2026-10-08",
  photos: ["DJI_20261118220457_0036_D.jpg", "DJI_20261118220502_0037_D.jpg"],
  retiens:
    "<p>Dans une phrase, le <b>sujet</b> indique qui fait l'action.<br>Ex : Pasteur découvre le vaccin contre la rage. <b>Pasteur</b> est le sujet de la phrase.</p>" +
    "<p>On trouve le sujet en posant la question <b>« Qui est-ce qui ? »</b> devant le verbe.<br>Ex : Qui est-ce qui découvre le vaccin ? Pasteur.</p>" +
    "<p><b>Le sujet peut être :</b></p><ul>" +
    "<li>un nom propre ou un nom commun : <b>Pasteur</b> a créé des vaccins. <b>Un vaccin</b> aide notre corps à lutter contre une maladie.</li>" +
    "<li>un verbe à l'infinitif : <b>Soigner</b> est le rôle des médecins.</li>" +
    "<li>une proposition : <b>Que ta maladie soit guérie</b> nous réjouit.</li>" +
    "<li>un pronom personnel : <b>Il</b> est un grand scientifique.</li>" +
    "<li>un groupe nominal (déterminant + nom + adjectif) : <b>La recherche médicale</b> fait de grands progrès.</li></ul>" +
    "<p><b>Un sujet peut être aussi :</b></p><ul>" +
    "<li>un sujet <b>multiple</b> : plusieurs sujets pour 1 verbe ;</li>" +
    "<li>un sujet <b>commun</b> : 1 sujet pour plusieurs verbes ;</li>" +
    "<li>un sujet <b>inversé</b> : le sujet est après le verbe ;</li>" +
    "<li>un sujet <b>éloigné</b> : le sujet est loin de son verbe.</li></ul>" +
    "<p><b>Exemple d'analyse</b><br>Dans le village endormi, hurlent des <b>chiens</b> affamés.<br>chiens : nom commun d'animal, sujet inversé de hurler, masculin pluriel.</p>",
  astuce: "Encadre le sujet avec <b>« C'est… qui »</b> : « C'est Pasteur qui découvre le vaccin. » Ça marche aussi quand le sujet est après le verbe.",
  regle: "Le sujet indique qui fait l'action. On le trouve avec la question « Qui est-ce qui ? » posée devant le verbe.",
  niveaux: [
    [
      { t: "qcm", q: "Le sujet indique…", choix: ["qui fait l'action", "où se passe l'action", "quand se passe l'action"], r: "qui fait l'action", expl: "Le sujet, c'est celui qui fait l'action." },
      { t: "qcm", q: "Quelle question pose-t-on pour trouver le sujet ?", choix: ["Qui est-ce qui ?", "Où ?", "Quand ?", "Comment ?"], r: "Qui est-ce qui ?", expl: "« Qui est-ce qui » + verbe : la réponse est le sujet." },
      { t: "qcm", q: "« Pasteur découvre le vaccin contre la rage. » Quel est le sujet ?", choix: ["Pasteur", "le vaccin", "la rage"], r: "Pasteur", expl: "Qui est-ce qui découvre ? Pasteur." },
      { t: "qcm", q: "« Awa pile le mil. » Quel est le sujet ?", choix: ["Awa", "pile", "le mil"], r: "Awa", expl: "Qui est-ce qui pile le mil ? Awa." },
      { t: "vf", q: "Un pronom personnel comme « il » peut être sujet.", r: true, expl: "Ex : « Il est un grand scientifique. »" },
      { t: "relier", q: "Relie chaque sorte de sujet à sa définition.", paires: [["sujet multiple", "plusieurs sujets, 1 verbe"], ["sujet commun", "1 sujet, plusieurs verbes"], ["sujet inversé", "sujet après le verbe"], ["sujet éloigné", "sujet loin du verbe"]], expl: "Ce sont les quatre cas particuliers de la leçon." }
    ],
    [
      { t: "saisie", q: "Écris le sujet du verbe : « Les pêcheurs rentrent au port. »", r: "Les pêcheurs", expl: "Qui est-ce qui rentre ? Les pêcheurs." },
      { t: "saisie", q: "Écris le sujet du verbe : « Mon grand frère conduit un taxi. »", r: "Mon grand frère", expl: "Qui est-ce qui conduit ? Mon grand frère." },
      { t: "saisie", q: "Écris le sujet du verbe : « Nager est bon pour la santé. »", r: "Nager", aide: "Le sujet peut être un verbe à l'infinitif.", expl: "C'est nager qui est bon pour la santé : le sujet est un verbe à l'infinitif." },
      { t: "classer", q: "Range chaque sujet souligné selon sa nature.", cases: ["nom propre", "groupe nominal", "pronom personnel", "verbe à l'infinitif"], items: [["<b>Moussa</b> dort.", "nom propre"], ["<b>Elle</b> chante.", "pronom personnel"], ["<b>Lire</b> m'amuse.", "verbe à l'infinitif"], ["<b>La petite chèvre</b> bêle.", "groupe nominal"], ["<b>Nous</b> partons.", "pronom personnel"], ["<b>Dakar</b> grandit.", "nom propre"]], expl: "Le sujet peut être un nom, un groupe nominal, un pronom ou un infinitif." },
      { t: "qcm", q: "« La recherche médicale fait de grands progrès. » Le sujet est…", choix: ["un nom propre", "un groupe nominal", "un pronom personnel"], r: "un groupe nominal", expl: "« La recherche médicale » : déterminant + nom + adjectif, c'est un groupe nominal." },
      { t: "qcm", q: "« Soigner est le rôle des médecins. » Le sujet est…", choix: ["un verbe à l'infinitif", "un nom commun", "un pronom"], r: "un verbe à l'infinitif", expl: "« Soigner » est un verbe à l'infinitif qui est sujet." },
      { t: "qcm", q: "« Fatou et Khady vont au marché. » C'est un sujet…", choix: ["multiple", "commun", "inversé"], r: "multiple", expl: "Deux sujets (Fatou et Khady) pour un seul verbe." },
      { t: "qcm", q: "« Le berger appelle, rassemble et compte ses moutons. » C'est un sujet…", choix: ["multiple", "commun", "éloigné"], r: "commun", expl: "Un seul sujet (le berger) pour trois verbes." },
      { t: "vf", q: "Dans « Au loin passe une pirogue », le sujet est « Au loin ».", r: false, expl: "Qui est-ce qui passe ? une pirogue. Le sujet est inversé, après le verbe." }
    ],
    [
      { t: "qcm", q: "« Dans le village endormi, hurlent des chiens affamés. » Le sujet est…", choix: ["le village", "des chiens affamés", "endormi"], r: "des chiens affamés", expl: "Qui est-ce qui hurle ? des chiens affamés. Le sujet est inversé." },
      { t: "qcm", q: "« Mon cousin, qui habite à Ziguinchor depuis dix ans, arrive demain. » C'est un sujet…", choix: ["inversé", "éloigné", "multiple"], r: "éloigné", expl: "Le sujet « Mon cousin » est loin de son verbe « arrive »." },
      { t: "saisie", q: "Écris le sujet du verbe : « Sur la branche chantait un oiseau. »", r: "un oiseau", expl: "Qui est-ce qui chantait ? un oiseau : sujet inversé." },
      { t: "saisie", q: "Écris le sujet du verbe : « Où vont les enfants ? »", r: "les enfants", expl: "Qui est-ce qui va ? les enfants : sujet inversé dans la question." },
      { t: "relier", q: "Relie chaque phrase à la sorte de sujet.", paires: [["Le lion et la hyène se disputent.", "sujet multiple"], ["La fillette court et saute.", "sujet commun"], ["Arrive enfin le car.", "sujet inversé"], ["Le car, plein de voyageurs fatigués, arrive.", "sujet éloigné"]], expl: "Multiple, commun, inversé, éloigné." },
      { t: "qcm", q: "Analyse « chiens » dans « Dans le village endormi, hurlent des chiens affamés. »", choix: ["nom commun d'animal, sujet inversé de hurler, masculin pluriel", "nom propre, sujet de endormir, masculin singulier", "nom commun, complément du verbe hurler, masculin pluriel"], r: "nom commun d'animal, sujet inversé de hurler, masculin pluriel", expl: "C'est l'analyse du cahier : chiens est sujet inversé de hurler." },
      { t: "vf", q: "Le sujet est toujours placé juste avant le verbe.", r: false, expl: "Il peut être inversé (après le verbe) ou éloigné (loin du verbe)." }
    ],
    [
      { t: "trous", q: "Écris le sujet de chaque verbe en gras.", texte: "Le matin, ma mère <b>prépare</b> le petit-déjeuner : [ma mère]. — Dans la cour <b>jouent</b> mes petits frères : [mes petits frères]. — Courir <b>fatigue</b> Ibrahima : [Courir].", expl: "Pose « Qui est-ce qui ? » devant chaque verbe." },
      { t: "dictee", texte: "Sur la plage de Mbour, les pêcheurs et leurs femmes attendent les pirogues.", expl: "Sujet multiple : les pêcheurs et leurs femmes → attendent (pluriel)." },
      { t: "dictee", texte: "Dans le ciel de Dakar passent de grands oiseaux blancs.", expl: "Sujet inversé : de grands oiseaux blancs → passent (pluriel)." },
      { t: "qcm", q: "Dans quelle phrase le sujet est-il <b>inversé</b> ?", choix: ["Au bord du fleuve pousse un grand baobab.", "Un grand baobab pousse au bord du fleuve.", "Le baobab pousse et grandit.", "Le baobab et le fromager poussent."], r: "Au bord du fleuve pousse un grand baobab.", expl: "Le sujet « un grand baobab » est après le verbe « pousse »." },
      { t: "classer", q: "Range ces phrases selon la sorte de sujet.", cases: ["sujet multiple", "sujet commun", "sujet inversé"], items: [["Awa et Moussa dansent.", "sujet multiple"], ["Awa chante et danse.", "sujet commun"], ["Que dit le maître ?", "sujet inversé"], ["Le coq et la poule picorent.", "sujet multiple"], ["Le coq chante, mange et dort.", "sujet commun"], ["Là-bas brille la lune.", "sujet inversé"]], expl: "Plusieurs sujets ? un sujet pour plusieurs verbes ? sujet après le verbe ?" }
    ]
  ]
});


/* ---- fr-gram-pronoms-personnels.js ---- */
// À VÉRIFIER : dans la liste des pronoms compléments, le cahier écrit « tu » et « leurs » ; corrigé en « te » et « leur » (le pronom personnel leur ne prend jamais de s).
// À VÉRIFIER : la définition du cahier s'arrête à « désigne celui, celle, ceux, celles qui parle » ; le module la complète (qui parle, à qui l'on parle, dont on parle).
LECONS.push({
  id: "fr-gram-pronoms-personnels",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les pronoms personnels",
  date: "2026-10-15",
  photos: ["DJI_20261118220534_0042_D.jpg", "DJI_20261118220539_0043_D.jpg"],
  retiens:
    "<p>Le pronom personnel désigne la personne qui parle, celle à qui l'on parle ou celle dont on parle.</p>" +
    "<p>→ Les pronoms personnels <b>sujets</b> sont : je, tu, il, elle, nous, vous, ils, elles.</p>" +
    "<p>→ Les pronoms personnels <b>compléments</b> se placent en général <b>avant le verbe</b>.<br>Ex : La directrice <b>les</b> convoque.</p>" +
    "<p>Les pronoms personnels compléments sont : me, te, se, moi, toi, lui, leur, le, la, les, l', nous, vous.</p>" +
    "<p>Ces pronoms <b>remplacent des noms</b>.<br>Ex : Les invités sont arrivés et maman <b>les</b> reçoit. (les = les invités)</p>" +
    "<p><b>Exemple d'analyse</b><br><b>les</b> : pronom personnel, COD du verbe recevoir.</p>",
  astuce: "Pour savoir ce que remplace le pronom, cherche le nom dans la phrase d'avant : « Les invités sont arrivés et maman <b>les</b> reçoit » → maman reçoit <b>les invités</b>.",
  regle: "Le pronom personnel remplace un nom. Sujets : je, tu, il, elle, nous, vous, ils, elles. Compléments (en général avant le verbe) : me, te, se, le, la, l', les, lui, leur, nous, vous…",
  niveaux: [
    [
      { t: "qcm", q: "Un pronom personnel sert à…", choix: ["remplacer un nom", "relier deux phrases", "décrire un nom"], r: "remplacer un nom", expl: "Les pronoms remplacent des noms." },
      { t: "classer", q: "Range ces pronoms personnels.", cases: ["sujet", "complément"], items: [["je", "sujet"], ["me", "complément"], ["tu", "sujet"], ["te", "complément"], ["ils", "sujet"], ["leur", "complément"], ["elle", "sujet"], ["lui", "complément"]], expl: "je, tu, il, elle, ils, elles sont sujets ; me, te, lui, leur, le, la, les sont compléments." },
      { t: "vf", q: "« nous » et « vous » peuvent être sujets ou compléments.", r: true, expl: "Nous partons (sujet). Il nous appelle (complément)." },
      { t: "qcm", q: "« La directrice <b>les</b> convoque. » Où est placé le pronom complément ?", choix: ["avant le verbe", "après le verbe", "à la fin de la phrase"], r: "avant le verbe", expl: "Le pronom complément se place avant le verbe." },
      { t: "qcm", q: "Quel est le pronom sujet dans « Elles cuisinent le mafé » ?", choix: ["Elles", "le", "mafé"], r: "Elles", expl: "Qui est-ce qui cuisine ? Elles : pronom personnel sujet." },
      { t: "vf", q: "« tu » est un pronom complément.", r: false, expl: "« tu » est sujet. Le pronom complément de la même personne est « te » : il te parle." }
    ],
    [
      { t: "trous", q: "Remplace le groupe en gras par un pronom sujet.", texte: "<b>Awa</b> danse → [Elle] danse. — <b>Les pêcheurs</b> partent → [Ils] partent. — <b>Moussa et moi</b> jouons → [Nous] jouons. — <b>Les filles</b> chantent → [Elles] chantent.", expl: "Il, elle, ils, elles remplacent des noms ; « Moussa et moi » = nous." },
      { t: "qcm", q: "« Les invités sont arrivés et maman <b>les</b> reçoit. » « les » remplace…", choix: ["les invités", "maman", "arrivés"], r: "les invités", expl: "Maman reçoit les invités : les = les invités." },
      { t: "qcm", q: "« J'ai vu Fatou et je <b>la</b> salue. » « la » remplace…", choix: ["Fatou", "je", "vu"], r: "Fatou", expl: "Je salue Fatou : la = Fatou." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Le maître appelle <b>Ibrahima</b>. » → Le maître … appelle.", r: "l'", expl: "« le » devient « l' » devant une voyelle : le maître l'appelle." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Je lave <b>les assiettes</b>. » → Je … lave.", r: "les", expl: "Les assiettes (pluriel) → les." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Khady parle <b>à sa sœur</b>. » → Khady … parle.", r: "lui", expl: "à sa sœur → lui." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Le maître parle <b>aux élèves</b>. » → Le maître … parle.", r: "leur", aide: "Attention : pas de s.", expl: "aux élèves → leur, sans s." },
      { t: "relier", q: "Relie le pronom sujet au pronom complément de la même personne.", paires: [["je", "me"], ["tu", "te"], ["nous", "nous"], ["vous", "vous"]], expl: "je → me, tu → te, nous → nous, vous → vous." },
      { t: "vf", q: "Dans « Mon père nous emmène à Thiès », « nous » est complément.", r: true, expl: "Le sujet est « Mon père » ; « nous » est placé avant le verbe et le complète." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Il te donne un livre.", "Il tu donne un livre.", "Il toi donne un livre."], r: "Il te donne un livre.", expl: "Devant le verbe, le pronom complément est « te »." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Je leur parle.", "Je leurs parle.", "Je les parle à."], r: "Je leur parle.", expl: "Le pronom personnel « leur » ne prend jamais de s." },
      { t: "saisie", q: "Récris la phrase en remplaçant « les mangues » par un pronom : « Awa achète les mangues. »", r: "Awa les achète.", large: true, expl: "Le pronom complément se place avant le verbe : Awa les achète." },
      { t: "saisie", q: "Récris la phrase en remplaçant « à ses parents » par un pronom : « Moussa obéit à ses parents. »", r: "Moussa leur obéit.", large: true, expl: "à ses parents → leur, placé avant le verbe." },
      { t: "qcm", q: "Analyse « les » dans « Maman les reçoit ».", choix: ["pronom personnel, COD du verbe recevoir", "article défini, détermine reçoit", "pronom personnel, sujet du verbe recevoir"], r: "pronom personnel, COD du verbe recevoir", expl: "Devant le verbe, « les » est un pronom : maman reçoit qui ? les (invités)." },
      { t: "vf", q: "Dans « Les enfants jouent », « Les » est un pronom personnel.", r: false, expl: "Ici, « Les » est devant un nom (enfants) : c'est un article." },
      { t: "trous", q: "Complète avec le bon pronom complément.", texte: "Où sont tes chaussures ? Je [les] cherche. — As-tu vu Mamadou ? Je [lui] ai téléphoné. — Tes cousins t'attendent ; tu dois [leur] écrire.", expl: "les (COD pluriel) ; lui (à Mamadou) ; leur (à tes cousins)." }
    ],
    [
      { t: "dictee", texte: "Les invités sont arrivés et maman les reçoit dans le salon.", expl: "« les » est un pronom complément placé avant le verbe." },
      { t: "dictee", texte: "Mes grands-parents habitent à Kaolack ; je leur téléphone chaque dimanche.", expl: "« leur » devant un verbe ne prend pas de s." },
      { t: "trous", q: "Remplace chaque groupe en gras par un pronom (sujet ou complément).", texte: "<b>Fatou</b> ([Elle]) prépare le repas. <b>Ses frères</b> ([Ils]) l'aident. Elle sert <b>le riz</b> → elle [le] sert. Elle donne de l'eau <b>à ses frères</b> → elle [leur] donne de l'eau.", expl: "Elle, ils (sujets) ; le, leur (compléments)." },
      { t: "classer", q: "Le mot en gras est-il un pronom personnel ou un article ?", cases: ["pronom personnel", "article"], items: [["Je <b>la</b> vois.", "pronom personnel"], ["<b>La</b> pluie tombe.", "article"], ["Il <b>les</b> range.", "pronom personnel"], ["<b>Les</b> cahiers sont neufs.", "article"], ["Tu <b>le</b> manges.", "pronom personnel"], ["<b>Le</b> car arrive.", "article"]], expl: "Devant un verbe : pronom. Devant un nom : article." },
      { t: "saisie", q: "Récris la phrase en remplaçant les deux groupes en gras par des pronoms : « <b>Le maître</b> félicite <b>les élèves</b>. »", r: "Il les félicite.", large: true, expl: "Le maître → Il (sujet) ; les élèves → les (complément, avant le verbe)." }
    ]
  ]
});


/* ---- fr-gram-types-de-phrases.js ---- */
// Corrections par rapport au cahier : « exclamatier » → « exclamative » ; « exprime le sentiment » → « exprime un sentiment ».
LECONS.push({
  id: "fr-gram-types-de-phrases",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les types de phrases",
  date: "2026-09-15",
  photos: ["DJI_20261118220052_0013_D.jpg"],
  retiens:
    "<p>Il existe quatre types de phrases.</p>" +
    "<ul>" +
    "<li>Une phrase <b>déclarative</b> donne une information.<br>Ex : Le juge condamne l'accusé.</li>" +
    "<li>Une phrase <b>interrogative</b> permet de poser une question. Elle se termine par un point d'interrogation (?).<br>Ex : Allait-il me mordre ?</li>" +
    "<li>Une phrase <b>exclamative</b> exprime un sentiment, l'étonnement…<br>Ex : Que ce monsieur est gentil !</li>" +
    "<li>Une phrase <b>impérative</b> permet de donner un ordre, un conseil…<br>Ex : Ferme la porte à clé.</li>" +
    "</ul>",
  astuce: "Demande-toi ce que fait la phrase : elle <b>dit</b> (déclarative), elle <b>demande</b> (interrogative), elle <b>s'exclame</b> (exclamative) ou elle <b>ordonne</b> (impérative) ?",
  regle: "Déclarative : donne une information. Interrogative : pose une question (?). Exclamative : exprime un sentiment (!). Impérative : donne un ordre ou un conseil.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de types de phrases as-tu appris ?", choix: ["deux", "trois", "quatre", "cinq"], r: "quatre", expl: "Déclarative, interrogative, exclamative et impérative : quatre types." },
      { t: "qcm", q: "Une phrase qui <b>pose une question</b> est…", choix: ["déclarative", "interrogative", "impérative"], r: "interrogative", expl: "La phrase interrogative pose une question et se termine par un point d'interrogation." },
      { t: "qcm", q: "« Moussa va à l'école. » Cette phrase est…", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "déclarative", expl: "Elle donne une information sur Moussa : c'est une phrase déclarative." },
      { t: "vf", q: "Une phrase impérative sert à donner un ordre ou un conseil.", r: true, expl: "Ex : « Ferme la porte à clé. » C'est un ordre." },
      { t: "vf", q: "Une phrase interrogative se termine par un point d'exclamation.", r: false, expl: "Elle se termine par un point d'interrogation (?)." },
      { t: "relier", q: "Relie chaque type de phrase à ce qu'il fait.", paires: [["déclarative", "donne une information"], ["interrogative", "pose une question"], ["exclamative", "exprime un sentiment"], ["impérative", "donne un ordre"]], expl: "Chaque type de phrase a un rôle différent." }
    ],
    [
      { t: "qcm", q: "« Allait-il me mordre ? » Cette phrase est…", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "interrogative", expl: "Elle pose une question et se termine par « ? »." },
      { t: "qcm", q: "« Que ce monsieur est gentil ! » Cette phrase est…", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "exclamative", expl: "Elle exprime un sentiment (l'admiration)." },
      { t: "qcm", q: "« Ferme la porte à clé. » Cette phrase est…", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "impérative", expl: "Elle donne un ordre." },
      { t: "qcm", q: "« Le juge condamne l'accusé. » Cette phrase est…", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "déclarative", expl: "Elle donne une information." },
      { t: "classer", q: "Range chaque phrase selon son type.", cases: ["déclarative", "interrogative", "exclamative", "impérative"], items: [["Fatou vend des mangues au marché.", "déclarative"], ["Où habite ton oncle ?", "interrogative"], ["Quelle belle pirogue !", "exclamative"], ["Range ta chambre.", "impérative"], ["Est-ce que tu viens ?", "interrogative"], ["Bois beaucoup d'eau.", "impérative"], ["Comme il fait chaud !", "exclamative"], ["Le car part à huit heures.", "déclarative"]], expl: "Information, question, sentiment ou ordre : regarde aussi la ponctuation." },
      { t: "trous", q: "Mets le bon signe à la fin : . ou ? ou !", texte: "Quel âge as-tu [?] — Awa habite à Thiès [.] — Que ce plat est bon [!] — Viens-tu au champ demain [?]", expl: "Une question finit par ?, un sentiment par !, une information par un point." },
      { t: "vf", q: "« Lave tes mains avant de manger. » est une phrase impérative.", r: true, expl: "C'est un conseil, un ordre : la phrase est impérative." },
      { t: "saisie", q: "Écris le type de cette phrase : « Comme la mer est belle ! »", r: "exclamative", aide: "Elle exprime l'admiration.", expl: "Elle exprime un sentiment : phrase exclamative." },
      { t: "saisie", q: "Écris le type de cette phrase : « Pourquoi le ciel est-il bleu ? »", r: "interrogative", expl: "Elle pose une question : phrase interrogative." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est <b>impérative</b> ?", choix: ["Tu fermes la porte.", "Ferme la porte.", "Fermes-tu la porte ?", "Quelle porte lourde !"], r: "Ferme la porte.", expl: "« Ferme la porte. » donne un ordre. « Tu fermes la porte. » donne seulement une information." },
      { t: "qcm", q: "Quelle phrase est <b>interrogative</b> ?", choix: ["Ibrahima arrive demain.", "Ibrahima arrive-t-il demain ?", "Arrive demain, Ibrahima.", "Quelle joie, Ibrahima arrive !"], r: "Ibrahima arrive-t-il demain ?", expl: "Elle pose une question et se termine par « ? »." },
      { t: "vf", q: "« Ne cours pas dans la classe. » est une phrase déclarative.", r: false, expl: "Elle donne un ordre (une interdiction) : elle est impérative." },
      { t: "saisie", q: "Transforme en phrase impérative (avec « tu ») : « Tu écoutes le maître. »", r: "Écoute le maître.", large: true, aide: "À l'impératif, on n'écrit pas le sujet « tu ».", expl: "À l'impératif, le sujet disparaît : « Écoute le maître. »" },
      { t: "saisie", q: "Transforme en phrase interrogative avec « Est-ce que » : « Khady aime le thiéboudienne. »", r: "Est-ce que Khady aime le thiéboudienne ?", large: true, expl: "On ajoute « Est-ce que » et un point d'interrogation." },
      { t: "relier", q: "Relie chaque phrase à son type.", paires: [["Mamadou lit un conte.", "déclarative"], ["Lis ce conte.", "impérative"], ["Lis-tu ce conte ?", "interrogative"], ["Quel beau conte !", "exclamative"]], expl: "Le même sujet peut s'exprimer avec les quatre types de phrases." },
      { t: "ordre", q: "Remets les mots dans l'ordre pour faire une phrase interrogative.", r: "As-tu fini tes devoirs ?", expl: "Le sujet « tu » est après le verbe et la phrase finit par « ? »." }
    ],
    [
      { t: "trous", q: "Lis ce petit texte et écris le type de chaque phrase entre crochets.", texte: "Aïssatou entre dans la cuisine. ([déclarative]) — Quelle bonne odeur ! ([exclamative]) — Que prépares-tu, maman ? ([interrogative]) — Apporte-moi les oignons. ([impérative])", expl: "Information, sentiment, question, ordre." },
      { t: "dictee", texte: "Que ce marché de Sandaga est animé ! Achète-moi des mangues, s'il te plaît.", expl: "Une phrase exclamative (!) puis une phrase impérative (.)." },
      { t: "dictee", texte: "Est-ce que le car pour Saint-Louis est déjà parti ?", expl: "Phrase interrogative : elle finit par un point d'interrogation." },
      { t: "qcm", q: "Le maître dit : « Sortez vos cahiers. » Quel est le type de cette phrase ?", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "impérative", expl: "Le maître donne un ordre aux élèves." },
      { t: "saisie", q: "Transforme en phrase impérative (avec « nous ») : « Nous traversons la route prudemment. »", r: "Traversons la route prudemment.", large: true, expl: "À l'impératif, on enlève le sujet « nous »." },
      { t: "classer", q: "Range ces phrases selon qu'elles finissent par « ? » ou par « ! ».", cases: ["finit par ?", "finit par !"], items: [["Que tu es grand", "finit par !"], ["Quand pars-tu", "finit par ?"], ["Quel beau ballon", "finit par !"], ["Qui a pris mon stylo", "finit par ?"], ["Comme il pleut fort", "finit par !"], ["Où vas-tu", "finit par ?"]], expl: "Une question prend ?, un sentiment prend !." }
    ]
  ]
});


/* ---- hi-definition-histoire.js ---- */
LECONS.push({
  id: "hi-definition-histoire",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La définition de l'histoire",
  date: "2026-09-17",
  photos: ["DJI_20261118222023_0137_D.jpg", "DJI_20261118222048_0138_D.jpg"],
  retiens:
    "<p>L'<b>histoire</b> est une science qui étudie le <b>passé des hommes</b>. Elle nous permet de connaître les conditions de vie de nos ancêtres, leur mode d'organisation…</p>" +
    "<p>L'histoire commence avec l'<b>âge des métaux</b> et l'<b>apparition de l'écriture</b>.</p>" +
    "<p>Les <b>sources de l'histoire</b> sont :</p>" +
    "<ul><li>les <b>sources écrites</b> ;</li><li>les <b>sources orales</b> ;</li><li>les <b>sources muettes</b> (les vestiges).</li></ul>" +
    "<p>Il y a <b>deux systèmes de datation</b> pour situer le passé avec des repères précis :</p>" +
    "<ul><li>les <b>chrétiens</b> datent les événements à partir de la <b>naissance de Jésus-Christ</b> ;</li>" +
    "<li>les <b>musulmans</b> datent à partir du départ du prophète Mohammed de La Mecque vers Médine : c'est l'<b>hégire</b>. Elle a eu lieu en <b>622</b>.</li></ul>",
  astuce: "Trois sortes de sources : ce qu'on <b>lit</b> (écrites), ce qu'on <b>entend</b> (orales), ce qu'on <b>trouve</b> sans paroles (muettes : les vestiges).",
  regle: "L'histoire étudie le passé des hommes grâce aux sources écrites, orales et muettes. Les chrétiens comptent les années depuis la naissance de Jésus-Christ, les musulmans depuis l'hégire (622).",
  niveaux: [
    [
      { t: "qcm", q: "L'histoire est une science qui étudie…", choix: ["le passé des hommes", "les étoiles et les planètes", "les plantes et les animaux"], r: "le passé des hommes", expl: "L'histoire étudie le passé des hommes, par exemple la vie de nos ancêtres." },
      { t: "qcm", q: "Combien y a-t-il de sortes de sources de l'histoire dans ta leçon ?", choix: ["deux", "trois", "cinq"], r: "trois", expl: "Les sources écrites, les sources orales et les sources muettes." },
      { t: "vf", q: "L'histoire commence avec l'apparition de l'écriture.", r: true, expl: "L'histoire commence avec l'âge des métaux et l'apparition de l'écriture." },
      { t: "qcm", q: "Les vestiges (ruines, outils, objets anciens) sont des sources…", choix: ["muettes", "orales", "écrites"], r: "muettes", expl: "Les vestiges ne parlent pas et ne portent pas de texte : ce sont des sources muettes." },
      { t: "qcm", q: "L'hégire, c'est…", choix: ["le départ du prophète Mohammed de La Mecque vers Médine", "la naissance de Jésus-Christ", "l'apparition de l'écriture"], r: "le départ du prophète Mohammed de La Mecque vers Médine", expl: "Les musulmans datent les événements à partir de l'hégire." },
      { t: "vf", q: "Les chrétiens datent les événements à partir de l'hégire.", r: false, expl: "Les chrétiens partent de la naissance de Jésus-Christ ; ce sont les musulmans qui partent de l'hégire." }
    ],
    [
      { t: "saisie", q: "En quelle année a eu lieu l'hégire ?", r: "622", nombre: true, expl: "L'hégire a eu lieu en 622." },
      { t: "classer", q: "Range chaque source dans la bonne catégorie.", cases: ["source écrite", "source orale", "source muette"], items: [["un vieux livre", "source écrite"], ["le récit d'un griot", "source orale"], ["un outil en pierre retrouvé dans le sol", "source muette"], ["une lettre ancienne", "source écrite"], ["un conte raconté par la grand-mère", "source orale"], ["les ruines d'une ancienne ville", "source muette"]], expl: "On lit les sources écrites, on écoute les sources orales ; les vestiges sont des sources muettes." },
      { t: "relier", q: "Relie chaque religion à son point de départ pour compter les années.", paires: [["les chrétiens", "la naissance de Jésus-Christ"], ["les musulmans", "l'hégire (622)"]], expl: "Ce sont les deux systèmes de datation de la leçon." },
      { t: "trous", q: "Complète la leçon.", texte: "L'histoire est une [science] qui étudie le [passé] des hommes. Elle nous permet de connaître les conditions de vie de nos [ancêtres].", expl: "C'est la définition de l'histoire." },
      { t: "qcm", q: "Le griot qui raconte l'histoire d'un roi d'autrefois est une source…", choix: ["orale", "écrite", "muette"], r: "orale", expl: "Il raconte avec la parole : c'est une source orale." },
      { t: "vf", q: "Une vieille poterie retrouvée par des chercheurs est une source muette.", r: true, expl: "C'est un vestige : il ne parle pas, il ne porte pas d'écrit." },
      { t: "saisie", q: "Vers quelle ville le prophète Mohammed est-il parti lors de l'hégire ?", r: "Médine", expl: "Il est parti de La Mecque vers Médine." },
      { t: "qcm", q: "Avec quoi commence l'histoire ?", choix: ["l'âge des métaux et l'écriture", "la découverte du feu", "la naissance de la Terre"], r: "l'âge des métaux et l'écriture", expl: "Avant l'écriture et les métaux, c'est la préhistoire." },
      { t: "trous", q: "Complète.", texte: "Les sources de l'histoire sont les sources [écrites], les sources [orales] et les sources [muettes].", expl: "Trois sortes de sources." }
    ],
    [
      { t: "vf", q: "Les sources muettes sont des textes très anciens.", r: false, expl: "Les textes sont des sources écrites. Les sources muettes sont les vestiges (objets, ruines…)." },
      { t: "qcm", q: "Pourquoi a-t-on besoin d'un système de datation ?", choix: ["pour situer le passé avec des repères précis", "pour écrire plus vite", "pour connaître la météo"], r: "pour situer le passé avec des repères précis", expl: "Un système de datation donne un point de départ pour compter les années." },
      { t: "qcm", q: "Fatou lit une vieille lettre de son arrière-grand-père. Elle utilise une source…", choix: ["écrite", "orale", "muette"], r: "écrite", expl: "Une lettre se lit : c'est une source écrite." },
      { t: "qcm", q: "Moussa enregistre son grand-père qui raconte la vie au village autrefois. C'est une source…", choix: ["orale", "écrite", "muette"], r: "orale", expl: "C'est un témoignage parlé : une source orale." },
      { t: "saisie", q: "Comment appelle-t-on le départ du prophète Mohammed de La Mecque vers Médine ?", r: "l'hégire", expl: "C'est l'hégire, en 622." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["l'histoire", "la science du passé des hommes"], ["un vestige", "une trace muette du passé"], ["l'hégire", "le point de départ du calendrier musulman"]], expl: "Trois mots-clés de la leçon." },
      { t: "vf", q: "La naissance de Jésus-Christ sert de point de départ au calendrier des chrétiens.", r: true, expl: "C'est le système de datation chrétien." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'histoire étudie le [passé] des hommes. Elle commence avec l'âge des [métaux] et l'apparition de l'[écriture]. Les musulmans datent les événements à partir de l'[hégire], qui a eu lieu en [622].", expl: "Résumé de toute la leçon." },
      { t: "qcm", q: "Un archéologue trouve des bracelets anciens enterrés près de Thiès. Quelle sorte de source étudie-t-il ?", choix: ["une source muette", "une source orale", "une source écrite"], r: "une source muette", expl: "Des objets retrouvés sont des vestiges : des sources muettes." },
      { t: "classer", q: "Range : est-ce une source de l'histoire ou un système de datation ?", cases: ["source de l'histoire", "système de datation"], items: [["les sources orales", "source de l'histoire"], ["à partir de l'hégire", "système de datation"], ["les vestiges", "source de l'histoire"], ["à partir de la naissance de Jésus-Christ", "système de datation"], ["les sources écrites", "source de l'histoire"]], expl: "Les sources nous renseignent sur le passé ; les systèmes de datation servent à compter les années." },
      { t: "vf", q: "Sans l'écriture, il n'y a aucune source pour connaître le passé.", r: false, expl: "Il reste les sources orales et les sources muettes (les vestiges)." },
      { t: "qcm", q: "Laquelle de ces phrases est juste ?", choix: ["L'hégire a eu lieu en 622 : c'est le départ de La Mecque vers Médine.", "L'hégire a eu lieu en 622 : c'est la naissance de Jésus-Christ.", "L'hégire a eu lieu en 1822 : c'est le départ de Médine vers La Mecque."], r: "L'hégire a eu lieu en 622 : c'est le départ de La Mecque vers Médine.", expl: "622, de La Mecque vers Médine." }
    ]
  ]
});


/* ---- hi-egypte-ancienne.js ---- */
// À VÉRIFIER : le cahier (photo 0143) date la conquête de l'Égypte par les Perses « vers 1100 avant Jésus-Christ ». La date historique est 525 av. J.-C. (vers 1100 av. J.-C., c'est la fin du Nouvel Empire). Le module donne 525 av. J.-C.
LECONS.push({
  id: "hi-egypte-ancienne",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'Égypte ancienne",
  date: "2026-10-08",
  photos: ["DJI_20261118222120_0143_D.jpg", "DJI_20261118222127_0144_D.jpg"],
  retiens:
    "<table><tr><th>Époques</th><th>Faits marquants</th></tr>" +
    "<tr><td><b>Ancien Empire</b></td><td>unification du pays par le pharaon, avec <b>Memphis</b> comme capitale ; construction des <b>pyramides</b></td></tr>" +
    "<tr><td><b>Moyen Empire</b></td><td>transfert de la capitale à <b>Thèbes</b></td></tr>" +
    "<tr><td><b>Nouvel Empire</b></td><td>période de prospérité et de puissance ; construction des <b>temples</b></td></tr></table>" +
    "<p><b>La civilisation égyptienne</b> : les Égyptiens adoraient <b>plusieurs dieux</b> (Horus, Isis, Amon…). Ils étaient de grands artistes (architectes, sculpteurs).</p>" +
    "<p><b>La société</b> était divisée, du haut vers le bas : 1. le <b>pharaon</b> ; 2. les hauts fonctionnaires ; 3. les prêtres ; 4. les scribes ; 5. les artisans et les paysans ; 6. les esclaves.</p>" +
    "<p>Après ces trois époques vient la période de <b>décadence</b> : l'empire est conquis par les <b>Perses</b> en <b>525 avant Jésus-Christ</b>.</p>" +
    "<p>Les Égyptiens utilisaient une écriture appelée <b>hiéroglyphes</b>, déchiffrée par <b>Jean-François Champollion</b> en <b>1822</b>.</p>" +
    "<p>Les <b>pyramides</b> servaient de tombeaux aux pharaons. Les <b>temples</b> servaient de lieux de culte.</p>",
  astuce: "Ancien → <b>M</b>emphis et pyra<b>m</b>ides ; Moyen → <b>T</b>hèbes ; Nouvel → <b>t</b>emples.",
  regle: "Trois époques : Ancien Empire (Memphis, pyramides), Moyen Empire (capitale à Thèbes), Nouvel Empire (prospérité, temples). Le roi s'appelle le pharaon ; l'écriture, ce sont les hiéroglyphes.",
  niveaux: [
    [
      { t: "qcm", q: "Comment s'appelait le roi de l'Égypte ancienne ?", choix: ["le pharaon", "le Mansa", "le Tounka"], r: "le pharaon", expl: "Le pharaon est au sommet de la société égyptienne." },
      { t: "qcm", q: "À quoi servaient les pyramides ?", choix: ["de tombeaux aux pharaons", "de marchés", "de ports"], r: "de tombeaux aux pharaons", expl: "Les pyramides étaient les tombeaux des pharaons." },
      { t: "vf", q: "Les Égyptiens adoraient plusieurs dieux.", r: true, expl: "Par exemple Horus, Isis, Amon." },
      { t: "qcm", q: "Comment s'appelle l'écriture des anciens Égyptiens ?", choix: ["les hiéroglyphes", "l'alphabet latin", "le braille"], r: "les hiéroglyphes", expl: "Les hiéroglyphes ont été déchiffrés par Champollion en 1822." },
      { t: "qcm", q: "Combien d'époques (empires) compte l'histoire de l'Égypte ancienne dans ta leçon ?", choix: ["trois", "deux", "six"], r: "trois", expl: "Ancien Empire, Moyen Empire, Nouvel Empire." },
      { t: "vf", q: "Les temples servaient de lieux de culte.", r: true, expl: "On y priait les dieux." }
    ],
    [
      { t: "relier", q: "Relie chaque époque à son fait marquant.", paires: [["Ancien Empire", "construction des pyramides"], ["Moyen Empire", "capitale transférée à Thèbes"], ["Nouvel Empire", "construction des temples"]], expl: "C'est le tableau de la leçon." },
      { t: "relier", q: "Relie.", paires: [["Memphis", "capitale de l'Ancien Empire"], ["Thèbes", "capitale du Moyen Empire"], ["Champollion", "déchiffre les hiéroglyphes"], ["les Perses", "conquièrent l'Égypte"]], expl: "Noms importants de la leçon." },
      { t: "saisie", q: "En quelle année Champollion a-t-il déchiffré les hiéroglyphes ?", r: "1822", nombre: true, expl: "En 1822." },
      { t: "saisie", q: "Quelle était la capitale de l'Ancien Empire ?", r: "Memphis", expl: "Le pharaon unifie le pays avec Memphis comme capitale." },
      { t: "saisie", q: "Quelle ville devient capitale au Moyen Empire ?", r: "Thèbes", aide: "Attention à l'accent et au h.", expl: "Au Moyen Empire, la capitale est transférée à Thèbes." },
      { t: "qcm", q: "Lequel de ces noms est un dieu égyptien ?", choix: ["Amon", "Soundiata", "Askia"], r: "Amon", expl: "Horus, Isis et Amon sont des dieux égyptiens." },
      { t: "trous", q: "Complète.", texte: "Les pyramides servaient de [tombeaux] aux pharaons. Les [temples] servaient de lieux de culte.", expl: "Deux grands monuments égyptiens." },
      { t: "vf", q: "Le Nouvel Empire est une période de prospérité et de puissance.", r: true, expl: "C'est aussi l'époque de la construction des temples." },
      { t: "qcm", q: "Qui est tout en haut de la société égyptienne ?", choix: ["le pharaon", "les prêtres", "les scribes"], r: "le pharaon", expl: "Le pharaon, puis les hauts fonctionnaires, les prêtres, les scribes, les artisans et paysans, les esclaves." }
    ],
    [
      { t: "qcm", q: "Qui a conquis l'Égypte pendant sa période de décadence ?", choix: ["les Perses", "les Almoravides", "les Marocains"], r: "les Perses", expl: "Les Perses ont conquis l'Égypte en 525 av. J.-C." },
      { t: "qcm", q: "En quelle année les Perses ont-ils conquis l'Égypte ?", choix: ["525 avant Jésus-Christ", "1822", "622"], r: "525 avant Jésus-Christ", expl: "En 525 av. J.-C. (1822 est la date de Champollion, 622 celle de l'hégire)." },
      { t: "vf", q: "Les pyramides ont été construites au Nouvel Empire.", r: false, expl: "Les pyramides datent de l'Ancien Empire ; le Nouvel Empire construit des temples." },
      { t: "qcm", q: "Dans la société égyptienne, qui est en bas ?", choix: ["les esclaves", "les scribes", "les prêtres"], r: "les esclaves", expl: "Les esclaves sont au dernier rang." },
      { t: "classer", q: "Range ces mots.", cases: ["dieu", "groupe de la société"], items: [["Horus", "dieu"], ["les scribes", "groupe de la société"], ["Isis", "dieu"], ["les prêtres", "groupe de la société"], ["Amon", "dieu"], ["les paysans", "groupe de la société"]], expl: "Horus, Isis et Amon sont des dieux ; les autres sont des groupes sociaux." },
      { t: "saisie", q: "Qui a déchiffré les hiéroglyphes ? (son nom de famille)", r: "Champollion", expl: "Jean-François Champollion, en 1822." },
      { t: "vf", q: "Les Égyptiens étaient de grands artistes : architectes et sculpteurs.", r: true, expl: "Les pyramides et les temples le montrent." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Sous l'Ancien Empire, le pharaon unifie le pays avec [Memphis] comme capitale et fait construire les [pyramides]. Au Moyen Empire, la capitale passe à [Thèbes]. Le Nouvel Empire construit les [temples]. L'écriture égyptienne, les [hiéroglyphes], a été déchiffrée en [1822].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Remets la société dans l'ordre, du haut vers le bas. Quelle suite est juste ?", choix: ["pharaon – hauts fonctionnaires – prêtres – scribes – artisans et paysans – esclaves", "esclaves – scribes – pharaon – prêtres – paysans", "prêtres – pharaon – esclaves – scribes – hauts fonctionnaires"], r: "pharaon – hauts fonctionnaires – prêtres – scribes – artisans et paysans – esclaves", expl: "C'est l'ordre de la leçon." },
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["525 av. J.-C.", "conquête de l'Égypte par les Perses"], ["1822", "déchiffrement des hiéroglyphes"], ["622", "l'hégire"]], expl: "Attention à ne pas confondre les dates de deux leçons d'histoire." },
      { t: "vf", q: "Thèbes était la capitale de l'Ancien Empire.", r: false, expl: "La capitale de l'Ancien Empire était Memphis ; Thèbes devient capitale au Moyen Empire." },
      { t: "classer", q: "Range chaque fait dans son époque.", cases: ["Ancien Empire", "Moyen Empire", "Nouvel Empire"], items: [["unification du pays", "Ancien Empire"], ["construction des pyramides", "Ancien Empire"], ["capitale à Thèbes", "Moyen Empire"], ["prospérité et puissance", "Nouvel Empire"], ["construction des temples", "Nouvel Empire"]], expl: "C'est le tableau de la leçon." }
    ]
  ]
});


/* ---- hi-empire-ghana.js ---- */
LECONS.push({
  id: "hi-empire-ghana",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'empire du Ghana",
  date: "2026-10-12",
  photos: ["DJI_20261118222127_0144_D.jpg", "DJI_20261118222132_0145_D.jpg", "DJI_20261118222140_0146_D.jpg"],
  retiens:
    "<p><b>Origine</b> : le Ghana est le plus ancien royaume, puis empire, africain connu. Il existait au <b>4<sup>e</sup> siècle</b> et s'appelait <b>Ouagadou</b>.</p>" +
    "<p><b>Étendue</b> : à son <b>apogée</b>, au <b>10<sup>e</sup> siècle</b>, le Ghana s'étendait de l'Adrar mauritanien au Fouta-Djalon, et de l'embouchure du fleuve Sénégal à la boucle du Niger.</p>" +
    "<p><b>Organisation administrative</b> :</p>" +
    "<ul><li>le Ghana était dirigé par un empereur puissant, le <b>Kaya Maghan</b>, ou « <b>maître de l'or</b> », qui a doté l'empire d'une solide organisation ; il confiait à ses hommes l'armée, les impôts, la justice… ;</li>" +
    "<li>l'empereur portait le titre de <b>Tounka</b> ;</li>" +
    "<li>la succession était <b>matrilinéaire</b> : à la mort de l'empereur, c'est le <b>fils de sa sœur</b> qui lui succédait ;</li>" +
    "<li>la capitale était <b>Koumbi-Saleh</b>, composée de deux villes : la ville du palais royal et l'autre ville.</li></ul>" +
    "<p><b>Activités économiques</b> : l'économie reposait sur le commerce de produits (or, esclaves…) vendus aux Arabes. On pratiquait l'élevage et l'agriculture. L'empire possédait des <b>mines d'or</b> et tirait profit des impôts du <b>commerce transsaharien</b> : il était très riche.</p>" +
    "<p><b>Le déclin</b> :</p>" +
    "<ul><li>en <b>1052</b>, les <b>Almoravides</b> attaquèrent le Ghana pour convertir la population à l'islam ;</li>" +
    "<li>en <b>1076</b>, ils envahirent la capitale : l'empire entra en déclin ;</li>" +
    "<li>en <b>1240</b>, le Ghana fut conquis par son voisin, l'<b>empire du Mali</b>.</li></ul>",
  astuce: "Ghana : <b>G</b>uerre des Almoravides en 1052, <b>c</b>apitale prise en 1076, <b>M</b>ali vainqueur en 1240.",
  regle: "Le Ghana (Ouagadou) avait pour capitale Koumbi-Saleh ; son empereur était le Kaya Maghan (« maître de l'or »), avec le titre de Tounka. Apogée au 10e siècle, attaque des Almoravides (1052-1076), conquête par le Mali en 1240.",
  niveaux: [
    [
      { t: "qcm", q: "Quel était l'ancien nom du Ghana ?", choix: ["Ouagadou", "Niani", "Gao"], r: "Ouagadou", expl: "Le Ghana s'appelait Ouagadou." },
      { t: "qcm", q: "Que veut dire « Kaya Maghan » ?", choix: ["maître de l'or", "roi des rois", "chef de l'armée"], r: "maître de l'or", expl: "Le Kaya Maghan était le « maître de l'or »." },
      { t: "qcm", q: "Quelle était la capitale du Ghana ?", choix: ["Koumbi-Saleh", "Niani", "Gao"], r: "Koumbi-Saleh", expl: "Niani est la capitale du Mali, Gao celle du Songhaï." },
      { t: "vf", q: "Le Ghana est le plus ancien empire africain connu de ta leçon.", r: true, expl: "Il est connu dès le 4e siècle." },
      { t: "vf", q: "L'empire du Ghana était très pauvre.", r: false, expl: "Il était très riche grâce à l'or et aux impôts du commerce transsaharien." },
      { t: "qcm", q: "Quel titre portait l'empereur du Ghana ?", choix: ["Tounka", "Mansa", "Askia"], r: "Tounka", expl: "Tounka pour le Ghana, Mansa pour le Mali, Askia pour le Songhaï." }
    ],
    [
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["4e siècle", "le Ghana existe déjà"], ["10e siècle", "apogée du Ghana"], ["1052", "attaque des Almoravides"], ["1076", "prise de la capitale"], ["1240", "conquête par le Mali"]], expl: "Ce sont les grandes dates de l'empire du Ghana." },
      { t: "saisie", q: "En quelle année les Almoravides ont-ils attaqué le Ghana ?", r: "1052", nombre: true, expl: "En 1052, pour convertir la population à l'islam." },
      { t: "saisie", q: "En quelle année le Ghana fut-il conquis par le Mali ?", r: "1240", nombre: true, expl: "En 1240." },
      { t: "qcm", q: "Pourquoi les Almoravides ont-ils attaqué le Ghana ?", choix: ["pour convertir la population à l'islam", "pour acheter du sel", "pour construire des pyramides"], r: "pour convertir la population à l'islam", expl: "C'est ce que dit la leçon." },
      { t: "trous", q: "Complète.", texte: "À son apogée, au [10]e siècle, le Ghana s'étendait de l'Adrar mauritanien au Fouta-Djalon.", nombre: true, expl: "L'apogée du Ghana se situe au 10e siècle." },
      { t: "qcm", q: "D'où venait la richesse du Ghana ?", choix: ["des mines d'or et des impôts du commerce transsaharien", "de la pêche industrielle", "des usines de sucre"], r: "des mines d'or et des impôts du commerce transsaharien", expl: "L'or et les taxes sur le commerce à travers le Sahara rendaient l'empire très riche." },
      { t: "vf", q: "Au Ghana, on pratiquait aussi l'élevage et l'agriculture.", r: true, expl: "C'est dans la partie « activités économiques »." },
      { t: "saisie", q: "Quel empire voisin a conquis le Ghana en 1240 ?", r: ["le Mali", "Mali", "l'empire du Mali"], expl: "L'empire du Mali." },
      { t: "qcm", q: "À qui le Ghana vendait-il ses produits ?", choix: ["aux Arabes", "aux Perses", "aux Égyptiens"], r: "aux Arabes", expl: "L'or, les esclaves… étaient vendus aux Arabes." }
    ],
    [
      { t: "qcm", q: "Au Ghana, la succession était matrilinéaire. À la mort de l'empereur, qui lui succédait ?", choix: ["le fils de sa sœur", "son propre fils", "son frère aîné"], r: "le fils de sa sœur", expl: "Matrilinéaire : le pouvoir passe par la lignée de la mère, donc au fils de la sœur." },
      { t: "vf", q: "En 1076, les Almoravides envahirent la capitale du Ghana.", r: true, expl: "Après cela, l'empire entra en déclin." },
      { t: "vf", q: "Koumbi-Saleh était composée d'une seule ville.", r: false, expl: "Elle était composée de deux villes." },
      { t: "qcm", q: "Le Kaya Maghan confiait à ses hommes…", choix: ["l'armée, les impôts, la justice", "la construction des pyramides", "la traduction des hiéroglyphes"], r: "l'armée, les impôts, la justice", expl: "Il a doté l'empire d'une solide organisation." },
      { t: "classer", q: "Range ces informations.", cases: ["organisation", "économie", "déclin"], items: [["le Kaya Maghan", "organisation"], ["la succession matrilinéaire", "organisation"], ["les mines d'or", "économie"], ["le commerce transsaharien", "économie"], ["l'attaque des Almoravides", "déclin"], ["la conquête par le Mali", "déclin"]], expl: "Ce sont les trois parties de la leçon." },
      { t: "saisie", q: "Comment s'appelaient les guerriers qui ont attaqué le Ghana en 1052 ?", r: "les Almoravides", aide: "Leur nom commence par « Al ».", expl: "Les Almoravides." },
      { t: "qcm", q: "Jusqu'où s'étendait le Ghana à l'est ?", choix: ["jusqu'à la boucle du Niger", "jusqu'à l'Égypte", "jusqu'à la mer Rouge"], r: "jusqu'à la boucle du Niger", expl: "De l'embouchure du Sénégal à la boucle du Niger." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le Ghana, appelé autrefois [Ouagadou], avait pour capitale [Koumbi-Saleh]. Son empereur, le Kaya Maghan, était le « maître de l'[or] ». Les Almoravides l'attaquèrent en [1052] et il fut conquis par le Mali en [1240].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Remets dans l'ordre : quelle suite est juste ?", choix: ["apogée – attaque des Almoravides – conquête par le Mali", "conquête par le Mali – apogée – attaque des Almoravides", "attaque des Almoravides – conquête par le Mali – apogée"], r: "apogée – attaque des Almoravides – conquête par le Mali", expl: "10e siècle, puis 1052-1076, puis 1240." },
      { t: "probleme", q: "Le Ghana atteint son apogée au 10e siècle. Les Almoravides attaquent en 1052 et prennent la capitale en 1076. Le Mali le conquiert en 1240.", etapes: [{ q: "Étape 1 : combien d'années séparent l'attaque des Almoravides (1052) de la prise de la capitale (1076) ?", r: "24", unite: "ans" }, { q: "Étape 2 : combien d'années séparent la prise de la capitale (1076) de la conquête par le Mali (1240) ?", r: "164", unite: "ans" }], expl: "1076 − 1052 = 24 ; 1240 − 1076 = 164." },
      { t: "vf", q: "Le Ghana a été conquis par l'empire du Mali, né ensuite de ses ruines.", r: true, expl: "Le Mali est né des ruines du Ghana et l'a conquis en 1240." },
      { t: "relier", q: "Relie.", paires: [["Kaya Maghan", "maître de l'or"], ["Tounka", "titre de l'empereur"], ["Koumbi-Saleh", "capitale"], ["matrilinéaire", "le fils de la sœur succède"]], expl: "Le vocabulaire de l'organisation du Ghana." }
    ]
  ]
});


/* ---- hi-empire-mali.js ---- */
// À VÉRIFIER : le cahier écrit « Kanka Moussa » (photo 0147) ; l'orthographe usuelle est « Kankou Moussa », retenue ici.
// À VÉRIFIER : les dates des attaques des Touaregs et des Mossis et de la conquête par le Songhaï sont illisibles (photos 0148 et 0152). Le module dit seulement « au 15e siècle », comme le tableau récapitulatif ; aucune de ces dates n'est demandée.
LECONS.push({
  id: "hi-empire-mali",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'empire du Mali",
  date: "2026-10-19",
  photos: ["DJI_20261118222140_0146_D.jpg", "DJI_20261118222145_0147_D.jpg", "DJI_20261118222153_0148_D.jpg"],
  retiens:
    "<p><b>Les débuts de l'empire</b> : l'empire du Mali est né des <b>ruines de l'empire du Ghana</b>. Au <b>13<sup>e</sup> siècle</b>, le pays mandingue était divisé en petits royaumes dominés par le <b>royaume sosso</b> de <b>Soumangourou Kanté</b>. <b>Soundiata Keïta</b>, fils d'un roi, réunit une armée et, à la <b>bataille de Kirina</b> en <b>1235</b>, il anéantit le Sosso.</p>" +
    "<p><b>Souverains et titres</b> :</p>" +
    "<ul><li>Soundiata porta le titre de <b>Mansa</b> (l'empereur) ;</li>" +
    "<li>à sa mort, en <b>1255</b>, il laissa un empire solide où il avait fait régner la paix et la sécurité ;</li>" +
    "<li>plus tard, l'empire fut dirigé par <b>Kankou Moussa</b>, qui fit son <b>pèlerinage à La Mecque</b> en <b>1324</b> ;</li>" +
    "<li>la capitale de l'empire était <b>Niani</b>.</li></ul>" +
    "<p><b>Organisation administrative</b> : l'empire avait un gouvernement dirigé par un premier ministre, le <b>vizir</b>, et des <b>farba</b> qui dirigeaient les régions. Il disposait d'une puissante armée.</p>" +
    "<p><b>Économie</b> : les revenus venaient des <b>tributs</b> payés par les royaumes vassaux, des <b>taxes</b> sur le commerce et des <b>impôts</b> payés par les populations.</p>" +
    "<p><b>Déclin</b> : l'empire déclina à cause des attaques des <b>Touaregs</b> et des <b>Mossis</b>. Au <b>15<sup>e</sup> siècle</b>, il fut conquis par l'<b>empire songhaï</b>.</p>",
  astuce: "<b>M</b>ali : <b>M</b>ansa, <b>M</b>oussa, La <b>M</b>ecque… et Soundiata vainqueur à <b>K</b>irina contre le <b>K</b>anté du Sosso.",
  regle: "Le Mali est fondé par Soundiata Keïta après la bataille de Kirina (1235) contre Soumangourou Kanté. L'empereur porte le titre de Mansa ; la capitale est Niani ; Kankou Moussa fait le pèlerinage à La Mecque en 1324.",
  niveaux: [
    [
      { t: "qcm", q: "Qui a fondé l'empire du Mali ?", choix: ["Soundiata Keïta", "Sonni Ali Ber", "Amary Ngoné Sobel Fall"], r: "Soundiata Keïta", expl: "Soundiata Keïta, vainqueur à Kirina en 1235." },
      { t: "qcm", q: "Quel titre portait l'empereur du Mali ?", choix: ["Mansa", "Tounka", "Askia"], r: "Mansa", expl: "Mansa veut dire l'empereur." },
      { t: "qcm", q: "Quelle était la capitale du Mali ?", choix: ["Niani", "Koumbi-Saleh", "Gao"], r: "Niani", expl: "Niani pour le Mali, Koumbi-Saleh pour le Ghana, Gao pour le Songhaï." },
      { t: "vf", q: "L'empire du Mali est né des ruines de l'empire du Ghana.", r: true, expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Qui dirigeait le royaume sosso ?", choix: ["Soumangourou Kanté", "Kankou Moussa", "Askia Mohammed"], r: "Soumangourou Kanté", expl: "Soundiata l'a vaincu à Kirina." },
      { t: "vf", q: "Kankou Moussa a fait le pèlerinage à La Mecque.", r: true, expl: "En 1324." }
    ],
    [
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1235", "bataille de Kirina"], ["1255", "mort de Soundiata"], ["1324", "pèlerinage de Kankou Moussa"], ["15e siècle", "conquête par le Songhaï"]], expl: "Les grandes dates de l'empire du Mali." },
      { t: "saisie", q: "En quelle année a eu lieu la bataille de Kirina ?", r: "1235", nombre: true, expl: "En 1235, Soundiata anéantit le Sosso." },
      { t: "saisie", q: "En quelle année Kankou Moussa a-t-il fait son pèlerinage à La Mecque ?", r: "1324", nombre: true, expl: "En 1324." },
      { t: "saisie", q: "Quelle était la capitale de l'empire du Mali ?", r: "Niani", expl: "La capitale était Niani." },
      { t: "qcm", q: "Qui dirigeait le gouvernement de l'empire du Mali ?", choix: ["un premier ministre appelé vizir", "le Tounka", "un scribe"], r: "un premier ministre appelé vizir", expl: "Le vizir dirigeait le gouvernement, les farba dirigeaient les régions." },
      { t: "qcm", q: "Que dirigeaient les farba ?", choix: ["les régions", "l'armée marocaine", "les mosquées"], r: "les régions", expl: "Les farba dirigeaient les régions de l'empire." },
      { t: "trous", q: "Complète.", texte: "Soundiata Keïta porta le titre de [Mansa]. Il mourut en [1255] en laissant un empire solide.", expl: "Mansa = l'empereur." },
      { t: "vf", q: "Les revenus du Mali venaient des tributs, des taxes sur le commerce et des impôts.", r: true, expl: "C'est la partie « économie » de la leçon." },
      { t: "qcm", q: "Quel empire a conquis le Mali au 15e siècle ?", choix: ["l'empire songhaï", "l'empire du Ghana", "l'Égypte"], r: "l'empire songhaï", expl: "Le Songhaï (Gao) a conquis le Mali." }
    ],
    [
      { t: "qcm", q: "Au 13e siècle, comment était organisé le pays mandingue ?", choix: ["en petits royaumes dominés par le Sosso", "en un seul grand empire", "en colonies européennes"], r: "en petits royaumes dominés par le Sosso", expl: "Soundiata a uni ces royaumes après avoir vaincu le Sosso." },
      { t: "vf", q: "Soundiata Keïta a perdu la bataille de Kirina.", r: false, expl: "Il l'a gagnée : il a anéanti le Sosso en 1235." },
      { t: "classer", q: "Range ces mots.", cases: ["organisation", "économie", "déclin"], items: [["le vizir", "organisation"], ["les farba", "organisation"], ["les tributs", "économie"], ["les taxes sur le commerce", "économie"], ["les attaques des Touaregs", "déclin"], ["les attaques des Mossis", "déclin"]], expl: "Les trois parties de la deuxième leçon sur le Mali." },
      { t: "qcm", q: "Qu'est-ce qu'un tribut ?", choix: ["ce que paient les royaumes vassaux à l'empire", "un marché de poissons", "une arme de chasse"], r: "ce que paient les royaumes vassaux à l'empire", expl: "Les royaumes vassaux (soumis) payaient un tribut à l'empire." },
      { t: "saisie", q: "Comment s'appelle la bataille gagnée par Soundiata en 1235 ?", r: ["Kirina", "la bataille de Kirina"], expl: "La bataille de Kirina." },
      { t: "relier", q: "Relie chaque personnage à ce qu'il a fait.", paires: [["Soundiata Keïta", "fonde l'empire du Mali"], ["Soumangourou Kanté", "roi du Sosso, vaincu à Kirina"], ["Kankou Moussa", "pèlerinage à La Mecque"]], expl: "Trois personnages de la leçon." },
      { t: "vf", q: "Les Touaregs et les Mossis ont attaqué l'empire du Mali.", r: true, expl: "Ces attaques ont causé son déclin." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'empire du Mali est né des ruines du [Ghana]. Soundiata Keïta vainquit Soumangourou Kanté à [Kirina] en 1235. L'empereur portait le titre de [Mansa] et la capitale était [Niani]. Kankou Moussa fit son pèlerinage à La Mecque en [1324].", expl: "Toute la leçon en un texte." },
      { t: "probleme", q: "Soundiata gagne la bataille de Kirina en 1235 et meurt en 1255. Kankou Moussa part à La Mecque en 1324.", etapes: [{ q: "Étape 1 : combien d'années Soundiata a-t-il vécu après Kirina ?", r: "20", unite: "ans" }, { q: "Étape 2 : combien d'années séparent la mort de Soundiata du pèlerinage de Kankou Moussa ?", r: "69", unite: "ans" }], expl: "1255 − 1235 = 20 ; 1324 − 1255 = 69." },
      { t: "qcm", q: "Remets dans l'ordre : quelle suite est juste ?", choix: ["bataille de Kirina – mort de Soundiata – pèlerinage de Kankou Moussa – conquête par le Songhaï", "pèlerinage de Kankou Moussa – bataille de Kirina – mort de Soundiata – conquête par le Songhaï", "conquête par le Songhaï – bataille de Kirina – pèlerinage de Kankou Moussa – mort de Soundiata"], r: "bataille de Kirina – mort de Soundiata – pèlerinage de Kankou Moussa – conquête par le Songhaï", expl: "1235, 1255, 1324, puis le 15e siècle." },
      { t: "vf", q: "Le Ghana a conquis le Mali en 1240.", r: false, expl: "C'est l'inverse : en 1240, le Mali a conquis le Ghana." },
      { t: "relier", q: "Relie chaque empire à sa capitale.", paires: [["Ghana", "Koumbi-Saleh"], ["Mali", "Niani"], ["Songhaï", "Gao"]], expl: "Les trois capitales des grands empires." }
    ]
  ]
});


/* ---- hi-empire-songhai.js ---- */
// À VÉRIFIER : le cahier (photo 0152) écrit que l'empire songhaï entra en déclin « après les attaques de Berbères (Almoravides) au 17e siècle ». Les Almoravides appartiennent au 11e siècle (ils attaquent le Ghana en 1052-1076) et ne sont pas liés à la chute du Songhaï. Le module garde seulement : conquête marocaine en 1591, puis déclin et divisions (17e siècle).
LECONS.push({
  id: "hi-empire-songhai",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'empire du Songhaï ou de Gao",
  date: "2026-11-02",
  photos: ["DJI_20261118222153_0148_D.jpg", "DJI_20261118222156_0149_D.jpg", "DJI_20261118222207_0151_D.jpg", "DJI_20261118222211_0152_D.jpg"],
  retiens:
    "<p><b>Origines, situation et étendue</b> : l'empire de Gao (ou empire songhaï) a été créé après le déclin de l'empire du Mali, au <b>15<sup>e</sup> siècle</b>. Il s'étendait autour de la <b>boucle du Niger</b>.</p>" +
    "<p><b>Souverains, titres et organisation</b> :</p>" +
    "<ul><li><b>Sonni Ali Ber</b>, ou Sonni Ali le Grand, a libéré le pays de la domination du Mali. Il appartenait à la dynastie des <b>Sonni</b> (de <b>1464 à 1492</b>) ;</li>" +
    "<li>à sa mort, en 1492, son fils le remplaça, mais il fut destitué par <b>Askia Mohammed</b> (de <b>1493 à 1528</b>), qui conduisit l'empire à son <b>apogée</b> au <b>16<sup>e</sup> siècle</b> ;</li>" +
    "<li>la capitale de l'empire était <b>Gao</b> ; le roi portait le titre de <b>Sonni</b>, puis d'<b>Askia</b>.</li></ul>" +
    "<p><b>Organisation économique</b> : les revenus reposaient sur les impôts du port, sur l'agriculture, l'artisanat et le <b>commerce transsaharien</b>.</p>" +
    "<p><b>Le déclin</b> : l'empire était menacé par ses voisins. En <b>1591</b>, il fut conquis par les <b>troupes marocaines</b>, puis il entra en déclin et se divisa (17<sup>e</sup> siècle).</p>",
  astuce: "Le Songhaï, c'est <b>G</b>ao, le dernier des trois empires : <b>S</b>onni d'abord, <b>A</b>skia ensuite, puis les Marocains en 1591.",
  regle: "Le Songhaï (capitale Gao) naît au 15e siècle après le déclin du Mali. Sonni Ali Ber le libère ; Askia Mohammed le mène à son apogée au 16e siècle ; les Marocains le conquièrent en 1591.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle était la capitale de l'empire songhaï ?", choix: ["Gao", "Niani", "Koumbi-Saleh"], r: "Gao", expl: "C'est pourquoi on l'appelle aussi l'empire de Gao." },
      { t: "qcm", q: "Après le déclin de quel empire le Songhaï a-t-il été créé ?", choix: ["l'empire du Mali", "l'empire du Ghana", "l'Égypte ancienne"], r: "l'empire du Mali", expl: "Il est né au 15e siècle, après le déclin du Mali." },
      { t: "vf", q: "Sonni Ali Ber a libéré le pays de la domination du Mali.", r: true, expl: "On l'appelle aussi Sonni Ali le Grand." },
      { t: "qcm", q: "Qui a conduit l'empire songhaï à son apogée ?", choix: ["Askia Mohammed", "Soundiata Keïta", "le Kaya Maghan"], r: "Askia Mohammed", expl: "Askia Mohammed, au 16e siècle." },
      { t: "qcm", q: "Qui a conquis l'empire songhaï en 1591 ?", choix: ["les troupes marocaines", "les Perses", "les Almoravides"], r: "les troupes marocaines", expl: "Les troupes du Maroc, en 1591." },
      { t: "vf", q: "Les rois du Songhaï portaient le titre de Mansa.", r: false, expl: "Ils portaient le titre de Sonni, puis d'Askia. Mansa est le titre du Mali." }
    ],
    [
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1464 à 1492", "règne de la dynastie des Sonni (Sonni Ali Ber)"], ["1493 à 1528", "règne d'Askia Mohammed"], ["16e siècle", "apogée du Songhaï"], ["1591", "conquête marocaine"]], expl: "Les grandes dates de l'empire songhaï." },
      { t: "saisie", q: "En quelle année les troupes marocaines ont-elles conquis l'empire songhaï ?", r: "1591", nombre: true, expl: "En 1591." },
      { t: "saisie", q: "Quelle était la capitale de l'empire songhaï ?", r: "Gao", expl: "Gao." },
      { t: "qcm", q: "À quel siècle se situe l'apogée du Songhaï ?", choix: ["au 16e siècle", "au 10e siècle", "au 14e siècle"], r: "au 16e siècle", expl: "10e siècle : Ghana ; 14e siècle : Mali ; 16e siècle : Songhaï." },
      { t: "qcm", q: "Quels titres portaient les rois du Songhaï ?", choix: ["Sonni, puis Askia", "Tounka, puis Mansa", "Pharaon, puis Mansa"], r: "Sonni, puis Askia", expl: "D'abord la dynastie des Sonni, puis celle des Askia." },
      { t: "trous", q: "Complète.", texte: "Sonni Ali Ber appartenait à la dynastie des [Sonni]. Il fut suivi par son fils, destitué par [Askia] Mohammed.", expl: "Deux dynasties : Sonni puis Askia." },
      { t: "vf", q: "Le Songhaï s'étendait autour de la boucle du Niger.", r: true, expl: "C'est sa situation dans la leçon." },
      { t: "qcm", q: "Sur quoi reposaient les revenus de l'empire songhaï ?", choix: ["les impôts, l'agriculture, l'artisanat et le commerce transsaharien", "les usines de ciment", "la vente de pétrole"], r: "les impôts, l'agriculture, l'artisanat et le commerce transsaharien", expl: "C'est l'organisation économique de l'empire." },
      { t: "vf", q: "Sonni Ali Ber est mort en 1492.", r: true, expl: "Il a régné jusqu'en 1492." }
    ],
    [
      { t: "qcm", q: "Que s'est-il passé après la mort de Sonni Ali Ber ?", choix: ["son fils le remplaça, puis fut destitué par Askia Mohammed", "les Almoravides prirent Gao", "le Ghana conquit le Songhaï"], r: "son fils le remplaça, puis fut destitué par Askia Mohammed", expl: "Askia Mohammed prit le pouvoir en 1493." },
      { t: "vf", q: "Après 1591, le Songhaï devint encore plus puissant.", r: false, expl: "Après la conquête marocaine, il entra en déclin et se divisa." },
      { t: "saisie", q: "Comment appelle-t-on aussi Sonni Ali Ber ? Sonni Ali le …", r: "Grand", expl: "Sonni Ali Ber = Sonni Ali le Grand." },
      { t: "relier", q: "Relie chaque personnage à ce qu'il a fait.", paires: [["Sonni Ali Ber", "libère le pays du Mali"], ["Askia Mohammed", "mène l'empire à son apogée"], ["les troupes marocaines", "conquièrent l'empire en 1591"]], expl: "Les acteurs de l'histoire du Songhaï." },
      { t: "qcm", q: "Combien d'années a régné Askia Mohammed (de 1493 à 1528) ?", choix: ["35 ans", "28 ans", "53 ans"], r: "35 ans", expl: "1528 − 1493 = 35." },
      { t: "classer", q: "Range ces informations.", cases: ["Songhaï", "Mali"], items: [["Gao", "Songhaï"], ["Niani", "Mali"], ["Askia", "Songhaï"], ["Mansa", "Mali"], ["1591", "Songhaï"], ["Kirina", "Mali"]], expl: "Ne mélange pas les deux empires." },
      { t: "vf", q: "Les Almoravides ont fait tomber le Songhaï au 17e siècle.", r: false, expl: "Les Almoravides sont du 11e siècle et ont attaqué le Ghana. Le Songhaï a été conquis par les Marocains en 1591." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'empire songhaï, dont la capitale était [Gao], est né au 15e siècle après le déclin du [Mali]. Sonni Ali Ber le libéra. Askia [Mohammed] le conduisit à son apogée au 16e siècle. En [1591], il fut conquis par les troupes [marocaines].", expl: "Toute la leçon en un texte." },
      { t: "probleme", q: "Sonni Ali Ber règne de 1464 à 1492. Askia Mohammed règne de 1493 à 1528.", etapes: [{ q: "Étape 1 : combien d'années a duré le règne de Sonni Ali Ber ?", r: "28", unite: "ans" }, { q: "Étape 2 : combien d'années se sont écoulées entre la fin du règne d'Askia Mohammed (1528) et la conquête marocaine (1591) ?", r: "63", unite: "ans" }], expl: "1492 − 1464 = 28 ; 1591 − 1528 = 63." },
      { t: "qcm", q: "Remets dans l'ordre : quelle suite est juste ?", choix: ["Sonni Ali Ber – Askia Mohammed – conquête marocaine", "Askia Mohammed – Sonni Ali Ber – conquête marocaine", "conquête marocaine – Sonni Ali Ber – Askia Mohammed"], r: "Sonni Ali Ber – Askia Mohammed – conquête marocaine", expl: "1464-1492, 1493-1528, puis 1591." },
      { t: "relier", q: "Relie chaque empire à son titre royal.", paires: [["Ghana", "Tounka"], ["Mali", "Mansa"], ["Songhaï", "Sonni ou Askia"]], expl: "Chaque empire a son titre." },
      { t: "vf", q: "Le Songhaï est le plus récent des trois grands empires (Ghana, Mali, Songhaï).", r: true, expl: "Ghana (apogée au 10e siècle), Mali (14e siècle), Songhaï (16e siècle)." }
    ]
  ]
});


/* ---- hi-empires-tableau.js ---- */
// À VÉRIFIER : l'année exacte du déclin du Mali est floue au cahier (« 14?5 », photos 0148 et 0152). Le module n'indique que le 15e siècle.
// À VÉRIFIER : pour le Songhaï, le tableau du cahier dit « déclin 17e siècle » ; la leçon associée attribuait ce déclin aux Almoravides (erreur : ils sont du 11e siècle). Le module ne reprend pas les Almoravides pour le Songhaï.
LECONS.push({
  id: "hi-empires-tableau",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Le tableau récapitulatif sur les empires",
  date: "2026-11-09",
  photos: ["DJI_20261118222211_0152_D.jpg"],
  retiens:
    "<table><tr><th>Empires</th><th>Titres</th><th>Capitale</th><th>Faits marquants</th></tr>" +
    "<tr><td><b>Ghana</b></td><td>Tounka ou Kaya Maghan</td><td>Koumbi-Saleh</td><td>apogée au 10<sup>e</sup> siècle ; attaque des Almoravides (prise de la capitale en 1076) ; conquis par le Mali en 1240</td></tr>" +
    "<tr><td><b>Mali</b></td><td>Mansa</td><td>Niani</td><td>bataille de Kirina en 1235 ; apogée au 14<sup>e</sup> siècle ; déclin au 15<sup>e</sup> siècle</td></tr>" +
    "<tr><td><b>Songhaï</b></td><td>Sonni ou Askia</td><td>Gao</td><td>apogée au 16<sup>e</sup> siècle ; attaque marocaine en 1591 ; déclin au 17<sup>e</sup> siècle</td></tr></table>",
  astuce: "Les apogées vont de deux siècles en deux siècles : Ghana <b>10</b>e, Mali <b>14</b>e, Songhaï <b>16</b>e. Les capitales dans l'ordre : <b>K</b>oumbi, <b>N</b>iani, <b>G</b>ao.",
  regle: "Ghana : Tounka, Koumbi-Saleh, apogée au 10e siècle. Mali : Mansa, Niani, apogée au 14e siècle. Songhaï : Sonni ou Askia, Gao, apogée au 16e siècle.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque empire à sa capitale.", paires: [["Ghana", "Koumbi-Saleh"], ["Mali", "Niani"], ["Songhaï", "Gao"]], expl: "Ce sont les trois capitales du tableau." },
      { t: "relier", q: "Relie chaque empire au titre de son souverain.", paires: [["Ghana", "Tounka ou Kaya Maghan"], ["Mali", "Mansa"], ["Songhaï", "Sonni ou Askia"]], expl: "Chaque empire a son titre royal." },
      { t: "qcm", q: "Quel est le plus ancien des trois empires ?", choix: ["le Ghana", "le Mali", "le Songhaï"], r: "le Ghana", expl: "Le Ghana existait déjà au 4e siècle." },
      { t: "vf", q: "Niani était la capitale de l'empire du Mali.", r: true, expl: "Oui : Niani pour le Mali." },
      { t: "qcm", q: "Dans quel empire le souverain s'appelait-il le Mansa ?", choix: ["le Mali", "le Ghana", "le Songhaï"], r: "le Mali", expl: "Mansa = empereur du Mali." }
    ],
    [
      { t: "relier", q: "Relie chaque empire au siècle de son apogée.", paires: [["Ghana", "10e siècle"], ["Mali", "14e siècle"], ["Songhaï", "16e siècle"]], expl: "Les apogées se suivent dans le temps." },
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1076", "les Almoravides prennent la capitale du Ghana"], ["1235", "bataille de Kirina"], ["1240", "le Mali conquiert le Ghana"], ["1591", "attaque marocaine contre le Songhaï"]], expl: "Les grandes dates du tableau." },
      { t: "saisie", q: "Quelle était la capitale de l'empire du Ghana ?", r: "Koumbi-Saleh", aide: "Deux mots reliés par un trait d'union.", expl: "Koumbi-Saleh." },
      { t: "saisie", q: "Quelle était la capitale de l'empire songhaï ?", r: "Gao", expl: "Gao." },
      { t: "qcm", q: "Dans quel empire a eu lieu la bataille de Kirina ?", choix: ["le Mali", "le Ghana", "le Songhaï"], r: "le Mali", expl: "En 1235, Soundiata fonde l'empire du Mali." },
      { t: "qcm", q: "Quel empire a subi une attaque marocaine en 1591 ?", choix: ["le Songhaï", "le Mali", "le Ghana"], r: "le Songhaï", expl: "L'empire songhaï, dont la capitale était Gao." },
      { t: "vf", q: "L'apogée du Mali se situe au 14e siècle.", r: true, expl: "C'est l'époque de Kankou Moussa (pèlerinage en 1324)." },
      { t: "classer", q: "Range chaque mot dans son empire.", cases: ["Ghana", "Mali", "Songhaï"], items: [["Tounka", "Ghana"], ["Koumbi-Saleh", "Ghana"], ["Mansa", "Mali"], ["Niani", "Mali"], ["Askia", "Songhaï"], ["Gao", "Songhaï"]], expl: "Titres et capitales des trois empires." }
    ],
    [
      { t: "vf", q: "Le Songhaï a atteint son apogée avant le Ghana.", r: false, expl: "C'est l'inverse : Ghana au 10e siècle, Songhaï au 16e siècle." },
      { t: "qcm", q: "Quel empire a été conquis par un autre empire de ce tableau ?", choix: ["le Ghana, conquis par le Mali", "le Mali, conquis par le Ghana", "le Songhaï, conquis par le Ghana"], r: "le Ghana, conquis par le Mali", expl: "En 1240, le Mali conquiert le Ghana. Plus tard, le Songhaï prend la place du Mali." },
      { t: "classer", q: "Range chaque fait dans son empire.", cases: ["Ghana", "Mali", "Songhaï"], items: [["attaque des Almoravides", "Ghana"], ["bataille de Kirina", "Mali"], ["attaque marocaine de 1591", "Songhaï"], ["apogée au 10e siècle", "Ghana"], ["apogée au 14e siècle", "Mali"], ["apogée au 16e siècle", "Songhaï"]], expl: "Les faits marquants du tableau." },
      { t: "qcm", q: "Quel titre ne correspond PAS au Ghana ?", choix: ["Askia", "Tounka", "Kaya Maghan"], r: "Askia", expl: "Askia est un titre du Songhaï." },
      { t: "saisie", q: "Quel titre portaient les souverains du Mali ?", r: "Mansa", expl: "Mansa." },
      { t: "vf", q: "Le déclin du Mali se situe au 15e siècle.", r: true, expl: "Le tableau indique le 15e siècle." }
    ],
    [
      { t: "trous", q: "Complète le tableau en phrases.", texte: "Le Ghana avait pour capitale [Koumbi-Saleh] et son roi portait le titre de [Tounka]. Le Mali avait pour capitale [Niani] et son roi était le [Mansa]. Le Songhaï avait pour capitale [Gao].", expl: "Le tableau récapitulatif en phrases." },
      { t: "qcm", q: "Remets les empires dans l'ordre de leur apogée.", choix: ["Ghana – Mali – Songhaï", "Mali – Ghana – Songhaï", "Songhaï – Mali – Ghana"], r: "Ghana – Mali – Songhaï", expl: "10e, 14e, puis 16e siècle." },
      { t: "probleme", q: "Le Mali conquiert le Ghana en 1240. Les Marocains attaquent le Songhaï en 1591.", etapes: [{ q: "Étape 1 : combien d'années séparent la bataille de Kirina (1235) de la conquête du Ghana (1240) ?", r: "5", unite: "ans" }, { q: "Étape 2 : combien d'années séparent la conquête du Ghana (1240) de l'attaque marocaine (1591) ?", r: "351", unite: "ans" }], expl: "1240 − 1235 = 5 ; 1591 − 1240 = 351." },
      { t: "relier", q: "Défi : relie chaque souverain à son empire.", paires: [["le Kaya Maghan", "Ghana"], ["Soundiata Keïta", "Mali"], ["Askia Mohammed", "Songhaï"]], expl: "Un souverain célèbre pour chaque empire." },
      { t: "vf", q: "Koumbi-Saleh, Niani et Gao sont les capitales, dans l'ordre, du Ghana, du Mali et du Songhaï.", r: true, expl: "C'est exactement le tableau." }
    ]
  ]
});


/* ---- hi-prehistoire-afrique-senegal.js ---- */
// À VÉRIFIER : un des sites préhistoriques du Sénégal est un lac dont le nom est mal lisible au cahier (« Thiamassa ? », photo 0141). Il n'est pas cité dans le module et ne fait l'objet d'aucun exercice.
LECONS.push({
  id: "hi-prehistoire-afrique-senegal",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La préhistoire en Afrique et au Sénégal",
  date: "2026-10-01",
  photos: ["DJI_20261118222107_0141_D.jpg"],
  retiens:
    "<p>La Terre existe depuis des <b>milliards d'années</b>.</p>" +
    "<p>L'Afrique est le <b>berceau de l'humanité</b>, car les squelettes des <b>premiers hommes</b> ont été trouvés en Afrique.</p>" +
    "<p>Les principaux sites préhistoriques en Afrique se trouvent en <b>Afrique du Sud</b>, au <b>Kenya</b>, en <b>Tanzanie</b>, en <b>Éthiopie</b>, au <b>Niger</b>, au <b>Maroc</b>…</p>" +
    "<p>Les principaux sites préhistoriques au Sénégal sont : la <b>pointe de Fann</b>, le site de <b>Bel-Air</b>, les gisements des <b>Madeleines</b>, un lac (nom à vérifier avec le maître) et le <b>Niokolo-Koba</b>.</p>" +
    "<p>Au début du <b>20<sup>e</sup> siècle</b>, tout un outillage préhistorique a été découvert par des chercheurs de l'<b>IFAN</b> (Institut fondamental d'Afrique noire).</p>",
  astuce: "Les premiers hommes sont nés en Afrique : l'Afrique est le « berceau », comme le lit d'un bébé.",
  regle: "L'Afrique est le berceau de l'humanité, car on y a trouvé les squelettes des premiers hommes. Au Sénégal, les chercheurs de l'IFAN ont découvert des outils préhistoriques à Fann, à Bel-Air, aux Madeleines, au Niokolo-Koba…",
  niveaux: [
    [
      { t: "qcm", q: "Pourquoi dit-on que l'Afrique est le berceau de l'humanité ?", choix: ["parce que les squelettes des premiers hommes y ont été trouvés", "parce que c'est le plus grand continent", "parce qu'il y fait chaud"], r: "parce que les squelettes des premiers hommes y ont été trouvés", expl: "Les plus anciens squelettes humains ont été découverts en Afrique." },
      { t: "vf", q: "La Terre existe depuis des milliards d'années.", r: true, expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Que signifie le sigle IFAN ?", choix: ["Institut fondamental d'Afrique noire", "Institut français d'Afrique du Nord", "Institut des forêts africaines nationales"], r: "Institut fondamental d'Afrique noire", expl: "IFAN = Institut fondamental d'Afrique noire." },
      { t: "qcm", q: "Lequel de ces lieux est un site préhistorique du Sénégal ?", choix: ["la pointe de Fann", "le lac Victoria", "le mont Kilimandjaro"], r: "la pointe de Fann", expl: "La pointe de Fann, à Dakar, est un site préhistorique du Sénégal." },
      { t: "vf", q: "Le Kenya et l'Éthiopie ont des sites préhistoriques importants.", r: true, expl: "Ils font partie des principaux sites préhistoriques d'Afrique cités dans la leçon." }
    ],
    [
      { t: "classer", q: "Site préhistorique au Sénégal ou ailleurs en Afrique ?", cases: ["au Sénégal", "ailleurs en Afrique"], items: [["la pointe de Fann", "au Sénégal"], ["le Kenya", "ailleurs en Afrique"], ["Bel-Air", "au Sénégal"], ["la Tanzanie", "ailleurs en Afrique"], ["le Niokolo-Koba", "au Sénégal"], ["l'Afrique du Sud", "ailleurs en Afrique"]], expl: "Fann, Bel-Air, les Madeleines et le Niokolo-Koba sont au Sénégal." },
      { t: "saisie", q: "Au début de quel siècle les chercheurs de l'IFAN ont-ils découvert un outillage préhistorique ? (écris le nombre)", r: "20", nombre: true, expl: "Au début du 20e siècle." },
      { t: "trous", q: "Complète.", texte: "L'Afrique est le [berceau] de l'humanité, car les [squelettes] des premiers hommes y ont été trouvés.", expl: "C'est la phrase clé de la leçon." },
      { t: "qcm", q: "Qui a découvert l'outillage préhistorique du Sénégal ?", choix: ["des chercheurs de l'IFAN", "des pêcheurs de Kayar", "des soldats de l'empire du Mali"], r: "des chercheurs de l'IFAN", expl: "Ce sont des chercheurs de l'IFAN, au début du 20e siècle." },
      { t: "vf", q: "Le Maroc et le Niger font partie des sites préhistoriques d'Afrique cités dans la leçon.", r: true, expl: "La leçon cite l'Afrique du Sud, le Kenya, la Tanzanie, l'Éthiopie, le Niger et le Maroc." },
      { t: "qcm", q: "Les Madeleines, citées parmi les sites préhistoriques, sont…", choix: ["des gisements au Sénégal", "une ville d'Éthiopie", "un fleuve du Kenya"], r: "des gisements au Sénégal", expl: "Les gisements des Madeleines sont au Sénégal, au large de Dakar." },
      { t: "saisie", q: "Complète : le parc du Niokolo-… (écris la fin du nom)", r: "Koba", expl: "Le Niokolo-Koba est cité parmi les sites préhistoriques du Sénégal." },
      { t: "vf", q: "Les premiers hommes ont été trouvés en Europe.", r: false, expl: "Ils ont été trouvés en Afrique : c'est pour cela qu'elle est le berceau de l'humanité." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["La Terre existe depuis des milliards d'années.", "La Terre existe depuis 2 000 ans.", "La Terre existe depuis l'hégire."], r: "La Terre existe depuis des milliards d'années.", expl: "C'est ce que dit la leçon." },
      { t: "relier", q: "Relie.", paires: [["IFAN", "Institut fondamental d'Afrique noire"], ["berceau de l'humanité", "l'Afrique"], ["site de Dakar", "la pointe de Fann"]], expl: "Trois idées de la leçon." },
      { t: "vf", q: "Bel-Air est un site préhistorique du Kenya.", r: false, expl: "Bel-Air est un site préhistorique du Sénégal (à Dakar)." },
      { t: "qcm", q: "Que montrent les outils découverts par l'IFAN au Sénégal ?", choix: ["que des hommes vivaient au Sénégal pendant la préhistoire", "que le Sénégal n'existait pas", "que les outils viennent tous d'Europe"], r: "que des hommes vivaient au Sénégal pendant la préhistoire", expl: "Un outillage préhistorique est une trace (source muette) de la présence humaine." },
      { t: "classer", q: "Range ces mots.", cases: ["pays d'Afrique", "site du Sénégal"], items: [["l'Éthiopie", "pays d'Afrique"], ["les Madeleines", "site du Sénégal"], ["le Niger", "pays d'Afrique"], ["Bel-Air", "site du Sénégal"], ["le Maroc", "pays d'Afrique"]], expl: "Les sites du Sénégal sont Fann, Bel-Air, les Madeleines, le Niokolo-Koba…" },
      { t: "saisie", q: "Quel continent est le berceau de l'humanité ?", r: "l'Afrique", expl: "L'Afrique, car on y a trouvé les squelettes des premiers hommes." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'Afrique est le berceau de l'[humanité]. Au Sénégal, les sites préhistoriques sont la pointe de [Fann], le site de [Bel-Air], les gisements des Madeleines et le Niokolo-Koba. L'outillage a été découvert par l'[IFAN] au début du [20]e siècle.", expl: "Résumé complet." },
      { t: "qcm", q: "Awa visite la pointe de Fann avec sa classe. Le maître dit que c'est un site préhistorique. Cela veut dire…", choix: ["qu'on y a trouvé des traces d'hommes de la préhistoire", "qu'on y a construit une usine", "qu'un roi y habitait au 16e siècle"], r: "qu'on y a trouvé des traces d'hommes de la préhistoire", expl: "Un site préhistorique garde des traces (outils, restes) des hommes de la préhistoire." },
      { t: "vf", q: "L'outillage préhistorique du Sénégal a été découvert au début du 20e siècle.", r: true, expl: "Par des chercheurs de l'IFAN." },
      { t: "qcm", q: "Lequel n'est PAS un site préhistorique du Sénégal cité dans la leçon ?", choix: ["la Tanzanie", "la pointe de Fann", "Bel-Air", "le Niokolo-Koba"], r: "la Tanzanie", expl: "La Tanzanie est un pays d'Afrique de l'Est, pas un site du Sénégal." },
      { t: "classer", q: "Vrai résumé ou erreur ?", cases: ["juste", "faux"], items: [["L'Afrique est le berceau de l'humanité.", "juste"], ["L'IFAN a découvert des outils au Sénégal.", "juste"], ["Les premiers hommes viennent d'Amérique.", "faux"], ["La Terre a 100 ans.", "faux"]], expl: "Relis la leçon : la Terre a des milliards d'années, les premiers hommes viennent d'Afrique." }
    ]
  ]
});


/* ---- hi-prehistoire.js ---- */
LECONS.push({
  id: "hi-prehistoire",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La préhistoire et ses caractéristiques (Paléolithique et Néolithique)",
  date: "2026-09-24",
  photos: ["DJI_20261118222051_0139_D.jpg", "DJI_20261118222101_0140_D.jpg"],
  retiens:
    "<p>La <b>préhistoire</b> désigne à la fois la <b>période</b> où l'homme a vécu avant l'histoire, et la <b>science</b> qui étudie ce passé humain jusqu'au travail des métaux.</p>" +
    "<p>Pendant cette période, les outils et les techniques de production ont évolué :</p>" +
    "<ul><li>l'homme a d'abord connu l'<b>âge de la pierre taillée</b>, ou <b>Paléolithique</b> : il est un <b>prédateur nomade</b> qui vit de chasse, de pêche et de cueillette ;</li>" +
    "<li>il devient ensuite, pendant l'<b>âge de la pierre polie</b>, ou <b>Néolithique</b>, un <b>producteur sédentaire</b> qui pratique l'agriculture et l'élevage.</li></ul>" +
    "<table><tr><th></th><th>Paléolithique</th><th>Néolithique</th></tr>" +
    "<tr><td><b>Outils et armes</b></td><td>pierre taillée, bifaces, outils en os (harpons…)</td><td>pierre polie (meule, hameçon, couteau…)</td></tr>" +
    "<tr><td><b>Activités</b></td><td>chasse, pêche, cueillette</td><td>élevage, agriculture, pêche, poterie, tissage…</td></tr>" +
    "<tr><td><b>Habitat</b></td><td>grottes, cavernes, huttes</td><td>villages, cases…</td></tr>" +
    "<tr><td><b>Alimentation</b></td><td>aliments crus, fruits</td><td>aliments cuits (découverte du feu)</td></tr>" +
    "<tr><td><b>Organisation sociale</b></td><td>nomadisme, vie en communauté</td><td>sédentarisme (division du travail…), enterrement des morts</td></tr></table>",
  astuce: "<b>Paléo</b>lithique = pierre taillée, on se <b>promène</b> (nomade). <b>Néo</b>lithique = pierre polie, on reste au village (sédentaire) : <b>n</b>éo comme <b>n</b>ouveau.",
  regle: "Au Paléolithique (pierre taillée), l'homme est un prédateur nomade : chasse, pêche, cueillette. Au Néolithique (pierre polie), il devient un producteur sédentaire : agriculture, élevage, villages.",
  niveaux: [
    [
      { t: "qcm", q: "La préhistoire, c'est la période où l'homme a vécu…", choix: ["avant l'histoire", "après l'invention de l'écriture", "au temps des empires"], r: "avant l'histoire", expl: "La préhistoire va jusqu'au travail des métaux, avant l'histoire." },
      { t: "qcm", q: "Le Paléolithique est aussi appelé l'âge de la pierre…", choix: ["taillée", "polie", "dorée"], r: "taillée", expl: "Paléolithique = âge de la pierre taillée." },
      { t: "qcm", q: "Le Néolithique est aussi appelé l'âge de la pierre…", choix: ["polie", "taillée", "cassée"], r: "polie", expl: "Néolithique = âge de la pierre polie." },
      { t: "vf", q: "Au Paléolithique, l'homme est un nomade qui vit de chasse, de pêche et de cueillette.", r: true, expl: "C'est un prédateur nomade : il prend dans la nature ce qu'il trouve." },
      { t: "vf", q: "Au Néolithique, l'homme pratique l'agriculture et l'élevage.", r: true, expl: "Il devient un producteur sédentaire." },
      { t: "classer", q: "Range chaque activité dans la bonne période.", cases: ["Paléolithique", "Néolithique"], items: [["la cueillette", "Paléolithique"], ["l'agriculture", "Néolithique"], ["la chasse", "Paléolithique"], ["l'élevage", "Néolithique"], ["la poterie", "Néolithique"], ["le tissage", "Néolithique"]], expl: "Paléolithique : on prend dans la nature. Néolithique : on produit." }
    ],
    [
      { t: "classer", q: "Range chaque habitat dans la bonne période.", cases: ["Paléolithique", "Néolithique"], items: [["les grottes", "Paléolithique"], ["les cavernes", "Paléolithique"], ["les villages", "Néolithique"], ["les cases", "Néolithique"], ["les huttes", "Paléolithique"]], expl: "Le nomade s'abrite dans des grottes, des cavernes, des huttes ; le sédentaire construit des villages et des cases." },
      { t: "classer", q: "Range chaque outil dans la bonne période.", cases: ["Paléolithique", "Néolithique"], items: [["le biface", "Paléolithique"], ["le harpon en os", "Paléolithique"], ["la meule en pierre polie", "Néolithique"], ["l'hameçon en pierre polie", "Néolithique"], ["la pierre taillée", "Paléolithique"]], expl: "Pierre taillée et os au Paléolithique ; pierre polie au Néolithique." },
      { t: "qcm", q: "Que mangeait surtout l'homme du Paléolithique ?", choix: ["des aliments crus et des fruits", "du riz cuit", "du pain"], r: "des aliments crus et des fruits", expl: "Au Paléolithique, les aliments sont crus ; la cuisson vient au Néolithique dans le tableau du cahier." },
      { t: "qcm", q: "Au Néolithique, les aliments sont…", choix: ["cuits, grâce au feu", "toujours crus", "achetés au marché"], r: "cuits, grâce au feu", expl: "Le tableau du cahier indique la cuisson des aliments avec la découverte du feu." },
      { t: "saisie", q: "Comment appelle-t-on un homme qui se déplace sans cesse et n'a pas de demeure fixe ?", r: "nomade", aide: "C'est le contraire de sédentaire.", expl: "Le nomade se déplace ; le sédentaire reste sur place." },
      { t: "saisie", q: "Comment appelle-t-on un homme qui reste vivre au même endroit ?", r: "sédentaire", expl: "Au Néolithique, l'homme devient sédentaire." },
      { t: "relier", q: "Relie chaque période à son autre nom.", paires: [["Paléolithique", "âge de la pierre taillée"], ["Néolithique", "âge de la pierre polie"]], expl: "Ce sont les deux grandes périodes de la préhistoire." },
      { t: "vf", q: "L'enterrement des morts apparaît au Néolithique, d'après ton tableau.", r: true, expl: "Le tableau le place dans l'organisation sociale du Néolithique." },
      { t: "trous", q: "Complète.", texte: "Au Paléolithique, l'homme est un [prédateur] nomade. Au Néolithique, il devient un [producteur] sédentaire.", expl: "Le prédateur prend dans la nature ; le producteur fait pousser et élève." }
    ],
    [
      { t: "qcm", q: "Pourquoi l'homme du Néolithique est-il devenu sédentaire ?", choix: ["parce qu'il cultivait ses champs et élevait ses bêtes", "parce qu'il n'avait plus de jambes", "parce qu'il habitait des grottes"], r: "parce qu'il cultivait ses champs et élevait ses bêtes", expl: "Pour s'occuper des cultures et des troupeaux, il faut rester sur place : on construit des villages." },
      { t: "vf", q: "La préhistoire est seulement une période : ce n'est pas une science.", r: false, expl: "Le mot désigne à la fois la période ET la science qui étudie ce passé." },
      { t: "qcm", q: "Un chasseur suit les troupeaux d'antilopes et dort dans une grotte. À quelle période vit-il ?", choix: ["au Paléolithique", "au Néolithique"], r: "au Paléolithique", expl: "Chasse, déplacements et grottes : c'est le Paléolithique." },
      { t: "qcm", q: "Une famille cultive du mil, fabrique des pots en terre et vit dans une case. À quelle période ?", choix: ["au Néolithique", "au Paléolithique"], r: "au Néolithique", expl: "Agriculture, poterie et case : c'est le Néolithique." },
      { t: "classer", q: "Range ces mots.", cases: ["Paléolithique", "Néolithique"], items: [["prédateur", "Paléolithique"], ["producteur", "Néolithique"], ["nomadisme", "Paléolithique"], ["sédentarisme", "Néolithique"], ["division du travail", "Néolithique"], ["vie en communauté nomade", "Paléolithique"]], expl: "Le Néolithique est le temps des producteurs sédentaires." },
      { t: "saisie", q: "Jusqu'à quelle grande découverte va la préhistoire ? Le travail des …", r: "métaux", expl: "La préhistoire étudie le passé humain jusqu'au travail des métaux." },
      { t: "vf", q: "Le biface est un outil en pierre polie du Néolithique.", r: false, expl: "Le biface est en pierre taillée : il date du Paléolithique." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Pendant la préhistoire, l'homme a d'abord connu l'âge de la pierre [taillée], ou [Paléolithique]. Il vivait de chasse, de pêche et de [cueillette]. Puis, pendant l'âge de la pierre [polie], ou Néolithique, il a pratiqué l'agriculture et l'[élevage].", expl: "Résumé de la leçon." },
      { t: "relier", q: "Relie chaque caractéristique du Néolithique à son domaine.", paires: [["la pierre polie", "outils"], ["l'agriculture", "activités"], ["les villages", "habitat"], ["les aliments cuits", "alimentation"], ["le sédentarisme", "organisation sociale"]], expl: "Ce sont les colonnes du tableau du cahier." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["L'homme passe de la vie nomade à la vie sédentaire.", "L'homme passe de la vie sédentaire à la vie nomade.", "L'homme a toujours vécu dans des villages."], r: "L'homme passe de la vie nomade à la vie sédentaire.", expl: "Du Paléolithique (nomade) au Néolithique (sédentaire)." },
      { t: "vf", q: "Au Paléolithique, l'homme vit de chasse, de pêche et d'agriculture.", r: false, expl: "L'agriculture apparaît au Néolithique. Au Paléolithique, c'est la cueillette." },
      { t: "classer", q: "Défi : range tout ce que tu sais.", cases: ["Paléolithique", "Néolithique"], items: [["harpon en os", "Paléolithique"], ["tissage", "Néolithique"], ["caverne", "Paléolithique"], ["case", "Néolithique"], ["fruits crus", "Paléolithique"], ["enterrement des morts", "Néolithique"], ["chasse", "Paléolithique"], ["élevage", "Néolithique"]], expl: "Pierre taillée et vie nomade d'un côté ; pierre polie et vie au village de l'autre." }
    ]
  ]
});


/* ---- hi-royaumes-senegal.js ---- */
// À VÉRIFIER : le cahier (photo 0153) écrit « En 1549 (17e siècle) ». L'année 1549 appartient au 16e siècle ; le module écrit 16e siècle.
LECONS.push({
  id: "hi-royaumes-senegal",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Les royaumes du Sénégal avant l'arrivée des Blancs en Afrique",
  date: "2026-11-16",
  photos: ["DJI_20261118222216_0153_D.jpg"],
  retiens:
    "<p>Avant l'arrivée des Blancs, le Sénégal était formé d'<b>États</b> (royaumes) construits par des populations qui avaient le même passé et étaient liées par la parenté de sang ou la <b>parenté à plaisanterie</b>.</p>" +
    "<p>Les sociétés étaient stables et divisées en <b>castes</b>.</p>" +
    "<p>Le choix du roi se faisait selon les règles du <b>matrilignage</b> (par la lignée de la mère).</p>" +
    "<p>L'économie reposait sur l'<b>agriculture</b>, l'<b>élevage</b>, la <b>pêche</b> et les <b>échanges</b> avec les empires du Soudan et les Arabo-Berbères du Sahara.</p>" +
    "<p>En <b>1549</b> (16<sup>e</sup> siècle), <b>Amary Ngoné Sobel Fall</b> remporta une brillante victoire à <b>Danki</b> sur le <b>Grand Djolof</b>. Ainsi, plusieurs royaumes vassaux comme le <b>Cayor</b>, le <b>Baol</b>, le <b>Walo</b>, le <b>Sine</b>, le <b>Saloum</b>… ont réussi peu à peu à se libérer de la domination du Djolof.</p>",
  astuce: "1549 : le « 15 » ne donne pas le siècle ! De 1501 à 1600, c'est le <b>16<sup>e</sup></b> siècle.",
  regle: "Les royaumes du Sénégal avaient des sociétés en castes et choisissaient le roi par le matrilignage. En 1549, à Danki, Amary Ngoné Sobel Fall bat le Grand Djolof : le Cayor, le Baol, le Walo, le Sine, le Saloum se libèrent.",
  niveaux: [
    [
      { t: "qcm", q: "Avant l'arrivée des Blancs, comment était organisé le Sénégal ?", choix: ["en plusieurs États (royaumes)", "en un seul pays avec un président", "en colonies"], r: "en plusieurs États (royaumes)", expl: "Le Sénégal était formé de plusieurs royaumes." },
      { t: "vf", q: "Les sociétés de ces royaumes étaient divisées en castes.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "qcm", q: "Qui a remporté la victoire de Danki en 1549 ?", choix: ["Amary Ngoné Sobel Fall", "Soundiata Keïta", "Askia Mohammed"], r: "Amary Ngoné Sobel Fall", expl: "Amary Ngoné Sobel Fall a battu le Grand Djolof." },
      { t: "qcm", q: "Contre quel royaume a eu lieu la bataille de Danki ?", choix: ["le Grand Djolof", "le Ghana", "le Maroc"], r: "le Grand Djolof", expl: "Amary Ngoné Sobel Fall a battu le Grand Djolof." },
      { t: "vf", q: "Le roi était choisi selon les règles du matrilignage.", r: true, expl: "Matrilignage : on suit la lignée de la mère." }
    ],
    [
      { t: "saisie", q: "En quelle année a eu lieu la bataille de Danki ?", r: "1549", nombre: true, expl: "En 1549." },
      { t: "qcm", q: "À quel siècle appartient l'année 1549 ?", choix: ["au 16e siècle", "au 15e siècle", "au 17e siècle"], r: "au 16e siècle", aide: "Le 16e siècle va de 1501 à 1600.", expl: "1549 est entre 1501 et 1600 : c'est le 16e siècle." },
      { t: "classer", q: "Range ces noms.", cases: ["royaume vassal libéré", "royaume dominant"], items: [["le Cayor", "royaume vassal libéré"], ["le Baol", "royaume vassal libéré"], ["le Walo", "royaume vassal libéré"], ["le Grand Djolof", "royaume dominant"], ["le Sine", "royaume vassal libéré"], ["le Saloum", "royaume vassal libéré"]], expl: "Le Djolof dominait ; les autres royaumes se sont libérés après Danki." },
      { t: "qcm", q: "Sur quoi reposait l'économie des royaumes ?", choix: ["l'agriculture, l'élevage, la pêche et les échanges", "les usines et le pétrole", "le tourisme"], r: "l'agriculture, l'élevage, la pêche et les échanges", expl: "Ils échangeaient aussi avec les empires du Soudan et les Arabo-Berbères." },
      { t: "trous", q: "Complète.", texte: "En [1549], Amary Ngoné Sobel Fall remporta une victoire à [Danki] sur le Grand [Djolof].", expl: "La bataille de Danki." },
      { t: "vf", q: "Après Danki, le Cayor et le Baol se sont libérés du Djolof.", r: true, expl: "Plusieurs royaumes vassaux se sont libérés peu à peu." },
      { t: "qcm", q: "Avec qui les royaumes du Sénégal faisaient-ils des échanges ?", choix: ["avec les empires du Soudan et les Arabo-Berbères du Sahara", "avec l'Amérique", "avec la Chine"], r: "avec les empires du Soudan et les Arabo-Berbères du Sahara", expl: "C'est ce que dit la leçon." },
      { t: "saisie", q: "Où Amary Ngoné Sobel Fall a-t-il remporté sa victoire ?", r: "Danki", expl: "À Danki, en 1549." }
    ],
    [
      { t: "qcm", q: "Que veut dire « royaume vassal » ?", choix: ["un royaume soumis à un autre royaume", "un royaume très riche", "un royaume au bord de la mer"], r: "un royaume soumis à un autre royaume", expl: "Le Cayor, le Baol, le Walo… étaient soumis au Djolof avant de se libérer." },
      { t: "vf", q: "1549 appartient au 15e siècle.", r: false, expl: "1549 appartient au 16e siècle (de 1501 à 1600)." },
      { t: "qcm", q: "Les populations de ces royaumes étaient unies par…", choix: ["un même passé, la parenté de sang ou la parenté à plaisanterie", "une même usine", "une même équipe de football"], r: "un même passé, la parenté de sang ou la parenté à plaisanterie", expl: "La parenté à plaisanterie lie encore aujourd'hui des familles et des ethnies du Sénégal." },
      { t: "classer", q: "Range : vrai ou faux ?", cases: ["vrai", "faux"], items: [["Le Djolof dominait plusieurs royaumes.", "vrai"], ["Les sociétés étaient divisées en castes.", "vrai"], ["Le roi était élu par tout le peuple.", "faux"], ["Danki a eu lieu en 1235.", "faux"]], expl: "Le roi était choisi par le matrilignage ; Danki date de 1549 (1235, c'est Kirina)." },
      { t: "saisie", q: "Quel royaume a été battu à Danki ? Le Grand …", r: "Djolof", expl: "Le Grand Djolof." },
      { t: "relier", q: "Relie.", paires: [["Danki", "victoire de 1549"], ["Amary Ngoné Sobel Fall", "vainqueur de Danki"], ["matrilignage", "choix du roi par la lignée de la mère"], ["castes", "division de la société"]], expl: "Les mots-clés de la leçon." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Avant l'arrivée des Blancs, le Sénégal était formé de plusieurs [royaumes]. Les sociétés étaient divisées en [castes]. En 1549, au [16]e siècle, Amary Ngoné Sobel Fall battit le Grand Djolof à [Danki]. Le Cayor, le Baol, le Walo, le Sine et le [Saloum] se libérèrent peu à peu.", expl: "Toute la leçon en un texte." },
      { t: "relier", q: "Ne confonds pas les batailles : relie chaque bataille à sa date.", paires: [["Kirina", "1235"], ["Danki", "1549"]], expl: "Kirina : Soundiata (Mali). Danki : Amary Ngoné Sobel Fall (Sénégal)." },
      { t: "probleme", q: "La bataille de Kirina a eu lieu en 1235 et celle de Danki en 1549.", etapes: [{ q: "Combien d'années séparent ces deux batailles ?", r: "314", unite: "ans" }], expl: "1549 − 1235 = 314." },
      { t: "qcm", q: "Lequel de ces noms n'est PAS un royaume du Sénégal cité dans la leçon ?", choix: ["Niani", "Cayor", "Walo", "Sine"], r: "Niani", expl: "Niani est la capitale de l'empire du Mali." },
      { t: "vf", q: "Après la victoire de Danki, le Djolof est devenu encore plus puissant.", r: false, expl: "Au contraire, ses royaumes vassaux ont commencé à se libérer." }
    ]
  ]
});


/* ---- hi-societes-africaines.js ---- */
LECONS.push({
  id: "hi-societes-africaines",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'évolution des sociétés africaines",
  date: "2026-10-05",
  photos: ["DJI_20261118222107_0141_D.jpg", "DJI_20261118222115_0142_D.jpg"],
  retiens:
    "<p>L'organisation de la société africaine repose sur <b>cinq structures</b> :</p>" +
    "<ul><li>la <b>famille</b> est la cellule de base de la société ;</li>" +
    "<li>le <b>clan</b> est un ensemble plus ou moins étendu de personnes unies par des liens de sang et qui se considèrent comme descendants d'un même ancêtre ;</li>" +
    "<li>la <b>tribu</b> est un groupe social et politique lié par une solidarité de parenté ethnique ;</li>" +
    "<li>l'<b>ethnie</b> est un ensemble uni par des caractères communs de civilisation et de culture ;</li>" +
    "<li>le <b>royaume</b> est un État gouverné par un roi (Angleterre, Maroc…).</li></ul>",
  astuce: "Du plus petit au plus grand : <b>F</b>amille, <b>C</b>lan, <b>T</b>ribu, <b>E</b>thnie, <b>R</b>oyaume.",
  regle: "La famille est la cellule de base ; le clan descend d'un même ancêtre ; la tribu est unie par la parenté ethnique ; l'ethnie partage une culture ; le royaume est un État gouverné par un roi.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de structures organisent la société africaine dans ta leçon ?", choix: ["cinq", "trois", "deux"], r: "cinq", expl: "Famille, clan, tribu, ethnie, royaume." },
      { t: "qcm", q: "Quelle est la cellule de base de la société ?", choix: ["la famille", "le royaume", "l'ethnie"], r: "la famille", expl: "La famille est la cellule de base de la société." },
      { t: "vf", q: "Le royaume est un État gouverné par un roi.", r: true, expl: "Exemples cités : l'Angleterre, le Maroc." },
      { t: "qcm", q: "Les membres d'un clan se considèrent comme descendants…", choix: ["d'un même ancêtre", "d'un même roi étranger", "d'une même ville"], r: "d'un même ancêtre", expl: "Le clan est uni par des liens de sang et un ancêtre commun." },
      { t: "vf", q: "L'ethnie est un ensemble uni par une culture et une civilisation communes.", r: true, expl: "C'est la définition de l'ethnie." }
    ],
    [
      { t: "relier", q: "Relie chaque structure à sa définition.", paires: [["la famille", "la cellule de base"], ["le clan", "un même ancêtre"], ["la tribu", "une solidarité de parenté ethnique"], ["l'ethnie", "une culture commune"], ["le royaume", "un État gouverné par un roi"]], expl: "Ce sont les cinq définitions de la leçon." },
      { t: "saisie", q: "Comment appelle-t-on un État gouverné par un roi ?", r: "un royaume", expl: "Un royaume est un État gouverné par un roi." },
      { t: "qcm", q: "Lequel de ces pays est donné en exemple de royaume ?", choix: ["le Maroc", "le Sénégal", "le Mali"], r: "le Maroc", expl: "La leçon cite l'Angleterre et le Maroc." },
      { t: "trous", q: "Complète.", texte: "La [famille] est la cellule de base de la société. Le [royaume] est un État gouverné par un roi.", expl: "Le plus petit et le plus grand groupe." },
      { t: "vf", q: "Le clan est uni par des liens de sang.", r: true, expl: "Les membres du clan se considèrent comme descendants d'un même ancêtre." },
      { t: "qcm", q: "La tribu est un groupe…", choix: ["social et politique", "seulement sportif", "de commerçants étrangers"], r: "social et politique", expl: "La tribu est un groupe social et politique lié par une parenté ethnique." },
      { t: "saisie", q: "Quelle structure est la cellule de base de la société ?", r: "la famille", expl: "C'est la famille." },
      { t: "vf", q: "L'ethnie est plus petite que la famille.", r: false, expl: "La famille est la plus petite structure ; l'ethnie regroupe beaucoup de personnes." }
    ],
    [
      { t: "qcm", q: "Range du plus petit au plus grand groupe. Laquelle de ces suites est juste ?", choix: ["famille – clan – tribu – ethnie – royaume", "royaume – famille – clan – tribu – ethnie", "clan – famille – royaume – tribu – ethnie"], r: "famille – clan – tribu – ethnie – royaume", expl: "C'est l'ordre de la leçon, du plus petit au plus grand." },
      { t: "qcm", q: "Plusieurs familles Diop qui disent toutes descendre d'un même ancêtre forment…", choix: ["un clan", "un royaume", "une école"], r: "un clan", expl: "Un clan rassemble des personnes qui se considèrent comme descendants d'un même ancêtre." },
      { t: "qcm", q: "Le papa, la maman et leurs enfants forment…", choix: ["une famille", "une ethnie", "un royaume"], r: "une famille", expl: "C'est la cellule de base : la famille." },
      { t: "vf", q: "Une ethnie partage une même langue, des coutumes et une culture.", r: true, expl: "L'ethnie est unie par des caractères communs de civilisation et de culture." },
      { t: "classer", q: "Range : groupe de parenté ou État ?", cases: ["groupe de parenté", "État"], items: [["la famille", "groupe de parenté"], ["le clan", "groupe de parenté"], ["le royaume", "État"], ["la tribu", "groupe de parenté"], ["le royaume du Maroc", "État"]], expl: "Famille, clan et tribu reposent sur la parenté ; le royaume est un État." },
      { t: "saisie", q: "Comment appelle-t-on le chef d'un royaume ?", r: "le roi", expl: "Un royaume est gouverné par un roi." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La société africaine repose sur cinq structures : la [famille], le [clan], la [tribu], l'[ethnie] et le [royaume].", expl: "Du plus petit au plus grand." },
      { t: "relier", q: "Relie chaque exemple à la structure qui convient.", paires: [["Moussa, ses parents et sa sœur", "une famille"], ["l'Angleterre", "un royaume"], ["des descendants d'un même ancêtre", "un clan"], ["un peuple qui partage langue et coutumes", "une ethnie"]], expl: "On applique les définitions de la leçon." },
      { t: "vf", q: "Le royaume est la cellule de base de la société.", r: false, expl: "La cellule de base, c'est la famille." },
      { t: "qcm", q: "Quel mot complète la phrase ? « Le … est un groupe social et politique lié par une solidarité de parenté ethnique. »", choix: ["la tribu", "le royaume", "la famille"], r: "la tribu", expl: "C'est la définition de la tribu." },
      { t: "classer", q: "Défi : range ces phrases.", cases: ["juste", "faux"], items: [["Le clan descend d'un même ancêtre.", "juste"], ["La famille est la cellule de base.", "juste"], ["Le royaume est gouverné par un pêcheur.", "faux"], ["L'ethnie n'a aucune culture commune.", "faux"]], expl: "Relis les cinq définitions." }
    ]
  ]
});


/* ---- ma-mes-capacites.js ---- */
LECONS.push({
  id: "ma-mes-capacites",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de capacité",
  date: "2026-09-22",
  photos: ["DJI_20261118220814_0065_D.jpg"],
  retiens:
    "<p>Pour mesurer des liquides (eau, huile, lait…), on utilise des mesures de capacité.</p>" +
    "<p>Le <b>litre (l)</b> est l'unité principale des mesures de capacité.</p>" +
    "<ul><li>Les <b>multiples</b> du litre sont : le décalitre (<b>dal</b>) et l'hectolitre (<b>hl</b>).</li>" +
    "<li>Les <b>sous-multiples</b> du litre sont : le décilitre (<b>dl</b>), le centilitre (<b>cl</b>) et le millilitre (<b>ml</b>).</li></ul>" +
    "<table><tr><th>hl</th><th>dal</th><th>l</th><th>dl</th><th>cl</th><th>ml</th></tr>" +
    "<tr><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>" +
    "<p>On lit dans le tableau : 1 hl = 100 l et 1 l = 1 000 ml. Comme pour les longueurs, on passe d'une colonne à l'autre en multipliant ou en divisant par 10.</p>",
  astuce: "Les préfixes sont les mêmes que pour le mètre : <b>déca</b> (10), <b>hecto</b> (100), <b>déci</b>, <b>centi</b>, <b>milli</b>. Seule l'unité change : l au lieu de m.",
  regle: "Dans le tableau hl, dal, l, dl, cl, ml, chaque unité vaut 10 fois celle qui est à sa droite.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle est l'unité principale des mesures de capacité ?", choix: ["le litre", "le mètre", "le gramme", "le centilitre"], r: "le litre", expl: "On mesure les liquides en litres : c'est l'unité principale." },
      { t: "qcm", q: "Avec quelle mesure exprime-t-on la quantité d'huile dans une bouteille ?", choix: ["une mesure de capacité", "une mesure de longueur", "une mesure de masse"], r: "une mesure de capacité", expl: "L'huile est un liquide : on la mesure en litres, c'est une capacité." },
      { t: "classer", q: "Multiple ou sous-multiple du litre ?", cases: ["multiple du litre", "sous-multiple du litre"], items: [["hl", "multiple du litre"], ["cl", "sous-multiple du litre"], ["dal", "multiple du litre"], ["ml", "sous-multiple du litre"], ["dl", "sous-multiple du litre"]], expl: "Multiples : dal, hl. Sous-multiples : dl, cl, ml." },
      { t: "relier", q: "Relie chaque abréviation à son nom.", paires: [["hl", "hectolitre"], ["dal", "décalitre"], ["dl", "décilitre"], ["cl", "centilitre"], ["ml", "millilitre"]], expl: "Les préfixes sont les mêmes qu'avec le mètre." },
      { t: "vf", q: "1 hl = 100 l.", r: true, expl: "hl, dal, l : deux colonnes, donc 1 hl = 100 l." },
      { t: "trous", q: "Complète l'ordre des unités, de la plus grande à la plus petite.", texte: "hl — [dal] — l — [dl] — cl — [ml]", expl: "hl, dal, l, dl, cl, ml." }
    ],
    [
      { t: "saisie", q: "4 l = … dl", r: "40", nombre: true, unite: "dl", expl: "1 l = 10 dl, donc 4 l = 40 dl." },
      { t: "saisie", q: "2 l = … cl", r: "200", nombre: true, unite: "cl", expl: "1 l = 100 cl, donc 2 l = 200 cl." },
      { t: "saisie", q: "3 l = … ml", r: "3000", nombre: true, unite: "ml", expl: "1 l = 1 000 ml, donc 3 l = 3 000 ml." },
      { t: "saisie", q: "5 hl = … l", r: "500", nombre: true, unite: "l", expl: "1 hl = 100 l, donc 5 hl = 500 l." },
      { t: "saisie", q: "6 dal = … l", r: "60", nombre: true, unite: "l", expl: "1 dal = 10 l, donc 6 dal = 60 l." },
      { t: "saisie", q: "20 dl = … l", r: "2", nombre: true, unite: "l", expl: "10 dl = 1 l, donc 20 dl = 2 l." },
      { t: "saisie", q: "4 000 ml = … l", r: "4", nombre: true, unite: "l", expl: "1 000 ml = 1 l, donc 4 000 ml = 4 l." },
      { t: "saisie", q: "7 cl = … ml", r: "70", nombre: true, unite: "ml", expl: "1 cl = 10 ml, donc 7 cl = 70 ml." },
      { t: "relier", q: "Relie les capacités égales.", paires: [["1 hl", "100 l"], ["1 dal", "10 l"], ["1 l", "100 cl"], ["1 dl", "10 cl"], ["1 cl", "10 ml"]], expl: "Chaque unité vaut 10 fois celle qui la suit dans le tableau." }
    ],
    [
      { t: "saisie", q: "250 cl = … l", r: "2,5", nombre: true, unite: "l", expl: "250 cl = 2 l 50 cl = 2,5 l." },
      { t: "saisie", q: "1,5 l = … cl", r: "150", nombre: true, unite: "cl", expl: "1,5 l = 1 l 5 dl = 150 cl." },
      { t: "saisie", q: "750 ml = … l", r: "0,75", nombre: true, unite: "l", expl: "750 ml = 0 l 7 dl 5 cl = 0,75 l." },
      { t: "saisie", q: "33 cl = … ml", r: "330", nombre: true, unite: "ml", expl: "1 cl = 10 ml, donc 33 cl = 330 ml." },
      { t: "saisie", q: "2 hl 5 l = … l", r: "205", nombre: true, unite: "l", expl: "2 hl = 200 l ; 200 l + 5 l = 205 l." },
      { t: "qcm", q: "Quelle capacité est la plus grande ?", choix: ["1 l", "90 cl", "800 ml", "9 dl"], r: "1 l", aide: "Convertis tout en centilitres.", expl: "1 l = 100 cl ; 90 cl ; 800 ml = 80 cl ; 9 dl = 90 cl. C'est 1 l." },
      { t: "vf", q: "1 l = 100 ml.", r: false, expl: "Entre l et ml, il y a trois colonnes : 1 l = 1 000 ml." }
    ],
    [
      { t: "probleme", q: "La maman d'Awa achète 3 bouteilles d'huile de 1,5 l chacune.", etapes: [{ q: "Étape 1 : quantité totale d'huile (en l)", r: "4,5", unite: "l" }, { q: "Étape 2 : cette quantité en cl", r: "450", unite: "cl" }], expl: "1,5 l × 3 = 4,5 l ; 4,5 l = 450 cl." },
      { t: "probleme", q: "Un bidon contient 20 l de jus de bissap. On le verse dans des bouteilles de 50 cl.", etapes: [{ q: "Étape 1 : 20 l en cl", r: "2000", unite: "cl" }, { q: "Étape 2 : nombre de bouteilles remplies", r: "40" }], expl: "20 l = 2 000 cl ; 2 000 cl : 50 cl = 40 bouteilles. On convertit d'abord pour avoir la même unité." },
      { t: "probleme", q: "Pour remplir un fût de 2 hl, Mamadou apporte l'eau du puits avec un seau de 10 l.", etapes: [{ q: "Étape 1 : capacité du fût en l", r: "200", unite: "l" }, { q: "Étape 2 : nombre de seaux nécessaires", r: "20" }], expl: "2 hl = 200 l ; 200 l : 10 l = 20 seaux." },
      { t: "probleme", q: "Une théière contient 75 cl de thé. Khady sert 6 verres de 10 cl.", etapes: [{ q: "Étape 1 : thé servi (en cl)", r: "60", unite: "cl" }, { q: "Étape 2 : thé qui reste dans la théière (en cl)", r: "15", unite: "cl" }], expl: "10 cl × 6 = 60 cl ; 75 cl − 60 cl = 15 cl." },
      { t: "trous", q: "Complète.", nombre: true, texte: "3 dal = [30] l — 1 l = [10] dl — 0,5 l = [50] cl — 1 200 ml = [1,2|1.2] l", expl: "3 dal = 30 l ; 1 l = 10 dl ; 0,5 l = 50 cl ; 1 200 ml = 1,2 l." }
    ]
  ]
});


/* ---- ma-mes-intervalles.js ---- */
LECONS.push({
  id: "ma-mes-intervalles",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les intervalles",
  date: "2026-11-05",
  photos: ["DJI_20261118221212_0090_D.jpg", "DJI_20261118221215_0091_D.jpg"],
  retiens:
    "<p>Un <b>intervalle</b> est l'espace entre deux objets voisins (arbres, poteaux, piquets…). On note NO le nombre d'objets et NI le nombre d'intervalles.</p>" +
    "<p><b>Sur une ligne fermée</b> (cercle, tour d'un champ) :</p>" +
    "<p><b>Nombre d'intervalles = nombre d'objets</b> (NI = NO). Exemple : 6 arbres autour d'un cercle → 6 intervalles ; 4 objets aux coins d'un rectangle → 4 intervalles.</p>" +
    "<p><b>Sur une ligne ouverte</b> (une rue, un côté de champ), le nombre d'objets n'est pas toujours égal au nombre d'intervalles. Il faut chaque fois faire un <b>croquis</b>.</p>" +
    "<table><tr><th>Ligne ouverte</th><th>Règle</th></tr>" +
    "<tr><td>un objet à une seule extrémité</td><td>NO = NI</td></tr>" +
    "<tr><td>un objet à chaque extrémité</td><td>NO = NI + 1</td></tr>" +
    "<tr><td>rien aux extrémités</td><td>NO = NI − 1</td></tr></table>",
  astuce: "Fais le croquis avec tes doigts : 3 doigts levés, il y a 2 espaces entre eux. Avec un objet à chaque bout, il y a <b>un intervalle de moins</b> que d'objets.",
  regle: "Ligne fermée : autant d'intervalles que d'objets. Ligne ouverte avec un objet à chaque bout : un intervalle de moins ; sans objet aux bouts : un intervalle de plus ; avec un objet à un seul bout : autant.",
  niveaux: [
    [
      { t: "qcm", q: "Qu'est-ce qu'un intervalle ?", choix: ["l'espace entre deux objets voisins", "le nombre d'objets", "la longueur totale de la ligne"], r: "l'espace entre deux objets voisins", expl: "Un intervalle, c'est l'écart entre deux arbres, deux poteaux… qui se suivent." },
      { t: "classer", q: "Ligne fermée ou ligne ouverte ?", cases: ["ligne fermée", "ligne ouverte"], items: [["le tour d'un rond-point", "ligne fermée"], ["une rue droite", "ligne ouverte"], ["le pourtour d'un champ", "ligne fermée"], ["un côté d'un terrain", "ligne ouverte"], ["un cercle d'enfants", "ligne fermée"], ["une allée de l'école", "ligne ouverte"]], expl: "Une ligne fermée revient à son point de départ (on fait le tour) ; une ligne ouverte a deux bouts." },
      { t: "qcm", q: "On plante 6 arbres autour d'un cercle. Combien y a-t-il d'intervalles ?", choix: ["6", "5", "7"], r: "6", expl: "Sur une ligne fermée, nombre d'intervalles = nombre d'objets." },
      { t: "qcm", q: "Sur une ligne ouverte avec un objet à chaque extrémité, on a…", choix: ["NO = NI + 1", "NO = NI", "NO = NI − 1"], r: "NO = NI + 1", expl: "Il y a un objet de plus que d'intervalles : 3 objets, 2 intervalles." },
      { t: "vf", q: "Sur une ligne ouverte, il faut faire un croquis pour ne pas se tromper.", r: true, expl: "C'est le conseil de la leçon : le croquis montre s'il y a des objets aux extrémités." },
      { t: "relier", q: "Relie chaque situation à sa règle.", paires: [["ligne fermée", "NI = NO"], ["ligne ouverte, un objet à chaque bout", "NO = NI + 1"], ["ligne ouverte, rien aux bouts", "NO = NI − 1"], ["ligne ouverte, un objet à un seul bout", "NO = NI"]], expl: "Ce sont les quatre cas de la leçon." }
    ],
    [
      { t: "saisie", q: "4 piquets aux 4 coins d'un enclos carré. Nombre d'intervalles = …", r: "4", nombre: true, expl: "Le tour de l'enclos est une ligne fermée : 4 objets, 4 intervalles." },
      { t: "saisie", q: "Ligne ouverte, un poteau à chaque bout : 10 poteaux. Nombre d'intervalles = …", r: "9", nombre: true, expl: "NO = NI + 1, donc NI = 10 − 1 = 9." },
      { t: "saisie", q: "Ligne ouverte, rien aux bouts : 10 poteaux. Nombre d'intervalles = …", r: "11", nombre: true, expl: "NO = NI − 1, donc NI = 10 + 1 = 11." },
      { t: "saisie", q: "Ligne ouverte, un poteau à un seul bout : 10 poteaux. Nombre d'intervalles = …", r: "10", nombre: true, expl: "NO = NI : 10 intervalles." },
      { t: "saisie", q: "Autour d'un rond-point, 15 lampadaires. Nombre d'intervalles = …", r: "15", nombre: true, expl: "Ligne fermée : NI = NO = 15." },
      { t: "saisie", q: "Le long d'une allée, un arbre à chaque bout, 12 intervalles. Nombre d'arbres = …", r: "13", nombre: true, expl: "NO = NI + 1 = 12 + 1 = 13." },
      { t: "saisie", q: "Le long d'un mur, aucun pot aux bouts, 8 intervalles. Nombre de pots = …", r: "7", nombre: true, expl: "NO = NI − 1 = 8 − 1 = 7." },
      { t: "saisie", q: "Autour d'un champ, 20 intervalles entre les piquets. Nombre de piquets = …", r: "20", nombre: true, expl: "Ligne fermée : NO = NI = 20." }
    ],
    [
      { t: "qcm", q: "Une rangée de 5 chaises, sans rien aux deux bouts. Combien y a-t-il d'espaces si l'on compte aussi les espaces avant la première et après la dernière chaise jusqu'aux murs ?", choix: ["6", "5", "4"], r: "6", aide: "Fais un croquis : mur — chaise — … — chaise — mur.", expl: "Rien aux extrémités : NI = NO + 1 = 6." },
      { t: "qcm", q: "Moussa plante 8 arbres le long d'une route, un à chaque bout. Il dit : « Il y a 8 intervalles. » A-t-il raison ?", choix: ["Non, il y en a 7.", "Oui.", "Non, il y en a 9."], r: "Non, il y en a 7.", expl: "Avec un objet à chaque extrémité, NI = NO − 1 = 7." },
      { t: "vf", q: "Pour le même nombre d'arbres, une ligne fermée a un intervalle de plus qu'une ligne ouverte avec un arbre à chaque bout.", r: true, expl: "Ligne fermée : NI = NO. Ligne ouverte avec un arbre à chaque bout : NI = NO − 1. La différence est de 1." },
      { t: "classer", q: "Combien d'intervalles pour 6 objets ?", cases: ["5 intervalles", "6 intervalles", "7 intervalles"], items: [["ligne ouverte, un objet à chaque bout", "5 intervalles"], ["ligne fermée", "6 intervalles"], ["ligne ouverte, un objet à un seul bout", "6 intervalles"], ["ligne ouverte, rien aux bouts", "7 intervalles"]], expl: "6 − 1 = 5 ; 6 ; 6 ; 6 + 1 = 7." },
      { t: "saisie", q: "Six enfants jouent à la chandelle, assis en cercle. Nombre d'intervalles entre eux = …", r: "6", nombre: true, expl: "Le cercle est une ligne fermée : 6 enfants, 6 intervalles." },
      { t: "saisie", q: "Une rue droite a 25 lampadaires, un à chaque extrémité. Nombre d'intervalles = …", r: "24", nombre: true, expl: "NI = NO − 1 = 25 − 1 = 24." }
    ],
    [
      { t: "probleme", q: "Un cultivateur plante des arbres sur les deux longueurs de son champ rectangulaire. Il met un arbre à chaque coin et 9 arbres sur chaque longueur.", etapes: [{ q: "Étape 1 : nombre d'intervalles sur une longueur", r: "8" }, { q: "Étape 2 : nombre total d'arbres plantés", r: "18" }, { q: "Étape 3 : nombre total d'intervalles sur les deux longueurs", r: "16" }], expl: "Une longueur est une ligne ouverte avec un arbre à chaque bout : 9 − 1 = 8 intervalles. Deux longueurs : 9 × 2 = 18 arbres et 8 × 2 = 16 intervalles." },
      { t: "probleme", q: "Autour d'une parcelle, on a planté 35 piquets pour tenir un grillage. Le long du chemin qui y mène, on a planté 35 arbres, un à chaque bout.", etapes: [{ q: "Étape 1 : intervalles autour de la parcelle", r: "35" }, { q: "Étape 2 : intervalles le long du chemin", r: "34" }], expl: "Le tour de la parcelle est une ligne fermée : 35. Le chemin est une ligne ouverte avec un arbre à chaque bout : 35 − 1 = 34." },
      { t: "probleme", q: "Pour la fête de l'école, Awa accroche des fanions le long d'une corde tendue entre deux murs, sans fanion contre les murs. Il y a 11 espaces.", etapes: [{ q: "Nombre de fanions", r: "10" }], expl: "Rien aux extrémités : NO = NI − 1 = 11 − 1 = 10." },
      { t: "probleme", q: "Le long d'une avenue, on a planté 51 arbres, un à chaque extrémité. On en plante autant de l'autre côté.", etapes: [{ q: "Étape 1 : intervalles d'un côté", r: "50" }, { q: "Étape 2 : intervalles des deux côtés", r: "100" }], expl: "51 − 1 = 50 intervalles d'un côté ; 50 × 2 = 100 pour les deux côtés." },
      { t: "qcm", q: "Un terrain carré a un piquet à chaque coin et 4 piquets entre deux coins, sur chaque côté. Combien y a-t-il de piquets en tout ?", choix: ["20", "24", "16", "21"], r: "20", aide: "Fais un croquis et ne compte pas deux fois les coins.", expl: "4 coins + 4 piquets × 4 côtés = 4 + 16 = 20. Le tour est une ligne fermée : 20 piquets, 20 intervalles." }
    ]
  ]
});


/* ---- ma-mes-longueur-cloture.js ---- */
LECONS.push({
  id: "ma-mes-longueur-cloture",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul de la longueur de la clôture",
  date: "2026-10-15",
  photos: ["DJI_20261118221112_0081_D.jpg", "DJI_20261118221119_0082_D.jpg", "DJI_20261118221123_0083_D.jpg"],
  retiens:
    "<p><b>1. Avec une porte (une seule rangée)</b></p>" +
    "<p>Exemple : un jardin rectangulaire mesure 25 m sur 18 m. On l'entoure d'un grillage en laissant une porte de 5 m.<br>" +
    "Périmètre du jardin : (25 m + 18 m) × 2 = 86 m<br>Longueur de grillage : 86 m − 5 m = 81 m</p>" +
    "<p><b>Longueur de la clôture = Périmètre − Porte</b></p>" +
    "<p><b>2. Avec plusieurs rangées</b></p>" +
    "<p>Exemple : Ali clôture son champ carré de 50 m de côté avec trois rangées de fil de fer, en laissant une entrée de 2 m.<br>" +
    "Périmètre : 50 m × 4 = 200 m<br>Périmètre sans la porte : 200 m − 2 m = 198 m<br>Longueur de la clôture : 198 m × 3 = 594 m</p>" +
    "<p><b>Longueur de la clôture = (Périmètre − Porte) × nombre de rangées</b></p>" +
    "<p>À ne pas confondre : la longueur du jardin ≠ la longueur de la clôture ; la largeur du jardin ≠ la largeur de la porte.</p>",
  astuce: "On fait le tour du champ, on <b>saute la porte</b>, puis on refait ce tour autant de fois qu'il y a de rangées.",
  regle: "Longueur de la clôture = Périmètre − Porte. Avec plusieurs rangées, on multiplie le périmètre sans la porte par le nombre de rangées.",
  niveaux: [
    [
      { t: "qcm", q: "Pourquoi retire-t-on la largeur de la porte du périmètre ?", choix: ["Parce qu'on ne pose pas de fil à l'endroit de la porte.", "Parce que la porte est plus longue que le champ.", "Pour trouver la largeur du champ."], r: "Parce qu'on ne pose pas de fil à l'endroit de la porte.", expl: "La porte laisse un passage : il n'y a pas de clôture à cet endroit." },
      { t: "qcm", q: "Quelle formule donne la longueur de la clôture avec une porte ?", choix: ["Périmètre − Porte", "Périmètre + Porte", "Périmètre × Porte"], r: "Périmètre − Porte", expl: "On fait le tour, moins le passage de la porte." },
      { t: "vf", q: "La longueur du jardin et la longueur de la clôture, c'est la même chose.", r: false, expl: "La longueur du jardin est un côté ; la longueur de la clôture est (presque) tout le tour." },
      { t: "qcm", q: "Avec 3 rangées de fil, la longueur de fil est…", choix: ["3 fois le périmètre sans la porte", "le périmètre + 3", "le périmètre : 3"], r: "3 fois le périmètre sans la porte", expl: "Chaque rangée fait le tour sans la porte : on multiplie par 3." },
      { t: "relier", q: "Relie chaque situation à son calcul.", paires: [["Une rangée, pas de porte", "Périmètre"], ["Une rangée, une porte", "Périmètre − Porte"], ["Plusieurs rangées, une porte", "(Périmètre − Porte) × rangées"]], expl: "On part toujours du périmètre, on retire la porte, puis on multiplie par le nombre de rangées." },
      { t: "saisie", q: "Le périmètre d'un champ est 120 m. On laisse une porte de 3 m. Longueur de la clôture = … m", r: "117", nombre: true, unite: "m", expl: "120 m − 3 m = 117 m." }
    ],
    [
      { t: "saisie", q: "Jardin rectangulaire de 25 m sur 18 m, porte de 5 m. Périmètre = … m", r: "86", nombre: true, unite: "m", expl: "(25 + 18) × 2 = 86 m." },
      { t: "saisie", q: "Même jardin (périmètre 86 m, porte de 5 m). Longueur du grillage = … m", r: "81", nombre: true, unite: "m", expl: "86 − 5 = 81 m." },
      { t: "saisie", q: "Champ carré de 30 m de côté, porte de 2 m. Longueur de la clôture = … m", r: "118", nombre: true, unite: "m", expl: "30 × 4 = 120 m ; 120 − 2 = 118 m." },
      { t: "saisie", q: "Terrain rectangulaire de 40 m sur 25 m, porte de 4 m. Longueur de la clôture = … m", r: "126", nombre: true, unite: "m", expl: "(40 + 25) × 2 = 130 m ; 130 − 4 = 126 m." },
      { t: "saisie", q: "Champ carré de 50 m de côté, entrée de 2 m, 3 rangées. Périmètre sans la porte = … m", r: "198", nombre: true, unite: "m", expl: "50 × 4 = 200 m ; 200 − 2 = 198 m." },
      { t: "saisie", q: "Même champ (198 m sans la porte, 3 rangées). Longueur de la clôture = … m", r: "594", nombre: true, unite: "m", expl: "198 × 3 = 594 m." },
      { t: "saisie", q: "Enclos carré de 20 m de côté, porte de 1,5 m, 2 rangées. Longueur de fil = … m", r: "157", nombre: true, unite: "m", expl: "20 × 4 = 80 m ; 80 − 1,5 = 78,5 m ; 78,5 × 2 = 157 m." },
      { t: "saisie", q: "Verger rectangulaire de 35 m sur 15 m, porte de 4 m, 4 rangées. Longueur de fil = … m", r: "384", nombre: true, unite: "m", expl: "(35 + 15) × 2 = 100 m ; 100 − 4 = 96 m ; 96 × 4 = 384 m." }
    ],
    [
      { t: "qcm", q: "Champ carré de 50 m de côté, porte de 2 m, 3 rangées. Quel calcul est juste ?", choix: ["(200 − 2) × 3", "200 × 3 − 2", "200 − 2 × 3", "(200 + 2) × 3"], r: "(200 − 2) × 3", aide: "La porte est sautée à chaque rangée.", expl: "On retire la porte AVANT de multiplier : (200 − 2) × 3 = 594 m. 200 × 3 − 2 = 598 m serait faux." },
      { t: "qcm", q: "Un jardin mesure 30 m de long et 20 m de large, avec une porte de 3 m. Fatou écrit : 30 − 3 = 27 m. Quelle est son erreur ?", choix: ["Elle a pris la longueur du jardin au lieu du périmètre.", "Elle a oublié d'ajouter la porte.", "Il n'y a pas d'erreur."], r: "Elle a pris la longueur du jardin au lieu du périmètre.", expl: "Il faut le périmètre : (30 + 20) × 2 = 100 m, puis 100 − 3 = 97 m." },
      { t: "vf", q: "Pour une clôture sans porte et à une seule rangée, la longueur de la clôture est égale au périmètre.", r: true, expl: "Rien à retirer, rien à multiplier : clôture = périmètre." },
      { t: "saisie", q: "Champ rectangulaire de 1 hm sur 60 m, porte de 5 m. Longueur de la clôture = … m", r: "315", nombre: true, unite: "m", aide: "Convertis 1 hm en mètres.", expl: "1 hm = 100 m ; (100 + 60) × 2 = 320 m ; 320 − 5 = 315 m." },
      { t: "saisie", q: "Poulailler carré de 6,5 m de côté, porte de 1 m, 5 rangées de grillage. Longueur de grillage = … m", r: "125", nombre: true, unite: "m", expl: "6,5 × 4 = 26 m ; 26 − 1 = 25 m ; 25 × 5 = 125 m." },
      { t: "trous", q: "Complète (champ carré de 40 m de côté, porte de 4 m, 2 rangées).", nombre: true, texte: "Périmètre : [160] m — sans la porte : [156] m — clôture : [312] m", expl: "40 × 4 = 160 ; 160 − 4 = 156 ; 156 × 2 = 312." }
    ],
    [
      { t: "probleme", q: "Pour protéger son jardin rectangulaire de 45 m sur 30 m, Ibrahima pose 3 rangées de fil de fer en laissant une porte de 3 m. Le fil coûte 100 F le mètre.", etapes: [{ q: "Étape 1 : périmètre du jardin (en m)", r: "150", unite: "m" }, { q: "Étape 2 : périmètre sans la porte (en m)", r: "147", unite: "m" }, { q: "Étape 3 : longueur de fil (en m)", r: "441", unite: "m" }, { q: "Étape 4 : dépense (en F)", r: "44100", unite: "F" }], expl: "(45 + 30) × 2 = 150 m ; 150 − 3 = 147 m ; 147 × 3 = 441 m ; 441 × 100 = 44 100 F." },
      { t: "probleme", q: "Un éleveur clôture un enclos carré de 60 m de côté avec 2 rangées de fil, en laissant une entrée de 4 m. Le fil est vendu en rouleaux de 100 m.", etapes: [{ q: "Étape 1 : périmètre sans l'entrée (en m)", r: "236", unite: "m" }, { q: "Étape 2 : longueur de fil (en m)", r: "472", unite: "m" }, { q: "Étape 3 : nombre de rouleaux à acheter", r: "5" }], expl: "60 × 4 = 240 m ; 240 − 4 = 236 m ; 236 × 2 = 472 m. 4 rouleaux ne font que 400 m : il en faut 5." },
      { t: "probleme", q: "Le terrain de l'école de Ziguinchor mesure 80 m de long et 55 m de large. On l'entoure d'un grillage d'une seule rangée, avec un portail de 6 m.", etapes: [{ q: "Étape 1 : périmètre du terrain (en m)", r: "270", unite: "m" }, { q: "Étape 2 : longueur du grillage (en m)", r: "264", unite: "m" }], expl: "(80 + 55) × 2 = 270 m ; 270 − 6 = 264 m." },
      { t: "probleme", q: "Khady entoure son potager carré de 12 m de côté avec 4 rangées de fil, et laisse une porte de 1 m. Elle a déjà 100 m de fil.", etapes: [{ q: "Étape 1 : longueur de fil nécessaire (en m)", r: "188", unite: "m" }, { q: "Étape 2 : longueur de fil qui lui manque (en m)", r: "88", unite: "m" }], expl: "12 × 4 = 48 m ; 48 − 1 = 47 m ; 47 × 4 = 188 m ; 188 − 100 = 88 m." },
      { t: "qcm", q: "Un champ carré de 25 m de côté a une porte de 3 m et 2 rangées de fil. Quelle est la longueur de fil ?", choix: ["194 m", "200 m", "197 m", "97 m"], r: "194 m", expl: "25 × 4 = 100 m ; 100 − 3 = 97 m ; 97 × 2 = 194 m." }
    ]
  ]
});


/* ---- ma-mes-longueurs.js ---- */
LECONS.push({
  id: "ma-mes-longueurs",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de longueur",
  date: "2026-09-15",
  photos: ["DJI_20261118220731_0060_D.jpg"],
  retiens:
    "<p>L'unité principale des mesures de longueur est le <b>mètre (m)</b>.</p>" +
    "<ul><li>Les <b>multiples</b> du mètre sont : le décamètre (<b>dam</b>), l'hectomètre (<b>hm</b>) et le kilomètre (<b>km</b>).</li>" +
    "<li>Les <b>sous-multiples</b> du mètre sont : le décimètre (<b>dm</b>), le centimètre (<b>cm</b>) et le millimètre (<b>mm</b>).</li></ul>" +
    "<p>Ces unités sont <b>10 fois</b> plus grandes ou plus petites les unes que les autres : chaque unité vaut 10 fois celle qui est à sa droite dans le tableau.</p>" +
    "<table><tr><th colspan='3'>multiples</th><th>unité principale</th><th colspan='3'>sous-multiples</th></tr>" +
    "<tr><td>km</td><td>hm</td><td>dam</td><td><b>m</b></td><td>dm</td><td>cm</td><td>mm</td></tr>" +
    "<tr><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>" +
    "<p>1 km = 1 000 m ; 1 m = 10 dm = 100 cm = 1 000 mm.</p>",
  astuce: "Pour convertir, écris le nombre dans le tableau : <b>un seul chiffre par colonne</b>, le chiffre des unités dans la colonne de l'unité donnée. Puis lis le nombre dans la nouvelle unité, en complétant avec des zéros ou en plaçant la virgule.",
  regle: "Dans le tableau km, hm, dam, m, dm, cm, mm, on passe d'une colonne à la suivante en multipliant ou en divisant par 10.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle est l'unité principale des mesures de longueur ?", choix: ["le mètre", "le kilomètre", "le centimètre", "le litre"], r: "le mètre", expl: "Le mètre (m) est l'unité principale ; les autres unités sont ses multiples ou ses sous-multiples." },
      { t: "classer", q: "Range chaque unité : multiple ou sous-multiple du mètre ?", cases: ["multiple du mètre", "sous-multiple du mètre"], items: [["km", "multiple du mètre"], ["dm", "sous-multiple du mètre"], ["hm", "multiple du mètre"], ["mm", "sous-multiple du mètre"], ["dam", "multiple du mètre"], ["cm", "sous-multiple du mètre"]], expl: "Multiples (plus grands que le mètre) : dam, hm, km. Sous-multiples (plus petits) : dm, cm, mm." },
      { t: "relier", q: "Relie chaque abréviation à son nom.", paires: [["km", "kilomètre"], ["hm", "hectomètre"], ["dam", "décamètre"], ["dm", "décimètre"], ["cm", "centimètre"], ["mm", "millimètre"]], expl: "kilo = 1 000, hecto = 100, déca = 10 ; déci = un dixième, centi = un centième, milli = un millième." },
      { t: "vf", q: "Un décimètre est 10 fois plus petit qu'un mètre.", r: true, expl: "1 m = 10 dm : le décimètre est 10 fois plus petit." },
      { t: "qcm", q: "Combien de mètres y a-t-il dans 1 km ?", choix: ["10", "100", "1 000", "10 000"], r: "1 000", expl: "km, hm, dam, m : trois colonnes, donc 1 km = 1 000 m." },
      { t: "trous", q: "Complète l'ordre des unités, de la plus grande à la plus petite.", texte: "km — [hm] — dam — [m] — dm — [cm] — mm", expl: "km, hm, dam, m, dm, cm, mm." }
    ],
    [
      { t: "saisie", q: "3 km = … m", r: "3000", nombre: true, unite: "m", expl: "1 km = 1 000 m, donc 3 km = 3 000 m." },
      { t: "saisie", q: "1 m = … cm", r: "100", nombre: true, unite: "cm", expl: "m, dm, cm : deux colonnes, donc 1 m = 100 cm." },
      { t: "saisie", q: "1 m = … mm", r: "1000", nombre: true, unite: "mm", expl: "m, dm, cm, mm : trois colonnes, donc 1 m = 1 000 mm." },
      { t: "saisie", q: "5 dam = … m", r: "50", nombre: true, unite: "m", expl: "1 dam = 10 m, donc 5 dam = 50 m." },
      { t: "saisie", q: "4 hm = … m", r: "400", nombre: true, unite: "m", expl: "1 hm = 100 m, donc 4 hm = 400 m." },
      { t: "saisie", q: "12 dm = … cm", r: "120", nombre: true, unite: "cm", expl: "1 dm = 10 cm, donc 12 dm = 120 cm." },
      { t: "saisie", q: "7 cm = … mm", r: "70", nombre: true, unite: "mm", expl: "1 cm = 10 mm, donc 7 cm = 70 mm." },
      { t: "saisie", q: "6 000 m = … km", r: "6", nombre: true, unite: "km", expl: "1 000 m = 1 km, donc 6 000 m = 6 km." },
      { t: "saisie", q: "300 cm = … m", r: "3", nombre: true, unite: "m", expl: "100 cm = 1 m, donc 300 cm = 3 m." },
      { t: "relier", q: "Relie les longueurs égales.", paires: [["1 km", "1 000 m"], ["1 hm", "100 m"], ["1 dam", "10 m"], ["1 m", "10 dm"], ["1 dm", "10 cm"]], expl: "Chaque unité vaut 10 fois celle qui la suit dans le tableau." }
    ],
    [
      { t: "saisie", q: "2 500 m = … km", r: "2,5", nombre: true, unite: "km", aide: "Place le 2 dans la colonne des km.", expl: "2 500 m = 2 km 500 m = 2,5 km." },
      { t: "saisie", q: "75 cm = … m", r: "0,75", nombre: true, unite: "m", expl: "Le 5 est dans la colonne des cm : 0 m 7 dm 5 cm = 0,75 m." },
      { t: "saisie", q: "3,4 m = … cm", r: "340", nombre: true, unite: "cm", expl: "3,4 m = 3 m 4 dm = 340 cm." },
      { t: "saisie", q: "8 mm = … cm", r: "0,8", nombre: true, unite: "cm", expl: "10 mm = 1 cm, donc 8 mm = 0,8 cm." },
      { t: "saisie", q: "6 km 250 m = … m", r: "6250", nombre: true, unite: "m", expl: "6 km = 6 000 m ; 6 000 m + 250 m = 6 250 m." },
      { t: "saisie", q: "450 cm = … m", r: "4,5", nombre: true, unite: "m", expl: "450 cm = 4 m 50 cm = 4,5 m." },
      { t: "qcm", q: "Quelle longueur est la plus grande ?", choix: ["1,5 km", "1 400 m", "140 dam", "14 hm"], r: "1,5 km", aide: "Convertis tout en mètres.", expl: "1,5 km = 1 500 m ; 1 400 m ; 140 dam = 1 400 m ; 14 hm = 1 400 m. C'est 1,5 km." },
      { t: "vf", q: "1 cm = 100 mm.", r: false, expl: "Le cm et le mm sont voisins dans le tableau : 1 cm = 10 mm seulement." }
    ],
    [
      { t: "probleme", q: "Moussa habite à 850 m de l'école. Il fait l'aller-retour deux fois par jour (le matin et l'après-midi).", etapes: [{ q: "Étape 1 : longueur d'un aller-retour (en m)", r: "1700", unite: "m" }, { q: "Étape 2 : distance parcourue dans la journée (en m)", r: "3400", unite: "m" }, { q: "Étape 3 : cette distance en km", r: "3,4", unite: "km" }], expl: "850 m × 2 = 1 700 m ; 1 700 m × 2 = 3 400 m = 3,4 km." },
      { t: "probleme", q: "Fatou a un ruban de 2 m. Elle coupe 3 morceaux de 45 cm chacun pour décorer des cadeaux.", etapes: [{ q: "Étape 1 : longueur du ruban en cm", r: "200", unite: "cm" }, { q: "Étape 2 : longueur utilisée (en cm)", r: "135", unite: "cm" }, { q: "Étape 3 : longueur qui reste (en cm)", r: "65", unite: "cm" }], expl: "2 m = 200 cm ; 45 cm × 3 = 135 cm ; 200 cm − 135 cm = 65 cm. On met tout dans la même unité avant de calculer." },
      { t: "probleme", q: "Un car part de Dakar. Il parcourt 35 km avant une pause, puis encore 35 km pour arriver à Thiès.", etapes: [{ q: "Étape 1 : distance totale en km", r: "70", unite: "km" }, { q: "Étape 2 : cette distance en m", r: "70000", unite: "m" }], expl: "35 km + 35 km = 70 km ; 70 km = 70 000 m." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1,2 km = [1200] m — 9 dm = [90] cm — 4 m 5 cm = [405] cm — 25 mm = [2,5|2.5] cm", expl: "1,2 km = 1 200 m ; 9 dm = 90 cm ; 4 m = 400 cm, + 5 cm = 405 cm ; 25 mm = 2,5 cm." },
      { t: "qcm", q: "Ibrahima mesure la longueur d'une table. Quelle unité est la mieux adaptée ?", choix: ["le centimètre", "le kilomètre", "l'hectomètre", "le litre"], r: "le centimètre", expl: "Une table mesure environ 1 m ou 150 cm : on choisit le mètre ou le centimètre. Le km sert pour les grandes distances, le litre mesure des liquides." }
    ]
  ]
});


/* ---- ma-mes-masse-brute-nette-tare.js ---- */
LECONS.push({
  id: "ma-mes-masse-brute-nette-tare",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de masse : masse brute, masse nette, tare",
  date: "2026-10-06",
  photos: ["DJI_20261118220934_0074_D.jpg"],
  retiens:
    "<ul><li>La <b>masse brute</b> (MB), c'est le contenant + le contenu.</li>" +
    "<li>La <b>masse nette</b> (MN), c'est le contenu seul.</li>" +
    "<li>La <b>tare</b> (t), c'est la masse du contenant vide.</li></ul>" +
    "<table><tr><th>Je cherche</th><th>Formule</th></tr>" +
    "<tr><td>la masse brute</td><td>MB = MN + t</td></tr>" +
    "<tr><td>la masse nette</td><td>MN = MB − t</td></tr>" +
    "<tr><td>la tare</td><td>t = MB − MN</td></tr></table>" +
    "<p>Exemple : un bidon vide pèse 1 kg (tare). On y met 20 kg d'huile (masse nette). Le bidon plein pèse 21 kg (masse brute).</p>",
  astuce: "<b>Brute</b> = tout ce qu'on pose sur la balance. <b>Nette</b> = seulement ce qu'on achète ou ce qu'on mange. <b>Tare</b> = l'emballage.",
  regle: "Masse brute = masse nette + tare. Pour trouver l'une des trois, on additionne ou on soustrait les deux autres, toujours dans la même unité.",
  niveaux: [
    [
      { t: "qcm", q: "Un sac de riz plein posé sur la balance : ce que la balance indique est…", choix: ["la masse brute", "la masse nette", "la tare"], r: "la masse brute", expl: "La balance pèse le sac (contenant) et le riz (contenu) : c'est la masse brute." },
      { t: "qcm", q: "La masse du bidon vide s'appelle…", choix: ["la tare", "la masse nette", "la masse brute"], r: "la tare", expl: "La tare est la masse du contenant vide." },
      { t: "qcm", q: "La masse de l'huile seule, sans le bidon, s'appelle…", choix: ["la masse nette", "la masse brute", "la tare"], r: "la masse nette", expl: "La masse nette, c'est le contenu seul." },
      { t: "classer", q: "Contenant ou contenu ?", cases: ["contenant (tare)", "contenu (masse nette)"], items: [["le bocal", "contenant (tare)"], ["la confiture", "contenu (masse nette)"], ["le carton", "contenant (tare)"], ["les mangues", "contenu (masse nette)"], ["le sac", "contenant (tare)"], ["le ciment", "contenu (masse nette)"]], expl: "Le contenant est l'emballage (sa masse est la tare) ; le contenu est ce qu'il y a dedans (masse nette)." },
      { t: "relier", q: "Relie chaque formule à ce qu'elle permet de calculer.", paires: [["MN + t", "la masse brute"], ["MB − t", "la masse nette"], ["MB − MN", "la tare"]], expl: "MB = MN + t ; MN = MB − t ; t = MB − MN." },
      { t: "vf", q: "La masse brute est toujours plus grande que la masse nette.", r: true, expl: "La masse brute contient la masse nette plus la tare." }
    ],
    [
      { t: "saisie", q: "Masse nette : 50 kg de riz. Tare : 0,5 kg. Masse brute = … kg", r: "50,5", nombre: true, unite: "kg", expl: "MB = MN + t = 50 + 0,5 = 50,5 kg." },
      { t: "saisie", q: "Masse brute d'un bidon d'huile : 21 kg. Tare : 1,5 kg. Masse nette = … kg", r: "19,5", nombre: true, unite: "kg", expl: "MN = MB − t = 21 − 1,5 = 19,5 kg." },
      { t: "saisie", q: "Masse brute d'une caisse de poissons : 32 kg. Masse nette : 30 kg. Tare = … kg", r: "2", nombre: true, unite: "kg", expl: "t = MB − MN = 32 − 30 = 2 kg." },
      { t: "saisie", q: "Masse brute d'un pot de confiture : 450 g. Masse nette : 370 g. Tare = … g", r: "80", nombre: true, unite: "g", expl: "t = MB − MN = 450 − 370 = 80 g." },
      { t: "saisie", q: "Masse nette d'un paquet de café : 250 g. Tare : 15 g. Masse brute = … g", r: "265", nombre: true, unite: "g", expl: "MB = MN + t = 250 + 15 = 265 g." },
      { t: "saisie", q: "Masse brute d'un panier de tomates : 12 kg. Panier vide : 2 kg. Masse nette = … kg", r: "10", nombre: true, unite: "kg", expl: "MN = MB − t = 12 − 2 = 10 kg." },
      { t: "saisie", q: "Masse brute d'un sac d'oignons : 25,4 kg. Masse nette : 25 kg. Tare = … kg", r: "0,4", nombre: true, unite: "kg", expl: "t = MB − MN = 25,4 − 25 = 0,4 kg." },
      { t: "trous", q: "Complète les formules.", texte: "MB = MN [+] t — MN = MB [−|-] t — t = MB − [MN]", expl: "On additionne pour trouver la masse brute ; on soustrait pour trouver la masse nette ou la tare." }
    ],
    [
      { t: "saisie", q: "Masse brute d'un carton de biscuits : 12 kg. Tare : 800 g. Masse nette = … kg", r: "11,2", nombre: true, unite: "kg", aide: "Mets d'abord les deux masses dans la même unité.", expl: "12 kg = 12 000 g ; 12 000 − 800 = 11 200 g = 11,2 kg." },
      { t: "saisie", q: "Masse nette d'un bidon de lait : 4,5 kg. Le bidon vide pèse 300 g. Masse brute = … kg", r: "4,8", nombre: true, unite: "kg", expl: "300 g = 0,3 kg ; 4,5 + 0,3 = 4,8 kg." },
      { t: "qcm", q: "Une caisse pèse 18 kg pleine et 3 kg vide. Quelle opération donne la masse du contenu ?", choix: ["18 − 3", "18 + 3", "18 × 3", "18 : 3"], r: "18 − 3", expl: "MN = MB − t = 18 − 3 = 15 kg." },
      { t: "vf", q: "Si la tare vaut 0 kg, la masse brute est égale à la masse nette.", r: true, expl: "MB = MN + 0 = MN : il n'y a pas d'emballage à peser." },
      { t: "qcm", q: "Moussa dit : « Mon sac de mil pèse 52 kg sur la balance, donc j'ai 52 kg de mil. » A-t-il raison ?", choix: ["Non, il faut enlever la masse du sac vide.", "Oui, la balance donne la masse du mil.", "Non, il faut ajouter la masse du sac."], r: "Non, il faut enlever la masse du sac vide.", expl: "52 kg est la masse brute. La masse du mil (nette) = 52 kg − tare." },
      { t: "saisie", q: "Masse brute d'une bouteille de gaz : 18,5 kg. Masse du gaz : 6 kg. Tare (bouteille vide) = … kg", r: "12,5", nombre: true, unite: "kg", expl: "t = MB − MN = 18,5 − 6 = 12,5 kg." }
    ],
    [
      { t: "probleme", q: "Un camion transporte 40 sacs de ciment. Chaque sac contient 50 kg de ciment et le sac vide pèse 200 g.", etapes: [{ q: "Étape 1 : masse nette totale du ciment (en kg)", r: "2000", unite: "kg" }, { q: "Étape 2 : tare totale des 40 sacs (en kg)", r: "8", unite: "kg" }, { q: "Étape 3 : masse brute du chargement (en kg)", r: "2008", unite: "kg" }], expl: "50 kg × 40 = 2 000 kg ; 200 g × 40 = 8 000 g = 8 kg ; MB = 2 000 + 8 = 2 008 kg." },
      { t: "probleme", q: "Aïssatou pèse son panier de mangues : 15 kg. Le panier vide pèse 1,2 kg. Elle vend les mangues 500 F le kilogramme.", etapes: [{ q: "Étape 1 : masse nette des mangues (en kg)", r: "13,8", unite: "kg" }, { q: "Étape 2 : somme gagnée (en F)", r: "6900", unite: "F" }], expl: "MN = 15 − 1,2 = 13,8 kg ; 13,8 × 500 = 6 900 F. On ne vend que la masse nette." },
      { t: "probleme", q: "Une boîte de sardines pèse 125 g pleine. Les sardines seules pèsent 100 g. Ibrahima achète 6 boîtes.", etapes: [{ q: "Étape 1 : tare d'une boîte (en g)", r: "25", unite: "g" }, { q: "Étape 2 : masse brute des 6 boîtes (en g)", r: "750", unite: "g" }, { q: "Étape 3 : masse nette des 6 boîtes (en g)", r: "600", unite: "g" }], expl: "t = 125 − 100 = 25 g ; 125 × 6 = 750 g ; 100 × 6 = 600 g." },
      { t: "probleme", q: "Un commerçant reçoit une caisse de savons de 24 kg (masse brute). La caisse vide pèse 2 kg. Chaque savon pèse 400 g.", etapes: [{ q: "Étape 1 : masse nette des savons (en kg)", r: "22", unite: "kg" }, { q: "Étape 2 : masse nette en g", r: "22000", unite: "g" }, { q: "Étape 3 : nombre de savons dans la caisse", r: "55" }], expl: "MN = 24 − 2 = 22 kg = 22 000 g ; 22 000 : 400 = 55 savons." },
      { t: "trous", q: "Complète le tableau (masses en kg).", nombre: true, texte: "MB = 60 ; t = 4 ; MN = [56] — MN = 35 ; t = 1,5 ; MB = [36,5|36.5] — MB = 9 ; MN = 8,2 ; t = [0,8|0.8]", expl: "MN = 60 − 4 = 56 ; MB = 35 + 1,5 = 36,5 ; t = 9 − 8,2 = 0,8." }
    ]
  ]
});


/* ---- ma-mes-masses.js ---- */
LECONS.push({
  id: "ma-mes-masses",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de masse : le kg, ses multiples et ses sous-multiples",
  date: "2026-09-30",
  photos: ["DJI_20261118220859_0069_D.jpg", "DJI_20261118220908_0070_D.jpg"],
  retiens:
    "<p>Pour connaître la masse (le poids) d'un corps, on le pèse en utilisant les unités de masse, dont l'unité principale est le <b>gramme (g)</b>.</p>" +
    "<p>Pour peser des objets très lourds, le <b>kilogramme (kg)</b> est trop petit : on utilise alors le <b>quintal (q)</b> ou la <b>tonne (t)</b>.</p>" +
    "<table><tr><th>t</th><th>q</th><th>·</th><th>kg</th><th>hg</th><th>dag</th><th>g</th><th>dg</th><th>cg</th><th>mg</th></tr>" +
    "<tr><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>" +
    "<p>La colonne marquée d'un point, entre q et kg, est celle des dizaines de kilogrammes : elle n'a pas de nom.</p>" +
    "<p><b>1 t = 10 q = 1 000 kg</b> ; <b>1 q = 100 kg</b><br><b>1 kg = 1 000 g</b> ; <b>1 g = 1 000 mg</b></p>" +
    "<p>Dans un nombre de kilogrammes, le chiffre des <b>centaines</b> représente les <b>quintaux</b> et le chiffre des <b>mille</b> représente les <b>tonnes</b>. Exemple : 3 475 kg = 3 t 4 q 75 kg.</p>",
  astuce: "Un sac de riz de 100 kg, c'est <b>1 quintal</b>. Dix sacs de 100 kg, c'est <b>1 tonne</b>.",
  regle: "1 t = 10 q = 1 000 kg ; 1 q = 100 kg ; 1 kg = 1 000 g ; 1 g = 1 000 mg. Dans le tableau, chaque colonne vaut 10 fois celle de droite.",
  niveaux: [
    [
      { t: "qcm", q: "Pour peser un camion chargé, quelle unité choisit-on ?", choix: ["la tonne", "le gramme", "le milligramme", "le litre"], r: "la tonne", expl: "Pour les objets très lourds, le kg est trop petit : on utilise la tonne ou le quintal." },
      { t: "qcm", q: "Combien de kilogrammes dans 1 quintal ?", choix: ["10 kg", "100 kg", "1 000 kg"], r: "100 kg", expl: "1 q = 100 kg." },
      { t: "qcm", q: "Combien de kilogrammes dans 1 tonne ?", choix: ["100 kg", "1 000 kg", "10 kg"], r: "1 000 kg", expl: "1 t = 1 000 kg = 10 q." },
      { t: "vf", q: "1 kg = 1 000 g.", r: true, expl: "kg, hg, dag, g : trois colonnes, donc 1 kg = 1 000 g." },
      { t: "relier", q: "Relie les masses égales.", paires: [["1 t", "10 q"], ["1 q", "100 kg"], ["1 kg", "1 000 g"], ["1 g", "1 000 mg"]], expl: "Ce sont les égalités à connaître par cœur." },
      { t: "classer", q: "Plus lourd ou plus léger que 1 kg ?", cases: ["plus lourd que 1 kg", "plus léger que 1 kg"], items: [["1 q", "plus lourd que 1 kg"], ["1 g", "plus léger que 1 kg"], ["1 t", "plus lourd que 1 kg"], ["1 hg", "plus léger que 1 kg"], ["1 mg", "plus léger que 1 kg"], ["1 dag", "plus léger que 1 kg"]], expl: "Le quintal et la tonne sont à gauche du kg dans le tableau ; hg, dag, g, mg sont à droite." }
    ],
    [
      { t: "saisie", q: "2 t = … kg", r: "2000", nombre: true, unite: "kg", expl: "1 t = 1 000 kg, donc 2 t = 2 000 kg." },
      { t: "saisie", q: "3 q = … kg", r: "300", nombre: true, unite: "kg", expl: "1 q = 100 kg, donc 3 q = 300 kg." },
      { t: "saisie", q: "5 kg = … g", r: "5000", nombre: true, unite: "g", expl: "1 kg = 1 000 g, donc 5 kg = 5 000 g." },
      { t: "saisie", q: "4 g = … mg", r: "4000", nombre: true, unite: "mg", expl: "1 g = 1 000 mg, donc 4 g = 4 000 mg." },
      { t: "saisie", q: "6 t = … q", r: "60", nombre: true, unite: "q", expl: "1 t = 10 q, donc 6 t = 60 q." },
      { t: "saisie", q: "500 kg = … q", r: "5", nombre: true, unite: "q", expl: "100 kg = 1 q, donc 500 kg = 5 q." },
      { t: "saisie", q: "7 000 g = … kg", r: "7", nombre: true, unite: "kg", expl: "1 000 g = 1 kg, donc 7 000 g = 7 kg." },
      { t: "saisie", q: "8 000 kg = … t", r: "8", nombre: true, unite: "t", expl: "1 000 kg = 1 t, donc 8 000 kg = 8 t." },
      { t: "trous", q: "Complète l'ordre des unités, de la plus grande à la plus petite.", texte: "t — [q] — · — kg — [hg] — dag — [g] — dg — cg — [mg]", expl: "t, q, (dizaines de kg), kg, hg, dag, g, dg, cg, mg." }
    ],
    [
      { t: "saisie", q: "2 500 kg = … t", r: "2,5", nombre: true, unite: "t", expl: "2 500 kg = 2 t 500 kg = 2,5 t." },
      { t: "saisie", q: "1,5 kg = … g", r: "1500", nombre: true, unite: "g", expl: "1,5 kg = 1 kg 500 g = 1 500 g." },
      { t: "saisie", q: "250 g = … kg", r: "0,25", nombre: true, unite: "kg", expl: "250 g = 0 kg 2 hg 5 dag = 0,25 kg." },
      { t: "saisie", q: "3 t 4 q = … kg", r: "3400", nombre: true, unite: "kg", expl: "3 t = 3 000 kg ; 4 q = 400 kg ; 3 000 + 400 = 3 400 kg." },
      { t: "saisie", q: "3 475 kg = 3 t … q 75 kg", r: "4", nombre: true, unite: "q", aide: "Regarde le chiffre des centaines.", expl: "Dans un nombre de kg, le chiffre des centaines donne les quintaux : 3 475 kg = 3 t 4 q 75 kg." },
      { t: "qcm", q: "Dans 6 820 kg, que représente le chiffre 6 ?", choix: ["des tonnes", "des quintaux", "des kilogrammes", "des grammes"], r: "des tonnes", expl: "Le chiffre des mille, dans un nombre de kg, représente les tonnes : 6 820 kg = 6 t 8 q 20 kg." },
      { t: "qcm", q: "Quelle masse est la plus lourde ?", choix: ["1,2 t", "11 q", "1 150 kg", "1 000 000 g"], r: "1,2 t", aide: "Convertis tout en kilogrammes.", expl: "1,2 t = 1 200 kg ; 11 q = 1 100 kg ; 1 150 kg ; 1 000 000 g = 1 000 kg. C'est 1,2 t." },
      { t: "vf", q: "1 t = 100 q.", r: false, expl: "1 t = 10 q seulement (et 1 000 kg)." }
    ],
    [
      { t: "probleme", q: "Un camion transporte 25 sacs de riz de 50 kg chacun du port de Dakar à Thiès.", etapes: [{ q: "Étape 1 : masse du chargement (en kg)", r: "1250", unite: "kg" }, { q: "Étape 2 : cette masse en tonnes", r: "1,25", unite: "t" }], expl: "50 kg × 25 = 1 250 kg ; 1 250 kg = 1,25 t." },
      { t: "probleme", q: "Un cultivateur récolte 3 t d'arachide. Il la met dans des sacs de 1 q.", etapes: [{ q: "Étape 1 : 3 t en quintaux", r: "30", unite: "q" }, { q: "Étape 2 : nombre de sacs remplis", r: "30" }], expl: "1 t = 10 q, donc 3 t = 30 q, soit 30 sacs d'un quintal." },
      { t: "probleme", q: "La cantine de l'école a reçu 4 q de riz. Elle en utilise 25 kg par jour.", etapes: [{ q: "Étape 1 : 4 q en kg", r: "400", unite: "kg" }, { q: "Étape 2 : nombre de jours de repas", r: "16" }], expl: "4 q = 400 kg ; 400 kg : 25 kg = 16 jours." },
      { t: "probleme", q: "Au marché, Fatou achète 2 kg de sucre, 500 g de café et 750 g de lait en poudre.", etapes: [{ q: "Étape 1 : 2 kg en g", r: "2000", unite: "g" }, { q: "Étape 2 : masse totale des achats (en g)", r: "3250", unite: "g" }, { q: "Étape 3 : cette masse en kg", r: "3,25", unite: "kg" }], expl: "2 kg = 2 000 g ; 2 000 + 500 + 750 = 3 250 g = 3,25 kg." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1 t = [10] q = [1000] kg ; 1 q = [100] kg ; 1 kg = [1000] g ; 1 g = [1000] mg", expl: "Ce sont les égalités de la leçon." }
    ]
  ]
});


/* ---- ma-mes-perimetre-carre.js ---- */
LECONS.push({
  id: "ma-mes-perimetre-carre",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre et du côté du carré",
  date: "2026-10-08",
  photos: ["DJI_20261118221038_0077_D.jpg"],
  retiens:
    "<p>Le <b>périmètre</b>, c'est le <b>pourtour</b> d'une figure : la longueur de la ligne qui en fait le tour.</p>" +
    "<p>Le carré a 4 côtés égaux (c), donc :</p>" +
    "<table><tr><th>Je cherche</th><th>Formule</th></tr>" +
    "<tr><td>le périmètre</td><td>Périmètre = c + c + c + c ou <b>c × 4</b></td></tr>" +
    "<tr><td>le côté</td><td><b>Côté = Périmètre : 4</b></td></tr></table>" +
    "<p>Exemple : un carré de 6 cm de côté a un périmètre de 6 × 4 = 24 cm. Un carré de 24 cm de périmètre a un côté de 24 : 4 = 6 cm.</p>",
  astuce: "Le carré a <b>4</b> côtés égaux : on <b>multiplie</b> par 4 pour aller du côté au périmètre, on <b>divise</b> par 4 pour revenir au côté.",
  regle: "Dans un carré, Périmètre = côté × 4 et côté = Périmètre : 4.",
  niveaux: [
    [
      { t: "qcm", q: "Le périmètre d'une figure, c'est…", choix: ["la longueur de son pourtour", "la surface à l'intérieur", "la longueur d'un seul côté"], r: "la longueur de son pourtour", expl: "Périmètre = pourtour : on fait le tour de la figure." },
      { t: "qcm", q: "Combien de côtés égaux a un carré ?", choix: ["4", "2", "3"], r: "4", expl: "Le carré a 4 côtés égaux : c'est pour cela qu'on multiplie par 4." },
      { t: "qcm", q: "Quelle formule donne le périmètre du carré ?", choix: ["c × 4", "c × 2", "c + 4", "c : 4"], r: "c × 4", expl: "c + c + c + c = c × 4." },
      { t: "qcm", q: "Quelle formule donne le côté du carré quand on connaît le périmètre ?", choix: ["Périmètre : 4", "Périmètre × 4", "Périmètre − 4", "Périmètre : 2"], r: "Périmètre : 4", expl: "On partage le périmètre en 4 côtés égaux." },
      { t: "vf", q: "Pour un carré de 3 cm de côté : 3 + 3 + 3 + 3 = 3 × 4 = 12 cm.", r: true, expl: "Les deux calculs donnent le même périmètre : 12 cm." },
      { t: "relier", q: "Relie chaque carré à son périmètre.", paires: [["côté 2 cm", "8 cm"], ["côté 5 cm", "20 cm"], ["côté 10 cm", "40 cm"], ["côté 1 cm", "4 cm"]], expl: "On multiplie le côté par 4." }
    ],
    [
      { t: "saisie", q: "Côté : 5 cm. Périmètre = … cm", r: "20", nombre: true, unite: "cm", expl: "5 × 4 = 20 cm." },
      { t: "saisie", q: "Côté : 12 m. Périmètre = … m", r: "48", nombre: true, unite: "m", expl: "12 × 4 = 48 m." },
      { t: "saisie", q: "Côté : 25 m. Périmètre = … m", r: "100", nombre: true, unite: "m", expl: "25 × 4 = 100 m." },
      { t: "saisie", q: "Côté : 7,5 m. Périmètre = … m", r: "30", nombre: true, unite: "m", expl: "7,5 × 4 = 30 m." },
      { t: "saisie", q: "Périmètre : 36 cm. Côté = … cm", r: "9", nombre: true, unite: "cm", expl: "36 : 4 = 9 cm." },
      { t: "saisie", q: "Périmètre : 100 m. Côté = … m", r: "25", nombre: true, unite: "m", expl: "100 : 4 = 25 m." },
      { t: "saisie", q: "Périmètre : 240 m. Côté = … m", r: "60", nombre: true, unite: "m", expl: "240 : 4 = 60 m." },
      { t: "saisie", q: "Périmètre : 58 cm. Côté = … cm", r: "14,5", nombre: true, unite: "cm", expl: "58 : 4 = 14,5 cm." },
      { t: "classer", q: "Pour chaque question, faut-il multiplier ou diviser par 4 ?", cases: ["× 4", ": 4"], items: [["On connaît le côté, on cherche le périmètre.", "× 4"], ["On connaît le périmètre, on cherche le côté.", ": 4"], ["Combien de fil pour faire le tour d'un champ carré de 30 m de côté ?", "× 4"], ["Un terrain carré a 80 m de pourtour : combien mesure un côté ?", ": 4"]], expl: "Du côté vers le périmètre : × 4. Du périmètre vers le côté : : 4." }
    ],
    [
      { t: "saisie", q: "Côté : 1,25 m. Périmètre = … m", r: "5", nombre: true, unite: "m", expl: "1,25 × 4 = 5 m." },
      { t: "saisie", q: "Périmètre : 2 km. Côté = … m", r: "500", nombre: true, unite: "m", aide: "Convertis d'abord en mètres.", expl: "2 km = 2 000 m ; 2 000 : 4 = 500 m." },
      { t: "saisie", q: "Côté : 35 cm. Périmètre en m = … m", r: "1,4", nombre: true, unite: "m", expl: "35 × 4 = 140 cm = 1,4 m." },
      { t: "qcm", q: "Awa calcule le périmètre d'un carré de 8 m de côté et écrit 8 × 2 = 16 m. Où est l'erreur ?", choix: ["Il faut multiplier par 4 : 32 m.", "Il faut additionner : 8 + 4 = 12 m.", "Il n'y a pas d'erreur."], r: "Il faut multiplier par 4 : 32 m.", expl: "Le carré a 4 côtés : 8 × 4 = 32 m." },
      { t: "vf", q: "Si on double le côté d'un carré, son périmètre double aussi.", r: true, expl: "Côté 5 cm : périmètre 20 cm. Côté 10 cm : périmètre 40 cm. Le périmètre double." },
      { t: "saisie", q: "Un carré a le même périmètre qu'un triangle dont les trois côtés mesurent 9 cm, 10 cm et 13 cm. Côté du carré = … cm", r: "8", nombre: true, unite: "cm", expl: "Périmètre du triangle : 9 + 10 + 13 = 32 cm ; côté du carré : 32 : 4 = 8 cm." }
    ],
    [
      { t: "probleme", q: "Un terrain carré a un périmètre de 196 m. Trouve la longueur de son côté.", etapes: [{ q: "Côté du terrain (en m)", r: "49", unite: "m" }], expl: "Côté = Périmètre : 4 = 196 : 4 = 49 m. Vérification : 49 × 4 = 196 m." },
      { t: "probleme", q: "Le papa de Khady veut entourer son jardin carré de 15 m de côté avec un grillage. Le mètre de grillage coûte 1 000 F.", etapes: [{ q: "Étape 1 : périmètre du jardin (en m)", r: "60", unite: "m" }, { q: "Étape 2 : prix du grillage (en F)", r: "60000", unite: "F" }], expl: "15 × 4 = 60 m ; 60 × 1 000 = 60 000 F." },
      { t: "probleme", q: "Pour s'entraîner, Mamadou fait 3 fois le tour d'un terrain de football carré de 80 m de côté.", etapes: [{ q: "Étape 1 : périmètre du terrain (en m)", r: "320", unite: "m" }, { q: "Étape 2 : distance parcourue (en m)", r: "960", unite: "m" }], expl: "80 × 4 = 320 m ; 320 × 3 = 960 m." },
      { t: "probleme", q: "Fatou a un fil de 1 m. Elle l'utilise entièrement pour former un carré.", etapes: [{ q: "Étape 1 : 1 m en cm", r: "100", unite: "cm" }, { q: "Étape 2 : côté du carré (en cm)", r: "25", unite: "cm" }], expl: "1 m = 100 cm ; le fil forme le pourtour : 100 : 4 = 25 cm." },
      { t: "probleme", q: "Un champ carré a 72 m de côté. Un autre champ carré a un périmètre 2 fois plus petit.", etapes: [{ q: "Étape 1 : périmètre du premier champ (en m)", r: "288", unite: "m" }, { q: "Étape 2 : périmètre du second champ (en m)", r: "144", unite: "m" }, { q: "Étape 3 : côté du second champ (en m)", r: "36", unite: "m" }], expl: "72 × 4 = 288 m ; 288 : 2 = 144 m ; 144 : 4 = 36 m." }
    ]
  ]
});


/* ---- ma-mes-perimetre-porte.js ---- */
// À VÉRIFIER : au cahier (photo 0084), l'exemple est écrit « 162 m + 2 m = 170 m » ; l'énoncé (photo 0083) donne 168 m de fil.
// Le module utilise le calcul juste : 168 m + 2 m = 170 m.
LECONS.push({
  id: "ma-mes-perimetre-porte",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre avec une porte connaissant la longueur de la clôture",
  date: "2026-10-19",
  photos: ["DJI_20261118221123_0083_D.jpg", "DJI_20261118221130_0084_D.jpg"],
  retiens:
    "<p>Cette fois, on connaît la longueur de la clôture et on cherche le <b>périmètre</b> du terrain. On fait le chemin inverse : on <b>rajoute</b> la porte.</p>" +
    "<p><b>A. Un rang avec une porte</b></p>" +
    "<p>Exemple : pour clôturer son terrain, un jardinier a utilisé 168 m de fil de fer, avec une porte de 2 m.<br>" +
    "168 m = longueur d'un rang ; 2 m = largeur de la porte.<br>Périmètre du terrain : 168 m + 2 m = 170 m</p>" +
    "<p><b>Périmètre = Longueur d'une rangée + Porte</b></p>" +
    "<p><b>B. Plusieurs rangs avec une porte</b></p>" +
    "<p>Exemple : un jardinier a utilisé 1 424 m de fil de fer, disposé en 4 rangées, pour sécuriser son verger. Il a aménagé une porte de 4 m.<br>" +
    "Longueur d'une rangée : 1 424 m : 4 = 356 m<br>Périmètre : 356 m + 4 m = 360 m</p>" +
    "<p><b>Périmètre = (Longueur de la clôture : nombre de rangées) + Porte</b></p>",
  astuce: "Clôture → périmètre : on fait les opérations <b>à l'envers</b>. On <b>divise</b> par le nombre de rangées, puis on <b>ajoute</b> la porte.",
  regle: "Périmètre = (longueur de la clôture : nombre de rangées) + porte. On divise d'abord, on ajoute la porte ensuite.",
  niveaux: [
    [
      { t: "qcm", q: "On connaît la longueur du fil (un seul rang) et la porte. Pour trouver le périmètre, on…", choix: ["ajoute la porte", "retire la porte", "multiplie par la porte"], r: "ajoute la porte", expl: "Le fil ne passe pas devant la porte : pour avoir le tour complet, on ajoute la porte." },
      { t: "qcm", q: "Avec 4 rangées de fil, comment trouve-t-on la longueur d'une rangée ?", choix: ["longueur totale du fil : 4", "longueur totale du fil × 4", "longueur totale du fil − 4"], r: "longueur totale du fil : 4", expl: "Les 4 rangées ont la même longueur : on partage en 4." },
      { t: "vf", q: "Le périmètre est plus grand que la longueur d'une rangée quand il y a une porte.", r: true, expl: "Périmètre = rangée + porte : il est plus grand de la largeur de la porte." },
      { t: "relier", q: "Relie chaque situation à sa formule.", paires: [["Un rang, une porte", "Rangée + Porte"], ["Plusieurs rangs, une porte", "(Clôture : rangées) + Porte"], ["Clôture connue du périmètre (leçon précédente)", "(Périmètre − Porte) × rangées"]], expl: "Pour trouver le périmètre, on fait le chemin inverse du calcul de la clôture." },
      { t: "saisie", q: "Un jardinier a utilisé 168 m de fil (un rang), avec une porte de 2 m. Périmètre = … m", r: "170", nombre: true, unite: "m", expl: "168 m + 2 m = 170 m." },
      { t: "classer", q: "Dans le problème du verger (1 424 m de fil, 4 rangées, porte de 4 m), range chaque opération.", cases: ["1re opération", "2e opération"], items: [["1 424 : 4 = 356", "1re opération"], ["356 + 4 = 360", "2e opération"]], expl: "On cherche d'abord la longueur d'une rangée, puis on ajoute la porte." }
    ],
    [
      { t: "saisie", q: "Un rang de 95 m de fil, porte de 5 m. Périmètre = … m", r: "100", nombre: true, unite: "m", expl: "95 + 5 = 100 m." },
      { t: "saisie", q: "Un rang de 237 m de grillage, porte de 3 m. Périmètre = … m", r: "240", nombre: true, unite: "m", expl: "237 + 3 = 240 m." },
      { t: "saisie", q: "1 424 m de fil en 4 rangées. Longueur d'une rangée = … m", r: "356", nombre: true, unite: "m", expl: "1 424 : 4 = 356 m." },
      { t: "saisie", q: "Rangée de 356 m, porte de 4 m. Périmètre = … m", r: "360", nombre: true, unite: "m", expl: "356 + 4 = 360 m." },
      { t: "saisie", q: "600 m de fil en 3 rangées, porte de 2 m. Périmètre = … m", r: "202", nombre: true, unite: "m", expl: "600 : 3 = 200 m ; 200 + 2 = 202 m." },
      { t: "saisie", q: "450 m de fil en 5 rangées, porte de 1,5 m. Périmètre = … m", r: "91,5", nombre: true, unite: "m", expl: "450 : 5 = 90 m ; 90 + 1,5 = 91,5 m." },
      { t: "saisie", q: "784 m de fil en 2 rangées, porte de 8 m. Périmètre = … m", r: "400", nombre: true, unite: "m", expl: "784 : 2 = 392 m ; 392 + 8 = 400 m." },
      { t: "trous", q: "Complète.", nombre: true, texte: "Un rang de 146 m + porte de 4 m = [150] m — 3 rangs : 297 m de fil → une rangée = [99] m → périmètre avec une porte de 1 m = [100] m", expl: "146 + 4 = 150 ; 297 : 3 = 99 ; 99 + 1 = 100." }
    ],
    [
      { t: "qcm", q: "900 m de fil en 3 rangées, porte de 3 m. Quel calcul donne le périmètre ?", choix: ["900 : 3 + 3", "900 + 3 : 3", "900 × 3 + 3", "(900 − 3) : 3"], r: "900 : 3 + 3", expl: "D'abord une rangée (900 : 3 = 300 m), puis on ajoute la porte : 303 m." },
      { t: "qcm", q: "Awa a 300 m de fil pour un seul rang et une porte de 5 m. Elle écrit : 300 − 5 = 295 m. A-t-elle raison ?", choix: ["Non, il faut ajouter la porte : 305 m.", "Oui, on retire toujours la porte.", "Non, il faut multiplier : 1 500 m."], r: "Non, il faut ajouter la porte : 305 m.", expl: "On cherche le périmètre à partir de la clôture : on ajoute la porte. On la retire seulement quand on cherche la clôture à partir du périmètre." },
      { t: "vf", q: "Sans porte et avec un seul rang, le périmètre est égal à la longueur du fil.", r: true, expl: "Rien à ajouter : le fil fait exactement le tour." },
      { t: "saisie", q: "1,2 km de fil en 4 rangées, porte de 2 m. Périmètre = … m", r: "302", nombre: true, unite: "m", aide: "Convertis 1,2 km en mètres.", expl: "1,2 km = 1 200 m ; 1 200 : 4 = 300 m ; 300 + 2 = 302 m." },
      { t: "saisie", q: "Un champ carré est clôturé avec un rang de 196 m de fil et une porte de 4 m. Côté du champ = … m", r: "50", nombre: true, unite: "m", expl: "Périmètre : 196 + 4 = 200 m ; côté : 200 : 4 = 50 m." },
      { t: "saisie", q: "Un enclos est clôturé avec 3 rangées : 357 m de fil, porte de 1 m. Périmètre = … m", r: "120", nombre: true, unite: "m", expl: "357 : 3 = 119 m ; 119 + 1 = 120 m." }
    ],
    [
      { t: "probleme", q: "Ali a utilisé 594 m de fil de fer pour clôturer son champ carré avec 3 rangées, en laissant une entrée de 2 m.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "198", unite: "m" }, { q: "Étape 2 : périmètre du champ (en m)", r: "200", unite: "m" }, { q: "Étape 3 : côté du champ (en m)", r: "50", unite: "m" }], expl: "594 : 3 = 198 m ; 198 + 2 = 200 m ; 200 : 4 = 50 m." },
      { t: "probleme", q: "Un jardinier a posé 1 160 m de fil en 4 rangées autour d'un jardin rectangulaire, avec une porte de 10 m. Le jardin mesure 90 m de long.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "290", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "300", unite: "m" }, { q: "Étape 3 : demi-périmètre (en m)", r: "150", unite: "m" }, { q: "Étape 4 : largeur du jardin (en m)", r: "60", unite: "m" }], expl: "1 160 : 4 = 290 m ; 290 + 10 = 300 m ; 300 : 2 = 150 m ; 150 − 90 = 60 m." },
      { t: "probleme", q: "Moussa a utilisé 316 m de fil en 2 rangées pour clôturer un poulailler carré, avec une porte de 2 m.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "158", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "160", unite: "m" }, { q: "Étape 3 : côté du poulailler (en m)", r: "40", unite: "m" }], expl: "316 : 2 = 158 m ; 158 + 2 = 160 m ; 160 : 4 = 40 m." },
      { t: "probleme", q: "Pour son verger de Saint-Louis, un cultivateur a utilisé 2 385 m de fil en 5 rangées, avec un portail de 3 m.", etapes: [{ q: "Étape 1 : longueur d'une rangée (en m)", r: "477", unite: "m" }, { q: "Étape 2 : périmètre du verger (en m)", r: "480", unite: "m" }], expl: "2 385 : 5 = 477 m ; 477 + 3 = 480 m." },
      { t: "qcm", q: "Un terrain est clôturé avec 3 rangées de fil et une porte de 4 m. On a utilisé 1 488 m de fil. Quel est le périmètre ?", choix: ["500 m", "496 m", "1 492 m", "4 468 m"], r: "500 m", expl: "1 488 : 3 = 496 m ; 496 + 4 = 500 m." }
    ]
  ]
});


/* ---- ma-mes-perimetre-rectangle.js ---- */
// À VÉRIFIER : le cahier ne contient pas (encore) de leçon sur le cercle. L'exercice « circonférence 47 cm → diamètre, rayon »,
// déjà travaillé avec le parent, est placé ici en BONUS dans le Défi, avec la formule donnée dans l'énoncé.
LECONS.push({
  id: "ma-mes-perimetre-rectangle",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre et des dimensions du rectangle",
  date: "2026-10-14",
  photos: ["DJI_20261118221108_0080_D.jpg", "DJI_20261118221112_0081_D.jpg"],
  retiens:
    "<p>Les <b>dimensions</b> du rectangle sont la <b>longueur</b> (L) et la <b>largeur</b> (l).</p>" +
    "<p><b>Périmètre = (Longueur + largeur) × 2</b> ou <b>Demi-périmètre × 2</b></p>" +
    "<p><b>Demi-périmètre = Périmètre : 2</b> ou <b>Longueur + largeur</b></p>" +
    "<p>Pour calculer une dimension connaissant le périmètre, on trouve <b>d'abord le demi-périmètre</b>, puis :</p>" +
    "<ul><li><b>Longueur = Demi-périmètre − largeur</b></li>" +
    "<li><b>largeur = Demi-périmètre − Longueur</b></li></ul>" +
    "<p>Exemple : un jardin de 25 m sur 18 m a pour périmètre (25 + 18) × 2 = 86 m. Si l'on sait seulement que le périmètre vaut 86 m et la longueur 25 m : demi-périmètre 86 : 2 = 43 m, largeur 43 − 25 = 18 m.</p>",
  astuce: "Le demi-périmètre, c'est <b>une longueur + une largeur</b> : la moitié du tour. On commence toujours par lui quand on cherche une dimension.",
  regle: "Périmètre = (L + l) × 2. Pour trouver une dimension : demi-périmètre = P : 2, puis on retire la dimension connue.",
  niveaux: [
    [
      { t: "qcm", q: "Quelles sont les dimensions d'un rectangle ?", choix: ["la longueur et la largeur", "le côté et le périmètre", "la hauteur et la base"], r: "la longueur et la largeur", expl: "Un rectangle a une longueur et une largeur : ce sont ses dimensions." },
      { t: "qcm", q: "Quelle formule donne le périmètre du rectangle ?", choix: ["(L + l) × 2", "L + l", "L × 4", "(L + l) : 2"], r: "(L + l) × 2", expl: "Le rectangle a 2 longueurs et 2 largeurs : (L + l) × 2." },
      { t: "qcm", q: "Que représente L + l ?", choix: ["le demi-périmètre", "le périmètre", "la largeur"], r: "le demi-périmètre", expl: "Une longueur plus une largeur, c'est la moitié du tour : le demi-périmètre." },
      { t: "vf", q: "Pour trouver la largeur à partir du périmètre, on calcule d'abord le demi-périmètre.", r: true, expl: "C'est la règle de la leçon : demi-périmètre d'abord, puis on retire la longueur." },
      { t: "relier", q: "Relie chaque grandeur cherchée à sa formule.", paires: [["Périmètre", "(L + l) × 2"], ["Demi-périmètre", "P : 2"], ["Longueur", "Demi-périmètre − l"], ["largeur", "Demi-périmètre − L"]], expl: "Ce sont les quatre formules de la leçon." },
      { t: "saisie", q: "Un rectangle mesure 4 cm sur 2 cm. Son périmètre = … cm", r: "12", nombre: true, unite: "cm", expl: "(4 + 2) × 2 = 6 × 2 = 12 cm." }
    ],
    [
      { t: "saisie", q: "L = 8 cm, l = 5 cm. Périmètre = … cm", r: "26", nombre: true, unite: "cm", expl: "(8 + 5) × 2 = 13 × 2 = 26 cm." },
      { t: "saisie", q: "L = 25 m, l = 18 m. Périmètre = … m", r: "86", nombre: true, unite: "m", expl: "(25 + 18) × 2 = 43 × 2 = 86 m." },
      { t: "saisie", q: "L = 40 m, l = 25 m. Périmètre = … m", r: "130", nombre: true, unite: "m", expl: "(40 + 25) × 2 = 65 × 2 = 130 m." },
      { t: "saisie", q: "L = 12,5 m, l = 7,5 m. Périmètre = … m", r: "40", nombre: true, unite: "m", expl: "(12,5 + 7,5) × 2 = 20 × 2 = 40 m." },
      { t: "saisie", q: "Périmètre = 50 cm. Demi-périmètre = … cm", r: "25", nombre: true, unite: "cm", expl: "50 : 2 = 25 cm." },
      { t: "saisie", q: "Périmètre = 86 m, L = 25 m. Largeur = … m", r: "18", nombre: true, unite: "m", expl: "Demi-périmètre : 86 : 2 = 43 m ; largeur : 43 − 25 = 18 m." },
      { t: "saisie", q: "Périmètre = 130 m, l = 25 m. Longueur = … m", r: "40", nombre: true, unite: "m", expl: "Demi-périmètre : 130 : 2 = 65 m ; longueur : 65 − 25 = 40 m." },
      { t: "saisie", q: "Demi-périmètre = 45 m, L = 30 m. Largeur = … m", r: "15", nombre: true, unite: "m", expl: "45 − 30 = 15 m." },
      { t: "saisie", q: "L = 60 m, l = 35 m. Demi-périmètre = … m", r: "95", nombre: true, unite: "m", expl: "60 + 35 = 95 m." }
    ],
    [
      { t: "qcm", q: "Moussa calcule le périmètre d'un rectangle de 6 m sur 4 m et écrit 6 + 4 = 10 m. Qu'a-t-il trouvé ?", choix: ["le demi-périmètre ; le périmètre est 20 m", "le bon périmètre", "la largeur"], r: "le demi-périmètre ; le périmètre est 20 m", expl: "6 + 4 = 10 m est le demi-périmètre. Il faut encore multiplier par 2 : 20 m." },
      { t: "qcm", q: "Périmètre 70 m, longueur 20 m. Quel calcul est juste pour la largeur ?", choix: ["70 : 2 − 20", "70 − 20", "(70 − 20) × 2", "70 : 4"], r: "70 : 2 − 20", expl: "Demi-périmètre 35 m, puis 35 − 20 = 15 m. Retirer 20 directement de 70 est une erreur fréquente." },
      { t: "saisie", q: "L = 1,2 m, l = 80 cm. Périmètre = … m", r: "4", nombre: true, unite: "m", aide: "Mets d'abord les deux dimensions dans la même unité.", expl: "80 cm = 0,8 m ; (1,2 + 0,8) × 2 = 2 × 2 = 4 m." },
      { t: "saisie", q: "Périmètre = 1 km, l = 200 m. Longueur = … m", r: "300", nombre: true, unite: "m", expl: "1 km = 1 000 m ; demi-périmètre 500 m ; longueur 500 − 200 = 300 m." },
      { t: "saisie", q: "Périmètre = 37 m, L = 11 m. Largeur = … m", r: "7,5", nombre: true, unite: "m", expl: "Demi-périmètre : 37 : 2 = 18,5 m ; largeur : 18,5 − 11 = 7,5 m." },
      { t: "vf", q: "Un rectangle de 10 m sur 5 m et un carré de 7,5 m de côté ont le même périmètre.", r: true, expl: "Rectangle : (10 + 5) × 2 = 30 m. Carré : 7,5 × 4 = 30 m." },
      { t: "trous", q: "Complète le tableau (en m).", nombre: true, texte: "L = 30, l = 20 → P = [100] — P = 64, L = 20 → l = [12] — P = 90, l = 15 → L = [30]", expl: "(30 + 20) × 2 = 100 ; 64 : 2 = 32, 32 − 20 = 12 ; 90 : 2 = 45, 45 − 15 = 30." }
    ],
    [
      { t: "probleme", q: "Deux terrains ont chacun un périmètre de 196 m. L'un est carré. L'autre est rectangulaire et mesure 53 m de long.", etapes: [{ q: "Étape 1 : côté du terrain carré (en m)", r: "49", unite: "m" }, { q: "Étape 2 : demi-périmètre du terrain rectangulaire (en m)", r: "98", unite: "m" }, { q: "Étape 3 : largeur du terrain rectangulaire (en m)", r: "45", unite: "m" }], expl: "Carré : 196 : 4 = 49 m. Rectangle : 196 : 2 = 98 m, puis 98 − 53 = 45 m." },
      { t: "probleme", q: "Un jardin rectangulaire mesure 600 m de demi-périmètre. La longueur dépasse la largeur de 40 m. Trouve les dimensions du jardin.", etapes: [{ q: "Étape 1 : deux largeurs = 600 − 40 (en m)", r: "560", unite: "m" }, { q: "Étape 2 : largeur (en m)", r: "280", unite: "m" }, { q: "Étape 3 : longueur (en m)", r: "320", unite: "m" }], expl: "Si on enlève les 40 m de plus, il reste deux largeurs : 600 − 40 = 560 m ; largeur 560 : 2 = 280 m ; longueur 280 + 40 = 320 m. Vérification : 280 + 320 = 600 m." },
      { t: "probleme", q: "Un champ rectangulaire de Thiès mesure 120 m sur 80 m. Le propriétaire veut l'entourer d'un fil qui coûte 300 F le mètre.", etapes: [{ q: "Étape 1 : périmètre du champ (en m)", r: "400", unite: "m" }, { q: "Étape 2 : prix du fil (en F)", r: "120000", unite: "F" }], expl: "(120 + 80) × 2 = 400 m ; 400 × 300 = 120 000 F." },
      { t: "probleme", q: "La cour rectangulaire de l'école a un périmètre de 150 m. Sa largeur mesure 30 m.", etapes: [{ q: "Étape 1 : demi-périmètre (en m)", r: "75", unite: "m" }, { q: "Étape 2 : longueur (en m)", r: "45", unite: "m" }, { q: "Étape 3 : de combien la longueur dépasse-t-elle la largeur ? (en m)", r: "15", unite: "m" }], expl: "150 : 2 = 75 m ; 75 − 30 = 45 m ; 45 − 30 = 15 m." },
      { t: "probleme", q: "<b>Bonus</b> (le cercle, pas encore vu au cahier) : le tour d'un cercle s'appelle la <b>circonférence</b>. On trouve le <b>diamètre</b> en divisant la circonférence par 3,14, et le <b>rayon</b> est la moitié du diamètre. Un cercle a une circonférence de 47 cm. Arrondis au centième.", etapes: [{ q: "Étape 1 : diamètre (47 : 3,14), en cm", r: ["14,97", "14,96"], unite: "cm" }, { q: "Étape 2 : rayon (diamètre : 2), en cm", r: ["7,48", "7,49"], unite: "cm" }], expl: "47 : 3,14 ≈ 14,97 cm ; 14,97 : 2 ≈ 7,48 cm (environ 7,5 cm)." }
    ]
  ]
});


/* ---- ma-mes-perimetre-valeur-totale.js ---- */
LECONS.push({
  id: "ma-mes-perimetre-valeur-totale",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul du périmètre à partir de la valeur totale et de la valeur unitaire",
  date: "2026-11-02",
  photos: ["DJI_20261118221143_0086_D.jpg", "DJI_20261118221147_0087_D.jpg"],
  retiens:
    "<p>On connaît la <b>dépense totale</b> (valeur totale, VT) et le <b>prix d'un mètre</b> (valeur unitaire, VU). La division VT : VU donne la <b>longueur</b> de fil ou de grillage achetée.</p>" +
    "<p><b>1. Un rang avec une porte</b></p>" +
    "<p><b>Périmètre = VT : VU + Porte</b></p>" +
    "<p>Exemple : après avoir aménagé une porte de 5 m, un jardinier dépense 122 500 F de grillage à 500 F le mètre.<br>" +
    "Longueur du grillage : 122 500 : 500 = 245 m<br>Périmètre : 245 m + 5 m = 250 m</p>" +
    "<p><b>2. Plusieurs rangs avec une porte</b></p>" +
    "<p><b>Périmètre = (VT : VU) : nombre de rangées + Porte</b></p>" +
    "<p>Exemple : un jardin est clôturé avec 3 rangées de fil barbelé et une porte de 2 m. On dépense 24 000 F pour le fil, à 200 F le mètre.<br>" +
    "Longueur totale du fil : 24 000 : 200 = 120 m<br>Longueur d'une rangée : 120 m : 3 = 40 m<br>Périmètre : 40 m + 2 m = 42 m</p>",
  astuce: "Trois questions dans l'ordre : <b>combien de mètres</b> ai-je achetés ? (VT : VU) — <b>combien pour un rang</b> ? (: rangées) — <b>quel tour complet</b> ? (+ porte).",
  regle: "Longueur achetée = valeur totale : valeur unitaire. Puis on divise par le nombre de rangées et on ajoute la porte pour obtenir le périmètre.",
  niveaux: [
    [
      { t: "qcm", q: "Dans « 500 F le mètre », 500 F est…", choix: ["la valeur unitaire", "la valeur totale", "le périmètre"], r: "la valeur unitaire", expl: "C'est le prix d'une unité (un mètre) : la valeur unitaire (VU)." },
      { t: "qcm", q: "Dans « il dépense 122 500 F », 122 500 F est…", choix: ["la valeur totale", "la valeur unitaire", "la longueur du grillage"], r: "la valeur totale", expl: "C'est la dépense pour tout le grillage : la valeur totale (VT)." },
      { t: "qcm", q: "Quelle opération donne la longueur de grillage achetée ?", choix: ["VT : VU", "VT × VU", "VT − VU", "VU : VT"], r: "VT : VU", expl: "Longueur = dépense totale : prix d'un mètre." },
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["VT", "valeur totale"], ["VU", "valeur unitaire"], ["VT : VU", "longueur achetée"]], expl: "On divise la valeur totale par la valeur unitaire pour trouver le nombre de mètres." },
      { t: "vf", q: "Après avoir trouvé la longueur du grillage, on ajoute la porte pour obtenir le périmètre.", r: true, expl: "Le grillage ne passe pas devant la porte : on l'ajoute pour avoir tout le tour." },
      { t: "saisie", q: "122 500 F de grillage à 500 F le mètre. Longueur du grillage = … m", r: "245", nombre: true, unite: "m", expl: "122 500 : 500 = 245 m." }
    ],
    [
      { t: "saisie", q: "Grillage : 245 m, porte de 5 m. Périmètre = … m", r: "250", nombre: true, unite: "m", expl: "245 + 5 = 250 m." },
      { t: "saisie", q: "50 000 F de grillage à 250 F le mètre. Longueur = … m", r: "200", nombre: true, unite: "m", expl: "50 000 : 250 = 200 m." },
      { t: "saisie", q: "50 000 F de grillage à 250 F le mètre (un rang), porte de 3 m. Périmètre = … m", r: "203", nombre: true, unite: "m", expl: "50 000 : 250 = 200 m ; 200 + 3 = 203 m." },
      { t: "saisie", q: "36 000 F de fil à 400 F le mètre (un rang), porte de 2 m. Périmètre = … m", r: "92", nombre: true, unite: "m", expl: "36 000 : 400 = 90 m ; 90 + 2 = 92 m." },
      { t: "saisie", q: "24 000 F de fil à 200 F le mètre. Longueur totale du fil = … m", r: "120", nombre: true, unite: "m", expl: "24 000 : 200 = 120 m." },
      { t: "saisie", q: "120 m de fil en 3 rangées. Longueur d'une rangée = … m", r: "40", nombre: true, unite: "m", expl: "120 : 3 = 40 m." },
      { t: "saisie", q: "Rangée de 40 m, porte de 2 m. Périmètre = … m", r: "42", nombre: true, unite: "m", expl: "40 + 2 = 42 m." },
      { t: "saisie", q: "60 000 F de fil à 300 F le mètre, 2 rangées, porte de 4 m. Périmètre = … m", r: "104", nombre: true, unite: "m", expl: "60 000 : 300 = 200 m ; 200 : 2 = 100 m ; 100 + 4 = 104 m." }
    ],
    [
      { t: "qcm", q: "48 000 F de fil à 200 F le mètre, 3 rangées, porte de 2 m. Dans quel ordre fait-on les calculs ?", choix: ["48 000 : 200, puis : 3, puis + 2", "48 000 : 3, puis + 2, puis : 200", "48 000 + 2, puis : 200, puis : 3"], r: "48 000 : 200, puis : 3, puis + 2", expl: "Longueur achetée (240 m), une rangée (80 m), périmètre (82 m)." },
      { t: "qcm", q: "Fatou écrit : 30 000 × 300 pour trouver la longueur de fil achetée à 300 F le mètre. Que faut-il faire ?", choix: ["Diviser : 30 000 : 300 = 100 m", "Ajouter : 30 000 + 300", "Rien, c'est juste"], r: "Diviser : 30 000 : 300 = 100 m", expl: "Pour trouver le nombre de mètres, on divise la valeur totale par la valeur unitaire." },
      { t: "saisie", q: "96 000 F de fil à 150 F le mètre, 4 rangées, porte de 4 m. Périmètre = … m", r: "164", nombre: true, unite: "m", expl: "96 000 : 150 = 640 m ; 640 : 4 = 160 m ; 160 + 4 = 164 m." },
      { t: "saisie", q: "Un rang de grillage acheté 87 500 F à 350 F le mètre, porte de 3 m. Périmètre = … m", r: "253", nombre: true, unite: "m", expl: "87 500 : 350 = 250 m ; 250 + 3 = 253 m." },
      { t: "vf", q: "Si le mètre de fil coûte plus cher, avec la même somme on achète moins de fil.", r: true, expl: "On divise la même valeur totale par une valeur unitaire plus grande : le résultat est plus petit." },
      { t: "trous", q: "Complète (45 000 F de fil à 250 F le mètre, 2 rangées, porte de 1 m).", nombre: true, texte: "Longueur achetée : [180] m — une rangée : [90] m — périmètre : [91] m", expl: "45 000 : 250 = 180 ; 180 : 2 = 90 ; 90 + 1 = 91." }
    ],
    [
      { t: "probleme", q: "Après avoir aménagé une porte de 5 m, un jardinier dépense 122 500 F de grillage à 500 F le mètre pour sécuriser son jardin. Trouve son périmètre.", etapes: [{ q: "Étape 1 : longueur du grillage (en m)", r: "245", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "250", unite: "m" }], expl: "122 500 : 500 = 245 m ; 245 + 5 = 250 m." },
      { t: "probleme", q: "Ton père clôture son jardin avec 3 rangées de fil barbelé en laissant une porte de 2 m. Il dépense 24 000 F pour acheter le fil à 200 F le mètre. Trouve le périmètre du jardin.", etapes: [{ q: "Étape 1 : longueur totale du fil (en m)", r: "120", unite: "m" }, { q: "Étape 2 : longueur d'une rangée (en m)", r: "40", unite: "m" }, { q: "Étape 3 : périmètre (en m)", r: "42", unite: "m" }], expl: "24 000 : 200 = 120 m ; 120 : 3 = 40 m ; 40 + 2 = 42 m." },
      { t: "probleme", q: "Mamadou dépense 73 500 F pour clôturer un champ carré avec 3 rangées de fil à 250 F le mètre. Il laisse une entrée de 2 m.", etapes: [{ q: "Étape 1 : longueur totale du fil (en m)", r: "294", unite: "m" }, { q: "Étape 2 : longueur d'une rangée (en m)", r: "98", unite: "m" }, { q: "Étape 3 : périmètre (en m)", r: "100", unite: "m" }, { q: "Étape 4 : côté du champ (en m)", r: "25", unite: "m" }], expl: "73 500 : 250 = 294 m ; 294 : 3 = 98 m ; 98 + 2 = 100 m ; 100 : 4 = 25 m." },
      { t: "probleme", q: "Pour un jardin rectangulaire de 52 m de long, on achète un seul rang de grillage pour 90 000 F, à 500 F le mètre. On a laissé une porte de 4 m.", etapes: [{ q: "Étape 1 : longueur du grillage (en m)", r: "180", unite: "m" }, { q: "Étape 2 : périmètre (en m)", r: "184", unite: "m" }, { q: "Étape 3 : demi-périmètre (en m)", r: "92", unite: "m" }, { q: "Étape 4 : largeur du jardin (en m)", r: "40", unite: "m" }], expl: "90 000 : 500 = 180 m ; 180 + 4 = 184 m ; 184 : 2 = 92 m ; 92 − 52 = 40 m." },
      { t: "qcm", q: "Une coopérative dépense 120 000 F de fil à 400 F le mètre pour 2 rangées autour d'un verger, avec un portail de 5 m. Quel est le périmètre du verger ?", choix: ["155 m", "150 m", "305 m", "145 m"], r: "155 m", expl: "120 000 : 400 = 300 m ; 300 : 2 = 150 m ; 150 + 5 = 155 m." }
    ]
  ]
});


/* ---- vdsm-carences-avitaminose.js ---- */
// À VÉRIFIER : sur la photocopie « Leçon 25 », l'élève a écrit « avitaminose » sous « Protéines » ; c'est faux (le kwashiorkor est une carence en protéines, pas en vitamines). Corrigé dans le module.
// À VÉRIFIER : la photocopie range myopie, presbytie, hypermétropie et glaucome parmi les maladies dues au manque de vitamine A ; ce n'est pas exact. Le module ne garde que la cécité nocturne (mal voir la nuit), qui est bien liée au manque de vitamine A.
LECONS.push({
  id: "vdsm-carences-avitaminose",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les carences nutritionnelles et l'avitaminose",
  date: "2026-11-10",
  photos: ["DJI_20261118221629_0119_D.jpg", "DJI_20261118221643_0120_D.jpg", "DJI_20261118221722_0121_D.jpg"],
  retiens:
    "<p>On parle de <b>carences alimentaires</b> quand l'organisme manque de nutriments essentiels dont il a besoin pour fonctionner normalement.</p>" +
    "<p>Une <b>avitaminose</b> est une carence de <b>vitamines</b> : c'est l'ensemble des troubles dus à l'absence d'une vitamine, par carence totale et prolongée. Elle peut entraîner une malnutrition, parfois mortelle, ou des maladies plus ou moins graves.</p>" +
    "<p><b>Les causes de la malnutrition</b> : la sous-alimentation (ne pas manger assez) ; une alimentation pas assez variée, qui manque d'apports essentiels.</p>" +
    "<p>Une alimentation déséquilibrée peut entraîner des <b>maladies nutritionnelles</b> : la cécité, le béribéri, le scorbut, le rachitisme, le kwashiorkor, l'anémie, le goitre, la pellagre, l'obésité, le marasme…</p>" +
    "<table><tr><th>Carence</th><th>Maladie</th><th>Signes</th><th>Solutions</th></tr>" +
    "<tr><td>vitamine C</td><td><b>scorbut</b></td><td>saignement des gencives, fatigue, chute des dents</td><td>manger assez de fruits et de légumes</td></tr>" +
    "<tr><td>vitamine B1</td><td><b>béribéri</b></td><td>faiblesse des muscles, amaigrissement, problèmes nerveux et du cœur</td><td>manger des céréales, des haricots</td></tr>" +
    "<tr><td>vitamine B3</td><td><b>pellagre</b></td><td>lésions de la peau, diarrhée, troubles nerveux</td><td>manger assez de viande</td></tr>" +
    "<tr><td>vitamine D</td><td><b>rachitisme</b></td><td>os fragiles, troubles de la croissance</td><td>produits laitiers, aliments riches en calcium</td></tr>" +
    "<tr><td>vitamine A</td><td><b>troubles des yeux</b>, surtout la cécité nocturne</td><td>on voit mal la nuit, vision floue</td><td>lait, légumes et fruits</td></tr>" +
    "<tr><td>protéines (ce n'est pas une vitamine)</td><td><b>kwashiorkor</b></td><td>fatigue, amaigrissement, gonflement du ventre, troubles digestifs</td><td>manger assez de viande, de lait et de poisson</td></tr></table>" +
    "<p><b>Attention</b> : le kwashiorkor est une carence en <b>protéines</b>, ce n'est donc <b>pas</b> une avitaminose.</p>",
  astuce: "« A-vitamin-ose » : <b>a-</b> veut dire « sans ». Avitaminose = maladie « sans vitamine ». Et pour se souvenir : <b>C</b> comme <b>C</b>itron contre le scorbut ; <b>D</b> comme <b>D</b>ents et os solides contre le rachitisme.",
  regle: "Une carence, c'est un manque d'un nutriment essentiel ; une avitaminose, c'est un manque de vitamine. Vitamine C → scorbut, B1 → béribéri, B3 → pellagre, D → rachitisme, A → cécité nocturne ; protéines → kwashiorkor (pas une avitaminose).",
  niveaux: [
    [
      { t: "qcm", q: "On parle de carence alimentaire quand…", choix: ["l'organisme manque de nutriments essentiels", "on mange trop de fruits", "on boit beaucoup d'eau"], r: "l'organisme manque de nutriments essentiels", expl: "Carence = manque." },
      { t: "qcm", q: "Une avitaminose est une carence de…", choix: ["vitamines", "sucre", "eau"], r: "vitamines", expl: "A-vitamin-ose : maladie due au manque de vitamine." },
      { t: "vf", q: "Une alimentation pas assez variée peut causer la malnutrition.", r: true, expl: "C'est une des deux causes citées au cahier." },
      { t: "qcm", q: "Le scorbut est dû au manque de…", choix: ["vitamine C", "vitamine D", "protéines"], r: "vitamine C", expl: "Vitamine C → scorbut. On la trouve dans les fruits et les légumes." },
      { t: "qcm", q: "Le rachitisme est dû au manque de…", choix: ["vitamine D", "vitamine C", "vitamine B1"], r: "vitamine D", expl: "Vitamine D → rachitisme : les os deviennent fragiles." },
      { t: "vf", q: "La sous-alimentation, c'est ne pas manger assez.", r: true, expl: "Sous-alimenté = qui mange moins que ce dont il a besoin." }
    ],
    [
      { t: "relier", q: "Relie chaque carence à la maladie qu'elle provoque.", paires: [["vitamine C", "scorbut"], ["vitamine B1", "béribéri"], ["vitamine B3", "pellagre"], ["vitamine D", "rachitisme"], ["protéines", "kwashiorkor"]], expl: "C'est le tableau de la leçon 25." },
      { t: "relier", q: "Relie chaque maladie à un de ses signes.", paires: [["scorbut", "saignement des gencives"], ["rachitisme", "os fragiles"], ["kwashiorkor", "gonflement du ventre"], ["pellagre", "lésions de la peau"]], expl: "Chaque maladie a ses signes propres." },
      { t: "qcm", q: "Que faut-il manger pour éviter le scorbut ?", choix: ["des fruits et des légumes", "seulement du riz blanc", "des bonbons"], r: "des fruits et des légumes", expl: "Ils apportent la vitamine C." },
      { t: "qcm", q: "Le manque de vitamine A peut faire que…", choix: ["l'on voit mal la nuit", "les gencives saignent", "le ventre gonfle"], r: "l'on voit mal la nuit", expl: "La vision amoindrie la nuit (cécité nocturne) vient du manque de vitamine A." },
      { t: "saisie", q: "Quelle maladie est due au manque de vitamine B1 ?", r: ["le béribéri", "béribéri"], expl: "Vitamine B1 → béribéri." },
      { t: "vf", q: "Pour éviter le rachitisme, il faut des produits laitiers et des aliments riches en calcium.", r: true, expl: "C'est la solution indiquée au cahier." },
      { t: "classer", q: "Range chaque maladie selon ce qui manque.", cases: ["une vitamine", "des protéines"], items: [["le scorbut", "une vitamine"], ["le béribéri", "une vitamine"], ["la pellagre", "une vitamine"], ["le rachitisme", "une vitamine"], ["le kwashiorkor", "des protéines"]], expl: "Seul le kwashiorkor vient d'un manque de protéines." },
      { t: "qcm", q: "Quels aliments évitent le kwashiorkor ?", choix: ["la viande, le lait et le poisson", "le sucre et le thé", "l'eau seulement"], r: "la viande, le lait et le poisson", expl: "Ils sont riches en protéines." },
      { t: "trous", q: "Complète.", texte: "Une [avitaminose] est une carence de vitamines. Le manque de vitamine C donne le [scorbut] ; le manque de vitamine D donne le [rachitisme].", expl: "C → scorbut ; D → rachitisme." }
    ],
    [
      { t: "vf", q: "Le kwashiorkor est une avitaminose.", r: false, expl: "Piège : le kwashiorkor vient d'un manque de protéines. Les protéines ne sont pas des vitamines." },
      { t: "qcm", q: "Laquelle de ces maladies n'est PAS une avitaminose ?", choix: ["le kwashiorkor", "le scorbut", "le béribéri", "la pellagre"], r: "le kwashiorkor", expl: "Scorbut, béribéri et pellagre viennent d'un manque de vitamine ; le kwashiorkor, d'un manque de protéines." },
      { t: "qcm", q: "Que veut dire le préfixe <b>a-</b> dans « avitaminose » ?", choix: ["sans", "beaucoup", "avec"], r: "sans", expl: "A-vitaminose : sans vitamine, comme a-normal (pas normal)." },
      { t: "saisie", q: "Quelle maladie est due au manque de vitamine B3 ?", r: ["la pellagre", "pellagre"], expl: "Vitamine B3 → pellagre." },
      { t: "relier", q: "Relie chaque carence à l'aliment qui la combat (d'après le cahier).", paires: [["vitamine C", "fruits et légumes"], ["vitamine B1", "céréales et haricots"], ["vitamine D", "produits laitiers"], ["protéines", "viande et poisson"]], expl: "Chaque solution apporte ce qui manque." },
      { t: "vf", q: "Une avitaminose peut entraîner une malnutrition mortelle si elle dure longtemps.", r: true, expl: "La photocopie dit qu'elle peut être fatale ou donner des maladies plus ou moins graves." },
      { t: "qcm", q: "Fatou a les gencives qui saignent et elle est très fatiguée. Elle mange rarement des fruits. Quelle maladie peut-on soupçonner ?", choix: ["le scorbut", "le rachitisme", "le kwashiorkor"], r: "le scorbut", expl: "Gencives qui saignent + pas de fruits = manque de vitamine C." }
    ],
    [
      { t: "qcm", q: "Un petit enfant a le ventre gonflé, il maigrit et il est fatigué. Il ne mange presque jamais de viande, de lait ni de poisson. De quoi souffre-t-il sans doute ?", choix: ["du kwashiorkor, un manque de protéines", "du scorbut, un manque de vitamine C", "de la pellagre, un manque de vitamine B3"], r: "du kwashiorkor, un manque de protéines", expl: "Ventre gonflé + amaigrissement + manque de viande, lait et poisson : kwashiorkor." },
      { t: "trous", q: "Complète le texte.", texte: "Les causes de la malnutrition sont la [sous-alimentation] et une alimentation pas assez [variée]. Le manque de vitamine B1 donne le [béribéri] et le manque de protéines donne le [kwashiorkor].", expl: "Causes et maladies de la leçon." },
      { t: "classer", q: "Avitaminose ou pas ?", cases: ["avitaminose", "pas une avitaminose"], items: [["le scorbut", "avitaminose"], ["le rachitisme", "avitaminose"], ["le béribéri", "avitaminose"], ["le kwashiorkor", "pas une avitaminose"], ["la pellagre", "avitaminose"]], expl: "Seul le kwashiorkor ne vient pas d'un manque de vitamine." },
      { t: "qcm", q: "Moussa ne mange que du riz blanc tous les jours. Que lui conseiller ?", choix: ["varier ses repas avec des fruits, des légumes, du poisson et du lait", "manger encore plus de riz blanc", "sauter des repas"], r: "varier ses repas avec des fruits, des légumes, du poisson et du lait", expl: "Une alimentation variée évite les carences." },
      { t: "saisie", q: "Comment appelle-t-on une maladie due au manque de vitamine ? Une …", r: "avitaminose", expl: "A (sans) + vitamine + ose (maladie)." },
      { t: "vf", q: "L'obésité fait partie des maladies nutritionnelles citées au cahier.", r: true, expl: "Une alimentation déséquilibrée peut aussi donner l'obésité." }
    ]
  ]
});


/* ---- vdsm-deboisement.js ---- */
LECONS.push({
  id: "vdsm-deboisement",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Le déboisement ou la déforestation",
  date: "2026-09-22",
  photos: ["DJI_20261118221404_0103_D.jpg", "DJI_20261118221414_0104_D.jpg"],
  retiens:
    "<p>Le <b>déboisement</b> est le phénomène de <b>réduction des surfaces de forêt</b>.</p>" +
    "<p><b>Les causes du déboisement</b></p>" +
    "<ul><li>l'abattage abusif des arbres ;</li><li>les feux de brousse ;</li><li>la construction d'infrastructures (routes, maisons…).</li></ul>" +
    "<p><b>Les conséquences du déboisement</b></p>" +
    "<ul><li>la désertification ;</li><li>la disparition d'espèces animales ;</li><li>la non-satisfaction des besoins vitaux (nourriture, logement) ;</li><li>le réchauffement climatique.</li></ul>" +
    "<p><b>Les solutions (mesures) contre le déboisement</b></p>" +
    "<ul><li>le reboisement (reboiser, c'est planter des arbres) ;</li><li>protéger les forêts, éviter les feux de brousse ;</li><li>sanctionner les auteurs (les coupeurs abusifs de bois).</li></ul>",
  astuce: "Pour chaque problème, pose trois questions : <b>Pourquoi ?</b> (les causes), <b>Et alors ?</b> (les conséquences), <b>Que faire ?</b> (les solutions).",
  regle: "Le déboisement est la réduction des surfaces de forêt. Causes : abattage abusif, feux de brousse, constructions. Conséquences : désertification, disparition d'animaux, réchauffement. Solutions : reboiser, protéger, sanctionner.",
  niveaux: [
    [
      { t: "qcm", q: "Le déboisement, c'est…", choix: ["la réduction des surfaces de forêt", "la plantation de nouveaux arbres", "l'arrosage des jardins"], r: "la réduction des surfaces de forêt", expl: "Déboiser, c'est enlever le bois, les arbres : la forêt devient plus petite." },
      { t: "vf", q: "Déboisement et déforestation veulent dire la même chose.", r: true, expl: "Le titre de la leçon dit : « Le déboisement ou la déforestation »." },
      { t: "qcm", q: "Laquelle est une <b>cause</b> du déboisement ?", choix: ["l'abattage abusif des arbres", "le reboisement", "la désertification"], r: "l'abattage abusif des arbres", expl: "Couper trop d'arbres fait disparaître la forêt : c'est une cause." },
      { t: "qcm", q: "Laquelle est une <b>solution</b> contre le déboisement ?", choix: ["le reboisement", "les feux de brousse", "la construction de routes"], r: "le reboisement", expl: "Reboiser, c'est replanter des arbres." },
      { t: "qcm", q: "Laquelle est une <b>conséquence</b> du déboisement ?", choix: ["la désertification", "l'abattage des arbres", "le reboisement"], r: "la désertification", expl: "Sans arbres, le sol s'appauvrit et le désert avance." },
      { t: "vf", q: "Les feux de brousse sont une cause du déboisement.", r: true, expl: "Le feu détruit les arbres de la brousse." }
    ],
    [
      { t: "classer", q: "Range chaque élément : cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["l'abattage abusif des arbres", "cause"], ["la construction d'infrastructures", "cause"], ["la désertification", "conséquence"], ["le réchauffement climatique", "conséquence"], ["le reboisement", "solution"], ["sanctionner les coupeurs abusifs", "solution"]], expl: "Les causes viennent avant, les conséquences après ; les solutions servent à lutter." },
      { t: "classer", q: "Encore un tri : cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["les feux de brousse", "cause"], ["la disparition d'espèces animales", "conséquence"], ["protéger les forêts", "solution"], ["la non-satisfaction des besoins vitaux", "conséquence"], ["éviter les feux de brousse", "solution"]], expl: "Les feux de brousse causent le déboisement ; on les évite pour protéger la forêt." },
      { t: "saisie", q: "Planter des arbres là où on les a coupés, c'est le …", r: "reboisement", expl: "Reboiser = remettre du bois, des arbres." },
      { t: "qcm", q: "Pourquoi les animaux disparaissent-ils quand la forêt est coupée ?", choix: ["ils perdent leur abri et leur nourriture", "ils ont trop d'eau", "ils deviennent trop nombreux"], r: "ils perdent leur abri et leur nourriture", expl: "La forêt est la maison des animaux : sans elle, ils disparaissent." },
      { t: "vf", q: "Construire des routes et des maisons peut entraîner le déboisement.", r: true, expl: "La construction d'infrastructures est une cause citée au cahier." },
      { t: "vf", q: "Le reboisement est une cause du déboisement.", r: false, expl: "Le reboisement est une solution : on replante des arbres." },
      { t: "relier", q: "Relie chaque mot à son sens.", paires: [["déboiser", "couper les arbres"], ["reboiser", "planter des arbres"], ["désertification", "avancée du désert"], ["abattage", "action de couper un arbre"]], expl: "Dé- = enlever ; re- = de nouveau." },
      { t: "qcm", q: "Les besoins vitaux cités au cahier sont…", choix: ["la nourriture et le logement", "la télévision et le téléphone", "les jeux et les vacances"], r: "la nourriture et le logement", expl: "La forêt donne des fruits, du bois pour construire… Sans elle, ces besoins ne sont plus satisfaits." },
      { t: "trous", q: "Complète la définition.", texte: "Le déboisement est le phénomène de [réduction] des surfaces de [forêt].", expl: "La forêt devient plus petite : sa surface est réduite." }
    ],
    [
      { t: "qcm", q: "Mamadou coupe chaque jour beaucoup d'arbres pour vendre du charbon de bois, sans en replanter. Que fait-il ?", choix: ["un abattage abusif", "un reboisement", "une protection de la forêt"], r: "un abattage abusif", expl: "Abusif veut dire « trop, plus que permis » : c'est une cause du déboisement." },
      { t: "qcm", q: "Que faut-il faire contre les coupeurs abusifs de bois ?", choix: ["les sanctionner", "les féliciter", "leur donner plus de haches"], r: "les sanctionner", expl: "Le cahier propose de sanctionner les auteurs." },
      { t: "vf", q: "Le réchauffement climatique est une conséquence du déboisement.", r: true, expl: "Les arbres rafraîchissent l'air ; quand ils disparaissent, la chaleur augmente." },
      { t: "vf", q: "La désertification est une solution contre le déboisement.", r: false, expl: "C'est une conséquence : le désert avance quand les arbres disparaissent." },
      { t: "saisie", q: "Comment appelle-t-on l'avancée du désert, conséquence du déboisement ?", r: "la désertification", expl: "Désert → désertification." },
      { t: "relier", q: "Relie chaque cause à une solution qui la combat.", paires: [["abattage abusif des arbres", "sanctionner les coupeurs abusifs"], ["feux de brousse", "éviter les feux de brousse"], ["forêt déjà coupée", "le reboisement"]], expl: "Chaque solution répond à une cause précise." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut protéger les forêts.", expl: "Protéger les forêts est une solution contre le déboisement." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "À cause de l'abattage abusif des arbres et des feux de [brousse], la forêt recule. Cela entraîne la [désertification] et la disparition d'espèces [animales]. Pour lutter, il faut pratiquer le [reboisement].", expl: "Causes, conséquences, solution." },
      { t: "qcm", q: "Au village d'Awa, la forêt a disparu. Quelle action est la plus utile pour la faire revenir ?", choix: ["organiser une journée de reboisement", "allumer des feux pour nettoyer", "construire une route dans la brousse"], r: "organiser une journée de reboisement", expl: "Pour que la forêt revienne, il faut replanter des arbres." },
      { t: "classer", q: "Bonne action pour la forêt ou mauvaise action ?", cases: ["bonne action", "mauvaise action"], items: [["planter un arbre", "bonne action"], ["éteindre un feu de brousse", "bonne action"], ["couper du bois sans limite", "mauvaise action"], ["mettre le feu à la brousse", "mauvaise action"], ["signaler un coupeur abusif", "bonne action"]], expl: "Ce qui protège la forêt est bon ; ce qui la détruit est mauvais." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Le déboisement provoque la désertification.", "La désertification provoque le reboisement.", "Le reboisement provoque le déboisement."], r: "Le déboisement provoque la désertification.", expl: "La cause (déboisement) entraîne la conséquence (désertification)." },
      { t: "saisie", q: "Écris le verbe qui veut dire « planter de nouveau des arbres ».", r: "reboiser", expl: "Re- (de nouveau) + boiser : reboiser." }
    ]
  ]
});


/* ---- vdsm-degradation-ressources.js ---- */
LECONS.push({
  id: "vdsm-degradation-ressources",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les formes de dégradation des ressources du milieu",
  date: "2026-09-18",
  photos: ["DJI_20261118221345_0101_D.jpg", "DJI_20261118221356_0102_D.jpg"],
  retiens:
    "<p>L'<b>environnement</b>, c'est ce qui nous entoure. Il subit des <b>agressions dues à l'homme et à la nature</b>. Il en résulte la <b>dégradation des ressources</b>, qui se présente sous diverses formes :</p>" +
    "<ul>" +
    "<li>le <b>déboisement</b> ou la <b>déforestation</b> ;</li>" +
    "<li>la <b>surexploitation</b> des ressources du sol, du sous-sol et des eaux ;</li>" +
    "<li>l'<b>érosion éolienne</b>, avec le <b>vent</b> qui emporte le sable ;</li>" +
    "<li>l'<b>érosion hydrique</b>, avec le <b>ruissellement des eaux</b> ;</li>" +
    "<li>l'<b>érosion côtière</b>, avec l'<b>avancée de la mer</b> ;</li>" +
    "<li>l'<b>extraction du sable marin</b> ;</li>" +
    "<li>les <b>feux de brousse</b>, qui participent à la déforestation ;</li>" +
    "<li>la <b>pollution</b> du sol, de l'eau et de l'air.</li>" +
    "</ul>",
  astuce: "Trois érosions, trois coupables : <b>éolienne</b> = le vent (Éole, dieu du vent), <b>hydrique</b> = l'eau qui ruisselle, <b>côtière</b> = la mer qui avance sur la côte.",
  regle: "L'environnement est abîmé par l'homme et par la nature : déboisement, surexploitation, érosions (vent, eau, mer), extraction du sable marin, feux de brousse et pollution.",
  niveaux: [
    [
      { t: "qcm", q: "L'environnement, c'est…", choix: ["ce qui nous entoure", "seulement la forêt", "seulement la mer"], r: "ce qui nous entoure", expl: "L'environnement, c'est tout ce qui nous entoure : le sol, l'eau, l'air, les arbres, les animaux…" },
      { t: "qcm", q: "Qui cause la dégradation des ressources du milieu ?", choix: ["l'homme et la nature", "seulement l'homme", "seulement la nature"], r: "l'homme et la nature", expl: "Le cahier dit que l'environnement subit des agressions dues à l'homme ET à la nature." },
      { t: "vf", q: "Les feux de brousse participent à la déforestation.", r: true, expl: "En brûlant les arbres, les feux de brousse font disparaître la forêt." },
      { t: "qcm", q: "Dans l'érosion <b>éolienne</b>, qu'est-ce qui emporte le sable ?", choix: ["le vent", "la pluie", "la mer"], r: "le vent", expl: "Éolienne vient d'Éole, le dieu du vent : c'est le vent qui emporte le sable." },
      { t: "qcm", q: "L'érosion <b>côtière</b> est causée par…", choix: ["l'avancée de la mer", "le vent du désert", "les feux de brousse"], r: "l'avancée de la mer", expl: "La côte, c'est le bord de la mer : l'érosion côtière vient de l'avancée de la mer." },
      { t: "vf", q: "La pollution peut toucher le sol, l'eau et l'air.", r: true, expl: "Le cahier cite la pollution du sol, de l'eau et de l'air." }
    ],
    [
      { t: "relier", q: "Relie chaque érosion à sa cause.", paires: [["érosion éolienne", "le vent"], ["érosion hydrique", "le ruissellement des eaux"], ["érosion côtière", "l'avancée de la mer"]], expl: "Éolienne = vent ; hydrique = eau ; côtière = mer." },
      { t: "qcm", q: "Après de fortes pluies à Kaffrine, l'eau qui coule creuse des ravins dans le champ de Moussa. C'est…", choix: ["l'érosion hydrique", "l'érosion éolienne", "l'érosion côtière"], r: "l'érosion hydrique", expl: "« Hydrique » veut dire « lié à l'eau » : c'est le ruissellement des eaux." },
      { t: "qcm", q: "À Louga, le vent de l'harmattan emporte le sable des champs. C'est…", choix: ["l'érosion éolienne", "l'érosion hydrique", "la pollution de l'eau"], r: "l'érosion éolienne", expl: "Quand c'est le vent qui emporte le sable, on parle d'érosion éolienne." },
      { t: "qcm", q: "À Rufisque, la mer avance et détruit des maisons au bord de la plage. C'est…", choix: ["l'érosion côtière", "l'érosion éolienne", "le déboisement"], r: "l'érosion côtière", expl: "L'avancée de la mer sur la côte, c'est l'érosion côtière." },
      { t: "saisie", q: "Le déboisement s'appelle aussi la …", r: "déforestation", expl: "Le cahier écrit : « le déboisement ou la déforestation »." },
      { t: "vf", q: "Prendre trop de ressources du sol, du sous-sol et des eaux s'appelle la surexploitation.", r: true, expl: "Sur-exploiter, c'est exploiter trop, plus que ce que la nature peut donner." },
      { t: "vf", q: "L'extraction du sable marin est une forme de dégradation des ressources.", r: true, expl: "Retirer le sable des plages abîme les côtes : c'est une forme de dégradation." },
      { t: "classer", q: "Range chaque forme de dégradation selon ce qu'elle abîme d'abord.", cases: ["les arbres", "le sol et la côte"], items: [["le déboisement", "les arbres"], ["les feux de brousse", "les arbres"], ["l'érosion éolienne", "le sol et la côte"], ["l'érosion côtière", "le sol et la côte"], ["l'extraction du sable marin", "le sol et la côte"], ["la déforestation", "les arbres"]], expl: "Déboisement, déforestation et feux de brousse détruisent les arbres ; les érosions et l'extraction du sable abîment le sol et la côte." },
      { t: "trous", q: "Complète avec les mots de la leçon.", texte: "L'[environnement], c'est ce qui nous entoure. Il subit des [agressions] dues à l'homme et à la [nature].", expl: "C'est la première phrase de la leçon." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces formes de dégradation n'est PAS une érosion ?", choix: ["les feux de brousse", "l'érosion hydrique", "l'érosion éolienne", "l'érosion côtière"], r: "les feux de brousse", expl: "Les feux de brousse détruisent la végétation par le feu ; les érosions sont dues au vent, à l'eau ou à la mer." },
      { t: "vf", q: "L'érosion hydrique est causée par le vent.", r: false, expl: "Hydrique = eau. C'est l'érosion <b>éolienne</b> qui est causée par le vent." },
      { t: "vf", q: "Seul l'homme abîme l'environnement.", r: false, expl: "La nature aussi : le vent, la pluie et la mer provoquent des érosions." },
      { t: "saisie", q: "Comment appelle-t-on l'érosion causée par l'avancée de la mer ?", r: ["l'érosion côtière", "érosion côtière", "côtière"], expl: "La côte est le bord de la mer : érosion côtière." },
      { t: "qcm", q: "Que veut dire « érosion <b>hydrique</b> » ?", choix: ["érosion due à l'eau", "érosion due au feu", "érosion due au vent"], r: "érosion due à l'eau", expl: "Hydrique vient d'un mot qui veut dire « eau », comme dans « hydraulique »." },
      { t: "classer", q: "Cause humaine ou cause naturelle ?", cases: ["surtout l'homme", "surtout la nature"], items: [["le déboisement", "surtout l'homme"], ["l'extraction du sable marin", "surtout l'homme"], ["la pollution des usines", "surtout l'homme"], ["le vent qui emporte le sable", "surtout la nature"], ["le ruissellement des eaux de pluie", "surtout la nature"], ["la surexploitation des eaux", "surtout l'homme"]], expl: "Couper, extraire, polluer, surexploiter : c'est l'homme. Le vent et la pluie : c'est la nature." }
    ],
    [
      { t: "trous", q: "Complète la liste des formes de dégradation.", texte: "l'érosion [éolienne] avec le vent ; l'érosion [hydrique] avec le ruissellement des eaux ; l'érosion [côtière] avec l'avancée de la mer ; les feux de [brousse] qui participent à la déforestation.", expl: "Éolienne (vent), hydrique (eau), côtière (mer), feux de brousse." },
      { t: "qcm", q: "Fatou voit des camions prendre le sable de la plage de Malika. De quelle forme de dégradation s'agit-il ?", choix: ["l'extraction du sable marin", "l'érosion éolienne", "la pollution de l'air"], r: "l'extraction du sable marin", expl: "Prendre le sable de la plage, c'est l'extraction du sable marin." },
      { t: "relier", q: "Relie chaque situation à la forme de dégradation.", paires: [["On coupe tous les arbres de la forêt.", "le déboisement"], ["Une usine rejette de la fumée noire.", "la pollution de l'air"], ["Le feu ravage la brousse en saison sèche.", "les feux de brousse"], ["Les pêcheurs prennent trop de poissons.", "la surexploitation"]], expl: "Couper les arbres = déboisement ; fumée = pollution de l'air ; feu = feux de brousse ; trop prendre = surexploitation." },
      { t: "vf", q: "La pollution du sol, de l'eau et de l'air fait partie des formes de dégradation des ressources.", r: true, expl: "C'est la dernière forme citée dans la leçon." },
      { t: "saisie", q: "Comment appelle-t-on l'érosion causée par le vent ?", r: ["l'érosion éolienne", "érosion éolienne", "éolienne"], expl: "Le vent → érosion éolienne." },
      { t: "qcm", q: "Pourquoi dit-on que les feux de brousse participent à la déforestation ?", choix: ["parce qu'ils détruisent les arbres", "parce qu'ils font avancer la mer", "parce qu'ils apportent la pluie"], r: "parce qu'ils détruisent les arbres", expl: "Moins d'arbres = déforestation." }
    ]
  ]
});


/* ---- vdsm-erosions.js ---- */
// Note : la photocopie écrit « L'érosion maritime : il est lié » et « L'érosion éolienne : il relève » ; corrigé en « elle » (érosion est féminin).
LECONS.push({
  id: "vdsm-erosions",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les érosions",
  date: "2026-10-06",
  photos: ["DJI_20261118221432_0107_D.jpg"],
  retiens:
    "<p>Il y a <b>érosion</b> lorsque notre environnement est dégradé par la force des <b>éléments naturels</b> : les eaux de ruissellement, l'avancée de la mer et le vent qui souffle. Il y a plusieurs formes d'érosion.</p>" +
    "<table><tr><th>Érosion</th><th>Ce qui se passe</th><th>Solutions</th></tr>" +
    "<tr><td><b>hydrique</b> (l'eau)</td><td>Les eaux de ruissellement creusent des <b>ravins</b> ou <b>lessivent</b> les sols, qui deviennent pauvres.</td><td>Construire des <b>canalisations</b> ; <b>reboiser</b> les zones arides pour aider à fixer le sol.</td></tr>" +
    "<tr><td><b>maritime</b> ou côtière (la mer)</td><td>Elle est liée à l'<b>avancée de la mer</b>, à cause du réchauffement climatique et de l'extraction du sable marin pour la construction.</td><td>Construire des <b>digues</b> ou des <b>épis</b> de protection ; installer des <b>rochers brise-vagues</b> ; draguer l'estuaire pour remblayer la côte ; <b>interdire l'extraction du sable marin</b>.</td></tr>" +
    "<tr><td><b>éolienne</b> (le vent)</td><td>Le vent emporte les éléments qui enrichissent le sol, et le sable lui-même est emporté.</td><td>Aménager des <b>brise-vents</b> ; le <b>reboisement</b>.</td></tr></table>",
  astuce: "<b>H</b>ydrique comme H₂O (l'eau). <b>Éo</b>lienne comme <b>Éo</b>le, le dieu du vent (et les éoliennes qui tournent au vent). <b>Mari</b>time comme <b>mer</b>.",
  regle: "L'érosion est la dégradation du milieu par l'eau (hydrique), la mer (maritime) ou le vent (éolienne). Le reboisement aide contre l'eau et le vent ; digues, épis et brise-vagues protègent la côte.",
  niveaux: [
    [
      { t: "qcm", q: "Il y a érosion quand l'environnement est dégradé par…", choix: ["la force des éléments naturels", "les animaux domestiques", "les élèves"], r: "la force des éléments naturels", expl: "L'eau, la mer et le vent sont des éléments naturels." },
      { t: "relier", q: "Relie chaque érosion à l'élément qui la cause.", paires: [["érosion hydrique", "les eaux de ruissellement"], ["érosion maritime", "l'avancée de la mer"], ["érosion éolienne", "le vent"]], expl: "Hydrique = eau ; maritime = mer ; éolienne = vent." },
      { t: "vf", q: "L'érosion éolienne est causée par le vent.", r: true, expl: "Éolienne vient d'Éole, le dieu du vent." },
      { t: "vf", q: "L'érosion hydrique est causée par la mer qui avance.", r: false, expl: "C'est l'érosion maritime. L'érosion hydrique vient des eaux de ruissellement." },
      { t: "qcm", q: "Les eaux de ruissellement…", choix: ["creusent des ravins et appauvrissent les sols", "rendent les sols plus riches", "font pousser les arbres"], r: "creusent des ravins et appauvrissent les sols", expl: "Elles lessivent les sols et les rendent pauvres." }
    ],
    [
      { t: "classer", q: "Range chaque solution sous la bonne érosion.", cases: ["érosion hydrique", "érosion maritime", "érosion éolienne"], items: [["construire des canalisations", "érosion hydrique"], ["construire des digues", "érosion maritime"], ["installer des rochers brise-vagues", "érosion maritime"], ["aménager des brise-vents", "érosion éolienne"], ["interdire l'extraction du sable marin", "érosion maritime"]], expl: "Canalisations pour l'eau ; digues et brise-vagues pour la mer ; brise-vents pour le vent." },
      { t: "qcm", q: "À Saint-Louis, la mer avance et détruit des maisons de pêcheurs. Quelle érosion ?", choix: ["l'érosion maritime", "l'érosion éolienne", "l'érosion hydrique"], r: "l'érosion maritime", expl: "L'avancée de la mer = érosion maritime (ou côtière)." },
      { t: "qcm", q: "Pendant l'hivernage à Kolda, l'eau de pluie creuse un ravin au milieu de la route. Quelle érosion ?", choix: ["l'érosion hydrique", "l'érosion maritime", "l'érosion éolienne"], r: "l'érosion hydrique", expl: "Les eaux de ruissellement creusent des ravins." },
      { t: "qcm", q: "À Matam, le vent emporte la bonne terre des champs. Quelle érosion ?", choix: ["l'érosion éolienne", "l'érosion hydrique", "l'érosion maritime"], r: "l'érosion éolienne", expl: "Le vent qui souffle emporte les éléments qui enrichissent le sol." },
      { t: "saisie", q: "Une rangée d'arbres plantée pour arrêter le vent s'appelle un …", r: ["brise-vent", "un brise-vent"], expl: "Brise-vent : il « brise » la force du vent." },
      { t: "vf", q: "Le reboisement aide à lutter contre l'érosion hydrique et contre l'érosion éolienne.", r: true, expl: "Les racines fixent le sol et les arbres freinent le vent." },
      { t: "qcm", q: "Quelles sont les deux causes de l'avancée de la mer citées au cahier ?", choix: ["le réchauffement climatique et l'extraction du sable marin", "les feux de brousse et la pêche", "le vent et la pluie"], r: "le réchauffement climatique et l'extraction du sable marin", expl: "Ce sont les deux causes de l'érosion maritime dans la leçon." },
      { t: "trous", q: "Complète.", texte: "L'érosion [hydrique] est due à l'eau, l'érosion [maritime] est due à la mer et l'érosion [éolienne] est due au vent.", expl: "Hydrique, maritime, éolienne." }
    ],
    [
      { t: "qcm", q: "Pourquoi reboiser les zones arides aide-t-il contre l'érosion hydrique ?", choix: ["les racines des arbres fixent le sol", "les arbres attirent la mer", "les arbres font plus de ruissellement"], r: "les racines des arbres fixent le sol", expl: "Le cahier dit : reboiser « pour aider à fixer le sol »." },
      { t: "vf", q: "Une digue protège contre l'érosion éolienne.", r: false, expl: "La digue protège la côte contre la mer : c'est une solution à l'érosion maritime." },
      { t: "saisie", q: "Quel autre nom l'érosion maritime porte-t-elle dans la leçon sur les formes de dégradation ? L'érosion …", r: ["côtière", "l'érosion côtière", "érosion côtière"], expl: "Maritime ou côtière : c'est la même érosion, due à l'avancée de la mer." },
      { t: "qcm", q: "Que veut dire « lessiver les sols » ?", choix: ["emporter les éléments qui les rendent riches", "les laver pour les rendre plus fertiles", "les sécher au soleil"], r: "emporter les éléments qui les rendent riches", expl: "Un sol lessivé devient pauvre." },
      { t: "classer", q: "Range chaque phrase sous la bonne érosion.", cases: ["hydrique", "maritime", "éolienne"], items: [["des ravins se creusent", "hydrique"], ["la plage recule", "maritime"], ["le sable s'envole", "éolienne"], ["les sols sont lessivés", "hydrique"], ["la mer détruit des maisons", "maritime"], ["le sol perd sa bonne terre à cause du vent", "éolienne"]], expl: "Eau, mer ou vent : cherche l'élément en cause." },
      { t: "relier", q: "Relie chaque ouvrage à son rôle.", paires: [["la digue", "arrêter la mer"], ["le brise-vent", "freiner le vent"], ["la canalisation", "conduire l'eau de pluie"], ["les rochers brise-vagues", "casser la force des vagues"]], expl: "Chaque ouvrage combat un élément." },
      { t: "vf", q: "Interdire l'extraction du sable marin aide à lutter contre l'érosion maritime.", r: true, expl: "Prendre le sable des plages fait avancer la mer." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Au bord de la mer, à Rufisque, la côte recule : c'est l'érosion [maritime]. Pour protéger la ville, on construit des [digues] et on interdit l'extraction du [sable] marin. Dans les champs de Kaffrine, le vent emporte la terre : c'est l'érosion [éolienne]. On y plante des [brise-vents].", expl: "Mer → digues et sable protégé ; vent → brise-vents." },
      { t: "qcm", q: "Quelle solution sert contre DEUX formes d'érosion ?", choix: ["le reboisement", "la digue", "les rochers brise-vagues"], r: "le reboisement", expl: "Le reboisement est cité contre l'érosion hydrique et contre l'érosion éolienne." },
      { t: "classer", q: "Cause ou solution de l'érosion maritime ?", cases: ["cause", "solution"], items: [["l'extraction du sable marin", "cause"], ["le réchauffement climatique", "cause"], ["construire des épis de protection", "solution"], ["remblayer la côte", "solution"], ["installer des rochers brise-vagues", "solution"]], expl: "L'extraction et le réchauffement font avancer la mer ; les ouvrages la retiennent." },
      { t: "saisie", q: "Comment appelle-t-on l'érosion causée par les eaux de ruissellement ?", r: ["l'érosion hydrique", "érosion hydrique", "hydrique"], expl: "Hydrique = eau." },
      { t: "qcm", q: "Laquelle de ces phrases est juste ?", choix: ["Le vent emporte les éléments qui enrichissent le sol.", "Le vent rend le sol plus riche.", "La mer recule quand on prend le sable."], r: "Le vent emporte les éléments qui enrichissent le sol.", expl: "C'est l'érosion éolienne : le sol devient pauvre." }
    ]
  ]
});


/* ---- vdsm-extraction-sable-marin.js ---- */
// À VÉRIFIER : la transcription lit peut-être « pratiquer les mers » au lieu de « protéger les mers » ; le module retient « protéger les mers ». « trouver des sites d'extraction » est rendu par « trouver d'autres sites d'extraction » (sens probable).
LECONS.push({
  id: "vdsm-extraction-sable-marin",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "L'extraction du sable marin",
  date: "2026-11-03",
  photos: ["DJI_20261118221532_0115_D.jpg"],
  retiens:
    "<p>L'<b>extraction du sable marin</b> est une pratique utilisée pour <b>prélever et exploiter</b> le sable des plages de mer.</p>" +
    "<p><b>Les causes</b> : la construction des habitations et des routes ; la commercialisation (la vente) du sable…</p>" +
    "<p><b>Les conséquences</b> : l'<b>avancée de la mer</b> ; la destruction des côtes ; l'érosion des plages…</p>" +
    "<p><b>Pour lutter contre l'extraction du sable</b>, il faut : sensibiliser les populations ; protéger les mers ; limiter l'extraction ; trouver d'autres sites d'extraction ; installer des <b>brigades de surveillance</b>.</p>",
  astuce: "Extraire, c'est « tirer dehors » : on tire le sable hors de la plage… et la mer prend sa place.",
  regle: "On prend le sable des plages pour construire et pour le vendre. Résultat : la mer avance et les côtes sont détruites. Il faut sensibiliser, limiter l'extraction et surveiller les plages.",
  niveaux: [
    [
      { t: "qcm", q: "L'extraction du sable marin, c'est…", choix: ["prélever et exploiter le sable des plages", "planter des arbres sur la plage", "pêcher des poissons"], r: "prélever et exploiter le sable des plages", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "Pourquoi prend-on le sable des plages ?", choix: ["pour construire des maisons et des routes", "pour nourrir les poissons", "pour arrêter la mer"], r: "pour construire des maisons et des routes", expl: "La construction est la première cause citée." },
      { t: "vf", q: "L'extraction du sable marin fait avancer la mer.", r: true, expl: "Sans sable, la plage disparaît et la mer avance." },
      { t: "vf", q: "L'extraction du sable marin protège les côtes.", r: false, expl: "Au contraire, elle détruit les côtes." },
      { t: "qcm", q: "Quelle est une <b>solution</b> ?", choix: ["installer des brigades de surveillance", "vendre plus de sable", "construire avec le sable des plages"], r: "installer des brigades de surveillance", expl: "Les brigades empêchent de prendre le sable." }
    ],
    [
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["la construction des habitations", "cause"], ["la commercialisation du sable", "cause"], ["l'avancée de la mer", "conséquence"], ["la destruction des côtes", "conséquence"], ["limiter l'extraction", "solution"], ["sensibiliser les populations", "solution"]], expl: "Pourquoi on le fait, ce que ça provoque, comment lutter." },
      { t: "qcm", q: "La nuit, des charretiers remplissent leurs charrettes avec le sable de la plage de Malika. Que font-ils ?", choix: ["une extraction de sable marin", "un reboisement", "une sensibilisation"], r: "une extraction de sable marin", expl: "Prendre le sable de la plage, c'est l'extraire." },
      { t: "saisie", q: "Complète : la commercialisation du sable, c'est la … du sable.", r: "vente", expl: "Commercialiser = vendre." },
      { t: "vf", q: "L'érosion des plages est une conséquence de l'extraction du sable marin.", r: true, expl: "C'est cité au cahier." },
      { t: "relier", q: "Relie chaque mot à son sens.", paires: [["extraire", "retirer, tirer dehors"], ["commercialiser", "vendre"], ["brigade", "groupe de surveillants"], ["côte", "bord de la mer"]], expl: "Ces mots sont dans la leçon." },
      { t: "qcm", q: "À quoi sert une brigade de surveillance sur la plage ?", choix: ["empêcher qu'on prenne le sable", "vendre le sable", "construire des routes"], r: "empêcher qu'on prenne le sable", expl: "Elle surveille et arrête les extractions." },
      { t: "vf", q: "Limiter l'extraction est une solution.", r: true, expl: "Moins on prend de sable, moins la côte recule." },
      { t: "trous", q: "Complète.", texte: "Les conséquences de l'extraction du sable marin sont l'avancée de la [mer], la destruction des [côtes] et l'érosion des [plages].", expl: "Trois conséquences du cahier." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une conséquence de l'extraction du sable marin ?", choix: ["la plantation d'arbres", "l'avancée de la mer", "la destruction des côtes", "l'érosion des plages"], r: "la plantation d'arbres", expl: "Planter des arbres n'a rien à voir avec l'extraction du sable." },
      { t: "qcm", q: "Pourquoi trouver d'autres sites d'extraction ?", choix: ["pour ne plus prendre le sable des plages", "pour vendre plus de sable de plage", "pour faire avancer la mer"], r: "pour ne plus prendre le sable des plages", expl: "On a besoin de sable pour construire, mais on doit laisser celui des plages." },
      { t: "vf", q: "L'extraction du sable marin est une des causes de l'érosion maritime.", r: true, expl: "La leçon sur les érosions le dit aussi : l'avancée de la mer vient en partie de l'extraction du sable marin." },
      { t: "classer", q: "Ce geste aide-t-il la plage ou l'abîme-t-il ?", cases: ["aide la plage", "abîme la plage"], items: [["acheter du sable de plage pour construire", "abîme la plage"], ["signaler les charrettes de sable", "aide la plage"], ["expliquer le danger aux voisins", "aide la plage"], ["prendre le sable la nuit", "abîme la plage"], ["respecter l'interdiction d'extraction", "aide la plage"]], expl: "Tout ce qui retire le sable abîme la plage." },
      { t: "saisie", q: "Quel verbe veut dire « retirer le sable de la plage » ? (on le trouve dans le titre, sous forme de nom : l'extraction)", r: "extraire", expl: "L'extraction → extraire." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut limiter l'extraction du sable marin.", expl: "C'est une solution." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "À Thiaroye, on prend le sable de la plage pour construire des [habitations] et des routes. À cause de cela, la [mer] avance et détruit les [côtes]. Pour lutter, il faut installer des brigades de [surveillance] et [sensibiliser] les populations.", expl: "Causes, conséquences, solutions." },
      { t: "qcm", q: "Le maçon de Mamadou propose d'acheter du sable de plage, moins cher. Que lui répondre ?", choix: ["Non, cela fait avancer la mer : il faut un sable d'un autre site.", "Oui, c'est sans danger.", "Oui, et prenons-en encore plus."], r: "Non, cela fait avancer la mer : il faut un sable d'un autre site.", expl: "Il faut trouver d'autres sites d'extraction." },
      { t: "classer", q: "Classe chaque élément.", cases: ["cause", "conséquence", "solution"], items: [["construire des routes", "cause"], ["l'érosion des plages", "conséquence"], ["installer des brigades de surveillance", "solution"], ["vendre le sable", "cause"], ["protéger les mers", "solution"]], expl: "Les trois parties de la leçon." },
      { t: "vf", q: "Sensibiliser les populations veut dire leur expliquer le danger de l'extraction.", r: true, expl: "Sensibiliser, c'est informer pour changer les comportements." },
      { t: "qcm", q: "Quel lien y a-t-il entre l'extraction du sable et l'érosion côtière ?", choix: ["l'extraction fait reculer la côte", "l'extraction arrête l'érosion", "aucun lien"], r: "l'extraction fait reculer la côte", expl: "Moins de sable = la mer avance = érosion côtière." }
    ]
  ]
});


/* ---- vdsm-feux-de-brousse.js ---- */
LECONS.push({
  id: "vdsm-feux-de-brousse",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les formes de dégradation des ressources : les feux de brousse",
  date: "2026-10-01",
  photos: ["DJI_20261118221418_0105_D.jpg"],
  retiens:
    "<p>Un <b>feu de brousse</b> est un <b>incendie</b> qui se propage sur une étendue boisée. Il peut être d'origine <b>naturelle</b> ou <b>humaine</b>.</p>" +
    "<p><b>Les causes</b> : fumer en brousse ; oublier d'éteindre un feu ; allumer un feu…</p>" +
    "<p><b>Les conséquences</b> : la pollution de l'air, la pollution de l'eau et des sols ; la disparition de certaines espèces animales et végétales ; la déforestation ; la destruction des terres…</p>" +
    "<p><b>Pour éviter les feux de brousse</b>, il faut : créer des <b>pare-feu</b> et <b>sensibiliser</b> les populations.</p>",
  astuce: "Un <b>pare-feu</b> « pare » le feu, comme un parapluie pare la pluie : c'est une bande de terre nettoyée où le feu ne trouve rien à brûler.",
  regle: "Un feu de brousse est un incendie dans une étendue boisée, d'origine naturelle ou humaine. Il pollue, détruit la forêt et les animaux. On le prévient avec des pare-feu et en sensibilisant les populations.",
  niveaux: [
    [
      { t: "qcm", q: "Un feu de brousse, c'est…", choix: ["un incendie qui se propage sur une étendue boisée", "un feu pour faire la cuisine", "un feu d'artifice"], r: "un incendie qui se propage sur une étendue boisée", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "Un feu de brousse peut être d'origine…", choix: ["naturelle ou humaine", "seulement naturelle", "seulement humaine"], r: "naturelle ou humaine", expl: "Il peut venir de la nature ou d'une action de l'homme." },
      { t: "vf", q: "Fumer en brousse peut provoquer un feu de brousse.", r: true, expl: "Une cigarette mal éteinte peut enflammer l'herbe sèche." },
      { t: "vf", q: "Les feux de brousse protègent les animaux.", r: false, expl: "Ils entraînent la disparition de certaines espèces animales et végétales." },
      { t: "qcm", q: "Quelle mesure aide à éviter les feux de brousse ?", choix: ["créer des pare-feu", "allumer des feux", "jeter des mégots dans l'herbe"], r: "créer des pare-feu", expl: "Le pare-feu arrête le feu car il n'y a plus rien à brûler." }
    ],
    [
      { t: "classer", q: "Cause ou conséquence du feu de brousse ?", cases: ["cause", "conséquence"], items: [["fumer en brousse", "cause"], ["oublier d'éteindre un feu", "cause"], ["allumer un feu", "cause"], ["la pollution de l'air", "conséquence"], ["la déforestation", "conséquence"], ["la destruction des terres", "conséquence"]], expl: "Les causes déclenchent le feu ; les conséquences sont les dégâts." },
      { t: "qcm", q: "Ibrahima a fait du thé dans la brousse et il part sans éteindre le feu. Quel risque ?", choix: ["un feu de brousse", "une inondation", "une érosion côtière"], r: "un feu de brousse", expl: "Oublier d'éteindre un feu est une cause des feux de brousse." },
      { t: "saisie", q: "Comment appelle-t-on la bande de terre nettoyée qui empêche le feu de passer ?", r: ["un pare-feu", "pare-feu", "le pare-feu"], expl: "Le pare-feu arrête la progression du feu." },
      { t: "vf", q: "Les feux de brousse polluent l'air.", r: true, expl: "La fumée pollue l'air." },
      { t: "vf", q: "Les feux de brousse peuvent aussi polluer l'eau et les sols.", r: true, expl: "Le cahier cite la pollution de l'eau et des sols." },
      { t: "qcm", q: "Que veut dire <b>sensibiliser</b> les populations ?", choix: ["leur expliquer les dangers pour qu'elles fassent attention", "les punir", "leur vendre des allumettes"], r: "leur expliquer les dangers pour qu'elles fassent attention", expl: "Sensibiliser, c'est informer pour faire changer les comportements." },
      { t: "trous", q: "Complète la définition.", texte: "Un feu de brousse est un [incendie] qui se propage sur une étendue [boisée].", expl: "Incendie = grand feu ; étendue boisée = couverte d'arbres." },
      { t: "relier", q: "Relie chaque conséquence à ce qu'elle abîme.", paires: [["la pollution de l'air", "l'air que l'on respire"], ["la déforestation", "les arbres"], ["la disparition d'espèces", "les animaux et les plantes"], ["la destruction des terres", "les champs"]], expl: "Le feu abîme tout le milieu." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une conséquence des feux de brousse ?", choix: ["la création de pare-feu", "la déforestation", "la pollution de l'air", "la disparition d'espèces végétales"], r: "la création de pare-feu", expl: "Créer des pare-feu est une solution, pas une conséquence." },
      { t: "vf", q: "Un feu de brousse est toujours causé par l'homme.", r: false, expl: "Il peut aussi être d'origine naturelle." },
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["allumer un feu en brousse", "cause"], ["la disparition d'espèces animales", "conséquence"], ["créer des pare-feu", "solution"], ["sensibiliser les populations", "solution"], ["fumer en brousse", "cause"], ["la déforestation", "conséquence"]], expl: "Trois colonnes : ce qui déclenche, ce que ça produit, ce qui protège." },
      { t: "saisie", q: "Les feux de brousse font disparaître les arbres. Comment s'appelle cette conséquence ? (un mot commençant par « dé »)", r: ["la déforestation", "déforestation"], expl: "Forêt qui disparaît = déforestation." },
      { t: "qcm", q: "Pourquoi les feux de brousse sont-ils fréquents en saison sèche ?", choix: ["parce que l'herbe sèche brûle facilement", "parce qu'il pleut beaucoup", "parce que les arbres sont mouillés"], r: "parce que l'herbe sèche brûle facilement", expl: "Le feu se propage vite dans l'herbe sèche." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut sensibiliser les populations.", expl: "Sensibiliser est une solution contre les feux de brousse." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Les feux de brousse sont causés par des gestes comme [fumer] en brousse ou oublier d'[éteindre] un feu. Ils entraînent la [déforestation] et la pollution de l'[air]. Pour les éviter, il faut créer des [pare-feu].", expl: "Causes, conséquences, solution." },
      { t: "qcm", q: "Le chef du village de Khady veut protéger la brousse avant la saison sèche. Que doit-il faire ?", choix: ["faire tracer des pare-feu et réunir les habitants pour les informer", "brûler les herbes un jour de vent", "laisser les enfants jouer avec des allumettes"], r: "faire tracer des pare-feu et réunir les habitants pour les informer", expl: "Pare-feu et sensibilisation : les deux solutions du cahier." },
      { t: "relier", q: "Relie chaque geste à ce qu'il provoque.", paires: [["jeter un mégot dans l'herbe sèche", "un feu de brousse"], ["tracer un pare-feu", "le feu s'arrête"], ["expliquer les dangers aux bergers", "moins de feux"]], expl: "Un geste imprudent cause le feu ; les bons gestes le préviennent." },
      { t: "vf", q: "Les feux de brousse détruisent les terres agricoles.", r: true, expl: "Le cahier cite la destruction des terres." },
      { t: "saisie", q: "Complète : un feu de brousse peut être d'origine naturelle ou …", r: "humaine", expl: "Origine naturelle ou humaine." }
    ]
  ]
});


/* ---- vdsm-pollution-atmospherique.js ---- */
LECONS.push({
  id: "vdsm-pollution-atmospherique",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "La pollution atmosphérique",
  date: "2026-10-13",
  photos: ["DJI_20261118221456_0110_D.jpg"],
  retiens:
    "<p>La <b>pollution atmosphérique</b> (ou <b>pollution de l'air</b>) est un changement négatif de la qualité de l'air.</p>" +
    "<p><b>Les causes</b> : les déchets des usines ; la fumée des voitures ; la poussière ; les produits chimiques et toxiques…</p>" +
    "<p><b>Les conséquences</b> : on attrape des maladies ; la disparition de certaines espèces animales et végétales ; les maladies épidémiques…</p>" +
    "<p><b>Pour lutter contre la pollution de l'air</b>, il faut : imposer une réglementation des émissions de gaz par les usines ; favoriser l'utilisation des véhicules électriques ; imposer une taxation plus élevée aux grands pollueurs…</p>",
  astuce: "<b>Atmosphère</b> = l'air qui entoure la Terre. Pollution atmosphérique = pollution de l'air.",
  regle: "La pollution atmosphérique, c'est l'air qui devient mauvais à cause des usines, des voitures, de la poussière et des produits toxiques. Elle rend malade ; on la combat par des règles pour les usines, des véhicules électriques et des taxes pour les pollueurs.",
  niveaux: [
    [
      { t: "qcm", q: "La pollution atmosphérique, c'est la pollution…", choix: ["de l'air", "de la mer", "du sol"], r: "de l'air", expl: "L'atmosphère, c'est l'air qui entoure la Terre." },
      { t: "qcm", q: "La pollution de l'air est…", choix: ["un changement négatif de la qualité de l'air", "un air plus pur", "un vent très fort"], r: "un changement négatif de la qualité de l'air", expl: "C'est la définition du cahier : l'air devient moins bon." },
      { t: "vf", q: "La fumée des voitures pollue l'air.", r: true, expl: "C'est une cause citée au cahier." },
      { t: "vf", q: "La pollution de l'air n'a aucun effet sur la santé.", r: false, expl: "Elle fait attraper des maladies, parfois des épidémies." },
      { t: "qcm", q: "Laquelle est une <b>cause</b> de la pollution de l'air ?", choix: ["les déchets des usines", "les véhicules électriques", "la plantation d'arbres"], r: "les déchets des usines", expl: "Les usines rejettent fumées et déchets dans l'air." }
    ],
    [
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["la fumée des voitures", "cause"], ["la poussière", "cause"], ["les maladies épidémiques", "conséquence"], ["la disparition d'espèces végétales", "conséquence"], ["favoriser les véhicules électriques", "solution"], ["taxer davantage les grands pollueurs", "solution"]], expl: "Ce qui salit l'air, ce que ça provoque, ce qui le protège." },
      { t: "qcm", q: "À Dakar, Moussa tousse à cause des fumées noires des vieux cars. De quoi s'agit-il ?", choix: ["de la pollution atmosphérique", "de l'érosion hydrique", "de la pollution marine"], r: "de la pollution atmosphérique", expl: "La fumée des véhicules pollue l'air que l'on respire." },
      { t: "saisie", q: "Complète : la pollution atmosphérique s'appelle aussi la pollution de l'…", r: "air", expl: "Atmosphérique = de l'air." },
      { t: "vf", q: "Les produits chimiques et toxiques peuvent polluer l'air.", r: true, expl: "Ils sont cités parmi les causes." },
      { t: "qcm", q: "Pourquoi favoriser les véhicules électriques ?", choix: ["ils ne rejettent pas de fumée", "ils vont plus vite", "ils coûtent moins cher"], r: "ils ne rejettent pas de fumée", expl: "Sans pot d'échappement, ils ne polluent pas l'air de la rue." },
      { t: "relier", q: "Relie chaque solution à ceux qu'elle concerne.", paires: [["réglementer les émissions de gaz", "les usines"], ["utiliser des véhicules électriques", "les automobilistes"], ["une taxe plus élevée", "les grands pollueurs"]], expl: "Chaque solution vise une source de pollution." },
      { t: "vf", q: "La pollution de l'air peut faire disparaître certaines espèces animales et végétales.", r: true, expl: "C'est une conséquence citée au cahier." },
      { t: "trous", q: "Complète.", texte: "Les causes de la pollution de l'air sont les déchets des [usines], la fumée des [voitures] et la [poussière].", expl: "Trois causes du cahier." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une solution contre la pollution de l'air ?", choix: ["brûler les ordures en plein air", "réglementer les émissions de gaz des usines", "favoriser les véhicules électriques"], r: "brûler les ordures en plein air", expl: "Brûler les ordures dégage de la fumée : cela pollue l'air." },
      { t: "qcm", q: "Une maladie <b>épidémique</b> est une maladie…", choix: ["qui touche beaucoup de personnes en même temps", "qui ne touche qu'une personne", "qui ne se soigne jamais"], r: "qui touche beaucoup de personnes en même temps", expl: "Une épidémie se répand dans une population." },
      { t: "vf", q: "Taxer plus les grands pollueurs les pousse à moins polluer.", r: true, expl: "Payer plus quand on pollue beaucoup encourage à réduire ses rejets." },
      { t: "classer", q: "Ce geste pollue-t-il l'air ou le protège-t-il ?", cases: ["pollue l'air", "protège l'air"], items: [["laisser tourner le moteur à l'arrêt", "pollue l'air"], ["brûler des pneus", "pollue l'air"], ["venir à l'école à pied", "protège l'air"], ["utiliser un véhicule électrique", "protège l'air"], ["une usine qui filtre ses fumées", "protège l'air"]], expl: "Tout ce qui rejette de la fumée pollue l'air." },
      { t: "saisie", q: "Quel mot savant veut dire « de l'air » dans « pollution … » ?", r: "atmosphérique", expl: "Pollution atmosphérique = pollution de l'air." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "La fumée des voitures pollue l'air.", expl: "C'est une cause de la pollution atmosphérique." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "La pollution [atmosphérique] est un changement négatif de la qualité de l'air. Elle est causée par la fumée des [voitures] et les déchets des [usines]. Elle provoque des [maladies]. Pour lutter, il faut favoriser les véhicules [électriques].", expl: "Définition, causes, conséquence, solution." },
      { t: "qcm", q: "Le maire de Thiès veut moins de pollution de l'air dans sa ville. Quelle décision est la meilleure ?", choix: ["obliger les usines à réduire leurs fumées", "autoriser les feux d'ordures", "ajouter des vieux camions"], r: "obliger les usines à réduire leurs fumées", expl: "Réglementer les émissions des usines est une solution du cahier." },
      { t: "classer", q: "Classe chaque élément.", cases: ["cause", "conséquence", "solution"], items: [["les produits toxiques", "cause"], ["on attrape des maladies", "conséquence"], ["réglementer les émissions de gaz", "solution"], ["les déchets des usines", "cause"], ["les maladies épidémiques", "conséquence"]], expl: "Révise bien les trois parties de la leçon." },
      { t: "vf", q: "La poussière fait partie des causes de la pollution de l'air.", r: true, expl: "Elle est citée au cahier." },
      { t: "qcm", q: "Que veut dire « émissions de gaz » ?", choix: ["les gaz rejetés dans l'air", "les émissions de télévision", "le gaz de la cuisine"], r: "les gaz rejetés dans l'air", expl: "Émettre, c'est rejeter, envoyer dehors." }
    ]
  ]
});


/* ---- vdsm-pollution-marine.js ---- */
LECONS.push({
  id: "vdsm-pollution-marine",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les formes de dégradation des ressources : la pollution marine",
  date: "2026-10-15",
  photos: ["DJI_20261118221459_0111_D.jpg"],
  retiens:
    "<p>La <b>pollution marine</b> est la présence de déchets dans les océans.</p>" +
    "<p><b>Les causes</b> : le rejet de produits physiques ou chimiques toxiques ; les déchets jetés par l'homme sur les sols ; les <b>eaux usées</b> qui polluent les fleuves et finissent dans les mers ; les <b>marées noires</b>.</p>" +
    "<p><b>Les conséquences</b> : la disparition de certaines espèces animales ; elle favorise des maladies…</p>" +
    "<p><b>Pour lutter contre la pollution marine</b>, il faut : arrêter de jeter des eaux usées en mer ; arrêter de jeter des déchets ; éviter les marées noires ; surveiller les mers ; sensibiliser les populations…</p>",
  astuce: "Ce qu'on jette par terre ou dans le fleuve finit souvent… dans la mer.",
  regle: "La pollution marine, c'est la présence de déchets dans les océans (produits toxiques, déchets, eaux usées, marées noires). Elle tue des animaux marins et favorise des maladies. On la combat en ne jetant plus rien, en surveillant les mers et en sensibilisant.",
  niveaux: [
    [
      { t: "qcm", q: "La pollution marine, c'est…", choix: ["la présence de déchets dans les océans", "la pollution de l'air des villes", "l'avancée de la mer"], r: "la présence de déchets dans les océans", expl: "Marine = de la mer." },
      { t: "vf", q: "Les marées noires causent la pollution marine.", r: true, expl: "Une marée noire, c'est du pétrole répandu en mer." },
      { t: "vf", q: "Les déchets jetés sur le sol ne peuvent jamais arriver dans la mer.", r: false, expl: "Le cahier explique que les déchets et les eaux usées finissent par se retrouver dans les mers." },
      { t: "qcm", q: "Laquelle est une <b>conséquence</b> de la pollution marine ?", choix: ["la disparition de certaines espèces animales", "plus de poissons dans la mer", "une mer plus propre"], r: "la disparition de certaines espèces animales", expl: "Les animaux marins meurent dans une eau polluée." },
      { t: "qcm", q: "Laquelle est une <b>solution</b> ?", choix: ["arrêter de jeter des déchets", "verser les eaux usées en mer", "jeter les sachets sur la plage"], r: "arrêter de jeter des déchets", expl: "C'est une des solutions du cahier." }
    ],
    [
      { t: "classer", q: "Cause, conséquence ou solution ?", cases: ["cause", "conséquence", "solution"], items: [["les eaux usées versées dans le fleuve", "cause"], ["les marées noires", "cause"], ["la disparition d'espèces animales", "conséquence"], ["des maladies", "conséquence"], ["surveiller les mers", "solution"], ["sensibiliser les populations", "solution"]], expl: "Ce qui salit la mer, ce que ça produit, ce qui la protège." },
      { t: "qcm", q: "À Hann, Aïssatou voit des égouts se vider directement dans la mer. Que se passe-t-il ?", choix: ["une pollution marine par les eaux usées", "une érosion éolienne", "un feu de brousse"], r: "une pollution marine par les eaux usées", expl: "Les eaux usées versées en mer polluent l'océan." },
      { t: "saisie", q: "Comment appelle-t-on le pétrole répandu en grande quantité sur la mer ? Une marée …", r: "noire", expl: "Marée noire : la mer devient noire de pétrole." },
      { t: "vf", q: "Les eaux usées peuvent polluer d'abord les fleuves, puis la mer.", r: true, expl: "Le cahier dit qu'elles polluent les fleuves et se retrouvent finalement dans les mers." },
      { t: "vf", q: "Surveiller les mers aide à lutter contre la pollution marine.", r: true, expl: "C'est une solution du cahier." },
      { t: "relier", q: "Relie chaque cause à la solution qui la combat.", paires: [["jeter des eaux usées en mer", "arrêter de jeter des eaux usées"], ["jeter des déchets", "arrêter de jeter des déchets"], ["les marées noires", "éviter les marées noires"]], expl: "Chaque cause a sa solution." },
      { t: "qcm", q: "Que veut dire « marine » dans « pollution marine » ?", choix: ["de la mer", "de l'air", "de la forêt"], r: "de la mer", expl: "Marin, marine : qui concerne la mer." },
      { t: "trous", q: "Complète.", texte: "La pollution marine est la présence de [déchets] dans les [océans].", expl: "C'est la définition du cahier." }
    ],
    [
      { t: "qcm", q: "Laquelle n'est PAS une cause de la pollution marine ?", choix: ["surveiller les mers", "les marées noires", "les produits chimiques toxiques", "les eaux usées"], r: "surveiller les mers", expl: "Surveiller les mers est une solution." },
      { t: "vf", q: "La pollution marine favorise des maladies.", r: true, expl: "C'est une conséquence citée au cahier." },
      { t: "classer", q: "Ce geste salit-il la mer ou la protège-t-il ?", cases: ["salit la mer", "protège la mer"], items: [["jeter un sachet plastique sur la plage", "salit la mer"], ["vider de l'huile de moteur dans le caniveau", "salit la mer"], ["ramasser les déchets de la plage", "protège la mer"], ["mettre les ordures à la poubelle", "protège la mer"], ["expliquer aux pêcheurs de ne rien jeter", "protège la mer"]], expl: "Ce qui finit dans l'eau salit la mer." },
      { t: "qcm", q: "Pourquoi un sachet jeté dans un caniveau à Dakar peut-il polluer la mer ?", choix: ["l'eau le transporte jusqu'à la mer", "le vent le transforme en sable", "il disparaît tout seul"], r: "l'eau le transporte jusqu'à la mer", expl: "Les déchets jetés sur les sols se retrouvent finalement dans les mers." },
      { t: "saisie", q: "Complète : les eaux usées polluent les fleuves et se retrouvent finalement dans les …", r: "mers", expl: "Tout finit dans la mer." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Il faut arrêter de jeter des déchets en mer.", expl: "C'est une solution contre la pollution marine." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "La pollution marine est causée par les eaux [usées], les produits toxiques et les marées [noires]. Elle entraîne la disparition de certaines espèces [animales]. Pour lutter, il faut [surveiller] les mers et [sensibiliser] les populations.", expl: "Causes, conséquence, solutions." },
      { t: "qcm", q: "Les élèves de la classe de Kam veulent agir pour la mer à Yoff. Quelle action est la plus utile ?", choix: ["nettoyer la plage et expliquer aux gens de ne plus rien jeter", "laisser les déchets sur le sable", "jeter les bouteilles dans les vagues"], r: "nettoyer la plage et expliquer aux gens de ne plus rien jeter", expl: "Arrêter de jeter des déchets et sensibiliser : deux solutions du cahier." },
      { t: "classer", q: "Classe chaque élément.", cases: ["cause", "conséquence", "solution"], items: [["les produits chimiques toxiques", "cause"], ["les poissons meurent", "conséquence"], ["éviter les marées noires", "solution"], ["les déchets jetés sur les sols", "cause"], ["arrêter de jeter des eaux usées en mer", "solution"]], expl: "Trois parties de la leçon." },
      { t: "vf", q: "Une marée noire est une solution contre la pollution marine.", r: false, expl: "C'est une cause : le pétrole pollue la mer." },
      { t: "relier", q: "Relie chaque pollution à ce qu'elle salit.", paires: [["pollution marine", "la mer"], ["pollution atmosphérique", "l'air"], ["pollution du sol", "la terre"]], expl: "Marine = mer ; atmosphérique = air." }
    ]
  ]
});


/* ---- ve-organisations-communautaires-de-base.js ---- */
// Notes : date de la partie (1) non visible sur la photo 0106 (placée au 5 octobre 2026, entre le 1er et le 9 octobre).
// Les noms d'associations ethniques du cahier (Ndefleng, Soninkara, Dental, Ujamoral) sont de lecture incertaine : ils ne sont pas repris.
// Photo 0108 floue : « Mutelle de santé » lu comme « mutuelle de santé ».
LECONS.push({
  id: "ve-organisations-communautaires-de-base",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations communautaires de base (1 et 2)",
  date: "2026-10-05",
  photos: ["DJI_20261118221426_0106_D.jpg", "DJI_20261118221446_0108_D.jpg"],
  retiens:
    "<p>Dans notre pays, il y a des organisations communautaires de base à vocation <b>ethnique</b>, <b>confrérique</b>, <b>confessionnelle</b>, <b>professionnelle</b>, <b>de ressortissants</b> et <b>sociale</b>.</p>" +
    "<table><tr><th>Organisation</th><th>Ce qu'elle regroupe</th><th>Exemples</th></tr>" +
    "<tr><td><b>ethnique</b></td><td>des personnes d'une même ethnie, d'une même culture</td><td>associations sérères, soninkées, toucouleures, diolas…</td></tr>" +
    "<tr><td><b>confrérique</b></td><td>des personnes d'une même confrérie, avec un guide religieux</td><td>les Tidjanes, les Mourides, les Layènes, les Khadres…</td></tr>" +
    "<tr><td><b>confessionnelle</b></td><td>des personnes de même foi, de même religion</td><td>l'ONG Jamra (islamique) ; Caritas (catholique)</td></tr>" +
    "<tr><td><b>professionnelle</b></td><td>des personnes qui exercent un même métier</td><td>association des médecins ; syndicats ; amicales…</td></tr>" +
    "<tr><td><b>de ressortissants</b></td><td>des personnes qui viennent d'une même localité</td><td>association des ressortissants du Walo…</td></tr>" +
    "<tr><td><b>sociale</b></td><td>elle s'occupe du bien-être de la population</td><td>mutuelle de santé</td></tr></table>" +
    "<p><b>NB</b> : le <b>syndicat</b> est une organisation professionnelle qui défend les droits des travailleurs pour améliorer leurs conditions de vie, par des <b>négociations</b> ou des <b>grèves</b>.</p>" +
    "<p><b>Le fonctionnement d'une organisation communautaire</b> : une mission bien définie ; un statut et un règlement ; des critères d'adhésion et des moyens ; des activités précises à mener.</p>",
  astuce: "Pose-toi la question : <b>qu'ont en commun les membres ?</b> Même ethnie → ethnique ; même confrérie → confrérique ; même religion → confessionnelle ; même métier → professionnelle ; même localité → ressortissants ; le bien-être de tous → sociale.",
  regle: "On reconnaît une organisation communautaire de base à ce qui unit ses membres : l'ethnie, la confrérie, la religion, le métier, la localité d'origine ou le bien-être social.",
  niveaux: [
    [
      { t: "qcm", q: "Une organisation <b>ethnique</b> regroupe des personnes…", choix: ["d'une même ethnie, d'une même culture", "d'un même métier", "d'une même équipe de football"], r: "d'une même ethnie, d'une même culture", expl: "Ethnique vient de « ethnie »." },
      { t: "qcm", q: "Une organisation <b>professionnelle</b> regroupe des personnes…", choix: ["qui exercent un même métier", "qui ont la même religion", "qui habitent le même pays étranger"], r: "qui exercent un même métier", expl: "Profession = métier." },
      { t: "vf", q: "Caritas est une organisation confessionnelle catholique.", r: true, expl: "Elle regroupe des personnes de foi catholique." },
      { t: "vf", q: "Une mutuelle de santé est une organisation sociale.", r: true, expl: "Elle s'occupe du bien-être de la population." },
      { t: "qcm", q: "Une organisation <b>confrérique</b> regroupe des personnes…", choix: ["d'une même confrérie, autour d'un guide religieux", "d'un même village", "d'un même métier"], r: "d'une même confrérie, autour d'un guide religieux", expl: "Confrérique vient de « confrérie »." }
    ],
    [
      { t: "relier", q: "Relie chaque type d'organisation à ce que ses membres ont en commun.", paires: [["ethnique", "la même ethnie"], ["confessionnelle", "la même religion"], ["professionnelle", "le même métier"], ["de ressortissants", "la même localité d'origine"], ["sociale", "le bien-être de la population"]], expl: "Cherche ce qui unit les membres." },
      { t: "classer", q: "Range chaque exemple.", cases: ["confrérique", "confessionnelle", "professionnelle"], items: [["les Mourides", "confrérique"], ["les Tidjanes", "confrérique"], ["les Layènes", "confrérique"], ["Caritas", "confessionnelle"], ["l'ONG Jamra", "confessionnelle"], ["un syndicat d'enseignants", "professionnelle"], ["l'association des médecins", "professionnelle"]], expl: "Confrérie, religion ou métier ?" },
      { t: "qcm", q: "Les personnes originaires de Podor qui vivent à Dakar créent une association. C'est une organisation…", choix: ["de ressortissants", "professionnelle", "confrérique"], r: "de ressortissants", expl: "Elles viennent toutes de la même localité." },
      { t: "qcm", q: "Les chauffeurs de taxi de Thiès se regroupent pour défendre leurs droits. C'est…", choix: ["un syndicat", "une mutuelle de santé", "une association ethnique"], r: "un syndicat", expl: "Le syndicat défend les droits des travailleurs d'un même métier." },
      { t: "saisie", q: "Comment appelle-t-on l'organisation professionnelle qui défend les droits des travailleurs ?", r: ["le syndicat", "un syndicat", "syndicat"], expl: "C'est le NB de la leçon." },
      { t: "vf", q: "Le syndicat peut utiliser la grève pour défendre les travailleurs.", r: true, expl: "Il agit par des négociations ou des grèves." },
      { t: "vf", q: "Une organisation de ressortissants regroupe des personnes d'un même métier.", r: false, expl: "Elle regroupe des personnes venant d'une même localité." },
      { t: "trous", q: "Complète.", texte: "L'ONG Jamra est une organisation confessionnelle [islamique] ; Caritas est une organisation confessionnelle [catholique].", expl: "Les deux exemples du cahier." }
    ],
    [
      { t: "qcm", q: "Quelle est la différence entre une organisation confrérique et une organisation confessionnelle ?", choix: ["la confrérique suit un guide religieux d'une confrérie ; la confessionnelle réunit des gens de même religion", "il n'y a aucune différence", "la confessionnelle est sportive"], r: "la confrérique suit un guide religieux d'une confrérie ; la confessionnelle réunit des gens de même religion", expl: "Une confrérie est un groupe à l'intérieur d'une religion." },
      { t: "classer", q: "Range chaque exemple.", cases: ["de ressortissants", "sociale", "ethnique"], items: [["association des ressortissants du Walo", "de ressortissants"], ["association des gens de Bakel à Dakar", "de ressortissants"], ["mutuelle de santé", "sociale"], ["association culturelle sérère", "ethnique"], ["association culturelle diola", "ethnique"]], expl: "Localité, bien-être ou ethnie ?" },
      { t: "qcm", q: "Que fait une <b>mutuelle de santé</b> ?", choix: ["elle aide ses membres à se soigner", "elle organise des matchs", "elle vend du sable"], r: "elle aide ses membres à se soigner", expl: "Elle s'occupe du bien-être, ici de la santé." },
      { t: "classer", q: "Est-ce nécessaire au fonctionnement d'une organisation communautaire ?", cases: ["oui", "non"], items: [["une mission bien définie", "oui"], ["un statut et un règlement", "oui"], ["des critères d'adhésion", "oui"], ["des activités à mener", "oui"], ["un président étranger", "non"]], expl: "Mission, statut, règlement, critères d'adhésion, moyens, activités." },
      { t: "vf", q: "Les Mourides forment une organisation confessionnelle catholique.", r: false, expl: "Les Mourides sont une confrérie musulmane : organisation confrérique." },
      { t: "saisie", q: "Un groupe de personnes d'une même confrérie avec un guide religieux forme une organisation …", r: "confrérique", expl: "Confrérie → confrérique." },
      { t: "relier", q: "Relie chaque moyen d'action du syndicat à son sens.", paires: [["la négociation", "discuter pour trouver un accord"], ["la grève", "arrêter le travail pour se faire entendre"]], expl: "Les deux moyens cités au cahier." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Le père d'Ibrahima est infirmier : il est membre d'une organisation [professionnelle]. Sa mère est née à Matam : elle fait partie de l'association des [ressortissants] de Matam. Toute la famille cotise à une [mutuelle] de santé.", expl: "Métier, localité, bien-être." },
      { t: "qcm", q: "Une association regroupe tous les Soninkés de Dakar pour garder leur langue et leurs traditions. C'est une organisation…", choix: ["ethnique", "professionnelle", "sociale"], r: "ethnique", expl: "Même ethnie, même culture." },
      { t: "classer", q: "Range ces six types d'organisations selon ce qui unit les membres.", cases: ["origine ou culture", "religion", "travail ou bien-être"], items: [["ethnique", "origine ou culture"], ["de ressortissants", "origine ou culture"], ["confrérique", "religion"], ["confessionnelle", "religion"], ["professionnelle", "travail ou bien-être"], ["sociale", "travail ou bien-être"]], expl: "Regroupe-les deux par deux." },
      { t: "vf", q: "Une organisation communautaire doit avoir des critères d'adhésion.", r: true, expl: "On doit savoir qui peut devenir membre." },
      { t: "qcm", q: "Quel est le rôle du syndicat ?", choix: ["défendre les droits des travailleurs", "organiser les fêtes religieuses", "construire des puits"], r: "défendre les droits des travailleurs", expl: "C'est le NB de la leçon." }
    ]
  ]
});


/* ---- ve-organisations-communautaires.js ---- */
// À VÉRIFIER : le cahier (0104) écrit « Les organisations scolaires participent à l'exécution de l'école » (sens douteux) ; le module écrit « participent à la gestion et au bon fonctionnement de l'école ».
LECONS.push({
  id: "ve-organisations-communautaires",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations communautaires",
  date: "2026-09-21",
  photos: ["DJI_20261118221356_0102_D.jpg", "DJI_20261118221414_0104_D.jpg", "DJI_20261118221418_0105_D.jpg"],
  retiens:
    "<p>Les <b>organisations communautaires</b> sont des organisations <b>locales</b> qui participent au développement du pays. Parmi elles, on peut citer :</p>" +
    "<p><b>Les organisations scolaires et parascolaires</b></p>" +
    "<ul><li>le <b>CGE</b> : Comité de Gestion de l'École ;</li><li>l'<b>APE</b> : Association des Parents d'Élèves ;</li><li>l'<b>AME</b> : Association des Mères d'Élèves ;</li><li>la <b>CS</b> : Coopérative Scolaire.</li></ul>" +
    "<p><b>Autres organisations</b></p>" +
    "<ul><li>le <b>GIE</b> : Groupement d'Intérêt Économique ;</li><li>le <b>GPF</b> : Groupement de Promotion Féminine ;</li><li>l'<b>ASC</b> : Association Sportive et Culturelle ;</li><li>l'<b>ONG</b> : Organisation Non Gouvernementale.</li></ul>" +
    "<p><b>Pour bien fonctionner</b>, une organisation communautaire doit avoir : un <b>bureau</b> composé de membres ; une <b>mission</b> ; un <b>règlement intérieur</b> ; des <b>activités</b> ; un mode de désignation des responsables ; des critères d'<b>adhésion</b>.</p>" +
    "<p><b>Les domaines d'intervention</b></p>" +
    "<ul><li>Les organisations scolaires participent à la gestion et au bon fonctionnement de l'école.</li>" +
    "<li>Les ASC participent au développement du sport et de la culture.</li>" +
    "<li>Les GIE et les GPF aident les hommes et les femmes à se développer avec des activités rentables.</li>" +
    "<li>Les ONG aident les populations en construisant des écoles, des forages, des puits…, surtout en milieu rural.</li></ul>",
  astuce: "Lis bien chaque sigle : il dit souvent ce que fait l'organisation. <b>A</b>SC = <b>S</b>port et <b>C</b>ulture ; G<b>P</b>F = <b>P</b>romotion <b>F</b>éminine (les femmes).",
  regle: "Les organisations communautaires sont des organisations locales (CGE, APE, AME, CS, GIE, GPF, ASC, ONG) qui aident au développement. Pour fonctionner, elles ont un bureau, une mission, un règlement intérieur, des activités et des critères d'adhésion.",
  niveaux: [
    [
      { t: "qcm", q: "Les organisations communautaires sont des organisations…", choix: ["locales qui participent au développement du pays", "étrangères qui font la guerre", "commerciales qui cherchent à gagner de l'argent"], r: "locales qui participent au développement du pays", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "Que veut dire <b>APE</b> ?", choix: ["Association des Parents d'Élèves", "Association pour l'École", "Amicale des Professeurs d'École"], r: "Association des Parents d'Élèves", expl: "APE : les parents d'élèves." },
      { t: "qcm", q: "Que veut dire <b>ASC</b> ?", choix: ["Association Sportive et Culturelle", "Association Scolaire et Communale", "Amicale des Sages du Conseil"], r: "Association Sportive et Culturelle", expl: "Les ASC organisent le sport et la culture dans les quartiers, comme les navétanes." },
      { t: "vf", q: "La coopérative scolaire (CS) est une organisation scolaire.", r: true, expl: "Elle fait partie des organisations scolaires et parascolaires." },
      { t: "vf", q: "Une organisation communautaire n'a besoin d'aucune règle.", r: false, expl: "Elle doit avoir un règlement intérieur, une mission, un bureau…" },
      { t: "qcm", q: "Le <b>GPF</b> s'occupe surtout…", choix: ["des femmes", "des élèves", "des sportifs"], r: "des femmes", expl: "GPF : Groupement de Promotion Féminine." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["CGE", "Comité de Gestion de l'École"], ["AME", "Association des Mères d'Élèves"], ["GIE", "Groupement d'Intérêt Économique"], ["ONG", "Organisation Non Gouvernementale"], ["CS", "Coopérative Scolaire"]], expl: "Le sigle est formé des premières lettres des mots importants." },
      { t: "classer", q: "Organisation scolaire ou autre organisation ?", cases: ["scolaire ou parascolaire", "autre organisation"], items: [["le CGE", "scolaire ou parascolaire"], ["l'APE", "scolaire ou parascolaire"], ["l'AME", "scolaire ou parascolaire"], ["la CS", "scolaire ou parascolaire"], ["le GIE", "autre organisation"], ["l'ASC", "autre organisation"], ["l'ONG", "autre organisation"], ["le GPF", "autre organisation"]], expl: "Les quatre premières concernent l'école." },
      { t: "relier", q: "Relie chaque organisation à son domaine d'intervention.", paires: [["l'ASC", "le sport et la culture"], ["le GPF", "des activités rentables pour les femmes"], ["l'ONG", "des écoles, forages et puits"], ["l'APE", "l'école"]], expl: "Le domaine se lit souvent dans le sigle." },
      { t: "qcm", q: "Les femmes du quartier d'Awa se regroupent pour transformer et vendre des céréales. Elles forment…", choix: ["un GPF", "une ASC", "un CGE"], r: "un GPF", expl: "Un Groupement de Promotion Féminine aide les femmes à avoir des activités rentables." },
      { t: "qcm", q: "Les jeunes de Pikine organisent un tournoi de football et une soirée théâtrale. C'est le rôle…", choix: ["de l'ASC", "de l'AME", "du GIE"], r: "de l'ASC", expl: "L'Association Sportive et Culturelle développe le sport et la culture." },
      { t: "saisie", q: "Quel est le sigle de l'Organisation Non Gouvernementale ?", r: "ONG", expl: "O-N-G." },
      { t: "vf", q: "Les ONG construisent surtout des écoles, des forages et des puits en milieu rural.", r: true, expl: "C'est ce que dit le cahier." },
      { t: "trous", q: "Complète.", texte: "Pour bien fonctionner, une organisation communautaire doit avoir un [bureau] composé de membres, une [mission] et un [règlement] intérieur.", expl: "Ce sont les éléments de fonctionnement." },
      { t: "saisie", q: "Que veut dire le sigle GIE ?", r: ["Groupement d'Intérêt Économique", "groupement d'intérêt économique"], large: true, expl: "GIE : Groupement d'Intérêt Économique." }
    ],
    [
      { t: "qcm", q: "Les GIE et les GPF aident les hommes et les femmes à se développer grâce à…", choix: ["des activités rentables", "des tournois de football", "des puits gratuits"], r: "des activités rentables", expl: "Rentable = qui rapporte de l'argent." },
      { t: "vf", q: "L'AME est l'Association des Maîtres d'École.", r: false, expl: "Piège : AME = Association des Mères d'Élèves." },
      { t: "qcm", q: "Que veut dire « critères d'adhésion » ?", choix: ["les conditions pour devenir membre", "le salaire des membres", "les vacances des membres"], r: "les conditions pour devenir membre", expl: "Adhérer, c'est devenir membre." },
      { t: "classer", q: "Est-ce nécessaire au fonctionnement d'une organisation communautaire ?", cases: ["nécessaire", "pas dans la leçon"], items: [["un bureau", "nécessaire"], ["une mission", "nécessaire"], ["un règlement intérieur", "nécessaire"], ["des critères d'adhésion", "nécessaire"], ["une armée", "pas dans la leçon"], ["un drapeau national", "pas dans la leçon"]], expl: "Bureau, mission, règlement, activités, désignation des responsables, critères d'adhésion." },
      { t: "saisie", q: "Quel est le sigle du Comité de Gestion de l'École ?", r: "CGE", expl: "C-G-E." },
      { t: "relier", q: "Relie chaque situation à l'organisation qui agit.", paires: [["Un forage est construit dans un village de Kédougou.", "une ONG"], ["Des parents se réunissent pour aider l'école.", "l'APE"], ["Les élèves vendent des cahiers à prix réduit.", "la coopérative scolaire"]], expl: "Pense au domaine de chaque organisation." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Les ASC développent le sport et la culture.", expl: "C'est le domaine d'intervention des ASC." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Dans le village de Khady, l'[ONG] a construit un puits. Les femmes du [GPF] cultivent un jardin et vendent les légumes. Les jeunes de l'[ASC] organisent un tournoi. À l'école, les parents sont réunis dans l'[APE].", expl: "Chaque organisation a son domaine." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Les organisations communautaires participent au développement du pays.", "Les organisations communautaires sont toutes des écoles.", "Les organisations communautaires viennent de l'étranger."], r: "Les organisations communautaires participent au développement du pays.", expl: "Ce sont des organisations locales qui aident au développement." },
      { t: "classer", q: "Range chaque organisation selon son domaine.", cases: ["l'école", "l'économie", "le sport et la culture"], items: [["le CGE", "l'école"], ["l'AME", "l'école"], ["le GIE", "l'économie"], ["le GPF", "l'économie"], ["l'ASC", "le sport et la culture"]], expl: "École, économie, sport et culture." },
      { t: "saisie", q: "Quel est le sigle de l'Association des Mères d'Élèves ?", r: "AME", expl: "A-M-E." },
      { t: "vf", q: "Une organisation communautaire doit avoir un mode de désignation de ses responsables.", r: true, expl: "On doit savoir comment on choisit le président, le trésorier…" }
    ]
  ]
});


/* ---- ve-organisations-humanitaires.js ---- */
// Photo 0109 sombre et bougée : la mission de l'ONG Jamra est illisible en partie ; elle n'est pas reprise. Seuls les sigles bien lisibles et sûrs sont utilisés.
// Le cahier écrit « HCR = Haut-Commissariat pour les Réfugiés » ; nom complet : Haut-Commissariat des Nations unies pour les réfugiés.
LECONS.push({
  id: "ve-organisations-humanitaires",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations humanitaires ou caritatives",
  date: "2026-10-12",
  photos: ["DJI_20261118221450_0109_D.jpg"],
  retiens:
    "<p>Une <b>organisation caritative</b> est une association <b>à but non lucratif</b> dont l'objectif est de porter <b>secours et assistance</b> aux personnes dans le besoin. Parmi elles, on peut citer :</p>" +
    "<ul>" +
    "<li>l'<b>ONG Jamra</b> (islamique) ;</li>" +
    "<li><b>Caritas</b> (catholique), qui lutte contre les inégalités ;</li>" +
    "<li>la <b>RADDHO</b> : Rencontre Africaine pour la Défense des Droits de l'Homme ;</li>" +
    "<li>l'<b>ONDH</b> : Organisation Nationale des Droits de l'Homme ;</li>" +
    "<li>le <b>HCR</b> : Haut-Commissariat (des Nations unies) pour les Réfugiés ;</li>" +
    "<li>le <b>CNLS</b> : Conseil National de Lutte contre le Sida.</li>" +
    "</ul>" +
    "<p>Il y a aussi <b>Amnesty International Sénégal</b>, la <b>Croix-Rouge sénégalaise</b>…</p>",
  astuce: "« À but <b>non lucratif</b> » : elle ne cherche pas à gagner de l'argent (le « lucre »), elle cherche à <b>aider</b>.",
  regle: "Une organisation caritative ou humanitaire ne cherche pas à gagner de l'argent : elle porte secours et assistance aux personnes dans le besoin (Caritas, Jamra, RADDHO, ONDH, HCR, CNLS, Croix-Rouge…).",
  niveaux: [
    [
      { t: "qcm", q: "Une organisation caritative a pour objectif de…", choix: ["porter secours et assistance aux personnes dans le besoin", "gagner beaucoup d'argent", "organiser des matchs de football"], r: "porter secours et assistance aux personnes dans le besoin", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "« À but non lucratif » veut dire…", choix: ["qui ne cherche pas à gagner de l'argent", "qui vend très cher", "qui travaille la nuit"], r: "qui ne cherche pas à gagner de l'argent", expl: "Lucratif = qui rapporte de l'argent ; non lucratif = l'inverse." },
      { t: "vf", q: "La Croix-Rouge sénégalaise est une organisation humanitaire.", r: true, expl: "Elle est citée au cahier." },
      { t: "vf", q: "Caritas est une organisation islamique.", r: false, expl: "Caritas est catholique ; c'est l'ONG Jamra qui est islamique." },
      { t: "qcm", q: "Le <b>CNLS</b> lutte contre…", choix: ["le sida", "la sécheresse", "les feux de brousse"], r: "le sida", expl: "CNLS : Conseil National de Lutte contre le Sida." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["RADDHO", "Rencontre Africaine pour la Défense des Droits de l'Homme"], ["ONDH", "Organisation Nationale des Droits de l'Homme"], ["HCR", "Haut-Commissariat pour les Réfugiés"], ["CNLS", "Conseil National de Lutte contre le Sida"]], expl: "Le sigle reprend les premières lettres des mots importants." },
      { t: "classer", q: "Organisation religieuse ou non ?", cases: ["liée à une religion", "non religieuse"], items: [["l'ONG Jamra", "liée à une religion"], ["Caritas", "liée à une religion"], ["la RADDHO", "non religieuse"], ["le CNLS", "non religieuse"], ["le HCR", "non religieuse"], ["la Croix-Rouge sénégalaise", "non religieuse"]], expl: "Jamra est islamique, Caritas est catholique." },
      { t: "qcm", q: "Le <b>HCR</b> s'occupe…", choix: ["des réfugiés", "des élèves", "des sportifs"], r: "des réfugiés", expl: "HCR : Haut-Commissariat pour les Réfugiés." },
      { t: "qcm", q: "Deux organisations du cahier défendent les droits de l'homme. Lesquelles ?", choix: ["la RADDHO et l'ONDH", "le CNLS et le HCR", "Caritas et Jamra"], r: "la RADDHO et l'ONDH", expl: "Leurs sigles contiennent « DH » : Droits de l'Homme." },
      { t: "saisie", q: "Quel est le sigle du Conseil National de Lutte contre le Sida ?", r: "CNLS", expl: "C-N-L-S." },
      { t: "vf", q: "Caritas lutte contre les inégalités.", r: true, expl: "C'est ce que dit le cahier." },
      { t: "vf", q: "Une organisation caritative cherche surtout à faire des bénéfices.", r: false, expl: "Elle est à but non lucratif." },
      { t: "trous", q: "Complète.", texte: "Une organisation caritative est une association à but non [lucratif] dont l'objectif est de porter [secours] et assistance aux personnes dans le besoin.", expl: "Définition du cahier." }
    ],
    [
      { t: "qcm", q: "Quel sigle signifie « Rencontre Africaine pour la Défense des Droits de l'Homme » ?", choix: ["RADDHO", "ONDH", "HCR", "CNLS"], r: "RADDHO", expl: "R (Rencontre) A (Africaine) D (Défense) D (Droits) H (Homme) O." },
      { t: "qcm", q: "Des familles fuient la guerre et arrivent dans un pays voisin. Quelle organisation les aide ?", choix: ["le HCR", "le CNLS", "une ASC"], r: "le HCR", expl: "Ces familles sont des réfugiés : c'est le rôle du HCR." },
      { t: "classer", q: "Range chaque organisation selon ce dont elle s'occupe.", cases: ["droits de l'homme", "santé", "réfugiés"], items: [["la RADDHO", "droits de l'homme"], ["l'ONDH", "droits de l'homme"], ["Amnesty International Sénégal", "droits de l'homme"], ["le CNLS", "santé"], ["le HCR", "réfugiés"]], expl: "Le nom de l'organisation dit son domaine." },
      { t: "saisie", q: "Quel est le sigle de l'Organisation Nationale des Droits de l'Homme ?", r: "ONDH", expl: "O-N-D-H." },
      { t: "vf", q: "L'ONG Jamra est une organisation islamique.", r: true, expl: "Le cahier l'indique." },
      { t: "relier", q: "Relie chaque organisation à sa religion.", paires: [["Caritas", "catholique"], ["l'ONG Jamra", "islamique"]], expl: "Les deux exemples confessionnels du cahier." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "La RADDHO et l'ONDH défendent les [droits] de l'homme. Le HCR aide les [réfugiés]. Le CNLS lutte contre le [sida]. Caritas est une organisation [catholique].", expl: "Rôles des organisations du cahier." },
      { t: "qcm", q: "Après une inondation à Kaolack, des volontaires distribuent des couvertures et de la nourriture gratuitement. Quel type d'organisation agit ?", choix: ["une organisation humanitaire", "une entreprise commerciale", "un club de sport"], r: "une organisation humanitaire", expl: "Elle porte secours et assistance sans chercher de bénéfice." },
      { t: "relier", q: "Relie chaque sigle à son domaine.", paires: [["HCR", "les réfugiés"], ["CNLS", "le sida"], ["ONDH", "les droits de l'homme"]], expl: "Le domaine se lit dans le sigle." },
      { t: "vf", q: "Amnesty International Sénégal fait partie des organisations citées au cahier.", r: true, expl: "Avec la Croix-Rouge sénégalaise." },
      { t: "qcm", q: "Quel mot complète : « Une organisation caritative porte secours et … » ?", choix: ["assistance", "concurrence", "publicité"], r: "assistance", expl: "Secours et assistance : aider." }
    ]
  ]
});

