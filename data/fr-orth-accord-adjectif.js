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
      { t: "saisie", q: "Récris au féminin : « Un vieux pêcheur heureux et fier. » → « Une … pêcheuse … et … » Écris les trois adjectifs séparés par des virgules.", r: ["vieille, heureuse, fière", "vieille,heureuse,fière"], expl: "vieux → vieille (exception), heureux → heureuse, fier → fière." }
    ]
  ]
});
