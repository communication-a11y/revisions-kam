LECONS.push({
  id: "ma-geo-triangle-base-hauteur",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Le triangle : la base et la hauteur",
  date: "2026-11-18",
  photos: ["DJI_20261118221301_0098_D.jpg", "DJI_20261118221304_0099_D.jpg"],
  retiens:
    "<p>La <b>hauteur</b> d'un triangle est la <b>perpendiculaire</b> abaissée d'un <b>sommet</b> sur le <b>côté opposé</b>. Ce côté s'appelle la <b>base</b>.</p>" +
    "<p>La hauteur forme un <b>angle droit</b> avec la base : pour la tracer sur ton cahier, on utilise l'équerre.</p>" +
    "<p>Exemple : dans le triangle ABC, la hauteur issue de A tombe sur la base [BC] ; celle issue de B tombe sur [AC] ; celle issue de C tombe sur [AB].</p>" +
    "<p>Un triangle a donc <b>3 hauteurs</b>, une par sommet. Les 3 hauteurs se coupent <b>au même point</b>.</p>",
  astuce: "Imagine un fil à plomb qui tombe du sommet, bien droit, sur le côté d'en face : c'est la hauteur. Le côté qu'il touche, c'est la base.",
  regle: "La hauteur part d'un sommet et tombe perpendiculairement sur le côté opposé, appelé base. Un triangle a 3 hauteurs qui se coupent au même point.",
  niveaux: [
    [
      { t: "qcm", q: "D'où part la hauteur d'un triangle ?", choix: ["d'un sommet", "du milieu d'un côté", "du centre du triangle"], r: "d'un sommet", expl: "La hauteur est abaissée d'un sommet." },
      { t: "qcm", q: "Le côté sur lequel tombe la hauteur s'appelle…", choix: ["la base", "le sommet", "la diagonale"], r: "la base", expl: "Le côté opposé au sommet, sur lequel tombe la hauteur, est la base." },
      { t: "qcm", q: "Quel angle la hauteur forme-t-elle avec la base ?", choix: ["un angle droit", "un angle aigu", "un angle plat"], r: "un angle droit", expl: "La hauteur est perpendiculaire à la base : elle forme un angle droit." },
      { t: "qcm", q: "Combien de hauteurs a un triangle ?", choix: ["3", "1", "2"], r: "3", expl: "Une hauteur par sommet : 3 hauteurs." },
      { t: "vf", q: "Les 3 hauteurs d'un triangle se coupent au même point.", r: true, expl: "C'est ce que montre la construction du cahier." }
    ],
    [
      { t: "qcm", q: "Dans le triangle ABC, sur quel côté tombe la hauteur issue de A ?", choix: ["[BC]", "[AB]", "[AC]"], r: "[BC]", expl: "Le côté opposé au sommet A est [BC] : c'est la base." },
      { t: "qcm", q: "Dans le triangle ABC, sur quel côté tombe la hauteur issue de B ?", choix: ["[AC]", "[AB]", "[BC]"], r: "[AC]", expl: "Le côté opposé au sommet B est [AC]." },
      { t: "qcm", q: "Dans le triangle ABC, sur quel côté tombe la hauteur issue de C ?", choix: ["[AB]", "[BC]", "[AC]"], r: "[AB]", expl: "Le côté opposé au sommet C est [AB]." },
      { t: "relier", q: "Triangle MNP : relie chaque sommet à la base de sa hauteur.", paires: [["M", "[NP]"], ["N", "[MP]"], ["P", "[MN]"]], expl: "La base est toujours le côté qui ne contient pas le sommet." },
      { t: "qcm", q: "Quel instrument permet de tracer la hauteur ?", choix: ["l'équerre", "le compas seul", "la balance"], r: "l'équerre", expl: "L'équerre donne l'angle droit entre la hauteur et la base." },
      { t: "trous", q: "Complète.", texte: "La hauteur est la [perpendiculaire] abaissée du [sommet] au côté opposé appelé la [base].", expl: "C'est la définition du cahier." },
      { t: "saisie", q: "Combien de points d'intersection les 3 hauteurs d'un triangle ont-elles en commun ?", r: "1", nombre: true, expl: "Les 3 hauteurs se coupent en un seul et même point." },
      { t: "vf", q: "Un triangle n'a qu'une seule base possible.", r: false, expl: "Chaque côté peut être une base : celle de la hauteur issue du sommet opposé." }
    ],
    [
      { t: "vf", q: "La hauteur coupe toujours la base en son milieu.", r: false, expl: "La hauteur est perpendiculaire à la base, mais elle ne tombe pas forcément au milieu. (Celle qui relie un sommet au milieu du côté opposé n'est pas toujours perpendiculaire.)" },
      { t: "qcm", q: "Ibrahima trace un segment qui part du sommet A et tombe en biais sur [BC], sans angle droit. Est-ce une hauteur ?", choix: ["Non, la hauteur doit être perpendiculaire à la base.", "Oui, elle part bien d'un sommet.", "Oui, elle touche bien la base."], r: "Non, la hauteur doit être perpendiculaire à la base.", expl: "Sans angle droit avec la base, ce n'est pas une hauteur." },
      { t: "qcm", q: "Dans le triangle DEF, la hauteur issue de E est perpendiculaire à…", choix: ["[DF]", "[DE]", "[EF]"], r: "[DF]", expl: "Le côté opposé à E est [DF]." },
      { t: "qcm", q: "Une hauteur et sa base sont…", choix: ["perpendiculaires", "parallèles", "de même longueur"], r: "perpendiculaires", expl: "Elles se coupent en formant un angle droit." },
      { t: "classer", q: "Triangle RST : la hauteur issue de chaque sommet tombe sur quelle base ?", cases: ["base [ST]", "base [RT]", "base [RS]"], items: [["hauteur issue de R", "base [ST]"], ["hauteur issue de S", "base [RT]"], ["hauteur issue de T", "base [RS]"]], expl: "La base est le côté opposé au sommet." },
      { t: "vf", q: "La hauteur relie un sommet au côté qui est en face de lui.", r: true, expl: "Elle part du sommet et tombe sur le côté opposé." }
    ],
    [
      { t: "qcm", q: "Le triangle ABC est rectangle en A ([AB] et [AC] forment un angle droit). Quelle est la hauteur issue de B, qui tombe sur [AC] ?", choix: ["le côté [AB]", "le côté [BC]", "il n'y en a pas"], r: "le côté [AB]", aide: "[AB] part de B et forme déjà un angle droit avec [AC].", expl: "[AB] part du sommet B et tombe perpendiculairement sur [AC] : c'est la hauteur." },
      { t: "trous", q: "Complète.", texte: "Un triangle a [3|trois] hauteurs, une par [sommet]. Elles se coupent au même [point].", expl: "3 hauteurs, une par sommet, qui se coupent en un point." },
      { t: "classer", q: "Vrai ou faux ?", cases: ["vrai", "faux"], items: [["La hauteur part d'un sommet.", "vrai"], ["La hauteur est parallèle à la base.", "faux"], ["Un triangle a 3 hauteurs.", "vrai"], ["La base est le côté opposé au sommet.", "vrai"], ["Les hauteurs ne se rencontrent jamais.", "faux"]], expl: "La hauteur part d'un sommet, perpendiculaire au côté opposé (la base) ; les 3 hauteurs se coupent en un point." },
      { t: "qcm", q: "Dans le triangle KLM, on trace la hauteur sur la base [KL]. De quel sommet part-elle ?", choix: ["M", "K", "L"], r: "M", expl: "Le sommet opposé à [KL] est M." },
      { t: "qcm", q: "Pour tracer la hauteur issue de A dans le triangle ABC, on pose l'équerre…", choix: ["avec un côté de l'angle droit le long de [BC], l'autre passant par A", "avec un côté le long de [AB]", "au milieu de [AC]"], r: "avec un côté de l'angle droit le long de [BC], l'autre passant par A", expl: "On cherche la droite qui passe par A et qui est perpendiculaire à la base [BC]." }
    ]
  ]
});
