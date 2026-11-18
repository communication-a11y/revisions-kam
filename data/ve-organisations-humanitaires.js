// Photo 0109 sombre et bougée : la mission de l'ONG Jamra est illisible en partie ; elle n'est pas reprise. Seuls les sigles bien lisibles et sûrs sont utilisés.
// Le cahier écrit « HCR = Haut-Commissariat pour les Réfugiés » ; nom complet : Haut-Commissariat des Nations unies pour les réfugiés.
LECONS.push({
  id: "ve-organisations-humanitaires",
  cahier: "vivre",
  matiere: "Vivre ensemble",
  titre: "Les organisations humanitaires ou caritatives",
  date: "2026-10-12",
  photos: ["DJI_20261118221450_0109_D.jpg"],
  retiens:
    "<p>Une <b>organisation caritative</b> est une association <b>à but non lucratif</b> dont l'objectif est de porter <b>secours et assistance</b> aux personnes dans le besoin. Parmi elles, on peut citer :</p>" +
    "<ul>" +
    "<li>l'<b>ONG Jamra</b> (islamique) ;</li>" +
    "<li><b>Caritas</b> (catholique), qui lutte contre les inégalités ;</li>" +
    "<li>la <b>RADDHO</b> : Rencontre Africaine pour la Défense des Droits de l'Homme ;</li>" +
    "<li>l'<b>ONDH</b> : Organisation Nationale des Droits de l'Homme ;</li>" +
    "<li>le <b>HCR</b> : Haut-Commissariat (des Nations unies) pour les Réfugiés ;</li>" +
    "<li>le <b>CNLS</b> : Conseil National de Lutte contre le Sida.</li>" +
    "</ul>" +
    "<p>Il y a aussi <b>Amnesty International Sénégal</b>, la <b>Croix-Rouge sénégalaise</b>…</p>",
  astuce: "« À but <b>non lucratif</b> » : elle ne cherche pas à gagner de l'argent (le « lucre »), elle cherche à <b>aider</b>.",
  regle: "Une organisation caritative ou humanitaire ne cherche pas à gagner de l'argent : elle porte secours et assistance aux personnes dans le besoin (Caritas, Jamra, RADDHO, ONDH, HCR, CNLS, Croix-Rouge…).",
  niveaux: [
    [
      { t: "qcm", q: "Une organisation caritative a pour objectif de…", choix: ["porter secours et assistance aux personnes dans le besoin", "gagner beaucoup d'argent", "organiser des matchs de football"], r: "porter secours et assistance aux personnes dans le besoin", expl: "C'est la définition du cahier." },
      { t: "qcm", q: "« À but non lucratif » veut dire…", choix: ["qui ne cherche pas à gagner de l'argent", "qui vend très cher", "qui travaille la nuit"], r: "qui ne cherche pas à gagner de l'argent", expl: "Lucratif = qui rapporte de l'argent ; non lucratif = l'inverse." },
      { t: "vf", q: "La Croix-Rouge sénégalaise est une organisation humanitaire.", r: true, expl: "Elle est citée au cahier." },
      { t: "vf", q: "Caritas est une organisation islamique.", r: false, expl: "Caritas est catholique ; c'est l'ONG Jamra qui est islamique." },
      { t: "qcm", q: "Le <b>CNLS</b> lutte contre…", choix: ["le sida", "la sécheresse", "les feux de brousse"], r: "le sida", expl: "CNLS : Conseil National de Lutte contre le Sida." }
    ],
    [
      { t: "relier", q: "Relie chaque sigle à sa signification.", paires: [["RADDHO", "Rencontre Africaine pour la Défense des Droits de l'Homme"], ["ONDH", "Organisation Nationale des Droits de l'Homme"], ["HCR", "Haut-Commissariat pour les Réfugiés"], ["CNLS", "Conseil National de Lutte contre le Sida"]], expl: "Le sigle reprend les premières lettres des mots importants." },
      { t: "classer", q: "Organisation religieuse ou non ?", cases: ["liée à une religion", "non religieuse"], items: [["l'ONG Jamra", "liée à une religion"], ["Caritas", "liée à une religion"], ["la RADDHO", "non religieuse"], ["le CNLS", "non religieuse"], ["le HCR", "non religieuse"], ["la Croix-Rouge sénégalaise", "non religieuse"]], expl: "Jamra est islamique, Caritas est catholique." },
      { t: "qcm", q: "Le <b>HCR</b> s'occupe…", choix: ["des réfugiés", "des élèves", "des sportifs"], r: "des réfugiés", expl: "HCR : Haut-Commissariat pour les Réfugiés." },
      { t: "qcm", q: "Deux organisations du cahier défendent les droits de l'homme. Lesquelles ?", choix: ["la RADDHO et l'ONDH", "le CNLS et le HCR", "Caritas et Jamra"], r: "la RADDHO et l'ONDH", expl: "Leurs sigles contiennent « DH » : Droits de l'Homme." },
      { t: "saisie", q: "Quel est le sigle du Conseil National de Lutte contre le Sida ?", r: "CNLS", expl: "C-N-L-S." },
      { t: "vf", q: "Caritas lutte contre les inégalités.", r: true, expl: "C'est ce que dit le cahier." },
      { t: "vf", q: "Une organisation caritative cherche surtout à faire des bénéfices.", r: false, expl: "Elle est à but non lucratif." },
      { t: "trous", q: "Complète.", texte: "Une organisation caritative est une association à but non [lucratif] dont l'objectif est de porter [secours] et assistance aux personnes dans le besoin.", expl: "Définition du cahier." }
    ],
    [
      { t: "qcm", q: "Quel sigle signifie « Rencontre Africaine pour la Défense des Droits de l'Homme » ?", choix: ["RADDHO", "ONDH", "HCR", "CNLS"], r: "RADDHO", expl: "R (Rencontre) A (Africaine) D (Défense) D (Droits) H (Homme) O." },
      { t: "qcm", q: "Des familles fuient la guerre et arrivent dans un pays voisin. Quelle organisation les aide ?", choix: ["le HCR", "le CNLS", "une ASC"], r: "le HCR", expl: "Ces familles sont des réfugiés : c'est le rôle du HCR." },
      { t: "classer", q: "Range chaque organisation selon ce dont elle s'occupe.", cases: ["droits de l'homme", "santé", "réfugiés"], items: [["la RADDHO", "droits de l'homme"], ["l'ONDH", "droits de l'homme"], ["Amnesty International Sénégal", "droits de l'homme"], ["le CNLS", "santé"], ["le HCR", "réfugiés"]], expl: "Le nom de l'organisation dit son domaine." },
      { t: "saisie", q: "Quel est le sigle de l'Organisation Nationale des Droits de l'Homme ?", r: "ONDH", expl: "O-N-D-H." },
      { t: "vf", q: "L'ONG Jamra est une organisation islamique.", r: true, expl: "Le cahier l'indique." },
      { t: "relier", q: "Relie chaque organisation à sa religion.", paires: [["Caritas", "catholique"], ["l'ONG Jamra", "islamique"]], expl: "Les deux exemples confessionnels du cahier." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "La RADDHO et l'ONDH défendent les [droits] de l'homme. Le HCR aide les [réfugiés]. Le CNLS lutte contre le [sida]. Caritas est une organisation [catholique].", expl: "Rôles des organisations du cahier." },
      { t: "qcm", q: "Après une inondation à Kaolack, des volontaires distribuent des couvertures et de la nourriture gratuitement. Quel type d'organisation agit ?", choix: ["une organisation humanitaire", "une entreprise commerciale", "un club de sport"], r: "une organisation humanitaire", expl: "Elle porte secours et assistance sans chercher de bénéfice." },
      { t: "relier", q: "Relie chaque sigle à son domaine.", paires: [["HCR", "les réfugiés"], ["CNLS", "le sida"], ["ONDH", "les droits de l'homme"]], expl: "Le domaine se lit dans le sigle." },
      { t: "vf", q: "Amnesty International Sénégal fait partie des organisations citées au cahier.", r: true, expl: "Avec la Croix-Rouge sénégalaise." },
      { t: "qcm", q: "Quel mot complète : « Une organisation caritative porte secours et … » ?", choix: ["assistance", "concurrence", "publicité"], r: "assistance", expl: "Secours et assistance : aider." }
    ]
  ]
});
