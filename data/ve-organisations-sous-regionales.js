// À VÉRIFIER (contradictions entre le cahier, photo 0113, et les sources officielles) :
//  - OMVG : le cahier dit « créée à Banjul » ; la convention a été signée à Kaolack (Sénégal) le 30 juin 1978.
//  - CILSS : le cahier donne Bamako comme siège ; le secrétariat exécutif du CILSS est à Ouagadougou (Burkina Faso).
//  - BOAD : le cahier dit « 11 novembre 1973 » ; l'accord créant la BOAD date du 14 novembre 1973.
//  Aucun exercice ne porte sur ces trois points ; le « Je retiens » donne la version juste et signale l'écart.
//  CILSS : le cahier écrit « Comité Inter-états de Lutte contre la Sécheresse au Sahel » ; nom officiel : Comité permanent Inter-États de Lutte contre la Sécheresse dans le Sahel.
LECONS.push({
  id: "ve-organisations-sous-regionales",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations sous-régionales ou ouest-africaines : sigles, créations et sièges",
  date: "2026-10-19",
  photos: ["DJI_20261118221514_0112_D.jpg", "DJI_20261118221519_0113_D.jpg"],
  retiens:
    "<p>Une <b>organisation sous-régionale</b> regroupe des pays d'une zone déterminée de l'Afrique, ici l'Afrique de l'Ouest.</p>" +
    "<table><tr><th>Sigle</th><th>Signification</th><th>Création</th><th>Siège</th></tr>" +
    "<tr><td><b>OMVS</b></td><td>Organisation pour la Mise en Valeur du fleuve Sénégal</td><td>11 mars 1972 à Nouakchott</td><td>Dakar (Sénégal)</td></tr>" +
    "<tr><td><b>OMVG</b></td><td>Organisation pour la Mise en Valeur du fleuve Gambie</td><td>30 juin 1978</td><td>Dakar (Sénégal)</td></tr>" +
    "<tr><td><b>CEDEAO</b></td><td>Communauté Économique des États de l'Afrique de l'Ouest</td><td>28 mai 1975 à Lagos</td><td>Abuja (Nigeria)</td></tr>" +
    "<tr><td><b>CILSS</b></td><td>Comité permanent Inter-États de Lutte contre la Sécheresse dans le Sahel</td><td>12 septembre 1973</td><td>Ouagadougou (Burkina Faso)</td></tr>" +
    "<tr><td><b>UEMOA</b></td><td>Union Économique et Monétaire Ouest-Africaine</td><td>10 janvier 1994 à Dakar</td><td>Ouagadougou (Burkina Faso)</td></tr>" +
    "<tr><td><b>BCEAO</b></td><td>Banque Centrale des États de l'Afrique de l'Ouest</td><td>12 mai 1962</td><td>Dakar (Sénégal)</td></tr>" +
    "<tr><td><b>BOAD</b></td><td>Banque Ouest-Africaine de Développement</td><td>14 novembre 1973</td><td>Lomé (Togo)</td></tr></table>" +
    "<p><b>NB</b> : le domaine d'intervention de chaque organisation se lit souvent dans la signification de son sigle.</p>" +
    "<p><i>Attention : ton cahier indique que l'OMVG a été créée à Banjul, que le siège du CILSS est à Bamako et que la BOAD date du 11 novembre 1973. Les documents officiels donnent Kaolack, Ouagadougou et le 14 novembre 1973. Demande à ton maître.</i></p>",
  astuce: "Trois sièges à <b>Dakar</b> : OMVS, OMVG et BCEAO. Deux à <b>Ouagadougou</b> : UEMOA et CILSS. La CEDEAO est à <b>Abuja</b>, la BOAD à <b>Lomé</b>.",
  regle: "Chaque sigle se lit lettre par lettre : la signification dit ce que fait l'organisation. Retiens pour chacune sa date de création et son siège.",
  niveaux: [
    [
      { t: "qcm", q: "Une organisation sous-régionale regroupe…", choix: ["des pays d'une zone déterminée de l'Afrique", "tous les pays du monde", "les villages d'une même région du Sénégal"], r: "des pays d'une zone déterminée de l'Afrique", expl: "Ici, la zone est l'Afrique de l'Ouest." },
      { t: "qcm", q: "Que veut dire <b>OMVS</b> ?", choix: ["Organisation pour la Mise en Valeur du fleuve Sénégal", "Organisation Mondiale des Villes du Sahel", "Office Malien de la Vallée du Sénégal"], r: "Organisation pour la Mise en Valeur du fleuve Sénégal", expl: "Le S final = fleuve Sénégal." },
      { t: "qcm", q: "Que veut dire <b>OMVG</b> ?", choix: ["Organisation pour la Mise en Valeur du fleuve Gambie", "Organisation pour la Mise en Valeur de la Guinée", "Office Mondial des Voyages en Gambie"], r: "Organisation pour la Mise en Valeur du fleuve Gambie", expl: "Le G final = fleuve Gambie." },
      { t: "vf", q: "La BCEAO est une banque.", r: true, expl: "BCEAO : Banque Centrale des États de l'Afrique de l'Ouest." },
      { t: "qcm", q: "Où se trouve le siège de la CEDEAO ?", choix: ["Abuja (Nigeria)", "Dakar (Sénégal)", "Lomé (Togo)"], r: "Abuja (Nigeria)", expl: "La CEDEAO a été créée à Lagos mais son siège est à Abuja." },
      { t: "vf", q: "Le siège de l'OMVS est à Dakar.", r: true, expl: "L'OMVS a été créée à Nouakchott, mais son siège est à Dakar." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["CEDEAO", "Communauté Économique des États de l'Afrique de l'Ouest"], ["UEMOA", "Union Économique et Monétaire Ouest-Africaine"], ["BCEAO", "Banque Centrale des États de l'Afrique de l'Ouest"], ["BOAD", "Banque Ouest-Africaine de Développement"], ["CILSS", "Lutte contre la Sécheresse dans le Sahel"]], expl: "Lis les lettres du sigle une par une." },
      { t: "relier", q: "Relie chaque organisation à son siège.", paires: [["CEDEAO", "Abuja"], ["UEMOA", "Ouagadougou"], ["BOAD", "Lomé"], ["BCEAO", "Dakar"]], expl: "Révise le tableau des sièges." },
      { t: "classer", q: "Le siège est-il à Dakar ?", cases: ["siège à Dakar", "siège ailleurs"], items: [["OMVS", "siège à Dakar"], ["OMVG", "siège à Dakar"], ["BCEAO", "siège à Dakar"], ["CEDEAO", "siège ailleurs"], ["UEMOA", "siège ailleurs"], ["BOAD", "siège ailleurs"]], expl: "Trois sièges à Dakar : OMVS, OMVG, BCEAO." },
      { t: "relier", q: "Relie chaque organisation à sa date de création.", paires: [["OMVS", "11 mars 1972"], ["CEDEAO", "28 mai 1975"], ["UEMOA", "10 janvier 1994"], ["BCEAO", "12 mai 1962"]], expl: "Révise les dates du tableau." },
      { t: "qcm", q: "Dans quelle ville l'UEMOA a-t-elle été créée ?", choix: ["Dakar", "Lagos", "Nouakchott"], r: "Dakar", expl: "L'UEMOA a été créée le 10 janvier 1994 à Dakar ; son siège est à Ouagadougou." },
      { t: "qcm", q: "Dans quelle ville la CEDEAO a-t-elle été créée ?", choix: ["Lagos", "Abuja", "Dakar"], r: "Lagos", expl: "Créée à Lagos le 28 mai 1975 ; siège à Abuja." },
      { t: "saisie", q: "Quel est le sigle de la Banque Ouest-Africaine de Développement ?", r: "BOAD", expl: "B-O-A-D." },
      { t: "saisie", q: "Dans quelle ville se trouve le siège de la BOAD ?", r: ["Lomé", "Lomé (Togo)"], expl: "La BOAD est à Lomé, au Togo." },
      { t: "vf", q: "L'OMVS a été créée à Nouakchott.", r: true, expl: "Le 11 mars 1972, à Nouakchott (Mauritanie)." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces organisations a son siège à Ouagadougou ?", choix: ["l'UEMOA", "la BCEAO", "l'OMVG", "la BOAD"], r: "l'UEMOA", expl: "L'UEMOA a été créée à Dakar, mais son siège est à Ouagadougou." },
      { t: "vf", q: "La CEDEAO a son siège dans la ville où elle a été créée.", r: false, expl: "Créée à Lagos, siège à Abuja : deux villes différentes du Nigeria." },
      { t: "qcm", q: "Quelle organisation est la plus ancienne ?", choix: ["la BCEAO (1962)", "l'OMVS (1972)", "la CEDEAO (1975)", "l'UEMOA (1994)"], r: "la BCEAO (1962)", expl: "1962 est l'année la plus ancienne de la liste." },
      { t: "qcm", q: "Quelle organisation est la plus récente ?", choix: ["l'UEMOA", "l'OMVG", "la CEDEAO", "l'OMVS"], r: "l'UEMOA", expl: "L'UEMOA date de 1994." },
      { t: "classer", q: "Range chaque organisation selon son domaine (lis la signification).", cases: ["un fleuve", "l'argent et la banque", "l'économie et l'intégration", "la sécheresse"], items: [["OMVS", "un fleuve"], ["OMVG", "un fleuve"], ["BCEAO", "l'argent et la banque"], ["BOAD", "l'argent et la banque"], ["CEDEAO", "l'économie et l'intégration"], ["UEMOA", "l'économie et l'intégration"], ["CILSS", "la sécheresse"]], expl: "Le domaine se lit dans la signification du sigle." },
      { t: "saisie", q: "En quelle année la CEDEAO a-t-elle été créée ?", r: "1975", nombre: true, expl: "Le 28 mai 1975, à Lagos." },
      { t: "saisie", q: "En quelle année l'UEMOA a-t-elle été créée ?", r: "1994", nombre: true, expl: "Le 10 janvier 1994, à Dakar." },
      { t: "vf", q: "L'OMVS et l'OMVG ont toutes les deux leur siège à Dakar.", r: true, expl: "Comme la BCEAO." }
    ],
    [
      { t: "trous", q: "Complète le tableau en phrases.", texte: "La CEDEAO a été créée le 28 mai 1975 à [Lagos] ; son siège est à [Abuja]. L'UEMOA a été créée le 10 janvier 1994 à [Dakar] ; son siège est à [Ouagadougou]. Le siège de la BOAD est à [Lomé].", expl: "Création et siège : ne les confonds pas." },
      { t: "probleme", q: "Calcule avec les dates du tableau.", etapes: [{ q: "Étape 1 : l'OMVS a été créée en 1972. Quel âge a-t-elle en 2026 ?", r: "54", unite: "ans" }, { q: "Étape 2 : la CEDEAO a été créée en 1975. Quel âge a-t-elle en 2026 ?", r: "51", unite: "ans" }, { q: "Étape 3 : combien d'années séparent la création de la BCEAO (1962) et celle de l'UEMOA (1994) ?", r: "32", unite: "ans" }], expl: "2026 − 1972 = 54 ; 2026 − 1975 = 51 ; 1994 − 1962 = 32." },
      { t: "qcm", q: "Moussa dit : « La BCEAO a son siège à Lomé. » A-t-il raison ?", choix: ["Non, la BCEAO est à Dakar ; c'est la BOAD qui est à Lomé.", "Oui, il a raison.", "Non, la BCEAO est à Abuja."], r: "Non, la BCEAO est à Dakar ; c'est la BOAD qui est à Lomé.", expl: "Ne confonds pas les deux banques : BCEAO à Dakar, BOAD à Lomé." },
      { t: "saisie", q: "Que veut dire le sigle UEMOA ?", r: ["Union Économique et Monétaire Ouest-Africaine", "Union Économique et Monétaire Ouest Africaine"], large: true, expl: "U (Union) E (Économique) M (Monétaire) O-A (Ouest-Africaine)." },
      { t: "relier", q: "Relie chaque organisation à son pays-siège.", paires: [["CEDEAO", "Nigeria"], ["BOAD", "Togo"], ["UEMOA", "Burkina Faso"], ["OMVS", "Sénégal"]], expl: "Abuja (Nigeria), Lomé (Togo), Ouagadougou (Burkina Faso), Dakar (Sénégal)." }
    ]
  ]
});
