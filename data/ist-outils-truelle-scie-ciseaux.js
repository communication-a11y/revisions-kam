// À VÉRIFIER : sur le dessin des ciseaux (photo 0125), les légendes « le rivet » et « la branche » semblent mal placées (« rivet » au bout d'une lame). Elles ne sont ni reprises dans la leçon ni utilisées en exercice ; seules « lame » et « poignée » sont gardées.
LECONS.push({
  id: "ist-outils-truelle-scie-ciseaux",
  cahier: "sciences",
  matiere: "IST",
  titre: "Les outils technologiques simples : truelle, scie, ciseaux",
  date: "2026-09-23",
  photos: ["DJI_20261118221806_0124_D.jpg", "DJI_20261118221812_0125_D.jpg", "DJI_20261118221828_0126_D.jpg"],
  retiens:
    "<p>La <b>truelle</b> est une petite pelle à main qui sert à <b>étendre ou racler le plâtre ou le mortier</b> (mélange de sable, de ciment et d'eau…). C'est un outil de base du <b>maçon</b>.<br>Ses parties : la <b>lame</b> et le <b>manche</b>.</p>" +
    "<p>La <b>scie</b> est une <b>lame dentelée</b> en acier, munie d'un manche en bois, que l'on utilise pour <b>couper des matériaux durs</b> comme le bois.<br>Ses parties : le <b>dos</b>, les <b>dents</b>, la <b>lame</b> et le <b>manche</b>.</p>" +
    "<p>Les <b>ciseaux</b> sont composés de <b>deux lames mobiles</b> et articulées, qui glissent l'une sur l'autre pour <b>trancher les matériaux minces</b> (tissu, papier…).<br>On y reconnaît les <b>lames</b> et les <b>poignées</b>.</p>",
  astuce: "Truelle → <b>t</b>ravaux du maçon ; scie → <b>dur</b> (bois) ; ciseaux → <b>mince</b> (papier, tissu).",
  regle: "La truelle étend le mortier, la scie coupe les matériaux durs comme le bois, les ciseaux tranchent les matériaux minces comme le papier et le tissu.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert la truelle ?", choix: ["à étendre ou racler le mortier", "à couper le bois", "à couper le papier"], r: "à étendre ou racler le mortier", expl: "C'est l'outil de base du maçon." },
      { t: "qcm", q: "À quoi sert la scie ?", choix: ["à couper des matériaux durs comme le bois", "à étendre le plâtre", "à couper les cheveux"], r: "à couper des matériaux durs comme le bois", expl: "Sa lame dentelée coupe le bois." },
      { t: "qcm", q: "À quoi servent les ciseaux ?", choix: ["à trancher les matériaux minces comme le papier", "à couper un tronc d'arbre", "à étaler du ciment"], r: "à trancher les matériaux minces comme le papier", expl: "Tissu, papier… sont des matériaux minces." },
      { t: "vf", q: "La truelle est un outil du maçon.", r: true, expl: "C'est même son outil de base." },
      { t: "relier", q: "Relie chaque outil à son usage.", paires: [["la truelle", "étendre le mortier"], ["la scie", "couper le bois"], ["les ciseaux", "couper le papier"]], expl: "Chaque outil a son travail." }
    ],
    [
      { t: "classer", q: "Range les parties de chaque outil.", cases: ["scie", "truelle"], items: [["le dos", "scie"], ["les dents", "scie"], ["la lame triangulaire", "truelle"], ["le manche coudé", "truelle"]], expl: "La scie a un dos, des dents, une lame, un manche ; la truelle a une lame et un manche." },
      { t: "qcm", q: "Combien de lames ont les ciseaux ?", choix: ["deux", "une", "trois"], r: "deux", expl: "Deux lames mobiles qui glissent l'une sur l'autre." },
      { t: "saisie", q: "Avec quel outil Awa découpe-t-elle une image dans un journal ?", r: ["les ciseaux", "des ciseaux", "ciseaux"], expl: "Le papier est un matériau mince : on utilise les ciseaux." },
      { t: "saisie", q: "Avec quel outil le menuisier coupe-t-il une planche ?", r: ["la scie", "une scie", "scie"], expl: "Le bois est un matériau dur : on utilise la scie." },
      { t: "saisie", q: "Avec quel outil le maçon étale-t-il le mortier entre les briques ?", r: ["la truelle", "une truelle", "truelle"], expl: "C'est la truelle." },
      { t: "trous", q: "Complète.", texte: "La scie est une lame [dentelée] en acier munie d'un [manche] en bois.", expl: "C'est la définition de la scie." },
      { t: "vf", q: "Le mortier est un mélange de sable, de ciment et d'eau.", r: true, expl: "La truelle sert à l'étendre." },
      { t: "qcm", q: "En quelle matière est la lame de la scie ?", choix: ["en acier", "en plastique", "en papier"], r: "en acier", expl: "Une lame dentelée en acier." },
      { t: "relier", q: "Relie chaque matériau à l'outil qui le coupe ou l'étale.", paires: [["le tissu", "les ciseaux"], ["une planche", "la scie"], ["le plâtre", "la truelle"]], expl: "Matériau mince, matériau dur, plâtre." }
    ],
    [
      { t: "qcm", q: "Pourquoi n'utilise-t-on pas les ciseaux pour couper une planche ?", choix: ["parce que les ciseaux tranchent seulement les matériaux minces", "parce que les ciseaux sont trop grands", "parce que les ciseaux n'ont pas de lame"], r: "parce que les ciseaux tranchent seulement les matériaux minces", expl: "Pour le bois, matériau dur, il faut la scie." },
      { t: "vf", q: "Les lames des ciseaux glissent l'une sur l'autre.", r: true, expl: "C'est ce qui leur permet de trancher." },
      { t: "qcm", q: "Quelle partie de la scie coupe le bois ?", choix: ["les dents", "le manche", "le dos"], r: "les dents", expl: "La lame est dentelée : ce sont les dents qui coupent." },
      { t: "qcm", q: "Quelle partie tient-on dans la main quand on utilise une truelle ?", choix: ["le manche", "la lame", "les dents"], r: "le manche", expl: "On tient le manche ; la lame étale le mortier." },
      { t: "classer", q: "Range ces matériaux.", cases: ["matériau mince", "matériau dur"], items: [["le papier", "matériau mince"], ["le bois", "matériau dur"], ["le tissu", "matériau mince"], ["une branche épaisse", "matériau dur"], ["le carton fin", "matériau mince"]], expl: "Mince : ciseaux. Dur : scie." },
      { t: "saisie", q: "Comment appelle-t-on le mélange de sable, de ciment et d'eau ?", r: "le mortier", expl: "Le mortier, étendu avec la truelle." },
      { t: "vf", q: "La scie et la truelle ont toutes les deux un manche.", r: true, expl: "On les tient par le manche." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "La [truelle] sert à étendre le mortier. La [scie] coupe les matériaux durs comme le bois. Les [ciseaux] tranchent les matériaux minces comme le papier.", expl: "Trois outils, trois usages." },
      { t: "qcm", q: "Ibrahima construit un petit mur et doit aussi couper une planche pour la porte. De quels outils a-t-il besoin ?", choix: ["une truelle et une scie", "des ciseaux et une truelle", "seulement des ciseaux"], r: "une truelle et une scie", expl: "La truelle pour le mortier du mur, la scie pour la planche." },
      { t: "classer", q: "Défi : range ces parties.", cases: ["scie", "truelle", "ciseaux"], items: [["les dents", "scie"], ["le dos", "scie"], ["la lame triangulaire", "truelle"], ["les deux lames mobiles", "ciseaux"], ["les poignées", "ciseaux"]], expl: "Révise les dessins du cahier." },
      { t: "vf", q: "La truelle, la scie et les ciseaux sont des objets techniques.", r: true, expl: "Ils sont fabriqués par l'homme dans un but utile." },
      { t: "qcm", q: "Khady coud une robe. Pour couper le tissu, elle prend…", choix: ["des ciseaux", "une scie", "une truelle"], r: "des ciseaux", expl: "Le tissu est un matériau mince." }
    ]
  ]
});
