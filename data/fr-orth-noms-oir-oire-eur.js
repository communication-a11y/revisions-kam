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
