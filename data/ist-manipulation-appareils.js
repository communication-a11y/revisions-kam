// À VÉRIFIER : la date et le point 1 (téléviseur) sont flous sur la photo 0134 ; la phrase sur le téléviseur est remise au propre d'après le sens probable. La fin de la page (« des aliments… ») est coupée.
LECONS.push({
  id: "ist-manipulation-appareils",
  cahier: "sciences",
  matiere: "IST",
  titre: "La manipulation d'appareils simples",
  date: "2026-11-06",
  photos: ["DJI_20261118221956_0134_D.jpg"],
  retiens:
    "<p>1. Le <b>téléviseur</b> reçoit les émissions par les <b>ondes</b>. On le commande avec une <b>télécommande</b> ou avec des boutons situés sur l'appareil.</p>" +
    "<p>2. L'<b>appareil photo numérique</b> capte la <b>lumière</b> et en fait une photographie que l'on voit sur un écran.</p>" +
    "<p>3. Le <b>téléphone</b> est un appareil qui sert à <b>communiquer</b> avec des personnes éloignées.</p>" +
    "<p>4. La <b>cuisinière</b> comporte une <b>table de cuisson</b> et un <b>four</b> ; elle fonctionne au <b>gaz</b> ou à l'<b>électricité</b>. Elle permet de faire cuire les aliments.</p>" +
    "<p>5. Le <b>réfrigérateur</b> a <b>deux compartiments</b> : l'un sert à <b>refroidir</b>, l'autre à <b>congeler</b>. Le congélateur descend à <b>−18 °C</b>, ce qui permet de conserver longtemps les aliments.</p>",
  astuce: "Le congélateur, c'est <b>moins dix-huit</b> : bien plus froid que la glace qui fond à 0 °C.",
  regle: "Chaque appareil a sa fonction : le téléviseur reçoit les ondes, l'appareil photo capte la lumière, le téléphone communique au loin, la cuisinière cuit, le réfrigérateur refroidit et congèle.",
  niveaux: [
    [
      { t: "qcm", q: "Comment le téléviseur reçoit-il les émissions ?", choix: ["par les ondes", "par la poste", "par un tuyau d'eau"], r: "par les ondes", expl: "Le téléviseur reçoit les émissions par les ondes." },
      { t: "qcm", q: "À quoi sert le téléphone ?", choix: ["à communiquer avec des personnes éloignées", "à cuire les aliments", "à conserver la viande"], r: "à communiquer avec des personnes éloignées", expl: "On parle à quelqu'un qui est loin." },
      { t: "qcm", q: "Que capte l'appareil photo numérique ?", choix: ["la lumière", "le son", "la chaleur"], r: "la lumière", expl: "Il capte la lumière et en fait une photo visible sur un écran." },
      { t: "vf", q: "La cuisinière peut fonctionner au gaz ou à l'électricité.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "relier", q: "Relie chaque appareil à sa fonction.", paires: [["le téléviseur", "recevoir les émissions"], ["le téléphone", "communiquer de loin"], ["la cuisinière", "cuire les aliments"], ["le réfrigérateur", "refroidir et congeler"]], expl: "Chaque appareil a son rôle." }
    ],
    [
      { t: "saisie", q: "Le congélateur descend à « moins combien » de degrés ? Écris le nombre sans le signe moins.", r: "18", nombre: true, unite: "°C", expl: "Le congélateur descend à −18 °C." },
      { t: "qcm", q: "Combien de compartiments a le réfrigérateur ?", choix: ["deux", "un", "quatre"], r: "deux", expl: "Un pour refroidir, un pour congeler." },
      { t: "classer", q: "Range les parties.", cases: ["cuisinière", "réfrigérateur"], items: [["la table de cuisson", "cuisinière"], ["le four", "cuisinière"], ["le compartiment qui refroidit", "réfrigérateur"], ["le congélateur", "réfrigérateur"]], expl: "La cuisinière cuit ; le réfrigérateur garde au froid." },
      { t: "qcm", q: "Avec quoi peut-on commander le téléviseur sans se lever ?", choix: ["la télécommande", "la souris", "la truelle"], r: "la télécommande", expl: "On peut aussi utiliser les boutons sur l'appareil." },
      { t: "trous", q: "Complète.", texte: "La cuisinière comporte une table de [cuisson] et un [four].", expl: "Les deux parties de la cuisinière." },
      { t: "vf", q: "L'appareil photo numérique montre la photo sur un écran.", r: true, expl: "La photo se voit sur l'écran." },
      { t: "saisie", q: "Quel appareil sert à appeler sa tante qui habite à Saint-Louis ?", r: ["le téléphone", "un téléphone", "téléphone"], expl: "Le téléphone sert à communiquer avec des personnes éloignées." },
      { t: "qcm", q: "Pourquoi met-on la viande au congélateur ?", choix: ["pour la conserver longtemps", "pour la cuire", "pour la rendre chaude"], r: "pour la conserver longtemps", expl: "À −18 °C, les aliments se conservent longtemps." },
      { t: "vf", q: "Le réfrigérateur sert à faire cuire les aliments.", r: false, expl: "Il refroidit et congèle. C'est la cuisinière qui cuit." }
    ],
    [
      { t: "qcm", q: "Quel compartiment du réfrigérateur est le plus froid ?", choix: ["le congélateur", "le compartiment qui refroidit", "ils ont la même température"], r: "le congélateur", expl: "Le congélateur descend à −18 °C pour congeler." },
      { t: "vf", q: "Le téléviseur se commande seulement avec une télécommande.", r: false, expl: "On peut aussi utiliser les boutons situés sur l'appareil." },
      { t: "qcm", q: "La maman de Fatou n'a pas d'électricité ce soir. Peut-elle utiliser sa cuisinière ?", choix: ["oui, si sa cuisinière fonctionne au gaz", "non, jamais", "oui, avec la télécommande"], r: "oui, si sa cuisinière fonctionne au gaz", expl: "Une cuisinière peut fonctionner au gaz ou à l'électricité." },
      { t: "vf", q: "L'appareil photo numérique reçoit les émissions par les ondes, comme le téléviseur.", r: false, expl: "L'appareil photo capte la lumière ; c'est le téléviseur qui reçoit les ondes." },
      { t: "saisie", q: "Comment s'appelle le compartiment du réfrigérateur qui descend à −18 °C ?", r: "le congélateur", expl: "Le congélateur." },
      { t: "qcm", q: "Que comporte la cuisinière en plus de la table de cuisson ?", choix: ["un four", "un écran", "une antenne"], r: "un four", expl: "Table de cuisson et four." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le téléviseur reçoit les émissions par les [ondes]. L'appareil photo numérique capte la [lumière]. Le [téléphone] sert à communiquer avec des personnes éloignées. Le congélateur descend à −[18] °C.", expl: "Toute la leçon." },
      { t: "relier", q: "Relie chaque situation à l'appareil qui convient.", paires: [["garder du poisson pendant un mois", "le congélateur"], ["faire cuire un gâteau", "le four de la cuisinière"], ["photographier sa classe", "l'appareil photo numérique"], ["regarder un match de football", "le téléviseur"]], expl: "On choisit l'appareil selon sa fonction." },
      { t: "qcm", q: "Ibrahima veut garder des jus de bissap bien frais, mais pas gelés. Où les met-il ?", choix: ["dans le compartiment qui refroidit", "dans le congélateur", "dans le four"], r: "dans le compartiment qui refroidit", expl: "Le congélateur ferait geler les jus ; l'autre compartiment les refroidit seulement." },
      { t: "vf", q: "À −18 °C, l'eau est gelée.", r: true, expl: "L'eau gèle à 0 °C ; à −18 °C, il fait beaucoup plus froid." },
      { t: "classer", q: "Défi : range ces appareils.", cases: ["sert à communiquer ou à s'informer", "sert à préparer ou conserver les aliments"], items: [["le téléphone", "sert à communiquer ou à s'informer"], ["le téléviseur", "sert à communiquer ou à s'informer"], ["la cuisinière", "sert à préparer ou conserver les aliments"], ["le réfrigérateur", "sert à préparer ou conserver les aliments"]], expl: "Deux grandes familles d'usages." }
    ]
  ]
});
