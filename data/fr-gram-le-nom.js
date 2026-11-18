LECONS.push({
  id: "fr-gram-le-nom",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le nom",
  date: "2026-09-29",
  photos: ["DJI_20261118220333_0027_D.jpg", "DJI_20261118220345_0028_D.jpg"],
  retiens:
    "<p>Les noms sont des mots qui désignent des <b>personnes</b>, des <b>animaux</b>, des <b>objets</b>, des <b>lieux</b>…</p>" +
    "<p>→ Les noms <b>communs</b> désignent les personnes, les animaux, les objets, les lieux… <b>en général</b>.</p>" +
    "<table><tr><th>nom commun</th><th>il désigne</th></tr>" +
    "<tr><td>garçon</td><td>une personne</td></tr><tr><td>lion</td><td>un animal</td></tr>" +
    "<tr><td>couteau</td><td>une chose (un objet)</td></tr><tr><td>maison</td><td>un lieu</td></tr></table>" +
    "<p>→ Les noms <b>propres</b> désignent les personnes, les animaux, les lieux <b>en particulier</b>. Ils commencent par une majuscule.<br>Ex : Omar, Ricky (un animal), Sénégal.</p>" +
    "<p><b>NB :</b> un nom commun a un <b>genre</b> (masculin ou féminin) et un <b>nombre</b> (singulier ou pluriel).</p>" +
    "<p><b>La fonction d'un nom</b> : le nom peut être <b>sujet du verbe</b> ou <b>complément</b> du nom ou du verbe.</p>",
  astuce: "Nom propre = <b>un seul</b> en particulier, avec une <b>majuscule</b> : Omar, Dakar. Nom commun = n'importe lequel : un garçon, une ville.",
  regle: "Le nom commun désigne en général (un garçon, une ville) ; le nom propre désigne en particulier et prend une majuscule (Omar, Dakar). Un nom commun a un genre et un nombre.",
  niveaux: [
    [
      { t: "qcm", q: "Quel mot est un nom ?", choix: ["manger", "maison", "joli", "vite"], r: "maison", expl: "« maison » désigne un lieu : c'est un nom." },
      { t: "qcm", q: "« lion » est un nom commun…", choix: ["de personne", "d'animal", "d'objet", "de lieu"], r: "d'animal", expl: "Le lion est un animal." },
      { t: "vf", q: "Un nom propre commence par une majuscule.", r: true, expl: "Omar, Sénégal, Dakar : les noms propres prennent une majuscule." },
      { t: "vf", q: "« garçon » est un nom propre.", r: false, expl: "« garçon » désigne n'importe quel garçon, en général : c'est un nom commun." },
      { t: "relier", q: "Relie chaque nom commun à ce qu'il désigne.", paires: [["garçon", "une personne"], ["lion", "un animal"], ["couteau", "un objet"], ["maison", "un lieu"]], expl: "Ce sont les exemples de la leçon." },
      { t: "classer", q: "Nom commun ou nom propre ?", cases: ["nom commun", "nom propre"], items: [["Omar", "nom propre"], ["ville", "nom commun"], ["Sénégal", "nom propre"], ["fleuve", "nom commun"], ["Thiès", "nom propre"], ["chien", "nom commun"]], expl: "Le nom propre désigne quelqu'un ou quelque chose en particulier et prend une majuscule." }
    ],
    [
      { t: "classer", q: "Range ces noms communs.", cases: ["personne", "animal", "objet", "lieu"], items: [["boulanger", "personne"], ["chèvre", "animal"], ["marmite", "objet"], ["marché", "lieu"], ["institutrice", "personne"], ["âne", "animal"], ["seau", "objet"], ["école", "lieu"]], expl: "Le nom désigne une personne, un animal, un objet ou un lieu." },
      { t: "qcm", q: "Quel est le genre du nom « pirogue » ?", choix: ["masculin", "féminin"], r: "féminin", expl: "On dit « une pirogue » : le nom est féminin." },
      { t: "qcm", q: "Quel est le nombre du nom « mangues » dans « des mangues » ?", choix: ["singulier", "pluriel"], r: "pluriel", expl: "Il y en a plusieurs : le nom est au pluriel." },
      { t: "qcm", q: "Dans « Ricky aboie », Ricky est…", choix: ["un nom commun de personne", "un nom propre d'animal", "un nom commun d'animal"], r: "un nom propre d'animal", expl: "Ricky est le nom d'un chien en particulier : c'est un nom propre d'animal." },
      { t: "saisie", q: "Écris ce nom propre avec sa majuscule : saint-louis", r: "Saint-Louis", casse: true, expl: "Les noms de villes sont des noms propres : majuscules." },
      { t: "vf", q: "« Dakar » est un nom propre de lieu.", r: true, expl: "Dakar est une ville en particulier." },
      { t: "trous", q: "Trouve un nom propre pour chaque nom commun (aide : Sénégal, Awa, Ziguinchor).", texte: "une fille : [Awa] — un pays : [Sénégal] — une ville : [Ziguinchor]", expl: "Le nom propre désigne une fille, un pays, une ville en particulier." },
      { t: "relier", q: "Relie chaque nom à son genre et son nombre.", paires: [["le lion", "masculin singulier"], ["la maison", "féminin singulier"], ["les couteaux", "masculin pluriel"], ["les chèvres", "féminin pluriel"]], expl: "Un nom commun a un genre et un nombre." },
      { t: "qcm", q: "Dans « Le pêcheur répare son filet », quel nom est sujet du verbe ?", choix: ["pêcheur", "filet", "répare"], r: "pêcheur", expl: "Qui est-ce qui répare ? Le pêcheur : il est sujet du verbe." }
    ],
    [
      { t: "qcm", q: "Dans « Awa lave le seau », quelle est la fonction du nom « seau » ?", choix: ["sujet du verbe", "complément du verbe", "nom propre"], r: "complément du verbe", expl: "« seau » complète le verbe « lave » : Awa lave quoi ? le seau." },
      { t: "qcm", q: "Dans « La maison de Fatou est neuve », quelle est la fonction du nom « Fatou » ?", choix: ["sujet du verbe", "complément du nom", "complément du verbe"], r: "complément du nom", expl: "« de Fatou » complète le nom « maison »." },
      { t: "vf", q: "« Nom propre » est une fonction du nom.", r: false, expl: "Nom propre est une sorte de nom. Les fonctions sont : sujet, complément du nom, complément du verbe." },
      { t: "saisie", q: "Corrige la phrase en mettant les majuscules aux noms propres : « moussa habite à kaolack. »", r: "Moussa habite à Kaolack.", large: true, casse: true, expl: "Moussa et Kaolack sont des noms propres." },
      { t: "classer", q: "Range ces noms selon leur genre.", cases: ["masculin", "féminin"], items: [["champ", "masculin"], ["charrette", "féminin"], ["mouton", "masculin"], ["calebasse", "féminin"], ["baobab", "masculin"], ["plage", "féminin"]], expl: "Mets « un » ou « une » devant le nom pour trouver son genre." },
      { t: "qcm", q: "Quel mot désigne un lieu <b>en particulier</b> ?", choix: ["la ville", "le village", "Rufisque", "le pays"], r: "Rufisque", expl: "Rufisque est un nom propre : une ville précise." }
    ],
    [
      { t: "dictee", texte: "Omar et son chien Ricky se promènent sur la plage de Yoff.", expl: "Omar, Ricky et Yoff sont des noms propres : majuscules." },
      { t: "trous", q: "Lis la phrase « Le berger de Thiès garde ses moutons » et réponds.", texte: "Le nom sujet du verbe : [berger] — Le nom propre : [Thiès] — Le nom complément du verbe : [moutons]", expl: "Qui est-ce qui garde ? le berger. Il garde quoi ? ses moutons. Thiès est un nom propre." },
      { t: "qcm", q: "Dans « Les amis de Fatou récitent la leçon », combien y a-t-il de noms communs ?", choix: ["un", "deux", "trois"], r: "deux", expl: "amis et leçon sont des noms communs ; Fatou est un nom propre." },
      { t: "relier", q: "Relie chaque nom souligné à sa fonction : « <b>Khady</b> donne le <b>livre</b> de <b>Moussa</b>. »", paires: [["Khady", "sujet du verbe"], ["livre", "complément du verbe"], ["Moussa", "complément du nom"]], expl: "Qui donne ? Khady. Elle donne quoi ? le livre. Le livre de qui ? de Moussa." },
      { t: "dictee", texte: "Au marché de Kaolack, ma tante vend des oignons et des tomates.", expl: "Kaolack prend une majuscule ; oignons et tomates sont au pluriel." }
    ]
  ]
});
