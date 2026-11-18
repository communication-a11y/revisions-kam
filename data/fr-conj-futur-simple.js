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
