// À VÉRIFIER : au cahier (photo 2026-11-25_01), la ligne « Département | Préfecture | Préfet | nommé » est rangée dans le tableau
// des institutions décentralisées. La préfecture est une institution DÉCONCENTRÉE (le cahier le dit lui-même le 23 novembre) :
// le module la range avec la gouvernance et la sous-préfecture. Depuis 2013, on parle aussi de « collectivités territoriales ».
LECONS.push({
  id: "ve-institutions-locales",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les institutions locales",
  date: "2026-11-20",
  photos: ["2026-11-25_01.jpg", "2026-11-25_04.jpg", "2026-11-25_08.jpg", "2026-11-25_03.jpg"],
  retiens:
    "<p>Au Sénégal, il y a <b>deux types d'institutions locales</b> :</p>" +
    "<ul><li>les institutions <b>décentralisées</b> : le conseil départemental et le conseil municipal ;</li>" +
    "<li>les institutions <b>déconcentrées</b> : la gouvernance, la préfecture et la sous-préfecture.</li></ul>" +
    "<p><b>1. Les institutions décentralisées</b> (leurs chefs sont <b>élus</b>)</p>" +
    "<table><tr><th>Localité</th><th>Institution</th><th>Autorité</th><th>Désignation</th></tr>" +
    "<tr><td>département</td><td>conseil départemental</td><td>président du conseil</td><td>élection (élu)</td></tr>" +
    "<tr><td>commune</td><td>conseil municipal</td><td>maire</td><td>élection (élu)</td></tr></table>" +
    "<p>Les conseils ont pour mission de : gérer les terres de la commune et du département ; voter le budget ; fixer les taxes communales ou départementales.</p>" +
    "<p><b>2. Les institutions déconcentrées</b> (leurs chefs sont <b>nommés</b>)</p>" +
    "<p>Avec la déconcentration, l'État décongestionne le pouvoir central et il est représenté au niveau local par des gouverneurs, des préfets et des sous-préfets.</p>" +
    "<table><tr><th>Localité</th><th>Institution</th><th>Autorité</th></tr>" +
    "<tr><td>région</td><td>gouvernance</td><td>gouverneur</td></tr>" +
    "<tr><td>département</td><td>préfecture</td><td>préfet</td></tr>" +
    "<tr><td>arrondissement</td><td>sous-préfecture</td><td>sous-préfet</td></tr></table>" +
    "<p>Ces autorités sont <b>nommées par un décret présidentiel</b>. Elles ont pour missions de : veiller au maintien de l'ordre ; veiller à la protection des personnes et de leurs biens ; mettre en œuvre et coordonner les politiques du gouvernement.</p>" +
    "<p><b>NB :</b> le département et la commune sont les <b>collectivités locales</b> de la République.</p>",
  astuce: "Dé<b>centr</b>alisé → les habitants <b>élisent</b> (maire, président du conseil). Dé<b>concentr</b>é → l'État <b>nomme</b> (gouverneur, préfet, sous-préfet).",
  regle: "Les institutions décentralisées (conseil départemental, conseil municipal) ont des chefs élus ; les institutions déconcentrées (gouvernance, préfecture, sous-préfecture) ont des chefs nommés par décret présidentiel et représentent l'État.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de types d'institutions locales y a-t-il au Sénégal ?", choix: ["deux", "trois", "quatre"], r: "deux", expl: "Les institutions décentralisées et les institutions déconcentrées." },
      { t: "qcm", q: "Qui dirige le conseil municipal ?", choix: ["le maire", "le préfet", "le gouverneur"], r: "le maire", expl: "Le maire dirige la commune ; il est élu." },
      { t: "qcm", q: "Qui représente l'État dans la région ?", choix: ["le gouverneur", "le maire", "le président du conseil départemental"], r: "le gouverneur", expl: "Le gouverneur dirige la gouvernance de la région." },
      { t: "vf", q: "Le maire est élu.", r: true, expl: "Les chefs des institutions décentralisées sont élus." },
      { t: "vf", q: "Le préfet est élu par les habitants.", r: false, expl: "Le préfet est nommé par un décret présidentiel." }
    ],
    [
      { t: "classer", q: "Range ces institutions.", cases: ["décentralisée", "déconcentrée"], items: [["conseil municipal", "décentralisée"], ["conseil départemental", "décentralisée"], ["gouvernance", "déconcentrée"], ["préfecture", "déconcentrée"], ["sous-préfecture", "déconcentrée"]], expl: "Les conseils sont décentralisés ; gouvernance, préfecture et sous-préfecture sont déconcentrées." },
      { t: "relier", q: "Relie chaque institution à son autorité.", paires: [["gouvernance", "gouverneur"], ["préfecture", "préfet"], ["sous-préfecture", "sous-préfet"], ["conseil municipal", "maire"], ["conseil départemental", "président du conseil"]], expl: "C'est le tableau de la leçon." },
      { t: "relier", q: "Relie chaque localité à son institution déconcentrée.", paires: [["région", "gouvernance"], ["département", "préfecture"], ["arrondissement", "sous-préfecture"]], expl: "Région → gouvernance ; département → préfecture ; arrondissement → sous-préfecture." },
      { t: "classer", q: "Élu ou nommé ?", cases: ["élu", "nommé"], items: [["le maire", "élu"], ["le président du conseil départemental", "élu"], ["le gouverneur", "nommé"], ["le préfet", "nommé"], ["le sous-préfet", "nommé"]], expl: "Décentralisé : élu. Déconcentré : nommé par décret présidentiel." },
      { t: "qcm", q: "Par quoi le gouverneur, le préfet et le sous-préfet sont-ils nommés ?", choix: ["par un décret présidentiel", "par une élection", "par le maire"], r: "par un décret présidentiel", expl: "C'est le président de la République qui les nomme." },
      { t: "saisie", q: "Qui dirige la sous-préfecture ?", r: ["le sous-préfet", "sous-préfet"], expl: "La sous-préfecture se trouve dans l'arrondissement ; elle est dirigée par le sous-préfet." },
      { t: "trous", q: "Complète.", texte: "Le [maire] dirige la commune. Le [préfet] dirige le département. Le [gouverneur] dirige la région.", expl: "Le maire est élu ; le préfet et le gouverneur sont nommés." },
      { t: "vf", q: "Voter le budget est une mission des conseils (municipal et départemental).", r: true, expl: "Les conseils gèrent les terres, votent le budget et fixent les taxes." }
    ],
    [
      { t: "classer", q: "Qui a cette mission ?", cases: ["les conseils (décentralisés)", "les autorités déconcentrées"], items: [["gérer les terres de la commune", "les conseils (décentralisés)"], ["voter le budget", "les conseils (décentralisés)"], ["fixer les taxes communales", "les conseils (décentralisés)"], ["veiller au maintien de l'ordre", "les autorités déconcentrées"], ["protéger les personnes et leurs biens", "les autorités déconcentrées"], ["coordonner les politiques du gouvernement", "les autorités déconcentrées"]], expl: "Les conseils s'occupent de la gestion locale ; les autorités déconcentrées représentent l'État." },
      { t: "qcm", q: "Dans un département, on trouve…", choix: ["une préfecture et un conseil départemental", "seulement une gouvernance", "seulement un conseil municipal"], r: "une préfecture et un conseil départemental", expl: "Le département a une institution déconcentrée (la préfecture, avec le préfet nommé) et une institution décentralisée (le conseil départemental, avec un président élu)." },
      { t: "qcm", q: "Quelles sont les collectivités locales de la République ?", choix: ["le département et la commune", "la région et l'arrondissement", "la préfecture et la gouvernance"], r: "le département et la commune", expl: "C'est le NB de la leçon." },
      { t: "vf", q: "Avec la déconcentration, l'État est représenté au niveau local.", r: true, expl: "Il est représenté par des gouverneurs, des préfets et des sous-préfets." },
      { t: "qcm", q: "Le préfet est-il une autorité décentralisée ?", choix: ["Non, il est déconcentré : il est nommé et représente l'État.", "Oui, car il travaille dans le département.", "Oui, car il est élu."], r: "Non, il est déconcentré : il est nommé et représente l'État.", expl: "Ne te fie pas au mot « département » : le préfet est nommé, donc déconcentré." },
      { t: "ordre", q: "Range du plus grand au plus petit territoire.", r: "région département arrondissement", expl: "La région contient des départements, qui contiennent des arrondissements." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Les institutions [décentralisées] sont le conseil départemental et le conseil municipal ; leurs chefs sont [élus]. Les institutions [déconcentrées] sont la gouvernance, la préfecture et la sous-préfecture ; leurs chefs sont [nommés] par un décret présidentiel.", expl: "Toute la leçon en deux phrases." },
      { t: "qcm", q: "Le marché de ta commune a besoin de nouveaux hangars. Quelle institution vote le budget pour les construire ?", choix: ["le conseil municipal", "la gouvernance", "la sous-préfecture"], r: "le conseil municipal", expl: "Le conseil municipal vote le budget de la commune." },
      { t: "qcm", q: "Une bagarre éclate pendant un match de navétane. Quelle autorité veille au maintien de l'ordre dans le département ?", choix: ["le préfet", "le président du conseil départemental", "le maire"], r: "le préfet", expl: "Les autorités déconcentrées veillent au maintien de l'ordre." },
      { t: "relier", q: "Relie chaque autorité à sa désignation.", paires: [["maire", "élu"], ["gouverneur", "nommé par décret"], ["président du conseil départemental", "élu"], ["sous-préfet", "nommé par décret"]], expl: "Décentralisé = élu ; déconcentré = nommé." },
      { t: "vf", q: "Une institution déconcentrée met en œuvre les politiques du gouvernement.", r: true, expl: "Elle représente l'État au niveau local." }
    ]
  ]
});
