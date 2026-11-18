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
