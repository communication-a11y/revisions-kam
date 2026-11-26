var LECONS = window.LECONS = [];
window.VERSION_CONTENU = "202611261251";

/* ---- an-subject-object-pronouns.js ---- */
// Corrections des exemples du cahier : « Argentian » → « Argentinian » ; « too church » → « to church » ;
// « Youre are awesome girl » → « You are an awesome girl » ; « It is hungry lion » → « It is a hungry lion ».
// L'exemple « She is doin King wate » (illisible ou mal recopié) n'est pas repris.
LECONS.push({
  id: "an-subject-object-pronouns",
  cahier: "anglais",
  matiere: "Grammar",
  titre: "Subject and object pronouns (les pronoms sujets et compléments)",
  date: "2026-11-03",
  photos: ["2026-11-25_07.jpg", "2026-11-25_06.jpg", "2026-11-25_05.jpg"],
  retiens:
    "<p><b>A) Subject pronouns</b> (pronoms sujets) : ils font l'action, ils se placent <b>avant le verbe</b>.</p>" +
    "<table><tr><th>singular</th><th>plural</th></tr>" +
    "<tr><td>I = je</td><td>we = nous</td></tr>" +
    "<tr><td>you = tu</td><td>you = vous</td></tr>" +
    "<tr><td>he = il (a man, a boy)<br>she = elle (a woman, a girl)<br>it = il, elle (one animal, one object)</td><td>they = ils, elles</td></tr></table>" +
    "<p>Ex : <b>They</b> are going to the restaurant. <b>We</b> have exercises. <b>It</b> is a hungry lion.</p>" +
    "<p><b>B) Object pronouns</b> (pronoms compléments) : ils se placent <b>après le verbe</b> ou après un petit mot comme <i>with</i>.</p>" +
    "<table><tr><th>subject</th><th>object</th><th>en français</th></tr>" +
    "<tr><td>I</td><td><b>me</b></td><td>me, moi</td></tr>" +
    "<tr><td>you</td><td><b>you</b></td><td>te, toi</td></tr>" +
    "<tr><td>he</td><td><b>him</b></td><td>lui, le, l'</td></tr>" +
    "<tr><td>she</td><td><b>her</b></td><td>lui, la, l'</td></tr>" +
    "<tr><td>it</td><td><b>it</b></td><td>le, la, l', lui</td></tr>" +
    "<tr><td>we</td><td><b>us</b></td><td>nous</td></tr>" +
    "<tr><td>you</td><td><b>you</b></td><td>vous</td></tr>" +
    "<tr><td>they</td><td><b>them</b></td><td>les, eux, elles, leur</td></tr></table>" +
    "<p><b>A smart little girl</b> (page 52) : She likes the Argentinian player → She likes <b>him</b>. She goes to church with her mum → with <b>her</b> ; her dad → <b>him</b> ; her brothers → <b>them</b>.</p>",
  astuce: "Avant le verbe : <b>I, he, she, we, they</b>. Après le verbe : <b>me, him, her, us, them</b>. <b>you</b> et <b>it</b> ne changent pas.",
  regle: "Le pronom sujet se place avant le verbe (I, you, he, she, it, we, you, they) ; le pronom complément se place après le verbe ou après with, to… (me, you, him, her, it, us, you, them).",
  niveaux: [
    [
      { t: "qcm", q: "« Je » se dit en anglais…", choix: ["I", "me", "we"], r: "I", expl: "I = je. Il s'écrit toujours avec une majuscule." },
      { t: "qcm", q: "Pour parler d'une fille, on utilise…", choix: ["she", "he", "it"], r: "she", expl: "she = elle (a woman, a girl)." },
      { t: "qcm", q: "Pour parler d'un animal ou d'un objet, on utilise…", choix: ["it", "he", "she"], r: "it", expl: "it = one animal or one object." },
      { t: "relier", q: "Relie chaque pronom sujet à sa traduction.", paires: [["I", "je"], ["he", "il"], ["she", "elle"], ["we", "nous"], ["they", "ils, elles"]], expl: "Ce sont les pronoms sujets de la leçon." },
      { t: "vf", q: "« They » veut dire « ils » ou « elles ».", r: true, expl: "they = ils / elles, au pluriel." },
      { t: "qcm", q: "Le pronom complément de « he » est…", choix: ["him", "her", "his"], r: "him", expl: "he → him : She likes him." }
    ],
    [
      { t: "relier", q: "Relie chaque pronom sujet à son pronom complément.", paires: [["I", "me"], ["he", "him"], ["she", "her"], ["we", "us"], ["they", "them"]], expl: "you et it ne changent pas." },
      { t: "qcm", q: "Remplace « Moussa » : « ___ is my friend. »", choix: ["He", "She", "It"], r: "He", expl: "Moussa est un garçon : he. Il est avant le verbe : pronom sujet." },
      { t: "qcm", q: "Remplace « the cat » : « ___ is black. »", choix: ["It", "He", "They"], r: "It", expl: "Un animal : it." },
      { t: "qcm", q: "Remplace « Awa and Fatou » : « ___ are sisters. »", choix: ["They", "We", "She"], r: "They", expl: "Deux personnes : they (ils, elles)." },
      { t: "qcm", q: "« She likes the Argentinian player. » → « She likes ___. »", choix: ["him", "he", "them"], r: "him", expl: "Un joueur, après le verbe : him." },
      { t: "qcm", q: "« She goes to church with her mum. » → « She goes to church with ___. »", choix: ["her", "she", "him"], r: "her", expl: "Sa maman, après with : her." },
      { t: "saisie", q: "Écris le pronom complément : « I see her brothers. » → « I see ___. »", r: "them", expl: "Ses frères, plusieurs personnes, après le verbe : them." },
      { t: "classer", q: "Pronom sujet ou pronom complément ?", cases: ["subject", "object"], items: [["I", "subject"], ["we", "subject"], ["they", "subject"], ["me", "object"], ["us", "object"], ["them", "object"], ["him", "object"], ["she", "subject"]], expl: "Sujets : I, he, she, we, they. Compléments : me, him, her, us, them." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["She likes him.", "Her likes he.", "She likes he."], r: "She likes him.", expl: "Sujet avant le verbe : she. Complément après : him." },
      { t: "qcm", q: "« Come with ___ ! » (avec nous)", choix: ["us", "we", "our"], r: "us", expl: "Après with, on met le pronom complément : us." },
      { t: "saisie", q: "Écris le pronom complément : « Look at the lion! » → « Look at ___! »", r: "it", expl: "Un animal : it (il ne change pas)." },
      { t: "qcm", q: "Quel pronom ne change pas entre sujet et complément ?", choix: ["you", "I", "they"], r: "you", expl: "you reste you (et it reste it)." },
      { t: "relier", q: "Relie chaque pronom complément à sa traduction.", paires: [["me", "me, moi"], ["him", "lui, le"], ["her", "lui, la"], ["us", "nous"], ["them", "les, eux, leur"]], expl: "C'est le tableau des object pronouns." },
      { t: "qcm", q: "« ___ is a hungry lion. »", choix: ["It", "Him", "Them"], r: "It", expl: "Avant le verbe, pour un animal : it." },
      { t: "saisie", q: "Écris le pronom sujet : « Fatou and I have exercises. » → « ___ have exercises. »", r: "we", expl: "Fatou et moi = nous : we." }
    ],
    [
      { t: "trous", q: "Complète avec le bon pronom (he, she, him, her, them).", texte: "Fara has two brothers. [She] loves [them]. Her dad is kind ; she goes to the market with [him]. Her mum is a teacher ; [she] works at school.", expl: "Sujet avant le verbe (she), complément après (them, him)." },
      { t: "ordre", q: "Remets les mots dans l'ordre.", r: "She always goes to church with her mum.", expl: "Sujet + verbe + complément : She goes to church with her mum." },
      { t: "qcm", q: "« You are an awesome girl, Fara! » Qui est « you » ?", choix: ["Fara", "her mum", "her brothers"], r: "Fara", expl: "On parle à Fara : you = Fara." },
      { t: "classer", q: "Remplace le mot en gras : quel pronom ?", cases: ["him", "her", "them"], items: [["I help <b>my father</b>.", "him"], ["I help <b>my sister</b>.", "her"], ["I help <b>my friends</b>.", "them"], ["She calls <b>Moussa</b>.", "him"], ["She calls <b>Khady</b>.", "her"], ["She calls <b>the children</b>.", "them"]], expl: "Un garçon/homme : him. Une fille/femme : her. Plusieurs : them." },
      { t: "qcm", q: "Traduis : « Je les vois. »", choix: ["I see them.", "Me see they.", "I see they."], r: "I see them.", expl: "je = I (sujet) ; les = them (complément)." }
    ]
  ]
});


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


/* ---- fr-conj-passe-simple-3e-groupe.js ---- */
LECONS.push({
  id: "fr-conj-passe-simple-3e-groupe",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le passé simple des verbes du 3e groupe",
  date: "2026-11-25",
  photos: ["2026-11-25_21.jpg", "2026-11-25_20.jpg", "2026-11-25_18.jpg"],
  retiens:
    "<p>• Beaucoup de verbes du 3<sup>e</sup> groupe ont des terminaisons en <b>i</b> au passé simple : <b>-is, -is, -it, -îmes, -îtes, -irent</b>.<br>Sentir : je sentis… nous sentîmes…</p>" +
    "<p>• Pour certains verbes, surtout ceux terminés par <b>-re</b>, le radical est modifié.<br>faire : je fis… nous fîmes — conduire : je conduisis… vous conduisîtes — mettre : je mis… ils mirent — permettre : tu permis… nous permîmes</p>" +
    "<p>• Certains verbes ont des terminaisons en <b>u</b> : <b>-us, -us, -ut, -ûmes, -ûtes, -urent</b>.<br>connaître : je connus — vouloir : je voulus — paraître : je parus — savoir : je sus — pouvoir : tu pus — devoir : je dus</p>" +
    "<p>• Les verbes <b>venir</b> et <b>tenir</b> (et leurs dérivés) ont des terminaisons particulières : <b>-ins, -ins, -int, -înmes, -întes, -inrent</b>.<br>je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent</p>" +
    "<table><tr><th>1<sup>er</sup> groupe</th><th>2<sup>e</sup> groupe</th><th>3<sup>e</sup> en i</th><th>3<sup>e</sup> en u</th><th>venir, tenir</th></tr>" +
    "<tr><td>-ai</td><td>-is</td><td>-is</td><td>-us</td><td>-ins</td></tr>" +
    "<tr><td>-as</td><td>-is</td><td>-is</td><td>-us</td><td>-ins</td></tr>" +
    "<tr><td>-a</td><td>-it</td><td>-it</td><td>-ut</td><td>-int</td></tr>" +
    "<tr><td>-âmes</td><td>-îmes</td><td>-îmes</td><td>-ûmes</td><td>-înmes</td></tr>" +
    "<tr><td>-âtes</td><td>-îtes</td><td>-îtes</td><td>-ûtes</td><td>-întes</td></tr>" +
    "<tr><td>-èrent</td><td>-irent</td><td>-irent</td><td>-urent</td><td>-inrent</td></tr></table>",
  astuce: "Au passé simple, <b>nous</b> et <b>vous</b> portent toujours un accent circonflexe : nous fîmes, vous sûtes, nous vînmes.",
  regle: "Au passé simple, les verbes du 3e groupe se terminent en -is, -is, -it, -îmes, -îtes, -irent ou en -us, -us, -ut, -ûmes, -ûtes, -urent ; venir et tenir font -ins, -ins, -int, -înmes, -întes, -inrent.",
  niveaux: [
    [
      { t: "qcm", q: "« je sentis » : quelle est la terminaison ?", choix: ["-is", "-us", "-ai"], r: "-is", expl: "Sentir fait partie des verbes en i : je sentis." },
      { t: "qcm", q: "Passé simple de « savoir » avec « je » :", choix: ["je sus", "je savis", "je savai"], r: "je sus", expl: "Savoir fait partie des verbes en u : je sus." },
      { t: "qcm", q: "Passé simple de « venir » avec « il » :", choix: ["il vint", "il venit", "il venut"], r: "il vint", expl: "Venir a des terminaisons particulières : il vint." },
      { t: "vf", q: "Au passé simple, « faire » donne « je fis ».", r: true, expl: "Le radical change : fai- devient f- : je fis." },
      { t: "qcm", q: "Avec « nous », les terminaisons en i s'écrivent…", choix: ["-îmes", "-imes", "-ïmes"], r: "-îmes", expl: "Accent circonflexe : nous sentîmes, nous fîmes." },
      { t: "classer", q: "Terminaisons en i ou en u ?", cases: ["en i", "en u"], items: [["je fis", "en i"], ["je mis", "en i"], ["je sus", "en u"], ["je voulus", "en u"], ["je sentis", "en i"], ["je dus", "en u"]], expl: "Il faut connaître le verbe : faire, mettre, sentir en i ; savoir, vouloir, devoir en u." }
    ],
    [
      { t: "saisie", q: "Mettre, passé simple : ils …", r: "mirent", expl: "Mettre : je mis… ils mirent." },
      { t: "saisie", q: "Faire, passé simple : nous …", r: "fîmes", expl: "Nous fîmes, avec un accent circonflexe." },
      { t: "saisie", q: "Conduire, passé simple : vous …", r: "conduisîtes", expl: "Conduire : je conduisis… vous conduisîtes." },
      { t: "saisie", q: "Pouvoir, passé simple : tu …", r: "pus", expl: "Pouvoir : tu pus." },
      { t: "saisie", q: "Connaître, passé simple : je …", r: "connus", expl: "Connaître : je connus." },
      { t: "saisie", q: "Tenir, passé simple : ils …", r: "tinrent", expl: "Comme venir : ils vinrent, ils tinrent." },
      { t: "trous", q: "Conjugue « vouloir » au passé simple.", texte: "je [voulus], tu [voulus], il [voulut], nous [voulûmes], vous [voulûtes], ils [voulurent]", expl: "Terminaisons en u : -us, -us, -ut, -ûmes, -ûtes, -urent." },
      { t: "relier", q: "Relie chaque verbe à sa forme du passé simple.", paires: [["paraître", "je parus"], ["devoir", "je dus"], ["permettre", "tu permis"], ["sentir", "nous sentîmes"]], expl: "Les exemples de la leçon." },
      { t: "trous", q: "Conjugue « venir » au passé simple.", texte: "je [vins], tu [vins], il [vint], nous [vînmes], vous [vîntes], ils [vinrent]", expl: "Venir : -ins, -ins, -int, -înmes, -întes, -inrent." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces formes est juste ?", choix: ["nous dûmes", "nous dumes", "nous dûmmes"], r: "nous dûmes", expl: "Accent circonflexe et un seul m : nous dûmes." },
      { t: "qcm", q: "« il vit » : de quel verbe s'agit-il au passé simple ?", choix: ["voir", "vivre", "venir"], r: "voir", expl: "Voir : je vis, il vit. (Venir fait il vint.)" },
      { t: "saisie", q: "Revenir, passé simple : nous …", r: "revînmes", expl: "Les dérivés de venir se conjuguent comme lui : nous revînmes." },
      { t: "saisie", q: "Mets au passé simple : « Moussa (prendre) son cartable. »", r: "prit", expl: "Prendre : il prit (radical modifié, terminaison en i)." },
      { t: "classer", q: "Range selon le groupe de terminaisons.", cases: ["-is, -it…", "-us, -ut…", "-ins, -int…"], items: [["dire", "-is, -it…"], ["écrire", "-is, -it…"], ["lire", "-us, -ut…"], ["boire", "-us, -ut…"], ["tenir", "-ins, -int…"], ["devenir", "-ins, -int…"]], expl: "Il dit, il écrivit ; il lut, il but ; il tint, il devint." },
      { t: "vf", q: "Au passé simple, « ils » se termine toujours par -rent.", r: true, expl: "-èrent, -irent, -urent, -inrent : toujours -rent." },
      { t: "qcm", q: "Quelle phrase est au passé simple ?", choix: ["Ils vinrent au marché.", "Ils venaient au marché.", "Ils viendront au marché."], r: "Ils vinrent au marché.", expl: "Venaient : imparfait ; viendront : futur." }
    ],
    [
      { t: "trous", q: "Mets les verbes entre parenthèses au passé simple.", texte: "Hier, Fatou [vint] (venir) à la maison. Elle [fit] (faire) ses devoirs et [voulut] (vouloir) jouer. Nous [mîmes] (mettre) la table et nous [sûmes] (savoir) qu'elle resterait dîner.", expl: "venir → vint ; faire → fit ; vouloir → voulut ; mettre → mîmes ; savoir → sûmes." },
      { t: "dictee", texte: "Les pêcheurs vinrent tôt et mirent leurs pirogues à la mer.", expl: "venir → vinrent ; mettre → mirent." },
      { t: "dictee", texte: "Nous fîmes nos devoirs, puis nous pûmes enfin jouer dans la cour.", expl: "faire → fîmes ; pouvoir → pûmes, avec l'accent circonflexe." },
      { t: "saisie", q: "Récris au passé simple : « Ils doivent partir. » → « Ils … partir. »", r: "durent", expl: "Devoir : ils durent." },
      { t: "qcm", q: "Quelle série est entièrement juste ?", choix: ["je connus, tu sentis, il tint", "je connis, tu sentus, il tenit", "je connus, tu sentus, il tint"], r: "je connus, tu sentis, il tint", expl: "connaître → u ; sentir → i ; tenir → in." }
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
      { t: "dictee", texte: "Le verbe à l'infinitif se compose d'un radical et d'une terminaison.", expl: "Retiens bien : radical + terminaison." }
    ]
  ]
});


/* ---- fr-gram-adjectif-fonctions.js ---- */
// Corrections : « mis en opposition » → « mis en apposition » ; « épithèctes » → « épithètes ».
LECONS.push({
  id: "fr-gram-adjectif-fonctions",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "L'adjectif : épithète, attribut, mis en apposition",
  date: "2026-11-19",
  photos: ["2026-11-19_01.jpg", "2026-11-19_02.jpg"],
  retiens:
    "<p>→ L'adjectif <b>qualifie le nom</b> qu'il accompagne.</p>" +
    "<p>→ Quand l'adjectif appartient au groupe nominal, on dit qu'il est <b>épithète</b> du nom.<br>Ex : Ce film montre de <b>magnifiques</b> animaux <b>sauvages</b>.<br>Les adjectifs « magnifiques » et « sauvages » appartiennent au groupe nominal dont le nom est « animaux ». Ce sont des épithètes de ce nom.</p>" +
    "<p>→ L'adjectif relié au nom par un <b>verbe d'état</b> est <b>attribut du sujet</b>.<br>Ex : Ces lions paraissent bien <b>tristes</b> dans leur cage.<br>L'adjectif « tristes » est séparé du nom « lions » par le verbe « paraître ».<br>Les principaux verbes d'état sont : <b>être, sembler, devenir, paraître, avoir l'air</b>.</p>" +
    "<p>→ L'adjectif relié au nom par une <b>virgule</b> est <b>mis en apposition</b>.<br>Ex : <b>Peureux</b>, le chat se cache sous la table.</p>",
  astuce: "Regarde ce qu'il y a entre l'adjectif et le nom :<br>• rien → <b>épithète</b> (un chat <b>noir</b>) ;<br>• un verbe d'état → <b>attribut</b> (le chat <b>est</b> noir) ;<br>• une virgule → <b>apposition</b> (<b>Noir</b>, le chat…).",
  regle: "L'adjectif collé au nom dans le groupe nominal est épithète ; relié au nom par un verbe d'état (être, sembler, devenir, paraître, avoir l'air), il est attribut du sujet ; séparé du nom par une virgule, il est mis en apposition.",
  niveaux: [
    [
      { t: "qcm", q: "L'adjectif qualificatif donne un renseignement sur…", choix: ["le nom", "le verbe", "la ponctuation"], r: "le nom", expl: "L'adjectif qualifie le nom qu'il accompagne." },
      { t: "qcm", q: "« Ce film montre de <b>magnifiques</b> animaux sauvages. » L'adjectif en gras est…", choix: ["épithète", "attribut du sujet", "mis en apposition"], r: "épithète", expl: "« magnifiques » appartient au groupe nominal « de magnifiques animaux sauvages » : il est épithète du nom « animaux »." },
      { t: "qcm", q: "« Ces lions paraissent bien <b>tristes</b> dans leur cage. » L'adjectif en gras est…", choix: ["attribut du sujet", "épithète", "mis en apposition"], r: "attribut du sujet", expl: "« tristes » est relié au nom « lions » par le verbe d'état « paraître »." },
      { t: "qcm", q: "« <b>Peureux</b>, le chat se cache sous la table. » L'adjectif en gras est…", choix: ["mis en apposition", "épithète", "attribut du sujet"], r: "mis en apposition", expl: "« Peureux » est séparé du nom « chat » par une virgule." },
      { t: "vf", q: "Être, sembler, devenir, paraître et avoir l'air sont des verbes d'état.", r: true, expl: "Ce sont les principaux verbes d'état de la leçon." },
      { t: "vf", q: "L'adjectif épithète est séparé du nom par une virgule.", r: false, expl: "L'épithète est collé au nom, dans le groupe nominal. Avec une virgule, l'adjectif est mis en apposition." }
    ],
    [
      { t: "classer", q: "Range chaque adjectif en gras selon sa fonction.", cases: ["épithète", "attribut du sujet", "mis en apposition"], items: [["une robe <b>bleue</b>", "épithète"], ["Awa semble <b>fatiguée</b>.", "attribut du sujet"], ["<b>Joyeux</b>, Moussa rentre de l'école.", "mis en apposition"], ["un <b>grand</b> baobab", "épithète"], ["Le ciel devient <b>gris</b>.", "attribut du sujet"], ["<b>Affamés</b>, les enfants courent à table.", "mis en apposition"]], expl: "Collé au nom : épithète. Après un verbe d'état : attribut. Avec une virgule : apposition." },
      { t: "saisie", q: "Écris l'adjectif attribut du sujet : « Le ciel devient gris. »", r: "gris", expl: "« gris » est relié au nom « ciel » par le verbe d'état « devenir »." },
      { t: "saisie", q: "Écris le verbe d'état : « Awa semble fatiguée. »", r: "semble", expl: "« sembler » est un verbe d'état : il relie « fatiguée » au sujet « Awa »." },
      { t: "qcm", q: "Lequel de ces verbes n'est PAS un verbe d'état ?", choix: ["manger", "devenir", "paraître", "sembler"], r: "manger", expl: "Les verbes d'état de la leçon sont : être, sembler, devenir, paraître, avoir l'air." },
      { t: "trous", q: "Écris les deux adjectifs épithètes, dans l'ordre de la phrase : « Moussa a un beau vélo rouge. »", texte: "[beau] et [rouge]", expl: "« beau » et « rouge » appartiennent au groupe nominal « un beau vélo rouge » : ils sont épithètes du nom « vélo »." },
      { t: "qcm", q: "« Fatou a l'air <b>contente</b>. » L'adjectif en gras est…", choix: ["attribut du sujet", "épithète", "mis en apposition"], r: "attribut du sujet", expl: "« avoir l'air » est un verbe d'état : « contente » est attribut du sujet « Fatou »." },
      { t: "relier", q: "Relie chaque fonction à ce qui la reconnaît.", paires: [["épithète", "collé au nom"], ["attribut du sujet", "après un verbe d'état"], ["mis en apposition", "séparé par une virgule"]], expl: "C'est ce qui se trouve entre l'adjectif et le nom qui donne la fonction." },
      { t: "saisie", q: "Écris le nom qualifié par l'adjectif : « Peureux, le chat se cache sous la table. »", r: "chat", expl: "« Peureux » qualifie le nom « chat »." },
      { t: "qcm", q: "« Les mangues <b>mûres</b> sont au marché. » L'adjectif en gras est…", choix: ["épithète", "attribut du sujet", "mis en apposition"], r: "épithète", expl: "« mûres » est collé au nom « mangues », dans le groupe nominal « les mangues mûres »." }
    ],
    [
      { t: "qcm", q: "« Le thé est <b>chaud</b>. » L'adjectif en gras est…", choix: ["attribut du sujet", "épithète", "mis en apposition"], r: "attribut du sujet", expl: "Le verbe d'état « être » relie « chaud » au nom « thé »." },
      { t: "qcm", q: "« Le thé <b>chaud</b> est sur la table. » L'adjectif en gras est…", choix: ["épithète", "attribut du sujet", "mis en apposition"], r: "épithète", aide: "Qu'y a-t-il entre « thé » et « chaud » ?", expl: "« chaud » est collé au nom « thé ». Le verbe « est » vient après : il ne relie pas « chaud » au nom." },
      { t: "vf", q: "Dans « Il semble malade », l'adjectif « malade » est épithète.", r: false, expl: "« sembler » est un verbe d'état : « malade » est attribut du sujet « Il »." },
      { t: "classer", q: "Verbe d'état ou non ?", cases: ["verbe d'état", "autre verbe"], items: [["sembler", "verbe d'état"], ["devenir", "verbe d'état"], ["avoir l'air", "verbe d'état"], ["paraître", "verbe d'état"], ["courir", "autre verbe"], ["chanter", "autre verbe"], ["regarder", "autre verbe"], ["porter", "autre verbe"]], expl: "Retiens les cinq verbes d'état de la leçon : être, sembler, devenir, paraître, avoir l'air." },
      { t: "ordre", q: "Remets les mots dans l'ordre pour mettre l'adjectif « Joyeuse » en apposition.", r: "Joyeuse, Awa danse dans la cour.", expl: "L'adjectif mis en apposition est séparé du nom par une virgule." },
      { t: "qcm", q: "« Les élèves deviennent <b>sages</b>. » Quel nom l'adjectif « sages » qualifie-t-il ?", choix: ["élèves", "deviennent", "les"], r: "élèves", expl: "Le verbe d'état « devenir » relie « sages » au sujet « élèves »." },
      { t: "qcm", q: "« <b>Fatiguée</b>, Khady s'assoit sous l'arbre. » L'adjectif en gras est…", choix: ["mis en apposition", "épithète", "attribut du sujet"], r: "mis en apposition", expl: "« Fatiguée » est séparé du nom « Khady » par une virgule." }
    ],
    [
      { t: "dictee", texte: "Ces lions paraissent bien tristes dans leur cage.", expl: "« tristes » est attribut du sujet « lions » : il prend un s, comme lui." },
      { t: "dictee", texte: "Peureux, le petit chat noir se cache sous la table.", expl: "« Peureux » est mis en apposition ; « petit » et « noir » sont épithètes de « chat »." },
      { t: "classer", q: "« <b>Heureux</b>, le <b>vieux</b> pêcheur paraît <b>fier</b> de sa <b>grande</b> pirogue. » Range les adjectifs.", cases: ["épithète", "attribut du sujet", "mis en apposition"], items: [["Heureux", "mis en apposition"], ["vieux", "épithète"], ["fier", "attribut du sujet"], ["grande", "épithète"]], expl: "« Heureux » : virgule. « vieux » et « grande » : collés au nom. « fier » : après le verbe d'état « paraître »." },
      { t: "qcm", q: "Dans quelle phrase l'adjectif « calme » est-il attribut du sujet ?", choix: ["Ce matin, la mer est calme.", "La mer calme brille au soleil.", "Calme, la mer brille au soleil.", "Les pêcheurs aiment la mer calme."], r: "Ce matin, la mer est calme.", expl: "Dans « la mer est calme », le verbe d'état « être » relie « calme » au nom « mer »." },
      { t: "trous", q: "Écris la fonction de l'adjectif en gras (épithète, attribut ou apposition).", texte: "« Ibrahima est <b>malade</b>. » → [attribut|attribut du sujet] — « <b>Malade</b>, Ibrahima reste au lit. » → [apposition|mis en apposition|mise en apposition] — « un enfant <b>malade</b> » → [épithète]", expl: "Le même adjectif change de fonction selon sa place : après un verbe d'état, avec une virgule, ou collé au nom." },
      { t: "qcm", q: "« Le marché de Sandaga semble <b>immense</b>. » Analyse l'adjectif en gras.", choix: ["attribut du sujet « marché »", "épithète du nom « Sandaga »", "mis en apposition"], r: "attribut du sujet « marché »", expl: "Qu'est-ce qui semble immense ? le marché. « sembler » est un verbe d'état." }
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


/* ---- fr-gram-complement-du-nom.js ---- */
// Leçon recopiée deux fois au cahier (0011-0012 et 0056-0057, photo 0057 floue) : les deux versions concordent.
// Corrections : « compliment » → « complément » ; « en corse » → « en Corse ».
LECONS.push({
  id: "fr-gram-complement-du-nom",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément du nom",
  date: "2026-11-17",
  photos: ["DJI_20261118201756_0011_D.jpg", "DJI_20261118201804_0012_D.jpg", "DJI_20261118220703_0056_D.jpg", "DJI_20261118220707_0057_D.jpg"],
  retiens:
    "<p>→ Le <b>complément du nom</b> donne un renseignement sur le nom.</p>" +
    "<p>Ex : Un ami <b>de ma classe</b> est parti en vacances en Corse.<br>Le nom « ami » est complété par le groupe nominal « ma classe », introduit par la préposition <b>de</b>.<br>« de ma classe » est complément du nom « ami ».</p>" +
    "<p>→ Le complément du nom peut être un <b>verbe à l'infinitif</b>.<br>Ex : Toute sa famille a plaisir <b>à voyager</b>.<br>Le nom « plaisir » est complété par l'infinitif du verbe « voyager ». « à voyager » est complément du nom « plaisir ».</p>",
  astuce: "Le complément du nom est accroché au nom par un petit mot (<b>de</b>, <b>à</b>…) : un ami <b>de</b> ma classe, une machine <b>à</b> coudre. Pose la question : quel ami ? → l'ami de ma classe.",
  regle: "Le complément du nom donne un renseignement sur un nom. Il est relié au nom par une préposition (de, à…) et peut être un groupe nominal ou un verbe à l'infinitif.",
  niveaux: [
    [
      { t: "qcm", q: "Le complément du nom donne un renseignement sur…", choix: ["un nom", "un verbe", "une phrase entière"], r: "un nom", expl: "Comme son nom l'indique, il complète un nom." },
      { t: "qcm", q: "« Un ami de ma classe est parti. » Quel est le complément du nom ?", choix: ["de ma classe", "Un ami", "est parti"], r: "de ma classe", expl: "Quel ami ? l'ami de ma classe." },
      { t: "qcm", q: "Dans « Un ami de ma classe », quel nom est complété ?", choix: ["ami", "classe", "ma"], r: "ami", expl: "« de ma classe » renseigne sur le nom « ami »." },
      { t: "qcm", q: "Dans « un ami de ma classe », quel petit mot relie le complément au nom ?", choix: ["de", "ma", "un"], r: "de", expl: "« de » est une préposition : elle relie le complément au nom." },
      { t: "vf", q: "Le complément du nom peut être un verbe à l'infinitif.", r: true, expl: "Ex : Toute sa famille a plaisir à voyager." },
      { t: "vf", q: "Dans « Toute sa famille a plaisir à voyager », « à voyager » complète le nom « famille ».", r: false, expl: "« à voyager » complète le nom « plaisir »." }
    ],
    [
      { t: "saisie", q: "Écris le complément du nom : « La maison de mon oncle est grande. »", r: "de mon oncle", expl: "Quelle maison ? la maison de mon oncle." },
      { t: "saisie", q: "Écris le complément du nom : « Awa porte une robe en coton. »", r: "en coton", expl: "Quelle robe ? une robe en coton." },
      { t: "saisie", q: "Écris le complément du nom : « Maman a acheté une machine à coudre. »", r: "à coudre", expl: "Quelle machine ? une machine à coudre : le complément est un infinitif." },
      { t: "saisie", q: "Écris le nom complété : « Le car de Thiès arrive. »", r: "car", expl: "« de Thiès » renseigne sur le nom « car »." },
      { t: "relier", q: "Relie chaque nom à son complément.", paires: [["une salle", "de classe"], ["une brosse", "à dents"], ["un jus", "de bissap"], ["une envie", "de dormir"]], expl: "Chaque complément donne un renseignement sur le nom." },
      { t: "classer", q: "Le complément du nom en gras est-il un groupe nominal ou un verbe à l'infinitif ?", cases: ["groupe nominal", "verbe à l'infinitif"], items: [["le livre <b>de mon frère</b>", "groupe nominal"], ["la joie <b>de vivre</b>", "verbe à l'infinitif"], ["le marché <b>de Sandaga</b>", "groupe nominal"], ["une salle <b>à manger</b>", "verbe à l'infinitif"], ["la voix <b>du chanteur</b>", "groupe nominal"], ["le désir <b>de réussir</b>", "verbe à l'infinitif"]], expl: "Après la préposition, on trouve un nom (groupe nominal) ou un verbe à l'infinitif." },
      { t: "trous", q: "Complète avec un complément du nom (aide : de pêche, à repasser, de Dakar).", texte: "le port [de Dakar] — un fer [à repasser] — une pirogue [de pêche]", expl: "Chaque complément précise le nom." },
      { t: "qcm", q: "Dans « le plaisir de lire », « de lire » est…", choix: ["un complément du nom", "un COD", "un sujet"], r: "un complément du nom", expl: "« de lire » renseigne sur le nom « plaisir »." }
    ],
    [
      { t: "qcm", q: "Dans « Le frère de Moussa joue », quel est le sujet du verbe ?", choix: ["Le frère de Moussa", "Moussa", "joue"], r: "Le frère de Moussa", expl: "Qui est-ce qui joue ? le frère de Moussa. « de Moussa » est complément du nom « frère »." },
      { t: "vf", q: "Dans « Awa parle de son voyage », « de son voyage » est un complément du nom.", r: false, expl: "« de son voyage » complète le verbe « parle » : c'est un COI, pas un complément du nom." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un complément du nom ?", choix: ["J'aime le jus de mangue.", "Je pense à ma mère.", "Je viens de Thiès.", "Il parle de football."], r: "J'aime le jus de mangue.", expl: "« de mangue » renseigne sur le nom « jus ». Dans les autres phrases, le groupe complète le verbe." },
      { t: "saisie", q: "Ajoute le complément du nom « de ma classe » au nom « ami » : « Un ami est parti en vacances. »", r: "Un ami de ma classe est parti en vacances.", large: true, expl: "Le complément du nom se place juste après le nom qu'il complète." },
      { t: "relier", q: "Relie chaque complément du nom au nom qu'il complète.", paires: [["de pluie", "une goutte"], ["à voyager", "plaisir"], ["de laine", "un bonnet"], ["d'écrire", "le temps"]], expl: "Le complément du nom suit le nom qu'il renseigne." },
      { t: "qcm", q: "Combien de compléments du nom dans « la cour de l'école du village » ?", choix: ["un", "deux", "trois"], r: "deux", expl: "« de l'école » complète « cour » et « du village » complète « école »." }
    ],
    [
      { t: "dictee", texte: "Le frère de Fatou a rapporté un sac de mangues du marché.", expl: "« de Fatou » complète « frère » ; « de mangues » complète « sac »." },
      { t: "dictee", texte: "Toute sa famille a plaisir à voyager pendant les vacances.", expl: "« à voyager » est complément du nom « plaisir »." },
      { t: "trous", q: "Trouve les compléments du nom : « La pirogue du pêcheur a un moteur à essence. »", texte: "complément de « pirogue » : [du pêcheur] — complément de « moteur » : [à essence]", expl: "Quelle pirogue ? Quel moteur ?" },
      { t: "qcm", q: "Analyse « à voyager » dans « Sa famille a plaisir à voyager ».", choix: ["infinitif, complément du nom plaisir", "infinitif, sujet du verbe avoir", "groupe nominal, COD du verbe avoir"], r: "infinitif, complément du nom plaisir", expl: "Le nom « plaisir » est complété par l'infinitif « voyager »." },
      { t: "classer", q: "Le groupe en gras complète-t-il un nom ou un verbe ?", cases: ["complète un nom", "complète un verbe"], items: [["un verre <b>d'eau</b>", "complète un nom"], ["Il boit <b>de l'eau</b>.", "complète un verbe"], ["la fête <b>de Tabaski</b>", "complète un nom"], ["Il rêve <b>de Tabaski</b>.", "complète un verbe"], ["un panier <b>de fruits</b>", "complète un nom"], ["Elle se souvient <b>de son école</b>.", "complète un verbe"]], expl: "Le complément du nom suit un nom ; le COI ou le COD complète un verbe." }
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
      { t: "saisie", q: "Ajoute le COS « à sa cousine » à la phrase : « Aïssatou raconte une histoire. »", r: "Aïssatou raconte une histoire à sa cousine.", large: true, expl: "Le COS se place en général après le COD." },
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
      { t: "saisie", q: "Écris ce nom propre avec sa majuscule : saint-louis", r: "Saint-Louis", casse: true, expl: "Les noms de villes sont des noms propres : majuscules." },
      { t: "vf", q: "« Dakar » est un nom propre de lieu.", r: true, expl: "Dakar est une ville en particulier." },
      { t: "trous", q: "Trouve un nom propre pour chaque nom commun (aide : Sénégal, Awa, Ziguinchor).", texte: "une fille : [Awa] — un pays : [Sénégal] — une ville : [Ziguinchor]", expl: "Le nom propre désigne une fille, un pays, une ville en particulier." },
      { t: "relier", q: "Relie chaque nom à son genre et son nombre.", paires: [["le lion", "masculin singulier"], ["la maison", "féminin singulier"], ["les couteaux", "masculin pluriel"], ["les chèvres", "féminin pluriel"]], expl: "Un nom commun a un genre et un nombre." },
      { t: "qcm", q: "Dans « Le pêcheur répare son filet », quel nom est sujet du verbe ?", choix: ["pêcheur", "filet", "répare"], r: "pêcheur", expl: "Qui est-ce qui répare ? Le pêcheur : il est sujet du verbe." }
    ],
    [
      { t: "qcm", q: "Dans « Awa lave le seau », quelle est la fonction du nom « seau » ?", choix: ["sujet du verbe", "complément du verbe", "nom propre"], r: "complément du verbe", expl: "« seau » complète le verbe « lave » : Awa lave quoi ? le seau." },
      { t: "qcm", q: "Dans « La maison de Fatou est neuve », quelle est la fonction du nom « Fatou » ?", choix: ["sujet du verbe", "complément du nom", "complément du verbe"], r: "complément du nom", expl: "« de Fatou » complète le nom « maison »." },
      { t: "vf", q: "« Nom propre » est une fonction du nom.", r: false, expl: "Nom propre est une sorte de nom. Les fonctions sont : sujet, complément du nom, complément du verbe." },
      { t: "saisie", q: "Corrige la phrase en mettant les majuscules aux noms propres : « moussa habite à kaolack. »", r: "Moussa habite à Kaolack.", large: true, casse: true, expl: "Moussa et Kaolack sont des noms propres." },
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


/* ---- fr-gram-propositions-independantes.js ---- */
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
      { t: "classer", q: "Quel signe faut-il à la fin de chaque phrase ?", cases: ["le point", "le point d'interrogation", "le point d'exclamation"], items: [["Quel âge as-tu", "le point d'interrogation"], ["Awa habite à Thiès", "le point"], ["Que ce plat est bon", "le point d'exclamation"], ["Viens-tu au champ demain", "le point d'interrogation"], ["Le car est plein", "le point"], ["Comme tu as grandi", "le point d'exclamation"]], expl: "Une question finit par ?, un sentiment par !, une information par un point." },
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
      { t: "trous", q: "Lis ce petit texte et écris le type de chaque phrase dans la case.", texte: "Aïssatou entre dans la cuisine. ([déclarative]) — Quelle bonne odeur ! ([exclamative]) — Que prépares-tu, maman ? ([interrogative]) — Apporte-moi les oignons. ([impérative])", expl: "Information, sentiment, question, ordre." },
      { t: "dictee", texte: "Que ce marché de Sandaga est animé ! Achète-moi des mangues, s'il te plaît.", expl: "Une phrase exclamative (!) puis une phrase impérative (.)." },
      { t: "dictee", texte: "Est-ce que le car pour Saint-Louis est déjà parti ?", expl: "Phrase interrogative : elle finit par un point d'interrogation." },
      { t: "qcm", q: "Le maître dit : « Sortez vos cahiers. » Quel est le type de cette phrase ?", choix: ["déclarative", "interrogative", "exclamative", "impérative"], r: "impérative", expl: "Le maître donne un ordre aux élèves." },
      { t: "saisie", q: "Transforme en phrase impérative (avec « nous ») : « Nous traversons la route prudemment. »", r: "Traversons la route prudemment.", large: true, expl: "À l'impératif, on enlève le sujet « nous »." },
      { t: "classer", q: "Range ces phrases selon qu'elles finissent par « ? » ou par « ! ».", cases: ["finit par ?", "finit par !"], items: [["Que tu es grand", "finit par !"], ["Quand pars-tu", "finit par ?"], ["Quel beau ballon", "finit par !"], ["Qui a pris mon stylo", "finit par ?"], ["Comme il pleut fort", "finit par !"], ["Où vas-tu", "finit par ?"]], expl: "Une question prend ?, un sentiment prend !." }
    ]
  ]
});


/* ---- fr-lect-criteres-texte-explicatif.js ---- */
LECONS.push({
  id: "fr-lect-criteres-texte-explicatif",
  cahier: "francais",
  matiere: "Production d'écrits",
  titre: "La fiche de critères de réussite d'un texte explicatif",
  date: "2026-10-07",
  photos: ["DJI_20261118220449_0035_D.jpg", "DJI_20261118220457_0036_D.jpg"],
  retiens:
    "<p><b>Critères</b> (ce que je dois faire…)</p>" +
    "<p><b>Forme du texte : 3 parties</b> (introduction, développement, conclusion)</p><ol>" +
    "<li>J'explique bien ce qu'on me demande : un objet, un phénomène… C'est l'<b>introduction</b> qui dit ce que je dois expliquer.</li>" +
    "<li>J'organise mon texte en <b>paragraphes clairs</b>. Je donne des <b>exemples</b> pour aider à comprendre : c'est le <b>développement</b>.</li>" +
    "<li>Je fais une petite <b>conclusion</b> à la fin.</li></ol>" +
    "<p><b>Fond du texte</b> : je dois employer</p><ul>" +
    "<li>des <b>mots clairs et simples</b> ;</li>" +
    "<li>des <b>connecteurs logiques</b> pour expliquer, comme <b>parce que</b>, <b>donc</b>, <b>par exemple</b>, <b>cependant</b>…</li></ul>" +
    "<p><b>Présentation</b> : je dois</p><ul>" +
    "<li>faire attention à la langue : écrire sans fautes de grammaire… ;</li>" +
    "<li>écrire lisiblement.</li></ul>",
  astuce: "Les connecteurs : <b>parce que</b> donne la cause, <b>donc</b> la conséquence, <b>par exemple</b> annonce un exemple, <b>cependant</b> introduit une opposition.",
  regle: "Un bon texte explicatif a 3 parties (introduction, développement en paragraphes avec des exemples, conclusion), des mots clairs, des connecteurs logiques, et il est écrit sans fautes et lisiblement.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de parties doit avoir mon texte explicatif ?", choix: ["3", "2", "5"], r: "3", expl: "Introduction, développement, conclusion." },
      { t: "qcm", q: "Quelle partie dit ce que je dois expliquer ?", choix: ["l'introduction", "le développement", "la conclusion"], r: "l'introduction", expl: "C'est l'introduction qui dit ce que je dois expliquer." },
      { t: "qcm", q: "Dans quelle partie est-ce que je donne des exemples, en paragraphes clairs ?", choix: ["le développement", "l'introduction", "la conclusion"], r: "le développement", expl: "Le développement explique, avec des exemples." },
      { t: "vf", q: "Je dois employer des mots clairs et simples.", r: true, expl: "C'est un critère du fond du texte." },
      { t: "vf", q: "Dans un texte explicatif, l'écriture n'a pas d'importance si les idées sont bonnes.", r: false, expl: "La présentation compte : écrire lisiblement et sans fautes." },
      { t: "classer", q: "Range ces mots.", cases: ["connecteur logique", "pas un connecteur"], items: [["parce que", "connecteur logique"], ["donc", "connecteur logique"], ["maison", "pas un connecteur"], ["par exemple", "connecteur logique"], ["courir", "pas un connecteur"], ["cependant", "connecteur logique"]], expl: "parce que, donc, par exemple, cependant sont les connecteurs de la leçon." }
    ],
    [
      { t: "relier", q: "Relie chaque connecteur à son rôle.", paires: [["parce que", "donne la cause"], ["donc", "donne la conséquence"], ["par exemple", "annonce un exemple"], ["cependant", "introduit une opposition"]], expl: "Les connecteurs relient les idées de l'explication." },
      { t: "qcm", q: "« Le baobab perd ses feuilles … il veut garder son eau. »", choix: ["parce qu'", "donc", "cependant"], r: "parce qu'", expl: "On donne la cause : parce que (parce qu' devant il)." },
      { t: "qcm", q: "« Il n'a pas plu depuis des mois, … les puits sont presque vides. »", choix: ["donc", "parce que", "par exemple"], r: "donc", expl: "On donne la conséquence : donc." },
      { t: "qcm", q: "« Beaucoup de fruits poussent au Sénégal, … la mangue et l'orange. »", choix: ["par exemple", "donc", "cependant"], r: "par exemple", expl: "On annonce des exemples." },
      { t: "qcm", q: "« Le soleil est très chaud ; … , le soir, il fait plus frais. »", choix: ["cependant", "parce que", "par exemple"], r: "cependant", expl: "On oppose deux idées : cependant." },
      { t: "classer", q: "Range ces critères.", cases: ["forme du texte", "fond du texte", "présentation"], items: [["faire 3 parties", "forme du texte"], ["employer des mots simples", "fond du texte"], ["écrire lisiblement", "présentation"], ["faire une petite conclusion", "forme du texte"], ["utiliser des connecteurs logiques", "fond du texte"], ["écrire sans fautes", "présentation"]], expl: "C'est la fiche de critères du cahier." },
      { t: "saisie", q: "Quel connecteur de la leçon sert à annoncer un exemple ?", r: "par exemple", expl: "par exemple" },
      { t: "trous", q: "Complète la fiche de critères.", texte: "Forme : 3 parties : [introduction], développement, [conclusion]. Fond : des mots clairs et [simples], des connecteurs [logiques].", expl: "Ce sont les critères du cahier." }
    ],
    [
      { t: "qcm", q: "Quelle introduction est la meilleure pour un texte « Comment se forme la pluie ? » ?", choix: ["La pluie tombe souvent en août. Mais comment se forme-t-elle ?", "Il était une fois un nuage gentil.", "Donc la pluie tombe."], r: "La pluie tombe souvent en août. Mais comment se forme-t-elle ?", expl: "L'introduction présente le sujet et dit ce qu'on va expliquer." },
      { t: "qcm", q: "Quelle conclusion est la meilleure pour ce même texte ?", choix: ["Ainsi, l'eau qui s'évapore forme des nuages, puis retombe en pluie.", "Le nuage est blanc.", "Par exemple, il pleut."], r: "Ainsi, l'eau qui s'évapore forme des nuages, puis retombe en pluie.", expl: "Une petite conclusion résume l'explication." },
      { t: "trous", q: "Complète avec le bon connecteur : <i>parce que, donc, par exemple, cependant</i>.", texte: "Il faut se laver les mains [parce que] les microbes sont partout. Les microbes sont invisibles ; [cependant], ils sont dangereux. Ils peuvent donner des maladies, [par exemple] la diarrhée. Lavons-nous [donc] les mains avant de manger.", expl: "cause, opposition, exemple, conséquence." },
      { t: "vf", q: "Un texte explicatif bien organisé est découpé en paragraphes clairs.", r: true, expl: "« J'organise mon texte en paragraphes clairs. »" },
      { t: "qcm", q: "Moussa a écrit un très bon développement mais il a oublié la fin. Quel critère manque ?", choix: ["la petite conclusion", "l'introduction", "les connecteurs"], r: "la petite conclusion", expl: "Il faut faire une petite conclusion à la fin." },
      { t: "qcm", q: "Quelle phrase utilise des mots clairs et simples ?", choix: ["La pluie aide les plantes à pousser.", "La précipitation pluviométrique favorise la croissance végétale.", "Pluie plante pousser aider."], r: "La pluie aide les plantes à pousser.", expl: "Des mots clairs et simples, dans une phrase correcte." }
    ],
    [
      { t: "qcm", q: "Remets dans l'ordre les parties d'un texte explicatif sur la pêche.", choix: ["1. Comment pêche-t-on à Kayar ? 2. Les pêcheurs partent en pirogue et jettent leurs filets. 3. Ainsi, ils rapportent du poisson pour tout le village.", "1. Ainsi, ils rapportent du poisson. 2. Comment pêche-t-on à Kayar ? 3. Les pêcheurs partent en pirogue.", "1. Les pêcheurs partent en pirogue. 2. Ainsi, ils rapportent du poisson. 3. Comment pêche-t-on à Kayar ?"], r: "1. Comment pêche-t-on à Kayar ? 2. Les pêcheurs partent en pirogue et jettent leurs filets. 3. Ainsi, ils rapportent du poisson pour tout le village.", expl: "Introduction (la question), développement (l'explication), conclusion (ainsi…)." },
      { t: "dictee", texte: "Pour expliquer, j'utilise des connecteurs comme parce que, donc et par exemple.", expl: "Les connecteurs logiques de la fiche." },
      { t: "classer", q: "Fatou relit son texte. Range ce qu'elle a fait.", cases: ["critère respecté", "critère pas respecté"], items: [["Elle a fait 3 parties.", "critère respecté"], ["Elle a écrit très vite, on ne peut pas la lire.", "critère pas respecté"], ["Elle a donné des exemples.", "critère respecté"], ["Elle a laissé beaucoup de fautes.", "critère pas respecté"], ["Elle a utilisé « parce que » et « donc ».", "critère respecté"]], expl: "Il faut écrire lisiblement et sans fautes." },
      { t: "saisie", q: "Quel connecteur de la leçon introduit une opposition ?", r: "cependant", expl: "cependant = mais, pourtant." },
      { t: "vf", q: "Dans l'introduction, je dois déjà donner toutes les explications et tous les exemples.", r: false, expl: "L'introduction dit ce que je vais expliquer ; les explications et les exemples sont dans le développement." }
    ]
  ]
});


/* ---- fr-lect-lettre-officielle.js ---- */
// Source : cahier (photos 0047 à 0049) et photocopie du manuel (« Lire une lettre officielle », lettre de M. Bassirou Ndiaye, photo 0048). Le cahier note « Madame la Directrice de l'ONAS » ; le texte imprimé dit « Madame la Directrice générale » : le module suit le texte imprimé.
LECONS.push({
  id: "fr-lect-lettre-officielle",
  cahier: "francais",
  matiere: "Lecture",
  titre: "Étude de texte informatif : la lettre officielle",
  date: "2026-11-02",
  photos: ["DJI_20261118220604_0047_D.jpg", "DJI_20261118220620_0048_D.jpg", "DJI_20261118220623_0049_D.jpg"],
  retiens:
    "<p>Une <b>lettre officielle</b> est un texte informatif adressé à une <b>autorité</b> pour une demande, une aide…</p>" +
    "<p><b>Les informations utiles :</b></p><ul>" +
    "<li><b>l'expéditeur</b> (ou l'expéditrice) : celui ou celle qui écrit ;</li>" +
    "<li><b>le destinataire</b> : celui ou celle à qui on écrit ;</li>" +
    "<li><b>l'objet</b> : ce pourquoi on écrit ;</li>" +
    "<li><b>la formule d'appel</b> : le titre attribué au destinataire (ex : « Madame la Directrice générale, ») ;</li>" +
    "<li><b>la formule de politesse</b> : pour clôturer la lettre, après le message.</li></ul>" +
    "<p>Pour indiquer <b>l'expéditeur</b>, j'écris : Monsieur ou Madame + nom + le titre que je porte.<br>Ex : Monsieur Bassirou Ndiaye, Délégué du quartier.</p>" +
    "<p>Pour indiquer <b>le destinataire</b>, j'écris : À Madame ou À Monsieur + titre.<br>Ex : À Madame la Directrice générale de l'ONAS.</p>" +
    "<p><b>NB :</b> lorsqu'ils désignent plusieurs personnes : Monsieur → <b>Messieurs</b> ; Madame → <b>Mesdames</b> ; Mademoiselle → <b>Mesdemoiselles</b>.</p>" +
    "<p><b>La lettre étudiée</b> (livre de lecture) : M. Bassirou Ndiaye, délégué du quartier Dagoudane, écrit le 12 septembre 2016, à Saint-Louis, à la Directrice générale de l'Office National de l'Assainissement du Sénégal (ONAS). Objet : évacuation des eaux usées du quartier. Il demande un réseau d'évacuation, car les eaux stagnantes favorisent les moustiques toute l'année. Les ménages, avec la mairie, participeront au financement.</p>",
  astuce: "Pose-toi trois questions : <b>Qui</b> écrit ? (l'expéditeur) — <b>À qui</b> ? (le destinataire) — <b>Pourquoi</b> ? (l'objet).",
  regle: "Une lettre officielle s'adresse à une autorité. On y trouve : l'expéditeur, le lieu et la date, le destinataire, l'objet, la formule d'appel, le message et la formule de politesse.",
  niveaux: [
    [
      { t: "qcm", q: "À qui s'adresse une lettre officielle ?", choix: ["à une autorité", "à un ami", "à un membre de la famille"], r: "à une autorité", expl: "Une lettre officielle est adressée à une autorité pour une demande, une aide…" },
      { t: "relier", q: "Relie chaque partie de la lettre à sa définition.", paires: [["l'expéditeur", "celui qui écrit"], ["le destinataire", "celui à qui on écrit"], ["l'objet", "ce pourquoi on écrit"], ["la formule d'appel", "le titre donné au destinataire"], ["la formule de politesse", "la phrase qui clôt la lettre"]], expl: "Ce sont les informations utiles de la leçon." },
      { t: "qcm", q: "Dans la lettre étudiée, qui est l'expéditeur ?", choix: ["Monsieur Bassirou Ndiaye", "la Directrice générale de l'ONAS", "le maire de Saint-Louis"], r: "Monsieur Bassirou Ndiaye", expl: "C'est lui qui écrit : il est délégué du quartier." },
      { t: "qcm", q: "Dans la lettre étudiée, qui est le destinataire ?", choix: ["la Directrice générale de l'ONAS", "Monsieur Bassirou Ndiaye", "les habitants du quartier"], r: "la Directrice générale de l'ONAS", expl: "La lettre est adressée « À Madame la Directrice générale de l'ONAS »." },
      { t: "vf", q: "L'objet de la lettre est : « Évacuation des eaux usées du quartier ».", r: true, expl: "C'est écrit après le mot « Objet »." },
      { t: "vf", q: "La formule de politesse se trouve au début de la lettre.", r: false, expl: "Elle clôt la lettre, après le message." }
    ],
    [
      { t: "qcm", q: "Où et quand la lettre a-t-elle été écrite ?", choix: ["à Saint-Louis, le 12 septembre 2016", "à Dakar, le 12 septembre 2016", "à Saint-Louis, le 2 novembre 2026"], r: "à Saint-Louis, le 12 septembre 2016", expl: "C'est écrit en haut, à droite : « Saint-Louis, le 12 septembre 2016 »." },
      { t: "qcm", q: "Que demande le délégué ?", choix: ["un réseau d'évacuation des eaux usées", "une nouvelle école", "une route goudronnée"], r: "un réseau d'évacuation des eaux usées", expl: "Il sollicite « la réalisation d'un réseau d'évacuation des eaux usées »." },
      { t: "qcm", q: "Quel problème causent les eaux stagnantes dans les rues ?", choix: ["elles favorisent la prolifération des moustiques", "elles abîment les voitures", "elles font du bruit"], r: "elles favorisent la prolifération des moustiques", expl: "Les eaux stagnantes favorisent les moustiques pendant toute l'année." },
      { t: "qcm", q: "Qui participera au financement des ouvrages ?", choix: ["tous les ménages, avec la mairie", "seulement l'ONAS", "le délégué tout seul"], r: "tous les ménages, avec la mairie", expl: "« En partenariat avec la mairie, tous les ménages participeront au financement. »" },
      { t: "qcm", q: "Quelle est la formule d'appel de la lettre ?", choix: ["Madame la Directrice générale,", "Objet : Évacuation des eaux usées du quartier.", "Le délégué de quartier"], r: "Madame la Directrice générale,", expl: "La formule d'appel donne le titre du destinataire, au début du message." },
      { t: "saisie", q: "Que veut dire le sigle ONAS ? Office National de l'… du Sénégal", r: "Assainissement", expl: "ONAS : Office National de l'Assainissement du Sénégal." },
      { t: "saisie", q: "Comment s'appelle le quartier du délégué ?", r: "Dagoudane", expl: "Il est « Délégué du quartier Dagoudane »." },
      { t: "classer", q: "Range ces éléments de la lettre.", cases: ["expéditeur", "destinataire", "objet"], items: [["Monsieur Bassirou Ndiaye", "expéditeur"], ["Délégué du quartier Dagoudane", "expéditeur"], ["À Madame la Directrice générale de l'ONAS", "destinataire"], ["Évacuation des eaux usées du quartier", "objet"]], expl: "Qui écrit ? À qui ? Pourquoi ?" }
    ],
    [
      { t: "saisie", q: "Écris le pluriel de « Monsieur » (pour plusieurs personnes).", r: "Messieurs", expl: "Monsieur → Messieurs" },
      { t: "saisie", q: "Écris le pluriel de « Madame ».", r: "Mesdames", expl: "Madame → Mesdames" },
      { t: "saisie", q: "Écris le pluriel de « Mademoiselle ».", r: "Mesdemoiselles", expl: "Mademoiselle → Mesdemoiselles" },
      { t: "qcm", q: "Comment Awa Diop, directrice d'école, indique-t-elle l'expéditeur ?", choix: ["Madame Awa Diop, Directrice de l'école", "À Madame Awa Diop", "Chère Awa"], r: "Madame Awa Diop, Directrice de l'école", expl: "Expéditeur : Madame + nom + le titre que je porte." },
      { t: "qcm", q: "Comment écrire le destinataire d'une lettre au maire de Thiès ?", choix: ["À Monsieur le Maire de Thiès", "Monsieur le Maire de Thiès, je", "Salut le maire"], r: "À Monsieur le Maire de Thiès", expl: "Destinataire : À Monsieur ou À Madame + titre." },
      { t: "qcm", q: "Pourquoi le délégué parle-t-il du financement par les ménages et la mairie ?", choix: ["pour montrer que les habitants sont prêts à aider", "pour se plaindre de la mairie", "pour demander de l'argent à l'ONAS pour lui"], r: "pour montrer que les habitants sont prêts à aider", expl: "Cela rend sa demande plus convaincante : le quartier participe." },
      { t: "vf", q: "La lettre officielle est un texte informatif.", r: true, expl: "C'est ce que dit la leçon : elle informe l'autorité et lui fait une demande." }
    ],
    [
      { t: "qcm", q: "Dans quel ordre trouve-t-on ces éléments dans la lettre étudiée ?", choix: ["expéditeur et date — destinataire — objet — formule d'appel — message — formule de politesse", "objet — formule de politesse — expéditeur — destinataire — message", "message — destinataire — objet — expéditeur — formule d'appel"], r: "expéditeur et date — destinataire — objet — formule d'appel — message — formule de politesse", expl: "C'est l'ordre de la lettre de M. Ndiaye." },
      { t: "qcm", q: "Fatou veut écrire au directeur de l'hôpital pour demander une visite de sa classe. Quel objet convient ?", choix: ["Objet : demande de visite de l'hôpital", "Objet : Monsieur le Directeur", "Objet : Fatou"], r: "Objet : demande de visite de l'hôpital", expl: "L'objet dit pourquoi on écrit, en peu de mots." },
      { t: "trous", q: "Complète avec : <i>expéditeur, destinataire, objet</i>.", texte: "Celui qui écrit est l'[expéditeur]. Celui qui reçoit la lettre est le [destinataire]. Ce pourquoi on écrit, c'est l'[objet].", expl: "Qui ? À qui ? Pourquoi ?" },
      { t: "dictee", texte: "Le délégué du quartier écrit une lettre officielle à la Directrice générale de l'ONAS.", expl: "expéditeur : le délégué ; destinataire : la Directrice générale." },
      { t: "saisie", q: "D'après la lettre, quels insectes prolifèrent à cause des eaux stagnantes ?", r: ["les moustiques", "moustiques", "des moustiques"], expl: "Les eaux stagnantes favorisent la prolifération des moustiques." }
    ]
  ]
});


/* ---- fr-lect-texte-explicatif.js ---- */
// À VÉRIFIER : la définition du cahier (photo 0015) contient une phrase incohérente : « a pour objectif d'informer, de faire comprendre un d'informer une situation… ». On a écrit « d'informer et de faire comprendre quelque chose (un phénomène, une situation…) » : à confirmer avec le maître.
// Ce module réunit les deux leçons de lecture sur le texte explicatif : « Étude de textes explicatifs » (0015, vers le 16 sept.) et « Manifester sa compréhension d'un texte explicatif » (« Les îles », 0022, 24 sept.). Le texte « Les îles » n'est pas recopié dans le cahier : seul son plan est travaillé. Le texte sur le baobab est un texte d'entraînement écrit pour l'application.
LECONS.push({
  id: "fr-lect-texte-explicatif",
  cahier: "francais",
  matiere: "Lecture",
  titre: "Le texte explicatif (étude et compréhension : « Les îles »)",
  date: "2026-09-24",
  photos: ["DJI_20261118220140_0015_D.jpg", "DJI_20261118220245_0022_D.jpg"],
  retiens:
    "<p>Un <b>texte explicatif</b> a pour objectif d'<b>informer</b> et de <b>faire comprendre</b> quelque chose (un phénomène, une situation…) en répondant aux questions « <b>pourquoi ?</b> » ou « <b>comment ?</b> ».</p>" +
    "<p>Pour rendre le propos clair et accessible, l'auteur peut s'appuyer sur plusieurs procédés :</p><ul>" +
    "<li>la <b>définition</b> : le sens d'un terme (ex : le texte « Les îles », page 18) ;</li>" +
    "<li>l'<b>énumération</b> : une liste des causes, des conséquences, des problèmes, des solutions… (ex : le texte « Le village inondé », page 27).</li></ul>" +
    "<p>Un texte explicatif a trois parties :</p><ol>" +
    "<li>l'<b>introduction</b> : elle présente le sujet ;</li>" +
    "<li>le <b>développement</b> : il fournit les causes, les raisons, les particularités ou les explications. C'est le cœur du texte ;</li>" +
    "<li>la <b>conclusion</b> : elle résume brièvement l'explication.</li></ol>" +
    "<p><b>Le texte « Les îles »</b> (livre de lecture, page 18) : l'auteur écrit pour <b>expliquer</b> ce qu'est une île. Il commence par <b>définir</b> les îles. Les informations sont données dans cet ordre :<br>1. la définition des îles ; 2. la particularité des îles ; 3. les problèmes des îles ; 4. la conclusion.<br>C'est un texte explicatif (informatif).</p>",
  astuce: "Introduction = de quoi on parle. Développement = pourquoi, comment (le cœur). Conclusion = on résume en une ou deux phrases.",
  regle: "Le texte explicatif informe et fait comprendre en répondant à « pourquoi ? » ou « comment ? ». Il a une introduction, un développement (le cœur du texte) et une conclusion, et utilise la définition et l'énumération.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert un texte explicatif ?", choix: ["à informer et faire comprendre", "à raconter une histoire inventée", "à faire rire"], r: "à informer et faire comprendre", expl: "Il répond aux questions pourquoi ? ou comment ?" },
      { t: "qcm", q: "À quelles questions répond un texte explicatif ?", choix: ["pourquoi ? comment ?", "qui ? quand ?", "combien ? où ?"], r: "pourquoi ? comment ?", expl: "C'est écrit dans la leçon." },
      { t: "relier", q: "Relie chaque partie à son rôle.", paires: [["l'introduction", "présente le sujet"], ["le développement", "donne les causes et les explications"], ["la conclusion", "résume l'explication"]], expl: "Trois parties : introduction, développement, conclusion." },
      { t: "vf", q: "Le développement est le cœur du texte explicatif.", r: true, expl: "C'est lui qui fournit les causes, les raisons et les explications." },
      { t: "vf", q: "Dans le texte « Les îles », l'auteur commence par raconter une aventure.", r: false, expl: "Il commence par définir les îles." },
      { t: "qcm", q: "Quel titre est celui d'un texte explicatif ?", choix: ["Pourquoi la mer est-elle salée ?", "Le lièvre et la tortue", "Lettre à mon cousin"], r: "Pourquoi la mer est-elle salée ?", expl: "Le titre pose une question « pourquoi ? » : on va expliquer." }
    ],
    [
      { t: "qcm", q: "« Une île est une terre entourée d'eau de tous côtés. » Quel procédé l'auteur utilise-t-il ?", choix: ["la définition", "l'énumération", "le dialogue"], r: "la définition", expl: "La phrase donne le sens du mot « île »." },
      { t: "qcm", q: "« L'inondation a plusieurs causes : les fortes pluies, les canaux bouchés et les maisons construites dans les zones basses. » Quel procédé ?", choix: ["l'énumération", "la définition", "la conclusion"], r: "l'énumération", expl: "L'auteur fait la liste des causes." },
      { t: "relier", q: "Relie chaque procédé à ce qu'il fait.", paires: [["la définition", "donne le sens d'un terme"], ["l'énumération", "fait la liste des causes ou des solutions"]], expl: "Deux procédés pour rendre le propos clair." },
      { t: "qcm", q: "Dans le texte « Les îles », quelle information vient en premier ?", choix: ["la définition des îles", "les problèmes des îles", "la conclusion"], r: "la définition des îles", expl: "Ordre : définition, particularité, problèmes, conclusion." },
      { t: "qcm", q: "Dans « Les îles », que trouve-t-on juste après la définition ?", choix: ["la particularité des îles", "la conclusion", "les problèmes des îles"], r: "la particularité des îles", expl: "1. définition ; 2. particularité ; 3. problèmes ; 4. conclusion." },
      { t: "saisie", q: "Comment appelle-t-on la partie qui présente le sujet ?", r: ["l'introduction", "introduction"], expl: "L'introduction présente le sujet." },
      { t: "saisie", q: "Comment appelle-t-on la partie qui résume brièvement l'explication ?", r: ["la conclusion", "conclusion"], expl: "La conclusion résume l'explication." },
      { t: "classer", q: "Range ces textes.", cases: ["texte explicatif", "autre texte"], items: [["Comment se forme la pluie ?", "texte explicatif"], ["Le conte de Leuk le lièvre", "autre texte"], ["Pourquoi le baobab perd-il ses feuilles ?", "texte explicatif"], ["Une lettre à ma grand-mère", "autre texte"], ["Comment les abeilles fabriquent le miel", "texte explicatif"], ["Un poème sur la mer", "autre texte"]], expl: "Le texte explicatif répond à pourquoi ? ou comment ?" }
    ],
    [
      { t: "classer", q: "Lis ces phrases d'un texte sur le baobab et range-les dans la bonne partie.", cases: ["introduction", "développement", "conclusion"], items: [["Au Sénégal, pendant la saison sèche, les baobabs n'ont plus de feuilles. Pourquoi ?", "introduction"], ["Les feuilles laissent échapper de l'eau.", "développement"], ["Pendant la saison sèche, il ne pleut pas : l'arbre doit donc garder son eau.", "développement"], ["Ainsi, en perdant ses feuilles, le baobab peut attendre la saison des pluies.", "conclusion"]], expl: "L'introduction pose la question, le développement explique, la conclusion résume." },
      { t: "qcm", q: "Dans le texte sur le baobab, à quelle question l'auteur répond-il ?", choix: ["Pourquoi le baobab perd-il ses feuilles ?", "Combien mesure un baobab ?", "Qui a planté le baobab ?"], r: "Pourquoi le baobab perd-il ses feuilles ?", expl: "L'introduction se termine par « Pourquoi ? »." },
      { t: "qcm", q: "Quelle phrase pourrait servir de conclusion ?", choix: ["Voilà pourquoi le baobab perd ses feuilles : il garde ainsi son eau.", "Il était une fois un baobab géant.", "Le baobab a des feuilles."], r: "Voilà pourquoi le baobab perd ses feuilles : il garde ainsi son eau.", expl: "La conclusion résume brièvement l'explication." },
      { t: "qcm", q: "Pourquoi l'auteur d'un texte explicatif utilise-t-il des définitions ?", choix: ["pour que le lecteur comprenne les mots difficiles", "pour faire peur au lecteur", "pour raconter une histoire"], r: "pour que le lecteur comprenne les mots difficiles", expl: "La définition rend le propos clair et accessible." },
      { t: "vf", q: "Un texte explicatif est aussi appelé texte informatif dans le cahier.", r: true, expl: "« C'est un texte explicatif (informatif). »" },
      { t: "qcm", q: "« Les problèmes des îles » : quel procédé l'auteur utilise-t-il sans doute pour les présenter ?", choix: ["l'énumération", "la définition", "le dialogue"], r: "l'énumération", expl: "Pour présenter plusieurs problèmes, on en fait la liste : c'est l'énumération." }
    ],
    [
      { t: "qcm", q: "Remets les parties d'un texte explicatif dans l'ordre.", choix: ["introduction — développement — conclusion", "développement — introduction — conclusion", "conclusion — développement — introduction"], r: "introduction — développement — conclusion", expl: "On présente le sujet, on explique, puis on résume." },
      { t: "trous", q: "Complète le plan du texte « Les îles ».", texte: "1. la [définition] des îles ; 2. la [particularité] des îles ; 3. les [problèmes] des îles ; 4. la [conclusion].", expl: "C'est l'ordre relevé dans le cahier." },
      { t: "dictee", texte: "Un texte explicatif répond aux questions pourquoi ou comment pour faire comprendre un phénomène.", expl: "pourquoi, comment, phénomène : mots clés de la leçon." },
      { t: "qcm", q: "Dans quelle partie l'auteur donne-t-il les causes et les raisons ?", choix: ["le développement", "l'introduction", "la conclusion"], r: "le développement", expl: "Le développement fournit les causes, les raisons, les explications." },
      { t: "trous", q: "Complète la définition.", texte: "Un texte explicatif a pour objectif d'[informer] et de faire [comprendre] en répondant aux questions « pourquoi ? » ou « [comment] ? ».", expl: "C'est la définition de la leçon." }
    ]
  ]
});


/* ---- fr-orth-accord-adjectif.js ---- */
// L'exemple du cahier « berger, bergère » est juste pour la terminaison (berger est surtout un nom) ; le module ajoute léger → légère, fier → fière.
LECONS.push({
  id: "fr-orth-accord-adjectif",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "L'accord de l'adjectif qualificatif",
  date: "2026-11-19",
  photos: ["2026-11-19_02.jpg", "2026-11-19_03.jpg"],
  retiens:
    "<p>On forme généralement le <b>féminin</b> d'un adjectif qualificatif en ajoutant un <b>e</b> au masculin.<br>Ex : un homme souriant → une femme souriant<b>e</b></p>" +
    "<p>→ Il existe des cas particuliers :</p>" +
    "<table><tr><th>masculin</th><th>féminin</th><th>exemple</th></tr>" +
    "<tr><td>-if</td><td>-ive</td><td>actif → active</td></tr>" +
    "<tr><td>-x</td><td>-se</td><td>joyeux → joyeuse<br><i>sauf</i> roux → rousse, faux → fausse, doux → douce, vieux → vieille</td></tr>" +
    "<tr><td>-er</td><td>-ère</td><td>berger → bergère, léger → légère</td></tr>" +
    "<tr><td>-eur</td><td>-euse</td><td>moqueur → moqueuse</td></tr>" +
    "<tr><td>-et</td><td>-ette</td><td>coquet → coquette<br><i>sauf</i> complet → complète, discret → discrète, inquiet → inquiète</td></tr>" +
    "</table>" +
    "<p><b>Attention :</b> malin → maligne ; public → publique ; favori → favorite</p>" +
    "<p>On forme le <b>pluriel</b> d'un adjectif en ajoutant un <b>s</b> au singulier.<br>Ex : un garçon sage → des garçons sage<b>s</b></p>",
  astuce: "L'adjectif suit toujours son nom comme son ombre : nom féminin → adjectif féminin ; nom au pluriel → adjectif au pluriel.",
  regle: "L'adjectif s'accorde en genre et en nombre avec le nom qu'il qualifie : on ajoute généralement e au féminin et s au pluriel, avec des cas particuliers (-if → -ive, -x → -se, -er → -ère, -eur → -euse, -et → -ette).",
  niveaux: [
    [
      { t: "qcm", q: "En général, pour former le féminin d'un adjectif, on ajoute…", choix: ["un e", "un s", "un x"], r: "un e", expl: "un homme souriant → une femme souriante." },
      { t: "qcm", q: "En général, pour former le pluriel d'un adjectif, on ajoute…", choix: ["un s", "un e", "un t"], r: "un s", expl: "un garçon sage → des garçons sages." },
      { t: "vf", q: "Le féminin de « actif » est « active ».", r: true, expl: "Les adjectifs en -if font leur féminin en -ive." },
      { t: "qcm", q: "Quel est le féminin de « joyeux » ?", choix: ["joyeuse", "joyeuxe", "joyeusse"], r: "joyeuse", expl: "-x devient -se : joyeux → joyeuse." },
      { t: "vf", q: "Le féminin de « roux » est « rouse ».", r: false, expl: "« roux » est une exception : on écrit « rousse », avec deux s." },
      { t: "qcm", q: "Quel est le féminin de « complet » ?", choix: ["complète", "complette", "complet"], r: "complète", expl: "« complet » est une exception à la règle -et → -ette : on écrit « complète »." }
    ],
    [
      { t: "saisie", q: "Écris au féminin : un garçon souriant → une fille …", r: "souriante", expl: "Cas général : on ajoute un e." },
      { t: "saisie", q: "Écris au féminin : un enfant moqueur → une enfant …", r: "moqueuse", expl: "-eur devient -euse." },
      { t: "saisie", q: "Écris au féminin : un chat coquet → une chatte …", r: "coquette", expl: "-et devient -ette : on double le t." },
      { t: "saisie", q: "Écris au féminin : un élève sportif → une élève …", r: "sportive", expl: "-if devient -ive." },
      { t: "saisie", q: "Écris au féminin : un sac léger → une valise …", r: "légère", expl: "-er devient -ère, avec un accent grave." },
      { t: "saisie", q: "Écris au féminin : un homme heureux → une femme …", r: "heureuse", expl: "-x devient -se." },
      { t: "relier", q: "Relie chaque masculin à son féminin.", paires: [["actif", "active"], ["joyeux", "joyeuse"], ["moqueur", "moqueuse"], ["coquet", "coquette"], ["fier", "fière"]], expl: "Chaque terminaison a sa règle : -if/-ive, -x/-se, -eur/-euse, -et/-ette, -er/-ère." },
      { t: "trous", q: "Mets l'adjectif au pluriel.", texte: "un garçon sage → des garçons [sages] — un mur blanc → des murs [blancs] — une fleur rouge → des fleurs [rouges]", expl: "Au pluriel, on ajoute un s à l'adjectif." },
      { t: "qcm", q: "Choisis le bon accord : « Les mangues sont … »", choix: ["mûres", "mûr", "mûre"], r: "mûres", expl: "« mangues » est féminin pluriel : l'adjectif prend e et s." }
    ],
    [
      { t: "relier", q: "Ces adjectifs sont des exceptions. Relie chacun à son féminin.", paires: [["doux", "douce"], ["faux", "fausse"], ["vieux", "vieille"], ["roux", "rousse"]], expl: "Ces adjectifs en -x ne suivent pas la règle -x → -se." },
      { t: "saisie", q: "Écris au féminin : un garçon inquiet → une fille …", r: "inquiète", expl: "Exception : inquiet → inquiète (pas de double t, mais un accent grave)." },
      { t: "saisie", q: "Écris au féminin : un voisin discret → une voisine …", r: "discrète", expl: "Exception : discret → discrète." },
      { t: "qcm", q: "Quel est le féminin de « malin » ?", choix: ["maligne", "maline", "malinne"], r: "maligne", expl: "Attention : malin → maligne." },
      { t: "qcm", q: "Quel est le féminin de « public » ?", choix: ["publique", "publice", "publicque"], r: "publique", expl: "Attention : public → publique (une école publique)." },
      { t: "qcm", q: "Quel est le féminin de « favori » ?", choix: ["favorite", "favorie", "favorise"], r: "favorite", expl: "Attention : favori → favorite." },
      { t: "classer", q: "Le féminin suit-il la règle de sa terminaison ou est-ce une exception ?", cases: ["suit la règle", "exception"], items: [["joyeux → joyeuse", "suit la règle"], ["doux → douce", "exception"], ["coquet → coquette", "suit la règle"], ["complet → complète", "exception"], ["peureux → peureuse", "suit la règle"], ["vieux → vieille", "exception"]], expl: "Règles : -x → -se et -et → -ette. Exceptions à retenir : doux, faux, roux, vieux ; complet, discret, inquiet." },
      { t: "saisie", q: "Mets au féminin pluriel : un gâteau doux → des boissons …", r: "douces", expl: "doux → douce (exception), puis s au pluriel : douces." }
    ],
    [
      { t: "dictee", texte: "Ma grand-mère est une femme douce, discrète et toujours souriante.", expl: "doux → douce, discret → discrète, souriant → souriante : l'adjectif s'accorde avec « femme »." },
      { t: "dictee", texte: "Les élèves actives et joyeuses ont gagné le match.", expl: "« élèves » est ici féminin pluriel : actif → actives, joyeux → joyeuses." },
      { t: "trous", q: "Accorde les adjectifs entre parenthèses.", texte: "Awa est une fille [sportive] (sportif). Sa sœur est [inquiète] (inquiet). Les mangues [mûres] (mûr) sont [délicieuses] (délicieux).", expl: "sportif → sportive (-if → -ive) ; inquiet → inquiète (exception) ; mûr → mûres ; délicieux → délicieuses (-x → -se, puis s)." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Fatou est une fille malicieuse et coquette.", "Fatou est une fille malicieuxe et coquète.", "Fatou est une fille malicieuse et coquete.", "Fatou est une fille malicieus et coquette."], r: "Fatou est une fille malicieuse et coquette.", expl: "malicieux → malicieuse (-x → -se) ; coquet → coquette (-et → -ette)." },
      { t: "classer", q: "Quel accord a l'adjectif en gras ?", cases: ["féminin singulier", "masculin pluriel", "féminin pluriel"], items: [["une école <b>publique</b>", "féminin singulier"], ["des garçons <b>sages</b>", "masculin pluriel"], ["des chèvres <b>rousses</b>", "féminin pluriel"], ["une chanson <b>favorite</b>", "féminin singulier"], ["des enfants <b>moqueurs</b>", "masculin pluriel"], ["des voisines <b>discrètes</b>", "féminin pluriel"]], expl: "Regarde le nom : son genre et son nombre décident de l'accord de l'adjectif." },
      { t: "saisie", q: "Récris au féminin : « Un vieux pêcheur heureux et fier. » → « Une … pêcheuse … et … » Écris les trois adjectifs séparés par des virgules.", r: ["vieille, heureuse, fière", "vieille,heureuse,fière"], expl: "vieux → vieille (exception), heureux → heureuse, fier → fière." },
      { t: "dictee", texte: "Parfois, je regarde les anciennes photographies de ma grand-mère.", expl: "« photographies » est féminin pluriel : ancien → anciennes." },
      { t: "dictee", texte: "Ma mère est fière de sa nouvelle voiture.", expl: "fier → fière ; nouveau → nouvelle : les adjectifs s'accordent avec « mère » et « voiture »." }
    ]
  ]
});


/* ---- fr-orth-accord-verbe-sujet.js ---- */
// Corrections : titre « avec sont sujet » → « avec son sujet » ; « Le gaitariste » → « Le guitariste ».
LECONS.push({
  id: "fr-orth-accord-verbe-sujet",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "L'accord du verbe avec son sujet",
  date: "2026-10-13",
  photos: ["DJI_20261118220513_0039_D.jpg", "DJI_20261118220520_0040_D.jpg"],
  retiens:
    "<p>Le sujet commande le verbe : le verbe s'accorde avec le <b>nom le plus important</b> du groupe nominal sujet.<br>Ex : Les <b>chaussures</b> neuves de Lalia brill<b>ent</b> au soleil. (c'est « chaussures » qui commande, pas « Lalia »)</p>" +
    "<p>→ Un verbe commandé par <b>plusieurs sujets au singulier</b> s'écrit <b>au pluriel</b>.<br>Ex : Le guitariste, le pianiste et le batteur form<b>ent</b> un orchestre.</p>" +
    "<p>→ <b>Plusieurs verbes</b> commandés par <b>un sujet au singulier</b> s'écrivent <b>au singulier</b>.<br>Ex : Le musicien tap<b>e</b>, tir<b>e</b> et souffl<b>e</b> dans ses instruments.</p>",
  astuce: "Pour trouver le nom qui commande, enlève les mots en trop : « Les chaussures (neuves de Lalia) brillent. » Plusieurs sujets ? Remplace-les par « ils » : « Le guitariste, le pianiste et le batteur » = <b>ils</b> forment.",
  regle: "Le verbe s'accorde avec le nom principal du groupe sujet. Plusieurs sujets au singulier → verbe au pluriel. Un sujet au singulier → tous ses verbes au singulier.",
  niveaux: [
    [
      { t: "qcm", q: "Qui commande le verbe ?", choix: ["le sujet", "le COD", "le complément de lieu"], r: "le sujet", expl: "Le sujet commande le verbe." },
      { t: "qcm", q: "« Les chaussures neuves de Lalia brillent. » Quel nom commande le verbe ?", choix: ["chaussures", "Lalia", "neuves"], r: "chaussures", expl: "Ce sont les chaussures qui brillent : le verbe est au pluriel." },
      { t: "vf", q: "Plusieurs sujets au singulier commandent un verbe au pluriel.", r: true, expl: "Le guitariste, le pianiste et le batteur forment un orchestre." },
      { t: "vf", q: "Si un sujet au singulier commande plusieurs verbes, ces verbes s'écrivent au pluriel.", r: false, expl: "Ils restent au singulier : le musicien tape, tire et souffle." },
      { t: "qcm", q: "« Le guitariste, le pianiste et le batteur … un orchestre. »", choix: ["forment", "forme", "formes"], r: "forment", expl: "Trois sujets au singulier = ils : forment." },
      { t: "qcm", q: "« Le musicien tape, tire et … dans ses instruments. »", choix: ["souffle", "soufflent", "souffles"], r: "souffle", expl: "Un seul sujet au singulier : tous les verbes restent au singulier." }
    ],
    [
      { t: "trous", q: "Accorde le verbe au présent.", texte: "Awa et Fatou [chantent] (chanter). — Le chien [aboie] (aboyer). — Les enfants [jouent] (jouer). — Mon père et mon oncle [partent] (partir).", expl: "Deux sujets → pluriel ; un sujet singulier → singulier." },
      { t: "qcm", q: "« Les mangues du marché … très mûres. »", choix: ["sont", "est"], r: "sont", expl: "Le nom qui commande est « mangues » (pluriel), pas « marché »." },
      { t: "qcm", q: "« Le panier de mangues … lourd. »", choix: ["est", "sont"], r: "est", expl: "Le nom qui commande est « panier » (singulier), pas « mangues »." },
      { t: "saisie", q: "Accorde le verbe au présent : « Le lion et la hyène (chasser) la nuit. »", r: "chassent", expl: "Deux sujets au singulier → verbe au pluriel." },
      { t: "saisie", q: "Accorde le verbe au présent : « La fille de nos voisins (danser) bien. »", r: "danse", expl: "C'est « la fille » qui danse : singulier." },
      { t: "saisie", q: "Accorde le verbe au présent : « Les amis de Moussa (arriver) ce soir. »", r: "arrivent", expl: "C'est « les amis » qui arrivent : pluriel." },
      { t: "trous", q: "Un seul sujet, plusieurs verbes : accorde au présent.", texte: "Le berger [appelle] (appeler), [compte] (compter) et [rentre] (rentrer) ses moutons.", aide: "appeler double le l.", expl: "Un sujet au singulier : tous les verbes au singulier." },
      { t: "relier", q: "Relie chaque sujet au verbe bien accordé.", paires: [["Khady", "lave le linge."], ["Khady et sa sœur", "lavent le linge."], ["Les robes de Khady", "sèchent au soleil."], ["La robe des filles", "sèche au soleil."]], expl: "Cherche le nom qui commande dans chaque sujet." },
      { t: "vf", q: "« Le maître et le directeur parle. » est bien écrit.", r: false, expl: "Deux sujets → pluriel : le maître et le directeur parlent." }
    ],
    [
      { t: "qcm", q: "« Les cris des enfants … la maison. »", choix: ["remplissent", "remplit"], r: "remplissent", expl: "C'est « les cris » qui remplissent." },
      { t: "qcm", q: "« Le bruit des vagues … les pêcheurs. »", choix: ["berce", "bercent"], r: "berce", expl: "C'est « le bruit » qui berce, pas « les vagues »." },
      { t: "saisie", q: "Accorde le verbe au présent : « Dans la cour (jouer) Moussa et Ibrahima. »", r: "jouent", aide: "Le sujet est après le verbe.", expl: "Qui est-ce qui joue ? Moussa et Ibrahima : deux sujets → pluriel." },
      { t: "saisie", q: "Accorde le verbe au présent : « La voiture de mes parents (rouler) vite. »", r: "roule", expl: "C'est « la voiture » qui roule : singulier." },
      { t: "trous", q: "Accorde les verbes au présent.", texte: "Ma mère, ma tante et ma grand-mère [préparent] (préparer) le repas. Ma petite sœur [lave] (laver), [coupe] (couper) et [range] (ranger) les légumes.", expl: "Trois sujets → pluriel ; un seul sujet pour trois verbes → singulier." },
      { t: "vf", q: "« Les élèves de la classe écoute le maître. » est bien écrit.", r: false, expl: "Le nom qui commande est « élèves » : les élèves écoutent." },
      { t: "saisie", q: "Corrige le verbe : « Le car et le taxi arrive en même temps. »", r: "arrivent", expl: "Deux sujets au singulier → verbe au pluriel." }
    ],
    [
      { t: "dictee", texte: "Les chaussures neuves de Lalia brillent au soleil du matin.", expl: "C'est « chaussures » qui commande le verbe : brillent." },
      { t: "dictee", texte: "Le guitariste, le pianiste et le batteur forment un bel orchestre.", expl: "Plusieurs sujets au singulier : verbe au pluriel." },
      { t: "dictee", texte: "Le vieux pêcheur répare, nettoie et repeint sa pirogue.", expl: "Un sujet au singulier commande trois verbes au singulier." },
      { t: "trous", q: "Accorde les verbes au présent.", texte: "Au marché de Sandaga, les vendeuses de tissu [crient] (crier) fort. Une cliente [regarde] (regarder), [touche] (toucher) et [choisit] (choisir) un pagne. Son mari et son fils [attendent] (attendre) dehors.", expl: "vendeuses → pluriel ; une cliente → singulier pour les trois verbes ; deux sujets → pluriel." },
      { t: "qcm", q: "Quelle phrase est bien accordée ?", choix: ["Le troupeau de vaches traverse la route.", "Le troupeau de vaches traversent la route.", "Les vaches du troupeau traverse la route.", "Le troupeau et le berger traverse la route."], r: "Le troupeau de vaches traverse la route.", expl: "C'est « le troupeau » (singulier) qui traverse." }
    ]
  ]
});


/* ---- fr-orth-conjonctions-coordination.js ---- */
LECONS.push({
  id: "fr-orth-conjonctions-coordination",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les conjonctions de coordination",
  date: "2026-11-24",
  photos: ["2026-11-25_21.jpg"],
  retiens:
    "<p>Une <b>conjonction de coordination</b> joint des éléments <b>de même nature</b> (deux noms, deux adjectifs, deux propositions…).</p>" +
    "<p>Les conjonctions de coordination sont : <b>mais, ou, et, donc, or, ni, car</b>.</p>" +
    "<p>Ex : du riz <b>et</b> du poisson — petit <b>mais</b> courageux — La souris danse <b>car</b> le chat est mort.</p>",
  astuce: "Pour les retenir : « <b>Mais où est donc Ornicar ?</b> » → mais, ou, et, donc, or, ni, car.",
  regle: "Les conjonctions de coordination (mais, ou, et, donc, or, ni, car) relient des éléments de même nature.",
  niveaux: [
    [
      { t: "qcm", q: "Combien y a-t-il de conjonctions de coordination ?", choix: ["7", "5", "10"], r: "7", expl: "mais, ou, et, donc, or, ni, car." },
      { t: "qcm", q: "Lequel de ces mots est une conjonction de coordination ?", choix: ["car", "avec", "dans"], r: "car", expl: "« avec » et « dans » sont des prépositions." },
      { t: "vf", q: "Une conjonction de coordination relie des éléments de même nature.", r: true, expl: "Deux noms, deux adjectifs, deux propositions…" },
      { t: "qcm", q: "Quelle phrase permet de retenir les conjonctions de coordination ?", choix: ["Mais où est donc Ornicar ?", "Le chat est sur le mur.", "Il était une fois."], r: "Mais où est donc Ornicar ?", expl: "mais, ou, et, donc, or, ni, car." },
      { t: "classer", q: "Conjonction de coordination ou non ?", cases: ["conjonction de coordination", "autre mot"], items: [["mais", "conjonction de coordination"], ["donc", "conjonction de coordination"], ["ni", "conjonction de coordination"], ["or", "conjonction de coordination"], ["sous", "autre mot"], ["pour", "autre mot"], ["très", "autre mot"], ["sur", "autre mot"]], expl: "Seules mais, ou, et, donc, or, ni, car sont des conjonctions de coordination." }
    ],
    [
      { t: "qcm", q: "« Veux-tu du thé ___ du café ? »", choix: ["ou", "car", "donc"], r: "ou", expl: "« ou » propose un choix." },
      { t: "qcm", q: "« Je reste à la maison ___ je suis malade. »", choix: ["car", "mais", "ni"], r: "car", expl: "« car » donne la cause." },
      { t: "qcm", q: "« Il est petit ___ très courageux. »", choix: ["mais", "donc", "car"], r: "mais", expl: "« mais » marque une opposition." },
      { t: "qcm", q: "« Il a beaucoup travaillé, il a ___ réussi. »", choix: ["donc", "or", "ni"], r: "donc", expl: "« donc » donne la conséquence." },
      { t: "qcm", q: "« Je n'aime ___ le lait ___ le fromage. »", choix: ["ni… ni", "et… et", "ou… ou"], r: "ni… ni", expl: "« ni » s'emploie dans une phrase négative." },
      { t: "trous", q: "Complète avec et, mais, ou, car.", texte: "Awa [et] Fatou vont au marché. Elles veulent du poisson [ou] de la viande. Elles se dépêchent [car] il est tard, [mais] le marché est encore ouvert.", expl: "et : ajout ; ou : choix ; car : cause ; mais : opposition." },
      { t: "saisie", q: "Écris la conjonction de coordination : « Moussa court vite donc il gagne. »", r: "donc", expl: "« donc » relie deux propositions." },
      { t: "relier", q: "Relie chaque conjonction à son sens.", paires: [["et", "ajouter"], ["mais", "opposer"], ["ou", "choisir"], ["car", "donner la cause"], ["donc", "donner la conséquence"]], expl: "Chaque conjonction a un sens précis." }
    ],
    [
      { t: "qcm", q: "Attention : « Où vas-tu ? » « Où » est-il une conjonction de coordination ?", choix: ["non : « où » avec accent indique le lieu", "oui", "oui, mais seulement à l'école"], r: "non : « où » avec accent indique le lieu", expl: "La conjonction s'écrit « ou » sans accent (ou bien)." },
      { t: "qcm", q: "Quelle phrase contient « ou » conjonction de coordination ?", choix: ["Tu prends le car ou le taxi ?", "Où est le car ?", "La ville où je suis né."], r: "Tu prends le car ou le taxi ?", expl: "On peut dire « ou bien » : c'est la conjonction sans accent." },
      { t: "classer", q: "« ou » ou « où » ?", cases: ["ou", "où"], items: [["du riz ___ du mil", "ou"], ["___ habites-tu ?", "où"], ["aujourd'hui ___ demain", "ou"], ["la maison ___ j'habite", "où"]], expl: "« ou » = ou bien ; « où » = le lieu." },
      { t: "qcm", q: "« Or » est une conjonction de coordination. Quel mot s'écrit pareil mais n'en est pas une ?", choix: ["l'or (le métal précieux)", "donc", "car"], r: "l'or (le métal précieux)", expl: "« un collier en or » : ici « or » est un nom." },
      { t: "vf", q: "Dans « un car rapide », « car » est une conjonction de coordination.", r: false, expl: "Ici « car » est un nom (le véhicule) : un car de Thiès." },
      { t: "saisie", q: "Complète : « Il n'a ___ frère ni sœur. »", r: "ni", expl: "ni… ni dans une phrase négative." }
    ],
    [
      { t: "trous", q: "Complète avec la bonne conjonction de coordination.", texte: "Il pleuvait, [donc] nous sommes restés à la maison. Je voulais jouer dehors [mais] maman a refusé. Elle avait raison [car] la cour était inondée.", expl: "donc : conséquence ; mais : opposition ; car : cause." },
      { t: "dictee", texte: "Mon frère est petit mais il court vite, donc il gagne souvent.", expl: "mais : opposition ; donc : conséquence." },
      { t: "ordre", q: "Remets les mots dans l'ordre.", r: "Veux-tu du jus ou de l'eau ?", expl: "« ou » relie deux groupes nominaux : du jus, de l'eau." },
      { t: "qcm", q: "Dans « Awa est grande et belle », la conjonction relie…", choix: ["deux adjectifs", "deux noms", "deux verbes"], r: "deux adjectifs", expl: "Éléments de même nature : grande et belle sont deux adjectifs." },
      { t: "classer", q: "Quelle conjonction convient ?", cases: ["car", "donc"], items: [["Je mange ___ j'ai faim.", "car"], ["J'ai faim, ___ je mange.", "donc"], ["Il dort ___ il est fatigué.", "car"], ["Il est fatigué, ___ il dort.", "donc"]], expl: "car + cause ; donc + conséquence." }
    ]
  ]
});


/* ---- fr-orth-le-la-les-lui-leur.js ---- */
// Ajout : « leur placé devant un verbe ne prend jamais de s » ne figure pas mot pour mot dans cette leçon, mais découle de la correction de la leçon précédente (le cahier écrivait « leurs » parmi les pronoms) ; c'est le piège d'orthographe de la leçon.
LECONS.push({
  id: "fr-orth-le-la-les-lui-leur",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Le, la, les, l', lui, leur devant un verbe",
  date: "2026-10-15",
  photos: ["DJI_20261118220539_0043_D.jpg", "DJI_20261118220547_0044_D.jpg"],
  retiens:
    "<p>Placés <b>devant un verbe</b>, le, la, les, l', lui, leur sont des <b>pronoms personnels compléments</b>.</p>" +
    "<ul><li><b>le, la, les, l'</b> sont <b>COD</b>.<br>Ex : Je <b>le</b> vois. (Je vois qui ? le maître)</li>" +
    "<li><b>lui, leur</b> sont <b>COI</b>.<br>Ex : Il <b>lui</b> demande comment il fait. (Il demande à qui ? à lui)</li></ul>" +
    "<p><b>Attention :</b> devant un verbe, <b>leur</b> est un pronom : il ne prend jamais de <b>s</b>. Ex : Je <b>leur</b> parle.</p>" +
    "<p>Devant un <b>nom</b>, le, la, les, l' sont des <b>articles</b> : <b>le</b> maître, <b>la</b> porte.</p>",
  astuce: "Regarde le mot qui suit : un <b>verbe</b> → c'est un pronom (je <b>la</b> regarde) ; un <b>nom</b> → c'est un article (<b>la</b> porte). Pour leur : si tu peux dire « lui » à la place, c'est le pronom, sans s.",
  regle: "Devant un verbe, le, la, les, l' sont des pronoms COD et lui, leur des pronoms COI. Le pronom leur ne prend jamais de s.",
  niveaux: [
    [
      { t: "qcm", q: "Devant un verbe, « le, la, les, l' » sont…", choix: ["des pronoms personnels compléments", "des articles", "des noms"], r: "des pronoms personnels compléments", expl: "Devant un verbe, ce sont des pronoms." },
      { t: "qcm", q: "Devant un verbe, « le, la, les, l' » ont la fonction de…", choix: ["COD", "COI", "sujet"], r: "COD", expl: "Je le vois : je vois qui ? le (maître) : COD." },
      { t: "qcm", q: "Devant un verbe, « lui, leur » ont la fonction de…", choix: ["COI", "COD", "sujet"], r: "COI", expl: "Il lui demande : il demande à qui ? à lui : COI." },
      { t: "vf", q: "Dans « Je le vois », « le » est un article.", r: false, expl: "« le » est devant le verbe « vois » : c'est un pronom, COD." },
      { t: "vf", q: "Le pronom « leur » placé devant un verbe ne prend jamais de s.", r: true, expl: "Je leur parle, je leur donne : jamais de s." },
      { t: "classer", q: "Le mot en gras est-il devant un verbe ou devant un nom ?", cases: ["pronom (devant un verbe)", "article (devant un nom)"], items: [["Je <b>la</b> regarde.", "pronom (devant un verbe)"], ["<b>La</b> porte est ouverte.", "article (devant un nom)"], ["Tu <b>les</b> appelles.", "pronom (devant un verbe)"], ["<b>Les</b> élèves arrivent.", "article (devant un nom)"], ["Il <b>l'</b>aime.", "pronom (devant un verbe)"], ["<b>L'</b>école est fermée.", "article (devant un nom)"]], expl: "Devant un verbe : pronom. Devant un nom : article." }
    ],
    [
      { t: "trous", q: "Remplace le groupe en gras par le, la, l' ou les.", texte: "Je vois <b>le maître</b> → Je [le] vois. — Awa lave <b>la marmite</b> → Awa [la] lave. — Il range <b>ses cahiers</b> → Il [les] range. — Tu aimes <b>ton école</b> → Tu [l']aimes.", expl: "Masculin : le ; féminin : la ; pluriel : les ; devant une voyelle : l'." },
      { t: "trous", q: "Remplace le groupe en gras par lui ou leur.", texte: "Il parle <b>à son ami</b> → Il [lui] parle. — Je téléphone <b>à mes parents</b> → Je [leur] téléphone. — Nous obéissons <b>au maître</b> → Nous [lui] obéissons.", expl: "Un seul : lui ; plusieurs : leur (sans s)." },
      { t: "qcm", q: "« Les enfants ont faim ; maman … donne du riz. »", choix: ["leur", "leurs", "les"], r: "leur", expl: "Maman donne du riz à qui ? aux enfants → leur, sans s." },
      { t: "qcm", q: "« J'ai vu Fatou et je … ai parlé. »", choix: ["lui", "la", "leur"], r: "lui", expl: "J'ai parlé à qui ? à Fatou → lui (COI)." },
      { t: "qcm", q: "« J'ai vu Fatou et je … ai saluée. »", choix: ["l'", "lui", "leur"], r: "l'", expl: "J'ai salué qui ? Fatou → la, qui devient l' devant une voyelle (COD)." },
      { t: "saisie", q: "Quelle est la fonction de « lui » dans « Il lui demande comment il fait » ?", r: "COI", expl: "Il demande à qui ? à lui : COI." },
      { t: "saisie", q: "Quelle est la fonction de « les » dans « Maman les reçoit » ?", r: "COD", expl: "Maman reçoit qui ? les (invités) : COD." },
      { t: "relier", q: "Relie chaque pronom à sa fonction.", paires: [["le", "COD"], ["la", "COD"], ["lui", "COI"], ["leur", "COI"]], expl: "le, la, les, l' : COD ; lui, leur : COI." },
      { t: "vf", q: "« Je leurs écris une lettre. » est bien écrit.", r: false, expl: "Devant le verbe, « leur » est un pronom : pas de s. Je leur écris." }
    ],
    [
      { t: "classer", q: "Dans chaque phrase, « leur » est-il devant un verbe ou devant un nom ?", cases: ["pronom devant un verbe", "devant un nom"], items: [["Je leur parle.", "pronom devant un verbe"], ["C'est leur maison.", "devant un nom"], ["Il leur donne du pain.", "pronom devant un verbe"], ["Leur chien aboie.", "devant un nom"], ["Nous leur écrivons.", "pronom devant un verbe"], ["J'aime leur jardin.", "devant un nom"]], expl: "Le pronom « leur » est devant un verbe et ne prend jamais de s." },
      { t: "saisie", q: "Récris la phrase en remplaçant « à ses cousins » par un pronom : « Khady envoie une lettre à ses cousins. »", r: "Khady leur envoie une lettre.", large: true, expl: "à ses cousins → leur (COI), placé devant le verbe, sans s." },
      { t: "saisie", q: "Récris la phrase en remplaçant « la radio » par un pronom : « Grand-père écoute la radio. »", r: "Grand-père l'écoute.", large: true, expl: "la radio → la, qui devient l' devant une voyelle." },
      { t: "qcm", q: "Dans « Le maître les félicite », « les » est…", choix: ["pronom personnel, COD de féliciter", "article défini", "pronom personnel, COI de féliciter"], r: "pronom personnel, COD de féliciter", expl: "Devant le verbe ; le maître félicite qui ? les (élèves) : COD." },
      { t: "trous", q: "Complète avec le, la, les, lui ou leur.", texte: "Moussa a un vélo neuf ; il [le] nettoie chaque jour. Ses amis [l']admirent et il [leur] prête parfois son vélo.", expl: "le vélo → le (COD) ; Moussa → l' (COD, devant une voyelle) ; à ses amis → leur (COI)." },
      { t: "vf", q: "Dans « Elle leur offre des bonbons », « leur » est COI.", r: true, expl: "Elle offre des bonbons à qui ? à eux → leur (COI)." }
    ],
    [
      { t: "dictee", texte: "Les invités sont arrivés ; maman les accueille et leur offre du jus de bissap.", expl: "« les » : COD ; « leur » : COI, sans s devant le verbe." },
      { t: "dictee", texte: "Mon petit frère a perdu son ballon ; je le cherche partout et je lui promets de le retrouver.", expl: "« le » (COD) ; « lui » (COI)." },
      { t: "trous", q: "Complète ce texte.", texte: "Les élèves attendent le maître. Quand il arrive, ils [le] saluent. Le maître [leur] distribue les cahiers et [leur] demande de travailler en silence.", expl: "saluer qui ? le maître → le (COD) ; distribuer à qui ? aux élèves → leur (COI, sans s)." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Je leur prête mes livres.", "Je leurs prête mes livres.", "Je leur prête mes livre.", "Je leurs prêtent mes livres."], r: "Je leur prête mes livres.", expl: "Le pronom leur ne prend pas de s ; « mes livres » est au pluriel." },
      { t: "relier", q: "Relie chaque phrase au pronom qui convient.", paires: [["Tu vois la mer ? Je … vois.", "la"], ["Tu vois tes amis ? Je … vois.", "les"], ["Tu parles à tes amis ? Je … parle.", "leur"], ["Tu parles à Awa ? Je … parle.", "lui"]], expl: "COD : la, les ; COI : lui, leur." }
    ]
  ]
});


/* ---- fr-orth-noms-feminins-ee-te-tie.js ---- */
// À VÉRIFIER : après « sauf la clé ou clef », le cahier ajoute un mot peu lisible (probablement « l'acné ») : non repris dans le module.
// À VÉRIFIER : pour les noms qui expriment le contenu (une assiettée, une brouettée), le cahier ne dit pas explicitement qu'ils s'écrivent -ée ; c'est le sens de l'« Attention » et c'est la règle habituelle. Le module l'écrit.
// Corrections : « une brouette » → « une brouettée » (nom de contenu) ; « la jette » → « la jetée » ; « Tous les noms femins par le son [é] » → « Tous les noms féminins terminés par le son [é] ».
LECONS.push({
  id: "fr-orth-noms-feminins-ee-te-tie",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les noms féminins en -ée, -té, -tié",
  date: "2026-09-29",
  photos: ["DJI_20261118220345_0028_D.jpg", "DJI_20261118220350_0029_D.jpg"],
  retiens:
    "<p>→ Les noms féminins terminés par le son [é] s'écrivent avec <b>-ée</b>.<br>Ex : la vallée, la soirée, la gorgée, la cheminée…<br>Sauf : la clé (ou la clef).</p>" +
    "<p>→ Les noms terminés en <b>-té</b> ou en <b>-tié</b> se terminent généralement par <b>-é</b>.<br>Ex : la santé, la fidélité, la pitié, la moitié.</p>" +
    "<p><b>Attention :</b></p><ul>" +
    "<li>Les noms qui expriment un <b>contenu</b> s'écrivent <b>-ée</b> : une assiettée (le contenu d'une assiette), une brouettée (le contenu d'une brouette).</li>" +
    "<li><b>6 noms</b> ne suivent pas la règle et s'écrivent <b>-tée</b> : la dictée, la jetée, la montée, la pâtée, la portée, la butée.</li></ul>",
  astuce: "Pour les noms en <b>-té</b> : pense à la <b>santé</b>, à la <b>liberté</b> : un seul é. Les 6 rebelles en <b>-tée</b> : « Après la <b>dictée</b>, on monte la <b>montée</b> vers la <b>jetée</b> ; le chien mange sa <b>pâtée</b> avec la <b>portée</b> de chiots, jusqu'à la <b>butée</b>. »",
  regle: "Nom féminin en [é] → -ée (la vallée), sauf la clé. Nom en -té ou -tié → -é (la santé, la moitié), sauf les noms de contenu (une assiettée) et dictée, jetée, montée, pâtée, portée, butée.",
  niveaux: [
    [
      { t: "qcm", q: "Les noms féminins terminés par le son [é] s'écrivent en général…", choix: ["-ée", "-é", "-er"], r: "-ée", expl: "la vallée, la soirée, la gorgée : -ée." },
      { t: "qcm", q: "Les noms terminés en -té ou -tié se terminent généralement par…", choix: ["-é", "-ée", "-er"], r: "-é", expl: "la santé, la fidélité, la pitié, la moitié : -é." },
      { t: "vf", q: "« la clé » est une exception : elle s'écrit sans e final.", r: true, expl: "On écrit la clé (ou la clef)." },
      { t: "vf", q: "On écrit « la santée ».", r: false, expl: "Nom en -té → -é : la santé." },
      { t: "classer", q: "Range ces noms selon leur terminaison.", cases: ["-ée", "-é"], items: [["la vallée", "-ée"], ["la santé", "-é"], ["la soirée", "-ée"], ["la pitié", "-é"], ["la cheminée", "-ée"], ["la moitié", "-é"]], expl: "Son [é] en général → -ée ; noms en -té ou -tié → -é." },
      { t: "qcm", q: "Combien de noms en -tée font exception à la règle des noms en -té ?", choix: ["2", "6", "10"], r: "6", expl: "la dictée, la jetée, la montée, la pâtée, la portée, la butée." }
    ],
    [
      { t: "trous", q: "Complète avec -ée ou -é.", texte: "la soir[ée] — la libert[é] — la gorg[ée] — la beaut[é] — la journ[ée] — l'amiti[é]", expl: "journée, soirée, gorgée : -ée ; liberté, beauté, amitié : -é." },
      { t: "saisie", q: "Écris le nom : ce qu'on boit d'un seul coup, c'est une gorg…", r: "gorgée", expl: "Nom féminin en [é] → -ée." },
      { t: "saisie", q: "Écris le nom : la fin de la journée, avant la nuit, c'est la soir…", r: "soirée", expl: "Nom féminin en [é] → -ée." },
      { t: "saisie", q: "Écris le nom : le fait d'être en bonne forme, c'est la san…", r: "santé", expl: "Nom en -té → -é." },
      { t: "saisie", q: "Écris le nom : une des deux parties égales d'un tout, c'est la moi…", r: "moitié", expl: "Nom en -tié → -é." },
      { t: "qcm", q: "Quel nom est bien écrit ?", choix: ["la fidélité", "la fidélitée", "la fidéliter"], r: "la fidélité", expl: "Nom en -té → -é." },
      { t: "qcm", q: "Quel nom est bien écrit ?", choix: ["la vallée", "la vallé", "la valée"], r: "la vallée", expl: "Nom féminin en [é] → -ée." },
      { t: "relier", q: "Relie chaque début de mot à sa fin.", paires: [["la pit", "ié"], ["la chemin", "ée"], ["la clé", "(exception, sans e)"], ["la propret", "é"]], expl: "pitié, cheminée, clé, propreté." },
      { t: "vf", q: "« la pitié » et « l'amitié » se terminent par -é.", r: true, expl: "Noms en -tié → -é." }
    ],
    [
      { t: "qcm", q: "Quel nom en -té fait exception et s'écrit -tée ?", choix: ["la dictée", "la santé", "la beauté", "la bonté"], r: "la dictée", expl: "La dictée fait partie des 6 exceptions." },
      { t: "classer", q: "Noms en [té] : règle (-té) ou exception (-tée) ?", cases: ["-té (règle)", "-tée (exception)"], items: [["la santé", "-té (règle)"], ["la jetée", "-tée (exception)"], ["la bonté", "-té (règle)"], ["la montée", "-tée (exception)"], ["la fierté", "-té (règle)"], ["la pâtée", "-tée (exception)"], ["la portée", "-tée (exception)"], ["la fidélité", "-té (règle)"]], expl: "Les 6 exceptions : dictée, jetée, montée, pâtée, portée, butée." },
      { t: "saisie", q: "Écris le nom de contenu : le contenu d'une assiette, c'est une assiet…", r: "assiettée", expl: "Les noms qui expriment un contenu s'écrivent -ée : une assiettée." },
      { t: "saisie", q: "Écris le nom de contenu : le contenu d'une brouette, c'est une brouet…", r: "brouettée", expl: "Nom de contenu → -ée : une brouettée." },
      { t: "saisie", q: "Écris le nom (exception) : la nourriture qu'on donne au chien, c'est la pât…", r: "pâtée", expl: "« la pâtée » est une des 6 exceptions." },
      { t: "vf", q: "« la montée » suit la règle des noms en -té.", r: false, expl: "C'est une exception : la montée." },
      { t: "trous", q: "Complète ce texte.", texte: "Après la dict[ée], Awa a mangé une assiett[ée] de riz. Elle souhaite une bonne san[té] à sa grand-mère.", expl: "dictée (exception), assiettée (nom de contenu), santé (-té)." }
    ],
    [
      { t: "dictee", texte: "Pendant la soirée, les pêcheurs se promènent sur la jetée de Saint-Louis.", expl: "soirée (-ée) ; jetée (une des 6 exceptions)." },
      { t: "dictee", texte: "Grâce à sa bonté et à sa fidélité, Moussa a gardé la moitié de son goûter pour Ibrahima.", expl: "bonté, fidélité, moitié : -é." },
      { t: "trous", q: "Complète ce texte.", texte: "Pendant la journ[ée], le maçon transporte une brouett[ée] de sable. En haut de la mont[ée], il boit une gorg[ée] d'eau et retrouve sa bonne humeur et sa san[té].", expl: "journée, gorgée (-ée) ; brouettée (nom de contenu) ; montée (exception) ; santé (-té)." },
      { t: "qcm", q: "Quelle phrase ne contient aucune faute ?", choix: ["La beauté de la vallée nous émerveille.", "La beautée de la vallée nous émerveille.", "La beauté de la vallé nous émerveille.", "La beautée de la vallé nous émerveille."], r: "La beauté de la vallée nous émerveille.", expl: "beauté (-té → -é) ; vallée (-ée)." },
      { t: "relier", q: "Relie chaque nom à la règle qu'il suit.", paires: [["la cheminée", "féminin en [é] → -ée"], ["la liberté", "nom en -té → -é"], ["une assiettée", "nom de contenu → -ée"], ["la portée", "une des 6 exceptions"], ["la clé", "exception sans e"]], expl: "Règles et exceptions de la leçon." }
    ]
  ]
});


/* ---- fr-orth-noms-feminins-u-i.js ---- */
// À VÉRIFIER : parmi les noms masculins, le cahier écrit « le bout » ou « le but » (lecture incertaine) : mot non repris dans le module.
// Précision : le son noté [u] au cahier est celui de « rue » (en alphabet phonétique [y]) ; le module l'écrit [u] comme au tableau et le précise.
// Corrections : « la bienvenvenue » → « la bienvenue » ; « la brebis la perdrix » → virgule ajoutée.
LECONS.push({
  id: "fr-orth-noms-feminins-u-i",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les noms féminins terminés par le son [u] ou [i]",
  date: "2026-09-24",
  photos: ["DJI_20261118220310_0024_D.jpg", "DJI_20261118220316_0025_D.jpg"],
  retiens:
    "<p>(Le son [u] est celui qu'on entend à la fin de « la r<b>ue</b> ».)</p>" +
    "<p>→ Les <b>noms féminins</b> terminés par le son [u] s'écrivent <b>-ue</b> : la rue, la charrue, la tortue, la bienvenue.<br>Exceptions : la vertu, la tribu, la bru, la glu.</p>" +
    "<p>→ Les <b>noms féminins</b> terminés par le son [i] s'écrivent <b>-ie</b> : la vie, la sortie, la poésie, l'écurie.<br>Exceptions : la nuit, la fourmi, la souris, la brebis, la perdrix.</p>" +
    "<p><b>Attention !</b> Pour les <b>noms masculins</b> terminés par le son [u] ou [i], les terminaisons sont très nombreuses. Il est prudent de consulter un dictionnaire en cas de doute.<br>Ex : le tissu, le fût, le dessus, un ennemi, un parapluie, un fusil, un prix, le riz, le nid, le bruit…</p>",
  astuce: "Une fille porte une <b>e</b> : les noms <b>féminins</b> en [u] et [i] finissent par <b>-ue</b> et <b>-ie</b>. Retiens les exceptions en petite phrase : « La <b>souris</b>, la <b>fourmi</b> et la <b>brebis</b> dorment la <b>nuit</b> près de la <b>perdrix</b>. »",
  regle: "Nom féminin en [u] → -ue (la rue), sauf vertu, tribu, bru, glu. Nom féminin en [i] → -ie (la vie), sauf nuit, fourmi, souris, brebis, perdrix.",
  niveaux: [
    [
      { t: "qcm", q: "Les noms féminins terminés par le son [u] (comme « rue ») s'écrivent…", choix: ["-ue", "-u", "-ut"], r: "-ue", expl: "la rue, la tortue, la charrue : -ue." },
      { t: "qcm", q: "Les noms féminins terminés par le son [i] s'écrivent…", choix: ["-ie", "-i", "-is"], r: "-ie", expl: "la vie, la sortie, la poésie : -ie." },
      { t: "vf", q: "« la tortue » s'écrit avec un e à la fin.", r: true, expl: "Nom féminin en [u] → -ue." },
      { t: "vf", q: "« la souris » suit la règle des noms féminins en -ie.", r: false, expl: "C'est une exception : la souris." },
      { t: "classer", q: "Range ces noms féminins.", cases: ["-ue", "-ie"], items: [["la rue", "-ue"], ["la vie", "-ie"], ["la charrue", "-ue"], ["la sortie", "-ie"], ["la tortue", "-ue"], ["la poésie", "-ie"]], expl: "Son [u] → -ue ; son [i] → -ie." },
      { t: "qcm", q: "Pour les noms <b>masculins</b> en [u] ou [i], que conseille la leçon ?", choix: ["consulter un dictionnaire en cas de doute", "toujours écrire -ue ou -ie", "toujours écrire -u ou -i"], r: "consulter un dictionnaire en cas de doute", expl: "Les terminaisons des noms masculins sont très nombreuses." }
    ],
    [
      { t: "trous", q: "Complète avec -ue ou -ie.", texte: "la r[ue] — la plu[ie] — la tort[ue] — la mair[ie] — une aven[ue] — la sort[ie]", expl: "Noms féminins : [u] → -ue ; [i] → -ie." },
      { t: "saisie", q: "Écris le nom féminin : l'instrument qui sert à labourer, c'est la charr…", r: "charrue", expl: "Nom féminin en [u] → -ue." },
      { t: "saisie", q: "Écris le nom féminin : l'eau qui tombe du ciel, c'est la plu…", r: "pluie", expl: "Nom féminin en [i] → -ie." },
      { t: "saisie", q: "Écris le nom féminin : le lieu où dorment les chevaux, c'est l'écur…", r: "écurie", expl: "Nom féminin en [i] → -ie." },
      { t: "saisie", q: "Écris le nom féminin : on la souhaite à un invité qui arrive, c'est la bienven…", r: "bienvenue", expl: "Nom féminin en [u] → -ue." },
      { t: "qcm", q: "Quel nom est bien écrit ?", choix: ["la poésie", "la poési", "la poésis"], r: "la poésie", expl: "Nom féminin en [i] → -ie." },
      { t: "qcm", q: "Quel nom est bien écrit ?", choix: ["la nuit", "la nuie", "la nui"], r: "la nuit", expl: "« la nuit » est une exception." },
      { t: "relier", q: "Relie chaque exception à sa fin de mot.", paires: [["la vert", "u"], ["la fourm", "i"], ["la sour", "is"], ["la perdr", "ix"], ["la n", "uit"]], expl: "Ce sont des exceptions : elles ne finissent pas par -ue ou -ie." },
      { t: "vf", q: "« la tribu » est une exception : elle ne prend pas de e.", r: true, expl: "Exceptions en [u] : la vertu, la tribu, la bru, la glu." }
    ],
    [
      { t: "classer", q: "Règle ou exception ?", cases: ["suit la règle", "exception"], items: [["la tortue", "suit la règle"], ["la vertu", "exception"], ["la sortie", "suit la règle"], ["la brebis", "exception"], ["la rue", "suit la règle"], ["la glu", "exception"], ["la vie", "suit la règle"], ["la fourmi", "exception"]], expl: "Exceptions : vertu, tribu, bru, glu ; nuit, fourmi, souris, brebis, perdrix." },
      { t: "saisie", q: "Écris ce nom féminin (exception) : le petit animal gris que le chat chasse, c'est la sour…", r: "souris", expl: "« la souris » est une exception : -is." },
      { t: "saisie", q: "Écris ce nom féminin (exception) : la femelle du mouton, c'est la breb…", r: "brebis", expl: "« la brebis » est une exception : -is." },
      { t: "saisie", q: "Écris ce nom féminin (exception) : le petit insecte qui vit en colonie, c'est la fourm…", r: "fourmi", expl: "« la fourmi » est une exception : -i sans e." },
      { t: "vf", q: "« un parapluie » est un nom masculin terminé par -ie.", r: true, expl: "Pour les noms masculins, les terminaisons varient : un parapluie, un fusil, un prix, le riz…" },
      { t: "classer", q: "Range ces noms masculins selon leur dernière lettre écrite.", cases: ["-i ou -ie", "-is, -ix ou -iz", "-il, -id ou -it"], items: [["un ennemi", "-i ou -ie"], ["un parapluie", "-i ou -ie"], ["un prix", "-is, -ix ou -iz"], ["le riz", "-is, -ix ou -iz"], ["un fusil", "-il, -id ou -it"], ["le nid", "-il, -id ou -it"], ["le bruit", "-il, -id ou -it"]], expl: "Pour les noms masculins, il n'y a pas de règle unique : il faut les apprendre ou vérifier au dictionnaire." },
      { t: "trous", q: "Complète ces noms masculins de la leçon.", texte: "le tiss[u] — le dess[us] — le n[id] — le fus[il]", expl: "Ce sont les exemples du cahier : le tissu, le dessus, le nid, le fusil." }
    ],
    [
      { t: "dictee", texte: "La nuit, une souris et une tortue traversent la rue près de la mairie.", expl: "nuit, souris (exceptions) ; tortue, rue (-ue) ; mairie (-ie)." },
      { t: "dictee", texte: "Sous la pluie, la brebis cherche la sortie de l'écurie.", expl: "pluie, sortie, écurie (-ie) ; brebis (exception)." },
      { t: "trous", q: "Complète ce texte.", texte: "Dans la cour de la mair[ie], une fourm[i] porte un grain de r[iz]. Elle évite la pl[uie] et rentre avant la n[uit].", expl: "mairie, pluie (-ie) ; fourmi, nuit (exceptions) ; riz (nom masculin)." },
      { t: "qcm", q: "Quelle phrase ne contient aucune faute ?", choix: ["La perdrix se cache dans la prairie.", "La perdrie se cache dans la prairi.", "La perdrix se cache dans la prairi.", "La perdri se cache dans la prairie."], r: "La perdrix se cache dans la prairie.", expl: "perdrix est une exception ; prairie suit la règle (-ie)." },
      { t: "relier", q: "Relie chaque nom à ce qu'il illustre.", paires: [["la charrue", "féminin en -ue"], ["la poésie", "féminin en -ie"], ["la bru", "exception en [u]"], ["la perdrix", "exception en [i]"]], expl: "Règles et exceptions de la leçon." }
    ]
  ]
});


/* ---- fr-orth-noms-oir-oire-eur.js ---- */
// À VÉRIFIER : le cahier écrit « Les noms féminins terminés par le son [oir] s'écrivent tous oir ». C'est faux : ils s'écrivent « oire » (les exemples du cahier le montrent : l'armoire, la foire, une nageoire). Corrigé dans le module. Aucune exception n'est notée au cahier pour les noms féminins.
// Corrections : titre « terminés par le oir/oire » → « par le son » ; « femins » → « féminins ».
LECONS.push({
  id: "fr-orth-noms-oir-oire-eur",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les noms terminés par le son [oir] ou [eur]",
  date: "2026-09-22",
  photos: ["DJI_20261118220225_0020_D.jpg", "DJI_20261118220234_0021_D.jpg"],
  retiens:
    "<p>→ Les <b>noms féminins</b> terminés par le son [oir] s'écrivent tous <b>-oire</b>.<br>Ex : l'armoire, la foire, une nageoire.</p>" +
    "<p>→ Les <b>noms masculins</b> terminés par le son [oir] s'écrivent généralement <b>-oir</b>.<br>Ex : le rasoir, le mouchoir.<br>Exceptions : le laboratoire, l'interrogatoire, le territoire, l'observatoire.</p>" +
    "<p>→ Les <b>noms masculins et féminins</b> terminés par le son [eur] s'écrivent <b>-eur</b>.<br>Ex : un lecteur, la pâleur, l'humeur.<br>Exceptions : le beurre, l'heure, un heurt (de heurter), le cœur, la sœur, la demeure.</p>",
  astuce: "Mets <b>un</b> ou <b>une</b> devant le nom. <b>Une</b> → -oire (une armoire). <b>Un</b> → -oir (un mouchoir), sauf les 4 exceptions en -oire : laboratoire, interrogatoire, territoire, observatoire.",
  regle: "Son [oir] : nom féminin → -oire ; nom masculin → -oir (sauf laboratoire, interrogatoire, territoire, observatoire). Son [eur] : -eur, sauf beurre, heure, heurt, cœur, sœur, demeure.",
  niveaux: [
    [
      { t: "qcm", q: "Les noms <b>féminins</b> terminés par le son [oir] s'écrivent…", choix: ["-oire", "-oir", "-oirs"], r: "-oire", expl: "Féminin → -oire : l'armoire, la foire, une nageoire." },
      { t: "qcm", q: "Les noms <b>masculins</b> terminés par le son [oir] s'écrivent généralement…", choix: ["-oir", "-oire"], r: "-oir", expl: "Masculin → -oir : le rasoir, le mouchoir." },
      { t: "qcm", q: "Les noms terminés par le son [eur] s'écrivent en général…", choix: ["-eur", "-eure", "-eurre"], r: "-eur", expl: "Masculins et féminins : -eur. Ex : un lecteur, la pâleur." },
      { t: "vf", q: "« la foire » est un nom féminin en -oire.", r: true, expl: "Féminin → -oire." },
      { t: "vf", q: "« le mouchoir » s'écrit avec un e à la fin.", r: false, expl: "C'est un nom masculin : -oir, sans e." },
      { t: "classer", q: "Range ces noms selon leur terminaison.", cases: ["-oir", "-oire"], items: [["le rasoir", "-oir"], ["l'armoire", "-oire"], ["le mouchoir", "-oir"], ["la foire", "-oire"], ["une nageoire", "-oire"], ["le couloir", "-oir"]], expl: "Masculin → -oir ; féminin → -oire." }
    ],
    [
      { t: "trous", q: "Complète avec -oir ou -oire.", texte: "une baign[oire] — un tir[oir] — la mém[oire] — un arros[oir] — une hist[oire] — le trott[oir]", expl: "une → -oire ; un, le → -oir." },
      { t: "trous", q: "Complète avec -eur.", texte: "un vend[eur] — la chal[eur] — le chant[eur] — la coul[eur]", expl: "Le son [eur] s'écrit -eur, au masculin comme au féminin." },
      { t: "saisie", q: "Écris le nom : le meuble où l'on range les vêtements, c'est une arm…", r: "armoire", expl: "« une armoire » : nom féminin → -oire." },
      { t: "saisie", q: "Écris le nom : l'objet qui sert à se raser, c'est un ras…", r: "rasoir", expl: "« un rasoir » : nom masculin → -oir." },
      { t: "saisie", q: "Écris le nom : celui qui lit, c'est un lect…", r: "lecteur", expl: "Le son [eur] s'écrit -eur." },
      { t: "qcm", q: "Quel mot est bien écrit ?", choix: ["la victoire", "la victoir", "la victoirre"], r: "la victoire", expl: "Nom féminin → -oire." },
      { t: "qcm", q: "Quel mot est bien écrit ?", choix: ["un miroir", "un miroire", "un miroirs"], r: "un miroir", expl: "Nom masculin → -oir." },
      { t: "relier", q: "Relie chaque début de mot à sa fin.", paires: [["la pâl", "eur"], ["une nage", "oire"], ["le mouch", "oir"], ["la f", "oire"]], expl: "pâleur, nageoire, mouchoir, foire." },
      { t: "vf", q: "« la pâleur » et « l'humeur » sont des noms féminins en -eur.", r: true, expl: "Le son [eur] s'écrit -eur même au féminin." }
    ],
    [
      { t: "qcm", q: "Quel nom masculin s'écrit en -oire ?", choix: ["le laboratoire", "le rasoir", "le mouchoir", "le couloir"], r: "le laboratoire", expl: "Laboratoire est une exception : masculin, mais en -oire." },
      { t: "classer", q: "Range ces noms masculins : règle (-oir) ou exception (-oire) ?", cases: ["-oir (règle)", "-oire (exception)"], items: [["le rasoir", "-oir (règle)"], ["le territoire", "-oire (exception)"], ["le mouchoir", "-oir (règle)"], ["l'observatoire", "-oire (exception)"], ["le trottoir", "-oir (règle)"], ["l'interrogatoire", "-oire (exception)"]], expl: "Les 4 exceptions : laboratoire, interrogatoire, territoire, observatoire." },
      { t: "classer", q: "Son [eur] : règle (-eur) ou exception ?", cases: ["-eur (règle)", "exception"], items: [["un lecteur", "-eur (règle)"], ["le beurre", "exception"], ["la chaleur", "-eur (règle)"], ["l'heure", "exception"], ["la peur", "-eur (règle)"], ["la demeure", "exception"]], expl: "Exceptions : le beurre, l'heure, un heurt, le cœur, la sœur, la demeure." },
      { t: "saisie", q: "Écris le nom qui désigne une partie de la journée de 60 minutes : l'…", r: "heure", expl: "« l'heure » est une exception : -eure." },
      { t: "saisie", q: "Écris le nom (exception) : on le tartine sur le pain, c'est le b…", r: "beurre", expl: "« le beurre » est une exception : -eurre." },
      { t: "vf", q: "« le territoire » suit la règle des noms masculins.", r: false, expl: "C'est une exception : nom masculin écrit -oire." },
      { t: "trous", q: "Complète avec -oir, -oire, -eur ou -eure.", texte: "Le ministre visite le laborat[oire]. — Mon frère a p[eur] du n[oir]. — À quelle h[eure] pars-tu ?", aide: "Pense aux exceptions.", expl: "laboratoire et heure sont des exceptions ; peur suit la règle (-eur)  ; le noir est un nom masculin en -oir." }
    ],
    [
      { t: "dictee", texte: "Ma tante range ses mouchoirs dans la vieille armoire du couloir.", expl: "mouchoir et couloir (masculins en -oir), armoire (féminin en -oire)." },
      { t: "dictee", texte: "À la foire de Dakar, un vendeur de beurre parle avec bonne humeur.", expl: "foire (-oire), vendeur et humeur (-eur), beurre (exception)." },
      { t: "trous", q: "Complète ce texte.", texte: "Le soir, grand-père raconte une hist[oire]. Il parle d'un chass[eur] qui cherchait un territ[oire] où vivre. Le cœur battant, les enfants écoutent sur le trott[oir].", expl: "histoire (féminin), chasseur (-eur), territoire (exception), trottoir (masculin)." },
      { t: "qcm", q: "Quelle phrase ne contient aucune faute ?", choix: ["Le docteur travaille dans un laboratoire.", "Le docteur travaille dans un laboratoir.", "Le docteure travaille dans un laboratoire.", "Le docteur travaille dans un labouratoir."], r: "Le docteur travaille dans un laboratoire.", expl: "docteur (-eur) ; laboratoire (exception en -oire)." },
      { t: "relier", q: "Relie chaque nom à la règle qu'il suit.", paires: [["une baignoire", "féminin → -oire"], ["un arrosoir", "masculin → -oir"], ["l'observatoire", "exception masculine en -oire"], ["la demeure", "exception en -eure"]], expl: "Règles et exceptions de la leçon." }
    ]
  ]
});


/* ---- fr-orth-ponctuation.js ---- */
// Corrections : « Elle sépare » → « Il sépare » (le point-virgule est masculin) ; « une explication de rapporter un discours » → « une explication ou de rapporter un discours » ; exemple « lave-toi » → « Lave-toi. »
LECONS.push({
  id: "fr-orth-ponctuation",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les signes de ponctuation",
  date: "2026-09-15",
  photos: ["DJI_20261118220052_0013_D.jpg", "DJI_20261118220108_0014_D.jpg"],
  retiens:
    "<ul>" +
    "<li>Le <b>point (.)</b> se met à la fin d'une phrase qui donne une information. Le <b>point d'interrogation (?)</b> s'utilise quand on pose une question. Le <b>point d'exclamation (!)</b> sert à exprimer une émotion.</li>" +
    "<li>La <b>virgule (,)</b> marque une petite pause.</li>" +
    "<li>Le <b>point-virgule (;)</b> marque une pause plus longue que la virgule. Il sépare deux parties d'une phrase.</li>" +
    "<li>Les <b>deux-points (:)</b> permettent d'introduire une explication ou de rapporter un discours.</li>" +
    "<li>Les <b>guillemets (« »)</b> servent à écrire un dialogue.</li>" +
    "</ul>" +
    "<p><b>NB :</b> quand un verbe comme hurler, crier, dire introduit des paroles, on met deux-points avant les guillemets.<br>Ex : Mon père me dit : « Lave-toi. »</p>",
  astuce: "Pour rapporter des paroles, pense au trio : <b>verbe de parole + deux-points + guillemets</b>. Ex : Awa crie : « Attends-moi ! »",
  regle: "Le point termine une information, ? une question, ! une émotion. La virgule est une petite pause, le point-virgule une pause plus longue. Les deux-points et les guillemets introduisent des paroles.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque signe à son nom.", paires: [[".", "le point"], [",", "la virgule"], [";", "le point-virgule"], [":", "les deux-points"], ["« »", "les guillemets"]], expl: "Ce sont les signes de ponctuation de la leçon." },
      { t: "qcm", q: "Quel signe marque une petite pause ?", choix: ["la virgule", "le point", "le point d'interrogation"], r: "la virgule", expl: "La virgule marque une petite pause." },
      { t: "qcm", q: "Quel signe termine une question ?", choix: ["?", "!", "."], r: "?", expl: "On met un point d'interrogation quand on pose une question." },
      { t: "qcm", q: "À quoi servent les guillemets ?", choix: ["à écrire un dialogue", "à poser une question", "à marquer une petite pause"], r: "à écrire un dialogue", expl: "Les guillemets encadrent les paroles." },
      { t: "vf", q: "Le point-virgule marque une pause plus longue que la virgule.", r: true, expl: "Il sépare deux parties d'une phrase." },
      { t: "vf", q: "Le point d'exclamation sert à exprimer une émotion.", r: true, expl: "Ex : Quelle surprise !" }
    ],
    [
      { t: "classer", q: "Quel signe faut-il à la fin de chaque phrase ?", cases: ["le point", "le point d'interrogation", "le point d'exclamation"], items: [["Le car arrive à midi", "le point"], ["Où as-tu mis mon cahier", "le point d'interrogation"], ["Quelle chaleur aujourd'hui", "le point d'exclamation"], ["Fatou habite à Rufisque", "le point"], ["Qui frappe à la porte", "le point d'interrogation"], ["Bravo, tu as gagné", "le point d'exclamation"]], expl: "Information : point. Question : point d'interrogation. Émotion : point d'exclamation." },
      { t: "qcm", q: "Quelle phrase est bien ponctuée ?", choix: ["Mon père me dit : « Lave-toi. »", "Mon père me dit « Lave-toi. »", "Mon père me dit, Lave-toi."], r: "Mon père me dit : « Lave-toi. »", expl: "Après un verbe de parole : deux-points, puis guillemets." },
      { t: "qcm", q: "Quel signe faut-il avant les guillemets dans « Le maître dit … « Silence ! » » ?", choix: [":", ";", "?"], r: ":", expl: "Le verbe « dire » introduit des paroles : on met deux-points." },
      { t: "trous", q: "Ajoute les virgules qui manquent dans cette liste.", texte: "Au marché, maman achète des oignons[,] des tomates[,] du poisson et du riz.", expl: "Dans une liste, on sépare les mots par des virgules ; le dernier est relié par « et »." },
      { t: "classer", q: "Range chaque signe selon son rôle.", cases: ["termine une phrase", "marque une pause dans la phrase"], items: [[".", "termine une phrase"], ["?", "termine une phrase"], ["!", "termine une phrase"], [",", "marque une pause dans la phrase"], [";", "marque une pause dans la phrase"]], expl: "Le point, ? et ! terminent la phrase ; la virgule et le point-virgule marquent des pauses." },
      { t: "qcm", q: "Les deux-points permettent…", choix: ["d'introduire une explication ou de rapporter un discours", "de terminer une phrase", "de poser une question"], r: "d'introduire une explication ou de rapporter un discours", expl: "C'est ce que dit la règle." },
      { t: "vf", q: "On met des deux-points après « crier » quand il introduit des paroles.", r: true, expl: "Hurler, crier, dire… introduisent des paroles : deux-points puis guillemets." },
      { t: "saisie", q: "Écris le nom du signe qui sépare deux parties d'une phrase avec une pause plus longue que la virgule.", r: "le point-virgule", expl: "Le point-virgule (;)." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Awa demande : « Où est mon sac ? »", expl: "Verbe de parole, deux-points, guillemets, et le point d'interrogation dans les guillemets." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est bien ponctuée ?", choix: ["Il pleut fort ; les enfants restent à la maison.", "Il pleut fort les enfants ; restent à la maison.", "Il pleut ; fort les enfants restent à la maison."], r: "Il pleut fort ; les enfants restent à la maison.", expl: "Le point-virgule sépare les deux parties de la phrase." },
      { t: "qcm", q: "Dans « Moussa est content : il a réussi son examen », les deux-points introduisent…", choix: ["une explication", "un dialogue", "une question"], r: "une explication", expl: "« il a réussi son examen » explique pourquoi il est content." },
      { t: "vf", q: "« Ma mère crie « Viens manger ! » » est bien ponctué.", r: false, expl: "Il manque les deux-points après « crie » : Ma mère crie : « Viens manger ! »" },
      { t: "qcm", q: "Quelle est la bonne ponctuation ?", choix: ["Le maître dit : « Fermez vos cahiers. »", "Le maître dit ; « Fermez vos cahiers. »", "Le maître dit, Fermez vos cahiers.", "Le maître dit : Fermez vos cahiers ?"], r: "Le maître dit : « Fermez vos cahiers. »", expl: "Deux-points après « dit », puis les paroles entre guillemets, avec une majuscule et un point." },
      { t: "relier", q: "Relie chaque phrase au signe qui manque à l'endroit des trois points.", paires: [["Khady a acheté trois choses … du pain, du lait et du sucre.", "les deux-points"], ["Veux-tu venir avec nous …", "le point d'interrogation"], ["Le soleil se couche … les pêcheurs rentrent au port.", "le point-virgule"]], expl: "Deux-points avant une énumération qui explique ; point d'interrogation pour la question ; point-virgule entre deux parties d'une phrase." },
      { t: "relier", q: "Relie chaque phrase au signe qui manque à la fin.", paires: [["Que ce pagne est beau", "!"], ["As-tu soif", "?"], ["Le marché ouvre à huit heures", "."]], expl: "Émotion : ! ; question : ? ; information : point." },
      { t: "qcm", q: "Où faut-il mettre la virgule ? « Le matin … Ibrahima va chercher de l'eau. »", choix: ["après « Le matin »", "après « Ibrahima »", "après « chercher »"], r: "après « Le matin »", expl: "La virgule marque une petite pause après le complément placé en tête." }
    ],
    [
      { t: "dictee", texte: "Au marché, maman achète des oignons, des tomates, du poisson et du riz.", expl: "Une virgule après « Au marché » et entre les éléments de la liste ; un point à la fin." },
      { t: "dictee", texte: "Le soleil se couche sur Dakar ; les pêcheurs rentrent au port.", expl: "Le point-virgule sépare les deux parties de la phrase ; un point à la fin." },
      { t: "qcm", q: "Quel texte est bien ponctué ?", choix: ["Moussa entre dans la classe. Il crie : « Bonjour tout le monde ! »", "Moussa entre dans la classe, il crie « Bonjour tout le monde ? »", "Moussa entre dans la classe ; Il crie. Bonjour tout le monde !", "Moussa entre : dans la classe. Il crie « bonjour tout le monde »"], r: "Moussa entre dans la classe. Il crie : « Bonjour tout le monde ! »", expl: "Point pour l'information, deux-points et guillemets pour les paroles, point d'exclamation pour le cri." },
      { t: "qcm", q: "Fatou appelle à l'aide. Quelle est la bonne ponctuation ?", choix: ["Fatou hurle : « Au secours ! »", "Fatou hurle : « Au secours ? »", "Fatou hurle « Au secours. »", "Fatou hurle, au secours !"], r: "Fatou hurle : « Au secours ! »", expl: "Hurler introduit des paroles : deux-points, guillemets ; c'est un cri, donc un point d'exclamation." },
      { t: "qcm", q: "Combien de signes de ponctuation différents vois-tu dans cette phrase ?<br>Awa dit : « Tu viens ? »", choix: ["deux", "trois", "quatre"], r: "trois", expl: "Les deux-points, les guillemets et le point d'interrogation." }
    ]
  ]
});


/* ---- fr-orth-prepositions.js ---- */
// Corrections : « Les prépositions usuelle » → « usuelles » ; « Lorqu'on » → « Lorsqu'on ».
LECONS.push({
  id: "fr-orth-prepositions",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les prépositions",
  date: "2026-11-12",
  photos: ["DJI_20261118220644_0053_D.jpg", "DJI_20261118220650_0054_D.jpg"],
  retiens:
    "<p>La <b>préposition</b> est un mot <b>invariable</b> qui sert à relier deux noms, ou un verbe à un nom.<br>Ex : Il part <b>en</b> ville. Le vélo <b>de</b> Jean a disparu.</p>" +
    "<p>Les prépositions usuelles sont : <b>à, dans, par, pour, en, vers, avec, de, sans, sous…</b></p>" +
    "<p><b>NB :</b> lorsqu'on a un verbe derrière une préposition, ce verbe se met à l'<b>infinitif</b>.<br>Ex : Il vient <b>de partir</b>. Il vient <b>de rentrer</b>.</p>",
  astuce: "Après une préposition, remplace le verbe par <b>prendre</b> ou <b>vendre</b> : « Il vient de (mang…) » → « Il vient de <b>prendre</b> » : c'est l'infinitif, donc on écrit <b>manger</b>, avec -er.",
  regle: "La préposition est un mot invariable qui relie deux mots (à, dans, par, pour, en, vers, avec, de, sans, sous…). Un verbe placé après une préposition se met à l'infinitif.",
  niveaux: [
    [
      { t: "qcm", q: "Une préposition est un mot…", choix: ["invariable", "qui s'accorde avec le nom", "qui se conjugue"], r: "invariable", expl: "La préposition ne change jamais : ni genre, ni nombre." },
      { t: "qcm", q: "Quel mot est une préposition ?", choix: ["avec", "maison", "chanter", "joli"], r: "avec", expl: "« avec » fait partie des prépositions usuelles." },
      { t: "qcm", q: "« Le vélo de Jean a disparu. » Quelle est la préposition ?", choix: ["de", "vélo", "a"], r: "de", expl: "« de » relie le nom « vélo » au nom « Jean »." },
      { t: "vf", q: "Après une préposition, le verbe se met à l'infinitif.", r: true, expl: "Ex : Il vient de partir." },
      { t: "classer", q: "Préposition ou pas ?", cases: ["préposition", "autre mot"], items: [["dans", "préposition"], ["sous", "préposition"], ["table", "autre mot"], ["pour", "préposition"], ["courir", "autre mot"], ["sans", "préposition"], ["vers", "préposition"], ["rouge", "autre mot"]], expl: "Prépositions usuelles : à, dans, par, pour, en, vers, avec, de, sans, sous…" },
      { t: "qcm", q: "« Il part en ville. » Quelle est la préposition ?", choix: ["en", "part", "ville"], r: "en", expl: "« en » relie le verbe « part » au nom « ville »." }
    ],
    [
      { t: "trous", q: "Complète avec une préposition (aide : dans, sous, avec, pour).", texte: "Le chat dort [sous] la table. — Awa range ses habits [dans] l'armoire. — Je mange [avec] une cuillère. — Ce cadeau est [pour] toi.", expl: "Chaque préposition relie deux mots et donne un sens précis." },
      { t: "saisie", q: "Écris la préposition : « Moussa marche vers la mosquée. »", r: "vers", expl: "« vers » relie le verbe « marche » au nom « mosquée »." },
      { t: "saisie", q: "Écris la préposition : « Khady boit son thé sans sucre. »", r: "sans", expl: "« sans » relie « thé » à « sucre »." },
      { t: "qcm", q: "« Il vient de … »", choix: ["partir", "partit", "parti"], r: "partir", expl: "Après la préposition « de », le verbe est à l'infinitif." },
      { t: "qcm", q: "« Awa sort pour … du pain. »", choix: ["acheter", "acheté", "achète"], r: "acheter", expl: "Après « pour », le verbe se met à l'infinitif : acheter." },
      { t: "qcm", q: "« Il est parti sans … au revoir. »", choix: ["dire", "dit", "dis"], r: "dire", expl: "Après « sans », infinitif : dire." },
      { t: "trous", q: "Écris le verbe à l'infinitif après la préposition.", texte: "Il vient de [rentrer] (rentrer). — Nous allons au marché pour [vendre] (vendre) nos légumes. — Elle commence à [lire] (lire).", expl: "Après une préposition, le verbe reste à l'infinitif." },
      { t: "relier", q: "Relie chaque début de phrase à la bonne préposition.", paires: [["Le livre est posé", "sur la table."], ["Le poisson nage", "dans l'eau."], ["Je vais à l'école", "avec mon frère."], ["Le chien dort", "sous l'arbre."]], expl: "La préposition précise le rapport entre les mots." },
      { t: "vf", q: "La préposition « sous » change de forme selon que le nom est masculin ou féminin.", r: false, expl: "La préposition est invariable : sous le lit, sous la table, sous les arbres." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Il vient de manger.", "Il vient de mangé.", "Il vient de mangez."], r: "Il vient de manger.", aide: "Remplace par « prendre ».", expl: "Après « de », infinitif : manger (« il vient de prendre »)." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Elle travaille pour réussir.", "Elle travaille pour réussit.", "Elle travaille pour réussis."], r: "Elle travaille pour réussir.", expl: "Après « pour », infinitif : réussir." },
      { t: "saisie", q: "Écris le verbe correctement : « Fatou est venue pour (aider) sa mère. »", r: "aider", expl: "Après « pour » : infinitif en -er." },
      { t: "saisie", q: "Écris le verbe correctement : « Les enfants rentrent sans (parler). »", r: "parler", expl: "Après « sans » : infinitif." },
      { t: "trous", q: "Écris -er ou -é.", texte: "Il a fini de mang[er]. — Il a mang[é] tout le riz. — Ils sont partis sans chant[er]. — Elle commence à dans[er].", aide: "Après une préposition : -er.", expl: "Après de, sans, à : infinitif en -er. Après « a » (avoir), c'est le participe passé : mangé." },
      { t: "vf", q: "Dans « Il commence à écrire », « à » est une préposition et « écrire » est à l'infinitif.", r: true, expl: "Après la préposition « à », le verbe reste à l'infinitif." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Mamadou vient de rentrer du champ.", expl: "Après « de », le verbe « rentrer » est à l'infinitif." }
    ],
    [
      { t: "dictee", texte: "Mamadou vient de rentrer du champ avec son père pour se reposer.", expl: "Prépositions : de, avec, pour ; « rentrer » et « se reposer » sont à l'infinitif." },
      { t: "dictee", texte: "Sans attendre, Awa part en ville pour acheter des tissus.", expl: "Après sans et pour, les verbes sont à l'infinitif : attendre, acheter." },
      { t: "trous", q: "Complète ce texte (aide : à, avec).", texte: "Ce matin, Ibrahima est parti [à] l'école [avec] son cartable. Il marche vite pour ne pas arriv[er] en retard. Il vient de travers[er] la route.", expl: "Prépositions : à, avec ; après pour et de, infinitif en -er." },
      { t: "qcm", q: "Combien de prépositions dans « Le chat de Fatou dort sous le lit avec sa balle » ?", choix: ["deux", "trois", "quatre"], r: "trois", expl: "de, sous, avec." },
      { t: "saisie", q: "Corrige le verbe mal écrit : « Il est sorti pour joué au ballon. »", r: "jouer", expl: "Après « pour », le verbe se met à l'infinitif : jouer." }
    ]
  ]
});


/* ---- fr-orth-quand-quant-quen.js ---- */
// Le prénom de l'exemple du cahier (« Aston est studieuse », lecture incertaine) est remplacé par « Awa ».
LECONS.push({
  id: "fr-orth-quand-quant-quen",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les homophones quand, quant, qu'en",
  date: "2026-10-20",
  photos: ["DJI_20261118220552_0045_D.jpg", "DJI_20261118220559_0046_D.jpg"],
  retiens:
    "<p>On écrit :</p><ul>" +
    "<li><b>quand</b> s'il exprime le <b>temps</b>. On peut le remplacer par <b>lorsque</b>.<br>Ex : Je partirai <b>quand</b> il sera là.</li>" +
    "<li><b>quant</b> s'il est suivi de <b>à, au, aux</b>.<br>Ex : Awa est studieuse. <b>Quant à</b> David, il s'amuse toujours.</li>" +
    "<li><b>qu'en</b> si on peut le remplacer par <b>que en</b>.<br>Ex : La mer est agitée. <b>Qu'en</b> penses-tu ? (que penses-tu <b>de cela</b> ?)</li></ul>",
  astuce: "<b>quand</b> → lorsque (le temps). <b>quant</b> → toujours suivi de à, au, aux. <b>qu'en</b> → que + en.",
  regle: "quand = lorsque (temps) ; quant est toujours suivi de à, au, aux ; qu'en = que en.",
  niveaux: [
    [
      { t: "qcm", q: "On écrit « quand » s'il exprime…", choix: ["le temps", "le lieu", "la cause"], r: "le temps", expl: "« quand » exprime le temps ; on peut le remplacer par « lorsque »." },
      { t: "qcm", q: "Par quel mot peut-on remplacer « quand » ?", choix: ["lorsque", "que en", "à propos"], r: "lorsque", expl: "Je partirai quand il sera là = je partirai lorsqu'il sera là." },
      { t: "qcm", q: "« quant » est toujours suivi de…", choix: ["à, au ou aux", "un verbe", "un point"], r: "à, au ou aux", expl: "quant à, quant au, quant aux." },
      { t: "vf", q: "On écrit « qu'en » quand on peut le remplacer par « que en ».", r: true, expl: "Qu'en penses-tu ? = Que penses-tu de cela ?" },
      { t: "relier", q: "Relie chaque homophone à son truc.", paires: [["quand", "lorsque"], ["quant", "suivi de à, au, aux"], ["qu'en", "que en"]], expl: "Ce sont les trois moyens de la leçon." },
      { t: "qcm", q: "« Je partirai … il sera là. »", choix: ["quand", "quant", "qu'en"], r: "quand", expl: "On peut dire « lorsqu'il sera là » : c'est le temps." }
    ],
    [
      { t: "trous", q: "Complète avec quand, quant ou qu'en.", texte: "[Quand] il pleut, je reste à la maison. — Awa aime lire ; [quant] à Moussa, il préfère jouer. — La mer est agitée. [Qu'en] penses-tu ?", expl: "lorsque → quand ; suivi de à → quant ; que en → qu'en." },
      { t: "qcm", q: "« … la cloche sonne, les élèves sortent. »", choix: ["Quand", "Quant", "Qu'en"], r: "Quand", expl: "Lorsque la cloche sonne : c'est le temps." },
      { t: "qcm", q: "« Fatou est arrivée ; … aux autres, ils sont en retard. »", choix: ["quant", "quand", "qu'en"], r: "quant", expl: "Suivi de « aux » : quant." },
      { t: "qcm", q: "« Voici mon dessin. … dis-tu ? »", choix: ["Qu'en", "Quand", "Quant"], r: "Qu'en", expl: "Que dis-tu de cela ? → que en → qu'en." },
      { t: "qcm", q: "« … pars-tu pour Saint-Louis ? »", choix: ["Quand", "Quant", "Qu'en"], r: "Quand", expl: "On demande le moment : quand." },
      { t: "classer", q: "Range ces phrases selon le mot qui manque.", cases: ["quand", "quant", "qu'en"], items: [["… tu auras fini, appelle-moi.", "quand"], ["… au repas, il est prêt.", "quant"], ["… penses-tu ?", "qu'en"], ["… il fait chaud, on boit beaucoup.", "quand"], ["… à moi, je reste ici.", "quant"], ["Ce film ? … dit ton frère ?", "qu'en"]], expl: "lorsque → quand ; à, au, aux → quant ; que en → qu'en." },
      { t: "vf", q: "Dans « Quant à mon frère, il dort », on peut remplacer « quant » par « lorsque ».", r: false, expl: "« Lorsque à mon frère » ne veut rien dire : ici c'est « quant », suivi de « à »." },
      { t: "saisie", q: "Écris le mot qui manque (quand, quant ou qu'en) : « … aux bagages, ils sont dans le car. »", r: "Quant", expl: "Suivi de « aux » : quant." },
      { t: "saisie", q: "Écris le mot qui manque (quand, quant ou qu'en) : « Je serai content … tu viendras. »", r: "quand", expl: "Lorsque tu viendras : c'est le temps." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Quant au marché, il ouvre à huit heures.", "Quand au marché, il ouvre à huit heures.", "Qu'en au marché, il ouvre à huit heures."], r: "Quant au marché, il ouvre à huit heures.", expl: "Suivi de « au » : quant." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Quand le soleil se couche, les pêcheurs rentrent.", "Quant le soleil se couche, les pêcheurs rentrent.", "Qu'en le soleil se couche, les pêcheurs rentrent."], r: "Quand le soleil se couche, les pêcheurs rentrent.", expl: "Lorsque le soleil se couche : quand." },
      { t: "saisie", q: "Écris le mot qui manque : « Tu as lu ce conte ? … retiens-tu ? »", r: "Qu'en", expl: "Que retiens-tu de ce conte ? → que en → qu'en." },
      { t: "trous", q: "Complète avec quand, quant ou qu'en.", texte: "[Quand] l'harmattan souffle, la poussière envahit tout. [Quant] aux enfants, ils se couvrent le visage. Cette saison est difficile ; [qu'en] disent les anciens ?", expl: "lorsque → quand ; aux → quant ; que en → qu'en." },
      { t: "vf", q: "« Quand » peut servir à poser une question sur le moment.", r: true, expl: "Quand arrives-tu ? On demande le moment : c'est le temps." },
      { t: "saisie", q: "Remplace « lorsque » par « quand » : « Lorsque la pluie tombe, les champs verdissent. »", r: "Quand la pluie tombe, les champs verdissent.", large: true, expl: "lorsque = quand : on garde le même sens (le temps)." },
      { t: "relier", q: "Relie chaque début de phrase à sa fin.", paires: [["Quand le car arrive,", "les voyageurs descendent."], ["Quant aux bagages,", "ils restent sur le toit."], ["Le voyage est long ;", "qu'en pense le chauffeur ?"]], expl: "Temps : quand ; suivi de aux : quant ; que en : qu'en." }
    ],
    [
      { t: "dictee", texte: "Quand la pluie tombe sur Ziguinchor, les enfants courent se mettre à l'abri.", expl: "Lorsque la pluie tombe : quand." },
      { t: "dictee", texte: "Ibrahima a fini ses devoirs ; quant à sa cousine, elle joue encore dans la cour.", expl: "Suivi de « à » : quant." },
      { t: "dictee", texte: "Le maître nous montre une carte du Sénégal. Qu'en pensez-vous ?", expl: "Que pensez-vous de cela ? → qu'en." },
      { t: "trous", q: "Complète ce dialogue.", texte: "— [Quand] partons-nous au village ? — Demain matin. [Quant] à ton frère, il nous rejoindra le soir. — Et le cadeau pour grand-mère, [qu'en] fais-tu ?", expl: "quand (le moment) ; quant à ; qu'en (que fais-tu de cela ?)." },
      { t: "qcm", q: "Dans quelle phrase faut-il écrire « quant » ?", choix: ["… aux poules, elles dorment déjà.", "… il fait nuit, les poules dorment.", "Ces poules, … fais-tu ?"], r: "… aux poules, elles dorment déjà.", expl: "Suivi de « aux » : quant." }
    ]
  ]
});


/* ---- fr-voc-contraires.js ---- */
// À VÉRIFIER : le cahier (photo 0020) écrit « certains contraires sont des mots qui appartiennent à la même . » ; le mot manquant est très probablement « famille ».
LECONS.push({
  id: "fr-voc-contraires",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les contraires",
  date: "2026-09-21",
  photos: ["DJI_20261118220216_0019_D.jpg", "DJI_20261118220225_0020_D.jpg"],
  retiens:
    "<p>Deux noms, deux adjectifs ou deux verbes de <b>sens opposé</b> sont des <b>contraires</b>.</p>" +
    "<ul><li>deux noms : La Terre subit des <b>réchauffements</b> ou des <b>refroidissements</b>.</li>" +
    "<li>deux adjectifs : La météo annonce parfois du <b>beau</b> temps, parfois du <b>mauvais</b> temps.</li>" +
    "<li>deux verbes : Les températures risquent de <b>monter</b> ou de <b>descendre</b> selon le vent.</li></ul>" +
    "<p>Certains contraires sont des mots qui appartiennent à la <b>même famille</b> : ils sont construits à partir d'un radical et d'un <b>préfixe</b>.<br>" +
    "Ex : Mon nouvel anorak est très <b>confortable</b>, l'ancien était devenu <b>in</b>confortable.</p>",
  astuce: "Le contraire est toujours de la même nature : un nom ↔ un nom (le jour ↔ la nuit), un adjectif ↔ un adjectif (chaud ↔ froid), un verbe ↔ un verbe (ouvrir ↔ fermer).",
  regle: "Deux contraires ont des sens opposés et sont de la même nature. On peut parfois former un contraire avec un préfixe : confortable → inconfortable.",
  niveaux: [
    [
      { t: "qcm", q: "Que sont des contraires ?", choix: ["des mots de sens opposé", "des mots de sens proche", "des mots qui s'écrivent pareil"], r: "des mots de sens opposé", expl: "Deux contraires ont des sens opposés." },
      { t: "qcm", q: "Quel est le contraire de <b>monter</b> ?", choix: ["descendre", "grimper", "courir"], r: "descendre", expl: "Les températures montent ou descendent." },
      { t: "qcm", q: "Quel est le contraire de <b>beau</b> (temps) ?", choix: ["mauvais", "joli", "chaud"], r: "mauvais", expl: "du beau temps / du mauvais temps." },
      { t: "vf", q: "« réchauffement » et « refroidissement » sont deux noms contraires.", r: true, expl: "Ce sont deux noms de sens opposé." },
      { t: "vf", q: "« confortable » et « inconfortable » sont des contraires de la même famille.", r: true, expl: "inconfortable = préfixe in- + confortable." },
      { t: "relier", q: "Relie chaque mot à son contraire.", paires: [["grand", "petit"], ["ouvrir", "fermer"], ["le jour", "la nuit"], ["rapide", "lent"], ["entrer", "sortir"]], expl: "Chaque paire a des sens opposés." }
    ],
    [
      { t: "saisie", q: "Écris le contraire de <b>chaud</b>.", r: "froid", expl: "chaud ↔ froid" },
      { t: "saisie", q: "Écris le contraire de <b>gagner</b> (un match).", r: "perdre", expl: "gagner ↔ perdre" },
      { t: "saisie", q: "Écris le contraire de <b>possible</b> avec un préfixe.", r: "impossible", expl: "im- + possible : impossible." },
      { t: "saisie", q: "Écris le contraire de <b>connu</b> avec un préfixe.", r: "inconnu", expl: "in- + connu : inconnu." },
      { t: "saisie", q: "Écris le contraire de <b>faire</b> avec un préfixe.", r: "défaire", expl: "dé- + faire : défaire." },
      { t: "classer", q: "Range ces paires de contraires selon leur nature.", cases: ["deux noms", "deux adjectifs", "deux verbes"], items: [["la paix / la guerre", "deux noms"], ["propre / sale", "deux adjectifs"], ["aimer / détester", "deux verbes"], ["le début / la fin", "deux noms"], ["riche / pauvre", "deux adjectifs"], ["allumer / éteindre", "deux verbes"]], expl: "Les deux mots d'une paire de contraires sont toujours de la même nature." },
      { t: "qcm", q: "Quel est le contraire de <b>heureux</b> ?", choix: ["malheureux", "joyeux", "content"], r: "malheureux", expl: "mal- + heureux : malheureux." },
      { t: "qcm", q: "Quel est le contraire de <b>la joie</b> ?", choix: ["la tristesse", "triste", "pleurer"], r: "la tristesse", expl: "joie est un nom : son contraire doit être un nom, la tristesse." }
    ],
    [
      { t: "classer", q: "Comment est formé le contraire ?", cases: ["avec un préfixe", "avec un autre mot"], items: [["poli / impoli", "avec un préfixe"], ["haut / bas", "avec un autre mot"], ["obéir / désobéir", "avec un préfixe"], ["vieux / jeune", "avec un autre mot"], ["lisible / illisible", "avec un préfixe"], ["acheter / vendre", "avec un autre mot"]], expl: "impoli, désobéir, illisible : préfixe + mot. bas, jeune, vendre : un mot différent." },
      { t: "qcm", q: "Le contraire de <b>patient</b> est…", choix: ["impatient", "inpatient", "dépatient"], r: "impatient", expl: "Devant p, on écrit im- : impatient." },
      { t: "saisie", q: "Écris le contraire de <b>honnête</b> avec un préfixe.", r: "malhonnête", expl: "mal- + honnête : malhonnête." },
      { t: "saisie", q: "Écris le contraire de <b>coller</b> avec un préfixe.", r: "décoller", expl: "dé- + coller : décoller." },
      { t: "qcm", q: "« Le magasin est <b>ouvert</b>. » Quelle phrase dit le contraire ?", choix: ["Le magasin est fermé.", "Le magasin est grand.", "Le magasin est neuf."], r: "Le magasin est fermé.", expl: "ouvert ↔ fermé" },
      { t: "saisie", q: "Écris la phrase contraire en changeant le mot en gras : « L'eau du puits est <b>propre</b>. »", r: "L'eau du puits est sale.", large: true, expl: "propre ↔ sale" },
      { t: "vf", q: "« la joie » et « triste » sont des contraires.", r: false, expl: "la joie est un nom et triste un adjectif : deux contraires sont de la même nature. On dit la joie ↔ la tristesse, ou joyeux ↔ triste." }
    ],
    [
      { t: "trous", q: "Écris le contraire du mot entre parenthèses.", texte: "Hier, il faisait [froid] (chaud). Les enfants sont [sortis] (entrés) de la classe en [riant] (pleurant).", expl: "chaud ↔ froid, entrer ↔ sortir, pleurer ↔ rire." },
      { t: "trous", q: "Forme le contraire avec un préfixe.", texte: "un travail possible → un travail [impossible] ; un élève obéissant → un élève [désobéissant] ; un mot connu → un mot [inconnu]", expl: "im-, dés-, in- servent à former des contraires." },
      { t: "dictee", texte: "La météo annonce parfois du beau temps et parfois du mauvais temps.", expl: "beau / mauvais : deux adjectifs contraires." },
      { t: "qcm", q: "Trouve l'intrus (la paire qui n'est PAS une paire de contraires).", choix: ["joli / beau", "monter / descendre", "jour / nuit", "propre / sale"], r: "joli / beau", expl: "joli et beau ont un sens proche : ce sont des synonymes." },
      { t: "saisie", q: "Écris la phrase contraire en changeant les deux mots en gras : « Le petit garçon <b>monte</b> vers le <b>haut</b> de la colline. »", r: "Le petit garçon descend vers le bas de la colline.", large: true, expl: "monter ↔ descendre, haut ↔ bas." }
    ]
  ]
});


/* ---- fr-voc-famille-de-mots.js ---- */
LECONS.push({
  id: "fr-voc-famille-de-mots",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les mots de la même famille",
  date: "2026-10-12",
  photos: ["DJI_20261118220502_0037_D.jpg", "DJI_20261118220508_0038_D.jpg"],
  retiens:
    "<p>Une <b>famille de mots</b> rassemble tous les mots construits à partir d'un même mot.<br>" +
    "Ex : Le <b>jardinier jardine</b> dans son <b>jardin</b>. La <b>danseuse</b> et le <b>danseur dansent</b> sur la piste de <b>danse</b>.</p>" +
    "<p>Les mots d'une famille sont formés à partir d'une partie commune appelée le <b>radical</b>. Ils font tous penser à la même chose : ils ont la même idée.<br>" +
    "Ex : <b>mont</b>er, <b>mont</b>agne, <b>mont</b>agneux → radical : <b>mont</b>.</p>" +
    "<p>Une famille de mots peut être constituée de <b>noms</b>, d'<b>adjectifs</b> et de <b>verbes</b>.<br>" +
    "Ex : Le chemin est <b>long</b> (adjectif). Les promeneurs <b>longent</b> (verbe) l'orée du bois. Ce pré a une <b>longueur</b> (nom) de cent mètres.</p>" +
    "<p><b>Attention !</b> Des mots peuvent avoir des lettres communes mais ne pas être de la même famille.<br>Ex : <b>terre</b> et <b>terreur</b> ; <b>couper</b> et <b>couple</b>.</p>",
  astuce: "Pour vérifier, demande-toi : est-ce que les deux mots ont la même idée ? Terre (le sol) et terreur (la grande peur) n'ont pas la même idée : pas la même famille.",
  regle: "Les mots d'une même famille ont le même radical ET la même idée. Avoir des lettres en commun ne suffit pas (terre / terreur).",
  niveaux: [
    [
      { t: "qcm", q: "Quel mot est de la famille de <b>jardin</b> ?", choix: ["jardinier", "jaune", "jarre"], r: "jardinier", expl: "Le jardinier travaille au jardin : même radical, même idée." },
      { t: "qcm", q: "Quel est le radical de <b>montagne</b>, <b>monter</b>, <b>montagneux</b> ?", choix: ["mont", "mon", "agne"], r: "mont", expl: "C'est l'exemple de la leçon : radical mont." },
      { t: "vf", q: "« terre » et « terreur » sont de la même famille.", r: false, expl: "Ils ont des lettres communes, mais pas la même idée." },
      { t: "vf", q: "« danse », « danseur » et « dansent » sont de la même famille.", r: true, expl: "Ils sont construits à partir du même mot et font penser à la même chose." },
      { t: "qcm", q: "Une famille de mots peut contenir…", choix: ["des noms, des adjectifs et des verbes", "seulement des noms", "seulement des verbes"], r: "des noms, des adjectifs et des verbes", expl: "long (adjectif), longer (verbe), longueur (nom)." },
      { t: "classer", q: "Range ces mots dans leur famille.", cases: ["famille de « jardin »", "famille de « danse »"], items: [["jardiner", "famille de « jardin »"], ["danseuse", "famille de « danse »"], ["jardinier", "famille de « jardin »"], ["danser", "famille de « danse »"], ["jardinage", "famille de « jardin »"], ["danseur", "famille de « danse »"]], expl: "Chaque famille a son radical : jardin-, dans-." }
    ],
    [
      { t: "qcm", q: "Quel mot est de la famille de <b>long</b> ?", choix: ["longueur", "loge", "loin"], r: "longueur", expl: "long, longer, longueur : même radical." },
      { t: "qcm", q: "Quel mot est de la famille de <b>pêche</b> ?", choix: ["pêcheur", "pelle", "perle"], r: "pêcheur", expl: "Le pêcheur fait la pêche." },
      { t: "qcm", q: "Quel mot est de la famille de <b>fleur</b> ?", choix: ["fleuriste", "flèche", "fleuve"], r: "fleuriste", expl: "Le fleuriste vend des fleurs ; le fleuve n'a rien à voir." },
      { t: "saisie", q: "Écris le nom de la famille de <b>long</b> qui désigne une mesure (dans la leçon : « une … de cent mètres »).", r: "longueur", expl: "Ce pré a une longueur de cent mètres." },
      { t: "saisie", q: "Écris le verbe de la famille de <b>jardin</b>.", r: "jardiner", expl: "Le jardinier jardine : verbe jardiner." },
      { t: "relier", q: "Relie chaque mot à un mot de sa famille.", paires: [["école", "écolier"], ["chant", "chanteur"], ["lait", "laitier"], ["pêche", "pêcheur"], ["mont", "montagne"]], expl: "Même radical, même idée." },
      { t: "classer", q: "Range ces mots de la famille de « long » selon leur nature.", cases: ["nom", "adjectif", "verbe"], items: [["longueur", "nom"], ["long", "adjectif"], ["longer", "verbe"], ["allonger", "verbe"], ["longue", "adjectif"]], expl: "Une famille peut réunir des noms, des adjectifs et des verbes." },
      { t: "qcm", q: "Quel est le radical commun de <b>chanter</b>, <b>chanteur</b>, <b>chanteuse</b> ?", choix: ["chant", "chan", "eur"], r: "chant", expl: "chant- est la partie commune." }
    ],
    [
      { t: "qcm", q: "Trouve l'intrus dans la famille : terre, terrain, enterrer, terreur.", choix: ["terreur", "terrain", "enterrer", "terre"], r: "terreur", expl: "terreur veut dire grande peur : il n'a pas la même idée que terre." },
      { t: "qcm", q: "Trouve l'intrus dans la famille : couper, coupure, découper, couple.", choix: ["couple", "coupure", "découper", "couper"], r: "couple", expl: "Un couple, ce sont deux personnes : rien à voir avec couper." },
      { t: "qcm", q: "Trouve l'intrus dans la famille : chat, chaton, chatte, château.", choix: ["château", "chaton", "chatte", "chat"], r: "château", expl: "Un château est une grande maison fortifiée : pas la même idée que chat." },
      { t: "qcm", q: "Trouve l'intrus dans la famille : bois, boisé, boiser, boisson.", choix: ["boisson", "boisé", "boiser", "bois"], r: "boisson", expl: "La boisson vient de boire, pas du bois." },
      { t: "vf", q: "Deux mots qui commencent par les mêmes lettres sont toujours de la même famille.", r: false, expl: "Non : terre / terreur, couper / couple. Il faut aussi la même idée." },
      { t: "saisie", q: "Écris l'adjectif de la famille de <b>montagne</b> (dans la leçon).", r: "montagneux", expl: "monter, montagne, montagneux." },
      { t: "trous", q: "Complète avec un mot de la même famille.", texte: "Le [jardinier] jardine dans son jardin. Les promeneurs [longent] le chemin long. La danseuse [danse] sur la piste.", expl: "jardinier, longent, danse." }
    ],
    [
      { t: "dictee", texte: "Le jardinier jardine dans son jardin pendant que la danseuse danse.", expl: "Deux familles : jardin- et dans-." },
      { t: "dictee", texte: "Les promeneurs longent le chemin qui a une longueur de cent mètres.", expl: "longer, longueur : famille de long." },
      { t: "classer", q: "Ces mots sont-ils de la famille de « terre » ?", cases: ["même famille", "pas la même famille"], items: [["terrain", "même famille"], ["terreur", "pas la même famille"], ["enterrer", "même famille"], ["terrible", "pas la même famille"], ["terrasse", "même famille"], ["terminer", "pas la même famille"]], expl: "terrain, enterrer, terrasse ont l'idée du sol ; terreur, terrible, terminer non." },
      { t: "qcm", q: "Quelle phrase contient trois mots de la même famille ?", choix: ["Le pêcheur va pêcher : la pêche est bonne.", "Le pêcheur mange une pêche et une poire.", "Le pêcheur prend sa pirogue et part en mer."], r: "Le pêcheur va pêcher : la pêche est bonne.", expl: "pêcheur, pêcher, pêche (l'activité) : même radical, même idée." },
      { t: "saisie", q: "Trouve le nom de métier de la famille de <b>lait</b>.", r: "laitier", expl: "Le laitier vend du lait." }
    ]
  ]
});


/* ---- fr-voc-formule-politesse.js ---- */
// À VÉRIFIER : formules recopiées avec des fautes dans le cahier (photos 0055-0056) : « En espirant » → « En espérant », « d'greer » → « d'agréer », « nos sentiment distingués » → « nos sentiments distingués », « respectieux » → « respectueux » ; l'abréviation « Mr » (anglaise) est remplacée par « Monsieur » écrit en entier (abréviation française : M.).
LECONS.push({
  id: "fr-voc-formule-politesse",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "La formule de politesse de la lettre officielle",
  date: "2026-11-16",
  photos: ["DJI_20261118220656_0055_D.jpg", "DJI_20261118220703_0056_D.jpg"],
  retiens:
    "<p>On écrit une <b>formule de politesse</b> pour <b>terminer le corps de la lettre</b>. Elle sert à montrer son <b>respect au destinataire</b> et à avoir plus de chances d'obtenir une considération réciproque.</p>" +
    "<p>On peut employer des formules comme :</p><ul>" +
    "<li>En espérant une suite favorable, je vous prie d'agréer, Monsieur (ou Madame), l'expression de ma considération.</li>" +
    "<li>Dans l'attente d'une suite favorable, nous vous prions d'agréer, Monsieur (ou Madame), l'expression de nos sentiments distingués.</li>" +
    "<li>Veuillez recevoir, Monsieur (ou Madame), nos sentiments respectueux.</li></ul>" +
    "<p>Dans la formule, on reprend le titre du destinataire, comme dans la formule d'appel. Ex : « je vous prie d'agréer, <b>Madame la Directrice générale</b>, l'expression de ma considération. »</p>",
  astuce: "Si la lettre dit <b>je</b>, la formule dit <b>je</b> vous prie… <b>ma</b> considération. Si elle dit <b>nous</b> : <b>nous</b> vous prions… <b>nos</b> sentiments. « Agréer » s'écrit avec un accent aigu et deux e : a-gré-er.",
  regle: "La formule de politesse termine le corps de la lettre officielle et montre le respect au destinataire. Elle reprend son titre (Monsieur, Madame…) et s'accorde avec l'expéditeur (je… ma / nous… nos).",
  niveaux: [
    [
      { t: "qcm", q: "Où place-t-on la formule de politesse dans une lettre officielle ?", choix: ["à la fin du corps de la lettre", "tout en haut, avant la date", "juste après l'objet"], r: "à la fin du corps de la lettre", expl: "Elle sert à terminer le corps de la lettre, après le message." },
      { t: "qcm", q: "À quoi sert la formule de politesse ?", choix: ["à montrer son respect au destinataire", "à donner la date", "à dire pourquoi on écrit"], r: "à montrer son respect au destinataire", expl: "C'est la leçon : montrer son respect et obtenir une considération réciproque." },
      { t: "vf", q: "« En espérant une suite favorable, je vous prie d'agréer, Madame, l'expression de ma considération. » est une formule de politesse.", r: true, expl: "C'est la première formule de la leçon." },
      { t: "vf", q: "« Salut, à plus tard ! » convient pour terminer une lettre officielle.", r: false, expl: "Une lettre officielle s'adresse à une autorité : il faut une formule respectueuse." },
      { t: "qcm", q: "Laquelle de ces phrases est une formule de politesse ?", choix: ["Veuillez recevoir, Monsieur, nos sentiments respectueux.", "Objet : demande d'aide.", "Madame la Directrice,"], r: "Veuillez recevoir, Monsieur, nos sentiments respectueux.", expl: "« Objet » annonce le sujet de la lettre ; « Madame la Directrice, » est la formule d'appel." },
      { t: "classer", q: "Range ces phrases.", cases: ["convient à une lettre officielle", "ne convient pas"], items: [["Veuillez recevoir, Madame, nos sentiments respectueux.", "convient à une lettre officielle"], ["Gros bisous !", "ne convient pas"], ["Je vous prie d'agréer, Monsieur, l'expression de ma considération.", "convient à une lettre officielle"], ["À plus, mon pote !", "ne convient pas"]], expl: "Une lettre officielle demande des formules respectueuses." }
    ],
    [
      { t: "trous", q: "Complète la formule.", texte: "En espérant une suite [favorable], je vous prie d'[agréer], Monsieur, l'expression de ma [considération].", expl: "C'est la première formule de la leçon." },
      { t: "trous", q: "Complète la formule.", texte: "Dans l'[attente] d'une suite favorable, nous vous prions d'agréer, Madame, l'expression de nos sentiments [distingués].", expl: "nos sentiments distingués : sentiments au pluriel." },
      { t: "trous", q: "Complète la formule.", texte: "Veuillez [recevoir], Monsieur, nos sentiments [respectueux].", expl: "respectueux : qui montre du respect." },
      { t: "saisie", q: "Écris correctement le verbe : « je vous prie d'… » (accepter, en langage poli)", r: "agréer", expl: "a-gré-er : un accent aigu et deux e." },
      { t: "saisie", q: "Corrige le mot : « En espirant une suite favorable… »", r: "espérant", expl: "espérer → en espérant." },
      { t: "saisie", q: "Corrige le mot : « nos sentiments respectieux »", r: "respectueux", expl: "respect + ueux : respectueux." },
      { t: "qcm", q: "Une lettre est écrite au nom de tous les habitants (« nous »). Quelle formule convient ?", choix: ["Nous vous prions d'agréer, Monsieur, l'expression de nos sentiments distingués.", "Je vous prie d'agréer, Monsieur, l'expression de ma considération.", "Nous vous prions d'agréer, Monsieur, l'expression de ma considération."], r: "Nous vous prions d'agréer, Monsieur, l'expression de nos sentiments distingués.", expl: "nous… nos : la formule s'accorde avec l'expéditeur." },
      { t: "ordre", q: "Remets la formule dans l'ordre.", r: "Veuillez recevoir, Madame, nos sentiments respectueux.", expl: "Veuillez recevoir + titre du destinataire + nos sentiments respectueux." }
    ],
    [
      { t: "qcm", q: "On écrit au maire de Thiès. Quelle formule est la mieux adaptée ?", choix: ["Je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération.", "Je vous prie d'agréer, Madame la Directrice, l'expression de ma considération.", "Je vous prie d'agréer, mon ami, l'expression de ma considération."], r: "Je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération.", expl: "On reprend le titre du destinataire : Monsieur le Maire." },
      { t: "qcm", q: "Quelle formule contient une faute ?", choix: ["nous vous prions d'agréer l'expression de nos sentiment distingués", "je vous prie d'agréer l'expression de ma considération", "veuillez recevoir nos sentiments respectueux"], r: "nous vous prions d'agréer l'expression de nos sentiment distingués", expl: "nos sentiment<b>s</b> : pluriel, avec un s." },
      { t: "vf", q: "En français, l'abréviation de « Monsieur » est « Mr ».", r: false, expl: "« Mr » est l'abréviation anglaise. En français : <b>M.</b> Dans une lettre officielle, on écrit le mot en entier." },
      { t: "saisie", q: "La lettre s'adresse à plusieurs messieurs. Complète : « Veuillez recevoir, …, nos sentiments respectueux. »", r: "Messieurs", expl: "Monsieur → Messieurs au pluriel." },
      { t: "saisie", q: "La lettre s'adresse à plusieurs dames. Complète : « Je vous prie d'agréer, …, l'expression de ma considération. »", r: "Mesdames", expl: "Madame → Mesdames au pluriel." },
      { t: "ordre", q: "Remets la formule dans l'ordre.", r: "En espérant une suite favorable, je vous prie d'agréer, Madame, l'expression de ma considération.", expl: "C'est la première formule de la leçon." }
    ],
    [
      { t: "dictee", texte: "En espérant une suite favorable, je vous prie d'agréer l'expression de ma considération.", expl: "espérant, agréer (accent aigu, deux e), considération." },
      { t: "dictee", texte: "Veuillez recevoir, Madame la Directrice, nos sentiments respectueux.", expl: "sentiments au pluriel, respectueux." },
      { t: "qcm", q: "Bassirou Ndiaye écrit à la Directrice générale de l'ONAS. Quelle fin de lettre est correcte ?", choix: ["En espérant une suite favorable, je vous prie d'agréer, Madame la Directrice générale, l'expression de ma considération.", "Merci et à bientôt, Madame !", "En espérant une suite favorable, je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération."], r: "En espérant une suite favorable, je vous prie d'agréer, Madame la Directrice générale, l'expression de ma considération.", expl: "C'est la formule de la lettre étudiée en lecture : on reprend le titre exact de la destinataire." },
      { t: "saisie", q: "Mets la formule au nom de « nous » : « Je vous prie d'agréer, Monsieur, l'expression de ma considération. »", r: "Nous vous prions d'agréer, Monsieur, l'expression de notre considération.", large: true, expl: "je → nous, prie → prions, ma → notre." },
      { t: "classer", q: "Dans une lettre officielle, range chaque élément.", cases: ["formule d'appel (au début)", "formule de politesse (à la fin)"], items: [["Monsieur le Maire,", "formule d'appel (au début)"], ["Veuillez recevoir, Monsieur le Maire, nos sentiments respectueux.", "formule de politesse (à la fin)"], ["Madame la Directrice,", "formule d'appel (au début)"], ["Je vous prie d'agréer, Madame, l'expression de ma considération.", "formule de politesse (à la fin)"]], expl: "La formule d'appel ouvre la lettre ; la formule de politesse la termine." }
    ]
  ]
});


/* ---- fr-voc-homonymes.js ---- */
LECONS.push({
  id: "fr-voc-homonymes",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les homonymes",
  date: "2026-10-14",
  photos: ["DJI_20261118220520_0040_D.jpg", "DJI_20261118220525_0041_D.jpg"],
  retiens:
    "<p>Certains mots ont la <b>même prononciation</b> mais pas le <b>même sens</b> : ce sont des <b>homonymes</b>.</p>" +
    "<p>Pour trouver leur orthographe exacte, il faut s'aider du <b>contexte</b> (les mots qui les entourent dans la phrase).</p>" +
    "<table><tr><th>phrase</th><th>mot</th><th>sens</th></tr>" +
    "<tr><td>La pelouse est d'un <b>vert</b> magnifique.</td><td>vert</td><td>la couleur</td></tr>" +
    "<tr><td>Le <b>ver</b> de terre est très utile pour aérer le sol.</td><td>ver</td><td>l'animal</td></tr>" +
    "<tr><td>La serre de son jardin est faite de panneaux de <b>verre</b>.</td><td>verre</td><td>la matière</td></tr>" +
    "<tr><td>Les nuages se dirigent <b>vers</b> le nord.</td><td>vers</td><td>la direction</td></tr></table>",
  astuce: "Lis toute la phrase avant d'écrire : c'est le sens qui choisit l'orthographe. Un vert (couleur), un ver (animal), un verre (pour boire ou matière), vers (direction).",
  regle: "Les homonymes se prononcent pareil mais n'ont pas le même sens ni, souvent, la même orthographe. C'est le contexte qui indique comment écrire le mot.",
  niveaux: [
    [
      { t: "qcm", q: "Que sont des homonymes ?", choix: ["des mots qui se prononcent pareil mais n'ont pas le même sens", "des mots de sens proche", "des mots de sens contraire"], r: "des mots qui se prononcent pareil mais n'ont pas le même sens", expl: "C'est la définition de la leçon." },
      { t: "qcm", q: "Comment savoir quel homonyme écrire ?", choix: ["en s'aidant du contexte", "en choisissant le plus court", "en écrivant toujours le même"], r: "en s'aidant du contexte", expl: "Les mots qui entourent l'homonyme dans la phrase indiquent son sens." },
      { t: "relier", q: "Relie chaque mot à son sens.", paires: [["vert", "la couleur"], ["ver", "l'animal"], ["verre", "la matière"], ["vers", "la direction"]], expl: "C'est l'exemple de la leçon." },
      { t: "vf", q: "« ver » et « verre » sont des homonymes.", r: true, expl: "Ils se prononcent de la même façon mais ont des sens différents." },
      { t: "vf", q: "« voiture » et « automobile » sont des homonymes.", r: false, expl: "Ils ont le même sens mais ne se prononcent pas pareil : ce sont des synonymes." },
      { t: "qcm", q: "« Le … de terre aère le sol. »", choix: ["ver", "vert", "verre", "vers"], r: "ver", expl: "Il s'agit de l'animal : le ver." }
    ],
    [
      { t: "qcm", q: "« La pelouse est d'un … magnifique. »", choix: ["vert", "ver", "verre", "vers"], r: "vert", expl: "Il s'agit de la couleur : vert." },
      { t: "qcm", q: "« Les oiseaux volent … le sud. »", choix: ["vers", "vert", "verre", "ver"], r: "vers", expl: "Il s'agit de la direction : vers." },
      { t: "qcm", q: "« Je bois un … d'eau. »", choix: ["verre", "vert", "ver", "vers"], r: "verre", expl: "Un verre pour boire, fait de verre." },
      { t: "qcm", q: "« Ma … prépare le repas. »", choix: ["mère", "mer", "maire"], r: "mère", expl: "La maman : la mère." },
      { t: "qcm", q: "« Les pirogues partent en … . »", choix: ["mer", "mère", "maire"], r: "mer", expl: "L'étendue d'eau salée : la mer." },
      { t: "qcm", q: "« Le … de la commune inaugure l'école. »", choix: ["maire", "mer", "mère"], r: "maire", expl: "Celui qui dirige la commune : le maire." },
      { t: "relier", q: "Relie chaque homonyme à son sens.", paires: [["le sang", "liquide rouge du corps"], ["cent", "le nombre 100"], ["sans", "le contraire de avec"]], expl: "sang, cent, sans se prononcent pareil." },
      { t: "relier", q: "Relie chaque homonyme à son sens.", paires: [["le pain", "aliment du boulanger"], ["le pin", "un arbre"], ["peint", "du verbe peindre"]], expl: "pain, pin, peint se prononcent pareil." }
    ],
    [
      { t: "trous", q: "Écris le bon homonyme : <i>vert, ver, verre, vers</i>.", texte: "Moussa marche [vers] la boutique. Il achète un [verre] et une chemise [verte]. Dans le jardin, il voit un [ver] de terre.", expl: "vers (direction), verre (objet), verte (couleur, accordée avec chemise), ver (animal)." },
      { t: "trous", q: "Écris le bon homonyme : <i>mer, mère, maire</i>.", texte: "La [mère] d'Awa habite près de la [mer]. Le [maire] de Mbour lui a rendu visite.", expl: "mère (maman), mer (eau salée), maire (chef de la commune)." },
      { t: "qcm", q: "« Il a payé … francs. »", choix: ["cent", "sang", "sans"], r: "cent", expl: "Le nombre : cent." },
      { t: "qcm", q: "« Il est parti … son sac. »", choix: ["sans", "cent", "sang"], r: "sans", expl: "Le contraire de avec : sans." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Le boulanger vend du pain.", "Le boulanger vend du pin.", "Le boulanger vend du peint."], r: "Le boulanger vend du pain.", expl: "L'aliment : le pain." },
      { t: "vf", q: "Dans « Il a mal au cou », on pourrait aussi écrire « coup ».", r: false, expl: "Le cou est la partie du corps ; un coup est un choc. Le contexte choisit « cou »." },
      { t: "qcm", q: "« Le joueur a reçu un … de pied. »", choix: ["coup", "cou", "coût"], r: "coup", expl: "Un choc : un coup." }
    ],
    [
      { t: "dictee", texte: "Le ver de terre glisse vers la pelouse verte au bord du jardin.", expl: "ver (animal), vers (direction), verte (couleur)." },
      { t: "dictee", texte: "Ma mère regarde la mer pendant que le maire parle aux pêcheurs.", expl: "mère, mer, maire : trois homonymes." },
      { t: "trous", q: "Complète avec <i>cent, sang, sans</i>.", texte: "L'infirmier fait une prise de [sang]. Il ne prend pas d'argent : c'est [sans] frais. Pourtant, ailleurs, cela coûte [cent] francs.", expl: "sang (liquide), sans (contraire de avec), cent (nombre)." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il une erreur d'homonyme ?", choix: ["Je bois un vert de lait.", "Il marche vers l'école.", "La feuille est verte.", "Le ver aère la terre."], r: "Je bois un vert de lait.", expl: "Pour boire, c'est un <b>verre</b>." },
      { t: "classer", q: "Range chaque mot selon son sens.", cases: ["animal", "couleur", "objet ou matière", "direction"], items: [["un ver de terre", "animal"], ["un pagne vert", "couleur"], ["un verre cassé", "objet ou matière"], ["vers la mer", "direction"], ["une robe verte", "couleur"]], expl: "C'est le contexte qui donne le sens." }
    ]
  ]
});


/* ---- fr-voc-prefixes.js ---- */
LECONS.push({
  id: "fr-voc-prefixes",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les préfixes",
  date: "2026-09-28",
  photos: ["DJI_20261118220316_0025_D.jpg", "DJI_20261118220325_0026_D.jpg"],
  retiens:
    "<p>Les <b>préfixes</b> sont placés <b>devant le radical</b> d'un mot pour former des mots nouveaux.</p>" +
    "<p>Ex : Théo aime <b>re</b>lire (re + lire) les récits <b>in</b>croyables (in + croyables) qui se déroulent au temps de la <b>pré</b>histoire (pré + histoire).</p>" +
    "<p>Certains préfixes sont utilisés pour dire le <b>contraire</b>.<br>Ex : La patience et l'obéissance sont des qualités. L'<b>im</b>patience et la <b>dés</b>obéissance sont des défauts.</p>" +
    "<p>Le préfixe <b>pré-</b> signifie <b>avant</b>. Le préfixe <b>re-</b> signifie <b>à nouveau</b>.</p>" +
    "<p>D'autres indiquent le <b>nombre</b>.<br>Ex : Cette hôtesse de l'air est <b>tri</b>lingue → elle parle <b>trois</b> langues.</p>",
  astuce: "Préfixe = au début du mot (comme « pré », qui veut dire avant). Pour trouver le préfixe, enlève-le : il doit rester un vrai mot (re-lire → lire).",
  regle: "Le préfixe se place devant le radical et change le sens du mot : re- (à nouveau), pré- (avant), in-, im-, dés- (le contraire), tri- (trois).",
  niveaux: [
    [
      { t: "qcm", q: "Où se place un préfixe ?", choix: ["devant le radical", "après le radical", "au milieu du mot"], r: "devant le radical", expl: "Le préfixe est au début du mot." },
      { t: "qcm", q: "Que signifie le préfixe <b>re-</b> dans « relire » ?", choix: ["à nouveau", "avant", "le contraire"], r: "à nouveau", expl: "relire = lire à nouveau." },
      { t: "qcm", q: "Que signifie le préfixe <b>pré-</b> dans « préhistoire » ?", choix: ["avant", "à nouveau", "trois"], r: "avant", expl: "la préhistoire = la période avant l'histoire." },
      { t: "vf", q: "Dans « impatience », le préfixe im- sert à dire le contraire.", r: true, expl: "l'impatience est le contraire de la patience." },
      { t: "vf", q: "« trilingue » veut dire qui parle deux langues.", r: false, expl: "tri- indique trois : trilingue = qui parle trois langues." },
      { t: "relier", q: "Relie chaque préfixe à son sens.", paires: [["re-", "à nouveau"], ["pré-", "avant"], ["tri-", "trois"], ["dés-", "le contraire"]], expl: "Ce sont les préfixes de la leçon." }
    ],
    [
      { t: "saisie", q: "Écris le préfixe de <b>refaire</b>.", r: ["re", "re-"], expl: "re + faire" },
      { t: "saisie", q: "Écris le préfixe de <b>incroyable</b>.", r: ["in", "in-"], expl: "in + croyable" },
      { t: "saisie", q: "Écris le préfixe de <b>désobéir</b>.", r: ["dés", "dés-"], expl: "dés + obéir" },
      { t: "saisie", q: "Ajoute le préfixe <b>re-</b> au verbe <b>venir</b>.", r: "revenir", expl: "re + venir = revenir (venir à nouveau)." },
      { t: "saisie", q: "Ajoute le préfixe <b>pré-</b> au verbe <b>voir</b>.", r: "prévoir", expl: "pré + voir = prévoir (voir avant)." },
      { t: "qcm", q: "Que veut dire <b>repeindre</b> ?", choix: ["peindre à nouveau", "peindre avant", "ne pas peindre"], r: "peindre à nouveau", expl: "re- = à nouveau." },
      { t: "qcm", q: "Un <b>tricycle</b> a…", choix: ["trois roues", "deux roues", "quatre roues"], r: "trois roues", expl: "tri- indique le nombre trois." },
      { t: "classer", q: "Range ces mots selon le sens de leur préfixe.", cases: ["à nouveau", "le contraire"], items: [["relire", "à nouveau"], ["impatient", "le contraire"], ["reprendre", "à nouveau"], ["désobéissant", "le contraire"], ["recommencer", "à nouveau"], ["inconnu", "le contraire"]], expl: "re- = à nouveau ; im-, dés-, in- = le contraire." }
    ],
    [
      { t: "qcm", q: "Dans quel mot « re » est-il un préfixe ?", choix: ["relire", "reine", "renard"], r: "relire", expl: "Si on enlève re-, il reste « lire », un vrai mot. Ce n'est pas le cas pour reine ou renard." },
      { t: "qcm", q: "Dans quel mot « in » est-il un préfixe ?", choix: ["inutile", "insecte", "infirmier"], r: "inutile", expl: "in + utile : inutile veut dire « pas utile »." },
      { t: "saisie", q: "Forme le contraire de <b>patience</b> avec un préfixe.", r: "impatience", expl: "Devant p, in- devient im- : impatience." },
      { t: "saisie", q: "Forme le contraire de <b>obéissance</b> avec un préfixe.", r: "désobéissance", expl: "dés + obéissance" },
      { t: "qcm", q: "La patience est une qualité. L'impatience est…", choix: ["un défaut", "une qualité", "un nombre"], r: "un défaut", expl: "Le préfixe dit le contraire : la qualité devient un défaut." },
      { t: "saisie", q: "Écris la phrase en remplaçant « lire à nouveau » par un seul verbe : « Awa aime lire à nouveau ses contes. »", r: "Awa aime relire ses contes.", large: true, expl: "lire à nouveau = relire." },
      { t: "trous", q: "Complète avec le bon préfixe : <i>re, pré, in, tri</i>.", texte: "Le boulanger [pré]chauffe son four avant de cuire le pain. Mon cousin parle trois langues : il est [tri]lingue. Ce chemin m'est [in]connu. Nous devons [re]copier la leçon.", expl: "préchauffer (avant), trilingue (trois), inconnu (contraire), recopier (à nouveau)." }
    ],
    [
      { t: "dictee", texte: "Théo aime relire les récits incroyables qui se déroulent au temps de la préhistoire.", expl: "re-lire, in-croyables, pré-histoire." },
      { t: "dictee", texte: "La patience est une qualité mais la désobéissance est un défaut.", expl: "dés- + obéissance : le contraire de l'obéissance." },
      { t: "qcm", q: "Une hôtesse de l'air parle wolof, français et anglais. Elle est…", choix: ["trilingue", "bilingue", "monolingue"], r: "trilingue", expl: "Trois langues : tri- + lingue." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["prévenir", "avertir avant"], ["revoir", "voir à nouveau"], ["inutile", "qui ne sert à rien"], ["triangle", "figure à trois angles"]], expl: "Le préfixe aide à deviner le sens du mot." },
      { t: "qcm", q: "Trouve l'intrus (le seul mot qui n'a pas de préfixe).", choix: ["renard", "refaire", "revenir", "repartir"], r: "renard", expl: "Sans « re », il ne reste pas un vrai mot : renard n'a pas de préfixe." }
    ]
  ]
});


/* ---- fr-voc-suffixes.js ---- */
// À VÉRIFIER : dans le tableau du cahier (photo 0031), « un Sinégalais » → « un Sénégalais », « un africain » → « un Africain » (nom d'habitant, majuscule), et la ligne « tion - ition - action » se lit « tion - ition - ation » (l'exemple « continuation » le confirme).
LECONS.push({
  id: "fr-voc-suffixes",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les suffixes",
  date: "2026-10-05",
  photos: ["DJI_20261118220409_0031_D.jpg"],
  retiens:
    "<p>Les <b>suffixes</b> sont placés <b>après le radical</b> d'un mot pour former des mots nouveaux. Ils apportent une indication sur le <b>sens</b> des mots.</p>" +
    "<table><tr><th>suffixes</th><th>sens</th><th>exemples</th></tr>" +
    "<tr><td>-able, -ible</td><td>possibilité</td><td>lav<b>able</b>, lis<b>ible</b></td></tr>" +
    "<tr><td>-ade, -age</td><td>résultat d'une action</td><td>une fusill<b>ade</b>, un atterriss<b>age</b></td></tr>" +
    "<tr><td>-ain, -ais, -ois</td><td>habitant</td><td>un Sénégal<b>ais</b>, un Afric<b>ain</b></td></tr>" +
    "<tr><td>-eux, -euse</td><td>qualité ou défaut</td><td>courag<b>eux</b>, orgueill<b>euse</b></td></tr>" +
    "<tr><td>-tion, -ition, -ation</td><td>action ou son résultat</td><td>fini<b>tion</b>, continu<b>ation</b></td></tr>" +
    "<tr><td>-iste</td><td>profession</td><td>dent<b>iste</b></td></tr></table>",
  astuce: "Le <b>pré</b>fixe est devant (comme « pré » = avant), le <b>suf</b>fixe est à la fin. Le nom d'un habitant prend une majuscule : un Sénégalais, une Dakaroise.",
  regle: "Le suffixe se place après le radical et indique le sens du mot : -able/-ible (possibilité), -ade/-age (résultat d'une action), -ain/-ais/-ois (habitant), -eux/-euse (qualité ou défaut), -tion/-ation (action), -iste (profession).",
  niveaux: [
    [
      { t: "qcm", q: "Où se place un suffixe ?", choix: ["après le radical", "devant le radical", "il remplace le radical"], r: "après le radical", expl: "Le suffixe est à la fin du mot." },
      { t: "qcm", q: "Dans « lavable », quel est le suffixe ?", choix: ["-able", "lav-", "la-"], r: "-able", expl: "lav + able : qu'on peut laver." },
      { t: "qcm", q: "Le suffixe <b>-iste</b> indique…", choix: ["une profession", "un habitant", "une possibilité"], r: "une profession", expl: "dentiste, fleuriste : des métiers." },
      { t: "vf", q: "« Sénégalais » désigne un habitant du Sénégal grâce au suffixe -ais.", r: true, expl: "-ain, -ais, -ois indiquent l'habitant." },
      { t: "vf", q: "« lisible » veut dire « qu'on ne peut pas lire ».", r: false, expl: "-ible indique la possibilité : lisible = qu'on peut lire." },
      { t: "relier", q: "Relie chaque suffixe à son sens.", paires: [["-able", "possibilité"], ["-ais", "habitant"], ["-eux", "qualité ou défaut"], ["-iste", "profession"], ["-age", "résultat d'une action"]], expl: "C'est le tableau de la leçon." }
    ],
    [
      { t: "saisie", q: "Écris le suffixe de <b>courageux</b>.", r: ["eux", "-eux"], expl: "courag + eux" },
      { t: "saisie", q: "Écris le suffixe de <b>dentiste</b>.", r: ["iste", "-iste"], expl: "dent + iste" },
      { t: "saisie", q: "Ajoute le suffixe <b>-able</b> au radical de <b>manger</b> (on garde le e).", r: "mangeable", expl: "mange + able = mangeable : qu'on peut manger." },
      { t: "saisie", q: "Comment appelle-t-on un habitant de l'Afrique ? (avec la majuscule)", r: ["un Africain", "Un Africain", "Africain"], casse: true, expl: "Afric + ain, avec une majuscule : un Africain." },
      { t: "qcm", q: "Une personne qui a peur de tout est…", choix: ["peureuse", "peurable", "peuriste"], r: "peureuse", expl: "-eux / -euse indique une qualité ou un défaut." },
      { t: "qcm", q: "Celui qui joue du piano est un…", choix: ["pianiste", "pianais", "pianage"], r: "pianiste", expl: "-iste indique la profession ou l'activité." },
      { t: "classer", q: "Range ces mots selon le sens de leur suffixe.", cases: ["habitant", "profession", "possibilité"], items: [["Dakarois", "habitant"], ["fleuriste", "profession"], ["buvable", "possibilité"], ["Marocain", "habitant"], ["journaliste", "profession"], ["visible", "possibilité"]], expl: "-ois/-ain : habitant ; -iste : profession ; -able/-ible : possibilité." },
      { t: "relier", q: "Relie chaque verbe au nom formé avec un suffixe.", paires: [["laver", "le lavage"], ["glisser", "la glissade"], ["finir", "la finition"], ["planter", "la plantation"]], expl: "-age, -ade, -tion, -ation : résultat ou action." }
    ],
    [
      { t: "qcm", q: "Dans quel mot « -able » est-il un suffixe ?", choix: ["lavable", "table", "sable"], r: "lavable", expl: "lav- + -able : qu'on peut laver. Table et sable ne contiennent pas de suffixe." },
      { t: "qcm", q: "Quel mot désigne le résultat de l'action d'atterrir ?", choix: ["l'atterrissage", "atterrissable", "l'atterrisseur"], r: "l'atterrissage", expl: "-age indique le résultat d'une action." },
      { t: "saisie", q: "Comment appelle-t-on un habitant de Dakar ? (avec la majuscule)", r: ["un Dakarois", "Un Dakarois", "Dakarois"], casse: true, expl: "Dakar + ois : un Dakarois." },
      { t: "saisie", q: "Forme un adjectif avec <b>orgueil</b> et le suffixe -euse.", r: "orgueilleuse", expl: "orgueil + l + euse : orgueilleuse (avec deux l), comme dans le cahier." },
      { t: "classer", q: "Préfixe ou suffixe ? Range la partie en gras.", cases: ["préfixe", "suffixe"], items: [["<b>re</b>lire", "préfixe"], ["lav<b>able</b>", "suffixe"], ["<b>in</b>connu", "préfixe"], ["dent<b>iste</b>", "suffixe"], ["<b>pré</b>histoire", "préfixe"], ["joy<b>eux</b>", "suffixe"]], expl: "Le préfixe est devant le radical, le suffixe après." },
      { t: "saisie", q: "Écris la phrase avec un seul mot à la place des mots en gras : « Cette robe est une robe <b>qu'on peut laver</b>. » → Cette robe est …", r: "Cette robe est lavable.", large: true, expl: "qu'on peut laver = lavable." },
      { t: "qcm", q: "« Un enfant qui a du courage » est un enfant…", choix: ["courageux", "courageable", "couragiste"], r: "courageux", expl: "-eux indique une qualité." }
    ],
    [
      { t: "dictee", texte: "Le dentiste soigne un Sénégalais courageux qui n'a pas peur.", expl: "dent-iste, Sénégal-ais, courag-eux." },
      { t: "trous", q: "Complète chaque mot avec le bon suffixe : <i>iste, able, ais, eux, age</i>.", texte: "Le fleur[iste] vend des roses. Cette eau est buv[able]. Mon voisin est un Sénégal[ais] très joy[eux]. Le lav[age] du linge se fait le samedi.", expl: "fleuriste (profession), buvable (possibilité), Sénégalais (habitant), joyeux (qualité), lavage (résultat d'une action)." },
      { t: "qcm", q: "Trouve l'intrus (le mot dont le suffixe n'a pas le même sens que les autres).", choix: ["courageux", "dentiste", "fleuriste", "pianiste"], r: "courageux", expl: "-iste indique une profession ; -eux indique une qualité." },
      { t: "relier", q: "Relie chaque définition au mot qui convient.", paires: [["qu'on peut voir", "visible"], ["habitant du Maroc", "Marocain"], ["qui a de la joie", "joyeux"], ["action de continuer", "continuation"]], expl: "Le suffixe donne le sens : -ible, -ain, -eux, -ation." },
      { t: "saisie", q: "Forme un nom de profession avec <b>journal</b> et le suffixe -iste.", r: "journaliste", expl: "journal + iste = journaliste." }
    ]
  ]
});


/* ---- fr-voc-synonymes.js ---- */
LECONS.push({
  id: "fr-voc-synonymes",
  cahier: "francais",
  matiere: "Vocabulaire",
  titre: "Les synonymes",
  date: "2026-09-16",
  photos: ["DJI_20261118220140_0015_D.jpg", "DJI_20261118220154_0016_D.jpg"],
  retiens:
    "<p>Les <b>synonymes</b> sont des mots qui ont un <b>sens proche</b>.</p>" +
    "<p>Ex : Mon père a acheté une <b>belle voiture</b> bleue. Son ancienne <b>automobile</b> n'était plus très <b>jolie</b>.<br>" +
    "Les noms <b>voiture</b> et <b>automobile</b> ont le même sens. Les adjectifs <b>belle</b> et <b>jolie</b> signifient presque la même chose.</p>" +
    "<p>Certains synonymes ont un sens <b>plus ou moins fort</b>.<br>Ex : Je trouve ta voiture <b>superbe</b>, elle est vraiment <b>magnifique</b> !<br>" +
    "<b>Superbe</b> et <b>magnifique</b> ont un sens plus fort que belle et jolie.</p>",
  astuce: "Un synonyme doit pouvoir <b>remplacer</b> le mot dans la phrase sans changer le sens. Il est de la même nature : un nom pour un nom, un adjectif pour un adjectif, un verbe pour un verbe.",
  regle: "Deux synonymes ont un sens proche et peuvent se remplacer dans la phrase. Certains sont plus forts que d'autres (belle < magnifique).",
  niveaux: [
    [
      { t: "qcm", q: "Que sont des synonymes ?", choix: ["des mots qui ont un sens proche", "des mots de sens contraire", "des mots qui se prononcent pareil"], r: "des mots qui ont un sens proche", expl: "C'est la définition de la leçon." },
      { t: "qcm", q: "Quel est le synonyme de <b>voiture</b> ?", choix: ["automobile", "route", "chauffeur"], r: "automobile", expl: "voiture et automobile ont le même sens." },
      { t: "qcm", q: "Quel est le synonyme de <b>jolie</b> ?", choix: ["belle", "laide", "petite"], r: "belle", expl: "belle et jolie signifient presque la même chose." },
      { t: "vf", q: "« Magnifique » a un sens plus fort que « jolie ».", r: true, expl: "Superbe et magnifique sont plus forts que belle et jolie." },
      { t: "vf", q: "« Grand » et « petit » sont des synonymes.", r: false, expl: "Ils ont des sens opposés : ce sont des contraires." },
      { t: "relier", q: "Relie chaque mot à son synonyme.", paires: [["voiture", "automobile"], ["content", "heureux"], ["maison", "habitation"], ["commencer", "débuter"], ["peur", "frayeur"]], expl: "Chaque paire a un sens proche." }
    ],
    [
      { t: "qcm", q: "Remplace le mot en gras par un synonyme : « Awa est <b>rapide</b> à la course. »", choix: ["vive", "lente", "fatiguée"], r: "vive", expl: "rapide et vive ont un sens proche ici." },
      { t: "qcm", q: "Remplace le mot en gras : « Le maître nous <b>donne</b> un exercice. »", choix: ["propose", "prend", "efface"], r: "propose", expl: "donner un exercice = proposer un exercice." },
      { t: "qcm", q: "Remplace le mot en gras : « Moussa a <b>peur</b> du noir. »", choix: ["la frayeur", "la joie", "le courage"], r: "la frayeur", expl: "peur et frayeur sont synonymes." },
      { t: "qcm", q: "Quel mot n'est PAS un synonyme de <b>content</b> ?", choix: ["triste", "heureux", "joyeux", "ravi"], r: "triste", expl: "triste est le contraire de content." },
      { t: "saisie", q: "Écris le synonyme de <b>automobile</b> donné dans la leçon.", r: "voiture", expl: "voiture et automobile ont le même sens." },
      { t: "classer", q: "Range ces mots selon leur sens.", cases: ["proche de « beau »", "proche de « content »"], items: [["joli", "proche de « beau »"], ["joyeux", "proche de « content »"], ["magnifique", "proche de « beau »"], ["heureux", "proche de « content »"], ["superbe", "proche de « beau »"], ["ravi", "proche de « content »"]], expl: "Chaque groupe réunit des synonymes." },
      { t: "relier", q: "Relie chaque verbe à son synonyme.", paires: [["crier", "hurler"], ["regarder", "observer"], ["finir", "terminer"], ["bâtir", "construire"]], expl: "Ces verbes ont un sens proche." },
      { t: "qcm", q: "Dans « Mon père a acheté une belle voiture. Son ancienne automobile n'était plus très jolie. », pourquoi l'auteur emploie-t-il « automobile » ?", choix: ["pour ne pas répéter « voiture »", "parce que c'est une autre voiture plus grande", "parce que « voiture » est faux"], r: "pour ne pas répéter « voiture »", expl: "Les synonymes servent à éviter les répétitions." }
    ],
    [
      { t: "classer", q: "Range ces adjectifs : sens normal ou sens fort ?", cases: ["sens normal", "sens fort"], items: [["beau", "sens normal"], ["magnifique", "sens fort"], ["chaud", "sens normal"], ["brûlant", "sens fort"], ["fatigué", "sens normal"], ["épuisé", "sens fort"]], expl: "magnifique, brûlant, épuisé disent la même chose en plus fort." },
      { t: "qcm", q: "Quel synonyme est le plus fort ?", choix: ["glacial", "frais", "froid"], r: "glacial", expl: "glacial = très, très froid." },
      { t: "qcm", q: "Quel synonyme est le plus fort ?", choix: ["immense", "grand", "haut"], r: "immense", expl: "immense = très grand." },
      { t: "qcm", q: "Range du moins fort au plus fort : bon, délicieux.", choix: ["bon, puis délicieux", "délicieux, puis bon"], r: "bon, puis délicieux", expl: "délicieux veut dire « très bon »." },
      { t: "vf", q: "Dans « Il fait une chaleur terrible », on peut remplacer « chaleur » par « fournaise » pour dire que c'est encore plus fort.", r: true, expl: "fournaise est un synonyme fort de chaleur." },
      { t: "qcm", q: "Quel mot peut remplacer « joli » dans « un joli dessin » sans changer la nature du mot ?", choix: ["beau", "beauté", "embellir"], r: "beau", expl: "joli est un adjectif : son synonyme doit aussi être un adjectif. beauté est un nom, embellir un verbe." }
    ],
    [
      { t: "qcm", q: "Trouve l'intrus (celui qui n'est pas synonyme des autres) : maison, demeure, habitation, jardin.", choix: ["jardin", "maison", "demeure", "habitation"], r: "jardin", expl: "maison, demeure, habitation ont un sens proche ; le jardin est autre chose." },
      { t: "qcm", q: "Trouve l'intrus : rapide, vif, lent, prompt.", choix: ["lent", "rapide", "vif", "prompt"], r: "lent", expl: "lent est le contraire des autres." },
      { t: "trous", q: "Remplace chaque mot entre parenthèses par le synonyme proposé dans la liste : <i>automobile, jolie, magnifique</i>.", texte: "Fatou a une [jolie] (belle) robe. Son père conduit une [automobile] (voiture) neuve. La fête était [magnifique] (superbe) !", expl: "belle = jolie ; voiture = automobile ; superbe = magnifique." },
      { t: "dictee", texte: "Mon père a acheté une belle voiture bleue et son ancienne automobile n'était plus jolie.", expl: "voiture / automobile et belle / jolie sont des synonymes." },
      { t: "qcm", q: "Quelle phrase évite une répétition grâce à un synonyme ?", choix: ["Le chat dort. Le matou ronronne.", "Le chat dort. Le chat ronronne.", "Le chat dort. Le chien aboie."], r: "Le chat dort. Le matou ronronne.", expl: "matou est un synonyme de chat (chat mâle) : il évite de répéter le même mot." }
    ]
  ]
});


/* ---- ge-agriculture.js ---- */
LECONS.push({
  id: "ge-agriculture",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "L'agriculture au Sénégal (1re et 2e parties)",
  date: "2026-09-16",
  photos: ["DJI_20261118222023_0137_D.jpg", "DJI_20261118222048_0138_D.jpg"],
  retiens:
    "<p>Le Sénégal dispose d'énormes <b>potentialités agricoles</b> (terres arables, ressources humaines…). <b>70 %</b> de la population vit de l'agriculture.</p>" +
    "<p><b>Les cultures vivrières</b> servent à la consommation de la population locale :</p>" +
    "<ul><li>le <b>mil</b> (Fatick, Kaolack, Diourbel…) ;</li><li>le <b>riz</b> (Saint-Louis, Ziguinchor, Kolda) ;</li><li>le <b>maïs</b> (Tambacounda, Kolda, Kaolack…).</li></ul>" +
    "<p><b>Les cultures industrielles</b> sont transformées dans des usines :</p>" +
    "<ul><li>l'<b>arachide</b> (Diourbel, Kaolack, Louga…) ;</li><li>le <b>coton</b> (Tambacounda) ;</li><li>la <b>canne à sucre</b> (Richard-Toll, région de Saint-Louis) ;</li><li>la <b>tomate</b> (Saint-Louis, zone des Niayes).</li></ul>" +
    "<p><b>Les cultures maraîchères</b> (chou, patate…) se font dans la zone des Niayes et dans la vallée du fleuve.</p>" +
    "<p><b>Les cultures fruitières</b> se trouvent à Thiès et à Ziguinchor.</p>" +
    "<p><b>NB</b> : un pays qui atteint l'<b>autosuffisance alimentaire</b> est un pays qui produit toute la nourriture consommée par sa population.</p>" +
    "<p><b>Les problèmes</b> : malgré ses potentialités, notre agriculture souffre de l'<b>aridité des sols</b>, de la <b>faiblesse de la pluviométrie</b> et du <b>manque d'infrastructures agricoles</b> adaptées (outils).</p>" +
    "<p><b>Les solutions</b> : le Sénégal a fait de gros efforts pour atteindre l'autosuffisance alimentaire. L'État doit aussi moderniser l'agriculture : construire des <b>bassins de rétention</b> d'eau, <b>irriguer</b> les terres arides, renouveler le matériel agricole…</p>",
  astuce: "<b>Vivrière</b> vient de « vivre » : on la mange. <b>Industrielle</b> : elle part à l'usine (arachide → huile, canne → sucre).",
  regle: "Les cultures vivrières (mil, riz, maïs) nourrissent la population ; les cultures industrielles (arachide, coton, canne à sucre, tomate) sont transformées dans des usines.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle part de la population sénégalaise vit de l'agriculture ?", choix: ["70 %", "10 %", "100 %"], r: "70 %", expl: "70 % de la population vit de l'agriculture." },
      { t: "qcm", q: "À quoi servent les cultures vivrières ?", choix: ["à nourrir la population locale", "à être transformées dans des usines", "à décorer les maisons"], r: "à nourrir la population locale", expl: "Vivrière vient de « vivre » : on les consomme." },
      { t: "qcm", q: "Que deviennent les cultures industrielles ?", choix: ["elles sont transformées dans des usines", "elles sont jetées", "elles restent au champ"], r: "elles sont transformées dans des usines", expl: "L'arachide devient de l'huile, la canne à sucre devient du sucre…" },
      { t: "classer", q: "Range chaque culture.", cases: ["culture vivrière", "culture industrielle"], items: [["le mil", "culture vivrière"], ["l'arachide", "culture industrielle"], ["le riz", "culture vivrière"], ["le coton", "culture industrielle"], ["le maïs", "culture vivrière"], ["la canne à sucre", "culture industrielle"]], expl: "Mil, riz, maïs : vivrières. Arachide, coton, canne à sucre : industrielles." },
      { t: "vf", q: "Le chou et la patate sont des cultures maraîchères.", r: true, expl: "On les cultive dans les Niayes et dans la vallée du fleuve." }
    ],
    [
      { t: "relier", q: "Relie chaque culture industrielle à sa région.", paires: [["le coton", "Tambacounda"], ["la canne à sucre", "Richard-Toll"], ["la tomate", "zone des Niayes"]], expl: "Ce sont les zones citées dans la leçon." },
      { t: "relier", q: "Relie chaque culture vivrière à une de ses régions.", paires: [["le mil", "Fatick"], ["le riz", "Ziguinchor"], ["le maïs", "Tambacounda"]], expl: "Mil : Fatick, Kaolack, Diourbel. Riz : Saint-Louis, Ziguinchor, Kolda. Maïs : Tambacounda, Kolda, Kaolack." },
      { t: "qcm", q: "Où se trouvent les cultures fruitières ?", choix: ["à Thiès et à Ziguinchor", "à Dakar et à Louga", "à Matam et à Kédougou"], r: "à Thiès et à Ziguinchor", expl: "La leçon cite Thiès et Ziguinchor." },
      { t: "saisie", q: "Dans quelle ville du nord cultive-t-on la canne à sucre ?", r: "Richard-Toll", aide: "Deux mots reliés par un trait d'union.", expl: "À Richard-Toll, dans la région de Saint-Louis." },
      { t: "qcm", q: "Quelle culture est transformée en huile ?", choix: ["l'arachide", "le mil", "le chou"], r: "l'arachide", expl: "L'arachide est une culture industrielle." },
      { t: "classer", q: "Range ces problèmes et solutions.", cases: ["problème", "solution"], items: [["l'aridité des sols", "problème"], ["la faiblesse de la pluviométrie", "problème"], ["construire des bassins de rétention", "solution"], ["le manque d'outils adaptés", "problème"], ["irriguer les terres arides", "solution"], ["renouveler le matériel agricole", "solution"]], expl: "Les problèmes de l'agriculture et les solutions de la 2e partie." },
      { t: "trous", q: "Complète.", texte: "Les cultures [maraîchères] comme le chou se font dans la zone des [Niayes].", expl: "Les cultures maraîchères poussent dans les Niayes et la vallée du fleuve." },
      { t: "vf", q: "La pluviométrie très forte est un problème de l'agriculture sénégalaise.", r: false, expl: "Le problème, c'est la faiblesse de la pluviométrie : il ne pleut pas assez." },
      { t: "saisie", q: "Quelle culture industrielle est cultivée à Tambacounda ?", r: "le coton", expl: "Le coton, à Tambacounda." }
    ],
    [
      { t: "qcm", q: "Qu'est-ce qu'un pays qui a atteint l'autosuffisance alimentaire ?", choix: ["un pays qui produit toute la nourriture de sa population", "un pays qui achète toute sa nourriture à l'étranger", "un pays sans agriculteurs"], r: "un pays qui produit toute la nourriture de sa population", expl: "Il n'a pas besoin d'acheter de la nourriture ailleurs." },
      { t: "qcm", q: "Pourquoi construire des bassins de rétention d'eau ?", choix: ["pour garder l'eau de pluie et arroser les champs", "pour élever des chevaux", "pour faire des routes"], r: "pour garder l'eau de pluie et arroser les champs", expl: "La pluviométrie est faible : on garde l'eau pour irriguer." },
      { t: "vf", q: "Kaolack est citée à la fois pour le mil, le maïs et l'arachide.", r: true, expl: "Une même région peut produire plusieurs cultures." },
      { t: "qcm", q: "La tomate est une culture…", choix: ["industrielle", "fruitière", "vivrière"], r: "industrielle", expl: "Dans ta leçon, la tomate est rangée avec les cultures industrielles (on en fait du concentré à l'usine)." },
      { t: "classer", q: "Range chaque culture dans sa famille.", cases: ["vivrière", "industrielle", "maraîchère"], items: [["le riz", "vivrière"], ["le coton", "industrielle"], ["le chou", "maraîchère"], ["le mil", "vivrière"], ["la tomate", "industrielle"], ["la patate", "maraîchère"]], expl: "Trois familles de cultures." },
      { t: "saisie", q: "Comment appelle-t-on l'action d'apporter de l'eau aux terres sèches ? (verbe à l'infinitif)", r: "irriguer", expl: "Irriguer les terres arides est une des solutions." },
      { t: "vf", q: "Le Sénégal a de grandes potentialités agricoles : des terres arables et des ressources humaines.", r: true, expl: "C'est le début de la leçon." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Au Sénégal, [70] % de la population vit de l'agriculture. Les cultures [vivrières] comme le mil, le riz et le maïs nourrissent la population. Les cultures [industrielles] comme l'arachide et le coton sont transformées dans des usines. Les problèmes sont l'aridité des sols et la faiblesse de la [pluviométrie].", expl: "Les deux parties de la leçon." },
      { t: "qcm", q: "Mamadou cultive du mil à Diourbel pour nourrir sa famille. Quelle sorte de culture fait-il ?", choix: ["une culture vivrière", "une culture industrielle", "une culture fruitière"], r: "une culture vivrière", expl: "Le mil sert à nourrir la famille : c'est une culture vivrière." },
      { t: "qcm", q: "Khady vend ses arachides à l'usine de Kaolack. Quelle sorte de culture fait-elle ?", choix: ["une culture industrielle", "une culture vivrière", "une culture maraîchère"], r: "une culture industrielle", expl: "L'arachide part à l'usine : c'est une culture industrielle." },
      { t: "relier", q: "Relie chaque problème à une solution.", paires: [["la faiblesse de la pluviométrie", "construire des bassins de rétention"], ["les terres arides", "irriguer"], ["le manque d'outils adaptés", "renouveler le matériel agricole"]], expl: "Chaque solution répond à un problème." },
      { t: "vf", q: "Si le Sénégal produisait tout le riz que mange sa population, il serait plus proche de l'autosuffisance alimentaire.", r: true, expl: "L'autosuffisance, c'est produire toute la nourriture consommée par la population." }
    ]
  ]
});


/* ---- ge-elevage.js ---- */
LECONS.push({
  id: "ge-elevage",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "L'élevage au Sénégal (1re partie et suite)",
  date: "2026-10-14",
  photos: ["DJI_20261118222132_0145_D.jpg", "DJI_20261118222145_0147_D.jpg", "DJI_20261118222153_0148_D.jpg"],
  retiens:
    "<p>L'élevage au Sénégal est pratiqué sous <b>deux formes</b> :</p>" +
    "<p>1. <b>L'élevage extensif ou nomade</b> : les animaux se déplacent sur de grandes étendues à la recherche de pâturages. C'est l'<b>élevage traditionnel</b>, surtout pratiqué par les <b>Peuls</b> dans la <b>zone sylvopastorale</b>. Il dépend fortement de la pluviométrie.</p>" +
    "<p>2. <b>L'élevage intensif ou sédentaire</b> se pratique dans des <b>fermes</b>, sur des espaces réduits. C'est l'<b>élevage moderne</b> : il donne d'importants rendements en lait et en viande, et les animaux sont mieux soignés.</p>" +
    "<p><b>Mots importants</b></p>" +
    "<ul><li><b>Pâturage</b> : endroit où les animaux trouvent leur nourriture.</li>" +
    "<li><b>Nomade</b> : éleveur qui se déplace avec son troupeau.</li>" +
    "<li><b>Sédentaire</b> : éleveur qui reste sur place avec son troupeau.</li>" +
    "<li><b>Transhumance</b> : déplacement périodique du bétail vers d'autres localités à la recherche de pâturages.</li></ul>" +
    "<p><b>Les animaux élevés</b> : les bovins (bœufs), les ovins (moutons), les caprins (chèvres), les porcins (porcs), les canins (chiens), la volaille (poules, canards…), les équins (chevaux), les asins (ânes), les félins (chats)… L'ensemble des animaux élevés s'appelle le <b>cheptel</b>.</p>" +
    "<p><b>Les ressources de l'élevage</b> : le lait, la viande, le cuir, le beurre, les cornes, les œufs… Certains animaux servent aussi au transport et aux travaux des champs.</p>" +
    "<p><b>Les problèmes</b> : le manque de pâturages, le nomadisme, l'aridité du sol et du climat, les maladies.</p>" +
    "<p><b>Les solutions</b> : créer des centres de recherches zootechniques ; construire des forages dans les zones d'élevage ; améliorer les espèces animales et les vacciner ; moderniser les techniques d'élevage ; pratiquer l'<b>insémination artificielle</b> (déposer la semence du mâle dans l'organe génital de la femelle).</p>",
  astuce: "<b>Bo</b>vins comme <b>bœ</b>uf ; <b>é</b>quins comme <b>é</b>quitation (le cheval) ; <b>a</b>sins comme <b>â</b>ne ; <b>ca</b>prins comme <b>ca</b>bri (la petite chèvre).",
  regle: "L'élevage extensif (nomade, traditionnel) déplace les troupeaux vers les pâturages ; l'élevage intensif (sédentaire, moderne) se fait dans des fermes avec de gros rendements.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de formes d'élevage y a-t-il au Sénégal dans ta leçon ?", choix: ["deux", "quatre", "une seule"], r: "deux", expl: "L'élevage extensif (nomade) et l'élevage intensif (sédentaire)." },
      { t: "qcm", q: "Qui pratique surtout l'élevage extensif ?", choix: ["les Peuls", "les Lébous", "les Perses"], r: "les Peuls", expl: "Les Peuls, dans la zone sylvopastorale." },
      { t: "vf", q: "L'élevage intensif se pratique dans des fermes.", r: true, expl: "C'est l'élevage moderne, sur des espaces réduits." },
      { t: "qcm", q: "Un pâturage, c'est…", choix: ["un endroit où les animaux trouvent leur nourriture", "une maison pour les poules", "un médicament pour les vaches"], r: "un endroit où les animaux trouvent leur nourriture", expl: "Les troupeaux se déplacent à la recherche de pâturages." },
      { t: "classer", q: "Range ces mots.", cases: ["élevage extensif", "élevage intensif"], items: [["nomade", "élevage extensif"], ["sédentaire", "élevage intensif"], ["traditionnel", "élevage extensif"], ["moderne", "élevage intensif"], ["dépend de la pluie", "élevage extensif"], ["fermes", "élevage intensif"]], expl: "Extensif = nomade, traditionnel ; intensif = sédentaire, moderne." }
    ],
    [
      { t: "relier", q: "Relie chaque nom savant à l'animal.", paires: [["les bovins", "les bœufs"], ["les ovins", "les moutons"], ["les caprins", "les chèvres"], ["les équins", "les chevaux"], ["les asins", "les ânes"]], expl: "Ce sont les noms des groupes d'animaux élevés." },
      { t: "saisie", q: "Comment appelle-t-on l'ensemble des animaux élevés ?", r: "le cheptel", expl: "C'est le cheptel." },
      { t: "saisie", q: "Comment appelle-t-on le déplacement périodique du bétail à la recherche de pâturages ?", r: "la transhumance", expl: "La transhumance." },
      { t: "qcm", q: "Les poules et les canards font partie de…", choix: ["la volaille", "les bovins", "les félins"], r: "la volaille", expl: "La volaille : poules, canards…" },
      { t: "classer", q: "Range ces ressources.", cases: ["produit de l'élevage", "pas un produit de l'élevage"], items: [["le lait", "produit de l'élevage"], ["le cuir", "produit de l'élevage"], ["les œufs", "produit de l'élevage"], ["le mil", "pas un produit de l'élevage"], ["le beurre", "produit de l'élevage"], ["le poisson de mer", "pas un produit de l'élevage"]], expl: "Le mil vient de l'agriculture, le poisson de mer de la pêche." },
      { t: "vf", q: "Certains animaux servent au transport et aux travaux des champs.", r: true, expl: "Par exemple l'âne et le cheval tirent les charrettes." },
      { t: "trous", q: "Complète.", texte: "L'élevage [extensif] ou nomade est pratiqué par les Peuls. L'élevage [intensif] ou sédentaire se fait dans des fermes.", expl: "Les deux formes d'élevage." },
      { t: "qcm", q: "Un éleveur qui reste sur place avec son troupeau est…", choix: ["sédentaire", "nomade", "transhumant"], r: "sédentaire", expl: "Le sédentaire reste sur place, le nomade se déplace." },
      { t: "relier", q: "Relie.", paires: [["les porcins", "les porcs"], ["les canins", "les chiens"], ["les félins", "les chats"]], expl: "D'autres noms d'animaux élevés." }
    ],
    [
      { t: "classer", q: "Range ces problèmes et solutions.", cases: ["problème", "solution"], items: [["le manque de pâturages", "problème"], ["les maladies", "problème"], ["construire des forages", "solution"], ["vacciner les animaux", "solution"], ["l'aridité du climat", "problème"], ["créer des centres de recherches zootechniques", "solution"]], expl: "Les difficultés de l'élevage et leurs remèdes." },
      { t: "qcm", q: "Pourquoi construire des forages dans les zones d'élevage ?", choix: ["pour donner de l'eau aux troupeaux", "pour chercher de l'or", "pour pêcher"], r: "pour donner de l'eau aux troupeaux", expl: "Avec de l'eau sur place, les troupeaux se déplacent moins." },
      { t: "vf", q: "L'élevage extensif ne dépend pas de la pluie.", r: false, expl: "Il dépend fortement de la pluviométrie : sans pluie, pas d'herbe dans les pâturages." },
      { t: "qcm", q: "Pourquoi l'élevage intensif donne-t-il plus de lait et de viande ?", choix: ["les animaux sont bien nourris et bien soignés à la ferme", "les animaux marchent beaucoup", "les animaux mangent du sable"], r: "les animaux sont bien nourris et bien soignés à la ferme", expl: "C'est un élevage moderne avec une meilleure couverture sanitaire." },
      { t: "saisie", q: "Les moutons font partie des … (nom savant)", r: "ovins", expl: "Les ovins = les moutons." },
      { t: "saisie", q: "Les chèvres font partie des … (nom savant)", r: "caprins", expl: "Les caprins = les chèvres." },
      { t: "vf", q: "Le nomadisme est cité parmi les problèmes de l'élevage.", r: true, expl: "Les déplacements fatiguent les animaux et rendent les soins difficiles." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'élevage extensif est un élevage [nomade] pratiqué par les Peuls. L'élevage intensif est un élevage [moderne] qui se fait dans des fermes. L'ensemble des animaux élevés s'appelle le [cheptel]. Le déplacement du bétail à la recherche de pâturages s'appelle la [transhumance].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Pendant la saison sèche, Samba conduit ses bœufs du Ferlo vers le sud pour trouver de l'herbe, puis il revient. Comment appelle-t-on ce déplacement ?", choix: ["la transhumance", "l'insémination", "la pisciculture"], r: "la transhumance", expl: "C'est un déplacement périodique du bétail à la recherche de pâturages." },
      { t: "qcm", q: "Fatou a une ferme près de Thiès avec des vaches laitières bien soignées et vaccinées. Quel élevage pratique-t-elle ?", choix: ["l'élevage intensif", "l'élevage extensif", "la transhumance"], r: "l'élevage intensif", expl: "Ferme, soins, rendement en lait : c'est l'élevage intensif." },
      { t: "relier", q: "Relie chaque problème à une solution.", paires: [["les maladies", "vacciner les animaux"], ["le manque d'eau", "construire des forages"], ["des races peu productives", "améliorer les espèces animales"]], expl: "Chaque solution répond à un problème." },
      { t: "classer", q: "Défi : range ces animaux dans leur groupe.", cases: ["bovins", "ovins", "équins", "asins"], items: [["le taureau", "bovins"], ["la vache", "bovins"], ["le bélier", "ovins"], ["la brebis", "ovins"], ["le cheval", "équins"], ["l'âne", "asins"]], expl: "Bovins : bœufs, vaches ; ovins : moutons ; équins : chevaux ; asins : ânes." }
    ]
  ]
});


/* ---- ge-industrie.js ---- */
// À VÉRIFIER : au cahier (photo 0149), la matière première de GMD et de NMA est notée « Farine ». La farine est le produit fini ; la matière première est le blé. Le module écrit « blé ».
// À VÉRIFIER : quelques cases des tableaux sont floues (photos 0149 et 0151) : 2e produit de la SONACOS, produits finis de SODEFITEX/NSTS, 2e produit de la SAR. Elles ne sont pas utilisées en exercice. « SABADOLA » corrigé en « Sabodala » (mine d'or).
LECONS.push({
  id: "ge-industrie",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "L'industrie au Sénégal",
  date: "2026-11-04",
  photos: ["DJI_20261118222156_0149_D.jpg", "DJI_20261118222207_0151_D.jpg"],
  retiens:
    "<p>Les industries transforment des produits du sous-sol, de la pêche, de l'agriculture et des matières importées. Le Sénégal possède des industries variées.</p>" +
    "<table><tr><th>Usines</th><th>Matières premières</th><th>Produits finis</th></tr>" +
    "<tr><th colspan='3'>1. Industries alimentaires</th></tr>" +
    "<tr><td>SONACOS</td><td>arachide</td><td>huile…</td></tr>" +
    "<tr><td>CSS</td><td>canne à sucre</td><td>sucre</td></tr>" +
    "<tr><td>SOBOA</td><td>fruits</td><td>boissons gazeuses</td></tr>" +
    "<tr><td>SAPROLAIT</td><td>lait naturel</td><td>lait en poudre, en boîte</td></tr>" +
    "<tr><td>GMD</td><td>blé</td><td>farine, pâtes alimentaires</td></tr>" +
    "<tr><td>NMA</td><td>blé</td><td>farine de blé, aliment de bétail</td></tr>" +
    "<tr><th colspan='3'>2. Industries textiles</th></tr>" +
    "<tr><td>SODEFITEX, NSTS</td><td>coton en graine, fil…</td><td>coton, tissu</td></tr>" +
    "<tr><th colspan='3'>3. Industries chimiques</th></tr>" +
    "<tr><td>NSOA</td><td>arachide</td><td>savon</td></tr>" +
    "<tr><td>ICS</td><td>phosphates</td><td>engrais</td></tr>" +
    "<tr><td>SAR</td><td>pétrole brut</td><td>essence…</td></tr>" +
    "<tr><th colspan='3'>4. Industries minières</th></tr>" +
    "<tr><td>SOCOCIM</td><td>gisement</td><td>ciment</td></tr>" +
    "<tr><td>Sabodala</td><td>gisement</td><td>or</td></tr>" +
    "<tr><th colspan='3'>5. Industries mécaniques</th></tr>" +
    "<tr><td>SENBUS</td><td>pièces détachées</td><td>véhicules « Tata »</td></tr>" +
    "<tr><td>SEMI</td><td>pièces détachées</td><td>matériels marins</td></tr></table>" +
    "<p><b>Mots importants</b></p>" +
    "<ul><li>Une <b>matière première</b> : c'est un produit destiné à être transformé.</li>" +
    "<li>Un <b>produit fini</b> : c'est un produit qui, après transformation, est prêt à être utilisé.</li></ul>",
  astuce: "Matière <b>première</b> = ce qui entre en <b>premier</b> dans l'usine. Produit <b>fini</b> = ce qui sort à la <b>fin</b>.",
  regle: "Une usine transforme une matière première (arachide, canne à sucre, phosphates…) en produit fini (huile, sucre, engrais…).",
  niveaux: [
    [
      { t: "qcm", q: "Qu'est-ce qu'une matière première ?", choix: ["un produit destiné à être transformé", "un produit prêt à être utilisé", "un produit cassé"], r: "un produit destiné à être transformé", expl: "La matière première entre dans l'usine pour être transformée." },
      { t: "qcm", q: "Qu'est-ce qu'un produit fini ?", choix: ["un produit prêt à être utilisé après transformation", "un produit qui sort de la terre", "un produit qu'on jette"], r: "un produit prêt à être utilisé après transformation", expl: "Le produit fini sort de l'usine, prêt à l'emploi." },
      { t: "qcm", q: "Que produit la CSS à partir de la canne à sucre ?", choix: ["du sucre", "du savon", "du ciment"], r: "du sucre", expl: "CSS : canne à sucre → sucre." },
      { t: "classer", q: "Matière première ou produit fini ?", cases: ["matière première", "produit fini"], items: [["l'arachide", "matière première"], ["l'huile", "produit fini"], ["la canne à sucre", "matière première"], ["le sucre", "produit fini"], ["le pétrole brut", "matière première"], ["l'essence", "produit fini"]], expl: "La matière première entre dans l'usine, le produit fini en sort." },
      { t: "vf", q: "L'ICS transforme les phosphates en engrais.", r: true, expl: "ICS : phosphates → engrais." }
    ],
    [
      { t: "relier", q: "Relie chaque usine à son produit fini.", paires: [["SONACOS", "huile"], ["CSS", "sucre"], ["SOBOA", "boissons gazeuses"], ["SAPROLAIT", "lait en poudre"], ["SOCOCIM", "ciment"]], expl: "C'est le tableau de la leçon." },
      { t: "relier", q: "Relie chaque usine à sa matière première.", paires: [["ICS", "phosphates"], ["SAR", "pétrole brut"], ["NSOA", "arachide"], ["GMD", "blé"]], expl: "GMD transforme le blé en farine et en pâtes." },
      { t: "saisie", q: "Quelle usine transforme la canne à sucre en sucre ? (sigle)", r: ["CSS", "C.S.S"], expl: "La CSS, à Richard-Toll." },
      { t: "qcm", q: "Dans quelle famille d'industries range-t-on la SOCOCIM (ciment) ?", choix: ["les industries minières", "les industries alimentaires", "les industries textiles"], r: "les industries minières", expl: "Le ciment vient d'un gisement du sous-sol." },
      { t: "qcm", q: "Que produit la SENBUS avec des pièces détachées ?", choix: ["des véhicules « Tata »", "de l'huile", "des engrais"], r: "des véhicules « Tata »", expl: "C'est une industrie mécanique." },
      { t: "vf", q: "La NSOA fabrique du savon avec de l'arachide.", r: true, expl: "C'est une industrie chimique." },
      { t: "classer", q: "Range chaque usine dans sa famille.", cases: ["alimentaire", "chimique", "minière", "mécanique"], items: [["CSS", "alimentaire"], ["SOBOA", "alimentaire"], ["ICS", "chimique"], ["SAR", "chimique"], ["Sabodala", "minière"], ["SEMI", "mécanique"]], expl: "Les familles d'industries du tableau." },
      { t: "saisie", q: "Que produit la mine de Sabodala ?", r: "l'or", expl: "Sabodala est une mine d'or." },
      { t: "qcm", q: "Que fabrique la NMA, en plus de la farine de blé ?", choix: ["de l'aliment de bétail", "du sucre", "du ciment"], r: "de l'aliment de bétail", expl: "NMA : blé → farine de blé, aliment de bétail." }
    ],
    [
      { t: "vf", q: "La farine est la matière première de la GMD.", r: false, expl: "La matière première est le blé ; la farine est le produit fini." },
      { t: "qcm", q: "L'arachide est la matière première de deux usines du tableau. Lesquelles ?", choix: ["la SONACOS et la NSOA", "la CSS et la SAR", "l'ICS et la SOCOCIM"], r: "la SONACOS et la NSOA", expl: "SONACOS : huile ; NSOA : savon." },
      { t: "classer", q: "Range ces usines.", cases: ["industrie alimentaire", "industrie chimique"], items: [["SAPROLAIT", "industrie alimentaire"], ["NSOA", "industrie chimique"], ["GMD", "industrie alimentaire"], ["ICS", "industrie chimique"], ["SONACOS", "industrie alimentaire"], ["SAR", "industrie chimique"]], expl: "Attention : l'arachide va à la SONACOS (alimentaire, huile) et à la NSOA (chimique, savon)." },
      { t: "qcm", q: "D'où viennent les produits transformés par les industries ?", choix: ["du sous-sol, de la pêche, de l'agriculture et des importations", "seulement de la mer", "seulement de l'étranger"], r: "du sous-sol, de la pêche, de l'agriculture et des importations", expl: "C'est la première phrase de la leçon." },
      { t: "saisie", q: "Quelle est la matière première de l'ICS ?", r: "les phosphates", expl: "L'ICS transforme les phosphates en engrais." },
      { t: "relier", q: "Relie chaque matière première à son produit fini.", paires: [["lait naturel", "lait en poudre"], ["phosphates", "engrais"], ["fruits", "boissons gazeuses"], ["blé", "pâtes alimentaires"]], expl: "Chaque matière première devient un produit fini." },
      { t: "vf", q: "La SEMI fabrique des matériels marins.", r: true, expl: "C'est une industrie mécanique, avec des pièces détachées." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Une usine transforme une matière [première] en produit [fini]. Par exemple, la CSS transforme la canne à sucre en [sucre] et l'ICS transforme les phosphates en [engrais].", expl: "Le principe de l'industrie." },
      { t: "qcm", q: "Awa achète un paquet de pâtes au marché de Thiès. Quelle usine a pu le fabriquer, et avec quoi ?", choix: ["la GMD, avec du blé", "la SOCOCIM, avec un gisement", "la SAR, avec du pétrole"], r: "la GMD, avec du blé", expl: "GMD : blé → farine, pâtes alimentaires." },
      { t: "qcm", q: "Le papa de Moussa met de l'engrais dans son champ d'arachide. Quelle usine fabrique cet engrais ?", choix: ["l'ICS", "la SOBOA", "la SENBUS"], r: "l'ICS", expl: "L'ICS transforme les phosphates en engrais." },
      { t: "classer", q: "Défi : range ces usines dans leur famille.", cases: ["alimentaire", "chimique", "minière", "mécanique"], items: [["SAPROLAIT", "alimentaire"], ["NSOA", "chimique"], ["SOCOCIM", "minière"], ["SENBUS", "mécanique"], ["NMA", "alimentaire"], ["Sabodala", "minière"]], expl: "Révise le tableau famille par famille." },
      { t: "vf", q: "L'arachide peut donner de l'huile à la SONACOS et du savon à la NSOA.", r: true, expl: "Une même matière première peut aller dans deux industries différentes." }
    ]
  ]
});


/* ---- ge-peche.js ---- */
LECONS.push({
  id: "ge-peche",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "La pêche au Sénégal (1re partie et suite)",
  date: "2026-09-30",
  photos: ["DJI_20261118222101_0140_D.jpg", "DJI_20261118222107_0141_D.jpg", "DJI_20261118222115_0142_D.jpg"],
  retiens:
    "<p>La pêche au Sénégal se pratique sous <b>deux formes</b> :</p>" +
    "<p>1. <b>La pêche artisanale</b> (maritime ou fluviale) se pratique avec des outils souvent rudimentaires : <b>pirogue</b> à rames ou à moteur, filet, hameçons, nasses… Elle est souvent pratiquée par les Lébous, les Wolofs… Les produits pêchés sont les sardines, les carpes, les mulets, les daurades, les crevettes…, destinés à la <b>consommation</b> et à la <b>vente</b>. Elle a un <b>faible rendement</b>.</p>" +
    "<p>2. <b>La pêche industrielle</b> se pratique avec des <b>bateaux</b> (thoniers, chalutiers, sardiniers…) et donne des <b>rendements importants</b>. Les produits pêchés (thons, mérous…) sont destinés à l'<b>exportation</b>.</p>" +
    "<p>Le Sénégal a plusieurs <b>ports de pêche</b> sur la côte : Saint-Louis, Louga (Lompoul), Thiès (Mbour, Kayar, Joal), Dakar (Yarakh), Ziguinchor…</p>" +
    "<p><b>L'aquaculture</b> : en plus de ces deux types de pêche, on pratique :</p>" +
    "<ul><li>la <b>pisciculture</b> (élevage de poissons) ;</li><li>l'<b>ostréiculture</b> (élevage d'huîtres) ;</li><li>la <b>crevetticulture</b> (élevage de crevettes).</li></ul>" +
    "<p>Il existe aussi une aquaculture de repeuplement et une aquaculture commerciale.</p>" +
    "<p><b>Les problèmes de la pêche</b> : le non-respect du repos biologique, l'insuffisance des moyens de conservation, l'utilisation de filets à mailles non conformes, la surexploitation des ressources…</p>" +
    "<p><b>Les solutions</b> : la gestion rationnelle des ressources, la réglementation des types de filets, la construction de quais de pêche équipés pour conserver le poisson…</p>",
  astuce: "<b>Piscis</b> = poisson (pisciculture) ; <b>ostréi</b> = huître (ostréiculture) ; <b>crevetti</b> = crevette.",
  regle: "La pêche artisanale utilise des pirogues, a un faible rendement et nourrit le marché local ; la pêche industrielle utilise des bateaux, a de forts rendements et exporte.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de formes de pêche y a-t-il au Sénégal dans ta leçon ?", choix: ["deux", "trois", "cinq"], r: "deux", expl: "La pêche artisanale et la pêche industrielle." },
      { t: "qcm", q: "Avec quoi pratique-t-on la pêche artisanale ?", choix: ["des pirogues", "de grands chalutiers", "des avions"], r: "des pirogues", expl: "Pirogue à rames ou à moteur, filets, hameçons, nasses." },
      { t: "qcm", q: "Où partent surtout les produits de la pêche industrielle ?", choix: ["à l'exportation", "au marché du village", "à la poubelle"], r: "à l'exportation", expl: "Thons, mérous… sont exportés." },
      { t: "vf", q: "La pêche artisanale a un faible rendement.", r: true, expl: "Ses outils sont souvent rudimentaires." },
      { t: "classer", q: "Range ces outils.", cases: ["pêche artisanale", "pêche industrielle"], items: [["la pirogue à rames", "pêche artisanale"], ["le chalutier", "pêche industrielle"], ["la nasse", "pêche artisanale"], ["le thonier", "pêche industrielle"], ["l'hameçon", "pêche artisanale"], ["le sardinier", "pêche industrielle"]], expl: "Pirogues et petits outils pour l'artisanale ; grands bateaux pour l'industrielle." }
    ],
    [
      { t: "relier", q: "Relie chaque activité à ce qu'on élève.", paires: [["la pisciculture", "des poissons"], ["l'ostréiculture", "des huîtres"], ["la crevetticulture", "des crevettes"]], expl: "Ce sont les activités d'aquaculture." },
      { t: "relier", q: "Relie chaque port de pêche à sa région.", paires: [["Kayar", "Thiès"], ["Yarakh", "Dakar"], ["Lompoul", "Louga"]], expl: "Mbour, Kayar et Joal sont dans la région de Thiès." },
      { t: "qcm", q: "Quel peuple est cité comme pratiquant souvent la pêche artisanale ?", choix: ["les Lébous", "les Touaregs", "les Perses"], r: "les Lébous", expl: "Les Lébous et les Wolofs." },
      { t: "saisie", q: "Comment appelle-t-on l'élevage de poissons ?", r: "la pisciculture", expl: "La pisciculture." },
      { t: "classer", q: "Range ces poissons selon la pêche citée dans la leçon.", cases: ["pêche artisanale", "pêche industrielle"], items: [["la sardine", "pêche artisanale"], ["le thon", "pêche industrielle"], ["le mulet", "pêche artisanale"], ["le mérou", "pêche industrielle"], ["la daurade", "pêche artisanale"]], expl: "C'est la répartition de la leçon." },
      { t: "vf", q: "La pêche artisanale peut être maritime ou fluviale.", r: true, expl: "En mer ou sur le fleuve." },
      { t: "trous", q: "Complète.", texte: "La pêche [industrielle] se pratique avec des bateaux et donne des rendements [importants].", expl: "Thoniers, chalutiers, sardiniers." },
      { t: "qcm", q: "Lequel de ces lieux est un port de pêche de la région de Thiès ?", choix: ["Joal", "Yarakh", "Lompoul"], r: "Joal", expl: "Mbour, Kayar et Joal sont dans la région de Thiès." },
      { t: "saisie", q: "Comment appelle-t-on l'élevage des huîtres ?", r: "l'ostréiculture", expl: "L'ostréiculture." }
    ],
    [
      { t: "classer", q: "Range ces problèmes et solutions.", cases: ["problème", "solution"], items: [["la surexploitation des ressources", "problème"], ["le non-respect du repos biologique", "problème"], ["la réglementation des filets", "solution"], ["le manque de moyens de conservation", "problème"], ["la construction de quais de pêche équipés", "solution"], ["la gestion rationnelle des ressources", "solution"]], expl: "Les difficultés de la pêche et leurs remèdes." },
      { t: "qcm", q: "Que veut dire « respecter le repos biologique » ?", choix: ["arrêter de pêcher pendant un temps pour laisser les poissons se reproduire", "dormir sur la pirogue", "pêcher la nuit seulement"], r: "arrêter de pêcher pendant un temps pour laisser les poissons se reproduire", expl: "Si on ne laisse pas les poissons se reproduire, il y en aura de moins en moins." },
      { t: "qcm", q: "Pourquoi les filets à mailles trop petites posent-ils problème ?", choix: ["ils attrapent aussi les tout petits poissons", "ils coûtent trop cher", "ils sont trop lourds"], r: "ils attrapent aussi les tout petits poissons", expl: "Les jeunes poissons n'ont pas le temps de grandir : c'est pourquoi on réglemente les filets." },
      { t: "vf", q: "La pêche industrielle a un faible rendement.", r: false, expl: "C'est la pêche artisanale qui a un faible rendement ; l'industrielle donne des rendements importants." },
      { t: "saisie", q: "Comment appelle-t-on l'élevage des crevettes ?", r: "la crevetticulture", expl: "La crevetticulture." },
      { t: "qcm", q: "Pourquoi construire des quais équipés pour la conservation ?", choix: ["pour que le poisson ne pourrisse pas", "pour faire du sport", "pour garer des voitures"], r: "pour que le poisson ne pourrisse pas", expl: "L'insuffisance des moyens de conservation est un problème de la pêche." },
      { t: "vf", q: "La pisciculture, l'ostréiculture et la crevetticulture sont des activités d'aquaculture.", r: true, expl: "L'aquaculture, c'est l'élevage d'animaux qui vivent dans l'eau." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La pêche [artisanale] se pratique avec des pirogues et a un faible rendement. La pêche industrielle se pratique avec des [bateaux] et ses produits sont destinés à l'[exportation]. L'élevage de poissons s'appelle la [pisciculture].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Ibrahima part de Kayar à l'aube avec sa pirogue à moteur et revient vendre ses sardines au marché. Quelle pêche pratique-t-il ?", choix: ["la pêche artisanale", "la pêche industrielle", "l'ostréiculture"], r: "la pêche artisanale", expl: "Pirogue, sardines, vente au marché : c'est la pêche artisanale." },
      { t: "qcm", q: "Un grand thonier pêche des tonnes de thons qui partent en Europe. Quelle pêche est-ce ?", choix: ["la pêche industrielle", "la pêche artisanale", "la pisciculture"], r: "la pêche industrielle", expl: "Grand bateau, gros rendement, exportation : c'est la pêche industrielle." },
      { t: "relier", q: "Relie chaque problème à sa solution.", paires: [["les filets à mailles non conformes", "réglementer les types de filets"], ["le manque de conservation", "construire des quais équipés"], ["la surexploitation", "gérer les ressources de façon rationnelle"]], expl: "Chaque solution répond à un problème." },
      { t: "classer", q: "Défi : range ces mots.", cases: ["pêche artisanale", "pêche industrielle", "aquaculture"], items: [["pirogue", "pêche artisanale"], ["chalutier", "pêche industrielle"], ["élevage d'huîtres", "aquaculture"], ["nasse", "pêche artisanale"], ["exportation de thons", "pêche industrielle"], ["élevage de crevettes", "aquaculture"]], expl: "Trois manières de tirer des produits de l'eau." }
    ]
  ]
});


/* ---- ge-tourisme-senegal.js ---- */
// Orthographe corrigée : « Niokolokoba » → Niokolo-Koba.
LECONS.push({
  id: "ge-tourisme-senegal",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "Le tourisme au Sénégal",
  date: "2026-11-25",
  photos: ["2026-11-25_23.jpg"],
  retiens:
    "<p>Le tourisme est l'une des plus importantes activités économiques du Sénégal. Les <b>belles plages</b>, le <b>bon climat</b>, les <b>sites historiques</b>, la <b>diversité culturelle</b>… font que le Sénégal attire de nombreux touristes.</p>" +
    "<p>Les principaux sites touristiques sont :</p>" +
    "<ul><li><b>Dakar</b> : le parc de Hann, l'île de Gorée, la Maison des esclaves, le village artisanal de Soumbédioune, le lac Rose, le monument de la Renaissance africaine…</li>" +
    "<li><b>Thiès</b> : la réserve de Bandia, l'île de Joal-Fadiouth, les plages de Saly, de la Somone…</li>" +
    "<li><b>Saint-Louis</b> : le parc national des oiseaux du Djoudj, la langue de Barbarie, le musée Jean Mermoz, le pont Faidherbe…</li>" +
    "<li><b>Tambacounda</b> : le parc national du Niokolo-Koba</li>" +
    "<li><b>Ziguinchor</b> : le parc de la Basse-Casamance, l'île de Karabane, la station balnéaire du Cap Skirring…</li>" +
    "<li><b>Sine-Saloum</b> : le parc national du delta du Saloum, les îles du Saloum</li></ul>",
  astuce: "Pour chaque région, retiens un site phare : Dakar → Gorée ; Thiès → Bandia ; Saint-Louis → Djoudj ; Tamba → Niokolo-Koba ; Ziguinchor → Cap Skirring ; Sine-Saloum → delta du Saloum.",
  regle: "Le tourisme est une activité économique importante au Sénégal grâce aux plages, au climat, aux sites historiques et à la diversité culturelle ; chaque région a ses sites touristiques.",
  niveaux: [
    [
      { t: "qcm", q: "Le tourisme au Sénégal est…", choix: ["une des plus importantes activités économiques", "une activité interdite", "une activité sans importance"], r: "une des plus importantes activités économiques", expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Dans quelle région se trouve l'île de Gorée ?", choix: ["Dakar", "Ziguinchor", "Tambacounda"], r: "Dakar", expl: "Gorée, avec la Maison des esclaves, est à Dakar." },
      { t: "qcm", q: "Où se trouve le parc national du Niokolo-Koba ?", choix: ["à Tambacounda", "à Dakar", "à Thiès"], r: "à Tambacounda", expl: "C'est le grand parc de Tamba." },
      { t: "vf", q: "Les belles plages et le bon climat attirent les touristes au Sénégal.", r: true, expl: "Comme les sites historiques et la diversité culturelle." },
      { t: "qcm", q: "Le parc des oiseaux du Djoudj se trouve…", choix: ["à Saint-Louis", "à Ziguinchor", "au Sine-Saloum"], r: "à Saint-Louis", expl: "Saint-Louis : Djoudj, langue de Barbarie, pont Faidherbe." }
    ],
    [
      { t: "relier", q: "Relie chaque site à sa région.", paires: [["réserve de Bandia", "Thiès"], ["pont Faidherbe", "Saint-Louis"], ["Cap Skirring", "Ziguinchor"], ["lac Rose", "Dakar"], ["delta du Saloum", "Sine-Saloum"]], expl: "C'est la liste de la leçon." },
      { t: "classer", q: "Range ces sites.", cases: ["Dakar", "Saint-Louis", "Ziguinchor"], items: [["parc de Hann", "Dakar"], ["village artisanal de Soumbédioune", "Dakar"], ["langue de Barbarie", "Saint-Louis"], ["parc du Djoudj", "Saint-Louis"], ["île de Karabane", "Ziguinchor"], ["parc de la Basse-Casamance", "Ziguinchor"]], expl: "Chaque région a ses sites." },
      { t: "qcm", q: "Quelle île se trouve dans la région de Thiès ?", choix: ["Joal-Fadiouth", "Gorée", "Karabane"], r: "Joal-Fadiouth", expl: "Gorée : Dakar ; Karabane : Ziguinchor." },
      { t: "saisie", q: "Quel monument de Dakar porte le nom de la « Renaissance africaine » ? Le monument de la …", r: ["Renaissance africaine", "renaissance africaine"], expl: "Le monument de la Renaissance africaine, à Dakar." },
      { t: "trous", q: "Complète.", texte: "Les plages de [Saly] et de la Somone sont dans la région de Thiès. La station balnéaire du Cap [Skirring] est en Casamance.", expl: "Les grandes plages touristiques du Sénégal." },
      { t: "qcm", q: "Lequel n'est PAS une raison citée pour la venue des touristes ?", choix: ["la neige", "les belles plages", "les sites historiques", "la diversité culturelle"], r: "la neige", expl: "Il n'y a pas de neige au Sénégal !" },
      { t: "vf", q: "La Maison des esclaves se trouve sur l'île de Gorée.", r: true, expl: "C'est un site historique très visité." },
      { t: "qcm", q: "Les îles du Saloum se trouvent…", choix: ["au Sine-Saloum", "à Saint-Louis", "à Dakar"], r: "au Sine-Saloum", expl: "Avec le parc national du delta du Saloum." }
    ],
    [
      { t: "classer", q: "Parc naturel ou site historique et culturel ?", cases: ["parc ou réserve naturelle", "site historique ou culturel"], items: [["parc du Djoudj", "parc ou réserve naturelle"], ["réserve de Bandia", "parc ou réserve naturelle"], ["Niokolo-Koba", "parc ou réserve naturelle"], ["Maison des esclaves", "site historique ou culturel"], ["pont Faidherbe", "site historique ou culturel"], ["village artisanal de Soumbédioune", "site historique ou culturel"]], expl: "Les parcs protègent les animaux et la nature ; les sites historiques racontent le passé." },
      { t: "qcm", q: "Un touriste veut voir des oiseaux. Où lui conseilles-tu d'aller ?", choix: ["au parc du Djoudj", "au village de Soumbédioune", "au pont Faidherbe"], r: "au parc du Djoudj", expl: "Le parc national des oiseaux du Djoudj, à Saint-Louis." },
      { t: "qcm", q: "Une famille veut acheter des objets d'artisanat à Dakar. Où va-t-elle ?", choix: ["au village artisanal de Soumbédioune", "au Niokolo-Koba", "à la langue de Barbarie"], r: "au village artisanal de Soumbédioune", expl: "On y trouve des artisans et leurs objets." },
      { t: "vf", q: "Le tourisme rapporte de l'argent au pays.", r: true, expl: "C'est une activité économique importante." },
      { t: "relier", q: "Relie chaque région à son parc.", paires: [["Tambacounda", "Niokolo-Koba"], ["Saint-Louis", "Djoudj"], ["Ziguinchor", "Basse-Casamance"], ["Sine-Saloum", "delta du Saloum"]], expl: "Les grands parcs nationaux de la leçon." },
      { t: "saisie", q: "Quel lac de la région de Dakar est célèbre pour sa couleur ? Le lac …", r: "Rose", expl: "Le lac Rose." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le tourisme est une activité [économique] importante. Les touristes viennent pour les belles [plages], le bon [climat], les sites historiques et la diversité [culturelle].", expl: "Les raisons du succès du tourisme au Sénégal." },
      { t: "qcm", q: "Un circuit visite Gorée, puis Bandia, puis le Djoudj. Dans quel ordre traverse-t-il les régions ?", choix: ["Dakar, Thiès, Saint-Louis", "Thiès, Dakar, Ziguinchor", "Saint-Louis, Tamba, Dakar"], r: "Dakar, Thiès, Saint-Louis", expl: "Gorée : Dakar ; Bandia : Thiès ; Djoudj : Saint-Louis." },
      { t: "classer", q: "Range ces sites selon leur région.", cases: ["Thiès", "Ziguinchor", "Sine-Saloum"], items: [["Saly", "Thiès"], ["Somone", "Thiès"], ["Karabane", "Ziguinchor"], ["Cap Skirring", "Ziguinchor"], ["îles du Saloum", "Sine-Saloum"], ["delta du Saloum", "Sine-Saloum"]], expl: "Les sites de la leçon." },
      { t: "qcm", q: "Lequel de ces sites n'est PAS à Dakar ?", choix: ["la langue de Barbarie", "le parc de Hann", "l'île de Gorée", "le lac Rose"], r: "la langue de Barbarie", expl: "La langue de Barbarie est à Saint-Louis." },
      { t: "vf", q: "Le pont Faidherbe se trouve à Ziguinchor.", r: false, expl: "Il est à Saint-Louis." }
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
      { t: "relier", q: "Relie correctement.", paires: [["les chrétiens", "à partir de la naissance de Jésus-Christ"], ["les musulmans", "à partir de l'hégire"], ["l'année de l'hégire", "622"]], expl: "Ce sont les deux systèmes de datation de la leçon ; l'hégire a eu lieu en 622." },
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
// À VÉRIFIER : le tableau du cahier (photo 0140) place la « découverte du feu » au Néolithique. En réalité, l'homme maîtrise le feu bien avant, dès le Paléolithique. Le module garde « aliments cuits » au Néolithique comme au cahier, sans affirmer que le feu y a été découvert.
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
    "<tr><td><b>Alimentation</b></td><td>aliments crus, fruits</td><td>aliments cuits</td></tr>" +
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
      { t: "qcm", q: "Au Néolithique, les aliments sont…", choix: ["cuits", "toujours crus", "achetés au marché"], r: "cuits", expl: "Le tableau du cahier indique la cuisson des aliments au Néolithique." },
      { t: "saisie", q: "Comment appelle-t-on un homme qui se déplace sans cesse et n'a pas de demeure fixe ?", r: "nomade", aide: "C'est le contraire de sédentaire.", expl: "Le nomade se déplace ; le sédentaire reste sur place." },
      { t: "saisie", q: "Comment appelle-t-on un homme qui reste vivre au même endroit ?", r: "sédentaire", expl: "Au Néolithique, l'homme devient sédentaire." },
      { t: "relier", q: "Relie chaque mot à ce qui lui correspond.", paires: [["Paléolithique", "âge de la pierre taillée"], ["Néolithique", "âge de la pierre polie"], ["prédateur nomade", "homme du Paléolithique"], ["producteur sédentaire", "homme du Néolithique"]], expl: "Ce sont les deux grandes périodes de la préhistoire." },
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


/* ---- hi-royaumes-senegal-tableau.js ---- */
// À VÉRIFIER : le tableau (photo 2026-11-25_02) dit « bataille de Dékheulé contre Faidherbe (fin 19e siècle) ».
// Dékheulé a eu lieu en 1886 contre les troupes françaises ; Faidherbe avait quitté le Sénégal en 1865. Le module écrit « contre les Français ».
// Orthographe : « Koli Tengala » → Koli Tenguella.
LECONS.push({
  id: "hi-royaumes-senegal-tableau",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Les royaumes du Sénégal : capitales, souverains, faits marquants",
  date: "2026-11-19",
  photos: ["2026-11-25_02.jpg", "2026-11-25_09.jpg"],
  retiens:
    "<table><tr><th>Royaume</th><th>Capitale</th><th>Souverain</th><th>Faits marquants</th></tr>" +
    "<tr><td><b>Tékrour</b> (Fouta Toro)</td><td>Mboumba</td><td>Almamy</td><td>création vers le 9<sup>e</sup> siècle ; conquête par Koli Tenguella et création du Fouta Toro (15<sup>e</sup> siècle) ; révolte des marabouts musulmans</td></tr>" +
    "<tr><td><b>Djolof</b></td><td>Yang-Yang</td><td>Bourba</td><td>fondation par Ndiadiane Ndiaye (13<sup>e</sup> ou 14<sup>e</sup> siècle) ; domination des autres royaumes ; bataille de Danki (1549) : défaite devant l'armée du Cayor</td></tr>" +
    "<tr><td><b>Cayor</b></td><td>Mboul</td><td>Damel</td><td>victoire sur le Djolof et indépendance après Danki ; Lat Dior devient Damel (1862) ; bataille de Dékheulé contre les Français (fin du 19<sup>e</sup> siècle)</td></tr>" +
    "<tr><td><b>Baol</b></td><td>Lambaye</td><td>Tègne</td><td>indépendance après Danki ; unification avec le Cayor : Amary Ngoné Sobel devient Damel-Tègne</td></tr>" +
    "<tr><td><b>Walo</b></td><td>Nder</td><td>Brack</td><td>fondation par Barka Mbodj ; guerre contre les Maures du Trarza (1769) ; mariage de Ndjeumbeut Mbodj (1833) ; suicide collectif des femmes de Nder</td></tr>" +
    "<tr><td><b>Sine</b></td><td>Mbissel, Diakhao</td><td>Bour</td><td>fondation par Meïssa Waly Dione (14<sup>e</sup> siècle) ; résistance à l'islamisation jusqu'au 19<sup>e</sup> siècle</td></tr>" +
    "<tr><td><b>Saloum</b></td><td>Kahone</td><td>Bour</td><td>fondation par Mbégane Ndour</td></tr>" +
    "<tr><td><b>Rip</b></td><td>Nioro</td><td>Almamy</td><td>bataille de Pathé Badiane ; guerre sainte de Maba Diakhou Ba (1860) et défaite contre Coumba Ndoffène (1867)</td></tr>" +
    "</table>",
  astuce: "Retiens les titres par paires : <b>Damel</b> (Cayor) et <b>Tègne</b> (Baol) — Amary Ngoné Sobel fut les deux, Damel-Tègne ; <b>Bour</b> pour les deux royaumes sereer, Sine et Saloum ; <b>Almamy</b> pour le Tékrour et le Rip.",
  regle: "Chaque royaume a sa capitale et le titre de son souverain : Tékrour (Mboumba, Almamy), Djolof (Yang-Yang, Bourba), Cayor (Mboul, Damel), Baol (Lambaye, Tègne), Walo (Nder, Brack), Sine (Diakhao, Bour), Saloum (Kahone, Bour), Rip (Nioro, Almamy).",
  niveaux: [
    [
      { t: "qcm", q: "Quel est le titre du souverain du Cayor ?", choix: ["Damel", "Brack", "Bourba"], r: "Damel", expl: "Le souverain du Cayor s'appelle le Damel." },
      { t: "qcm", q: "Quelle est la capitale du Walo ?", choix: ["Nder", "Kahone", "Mboul"], r: "Nder", expl: "Le Walo avait pour capitale Nder, et son souverain était le Brack." },
      { t: "qcm", q: "Qui a fondé le Djolof ?", choix: ["Ndiadiane Ndiaye", "Lat Dior", "Maba Diakhou Ba"], r: "Ndiadiane Ndiaye", expl: "Le Djolof a été fondé par Ndiadiane Ndiaye au 13e ou au 14e siècle." },
      { t: "vf", q: "Le souverain du Sine et celui du Saloum portaient tous les deux le titre de Bour.", r: true, expl: "On disait le Bour Sine et le Bour Saloum." },
      { t: "qcm", q: "Quel royaume a été battu à Danki en 1549 ?", choix: ["le Djolof", "le Cayor", "le Rip"], r: "le Djolof", expl: "À Danki, le Djolof a été battu par l'armée du Cayor." }
    ],
    [
      { t: "relier", q: "Relie chaque royaume à sa capitale.", paires: [["Djolof", "Yang-Yang"], ["Cayor", "Mboul"], ["Baol", "Lambaye"], ["Saloum", "Kahone"], ["Rip", "Nioro"]], expl: "C'est la colonne « Capitale » du tableau." },
      { t: "relier", q: "Relie chaque royaume au titre de son souverain.", paires: [["Djolof", "Bourba"], ["Walo", "Brack"], ["Baol", "Tègne"], ["Cayor", "Damel"], ["Tékrour", "Almamy"]], expl: "C'est la colonne « Titre du souverain »." },
      { t: "saisie", q: "Qui a fondé le Saloum ?", r: "Mbégane Ndour", expl: "Le Saloum a été fondé par Mbégane Ndour." },
      { t: "qcm", q: "Qui a fondé le Sine ?", choix: ["Meïssa Waly Dione", "Barka Mbodj", "Koli Tenguella"], r: "Meïssa Waly Dione", expl: "Meïssa Waly Dione a fondé le Sine au 14e siècle." },
      { t: "saisie", q: "En quelle année Lat Dior est-il devenu Damel du Cayor ?", r: "1862", nombre: true, expl: "Lat Dior devient Damel en 1862." },
      { t: "qcm", q: "Quel autre nom donne-t-on au Tékrour ?", choix: ["le Fouta Toro", "le Djolof", "le Baol"], r: "le Fouta Toro", expl: "Koli Tenguella conquiert le Tékrour et crée le Fouta Toro au 15e siècle." },
      { t: "trous", q: "Complète.", texte: "Le Walo a été fondé par Barka [Mbodj]. Sa capitale était [Nder] et son souverain s'appelait le [Brack].", expl: "La ligne du Walo dans le tableau." },
      { t: "vf", q: "Le Sine a résisté à l'islamisation jusqu'au 19e siècle.", r: true, expl: "C'est un fait marquant du Sine." }
    ],
    [
      { t: "qcm", q: "Pourquoi Amary Ngoné Sobel porte-t-il le titre de Damel-Tègne ?", choix: ["parce qu'il a réuni le Cayor et le Baol", "parce qu'il a fondé le Walo", "parce qu'il a battu les Maures"], r: "parce qu'il a réuni le Cayor et le Baol", expl: "Damel = roi du Cayor ; Tègne = roi du Baol. Il régnait sur les deux." },
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1549", "bataille de Danki"], ["1862", "Lat Dior devient Damel"], ["1833", "mariage de Ndjeumbeut Mbodj"], ["1867", "défaite de Maba Diakhou Ba"]], expl: "Les dates du tableau." },
      { t: "qcm", q: "Contre qui Maba Diakhou Ba a-t-il été battu en 1867 ?", choix: ["Coumba Ndoffène", "Lat Dior", "Ndiadiane Ndiaye"], r: "Coumba Ndoffène", expl: "Le chef du Rip, Maba Diakhou Ba, a été battu par Coumba Ndoffène, Bour du Sine." },
      { t: "classer", q: "Range ces faits selon le royaume.", cases: ["Walo", "Cayor", "Rip"], items: [["suicide collectif des femmes de Nder", "Walo"], ["guerre contre les Maures du Trarza", "Walo"], ["Lat Dior devient Damel", "Cayor"], ["bataille de Dékheulé", "Cayor"], ["guerre sainte de Maba Diakhou Ba", "Rip"], ["bataille de Pathé Badiane", "Rip"]], expl: "Chaque fait appartient à la ligne d'un royaume du tableau." },
      { t: "vf", q: "Le Baol a gagné son indépendance après la bataille de Danki.", r: true, expl: "Comme le Cayor, le Baol se libère du Djolof après Danki." },
      { t: "qcm", q: "Lequel de ces souverains n'est PAS un Bour ?", choix: ["le souverain du Walo", "le souverain du Sine", "le souverain du Saloum"], r: "le souverain du Walo", expl: "Le souverain du Walo est le Brack." }
    ],
    [
      { t: "trous", q: "Complète.", texte: "Le Djolof avait pour capitale [Yang-Yang] et son souverain était le [Bourba]. En [1549], il fut battu à Danki par l'armée du [Cayor].", expl: "Le Djolof dominait les autres royaumes jusqu'à Danki." },
      { t: "probleme", q: "Le Djolof a été battu à Danki en 1549. Lat Dior est devenu Damel en 1862.", etapes: [{ q: "Combien d'années séparent ces deux événements ?", r: "313", unite: "ans" }], expl: "1862 − 1549 = 313 ans." },
      { t: "classer", q: "Range ces royaumes selon le titre de leur souverain.", cases: ["Bour", "Almamy", "autre titre"], items: [["Sine", "Bour"], ["Saloum", "Bour"], ["Tékrour", "Almamy"], ["Rip", "Almamy"], ["Walo", "autre titre"], ["Cayor", "autre titre"]], expl: "Bour : Sine et Saloum. Almamy : Tékrour et Rip. Walo : Brack ; Cayor : Damel." },
      { t: "qcm", q: "Quelle capitale va avec le souverain appelé Tègne ?", choix: ["Lambaye", "Mboul", "Diakhao", "Nioro"], r: "Lambaye", expl: "Le Tègne régnait sur le Baol, capitale Lambaye." },
      { t: "relier", q: "Relie chaque fondateur à son royaume.", paires: [["Ndiadiane Ndiaye", "Djolof"], ["Barka Mbodj", "Walo"], ["Meïssa Waly Dione", "Sine"], ["Mbégane Ndour", "Saloum"]], expl: "Les fondateurs cités dans le tableau." }
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
      { t: "relier", q: "Ne confonds pas les dates : relie chaque événement à son année.", paires: [["Kirina", "1235"], ["Danki", "1549"], ["conquête du Songhaï par les Marocains", "1591"]], expl: "Kirina : Soundiata (Mali). Danki : Amary Ngoné Sobel Fall (Sénégal). 1591 : fin de la puissance songhaï." },
      { t: "probleme", q: "La bataille de Kirina a eu lieu en 1235 et celle de Danki en 1549.", etapes: [{ q: "Combien d'années séparent ces deux batailles ?", r: "314", unite: "ans" }], expl: "1549 − 1235 = 314." },
      { t: "qcm", q: "Lequel de ces noms n'est PAS un royaume du Sénégal cité dans la leçon ?", choix: ["Niani", "Cayor", "Walo", "Sine"], r: "Niani", expl: "Niani est la capitale de l'empire du Mali." },
      { t: "vf", q: "Après la victoire de Danki, le Djolof est devenu encore plus puissant.", r: false, expl: "Au contraire, ses royaumes vassaux ont commencé à se libérer." }
    ]
  ]
});


/* ---- hi-senegal-apres-arrivee-blancs.js ---- */
// À VÉRIFIER : la photocopie dit que les Blancs « instaurent la colonisation et l'esclavage ». La traite des esclaves a commencé bien avant la colonisation et la France a aboli l'esclavage dans ses colonies en 1848 : formulation gardée dans le résumé, mais aucune question n'est posée dessus.
// Correction : « Ils vont lutter promouvoir le christianisme » → « Ils vont promouvoir le christianisme ».
LECONS.push({
  id: "hi-senegal-apres-arrivee-blancs",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Le Sénégal après l'arrivée des Blancs",
  date: "2026-11-19",
  photos: ["2026-11-19_04.jpg"],
  retiens:
    "<p>Avec l'arrivée des Blancs, les <b>royaumes</b> sont attaqués et les <b>souverains</b> vaincus, exilés ou parfois tués.</p>" +
    "<p>Les Blancs imposent leur système politique et instaurent la <b>colonisation</b> et l'esclavage.</p>" +
    "<p>Le Sénégal était dirigé par un <b>gouverneur français</b>. La colonie était divisée en <b>cercles</b>. Chaque cercle était divisé en <b>subdivisions</b> ; chaque subdivision était divisée en <b>cantons</b> et chaque canton en <b>villages</b>.</p>" +
    "<p>Les Blancs vont aussi créer des <b>écoles</b>, des <b>routes</b>, des <b>hôpitaux</b>. Ils vont promouvoir le <b>christianisme</b>.</p>",
  astuce: "Du plus grand au plus petit : <b>colonie → cercle → subdivision → canton → village</b>. Comme des boîtes rangées les unes dans les autres.",
  regle: "Après l'arrivée des Blancs, les royaumes du Sénégal sont vaincus et le pays devient une colonie dirigée par un gouverneur français, divisée en cercles, subdivisions, cantons et villages.",
  niveaux: [
    [
      { t: "qcm", q: "Que deviennent les royaumes du Sénégal avec l'arrivée des Blancs ?", choix: ["Ils sont attaqués.", "Ils deviennent plus puissants.", "Ils restent en paix."], r: "Ils sont attaqués.", expl: "Les royaumes sont attaqués et les souverains vaincus." },
      { t: "qcm", q: "Qui dirigeait le Sénégal pendant la colonisation ?", choix: ["un gouverneur français", "un roi du Cayor", "un président sénégalais"], r: "un gouverneur français", expl: "Le Sénégal était dirigé par un gouverneur français." },
      { t: "vf", q: "Certains souverains vaincus ont été exilés ou parfois tués.", r: true, expl: "Les souverains sont vaincus, exilés ou parfois tués." },
      { t: "qcm", q: "En quoi la colonie était-elle d'abord divisée ?", choix: ["en cercles", "en régions", "en quartiers"], r: "en cercles", expl: "La colonie était divisée en cercles." },
      { t: "vf", q: "Les Blancs ont créé des écoles, des routes et des hôpitaux.", r: true, expl: "C'est ce que dit la leçon." }
    ],
    [
      { t: "ordre", q: "Range du plus grand au plus petit.", r: "colonie cercle subdivision canton village", expl: "La colonie est divisée en cercles, les cercles en subdivisions, les subdivisions en cantons, les cantons en villages." },
      { t: "trous", q: "Complète.", texte: "Chaque cercle était divisé en [subdivisions] ; chaque subdivision en [cantons] et chaque canton en [villages].", expl: "Du plus grand au plus petit : cercle, subdivision, canton, village." },
      { t: "saisie", q: "Quelle religion les Blancs ont-ils voulu promouvoir ?", r: ["le christianisme", "christianisme"], expl: "Ils vont promouvoir le christianisme." },
      { t: "classer", q: "Range ces faits.", cases: ["ce qui arrive aux royaumes", "ce que créent les Blancs"], items: [["les royaumes sont attaqués", "ce qui arrive aux royaumes"], ["les souverains sont vaincus", "ce qui arrive aux royaumes"], ["les souverains sont exilés", "ce qui arrive aux royaumes"], ["des écoles", "ce que créent les Blancs"], ["des routes", "ce que créent les Blancs"], ["des hôpitaux", "ce que créent les Blancs"]], expl: "D'un côté la défaite des royaumes, de l'autre ce que les colons construisent." },
      { t: "qcm", q: "Quel système politique s'installe au Sénégal ?", choix: ["la colonisation", "la démocratie", "le matrilignage"], r: "la colonisation", expl: "Les Blancs imposent leur système politique : la colonisation." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["souverain", "roi qui gouverne un royaume"], ["exilé", "obligé de quitter son pays"], ["gouverneur", "chef qui dirige la colonie"], ["colonie", "pays dominé par un autre pays"]], expl: "Les mots-clés de la leçon." },
      { t: "saisie", q: "Le Sénégal était dirigé par un gouverneur de quel pays ? (adjectif)", r: "français", expl: "Un gouverneur français." },
      { t: "vf", q: "Un canton est plus grand qu'un cercle.", r: false, expl: "C'est l'inverse : un cercle est divisé en subdivisions, puis en cantons." }
    ],
    [
      { t: "qcm", q: "Qu'est-ce qui est le plus petit ?", choix: ["le village", "le canton", "la subdivision", "le cercle"], r: "le village", expl: "Le canton est divisé en villages : le village est la plus petite division." },
      { t: "qcm", q: "Une subdivision est une partie…", choix: ["d'un cercle", "d'un canton", "d'un village"], r: "d'un cercle", expl: "Chaque cercle était divisé en subdivisions." },
      { t: "vf", q: "Avant l'arrivée des Blancs, le Sénégal était formé de plusieurs royaumes.", r: true, expl: "Revois la leçon « Les royaumes du Sénégal » : Cayor, Baol, Walo, Sine, Saloum…" },
      { t: "qcm", q: "« Les souverains sont exilés. » Cela veut dire qu'ils sont…", choix: ["obligés de partir loin de leur pays", "nommés gouverneurs", "devenus plus riches"], r: "obligés de partir loin de leur pays", expl: "Être exilé, c'est être chassé de son pays." },
      { t: "relier", q: "Relie chaque division à ce qu'elle contient.", paires: [["la colonie", "des cercles"], ["un cercle", "des subdivisions"], ["une subdivision", "des cantons"], ["un canton", "des villages"]], expl: "Chaque division contient la suivante, plus petite." },
      { t: "qcm", q: "Pourquoi peut-on dire que les rois ont perdu leur pouvoir ?", choix: ["parce que le pays est dirigé par un gouverneur français", "parce qu'ils ont construit des routes", "parce qu'ils sont devenus chrétiens"], r: "parce que le pays est dirigé par un gouverneur français", expl: "Les Blancs imposent leur système politique : c'est le gouverneur qui dirige." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Avec l'arrivée des Blancs, les [royaumes] sont attaqués et les souverains [vaincus]. Le Sénégal devient une [colonie] dirigée par un [gouverneur] français. Elle est divisée en [cercles], puis en subdivisions, en cantons et en villages.", expl: "Toute la leçon en un texte." },
      { t: "classer", q: "Avant ou après l'arrivée des Blancs ?", cases: ["avant", "après"], items: [["le roi est choisi par le matrilignage", "avant"], ["un gouverneur français dirige le pays", "après"], ["la victoire de Danki (1549)", "avant"], ["le pays est divisé en cercles", "après"], ["le Cayor et le Baol sont des royaumes libres", "avant"], ["des souverains sont exilés", "après"]], expl: "Avant : les royaumes et leurs rois. Après : la colonie, le gouverneur et ses divisions." },
      { t: "qcm", q: "Pendant la colonisation, un village faisait partie…", choix: ["d'un canton", "d'un royaume", "d'une école"], r: "d'un canton", expl: "Chaque canton était divisé en villages." },
      { t: "qcm", q: "Laquelle de ces phrases résume le mieux la leçon ?", choix: ["Les royaumes sont vaincus et le Sénégal devient une colonie française.", "Le Sénégal devient indépendant.", "Les royaumes du Sénégal s'unissent contre le Djolof."], r: "Les royaumes sont vaincus et le Sénégal devient une colonie française.", expl: "C'est l'idée principale de la leçon." },
      { t: "vf", q: "Pendant la colonisation, chaque village appartenait à un canton.", r: true, expl: "Chaque canton était divisé en villages." }
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


/* ---- ist-balance.js ---- */
LECONS.push({
  id: "ist-balance",
  cahier: "sciences",
  matiere: "IST",
  titre: "La balance",
  date: "2026-10-13",
  photos: ["DJI_20261118221940_0132_D.jpg"],
  retiens:
    "<p>La <b>balance</b> est un <b>instrument de mesure</b> qui sert à connaître la <b>masse</b> des objets.</p>" +
    "<p>Il existe différentes sortes de balances : la <b>balance Roberval</b> (à deux plateaux), la <b>balance électronique</b>, la <b>balance romaine</b>, la <b>bascule</b>, le <b>pèse-bébé</b>…</p>" +
    "<p>Les qualités d'une bonne balance sont la <b>justesse</b>, la <b>sensibilité</b> et la <b>fidélité</b>.</p>",
  astuce: "Une bonne balance est <b>J S F</b> : <b>J</b>uste, <b>S</b>ensible, <b>F</b>idèle.",
  regle: "La balance est un instrument qui mesure la masse des objets. Une bonne balance est juste, sensible et fidèle.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert une balance ?", choix: ["à connaître la masse des objets", "à mesurer une longueur", "à connaître l'heure"], r: "à connaître la masse des objets", expl: "La balance mesure la masse." },
      { t: "qcm", q: "La balance est…", choix: ["un instrument de mesure", "un appareil de cuisine", "un outil du maçon"], r: "un instrument de mesure", expl: "Elle mesure la masse." },
      { t: "vf", q: "La balance Roberval a deux plateaux.", r: true, expl: "C'est celle de la photocopie du cahier." },
      { t: "qcm", q: "Combien de qualités d'une bonne balance cite la leçon ?", choix: ["trois", "deux", "cinq"], r: "trois", expl: "La justesse, la sensibilité et la fidélité." },
      { t: "vf", q: "On utilise une règle pour connaître la masse d'un sac de riz.", r: false, expl: "La règle mesure les longueurs ; pour la masse, il faut une balance." }
    ],
    [
      { t: "classer", q: "Est-ce une sorte de balance ?", cases: ["sorte de balance", "autre instrument"], items: [["la balance Roberval", "sorte de balance"], ["la bascule", "sorte de balance"], ["le pèse-bébé", "sorte de balance"], ["la règle", "autre instrument"], ["la balance romaine", "sorte de balance"], ["le thermomètre", "autre instrument"]], expl: "La règle mesure les longueurs, le thermomètre la température." },
      { t: "saisie", q: "Quelle balance utilise-t-on au dispensaire pour peser un nourrisson ?", r: ["le pèse-bébé", "pèse-bébé", "un pèse-bébé"], expl: "Le pèse-bébé." },
      { t: "trous", q: "Complète.", texte: "Les qualités d'une bonne balance sont la [justesse], la [sensibilité] et la [fidélité].", expl: "Trois qualités : J, S, F." },
      { t: "qcm", q: "Quelle grandeur mesure la balance ?", choix: ["la masse", "la longueur", "la durée"], r: "la masse", expl: "La masse s'exprime en grammes, en kilogrammes…" },
      { t: "qcm", q: "Laquelle de ces balances a deux plateaux ?", choix: ["la balance Roberval", "la balance électronique", "le pèse-bébé"], r: "la balance Roberval", expl: "La balance Roberval a deux plateaux." },
      { t: "vf", q: "La balance électronique est une sorte de balance.", r: true, expl: "Elle est citée dans la leçon." },
      { t: "saisie", q: "Comment s'appelle la balance à deux plateaux de la leçon ? La balance …", r: "Roberval", expl: "La balance Roberval." },
      { t: "qcm", q: "Laquelle de ces balances n'est PAS citée dans la leçon ?", choix: ["la balance à ressort de poche", "la balance romaine", "la bascule", "le pèse-bébé"], r: "la balance à ressort de poche", expl: "La leçon cite la balance Roberval, la balance électronique, la balance romaine, la bascule et le pèse-bébé." },
    ],
    [
      { t: "qcm", q: "Une balance qui montre toujours le même résultat quand on pèse plusieurs fois le même objet est…", choix: ["fidèle", "cassée", "romaine"], r: "fidèle", expl: "Fidèle : elle redonne toujours le même résultat." },
      { t: "qcm", q: "Une balance qui donne la masse exacte de l'objet est…", choix: ["juste", "lourde", "fidèle seulement"], r: "juste", expl: "La justesse, c'est donner la vraie masse." },
      { t: "qcm", q: "Une balance qui réagit même pour un tout petit objet est…", choix: ["sensible", "juste", "électronique"], r: "sensible", expl: "La sensibilité, c'est réagir à une très petite masse." },
      { t: "vf", q: "Une balance qui indique 2 kg pour un sac de 5 kg est juste.", r: false, expl: "Elle n'est pas juste : elle ne donne pas la vraie masse." },
      { t: "relier", q: "Relie chaque qualité à sa signification.", paires: [["la justesse", "donne la vraie masse"], ["la sensibilité", "réagit à une très petite masse"], ["la fidélité", "redonne toujours le même résultat"]], expl: "Les trois qualités d'une bonne balance." },
      { t: "saisie", q: "Que mesure-t-on avec une balance ? La …", r: "masse", expl: "La masse des objets." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La balance est un instrument de [mesure] qui sert à connaître la [masse] des objets. Une bonne balance est juste, [sensible] et fidèle.", expl: "Toute la leçon." },
      { t: "qcm", q: "Au marché, Fatou pèse trois fois le même sac de mangues : la balance indique 3 kg, puis 4 kg, puis 2 kg. Quelle qualité manque à cette balance ?", choix: ["la fidélité", "la couleur", "la taille"], r: "la fidélité", expl: "Une balance fidèle redonne toujours le même résultat pour le même objet." },
      { t: "qcm", q: "Au dispensaire de Ziguinchor, l'infirmière pèse le petit frère d'Awa. Quelle balance utilise-t-elle ?", choix: ["le pèse-bébé", "la bascule des camions", "la balance romaine du boucher"], r: "le pèse-bébé", expl: "Le pèse-bébé est fait pour les nourrissons." },
      { t: "vf", q: "La justesse, la sensibilité et la fidélité sont les trois qualités d'une bonne balance.", r: true, expl: "C'est exactement la leçon." },
      { t: "classer", q: "Défi : qualité d'une balance ou sorte de balance ?", cases: ["qualité", "sorte de balance"], items: [["la justesse", "qualité"], ["la balance romaine", "sorte de balance"], ["la fidélité", "qualité"], ["la bascule", "sorte de balance"], ["la sensibilité", "qualité"], ["la balance électronique", "sorte de balance"]], expl: "Ne confonds pas les qualités et les sortes de balances." }
    ]
  ]
});


/* ---- ist-manipulation-appareils.js ---- */
// À VÉRIFIER : la date et le point 1 (téléviseur) sont flous sur la photo 0134 ; la phrase sur le téléviseur est remise au propre d'après le sens probable. La fin de la page (« des aliments… ») est coupée.
LECONS.push({
  id: "ist-manipulation-appareils",
  cahier: "sciences",
  matiere: "IST",
  titre: "La manipulation d'appareils simples",
  date: "2026-11-06",
  photos: ["DJI_20261118221956_0134_D.jpg"],
  retiens:
    "<p>1. Le <b>téléviseur</b> reçoit les émissions par les <b>ondes</b>. On le commande avec une <b>télécommande</b> ou avec des boutons situés sur l'appareil.</p>" +
    "<p>2. L'<b>appareil photo numérique</b> capte la <b>lumière</b> et en fait une photographie que l'on voit sur un écran.</p>" +
    "<p>3. Le <b>téléphone</b> est un appareil qui sert à <b>communiquer</b> avec des personnes éloignées.</p>" +
    "<p>4. La <b>cuisinière</b> comporte une <b>table de cuisson</b> et un <b>four</b> ; elle fonctionne au <b>gaz</b> ou à l'<b>électricité</b>. Elle permet de faire cuire les aliments.</p>" +
    "<p>5. Le <b>réfrigérateur</b> a <b>deux compartiments</b> : l'un sert à <b>refroidir</b>, l'autre à <b>congeler</b>. Le congélateur descend à <b>−18 °C</b>, ce qui permet de conserver longtemps les aliments.</p>",
  astuce: "Le congélateur, c'est <b>moins dix-huit</b> : bien plus froid que la glace qui fond à 0 °C.",
  regle: "Chaque appareil a sa fonction : le téléviseur reçoit les ondes, l'appareil photo capte la lumière, le téléphone communique au loin, la cuisinière cuit, le réfrigérateur refroidit et congèle.",
  niveaux: [
    [
      { t: "qcm", q: "Comment le téléviseur reçoit-il les émissions ?", choix: ["par les ondes", "par la poste", "par un tuyau d'eau"], r: "par les ondes", expl: "Le téléviseur reçoit les émissions par les ondes." },
      { t: "qcm", q: "À quoi sert le téléphone ?", choix: ["à communiquer avec des personnes éloignées", "à cuire les aliments", "à conserver la viande"], r: "à communiquer avec des personnes éloignées", expl: "On parle à quelqu'un qui est loin." },
      { t: "qcm", q: "Que capte l'appareil photo numérique ?", choix: ["la lumière", "le son", "la chaleur"], r: "la lumière", expl: "Il capte la lumière et en fait une photo visible sur un écran." },
      { t: "vf", q: "La cuisinière peut fonctionner au gaz ou à l'électricité.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "relier", q: "Relie chaque appareil à sa fonction.", paires: [["le téléviseur", "recevoir les émissions"], ["le téléphone", "communiquer de loin"], ["la cuisinière", "cuire les aliments"], ["le réfrigérateur", "refroidir et congeler"]], expl: "Chaque appareil a son rôle." }
    ],
    [
      { t: "saisie", q: "Le congélateur descend à « moins combien » de degrés ? Écris le nombre sans le signe moins.", r: "18", nombre: true, unite: "°C", expl: "Le congélateur descend à −18 °C." },
      { t: "qcm", q: "Combien de compartiments a le réfrigérateur ?", choix: ["deux", "un", "quatre"], r: "deux", expl: "Un pour refroidir, un pour congeler." },
      { t: "classer", q: "Range les parties.", cases: ["cuisinière", "réfrigérateur"], items: [["la table de cuisson", "cuisinière"], ["le four", "cuisinière"], ["le compartiment qui refroidit", "réfrigérateur"], ["le congélateur", "réfrigérateur"]], expl: "La cuisinière cuit ; le réfrigérateur garde au froid." },
      { t: "qcm", q: "Avec quoi peut-on commander le téléviseur sans se lever ?", choix: ["la télécommande", "la souris", "la truelle"], r: "la télécommande", expl: "On peut aussi utiliser les boutons sur l'appareil." },
      { t: "trous", q: "Complète.", texte: "La cuisinière comporte une table de [cuisson] et un [four].", expl: "Les deux parties de la cuisinière." },
      { t: "vf", q: "L'appareil photo numérique montre la photo sur un écran.", r: true, expl: "La photo se voit sur l'écran." },
      { t: "saisie", q: "Quel appareil sert à appeler sa tante qui habite à Saint-Louis ?", r: ["le téléphone", "un téléphone", "téléphone"], expl: "Le téléphone sert à communiquer avec des personnes éloignées." },
      { t: "qcm", q: "Pourquoi met-on la viande au congélateur ?", choix: ["pour la conserver longtemps", "pour la cuire", "pour la rendre chaude"], r: "pour la conserver longtemps", expl: "À −18 °C, les aliments se conservent longtemps." },
      { t: "vf", q: "Le réfrigérateur sert à faire cuire les aliments.", r: false, expl: "Il refroidit et congèle. C'est la cuisinière qui cuit." }
    ],
    [
      { t: "qcm", q: "Quel compartiment du réfrigérateur est le plus froid ?", choix: ["le congélateur", "le compartiment qui refroidit", "ils ont la même température"], r: "le congélateur", expl: "Le congélateur descend à −18 °C pour congeler." },
      { t: "vf", q: "Le téléviseur se commande seulement avec une télécommande.", r: false, expl: "On peut aussi utiliser les boutons situés sur l'appareil." },
      { t: "qcm", q: "La maman de Fatou n'a pas d'électricité ce soir. Peut-elle utiliser sa cuisinière ?", choix: ["oui, si sa cuisinière fonctionne au gaz", "non, jamais", "oui, avec la télécommande"], r: "oui, si sa cuisinière fonctionne au gaz", expl: "Une cuisinière peut fonctionner au gaz ou à l'électricité." },
      { t: "vf", q: "L'appareil photo numérique reçoit les émissions par les ondes, comme le téléviseur.", r: false, expl: "L'appareil photo capte la lumière ; c'est le téléviseur qui reçoit les ondes." },
      { t: "saisie", q: "Comment s'appelle le compartiment du réfrigérateur qui descend à −18 °C ?", r: "le congélateur", expl: "Le congélateur." },
      { t: "qcm", q: "Que comporte la cuisinière en plus de la table de cuisson ?", choix: ["un four", "un écran", "une antenne"], r: "un four", expl: "Table de cuisson et four." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le téléviseur reçoit les émissions par les [ondes]. L'appareil photo numérique capte la [lumière]. Le [téléphone] sert à communiquer avec des personnes éloignées. Le congélateur descend à −[18] °C.", expl: "Toute la leçon." },
      { t: "relier", q: "Relie chaque situation à l'appareil qui convient.", paires: [["garder du poisson pendant un mois", "le congélateur"], ["faire cuire un gâteau", "le four de la cuisinière"], ["photographier sa classe", "l'appareil photo numérique"], ["regarder un match de football", "le téléviseur"]], expl: "On choisit l'appareil selon sa fonction." },
      { t: "qcm", q: "Ibrahima veut garder des jus de bissap bien frais, mais pas gelés. Où les met-il ?", choix: ["dans le compartiment qui refroidit", "dans le congélateur", "dans le four"], r: "dans le compartiment qui refroidit", expl: "Le congélateur ferait geler les jus ; l'autre compartiment les refroidit seulement." },
      { t: "vf", q: "À −18 °C, l'eau est gelée.", r: true, expl: "L'eau gèle à 0 °C ; à −18 °C, il fait beaucoup plus froid." },
      { t: "classer", q: "Défi : range ces appareils.", cases: ["sert à communiquer ou à s'informer", "sert à préparer ou conserver les aliments"], items: [["le téléphone", "sert à communiquer ou à s'informer"], ["le téléviseur", "sert à communiquer ou à s'informer"], ["la cuisinière", "sert à préparer ou conserver les aliments"], ["le réfrigérateur", "sert à préparer ou conserver les aliments"]], expl: "Deux grandes familles d'usages." }
    ]
  ]
});


/* ---- ist-objets-naturels-techniques.js ---- */
LECONS.push({
  id: "ist-objets-naturels-techniques",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les objets naturels et les objets techniques",
  date: "2026-09-15",
  photos: ["DJI_20261118221756_0123_D.jpg"],
  retiens:
    "<p>On appelle <b>objet</b> toute chose concrète <b>non vivante</b>, considérée comme un tout.</p>" +
    "<p>On distingue <b>deux types d'objets</b> :</p>" +
    "<ul><li>les <b>objets naturels</b> : ils ne sont <b>pas modifiés par l'homme</b> et sont présents dans la nature. Exemples : un caillou, l'eau, une branche… ;</li>" +
    "<li>les <b>objets techniques</b> : ils sont <b>fabriqués par l'homme</b> dans un but utile, comme la truelle, la scie, les ciseaux, le vélo… Ces objets existent parce que l'homme en a besoin.</li></ul>",
  astuce: "Pose-toi la question : « Quelqu'un l'a-t-il fabriqué ? » Oui → objet <b>technique</b>. Non, on le trouve tel quel dans la nature → objet <b>naturel</b>.",
  regle: "Un objet naturel se trouve dans la nature sans être modifié par l'homme ; un objet technique est fabriqué par l'homme pour être utile.",
  niveaux: [
    [
      { t: "qcm", q: "Un objet, c'est une chose concrète…", choix: ["non vivante", "vivante", "imaginaire"], r: "non vivante", expl: "Un objet est une chose concrète non vivante." },
      { t: "qcm", q: "Combien de types d'objets distingue-t-on ?", choix: ["deux", "trois", "quatre"], r: "deux", expl: "Les objets naturels et les objets techniques." },
      { t: "vf", q: "Un caillou est un objet naturel.", r: true, expl: "Personne ne l'a fabriqué : on le trouve dans la nature." },
      { t: "vf", q: "Une scie est un objet naturel.", r: false, expl: "La scie est fabriquée par l'homme : c'est un objet technique." },
      { t: "qcm", q: "Qui fabrique les objets techniques ?", choix: ["l'homme", "la pluie", "les arbres"], r: "l'homme", expl: "Les objets techniques sont fabriqués par l'homme dans un but utile." },
      { t: "classer", q: "Range ces objets.", cases: ["objet naturel", "objet technique"], items: [["un caillou", "objet naturel"], ["une truelle", "objet technique"], ["l'eau de la rivière", "objet naturel"], ["un vélo", "objet technique"], ["une branche", "objet naturel"], ["des ciseaux", "objet technique"]], expl: "Fabriqué par l'homme : technique. Trouvé tel quel dans la nature : naturel." }
    ],
    [
      { t: "classer", q: "Range ces nouveaux objets.", cases: ["objet naturel", "objet technique"], items: [["un coquillage sur la plage", "objet naturel"], ["une pirogue", "objet technique"], ["le sable de la plage", "objet naturel"], ["un seau", "objet technique"], ["une pierre", "objet naturel"], ["une table", "objet technique"]], expl: "La pirogue, le seau et la table ont été fabriqués par l'homme." },
      { t: "qcm", q: "Lequel de ces objets est un objet technique ?", choix: ["un marteau", "une feuille tombée d'un arbre", "un caillou"], r: "un marteau", expl: "Le marteau a été fabriqué par l'homme." },
      { t: "qcm", q: "Lequel de ces objets est un objet naturel ?", choix: ["un coquillage", "une chaise", "un téléphone"], r: "un coquillage", expl: "Le coquillage se trouve dans la nature sans être modifié." },
      { t: "trous", q: "Complète.", texte: "Les objets [naturels] ne sont pas modifiés par l'homme. Les objets [techniques] sont fabriqués par l'homme.", expl: "Les deux types d'objets." },
      { t: "saisie", q: "Comment appelle-t-on un objet fabriqué par l'homme dans un but utile ? Un objet …", r: "technique", expl: "Un objet technique." },
      { t: "saisie", q: "Comment appelle-t-on un objet présent dans la nature, que l'homme n'a pas modifié ? Un objet …", r: "naturel", expl: "Un objet naturel." },
      { t: "vf", q: "Les objets techniques existent parce que l'homme en a besoin.", r: true, expl: "Ils sont fabriqués dans un but utile." },
      { t: "vf", q: "Une chèvre est un objet naturel.", r: false, expl: "Une chèvre est vivante. Un objet est une chose non vivante." }
    ],
    [
      { t: "qcm", q: "Moussa ramasse une branche, puis il la taille pour en faire un manche de pioche. Le manche est…", choix: ["un objet technique", "un objet naturel", "un être vivant"], r: "un objet technique", expl: "La branche était naturelle, mais une fois modifiée par l'homme, elle devient un objet technique." },
      { t: "vf", q: "Un arbre vivant est un objet naturel.", r: false, expl: "Un arbre vivant est un être vivant. Un objet est non vivant ; une branche cassée et sèche, elle, est un objet naturel." },
      { t: "qcm", q: "Pourquoi le vélo est-il un objet technique ?", choix: ["parce que l'homme l'a fabriqué pour se déplacer", "parce qu'il pousse dans la nature", "parce qu'il est vivant"], r: "parce que l'homme l'a fabriqué pour se déplacer", expl: "Il est fabriqué dans un but utile." },
      { t: "classer", q: "Range ces mots.", cases: ["objet naturel", "objet technique", "être vivant"], items: [["un caillou", "objet naturel"], ["un mouton", "être vivant"], ["une scie", "objet technique"], ["un manguier", "être vivant"], ["l'eau", "objet naturel"], ["une truelle", "objet technique"]], expl: "Les êtres vivants ne sont pas des objets." },
      { t: "qcm", q: "Quelle est la question à se poser pour savoir si un objet est technique ?", choix: ["A-t-il été fabriqué par l'homme ?", "Est-il lourd ?", "Est-il de couleur bleue ?"], r: "A-t-il été fabriqué par l'homme ?", expl: "C'est ce qui distingue un objet technique d'un objet naturel." },
      { t: "vf", q: "Une calebasse vidée et décorée pour servir de récipient est un objet technique.", r: true, expl: "L'homme l'a transformée dans un but utile." }
    ],
    [
      { t: "trous", q: "Complète la définition.", texte: "On appelle objet toute chose concrète non [vivante]. Les objets naturels sont présents dans la [nature]. Les objets techniques sont [fabriqués] par l'homme dans un but utile.", expl: "Toute la leçon en trois phrases." },
      { t: "classer", q: "Défi : dans la maison de Fatou, range ces objets.", cases: ["objet naturel", "objet technique"], items: [["un coquillage ramassé à la plage", "objet naturel"], ["la télévision", "objet technique"], ["un galet", "objet naturel"], ["le réchaud à gaz", "objet technique"], ["une plume tombée", "objet naturel"], ["la marmite", "objet technique"]], expl: "Fabriqué par l'homme : technique." },
      { t: "qcm", q: "Laquelle de ces phrases est juste ?", choix: ["La truelle est un objet technique, la branche est un objet naturel.", "La truelle est un objet naturel, la branche est un objet technique.", "La truelle et la branche sont des objets naturels."], r: "La truelle est un objet technique, la branche est un objet naturel.", expl: "La truelle est fabriquée ; la branche vient de la nature." },
      { t: "vf", q: "Le sable devient un objet technique quand on le mélange au ciment pour faire une brique.", r: true, expl: "La brique est fabriquée par l'homme : c'est un objet technique." },
      { t: "qcm", q: "Pourquoi l'homme fabrique-t-il des objets techniques ?", choix: ["parce qu'il en a besoin", "pour remplacer la nature", "par hasard"], r: "parce qu'il en a besoin", expl: "Ces objets existent parce que l'homme en a besoin." }
    ]
  ]
});


/* ---- ist-ordinateur.js ---- */
LECONS.push({
  id: "ist-ordinateur",
  cahier: "sciences",
  matiere: "IST",
  titre: "L'ordinateur",
  date: "2026-10-20",
  photos: ["DJI_20261118221940_0132_D.jpg", "DJI_20261118221950_0133_D.jpg"],
  retiens:
    "<p>L'<b>ordinateur</b> permet de <b>stocker</b> des informations, de <b>communiquer</b> et de faire des travaux de toutes sortes.</p>" +
    "<p>Les différentes parties d'un ordinateur sont : l'<b>unité centrale</b> (UC), l'<b>écran</b> (moniteur), le <b>clavier</b> et la <b>souris</b>.</p>" +
    "<p>Les <b>périphériques</b> d'un ordinateur sont : la <b>clé USB</b>, l'<b>imprimante</b>, le <b>scanner</b>, le <b>modem</b>.</p>" +
    "<p>Pour faire fonctionner un ordinateur fixe :</p>" +
    "<ul><li>il faut allumer l'<b>UC</b>, puis l'<b>écran</b> ;</li><li>attendre que tout s'affiche, puis commencer à travailler.</li></ul>" +
    "<p><b>NB</b> : tous les éléments de l'ordinateur fixe sont réunis dans l'<b>ordinateur portable</b>.</p>",
  astuce: "Les 4 parties : <b>U</b>C, <b>É</b>cran, <b>C</b>lavier, <b>S</b>ouris. Les périphériques s'ajoutent autour : clé USB, imprimante, scanner, modem.",
  regle: "Un ordinateur fixe a quatre parties : l'unité centrale, l'écran, le clavier et la souris. On allume d'abord l'UC, puis l'écran.",
  niveaux: [
    [
      { t: "qcm", q: "Que permet de faire un ordinateur ?", choix: ["stocker des informations, communiquer, faire des travaux", "seulement regarder la télévision", "cuire les aliments"], r: "stocker des informations, communiquer, faire des travaux", expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Que veut dire UC ?", choix: ["unité centrale", "unité de couleur", "union des claviers"], r: "unité centrale", expl: "UC = unité centrale." },
      { t: "vf", q: "L'écran s'appelle aussi le moniteur.", r: true, expl: "L'écran (moniteur)." },
      { t: "qcm", q: "Lequel de ces éléments est une partie de l'ordinateur fixe ?", choix: ["le clavier", "le réfrigérateur", "la truelle"], r: "le clavier", expl: "UC, écran, clavier, souris." },
      { t: "vf", q: "Dans l'ordinateur portable, tous les éléments de l'ordinateur fixe sont réunis.", r: true, expl: "C'est le NB de la leçon." }
    ],
    [
      { t: "classer", q: "Partie de l'ordinateur ou périphérique ?", cases: ["partie de l'ordinateur", "périphérique"], items: [["l'unité centrale", "partie de l'ordinateur"], ["la clé USB", "périphérique"], ["le clavier", "partie de l'ordinateur"], ["l'imprimante", "périphérique"], ["la souris", "partie de l'ordinateur"], ["le scanner", "périphérique"]], expl: "Les 4 parties : UC, écran, clavier, souris. Les périphériques : clé USB, imprimante, scanner, modem." },
      { t: "qcm", q: "Que faut-il allumer en premier ?", choix: ["l'unité centrale", "l'écran", "l'imprimante"], r: "l'unité centrale", expl: "On allume l'UC, puis l'écran." },
      { t: "saisie", q: "Combien de parties a l'ordinateur fixe d'après la leçon ?", r: "4", nombre: true, expl: "L'UC, l'écran, le clavier et la souris." },
      { t: "relier", q: "Relie chaque élément à son usage.", paires: [["le clavier", "taper des lettres"], ["l'écran", "voir ce qu'on fait"], ["l'imprimante", "sortir une feuille imprimée"], ["la clé USB", "emporter des fichiers"]], expl: "Chaque élément a son rôle." },
      { t: "trous", q: "Complète.", texte: "Pour faire fonctionner l'ordinateur fixe, il faut allumer l'[UC] puis l'[écran].", expl: "L'ordre de mise en marche." },
      { t: "vf", q: "Le modem est un périphérique de l'ordinateur.", r: true, expl: "Clé USB, imprimante, scanner, modem." },
      { t: "saisie", q: "Comment s'appelle aussi l'écran de l'ordinateur ?", r: "le moniteur", expl: "Le moniteur." },
      { t: "qcm", q: "Que fait-on après avoir allumé l'UC et l'écran ?", choix: ["attendre que tout s'affiche, puis travailler", "débrancher la souris", "éteindre l'UC"], r: "attendre que tout s'affiche, puis travailler", expl: "C'est la deuxième étape." }
    ],
    [
      { t: "vf", q: "Pour démarrer un ordinateur fixe, on allume d'abord l'écran, puis l'unité centrale.", r: false, expl: "C'est l'inverse : l'UC d'abord, puis l'écran." },
      { t: "qcm", q: "Moussa veut imprimer son exposé. De quel périphérique a-t-il besoin ?", choix: ["une imprimante", "un scanner", "un modem"], r: "une imprimante", expl: "L'imprimante sort le document sur papier." },
      { t: "qcm", q: "Khady veut mettre une photo papier dans l'ordinateur. Quel périphérique utilise-t-elle ?", choix: ["le scanner", "l'imprimante", "la clé USB"], r: "le scanner", expl: "Le scanner fait passer une image papier dans l'ordinateur." },
      { t: "classer", q: "Range ces éléments.", cases: ["partie de l'ordinateur", "périphérique", "n'appartient pas à l'ordinateur"], items: [["l'écran", "partie de l'ordinateur"], ["le modem", "périphérique"], ["le réchaud", "n'appartient pas à l'ordinateur"], ["la souris", "partie de l'ordinateur"], ["la clé USB", "périphérique"], ["le marteau", "n'appartient pas à l'ordinateur"]], expl: "Révise les parties et les périphériques." },
      { t: "saisie", q: "Quel périphérique branche-t-on pour emporter ses fichiers dans sa poche ? La clé …", r: "USB", expl: "La clé USB." },
      { t: "vf", q: "Un ordinateur portable n'a pas de clavier.", r: false, expl: "Il réunit tous les éléments de l'ordinateur fixe, clavier compris." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Les parties d'un ordinateur sont l'unité [centrale], l'écran, le [clavier] et la [souris]. Les périphériques sont la clé USB, l'imprimante, le [scanner] et le modem.", expl: "Toute la leçon." },
      { t: "relier", q: "Remets la mise en marche dans l'ordre : relie chaque étape à son numéro.", paires: [["1", "allumer l'unité centrale"], ["2", "allumer l'écran"], ["3", "attendre que tout s'affiche"], ["4", "commencer à travailler"]], expl: "UC, écran, attendre, travailler." },
      { t: "qcm", q: "Pourquoi l'ordinateur portable est-il pratique pour voyager ?", choix: ["parce que tous les éléments sont réunis dans un seul appareil", "parce qu'il n'a pas besoin d'écran", "parce qu'il fonctionne au gaz"], r: "parce que tous les éléments sont réunis dans un seul appareil", expl: "C'est le NB de la leçon." },
      { t: "vf", q: "L'ordinateur est un appareil électronique, car il traite l'information.", r: true, expl: "Tu l'as vu dans la leçon sur les types d'appareils." },
      { t: "qcm", q: "Lequel n'est PAS un périphérique cité dans la leçon ?", choix: ["la souris", "l'imprimante", "le scanner", "le modem"], r: "la souris", expl: "La souris est une des quatre parties de l'ordinateur, pas un périphérique." }
    ]
  ]
});


/* ---- ist-outils-marteau-tenailles-pince.js ---- */
// À VÉRIFIER : la légende du rond central des tenailles est peu lisible (« le point ? », photo 0129) ; elle n'est pas utilisée. L'étape 3 de l'arrachage d'un clou est recopiée telle qu'au cahier (« appuyer sur l'axe »).
LECONS.push({
  id: "ist-outils-marteau-tenailles-pince",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les outils simples : le marteau, les tenailles, la pince universelle",
  date: "2026-09-29",
  photos: ["DJI_20261118221859_0127_D.jpg", "DJI_20261118221915_0129_D.jpg"],
  retiens:
    "<p>Le <b>marteau</b> sert à <b>enfoncer un clou</b> ou à <b>battre le fer</b>. L'effet d'un coup de marteau s'appelle l'<b>effet de choc</b>.<br>Ses parties : la <b>table</b> (la face plate qui frappe), la <b>panne</b> (le côté étroit de la tête) et le manche.</p>" +
    "<p>Les <b>tenailles</b> servent à <b>arracher un clou</b> selon la technique suivante :</p>" +
    "<ul><li>1. écarter les branches ;</li><li>2. saisir la tête du clou entre les mâchoires ;</li><li>3. appuyer sur l'axe ;</li><li>4. exercer une pression vers le bas.</li></ul>" +
    "<p>Ses parties : les <b>branches</b> et les <b>mâchoires</b>.</p>" +
    "<p>La <b>pince universelle</b> est un outil qui a <b>plusieurs fonctions</b> : elle sert à <b>serrer</b> deux objets pour les tirer et les maintenir ; elle sert aussi à <b>couper</b> ou à <b>enlever des clous</b>.<br>Ses parties : la <b>mâchoire</b> et les <b>branches</b>.</p>",
  astuce: "Le marteau <b>enfonce</b>, les tenailles <b>arrachent</b>, la pince universelle fait un peu <b>tout</b> (d'où son nom).",
  regle: "Le marteau enfonce les clous (effet de choc) ; les tenailles arrachent les clous ; la pince universelle serre, maintient, coupe et enlève les clous.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert le marteau ?", choix: ["à enfoncer un clou", "à arracher un clou", "à couper du papier"], r: "à enfoncer un clou", expl: "Il sert aussi à battre le fer." },
      { t: "qcm", q: "À quoi servent les tenailles ?", choix: ["à arracher un clou", "à enfoncer un clou", "à étaler le mortier"], r: "à arracher un clou", expl: "On saisit la tête du clou entre les mâchoires et on tire." },
      { t: "qcm", q: "Pourquoi dit-on que la pince est « universelle » ?", choix: ["parce qu'elle a plusieurs fonctions", "parce qu'elle vient de l'univers", "parce qu'elle est très grande"], r: "parce qu'elle a plusieurs fonctions", expl: "Elle serre, maintient, coupe et enlève les clous." },
      { t: "vf", q: "L'effet d'un coup de marteau s'appelle l'effet de choc.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "relier", q: "Relie chaque outil à son usage principal.", paires: [["le marteau", "enfoncer un clou"], ["les tenailles", "arracher un clou"], ["la pince universelle", "serrer, couper, maintenir"]], expl: "Trois outils, trois usages." }
    ],
    [
      { t: "relier", q: "Relie chaque étape à son numéro pour arracher un clou avec les tenailles.", paires: [["étape 1", "écarter les branches"], ["étape 2", "saisir la tête du clou entre les mâchoires"], ["étape 3", "appuyer sur l'axe"], ["étape 4", "exercer une pression vers le bas"]], expl: "C'est la technique de la leçon, dans l'ordre." },
      { t: "classer", q: "Range ces parties.", cases: ["marteau", "tenailles"], items: [["la table", "marteau"], ["la panne", "marteau"], ["les mâchoires", "tenailles"], ["les branches", "tenailles"]], expl: "Le marteau a une table et une panne ; les tenailles ont des mâchoires et des branches." },
      { t: "qcm", q: "Quelle partie du marteau frappe le clou ?", choix: ["la table", "la panne", "la mâchoire"], r: "la table", expl: "La table est la face plate de la tête du marteau." },
      { t: "saisie", q: "Quel outil prends-tu pour enfoncer un clou dans une planche ?", r: ["le marteau", "un marteau", "marteau"], expl: "Le marteau enfonce les clous." },
      { t: "saisie", q: "Quel outil prends-tu pour arracher un clou tordu ?", r: ["les tenailles", "des tenailles", "tenailles"], expl: "Les tenailles arrachent les clous." },
      { t: "vf", q: "La pince universelle peut aussi couper.", r: true, expl: "Elle sert à couper ou à enlever des clous." },
      { t: "trous", q: "Complète.", texte: "Les tenailles saisissent la tête du clou entre les [mâchoires]. Il faut d'abord écarter les [branches].", expl: "Les deux parties des tenailles." },
      { t: "qcm", q: "Que fait-on en dernier pour arracher un clou avec les tenailles ?", choix: ["exercer une pression vers le bas", "écarter les branches", "saisir la tête du clou"], r: "exercer une pression vers le bas", expl: "C'est l'étape 4." },
      { t: "vf", q: "Le marteau sert aussi à battre le fer.", r: true, expl: "Le forgeron bat le fer avec un marteau." }
    ],
    [
      { t: "qcm", q: "Que fait-on juste avant de saisir la tête du clou ?", choix: ["écarter les branches", "exercer une pression vers le bas", "appuyer sur l'axe"], r: "écarter les branches", expl: "Étape 1 : écarter les branches ; étape 2 : saisir le clou." },
      { t: "vf", q: "Les tenailles servent à enfoncer les clous.", r: false, expl: "Elles servent à les arracher. C'est le marteau qui enfonce." },
      { t: "qcm", q: "Le papa de Moussa veut tenir fermement un petit fil de fer et le couper. Quel outil choisit-il ?", choix: ["la pince universelle", "le marteau", "la truelle"], r: "la pince universelle", expl: "Elle serre, maintient et coupe." },
      { t: "classer", q: "Range ces actions.", cases: ["marteau", "tenailles", "pince universelle"], items: [["enfoncer un clou", "marteau"], ["battre le fer", "marteau"], ["arracher un clou", "tenailles"], ["maintenir deux objets serrés", "pince universelle"], ["couper un fil", "pince universelle"]], expl: "Chaque outil a ses fonctions." },
      { t: "saisie", q: "Comment s'appelle l'effet d'un coup de marteau ? L'effet de …", r: "choc", expl: "L'effet de choc." },
      { t: "qcm", q: "Comment s'appelle le côté étroit de la tête du marteau ?", choix: ["la panne", "la table", "la branche"], r: "la panne", expl: "La table est la face plate ; la panne est le côté étroit." },
      { t: "vf", q: "La pince universelle a une mâchoire et des branches.", r: true, expl: "C'est ce que montre le dessin du cahier." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le [marteau] enfonce les clous. Les [tenailles] arrachent les clous. La pince [universelle] a plusieurs fonctions : serrer, couper, enlever des clous.", expl: "Les trois outils de la leçon." },
      { t: "qcm", q: "Ibrahima a planté un clou au mauvais endroit. Que doit-il faire ?", choix: ["l'arracher avec les tenailles, puis le replanter avec le marteau", "le couper avec des ciseaux", "l'étaler avec la truelle"], r: "l'arracher avec les tenailles, puis le replanter avec le marteau", expl: "Les tenailles arrachent, le marteau enfonce." },
      { t: "relier", q: "Défi : relie chaque partie à son outil.", paires: [["la table", "le marteau"], ["les mâchoires qui saisissent le clou", "les tenailles"], ["les dents", "la scie"], ["les deux lames mobiles", "les ciseaux"]], expl: "Tu révises aussi la leçon sur la scie et les ciseaux." },
      { t: "vf", q: "Le marteau, les tenailles et la pince sont des objets techniques.", r: true, expl: "Ils sont fabriqués par l'homme dans un but utile." },
      { t: "qcm", q: "Dans quel ordre fait-on les deux premières étapes avec les tenailles ?", choix: ["écarter les branches, puis saisir la tête du clou", "saisir la tête du clou, puis écarter les branches", "appuyer vers le bas, puis écarter les branches"], r: "écarter les branches, puis saisir la tête du clou", expl: "Il faut ouvrir les tenailles avant de saisir le clou." }
    ]
  ]
});


/* ---- ist-outils-truelle-scie-ciseaux.js ---- */
// À VÉRIFIER : sur le dessin des ciseaux (photo 0125), les légendes « le rivet » et « la branche » semblent mal placées (« rivet » au bout d'une lame). Elles ne sont ni reprises dans la leçon ni utilisées en exercice ; seules « lame » et « poignée » sont gardées.
LECONS.push({
  id: "ist-outils-truelle-scie-ciseaux",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les outils technologiques simples : truelle, scie, ciseaux",
  date: "2026-09-23",
  photos: ["DJI_20261118221806_0124_D.jpg", "DJI_20261118221812_0125_D.jpg", "DJI_20261118221828_0126_D.jpg"],
  retiens:
    "<p>La <b>truelle</b> est une petite pelle à main qui sert à <b>étendre ou racler le plâtre ou le mortier</b> (mélange de sable, de ciment et d'eau…). C'est un outil de base du <b>maçon</b>.<br>Ses parties : la <b>lame</b> et le <b>manche</b>.</p>" +
    "<p>La <b>scie</b> est une <b>lame dentelée</b> en acier, munie d'un manche en bois, que l'on utilise pour <b>couper des matériaux durs</b> comme le bois.<br>Ses parties : le <b>dos</b>, les <b>dents</b>, la <b>lame</b> et le <b>manche</b>.</p>" +
    "<p>Les <b>ciseaux</b> sont composés de <b>deux lames mobiles</b> et articulées, qui glissent l'une sur l'autre pour <b>trancher les matériaux minces</b> (tissu, papier…).<br>On y reconnaît les <b>lames</b> et les <b>poignées</b>.</p>",
  astuce: "Truelle → <b>t</b>ravaux du maçon ; scie → <b>dur</b> (bois) ; ciseaux → <b>mince</b> (papier, tissu).",
  regle: "La truelle étend le mortier, la scie coupe les matériaux durs comme le bois, les ciseaux tranchent les matériaux minces comme le papier et le tissu.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert la truelle ?", choix: ["à étendre ou racler le mortier", "à couper le bois", "à couper le papier"], r: "à étendre ou racler le mortier", expl: "C'est l'outil de base du maçon." },
      { t: "qcm", q: "À quoi sert la scie ?", choix: ["à couper des matériaux durs comme le bois", "à étendre le plâtre", "à couper les cheveux"], r: "à couper des matériaux durs comme le bois", expl: "Sa lame dentelée coupe le bois." },
      { t: "qcm", q: "À quoi servent les ciseaux ?", choix: ["à trancher les matériaux minces comme le papier", "à couper un tronc d'arbre", "à étaler du ciment"], r: "à trancher les matériaux minces comme le papier", expl: "Tissu, papier… sont des matériaux minces." },
      { t: "vf", q: "La truelle est un outil du maçon.", r: true, expl: "C'est même son outil de base." },
      { t: "relier", q: "Relie chaque outil à son usage.", paires: [["la truelle", "étendre le mortier"], ["la scie", "couper le bois"], ["les ciseaux", "couper le papier"]], expl: "Chaque outil a son travail." }
    ],
    [
      { t: "classer", q: "Range les parties de chaque outil.", cases: ["scie", "truelle"], items: [["le dos", "scie"], ["les dents", "scie"], ["la lame triangulaire", "truelle"], ["le manche coudé", "truelle"]], expl: "La scie a un dos, des dents, une lame, un manche ; la truelle a une lame et un manche." },
      { t: "qcm", q: "Combien de lames ont les ciseaux ?", choix: ["deux", "une", "trois"], r: "deux", expl: "Deux lames mobiles qui glissent l'une sur l'autre." },
      { t: "saisie", q: "Avec quel outil Awa découpe-t-elle une image dans un journal ?", r: ["les ciseaux", "des ciseaux", "ciseaux"], expl: "Le papier est un matériau mince : on utilise les ciseaux." },
      { t: "saisie", q: "Avec quel outil le menuisier coupe-t-il une planche ?", r: ["la scie", "une scie", "scie"], expl: "Le bois est un matériau dur : on utilise la scie." },
      { t: "saisie", q: "Avec quel outil le maçon étale-t-il le mortier entre les briques ?", r: ["la truelle", "une truelle", "truelle"], expl: "C'est la truelle." },
      { t: "trous", q: "Complète.", texte: "La scie est une lame [dentelée] en acier munie d'un [manche] en bois.", expl: "C'est la définition de la scie." },
      { t: "vf", q: "Le mortier est un mélange de sable, de ciment et d'eau.", r: true, expl: "La truelle sert à l'étendre." },
      { t: "qcm", q: "En quelle matière est la lame de la scie ?", choix: ["en acier", "en plastique", "en papier"], r: "en acier", expl: "Une lame dentelée en acier." },
      { t: "relier", q: "Relie chaque matériau à l'outil qui le coupe ou l'étale.", paires: [["le tissu", "les ciseaux"], ["une planche", "la scie"], ["le plâtre", "la truelle"]], expl: "Matériau mince, matériau dur, plâtre." }
    ],
    [
      { t: "qcm", q: "Pourquoi n'utilise-t-on pas les ciseaux pour couper une planche ?", choix: ["parce que les ciseaux tranchent seulement les matériaux minces", "parce que les ciseaux sont trop grands", "parce que les ciseaux n'ont pas de lame"], r: "parce que les ciseaux tranchent seulement les matériaux minces", expl: "Pour le bois, matériau dur, il faut la scie." },
      { t: "vf", q: "Les lames des ciseaux glissent l'une sur l'autre.", r: true, expl: "C'est ce qui leur permet de trancher." },
      { t: "qcm", q: "Quelle partie de la scie coupe le bois ?", choix: ["les dents", "le manche", "le dos"], r: "les dents", expl: "La lame est dentelée : ce sont les dents qui coupent." },
      { t: "qcm", q: "Quelle partie tient-on dans la main quand on utilise une truelle ?", choix: ["le manche", "la lame", "les dents"], r: "le manche", expl: "On tient le manche ; la lame étale le mortier." },
      { t: "classer", q: "Range ces matériaux.", cases: ["matériau mince", "matériau dur"], items: [["le papier", "matériau mince"], ["le bois", "matériau dur"], ["le tissu", "matériau mince"], ["une branche épaisse", "matériau dur"], ["le carton fin", "matériau mince"]], expl: "Mince : ciseaux. Dur : scie." },
      { t: "saisie", q: "Comment appelle-t-on le mélange de sable, de ciment et d'eau ?", r: "le mortier", expl: "Le mortier, étendu avec la truelle." },
      { t: "vf", q: "La scie et la truelle ont toutes les deux un manche.", r: true, expl: "On les tient par le manche." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La [truelle] sert à étendre le mortier. La [scie] coupe les matériaux durs comme le bois. Les [ciseaux] tranchent les matériaux minces comme le papier.", expl: "Trois outils, trois usages." },
      { t: "qcm", q: "Ibrahima construit un petit mur et doit aussi couper une planche pour la porte. De quels outils a-t-il besoin ?", choix: ["une truelle et une scie", "des ciseaux et une truelle", "seulement des ciseaux"], r: "une truelle et une scie", expl: "La truelle pour le mortier du mur, la scie pour la planche." },
      { t: "classer", q: "Défi : range ces parties.", cases: ["scie", "truelle", "ciseaux"], items: [["les dents", "scie"], ["le dos", "scie"], ["la lame triangulaire", "truelle"], ["les deux lames mobiles", "ciseaux"], ["les poignées", "ciseaux"]], expl: "Révise les dessins du cahier." },
      { t: "vf", q: "La truelle, la scie et les ciseaux sont des objets techniques.", r: true, expl: "Ils sont fabriqués par l'homme dans un but utile." },
      { t: "qcm", q: "Khady coud une robe. Pour couper le tissu, elle prend…", choix: ["des ciseaux", "une scie", "une truelle"], r: "des ciseaux", expl: "Le tissu est un matériau mince." }
    ]
  ]
});


/* ---- ist-types-appareils.js ---- */
// À VÉRIFIER : le titre et le début de cette leçon (définition des appareils électriques) sont sur la photo 0128, illisible ; la date est incertaine (début octobre 2026). La leçon « Le levier et la poulie » (même photo 0128) est illisible : seul le dessin légendé de la poulie (photo 0130) est repris ici ; rien n'est dit du levier.
LECONS.push({
  id: "ist-types-appareils",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les types d'appareils (et la poulie)",
  date: "2026-10-06",
  photos: ["DJI_20261118221922_0130_D.jpg", "DJI_20261118221927_0131_D.jpg"],
  retiens:
    "<p>Les <b>appareils électriques</b> fonctionnent avec le courant électrique et produisent par exemple le son, le froid, le mouvement… Ce courant peut provenir d'un <b>panneau solaire</b>. Exemples : la radio, le téléviseur, le ventilateur…</p>" +
    "<p>Les <b>appareils électroniques</b> s'occupent du <b>traitement de l'information</b>. Ils n'utilisent en général que des courants électriques faibles. Exemples : l'ordinateur, la tablette, le téléphone…</p>" +
    "<p>Les <b>appareils ménagers</b> servent à <b>préparer ou cuisiner les aliments</b>… Exemples : le réfrigérateur, la cuisinière, le réchaud à gaz, le grille-pain…</p>" +
    "<p>Les <b>appareils mécaniques</b> <b>transforment une force</b> qu'on leur applique en une force plus ou moins grande. Exemples : le vélo, la poulie, la brouette…</p>" +
    "<p><b>La poulie</b> (dessin du cahier) : elle est formée d'une <b>chape</b> (la pièce qui tient la roue, accrochée au crochet), d'une <b>roue à gorge</b> sur laquelle passe une <b>corde ou une chaîne</b> ; au bout de la corde, on accroche la <b>charge</b> (par exemple un seau).</p>",
  astuce: "<b>Électronique</b> → <b>information</b> (ordinateur, téléphone) ; <b>ménager</b> → la <b>cuisine</b> de la maison ; <b>mécanique</b> → la <b>force</b> des bras ou des jambes (vélo, brouette, poulie).",
  regle: "Appareils électriques : son, froid, mouvement (radio, ventilateur). Électroniques : information (ordinateur, téléphone). Ménagers : cuisine (cuisinière, réfrigérateur). Mécaniques : transforment une force (vélo, poulie, brouette).",
  niveaux: [
    [
      { t: "qcm", q: "À quoi servent les appareils électroniques ?", choix: ["au traitement de l'information", "à cuisiner", "à soulever des charges"], r: "au traitement de l'information", expl: "Ordinateur, tablette, téléphone traitent l'information." },
      { t: "qcm", q: "À quoi servent les appareils ménagers ?", choix: ["à préparer ou cuisiner les aliments", "à envoyer des messages", "à rouler"], r: "à préparer ou cuisiner les aliments", expl: "Réfrigérateur, cuisinière, réchaud à gaz, grille-pain." },
      { t: "qcm", q: "Que font les appareils mécaniques ?", choix: ["ils transforment une force en une force plus ou moins grande", "ils traitent l'information", "ils produisent du froid"], r: "ils transforment une force en une force plus ou moins grande", expl: "Vélo, poulie, brouette." },
      { t: "vf", q: "Le courant électrique peut provenir d'un panneau solaire.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "classer", q: "Range ces appareils.", cases: ["électronique", "mécanique"], items: [["l'ordinateur", "électronique"], ["le vélo", "mécanique"], ["la tablette", "électronique"], ["la brouette", "mécanique"], ["le téléphone", "électronique"], ["la poulie", "mécanique"]], expl: "Électronique : information. Mécanique : force." }
    ],
    [
      { t: "classer", q: "Range les exemples de la leçon.", cases: ["électrique", "électronique", "ménager", "mécanique"], items: [["le ventilateur", "électrique"], ["la radio", "électrique"], ["l'ordinateur", "électronique"], ["le réchaud à gaz", "ménager"], ["le grille-pain", "ménager"], ["la brouette", "mécanique"]], expl: "Ce sont les exemples du cahier." },
      { t: "relier", q: "Relie chaque type d'appareil à sa fonction.", paires: [["électronique", "traiter l'information"], ["ménager", "préparer les aliments"], ["mécanique", "transformer une force"]], expl: "Chaque famille a sa fonction." },
      { t: "relier", q: "Relie chaque partie de la poulie à sa description.", paires: [["la chape", "tient la roue, sous le crochet"], ["la roue à gorge", "la roue qui tourne"], ["la corde ou la chaîne", "passe sur la roue"], ["la charge", "ce qu'on soulève"]], expl: "C'est le dessin de la poulie du cahier." },
      { t: "saisie", q: "Sur quelle sorte de roue passe la corde d'une poulie ? Une roue à …", r: "gorge", expl: "La roue à gorge a un creux où passe la corde." },
      { t: "qcm", q: "Le seau accroché au bout de la corde d'une poulie s'appelle…", choix: ["la charge", "la chape", "la gorge"], r: "la charge", expl: "La charge est ce qu'on soulève." },
      { t: "vf", q: "Le téléviseur est donné comme exemple d'appareil électrique.", r: true, expl: "Radio, téléviseur, ventilateur." },
      { t: "trous", q: "Complète.", texte: "Le vélo, la poulie et la brouette sont des appareils [mécaniques]. L'ordinateur et la tablette sont des appareils [électroniques].", expl: "Deux familles d'appareils." },
      { t: "qcm", q: "Les appareils électroniques utilisent en général…", choix: ["des courants électriques faibles", "des courants très forts", "uniquement du gaz"], r: "des courants électriques faibles", expl: "C'est ce que dit la leçon." },
      { t: "saisie", q: "Comment s'appelle la pièce de la poulie qui tient la roue ?", r: "la chape", expl: "La chape, accrochée au crochet." }
    ],
    [
      { t: "qcm", q: "Le réfrigérateur fonctionne à l'électricité. Dans quelle famille la leçon le range-t-elle ?", choix: ["les appareils ménagers", "les appareils mécaniques", "les appareils électroniques"], r: "les appareils ménagers", expl: "Il sert à conserver les aliments à la maison : la leçon le range dans les appareils ménagers." },
      { t: "qcm", q: "Pourquoi la brouette est-elle un appareil mécanique ?", choix: ["elle aide à transporter une charge lourde avec moins de force", "elle traite l'information", "elle produit du froid"], r: "elle aide à transporter une charge lourde avec moins de force", expl: "Elle transforme la force qu'on lui applique." },
      { t: "vf", q: "Une poulie fonctionne avec le courant électrique.", r: false, expl: "La poulie est un appareil mécanique : elle fonctionne avec la force de celui qui tire la corde." },
      { t: "classer", q: "Range ces appareils de la maison d'Aïssatou.", cases: ["électronique", "ménager"], items: [["la tablette", "électronique"], ["la cuisinière", "ménager"], ["le téléphone", "électronique"], ["le réfrigérateur", "ménager"], ["l'ordinateur", "électronique"], ["le grille-pain", "ménager"]], expl: "Électronique : information. Ménager : cuisine." },
      { t: "qcm", q: "Quel appareil produit du mouvement pour rafraîchir la pièce ?", choix: ["le ventilateur", "la brouette", "la tablette"], r: "le ventilateur", expl: "Le ventilateur est un appareil électrique." },
      { t: "saisie", q: "D'où peut provenir le courant électrique, en plus du réseau ? D'un panneau …", r: "solaire", expl: "D'un panneau solaire." },
      { t: "vf", q: "Pour remonter un seau d'un puits, une poulie est utile.", r: true, expl: "La corde passe sur la roue à gorge et on tire la charge vers le haut." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Les appareils [électroniques] traitent l'information. Les appareils [ménagers] servent à préparer les aliments. Les appareils [mécaniques] transforment une force. Dans une poulie, la corde passe sur la roue à [gorge].", expl: "Toute la leçon." },
      { t: "classer", q: "Défi : range tous ces appareils.", cases: ["électrique", "électronique", "ménager", "mécanique"], items: [["la radio", "électrique"], ["le ventilateur", "électrique"], ["la tablette", "électronique"], ["le réchaud à gaz", "ménager"], ["le vélo", "mécanique"], ["la poulie", "mécanique"]], expl: "Révise les quatre familles." },
      { t: "qcm", q: "Mamadou remonte un seau d'eau du puits avec une corde passée sur une roue. Il utilise…", choix: ["une poulie, appareil mécanique", "un ordinateur, appareil électronique", "une cuisinière, appareil ménager"], r: "une poulie, appareil mécanique", expl: "Corde, roue, charge : c'est une poulie." },
      { t: "relier", q: "Relie chaque appareil à sa famille.", paires: [["le téléphone", "électronique"], ["la cuisinière", "ménager"], ["la brouette", "mécanique"], ["la radio", "électrique"]], expl: "Les exemples de la leçon." },
      { t: "vf", q: "Le vélo transforme la force des jambes du cycliste : c'est un appareil mécanique.", r: true, expl: "C'est un exemple d'appareil mécanique." }
    ]
  ]
});


/* ---- ma-geo-angles.js ---- */
// À VÉRIFIER : au cahier (photo 0071), l'angle aigu « mesure − 90° » et l'angle obtus « mesure + 90° ».
// Le module écrit « moins de 90° » et « plus de 90° » (un angle n'est jamais négatif), et précise que l'angle obtus reste plus petit qu'un angle plat (180°).
LECONS.push({
  id: "ma-geo-angles",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Les angles",
  date: "2026-10-01",
  photos: ["DJI_20261118220908_0070_D.jpg", "DJI_20261118220914_0071_D.jpg", "DJI_20261118220918_0072_D.jpg"],
  retiens:
    "<p>Un <b>angle</b> est l'écartement entre deux droites qui se coupent en un même point. Il existe 4 sortes d'angles :</p>" +
    "<table><tr><th>Angle</th><th>Mesure</th></tr>" +
    "<tr><td><b>droit</b></td><td>toujours 90° (degrés)</td></tr>" +
    "<tr><td><b>aigu</b></td><td>moins de 90° : il est plus petit qu'un angle droit</td></tr>" +
    "<tr><td><b>obtus</b></td><td>plus de 90° : il est plus grand qu'un angle droit (mais plus petit qu'un angle plat)</td></tr>" +
    "<tr><td><b>plat</b></td><td>180° : ses deux côtés forment une ligne droite</td></tr></table>" +
    "<p>NB : pour mesurer un angle, on prend une règle et un <b>rapporteur</b>.</p>",
  astuce: "Compare avec le coin d'une feuille (angle droit) : plus fermé, c'est <b>aigu</b> ; plus ouvert, c'est <b>obtus</b> ; tout à plat, c'est <b>plat</b>.",
  regle: "Angle droit = 90° ; aigu : moins de 90° ; obtus : plus de 90° (et moins de 180°) ; plat = 180°.",
  niveaux: [
    [
      { t: "qcm", q: "Combien mesure un angle droit ?", choix: ["90°", "180°", "45°", "100°"], r: "90°", expl: "Un angle droit mesure toujours 90°." },
      { t: "qcm", q: "Combien mesure un angle plat ?", choix: ["180°", "90°", "360°"], r: "180°", expl: "Un angle plat mesure 180° : ses côtés sont alignés." },
      { t: "qcm", q: "Un angle plus petit qu'un angle droit est…", choix: ["aigu", "obtus", "plat"], r: "aigu", expl: "L'angle aigu mesure moins de 90°." },
      { t: "qcm", q: "Un angle plus grand qu'un angle droit, mais plus petit qu'un angle plat, est…", choix: ["obtus", "aigu", "droit"], r: "obtus", expl: "L'angle obtus mesure plus de 90°." },
      { t: "qcm", q: "Quel instrument sert à mesurer un angle ?", choix: ["le rapporteur", "le compas", "la balance"], r: "le rapporteur", expl: "On mesure un angle avec une règle et un rapporteur." },
      { t: "relier", q: "Relie chaque angle à sa mesure.", paires: [["angle droit", "90°"], ["angle plat", "180°"], ["angle aigu", "moins de 90°"], ["angle obtus", "plus de 90°"]], expl: "Ce sont les 4 sortes d'angles de la leçon." }
    ],
    [
      { t: "classer", q: "Range chaque angle selon sa mesure.", cases: ["aigu", "droit", "obtus", "plat"], items: [["45°", "aigu"], ["90°", "droit"], ["120°", "obtus"], ["180°", "plat"], ["30°", "aigu"], ["150°", "obtus"], ["60°", "aigu"], ["100°", "obtus"]], expl: "Moins de 90° : aigu ; 90° : droit ; entre 90° et 180° : obtus ; 180° : plat." },
      { t: "saisie", q: "Un angle de 70° est un angle …", r: "aigu", expl: "70° est moins que 90° : angle aigu." },
      { t: "saisie", q: "Un angle de 135° est un angle …", r: "obtus", expl: "135° est plus que 90° : angle obtus." },
      { t: "saisie", q: "Un angle dont les deux côtés forment une ligne droite est un angle …", r: "plat", expl: "Côtés alignés : angle plat, 180°." },
      { t: "qcm", q: "Le coin d'une feuille de cahier forme un angle…", choix: ["droit", "aigu", "obtus"], r: "droit", expl: "Les bords d'une feuille sont perpendiculaires : angle droit." },
      { t: "qcm", q: "À 3 heures, les aiguilles d'une horloge forment un angle…", choix: ["droit", "plat", "aigu"], r: "droit", expl: "Une aiguille sur 12, l'autre sur 3 : un quart de tour, 90°." },
      { t: "qcm", q: "À 6 heures, les aiguilles d'une horloge forment un angle…", choix: ["plat", "droit", "obtus"], r: "plat", expl: "Une aiguille sur 12, l'autre sur 6 : elles forment une ligne droite, 180°." },
      { t: "trous", q: "Complète.", texte: "Un angle droit mesure [90]°. Un angle plat mesure [180]°. Un angle [aigu] est plus petit qu'un angle droit. Un angle [obtus] est plus grand qu'un angle droit.", expl: "Droit 90°, plat 180°, aigu plus petit, obtus plus grand." }
    ],
    [
      { t: "qcm", q: "Un angle de 89° est…", choix: ["aigu", "droit", "obtus"], r: "aigu", expl: "89° est un tout petit peu moins que 90° : il est aigu." },
      { t: "qcm", q: "Un angle de 91° est…", choix: ["obtus", "droit", "aigu"], r: "obtus", expl: "91° dépasse 90° : il est obtus." },
      { t: "qcm", q: "À 1 heure, les aiguilles d'une horloge forment un angle…", choix: ["aigu", "obtus", "droit"], r: "aigu", expl: "L'écart entre 12 et 1 est plus petit qu'un quart de tour : angle aigu." },
      { t: "qcm", q: "À 5 heures, les aiguilles d'une horloge forment un angle…", choix: ["obtus", "aigu", "plat"], r: "obtus", expl: "Entre 12 et 5, l'écart dépasse le quart de tour (3 h) sans atteindre le demi-tour (6 h) : angle obtus." },
      { t: "vf", q: "Un angle obtus peut mesurer 200°.", r: false, expl: "L'angle obtus est plus grand que l'angle droit mais plus petit que l'angle plat : entre 90° et 180°." },
      { t: "vf", q: "Deux angles droits mis côte à côte forment un angle plat.", r: true, expl: "90° + 90° = 180° : c'est un angle plat." },
      { t: "vf", q: "« Un angle aigu mesure − 90° » signifie qu'il mesure moins de 90°.", r: true, expl: "Le signe − de la classe veut dire « moins de ». Un angle n'est jamais négatif : on écrit « moins de 90° »." }
    ],
    [
      { t: "saisie", q: "Un angle plat est partagé en deux angles. L'un mesure 130°. L'autre mesure … °", r: "50", nombre: true, unite: "°", expl: "Un angle plat mesure 180° : 180 − 130 = 50°." },
      { t: "saisie", q: "Un angle droit est partagé en deux angles. L'un mesure 35°. L'autre mesure … °", r: "55", nombre: true, unite: "°", expl: "Un angle droit mesure 90° : 90 − 35 = 55°." },
      { t: "saisie", q: "La moitié d'un angle droit mesure … °", r: "45", nombre: true, unite: "°", expl: "90 : 2 = 45° : c'est un angle aigu." },
      { t: "classer", q: "Un angle plat est partagé en deux. Range chaque partie selon sa sorte.", cases: ["aigu", "droit", "obtus"], items: [["l'autre partie quand l'une mesure 150°", "aigu"], ["l'autre partie quand l'une mesure 90°", "droit"], ["l'autre partie quand l'une mesure 40°", "obtus"], ["l'autre partie quand l'une mesure 100°", "aigu"]], expl: "180 − 150 = 30° (aigu) ; 180 − 90 = 90° (droit) ; 180 − 40 = 140° (obtus) ; 180 − 100 = 80° (aigu)." },
      { t: "trous", q: "Complète la leçon.", texte: "Un angle est l'[écartement] entre deux droites qui se coupent en un même point. Pour mesurer un angle, je prends une règle et un [rapporteur].", expl: "Définition de l'angle et instrument de mesure, tels qu'au cahier." }
    ]
  ]
});


/* ---- ma-geo-carre.js ---- */
LECONS.push({
  id: "ma-geo-carre",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le carré : construction et propriétés",
  date: "2026-10-07",
  photos: ["DJI_20261118221008_0075_D.jpg"],
  retiens:
    "<p>Un <b>carré</b> est un quadrilatère (une figure à 4 côtés) qui a :</p>" +
    "<ul><li><b>4 côtés égaux</b> ;</li><li><b>4 angles droits</b> ;</li><li><b>4 sommets</b>.</li></ul>" +
    "<p>La <b>médiane</b> est le segment qui relie les milieux de deux côtés opposés. Le carré a 2 médianes.</p>" +
    "<p>La <b>diagonale</b> est le segment qui relie deux sommets opposés. Le carré a 2 diagonales.</p>" +
    "<p>Les médianes et les diagonales se coupent <b>au même point</b>, le centre du carré.</p>" +
    "<p>Exemple : dans le carré ABCD de 4 cm de côté (A en haut à gauche, B en haut à droite, C en bas à droite, D en bas à gauche), les diagonales sont [AC] et [BD].</p>" +
    "<p>Pour le construire sur ton cahier, on utilise la règle et l'équerre.</p>",
  astuce: "<b>Diagonale</b> : d'un coin au coin d'en face. <b>Médiane</b> : du milieu d'un côté au milieu du côté d'en face.",
  regle: "Le carré a 4 côtés égaux, 4 angles droits et 4 sommets. Diagonale : relie deux sommets opposés. Médiane : relie les milieux de deux côtés opposés.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de côtés égaux a un carré ?", choix: ["4", "2", "3"], r: "4", expl: "Le carré a 4 côtés égaux." },
      { t: "qcm", q: "Combien d'angles droits a un carré ?", choix: ["4", "2", "0"], r: "4", expl: "Les 4 angles du carré sont droits." },
      { t: "qcm", q: "Un quadrilatère est une figure qui a…", choix: ["4 côtés", "3 côtés", "5 côtés"], r: "4 côtés", expl: "quadri = quatre : un quadrilatère a 4 côtés." },
      { t: "qcm", q: "Le segment qui relie deux sommets opposés s'appelle…", choix: ["une diagonale", "une médiane", "un côté"], r: "une diagonale", expl: "La diagonale va d'un sommet au sommet opposé." },
      { t: "qcm", q: "Le segment qui relie les milieux de deux côtés opposés s'appelle…", choix: ["une médiane", "une diagonale", "un sommet"], r: "une médiane", expl: "La médiane relie les milieux de deux côtés opposés." },
      { t: "vf", q: "Les médianes et les diagonales d'un carré se coupent au même point.", r: true, expl: "Elles passent toutes par le centre du carré." }
    ],
    [
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["diagonale", "relie deux sommets opposés"], ["médiane", "relie les milieux de deux côtés opposés"], ["sommet", "point où deux côtés se rejoignent"], ["côté", "segment qui borde la figure"]], expl: "Ce sont les mots de la leçon." },
      { t: "saisie", q: "Combien de diagonales a un carré ?", r: "2", nombre: true, expl: "Il y a 2 paires de sommets opposés : 2 diagonales." },
      { t: "saisie", q: "Combien de médianes a un carré ?", r: "2", nombre: true, expl: "Il y a 2 paires de côtés opposés : 2 médianes." },
      { t: "saisie", q: "Combien de sommets a un carré ?", r: "4", nombre: true, expl: "Le carré a 4 sommets, un à chaque coin." },
      { t: "qcm", q: "Dans le carré ABCD, quel segment est une diagonale ?", choix: ["[AC]", "[AB]", "[BC]", "[CD]"], r: "[AC]", expl: "A et C sont des sommets opposés : [AC] est une diagonale. [AB], [BC], [CD] sont des côtés." },
      { t: "qcm", q: "Dans le carré ABCD, quel est le sommet opposé à B ?", choix: ["D", "A", "C"], r: "D", expl: "B est en haut à droite, D en bas à gauche : ils sont opposés. La diagonale est [BD]." },
      { t: "trous", q: "Complète.", texte: "Un carré est un quadrilatère qui a 4 côtés [égaux], 4 angles [droits] et 4 [sommets].", expl: "Ce sont les trois propriétés du carré." },
      { t: "classer", q: "Dans le carré ABCD, range chaque segment.", cases: ["côté", "diagonale"], items: [["[AB]", "côté"], ["[AC]", "diagonale"], ["[BC]", "côté"], ["[BD]", "diagonale"], ["[CD]", "côté"], ["[DA]", "côté"]], expl: "Un côté relie deux sommets voisins ; une diagonale relie deux sommets opposés." }
    ],
    [
      { t: "vf", q: "Une figure à 4 côtés égaux mais sans angle droit est un carré.", r: false, expl: "Il faut aussi 4 angles droits pour que ce soit un carré." },
      { t: "vf", q: "Une figure à 4 angles droits dont les côtés ne sont pas tous égaux est un carré.", r: false, expl: "Il faut aussi 4 côtés égaux. Sinon, c'est un rectangle." },
      { t: "qcm", q: "Une médiane d'un carré passe…", choix: ["par les milieux de deux côtés opposés", "par deux sommets opposés", "par un seul sommet"], r: "par les milieux de deux côtés opposés", expl: "C'est la diagonale qui passe par deux sommets opposés." },
      { t: "qcm", q: "Dans le carré ABCD, la médiane verticale relie…", choix: ["le milieu de [AB] et le milieu de [DC]", "A et C", "B et D"], r: "le milieu de [AB] et le milieu de [DC]", expl: "[AB] (en haut) et [DC] (en bas) sont des côtés opposés : la médiane relie leurs milieux." },
      { t: "saisie", q: "Combien de segments (médianes et diagonales) se coupent au centre du carré ?", r: "4", nombre: true, expl: "2 médianes + 2 diagonales = 4 segments, qui se coupent au même point." },
      { t: "qcm", q: "Quel instrument permet de vérifier qu'un angle du carré est droit ?", choix: ["l'équerre", "le compas", "la balance"], r: "l'équerre", expl: "On pose l'angle droit de l'équerre sur le coin du carré." }
    ],
    [
      { t: "trous", q: "Complète la leçon.", texte: "La médiane est le segment qui relie les [milieux] des côtés opposés. La diagonale est le segment qui relie deux [sommets] opposés. Les médianes et les diagonales se coupent au même [point].", expl: "Définitions du cahier." },
      { t: "saisie", q: "Le carré ABCD a 4 cm de côté. Combien mesure son périmètre ? … cm", r: "16", nombre: true, unite: "cm", expl: "4 côtés égaux : 4 × 4 = 16 cm." },
      { t: "saisie", q: "Le carré ABCD a 4 cm de côté. Une médiane relie les milieux de deux côtés opposés. Combien mesure-t-elle ? … cm", r: "4", nombre: true, unite: "cm", aide: "La médiane traverse le carré d'un côté à l'autre, bien droit.", expl: "La médiane va droit d'un côté au côté d'en face : elle a la longueur du côté, 4 cm." },
      { t: "qcm", q: "Awa décrit une figure : « 4 sommets, 4 côtés de 5 cm, et tous ses coins s'ajustent à l'angle droit de l'équerre. » C'est…", choix: ["un carré", "un rectangle non carré", "un triangle"], r: "un carré", expl: "4 côtés égaux et 4 angles droits : c'est un carré." },
      { t: "classer", q: "Vrai ou faux pour le carré ?", cases: ["vrai", "faux"], items: [["Il a 4 côtés égaux.", "vrai"], ["Il a 3 sommets.", "faux"], ["Il a 2 diagonales.", "vrai"], ["Ses médianes relient deux sommets.", "faux"], ["Il a 4 angles droits.", "vrai"], ["Ses diagonales et médianes se coupent au même point.", "vrai"]], expl: "Carré : 4 côtés égaux, 4 angles droits, 4 sommets, 2 diagonales, 2 médianes qui se coupent au centre." }
    ]
  ]
});


/* ---- ma-geo-cercle.js ---- */
// Début de la leçon retrouvé sur la photo 2026-11-25_29 (mercredi 25 novembre) ; figure sur 2026-11-25_19.
// Le cahier dit que la corde « ne passe pas par le centre » : en géométrie, le diamètre est la plus grande des cordes.
// Le module garde la leçon du cahier et ne pose aucune question piège là-dessus.
LECONS.push({
  id: "ma-geo-cercle",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le cercle",
  date: "2026-11-25",
  photos: ["2026-11-25_29.jpg", "2026-11-25_16.jpg", "2026-11-25_19.jpg"],
  retiens:
    "<p>Le <b>cercle</b> est une <b>ligne fermée</b> dont les points sont situés <b>à égale distance</b> d'un point appelé <b>centre du cercle</b>.</p>" +
    "<ul><li>Le <b>disque</b> est l'aire (la surface) délimitée par le cercle.</li>" +
    "<li>La <b>circonférence</b> ou <b>périmètre</b> est la longueur du cercle.</li>" +
    "<li>Le <b>rayon</b> est un segment qui joint le centre à un point du cercle.</li>" +
    "<li>Le <b>diamètre</b> est un segment qui passe par le centre et partage le cercle en 2 demi-cercles. Il mesure <b>2 fois le rayon</b>.</li>" +
    "<li>La <b>corde</b> joint deux points du cercle sans passer par le centre.</li>" +
    "<li>L'<b>arc</b> est la partie du cercle comprise entre deux points.</li></ul>" +
    "<p>Ex : pour construire un cercle de 8 cm de diamètre, on ouvre le compas de la moitié de 8 cm : le rayon mesure <b>4 cm</b>.</p>",
  astuce: "<b>Diamètre = rayon × 2</b> et <b>rayon = diamètre : 2</b>. Le compas s'ouvre toujours de la longueur du rayon.",
  regle: "Tous les points du cercle sont à la même distance du centre : c'est le rayon. Le diamètre passe par le centre et mesure deux rayons.",
  niveaux: [
    [
      { t: "qcm", q: "Comment s'appelle le point situé à égale distance de tous les points du cercle ?", choix: ["le centre", "le rayon", "l'arc"], r: "le centre", expl: "Tous les points du cercle sont à la même distance du centre." },
      { t: "qcm", q: "Le segment qui joint le centre à un point du cercle s'appelle…", choix: ["le rayon", "le diamètre", "la corde"], r: "le rayon", expl: "Le rayon va du centre jusqu'au cercle." },
      { t: "qcm", q: "La longueur du cercle s'appelle…", choix: ["la circonférence", "le disque", "le rayon"], r: "la circonférence", expl: "La circonférence, ou périmètre, est la longueur du cercle." },
      { t: "vf", q: "Le diamètre passe par le centre du cercle.", r: true, expl: "Il partage le cercle en 2 demi-cercles." },
      { t: "vf", q: "Le disque est la longueur du cercle.", r: false, expl: "Le disque est la surface ; la longueur, c'est la circonférence." }
    ],
    [
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["rayon", "du centre à un point du cercle"], ["diamètre", "passe par le centre"], ["corde", "joint deux points du cercle"], ["arc", "partie du cercle entre deux points"], ["disque", "surface du cercle"]], expl: "Les mots de la leçon." },
      { t: "saisie", q: "Un cercle a 8 cm de diamètre. Son rayon mesure…", r: "4", nombre: true, unite: "cm", expl: "Rayon = diamètre : 2 = 8 : 2 = 4 cm." },
      { t: "saisie", q: "Un cercle a 5 cm de rayon. Son diamètre mesure…", r: "10", nombre: true, unite: "cm", expl: "Diamètre = rayon × 2 = 5 × 2 = 10 cm." },
      { t: "saisie", q: "Diamètre : 12 cm. Rayon = …", r: "6", nombre: true, unite: "cm", expl: "12 : 2 = 6 cm." },
      { t: "qcm", q: "Pour tracer un cercle de 6 cm de diamètre, j'ouvre mon compas de…", choix: ["3 cm", "6 cm", "12 cm"], r: "3 cm", expl: "Le compas s'ouvre de la longueur du rayon : 6 : 2 = 3 cm." },
      { t: "qcm", q: "En combien de parties le diamètre partage-t-il le cercle ?", choix: ["2 demi-cercles", "3 parties", "4 quarts"], r: "2 demi-cercles", expl: "Le diamètre partage le cercle en 2 demi-cercles." },
      { t: "trous", q: "Complète.", nombre: true, texte: "rayon 7 cm → diamètre [14] cm — diamètre 20 cm → rayon [10] cm — rayon 2,5 cm → diamètre [5] cm", expl: "Diamètre = rayon × 2 ; rayon = diamètre : 2." },
      { t: "vf", q: "Tous les rayons d'un même cercle ont la même longueur.", r: true, expl: "Tous les points du cercle sont à égale distance du centre." }
    ],
    [
      { t: "saisie", q: "Diamètre : 9 cm. Rayon = …", r: "4,5", nombre: true, unite: "cm", expl: "9 : 2 = 4,5 cm." },
      { t: "qcm", q: "Combien de rayons mesure un diamètre ?", choix: ["2", "1", "4"], r: "2", expl: "Le diamètre va d'un bord à l'autre en passant par le centre : 2 rayons." },
      { t: "classer", q: "Longueur ou surface ?", cases: ["une longueur", "une surface"], items: [["le rayon", "une longueur"], ["le diamètre", "une longueur"], ["la circonférence", "une longueur"], ["le disque", "une surface"]], expl: "Seul le disque est une surface ; les autres se mesurent en cm, m…" },
      { t: "saisie", q: "Un rond-point a un rayon de 15 m. Quel est son diamètre ?", r: "30", nombre: true, unite: "m", expl: "15 × 2 = 30 m." },
      { t: "qcm", q: "Deux cercles : le premier a un rayon de 4 cm, le second un diamètre de 7 cm. Lequel est le plus grand ?", choix: ["le premier", "le second", "ils sont égaux"], r: "le premier", expl: "Premier : diamètre 4 × 2 = 8 cm, plus grand que 7 cm." },
      { t: "qcm", q: "La partie du cercle comprise entre deux points s'appelle…", choix: ["un arc", "une corde", "un rayon"], r: "un arc", expl: "L'arc est un morceau du cercle lui-même ; la corde est le segment droit qui joint les deux points." }
    ],
    [
      { t: "probleme", q: "Moussa trace un cercle de 10 cm de diamètre, puis un autre cercle de même centre dont le rayon est 2 cm plus long.", etapes: [{ q: "Étape 1 : rayon du premier cercle", r: "5", unite: "cm" }, { q: "Étape 2 : rayon du second cercle", r: "7", unite: "cm" }, { q: "Étape 3 : diamètre du second cercle", r: "14", unite: "cm" }], expl: "10 : 2 = 5 ; 5 + 2 = 7 ; 7 × 2 = 14 cm." },
      { t: "probleme", q: "Une table ronde a 1,2 m de diamètre. On veut la recouvrir d'une nappe ronde qui dépasse de 10 cm tout autour.", etapes: [{ q: "Étape 1 : rayon de la table en cm", r: "60", unite: "cm" }, { q: "Étape 2 : rayon de la nappe en cm", r: "70", unite: "cm" }, { q: "Étape 3 : diamètre de la nappe en cm", r: "140", unite: "cm" }], expl: "1,2 m = 120 cm ; 120 : 2 = 60 ; 60 + 10 = 70 ; 70 × 2 = 140 cm." },
      { t: "trous", q: "Complète la leçon.", texte: "Le [rayon] joint le centre à un point du cercle. Le [diamètre] passe par le centre. La longueur du cercle est la [circonférence]. La surface du cercle est le [disque].", expl: "Les quatre mots essentiels." },
      { t: "qcm", q: "Pour dessiner un cercle de 16 cm de diamètre sur le tableau, la maîtresse attache une craie à une ficelle. Quelle longueur de ficelle doit-elle laisser ?", choix: ["8 cm", "16 cm", "32 cm"], r: "8 cm", expl: "La ficelle joue le rôle du rayon : 16 : 2 = 8 cm." },
      { t: "vf", q: "Si deux cercles ont le même diamètre, ils ont aussi le même rayon.", r: true, expl: "Le rayon est toujours la moitié du diamètre." },
      { t: "qcm", q: "Le cercle est une ligne…", choix: ["fermée", "ouverte", "droite"], r: "fermée", expl: "Le cercle est une ligne fermée dont tous les points sont à égale distance du centre." },
      { t: "vf", q: "Sur la figure, le segment qui va du centre O au point A du cercle est un rayon.", r: true, expl: "Il joint le centre à un point du cercle." }
    ]
  ]
});


/* ---- ma-geo-droite-demi-droite-segment.js ---- */
LECONS.push({
  id: "ma-geo-droite-demi-droite-segment",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Droite, demi-droite, segment",
  date: "2026-09-17",
  photos: ["DJI_20261118220750_0062_D.jpg", "DJI_20261118220759_0063_D.jpg"],
  retiens:
    "<p><b>Une droite</b> est une suite illimitée de points alignés. Elle n'a <b>pas d'extrémités</b>. On la représente par une ligne continue, qu'on imagine prolongée des deux côtés. On la note avec des parenthèses : <b>(SV)</b> est une droite.</p>" +
    "<p><b>Une demi-droite</b> est une partie de droite limitée d'un côté par un point appelé <b>origine</b>, et illimitée de l'autre côté. On la note <b>[AC)</b> : le crochet est du côté de l'origine A.</p>" +
    "<p><b>Un segment</b> est une partie de droite limitée des deux côtés par deux points appelés <b>extrémités</b>. On le note avec deux crochets : <b>[AB]</b> est un segment. Un segment a une longueur qu'on peut mesurer, par exemple [AB] = 6 cm.</p>",
  astuce: "Regarde les signes : <b>( )</b> la ligne ne s'arrête jamais ; <b>[ )</b> elle s'arrête d'un seul côté ; <b>[ ]</b> elle s'arrête des deux côtés.",
  regle: "Droite : aucune extrémité, notée (AB). Demi-droite : une origine, notée [AB). Segment : deux extrémités, noté [AB].",
  niveaux: [
    [
      { t: "qcm", q: "Combien d'extrémités a une droite ?", choix: ["aucune", "une", "deux"], r: "aucune", expl: "La droite est illimitée des deux côtés : elle n'a pas d'extrémités." },
      { t: "qcm", q: "Combien d'extrémités a un segment ?", choix: ["deux", "une", "aucune"], r: "deux", expl: "Le segment est limité des deux côtés par deux points : ses extrémités." },
      { t: "qcm", q: "Le point qui limite une demi-droite s'appelle…", choix: ["l'origine", "le milieu", "le sommet"], r: "l'origine", expl: "La demi-droite est limitée d'un seul côté, par son origine." },
      { t: "relier", q: "Relie chaque notation à ce qu'elle désigne.", paires: [["(SV)", "une droite"], ["[AC)", "une demi-droite"], ["[AB]", "un segment"]], expl: "Parenthèses : droite. Un crochet et une parenthèse : demi-droite. Deux crochets : segment." },
      { t: "vf", q: "Une droite est une suite illimitée de points alignés.", r: true, expl: "C'est la définition de la leçon." },
      { t: "vf", q: "On peut mesurer la longueur d'une droite avec une règle.", r: false, expl: "Une droite est illimitée : elle n'a pas de longueur. On ne mesure que des segments." }
    ],
    [
      { t: "classer", q: "Droite, demi-droite ou segment ?", cases: ["droite", "demi-droite", "segment"], items: [["(MN)", "droite"], ["[MN]", "segment"], ["[MN)", "demi-droite"], ["(DE)", "droite"], ["[OX)", "demi-droite"], ["[CD]", "segment"]], expl: "( ) droite ; [ ) demi-droite ; [ ] segment." },
      { t: "saisie", q: "Les deux points qui limitent un segment s'appellent ses …", r: "extrémités", expl: "Un segment est limité par deux points appelés extrémités." },
      { t: "saisie", q: "Le point qui limite une demi-droite s'appelle son …", r: "origine", expl: "La demi-droite part de son origine et ne s'arrête pas de l'autre côté." },
      { t: "qcm", q: "Quelle notation désigne le segment d'extrémités E et F ?", choix: ["[EF]", "(EF)", "[EF)"], r: "[EF]", expl: "Segment : deux crochets." },
      { t: "qcm", q: "Dans la demi-droite [AC), quel point est l'origine ?", choix: ["A", "C", "aucun"], r: "A", expl: "Le crochet est placé du côté de l'origine : c'est A." },
      { t: "trous", q: "Complète.", texte: "Une droite n'a [pas] d'extrémités. Une demi-droite a [une] origine. Un segment a [deux] extrémités.", expl: "Droite : 0 extrémité ; demi-droite : 1 origine ; segment : 2 extrémités." },
      { t: "vf", q: "Un segment est une partie de droite.", r: true, expl: "On prend un morceau de droite entre deux points : c'est un segment." },
      { t: "vf", q: "Une demi-droite est limitée des deux côtés.", r: false, expl: "Elle n'est limitée que d'un côté, par son origine." }
    ],
    [
      { t: "qcm", q: "Un rayon de soleil part du soleil et file tout droit sans s'arrêter. À quoi ressemble-t-il ?", choix: ["une demi-droite", "un segment", "une droite"], r: "une demi-droite", expl: "Il a un point de départ (l'origine) mais pas de fin : c'est comme une demi-droite." },
      { t: "qcm", q: "Le bord d'une règle de 30 cm ressemble à…", choix: ["un segment", "une droite", "une demi-droite"], r: "un segment", expl: "Il a deux bouts et une longueur mesurable : c'est un segment." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["[AB] mesure 6 cm.", "(AB) mesure 6 cm.", "[AB) mesure 6 cm."], r: "[AB] mesure 6 cm.", expl: "Seul un segment a une longueur ; droites et demi-droites sont illimitées." },
      { t: "vf", q: "[AB) et [BA) désignent la même demi-droite.", r: false, expl: "[AB) a pour origine A ; [BA) a pour origine B. Elles partent dans des sens opposés." },
      { t: "vf", q: "[AB] et [BA] désignent le même segment.", r: true, expl: "Un segment a deux extrémités ; l'ordre des lettres ne change rien." },
      { t: "saisie", q: "Trois points A, B, C sont alignés dans cet ordre. Combien de segments peut-on nommer avec ces points ?", r: "3", nombre: true, aide: "Cherche toutes les paires de points.", expl: "[AB], [BC] et [AC] : 3 segments." }
    ],
    [
      { t: "trous", q: "Complète la leçon.", texte: "Une droite est une suite [illimitée] de points [alignés]. Une demi-droite est limitée d'un côté par un point appelé [origine]. Un segment est limité des deux côtés par deux points appelés [extrémités].", expl: "Ce sont les trois définitions du cahier." },
      { t: "classer", q: "Range chaque propriété.", cases: ["droite", "demi-droite", "segment"], items: [["aucune extrémité", "droite"], ["une seule origine", "demi-droite"], ["deux extrémités", "segment"], ["se mesure avec la règle", "segment"], ["notée (SV)", "droite"], ["notée [AC)", "demi-droite"]], expl: "Seul le segment, limité des deux côtés, a une longueur mesurable." },
      { t: "qcm", q: "Sur une droite, on place les points A, B et C. Combien de demi-droites ont pour origine B ?", choix: ["2", "1", "3"], r: "2", aide: "À partir de B, on peut partir vers A ou vers C.", expl: "[BA) et [BC) : deux demi-droites de même origine, dans des sens opposés." },
      { t: "saisie", q: "Sur une droite, A, B et C sont dans cet ordre, avec AB = 6 cm et BC = 4 cm. Longueur de [AC] = … cm", r: "10", nombre: true, unite: "cm", expl: "B est entre A et C : AC = 6 + 4 = 10 cm." },
      { t: "qcm", q: "Quelle figure peut-on tracer entièrement sur une feuille ?", choix: ["un segment", "une droite", "une demi-droite"], r: "un segment", expl: "Le segment s'arrête des deux côtés ; la droite et la demi-droite continuent sans fin : on n'en dessine qu'un morceau." }
    ]
  ]
});


/* ---- ma-geo-droites.js ---- */
// Date absente de la page (photo 0067) : leçon placée au vendredi 25 septembre 2026, entre la page du 23-25 septembre et celle du 28 septembre.
LECONS.push({
  id: "ma-geo-droites",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Les droites : sécantes, perpendiculaires, parallèles",
  date: "2026-09-25",
  photos: ["DJI_20261118220833_0067_D.jpg", "DJI_20261118220845_0068_D.jpg"],
  retiens:
    "<p>Des droites sont <b>sécantes</b> quand elles se coupent en un point.</p>" +
    "<p>Deux droites sont <b>perpendiculaires</b> quand elles sont sécantes en formant des <b>angles droits</b>.</p>" +
    "<p>Deux droites <b>parallèles</b> ne se rencontrent jamais : elles gardent le <b>même écartement</b> entre elles.</p>" +
    "<table><tr><th>Droites</th><th>Se coupent ?</th><th>Angles droits ?</th></tr>" +
    "<tr><td>sécantes</td><td>oui, en un point</td><td>pas forcément</td></tr>" +
    "<tr><td>perpendiculaires</td><td>oui, en un point</td><td>oui</td></tr>" +
    "<tr><td>parallèles</td><td>jamais</td><td>—</td></tr></table>",
  astuce: "Pense aux lettres : <b>X</b> = deux droites sécantes ; <b>T</b> ou <b>+</b> = perpendiculaires ; <b>=</b> = parallèles.",
  regle: "Sécantes : elles se coupent en un point. Perpendiculaires : elles se coupent en formant des angles droits. Parallèles : elles ne se rencontrent jamais et gardent le même écartement.",
  niveaux: [
    [
      { t: "qcm", q: "Deux droites qui se coupent en un point sont…", choix: ["sécantes", "parallèles", "confondues"], r: "sécantes", expl: "Se couper en un point, c'est la définition de droites sécantes." },
      { t: "qcm", q: "Deux droites qui ne se rencontrent jamais sont…", choix: ["parallèles", "sécantes", "perpendiculaires"], r: "parallèles", expl: "Les droites parallèles gardent le même écartement : elles ne se rencontrent jamais." },
      { t: "qcm", q: "Deux droites qui se coupent en formant des angles droits sont…", choix: ["perpendiculaires", "parallèles", "illimitées"], r: "perpendiculaires", expl: "Perpendiculaires = sécantes avec des angles droits." },
      { t: "relier", q: "Relie chaque lettre ou signe au type de droites qu'il rappelle.", paires: [["X", "sécantes"], ["T", "perpendiculaires"], ["=", "parallèles"]], expl: "X : deux traits qui se croisent en biais ; T : un angle droit ; = : deux traits qui ne se touchent jamais." },
      { t: "vf", q: "Deux droites parallèles gardent toujours le même écartement.", r: true, expl: "C'est ce qui les empêche de se rencontrer." },
      { t: "vf", q: "Deux droites parallèles se coupent très loin.", r: false, expl: "Des droites parallèles ne se rencontrent jamais, même très loin." }
    ],
    [
      { t: "classer", q: "Range chaque exemple de la vie courante.", cases: ["parallèles", "perpendiculaires"], items: [["les deux rails d'un chemin de fer", "parallèles"], ["le bord du haut et le bord de gauche d'une feuille", "perpendiculaires"], ["les lignes d'un cahier", "parallèles"], ["un poteau bien droit et le sol plat", "perpendiculaires"], ["les deux bords d'une route droite", "parallèles"], ["les deux traits de la croix d'une fenêtre", "perpendiculaires"]], expl: "Parallèles : même écartement, jamais de rencontre. Perpendiculaires : elles se coupent en formant un angle droit." },
      { t: "saisie", q: "Des droites qui se coupent en un point sont dites …", r: "sécantes", expl: "Sécantes : elles se coupent." },
      { t: "saisie", q: "Des droites qui ne se rencontrent jamais sont dites …", r: "parallèles", expl: "Parallèles : même écartement." },
      { t: "saisie", q: "Des droites sécantes qui forment des angles droits sont dites …", r: "perpendiculaires", expl: "Perpendiculaires : des angles droits à l'intersection." },
      { t: "qcm", q: "Deux droites perpendiculaires forment combien d'angles droits à leur point de rencontre ?", choix: ["4", "1", "2"], r: "4", expl: "Comme le signe +, elles forment 4 angles droits autour du point." },
      { t: "trous", q: "Complète.", texte: "Les droites (D1) et (D2) se coupent : elles sont [sécantes]. Si elles forment des angles droits, elles sont [perpendiculaires]. Les droites (D3) et (D4) ne se rencontrent jamais : elles sont [parallèles].", expl: "Sécantes, perpendiculaires, parallèles." },
      { t: "qcm", q: "Quel outil permet de vérifier que deux droites sont perpendiculaires ?", choix: ["l'équerre", "le compas", "le rapporteur seul"], r: "l'équerre", expl: "L'équerre a un angle droit : on la pose au point de rencontre pour vérifier." },
      { t: "vf", q: "Des droites perpendiculaires sont aussi des droites sécantes.", r: true, expl: "Elles se coupent en un point : elles sont sécantes, avec en plus des angles droits." }
    ],
    [
      { t: "vf", q: "Deux droites sécantes sont toujours perpendiculaires.", r: false, expl: "Elles peuvent se couper en biais, comme un X : elles ne forment alors pas d'angles droits." },
      { t: "vf", q: "Deux droites parallèles peuvent être sécantes.", r: false, expl: "Des parallèles ne se rencontrent jamais ; des sécantes se coupent. C'est impossible d'être les deux." },
      { t: "qcm", q: "Les deux traits de la lettre X…", choix: ["sont sécants mais pas perpendiculaires", "sont parallèles", "sont perpendiculaires"], r: "sont sécants mais pas perpendiculaires", expl: "Ils se croisent en biais : sécants, sans angle droit." },
      { t: "qcm", q: "Les deux traits du signe +…", choix: ["sont perpendiculaires", "sont parallèles", "ne se coupent pas"], r: "sont perpendiculaires", expl: "Ils se coupent en formant 4 angles droits." },
      { t: "qcm", q: "Dans la lettre H, les deux grands traits verticaux sont…", choix: ["parallèles", "sécants", "perpendiculaires"], r: "parallèles", expl: "Ils gardent le même écartement et ne se rencontrent jamais." },
      { t: "qcm", q: "Dans la lettre H, le petit trait du milieu et un grand trait vertical sont…", choix: ["perpendiculaires", "parallèles", "confondus"], r: "perpendiculaires", expl: "Le trait horizontal coupe le trait vertical en formant un angle droit." },
      { t: "classer", q: "Range chaque phrase : vraie ou fausse ?", cases: ["vraie", "fausse"], items: [["Des perpendiculaires se coupent en un point.", "vraie"], ["Des parallèles se coupent en un point.", "fausse"], ["Des sécantes ont toujours des angles droits.", "fausse"], ["Des parallèles gardent le même écartement.", "vraie"]], expl: "Seules les perpendiculaires ont forcément des angles droits ; les parallèles ne se coupent jamais." }
    ],
    [
      { t: "qcm", q: "Dans un carré, deux côtés opposés (face à face) sont…", choix: ["parallèles", "perpendiculaires", "sécants"], r: "parallèles", expl: "Ils sont face à face et gardent le même écartement." },
      { t: "qcm", q: "Dans un carré, deux côtés qui se touchent à un sommet sont…", choix: ["perpendiculaires", "parallèles", "illimités"], r: "perpendiculaires", expl: "Ils se coupent au sommet en formant un angle droit." },
      { t: "trous", q: "Complète la leçon.", texte: "Des droites sont sécantes quand elles se [coupent] en un point. Deux droites sont perpendiculaires quand elles sont sécantes en formant des angles [droits]. Deux droites parallèles ne se rencontrent [jamais] : elles gardent le même [écartement].", expl: "Ce sont les trois définitions du cahier." },
      { t: "qcm", q: "La droite (D1) est perpendiculaire à (D3), et la droite (D2) est aussi perpendiculaire à (D3). Comment sont (D1) et (D2) ?", choix: ["parallèles", "perpendiculaires", "sécantes en biais"], r: "parallèles", aide: "Pense aux barreaux d'une échelle posés sur un montant.", expl: "Comme les barreaux d'une échelle, deux droites perpendiculaires à la même droite sont parallèles." },
      { t: "relier", q: "Relie chaque description à son nom.", paires: [["se coupent en biais, sans angle droit", "sécantes non perpendiculaires"], ["se coupent avec 4 angles droits", "perpendiculaires"], ["même écartement, jamais de rencontre", "parallèles"]], expl: "C'est le résumé de la leçon." }
    ]
  ]
});


/* ---- ma-geo-rectangle.js ---- */
// À VÉRIFIER : au cahier (photo 0080), « Il y a 2 médianes de mêmes mesures qui se coupent perpendiculairement ».
// Dans un rectangle de 4 cm sur 2 cm, les médianes mesurent 4 cm et 2 cm : elles ne sont pas égales. Ce sont les DIAGONALES
// qui ont la même mesure. Le module enseigne : diagonales de même longueur ; médianes perpendiculaires (non égales).
LECONS.push({
  id: "ma-geo-rectangle",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le rectangle : construction et propriétés",
  date: "2026-10-13",
  photos: ["DJI_20261118221101_0079_D.jpg", "DJI_20261118221108_0080_D.jpg"],
  retiens:
    "<p>Un <b>rectangle</b> est un quadrilatère qui a :</p>" +
    "<ul><li><b>4 côtés égaux 2 à 2</b> : les côtés opposés ont la même longueur ;</li><li><b>4 angles droits</b> ;</li><li><b>4 sommets</b>.</li></ul>" +
    "<p>Ses <b>dimensions</b> sont la <b>longueur</b> et la <b>largeur</b>. Exemple : un rectangle de 4 cm sur 2 cm (longueur 4 cm, largeur 2 cm).</p>" +
    "<p>Le rectangle a <b>2 diagonales de même mesure</b> (elles relient les sommets opposés) et <b>2 médianes qui se coupent perpendiculairement</b> (elles relient les milieux des côtés opposés). Les médianes n'ont pas la même mesure : dans le rectangle de 4 cm sur 2 cm, l'une mesure 4 cm, l'autre 2 cm.</p>" +
    "<p>Pour le construire sur ton cahier, on utilise la règle et l'équerre.</p>",
  astuce: "Le rectangle ressemble au carré (4 angles droits) mais ses côtés ne sont égaux que <b>deux par deux</b> : deux longueurs, deux largeurs.",
  regle: "Le rectangle a 4 angles droits, 4 sommets et des côtés opposés égaux (2 longueurs, 2 largeurs). Ses 2 diagonales ont la même mesure ; ses 2 médianes se coupent perpendiculairement.",
  niveaux: [
    [
      { t: "qcm", q: "Combien d'angles droits a un rectangle ?", choix: ["4", "2", "1"], r: "4", expl: "Comme le carré, le rectangle a 4 angles droits." },
      { t: "qcm", q: "Les côtés d'un rectangle sont…", choix: ["égaux 2 à 2", "tous égaux", "tous différents"], r: "égaux 2 à 2", expl: "Les deux longueurs sont égales, les deux largeurs aussi." },
      { t: "qcm", q: "Quelles sont les dimensions d'un rectangle ?", choix: ["la longueur et la largeur", "la base et la hauteur", "le rayon et le diamètre"], r: "la longueur et la largeur", expl: "On donne un rectangle par sa longueur et sa largeur : 4 cm sur 2 cm." },
      { t: "vf", q: "Un rectangle a 4 sommets.", r: true, expl: "Un sommet à chaque coin : 4 sommets." },
      { t: "vf", q: "Les deux diagonales d'un rectangle ont la même mesure.", r: true, expl: "C'est une propriété du rectangle : ses diagonales sont égales." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["diagonale", "relie deux sommets opposés"], ["médiane", "relie les milieux de deux côtés opposés"], ["longueur", "le plus grand côté"], ["largeur", "le plus petit côté"]], expl: "Vocabulaire du rectangle." }
    ],
    [
      { t: "saisie", q: "Combien de diagonales a un rectangle ?", r: "2", nombre: true, expl: "Deux paires de sommets opposés : 2 diagonales." },
      { t: "saisie", q: "Combien de médianes a un rectangle ?", r: "2", nombre: true, expl: "Deux paires de côtés opposés : 2 médianes." },
      { t: "trous", q: "Complète.", texte: "Un rectangle est un [quadrilatère] qui a 4 côtés égaux 2 à 2, 4 angles [droits] et 4 [sommets].", expl: "Ce sont les propriétés de la leçon." },
      { t: "qcm", q: "Un rectangle mesure 4 cm sur 2 cm. Combien mesure le côté opposé à la longueur ?", choix: ["4 cm", "2 cm", "6 cm"], r: "4 cm", expl: "Les côtés opposés sont égaux : l'autre longueur mesure aussi 4 cm." },
      { t: "qcm", q: "Les deux médianes d'un rectangle se coupent…", choix: ["perpendiculairement", "sans former d'angle droit", "jamais"], r: "perpendiculairement", expl: "L'une est horizontale, l'autre verticale : elles forment des angles droits." },
      { t: "classer", q: "Carré, rectangle ou les deux ?", cases: ["carré seulement", "rectangle et carré"], items: [["4 côtés égaux", "carré seulement"], ["4 angles droits", "rectangle et carré"], ["4 sommets", "rectangle et carré"], ["côtés opposés égaux", "rectangle et carré"], ["2 diagonales de même mesure", "rectangle et carré"]], expl: "Le carré a toutes les propriétés du rectangle, avec en plus 4 côtés égaux." },
      { t: "saisie", q: "Rectangle de 4 cm sur 2 cm. La médiane qui relie les milieux des deux largeurs mesure … cm", r: "4", nombre: true, unite: "cm", expl: "Elle traverse le rectangle dans le sens de la longueur : 4 cm." },
      { t: "saisie", q: "Rectangle de 4 cm sur 2 cm. La médiane qui relie les milieux des deux longueurs mesure … cm", r: "2", nombre: true, unite: "cm", expl: "Elle traverse le rectangle dans le sens de la largeur : 2 cm." }
    ],
    [
      { t: "vf", q: "Les deux médianes d'un rectangle de 4 cm sur 2 cm ont la même mesure.", r: false, expl: "L'une mesure 4 cm et l'autre 2 cm. Ce sont les diagonales qui ont la même mesure." },
      { t: "vf", q: "Un carré est un rectangle particulier, dont les 4 côtés sont égaux.", r: true, expl: "Le carré a 4 angles droits et des côtés opposés égaux, comme le rectangle ; en plus, tous ses côtés sont égaux." },
      { t: "vf", q: "Une figure à 4 côtés égaux 2 à 2, sans angle droit, est un rectangle.", r: false, expl: "Un rectangle doit avoir 4 angles droits." },
      { t: "qcm", q: "Dans le rectangle EFGH, la diagonale [EG] mesure 5 cm. Combien mesure la diagonale [FH] ?", choix: ["5 cm", "on ne peut pas savoir", "2,5 cm"], r: "5 cm", expl: "Les deux diagonales d'un rectangle ont la même mesure." },
      { t: "qcm", q: "Moussa dit : « Dans un rectangle, les médianes ont la même mesure. » Que lui réponds-tu ?", choix: ["Non : ce sont les diagonales qui ont la même mesure.", "Oui, c'est toujours vrai.", "Non : un rectangle n'a pas de médianes."], r: "Non : ce sont les diagonales qui ont la même mesure.", expl: "Les médianes d'un rectangle ne sont égales que si c'est un carré." },
      { t: "classer", q: "Range chaque propriété du rectangle.", cases: ["propriété des diagonales", "propriété des médianes"], items: [["relient les sommets opposés", "propriété des diagonales"], ["relient les milieux des côtés opposés", "propriété des médianes"], ["ont la même mesure", "propriété des diagonales"], ["se coupent perpendiculairement", "propriété des médianes"]], expl: "Diagonales : sommets opposés, même mesure. Médianes : milieux des côtés, perpendiculaires." }
    ],
    [
      { t: "trous", q: "Complète.", texte: "Le rectangle a 2 [diagonales] de même mesure et 2 [médianes] qui se coupent perpendiculairement. Ses dimensions sont la [longueur] et la [largeur].", expl: "Propriétés du rectangle." },
      { t: "saisie", q: "Rectangle de 6 cm sur 3 cm. Combien mesure son périmètre ? … cm", r: "18", nombre: true, unite: "cm", expl: "(6 + 3) × 2 = 18 cm." },
      { t: "qcm", q: "Fatou décrit une figure : « 4 angles droits, deux côtés de 7 cm et deux côtés de 4 cm. » C'est…", choix: ["un rectangle", "un carré", "un triangle"], r: "un rectangle", expl: "4 angles droits et des côtés égaux 2 à 2 (mais pas tous égaux) : un rectangle." },
      { t: "qcm", q: "Dans un rectangle de 5 cm sur 3 cm, que mesurent les deux médianes ?", choix: ["5 cm et 3 cm", "5 cm et 5 cm", "3 cm et 3 cm"], r: "5 cm et 3 cm", expl: "Chaque médiane traverse le rectangle d'un côté à l'autre : l'une dans le sens de la longueur (5 cm), l'autre dans le sens de la largeur (3 cm)." },
      { t: "classer", q: "Vrai ou faux pour le rectangle ?", cases: ["vrai", "faux"], items: [["Il a 4 angles droits.", "vrai"], ["Ses 4 côtés sont toujours égaux.", "faux"], ["Ses diagonales ont la même mesure.", "vrai"], ["Ses médianes ont toujours la même mesure.", "faux"], ["Ses médianes se coupent perpendiculairement.", "vrai"], ["Ses côtés opposés sont égaux.", "vrai"]], expl: "Rectangle : 4 angles droits, côtés opposés égaux, diagonales égales, médianes perpendiculaires." }
    ]
  ]
});


/* ---- ma-geo-triangle-base-hauteur.js ---- */
LECONS.push({
  id: "ma-geo-triangle-base-hauteur",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le triangle : la base et la hauteur",
  date: "2026-11-18",
  photos: ["DJI_20261118221301_0098_D.jpg", "DJI_20261118221304_0099_D.jpg"],
  retiens:
    "<p>La <b>hauteur</b> d'un triangle est la <b>perpendiculaire</b> abaissée d'un <b>sommet</b> sur le <b>côté opposé</b>. Ce côté s'appelle la <b>base</b>.</p>" +
    "<p>La hauteur forme un <b>angle droit</b> avec la base : pour la tracer sur ton cahier, on utilise l'équerre.</p>" +
    "<p>Exemple : dans le triangle ABC, la hauteur issue de A tombe sur la base [BC] ; celle issue de B tombe sur [AC] ; celle issue de C tombe sur [AB].</p>" +
    "<p>Un triangle a donc <b>3 hauteurs</b>, une par sommet. Les 3 hauteurs se coupent <b>au même point</b>.</p>",
  astuce: "Imagine un fil à plomb qui tombe du sommet, bien droit, sur le côté d'en face : c'est la hauteur. Le côté qu'il touche, c'est la base.",
  regle: "La hauteur part d'un sommet et tombe perpendiculairement sur le côté opposé, appelé base. Un triangle a 3 hauteurs qui se coupent au même point.",
  niveaux: [
    [
      { t: "qcm", q: "D'où part la hauteur d'un triangle ?", choix: ["d'un sommet", "du milieu d'un côté", "du centre du triangle"], r: "d'un sommet", expl: "La hauteur est abaissée d'un sommet." },
      { t: "qcm", q: "Le côté sur lequel tombe la hauteur s'appelle…", choix: ["la base", "le sommet", "la diagonale"], r: "la base", expl: "Le côté opposé au sommet, sur lequel tombe la hauteur, est la base." },
      { t: "qcm", q: "Quel angle la hauteur forme-t-elle avec la base ?", choix: ["un angle droit", "un angle aigu", "un angle plat"], r: "un angle droit", expl: "La hauteur est perpendiculaire à la base : elle forme un angle droit." },
      { t: "qcm", q: "Combien de hauteurs a un triangle ?", choix: ["3", "1", "2"], r: "3", expl: "Une hauteur par sommet : 3 hauteurs." },
      { t: "vf", q: "Les 3 hauteurs d'un triangle se coupent au même point.", r: true, expl: "C'est ce que montre la construction du cahier." }
    ],
    [
      { t: "qcm", q: "Dans le triangle ABC, sur quel côté tombe la hauteur issue de A ?", choix: ["[BC]", "[AB]", "[AC]"], r: "[BC]", expl: "Le côté opposé au sommet A est [BC] : c'est la base." },
      { t: "qcm", q: "Dans le triangle ABC, sur quel côté tombe la hauteur issue de B ?", choix: ["[AC]", "[AB]", "[BC]"], r: "[AC]", expl: "Le côté opposé au sommet B est [AC]." },
      { t: "qcm", q: "Dans le triangle ABC, sur quel côté tombe la hauteur issue de C ?", choix: ["[AB]", "[BC]", "[AC]"], r: "[AB]", expl: "Le côté opposé au sommet C est [AB]." },
      { t: "relier", q: "Triangle MNP : relie chaque sommet à la base de sa hauteur.", paires: [["M", "[NP]"], ["N", "[MP]"], ["P", "[MN]"]], expl: "La base est toujours le côté qui ne contient pas le sommet." },
      { t: "qcm", q: "Quel instrument permet de tracer la hauteur ?", choix: ["l'équerre", "le compas seul", "la balance"], r: "l'équerre", expl: "L'équerre donne l'angle droit entre la hauteur et la base." },
      { t: "trous", q: "Complète.", texte: "La hauteur est la [perpendiculaire] abaissée du [sommet] au côté opposé appelé la [base].", expl: "C'est la définition du cahier." },
      { t: "saisie", q: "Combien de points d'intersection les 3 hauteurs d'un triangle ont-elles en commun ?", r: "1", nombre: true, expl: "Les 3 hauteurs se coupent en un seul et même point." },
      { t: "vf", q: "Un triangle n'a qu'une seule base possible.", r: false, expl: "Chaque côté peut être une base : celle de la hauteur issue du sommet opposé." }
    ],
    [
      { t: "vf", q: "La hauteur coupe toujours la base en son milieu.", r: false, expl: "La hauteur est perpendiculaire à la base, mais elle ne tombe pas forcément au milieu. (Celle qui relie un sommet au milieu du côté opposé n'est pas toujours perpendiculaire.)" },
      { t: "qcm", q: "Ibrahima trace un segment qui part du sommet A et tombe en biais sur [BC], sans angle droit. Est-ce une hauteur ?", choix: ["Non, la hauteur doit être perpendiculaire à la base.", "Oui, elle part bien d'un sommet.", "Oui, elle touche bien la base."], r: "Non, la hauteur doit être perpendiculaire à la base.", expl: "Sans angle droit avec la base, ce n'est pas une hauteur." },
      { t: "qcm", q: "Dans le triangle DEF, la hauteur issue de E est perpendiculaire à…", choix: ["[DF]", "[DE]", "[EF]"], r: "[DF]", expl: "Le côté opposé à E est [DF]." },
      { t: "qcm", q: "Une hauteur et sa base sont…", choix: ["perpendiculaires", "parallèles", "de même longueur"], r: "perpendiculaires", expl: "Elles se coupent en formant un angle droit." },
      { t: "classer", q: "Triangle RST : la hauteur issue de chaque sommet tombe sur quelle base ?", cases: ["base [ST]", "base [RT]", "base [RS]"], items: [["hauteur issue de R", "base [ST]"], ["hauteur issue de S", "base [RT]"], ["hauteur issue de T", "base [RS]"]], expl: "La base est le côté opposé au sommet." },
      { t: "vf", q: "La hauteur relie un sommet au côté qui est en face de lui.", r: true, expl: "Elle part du sommet et tombe sur le côté opposé." }
    ],
    [
      { t: "qcm", q: "Le triangle ABC est rectangle en A ([AB] et [AC] forment un angle droit). Quelle est la hauteur issue de B, qui tombe sur [AC] ?", choix: ["le côté [AB]", "le côté [BC]", "il n'y en a pas"], r: "le côté [AB]", aide: "[AB] part de B et forme déjà un angle droit avec [AC].", expl: "[AB] part du sommet B et tombe perpendiculairement sur [AC] : c'est la hauteur." },
      { t: "trous", q: "Complète.", texte: "Un triangle a [3|trois] hauteurs, une par [sommet]. Elles se coupent au même [point].", expl: "3 hauteurs, une par sommet, qui se coupent en un point." },
      { t: "classer", q: "Vrai ou faux ?", cases: ["vrai", "faux"], items: [["La hauteur part d'un sommet.", "vrai"], ["La hauteur est parallèle à la base.", "faux"], ["Un triangle a 3 hauteurs.", "vrai"], ["La base est le côté opposé au sommet.", "vrai"], ["Les hauteurs ne se rencontrent jamais.", "faux"]], expl: "La hauteur part d'un sommet, perpendiculaire au côté opposé (la base) ; les 3 hauteurs se coupent en un point." },
      { t: "qcm", q: "Dans le triangle KLM, on trace la hauteur sur la base [KL]. De quel sommet part-elle ?", choix: ["M", "K", "L"], r: "M", expl: "Le sommet opposé à [KL] est M." },
      { t: "qcm", q: "Pour tracer la hauteur issue de A dans le triangle ABC, on pose l'équerre…", choix: ["avec un côté de l'angle droit le long de [BC], l'autre passant par A", "avec un côté le long de [AB]", "au milieu de [AC]"], r: "avec un côté de l'angle droit le long de [BC], l'autre passant par A", expl: "On cherche la droite qui passe par A et qui est perpendiculaire à la base [BC]." }
    ]
  ]
});


/* ---- ma-geo-types-triangles.js ---- */
// À VÉRIFIER : au cahier (photo 0089), les angles notés en rouge sur le triangle AB = 5 cm, BC = 7 cm, angle B = 40° (environ 55° et 85°)
// ne correspondent pas à la figure (elle donnerait environ 95° et 45°) : ces valeurs ne sont pas reprises. Le triangle « quelconque »
// du cahier (5 cm, 4 cm, 3 cm) est en fait rectangle : il n'est pas utilisé comme exemple de triangle quelconque.
// Les exercices d'angles utilisent de nouvelles valeurs, toutes cohérentes (somme = 180°).
LECONS.push({
  id: "ma-geo-types-triangles",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Les types de triangles : découverte et construction",
  date: "2026-11-04",
  photos: ["DJI_20261118221156_0088_D.jpg", "DJI_20261118221204_0089_D.jpg", "DJI_20261118221212_0090_D.jpg"],
  retiens:
    "<p>Le <b>triangle</b> est une figure géométrique qui a <b>3 côtés</b>, <b>3 sommets</b> et <b>3 angles</b>.</p>" +
    "<p>Dans tout triangle, <b>la somme des angles fait 180°</b>.</p>" +
    "<table><tr><th>Triangle</th><th>Ce qui le reconnaît</th></tr>" +
    "<tr><td><b>quelconque</b></td><td>ni côtés égaux, ni angle droit</td></tr>" +
    "<tr><td><b>rectangle</b></td><td>un angle droit (90°)</td></tr>" +
    "<tr><td><b>isocèle</b></td><td>2 côtés égaux et 2 angles égaux</td></tr>" +
    "<tr><td><b>équilatéral</b></td><td>3 côtés égaux et 3 angles égaux</td></tr></table>" +
    "<p>NB : pour construire un triangle isocèle ou équilatéral, on utilise le <b>compas</b> et la <b>règle</b> ; on utilise le <b>rapporteur</b> pour mesurer les angles.</p>",
  astuce: "<b>Équi</b>-latéral : tous les côtés sont <b>égaux</b>. <b>Iso</b>-cèle : deux « jambes » pareilles. <b>Rectangle</b> : il a un coin comme le rectangle, un angle droit.",
  regle: "Un triangle a 3 côtés, 3 sommets, 3 angles, et la somme de ses angles fait 180°. Rectangle : un angle droit ; isocèle : 2 côtés égaux ; équilatéral : 3 côtés égaux.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de côtés a un triangle ?", choix: ["3", "4", "2"], r: "3", expl: "tri = trois : 3 côtés, 3 sommets, 3 angles." },
      { t: "qcm", q: "Combien fait la somme des angles d'un triangle ?", choix: ["180°", "90°", "360°"], r: "180°", expl: "Dans tout triangle, la somme des 3 angles fait 180°." },
      { t: "qcm", q: "Un triangle qui a un angle droit est un triangle…", choix: ["rectangle", "équilatéral", "isocèle"], r: "rectangle", expl: "Le triangle rectangle a un angle droit de 90°." },
      { t: "qcm", q: "Un triangle qui a 3 côtés égaux est un triangle…", choix: ["équilatéral", "isocèle", "rectangle"], r: "équilatéral", expl: "Équilatéral : 3 côtés égaux et 3 angles égaux." },
      { t: "qcm", q: "Un triangle qui a 2 côtés égaux est un triangle…", choix: ["isocèle", "équilatéral", "quelconque"], r: "isocèle", expl: "Isocèle : 2 côtés égaux et 2 angles égaux." },
      { t: "relier", q: "Relie chaque triangle à sa propriété.", paires: [["rectangle", "un angle droit"], ["isocèle", "2 côtés égaux"], ["équilatéral", "3 côtés égaux"], ["quelconque", "aucun côté égal, pas d'angle droit"]], expl: "Ce sont les types de triangles de la leçon." }
    ],
    [
      { t: "classer", q: "Range chaque triangle d'après ses côtés.", cases: ["équilatéral", "isocèle", "quelconque"], items: [["5 cm, 5 cm, 5 cm", "équilatéral"], ["6 cm, 6 cm, 4 cm", "isocèle"], ["3 cm, 5 cm, 6 cm", "quelconque"], ["7 cm, 7 cm, 7 cm", "équilatéral"], ["8 cm, 3 cm, 8 cm", "isocèle"], ["4 cm, 6 cm, 7 cm", "quelconque"]], expl: "3 côtés égaux : équilatéral ; 2 côtés égaux : isocèle ; aucun : quelconque." },
      { t: "saisie", q: "Deux angles d'un triangle mesurent 60° et 70°. Le troisième mesure … °", r: "50", nombre: true, unite: "°", expl: "60 + 70 = 130 ; 180 − 130 = 50°." },
      { t: "saisie", q: "Deux angles d'un triangle mesurent 45° et 100°. Le troisième mesure … °", r: "35", nombre: true, unite: "°", expl: "45 + 100 = 145 ; 180 − 145 = 35°." },
      { t: "saisie", q: "Dans un triangle rectangle, un des angles aigus mesure 35°. L'autre angle aigu mesure … °", r: "55", nombre: true, unite: "°", expl: "L'angle droit fait 90° : 90 + 35 = 125 ; 180 − 125 = 55°." },
      { t: "saisie", q: "Un triangle a 3 sommets, 3 côtés et … angles.", r: "3", nombre: true, expl: "Un triangle a 3 angles, un à chaque sommet." },
      { t: "qcm", q: "Pour construire un triangle équilatéral, on utilise…", choix: ["le compas et la règle", "la balance", "seulement l'équerre"], r: "le compas et la règle", expl: "Le compas permet de reporter la même longueur pour les 3 côtés." },
      { t: "qcm", q: "Pour mesurer un angle du triangle, on utilise…", choix: ["le rapporteur", "le compas", "le mètre ruban"], r: "le rapporteur", expl: "Le rapporteur mesure les angles en degrés." },
      { t: "trous", q: "Complète.", texte: "Le triangle isocèle a [2|deux] côtés égaux et 2 angles égaux. Le triangle équilatéral a [3|trois] côtés égaux et 3 angles égaux.", expl: "Isocèle : 2 ; équilatéral : 3." }
    ],
    [
      { t: "saisie", q: "Les 3 angles d'un triangle équilatéral sont égaux. Chacun mesure … °", r: "60", nombre: true, unite: "°", expl: "180 : 3 = 60°." },
      { t: "saisie", q: "Dans un triangle isocèle, l'angle entre les deux côtés égaux mesure 40°. Les deux autres angles sont égaux. Chacun mesure … °", r: "70", nombre: true, unite: "°", expl: "180 − 40 = 140 ; 140 : 2 = 70°." },
      { t: "vf", q: "Un triangle peut avoir deux angles droits.", r: false, expl: "90 + 90 = 180 : il ne resterait rien pour le troisième angle. Impossible." },
      { t: "vf", q: "Un triangle équilatéral est aussi isocèle.", r: true, expl: "Il a 3 côtés égaux, donc il en a au moins 2 égaux." },
      { t: "vf", q: "Un triangle peut être à la fois rectangle et isocèle.", r: true, expl: "Exemple : un angle droit et deux côtés égaux de part et d'autre ; les deux autres angles mesurent alors 45° chacun." },
      { t: "qcm", q: "Les angles d'un triangle mesurent 90°, 50° et 40°. Ce triangle est…", choix: ["rectangle", "équilatéral", "isocèle"], r: "rectangle", expl: "Il a un angle de 90° : c'est un triangle rectangle." },
      { t: "qcm", q: "Les angles d'un triangle mesurent 70°, 70° et 40°. Ce triangle est…", choix: ["isocèle", "rectangle", "équilatéral"], r: "isocèle", expl: "Il a 2 angles égaux : il est isocèle." }
    ],
    [
      { t: "qcm", q: "Aïssatou dit : « Les angles de mon triangle mesurent 60°, 70° et 60°. » Est-ce possible ?", choix: ["Non, car la somme fait 190°.", "Oui, c'est un triangle isocèle.", "Oui, c'est un triangle équilatéral."], r: "Non, car la somme fait 190°.", expl: "60 + 70 + 60 = 190°. La somme des angles d'un triangle doit faire 180°." },
      { t: "saisie", q: "Dans un triangle rectangle et isocèle, les deux angles aigus sont égaux. Chacun mesure … °", r: "45", nombre: true, unite: "°", expl: "180 − 90 = 90 ; 90 : 2 = 45°." },
      { t: "saisie", q: "Un triangle équilatéral a 6 cm de côté. Son périmètre = … cm", r: "18", nombre: true, unite: "cm", expl: "3 côtés égaux : 6 × 3 = 18 cm." },
      { t: "saisie", q: "Un triangle isocèle a deux côtés de 7 cm et un côté de 4 cm. Son périmètre = … cm", r: "18", nombre: true, unite: "cm", expl: "7 + 7 + 4 = 18 cm." },
      { t: "classer", q: "Range chaque triangle d'après ses angles.", cases: ["rectangle", "équilatéral", "isocèle non rectangle"], items: [["90°, 30°, 60°", "rectangle"], ["60°, 60°, 60°", "équilatéral"], ["50°, 50°, 80°", "isocèle non rectangle"], ["90°, 45°, 45°", "rectangle"], ["30°, 30°, 120°", "isocèle non rectangle"]], expl: "Un angle de 90° : rectangle. Trois angles de 60° : équilatéral. Deux angles égaux sans angle droit : isocèle." },
      { t: "trous", q: "Complète la leçon.", texte: "Le triangle est une figure qui a 3 [côtés], 3 [sommets] et 3 [angles]. La somme des angles fait [180]°.", expl: "Définition du triangle et somme des angles." }
    ]
  ]
});


/* ---- ma-mes-aires.js ---- */
// À VÉRIFIER : au cahier (photo 2026-11-25_29), « 7 m² = 100 dm² » : il faut lire 1 m² = 100 dm².
// Exercices tirés du Palier 5 p. 57 (photo 2026-11-25_25). Deux réponses de Kam à revoir : 0,5 km² + 12 dam² = 501 200 m²
// (et non 5 001 200) ; 38 cm² + 2,5 m² = 2 503 800 mm² (et non 25 003 800). Les formules d'aire du carré et du rectangle
// viennent des objectifs du Palier 5 (« calculer l'aire du carré, du rectangle »).
LECONS.push({
  id: "ma-mes-aires",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures d'aires (surfaces)",
  date: "2026-11-24",
  photos: ["2026-11-25_28.jpg", "2026-11-25_29.jpg", "2026-11-25_25.jpg", "2026-11-25_26.jpg", "2026-11-25_27.jpg"],
  retiens:
    "<p>L'<b>aire</b> est la superficie (la surface) d'une figure géométrique. L'aire se mesure. Le <b>mètre carré (m²)</b> est l'unité principale des mesures de surfaces.</p>" +
    "<ul><li>Les <b>multiples</b> du m² sont : le km², le hm², le dam².</li>" +
    "<li>Les <b>sous-multiples</b> du m² sont : le dm², le cm², le mm².</li></ul>" +
    "<table><tr><th>km²</th><th>hm²</th><th>dam²</th><th>m²</th><th>dm²</th><th>cm²</th><th>mm²</th></tr>" +
    "<tr><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td><td>d | u</td></tr></table>" +
    "<p>Dans le tableau, chaque unité a <b>deux colonnes</b> : chaque unité vaut <b>100 fois</b> l'unité suivante.<br>1 dam² = 100 m² — 1 m² = 100 dm² — 1 dm² = 100 cm²</p>" +
    "<p><b>Rappel (Palier 5) :</b> aire du carré = côté × côté ; aire du rectangle = longueur × largeur. Pour additionner des aires, on les convertit d'abord dans la même unité.</p>",
  astuce: "Pour convertir, on avance de <b>2 chiffres par unité</b> : 17 dam² → 17|00 m² = 1 700 m². Quand tu places un nombre à virgule, mets le chiffre des unités dans la colonne <b>u</b> de son unité.",
  regle: "Le m² est l'unité principale des aires ; chaque unité d'aire vaut 100 fois l'unité immédiatement inférieure (2 colonnes par unité dans le tableau).",
  niveaux: [
    [
      { t: "qcm", q: "Quelle est l'unité principale des mesures d'aires ?", choix: ["le mètre carré (m²)", "le mètre (m)", "le litre (l)"], r: "le mètre carré (m²)", expl: "L'aire se mesure en m², ses multiples et sous-multiples." },
      { t: "qcm", q: "1 dam² = …", choix: ["100 m²", "10 m²", "1 000 m²"], r: "100 m²", expl: "Chaque unité d'aire vaut 100 fois la suivante." },
      { t: "qcm", q: "1 m² = …", choix: ["100 dm²", "10 dm²", "1 000 dm²"], r: "100 dm²", expl: "Deux colonnes par unité : 1 m² = 100 dm²." },
      { t: "classer", q: "Multiple ou sous-multiple du m² ?", cases: ["multiple", "sous-multiple"], items: [["km²", "multiple"], ["hm²", "multiple"], ["dam²", "multiple"], ["dm²", "sous-multiple"], ["cm²", "sous-multiple"], ["mm²", "sous-multiple"]], expl: "Plus grand que le m² : multiple ; plus petit : sous-multiple." },
      { t: "vf", q: "Dans le tableau des aires, chaque unité a deux colonnes.", r: true, expl: "Une colonne pour les dizaines (d), une pour les unités (u)." },
      { t: "ordre", q: "Range du plus grand au plus petit.", r: "km² hm² dam² m² dm² cm² mm²", expl: "C'est l'ordre du tableau." }
    ],
    [
      { t: "saisie", q: "17 dam² = … m²", r: "1700", nombre: true, unite: "m²", expl: "17|00 : 17 dam² = 1 700 m²." },
      { t: "saisie", q: "5 hm² = … m²", r: "50000", nombre: true, unite: "m²", expl: "1 hm² = 10 000 m² ; 5 hm² = 50 000 m²." },
      { t: "saisie", q: "1 300 dm² = … m²", r: "13", nombre: true, unite: "m²", expl: "100 dm² = 1 m² ; 1 300 dm² = 13 m²." },
      { t: "saisie", q: "45 000 cm² = … m²", r: "4,5", nombre: true, unite: "m²", expl: "1 m² = 10 000 cm² ; 45 000 : 10 000 = 4,5 m²." },
      { t: "saisie", q: "2 400 mm² = … m²", r: "0,0024", nombre: true, unite: "m²", expl: "1 m² = 1 000 000 mm² ; 2 400 mm² = 0,0024 m²." },
      { t: "saisie", q: "3 m² = … dm²", r: "300", nombre: true, unite: "dm²", expl: "1 m² = 100 dm²." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1 km² = [100] hm² — 1 hm² = [100] dam² — 1 dm² = [100] cm²", expl: "Chaque unité vaut 100 fois la suivante." },
      { t: "saisie", q: "6 km² = … m²", r: "6000000", nombre: true, unite: "m²", expl: "1 km² = 1 000 000 m²." },
      { t: "qcm", q: "Un carré de 1 m de côté a une aire de…", choix: ["1 m²", "4 m²", "100 m²"], r: "1 m²", expl: "1 m × 1 m = 1 m²." }
    ],
    [
      { t: "saisie", q: "0,5 km² et 12 dam² = … m²", r: "501200", nombre: true, unite: "m²", aide: "0,5 km² = 50 hm² = 500 000 m².", expl: "0,5 km² = 500 000 m² ; 12 dam² = 1 200 m² ; 500 000 + 1 200 = 501 200 m²." },
      { t: "saisie", q: "45 dam² + 5 hm² = … m²", r: "54500", nombre: true, unite: "m²", expl: "4 500 m² + 50 000 m² = 54 500 m²." },
      { t: "saisie", q: "6 km² + 250 hm² = … m²", r: "8500000", nombre: true, unite: "m²", expl: "6 000 000 + 2 500 000 = 8 500 000 m²." },
      { t: "saisie", q: "3 400 m² + 66 dam² = … hm²", r: "1", nombre: true, unite: "hm²", expl: "3 400 + 6 600 = 10 000 m² = 1 hm²." },
      { t: "saisie", q: "38 cm² + 2,5 m² = … mm²", r: "2503800", nombre: true, unite: "mm²", aide: "2,5 m² : le 2 va dans la colonne u des m².", expl: "38 cm² = 3 800 mm² ; 2,5 m² = 2 500 000 mm² ; total 2 503 800 mm²." },
      { t: "saisie", q: "9 dm² + 1 100 cm² = … m²", r: "0,2", nombre: true, unite: "m²", expl: "900 cm² + 1 100 cm² = 2 000 cm² = 0,2 m²." },
      { t: "saisie", q: "545 mm² + 1 dm² 5 cm² 55 mm² = … cm²", r: "111", nombre: true, unite: "cm²", expl: "5,45 + 100 + 5 + 0,55 = 111 cm²." },
      { t: "qcm", q: "Pourquoi 2,5 m² ne s'écrit-il pas « 25 » dans les colonnes des m² ?", choix: ["parce que 2 est le chiffre des unités : il va dans la colonne u", "parce qu'on ne met jamais de virgule", "parce que 25 est trop grand"], r: "parce que 2 est le chiffre des unités : il va dans la colonne u", expl: "2,5 m² = 2 m² et 50 dm² : le 5 va dans les dm²." }
    ],
    [
      { t: "probleme", q: "Un tailleur veut découper, dans un tissu de 40 dm² d'aire, une nappe carrée de 6 dm de côté.", etapes: [{ q: "Étape 1 : aire de la nappe (dm²)", r: "36", unite: "dm²" }, { q: "Étape 2 : tissu restant (dm²)", r: "4", unite: "dm²" }], expl: "6 × 6 = 36 dm² ; 36 est moins que 40 : c'est possible, et il reste 4 dm²." },
      { t: "saisie", q: "Un champ carré a une aire de 64 m². Quelle est la mesure d'un côté ?", r: "8", nombre: true, unite: "m", aide: "Quel nombre multiplié par lui-même donne 64 ?", expl: "8 × 8 = 64 : le côté mesure 8 m." },
      { t: "saisie", q: "Rectangle de 12 m de long et 6,5 m de large. Aire = …", r: "78", nombre: true, unite: "m²", expl: "12 × 6,5 = 78 m²." },
      { t: "saisie", q: "Rectangle d'aire 414 m² et de longueur 23 m. Largeur = …", r: "18", nombre: true, unite: "m", expl: "414 : 23 = 18 m." },
      { t: "probleme", q: "La cour de l'école est un rectangle de 40 m sur 25 m.", etapes: [{ q: "Étape 1 : aire en m²", r: "1000", unite: "m²" }, { q: "Étape 2 : aire en dam²", r: "10", unite: "dam²" }], expl: "40 × 25 = 1 000 m² = 10 dam²." }
    ]
  ]
});


/* ---- ma-mes-calcul-echelle.js ---- */
// À VÉRIFIER : au cahier (photo 0098), la formule est recopiée à l'envers : « Échelle = Dimension réelle (convertie) / Dimension sur le plan ».
// Le module enseigne : Échelle = dimension sur le plan / dimension réelle (mêmes unités). Le résultat de l'exemple du cahier (1/2 000) reste juste.
LECONS.push({
  id: "ma-mes-calcul-echelle",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul de l'échelle",
  date: "2026-11-18",
  photos: ["DJI_20261118221301_0098_D.jpg"],
  retiens:
    "<p><b>Échelle = dimension sur le plan / dimension réelle</b>, les deux dimensions étant exprimées <b>dans la même unité</b>.</p>" +
    "<p>Comme le numérateur d'une échelle vaut 1, on procède ainsi :</p>" +
    "<ul><li>on convertit la dimension réelle dans l'unité du plan ;</li>" +
    "<li>on divise la dimension réelle par la dimension sur le plan : on obtient le <b>dénominateur</b> ;</li>" +
    "<li>on écrit l'échelle : 1/dénominateur.</li></ul>" +
    "<p>Exemple : ton père veut connaître le périmètre de son jardin, qui mesure 60 mm sur 40 mm sur le plan. Il ignore l'échelle ; il mesure la longueur réelle et trouve 120 m.<br>" +
    "On convertit : 120 m = 120 000 mm.<br>120 000 : 60 = 2 000<br>L'échelle est <b>1/2 000</b>.</p>",
  astuce: "Pose-toi la question : « 1 mm (ou 1 cm) du plan représente combien dans la réalité ? » La réponse, c'est le dénominateur.",
  regle: "Échelle = dimension sur le plan / dimension réelle, dans la même unité. Le dénominateur = dimension réelle convertie : dimension sur le plan.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle formule donne l'échelle ?", choix: ["dimension sur le plan / dimension réelle", "dimension réelle / dimension sur le plan", "dimension réelle × dimension sur le plan"], r: "dimension sur le plan / dimension réelle", expl: "Le plan est au numérateur, la réalité au dénominateur : c'est pour cela qu'on obtient 1/100, 1/1 000…" },
      { t: "vf", q: "Avant de calculer l'échelle, il faut mettre les deux dimensions dans la même unité.", r: true, expl: "On ne peut comparer que des longueurs exprimées dans la même unité." },
      { t: "qcm", q: "Sur le plan : 1 cm. En réalité : 100 cm. L'échelle est…", choix: ["1/100", "100/1", "1/10"], r: "1/100", expl: "1 cm du plan pour 100 cm réels : 1/100." },
      { t: "qcm", q: "Sur le plan : 60 mm. En réalité : 120 000 mm. Quel calcul donne le dénominateur ?", choix: ["120 000 : 60", "60 : 120 000", "120 000 × 60", "120 000 − 60"], r: "120 000 : 60", expl: "120 000 : 60 = 2 000 : l'échelle est 1/2 000." },
      { t: "relier", q: "Relie chaque situation à son échelle.", paires: [["1 cm pour 10 cm", "1/10"], ["1 cm pour 50 cm", "1/50"], ["1 cm pour 1 000 cm", "1/1 000"], ["1 mm pour 2 000 mm", "1/2 000"]], expl: "Le dénominateur est la longueur réelle représentée par une unité du plan." },
      { t: "saisie", q: "Plan : 5 cm. Réalité : 500 cm. Échelle = 1/…", r: "100", nombre: true, expl: "500 : 5 = 100 : l'échelle est 1/100." }
    ],
    [
      { t: "saisie", q: "Plan : 4 cm. Réalité : 40 m = 4 000 cm. Échelle = 1/…", r: "1000", nombre: true, expl: "4 000 : 4 = 1 000 : l'échelle est 1/1 000." },
      { t: "saisie", q: "Plan : 8 cm. Réalité : 4 m. Échelle = 1/…", r: "50", nombre: true, aide: "4 m = 400 cm.", expl: "4 m = 400 cm ; 400 : 8 = 50 : l'échelle est 1/50." },
      { t: "saisie", q: "Plan : 6 cm. Réalité : 120 m. Échelle = 1/…", r: "2000", nombre: true, expl: "120 m = 12 000 cm ; 12 000 : 6 = 2 000 : l'échelle est 1/2 000." },
      { t: "saisie", q: "Plan : 25 mm. Réalité : 50 m. Échelle = 1/…", r: "2000", nombre: true, expl: "50 m = 50 000 mm ; 50 000 : 25 = 2 000 : l'échelle est 1/2 000." },
      { t: "saisie", q: "Plan : 2 cm. Réalité : 1 km. Échelle = 1/…", r: "50000", nombre: true, expl: "1 km = 100 000 cm ; 100 000 : 2 = 50 000 : l'échelle est 1/50 000." },
      { t: "saisie", q: "Plan : 10 cm. Réalité : 20 m. Échelle = 1/…", r: "200", nombre: true, expl: "20 m = 2 000 cm ; 2 000 : 10 = 200 : l'échelle est 1/200." },
      { t: "saisie", q: "Plan : 7 cm. Réalité : 70 km (Dakar–Thiès). Échelle = 1/…", r: "1000000", nombre: true, expl: "70 km = 7 000 000 cm ; 7 000 000 : 7 = 1 000 000 : l'échelle est 1/1 000 000." },
      { t: "trous", q: "Complète les conversions avant le calcul.", nombre: true, texte: "120 m = [120000] mm — 40 m = [4000] cm — 3 km = [300000] cm", expl: "1 m = 1 000 mm = 100 cm ; 1 km = 100 000 cm." }
    ],
    [
      { t: "qcm", q: "Plan : 60 mm. Réalité : 120 m. Awa écrit 120 : 60 = 2, donc l'échelle est 1/2. Quelle est son erreur ?", choix: ["Elle n'a pas converti : 120 m = 120 000 mm, l'échelle est 1/2 000.", "Il fallait faire 60 : 120.", "Il n'y a pas d'erreur."], r: "Elle n'a pas converti : 120 m = 120 000 mm, l'échelle est 1/2 000.", expl: "Les deux dimensions doivent être dans la même unité avant la division." },
      { t: "qcm", q: "Fatou écrit l'échelle « 2 000/1 ». Pourquoi est-ce faux ?", choix: ["Le numérateur d'une échelle vaut toujours 1 : c'est 1/2 000.", "Il fallait écrire 1/20.", "C'est juste."], r: "Le numérateur d'une échelle vaut toujours 1 : c'est 1/2 000.", expl: "Échelle = plan / réalité : le plan est le plus petit, il est au numérateur." },
      { t: "saisie", q: "Plan : 3 cm. Réalité : 15 km. Échelle = 1/…", r: "500000", nombre: true, expl: "15 km = 1 500 000 cm ; 1 500 000 : 3 = 500 000 : l'échelle est 1/500 000." },
      { t: "saisie", q: "Plan : 12 cm. Réalité : 6 m. Échelle = 1/…", r: "50", nombre: true, expl: "6 m = 600 cm ; 600 : 12 = 50 : l'échelle est 1/50." },
      { t: "vf", q: "Un plan au 1/50 et un plan au 1/5 000 : le second représente les objets plus petits.", r: true, expl: "Au 1/5 000, 1 cm représente 5 000 cm : le dessin est beaucoup plus réduit." },
      { t: "saisie", q: "Une pirogue de 15 m est dessinée par un trait de 3 cm. Échelle = 1/…", r: "500", nombre: true, expl: "15 m = 1 500 cm ; 1 500 : 3 = 500 : l'échelle est 1/500." }
    ],
    [
      { t: "probleme", q: "Ton père veut connaître le périmètre de son jardin, qui mesure 60 mm sur 40 mm sur le plan. Il mesure la longueur réelle et trouve 120 m.", etapes: [{ q: "Étape 1 : 120 m en mm", r: "120000", unite: "mm" }, { q: "Étape 2 : dénominateur de l'échelle (échelle = 1/…)", r: "2000" }, { q: "Étape 3 : largeur réelle (en m)", r: "80", unite: "m" }, { q: "Étape 4 : périmètre réel du jardin (en m)", r: "400", unite: "m" }], expl: "120 m = 120 000 mm ; 120 000 : 60 = 2 000, échelle 1/2 000 ; largeur : 40 × 2 000 = 80 000 mm = 80 m ; périmètre : (120 + 80) × 2 = 400 m." },
      { t: "probleme", q: "Sur un plan, la cour de l'école mesure 9 cm. En réalité, elle mesure 45 m. Sur le même plan, le préau mesure 2 cm.", etapes: [{ q: "Étape 1 : dénominateur de l'échelle (1/…)", r: "500" }, { q: "Étape 2 : longueur réelle du préau (en m)", r: "10", unite: "m" }], expl: "45 m = 4 500 cm ; 4 500 : 9 = 500, échelle 1/500 ; préau : 2 × 500 = 1 000 cm = 10 m." },
      { t: "probleme", q: "Sur une carte, Dakar et Thiès (70 km) sont à 7 cm l'une de l'autre. Sur la même carte, Dakar et Mbour sont à 8 cm.", etapes: [{ q: "Étape 1 : dénominateur de l'échelle (1/…)", r: "1000000" }, { q: "Étape 2 : distance réelle Dakar–Mbour (en km)", r: "80", unite: "km" }], expl: "70 km = 7 000 000 cm ; 7 000 000 : 7 = 1 000 000 ; 8 × 1 000 000 = 8 000 000 cm = 80 km." },
      { t: "probleme", q: "Sur le plan d'une maison, la chambre de Mamadou mesure 8 cm de long. En réalité, elle mesure 4 m. Le salon mesure 14 cm sur ce plan.", etapes: [{ q: "Étape 1 : dénominateur de l'échelle (1/…)", r: "50" }, { q: "Étape 2 : longueur réelle du salon (en m)", r: "7", unite: "m" }], expl: "4 m = 400 cm ; 400 : 8 = 50 ; salon : 14 × 50 = 700 cm = 7 m." },
      { t: "qcm", q: "Un terrain de football de 100 m est dessiné par un trait de 5 cm. Quelle est l'échelle ?", choix: ["1/2 000", "1/20", "1/200", "1/20 000"], r: "1/2 000", expl: "100 m = 10 000 cm ; 10 000 : 5 = 2 000 : l'échelle est 1/2 000." },
      { t: "probleme", q: "Sur un plan au 1/10 000, le champ rectangulaire de ton oncle mesure 36 mm sur 28 mm. Il veut l'entourer de 2 rangs de fil de fer.", etapes: [{ q: "Étape 1 : longueur réelle en m", r: "360", unite: "m" }, { q: "Étape 2 : largeur réelle en m", r: "280", unite: "m" }, { q: "Étape 3 : périmètre réel en m", r: "1280", unite: "m" }, { q: "Étape 4 : longueur de fil de fer en m", r: "2560", unite: "m" }], expl: "36 × 10 000 = 360 000 mm = 360 m ; 28 × 10 000 = 280 000 mm = 280 m ; (360 + 280) × 2 = 1 280 m ; 2 rangs : 1 280 × 2 = 2 560 m." },
      { t: "qcm", q: "Deux villes sont à 400 km l'une de l'autre. Sur la carte, elles sont à 80 mm. Quelle est l'échelle de la carte ?", choix: ["1/5 000 000", "1/500 000", "1/50"], r: "1/5 000 000", aide: "Convertis 400 km en mm, puis divise par 80.", expl: "400 km = 400 000 000 mm ; 400 000 000 : 80 = 5 000 000 : l'échelle est 1/5 000 000." }
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


/* ---- ma-mes-echelle-dimensions.js ---- */
// À VÉRIFIER : le bas de la photo 0095 (titre et définition de l'échelle) est flou. Le titre est reconstitué d'après la photo 0096 ;
// la définition est reformulée simplement, sans recopier la phrase incertaine du cahier.
LECONS.push({
  id: "ma-mes-echelle-dimensions",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Dimension réelle et dimension sur le plan (échelle)",
  date: "2026-11-16",
  photos: ["DJI_20261118221240_0095_D.jpg", "DJI_20261118221246_0096_D.jpg", "DJI_20261118221252_0097_D.jpg"],
  retiens:
    "<p>Sur un plan ou une carte, les objets sont dessinés plus petits qu'en réalité. L'<b>échelle</b> indique de combien ils ont été réduits. Elle s'écrit sous forme d'une <b>fraction</b> : 1/10 ; 1/100 ; 1/1 000…</p>" +
    "<p>Si j'écris <b>1/100</b>, cela signifie que <b>1 cm sur le plan représente 100 cm dans la réalité</b>. Le numérateur de l'échelle est toujours égal à 1.</p>" +
    "<p><b>1. Calcul de la dimension réelle</b></p>" +
    "<p><b>Dimension réelle = dimension sur le plan × dénominateur de l'échelle</b></p>" +
    "<p>Exemple : sur un plan à l'échelle 1/2 000, une rue mesure 9 mm. Dimension réelle : 9 mm × 2 000 = 18 000 mm, soit 18 m.</p>" +
    "<p><b>2. Calcul de la dimension sur le plan</b> (on dit aussi dimension réduite)</p>" +
    "<p><b>Dimension sur le plan = dimension réelle convertie : dénominateur de l'échelle</b></p>" +
    "<p>Exemple : la distance entre Dakar et Thiès est de 70 km. On la représente à l'échelle 1/1 000 000.<br>" +
    "On convertit : 70 km = 7 000 000 cm. Dimension sur le plan : 7 000 000 cm : 1 000 000 = 7 cm.</p>",
  astuce: "Du plan vers la réalité, on <b>agrandit</b> : on multiplie. De la réalité vers le plan, on <b>réduit</b> : on divise. Le résultat garde l'unité de départ ; on convertit ensuite si besoin.",
  regle: "Dimension réelle = dimension sur le plan × dénominateur ; dimension sur le plan = dimension réelle (convertie) : dénominateur.",
  niveaux: [
    [
      { t: "qcm", q: "À l'échelle 1/100, 1 cm sur le plan représente…", choix: ["100 cm dans la réalité", "1 cm dans la réalité", "100 m dans la réalité"], r: "100 cm dans la réalité", expl: "Le dénominateur dit combien de fois la réalité est plus grande : 1 cm → 100 cm." },
      { t: "qcm", q: "Le numérateur d'une échelle est toujours…", choix: ["1", "10", "100"], r: "1", expl: "Une échelle s'écrit 1/10, 1/100, 1/1 000… : le numérateur vaut 1." },
      { t: "qcm", q: "Pour trouver la dimension réelle, on…", choix: ["multiplie la dimension sur le plan par le dénominateur", "divise la dimension sur le plan par le dénominateur", "ajoute le dénominateur"], r: "multiplie la dimension sur le plan par le dénominateur", expl: "La réalité est plus grande que le plan : on multiplie." },
      { t: "qcm", q: "Pour trouver la dimension sur le plan, on…", choix: ["divise la dimension réelle par le dénominateur", "multiplie la dimension réelle par le dénominateur", "retire le dénominateur"], r: "divise la dimension réelle par le dénominateur", expl: "Le plan est plus petit que la réalité : on divise." },
      { t: "vf", q: "Sur un plan, une maison est dessinée plus petite qu'en réalité.", r: true, expl: "C'est le rôle de l'échelle : réduire pour faire tenir l'objet sur la feuille." },
      { t: "relier", q: "Relie chaque échelle à sa signification.", paires: [["1/10", "1 cm pour 10 cm"], ["1/100", "1 cm pour 100 cm"], ["1/1 000", "1 cm pour 1 000 cm"]], expl: "Le dénominateur indique la longueur réelle représentée par 1 cm du plan." }
    ],
    [
      { t: "saisie", q: "Échelle 1/100. Sur le plan : 5 cm. Dimension réelle = … cm", r: "500", nombre: true, unite: "cm", expl: "5 × 100 = 500 cm (soit 5 m)." },
      { t: "saisie", q: "Échelle 1/1 000. Sur le plan : 4 cm. Dimension réelle = … m", r: "40", nombre: true, unite: "m", expl: "4 × 1 000 = 4 000 cm = 40 m." },
      { t: "saisie", q: "Échelle 1/200. Sur le plan : 3 cm. Dimension réelle = … m", r: "6", nombre: true, unite: "m", expl: "3 × 200 = 600 cm = 6 m." },
      { t: "saisie", q: "Échelle 1/2 000. Une rue mesure 9 mm sur le plan. Dimension réelle = … m", r: "18", nombre: true, unite: "m", expl: "9 × 2 000 = 18 000 mm = 18 m." },
      { t: "saisie", q: "Échelle 1/50. Sur le plan : 8 cm. Dimension réelle = … m", r: "4", nombre: true, unite: "m", expl: "8 × 50 = 400 cm = 4 m." },
      { t: "saisie", q: "Échelle 1/100. Dimension réelle : 20 m = 2 000 cm. Dimension sur le plan = … cm", r: "20", nombre: true, unite: "cm", expl: "2 000 : 100 = 20 cm." },
      { t: "saisie", q: "Échelle 1/1 000. Dimension réelle : 50 m. Dimension sur le plan = … cm", r: "5", nombre: true, unite: "cm", aide: "Convertis d'abord 50 m en cm.", expl: "50 m = 5 000 cm ; 5 000 : 1 000 = 5 cm." },
      { t: "saisie", q: "Dakar–Thiès : 70 km, échelle 1/1 000 000. 70 km = 7 000 000 cm. Dimension sur le plan = … cm", r: "7", nombre: true, unite: "cm", expl: "7 000 000 : 1 000 000 = 7 cm." }
    ],
    [
      { t: "saisie", q: "Échelle 1/500. Sur le plan : 12 mm. Dimension réelle = … m", r: "6", nombre: true, unite: "m", expl: "12 × 500 = 6 000 mm = 6 m." },
      { t: "saisie", q: "Échelle 1/100 000. Dimension réelle : 3 km. Dimension sur le plan = … cm", r: "3", nombre: true, unite: "cm", expl: "3 km = 300 000 cm ; 300 000 : 100 000 = 3 cm." },
      { t: "qcm", q: "Moussa veut placer sur un plan au 1/1 000 un mur de 30 m. Il écrit 30 : 1 000 = 0,03. Quelle est son erreur ?", choix: ["Il n'a pas converti 30 m en cm : 3 000 cm : 1 000 = 3 cm.", "Il fallait multiplier.", "Il n'y a pas d'erreur."], r: "Il n'a pas converti 30 m en cm : 3 000 cm : 1 000 = 3 cm.", expl: "On convertit la dimension réelle avant de diviser ; ici en cm, l'unité du plan." },
      { t: "vf", q: "À l'échelle 1/1 000, un plan est plus réduit qu'à l'échelle 1/100.", r: true, expl: "Au 1/1 000, 1 cm représente 1 000 cm ; au 1/100, seulement 100 cm. Plus le dénominateur est grand, plus le dessin est réduit." },
      { t: "saisie", q: "Carte au 1/500 000. Deux villages sont à 4 cm l'un de l'autre. Distance réelle = … km", r: "20", nombre: true, unite: "km", expl: "4 × 500 000 = 2 000 000 cm = 20 km." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1/100 : 7 cm sur le plan → [7] m en réalité — 1/1 000 : 25 m en réalité → [2,5|2.5] cm sur le plan — 1/200 : 10 cm sur le plan → [20] m en réalité", expl: "7 × 100 = 700 cm = 7 m ; 2 500 cm : 1 000 = 2,5 cm ; 10 × 200 = 2 000 cm = 20 m." }
    ],
    [
      { t: "probleme", q: "Sur le plan d'une maison à l'échelle 1/50, la chambre de Khady mesure 10 cm sur 8 cm.", etapes: [{ q: "Étape 1 : longueur réelle (en m)", r: "5", unite: "m" }, { q: "Étape 2 : largeur réelle (en m)", r: "4", unite: "m" }, { q: "Étape 3 : périmètre réel de la chambre (en m)", r: "18", unite: "m" }], expl: "10 × 50 = 500 cm = 5 m ; 8 × 50 = 400 cm = 4 m ; (5 + 4) × 2 = 18 m." },
      { t: "probleme", q: "On veut dessiner un terrain rectangulaire de 30 m sur 20 m sur un plan à l'échelle 1/500.", etapes: [{ q: "Étape 1 : longueur sur le plan (en cm)", r: "6", unite: "cm" }, { q: "Étape 2 : largeur sur le plan (en cm)", r: "4", unite: "cm" }], expl: "30 m = 3 000 cm ; 3 000 : 500 = 6 cm. 20 m = 2 000 cm ; 2 000 : 500 = 4 cm." },
      { t: "probleme", q: "Sur une carte au 1/1 000 000, la route de Dakar à Saint-Louis mesure 26 cm.", etapes: [{ q: "Étape 1 : distance réelle en cm", r: "26000000", unite: "cm" }, { q: "Étape 2 : distance réelle en km", r: "260", unite: "km" }], expl: "26 × 1 000 000 = 26 000 000 cm = 260 km." },
      { t: "probleme", q: "La distance entre Dakar et Thiès est de 70 km. Elle est représentée à l'échelle 1/1 000 000. Trouve sa dimension sur le plan.", etapes: [{ q: "Étape 1 : 70 km en cm", r: "7000000", unite: "cm" }, { q: "Étape 2 : dimension sur le plan (en cm)", r: "7", unite: "cm" }], expl: "70 km = 7 000 000 cm ; 7 000 000 : 1 000 000 = 7 cm." },
      { t: "qcm", q: "Sur un plan au 1/200, la cour de l'école mesure 15 cm de long. Quelle est sa longueur réelle ?", choix: ["30 m", "3 m", "300 m", "15 m"], r: "30 m", expl: "15 × 200 = 3 000 cm = 30 m." }
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
      { t: "qcm", q: "Une corde est tendue entre deux arbres. On y accroche 5 lanternes, aucune contre les arbres. Combien y a-t-il d'intervalles ?", choix: ["6", "5", "4"], r: "6", aide: "Fais un croquis : arbre — lanterne — … — lanterne — arbre.", expl: "Rien aux extrémités : NI = NO + 1 = 6." },
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


/* ---- ma-mes-longueur-intervalle.js ---- */
// À VÉRIFIER : au cahier (photo 0093), les formules de la ligne ouverte sont mal parenthésées :
// « LI = (LT : NO) − 1 » et « LI = (LT : NO) + 1 ». On ne retranche pas 1 à une longueur : on corrige le NOMBRE
// d'intervalles avant de diviser. Le module enseigne LI = LT : (NO − 1) et LI = LT : (NO + 1),
// comme l'exemple du cahier lui-même (51 − 1 = 50 intervalles ; 450 : 50 = 9 m).
LECONS.push({
  id: "ma-mes-longueur-intervalle",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Calcul de la longueur d'un intervalle (LI) et de la longueur totale (LT)",
  date: "2026-11-09",
  photos: ["DJI_20261118221221_0092_D.jpg", "DJI_20261118221227_0093_D.jpg", "DJI_20261118221235_0094_D.jpg"],
  retiens:
    "<p>LI = longueur d'un intervalle ; LT = longueur totale ; NO = nombre d'objets.</p>" +
    "<p><b>Sur une ligne fermée</b> (il y a autant d'intervalles que d'objets) :</p>" +
    "<ul><li><b>LI = LT : NO</b></li><li><b>LT = LI × NO</b></li></ul>" +
    "<p>Exemple : une parcelle rectangulaire de 140 m de périmètre est entourée d'un grillage soutenu par 35 piquets. Longueur d'un intervalle : 140 m : 35 = 4 m.</p>" +
    "<p><b>Sur une ligne ouverte</b>, on cherche d'abord le <b>nombre d'intervalles</b>, puis on divise :</p>" +
    "<table><tr><th>Ligne ouverte</th><th>Longueur d'un intervalle</th></tr>" +
    "<tr><td>un objet à chaque extrémité</td><td>LI = LT : (NO − 1)</td></tr>" +
    "<tr><td>un objet à une seule extrémité</td><td>LI = LT : NO</td></tr>" +
    "<tr><td>aucun objet aux extrémités</td><td>LI = LT : (NO + 1)</td></tr></table>" +
    "<p>Exemple : tout au long d'une avenue de 450 m, on a planté 51 arbres, un à chaque extrémité.<br>" +
    "Nombre d'intervalles : 51 − 1 = 50<br>Longueur d'un intervalle : 450 m : 50 = 9 m</p>" +
    "<p>Pour trouver la longueur totale, on fait l'inverse : <b>LT = LI × nombre d'intervalles</b>.</p>",
  astuce: "On ne divise jamais une longueur par un nombre d'<b>objets</b> sans réfléchir : on divise par le nombre d'<b>intervalles</b>. Fais le croquis, compte les intervalles, puis divise.",
  regle: "Longueur d'un intervalle = longueur totale : nombre d'intervalles ; longueur totale = longueur d'un intervalle × nombre d'intervalles. Le nombre d'intervalles dépend de la ligne (fermée ou ouverte) et des extrémités.",
  niveaux: [
    [
      { t: "qcm", q: "Sur une ligne fermée, comment calcule-t-on la longueur d'un intervalle ?", choix: ["LT : NO", "LT × NO", "LT − NO"], r: "LT : NO", expl: "Sur une ligne fermée, il y a autant d'intervalles que d'objets : on partage la longueur totale par NO." },
      { t: "qcm", q: "Sur une ligne fermée, comment calcule-t-on la longueur totale ?", choix: ["LI × NO", "LI : NO", "LI + NO"], r: "LI × NO", expl: "On met bout à bout autant d'intervalles que d'objets : LT = LI × NO." },
      { t: "qcm", q: "Ligne ouverte avec un arbre à chaque extrémité : quelle formule est juste ?", choix: ["LI = LT : (NO − 1)", "LI = (LT : NO) − 1", "LI = LT : NO"], r: "LI = LT : (NO − 1)", expl: "On enlève 1 au nombre d'arbres pour avoir le nombre d'intervalles, puis on divise la longueur par ce nombre." },
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["LI", "longueur d'un intervalle"], ["LT", "longueur totale"], ["NO", "nombre d'objets"]], expl: "Ce sont les abréviations de la leçon." },
      { t: "vf", q: "Pour l'avenue de 450 m avec 51 arbres (un à chaque bout), il y a 50 intervalles.", r: true, expl: "51 − 1 = 50 intervalles, puis 450 : 50 = 9 m." },
      { t: "saisie", q: "Parcelle de 140 m de périmètre, 35 piquets tout autour. Longueur d'un intervalle = … m", r: "4", nombre: true, unite: "m", expl: "Ligne fermée : 140 : 35 = 4 m." }
    ],
    [
      { t: "saisie", q: "Ligne fermée : 120 m, 30 piquets. LI = … m", r: "4", nombre: true, unite: "m", expl: "120 : 30 = 4 m." },
      { t: "saisie", q: "Ligne fermée : 24 poteaux espacés de 5 m. LT = … m", r: "120", nombre: true, unite: "m", expl: "LT = LI × NO = 5 × 24 = 120 m." },
      { t: "saisie", q: "Avenue de 450 m, 51 arbres, un à chaque extrémité. LI = … m", r: "9", nombre: true, unite: "m", expl: "51 − 1 = 50 intervalles ; 450 : 50 = 9 m." },
      { t: "saisie", q: "Rue de 200 m, 21 lampadaires, un à chaque bout. LI = … m", r: "10", nombre: true, unite: "m", expl: "21 − 1 = 20 intervalles ; 200 : 20 = 10 m." },
      { t: "saisie", q: "Allée de 60 m, 12 pots, un pot à une seule extrémité. LI = … m", r: "5", nombre: true, unite: "m", expl: "NI = NO = 12 ; 60 : 12 = 5 m." },
      { t: "saisie", q: "Corde de 36 m tendue entre deux poteaux, 8 fanions, aucun contre les poteaux. LI = … m", r: "4", nombre: true, unite: "m", expl: "8 + 1 = 9 intervalles ; 36 : 9 = 4 m." },
      { t: "saisie", q: "Ligne ouverte, un arbre à chaque bout : 15 arbres espacés de 6 m. LT = … m", r: "84", nombre: true, unite: "m", expl: "15 − 1 = 14 intervalles ; 14 × 6 = 84 m." },
      { t: "saisie", q: "Rond-point : 18 palmiers espacés de 3 m. Longueur du tour = … m", r: "54", nombre: true, unite: "m", expl: "Ligne fermée : 18 × 3 = 54 m." },
      { t: "saisie", q: "Ligne ouverte sans objet aux bouts : 9 bornes espacées de 2 m. LT = … m", r: "20", nombre: true, unite: "m", expl: "9 + 1 = 10 intervalles ; 10 × 2 = 20 m." }
    ],
    [
      { t: "qcm", q: "Rue de 300 m, 31 arbres, un à chaque bout. Fatou calcule (300 : 31) − 1. Quel est le bon calcul ?", choix: ["300 : (31 − 1) = 10 m", "300 : 31 + 1", "300 − 31"], r: "300 : (31 − 1) = 10 m", expl: "On corrige d'abord le nombre d'intervalles (31 − 1 = 30), puis on divise : 300 : 30 = 10 m." },
      { t: "qcm", q: "Une haie de 48 m, 11 piquets, aucun aux extrémités. Combien mesure un intervalle ?", choix: ["4 m", "4,8 m", "4,36 m"], r: "4 m", expl: "11 + 1 = 12 intervalles ; 48 : 12 = 4 m." },
      { t: "vf", q: "Sur une ligne fermée de 100 m avec 20 piquets, et sur une ligne ouverte de 100 m avec 21 piquets dont un à chaque bout, l'intervalle est le même.", r: true, expl: "Fermée : 100 : 20 = 5 m. Ouverte : 21 − 1 = 20 intervalles, 100 : 20 = 5 m." },
      { t: "saisie", q: "Piste de 1 km, un poteau à chaque bout, 101 poteaux. LI = … m", r: "10", nombre: true, unite: "m", aide: "Convertis 1 km en mètres.", expl: "1 km = 1 000 m ; 101 − 1 = 100 intervalles ; 1 000 : 100 = 10 m." },
      { t: "saisie", q: "Clôture d'un champ carré de 40 m de côté, un piquet tous les 2 m. Nombre de piquets = …", r: "80", nombre: true, expl: "Périmètre : 40 × 4 = 160 m. Ligne fermée : NO = NI = 160 : 2 = 80 piquets." },
      { t: "saisie", q: "Rue de 90 m, un arbre à chaque bout, un arbre tous les 6 m. Nombre d'arbres = …", r: "16", nombre: true, expl: "90 : 6 = 15 intervalles ; un arbre à chaque bout : NO = 15 + 1 = 16 arbres." },
      { t: "trous", q: "Complète.", nombre: true, texte: "Ligne fermée, 300 m, 60 piquets → LI = [5] m — Ligne ouverte, un objet à chaque bout, 41 objets, 200 m → LI = [5] m — Ligne ouverte, rien aux bouts, 4 objets, LI = 3 m → LT = [15] m", expl: "300 : 60 = 5 ; 200 : (41 − 1) = 5 ; (4 + 1) × 3 = 15." }
    ],
    [
      { t: "probleme", q: "Un cultivateur plante des arbres sur les deux longueurs de son champ, espacés de 5 m. Il y a un arbre à chaque coin et 9 arbres sur chaque longueur. Trouve la longueur du champ.", etapes: [{ q: "Étape 1 : nombre d'intervalles sur une longueur", r: "8" }, { q: "Étape 2 : longueur du champ (en m)", r: "40", unite: "m" }], expl: "Ligne ouverte avec un arbre à chaque bout : 9 − 1 = 8 intervalles ; 8 × 5 = 40 m." },
      { t: "probleme", q: "Six enfants jouent à la chandelle. Ils sont assis en cercle et chaque intervalle mesure 1,5 m. Trouve la longueur du cercle.", etapes: [{ q: "Étape 1 : nombre d'intervalles", r: "6" }, { q: "Étape 2 : longueur du cercle (en m)", r: "9", unite: "m" }], expl: "Le cercle est une ligne fermée : 6 enfants, 6 intervalles ; 6 × 1,5 = 9 m." },
      { t: "probleme", q: "Pour protéger une parcelle rectangulaire de 140 m de périmètre, on l'entoure d'un grillage soutenu par 35 piquets. Chaque piquet coûte 750 F.", etapes: [{ q: "Étape 1 : longueur d'un intervalle (en m)", r: "4", unite: "m" }, { q: "Étape 2 : prix des piquets (en F)", r: "26250", unite: "F" }], expl: "Ligne fermée : 140 : 35 = 4 m ; 750 × 35 = 26 250 F." },
      { t: "probleme", q: "La mairie de Thiès plante des arbres des deux côtés d'une avenue de 450 m, avec un arbre à chaque extrémité et un arbre tous les 9 m.", etapes: [{ q: "Étape 1 : nombre d'intervalles d'un côté", r: "50" }, { q: "Étape 2 : nombre d'arbres d'un côté", r: "51" }, { q: "Étape 3 : nombre d'arbres en tout", r: "102" }], expl: "450 : 9 = 50 intervalles ; un arbre à chaque bout : 50 + 1 = 51 ; deux côtés : 51 × 2 = 102 arbres." },
      { t: "probleme", q: "Autour d'un terrain carré de 25 m de côté, on plante un poteau tous les 2,5 m.", etapes: [{ q: "Étape 1 : périmètre du terrain (en m)", r: "100", unite: "m" }, { q: "Étape 2 : nombre de poteaux", r: "40" }], expl: "25 × 4 = 100 m ; ligne fermée : NO = NI = 100 : 2,5 = 40 poteaux." },
      { t: "probleme", q: "Le champ rectangulaire de ton oncle a 45 m de largeur. Il est entouré de 54 piquets distants de 5 m les uns des autres. Calcule la longueur du champ.", etapes: [{ q: "Étape 1 : périmètre du champ", r: "270", unite: "m" }, { q: "Étape 2 : demi-périmètre", r: "135", unite: "m" }, { q: "Étape 3 : longueur du champ", r: "90", unite: "m" }], expl: "Ligne fermée : 54 × 5 = 270 m ; 270 : 2 = 135 m ; 135 − 45 = 90 m." },
      { t: "probleme", q: "On installe des lampadaires tous les 20 m des deux côtés d'une route de 10 km, sans lampadaire aux deux extrémités.", etapes: [{ q: "Étape 1 : 10 km en m", r: "10000", unite: "m" }, { q: "Étape 2 : nombre d'intervalles d'un côté", r: "500" }, { q: "Étape 3 : lampadaires d'un côté", r: "499" }, { q: "Étape 4 : lampadaires des deux côtés", r: "998" }], expl: "10 000 : 20 = 500 intervalles ; rien aux extrémités : 500 − 1 = 499 lampadaires ; deux côtés : 499 × 2 = 998." }
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


/* ---- ma-num-addition.js ---- */
// À VÉRIFIER : la règle de l'addition est recopiée sans « les unités sous les unités » (photo 0066 : « on pose les unités sous les dizaines sous les dizaines… »). Le module donne la règle complète : unités sous les unités, dizaines sous les dizaines, centaines sous les centaines.
LECONS.push({
  id: "ma-num-addition",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "L'addition des nombres entiers",
  date: "2026-09-23",
  photos: ["DJI_20261118220819_0066_D.jpg"],
  retiens:
    "<p>L'<b>addition</b> est la réunion en une seule quantité de plusieurs quantités (masses, contenances, longueurs, prix…).</p>" +
    "<p>On ne peut additionner que des grandeurs <b>de même espèce</b> (même unité). Ex : 6 800 m + 7 550 m + 7 000 m = 21 350 m.</p>" +
    "<p>Pour effectuer une addition, on pose <b>les unités sous les unités, les dizaines sous les dizaines, les centaines sous les centaines</b>… On commence par la <b>droite</b> et on reporte les <b>retenues</b>.</p>" +
    "<table><tr><th></th><th>dm</th><th>um</th><th>c</th><th>d</th><th>u</th></tr>" +
    "<tr><td></td><td></td><td>6</td><td>8</td><td>0</td><td>0</td></tr>" +
    "<tr><td></td><td></td><td>7</td><td>5</td><td>5</td><td>0</td></tr>" +
    "<tr><td>+</td><td></td><td>7</td><td>0</td><td>0</td><td>0</td></tr>" +
    "<tr><td></td><td><b>2</b></td><td><b>1</b></td><td><b>3</b></td><td><b>5</b></td><td><b>0</b></td></tr>" +
    "</table>",
  astuce: "Un chiffre par colonne, bien alignés à droite : les unités de tous les nombres doivent être dans la même colonne.",
  regle: "On additionne seulement des grandeurs de même unité ; on pose unités sous unités, dizaines sous dizaines…, on commence par la droite et on reporte les retenues.",
  niveaux: [
    [
      { t: "qcm", q: "L'addition sert à…", choix: ["réunir plusieurs quantités en une seule", "partager une quantité", "chercher ce qui reste"], r: "réunir plusieurs quantités en une seule", expl: "L'addition est la réunion de plusieurs quantités en une seule." },
      { t: "vf", q: "On peut additionner 5 kg et 3 m.", r: false, expl: "On n'additionne que des grandeurs de même espèce : des kg avec des kg, des m avec des m." },
      { t: "qcm", q: "Pour poser une addition, on place…", choix: ["les unités sous les unités, les dizaines sous les dizaines…", "les nombres alignés à gauche", "le plus grand nombre en bas"], r: "les unités sous les unités, les dizaines sous les dizaines…", expl: "Chaque chiffre va dans sa colonne : unités sous unités, dizaines sous dizaines, etc." },
      { t: "qcm", q: "Par où commence-t-on une addition posée ?", choix: ["par la droite (les unités)", "par la gauche", "par le milieu"], r: "par la droite (les unités)", expl: "On commence par les unités, à droite, pour pouvoir reporter les retenues." },
      { t: "classer", q: "Peut-on faire directement cette addition ?", cases: ["oui, même unité", "non, unités différentes"], items: [["6 800 m + 7 550 m", "oui, même unité"], ["25 kg + 10 kg", "oui, même unité"], ["300 F + 2 l", "non, unités différentes"], ["4 m + 6 kg", "non, unités différentes"], ["12 l + 8 l", "oui, même unité"], ["50 F + 3 m", "non, unités différentes"]], expl: "On additionne seulement des grandeurs de même espèce." },
      { t: "vf", q: "6 800 m + 7 550 m + 7 000 m = 21 350 m", r: true, expl: "C'est l'exemple du cahier : 6 800 + 7 550 = 14 350 ; 14 350 + 7 000 = 21 350." }
    ],
    [
      { t: "saisie", q: "4 325 + 2 674 = ?", r: ["6 999", "6999", "6.999"], expl: "Sans retenue : 6 999." },
      { t: "saisie", q: "3 658 + 1 476 = ?", r: ["5 134", "5134", "5.134"], expl: "8 + 6 = 14, je pose 4 et retiens 1… Résultat : 5 134." },
      { t: "saisie", q: "25 806 + 9 397 = ?", r: ["35 203", "35203", "35.203"], expl: "N'oublie pas les retenues : 35 203." },
      { t: "saisie", q: "6 800 + 7 550 + 7 000 = ?", r: ["21 350", "21350", "21.350"], expl: "C'est l'exemple du cahier : 21 350." },
      { t: "saisie", q: "12 450 + 8 075 + 650 = ?", r: ["21 175", "21175", "21.175"], expl: "Aligne bien les unités : 650 n'a que 3 chiffres. Résultat : 21 175." },
      { t: "trous", q: "Calcule 478 + 356 colonne par colonne.", texte: "Unités : 8 + 6 = [14], j'écris [4] et je retiens 1. Dizaines : 1 + 7 + 5 = [13], j'écris [3] et je retiens 1. Centaines : 1 + 4 + 3 = [8]. Résultat : [834].", nombre: true, expl: "On commence par la droite et on reporte chaque retenue dans la colonne suivante." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Au marché, Awa achète un sac de riz à 15 500 F, de l'huile à 4 750 F et du sucre à 1 800 F.", etapes: [{ q: "Prix du riz et de l'huile :", r: "20250", unite: "F" }, { q: "Combien Awa dépense-t-elle en tout ?", r: "22050", unite: "F" }], expl: "15 500 + 4 750 = 20 250 ; 20 250 + 1 800 = 22 050 F." },
      { t: "saisie", q: "245 kg + 1 380 kg + 75 kg = ? kg", r: ["1 700", "1700", "1.700"], expl: "Même unité, on additionne : 1 700 kg.", unite: "kg" },
      { t: "vf", q: "Pour calculer 2 345 + 87, je place le 7 de 87 sous le 5 de 2 345.", r: true, expl: "Unités sous unités : le 7 (unités) va sous le 5 (unités)." }
    ],
    [
      { t: "vf", q: "Pour calculer 1 250 m + 3 km, je peux faire 1 250 + 3.", r: false, expl: "Les unités sont différentes. Il faut d'abord convertir : 3 km = 3 000 m." },
      { t: "saisie", q: "1 250 m + 3 km = ? m", r: ["4 250", "4250", "4.250"], expl: "3 km = 3 000 m ; 1 250 m + 3 000 m = 4 250 m.", unite: "m" },
      { t: "saisie", q: "99 999 + 1 = ?", r: ["100 000", "100000", "100.000"], expl: "Toutes les retenues s'enchaînent : 100 000." },
      { t: "saisie", q: "47 + 3 508 + 960 = ?", r: ["4 515", "4515", "4.515"], expl: "Attention à l'alignement des unités : 4 515." },
      { t: "qcm", q: "Moussa a calculé 5 607 + 2 895 = 7 402. Qu'en penses-tu ?", choix: ["Il a oublié des retenues", "Il a bien calculé", "Il a soustrait au lieu d'additionner"], r: "Il a oublié des retenues", expl: "6 + 8 + 1 = 15 : il fallait écrire 5 et retenir 1. Le bon résultat est 8 502." },
      { t: "saisie", q: "Écris le bon résultat de 5 607 + 2 895.", r: ["8 502", "8502", "8.502"], expl: "7 + 5 = 12 (je retiens 1) ; 1 + 0 + 9 = 10 (je retiens 1) ; 1 + 6 + 8 = 15 (je retiens 1) ; 1 + 5 + 2 = 8. Résultat : 8 502." },
      { t: "relier", q: "Relie chaque addition à son résultat.", paires: [["1 999 + 1", "2 000"], ["450 + 550", "1 000"], ["2 500 + 2 500", "5 000"], ["7 990 + 10", "8 000"], ["49 500 + 500", "50 000"]], expl: "Calcule de droite à gauche en pensant aux retenues." },
      { t: "vf", q: "Quand on additionne trois nombres, on peut avoir une retenue de 2.", r: true, expl: "Par exemple 9 + 9 + 9 = 27 : on écrit 7 et on retient 2." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un car part de Dakar avec 38 passagers. À Rufisque, 12 passagers montent ; à Thiès, 9 autres montent. Personne ne descend.", etapes: [{ q: "Nombre de passagers après Rufisque :", r: "50" }, { q: "Nombre de passagers après Thiès :", r: "59" }], expl: "38 + 12 = 50 ; 50 + 9 = 59 passagers." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un commerçant de Sandaga vend 1 250 kg de riz lundi, 2 375 kg mardi et 1 890 kg mercredi.", etapes: [{ q: "Riz vendu lundi et mardi :", r: "3625", unite: "kg" }, { q: "Riz vendu en trois jours :", r: "5515", unite: "kg" }], expl: "1 250 + 2 375 = 3 625 ; 3 625 + 1 890 = 5 515 kg." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Khady achète trois rouleaux de grillage : le premier mesure 125 m, le deuxième 248 m et le troisième 87 m.", etapes: [{ q: "Longueur des deux premiers rouleaux :", r: "373", unite: "m" }, { q: "Longueur totale de grillage :", r: "460", unite: "m" }], expl: "125 + 248 = 373 ; 373 + 87 = 460 m." },
      { t: "trous", q: "Complète la chaîne d'additions.", texte: "1 500 + 2 500 = [4000] ; 4 000 + 6 000 = [10000] ; 10 000 + 25 000 = [35000]", nombre: true, expl: "4 000, puis 10 000, puis 35 000." },
      { t: "qcm", q: "Fatou a 12 500 F. Sa tante lui donne 7 500 F et son oncle 5 000 F. Combien a-t-elle maintenant ?", choix: ["25 000 F", "20 000 F", "24 000 F", "15 000 F"], r: "25 000 F", expl: "12 500 + 7 500 = 20 000 ; 20 000 + 5 000 = 25 000 F." },
      { t: "saisie", q: "Pose et calcule : 259,6 + 1 234 + 2,74 = …", r: "1496,34", nombre: true, aide: "Aligne les virgules les unes sous les autres.", expl: "259,60 + 1 234,00 + 2,74 = 1 496,34." },
      { t: "saisie", q: "Pose et calcule : 158,8 + 5,9 + 7 = …", r: "171,7", nombre: true, aide: "Écris 7 = 7,0 et aligne les virgules.", expl: "158,8 + 5,9 + 7,0 = 171,7." }
    ]
  ]
});


/* ---- ma-num-comparaison-decimaux.js ---- */
// À VÉRIFIER : le NB du cahier (photo 0097, partielle) cite après les cent-millièmes « les mille-millièmes » : ce rang n'existe pas ; le module écrit « les millionièmes ».
// À VÉRIFIER : photo 0097 sombre et bougée : seul ce qui est lisible avec certitude a été repris (définition, règle, exemple 12,63 > 12,629).
LECONS.push({
  id: "ma-num-comparaison-decimaux",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La comparaison des nombres décimaux",
  date: "2026-11-17",
  photos: ["DJI_20261118221252_0097_D.jpg"],
  retiens:
    "<p><b>Comparer</b> deux nombres différents, c'est dire quel est le plus grand ou le plus petit.</p>" +
    "<p>Pour comparer des nombres décimaux, on compare d'abord :</p>" +
    "<ul><li>les <b>parties entières</b>, puis</li><li>les <b>parties décimales</b>.</li></ul>" +
    "<p><b>NB :</b> si les nombres ont la même partie entière, on compare d'abord les <b>dixièmes</b>, puis les <b>centièmes</b>, les <b>millièmes</b>, les dix-millièmes, les cent-millièmes, les millionièmes.</p>" +
    "<p>Ex : 12,63 &gt; 12,629 (même partie entière 12, mêmes dixièmes 6, mais 3 centièmes &gt; 2 centièmes)</p>" +
    "<p>Le signe <b>&gt;</b> se lit « est plus grand que » ; le signe <b>&lt;</b> se lit « est plus petit que ».</p>",
  astuce: "Attention : le nombre qui a le plus de chiffres après la virgule n'est pas forcément le plus grand ! 12,63 &gt; 12,629. Compare rang par rang, en partant de la virgule.",
  regle: "On compare d'abord les parties entières ; si elles sont égales, on compare les dixièmes, puis les centièmes, puis les millièmes…",
  niveaux: [
    [
      { t: "qcm", q: "Pour comparer 25,4 et 31,2, je regarde d'abord…", choix: ["les parties entières", "les dixièmes", "le nombre de chiffres"], r: "les parties entières", expl: "On compare d'abord les parties entières : 25 &lt; 31, donc 25,4 &lt; 31,2." },
      { t: "vf", q: "12,63 &gt; 12,629", r: true, expl: "Même partie entière, mêmes dixièmes (6) ; aux centièmes, 3 &gt; 2." },
      { t: "qcm", q: "Pour comparer 12,63 et 12,629, quel rang fait la différence ?", choix: ["les centièmes (3 et 2)", "les dixièmes", "les parties entières"], r: "les centièmes (3 et 2)", expl: "Parties entières égales (12), dixièmes égaux (6) : ce sont les centièmes qui décident." },
      { t: "qcm", q: "Que veut dire le signe &gt; ?", choix: ["est plus grand que", "est plus petit que", "est égal à"], r: "est plus grand que", expl: "La pointe du signe est tournée vers le plus petit nombre." },
      { t: "relier", q: "Relie : qu'est-ce qu'on compare ensuite ?", paires: [["après les dixièmes", "les centièmes"], ["après les centièmes", "les millièmes"], ["après les millièmes", "les dix-millièmes"], ["après les cent-millièmes", "les millionièmes"]], expl: "Dixièmes, centièmes, millièmes, dix-millièmes, cent-millièmes, millionièmes." },
      { t: "vf", q: "8,5 &lt; 7,9", r: false, expl: "Les parties entières décident : 8 &gt; 7, donc 8,5 &gt; 7,9." }
    ],
    [
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "14,2 [>] 13,9 — 5,07 [<] 5,7 — 0,45 [>] 0,405 — 3,6 [<] 3,61", expl: "14 &gt; 13 ; 0 dixième &lt; 7 dixièmes ; 5 centièmes &gt; 0 centième ; 0 centième &lt; 1 centième." },
      { t: "qcm", q: "Quel est le plus grand nombre ?", choix: ["7,8", "7,08", "7,018", "7,1"], r: "7,8", expl: "Même partie entière 7 ; aux dixièmes, 8 est le plus grand chiffre." },
      { t: "qcm", q: "Quel est le plus petit nombre ?", choix: ["2,405", "2,5", "2,45", "2,54"], r: "2,405", expl: "Dixièmes : 4 &lt; 5. Entre 2,45 et 2,405, aux centièmes : 0 &lt; 5." },
      { t: "saisie", q: "Écris le plus grand de ces deux nombres : 45,3 et 45,29.", r: "45.3", nombre: true, expl: "Mêmes parties entières ; aux dixièmes, 3 &gt; 2. Donc 45,3 &gt; 45,29." },
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "26,1 [>] 25,99 — 0,9 [>] 0,89 — 104,5 [<] 140,5 — 9,999 [<] 10", expl: "On compare d'abord les parties entières (26 &gt; 25 ; 104 &lt; 140 ; 9 &lt; 10). Pour 0,9 et 0,89 : 9 dixièmes &gt; 8 dixièmes." },
      { t: "classer", q: "Compare chaque nombre à 5.", cases: ["plus grand que 5", "plus petit que 5"], items: [["5,1", "plus grand que 5"], ["4,99", "plus petit que 5"], ["5,01", "plus grand que 5"], ["4,9", "plus petit que 5"], ["0,5", "plus petit que 5"], ["15,2", "plus grand que 5"]], expl: "Regarde d'abord la partie entière. 5,1 et 5,01 ont 5 unités et des dixièmes ou centièmes en plus : ils sont plus grands que 5." },
      { t: "vf", q: "3,25 &gt; 3,3", r: false, expl: "Mêmes parties entières ; aux dixièmes, 2 &lt; 3. Donc 3,25 &lt; 3,3." },
      { t: "qcm", q: "Quel rangement va du plus petit au plus grand ?", choix: ["2,5 &lt; 2,51 &lt; 2,6", "2,6 &lt; 2,51 &lt; 2,5", "2,51 &lt; 2,5 &lt; 2,6"], r: "2,5 &lt; 2,51 &lt; 2,6", expl: "2,5 et 2,51 ont 5 dixièmes ; 2,51 a 1 centième de plus. 2,6 a 6 dixièmes." },
      { t: "qcm", q: "Quel nombre est compris entre 4,3 et 4,4 ?", choix: ["4,35", "4,5", "4,03", "43,5"], r: "4,35", expl: "4,35 a 3 dixièmes comme 4,3, avec 5 centièmes en plus, et il est plus petit que 4,4." }
    ],
    [
      { t: "vf", q: "12,629 est plus grand que 12,63, parce qu'il a plus de chiffres après la virgule.", r: false, expl: "Ce n'est pas le nombre de chiffres qui compte : aux centièmes, 2 &lt; 3. Donc 12,629 &lt; 12,63." },
      { t: "qcm", q: "Compare : 0,7 … 0,698", choix: ["&gt;", "&lt;"], r: "&gt;", expl: "Aux dixièmes : 7 &gt; 6. Donc 0,7 &gt; 0,698." },
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "1,005 [<] 1,05 — 18,2 [>] 9,87 — 7,0001 [<] 7,001", expl: "1,005 : 0 centième &lt; 5 centièmes. 18 &gt; 9. 7,0001 : 0 millième &lt; 1 millième." },
      { t: "qcm", q: "Deux nombres ont la même partie entière et les mêmes dixièmes. Que compare-t-on ensuite ?", choix: ["les centièmes", "les parties entières", "les millièmes"], r: "les centièmes", expl: "On avance rang par rang : dixièmes, puis centièmes, puis millièmes." },
      { t: "saisie", q: "Écris le plus petit de ces deux nombres : 0,099 et 0,1.", r: "0.099", nombre: true, expl: "Aux dixièmes : 0 &lt; 1. Donc 0,099 &lt; 0,1." },
      { t: "qcm", q: "Quelle comparaison est FAUSSE ?", choix: ["3,45 &gt; 3,5", "3,45 &lt; 3,5", "3,5 &gt; 3,05", "3,05 &lt; 3,45"], r: "3,45 &gt; 3,5", expl: "Aux dixièmes, 4 &lt; 5 : 3,45 est plus petit que 3,5." },
      { t: "saisie", q: "Quel chiffre des centièmes faut-il écrire pour que 5,2? soit plus grand que 5,28 et plus petit que 5,3 ?", r: "9", expl: "5,29 &gt; 5,28 (9 &gt; 8 centièmes) et 5,29 &lt; 5,3 (2 dixièmes &lt; 3 dixièmes)." }
    ],
    [
      { t: "qcm", q: "Lors d'une course à l'école, Moussa fait 12,45 s, Ibrahima 12,5 s et Mamadou 12,405 s. Le plus rapide a le plus petit temps. Qui gagne ?", choix: ["Mamadou", "Moussa", "Ibrahima"], r: "Mamadou", expl: "12,405 &lt; 12,45 &lt; 12,5 : Mamadou a le plus petit temps." },
      { t: "qcm", q: "Awa pèse 32,6 kg, Fatou 32,58 kg et Khady 32,65 kg. Qui est la plus lourde ?", choix: ["Khady", "Awa", "Fatou"], r: "Khady", expl: "Mêmes parties entières. Dixièmes : 6, 5, 6. Entre 32,6 et 32,65, Khady a 5 centièmes de plus." },
      { t: "qcm", q: "Range du plus grand au plus petit : 4,7 ; 4,07 ; 4,77 ; 4,707.", choix: ["4,77 &gt; 4,707 &gt; 4,7 &gt; 4,07", "4,707 &gt; 4,77 &gt; 4,7 &gt; 4,07", "4,07 &gt; 4,7 &gt; 4,707 &gt; 4,77"], r: "4,77 &gt; 4,707 &gt; 4,7 &gt; 4,07", expl: "4,07 a 0 dixième : il est le plus petit. Les autres ont 7 dixièmes ; aux centièmes : 7 &gt; 0 = 0, puis aux millièmes 4,707 &gt; 4,7." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Au marché, trois sacs de riz pèsent 49,8 kg, 50,15 kg et 49,95 kg.", etapes: [{ q: "Masse du sac le plus lourd :", r: "50.15", unite: "kg" }, { q: "Masse du sac le plus léger :", r: "49.8", unite: "kg" }], expl: "50 &gt; 49, donc 50,15 kg est le plus lourd. Entre 49,8 et 49,95 : 8 dixièmes &lt; 9 dixièmes, donc 49,8 kg est le plus léger." },
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "0,5 [>] 0,49 — 100,01 [>] 99,99 — 2,349 [<] 2,35", expl: "5 dixièmes &gt; 4 dixièmes ; 100 &gt; 99 ; aux centièmes, 4 &lt; 5." }
    ]
  ]
});


/* ---- ma-num-divisibilite.js ---- */
// À VÉRIFIER : la règle de divisibilité par 3 est recopiée au cahier « si la somme des chiffres est égale à 3 ou 6 ou 9 » et par 9 « égale à 9 » (photo 0064). Le module donne la règle exacte : somme des chiffres MULTIPLE de 3 (resp. de 9) ; la version du cahier est gardée comme astuce (additionner les chiffres jusqu'à n'en avoir qu'un).
LECONS.push({
  id: "ma-num-divisibilite",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Les caractères de divisibilité par 2, 3, 5 et 9",
  date: "2026-09-21",
  photos: ["DJI_20261118220805_0064_D.jpg", "DJI_20261118220814_0065_D.jpg"],
  retiens:
    "<p>Un nombre est divisible par :</p>" +
    "<ul><li><b>2</b> s'il est <b>pair</b>, c'est-à-dire terminé par <b>0, 2, 4, 6 ou 8</b>. Ex : 1 800 ; 142 ; 44.</li><li><b>5</b> s'il est terminé par <b>0 ou 5</b>. Ex : 15 ; 40.</li><li><b>3</b> si la <b>somme de ses chiffres est un multiple de 3</b> (3, 6, 9, 12, 15, 18…). Ex : 7 005 → 7 + 0 + 0 + 5 = 12, et 12 est un multiple de 3 (1 + 2 = 3).</li><li><b>9</b> si la <b>somme de ses chiffres est un multiple de 9</b> (9, 18, 27…). Ex : 405 → 4 + 0 + 5 = 9.</li></ul>" +
    "<p><b>Remarque</b></p>" +
    "<ul><li>Un nombre divisible par 3 n'est pas obligatoirement divisible par 9. Ex : 15 est divisible par 3 (1 + 5 = 6), mais pas par 9.</li><li>Un nombre divisible par 9 est aussi divisible par 3. Ex : 18 (1 + 8 = 9) est divisible à la fois par 3 et par 9.</li></ul>",
  astuce: "Si la somme des chiffres est grande, additionne encore ses chiffres : 7 005 → 12 → 1 + 2 = 3. Pour être divisible par 3, il faut arriver à <b>3, 6 ou 9</b> ; pour être divisible par 9, il faut arriver à <b>9</b>.",
  regle: "Par 2 : terminé par 0, 2, 4, 6, 8. Par 5 : terminé par 0 ou 5. Par 3 : somme des chiffres multiple de 3. Par 9 : somme des chiffres multiple de 9.",
  niveaux: [
    [
      { t: "qcm", q: "Un nombre est divisible par 2 quand il est…", choix: ["pair", "impair", "terminé par 5", "plus grand que 2"], r: "pair", expl: "Divisible par 2 = pair, terminé par 0, 2, 4, 6 ou 8." },
      { t: "qcm", q: "Par quel chiffre se termine un nombre divisible par 5 ?", choix: ["0 ou 5", "2 ou 5", "5 seulement", "0, 2, 4, 6 ou 8"], r: "0 ou 5", expl: "Un nombre divisible par 5 se termine par 0 ou par 5." },
      { t: "vf", q: "142 est divisible par 2.", r: true, expl: "142 se termine par 2 : il est pair." },
      { t: "vf", q: "40 est divisible par 5.", r: true, expl: "40 se termine par 0." },
      { t: "qcm", q: "Pour savoir si 405 est divisible par 9, je…", choix: ["fais la somme de ses chiffres", "regarde son dernier chiffre", "regarde son premier chiffre"], r: "fais la somme de ses chiffres", expl: "Pour 3 et pour 9, on additionne les chiffres : 4 + 0 + 5 = 9." },
      { t: "vf", q: "Un nombre divisible par 9 est aussi divisible par 3.", r: true, expl: "C'est la remarque de la leçon : 18 est divisible par 9 et aussi par 3." }
    ],
    [
      { t: "classer", q: "Ce nombre est-il divisible par 2 ?", cases: ["divisible par 2", "pas divisible par 2"], items: [["1 800", "divisible par 2"], ["37", "pas divisible par 2"], ["44", "divisible par 2"], ["925", "pas divisible par 2"], ["1 006", "divisible par 2"], ["71", "pas divisible par 2"]], expl: "Regarde le dernier chiffre : 0, 2, 4, 6 ou 8 → divisible par 2." },
      { t: "classer", q: "Ce nombre est-il divisible par 5 ?", cases: ["divisible par 5", "pas divisible par 5"], items: [["15", "divisible par 5"], ["40", "divisible par 5"], ["52", "pas divisible par 5"], ["105", "divisible par 5"], ["3 000", "divisible par 5"], ["504", "pas divisible par 5"]], expl: "Seul le dernier chiffre compte : 0 ou 5 → divisible par 5." },
      { t: "saisie", q: "Calcule la somme des chiffres de 7 005.", r: "12", expl: "7 + 0 + 0 + 5 = 12." },
      { t: "qcm", q: "7 005 est-il divisible par 3 ?", choix: ["Oui, car 7 + 0 + 0 + 5 = 12 et 12 est un multiple de 3", "Non, car il se termine par 5", "Non, car 12 n'est pas égal à 3"], r: "Oui, car 7 + 0 + 0 + 5 = 12 et 12 est un multiple de 3", expl: "La somme n'a pas besoin d'être égale à 3 : il suffit qu'elle soit un multiple de 3 (12 → 1 + 2 = 3)." },
      { t: "saisie", q: "Calcule la somme des chiffres de 405.", r: "9", expl: "4 + 0 + 5 = 9 : 405 est divisible par 9 (et par 3)." },
      { t: "vf", q: "18 est divisible par 3 et par 9.", r: true, expl: "1 + 8 = 9 : 18 est divisible par 9, donc aussi par 3." },
      { t: "vf", q: "15 est divisible par 9.", r: false, expl: "1 + 5 = 6 : 6 n'est pas un multiple de 9. 15 est divisible par 3, pas par 9." },
      { t: "classer", q: "Ce nombre est-il divisible par 3 ? Additionne ses chiffres.", cases: ["divisible par 3", "pas divisible par 3"], items: [["51", "divisible par 3"], ["74", "pas divisible par 3"], ["123", "divisible par 3"], ["250", "pas divisible par 3"], ["9 315", "divisible par 3"], ["1 001", "pas divisible par 3"]], expl: "51 → 6 ; 123 → 6 ; 9 315 → 18 : multiples de 3. 74 → 11 ; 250 → 7 ; 1 001 → 2 : non." },
      { t: "classer", q: "Ce nombre est-il divisible par 9 ? Additionne ses chiffres.", cases: ["divisible par 9", "pas divisible par 9"], items: [["81", "divisible par 9"], ["99", "divisible par 9"], ["108", "divisible par 9"], ["2 016", "divisible par 9"], ["105", "pas divisible par 9"], ["300", "pas divisible par 9"], ["1 234", "pas divisible par 9"], ["57", "pas divisible par 9"]], expl: "81 → 9 ; 99 → 18 ; 108 → 9 ; 2 016 → 9. Mais 105 → 6 ; 300 → 3 ; 1 234 → 10 ; 57 → 12." },
      { t: "trous", q: "Complète.", texte: "270 se termine par 0 : il est divisible par [2] et par [5]. La somme de ses chiffres est [9] : il est aussi divisible par 3 et par 9.", nombre: true, expl: "Terminé par 0 → divisible par 2 et par 5. 2 + 7 + 0 = 9 → divisible par 9 et par 3." }
    ],
    [
      { t: "qcm", q: "Quel nombre est divisible par 3 mais PAS par 9 ?", choix: ["15", "18", "27", "81"], r: "15", expl: "1 + 5 = 6 : multiple de 3, pas de 9. Pour 18, 27 et 81, la somme est 9." },
      { t: "qcm", q: "Quel nombre est divisible à la fois par 2 et par 5 ?", choix: ["130", "135", "132", "155"], r: "130", expl: "Pour être divisible par 2 et par 5, il faut finir par 0." },
      { t: "vf", q: "7 005 est divisible par 9.", r: false, expl: "7 + 0 + 0 + 5 = 12 : 12 est un multiple de 3, mais pas de 9." },
      { t: "vf", q: "Un nombre dont la somme des chiffres vaut 12 est divisible par 3.", r: true, expl: "12 est un multiple de 3 (3 × 4 = 12). La somme n'a pas besoin d'être exactement 3, 6 ou 9." },
      { t: "qcm", q: "5 994 est divisible…", choix: ["par 3 et par 9", "par 3 seulement", "par 9 seulement", "ni par 3, ni par 9"], r: "par 3 et par 9", expl: "5 + 9 + 9 + 4 = 27 : 27 est un multiple de 9 (2 + 7 = 9), donc aussi de 3." },
      { t: "saisie", q: "Quel chiffre faut-il écrire à la place du ? pour que 5?3 soit divisible par 9 ?", r: "1", expl: "5 + 1 + 3 = 9. Avec un autre chiffre, la somme ne serait pas un multiple de 9." },
      { t: "classer", q: "Range chaque nombre.", cases: ["par 2 et par 5", "par 5 seulement", "par 2 seulement"], items: [["60", "par 2 et par 5"], ["75", "par 5 seulement"], ["84", "par 2 seulement"], ["1 000", "par 2 et par 5"], ["205", "par 5 seulement"], ["316", "par 2 seulement"]], expl: "Fini par 0 → par 2 et par 5 ; fini par 5 → par 5 seulement ; fini par 2, 4, 6, 8 → par 2 seulement." }
    ],
    [
      { t: "qcm", q: "Le directeur veut ranger les 135 élèves de l'école en rangs de 5, sans qu'il reste personne. Est-ce possible ?", choix: ["Oui, car 135 se termine par 5", "Non, car 135 est impair", "Non, car 135 ne se termine pas par 0"], r: "Oui, car 135 se termine par 5", expl: "Un nombre terminé par 0 ou 5 est divisible par 5 : 135 élèves font 27 rangs de 5." },
      { t: "qcm", q: "Au marché, Khady veut partager 1 254 F entre ses 2 enfants, sans reste. Est-ce possible ?", choix: ["Oui, car 1 254 est pair", "Non, car 1 254 est impair", "Non, car 1 254 ne se termine pas par 0"], r: "Oui, car 1 254 est pair", expl: "1 254 se termine par 4 : il est pair, donc divisible par 2." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Cherche les plus petits nombres de 3 chiffres qui conviennent.", etapes: [{ q: "Le plus petit nombre de 3 chiffres divisible par 2 et par 5 :", r: "100" }, { q: "Le plus petit nombre de 3 chiffres divisible par 3 :", r: "102" }, { q: "Le plus petit nombre de 3 chiffres divisible par 9 :", r: "108" }], expl: "100 finit par 0. 1 + 0 + 2 = 3. 1 + 0 + 8 = 9 (de 100 à 107, la somme va seulement de 1 à 8)." },
      { t: "classer", q: "Range chaque nombre.", cases: ["par 9 (donc aussi par 3)", "par 3, mais pas par 9", "ni par 3, ni par 9"], items: [["711", "par 9 (donc aussi par 3)"], ["1 008", "par 9 (donc aussi par 3)"], ["222", "par 3, mais pas par 9"], ["4 002", "par 3, mais pas par 9"], ["1 000", "ni par 3, ni par 9"], ["3 104", "ni par 3, ni par 9"]], expl: "711 → 9 ; 1 008 → 9 ; 222 → 6 ; 4 002 → 6 ; 1 000 → 1 ; 3 104 → 8." },
      { t: "vf", q: "3 330 est divisible par 2, par 3, par 5 et par 9.", r: true, expl: "Il finit par 0 (par 2 et par 5) et 3 + 3 + 3 + 0 = 9 (par 9 et par 3)." },
      { t: "saisie", q: "Quel chiffre des unités faut-il écrire pour que 47? soit divisible par 2 ET par 5 ?", r: "0", expl: "Pour être divisible à la fois par 2 et par 5, un nombre doit se terminer par 0 : 470." }
    ]
  ]
});


/* ---- ma-num-division-technique.js ---- */
// À VÉRIFIER : le NB du cahier (photo 0088) est confus : « Pour diviser un nombre entier par un nombre entier égal ou supérieur au diviseur ». Le module l'interprète comme : on prend au dividende assez de chiffres pour obtenir un nombre égal ou supérieur au diviseur (ce que montrent les arcs rouges sur 108 et 62 dans les exemples).
LECONS.push({
  id: "ma-num-division-technique",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La technique opératoire de la division à un ou deux chiffres au quotient",
  date: "2026-11-03",
  photos: ["DJI_20261118221147_0087_D.jpg", "DJI_20261118221156_0088_D.jpg"],
  retiens:
    "<p>Division d'un nombre entier par un nombre entier.</p>" +
    "<p><b>Ex 1 : 108 : 12.</b> 10 est plus petit que 12, alors je prends <b>108</b>. En 108, combien de fois 12 ? <b>9</b> fois (9 × 12 = 108). 108 − 108 = 0. Le quotient est 9, le reste 0.</p>" +
    "<table><tr><td>108</td><td>12</td></tr>" +
    "<tr><td>− 108</td><td><b>9</b></td></tr>" +
    "<tr><td>000</td><td></td></tr>" +
    "</table>" +
    "<p><b>Ex 2 : 625 : 25.</b> Je prends <b>62</b>. En 62, combien de fois 25 ? <b>2</b> fois (2 × 25 = 50). 62 − 50 = 12. J'<b>abaisse</b> le 5 : 125. En 125, combien de fois 25 ? <b>5</b> fois (5 × 25 = 125). 125 − 125 = 0. Le quotient est 25.</p>" +
    "<table><tr><td>625</td><td>25</td></tr>" +
    "<tr><td>− 50↓</td><td><b>25</b></td></tr>" +
    "<tr><td>125</td><td></td></tr>" +
    "<tr><td>− 125</td><td></td></tr>" +
    "<tr><td>000</td><td></td></tr>" +
    "</table>" +
    "<p><b>NB :</b></p>" +
    "<ul><li>on prend au dividende assez de chiffres pour avoir un nombre <b>égal ou supérieur au diviseur</b> ;</li><li>on effectue l'opération (combien de fois ? on multiplie, on soustrait) ;</li><li>on <b>abaisse le chiffre suivant</b> du dividende avant de poursuivre l'opération ;</li><li>et ainsi de suite jusqu'à la fin.</li></ul>",
  astuce: "À chaque tour : <b>combien de fois ? → je multiplie → je soustrais → j'abaisse</b>. Le reste doit toujours être plus petit que le diviseur.",
  regle: "On prend assez de chiffres pour dépasser (ou égaler) le diviseur, on cherche combien de fois, on multiplie, on soustrait, puis on abaisse le chiffre suivant.",
  niveaux: [
    [
      { t: "qcm", q: "Pour calculer 625 : 25, par quoi commence-t-on ?", choix: ["on prend 62", "on prend 6", "on prend 625"], r: "on prend 62", expl: "6 est plus petit que 25 ; 62 est plus grand : on commence par 62." },
      { t: "qcm", q: "En 62, combien de fois 25 ?", choix: ["2", "3", "1"], r: "2", expl: "2 × 25 = 50 et 3 × 25 = 75, c'est trop : 2 fois." },
      { t: "vf", q: "Après avoir soustrait, on abaisse le chiffre suivant du dividende.", r: true, expl: "62 − 50 = 12, puis on abaisse le 5 : 125." },
      { t: "qcm", q: "108 : 12 = ?", choix: ["9", "8", "10", "90"], r: "9", expl: "9 × 12 = 108." },
      { t: "vf", q: "Pour calculer 108 : 12, on prend d'abord 10.", r: false, expl: "10 est plus petit que 12 : on doit prendre 108." },
      { t: "relier", q: "Relie chaque division à son quotient.", paires: [["108 : 12", "9"], ["625 : 25", "25"], ["75 : 5", "15"], ["72 : 6", "12"]], expl: "Vérifie avec une multiplication : 9 × 12 = 108 ; 25 × 25 = 625 ; 15 × 5 = 75 ; 12 × 6 = 72." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 625 : 25.", etapes: [{ q: "En 62, combien de fois 25 ?", r: "2" }, { q: "62 − 50 = ?", r: "12" }, { q: "Après avoir abaissé le 5, quel nombre obtient-on ?", r: "125" }, { q: "Quel est le quotient de 625 : 25 ?", r: "25" }], expl: "2 fois 25 = 50 ; 62 − 50 = 12 ; on abaisse 5 → 125 ; 5 fois 25 = 125. Quotient 25." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 384 : 6.", etapes: [{ q: "En 38, combien de fois 6 ?", r: "6" }, { q: "Quel est le premier reste (38 − 36) ?", r: "2" }, { q: "Quel est le quotient de 384 : 6 ?", r: "64" }], expl: "6 × 6 = 36 ; 38 − 36 = 2 ; on abaisse 4 → 24 ; 4 × 6 = 24. Quotient 64." },
      { t: "saisie", q: "96 : 4 = ?", r: "24", expl: "En 9, 2 fois 4 (reste 1) ; on abaisse 6 → 16 ; 4 fois 4. Quotient 24." },
      { t: "saisie", q: "455 : 5 = ?", r: "91", expl: "En 45, 9 fois 5 (reste 0) ; on abaisse 5 → 5 ; 1 fois 5. Quotient 91." },
      { t: "saisie", q: "432 : 12 = ?", r: "36", expl: "En 43, 3 fois 12 (reste 7) ; on abaisse 2 → 72 ; 6 fois 12. Quotient 36." },
      { t: "saisie", q: "918 : 27 = ?", r: "34", expl: "En 91, 3 fois 27 (reste 10) ; on abaisse 8 → 108 ; 4 fois 27. Quotient 34." },
      { t: "saisie", q: "1 344 : 32 = ?", r: "42", expl: "En 134, 4 fois 32 (reste 6) ; on abaisse 4 → 64 ; 2 fois 32. Quotient 42." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 587 : 9.", etapes: [{ q: "Quotient :", r: "65" }, { q: "Reste :", r: "2" }], expl: "En 58, 6 fois 9 (reste 4) ; on abaisse 7 → 47 ; 5 fois 9 = 45, reste 2. Vérification : (65 × 9) + 2 = 587." },
      { t: "saisie", q: "2 052 : 54 = ?", r: "38", expl: "En 205, 3 fois 54 (reste 43) ; on abaisse 2 → 432 ; 8 fois 54. Quotient 38." }
    ],
    [
      { t: "qcm", q: "Combien de chiffres aura le quotient de 384 : 6 ?", choix: ["2", "1", "3"], r: "2", expl: "3 est plus petit que 6, on commence par 38 : il reste ensuite un seul chiffre à abaisser. Le quotient a 2 chiffres (64)." },
      { t: "saisie", q: "420 : 6 = ?", r: "70", expl: "En 42, 7 fois 6 (reste 0) ; on abaisse 0 → 0 ; 0 fois 6 : on écrit 0 au quotient ! Quotient 70." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 963 : 32.", etapes: [{ q: "Quotient :", r: "30" }, { q: "Reste :", r: "3" }], expl: "En 96, 3 fois 32 (reste 0) ; on abaisse 3 → 3 ; en 3, 0 fois 32 : on écrit 0. Quotient 30, reste 3." },
      { t: "vf", q: "Le quotient de 963 : 32 est 3.", r: false, expl: "Après avoir abaissé le 3, on doit écrire 0 au quotient : 30 (reste 3)." },
      { t: "qcm", q: "Aïssatou a trouvé 875 : 25 = 35. Comment vérifier ?", choix: ["35 × 25 = 875", "35 + 25 = 875", "875 × 25"], r: "35 × 25 = 875", expl: "Dividende = quotient × diviseur + reste : 35 × 25 = 875, le reste est 0." },
      { t: "saisie", q: "1 000 : 40 = ?", r: "25", expl: "En 100, 2 fois 40 (reste 20) ; on abaisse 0 → 200 ; 5 fois 40. Quotient 25." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 500 : 12.", etapes: [{ q: "Quotient :", r: "41" }, { q: "Reste :", r: "8" }], expl: "En 50, 4 fois 12 (reste 2) ; on abaisse 0 → 20 ; 1 fois 12, reste 8. Vérification : (41 × 12) + 8 = 500." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une école reçoit 624 cahiers à partager également entre ses 24 classes. Un cahier coûte 300 F.", etapes: [{ q: "Nombre de cahiers par classe :", r: "26" }, { q: "Prix des cahiers d'une classe :", r: "7800", unite: "F" }], expl: "624 : 24 = 26 cahiers ; 300 × 26 = 7 800 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un marchand met 875 kg de riz en sacs de 25 kg. Il vend chaque sac 12 500 F.", etapes: [{ q: "Nombre de sacs :", r: "35" }, { q: "Somme reçue pour tous les sacs :", r: "437500", unite: "F" }], expl: "875 : 25 = 35 sacs ; 12 500 × 35 = 437 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un champ de 828 m de long est partagé en 36 parcelles de même longueur.", etapes: [{ q: "Longueur d'une parcelle :", r: "23", unite: "m" }, { q: "Longueur de 5 parcelles :", r: "115", unite: "m" }], expl: "828 : 36 = 23 m ; 23 × 5 = 115 m." },
      { t: "qcm", q: "Quel est le quotient de 1 512 : 28 ?", choix: ["54", "45", "504", "64"], r: "54", expl: "En 151, 5 fois 28 (reste 11) ; on abaisse 2 → 112 ; 4 fois 28. Quotient 54." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "On range 1 000 mangues dans des caisses de 48 mangues.", etapes: [{ q: "Nombre de caisses pleines :", r: "20" }, { q: "Nombre de mangues qui restent :", r: "40" }], expl: "En 100, 2 fois 48 (reste 4) ; on abaisse 0 → 40 ; 0 fois 48 : quotient 20, reste 40." }
    ]
  ]
});


/* ---- ma-num-grands-nombres.js ---- */
LECONS.push({
  id: "ma-num-grands-nombres",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Les grands nombres",
  date: "2026-09-16",
  photos: ["DJI_20261118220744_0061_D.jpg"],
  retiens:
    "<p>Pour lire un grand nombre, on commence par la <b>plus grande classe</b> (celle de gauche).</p>" +
    "<p>Les classes sont, de droite à gauche : les <b>unités simples</b>, les <b>mille</b>, les <b>millions</b>, les <b>milliards</b>. Chaque classe est subdivisée en <b>unités</b>, <b>dizaines</b> et <b>centaines</b> : elle a 3 chiffres.</p>" +
    "<p>Il faut <b>séparer les classes</b> : par un point dans le cahier (5.000.250.008) ou par un petit espace (5 000 250 008).</p>" +
    "<p>Ex : 999 000 000 + 1 million = 1 000 000 000 = <b>1 milliard</b>.<br>5 milliards 250 mille 8 = <b>5 000 250 008</b></p>" +
    "<table><tr><th colspan='3'>milliards</th><th colspan='3'>millions</th><th colspan='3'>mille</th><th colspan='3'>unités simples</th></tr>" +
    "<tr><td>c</td><td>d</td><td>u</td><td>c</td><td>d</td><td>u</td><td>c</td><td>d</td><td>u</td><td>c</td><td>d</td><td>u</td></tr>" +
    "<tr><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>" +
    "<tr><td></td><td></td><td>5</td><td>0</td><td>0</td><td>0</td><td>2</td><td>5</td><td>0</td><td>0</td><td>0</td><td>8</td></tr>" +
    "</table>",
  astuce: "Mille = 1 suivi de 3 zéros (1 000). Un million = 6 zéros (1 000 000). Un milliard = 9 zéros (1 000 000 000). Quand une classe est vide, on écrit <b>000</b>.",
  regle: "On lit un grand nombre classe par classe, en commençant par la plus grande ; chaque classe a 3 chiffres : centaines, dizaines, unités.",
  niveaux: [
    [
      { t: "qcm", q: "Pour lire un grand nombre, par quelle classe commence-t-on ?", choix: ["par la plus grande classe", "par la classe des unités simples", "par la classe des mille"], r: "par la plus grande classe", expl: "On lit de gauche à droite, en commençant par la plus grande classe." },
      { t: "qcm", q: "Combien de chiffres compte une classe complète ?", choix: ["3", "2", "4", "10"], r: "3", expl: "Chaque classe a des centaines, des dizaines et des unités : 3 chiffres." },
      { t: "relier", q: "Relie chaque nombre à son nom.", paires: [["100", "cent"], ["1 000", "mille"], ["1 000 000", "un million"], ["1 000 000 000", "un milliard"]], expl: "Mille : 3 zéros ; un million : 6 zéros ; un milliard : 9 zéros." },
      { t: "vf", q: "999 000 000 + 1 000 000 = 1 000 000 000", r: true, expl: "999 millions + 1 million = 1 000 millions, c'est-à-dire 1 milliard." },
      { t: "qcm", q: "Dans 5 000 250 008, quel est le chiffre des unités de milliards ?", choix: ["5", "2", "8", "0"], r: "5", expl: "La classe des milliards est la première à gauche : ici, elle contient seulement 5." },
      { t: "vf", q: "Un milliard s'écrit avec 6 zéros.", r: false, expl: "Un milliard s'écrit avec 9 zéros : 1 000 000 000. C'est un million qui a 6 zéros." }
    ],
    [
      { t: "saisie", q: "Écris en chiffres : 5 milliards 250 mille 8.", r: ["5 000 250 008", "5000250008", "5.000.250.008"], expl: "Milliards : 5 ; millions : 000 ; mille : 250 ; unités : 008. On obtient 5 000 250 008." },
      { t: "saisie", q: "Écris en chiffres : 3 millions 400 mille.", r: ["3 400 000", "3400000", "3.400.000"], expl: "Millions : 3 ; mille : 400 ; unités : 000. On obtient 3 400 000." },
      { t: "saisie", q: "Écris en chiffres : 12 milliards 7 millions 15.", r: ["12 007 000 015", "12007000015", "12.007.000.015"], expl: "Milliards : 12 ; millions : 007 ; mille : 000 ; unités : 015. On obtient 12 007 000 015." },
      { t: "saisie", q: "Écris en chiffres : deux cent quarante-six millions cinq cent mille.", r: ["246 500 000", "246500000", "246.500.000"], expl: "Millions : 246 ; mille : 500 ; unités : 000. On obtient 246 500 000." },
      { t: "qcm", q: "Comment lit-on 4 008 300 ?", choix: ["quatre millions huit mille trois cents", "quatre millions huit cent mille trois cents", "quarante millions huit mille trois cents", "quatre milliards huit mille trois cents"], r: "quatre millions huit mille trois cents", expl: "Classes : 4 | 008 | 300 → quatre millions, huit mille, trois cents." },
      { t: "qcm", q: "Comment lit-on 2 015 000 060 ?", choix: ["deux milliards quinze millions soixante", "deux milliards cent cinquante millions soixante", "deux millions quinze mille soixante", "vingt milliards quinze millions soixante"], r: "deux milliards quinze millions soixante", expl: "Classes : 2 | 015 | 000 | 060 → deux milliards, quinze millions, soixante." },
      { t: "trous", q: "Dans le nombre 7 352 418 096, écris le chiffre demandé.", texte: "centaines de millions : [3] — dizaines de mille : [1] — unités de milliards : [7] — centaines (unités simples) : [0]", nombre: true, expl: "Découpe en classes : 7 | 352 | 418 | 096." },
      { t: "saisie", q: "999 000 000 + 1 000 000 = ?", r: ["1 000 000 000", "1000000000", "1.000.000.000"], expl: "999 millions + 1 million = 1 000 millions = 1 milliard." },
      { t: "saisie", q: "Combien y a-t-il de millions dans un milliard ?", r: ["1 000", "1000", "1.000"], expl: "1 milliard = 1 000 millions, car 999 millions + 1 million = 1 milliard." }
    ],
    [
      { t: "qcm", q: "Écris en chiffres : « six millions quarante ».", choix: ["6 000 040", "6 040 000", "6 000 400", "640"], r: "6 000 040", expl: "Millions : 6 ; mille : 000 (classe vide) ; unités : 040." },
      { t: "qcm", q: "Où faut-il séparer les classes dans 45000300 ?", choix: ["45 000 300", "450 003 00", "4 500 0300", "45 0003 00"], r: "45 000 300", expl: "On fait des paquets de 3 chiffres en partant de la droite : 300, puis 000, puis 45." },
      { t: "vf", q: "« 30 250 400 » se lit « trente millions deux cent cinquante mille quatre cents ».", r: true, expl: "30 | 250 | 400 : trente millions, deux cent cinquante mille, quatre cents." },
      { t: "saisie", q: "Écris en chiffres : huit milliards huit.", r: ["8 000 000 008", "8000000008", "8.000.000.008"], expl: "Les classes des millions et des mille sont vides : 8 000 000 008." },
      { t: "saisie", q: "Quel nombre vient juste après 4 999 999 ?", r: ["5 000 000", "5000000", "5.000.000"], expl: "4 999 999 + 1 = 5 000 000 (5 millions)." },
      { t: "saisie", q: "Quel nombre vient juste avant 1 000 000 000 ?", r: ["999 999 999", "999999999", "999.999.999"], expl: "1 000 000 000 − 1 = 999 999 999." },
      { t: "classer", q: "Range chaque nombre selon sa plus grande classe.", cases: ["classe des mille", "classe des millions", "classe des milliards"], items: [["45 000", "classe des mille"], ["3 200 000", "classe des millions"], ["1 000 000 000", "classe des milliards"], ["999 999", "classe des mille"], ["12 000 000", "classe des millions"], ["7 000 000 003", "classe des milliards"]], expl: "Compte les classes de 3 chiffres en partant de la droite : 2 classes = mille, 3 = millions, 4 = milliards." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une entreprise de Dakar a gagné 2 milliards 500 millions de francs CFA en 2025 et 1 milliard 750 millions en 2026.", etapes: [{ q: "Écris en chiffres le gain de 2025.", r: "2500000000", unite: "F" }, { q: "Écris en chiffres le gain de 2026.", r: "1750000000", unite: "F" }, { q: "Combien a-t-elle gagné en tout ?", r: "4250000000", unite: "F" }], expl: "2 500 000 000 F + 1 750 000 000 F = 4 250 000 000 F." },
      { t: "qcm", q: "Le budget d'une commune est de « trois milliards quarante millions » de francs. Quelle écriture est juste ?", choix: ["3 040 000 000 F", "3 400 000 000 F", "3 000 040 000 F", "340 000 000 F"], r: "3 040 000 000 F", expl: "Milliards : 3 ; millions : 040 ; mille : 000 ; unités : 000." },
      { t: "trous", q: "Complète la lecture du nombre 6 105 020 300.", texte: "six [milliards] cent cinq [millions] vingt [mille] trois cents", expl: "6 | 105 | 020 | 300 : on nomme chaque classe après son nombre." },
      { t: "saisie", q: "Écris le plus grand nombre de 10 chiffres.", r: ["9 999 999 999", "9999999999", "9.999.999.999"], expl: "On met des 9 partout : 9 999 999 999." },
      { t: "saisie", q: "Ajoute 1 million à 7 999 000 000.", r: ["8 000 000 000", "8000000000", "8.000.000.000"], expl: "7 999 millions + 1 million = 8 000 millions = 8 milliards : 8 000 000 000." }
    ]
  ]
});


/* ---- ma-num-multiplication-zeros.js ---- */
// À VÉRIFIER : résultat de 1347 × 120 : le cahier semble porter 161 660 (photo 0078, chiffre surchargé) ; le bon résultat 161 640 est utilisé.
// À VÉRIFIER : la règle du cahier dit « quand le multiplicande ET le multiplicateur se terminent par… » ; l'exemple 1347 × 120 montre qu'il suffit que l'un des deux finisse par des zéros. Le module écrit « le multiplicande ou le multiplicateur (ou les deux) ».
LECONS.push({
  id: "ma-num-multiplication-zeros",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La multiplication des nombres entiers : les cas particuliers",
  date: "2026-10-12",
  photos: ["DJI_20261118221051_0078_D.jpg", "DJI_20261118221101_0079_D.jpg"],
  retiens:
    "<p>Quand le multiplicande ou le multiplicateur (ou les deux) se terminent par un, deux, trois zéros ou plus, on effectue la multiplication <b>sans tenir compte des zéros</b>, puis on <b>les ajoute à la droite du produit</b> (le résultat).</p>" +
    "<p>Ex : 1 347 × 120 → je calcule 1 347 × 12 = 16 164, puis j'ajoute le zéro : <b>161 640</b>.</p>" +
    "<table><tr><td>×</td><td></td><td></td><td>1</td><td>3</td><td>4</td><td>7</td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td>1</td><td>2</td><td>0</td></tr>" +
    "<tr><td></td><td></td><td></td><td>2</td><td>6</td><td>9</td><td>4</td></tr>" +
    "<tr><td>+</td><td></td><td>1</td><td>3</td><td>4</td><td>7</td><td>·</td></tr>" +
    "<tr><td></td><td><b>1</b></td><td><b>6</b></td><td><b>1</b></td><td><b>6</b></td><td><b>4</b></td><td><b>0</b></td></tr>" +
    "</table>" +
    "<p>Ex : 96 240 × 400 → je calcule 9 624 × 4 = 38 496, puis j'ajoute les 3 zéros : <b>38 496 000</b>.</p>" +
    "<p>Si des zéros sont <b>intercalés</b> (au milieu) dans le multiplicateur, on peut les remplacer par des points.<br>Ex : 347 × 1 002</p>" +
    "<table><tr><td>×</td><td></td><td></td><td></td><td>3</td><td>4</td><td>7</td></tr>" +
    "<tr><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>2</td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td>6</td><td>9</td><td>4</td></tr>" +
    "<tr><td>+</td><td>3</td><td>4</td><td>7</td><td>·</td><td>·</td><td>·</td></tr>" +
    "<tr><td></td><td><b>3</b></td><td><b>4</b></td><td><b>7</b></td><td><b>6</b></td><td><b>9</b></td><td><b>4</b></td></tr>" +
    "</table>",
  astuce: "Cache les zéros de la fin avec ton doigt, calcule, puis rends-les tous au produit. Les zéros du milieu, eux, ne s'enlèvent pas !",
  regle: "On multiplie sans les zéros de la fin, puis on écrit tous ces zéros à la droite du produit ; les zéros intercalés du multiplicateur se remplacent par des points.",
  niveaux: [
    [
      { t: "qcm", q: "Pour calculer 1 347 × 120, je calcule d'abord…", choix: ["1 347 × 12", "1 347 × 120 en entier", "134 × 12"], r: "1 347 × 12", expl: "On ne tient pas compte du zéro de 120, puis on l'ajoute au produit." },
      { t: "vf", q: "96 240 × 400 = 38 496 000", r: true, expl: "9 624 × 4 = 38 496, puis on ajoute les 3 zéros (1 de 96 240 et 2 de 400)." },
      { t: "qcm", q: "Pour 96 240 × 400, combien de zéros faut-il ajouter au produit ?", choix: ["3", "2", "1", "4"], r: "3", expl: "Un zéro à la fin de 96 240 et deux à la fin de 400 : 3 zéros." },
      { t: "vf", q: "Pour 347 × 1 002, on peut remplacer les zéros du milieu par des points.", r: true, expl: "Les zéros intercalés du multiplicateur se remplacent par des points : 347 · · ·" },
      { t: "qcm", q: "1 347 × 120 = ?", choix: ["161 640", "16 164", "161 660", "1 616 400"], r: "161 640", expl: "1 347 × 12 = 16 164, puis on ajoute un zéro : 161 640." },
      { t: "relier", q: "Relie chaque multiplication à son produit.", paires: [["30 × 20", "600"], ["400 × 5", "2 000"], ["250 × 40", "10 000"], ["12 × 300", "3 600"]], expl: "3 × 2 = 6 → 600 ; 4 × 5 = 20 → 2 000 ; 25 × 4 = 100 → 10 000 ; 12 × 3 = 36 → 3 600." }
    ],
    [
      { t: "saisie", q: "23 × 40 = ?", r: "920", expl: "23 × 4 = 92, puis un zéro : 920." },
      { t: "saisie", q: "150 × 30 = ?", r: ["4 500", "4500", "4.500"], expl: "15 × 3 = 45, puis deux zéros : 4 500." },
      { t: "saisie", q: "1 200 × 60 = ?", r: ["72 000", "72000", "72.000"], expl: "12 × 6 = 72, puis trois zéros : 72 000." },
      { t: "saisie", q: "4 500 × 300 = ?", r: ["1 350 000", "1350000", "1.350.000"], expl: "45 × 3 = 135, puis quatre zéros : 1 350 000." },
      { t: "saisie", q: "2 340 × 50 = ?", r: ["117 000", "117000", "117.000"], expl: "234 × 5 = 1 170, puis deux zéros : 117 000." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Calcule 1 347 × 120 comme dans le cahier.", etapes: [{ q: "1 347 × 12 = ?", r: "16164" }, { q: "1 347 × 120 = ?", r: "161640" }], expl: "On calcule sans le zéro, puis on l'ajoute : 161 640." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Calcule 96 240 × 400.", etapes: [{ q: "9 624 × 4 = ?", r: "38496" }, { q: "Combien de zéros faut-il ajouter ?", r: "3" }, { q: "96 240 × 400 = ?", r: "38496000" }], expl: "38 496 suivi de 3 zéros : 38 496 000." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Calcule 347 × 1 002 en remplaçant les zéros du milieu par des points.", etapes: [{ q: "347 × 2 = ?", r: "694" }, { q: "347 × 1 002 = ?", r: "347694" }], expl: "694 + 347 000 = 347 694." },
      { t: "saisie", q: "625 × 1 003 = ?", r: ["626 875", "626875", "626.875"], expl: "625 × 3 = 1 875 ; 625 décalé de 3 rangs = 625 000 ; 1 875 + 625 000 = 626 875." }
    ],
    [
      { t: "qcm", q: "205 × 30 = ?", choix: ["6 150", "615", "61 500", "6 015"], r: "6 150", expl: "Le zéro de 205 est au milieu : on le garde ! 205 × 3 = 615, puis le zéro de 30 : 6 150." },
      { t: "vf", q: "Pour calculer 506 × 20, j'enlève tous les zéros et je calcule 56 × 2.", r: false, expl: "Seuls les zéros de la fin s'enlèvent. On calcule 506 × 2 = 1 012, puis on ajoute un zéro." },
      { t: "saisie", q: "506 × 20 = ?", r: ["10 120", "10120", "10.120"], expl: "506 × 2 = 1 012, puis un zéro : 10 120." },
      { t: "saisie", q: "7 000 × 800 = ?", r: ["5 600 000", "5600000", "5.600.000"], expl: "7 × 8 = 56, puis 5 zéros : 5 600 000." },
      { t: "saisie", q: "412 × 2 005 = ?", r: ["826 060", "826060", "826.060"], expl: "412 × 5 = 2 060 ; 412 × 2 (décalé de 3 rangs) = 824 000 ; 2 060 + 824 000 = 826 060." },
      { t: "qcm", q: "Fatou a trouvé 3 600 × 50 = 18 000. Qu'en penses-tu ?", choix: ["Faux : il manque un zéro, c'est 180 000", "Vrai", "Faux : c'est 1 800 000"], r: "Faux : il manque un zéro, c'est 180 000", expl: "36 × 5 = 180, puis 3 zéros (deux de 3 600 et un de 50) : 180 000." },
      { t: "trous", q: "Complète.", texte: "800 × 50 : je calcule 8 × 5 = [40], puis j'ajoute [3] zéros : [40000].", nombre: true, expl: "Deux zéros dans 800, un dans 50 : 3 zéros. 40 suivi de 000 = 40 000." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une coopérative de Kaolack vend 250 sacs d'arachide de 100 kg, à 30 000 F le sac.", etapes: [{ q: "Masse totale :", r: "25000", unite: "kg" }, { q: "Prix total :", r: "7500000", unite: "F" }], expl: "100 kg × 250 = 25 000 kg ; 30 000 F × 250 = 7 500 000 F (25 × 3 = 75, puis 5 zéros)." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pour la fête de l'école, 120 élèves paient chacun 1 500 F et 40 parents paient chacun 2 000 F.", etapes: [{ q: "Somme payée par les élèves :", r: "180000", unite: "F" }, { q: "Somme payée par les parents :", r: "80000", unite: "F" }, { q: "Somme totale :", r: "260000", unite: "F" }], expl: "1 500 × 120 = 180 000 ; 2 000 × 40 = 80 000 ; 180 000 + 80 000 = 260 000 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "À chaque voyage, un camion transporte 40 sacs de ciment de 50 kg. Il fait 300 voyages.", etapes: [{ q: "Masse transportée à chaque voyage :", r: "2000", unite: "kg" }, { q: "Masse totale transportée :", r: "600000", unite: "kg" }], expl: "50 × 40 = 2 000 kg ; 2 000 × 300 = 600 000 kg." },
      { t: "saisie", q: "1 005 × 300 = ?", r: ["301 500", "301500", "301.500"], expl: "Le zéro du milieu de 1 005 reste. 1 005 × 3 = 3 015, puis deux zéros : 301 500." },
      { t: "qcm", q: "Quelle multiplication donne 4 800 000 ?", choix: ["1 200 × 4 000", "120 × 4 000", "1 200 × 400", "12 × 4 000"], r: "1 200 × 4 000", expl: "12 × 4 = 48, et il faut 5 zéros : 1 200 (2 zéros) × 4 000 (3 zéros)." }
    ]
  ]
});


/* ---- ma-num-multiplication.js ---- */
// À VÉRIFIER : photo 0073 floue : texte reconstitué. Les mots « unités identiques » sont devinés (rendus par « objets identiques ») ; le « NB : Il faut toujours décaler les zéros intercalaires » n'est pas sûr et n'est pas repris. Le décalage d'un rang vient de l'exemple net de la photo 0074 (1 351 × 52 = 70 252, juste).
LECONS.push({
  id: "ma-num-multiplication",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La multiplication des nombres entiers",
  date: "2026-10-05",
  photos: ["DJI_20261118220925_0073_D.jpg", "DJI_20261118220934_0074_D.jpg"],
  retiens:
    "<p>La <b>multiplication</b> est une opération qui permet, à partir de 2 nombres (le <b>multiplicande</b> et le <b>multiplicateur</b>), de trouver un troisième nombre (le <b>produit</b>).</p>" +
    "<p>Pour trouver la masse totale, le prix total, la quantité totale, la longueur totale de plusieurs objets identiques, on pose une multiplication.<br>Ex : 5 m + 5 m + 5 m + 5 m = 5 m × 4 = 20 m</p>" +
    "<p><b>Valeur totale = Valeur unitaire × Nombre d'unités</b></p>" +
    "<p>Exemple posé : 1 351 × 52 = 70 252. On multiplie d'abord par 2 (les unités), puis par 5 (les dizaines) : cette 2<sup>e</sup> ligne est <b>décalée d'un rang</b> vers la gauche (le point marque la place des unités).</p>" +
    "<table><tr><td>×</td><td></td><td>1</td><td>3</td><td>5</td><td>1</td><td>multiplicande</td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td>5</td><td>2</td><td>multiplicateur</td></tr>" +
    "<tr><td></td><td></td><td>2</td><td>7</td><td>0</td><td>2</td><td>1 351 × 2</td></tr>" +
    "<tr><td>+</td><td>6</td><td>7</td><td>5</td><td>5</td><td>·</td><td>1 351 × 5 dizaines</td></tr>" +
    "<tr><td></td><td><b>7</b></td><td><b>0</b></td><td><b>2</b></td><td><b>5</b></td><td><b>2</b></td><td>produit</td></tr>" +
    "</table>",
  astuce: "Valeur totale = Valeur unitaire × Nombre d'unités : le prix d'<b>un</b> objet multiplié par le <b>nombre</b> d'objets.",
  regle: "Multiplicande × multiplicateur = produit ; chaque nouvelle ligne de la multiplication posée est décalée d'un rang vers la gauche.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["multiplicande", "le nombre qu'on multiplie"], ["multiplicateur", "le nombre par lequel on multiplie"], ["produit", "le résultat"]], expl: "Dans 1 351 × 52 = 70 252 : 1 351 est le multiplicande, 52 le multiplicateur, 70 252 le produit." },
      { t: "qcm", q: "5 m + 5 m + 5 m + 5 m = ?", choix: ["5 m × 4", "5 m + 4", "5 m × 5", "4 m × 4"], r: "5 m × 4", expl: "On additionne 4 fois la même longueur : c'est 5 m × 4 = 20 m." },
      { t: "qcm", q: "Dans 1 351 × 52 = 70 252, quel est le produit ?", choix: ["70 252", "1 351", "52"], r: "70 252", expl: "Le produit est le résultat de la multiplication." },
      { t: "vf", q: "Valeur totale = Valeur unitaire × Nombre d'unités", r: true, expl: "C'est la formule encadrée de la leçon." },
      { t: "qcm", q: "Pour trouver le prix de 6 cahiers à 250 F l'un, je calcule…", choix: ["250 F × 6", "250 F + 6", "250 F − 6", "6 − 250 F"], r: "250 F × 6", expl: "Valeur unitaire (250 F) × nombre d'unités (6) = 1 500 F." },
      { t: "vf", q: "Dans 1 351 × 52, la 2e ligne (1 351 × 5) est décalée d'un rang vers la gauche.", r: true, expl: "Le 5 de 52 est un chiffre des dizaines : on décale d'un rang." }
    ],
    [
      { t: "saisie", q: "243 × 3 = ?", r: "729", expl: "3 × 3 = 9 ; 4 × 3 = 12 (je pose 2, je retiens 1) ; 2 × 3 + 1 = 7. Résultat : 729." },
      { t: "saisie", q: "1 205 × 4 = ?", r: ["4 820", "4820", "4.820"], expl: "Résultat : 4 820." },
      { t: "saisie", q: "326 × 25 = ?", r: ["8 150", "8150", "8.150"], expl: "326 × 5 = 1 630 ; 326 × 2 dizaines = 6 520 ; 1 630 + 6 520 = 8 150." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 1 351 × 52.", etapes: [{ q: "1 351 × 2 = ?", r: "2702" }, { q: "1 351 × 5 = ? (cette ligne sera décalée d'un rang)", r: "6755" }, { q: "Produit 1 351 × 52 = ?", r: "70252" }], expl: "2 702 + 67 550 = 70 252. C'est l'exemple du cahier." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Pose et calcule 438 × 36.", etapes: [{ q: "438 × 6 = ?", r: "2628" }, { q: "438 × 3 = ? (ligne décalée d'un rang)", r: "1314" }, { q: "Produit 438 × 36 = ?", r: "15768" }], expl: "2 628 + 13 140 = 15 768." },
      { t: "saisie", q: "5 m × 4 = ? m", r: "20", expl: "5 m + 5 m + 5 m + 5 m = 20 m.", unite: "m" },
      { t: "saisie", q: "2 507 × 8 = ?", r: ["20 056", "20056", "20.056"], expl: "Résultat : 20 056." },
      { t: "saisie", q: "714 × 43 = ?", r: ["30 702", "30702", "30.702"], expl: "714 × 3 = 2 142 ; 714 × 4 dizaines = 28 560 ; total 30 702." },
      { t: "trous", q: "Complète la formule de la leçon.", texte: "Valeur [totale] = Valeur [unitaire] × Nombre d'[unités]", expl: "VT = VU × NU." }
    ],
    [
      { t: "vf", q: "Dans 438 × 36, on peut écrire la 2e ligne (438 × 3) sans la décaler.", r: false, expl: "Le 3 de 36 vaut 3 dizaines : il faut décaler la ligne d'un rang vers la gauche." },
      { t: "qcm", q: "Moussa a posé 245 × 13 et trouvé 980. Qu'a-t-il oublié ?", choix: ["de décaler la 2e ligne", "rien, c'est juste", "une retenue"], r: "de décaler la 2e ligne", expl: "Il a fait 735 + 245 = 980. Avec le décalage : 735 + 2 450 = 3 185." },
      { t: "saisie", q: "Écris le bon résultat de 245 × 13.", r: ["3 185", "3185", "3.185"], expl: "245 × 3 = 735 ; 245 × 1 dizaine = 2 450 ; 735 + 2 450 = 3 185." },
      { t: "saisie", q: "1 009 × 7 = ?", r: ["7 063", "7063", "7.063"], expl: "Attention aux zéros : 7 063." },
      { t: "saisie", q: "625 × 48 = ?", r: ["30 000", "30000", "30.000"], expl: "625 × 8 = 5 000 ; 625 × 4 dizaines = 25 000 ; total 30 000." },
      { t: "relier", q: "Relie chaque multiplication à son produit.", paires: [["25 × 4", "100"], ["12 × 12", "144"], ["15 × 6", "90"], ["250 × 4", "1 000"], ["11 × 11", "121"]], expl: "Calcule de tête ou pose l'opération." },
      { t: "saisie", q: "Un carton contient 24 bouteilles. Combien de bouteilles y a-t-il dans 15 cartons ?", r: "360", expl: "Valeur totale = 24 × 15 = 360 bouteilles." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Au marché Tilène, une vendeuse achète 12 sacs de riz de 50 kg, à 16 500 F le sac.", etapes: [{ q: "Masse totale de riz :", r: "600", unite: "kg" }, { q: "Prix total :", r: "198000", unite: "F" }], expl: "50 kg × 12 = 600 kg ; 16 500 F × 12 = 198 000 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une école commande 35 tables-bancs à 27 500 F l'une et 48 cahiers à 350 F l'un.", etapes: [{ q: "Prix des tables-bancs :", r: "962500", unite: "F" }, { q: "Prix des cahiers :", r: "16800", unite: "F" }, { q: "Dépense totale :", r: "979300", unite: "F" }], expl: "27 500 × 35 = 962 500 ; 350 × 48 = 16 800 ; 962 500 + 16 800 = 979 300 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un car fait 3 allers-retours entre deux villes chaque jour. Un aller fait 72 km.", etapes: [{ q: "Distance d'un aller-retour :", r: "144", unite: "km" }, { q: "Distance parcourue en un jour :", r: "432", unite: "km" }, { q: "Distance parcourue en 6 jours :", r: "2592", unite: "km" }], expl: "72 × 2 = 144 ; 144 × 3 = 432 ; 432 × 6 = 2 592 km." },
      { t: "qcm", q: "La valeur unitaire est 750 F et le nombre d'unités est 24. Quelle est la valeur totale ?", choix: ["18 000 F", "17 000 F", "1 800 F", "774 F"], r: "18 000 F", expl: "VT = VU × NU = 750 × 24 = 18 000 F." },
      { t: "saisie", q: "3 048 × 26 = ?", r: ["79 248", "79248", "79.248"], expl: "3 048 × 6 = 18 288 ; 3 048 × 2 dizaines = 60 960 ; 18 288 + 60 960 = 79 248." }
    ]
  ]
});


/* ---- ma-num-multiplier-par-10-100-1000.js ---- */
// À VÉRIFIER : la règle 1 du cahier cite « 10 000 » mais dit « on écrit 1 – 2 ou 3 zéros » (photo 0072). Le module dit « autant de zéros qu'il y en a dans 10, 100, 1 000… (1, 2, 3 ou 4 zéros) ».
// À VÉRIFIER : les exemples décimaux 1,25 × 10 = 12,5 et 3,6 × 100 = 360 viennent de la photo floue 0073 (lecture probable ; les deux calculs sont justes).
LECONS.push({
  id: "ma-num-multiplier-par-10-100-1000",
  cahier: "maths",
  matiere: "Calcul mental",
  titre: "Multiplier un nombre par 10, 100, 1 000",
  date: "2026-10-05",
  photos: ["DJI_20261118220918_0072_D.jpg", "DJI_20261118220925_0073_D.jpg"],
  retiens:
    "<p><b>1.</b> Pour multiplier un <b>nombre entier</b> par 10, 100, 1 000 ou 10 000…, on écrit à sa droite <b>autant de zéros</b> qu'il y en a dans 10, 100, 1 000… (1, 2, 3 ou 4 zéros).<br>Ex : 76 × 100 = 7 600</p>" +
    "<p><b>2.</b> Pour multiplier un <b>nombre décimal</b> par 10, 100, 1 000…, on <b>déplace la virgule</b> de 1, 2 ou 3 rangs <b>vers la droite</b>.<br>Ex : 1,25 × 10 = 12,5 ; 3,6 × 100 = 360 (quand il n'y a plus de chiffre, on complète par un zéro).</p>",
  astuce: "× 10 : 1 zéro ou 1 rang. × 100 : 2 zéros ou 2 rangs. × 1 000 : 3 zéros ou 3 rangs. Compte les zéros du 10, du 100 ou du 1 000 !",
  regle: "Nombre entier × 10, 100, 1 000 : on écrit 1, 2 ou 3 zéros à droite. Nombre décimal : on déplace la virgule de 1, 2 ou 3 rangs vers la droite.",
  niveaux: [
    [
      { t: "qcm", q: "76 × 100 = ?", choix: ["7 600", "760", "76 000", "7 060"], r: "7 600", expl: "100 a deux zéros : on écrit deux zéros à droite de 76." },
      { t: "qcm", q: "Pour multiplier un nombre entier par 1 000, j'écris à sa droite…", choix: ["3 zéros", "1 zéro", "2 zéros", "4 zéros"], r: "3 zéros", expl: "1 000 a trois zéros." },
      { t: "vf", q: "Pour multiplier 1,25 par 10, je déplace la virgule d'un rang vers la droite.", r: true, expl: "× 10 : la virgule avance d'un rang vers la droite : 12,5." },
      { t: "qcm", q: "1,25 × 10 = ?", choix: ["12,5", "0,125", "125", "1,250"], r: "12,5", expl: "La virgule se déplace d'un rang vers la droite : 1,25 devient 12,5." },
      { t: "vf", q: "3,6 × 100 = 360", r: true, expl: "La virgule avance de 2 rangs ; il manque un chiffre, on complète par un zéro : 360." },
      { t: "relier", q: "Relie chaque multiplication au nombre de zéros à écrire (nombre entier).", paires: [["× 10", "1 zéro"], ["× 100", "2 zéros"], ["× 1 000", "3 zéros"], ["× 10 000", "4 zéros"]], expl: "On écrit autant de zéros qu'il y en a dans le multiplicateur." }
    ],
    [
      { t: "saisie", q: "45 × 10 = ?", r: "450", expl: "Un zéro à droite : 450." },
      { t: "saisie", q: "38 × 100 = ?", r: ["3 800", "3800", "3.800"], expl: "Deux zéros à droite : 3 800." },
      { t: "saisie", q: "7 × 1 000 = ?", r: ["7 000", "7000", "7.000"], expl: "Trois zéros à droite : 7 000." },
      { t: "saisie", q: "250 × 100 = ?", r: ["25 000", "25000", "25.000"], expl: "On garde le zéro de 250 et on en ajoute deux : 25 000." },
      { t: "saisie", q: "63 × 10 000 = ?", r: ["630 000", "630000", "630.000"], expl: "Quatre zéros à droite : 630 000." },
      { t: "saisie", q: "4,7 × 10 = ?", r: "47", nombre: true, expl: "La virgule avance d'un rang : 47." },
      { t: "saisie", q: "2,35 × 100 = ?", r: "235", nombre: true, expl: "La virgule avance de deux rangs : 235." },
      { t: "saisie", q: "0,8 × 10 = ?", r: "8", nombre: true, expl: "La virgule avance d'un rang : 8." },
      { t: "saisie", q: "1,456 × 1 000 = ?", r: ["1 456", "1456", "1.456"], expl: "La virgule avance de trois rangs : 1 456." },
      { t: "trous", q: "Complète.", texte: "12 × 10 = [120] ; 12 × 100 = [1200] ; 12 × 1 000 = [12000]", nombre: true, expl: "1, 2 puis 3 zéros : 120 ; 1 200 ; 12 000." }
    ],
    [
      { t: "saisie", q: "3,6 × 1 000 = ?", r: ["3 600", "3600", "3.600"], expl: "La virgule avance de 3 rangs ; on complète par deux zéros : 3 600." },
      { t: "saisie", q: "0,05 × 100 = ?", r: "5", nombre: true, expl: "La virgule avance de 2 rangs : 0,05 devient 5." },
      { t: "saisie", q: "5,2 × 100 = ?", r: "520", expl: "2 rangs : 5,2 → 52, puis on complète par un zéro : 520." },
      { t: "saisie", q: "120 × 1 000 = ?", r: ["120 000", "120000", "120.000"], expl: "Trois zéros de plus : 120 000." },
      { t: "qcm", q: "4,5 × 100 = ?", choix: ["450", "4,500", "45", "4 500"], r: "450", expl: "Avec un nombre décimal, on n'ajoute pas les zéros après la virgule : on déplace la virgule de 2 rangs → 450." },
      { t: "vf", q: "2,5 × 10 = 2,50", r: false, expl: "On déplace la virgule d'un rang vers la droite : 2,5 × 10 = 25. Écrire 2,50 ne change pas le nombre." },
      { t: "saisie", q: "Par combien faut-il multiplier 0,72 pour obtenir 72 ?", r: "100", expl: "La virgule a avancé de 2 rangs : c'est × 100." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "À Dakar, un sac de riz coûte 18 500 F. Une boutique en achète 10, puis une autre en achète 100.", etapes: [{ q: "Prix de 10 sacs :", r: "185000", unite: "F" }, { q: "Prix de 100 sacs :", r: "1850000", unite: "F" }], expl: "18 500 × 10 = 185 000 F (un zéro) ; 18 500 × 100 = 1 850 000 F (deux zéros)." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une bouteille contient 1,5 l d'eau.", etapes: [{ q: "Combien de litres dans 10 bouteilles ?", r: "15", unite: "l" }, { q: "Combien de litres dans 100 bouteilles ?", r: "150", unite: "l" }], expl: "1,5 × 10 = 15 l ; 1,5 × 100 = 150 l (on complète par un zéro)." },
      { t: "qcm", q: "Un ticket de bus coûte 150 F. Combien coûtent 1 000 tickets ?", choix: ["150 000 F", "15 000 F", "1 500 000 F", "1 500 F"], r: "150 000 F", expl: "150 × 1 000 : on écrit trois zéros à droite de 150 → 150 000 F." },
      { t: "saisie", q: "Un pas de Mamadou mesure 0,65 m. Quelle distance fait-il en 100 pas ?", r: "65", nombre: true, expl: "0,65 × 100 : la virgule avance de 2 rangs → 65 m.", unite: "m" },
      { t: "trous", q: "Complète.", texte: "0,125 × 10 = [1,25] ; 0,125 × 100 = [12,5] ; 0,125 × 1 000 = [125]", nombre: true, expl: "La virgule avance de 1, puis 2, puis 3 rangs." },
      { t: "saisie", q: "Quel nombre multiplié par 100 donne 4 700 ?", r: "47", expl: "47 × 100 = 4 700 (on écrit deux zéros)." }
    ]
  ]
});


/* ---- ma-num-nombres-decimaux.js ---- */
LECONS.push({
  id: "ma-num-nombres-decimaux",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Les nombres décimaux",
  date: "2026-11-10",
  photos: ["DJI_20261118221235_0094_D.jpg", "DJI_20261118221240_0095_D.jpg"],
  retiens:
    "<p>Un <b>nombre décimal</b> s'écrit avec une <b>virgule</b> qui sépare la <b>partie entière</b> (à gauche) de la <b>partie décimale</b> (à droite).</p>" +
    "<p>3,9 se lit « trois virgule neuf ».</p>" +
    "<p>On peut aussi lire un nombre décimal de deux manières :<br>36,6 = 3 dizaines 6 unités et 6 dixièmes ;<br>36,6 = 36 unités et 6 dixièmes.</p>" +
    "<table><tr><th colspan='3'>partie entière</th><th colspan='3'>partie décimale</th></tr>" +
    "<tr><td>centaines</td><td>dizaines</td><td>unités</td><td>dixièmes</td><td>centièmes</td><td>millièmes</td></tr>" +
    "<tr><td>5</td><td>4</td><td>9,</td><td>1</td><td>3</td><td>7</td></tr>" +
    "</table>" +
    "<p>(549,137)</p>" +
    "<p><b>NB :</b> entre deux nombres entiers qui se suivent, on peut intercaler des nombres décimaux.<br>Ex : entre 3 et 4 : 3 – 3,1 – 3,2 – 3,3 – 3,4 – 3,5 – 3,6 – 3,7 – 3,8 – 3,9 – 4</p>",
  astuce: "La virgule se place juste après le chiffre des <b>unités</b>. Juste après la virgule viennent les <b>dixièmes</b>, puis les <b>centièmes</b>, puis les <b>millièmes</b>.",
  regle: "La virgule sépare la partie entière (à gauche) de la partie décimale (à droite) ; après la virgule : dixièmes, centièmes, millièmes.",
  niveaux: [
    [
      { t: "qcm", q: "Dans 36,6, quelle est la partie entière ?", choix: ["36", "6", "366", "3"], r: "36", expl: "La partie entière est à gauche de la virgule : 36." },
      { t: "qcm", q: "Dans 549,137, quelle est la partie décimale ?", choix: ["137", "549", "7", "1"], r: "137", expl: "La partie décimale est à droite de la virgule : 137." },
      { t: "qcm", q: "Comment lit-on 3,9 ?", choix: ["trois virgule neuf", "trente-neuf", "trois cent neuf"], r: "trois virgule neuf", expl: "On lit la partie entière, puis « virgule », puis la partie décimale." },
      { t: "vf", q: "La virgule sépare la partie entière de la partie décimale.", r: true, expl: "Partie entière à gauche, partie décimale à droite." },
      { t: "relier", q: "Dans 549,137, relie chaque chiffre à son rang.", paires: [["5", "centaines"], ["4", "dizaines"], ["9", "unités"], ["1", "dixièmes"], ["3", "centièmes"], ["7", "millièmes"]], expl: "Les unités sont juste avant la virgule, les dixièmes juste après." },
      { t: "vf", q: "36,6 = 36 unités et 6 dixièmes", r: true, expl: "C'est la deuxième manière de lire 36,6 donnée dans la leçon." }
    ],
    [
      { t: "saisie", q: "Écris en chiffres : 3 dizaines 6 unités et 6 dixièmes.", r: "36.6", nombre: true, expl: "3 dizaines 6 unités = 36 ; 6 dixièmes après la virgule : 36,6." },
      { t: "saisie", q: "Écris en chiffres : 7 unités 4 dixièmes 5 centièmes.", r: "7.45", nombre: true, expl: "7 unités, puis 4 dixièmes et 5 centièmes : 7,45." },
      { t: "saisie", q: "Écris en chiffres : 2 centaines 8 unités 3 dixièmes.", r: "208.3", nombre: true, expl: "2 centaines, 0 dizaine, 8 unités : 208 ; puis 3 dixièmes : 208,3." },
      { t: "saisie", q: "Écris en chiffres : 12 unités et 5 centièmes.", r: "12.05", nombre: true, expl: "Il n'y a pas de dixièmes : on écrit 0 au rang des dixièmes. 12,05." },
      { t: "qcm", q: "Dans 84,26, quel est le chiffre des centièmes ?", choix: ["6", "2", "4", "8"], r: "6", expl: "Après la virgule : 2 dixièmes, 6 centièmes." },
      { t: "qcm", q: "Dans 731,508, quel est le chiffre des dixièmes ?", choix: ["5", "0", "8", "1"], r: "5", expl: "Le chiffre des dixièmes est juste après la virgule : 5." },
      { t: "trous", q: "Complète la suite entre 3 et 4.", texte: "3 – 3,1 – 3,2 – [3,3] – 3,4 – [3,5] – 3,6 – 3,7 – [3,8] – 3,9 – 4", nombre: true, expl: "On avance d'un dixième à chaque fois." },
      { t: "qcm", q: "Comment lit-on 5,7 ?", choix: ["cinq virgule sept", "cinquante-sept", "cinq cent sept"], r: "cinq virgule sept", expl: "Partie entière 5, virgule, partie décimale 7." },
      { t: "classer", q: "Range ces nombres.", cases: ["s'écrit avec une virgule", "s'écrit sans virgule"], items: [["45", "s'écrit sans virgule"], ["4,5", "s'écrit avec une virgule"], ["120", "s'écrit sans virgule"], ["0,8", "s'écrit avec une virgule"], ["3,25", "s'écrit avec une virgule"], ["1 000", "s'écrit sans virgule"]], expl: "Les nombres avec une partie décimale s'écrivent avec une virgule." }
    ],
    [
      { t: "qcm", q: "Quel nombre est compris entre 7 et 8 ?", choix: ["7,4", "8,1", "6,9", "74"], r: "7,4", expl: "7,4 a pour partie entière 7 : il est entre 7 et 8." },
      { t: "vf", q: "Dans 0,7, la partie entière est 0.", r: true, expl: "À gauche de la virgule, il y a 0 : 0 unité et 7 dixièmes." },
      { t: "saisie", q: "Écris en chiffres : 5 centaines 4 dizaines 9 unités 1 dixième 3 centièmes 7 millièmes.", r: "549.137", nombre: true, expl: "C'est le nombre du tableau de la leçon : 549,137." },
      { t: "saisie", q: "Écris en chiffres : 6 unités et 7 millièmes.", r: "6.007", nombre: true, expl: "Ni dixièmes ni centièmes : on écrit deux zéros. 6,007." },
      { t: "qcm", q: "20,03 = ?", choix: ["20 unités et 3 centièmes", "20 unités et 3 dixièmes", "2 dizaines et 3 dixièmes"], r: "20 unités et 3 centièmes", expl: "Après la virgule : 0 dixième, 3 centièmes." },
      { t: "qcm", q: "Dans 63,9, quel est le chiffre des unités ?", choix: ["3", "6", "9"], r: "3", expl: "Le chiffre des unités est juste avant la virgule : 3. Le 6 est celui des dizaines." },
      { t: "relier", q: "Relie chaque écriture au bon nombre.", paires: [["2 dizaines 5 dixièmes", "20,5"], ["2 unités 5 dixièmes", "2,5"], ["25 unités 5 centièmes", "25,05"], ["2 dizaines 5 unités", "25"]], expl: "Place chaque chiffre à son rang, et mets des zéros aux rangs vides." }
    ],
    [
      { t: "trous", q: "Entre 9 et 10, on peut intercaler des nombres décimaux. Complète.", texte: "9 – 9,1 – 9,2 – [9,3] – 9,4 – 9,5 – [9,6] – 9,7 – 9,8 – [9,9] – 10", nombre: true, expl: "On avance d'un dixième à chaque fois." },
      { t: "qcm", q: "Awa mesure 1 m et 4 dixièmes de mètre. Elle mesure…", choix: ["1,4 m", "14 m", "1,04 m", "4,1 m"], r: "1,4 m", expl: "1 unité et 4 dixièmes : 1,4 m." },
      { t: "saisie", q: "Une bouteille contient 1 litre et 5 dixièmes de litre. Écris sa contenance en litres.", r: "1.5", nombre: true, expl: "1 unité, 5 dixièmes : 1,5 l.", unite: "l" },
      { t: "saisie", q: "Quel nombre a pour partie entière 8 et pour partie décimale 25 ?", r: "8.25", nombre: true, expl: "8 à gauche de la virgule, 25 à droite : 8,25." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Regarde bien le nombre 507,264.", etapes: [{ q: "Chiffre des dizaines :", r: "0" }, { q: "Chiffre des dixièmes :", r: "2" }, { q: "Chiffre des millièmes :", r: "4" }], expl: "5 centaines, 0 dizaine, 7 unités ; 2 dixièmes, 6 centièmes, 4 millièmes." }
    ]
  ]
});


/* ---- ma-num-sens-division.js ---- */
LECONS.push({
  id: "ma-num-sens-division",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "Le sens de la division",
  date: "2026-10-20",
  photos: ["DJI_20261118221130_0084_D.jpg", "DJI_20261118221134_0085_D.jpg"],
  retiens:
    "<p>La <b>division</b> est une opération qui permet de trouver :</p>" +
    "<ul><li>le <b>nombre d'unités</b> (le nombre de parts) ;</li><li>le prix, la masse, la longueur, la capacité <b>de l'unité</b>, ou la <b>valeur d'une part</b>, à partir de la valeur totale.</li></ul>" +
    "<p><b>VU = VT : NU</b> et <b>NU = VT : VU</b><br>(VU = valeur unitaire ; VT = valeur totale ; NU = nombre d'unités)</p>" +
    "<table><tr><td>dividende → <b>375</b></td><td><b>15</b> ← diviseur</td></tr>" +
    "<tr><td>− 375</td><td><b>25</b> ← quotient</td></tr>" +
    "<tr><td>reste → <b>0</b></td><td></td></tr>" +
    "</table>" +
    "<p><b>Dividende = (quotient × diviseur) + reste</b><br>Ex : 375 = (25 × 15) + 0</p>",
  astuce: "On divise la <b>valeur totale</b> : par le nombre d'unités pour trouver la valeur d'une unité, ou par la valeur d'une unité pour trouver le nombre d'unités.",
  regle: "VU = VT : NU et NU = VT : VU. Dividende = (quotient × diviseur) + reste.",
  niveaux: [
    [
      { t: "relier", q: "Dans la division 375 : 15 = 25 (reste 0), relie chaque nombre à son nom.", paires: [["375", "dividende"], ["15", "diviseur"], ["25", "quotient"], ["0", "reste"]], expl: "On divise le dividende par le diviseur ; on obtient le quotient et le reste." },
      { t: "relier", q: "Relie chaque abréviation à sa signification.", paires: [["VU", "valeur unitaire"], ["VT", "valeur totale"], ["NU", "nombre d'unités"]], expl: "VU = valeur d'une unité ; VT = valeur de toutes les unités ; NU = combien il y a d'unités." },
      { t: "qcm", q: "On connaît le prix de 6 cahiers. Pour trouver le prix d'un cahier, on fait…", choix: ["une division", "une addition", "une multiplication"], r: "une division", expl: "VU = VT : NU." },
      { t: "vf", q: "VU = VT : NU", r: true, expl: "La valeur d'une unité = valeur totale divisée par le nombre d'unités." },
      { t: "qcm", q: "NU = ?", choix: ["VT : VU", "VT × VU", "VU : VT"], r: "VT : VU", expl: "Le nombre d'unités = valeur totale divisée par la valeur d'une unité." },
      { t: "vf", q: "Dividende = (quotient × diviseur) + reste", r: true, expl: "Ex : 375 = (25 × 15) + 0." }
    ],
    [
      { t: "saisie", q: "6 cahiers coûtent 1 800 F. Combien coûte un cahier ?", r: "300", expl: "VU = VT : NU = 1 800 : 6 = 300 F.", unite: "F" },
      { t: "saisie", q: "Awa partage 48 mangues entre 8 enfants. Combien de mangues reçoit chaque enfant ?", r: "6", expl: "Valeur d'une part : 48 : 8 = 6 mangues." },
      { t: "saisie", q: "On coupe un rouleau de 120 m en morceaux de 10 m. Combien de morceaux obtient-on ?", r: "12", expl: "NU = VT : VU = 120 : 10 = 12 morceaux." },
      { t: "saisie", q: "5 sacs pèsent 250 kg en tout. Combien pèse un sac ?", r: "50", expl: "VU = VT : NU = 250 : 5 = 50 kg.", unite: "kg" },
      { t: "saisie", q: "VT = 2 400 F et VU = 400 F. Combien vaut NU ?", r: "6", expl: "NU = VT : VU = 2 400 : 400 = 6." },
      { t: "saisie", q: "Dans une division, le quotient est 7, le diviseur 9 et le reste 4. Quel est le dividende ?", r: "67", expl: "Dividende = (7 × 9) + 4 = 63 + 4 = 67." },
      { t: "trous", q: "Complète l'égalité de la division 375 : 15.", texte: "375 = ([25] × 15) + [0]", nombre: true, expl: "Dividende = (quotient × diviseur) + reste." },
      { t: "classer", q: "Que cherche-t-on ?", cases: ["la valeur d'une unité (VU)", "le nombre d'unités (NU)"], items: [["le prix d'un pain, si 5 pains coûtent 750 F", "la valeur d'une unité (VU)"], ["le nombre de sacs de 50 kg dans 1 000 kg", "le nombre d'unités (NU)"], ["la masse d'un carton, si 4 cartons pèsent 36 kg", "la valeur d'une unité (VU)"], ["le nombre de bidons de 2 l pour 30 l", "le nombre d'unités (NU)"], ["la longueur d'un morceau, si on coupe 60 m en 4", "la valeur d'une unité (VU)"], ["le nombre de tickets à 150 F avec 900 F", "le nombre d'unités (NU)"]], expl: "On cherche la valeur d'une seule chose → VU. On cherche combien de choses → NU." },
      { t: "saisie", q: "Avec 1 200 F, combien d'oranges à 100 F l'une Awa peut-elle acheter ?", r: "12", expl: "NU = VT : VU = 1 200 : 100 = 12 oranges." }
    ],
    [
      { t: "qcm", q: "47 : 5 = 9, reste 2. Quelle égalité le vérifie ?", choix: ["(9 × 5) + 2 = 47", "(9 + 5) × 2 = 47", "9 × 5 × 2 = 47"], r: "(9 × 5) + 2 = 47", expl: "Dividende = (quotient × diviseur) + reste : 45 + 2 = 47." },
      { t: "vf", q: "Si 7 savons coûtent 1 400 F, un savon coûte 1 400 F × 7.", r: false, expl: "Pour la valeur d'une unité, on divise : 1 400 : 7 = 200 F." },
      { t: "saisie", q: "Le quotient est 12, le diviseur 15 et le reste 3. Quel est le dividende ?", r: "183", expl: "(12 × 15) + 3 = 180 + 3 = 183." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Divise 63 par 8.", etapes: [{ q: "Quel est le quotient ?", r: "7" }, { q: "Quel est le reste ?", r: "7" }], expl: "8 × 7 = 56 ; 63 − 56 = 7. Vérification : (7 × 8) + 7 = 63." },
      { t: "qcm", q: "Moussa dit : « 50 : 6 = 8, reste 2 ». A-t-il raison ?", choix: ["Oui, car (8 × 6) + 2 = 50", "Non, car (8 × 6) + 2 = 52", "Non, le reste est 3"], r: "Oui, car (8 × 6) + 2 = 50", expl: "48 + 2 = 50 : on retrouve bien le dividende." },
      { t: "saisie", q: "Un car transporte 360 passagers en 9 voyages, avec le même nombre à chaque fois. Combien de passagers par voyage ?", r: "40", expl: "VU = VT : NU = 360 : 9 = 40 passagers." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Khady a 2 300 F. Le kilo de sucre coûte 500 F. Elle achète le plus de kilos possible.", etapes: [{ q: "Combien de kilos achète-t-elle ?", r: "4", unite: "kg" }, { q: "Combien d'argent lui reste-t-il ?", r: "300", unite: "F" }], expl: "2 300 : 500 = 4, reste 300. Vérification : (4 × 500) + 300 = 2 300." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un commerçant achète 8 sacs de riz pour 140 000 F. Il revend chaque sac 19 000 F.", etapes: [{ q: "Prix d'achat d'un sac :", r: "17500", unite: "F" }, { q: "Bénéfice sur un sac :", r: "1500", unite: "F" }], expl: "VU = 140 000 : 8 = 17 500 F ; 19 000 − 17 500 = 1 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une couturière a 36 m de tissu. Il faut 4 m pour une robe. Elle vend chaque robe 7 500 F.", etapes: [{ q: "Combien de robes peut-elle coudre ?", r: "9" }, { q: "Combien gagne-t-elle en vendant toutes les robes ?", r: "67500", unite: "F" }], expl: "NU = 36 : 4 = 9 robes ; 7 500 × 9 = 67 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Une école de 375 élèves a 15 classes qui ont toutes le même nombre d'élèves. 3 classes partent en excursion.", etapes: [{ q: "Nombre d'élèves par classe :", r: "25" }, { q: "Nombre d'élèves qui partent :", r: "75" }], expl: "375 : 15 = 25 élèves ; 25 × 3 = 75 élèves." },
      { t: "qcm", q: "VT = 9 000 F et NU = 12. Combien vaut VU ?", choix: ["750 F", "108 000 F", "8 988 F", "900 F"], r: "750 F", expl: "VU = VT : NU = 9 000 : 12 = 750 F." },
      { t: "trous", q: "Complète.", texte: "Dans 375 : 15 = 25, 375 est le [dividende], 15 est le [diviseur] et 25 est le [quotient].", expl: "Dividende : diviseur = quotient." }
    ]
  ]
});


/* ---- ma-num-soustraction.js ---- */
// À VÉRIFIER : l'exemple du cahier écrit 15000 − 8246 = 6754, mais l'opération posée en dessous calcule 15000 − 6754 = 8246 (photo 0069). Le module pose 15 000 − 8 246 = 6 754.
LECONS.push({
  id: "ma-num-soustraction",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La soustraction des nombres entiers",
  date: "2026-09-28",
  photos: ["DJI_20261118220845_0068_D.jpg", "DJI_20261118220859_0069_D.jpg"],
  retiens:
    "<p>Je pose une <b>soustraction</b> pour calculer <b>un reste, un manque, une différence</b>.</p>" +
    "<p>Dans une soustraction, le <b>plus grand nombre</b> se place toujours <b>en premier</b> (en haut).</p>" +
    "<p>Ensuite, je mets <b>les unités sous les unités, les dizaines sous les dizaines</b>… On n'oublie pas les <b>retenues</b> s'il y en a.</p>" +
    "<p>Ex : 15 000 − 8 246 = 6 754</p>" +
    "<table><tr><th></th><th>dm</th><th>um</th><th>c</th><th>d</th><th>u</th></tr>" +
    "<tr><td></td><td>1</td><td>5</td><td>0</td><td>0</td><td>0</td></tr>" +
    "<tr><td>−</td><td></td><td>8</td><td>2</td><td>4</td><td>6</td></tr>" +
    "<tr><td></td><td></td><td><b>6</b></td><td><b>7</b></td><td><b>5</b></td><td><b>4</b></td></tr>" +
    "</table>",
  astuce: "Pour vérifier une soustraction, additionne le résultat et le petit nombre : 6 754 + 8 246 = 15 000. Tu dois retrouver le grand nombre.",
  regle: "Le plus grand nombre en premier ; unités sous unités, dizaines sous dizaines ; on commence par la droite et on n'oublie pas les retenues.",
  niveaux: [
    [
      { t: "qcm", q: "On pose une soustraction pour calculer…", choix: ["un reste, un manque ou une différence", "un total", "le prix de plusieurs objets"], r: "un reste, un manque ou une différence", expl: "Reste, manque, différence : ce sont les trois sens de la soustraction." },
      { t: "qcm", q: "Dans une soustraction, le plus grand nombre se place…", choix: ["en premier (en haut)", "en second (en bas)", "où l'on veut"], r: "en premier (en haut)", expl: "Le plus grand nombre se trouve toujours au début." },
      { t: "vf", q: "Pour poser 15 000 − 8 246, je place le 6 de 8 246 sous le dernier 0 de 15 000.", r: true, expl: "Unités sous unités : le 6 (unités) va sous le 0 des unités." },
      { t: "vf", q: "15 000 − 8 246 = 6 754", r: true, expl: "C'est l'exemple du cahier. Vérification : 6 754 + 8 246 = 15 000." },
      { t: "classer", q: "Quelle opération faut-il faire ? « Je cherche… »", cases: ["addition", "soustraction"], items: [["le total de deux achats", "addition"], ["ce qui reste après une dépense", "soustraction"], ["combien il manque pour acheter un vélo", "soustraction"], ["l'écart d'âge entre deux frères", "soustraction"], ["la longueur de deux routes mises bout à bout", "addition"], ["le nombre d'élèves de deux classes réunies", "addition"]], expl: "Reste, manque, écart (différence) → soustraction. Réunion, total → addition." },
      { t: "qcm", q: "Quelle soustraction peut-on faire avec les nombres entiers ?", choix: ["850 − 320", "320 − 850"], r: "850 − 320", expl: "Le plus grand nombre doit être en premier : 850 − 320 = 530." }
    ],
    [
      { t: "saisie", q: "9 875 − 3 452 = ?", r: ["6 423", "6423", "6.423"], expl: "Pas de retenue : 6 423." },
      { t: "saisie", q: "7 304 − 2 568 = ?", r: ["4 736", "4736", "4.736"], expl: "Attention aux retenues : 4 736. Vérifie : 4 736 + 2 568 = 7 304." },
      { t: "saisie", q: "15 000 − 8 246 = ?", r: ["6 754", "6754", "6.754"], expl: "C'est l'exemple du cahier : 6 754." },
      { t: "saisie", q: "50 000 − 12 345 = ?", r: ["37 655", "37655", "37.655"], expl: "37 655. Vérifie : 37 655 + 12 345 = 50 000." },
      { t: "saisie", q: "4 070 − 1 985 = ?", r: ["2 085", "2085", "2.085"], expl: "2 085. Vérifie : 2 085 + 1 985 = 4 070." },
      { t: "saisie", q: "63 418 − 9 579 = ?", r: ["53 839", "53839", "53.839"], expl: "53 839. Vérifie : 53 839 + 9 579 = 63 418." },
      { t: "trous", q: "Calcule 842 − 367 colonne par colonne.", texte: "Unités : 2 − 7, c'est impossible ; je fais 12 − 7 = [5] et je retiens 1. Dizaines : 6 + 1 = 7 ; 4 − 7 est impossible, je fais 14 − 7 = [7] et je retiens 1. Centaines : 3 + 1 = 4 ; 8 − 4 = [4]. Résultat : [475].", nombre: true, expl: "La retenue s'ajoute au chiffre du bas de la colonne suivante. Vérifie : 475 + 367 = 842." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Moussa avait 25 000 F. Il achète un pantalon à 8 750 F.", etapes: [{ q: "Combien lui reste-t-il ?", r: "16250", unite: "F" }], expl: "Je cherche un reste : 25 000 − 8 750 = 16 250 F." },
      { t: "saisie", q: "Quelle est la différence entre 1 000 et 368 ?", r: "632", expl: "La différence se calcule par une soustraction : 1 000 − 368 = 632." }
    ],
    [
      { t: "vf", q: "Pour calculer 8 246 − 15 000, je place 8 246 en haut.", r: false, expl: "Le plus grand nombre doit toujours être en premier. On calcule 15 000 − 8 246." },
      { t: "qcm", q: "Aïssatou a trouvé 8 000 − 2 376 = 5 624. Son résultat est-il juste ?", choix: ["Oui, car 5 624 + 2 376 = 8 000", "Non, car 5 624 + 2 376 = 7 000", "Non, il faut trouver 6 624"], r: "Oui, car 5 624 + 2 376 = 8 000", expl: "On vérifie avec une addition : on retrouve bien 8 000." },
      { t: "saisie", q: "100 000 − 1 = ?", r: ["99 999", "99999", "99.999"], expl: "100 000 − 1 = 99 999." },
      { t: "saisie", q: "10 000 − 4 507 = ?", r: ["5 493", "5493", "5.493"], expl: "Beaucoup de retenues : 5 493. Vérifie : 5 493 + 4 507 = 10 000." },
      { t: "saisie", q: "Combien manque-t-il pour aller de 2 750 à 5 000 ?", r: ["2 250", "2250", "2.250"], expl: "Un manque se calcule par une soustraction : 5 000 − 2 750 = 2 250." },
      { t: "relier", q: "Relie chaque soustraction à son résultat.", paires: [["1 000 − 1", "999"], ["5 000 − 2 500", "2 500"], ["3 000 − 1 200", "1 800"], ["10 000 − 9 990", "10"], ["700 − 350", "350"]], expl: "Tu peux vérifier chaque résultat par une addition." },
      { t: "qcm", q: "Quelle addition permet de vérifier 15 000 − 8 246 = 6 754 ?", choix: ["6 754 + 8 246", "15 000 + 8 246", "15 000 + 6 754"], r: "6 754 + 8 246", expl: "Résultat + petit nombre = grand nombre : 6 754 + 8 246 = 15 000." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un vendeur de Thiaroye a 1 500 mangues. Il en vend 875 le matin et 438 l'après-midi.", etapes: [{ q: "Nombre de mangues vendues :", r: "1313" }, { q: "Nombre de mangues qui restent :", r: "187" }], expl: "875 + 438 = 1 313 ; 1 500 − 1 313 = 187 mangues." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Fatou veut acheter un téléphone à 45 000 F. Elle a économisé 28 750 F et son père lui donne 10 000 F.", etapes: [{ q: "Combien Fatou a-t-elle maintenant ?", r: "38750", unite: "F" }, { q: "Combien lui manque-t-il ?", r: "6250", unite: "F" }], expl: "28 750 + 10 000 = 38 750 ; 45 000 − 38 750 = 6 250 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Un car doit faire un trajet de 264 km. Il s'arrête une première fois après 98 km, puis roule encore 115 km.", etapes: [{ q: "Distance déjà parcourue :", r: "213", unite: "km" }, { q: "Distance qui reste à parcourir :", r: "51", unite: "km" }], expl: "98 + 115 = 213 ; 264 − 213 = 51 km." },
      { t: "qcm", q: "Moustapha dit : « 4 000 − 1 999 = 2 999 ». Qu'en penses-tu ?", choix: ["Faux, c'est 2 001", "Vrai", "Faux, c'est 3 001"], r: "Faux, c'est 2 001", expl: "4 000 − 1 999 = 2 001. Vérification : 2 001 + 1 999 = 4 000." },
      { t: "trous", q: "Trouve le nombre qui manque.", texte: "9 000 − [3500] = 5 500", nombre: true, expl: "On cherche ce qu'on enlève : 9 000 − 5 500 = 3 500." },
      { t: "saisie", q: "Pose et calcule : 8 897,64 − 7 956 = …", r: "941,64", nombre: true, aide: "Aligne les virgules : 7 956 = 7 956,00.", expl: "8 897,64 − 7 956,00 = 941,64." },
      { t: "saisie", q: "Pose et calcule : 951 − 198,671 = …", r: "752,329", nombre: true, aide: "Écris 951 = 951,000 pour avoir autant de chiffres après la virgule.", expl: "951,000 − 198,671 = 752,329." },
      { t: "probleme", q: "Fatou a 25 000 F. Elle achète 3 paires de chaussures à 2 500 F la paire, une robe à 3 500 F et 5 boîtes de perles à 500 F la boîte.", etapes: [{ q: "Étape 1 : prix des chaussures", r: "7500", unite: "F" }, { q: "Étape 2 : prix des perles", r: "2500", unite: "F" }, { q: "Étape 3 : dépense totale", r: "13500", unite: "F" }, { q: "Étape 4 : somme qui lui reste", r: "11500", unite: "F" }], expl: "2 500 × 3 = 7 500 ; 500 × 5 = 2 500 ; 7 500 + 3 500 + 2 500 = 13 500 ; 25 000 − 13 500 = 11 500 F." },
      { t: "saisie", q: "Pose et calcule : 540 − 50,7 = …", r: "489,3", nombre: true, aide: "Écris 540 = 540,0 : on complète par un zéro.", expl: "540,0 − 50,7 = 489,3." }
    ]
  ]
});


/* ---- ma-pb-donnees-enonce.js ---- */
LECONS.push({
  id: "ma-pb-donnees-enonce",
  cahier: "maths",
  matiere: "Résolution de problèmes",
  titre: "Les types de données d'un énoncé",
  date: "2026-09-18",
  photos: ["DJI_20261118220759_0063_D.jpg"],
  retiens:
    "<ul><li>On appelle <b>donnée utile</b> toute donnée qui participe à la résolution d'un problème.</li><li>On appelle <b>donnée inutile</b> toute donnée qui ne participe ni au raisonnement, ni à la résolution d'un problème.</li><li>Une <b>donnée manquante</b> est une donnée inconnue qui rend impossible la résolution d'un problème.</li></ul>" +
    "<p>Exemple : « Awa, 11 ans, achète 3 cahiers à 250 F l'un. Combien dépense-t-elle ? »<br>Données utiles : 3 cahiers, 250 F. Donnée inutile : 11 ans.</p>",
  astuce: "Lis d'abord la <b>question</b>, puis demande-toi pour chaque nombre : « Est-ce que j'en ai besoin pour répondre ? »",
  regle: "Une donnée utile sert à résoudre le problème ; une donnée inutile ne sert pas ; une donnée manquante empêche de le résoudre.",
  niveaux: [
    [
      { t: "qcm", q: "Une donnée utile est une donnée qui…", choix: ["participe à la résolution du problème", "ne sert à rien", "manque dans l'énoncé"], r: "participe à la résolution du problème", expl: "Une donnée utile participe à la résolution du problème." },
      { t: "qcm", q: "Une donnée inutile est une donnée qui…", choix: ["ne participe ni au raisonnement ni à la résolution", "permet de trouver la réponse", "rend le problème impossible"], r: "ne participe ni au raisonnement ni à la résolution", expl: "On peut l'enlever : on trouve quand même la réponse." },
      { t: "qcm", q: "Une donnée manquante…", choix: ["rend impossible la résolution du problème", "est écrite deux fois", "est toujours un prix"], r: "rend impossible la résolution du problème", expl: "Sans elle, on ne peut pas résoudre le problème." },
      { t: "relier", q: "Relie chaque type de donnée à sa définition.", paires: [["donnée utile", "elle sert à résoudre"], ["donnée inutile", "elle ne sert pas"], ["donnée manquante", "elle est absente : on ne peut pas résoudre"]], expl: "Utile, inutile, manquante : ce sont les trois types de données." },
      { t: "vf", q: "« Awa, 11 ans, achète 3 cahiers à 250 F l'un. Combien dépense-t-elle ? » L'âge d'Awa est une donnée inutile.", r: true, expl: "L'âge ne sert pas à calculer la dépense." },
      { t: "vf", q: "Dans ce même problème, « 250 F » est une donnée utile.", r: true, expl: "Il faut le prix d'un cahier pour calculer la dépense : 250 F × 3 = 750 F." }
    ],
    [
      { t: "classer", q: "« Moussa a 10 ans. Il habite à Pikine. Il a 35 billes rouges et 20 billes bleues. Combien de billes a-t-il ? » Range chaque donnée.", cases: ["donnée utile", "donnée inutile"], items: [["35 billes rouges", "donnée utile"], ["20 billes bleues", "donnée utile"], ["il habite à Pikine", "donnée inutile"], ["il a 10 ans", "donnée inutile"]], expl: "Pour trouver le nombre de billes, il faut seulement 35 et 20 : 35 + 20 = 55." },
      { t: "qcm", q: "« Fatou achète 4 kg de sucre. Combien paie-t-elle ? » Quelle donnée manque ?", choix: ["le prix d'un kilo de sucre", "la masse du sucre", "le nom de la vendeuse"], r: "le prix d'un kilo de sucre", expl: "Sans le prix d'un kilo, on ne peut pas calculer : c'est une donnée manquante." },
      { t: "qcm", q: "« Un car de 60 places part de Dakar à 7 h avec 45 passagers. Combien de places restent libres ? » Quelle donnée est inutile ?", choix: ["7 h", "60 places", "45 passagers"], r: "7 h", expl: "L'heure de départ ne sert pas au calcul : 60 − 45." },
      { t: "saisie", q: "Résous le problème du car : combien de places restent libres ?", r: "15", expl: "60 − 45 = 15 places libres." },
      { t: "qcm", q: "« Khady a 2 000 F. Elle achète du pain et du lait. Combien lui reste-t-il ? » Que remarques-tu ?", choix: ["Il manque des données : le prix du pain et celui du lait", "Toutes les données sont là", "2 000 F est une donnée inutile"], r: "Il manque des données : le prix du pain et celui du lait", expl: "Sans ces prix, on ne peut pas calculer ce qui reste." },
      { t: "classer", q: "« Un lundi, Ibrahima, élève de CM2, achète un sac de riz de 50 kg à 17 500 F et une bouteille d'huile de 5 l à 6 000 F. Combien a-t-il dépensé ? » Range chaque donnée.", cases: ["donnée utile", "donnée inutile"], items: [["17 500 F", "donnée utile"], ["6 000 F", "donnée utile"], ["50 kg", "donnée inutile"], ["5 l", "donnée inutile"], ["un lundi", "donnée inutile"], ["élève de CM2", "donnée inutile"]], expl: "Pour la dépense, seuls les prix comptent : 17 500 + 6 000." },
      { t: "saisie", q: "Résous le problème d'Ibrahima : combien a-t-il dépensé ?", r: ["23 500", "23500", "23.500"], expl: "17 500 + 6 000 = 23 500 F.", unite: "F" },
      { t: "vf", q: "Une donnée inutile peut être un nombre.", r: true, expl: "Oui : dans le problème d'Ibrahima, 50 kg et 5 l sont des nombres, mais ils ne servent pas." },
      { t: "classer", q: "Peut-on résoudre ce problème ?", cases: ["on peut le résoudre", "il manque une donnée"], items: [["Awa a 500 F. Elle dépense 200 F. Combien lui reste-t-il ?", "on peut le résoudre"], ["Moussa achète 6 mangues. Combien paie-t-il ?", "il manque une donnée"], ["Une classe a 25 filles et 22 garçons. Combien d'élèves a-t-elle ?", "on peut le résoudre"], ["Un bus transporte des passagers. Combien descendent à Thiès ?", "il manque une donnée"]], expl: "Pour Moussa, il manque le prix d'une mangue ; pour le bus, il manque le nombre de passagers qui descendent." }
    ],
    [
      { t: "qcm", q: "« Le père de Mamadou a 42 ans. Il achète 3 sacs de ciment à 4 500 F le sac. Combien paie-t-il ? » Combien y a-t-il de données utiles ?", choix: ["2", "3", "1"], r: "2", expl: "3 sacs et 4 500 F sont utiles ; 42 ans est inutile." },
      { t: "saisie", q: "Résous ce problème : combien paie le père de Mamadou ?", r: ["13 500", "13500", "13.500"], expl: "4 500 F × 3 = 13 500 F.", unite: "F" },
      { t: "vf", q: "Si une donnée manque, on peut quand même trouver la réponse en devinant.", r: false, expl: "Une donnée manquante rend la résolution impossible : on ne devine pas en maths." },
      { t: "qcm", q: "« Un marchand a 120 œufs. Il en casse 8, puis vend les autres à 100 F l'œuf. Combien gagne-t-il ? » Quelles données sont utiles ?", choix: ["120 œufs, 8 œufs cassés et 100 F", "seulement 120 œufs et 100 F", "seulement 8 et 100 F"], r: "120 œufs, 8 œufs cassés et 100 F", expl: "Il faut enlever les œufs cassés : les trois données sont utiles." },
      { t: "saisie", q: "Résous le problème du marchand d'œufs : combien gagne-t-il ?", r: ["11 200", "11200", "11.200"], expl: "120 − 8 = 112 œufs ; 112 × 100 = 11 200 F.", unite: "F" },
      { t: "classer", q: "« Aïssatou a 10 ans. Pour sa fête, elle invite 12 amies. Au marché de Colobane, elle achète 3 bouteilles de jus à 1 000 F et un gâteau à 5 500 F. Combien dépense-t-elle ? » Range chaque donnée.", cases: ["donnée utile", "donnée inutile"], items: [["3 bouteilles", "donnée utile"], ["1 000 F", "donnée utile"], ["5 500 F", "donnée utile"], ["10 ans", "donnée inutile"], ["12 amies", "donnée inutile"], ["Colobane", "donnée inutile"]], expl: "Pour la dépense, il faut le nombre de bouteilles, leur prix et le prix du gâteau." },
      { t: "qcm", q: "Dans le problème d'Aïssatou, quelle question rendrait la donnée « 12 amies » utile ?", choix: ["Combien de personnes seront à la fête avec Aïssatou ?", "Combien coûte le gâteau ?", "Où se trouve le marché ?"], r: "Combien de personnes seront à la fête avec Aïssatou ?", expl: "Une donnée est utile ou inutile selon la question posée : ici, 12 + 1 = 13 personnes." }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Aïssatou a 10 ans. Pour sa fête, elle invite 12 amies. Elle achète 3 bouteilles de jus à 1 000 F et un gâteau à 5 500 F. Combien dépense-t-elle ? »", etapes: [{ q: "Prix des bouteilles de jus :", r: "3000", unite: "F" }, { q: "Dépense totale :", r: "8500", unite: "F" }], expl: "1 000 × 3 = 3 000 F ; 3 000 + 5 500 = 8 500 F. L'âge et le nombre d'amies sont inutiles." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Un car de 70 places conduit par Modou part de Thiès à 8 h avec 52 passagers. À Rufisque, 13 passagers descendent et 6 montent. Combien de passagers arrivent à Dakar ? »", etapes: [{ q: "Passagers après la descente de Rufisque :", r: "39" }, { q: "Passagers à l'arrivée à Dakar :", r: "45" }], expl: "52 − 13 = 39 ; 39 + 6 = 45. Inutiles : 70 places, Modou, 8 h." },
      { t: "qcm", q: "« Moussa range ses livres sur 4 étagères. Combien de livres a-t-il ? » Quelle donnée manque ?", choix: ["le nombre de livres sur chaque étagère", "la couleur des étagères", "l'âge de Moussa"], r: "le nombre de livres sur chaque étagère", expl: "Sans savoir combien il y a de livres par étagère, on ne peut pas répondre." },
      { t: "qcm", q: "« Awa achète 5 pagnes. Combien paie-t-elle ? » Que faut-il ajouter pour pouvoir résoudre ?", choix: ["le prix d'un pagne", "l'âge d'Awa", "la couleur des pagnes"], r: "le prix d'un pagne", expl: "Le prix d'un pagne est la donnée manquante." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "On complète le problème : « Awa achète 5 pagnes à 3 500 F l'un. Elle paie avec 20 000 F. Combien lui rend-on ? »", etapes: [{ q: "Prix des 5 pagnes :", r: "17500", unite: "F" }, { q: "Somme rendue à Awa :", r: "2500", unite: "F" }], expl: "3 500 × 5 = 17 500 F ; 20 000 − 17 500 = 2 500 F." }
    ]
  ]
});


/* ---- ma-pb-formuler-questions.js ---- */
LECONS.push({
  id: "ma-pb-formuler-questions",
  cahier: "maths",
  matiere: "Résolution de problèmes",
  titre: "Formuler des questions pour compléter un énoncé",
  date: "2026-10-09",
  photos: ["DJI_20261118221038_0077_D.jpg", "DJI_20261118221051_0078_D.jpg"],
  retiens:
    "<p>Pour qu'un énoncé soit <b>complet</b>, il faut des <b>questions intermédiaires</b> et la <b>question finale</b>. Ce sont des questions qui facilitent le raisonnement et la résolution du problème.</p>" +
    "<p>Exemple : « Un marchand achète 10 sacs de riz à 16 000 F l'un. Il les revend à 18 000 F l'un. » On peut formuler :</p>" +
    "<ul><li>question intermédiaire : Quel est le prix d'achat des 10 sacs ? (160 000 F)</li><li>question intermédiaire : Quel est le prix de vente des 10 sacs ? (180 000 F)</li><li>question finale : Quel est le bénéfice du marchand ? (20 000 F)</li></ul>",
  astuce: "Une bonne question se commence souvent par « Combien… ? » ou « Quel est… ? » et se termine par un <b>point d'interrogation</b>. Sa réponse ne doit pas être déjà écrite dans l'énoncé.",
  regle: "Un énoncé complet a des questions intermédiaires, qui facilitent le raisonnement, et une question finale, qui termine la résolution.",
  niveaux: [
    [
      { t: "qcm", q: "Pour qu'un énoncé soit complet, il faut…", choix: ["des questions intermédiaires et la question finale", "seulement la question finale", "seulement des nombres"], r: "des questions intermédiaires et la question finale", expl: "C'est la définition de la leçon." },
      { t: "vf", q: "Les questions intermédiaires facilitent le raisonnement et la résolution du problème.", r: true, expl: "Elles découpent le problème en petites étapes." },
      { t: "qcm", q: "« Un marchand achète 10 sacs de riz à 16 000 F l'un. Il les revend à 18 000 F l'un. » Quelle question peut être la question finale ?", choix: ["Quel est le bénéfice du marchand ?", "Combien de sacs achète-t-il ?", "Combien coûte un sac ?"], r: "Quel est le bénéfice du marchand ?", expl: "Les deux autres réponses sont déjà écrites dans l'énoncé." },
      { t: "qcm", q: "Dans ce problème, quelle question intermédiaire aide à trouver le bénéfice ?", choix: ["Quel est le prix d'achat des 10 sacs ?", "Quel âge a le marchand ?", "Où habite le marchand ?"], r: "Quel est le prix d'achat des 10 sacs ?", expl: "Bénéfice = prix de vente − prix d'achat : il faut d'abord le prix d'achat." },
      { t: "vf", q: "« Quel est le prix de vente des 10 sacs ? » est une question intermédiaire.", r: true, expl: "Sa réponse (180 000 F) sert à trouver le bénéfice." },
      { t: "relier", q: "Relie chaque question à sa réponse.", paires: [["prix d'achat des 10 sacs", "160 000 F"], ["prix de vente des 10 sacs", "180 000 F"], ["bénéfice du marchand", "20 000 F"]], expl: "16 000 × 10 = 160 000 ; 18 000 × 10 = 180 000 ; 180 000 − 160 000 = 20 000." }
    ],
    [
      { t: "ordre", q: "Remets la question dans l'ordre.", r: "Quel est le prix d'achat des 10 sacs ?", expl: "Une question commence par une majuscule et se termine par un point d'interrogation." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Un marchand achète 10 sacs de riz à 16 000 F l'un. Il les revend à 18 000 F l'un. »", etapes: [{ q: "Quel est le prix d'achat des 10 sacs ?", r: "160000", unite: "F" }, { q: "Quel est le prix de vente des 10 sacs ?", r: "180000", unite: "F" }, { q: "Quel est le bénéfice du marchand ?", r: "20000", unite: "F" }], expl: "16 000 × 10 = 160 000 ; 18 000 × 10 = 180 000 ; 180 000 − 160 000 = 20 000 F." },
      { t: "qcm", q: "« Awa achète 6 mètres de tissu à 1 500 F le mètre. Elle paie la couture 4 000 F. » Quelle question finale convient ?", choix: ["Combien dépense-t-elle en tout ?", "Combien de mètres achète-t-elle ?", "Combien coûte la couture ?"], r: "Combien dépense-t-elle en tout ?", expl: "Les deux autres réponses sont déjà dans l'énoncé." },
      { t: "qcm", q: "Pour ce problème, quelle question intermédiaire faut-il poser d'abord ?", choix: ["Combien coûte le tissu ?", "Combien dépense-t-elle en tout ?", "Combien coûte la couture ?"], r: "Combien coûte le tissu ?", expl: "On calcule d'abord le prix du tissu (1 500 × 6), puis la dépense totale." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème d'Awa (6 m de tissu à 1 500 F le mètre, couture 4 000 F).", etapes: [{ q: "Combien coûte le tissu ?", r: "9000", unite: "F" }, { q: "Combien dépense-t-elle en tout ?", r: "13000", unite: "F" }], expl: "1 500 × 6 = 9 000 ; 9 000 + 4 000 = 13 000 F." },
      { t: "classer", q: "« Un car transporte 48 passagers par voyage. Il fait 3 voyages par jour. Le ticket coûte 1 250 F. » Range chaque question.", cases: ["question intermédiaire", "question finale", "question qui ne convient pas"], items: [["Combien de passagers transporte-t-il par jour ?", "question intermédiaire"], ["Quelle est la recette du jour ?", "question finale"], ["Quelle est la couleur du car ?", "question qui ne convient pas"], ["Comment s'appelle le chauffeur ?", "question qui ne convient pas"]], expl: "On ne peut pas répondre aux questions sur la couleur ou le chauffeur avec les données : elles ne conviennent pas." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du car (48 passagers par voyage, 3 voyages, ticket à 1 250 F).", etapes: [{ q: "Combien de passagers par jour ?", r: "144" }, { q: "Quelle est la recette du jour ?", r: "180000", unite: "F" }], expl: "48 × 3 = 144 ; 1 250 × 144 = 180 000 F." },
      { t: "ordre", q: "Remets la question dans l'ordre.", r: "Combien d'argent lui reste-t-il ?", expl: "« Combien… ? » : une question qui demande un nombre." }
    ],
    [
      { t: "qcm", q: "« Moussa a 2 500 F. Il achète 3 beignets à 100 F l'un et un jus à 250 F. » Il manque la question finale. Laquelle ?", choix: ["Combien lui reste-t-il ?", "Combien coûte un beignet ?", "Combien de beignets achète-t-il ?"], r: "Combien lui reste-t-il ?", expl: "Les autres réponses sont déjà écrites dans l'énoncé." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème de Moussa (2 500 F, 3 beignets à 100 F, un jus à 250 F).", etapes: [{ q: "Combien coûtent les beignets ?", r: "300", unite: "F" }, { q: "Combien dépense-t-il en tout ?", r: "550", unite: "F" }, { q: "Combien lui reste-t-il ?", r: "1950", unite: "F" }], expl: "100 × 3 = 300 ; 300 + 250 = 550 ; 2 500 − 550 = 1 950 F." },
      { t: "vf", q: "Une question dont la réponse est déjà écrite dans l'énoncé est une bonne question intermédiaire.", r: false, expl: "Elle ne fait pas avancer le raisonnement : la réponse est déjà connue." },
      { t: "qcm", q: "« Un jardinier plante 8 rangées de 25 salades. Il vend chaque salade 150 F. Combien gagne-t-il ? » Quelle question intermédiaire faut-il poser ?", choix: ["Combien de salades plante-t-il ?", "Combien coûte une salade ?", "Combien de rangées y a-t-il ?"], r: "Combien de salades plante-t-il ?", expl: "On calcule d'abord le nombre de salades (25 × 8), puis le gain." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du jardinier.", etapes: [{ q: "Combien de salades plante-t-il ?", r: "200" }, { q: "Combien gagne-t-il ?", r: "30000", unite: "F" }], expl: "25 × 8 = 200 salades ; 150 × 200 = 30 000 F." },
      { t: "trous", q: "Complète.", texte: "Une question [intermédiaire] facilite le raisonnement ; la question [finale] termine la résolution du problème.", expl: "Ce sont les deux sortes de questions d'un énoncé complet." }
    ],
    [
      { t: "qcm", q: "« Au marché, Khady achète 3 kg de poisson à 2 000 F le kilo et 2 kg de riz à 450 F le kilo. Elle donne un billet de 10 000 F à la marchande. » Quelle question finale convient ?", choix: ["Combien la marchande lui rend-elle ?", "Combien coûte un kilo de poisson ?", "Quel billet donne-t-elle ?"], r: "Combien la marchande lui rend-elle ?", expl: "Les autres réponses sont déjà dans l'énoncé." },
      { t: "ordre", q: "Remets la question finale dans l'ordre.", r: "Combien la marchande lui rend-elle ?", expl: "Le sujet inversé « rend-elle » s'écrit avec un trait d'union." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème de Khady en répondant aux questions intermédiaires.", etapes: [{ q: "Combien coûte le poisson ?", r: "6000", unite: "F" }, { q: "Combien coûte le riz ?", r: "900", unite: "F" }, { q: "Combien dépense-t-elle en tout ?", r: "6900", unite: "F" }, { q: "Combien la marchande lui rend-elle ?", r: "3100", unite: "F" }], expl: "2 000 × 3 = 6 000 ; 450 × 2 = 900 ; 6 000 + 900 = 6 900 ; 10 000 − 6 900 = 3 100 F." },
      { t: "qcm", q: "« Une coopérative de femmes de Kaolack récolte 1 200 kg d'arachide. Elle garde 200 kg pour les semences et vend le reste à 350 F le kilo. Quelle somme reçoit-elle ? » Quelle question intermédiaire faut-il poser ?", choix: ["Quelle masse d'arachide est vendue ?", "Combien de femmes y a-t-il ?", "Quel est le prix d'un kilo ?"], r: "Quelle masse d'arachide est vendue ?", expl: "On calcule d'abord la masse vendue (1 200 − 200), puis la somme reçue." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème de la coopérative.", etapes: [{ q: "Quelle masse d'arachide est vendue ?", r: "1000", unite: "kg" }, { q: "Quelle somme reçoit-elle ?", r: "350000", unite: "F" }], expl: "1 200 − 200 = 1 000 kg ; 350 × 1 000 = 350 000 F." }
    ]
  ]
});


/* ---- ma-pb-lire-donnees.js ---- */
LECONS.push({
  id: "ma-pb-lire-donnees",
  cahier: "maths",
  matiere: "Résolution de problèmes",
  titre: "Lire des données sur un tableau, un schéma ou un graphique",
  date: "2026-11-06",
  photos: ["DJI_20261118221215_0091_D.jpg", "DJI_20261118221221_0092_D.jpg"],
  retiens:
    "<p>À partir des données d'un <b>tableau</b>, d'un <b>schéma</b> ou d'un <b>graphique</b>, on peut créer un <b>énoncé-problème</b>.</p>" +
    "<p>Ex : voici le schéma du cahier.</p>" +
    "<ul><li>un segment court, noté <b>l</b> (la largeur) ;</li><li>en dessous, un segment plus long, noté <b>L</b> (la longueur) : il est aussi long que l, plus un morceau de <b>40 m</b> ;</li><li>une accolade réunit les deux segments : <b>600 m</b>.</li></ul>" +
    "<p><b>Contexte possible :</b> Un jardin rectangulaire mesure 600 m de demi-périmètre. La longueur dépasse la largeur de 40 m.<br><b>Consigne :</b> Trouve les dimensions du jardin.</p>",
  astuce: "Avant de calculer, lis bien le <b>titre</b> du tableau ou du graphique, le nom des lignes et des colonnes, et ce que représente chaque symbole.",
  regle: "On lit les données d'un tableau, d'un schéma ou d'un graphique pour créer un énoncé-problème, puis on les utilise pour le résoudre.",
  niveaux: [
    [
      { t: "qcm", q: "À partir des données d'un tableau, d'un schéma ou d'un graphique, on peut…", choix: ["créer un énoncé-problème", "seulement colorier", "ne rien faire"], r: "créer un énoncé-problème", expl: "C'est la phrase de la leçon." },
      { t: "qcm", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Combien de mangues Awa a-t-elle vendues mardi ?", choix: ["60", "45", "38", "72"], r: "60", expl: "Dans la colonne « mardi », on lit 60." },
      { t: "qcm", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Quel jour a-t-elle vendu le plus de mangues ?", choix: ["vendredi", "jeudi", "lundi", "mardi"], r: "vendredi", expl: "85 est le plus grand nombre du tableau." },
      { t: "vf", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Mercredi, Awa a vendu moins de mangues que lundi.", r: true, expl: "Mercredi : 38 ; lundi : 45. 38 < 45." },
      { t: "vf", q: "Voici le schéma du cahier :<br>l : ━━━━━━━━━━<br>L : ━━━━━━━━━━━━━ (le morceau en plus mesure 40 m)<br>Les deux segments ensemble : 600 m<br>Le segment L est plus long que le segment l.", r: true, expl: "L a un morceau de 40 m en plus." },
      { t: "qcm", q: "Voici le schéma du cahier :<br>l : ━━━━━━━━━━<br>L : ━━━━━━━━━━━━━ (le morceau en plus mesure 40 m)<br>Les deux segments ensemble : 600 m<br>Que représentent les 600 m ?", choix: ["la longueur et la largeur réunies (le demi-périmètre)", "la longueur seule", "la largeur seule"], r: "la longueur et la largeur réunies (le demi-périmètre)", expl: "L'accolade réunit les deux segments : L + l = 600 m." }
    ],
    [
      { t: "saisie", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Combien de mangues Awa a-t-elle vendues lundi et mardi ensemble ?", r: "105", expl: "Lundi 45, mardi 60 : 45 + 60 = 105 mangues." },
      { t: "saisie", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Combien de mangues a-t-elle vendues dans la semaine ?", r: "300", expl: "45 + 60 + 38 + 72 + 85 = 300 mangues." },
      { t: "saisie", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Combien de mangues de plus a-t-elle vendues jeudi que mercredi ?", r: "34", expl: "Jeudi 72, mercredi 38 : 72 − 38 = 34 mangues." },
      { t: "qcm", q: "Voici le nombre d'élèves de chaque classe d'une école de Thiès :<table class='tableau'><tr><th>classe</th><th>CI</th><th>CP</th><th>CE1</th><th>CE2</th><th>CM1</th><th>CM2</th></tr><tr><td>élèves</td><td>48</td><td>52</td><td>45</td><td>50</td><td>47</td><td>56</td></tr></table>Quelle classe a le plus d'élèves ?", choix: ["CM2", "CP", "CE2", "CI"], r: "CM2", expl: "56 est le plus grand nombre du tableau." },
      { t: "saisie", q: "Voici le nombre d'élèves de chaque classe d'une école de Thiès :<table class='tableau'><tr><th>classe</th><th>CI</th><th>CP</th><th>CE1</th><th>CE2</th><th>CM1</th><th>CM2</th></tr><tr><td>élèves</td><td>48</td><td>52</td><td>45</td><td>50</td><td>47</td><td>56</td></tr></table>Combien d'élèves y a-t-il dans toute l'école ?", r: "298", expl: "48 + 52 + 45 + 50 + 47 + 56 = 298 élèves." },
      { t: "saisie", q: "Ce graphique montre les sacs de riz vendus par une boutique de Pikine.<br>Chaque ■ représente 10 sacs.<br>lundi : ■■■<br>mardi : ■■■■■<br>mercredi : ■■<br>jeudi : ■■■■<br>Combien de sacs la boutique a-t-elle vendus mardi ?", r: "50", expl: "Mardi : 5 carrés de 10 sacs → 50 sacs." },
      { t: "saisie", q: "Ce graphique montre les sacs de riz vendus par une boutique de Pikine.<br>Chaque ■ représente 10 sacs.<br>lundi : ■■■<br>mardi : ■■■■■<br>mercredi : ■■<br>jeudi : ■■■■<br>Combien de sacs a-t-elle vendus en tout pendant ces quatre jours ?", r: "140", expl: "3 + 5 + 2 + 4 = 14 carrés, soit 140 sacs (30 + 50 + 20 + 40)." },
      { t: "trous", q: "Voici le schéma du cahier :<br>l : ━━━━━━━━━━<br>L : ━━━━━━━━━━━━━ (le morceau en plus mesure 40 m)<br>Les deux segments ensemble : 600 m<br>Complète ce qu'on lit sur le schéma.", texte: "L + l = [600] m ; L = l + [40] m", nombre: true, expl: "L'accolade donne la somme (600 m) ; le morceau en plus donne la différence (40 m)." }
    ],
    [
      { t: "qcm", q: "Awa vend des mangues au marché de Thiaroye. Voici ses ventes de la semaine :<table class='tableau'><tr><th>jour</th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td>mangues vendues</td><td>45</td><td>60</td><td>38</td><td>72</td><td>85</td></tr></table>Quel énoncé est fidèle au tableau ?", choix: ["Awa a vendu 45 mangues lundi et 60 mardi. Combien en a-t-elle vendu ces deux jours ?", "Awa a vendu 60 mangues lundi et 45 mardi. Combien en a-t-elle vendu ces deux jours ?", "Awa a vendu 38 mangues jeudi. Combien en a-t-elle vendu vendredi ?"], r: "Awa a vendu 45 mangues lundi et 60 mardi. Combien en a-t-elle vendu ces deux jours ?", expl: "Le tableau donne 45 pour lundi et 60 pour mardi. Jeudi, c'est 72, pas 38." },
      { t: "qcm", q: "Ce graphique montre les sacs de riz vendus par une boutique de Pikine.<br>Chaque ■ représente 10 sacs.<br>lundi : ■■■<br>mardi : ■■■■■<br>mercredi : ■■<br>jeudi : ■■■■<br>Combien de sacs de plus la boutique a-t-elle vendus mardi que mercredi ?", choix: ["30", "3", "70", "20"], r: "30", expl: "Mardi 50 sacs, mercredi 20 sacs : 50 − 20 = 30. Attention, chaque carré vaut 10 sacs !" },
      { t: "saisie", q: "Ce graphique montre les sacs de riz vendus par une boutique de Pikine.<br>Chaque ■ représente 10 sacs.<br>lundi : ■■■<br>mardi : ■■■■■<br>mercredi : ■■<br>jeudi : ■■■■<br>Un sac coûte 17 000 F. Quelle somme la boutique a-t-elle reçue jeudi ?", r: ["680 000", "680000", "680.000"], expl: "Jeudi : 4 carrés = 40 sacs ; 17 000 × 40 = 680 000 F.", unite: "F" },
      { t: "saisie", q: "Voici les prix affichés par une boutique de Dakar :<table class='tableau'><tr><th>article</th><th>prix</th></tr><tr><td>riz (1 kg)</td><td>450 F</td></tr><tr><td>sucre (1 kg)</td><td>700 F</td></tr><tr><td>huile (1 l)</td><td>1 300 F</td></tr><tr><td>oignons (1 kg)</td><td>500 F</td></tr></table>Fatou achète 2 kg de sucre et 1 l d'huile. Combien paie-t-elle ?", r: ["2 700", "2700", "2.700"], expl: "Sucre : 700 × 2 = 1 400 F ; huile : 1 300 F ; total 2 700 F.", unite: "F" },
      { t: "vf", q: "Voici les prix affichés par une boutique de Dakar :<table class='tableau'><tr><th>article</th><th>prix</th></tr><tr><td>riz (1 kg)</td><td>450 F</td></tr><tr><td>sucre (1 kg)</td><td>700 F</td></tr><tr><td>huile (1 l)</td><td>1 300 F</td></tr><tr><td>oignons (1 kg)</td><td>500 F</td></tr></table>Le kilo d'oignons coûte plus cher que le kilo de riz.", r: true, expl: "Oignons : 500 F ; riz : 450 F." },
      { t: "qcm", q: "Voici les prix affichés par une boutique de Dakar :<table class='tableau'><tr><th>article</th><th>prix</th></tr><tr><td>riz (1 kg)</td><td>450 F</td></tr><tr><td>sucre (1 kg)</td><td>700 F</td></tr><tr><td>huile (1 l)</td><td>1 300 F</td></tr><tr><td>oignons (1 kg)</td><td>500 F</td></tr></table>Quelle question peut-on résoudre avec ce tableau ?", choix: ["Combien coûtent 3 kg de riz ?", "Combien coûte un poulet ?", "À quelle heure ouvre la boutique ?"], r: "Combien coûtent 3 kg de riz ?", expl: "Le tableau donne le prix du riz, mais pas celui du poulet ni l'heure d'ouverture." },
      { t: "saisie", q: "Voici les prix affichés par une boutique de Dakar :<table class='tableau'><tr><th>article</th><th>prix</th></tr><tr><td>riz (1 kg)</td><td>450 F</td></tr><tr><td>sucre (1 kg)</td><td>700 F</td></tr><tr><td>huile (1 l)</td><td>1 300 F</td></tr><tr><td>oignons (1 kg)</td><td>500 F</td></tr></table>Combien coûtent 5 kg de riz ?", r: ["2 250", "2250", "2.250"], expl: "450 × 5 = 2 250 F.", unite: "F" }
    ],
    [
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Voici le schéma du cahier :<br>l : ━━━━━━━━━━<br>L : ━━━━━━━━━━━━━ (le morceau en plus mesure 40 m)<br>Les deux segments ensemble : 600 m<br>Un jardin rectangulaire mesure 600 m de demi-périmètre. La longueur dépasse la largeur de 40 m. Trouve ses dimensions.", etapes: [{ q: "Si on enlève le morceau de 40 m, il reste deux segments égaux : 600 − 40 = ?", r: "560", unite: "m" }, { q: "La largeur est la moitié : 560 : 2 = ?", r: "280", unite: "m" }, { q: "La longueur : 280 + 40 = ?", r: "320", unite: "m" }], expl: "Largeur 280 m, longueur 320 m. Vérification : 280 + 320 = 600 et 320 − 280 = 40." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Voici les prix affichés par une boutique de Dakar :<table class='tableau'><tr><th>article</th><th>prix</th></tr><tr><td>riz (1 kg)</td><td>450 F</td></tr><tr><td>sucre (1 kg)</td><td>700 F</td></tr><tr><td>huile (1 l)</td><td>1 300 F</td></tr><tr><td>oignons (1 kg)</td><td>500 F</td></tr></table>Moussa achète 3 kg de riz, 2 kg d'oignons et 1 l d'huile. Il paie avec un billet de 5 000 F.", etapes: [{ q: "Prix du riz :", r: "1350", unite: "F" }, { q: "Prix des oignons :", r: "1000", unite: "F" }, { q: "Dépense totale :", r: "3650", unite: "F" }, { q: "Monnaie rendue :", r: "1350", unite: "F" }], expl: "450 × 3 = 1 350 ; 500 × 2 = 1 000 ; 1 350 + 1 000 + 1 300 = 3 650 ; 5 000 − 3 650 = 1 350 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Ce graphique montre les sacs de riz vendus par une boutique de Pikine.<br>Chaque ■ représente 10 sacs.<br>lundi : ■■■<br>mardi : ■■■■■<br>mercredi : ■■<br>jeudi : ■■■■<br>Chaque sac pèse 50 kg.", etapes: [{ q: "Nombre de sacs vendus pendant les quatre jours :", r: "140" }, { q: "Masse totale de riz vendue :", r: "7000", unite: "kg" }], expl: "30 + 50 + 20 + 40 = 140 sacs ; 50 × 140 = 7 000 kg." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Voici le nombre d'élèves de chaque classe d'une école de Thiès :<table class='tableau'><tr><th>classe</th><th>CI</th><th>CP</th><th>CE1</th><th>CE2</th><th>CM1</th><th>CM2</th></tr><tr><td>élèves</td><td>48</td><td>52</td><td>45</td><td>50</td><td>47</td><td>56</td></tr></table>L'école reçoit 350 tables-bancs neufs, une place par élève.", etapes: [{ q: "Nombre d'élèves de l'école :", r: "298" }, { q: "Nombre de places en trop :", r: "52" }], expl: "48 + 52 + 45 + 50 + 47 + 56 = 298 ; 350 − 298 = 52 places." },
      { t: "qcm", q: "Un schéma montre deux segments : celui de Moussa (M) et celui de Fatou (F), qui est plus long de 500 F. Une accolade réunit les deux : 3 500 F. Quel énoncé correspond à ce schéma ?", choix: ["Moussa et Fatou ont ensemble 3 500 F. Fatou a 500 F de plus que Moussa.", "Moussa a 3 500 F et Fatou a 500 F.", "Fatou a 500 F de moins que Moussa."], r: "Moussa et Fatou ont ensemble 3 500 F. Fatou a 500 F de plus que Moussa.", expl: "L'accolade donne le total des deux (3 500 F) ; le morceau en plus donne l'écart (500 F) en faveur de Fatou." }
    ]
  ]
});


/* ---- ma-pb-types-questions.js ---- */
LECONS.push({
  id: "ma-pb-types-questions",
  cahier: "maths",
  matiere: "Résolution de problèmes",
  titre: "Les types de questions d'un énoncé",
  date: "2026-09-25",
  photos: ["DJI_20261118220845_0068_D.jpg"],
  retiens:
    "<ul><li>On appelle <b>questions intermédiaires</b> les questions cachées ou posées dans un énoncé et qui mènent à une question finale.</li><li>La <b>question finale</b> termine la résolution d'un problème.</li></ul>" +
    "<p>Exemple : « Moussa achète 3 cahiers à 250 F l'un et un stylo à 150 F. Il paie avec un billet de 1 000 F. Combien lui rend-on ? »</p>" +
    "<table><tr><th>question</th><th>type</th><th>réponse</th></tr>" +
    "<tr><td>Combien coûtent les 3 cahiers ?</td><td>intermédiaire (cachée)</td><td>250 F × 3 = 750 F</td></tr>" +
    "<tr><td>Combien Moussa dépense-t-il en tout ?</td><td>intermédiaire (cachée)</td><td>750 F + 150 F = 900 F</td></tr>" +
    "<tr><td>Combien lui rend-on ?</td><td>finale</td><td>1 000 F − 900 F = 100 F</td></tr>" +
    "</table>",
  astuce: "Avant de calculer, demande-toi : « Qu'est-ce que je dois savoir d'abord pour répondre à la dernière question ? » Ce sont les questions intermédiaires.",
  regle: "Les questions intermédiaires (posées ou cachées) mènent à la question finale ; la question finale termine la résolution du problème.",
  niveaux: [
    [
      { t: "qcm", q: "Une question intermédiaire…", choix: ["mène à la question finale", "termine le problème", "ne sert à rien"], r: "mène à la question finale", expl: "Les questions intermédiaires sont des étapes vers la question finale." },
      { t: "qcm", q: "La question finale…", choix: ["termine la résolution du problème", "est toujours la première", "est toujours cachée"], r: "termine la résolution du problème", expl: "C'est la dernière question : sa réponse termine le problème." },
      { t: "vf", q: "Une question intermédiaire peut être cachée, c'est-à-dire pas écrite dans l'énoncé.", r: true, expl: "Les questions intermédiaires sont cachées ou posées." },
      { t: "vf", q: "Dans l'exemple de Moussa, « Combien lui rend-on ? » est la question finale.", r: true, expl: "C'est la dernière réponse à trouver : 100 F." },
      { t: "relier", q: "Relie.", paires: [["question intermédiaire", "elle mène à la question finale"], ["question finale", "elle termine la résolution"], ["question cachée", "pas écrite, mais à trouver"]], expl: "Une question cachée est une question intermédiaire qui n'est pas écrite dans l'énoncé." },
      { t: "qcm", q: "Dans l'exemple de Moussa, que faut-il calculer en premier ?", choix: ["le prix des 3 cahiers", "la monnaie rendue", "le prix du stylo seul"], r: "le prix des 3 cahiers", expl: "250 F × 3 = 750 F : c'est la première question intermédiaire (cachée)." }
    ],
    [
      { t: "classer", q: "« Fatou achète 2 kg de viande à 4 000 F le kilo et 3 kg d'oignons à 500 F le kilo. Elle paie avec un billet de 10 000 F. Combien lui rend-on ? » Range chaque question.", cases: ["question intermédiaire", "question finale"], items: [["Combien coûte la viande ?", "question intermédiaire"], ["Combien coûtent les oignons ?", "question intermédiaire"], ["Combien dépense-t-elle en tout ?", "question intermédiaire"], ["Combien lui rend-on ?", "question finale"]], expl: "Les trois premières questions mènent à la dernière, qui termine le problème." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Fatou achète 2 kg de viande à 4 000 F le kilo et 3 kg d'oignons à 500 F le kilo. Elle paie avec un billet de 10 000 F. Combien lui rend-on ? »", etapes: [{ q: "Prix de la viande :", r: "8000", unite: "F" }, { q: "Prix des oignons :", r: "1500", unite: "F" }, { q: "Dépense totale :", r: "9500", unite: "F" }, { q: "Somme rendue :", r: "500", unite: "F" }], expl: "4 000 × 2 = 8 000 ; 500 × 3 = 1 500 ; 8 000 + 1 500 = 9 500 ; 10 000 − 9 500 = 500 F." },
      { t: "qcm", q: "« Un car transporte 45 passagers à l'aller et 38 au retour. Le ticket coûte 1 500 F. Quelle est la recette totale ? » Quelle est la question intermédiaire cachée ?", choix: ["Combien de passagers en tout ?", "Quelle est la recette totale ?", "Combien coûte le ticket ?"], r: "Combien de passagers en tout ?", expl: "Il faut d'abord le nombre total de passagers, puis on multiplie par le prix du ticket." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du car (aller 45 passagers, retour 38, ticket 1 500 F).", etapes: [{ q: "Nombre total de passagers :", r: "83" }, { q: "Recette totale :", r: "124500", unite: "F" }], expl: "45 + 38 = 83 ; 1 500 × 83 = 124 500 F." },
      { t: "vf", q: "Un problème peut avoir plusieurs questions intermédiaires, mais une seule question finale.", r: true, expl: "La question finale termine la résolution : c'est la dernière." },
      { t: "qcm", q: "Dans quel ordre répond-on aux questions ?", choix: ["d'abord les questions intermédiaires, puis la question finale", "d'abord la question finale", "dans n'importe quel ordre"], r: "d'abord les questions intermédiaires, puis la question finale", expl: "Les questions intermédiaires mènent à la question finale." },
      { t: "qcm", q: "« Ibrahima a 50 poules. Chaque poule pond 2 œufs par jour. Il vend les œufs 100 F l'un. Combien gagne-t-il par jour ? » Quelle est la question intermédiaire ?", choix: ["Combien d'œufs ramasse-t-il par jour ?", "Combien gagne-t-il par jour ?", "Combien a-t-il de poules ?"], r: "Combien d'œufs ramasse-t-il par jour ?", expl: "On calcule d'abord les œufs (50 × 2 = 100), puis le gain." },
      { t: "saisie", q: "Résous le problème d'Ibrahima : combien gagne-t-il par jour ?", r: ["10 000", "10000", "10.000"], expl: "50 × 2 = 100 œufs ; 100 × 100 F = 10 000 F.", unite: "F" }
    ],
    [
      { t: "qcm", q: "« Awa a 5 000 F. Elle achète 3 savons à 400 F l'un. Combien lui reste-t-il ? » Quelle est la question intermédiaire cachée ?", choix: ["Combien coûtent les 3 savons ?", "Combien lui reste-t-il ?", "Combien Awa a-t-elle ?"], r: "Combien coûtent les 3 savons ?", expl: "Il faut d'abord le prix des savons : 400 × 3 = 1 200 F." },
      { t: "saisie", q: "Résous le problème d'Awa : combien lui reste-t-il ?", r: ["3 800", "3800", "3.800"], expl: "400 × 3 = 1 200 F ; 5 000 − 1 200 = 3 800 F.", unite: "F" },
      { t: "vf", q: "Une question intermédiaire n'est jamais écrite dans l'énoncé.", r: false, expl: "Elle peut être cachée OU posée dans l'énoncé." },
      { t: "qcm", q: "« Un vendeur achète 20 pastèques à 600 F l'une. Il les revend 900 F l'une. » Quelle question peut être la question finale ?", choix: ["Quel est son bénéfice ?", "Combien a-t-il payé les pastèques ?", "Combien a-t-il reçu en les vendant ?"], r: "Quel est son bénéfice ?", expl: "Pour le bénéfice, il faut d'abord le prix d'achat et le prix de vente : ce sont les questions intermédiaires." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du vendeur de pastèques.", etapes: [{ q: "Prix d'achat des 20 pastèques :", r: "12000", unite: "F" }, { q: "Prix de vente des 20 pastèques :", r: "18000", unite: "F" }, { q: "Bénéfice :", r: "6000", unite: "F" }], expl: "600 × 20 = 12 000 ; 900 × 20 = 18 000 ; 18 000 − 12 000 = 6 000 F." },
      { t: "trous", q: "Complète avec « intermédiaire » ou « finale ».", texte: "Dans l'exemple de Moussa, « Combien coûtent les 3 cahiers ? » est une question [intermédiaire] ; « Combien lui rend-on ? » est la question [finale].", expl: "La première mène à la dernière ; la dernière termine le problème." }
    ],
    [
      { t: "qcm", q: "« Pour la Tabaski, le père de Mamadou a 200 000 F. Il achète un mouton à 125 000 F, 3 sacs d'oignons à 7 500 F l'un et 10 kg de pommes de terre à 600 F le kilo. » Quelle question finale convient ?", choix: ["Combien d'argent lui reste-t-il ?", "Combien coûte le mouton ?", "Combien de sacs d'oignons achète-t-il ?"], r: "Combien d'argent lui reste-t-il ?", expl: "Le prix du mouton et le nombre de sacs sont déjà donnés : ce ne sont pas des questions à poser." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème de la Tabaski : combien d'argent reste-t-il au père de Mamadou ?", etapes: [{ q: "Prix des oignons :", r: "22500", unite: "F" }, { q: "Prix des pommes de terre :", r: "6000", unite: "F" }, { q: "Dépense totale :", r: "153500", unite: "F" }, { q: "Argent qui reste :", r: "46500", unite: "F" }], expl: "7 500 × 3 = 22 500 ; 600 × 10 = 6 000 ; 125 000 + 22 500 + 6 000 = 153 500 ; 200 000 − 153 500 = 46 500 F." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "« Une école de Ziguinchor a 6 classes de 42 élèves. Chaque élève reçoit 4 cahiers. Combien de cahiers faut-il ? »", etapes: [{ q: "Question intermédiaire : combien d'élèves y a-t-il ?", r: "252" }, { q: "Question finale : combien de cahiers faut-il ?", r: "1008" }], expl: "42 × 6 = 252 élèves ; 4 × 252 = 1 008 cahiers." },
      { t: "qcm", q: "« Un car fait 2 voyages par jour avec 35 passagers à chaque fois. Le ticket coûte 2 000 F. Quelle est la recette du jour ? » Quelle question intermédiaire faut-il se poser ?", choix: ["Combien de passagers par jour ?", "Combien coûte le car ?", "À quelle heure part le car ?"], r: "Combien de passagers par jour ?", expl: "35 × 2 = 70 passagers, puis on multiplie par le prix du ticket." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Résous le problème du car (2 voyages de 35 passagers, ticket à 2 000 F).", etapes: [{ q: "Passagers par jour :", r: "70" }, { q: "Recette du jour :", r: "140000", unite: "F" }], expl: "35 × 2 = 70 ; 2 000 × 70 = 140 000 F." }
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


/* ---- vdsm-role-aliments.js ---- */
// Un mot illisible dans la case « protection » (photo 2026-11-25_17) n'est pas repris.
LECONS.push({
  id: "vdsm-role-aliments",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Le rôle des aliments",
  date: "2026-11-24",
  photos: ["2026-11-25_17.jpg"],
  retiens:
    "<table><tr><th>Groupe</th><th>Rôle</th><th>Catégories et exemples</th></tr>" +
    "<tr><td><b>Aliments de construction</b></td><td>assurent la croissance et l'entretien du corps humain</td><td><b>Protides</b>, riches en matières azotées : viande, poisson, lait, œuf, haricot</td></tr>" +
    "<tr><td><b>Aliments énergétiques</b></td><td>donnent la force et la chaleur au corps</td><td><b>Glucides</b> (sucres) : céréales, tubercules, légumes, fruits, pain, riz, farine, miel<br><b>Lipides</b> (matières grasses) : beurre, arachide, lait, huile de palme, œuf</td></tr>" +
    "<tr><td><b>Aliments de protection</b> (catalyseurs)</td><td>assurent le maintien de la santé et le bon fonctionnement du corps</td><td><b>Sels minéraux et vitamines</b> : fruits crus, légumes frais, lait</td></tr></table>" +
    "<p><b>NB :</b> le lait est un <b>aliment complet</b> : il contient des matières azotées, des matières grasses, des matières minérales, de l'eau, du sucre et des vitamines.</p>" +
    "<p>Pour vivre en bonne santé, il faut avoir une alimentation <b>suffisante, variée et équilibrée</b>.</p>",
  astuce: "Trois mots, trois rôles : <b>construire</b> (protides), <b>donner de l'énergie</b> (glucides, lipides), <b>protéger</b> (vitamines, sels minéraux).",
  regle: "Les aliments de construction (protides) font grandir et entretiennent le corps ; les aliments énergétiques (glucides et lipides) donnent force et chaleur ; les aliments de protection (vitamines et sels minéraux) maintiennent la santé.",
  niveaux: [
    [
      { t: "qcm", q: "Quel est le rôle des aliments de construction ?", choix: ["assurer la croissance et l'entretien du corps", "donner la chaleur au corps", "rendre les aliments sucrés"], r: "assurer la croissance et l'entretien du corps", expl: "Ce sont les protides : viande, poisson, œuf, haricot…" },
      { t: "qcm", q: "Les aliments énergétiques donnent au corps…", choix: ["la force et la chaleur", "la croissance", "les vitamines"], r: "la force et la chaleur", expl: "Ce sont les glucides et les lipides." },
      { t: "qcm", q: "Les vitamines et les sels minéraux sont des aliments…", choix: ["de protection", "de construction", "énergétiques"], r: "de protection", expl: "Ils maintiennent la santé : on les appelle aussi catalyseurs." },
      { t: "vf", q: "Le lait est un aliment complet.", r: true, expl: "Il contient des matières azotées, grasses, minérales, de l'eau, du sucre et des vitamines." },
      { t: "qcm", q: "Les lipides sont…", choix: ["des matières grasses", "des sucres", "des vitamines"], r: "des matières grasses", expl: "Beurre, arachide, huile de palme…" }
    ],
    [
      { t: "classer", q: "Range ces aliments.", cases: ["protides", "glucides", "lipides"], items: [["viande", "protides"], ["poisson", "protides"], ["haricot", "protides"], ["riz", "glucides"], ["miel", "glucides"], ["pain", "glucides"], ["beurre", "lipides"], ["huile de palme", "lipides"]], expl: "Protides : construction. Glucides : sucres. Lipides : matières grasses." },
      { t: "relier", q: "Relie chaque groupe à son rôle.", paires: [["construction", "croissance et entretien du corps"], ["énergétiques", "force et chaleur"], ["protection", "maintien de la santé"]], expl: "C'est la colonne « Rôles » du tableau." },
      { t: "relier", q: "Relie chaque catégorie à son groupe.", paires: [["protides", "aliments de construction"], ["glucides", "aliments énergétiques"], ["lipides", "aliments énergétiques"], ["vitamines", "aliments de protection"]], expl: "Glucides et lipides sont tous les deux énergétiques." },
      { t: "qcm", q: "Les fruits crus et les légumes frais apportent surtout…", choix: ["des vitamines et des sels minéraux", "des matières grasses", "des protides"], r: "des vitamines et des sels minéraux", expl: "Ce sont des aliments de protection." },
      { t: "saisie", q: "Les protides sont riches en matières…", r: "azotées", expl: "Les protides sont riches en matières azotées." },
      { t: "trous", q: "Complète.", texte: "Pour vivre en bonne santé, il faut avoir une alimentation suffisante, [variée] et [équilibrée].", expl: "Suffisante, variée et équilibrée." },
      { t: "qcm", q: "Quel autre nom donne-t-on aux aliments de protection ?", choix: ["catalyseurs", "protides", "tubercules"], r: "catalyseurs", expl: "Aliments de protection = catalyseurs." },
      { t: "vf", q: "Le riz et la farine sont des glucides.", r: true, expl: "Les céréales, le pain, le riz, la farine sont des glucides." }
    ],
    [
      { t: "qcm", q: "L'arachide est rangée parmi…", choix: ["les lipides", "les protides", "les vitamines"], r: "les lipides", expl: "Dans la leçon, l'arachide fait partie des matières grasses." },
      { t: "qcm", q: "Pourquoi l'œuf apparaît-il deux fois dans le tableau ?", choix: ["parce qu'il contient des protides et des lipides", "parce que c'est un fruit", "par erreur"], r: "parce qu'il contient des protides et des lipides", expl: "Un même aliment peut appartenir à plusieurs catégories, comme le lait." },
      { t: "classer", q: "Quel rôle joue chaque aliment ?", cases: ["construction", "énergie", "protection"], items: [["poisson", "construction"], ["œuf", "construction"], ["mil", "énergie"], ["patate douce", "énergie"], ["mangue crue", "protection"], ["carotte fraîche", "protection"]], expl: "Le mil est une céréale et la patate douce un tubercule : ils donnent de l'énergie." },
      { t: "vf", q: "Manger seulement du riz tous les jours, c'est une alimentation équilibrée.", r: false, expl: "Il faut une alimentation variée : des aliments des trois groupes." },
      { t: "qcm", q: "Quelle matière le lait ne contient-il PAS selon la leçon ?", choix: ["Il les contient toutes : azotées, grasses, minérales, eau, sucre, vitamines.", "les matières grasses", "le sucre"], r: "Il les contient toutes : azotées, grasses, minérales, eau, sucre, vitamines.", expl: "C'est pour cela qu'on dit que le lait est un aliment complet." },
      { t: "saisie", q: "Les sucres s'appellent aussi les…", r: "glucides", expl: "Glucides = sucres." }
    ],
    [
      { t: "qcm", q: "Au déjeuner, Awa mange du riz au poisson avec des légumes frais. Que lui manque-t-il pour un repas complet ?", choix: ["rien : il y a des trois groupes", "des protides", "des glucides"], r: "rien : il y a des trois groupes", expl: "Riz : énergie. Poisson : construction. Légumes frais : protection." },
      { t: "qcm", q: "Moussa grandit vite. Quels aliments l'aident surtout à grandir ?", choix: ["la viande, le poisson, l'œuf, le haricot", "le miel et le sucre", "l'huile de palme"], r: "la viande, le poisson, l'œuf, le haricot", expl: "Les protides sont des aliments de construction." },
      { t: "trous", q: "Complète le résumé.", texte: "Les [protides] construisent le corps. Les glucides et les [lipides] donnent la force et la chaleur. Les vitamines et les sels minéraux [protègent] le corps.", expl: "Construire, donner de l'énergie, protéger." },
      { t: "relier", q: "Relie chaque aliment à sa catégorie.", paires: [["haricot", "protides"], ["farine", "glucides"], ["beurre", "lipides"], ["fruits crus", "vitamines"]], expl: "Chaque aliment a sa place dans le tableau." },
      { t: "vf", q: "Une alimentation variée contient des aliments de construction, énergétiques et de protection.", r: true, expl: "C'est ce qu'il faut pour vivre en bonne santé." }
    ]
  ]
});


/* ---- ve-fonctionnement-sous-regionales.js ---- */
// À VÉRIFIER :
//  - Photo 0114 bougée : la liste des pays membres du CILSS est en grande partie devinée ; elle n'est pas reprise et aucun exercice n'y touche.
//  - CEDEAO « 14 pays dont le Sénégal » (0116) : nombre douteux (15 membres jusqu'en 2024, 12 depuis le retrait du Mali, du Burkina Faso et du Niger en janvier 2025). Le module écrit « plusieurs pays d'Afrique de l'Ouest, dont le Sénégal », sans nombre.
//  - BOAD « 7 pays dont le Sénégal » (0116) : la BOAD est la banque de développement des 8 pays de l'UEMOA. Aucun exercice sur ce nombre.
//  - Manantali (0117) : « situé à 90 km de Fouladou » non repris (probablement Bafoulabé, au Mali) ; « barrage régulier » corrigé en « barrage régulateur » ; « Il est conduit » corrigé en « Il est construit ».
LECONS.push({
  id: "ve-fonctionnement-sous-regionales",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Le fonctionnement des organisations sous-régionales",
  date: "2026-11-02",
  photos: ["DJI_20261118221528_0114_D.jpg", "DJI_20261118221544_0116_D.jpg", "DJI_20261118221607_0117_D.jpg"],
  retiens:
    "<table><tr><th>Sigle</th><th>Missions ou buts</th><th>Pays membres</th></tr>" +
    "<tr><td><b>OMVG</b></td><td>exploiter de façon rationnelle et harmonieuse les ressources du fleuve Gambie ; réaliser des barrages de retenue</td><td>Sénégal, Gambie, Guinée-Bissau, Guinée</td></tr>" +
    "<tr><td><b>OMVS</b></td><td>développer l'agriculture irriguée ; produire de l'énergie hydroélectrique ; la pêche ; la navigation sur le fleuve</td><td>Sénégal, Mali, Mauritanie, Guinée</td></tr>" +
    "<tr><td><b>CILSS</b></td><td>rechercher la sécurité alimentaire et lutter contre les effets de la sécheresse</td><td>des pays du Sahel et d'Afrique de l'Ouest, dont le Sénégal</td></tr>" +
    "<tr><td><b>CEDEAO</b></td><td>promouvoir la coopération et l'intégration entre les États membres ; maintenir la paix et la sécurité dans la sous-région</td><td>des pays d'Afrique de l'Ouest, dont le Sénégal</td></tr>" +
    "<tr><td><b>UEMOA</b></td><td>promouvoir le développement et l'intégration économique des États membres (un tarif extérieur commun)</td><td>8 pays, dont le Sénégal</td></tr>" +
    "<tr><td><b>BCEAO</b></td><td>définir et mettre en œuvre la politique monétaire ; veiller à la stabilité du système bancaire et financier</td><td>8 pays, dont le Sénégal</td></tr>" +
    "<tr><td><b>BOAD</b></td><td>promouvoir le développement équilibré des États membres et contribuer à l'intégration économique de l'Afrique de l'Ouest</td><td>les pays de l'UEMOA, dont le Sénégal</td></tr></table>" +
    "<p><b>NB</b> : grâce à l'OMVS, deux barrages ont été réalisés :</p>" +
    "<ul><li>le barrage de <b>Manantali</b>, au <b>Mali</b> : c'est un barrage <b>régulateur</b> et <b>hydroélectrique</b>. Il fournit une énergie propre (l'électricité) ;</li>" +
    "<li>le barrage de <b>Diama</b>, à environ 25 km de <b>Saint-Louis</b> (Sénégal) : c'est un barrage <b>anti-sel</b>. Il est construit pour empêcher l'eau salée de la mer de remonter le fleuve.</li></ul>",
  astuce: "<b>Diama</b> arrête le <b>sel</b> (près de Saint-Louis, au bord de la mer) ; <b>Manantali</b> donne la <b>lumière</b> (l'électricité, au Mali).",
  regle: "Chaque organisation a sa mission : les fleuves pour l'OMVS et l'OMVG, la sécheresse pour le CILSS, la paix et l'intégration pour la CEDEAO, l'économie pour l'UEMOA, la monnaie pour la BCEAO, le développement pour la BOAD.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle organisation lutte contre les effets de la sécheresse ?", choix: ["le CILSS", "la BCEAO", "l'OMVG"], r: "le CILSS", expl: "CILSS : Lutte contre la Sécheresse dans le Sahel." },
      { t: "qcm", q: "Quelle organisation s'occupe de la politique monétaire (la monnaie) ?", choix: ["la BCEAO", "le CILSS", "l'OMVS"], r: "la BCEAO", expl: "La Banque Centrale définit la politique monétaire." },
      { t: "vf", q: "La CEDEAO veut maintenir la paix et la sécurité dans la sous-région.", r: true, expl: "C'est une de ses deux missions au cahier." },
      { t: "qcm", q: "Le barrage de Diama est un barrage…", choix: ["anti-sel", "de pêche", "de football"], r: "anti-sel", expl: "Il empêche l'eau salée de la mer de remonter le fleuve." },
      { t: "qcm", q: "Dans quel pays se trouve le barrage de Manantali ?", choix: ["au Mali", "au Sénégal", "en Gambie"], r: "au Mali", expl: "Manantali est au Mali ; Diama est près de Saint-Louis, au Sénégal." },
      { t: "vf", q: "Les barrages de Manantali et de Diama ont été réalisés grâce à l'OMVS.", r: true, expl: "C'est le NB de la leçon." }
    ],
    [
      { t: "relier", q: "Relie chaque organisation à sa mission.", paires: [["OMVS", "agriculture irriguée et énergie hydroélectrique"], ["CILSS", "sécurité alimentaire et lutte contre la sécheresse"], ["CEDEAO", "coopération, intégration, paix et sécurité"], ["BCEAO", "politique monétaire"], ["OMVG", "ressources du fleuve Gambie"]], expl: "La mission se lit souvent dans la signification du sigle." },
      { t: "classer", q: "Pays membre de l'OMVS ou de l'OMVG ? (le Sénégal et la Guinée sont dans les deux : ils ne sont pas dans la liste)", cases: ["OMVS seulement", "OMVG seulement"], items: [["Mali", "OMVS seulement"], ["Mauritanie", "OMVS seulement"], ["Gambie", "OMVG seulement"], ["Guinée-Bissau", "OMVG seulement"]], expl: "OMVS : Sénégal, Mali, Mauritanie, Guinée. OMVG : Sénégal, Gambie, Guinée-Bissau, Guinée." },
      { t: "qcm", q: "Combien de pays sont membres de l'UEMOA ?", choix: ["8", "4", "20"], r: "8", expl: "L'UEMOA compte 8 pays, dont le Sénégal." },
      { t: "qcm", q: "Quels pays sont membres de l'OMVS ?", choix: ["Sénégal, Mali, Mauritanie, Guinée", "Sénégal, Gambie, Guinée-Bissau, Guinée", "Sénégal, Nigeria, Togo, Bénin"], r: "Sénégal, Mali, Mauritanie, Guinée", expl: "Ce sont les pays traversés par le fleuve Sénégal et ses sources." },
      { t: "qcm", q: "Quels pays sont membres de l'OMVG ?", choix: ["Sénégal, Gambie, Guinée-Bissau, Guinée", "Sénégal, Mali, Mauritanie, Guinée", "Gambie, Ghana, Togo, Niger"], r: "Sénégal, Gambie, Guinée-Bissau, Guinée", expl: "Les pays liés au fleuve Gambie." },
      { t: "vf", q: "Le barrage de Manantali produit de l'électricité.", r: true, expl: "C'est un barrage hydroélectrique : il fournit une énergie propre." },
      { t: "vf", q: "Le barrage de Diama sert surtout à produire de l'électricité.", r: false, expl: "Diama est un barrage anti-sel : il retient l'eau salée." },
      { t: "saisie", q: "Comment s'appelle le barrage anti-sel construit près de Saint-Louis ?", r: ["Diama", "le barrage de Diama", "barrage de Diama"], expl: "Diama, à environ 25 km de Saint-Louis." },
      { t: "trous", q: "Complète.", texte: "L'UEMOA promeut le développement et l'intégration [économique] des États membres. La BCEAO veille à la stabilité du système [bancaire] et financier.", expl: "Économie pour l'UEMOA, banques pour la BCEAO." }
    ],
    [
      { t: "qcm", q: "Que veut dire « barrage <b>régulateur</b> » ?", choix: ["il contrôle la quantité d'eau du fleuve toute l'année", "il arrête les bateaux", "il fabrique du sel"], r: "il contrôle la quantité d'eau du fleuve toute l'année", expl: "Réguler, c'est rendre régulier : le barrage garde l'eau et la relâche selon les besoins." },
      { t: "qcm", q: "Pourquoi l'OMVS développe-t-elle l'agriculture irriguée ?", choix: ["pour cultiver même en saison sèche grâce à l'eau du fleuve", "pour arrêter la pêche", "pour faire avancer la mer"], r: "pour cultiver même en saison sèche grâce à l'eau du fleuve", expl: "Irriguer, c'est apporter de l'eau aux champs." },
      { t: "classer", q: "Range chaque mission sous la bonne organisation.", cases: ["CEDEAO", "UEMOA", "BCEAO"], items: [["maintenir la paix et la sécurité", "CEDEAO"], ["promouvoir la coopération entre États", "CEDEAO"], ["un tarif extérieur commun", "UEMOA"], ["l'intégration économique", "UEMOA"], ["la politique monétaire", "BCEAO"], ["la stabilité du système bancaire", "BCEAO"]], expl: "Paix pour la CEDEAO, économie pour l'UEMOA, monnaie pour la BCEAO." },
      { t: "vf", q: "La BOAD est une banque qui aide au développement des pays de l'Afrique de l'Ouest.", r: true, expl: "BOAD : Banque Ouest-Africaine de Développement." },
      { t: "relier", q: "Relie chaque barrage à ce qui le caractérise.", paires: [["Manantali", "régulateur et hydroélectrique, au Mali"], ["Diama", "anti-sel, près de Saint-Louis"]], expl: "Manantali = électricité ; Diama = contre le sel." },
      { t: "saisie", q: "Quelle organisation a fait construire les barrages de Manantali et de Diama ? (sigle)", r: "OMVS", expl: "Organisation pour la Mise en Valeur du fleuve Sénégal." },
      { t: "vf", q: "La BCEAO compte 8 pays membres, dont le Sénégal.", r: true, expl: "Ce sont les mêmes 8 pays que l'UEMOA." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Grâce à l'[OMVS], deux barrages ont été construits. Le barrage de [Manantali], au Mali, produit de l'énergie [hydroélectrique]. Le barrage de [Diama], près de Saint-Louis, est un barrage [anti-sel].", expl: "Les deux barrages de l'OMVS." },
      { t: "qcm", q: "Les paysans de Podor arrosent leurs rizières toute l'année avec l'eau du fleuve Sénégal. Quelle mission de l'OMVS cela montre-t-il ?", choix: ["le développement de l'agriculture irriguée", "la politique monétaire", "le maintien de la paix"], r: "le développement de l'agriculture irriguée", expl: "Irriguer les rizières grâce au fleuve : agriculture irriguée." },
      { t: "qcm", q: "Deux pays voisins se disputent. Quelle organisation sous-régionale a pour mission de maintenir la paix ?", choix: ["la CEDEAO", "l'OMVG", "la BOAD"], r: "la CEDEAO", expl: "La CEDEAO veut maintenir la paix et la sécurité dans la sous-région." },
      { t: "classer", q: "Range chaque organisation selon son domaine.", cases: ["l'eau des fleuves", "l'argent", "la sécheresse"], items: [["OMVS", "l'eau des fleuves"], ["OMVG", "l'eau des fleuves"], ["BCEAO", "l'argent"], ["BOAD", "l'argent"], ["CILSS", "la sécheresse"]], expl: "Fleuves, banques, sécheresse." },
      { t: "qcm", q: "Pourquoi construire un barrage anti-sel à Diama ?", choix: ["pour que l'eau salée de la mer ne gâte pas les terres et l'eau douce du fleuve", "pour produire du sel", "pour faire venir la mer à Podor"], r: "pour que l'eau salée de la mer ne gâte pas les terres et l'eau douce du fleuve", expl: "Le barrage retient les eaux salées près de l'embouchure." }
    ]
  ]
});


/* ---- ve-institutions-locales.js ---- */
// À VÉRIFIER : au cahier (photo 2026-11-25_01), la ligne « Département | Préfecture | Préfet | nommé » est rangée dans le tableau
// des institutions décentralisées. La préfecture est une institution DÉCONCENTRÉE (le cahier le dit lui-même le 23 novembre) :
// le module la range avec la gouvernance et la sous-préfecture. Depuis 2013, on parle aussi de « collectivités territoriales ».
LECONS.push({
  id: "ve-institutions-locales",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les institutions locales",
  date: "2026-11-20",
  photos: ["2026-11-25_01.jpg", "2026-11-25_04.jpg", "2026-11-25_08.jpg", "2026-11-25_03.jpg"],
  retiens:
    "<p>Au Sénégal, il y a <b>deux types d'institutions locales</b> :</p>" +
    "<ul><li>les institutions <b>décentralisées</b> : le conseil départemental et le conseil municipal ;</li>" +
    "<li>les institutions <b>déconcentrées</b> : la gouvernance, la préfecture et la sous-préfecture.</li></ul>" +
    "<p><b>1. Les institutions décentralisées</b> (leurs chefs sont <b>élus</b>)</p>" +
    "<table><tr><th>Localité</th><th>Institution</th><th>Autorité</th><th>Désignation</th></tr>" +
    "<tr><td>département</td><td>conseil départemental</td><td>président du conseil</td><td>élection (élu)</td></tr>" +
    "<tr><td>commune</td><td>conseil municipal</td><td>maire</td><td>élection (élu)</td></tr></table>" +
    "<p>Les conseils ont pour mission de : gérer les terres de la commune et du département ; voter le budget ; fixer les taxes communales ou départementales.</p>" +
    "<p><b>2. Les institutions déconcentrées</b> (leurs chefs sont <b>nommés</b>)</p>" +
    "<p>Avec la déconcentration, l'État décongestionne le pouvoir central et il est représenté au niveau local par des gouverneurs, des préfets et des sous-préfets.</p>" +
    "<table><tr><th>Localité</th><th>Institution</th><th>Autorité</th></tr>" +
    "<tr><td>région</td><td>gouvernance</td><td>gouverneur</td></tr>" +
    "<tr><td>département</td><td>préfecture</td><td>préfet</td></tr>" +
    "<tr><td>arrondissement</td><td>sous-préfecture</td><td>sous-préfet</td></tr></table>" +
    "<p>Ces autorités sont <b>nommées par un décret présidentiel</b>. Elles ont pour missions de : veiller au maintien de l'ordre ; veiller à la protection des personnes et de leurs biens ; mettre en œuvre et coordonner les politiques du gouvernement.</p>" +
    "<p><b>NB :</b> le département et la commune sont les <b>collectivités locales</b> de la République.</p>",
  astuce: "Dé<b>centr</b>alisé → les habitants <b>élisent</b> (maire, président du conseil). Dé<b>concentr</b>é → l'État <b>nomme</b> (gouverneur, préfet, sous-préfet).",
  regle: "Les institutions décentralisées (conseil départemental, conseil municipal) ont des chefs élus ; les institutions déconcentrées (gouvernance, préfecture, sous-préfecture) ont des chefs nommés par décret présidentiel et représentent l'État.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de types d'institutions locales y a-t-il au Sénégal ?", choix: ["deux", "trois", "quatre"], r: "deux", expl: "Les institutions décentralisées et les institutions déconcentrées." },
      { t: "qcm", q: "Qui dirige le conseil municipal ?", choix: ["le maire", "le préfet", "le gouverneur"], r: "le maire", expl: "Le maire dirige la commune ; il est élu." },
      { t: "qcm", q: "Qui représente l'État dans la région ?", choix: ["le gouverneur", "le maire", "le président du conseil départemental"], r: "le gouverneur", expl: "Le gouverneur dirige la gouvernance de la région." },
      { t: "vf", q: "Le maire est élu.", r: true, expl: "Les chefs des institutions décentralisées sont élus." },
      { t: "vf", q: "Le préfet est élu par les habitants.", r: false, expl: "Le préfet est nommé par un décret présidentiel." }
    ],
    [
      { t: "classer", q: "Range ces institutions.", cases: ["décentralisée", "déconcentrée"], items: [["conseil municipal", "décentralisée"], ["conseil départemental", "décentralisée"], ["gouvernance", "déconcentrée"], ["préfecture", "déconcentrée"], ["sous-préfecture", "déconcentrée"]], expl: "Les conseils sont décentralisés ; gouvernance, préfecture et sous-préfecture sont déconcentrées." },
      { t: "relier", q: "Relie chaque institution à son autorité.", paires: [["gouvernance", "gouverneur"], ["préfecture", "préfet"], ["sous-préfecture", "sous-préfet"], ["conseil municipal", "maire"], ["conseil départemental", "président du conseil"]], expl: "C'est le tableau de la leçon." },
      { t: "relier", q: "Relie chaque localité à son institution déconcentrée.", paires: [["région", "gouvernance"], ["département", "préfecture"], ["arrondissement", "sous-préfecture"]], expl: "Région → gouvernance ; département → préfecture ; arrondissement → sous-préfecture." },
      { t: "classer", q: "Élu ou nommé ?", cases: ["élu", "nommé"], items: [["le maire", "élu"], ["le président du conseil départemental", "élu"], ["le gouverneur", "nommé"], ["le préfet", "nommé"], ["le sous-préfet", "nommé"]], expl: "Décentralisé : élu. Déconcentré : nommé par décret présidentiel." },
      { t: "qcm", q: "Par quoi le gouverneur, le préfet et le sous-préfet sont-ils nommés ?", choix: ["par un décret présidentiel", "par une élection", "par le maire"], r: "par un décret présidentiel", expl: "C'est le président de la République qui les nomme." },
      { t: "saisie", q: "Qui dirige la sous-préfecture ?", r: ["le sous-préfet", "sous-préfet"], expl: "La sous-préfecture se trouve dans l'arrondissement ; elle est dirigée par le sous-préfet." },
      { t: "trous", q: "Complète.", texte: "Le [maire] dirige la commune. Le [préfet] dirige le département. Le [gouverneur] dirige la région.", expl: "Le maire est élu ; le préfet et le gouverneur sont nommés." },
      { t: "vf", q: "Voter le budget est une mission des conseils (municipal et départemental).", r: true, expl: "Les conseils gèrent les terres, votent le budget et fixent les taxes." }
    ],
    [
      { t: "classer", q: "Qui a cette mission ?", cases: ["les conseils (décentralisés)", "les autorités déconcentrées"], items: [["gérer les terres de la commune", "les conseils (décentralisés)"], ["voter le budget", "les conseils (décentralisés)"], ["fixer les taxes communales", "les conseils (décentralisés)"], ["veiller au maintien de l'ordre", "les autorités déconcentrées"], ["protéger les personnes et leurs biens", "les autorités déconcentrées"], ["coordonner les politiques du gouvernement", "les autorités déconcentrées"]], expl: "Les conseils s'occupent de la gestion locale ; les autorités déconcentrées représentent l'État." },
      { t: "qcm", q: "Dans un département, on trouve…", choix: ["une préfecture et un conseil départemental", "seulement une gouvernance", "seulement un conseil municipal"], r: "une préfecture et un conseil départemental", expl: "Le département a une institution déconcentrée (la préfecture, avec le préfet nommé) et une institution décentralisée (le conseil départemental, avec un président élu)." },
      { t: "qcm", q: "Quelles sont les collectivités locales de la République ?", choix: ["le département et la commune", "la région et l'arrondissement", "la préfecture et la gouvernance"], r: "le département et la commune", expl: "C'est le NB de la leçon." },
      { t: "vf", q: "Avec la déconcentration, l'État est représenté au niveau local.", r: true, expl: "Il est représenté par des gouverneurs, des préfets et des sous-préfets." },
      { t: "qcm", q: "Le préfet est-il une autorité décentralisée ?", choix: ["Non, il est déconcentré : il est nommé et représente l'État.", "Oui, car il travaille dans le département.", "Oui, car il est élu."], r: "Non, il est déconcentré : il est nommé et représente l'État.", expl: "Ne te fie pas au mot « département » : le préfet est nommé, donc déconcentré." },
      { t: "ordre", q: "Range du plus grand au plus petit territoire.", r: "région département arrondissement", expl: "La région contient des départements, qui contiennent des arrondissements." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Les institutions [décentralisées] sont le conseil départemental et le conseil municipal ; leurs chefs sont [élus]. Les institutions [déconcentrées] sont la gouvernance, la préfecture et la sous-préfecture ; leurs chefs sont [nommés] par un décret présidentiel.", expl: "Toute la leçon en deux phrases." },
      { t: "qcm", q: "Le marché de ta commune a besoin de nouveaux hangars. Quelle institution vote le budget pour les construire ?", choix: ["le conseil municipal", "la gouvernance", "la sous-préfecture"], r: "le conseil municipal", expl: "Le conseil municipal vote le budget de la commune." },
      { t: "qcm", q: "Une bagarre éclate pendant un match de navétane. Quelle autorité veille au maintien de l'ordre dans le département ?", choix: ["le préfet", "le président du conseil départemental", "le maire"], r: "le préfet", expl: "Les autorités déconcentrées veillent au maintien de l'ordre." },
      { t: "relier", q: "Relie chaque autorité à sa désignation.", paires: [["maire", "élu"], ["gouverneur", "nommé par décret"], ["président du conseil départemental", "élu"], ["sous-préfet", "nommé par décret"]], expl: "Décentralisé = élu ; déconcentré = nommé." },
      { t: "vf", q: "Une institution déconcentrée met en œuvre les politiques du gouvernement.", r: true, expl: "Elle représente l'État au niveau local." }
    ]
  ]
});


/* ---- ve-organisations-africaines.js ---- */
// À VÉRIFIER :
//  - NEPAD : un « 3 » a été ajouté à la main devant « juillet 2001 » ; le NEPAD a été adopté à Lusaka le 11 juillet 2001. Le module écrit « juillet 2001 à Lusaka », sans jour.
//  - AFABA : le cahier donne Le Caire comme siège ; c'est bien la ville de création (11 juin 1961), mais le siège actuel de FIBA Afrique n'a pas pu être confirmé : aucun exercice sur le siège de l'AFABA.
//  - Corrections de recopie : « Encourager la coopérative internationale » → « la coopération internationale » ; « à l'échelle africain » → « africaine ».
LECONS.push({
  id: "ve-organisations-africaines",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations régionales ou africaines et leur fonctionnement",
  date: "2026-11-09",
  photos: ["DJI_20261118221607_0117_D.jpg", "DJI_20261118221629_0119_D.jpg", "DJI_20261118221643_0120_D.jpg"],
  retiens:
    "<p>Les pays africains ont créé des organisations pour prendre en charge leurs problèmes politiques, économiques, socioculturels, environnementaux… Le domaine d'action de chaque organisation se lit souvent dans la signification de son sigle.</p>" +
    "<table><tr><th>Sigle</th><th>Signification</th><th>Création</th><th>Siège</th></tr>" +
    "<tr><td><b>UA</b></td><td>Union africaine</td><td>9 juillet 2002 à Durban (Afrique du Sud)</td><td>Addis-Abeba (Éthiopie)</td></tr>" +
    "<tr><td><b>NEPAD</b></td><td>Nouveau partenariat pour le développement de l'Afrique</td><td>juillet 2001 à Lusaka (Zambie)</td><td>Midrand (Afrique du Sud)</td></tr>" +
    "<tr><td><b>BAD</b></td><td>Banque africaine de développement</td><td>10 septembre 1964</td><td>Abidjan (Côte d'Ivoire)</td></tr>" +
    "<tr><td><b>CAF</b></td><td>Confédération africaine de football</td><td>8 février 1957 à Khartoum (Soudan)</td><td>Ville du 6-Octobre (Égypte)</td></tr>" +
    "<tr><td><b>AFABA</b></td><td>Association des fédérations africaines de basket-ball (aujourd'hui FIBA Afrique)</td><td>11 juin 1961 au Caire (Égypte)</td><td>—</td></tr></table>" +
    "<p><b>Leur fonctionnement</b></p>" +
    "<table><tr><th>Sigle</th><th>Missions ou buts</th><th>Pays membres</th></tr>" +
    "<tr><td><b>UA</b></td><td>renforcer l'unité et la solidarité entre les pays ; encourager la coopération internationale</td><td rowspan='2'>les pays d'Afrique</td></tr>" +
    "<tr><td><b>NEPAD</b></td><td>combler le retard entre l'Afrique et les pays développés</td></tr>" +
    "<tr><td><b>CAF</b></td><td>organiser des compétitions de football entre les clubs et entre les sélections nationales à l'échelle africaine, comme la CAN</td><td></td></tr>" +
    "<tr><td><b>AFABA</b></td><td>organiser des compétitions de basket-ball</td><td></td></tr>" +
    "<tr><td><b>BAD</b></td><td>contribuer au développement et au progrès social des États africains ; combattre la pauvreté sur le continent</td><td>81 pays (54 africains et 27 non africains)</td></tr></table>",
  astuce: "Le sport : <b>CAF</b> = football (la CAN), <b>AFABA</b> = basket. L'argent : <b>BAD</b> = banque. L'unité : <b>UA</b>. Le retard à rattraper : <b>NEPAD</b>.",
  regle: "Chaque organisation africaine a un sigle, une date et un lieu de création, un siège et une mission. La signification du sigle aide à retrouver la mission.",
  niveaux: [
    [
      { t: "qcm", q: "Que veut dire <b>UA</b> ?", choix: ["Union africaine", "Union des athlètes", "Université africaine"], r: "Union africaine", expl: "U = Union, A = africaine." },
      { t: "qcm", q: "Que veut dire <b>CAF</b> ?", choix: ["Confédération africaine de football", "Comité africain des finances", "Club africain de foot"], r: "Confédération africaine de football", expl: "La CAF organise notamment la CAN." },
      { t: "qcm", q: "Que veut dire <b>BAD</b> ?", choix: ["Banque africaine de développement", "Bureau africain des douanes", "Banque des agriculteurs de Dakar"], r: "Banque africaine de développement", expl: "B = Banque, A = africaine, D = développement." },
      { t: "vf", q: "Le siège de l'Union africaine est à Addis-Abeba, en Éthiopie.", r: true, expl: "L'UA a été créée à Durban mais son siège est à Addis-Abeba." },
      { t: "vf", q: "L'AFABA s'occupe du football.", r: false, expl: "L'AFABA s'occupe du basket-ball ; le football, c'est la CAF." },
      { t: "qcm", q: "Quelle organisation organise la CAN (Coupe d'Afrique des Nations de football) ?", choix: ["la CAF", "la BAD", "le NEPAD"], r: "la CAF", expl: "La CAF organise les compétitions de football entre sélections nationales." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["UA", "Union africaine"], ["NEPAD", "Nouveau partenariat pour le développement de l'Afrique"], ["BAD", "Banque africaine de développement"], ["CAF", "Confédération africaine de football"], ["AFABA", "Association des fédérations africaines de basket-ball"]], expl: "Lis le sigle lettre par lettre." },
      { t: "relier", q: "Relie chaque organisation à son siège.", paires: [["UA", "Addis-Abeba"], ["NEPAD", "Midrand"], ["BAD", "Abidjan"], ["CAF", "Ville du 6-Octobre"]], expl: "Révise le tableau des sièges." },
      { t: "relier", q: "Relie chaque organisation à sa mission.", paires: [["UA", "renforcer l'unité et la solidarité"], ["NEPAD", "combler le retard avec les pays développés"], ["BAD", "combattre la pauvreté"], ["CAF", "organiser la CAN"], ["AFABA", "organiser des compétitions de basket"]], expl: "La mission se devine souvent dans le sigle." },
      { t: "qcm", q: "Où l'Union africaine a-t-elle été créée ?", choix: ["à Durban (Afrique du Sud)", "à Addis-Abeba (Éthiopie)", "à Dakar (Sénégal)"], r: "à Durban (Afrique du Sud)", expl: "Créée à Durban le 9 juillet 2002 ; siège à Addis-Abeba." },
      { t: "qcm", q: "Où se trouve le siège de la BAD ?", choix: ["Abidjan (Côte d'Ivoire)", "Lomé (Togo)", "Le Caire (Égypte)"], r: "Abidjan (Côte d'Ivoire)", expl: "La BAD est à Abidjan." },
      { t: "saisie", q: "En quelle année l'Union africaine a-t-elle été créée ?", r: "2002", nombre: true, expl: "Le 9 juillet 2002, à Durban." },
      { t: "vf", q: "La CAF a été créée à Khartoum en 1957.", r: true, expl: "Le 8 février 1957, à Khartoum (Soudan)." },
      { t: "vf", q: "La BAD compte aussi des pays non africains parmi ses membres.", r: true, expl: "81 pays : 54 africains et 27 non africains." },
      { t: "trous", q: "Complète.", texte: "L'UA veut renforcer l'[unité] et la [solidarité] entre les pays et encourager la [coopération] internationale.", expl: "Les missions de l'UA." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces organisations a été créée la première ?", choix: ["la CAF (1957)", "l'AFABA (1961)", "la BAD (1964)", "l'UA (2002)"], r: "la CAF (1957)", expl: "1957 est la date la plus ancienne." },
      { t: "qcm", q: "Laquelle a été créée la plus récemment ?", choix: ["l'UA", "le NEPAD", "la BAD", "la CAF"], r: "l'UA", expl: "L'UA date de 2002, le NEPAD de 2001." },
      { t: "vf", q: "L'UA a son siège dans la ville où elle a été créée.", r: false, expl: "Créée à Durban (Afrique du Sud), siège à Addis-Abeba (Éthiopie)." },
      { t: "classer", q: "Range chaque organisation selon son domaine.", cases: ["le sport", "l'économie et le développement", "l'unité politique"], items: [["la CAF", "le sport"], ["l'AFABA", "le sport"], ["la BAD", "l'économie et le développement"], ["le NEPAD", "l'économie et le développement"], ["l'UA", "l'unité politique"]], expl: "Sport, développement ou unité ?" },
      { t: "saisie", q: "Quel est le sigle du Nouveau partenariat pour le développement de l'Afrique ?", r: "NEPAD", expl: "N-E-P-A-D." },
      { t: "qcm", q: "Quelles organisations sont liées à l'Afrique du Sud ?", choix: ["l'UA (créée à Durban) et le NEPAD (siège à Midrand)", "la CAF et la BAD", "l'AFABA et la CAF"], r: "l'UA (créée à Durban) et le NEPAD (siège à Midrand)", expl: "Durban et Midrand sont en Afrique du Sud." },
      { t: "saisie", q: "En quelle année la BAD a-t-elle été créée ?", r: "1964", nombre: true, expl: "Le 10 septembre 1964." },
      { t: "relier", q: "Relie chaque organisation à son année de création.", paires: [["CAF", "1957"], ["AFABA", "1961"], ["BAD", "1964"], ["NEPAD", "2001"], ["UA", "2002"]], expl: "Range-les dans l'ordre : 1957, 1961, 1964, 2001, 2002." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "L'Union africaine a été créée en [2002] à Durban ; son siège est à [Addis-Abeba]. La BAD a son siège à [Abidjan] ; elle combat la [pauvreté]. La [CAF] organise la CAN.", expl: "Date, sièges et missions." },
      { t: "probleme", q: "Calcule avec les dates du tableau.", etapes: [{ q: "Étape 1 : la CAF a été créée en 1957. Quel âge a-t-elle en 2026 ?", r: "69", unite: "ans" }, { q: "Étape 2 : l'UA a été créée en 2002. Quel âge a-t-elle en 2026 ?", r: "24", unite: "ans" }, { q: "Étape 3 : combien d'années séparent la création de la CAF et celle de l'UA ?", r: "45", unite: "ans" }], expl: "2026 − 1957 = 69 ; 2026 − 2002 = 24 ; 2002 − 1957 = 45 (ou 69 − 24 = 45)." },
      { t: "qcm", q: "Les Lions du Sénégal jouent la Coupe d'Afrique des Nations. Quelle organisation l'organise ?", choix: ["la CAF", "l'AFABA", "l'UA"], r: "la CAF", expl: "La CAF organise les compétitions de football entre sélections nationales." },
      { t: "qcm", q: "Un pays africain veut construire des routes et des écoles pour lutter contre la pauvreté. À quelle banque africaine peut-il demander de l'aide ?", choix: ["la BAD", "la CAF", "l'AFABA"], r: "la BAD", expl: "La BAD contribue au développement des États africains et combat la pauvreté." },
      { t: "saisie", q: "Combien de pays non africains sont membres de la BAD ?", r: "27", nombre: true, expl: "81 pays au total : 54 africains et 27 non africains." },
      { t: "vf", q: "Le NEPAD veut combler le retard entre l'Afrique et les pays développés.", r: true, expl: "C'est sa mission au cahier." }
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


/* ---- ve-organisations-sous-regionales.js ---- */
// À VÉRIFIER (contradictions entre le cahier, photo 0113, et les sources officielles) :
//  - OMVG : le cahier dit « créée à Banjul » ; la convention a été signée à Kaolack (Sénégal) le 30 juin 1978.
//  - CILSS : le cahier donne Bamako comme siège ; le secrétariat exécutif du CILSS est à Ouagadougou (Burkina Faso).
//  - BOAD : le cahier dit « 11 novembre 1973 » ; l'accord créant la BOAD date du 14 novembre 1973.
//  Aucun exercice ne porte sur ces trois points ; le « Je retiens » donne la version juste et signale l'écart.
//  CILSS : le cahier écrit « Comité Inter-états de Lutte contre la Sécheresse au Sahel » ; nom officiel : Comité permanent Inter-États de Lutte contre la Sécheresse dans le Sahel.
LECONS.push({
  id: "ve-organisations-sous-regionales",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations sous-régionales ou ouest-africaines : sigles, créations et sièges",
  date: "2026-10-19",
  photos: ["DJI_20261118221514_0112_D.jpg", "DJI_20261118221519_0113_D.jpg"],
  retiens:
    "<p>Une <b>organisation sous-régionale</b> regroupe des pays d'une zone déterminée de l'Afrique, ici l'Afrique de l'Ouest.</p>" +
    "<table><tr><th>Sigle</th><th>Signification</th><th>Création</th><th>Siège</th></tr>" +
    "<tr><td><b>OMVS</b></td><td>Organisation pour la Mise en Valeur du fleuve Sénégal</td><td>11 mars 1972 à Nouakchott</td><td>Dakar (Sénégal)</td></tr>" +
    "<tr><td><b>OMVG</b></td><td>Organisation pour la Mise en Valeur du fleuve Gambie</td><td>30 juin 1978</td><td>Dakar (Sénégal)</td></tr>" +
    "<tr><td><b>CEDEAO</b></td><td>Communauté Économique des États de l'Afrique de l'Ouest</td><td>28 mai 1975 à Lagos</td><td>Abuja (Nigeria)</td></tr>" +
    "<tr><td><b>CILSS</b></td><td>Comité permanent Inter-États de Lutte contre la Sécheresse dans le Sahel</td><td>12 septembre 1973</td><td>Ouagadougou (Burkina Faso)</td></tr>" +
    "<tr><td><b>UEMOA</b></td><td>Union Économique et Monétaire Ouest-Africaine</td><td>10 janvier 1994 à Dakar</td><td>Ouagadougou (Burkina Faso)</td></tr>" +
    "<tr><td><b>BCEAO</b></td><td>Banque Centrale des États de l'Afrique de l'Ouest</td><td>12 mai 1962</td><td>Dakar (Sénégal)</td></tr>" +
    "<tr><td><b>BOAD</b></td><td>Banque Ouest-Africaine de Développement</td><td>14 novembre 1973</td><td>Lomé (Togo)</td></tr></table>" +
    "<p><b>NB</b> : le domaine d'intervention de chaque organisation se lit souvent dans la signification de son sigle.</p>" +
    "<p><i>Attention : ton cahier indique que l'OMVG a été créée à Banjul, que le siège du CILSS est à Bamako et que la BOAD date du 11 novembre 1973. Les documents officiels donnent Kaolack, Ouagadougou et le 14 novembre 1973. Demande à ton maître.</i></p>",
  astuce: "Trois sièges à <b>Dakar</b> : OMVS, OMVG et BCEAO. Deux à <b>Ouagadougou</b> : UEMOA et CILSS. La CEDEAO est à <b>Abuja</b>, la BOAD à <b>Lomé</b>.",
  regle: "Chaque sigle se lit lettre par lettre : la signification dit ce que fait l'organisation. Retiens pour chacune sa date de création et son siège.",
  niveaux: [
    [
      { t: "qcm", q: "Une organisation sous-régionale regroupe…", choix: ["des pays d'une zone déterminée de l'Afrique", "tous les pays du monde", "les villages d'une même région du Sénégal"], r: "des pays d'une zone déterminée de l'Afrique", expl: "Ici, la zone est l'Afrique de l'Ouest." },
      { t: "qcm", q: "Que veut dire <b>OMVS</b> ?", choix: ["Organisation pour la Mise en Valeur du fleuve Sénégal", "Organisation Mondiale des Villes du Sahel", "Office Malien de la Vallée du Sénégal"], r: "Organisation pour la Mise en Valeur du fleuve Sénégal", expl: "Le S final = fleuve Sénégal." },
      { t: "qcm", q: "Que veut dire <b>OMVG</b> ?", choix: ["Organisation pour la Mise en Valeur du fleuve Gambie", "Organisation pour la Mise en Valeur de la Guinée", "Office Mondial des Voyages en Gambie"], r: "Organisation pour la Mise en Valeur du fleuve Gambie", expl: "Le G final = fleuve Gambie." },
      { t: "vf", q: "La BCEAO est une banque.", r: true, expl: "BCEAO : Banque Centrale des États de l'Afrique de l'Ouest." },
      { t: "qcm", q: "Où se trouve le siège de la CEDEAO ?", choix: ["Abuja (Nigeria)", "Dakar (Sénégal)", "Lomé (Togo)"], r: "Abuja (Nigeria)", expl: "La CEDEAO a été créée à Lagos mais son siège est à Abuja." },
      { t: "vf", q: "Le siège de l'OMVS est à Dakar.", r: true, expl: "L'OMVS a été créée à Nouakchott, mais son siège est à Dakar." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["CEDEAO", "Communauté Économique des États de l'Afrique de l'Ouest"], ["UEMOA", "Union Économique et Monétaire Ouest-Africaine"], ["BCEAO", "Banque Centrale des États de l'Afrique de l'Ouest"], ["BOAD", "Banque Ouest-Africaine de Développement"], ["CILSS", "Lutte contre la Sécheresse dans le Sahel"]], expl: "Lis les lettres du sigle une par une." },
      { t: "relier", q: "Relie chaque organisation à son siège.", paires: [["CEDEAO", "Abuja"], ["UEMOA", "Ouagadougou"], ["BOAD", "Lomé"], ["BCEAO", "Dakar"]], expl: "Révise le tableau des sièges." },
      { t: "classer", q: "Le siège est-il à Dakar ?", cases: ["siège à Dakar", "siège ailleurs"], items: [["OMVS", "siège à Dakar"], ["OMVG", "siège à Dakar"], ["BCEAO", "siège à Dakar"], ["CEDEAO", "siège ailleurs"], ["UEMOA", "siège ailleurs"], ["BOAD", "siège ailleurs"]], expl: "Trois sièges à Dakar : OMVS, OMVG, BCEAO." },
      { t: "relier", q: "Relie chaque organisation à sa date de création.", paires: [["OMVS", "11 mars 1972"], ["CEDEAO", "28 mai 1975"], ["UEMOA", "10 janvier 1994"], ["BCEAO", "12 mai 1962"]], expl: "Révise les dates du tableau." },
      { t: "qcm", q: "Dans quelle ville l'UEMOA a-t-elle été créée ?", choix: ["Dakar", "Lagos", "Nouakchott"], r: "Dakar", expl: "L'UEMOA a été créée le 10 janvier 1994 à Dakar ; son siège est à Ouagadougou." },
      { t: "qcm", q: "Dans quelle ville la CEDEAO a-t-elle été créée ?", choix: ["Lagos", "Abuja", "Dakar"], r: "Lagos", expl: "Créée à Lagos le 28 mai 1975 ; siège à Abuja." },
      { t: "saisie", q: "Quel est le sigle de la Banque Ouest-Africaine de Développement ?", r: "BOAD", expl: "B-O-A-D." },
      { t: "saisie", q: "Dans quelle ville se trouve le siège de la BOAD ?", r: ["Lomé", "Lomé (Togo)"], expl: "La BOAD est à Lomé, au Togo." },
      { t: "vf", q: "L'OMVS a été créée à Nouakchott.", r: true, expl: "Le 11 mars 1972, à Nouakchott (Mauritanie)." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces organisations a son siège à Ouagadougou ?", choix: ["l'UEMOA", "la BCEAO", "l'OMVG", "la BOAD"], r: "l'UEMOA", expl: "L'UEMOA a été créée à Dakar, mais son siège est à Ouagadougou." },
      { t: "vf", q: "La CEDEAO a son siège dans la ville où elle a été créée.", r: false, expl: "Créée à Lagos, siège à Abuja : deux villes différentes du Nigeria." },
      { t: "qcm", q: "Quelle organisation est la plus ancienne ?", choix: ["la BCEAO (1962)", "l'OMVS (1972)", "la CEDEAO (1975)", "l'UEMOA (1994)"], r: "la BCEAO (1962)", expl: "1962 est l'année la plus ancienne de la liste." },
      { t: "qcm", q: "Quelle organisation est la plus récente ?", choix: ["l'UEMOA", "l'OMVG", "la CEDEAO", "l'OMVS"], r: "l'UEMOA", expl: "L'UEMOA date de 1994." },
      { t: "classer", q: "Range chaque organisation selon son domaine (lis la signification).", cases: ["un fleuve", "l'argent et la banque", "l'économie et l'intégration", "la sécheresse"], items: [["OMVS", "un fleuve"], ["OMVG", "un fleuve"], ["BCEAO", "l'argent et la banque"], ["BOAD", "l'argent et la banque"], ["CEDEAO", "l'économie et l'intégration"], ["UEMOA", "l'économie et l'intégration"], ["CILSS", "la sécheresse"]], expl: "Le domaine se lit dans la signification du sigle." },
      { t: "saisie", q: "En quelle année la CEDEAO a-t-elle été créée ?", r: "1975", nombre: true, expl: "Le 28 mai 1975, à Lagos." },
      { t: "saisie", q: "En quelle année l'UEMOA a-t-elle été créée ?", r: "1994", nombre: true, expl: "Le 10 janvier 1994, à Dakar." },
      { t: "vf", q: "L'OMVS et l'OMVG ont toutes les deux leur siège à Dakar.", r: true, expl: "Comme la BCEAO." }
    ],
    [
      { t: "trous", q: "Complète le tableau en phrases.", texte: "La CEDEAO a été créée le 28 mai 1975 à [Lagos] ; son siège est à [Abuja]. L'UEMOA a été créée le 10 janvier 1994 à [Dakar] ; son siège est à [Ouagadougou]. Le siège de la BOAD est à [Lomé].", expl: "Création et siège : ne les confonds pas." },
      { t: "probleme", q: "Calcule avec les dates du tableau.", etapes: [{ q: "Étape 1 : l'OMVS a été créée en 1972. Quel âge a-t-elle en 2026 ?", r: "54", unite: "ans" }, { q: "Étape 2 : la CEDEAO a été créée en 1975. Quel âge a-t-elle en 2026 ?", r: "51", unite: "ans" }, { q: "Étape 3 : combien d'années séparent la création de la BCEAO (1962) et celle de l'UEMOA (1994) ?", r: "32", unite: "ans" }], expl: "2026 − 1972 = 54 ; 2026 − 1975 = 51 ; 1994 − 1962 = 32." },
      { t: "qcm", q: "Moussa dit : « La BCEAO a son siège à Lomé. » A-t-il raison ?", choix: ["Non, la BCEAO est à Dakar ; c'est la BOAD qui est à Lomé.", "Oui, il a raison.", "Non, la BCEAO est à Abuja."], r: "Non, la BCEAO est à Dakar ; c'est la BOAD qui est à Lomé.", expl: "Ne confonds pas les deux banques : BCEAO à Dakar, BOAD à Lomé." },
      { t: "saisie", q: "Que veut dire le sigle UEMOA ?", r: ["Union Économique et Monétaire Ouest-Africaine", "Union Économique et Monétaire Ouest Africaine"], large: true, expl: "U (Union) E (Économique) M (Monétaire) O-A (Ouest-Africaine)." },
      { t: "relier", q: "Relie chaque organisation à son pays-siège.", paires: [["CEDEAO", "Nigeria"], ["BOAD", "Togo"], ["UEMOA", "Burkina Faso"], ["OMVS", "Sénégal"]], expl: "Abuja (Nigeria), Lomé (Togo), Ouagadougou (Burkina Faso), Dakar (Sénégal)." }
    ]
  ]
});

