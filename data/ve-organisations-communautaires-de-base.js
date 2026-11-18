// Notes : date de la partie (1) non visible sur la photo 0106 (placée au 5 octobre 2026, entre le 1er et le 9 octobre).
// Les noms d'associations ethniques du cahier (Ndefleng, Soninkara, Dental, Ujamoral) sont de lecture incertaine : ils ne sont pas repris.
// Photo 0108 floue : « Mutelle de santé » lu comme « mutuelle de santé ».
LECONS.push({
  id: "ve-organisations-communautaires-de-base",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations communautaires de base (1 et 2)",
  date: "2026-10-05",
  photos: ["DJI_20261118221426_0106_D.jpg", "DJI_20261118221446_0108_D.jpg"],
  retiens:
    "<p>Dans notre pays, il y a des organisations communautaires de base à vocation <b>ethnique</b>, <b>confrérique</b>, <b>confessionnelle</b>, <b>professionnelle</b>, <b>de ressortissants</b> et <b>sociale</b>.</p>" +
    "<table><tr><th>Organisation</th><th>Ce qu'elle regroupe</th><th>Exemples</th></tr>" +
    "<tr><td><b>ethnique</b></td><td>des personnes d'une même ethnie, d'une même culture</td><td>associations sérères, soninkées, toucouleures, diolas…</td></tr>" +
    "<tr><td><b>confrérique</b></td><td>des personnes d'une même confrérie, avec un guide religieux</td><td>les Tidjanes, les Mourides, les Layènes, les Khadres…</td></tr>" +
    "<tr><td><b>confessionnelle</b></td><td>des personnes de même foi, de même religion</td><td>l'ONG Jamra (islamique) ; Caritas (catholique)</td></tr>" +
    "<tr><td><b>professionnelle</b></td><td>des personnes qui exercent un même métier</td><td>association des médecins ; syndicats ; amicales…</td></tr>" +
    "<tr><td><b>de ressortissants</b></td><td>des personnes qui viennent d'une même localité</td><td>association des ressortissants du Walo…</td></tr>" +
    "<tr><td><b>sociale</b></td><td>elle s'occupe du bien-être de la population</td><td>mutuelle de santé</td></tr></table>" +
    "<p><b>NB</b> : le <b>syndicat</b> est une organisation professionnelle qui défend les droits des travailleurs pour améliorer leurs conditions de vie, par des <b>négociations</b> ou des <b>grèves</b>.</p>" +
    "<p><b>Le fonctionnement d'une organisation communautaire</b> : une mission bien définie ; un statut et un règlement ; des critères d'adhésion et des moyens ; des activités précises à mener.</p>",
  astuce: "Pose-toi la question : <b>qu'ont en commun les membres ?</b> Même ethnie → ethnique ; même confrérie → confrérique ; même religion → confessionnelle ; même métier → professionnelle ; même localité → ressortissants ; le bien-être de tous → sociale.",
  regle: "On reconnaît une organisation communautaire de base à ce qui unit ses membres : l'ethnie, la confrérie, la religion, le métier, la localité d'origine ou le bien-être social.",
  niveaux: [
    [
      { t: "qcm", q: "Une organisation <b>ethnique</b> regroupe des personnes…", choix: ["d'une même ethnie, d'une même culture", "d'un même métier", "d'une même équipe de football"], r: "d'une même ethnie, d'une même culture", expl: "Ethnique vient de « ethnie »." },
      { t: "qcm", q: "Une organisation <b>professionnelle</b> regroupe des personnes…", choix: ["qui exercent un même métier", "qui ont la même religion", "qui habitent le même pays étranger"], r: "qui exercent un même métier", expl: "Profession = métier." },
      { t: "vf", q: "Caritas est une organisation confessionnelle catholique.", r: true, expl: "Elle regroupe des personnes de foi catholique." },
      { t: "vf", q: "Une mutuelle de santé est une organisation sociale.", r: true, expl: "Elle s'occupe du bien-être de la population." },
      { t: "qcm", q: "Une organisation <b>confrérique</b> regroupe des personnes…", choix: ["d'une même confrérie, autour d'un guide religieux", "d'un même village", "d'un même métier"], r: "d'une même confrérie, autour d'un guide religieux", expl: "Confrérique vient de « confrérie »." }
    ],
    [
      { t: "relier", q: "Relie chaque type d'organisation à ce que ses membres ont en commun.", paires: [["ethnique", "la même ethnie"], ["confessionnelle", "la même religion"], ["professionnelle", "le même métier"], ["de ressortissants", "la même localité d'origine"], ["sociale", "le bien-être de la population"]], expl: "Cherche ce qui unit les membres." },
      { t: "classer", q: "Range chaque exemple.", cases: ["confrérique", "confessionnelle", "professionnelle"], items: [["les Mourides", "confrérique"], ["les Tidjanes", "confrérique"], ["les Layènes", "confrérique"], ["Caritas", "confessionnelle"], ["l'ONG Jamra", "confessionnelle"], ["un syndicat d'enseignants", "professionnelle"], ["l'association des médecins", "professionnelle"]], expl: "Confrérie, religion ou métier ?" },
      { t: "qcm", q: "Les personnes originaires de Podor qui vivent à Dakar créent une association. C'est une organisation…", choix: ["de ressortissants", "professionnelle", "confrérique"], r: "de ressortissants", expl: "Elles viennent toutes de la même localité." },
      { t: "qcm", q: "Les chauffeurs de taxi de Thiès se regroupent pour défendre leurs droits. C'est…", choix: ["un syndicat", "une mutuelle de santé", "une association ethnique"], r: "un syndicat", expl: "Le syndicat défend les droits des travailleurs d'un même métier." },
      { t: "saisie", q: "Comment appelle-t-on l'organisation professionnelle qui défend les droits des travailleurs ?", r: ["le syndicat", "un syndicat", "syndicat"], expl: "C'est le NB de la leçon." },
      { t: "vf", q: "Le syndicat peut utiliser la grève pour défendre les travailleurs.", r: true, expl: "Il agit par des négociations ou des grèves." },
      { t: "vf", q: "Une organisation de ressortissants regroupe des personnes d'un même métier.", r: false, expl: "Elle regroupe des personnes venant d'une même localité." },
      { t: "trous", q: "Complète.", texte: "L'ONG Jamra est une organisation confessionnelle [islamique] ; Caritas est une organisation confessionnelle [catholique].", expl: "Les deux exemples du cahier." }
    ],
    [
      { t: "qcm", q: "Quelle est la différence entre une organisation confrérique et une organisation confessionnelle ?", choix: ["la confrérique suit un guide religieux d'une confrérie ; la confessionnelle réunit des gens de même religion", "il n'y a aucune différence", "la confessionnelle est sportive"], r: "la confrérique suit un guide religieux d'une confrérie ; la confessionnelle réunit des gens de même religion", expl: "Une confrérie est un groupe à l'intérieur d'une religion." },
      { t: "classer", q: "Range chaque exemple.", cases: ["de ressortissants", "sociale", "ethnique"], items: [["association des ressortissants du Walo", "de ressortissants"], ["association des gens de Bakel à Dakar", "de ressortissants"], ["mutuelle de santé", "sociale"], ["association culturelle sérère", "ethnique"], ["association culturelle diola", "ethnique"]], expl: "Localité, bien-être ou ethnie ?" },
      { t: "qcm", q: "Que fait une <b>mutuelle de santé</b> ?", choix: ["elle aide ses membres à se soigner", "elle organise des matchs", "elle vend du sable"], r: "elle aide ses membres à se soigner", expl: "Elle s'occupe du bien-être, ici de la santé." },
      { t: "classer", q: "Est-ce nécessaire au fonctionnement d'une organisation communautaire ?", cases: ["oui", "non"], items: [["une mission bien définie", "oui"], ["un statut et un règlement", "oui"], ["des critères d'adhésion", "oui"], ["des activités à mener", "oui"], ["un président étranger", "non"]], expl: "Mission, statut, règlement, critères d'adhésion, moyens, activités." },
      { t: "vf", q: "Les Mourides forment une organisation confessionnelle catholique.", r: false, expl: "Les Mourides sont une confrérie musulmane : organisation confrérique." },
      { t: "saisie", q: "Un groupe de personnes d'une même confrérie avec un guide religieux forme une organisation …", r: "confrérique", expl: "Confrérie → confrérique." },
      { t: "relier", q: "Relie chaque moyen d'action du syndicat à son sens.", paires: [["la négociation", "discuter pour trouver un accord"], ["la grève", "arrêter le travail pour se faire entendre"]], expl: "Les deux moyens cités au cahier." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Le père d'Ibrahima est infirmier : il est membre d'une organisation [professionnelle]. Sa mère est née à Matam : elle fait partie de l'association des [ressortissants] de Matam. Toute la famille cotise à une [mutuelle] de santé.", expl: "Métier, localité, bien-être." },
      { t: "qcm", q: "Une association regroupe tous les Soninkés de Dakar pour garder leur langue et leurs traditions. C'est une organisation…", choix: ["ethnique", "professionnelle", "sociale"], r: "ethnique", expl: "Même ethnie, même culture." },
      { t: "classer", q: "Range ces six types d'organisations selon ce qui unit les membres.", cases: ["origine ou culture", "religion", "travail ou bien-être"], items: [["ethnique", "origine ou culture"], ["de ressortissants", "origine ou culture"], ["confrérique", "religion"], ["confessionnelle", "religion"], ["professionnelle", "travail ou bien-être"], ["sociale", "travail ou bien-être"]], expl: "Regroupe-les deux par deux." },
      { t: "vf", q: "Une organisation communautaire doit avoir des critères d'adhésion.", r: true, expl: "On doit savoir qui peut devenir membre." },
      { t: "qcm", q: "Quel est le rôle du syndicat ?", choix: ["défendre les droits des travailleurs", "organiser les fêtes religieuses", "construire des puits"], r: "défendre les droits des travailleurs", expl: "C'est le NB de la leçon." }
    ]
  ]
});
