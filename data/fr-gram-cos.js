// Correction : « Il faut pas confondre » → « Il ne faut pas confondre ».
LECONS.push({
  id: "fr-gram-cos",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément d'objet second (COS)",
  date: "2026-10-22",
  photos: ["DJI_20261118220559_0046_D.jpg"],
  retiens:
    "<p>Les verbes comme <b>donner, offrir, ordonner, rendre, écrire, demander, distribuer, envoyer, enseigner…</b> peuvent avoir un <b>COD</b> et un <b>COS</b>.</p>" +
    "<p>Le COS s'appelle aussi le <b>complément d'attribution (CA)</b>.</p>" +
    "<p>Ex : Le professeur enseigne <b>la géographie</b> (COD) <b>à ses élèves</b> (COS).</p>" +
    "<p><b>Exemple d'analyse</b><br><b>ses élèves</b> : groupe nominal, COS ou CA du verbe enseigner.</p>" +
    "<p><b>NB :</b> il ne faut pas confondre le CA et l'attribut du sujet.</p>",
  astuce: "Pose deux questions : enseigne <b>quoi ?</b> → la géographie (COD) ; enseigne la géographie <b>à qui ?</b> → à ses élèves (COS). Le COS vient en <b>second</b>, après le COD.",
  regle: "Avec des verbes comme donner, offrir, envoyer, enseigner, le COD répond à « quoi ? » et le COS (ou complément d'attribution) répond à « à qui ? »",
  niveaux: [
    [
      { t: "qcm", q: "Le COS s'appelle aussi…", choix: ["le complément d'attribution", "le complément du nom", "l'attribut du sujet"], r: "le complément d'attribution", expl: "COS = complément d'objet second = complément d'attribution (CA)." },
      { t: "qcm", q: "Quel verbe peut avoir un COD et un COS ?", choix: ["donner", "dormir", "tomber"], r: "donner", expl: "On donne quelque chose (COD) à quelqu'un (COS)." },
      { t: "qcm", q: "« Le professeur enseigne la géographie à ses élèves. » Le COS est…", choix: ["la géographie", "à ses élèves", "Le professeur"], r: "à ses élèves", expl: "Il enseigne la géographie à qui ? à ses élèves." },
      { t: "qcm", q: "Dans la même phrase, le COD est…", choix: ["la géographie", "à ses élèves", "enseigne"], r: "la géographie", expl: "Il enseigne quoi ? la géographie." },
      { t: "vf", q: "« offrir », « envoyer » et « distribuer » peuvent avoir un COS.", r: true, expl: "On offre, on envoie, on distribue quelque chose à quelqu'un." },
      { t: "vf", q: "CA et attribut du sujet, c'est la même chose.", r: false, expl: "La leçon dit qu'il ne faut pas les confondre." }
    ],
    [
      { t: "saisie", q: "Écris le COS : « Awa offre un cadeau à sa mère. »", r: "à sa mère", expl: "Awa offre un cadeau à qui ? à sa mère." },
      { t: "saisie", q: "Écris le COD : « Awa offre un cadeau à sa mère. »", r: "un cadeau", expl: "Awa offre quoi ? un cadeau." },
      { t: "saisie", q: "Écris le COS : « Le facteur distribue les lettres aux habitants. »", r: "aux habitants", expl: "Il distribue les lettres à qui ? aux habitants." },
      { t: "saisie", q: "Écris le COS : « Moussa envoie un message à son oncle. »", r: "à son oncle", expl: "Il envoie un message à qui ? à son oncle." },
      { t: "classer", q: "Range les groupes en gras : COD ou COS ?", cases: ["COD", "COS"], items: [["Je donne <b>du mil</b> aux poules.", "COD"], ["Je donne du mil <b>aux poules</b>.", "COS"], ["Il rend <b>le livre</b> à Fatou.", "COD"], ["Il rend le livre <b>à Fatou</b>.", "COS"], ["Elle écrit <b>une lettre</b> à son amie.", "COD"], ["Elle écrit une lettre <b>à son amie</b>.", "COS"]], expl: "quoi ? → COD ; à qui ? → COS." },
      { t: "relier", q: "Relie chaque question au complément qu'elle permet de trouver.", paires: [["donne quoi ?", "COD"], ["donne à qui ?", "COS"], ["qui donne ?", "sujet"]], expl: "Trois questions, trois fonctions." },
      { t: "qcm", q: "« Le maître demande le silence aux élèves. » Le COS est…", choix: ["le silence", "aux élèves", "Le maître"], r: "aux élèves", expl: "Il demande le silence à qui ? aux élèves." },
      { t: "trous", q: "Complète chaque phrase avec un COS (aide : à son frère, aux enfants, au vendeur).", texte: "Papa distribue des bonbons [aux enfants]. — Je rends la monnaie [au vendeur]. — Khady prête son vélo [à son frère].", expl: "Le COS répond à la question « à qui ? »." },
      { t: "vf", q: "Dans « Le berger garde ses moutons », il y a un COS.", r: false, expl: "Il y a seulement un COD (ses moutons). « garder » n'a pas ici de complément « à qui ? »." }
    ],
    [
      { t: "qcm", q: "Analyse « ses élèves » dans « Le professeur enseigne la géographie à ses élèves ».", choix: ["groupe nominal, COS ou CA du verbe enseigner", "groupe nominal, COD du verbe enseigner", "nom commun, sujet du verbe enseigner"], r: "groupe nominal, COS ou CA du verbe enseigner", expl: "C'est l'analyse du cahier." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un COD <b>et</b> un COS ?", choix: ["Ibrahima vend des arachides aux passants.", "Ibrahima vend des arachides.", "Ibrahima marche vers le marché.", "Ibrahima parle à son ami."], r: "Ibrahima vend des arachides aux passants.", expl: "vend quoi ? des arachides (COD) ; à qui ? aux passants (COS)." },
      { t: "vf", q: "Dans « Le maître écrit au tableau », « au tableau » est un COS.", r: false, expl: "« au tableau » répond à la question où ? : c'est un lieu, pas un COS." },
      { t: "saisie", q: "Ajoute le COS « à sa sœur » à la phrase : « Aïssatou raconte une histoire. »", r: "Aïssatou raconte une histoire à sa sœur.", large: true, expl: "Le COS se place en général après le COD." },
      { t: "ordre", q: "Remets les mots dans l'ordre.", r: "Le vendeur rend la monnaie au client.", expl: "rend quoi ? la monnaie (COD) ; à qui ? au client (COS)." },
      { t: "trous", q: "Écris COD ou COS sous chaque groupe en gras.", texte: "Grand-mère offre <b>un pagne</b> ([COD]) <b>à Khady</b> ([COS]).", expl: "offre quoi ? (COD) ; à qui ? (COS)." }
    ],
    [
      { t: "dictee", texte: "Le chef du village distribue des sacs de riz aux familles pauvres.", expl: "« des sacs de riz » : COD ; « aux familles pauvres » : COS." },
      { t: "dictee", texte: "Mamadou a envoyé une belle carte à sa tante de Ziguinchor.", expl: "« une belle carte » : COD ; « à sa tante de Ziguinchor » : COS." },
      { t: "trous", q: "Trouve le COD et le COS : « L'infirmière donne un médicament au malade. »", texte: "COD : [un médicament] — COS : [au malade]", expl: "donne quoi ? un médicament ; à qui ? au malade." },
      { t: "classer", q: "Ces phrases ont-elles un COS ?", cases: ["avec un COS", "sans COS"], items: [["Je prête mon stylo à Awa.", "avec un COS"], ["Je range mon stylo.", "sans COS"], ["Il offre des fleurs à sa mère.", "avec un COS"], ["Il arrose les fleurs.", "sans COS"], ["Elle envoie une lettre à son père.", "avec un COS"], ["Elle lit une lettre.", "sans COS"]], expl: "Le COS répond à « à qui ? » après le COD." },
      { t: "qcm", q: "Quel verbe de la liste du cahier complète la phrase ? « Le maître … la leçon à ses élèves. »", choix: ["enseigne", "dort", "arrive"], r: "enseigne", expl: "enseigner quelque chose (COD) à quelqu'un (COS)." }
    ]
  ]
});
