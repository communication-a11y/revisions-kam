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
