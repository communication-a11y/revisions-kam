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
