// À VÉRIFIER :
//  - NEPAD : un « 3 » a été ajouté à la main devant « juillet 2001 » ; le NEPAD a été adopté à Lusaka le 11 juillet 2001. Le module écrit « juillet 2001 à Lusaka », sans jour.
//  - AFABA : le cahier donne Le Caire comme siège ; c'est bien la ville de création (11 juin 1961), mais le siège actuel de FIBA Afrique n'a pas pu être confirmé : aucun exercice sur le siège de l'AFABA.
//  - Corrections de recopie : « Encourager la coopérative internationale » → « la coopération internationale » ; « à l'échelle africain » → « africaine ».
LECONS.push({
  id: "ve-organisations-africaines",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations régionales ou africaines et leur fonctionnement",
  date: "2026-11-09",
  photos: ["DJI_20261118221607_0117_D.jpg", "DJI_20261118221629_0119_D.jpg", "DJI_20261118221643_0120_D.jpg"],
  retiens:
    "<p>Les pays africains ont créé des organisations pour prendre en charge leurs problèmes politiques, économiques, socioculturels, environnementaux… Le domaine d'action de chaque organisation se lit souvent dans la signification de son sigle.</p>" +
    "<table><tr><th>Sigle</th><th>Signification</th><th>Création</th><th>Siège</th></tr>" +
    "<tr><td><b>UA</b></td><td>Union africaine</td><td>9 juillet 2002 à Durban (Afrique du Sud)</td><td>Addis-Abeba (Éthiopie)</td></tr>" +
    "<tr><td><b>NEPAD</b></td><td>Nouveau partenariat pour le développement de l'Afrique</td><td>juillet 2001 à Lusaka (Zambie)</td><td>Midrand (Afrique du Sud)</td></tr>" +
    "<tr><td><b>BAD</b></td><td>Banque africaine de développement</td><td>10 septembre 1964</td><td>Abidjan (Côte d'Ivoire)</td></tr>" +
    "<tr><td><b>CAF</b></td><td>Confédération africaine de football</td><td>8 février 1957 à Khartoum (Soudan)</td><td>Ville du 6-Octobre (Égypte)</td></tr>" +
    "<tr><td><b>AFABA</b></td><td>Association des fédérations africaines de basket-ball (aujourd'hui FIBA Afrique)</td><td>11 juin 1961 au Caire (Égypte)</td><td>—</td></tr></table>" +
    "<p><b>Leur fonctionnement</b></p>" +
    "<table><tr><th>Sigle</th><th>Missions ou buts</th><th>Pays membres</th></tr>" +
    "<tr><td><b>UA</b></td><td>renforcer l'unité et la solidarité entre les pays ; encourager la coopération internationale</td><td rowspan='2'>les pays d'Afrique</td></tr>" +
    "<tr><td><b>NEPAD</b></td><td>combler le retard entre l'Afrique et les pays développés</td></tr>" +
    "<tr><td><b>CAF</b></td><td>organiser des compétitions de football entre les clubs et entre les sélections nationales à l'échelle africaine, comme la CAN</td><td></td></tr>" +
    "<tr><td><b>AFABA</b></td><td>organiser des compétitions de basket-ball</td><td></td></tr>" +
    "<tr><td><b>BAD</b></td><td>contribuer au développement et au progrès social des États africains ; combattre la pauvreté sur le continent</td><td>81 pays (54 africains et 27 non africains)</td></tr></table>",
  astuce: "Le sport : <b>CAF</b> = football (la CAN), <b>AFABA</b> = basket. L'argent : <b>BAD</b> = banque. L'unité : <b>UA</b>. Le retard à rattraper : <b>NEPAD</b>.",
  regle: "Chaque organisation africaine a un sigle, une date et un lieu de création, un siège et une mission. La signification du sigle aide à retrouver la mission.",
  niveaux: [
    [
      { t: "qcm", q: "Que veut dire <b>UA</b> ?", choix: ["Union africaine", "Union des athlètes", "Université africaine"], r: "Union africaine", expl: "U = Union, A = africaine." },
      { t: "qcm", q: "Que veut dire <b>CAF</b> ?", choix: ["Confédération africaine de football", "Comité africain des finances", "Club africain de foot"], r: "Confédération africaine de football", expl: "La CAF organise notamment la CAN." },
      { t: "qcm", q: "Que veut dire <b>BAD</b> ?", choix: ["Banque africaine de développement", "Bureau africain des douanes", "Banque des agriculteurs de Dakar"], r: "Banque africaine de développement", expl: "B = Banque, A = africaine, D = développement." },
      { t: "vf", q: "Le siège de l'Union africaine est à Addis-Abeba, en Éthiopie.", r: true, expl: "L'UA a été créée à Durban mais son siège est à Addis-Abeba." },
      { t: "vf", q: "L'AFABA s'occupe du football.", r: false, expl: "L'AFABA s'occupe du basket-ball ; le football, c'est la CAF." },
      { t: "qcm", q: "Quelle organisation organise la CAN (Coupe d'Afrique des Nations de football) ?", choix: ["la CAF", "la BAD", "le NEPAD"], r: "la CAF", expl: "La CAF organise les compétitions de football entre sélections nationales." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["UA", "Union africaine"], ["NEPAD", "Nouveau partenariat pour le développement de l'Afrique"], ["BAD", "Banque africaine de développement"], ["CAF", "Confédération africaine de football"], ["AFABA", "Association des fédérations africaines de basket-ball"]], expl: "Lis le sigle lettre par lettre." },
      { t: "relier", q: "Relie chaque organisation à son siège.", paires: [["UA", "Addis-Abeba"], ["NEPAD", "Midrand"], ["BAD", "Abidjan"], ["CAF", "Ville du 6-Octobre"]], expl: "Révise le tableau des sièges." },
      { t: "relier", q: "Relie chaque organisation à sa mission.", paires: [["UA", "renforcer l'unité et la solidarité"], ["NEPAD", "combler le retard avec les pays développés"], ["BAD", "combattre la pauvreté"], ["CAF", "organiser la CAN"], ["AFABA", "organiser des compétitions de basket"]], expl: "La mission se devine souvent dans le sigle." },
      { t: "qcm", q: "Où l'Union africaine a-t-elle été créée ?", choix: ["à Durban (Afrique du Sud)", "à Addis-Abeba (Éthiopie)", "à Dakar (Sénégal)"], r: "à Durban (Afrique du Sud)", expl: "Créée à Durban le 9 juillet 2002 ; siège à Addis-Abeba." },
      { t: "qcm", q: "Où se trouve le siège de la BAD ?", choix: ["Abidjan (Côte d'Ivoire)", "Lomé (Togo)", "Le Caire (Égypte)"], r: "Abidjan (Côte d'Ivoire)", expl: "La BAD est à Abidjan." },
      { t: "saisie", q: "En quelle année l'Union africaine a-t-elle été créée ?", r: "2002", nombre: true, expl: "Le 9 juillet 2002, à Durban." },
      { t: "vf", q: "La CAF a été créée à Khartoum en 1957.", r: true, expl: "Le 8 février 1957, à Khartoum (Soudan)." },
      { t: "vf", q: "La BAD compte aussi des pays non africains parmi ses membres.", r: true, expl: "81 pays : 54 africains et 27 non africains." },
      { t: "trous", q: "Complète.", texte: "L'UA veut renforcer l'[unité] et la [solidarité] entre les pays et encourager la [coopération] internationale.", expl: "Les missions de l'UA." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces organisations a été créée la première ?", choix: ["la CAF (1957)", "l'AFABA (1961)", "la BAD (1964)", "l'UA (2002)"], r: "la CAF (1957)", expl: "1957 est la date la plus ancienne." },
      { t: "qcm", q: "Laquelle a été créée la plus récemment ?", choix: ["l'UA", "le NEPAD", "la BAD", "la CAF"], r: "l'UA", expl: "L'UA date de 2002, le NEPAD de 2001." },
      { t: "vf", q: "L'UA a son siège dans la ville où elle a été créée.", r: false, expl: "Créée à Durban (Afrique du Sud), siège à Addis-Abeba (Éthiopie)." },
      { t: "classer", q: "Range chaque organisation selon son domaine.", cases: ["le sport", "l'économie et le développement", "l'unité politique"], items: [["la CAF", "le sport"], ["l'AFABA", "le sport"], ["la BAD", "l'économie et le développement"], ["le NEPAD", "l'économie et le développement"], ["l'UA", "l'unité politique"]], expl: "Sport, développement ou unité ?" },
      { t: "saisie", q: "Quel est le sigle du Nouveau partenariat pour le développement de l'Afrique ?", r: "NEPAD", expl: "N-E-P-A-D." },
      { t: "qcm", q: "Quelles organisations sont liées à l'Afrique du Sud ?", choix: ["l'UA (créée à Durban) et le NEPAD (siège à Midrand)", "la CAF et la BAD", "l'AFABA et la CAF"], r: "l'UA (créée à Durban) et le NEPAD (siège à Midrand)", expl: "Durban et Midrand sont en Afrique du Sud." },
      { t: "saisie", q: "En quelle année la BAD a-t-elle été créée ?", r: "1964", nombre: true, expl: "Le 10 septembre 1964." },
      { t: "relier", q: "Relie chaque organisation à son année de création.", paires: [["CAF", "1957"], ["AFABA", "1961"], ["BAD", "1964"], ["NEPAD", "2001"], ["UA", "2002"]], expl: "Range-les dans l'ordre : 1957, 1961, 1964, 2001, 2002." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "L'Union africaine a été créée en [2002] à Durban ; son siège est à [Addis-Abeba]. La BAD a son siège à [Abidjan] ; elle combat la [pauvreté]. La [CAF] organise la CAN.", expl: "Date, sièges et missions." },
      { t: "probleme", q: "Calcule avec les dates du tableau.", etapes: [{ q: "Étape 1 : la CAF a été créée en 1957. Quel âge a-t-elle en 2026 ?", r: "69", unite: "ans" }, { q: "Étape 2 : l'UA a été créée en 2002. Quel âge a-t-elle en 2026 ?", r: "24", unite: "ans" }, { q: "Étape 3 : combien d'années séparent la création de la CAF et celle de l'UA ?", r: "45", unite: "ans" }], expl: "2026 − 1957 = 69 ; 2026 − 2002 = 24 ; 2002 − 1957 = 45 (ou 69 − 24 = 45)." },
      { t: "qcm", q: "Les Lions du Sénégal jouent la Coupe d'Afrique des Nations. Quelle organisation l'organise ?", choix: ["la CAF", "l'AFABA", "l'UA"], r: "la CAF", expl: "La CAF organise les compétitions de football entre sélections nationales." },
      { t: "qcm", q: "Un pays africain veut construire des routes et des écoles pour lutter contre la pauvreté. À quelle banque africaine peut-il demander de l'aide ?", choix: ["la BAD", "la CAF", "l'AFABA"], r: "la BAD", expl: "La BAD contribue au développement des États africains et combat la pauvreté." },
      { t: "saisie", q: "Combien de pays non africains sont membres de la BAD ?", r: "27", nombre: true, expl: "81 pays au total : 54 africains et 27 non africains." },
      { t: "vf", q: "Le NEPAD veut combler le retard entre l'Afrique et les pays développés.", r: true, expl: "C'est sa mission au cahier." }
    ]
  ]
});
