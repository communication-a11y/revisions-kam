// Corrections : titre « avec sont sujet » → « avec son sujet » ; « Le gaitariste » → « Le guitariste ».
LECONS.push({
  id: "fr-orth-accord-verbe-sujet",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "L'accord du verbe avec son sujet",
  date: "2026-10-13",
  photos: ["DJI_20261118220513_0039_D.jpg", "DJI_20261118220520_0040_D.jpg"],
  retiens:
    "<p>Le sujet commande le verbe : le verbe s'accorde avec le <b>nom le plus important</b> du groupe nominal sujet.<br>Ex : Les <b>chaussures</b> neuves de Lalia brill<b>ent</b> au soleil. (c'est « chaussures » qui commande, pas « Lalia »)</p>" +
    "<p>→ Un verbe commandé par <b>plusieurs sujets au singulier</b> s'écrit <b>au pluriel</b>.<br>Ex : Le guitariste, le pianiste et le batteur form<b>ent</b> un orchestre.</p>" +
    "<p>→ <b>Plusieurs verbes</b> commandés par <b>un sujet au singulier</b> s'écrivent <b>au singulier</b>.<br>Ex : Le musicien tap<b>e</b>, tir<b>e</b> et souffl<b>e</b> dans ses instruments.</p>",
  astuce: "Pour trouver le nom qui commande, enlève les mots en trop : « Les chaussures (neuves de Lalia) brillent. » Plusieurs sujets ? Remplace-les par « ils » : « Le guitariste, le pianiste et le batteur » = <b>ils</b> forment.",
  regle: "Le verbe s'accorde avec le nom principal du groupe sujet. Plusieurs sujets au singulier → verbe au pluriel. Un sujet au singulier → tous ses verbes au singulier.",
  niveaux: [
    [
      { t: "qcm", q: "Qui commande le verbe ?", choix: ["le sujet", "le COD", "le complément de lieu"], r: "le sujet", expl: "Le sujet commande le verbe." },
      { t: "qcm", q: "« Les chaussures neuves de Lalia brillent. » Quel nom commande le verbe ?", choix: ["chaussures", "Lalia", "neuves"], r: "chaussures", expl: "Ce sont les chaussures qui brillent : le verbe est au pluriel." },
      { t: "vf", q: "Plusieurs sujets au singulier commandent un verbe au pluriel.", r: true, expl: "Le guitariste, le pianiste et le batteur forment un orchestre." },
      { t: "vf", q: "Si un sujet au singulier commande plusieurs verbes, ces verbes s'écrivent au pluriel.", r: false, expl: "Ils restent au singulier : le musicien tape, tire et souffle." },
      { t: "qcm", q: "« Le guitariste, le pianiste et le batteur … un orchestre. »", choix: ["forment", "forme", "formes"], r: "forment", expl: "Trois sujets au singulier = ils : forment." },
      { t: "qcm", q: "« Le musicien tape, tire et … dans ses instruments. »", choix: ["souffle", "soufflent", "souffles"], r: "souffle", expl: "Un seul sujet au singulier : tous les verbes restent au singulier." }
    ],
    [
      { t: "trous", q: "Accorde le verbe au présent.", texte: "Awa et Fatou [chantent] (chanter). — Le chien [aboie] (aboyer). — Les enfants [jouent] (jouer). — Mon père et mon oncle [partent] (partir).", expl: "Deux sujets → pluriel ; un sujet singulier → singulier." },
      { t: "qcm", q: "« Les mangues du marché … très mûres. »", choix: ["sont", "est"], r: "sont", expl: "Le nom qui commande est « mangues » (pluriel), pas « marché »." },
      { t: "qcm", q: "« Le panier de mangues … lourd. »", choix: ["est", "sont"], r: "est", expl: "Le nom qui commande est « panier » (singulier), pas « mangues »." },
      { t: "saisie", q: "Accorde le verbe au présent : « Le lion et la hyène (chasser) la nuit. »", r: "chassent", expl: "Deux sujets au singulier → verbe au pluriel." },
      { t: "saisie", q: "Accorde le verbe au présent : « La fille de nos voisins (danser) bien. »", r: "danse", expl: "C'est « la fille » qui danse : singulier." },
      { t: "saisie", q: "Accorde le verbe au présent : « Les amis de Moussa (arriver) ce soir. »", r: "arrivent", expl: "C'est « les amis » qui arrivent : pluriel." },
      { t: "trous", q: "Un seul sujet, plusieurs verbes : accorde au présent.", texte: "Le berger [appelle] (appeler), [compte] (compter) et [rentre] (rentrer) ses moutons.", aide: "appeler double le l.", expl: "Un sujet au singulier : tous les verbes au singulier." },
      { t: "relier", q: "Relie chaque sujet au verbe bien accordé.", paires: [["Khady", "lave le linge."], ["Khady et sa sœur", "lavent le linge."], ["Les robes de Khady", "sèchent au soleil."], ["La robe des filles", "sèche au soleil."]], expl: "Cherche le nom qui commande dans chaque sujet." },
      { t: "vf", q: "« Le maître et le directeur parle. » est bien écrit.", r: false, expl: "Deux sujets → pluriel : le maître et le directeur parlent." }
    ],
    [
      { t: "qcm", q: "« Les cris des enfants … la maison. »", choix: ["remplissent", "remplit"], r: "remplissent", expl: "C'est « les cris » qui remplissent." },
      { t: "qcm", q: "« Le bruit des vagues … les pêcheurs. »", choix: ["berce", "bercent"], r: "berce", expl: "C'est « le bruit » qui berce, pas « les vagues »." },
      { t: "saisie", q: "Accorde le verbe au présent : « Dans la cour (jouer) Moussa et Ibrahima. »", r: "jouent", aide: "Le sujet est après le verbe.", expl: "Qui est-ce qui joue ? Moussa et Ibrahima : deux sujets → pluriel." },
      { t: "saisie", q: "Accorde le verbe au présent : « La voiture de mes parents (rouler) vite. »", r: "roule", expl: "C'est « la voiture » qui roule : singulier." },
      { t: "trous", q: "Accorde les verbes au présent.", texte: "Ma mère, ma tante et ma grand-mère [préparent] (préparer) le repas. Ma petite sœur [lave] (laver), [coupe] (couper) et [range] (ranger) les légumes.", expl: "Trois sujets → pluriel ; un seul sujet pour trois verbes → singulier." },
      { t: "vf", q: "« Les élèves de la classe écoute le maître. » est bien écrit.", r: false, expl: "Le nom qui commande est « élèves » : les élèves écoutent." },
      { t: "saisie", q: "Corrige le verbe : « Le car et le taxi arrive en même temps. »", r: "arrivent", expl: "Deux sujets au singulier → verbe au pluriel." }
    ],
    [
      { t: "dictee", texte: "Les chaussures neuves de Lalia brillent au soleil du matin.", expl: "C'est « chaussures » qui commande le verbe : brillent." },
      { t: "dictee", texte: "Le guitariste, le pianiste et le batteur forment un bel orchestre.", expl: "Plusieurs sujets au singulier : verbe au pluriel." },
      { t: "dictee", texte: "Le vieux pêcheur répare, nettoie et repeint sa pirogue.", expl: "Un sujet au singulier commande trois verbes au singulier." },
      { t: "trous", q: "Accorde les verbes au présent.", texte: "Au marché de Sandaga, les vendeuses de tissu [crient] (crier) fort. Une cliente [regarde] (regarder), [touche] (toucher) et [choisit] (choisir) un pagne. Son mari et son fils [attendent] (attendre) dehors.", expl: "vendeuses → pluriel ; une cliente → singulier pour les trois verbes ; deux sujets → pluriel." },
      { t: "qcm", q: "Quelle phrase est bien accordée ?", choix: ["Le troupeau de vaches traverse la route.", "Le troupeau de vaches traversent la route.", "Les vaches du troupeau traverse la route.", "Le troupeau et le berger traverse la route."], r: "Le troupeau de vaches traverse la route.", expl: "C'est « le troupeau » (singulier) qui traverse." }
    ]
  ]
});
