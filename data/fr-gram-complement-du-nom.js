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
