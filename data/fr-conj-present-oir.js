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
