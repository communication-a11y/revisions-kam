// Un mot illisible dans la case « protection » (photo 2026-11-25_17) n'est pas repris.
LECONS.push({
  id: "vdsm-role-aliments",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Le rôle des aliments",
  date: "2026-11-24",
  photos: ["2026-11-25_17.jpg"],
  retiens:
    "<table><tr><th>Groupe</th><th>Rôle</th><th>Catégories et exemples</th></tr>" +
    "<tr><td><b>Aliments de construction</b></td><td>assurent la croissance et l'entretien du corps humain</td><td><b>Protides</b>, riches en matières azotées : viande, poisson, lait, œuf, haricot</td></tr>" +
    "<tr><td><b>Aliments énergétiques</b></td><td>donnent la force et la chaleur au corps</td><td><b>Glucides</b> (sucres) : céréales, tubercules, légumes, fruits, pain, riz, farine, miel<br><b>Lipides</b> (matières grasses) : beurre, arachide, lait, huile de palme, œuf</td></tr>" +
    "<tr><td><b>Aliments de protection</b> (catalyseurs)</td><td>assurent le maintien de la santé et le bon fonctionnement du corps</td><td><b>Sels minéraux et vitamines</b> : fruits crus, légumes frais, lait</td></tr></table>" +
    "<p><b>NB :</b> le lait est un <b>aliment complet</b> : il contient des matières azotées, des matières grasses, des matières minérales, de l'eau, du sucre et des vitamines.</p>" +
    "<p>Pour vivre en bonne santé, il faut avoir une alimentation <b>suffisante, variée et équilibrée</b>.</p>",
  astuce: "Trois mots, trois rôles : <b>construire</b> (protides), <b>donner de l'énergie</b> (glucides, lipides), <b>protéger</b> (vitamines, sels minéraux).",
  regle: "Les aliments de construction (protides) font grandir et entretiennent le corps ; les aliments énergétiques (glucides et lipides) donnent force et chaleur ; les aliments de protection (vitamines et sels minéraux) maintiennent la santé.",
  niveaux: [
    [
      { t: "qcm", q: "Quel est le rôle des aliments de construction ?", choix: ["assurer la croissance et l'entretien du corps", "donner la chaleur au corps", "rendre les aliments sucrés"], r: "assurer la croissance et l'entretien du corps", expl: "Ce sont les protides : viande, poisson, œuf, haricot…" },
      { t: "qcm", q: "Les aliments énergétiques donnent au corps…", choix: ["la force et la chaleur", "la croissance", "les vitamines"], r: "la force et la chaleur", expl: "Ce sont les glucides et les lipides." },
      { t: "qcm", q: "Les vitamines et les sels minéraux sont des aliments…", choix: ["de protection", "de construction", "énergétiques"], r: "de protection", expl: "Ils maintiennent la santé : on les appelle aussi catalyseurs." },
      { t: "vf", q: "Le lait est un aliment complet.", r: true, expl: "Il contient des matières azotées, grasses, minérales, de l'eau, du sucre et des vitamines." },
      { t: "qcm", q: "Les lipides sont…", choix: ["des matières grasses", "des sucres", "des vitamines"], r: "des matières grasses", expl: "Beurre, arachide, huile de palme…" }
    ],
    [
      { t: "classer", q: "Range ces aliments.", cases: ["protides", "glucides", "lipides"], items: [["viande", "protides"], ["poisson", "protides"], ["haricot", "protides"], ["riz", "glucides"], ["miel", "glucides"], ["pain", "glucides"], ["beurre", "lipides"], ["huile de palme", "lipides"]], expl: "Protides : construction. Glucides : sucres. Lipides : matières grasses." },
      { t: "relier", q: "Relie chaque groupe à son rôle.", paires: [["construction", "croissance et entretien du corps"], ["énergétiques", "force et chaleur"], ["protection", "maintien de la santé"]], expl: "C'est la colonne « Rôles » du tableau." },
      { t: "relier", q: "Relie chaque catégorie à son groupe.", paires: [["protides", "aliments de construction"], ["glucides", "aliments énergétiques"], ["lipides", "aliments énergétiques"], ["vitamines", "aliments de protection"]], expl: "Glucides et lipides sont tous les deux énergétiques." },
      { t: "qcm", q: "Les fruits crus et les légumes frais apportent surtout…", choix: ["des vitamines et des sels minéraux", "des matières grasses", "des protides"], r: "des vitamines et des sels minéraux", expl: "Ce sont des aliments de protection." },
      { t: "saisie", q: "Les protides sont riches en matières…", r: "azotées", expl: "Les protides sont riches en matières azotées." },
      { t: "trous", q: "Complète.", texte: "Pour vivre en bonne santé, il faut avoir une alimentation suffisante, [variée] et [équilibrée].", expl: "Suffisante, variée et équilibrée." },
      { t: "qcm", q: "Quel autre nom donne-t-on aux aliments de protection ?", choix: ["catalyseurs", "protides", "tubercules"], r: "catalyseurs", expl: "Aliments de protection = catalyseurs." },
      { t: "vf", q: "Le riz et la farine sont des glucides.", r: true, expl: "Les céréales, le pain, le riz, la farine sont des glucides." }
    ],
    [
      { t: "qcm", q: "L'arachide est rangée parmi…", choix: ["les lipides", "les protides", "les vitamines"], r: "les lipides", expl: "Dans la leçon, l'arachide fait partie des matières grasses." },
      { t: "qcm", q: "Pourquoi l'œuf apparaît-il deux fois dans le tableau ?", choix: ["parce qu'il contient des protides et des lipides", "parce que c'est un fruit", "par erreur"], r: "parce qu'il contient des protides et des lipides", expl: "Un même aliment peut appartenir à plusieurs catégories, comme le lait." },
      { t: "classer", q: "Quel rôle joue chaque aliment ?", cases: ["construction", "énergie", "protection"], items: [["poisson", "construction"], ["œuf", "construction"], ["mil", "énergie"], ["patate douce", "énergie"], ["mangue crue", "protection"], ["carotte fraîche", "protection"]], expl: "Le mil est une céréale et la patate douce un tubercule : ils donnent de l'énergie." },
      { t: "vf", q: "Manger seulement du riz tous les jours, c'est une alimentation équilibrée.", r: false, expl: "Il faut une alimentation variée : des aliments des trois groupes." },
      { t: "qcm", q: "Quelle matière le lait ne contient-il PAS selon la leçon ?", choix: ["Il les contient toutes : azotées, grasses, minérales, eau, sucre, vitamines.", "les matières grasses", "le sucre"], r: "Il les contient toutes : azotées, grasses, minérales, eau, sucre, vitamines.", expl: "C'est pour cela qu'on dit que le lait est un aliment complet." },
      { t: "saisie", q: "Les sucres s'appellent aussi les…", r: "glucides", expl: "Glucides = sucres." }
    ],
    [
      { t: "qcm", q: "Au déjeuner, Awa mange du riz au poisson avec des légumes frais. Que lui manque-t-il pour un repas complet ?", choix: ["rien : il y a des trois groupes", "des protides", "des glucides"], r: "rien : il y a des trois groupes", expl: "Riz : énergie. Poisson : construction. Légumes frais : protection." },
      { t: "qcm", q: "Moussa grandit vite. Quels aliments l'aident surtout à grandir ?", choix: ["la viande, le poisson, l'œuf, le haricot", "le miel et le sucre", "l'huile de palme"], r: "la viande, le poisson, l'œuf, le haricot", expl: "Les protides sont des aliments de construction." },
      { t: "trous", q: "Complète le résumé.", texte: "Les [protides] construisent le corps. Les glucides et les [lipides] donnent la force et la chaleur. Les vitamines et les sels minéraux [protègent] le corps.", expl: "Construire, donner de l'énergie, protéger." },
      { t: "relier", q: "Relie chaque aliment à sa catégorie.", paires: [["haricot", "protides"], ["farine", "glucides"], ["beurre", "lipides"], ["fruits crus", "vitamines"]], expl: "Chaque aliment a sa place dans le tableau." },
      { t: "vf", q: "Une alimentation variée contient des aliments de construction, énergétiques et de protection.", r: true, expl: "C'est ce qu'il faut pour vivre en bonne santé." }
    ]
  ]
});
