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
