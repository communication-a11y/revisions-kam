// À VÉRIFIER :
//  - Photo 0114 bougée : la liste des pays membres du CILSS est en grande partie devinée ; elle n'est pas reprise et aucun exercice n'y touche.
//  - CEDEAO « 14 pays dont le Sénégal » (0116) : nombre douteux (15 membres jusqu'en 2024, 12 depuis le retrait du Mali, du Burkina Faso et du Niger en janvier 2025). Le module écrit « plusieurs pays d'Afrique de l'Ouest, dont le Sénégal », sans nombre.
//  - BOAD « 7 pays dont le Sénégal » (0116) : la BOAD est la banque de développement des 8 pays de l'UEMOA. Aucun exercice sur ce nombre.
//  - Manantali (0117) : « situé à 90 km de Fouladou » non repris (probablement Bafoulabé, au Mali) ; « barrage régulier » corrigé en « barrage régulateur » ; « Il est conduit » corrigé en « Il est construit ».
LECONS.push({
  id: "ve-fonctionnement-sous-regionales",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Le fonctionnement des organisations sous-régionales",
  date: "2026-11-02",
  photos: ["DJI_20261118221528_0114_D.jpg", "DJI_20261118221544_0116_D.jpg", "DJI_20261118221607_0117_D.jpg"],
  retiens:
    "<table><tr><th>Sigle</th><th>Missions ou buts</th><th>Pays membres</th></tr>" +
    "<tr><td><b>OMVG</b></td><td>exploiter de façon rationnelle et harmonieuse les ressources du fleuve Gambie ; réaliser des barrages de retenue</td><td>Sénégal, Gambie, Guinée-Bissau, Guinée</td></tr>" +
    "<tr><td><b>OMVS</b></td><td>développer l'agriculture irriguée ; produire de l'énergie hydroélectrique ; la pêche ; la navigation sur le fleuve</td><td>Sénégal, Mali, Mauritanie, Guinée</td></tr>" +
    "<tr><td><b>CILSS</b></td><td>rechercher la sécurité alimentaire et lutter contre les effets de la sécheresse</td><td>des pays du Sahel et d'Afrique de l'Ouest, dont le Sénégal</td></tr>" +
    "<tr><td><b>CEDEAO</b></td><td>promouvoir la coopération et l'intégration entre les États membres ; maintenir la paix et la sécurité dans la sous-région</td><td>des pays d'Afrique de l'Ouest, dont le Sénégal</td></tr>" +
    "<tr><td><b>UEMOA</b></td><td>promouvoir le développement et l'intégration économique des États membres (un tarif extérieur commun)</td><td>8 pays, dont le Sénégal</td></tr>" +
    "<tr><td><b>BCEAO</b></td><td>définir et mettre en œuvre la politique monétaire ; veiller à la stabilité du système bancaire et financier</td><td>8 pays, dont le Sénégal</td></tr>" +
    "<tr><td><b>BOAD</b></td><td>promouvoir le développement équilibré des États membres et contribuer à l'intégration économique de l'Afrique de l'Ouest</td><td>les pays de l'UEMOA, dont le Sénégal</td></tr></table>" +
    "<p><b>NB</b> : grâce à l'OMVS, deux barrages ont été réalisés :</p>" +
    "<ul><li>le barrage de <b>Manantali</b>, au <b>Mali</b> : c'est un barrage <b>régulateur</b> et <b>hydroélectrique</b>. Il fournit une énergie propre (l'électricité) ;</li>" +
    "<li>le barrage de <b>Diama</b>, à environ 25 km de <b>Saint-Louis</b> (Sénégal) : c'est un barrage <b>anti-sel</b>. Il est construit pour empêcher l'eau salée de la mer de remonter le fleuve.</li></ul>",
  astuce: "<b>Diama</b> arrête le <b>sel</b> (près de Saint-Louis, au bord de la mer) ; <b>Manantali</b> donne la <b>lumière</b> (l'électricité, au Mali).",
  regle: "Chaque organisation a sa mission : les fleuves pour l'OMVS et l'OMVG, la sécheresse pour le CILSS, la paix et l'intégration pour la CEDEAO, l'économie pour l'UEMOA, la monnaie pour la BCEAO, le développement pour la BOAD.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle organisation lutte contre les effets de la sécheresse ?", choix: ["le CILSS", "la BCEAO", "l'OMVG"], r: "le CILSS", expl: "CILSS : Lutte contre la Sécheresse dans le Sahel." },
      { t: "qcm", q: "Quelle organisation s'occupe de la politique monétaire (la monnaie) ?", choix: ["la BCEAO", "le CILSS", "l'OMVS"], r: "la BCEAO", expl: "La Banque Centrale définit la politique monétaire." },
      { t: "vf", q: "La CEDEAO veut maintenir la paix et la sécurité dans la sous-région.", r: true, expl: "C'est une de ses deux missions au cahier." },
      { t: "qcm", q: "Le barrage de Diama est un barrage…", choix: ["anti-sel", "de pêche", "de football"], r: "anti-sel", expl: "Il empêche l'eau salée de la mer de remonter le fleuve." },
      { t: "qcm", q: "Dans quel pays se trouve le barrage de Manantali ?", choix: ["au Mali", "au Sénégal", "en Gambie"], r: "au Mali", expl: "Manantali est au Mali ; Diama est près de Saint-Louis, au Sénégal." },
      { t: "vf", q: "Les barrages de Manantali et de Diama ont été réalisés grâce à l'OMVS.", r: true, expl: "C'est le NB de la leçon." }
    ],
    [
      { t: "relier", q: "Relie chaque organisation à sa mission.", paires: [["OMVS", "agriculture irriguée et énergie hydroélectrique"], ["CILSS", "sécurité alimentaire et lutte contre la sécheresse"], ["CEDEAO", "coopération, intégration, paix et sécurité"], ["BCEAO", "politique monétaire"], ["OMVG", "ressources du fleuve Gambie"]], expl: "La mission se lit souvent dans la signification du sigle." },
      { t: "classer", q: "Pays membre de l'OMVS ou de l'OMVG ? (le Sénégal et la Guinée sont dans les deux : ils ne sont pas dans la liste)", cases: ["OMVS seulement", "OMVG seulement"], items: [["Mali", "OMVS seulement"], ["Mauritanie", "OMVS seulement"], ["Gambie", "OMVG seulement"], ["Guinée-Bissau", "OMVG seulement"]], expl: "OMVS : Sénégal, Mali, Mauritanie, Guinée. OMVG : Sénégal, Gambie, Guinée-Bissau, Guinée." },
      { t: "qcm", q: "Combien de pays sont membres de l'UEMOA ?", choix: ["8", "4", "20"], r: "8", expl: "L'UEMOA compte 8 pays, dont le Sénégal." },
      { t: "qcm", q: "Quels pays sont membres de l'OMVS ?", choix: ["Sénégal, Mali, Mauritanie, Guinée", "Sénégal, Gambie, Guinée-Bissau, Guinée", "Sénégal, Nigeria, Togo, Bénin"], r: "Sénégal, Mali, Mauritanie, Guinée", expl: "Ce sont les pays traversés par le fleuve Sénégal et ses sources." },
      { t: "qcm", q: "Quels pays sont membres de l'OMVG ?", choix: ["Sénégal, Gambie, Guinée-Bissau, Guinée", "Sénégal, Mali, Mauritanie, Guinée", "Gambie, Ghana, Togo, Niger"], r: "Sénégal, Gambie, Guinée-Bissau, Guinée", expl: "Les pays liés au fleuve Gambie." },
      { t: "vf", q: "Le barrage de Manantali produit de l'électricité.", r: true, expl: "C'est un barrage hydroélectrique : il fournit une énergie propre." },
      { t: "vf", q: "Le barrage de Diama sert surtout à produire de l'électricité.", r: false, expl: "Diama est un barrage anti-sel : il retient l'eau salée." },
      { t: "saisie", q: "Comment s'appelle le barrage anti-sel construit près de Saint-Louis ?", r: ["Diama", "le barrage de Diama", "barrage de Diama"], expl: "Diama, à environ 25 km de Saint-Louis." },
      { t: "trous", q: "Complète.", texte: "L'UEMOA promeut le développement et l'intégration [économique] des États membres. La BCEAO veille à la stabilité du système [bancaire] et financier.", expl: "Économie pour l'UEMOA, banques pour la BCEAO." }
    ],
    [
      { t: "qcm", q: "Que veut dire « barrage <b>régulateur</b> » ?", choix: ["il contrôle la quantité d'eau du fleuve toute l'année", "il arrête les bateaux", "il fabrique du sel"], r: "il contrôle la quantité d'eau du fleuve toute l'année", expl: "Réguler, c'est rendre régulier : le barrage garde l'eau et la relâche selon les besoins." },
      { t: "qcm", q: "Pourquoi l'OMVS développe-t-elle l'agriculture irriguée ?", choix: ["pour cultiver même en saison sèche grâce à l'eau du fleuve", "pour arrêter la pêche", "pour faire avancer la mer"], r: "pour cultiver même en saison sèche grâce à l'eau du fleuve", expl: "Irriguer, c'est apporter de l'eau aux champs." },
      { t: "classer", q: "Range chaque mission sous la bonne organisation.", cases: ["CEDEAO", "UEMOA", "BCEAO"], items: [["maintenir la paix et la sécurité", "CEDEAO"], ["promouvoir la coopération entre États", "CEDEAO"], ["un tarif extérieur commun", "UEMOA"], ["l'intégration économique", "UEMOA"], ["la politique monétaire", "BCEAO"], ["la stabilité du système bancaire", "BCEAO"]], expl: "Paix pour la CEDEAO, économie pour l'UEMOA, monnaie pour la BCEAO." },
      { t: "vf", q: "La BOAD est une banque qui aide au développement des pays de l'Afrique de l'Ouest.", r: true, expl: "BOAD : Banque Ouest-Africaine de Développement." },
      { t: "relier", q: "Relie chaque barrage à ce qui le caractérise.", paires: [["Manantali", "régulateur et hydroélectrique, au Mali"], ["Diama", "anti-sel, près de Saint-Louis"]], expl: "Manantali = électricité ; Diama = contre le sel." },
      { t: "saisie", q: "Quelle organisation a fait construire les barrages de Manantali et de Diama ? (sigle)", r: "OMVS", expl: "Organisation pour la Mise en Valeur du fleuve Sénégal." },
      { t: "vf", q: "La BCEAO compte 8 pays membres, dont le Sénégal.", r: true, expl: "Ce sont les mêmes 8 pays que l'UEMOA." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Grâce à l'[OMVS], deux barrages ont été construits. Le barrage de [Manantali], au Mali, produit de l'énergie [hydroélectrique]. Le barrage de [Diama], près de Saint-Louis, est un barrage [anti-sel].", expl: "Les deux barrages de l'OMVS." },
      { t: "qcm", q: "Les paysans de Podor arrosent leurs rizières toute l'année avec l'eau du fleuve Sénégal. Quelle mission de l'OMVS cela montre-t-il ?", choix: ["le développement de l'agriculture irriguée", "la politique monétaire", "le maintien de la paix"], r: "le développement de l'agriculture irriguée", expl: "Irriguer les rizières grâce au fleuve : agriculture irriguée." },
      { t: "qcm", q: "Deux pays voisins se disputent. Quelle organisation sous-régionale a pour mission de maintenir la paix ?", choix: ["la CEDEAO", "l'OMVG", "la BOAD"], r: "la CEDEAO", expl: "La CEDEAO veut maintenir la paix et la sécurité dans la sous-région." },
      { t: "classer", q: "Range chaque organisation selon son domaine.", cases: ["l'eau des fleuves", "l'argent", "la sécheresse"], items: [["OMVS", "l'eau des fleuves"], ["OMVG", "l'eau des fleuves"], ["BCEAO", "l'argent"], ["BOAD", "l'argent"], ["CILSS", "la sécheresse"]], expl: "Fleuves, banques, sécheresse." },
      { t: "qcm", q: "Pourquoi construire un barrage anti-sel à Diama ?", choix: ["pour que l'eau salée de la mer ne gâte pas les terres et l'eau douce du fleuve", "pour produire du sel", "pour faire venir la mer à Podor"], r: "pour que l'eau salée de la mer ne gâte pas les terres et l'eau douce du fleuve", expl: "Le barrage retient les eaux salées près de l'embouchure." }
    ]
  ]
});
