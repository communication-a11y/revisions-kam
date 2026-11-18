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
