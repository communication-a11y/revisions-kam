LECONS.push({
  id: "hi-definition-histoire",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La définition de l'histoire",
  date: "2026-09-17",
  photos: ["DJI_20261118222023_0137_D.jpg", "DJI_20261118222048_0138_D.jpg"],
  retiens:
    "<p>L'<b>histoire</b> est une science qui étudie le <b>passé des hommes</b>. Elle nous permet de connaître les conditions de vie de nos ancêtres, leur mode d'organisation…</p>" +
    "<p>L'histoire commence avec l'<b>âge des métaux</b> et l'<b>apparition de l'écriture</b>.</p>" +
    "<p>Les <b>sources de l'histoire</b> sont :</p>" +
    "<ul><li>les <b>sources écrites</b> ;</li><li>les <b>sources orales</b> ;</li><li>les <b>sources muettes</b> (les vestiges).</li></ul>" +
    "<p>Il y a <b>deux systèmes de datation</b> pour situer le passé avec des repères précis :</p>" +
    "<ul><li>les <b>chrétiens</b> datent les événements à partir de la <b>naissance de Jésus-Christ</b> ;</li>" +
    "<li>les <b>musulmans</b> datent à partir du départ du prophète Mohammed de La Mecque vers Médine : c'est l'<b>hégire</b>. Elle a eu lieu en <b>622</b>.</li></ul>",
  astuce: "Trois sortes de sources : ce qu'on <b>lit</b> (écrites), ce qu'on <b>entend</b> (orales), ce qu'on <b>trouve</b> sans paroles (muettes : les vestiges).",
  regle: "L'histoire étudie le passé des hommes grâce aux sources écrites, orales et muettes. Les chrétiens comptent les années depuis la naissance de Jésus-Christ, les musulmans depuis l'hégire (622).",
  niveaux: [
    [
      { t: "qcm", q: "L'histoire est une science qui étudie…", choix: ["le passé des hommes", "les étoiles et les planètes", "les plantes et les animaux"], r: "le passé des hommes", expl: "L'histoire étudie le passé des hommes, par exemple la vie de nos ancêtres." },
      { t: "qcm", q: "Combien y a-t-il de sortes de sources de l'histoire dans ta leçon ?", choix: ["deux", "trois", "cinq"], r: "trois", expl: "Les sources écrites, les sources orales et les sources muettes." },
      { t: "vf", q: "L'histoire commence avec l'apparition de l'écriture.", r: true, expl: "L'histoire commence avec l'âge des métaux et l'apparition de l'écriture." },
      { t: "qcm", q: "Les vestiges (ruines, outils, objets anciens) sont des sources…", choix: ["muettes", "orales", "écrites"], r: "muettes", expl: "Les vestiges ne parlent pas et ne portent pas de texte : ce sont des sources muettes." },
      { t: "qcm", q: "L'hégire, c'est…", choix: ["le départ du prophète Mohammed de La Mecque vers Médine", "la naissance de Jésus-Christ", "l'apparition de l'écriture"], r: "le départ du prophète Mohammed de La Mecque vers Médine", expl: "Les musulmans datent les événements à partir de l'hégire." },
      { t: "vf", q: "Les chrétiens datent les événements à partir de l'hégire.", r: false, expl: "Les chrétiens partent de la naissance de Jésus-Christ ; ce sont les musulmans qui partent de l'hégire." }
    ],
    [
      { t: "saisie", q: "En quelle année a eu lieu l'hégire ?", r: "622", nombre: true, expl: "L'hégire a eu lieu en 622." },
      { t: "classer", q: "Range chaque source dans la bonne catégorie.", cases: ["source écrite", "source orale", "source muette"], items: [["un vieux livre", "source écrite"], ["le récit d'un griot", "source orale"], ["un outil en pierre retrouvé dans le sol", "source muette"], ["une lettre ancienne", "source écrite"], ["un conte raconté par la grand-mère", "source orale"], ["les ruines d'une ancienne ville", "source muette"]], expl: "On lit les sources écrites, on écoute les sources orales ; les vestiges sont des sources muettes." },
      { t: "relier", q: "Relie chaque religion à son point de départ pour compter les années.", paires: [["les chrétiens", "la naissance de Jésus-Christ"], ["les musulmans", "l'hégire (622)"]], expl: "Ce sont les deux systèmes de datation de la leçon." },
      { t: "trous", q: "Complète la leçon.", texte: "L'histoire est une [science] qui étudie le [passé] des hommes. Elle nous permet de connaître les conditions de vie de nos [ancêtres].", expl: "C'est la définition de l'histoire." },
      { t: "qcm", q: "Le griot qui raconte l'histoire d'un roi d'autrefois est une source…", choix: ["orale", "écrite", "muette"], r: "orale", expl: "Il raconte avec la parole : c'est une source orale." },
      { t: "vf", q: "Une vieille poterie retrouvée par des chercheurs est une source muette.", r: true, expl: "C'est un vestige : il ne parle pas, il ne porte pas d'écrit." },
      { t: "saisie", q: "Vers quelle ville le prophète Mohammed est-il parti lors de l'hégire ?", r: "Médine", expl: "Il est parti de La Mecque vers Médine." },
      { t: "qcm", q: "Avec quoi commence l'histoire ?", choix: ["l'âge des métaux et l'écriture", "la découverte du feu", "la naissance de la Terre"], r: "l'âge des métaux et l'écriture", expl: "Avant l'écriture et les métaux, c'est la préhistoire." },
      { t: "trous", q: "Complète.", texte: "Les sources de l'histoire sont les sources [écrites], les sources [orales] et les sources [muettes].", expl: "Trois sortes de sources." }
    ],
    [
      { t: "vf", q: "Les sources muettes sont des textes très anciens.", r: false, expl: "Les textes sont des sources écrites. Les sources muettes sont les vestiges (objets, ruines…)." },
      { t: "qcm", q: "Pourquoi a-t-on besoin d'un système de datation ?", choix: ["pour situer le passé avec des repères précis", "pour écrire plus vite", "pour connaître la météo"], r: "pour situer le passé avec des repères précis", expl: "Un système de datation donne un point de départ pour compter les années." },
      { t: "qcm", q: "Fatou lit une vieille lettre de son arrière-grand-père. Elle utilise une source…", choix: ["écrite", "orale", "muette"], r: "écrite", expl: "Une lettre se lit : c'est une source écrite." },
      { t: "qcm", q: "Moussa enregistre son grand-père qui raconte la vie au village autrefois. C'est une source…", choix: ["orale", "écrite", "muette"], r: "orale", expl: "C'est un témoignage parlé : une source orale." },
      { t: "saisie", q: "Comment appelle-t-on le départ du prophète Mohammed de La Mecque vers Médine ?", r: "l'hégire", expl: "C'est l'hégire, en 622." },
      { t: "relier", q: "Relie chaque mot à sa définition.", paires: [["l'histoire", "la science du passé des hommes"], ["un vestige", "une trace muette du passé"], ["l'hégire", "le point de départ du calendrier musulman"]], expl: "Trois mots-clés de la leçon." },
      { t: "vf", q: "La naissance de Jésus-Christ sert de point de départ au calendrier des chrétiens.", r: true, expl: "C'est le système de datation chrétien." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'histoire étudie le [passé] des hommes. Elle commence avec l'âge des [métaux] et l'apparition de l'[écriture]. Les musulmans datent les événements à partir de l'[hégire], qui a eu lieu en [622].", expl: "Résumé de toute la leçon." },
      { t: "qcm", q: "Un archéologue trouve des bracelets anciens enterrés près de Thiès. Quelle sorte de source étudie-t-il ?", choix: ["une source muette", "une source orale", "une source écrite"], r: "une source muette", expl: "Des objets retrouvés sont des vestiges : des sources muettes." },
      { t: "classer", q: "Range : est-ce une source de l'histoire ou un système de datation ?", cases: ["source de l'histoire", "système de datation"], items: [["les sources orales", "source de l'histoire"], ["à partir de l'hégire", "système de datation"], ["les vestiges", "source de l'histoire"], ["à partir de la naissance de Jésus-Christ", "système de datation"], ["les sources écrites", "source de l'histoire"]], expl: "Les sources nous renseignent sur le passé ; les systèmes de datation servent à compter les années." },
      { t: "vf", q: "Sans l'écriture, il n'y a aucune source pour connaître le passé.", r: false, expl: "Il reste les sources orales et les sources muettes (les vestiges)." },
      { t: "qcm", q: "Laquelle de ces phrases est juste ?", choix: ["L'hégire a eu lieu en 622 : c'est le départ de La Mecque vers Médine.", "L'hégire a eu lieu en 622 : c'est la naissance de Jésus-Christ.", "L'hégire a eu lieu en 1822 : c'est le départ de Médine vers La Mecque."], r: "L'hégire a eu lieu en 622 : c'est le départ de La Mecque vers Médine.", expl: "622, de La Mecque vers Médine." }
    ]
  ]
});
