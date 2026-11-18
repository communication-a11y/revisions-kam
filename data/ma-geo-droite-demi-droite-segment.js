LECONS.push({
  id: "ma-geo-droite-demi-droite-segment",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Droite, demi-droite, segment",
  date: "2026-09-17",
  photos: ["DJI_20261118220750_0062_D.jpg", "DJI_20261118220759_0063_D.jpg"],
  retiens:
    "<p><b>Une droite</b> est une suite illimitée de points alignés. Elle n'a <b>pas d'extrémités</b>. On la représente par une ligne continue, qu'on imagine prolongée des deux côtés. On la note avec des parenthèses : <b>(SV)</b> est une droite.</p>" +
    "<p><b>Une demi-droite</b> est une partie de droite limitée d'un côté par un point appelé <b>origine</b>, et illimitée de l'autre côté. On la note <b>[AC)</b> : le crochet est du côté de l'origine A.</p>" +
    "<p><b>Un segment</b> est une partie de droite limitée des deux côtés par deux points appelés <b>extrémités</b>. On le note avec deux crochets : <b>[AB]</b> est un segment. Un segment a une longueur qu'on peut mesurer, par exemple [AB] = 6 cm.</p>",
  astuce: "Regarde les signes : <b>( )</b> la ligne ne s'arrête jamais ; <b>[ )</b> elle s'arrête d'un seul côté ; <b>[ ]</b> elle s'arrête des deux côtés.",
  regle: "Droite : aucune extrémité, notée (AB). Demi-droite : une origine, notée [AB). Segment : deux extrémités, noté [AB].",
  niveaux: [
    [
      { t: "qcm", q: "Combien d'extrémités a une droite ?", choix: ["aucune", "une", "deux"], r: "aucune", expl: "La droite est illimitée des deux côtés : elle n'a pas d'extrémités." },
      { t: "qcm", q: "Combien d'extrémités a un segment ?", choix: ["deux", "une", "aucune"], r: "deux", expl: "Le segment est limité des deux côtés par deux points : ses extrémités." },
      { t: "qcm", q: "Le point qui limite une demi-droite s'appelle…", choix: ["l'origine", "le milieu", "le sommet"], r: "l'origine", expl: "La demi-droite est limitée d'un seul côté, par son origine." },
      { t: "relier", q: "Relie chaque notation à ce qu'elle désigne.", paires: [["(SV)", "une droite"], ["[AC)", "une demi-droite"], ["[AB]", "un segment"]], expl: "Parenthèses : droite. Un crochet et une parenthèse : demi-droite. Deux crochets : segment." },
      { t: "vf", q: "Une droite est une suite illimitée de points alignés.", r: true, expl: "C'est la définition de la leçon." },
      { t: "vf", q: "On peut mesurer la longueur d'une droite avec une règle.", r: false, expl: "Une droite est illimitée : elle n'a pas de longueur. On ne mesure que des segments." }
    ],
    [
      { t: "classer", q: "Droite, demi-droite ou segment ?", cases: ["droite", "demi-droite", "segment"], items: [["(MN)", "droite"], ["[MN]", "segment"], ["[MN)", "demi-droite"], ["(DE)", "droite"], ["[OX)", "demi-droite"], ["[CD]", "segment"]], expl: "( ) droite ; [ ) demi-droite ; [ ] segment." },
      { t: "saisie", q: "Les deux points qui limitent un segment s'appellent ses …", r: "extrémités", expl: "Un segment est limité par deux points appelés extrémités." },
      { t: "saisie", q: "Le point qui limite une demi-droite s'appelle son …", r: "origine", expl: "La demi-droite part de son origine et ne s'arrête pas de l'autre côté." },
      { t: "qcm", q: "Quelle notation désigne le segment d'extrémités E et F ?", choix: ["[EF]", "(EF)", "[EF)"], r: "[EF]", expl: "Segment : deux crochets." },
      { t: "qcm", q: "Dans la demi-droite [AC), quel point est l'origine ?", choix: ["A", "C", "aucun"], r: "A", expl: "Le crochet est placé du côté de l'origine : c'est A." },
      { t: "trous", q: "Complète.", texte: "Une droite n'a [pas] d'extrémités. Une demi-droite a [une] origine. Un segment a [deux] extrémités.", expl: "Droite : 0 extrémité ; demi-droite : 1 origine ; segment : 2 extrémités." },
      { t: "vf", q: "Un segment est une partie de droite.", r: true, expl: "On prend un morceau de droite entre deux points : c'est un segment." },
      { t: "vf", q: "Une demi-droite est limitée des deux côtés.", r: false, expl: "Elle n'est limitée que d'un côté, par son origine." }
    ],
    [
      { t: "qcm", q: "Un rayon de soleil part du soleil et file tout droit sans s'arrêter. À quoi ressemble-t-il ?", choix: ["une demi-droite", "un segment", "une droite"], r: "une demi-droite", expl: "Il a un point de départ (l'origine) mais pas de fin : c'est comme une demi-droite." },
      { t: "qcm", q: "Le bord d'une règle de 30 cm ressemble à…", choix: ["un segment", "une droite", "une demi-droite"], r: "un segment", expl: "Il a deux bouts et une longueur mesurable : c'est un segment." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["[AB] mesure 6 cm.", "(AB) mesure 6 cm.", "[AB) mesure 6 cm."], r: "[AB] mesure 6 cm.", expl: "Seul un segment a une longueur ; droites et demi-droites sont illimitées." },
      { t: "vf", q: "[AB) et [BA) désignent la même demi-droite.", r: false, expl: "[AB) a pour origine A ; [BA) a pour origine B. Elles partent dans des sens opposés." },
      { t: "vf", q: "[AB] et [BA] désignent le même segment.", r: true, expl: "Un segment a deux extrémités ; l'ordre des lettres ne change rien." },
      { t: "saisie", q: "Trois points A, B, C sont alignés dans cet ordre. Combien de segments peut-on nommer avec ces points ?", r: "3", nombre: true, aide: "Cherche toutes les paires de points.", expl: "[AB], [BC] et [AC] : 3 segments." }
    ],
    [
      { t: "trous", q: "Complète la leçon.", texte: "Une droite est une suite [illimitée] de points [alignés]. Une demi-droite est limitée d'un côté par un point appelé [origine]. Un segment est limité des deux côtés par deux points appelés [extrémités].", expl: "Ce sont les trois définitions du cahier." },
      { t: "classer", q: "Range chaque propriété.", cases: ["droite", "demi-droite", "segment"], items: [["aucune extrémité", "droite"], ["une seule origine", "demi-droite"], ["deux extrémités", "segment"], ["se mesure avec la règle", "segment"], ["notée (SV)", "droite"], ["notée [AC)", "demi-droite"]], expl: "Seul le segment, limité des deux côtés, a une longueur mesurable." },
      { t: "qcm", q: "Sur une droite, on place les points A, B et C. Combien de demi-droites ont pour origine B ?", choix: ["2", "1", "3"], r: "2", aide: "À partir de B, on peut partir vers A ou vers C.", expl: "[BA) et [BC) : deux demi-droites de même origine, dans des sens opposés." },
      { t: "saisie", q: "Sur une droite, A, B et C sont dans cet ordre, avec AB = 6 cm et BC = 4 cm. Longueur de [AC] = … cm", r: "10", nombre: true, unite: "cm", expl: "B est entre A et C : AC = 6 + 4 = 10 cm." },
      { t: "qcm", q: "Quelle figure peut-on tracer entièrement sur une feuille ?", choix: ["un segment", "une droite", "une demi-droite"], r: "un segment", expl: "Le segment s'arrête des deux côtés ; la droite et la demi-droite continuent sans fin : on n'en dessine qu'un morceau." }
    ]
  ]
});
