LECONS.push({
  id: "ge-agriculture",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "L'agriculture au Sénégal (1re et 2e parties)",
  date: "2026-09-16",
  photos: ["DJI_20261118222023_0137_D.jpg", "DJI_20261118222048_0138_D.jpg"],
  retiens:
    "<p>Le Sénégal dispose d'énormes <b>potentialités agricoles</b> (terres arables, ressources humaines…). <b>70 %</b> de la population vit de l'agriculture.</p>" +
    "<p><b>Les cultures vivrières</b> servent à la consommation de la population locale :</p>" +
    "<ul><li>le <b>mil</b> (Fatick, Kaolack, Diourbel…) ;</li><li>le <b>riz</b> (Saint-Louis, Ziguinchor, Kolda) ;</li><li>le <b>maïs</b> (Tambacounda, Kolda, Kaolack…).</li></ul>" +
    "<p><b>Les cultures industrielles</b> sont transformées dans des usines :</p>" +
    "<ul><li>l'<b>arachide</b> (Diourbel, Kaolack, Louga…) ;</li><li>le <b>coton</b> (Tambacounda) ;</li><li>la <b>canne à sucre</b> (Richard-Toll, région de Saint-Louis) ;</li><li>la <b>tomate</b> (Saint-Louis, zone des Niayes).</li></ul>" +
    "<p><b>Les cultures maraîchères</b> (chou, patate…) se font dans la zone des Niayes et dans la vallée du fleuve.</p>" +
    "<p><b>Les cultures fruitières</b> se trouvent à Thiès et à Ziguinchor.</p>" +
    "<p><b>NB</b> : un pays qui atteint l'<b>autosuffisance alimentaire</b> est un pays qui produit toute la nourriture consommée par sa population.</p>" +
    "<p><b>Les problèmes</b> : malgré ses potentialités, notre agriculture souffre de l'<b>aridité des sols</b>, de la <b>faiblesse de la pluviométrie</b> et du <b>manque d'infrastructures agricoles</b> adaptées (outils).</p>" +
    "<p><b>Les solutions</b> : le Sénégal a fait de gros efforts pour atteindre l'autosuffisance alimentaire. L'État doit aussi moderniser l'agriculture : construire des <b>bassins de rétention</b> d'eau, <b>irriguer</b> les terres arides, renouveler le matériel agricole…</p>",
  astuce: "<b>Vivrière</b> vient de « vivre » : on la mange. <b>Industrielle</b> : elle part à l'usine (arachide → huile, canne → sucre).",
  regle: "Les cultures vivrières (mil, riz, maïs) nourrissent la population ; les cultures industrielles (arachide, coton, canne à sucre, tomate) sont transformées dans des usines.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle part de la population sénégalaise vit de l'agriculture ?", choix: ["70 %", "10 %", "100 %"], r: "70 %", expl: "70 % de la population vit de l'agriculture." },
      { t: "qcm", q: "À quoi servent les cultures vivrières ?", choix: ["à nourrir la population locale", "à être transformées dans des usines", "à décorer les maisons"], r: "à nourrir la population locale", expl: "Vivrière vient de « vivre » : on les consomme." },
      { t: "qcm", q: "Que deviennent les cultures industrielles ?", choix: ["elles sont transformées dans des usines", "elles sont jetées", "elles restent au champ"], r: "elles sont transformées dans des usines", expl: "L'arachide devient de l'huile, la canne à sucre devient du sucre…" },
      { t: "classer", q: "Range chaque culture.", cases: ["culture vivrière", "culture industrielle"], items: [["le mil", "culture vivrière"], ["l'arachide", "culture industrielle"], ["le riz", "culture vivrière"], ["le coton", "culture industrielle"], ["le maïs", "culture vivrière"], ["la canne à sucre", "culture industrielle"]], expl: "Mil, riz, maïs : vivrières. Arachide, coton, canne à sucre : industrielles." },
      { t: "vf", q: "Le chou et la patate sont des cultures maraîchères.", r: true, expl: "On les cultive dans les Niayes et dans la vallée du fleuve." }
    ],
    [
      { t: "relier", q: "Relie chaque culture industrielle à sa région.", paires: [["le coton", "Tambacounda"], ["la canne à sucre", "Richard-Toll"], ["la tomate", "zone des Niayes"]], expl: "Ce sont les zones citées dans la leçon." },
      { t: "relier", q: "Relie chaque culture vivrière à une de ses régions.", paires: [["le mil", "Fatick"], ["le riz", "Ziguinchor"], ["le maïs", "Tambacounda"]], expl: "Mil : Fatick, Kaolack, Diourbel. Riz : Saint-Louis, Ziguinchor, Kolda. Maïs : Tambacounda, Kolda, Kaolack." },
      { t: "qcm", q: "Où se trouvent les cultures fruitières ?", choix: ["à Thiès et à Ziguinchor", "à Dakar et à Louga", "à Matam et à Kédougou"], r: "à Thiès et à Ziguinchor", expl: "La leçon cite Thiès et Ziguinchor." },
      { t: "saisie", q: "Dans quelle ville du nord cultive-t-on la canne à sucre ?", r: "Richard-Toll", aide: "Deux mots reliés par un trait d'union.", expl: "À Richard-Toll, dans la région de Saint-Louis." },
      { t: "qcm", q: "Quelle culture est transformée en huile ?", choix: ["l'arachide", "le mil", "le chou"], r: "l'arachide", expl: "L'arachide est une culture industrielle." },
      { t: "classer", q: "Range ces problèmes et solutions.", cases: ["problème", "solution"], items: [["l'aridité des sols", "problème"], ["la faiblesse de la pluviométrie", "problème"], ["construire des bassins de rétention", "solution"], ["le manque d'outils adaptés", "problème"], ["irriguer les terres arides", "solution"], ["renouveler le matériel agricole", "solution"]], expl: "Les problèmes de l'agriculture et les solutions de la 2e partie." },
      { t: "trous", q: "Complète.", texte: "Les cultures [maraîchères] comme le chou se font dans la zone des [Niayes].", expl: "Les cultures maraîchères poussent dans les Niayes et la vallée du fleuve." },
      { t: "vf", q: "La pluviométrie très forte est un problème de l'agriculture sénégalaise.", r: false, expl: "Le problème, c'est la faiblesse de la pluviométrie : il ne pleut pas assez." },
      { t: "saisie", q: "Quelle culture industrielle est cultivée à Tambacounda ?", r: "le coton", expl: "Le coton, à Tambacounda." }
    ],
    [
      { t: "qcm", q: "Qu'est-ce qu'un pays qui a atteint l'autosuffisance alimentaire ?", choix: ["un pays qui produit toute la nourriture de sa population", "un pays qui achète toute sa nourriture à l'étranger", "un pays sans agriculteurs"], r: "un pays qui produit toute la nourriture de sa population", expl: "Il n'a pas besoin d'acheter de la nourriture ailleurs." },
      { t: "qcm", q: "Pourquoi construire des bassins de rétention d'eau ?", choix: ["pour garder l'eau de pluie et arroser les champs", "pour élever des chevaux", "pour faire des routes"], r: "pour garder l'eau de pluie et arroser les champs", expl: "La pluviométrie est faible : on garde l'eau pour irriguer." },
      { t: "vf", q: "Kaolack est citée à la fois pour le mil, le maïs et l'arachide.", r: true, expl: "Une même région peut produire plusieurs cultures." },
      { t: "qcm", q: "La tomate est une culture…", choix: ["industrielle", "fruitière", "vivrière"], r: "industrielle", expl: "Dans ta leçon, la tomate est rangée avec les cultures industrielles (on en fait du concentré à l'usine)." },
      { t: "classer", q: "Range chaque culture dans sa famille.", cases: ["vivrière", "industrielle", "maraîchère"], items: [["le riz", "vivrière"], ["le coton", "industrielle"], ["le chou", "maraîchère"], ["le mil", "vivrière"], ["la tomate", "industrielle"], ["la patate", "maraîchère"]], expl: "Trois familles de cultures." },
      { t: "saisie", q: "Comment appelle-t-on l'action d'apporter de l'eau aux terres sèches ? (verbe à l'infinitif)", r: "irriguer", expl: "Irriguer les terres arides est une des solutions." },
      { t: "vf", q: "Le Sénégal a de grandes potentialités agricoles : des terres arables et des ressources humaines.", r: true, expl: "C'est le début de la leçon." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Au Sénégal, [70] % de la population vit de l'agriculture. Les cultures [vivrières] comme le mil, le riz et le maïs nourrissent la population. Les cultures [industrielles] comme l'arachide et le coton sont transformées dans des usines. Les problèmes sont l'aridité des sols et la faiblesse de la [pluviométrie].", expl: "Les deux parties de la leçon." },
      { t: "qcm", q: "Mamadou cultive du mil à Diourbel pour nourrir sa famille. Quelle sorte de culture fait-il ?", choix: ["une culture vivrière", "une culture industrielle", "une culture fruitière"], r: "une culture vivrière", expl: "Le mil sert à nourrir la famille : c'est une culture vivrière." },
      { t: "qcm", q: "Khady vend ses arachides à l'usine de Kaolack. Quelle sorte de culture fait-elle ?", choix: ["une culture industrielle", "une culture vivrière", "une culture maraîchère"], r: "une culture industrielle", expl: "L'arachide part à l'usine : c'est une culture industrielle." },
      { t: "relier", q: "Relie chaque problème à une solution.", paires: [["la faiblesse de la pluviométrie", "construire des bassins de rétention"], ["les terres arides", "irriguer"], ["le manque d'outils adaptés", "renouveler le matériel agricole"]], expl: "Chaque solution répond à un problème." },
      { t: "vf", q: "Si le Sénégal produisait tout le riz que mange sa population, il serait plus proche de l'autosuffisance alimentaire.", r: true, expl: "L'autosuffisance, c'est produire toute la nourriture consommée par la population." }
    ]
  ]
});
