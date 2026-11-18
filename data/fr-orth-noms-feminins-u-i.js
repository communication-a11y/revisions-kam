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
