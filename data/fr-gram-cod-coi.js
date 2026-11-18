// À VÉRIFIER : le cahier dit « On ne peut pas le supprimer » (le COD), avec l'exemple « Louise regarde la télévision », alors que « Louise regarde » garde un sens. Le module écrit « En général, on ne peut pas le supprimer » et n'en fait pas une règle absolue.
// Corrections : « COD du verbe regarde » → « du verbe regarder » ; « COI de s'intisser » → « s'intéresser ».
LECONS.push({
  id: "fr-gram-cod-coi",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément d'objet direct (COD) et le complément d'objet indirect (COI)",
  date: "2026-10-20",
  photos: ["DJI_20261118220547_0044_D.jpg", "DJI_20261118220552_0045_D.jpg"],
  retiens:
    "<p>→ Le <b>complément d'objet direct (COD)</b> complète le verbe. En général, on ne peut pas le supprimer. Il est placé <b>directement après le verbe</b>, sans petit mot entre les deux.<br>Ex : Louise regarde <b>la télévision</b>. « la télévision » est le COD du verbe regarder.</p>" +
    "<p>→ Pour trouver le COD, on pose la question <b>qui ?</b> ou <b>quoi ?</b> après le verbe.<br>Ex : Louise regarde quoi ? la télévision.</p>" +
    "<p>→ Le <b>complément d'objet indirect (COI)</b> complète aussi le verbe, mais il est relié au verbe par un petit mot appelé <b>préposition</b> (à, de…).<br>Ex : Le chanteur parle <b>à</b> ses admirateurs. Le chanteur parle <b>de</b> ses succès musicaux.</p>" +
    "<p>→ Pour trouver le COI, on pose la question <b>à qui ? à quoi ?</b> ou <b>de qui ? de quoi ?</b> après le verbe.<br>Ex : Le chanteur parle à qui ? à ses admirateurs.</p>" +
    "<p><b>Exemple d'analyse</b><br>La directrice félicite l'élève. Elle s'intéresse à son travail.<br><b>l'élève</b> : groupe nominal, COD de féliciter.<br><b>travail</b> : nom commun, COI de s'intéresser.</p>",
  astuce: "COD : <b>D</b> comme <b>D</b>irect, rien entre le verbe et lui. COI : <b>I</b> comme <b>I</b>ndirect, il y a un petit pont (à, de) entre le verbe et lui.",
  regle: "COD : verbe + qui ? ou quoi ? (sans préposition). COI : verbe + à qui ? à quoi ? de qui ? de quoi ? (avec une préposition).",
  niveaux: [
    [
      { t: "qcm", q: "Pour trouver le COD, on pose après le verbe la question…", choix: ["qui ? ou quoi ?", "à qui ? ou de quoi ?", "où ? ou quand ?"], r: "qui ? ou quoi ?", expl: "COD : verbe + qui ? ou quoi ?" },
      { t: "qcm", q: "Pour trouver le COI, on pose après le verbe la question…", choix: ["qui ? ou quoi ?", "à qui ? à quoi ? de qui ? de quoi ?", "comment ?"], r: "à qui ? à quoi ? de qui ? de quoi ?", expl: "Le COI est relié au verbe par une préposition (à, de)." },
      { t: "qcm", q: "« Louise regarde la télévision. » Le COD est…", choix: ["Louise", "regarde", "la télévision"], r: "la télévision", expl: "Louise regarde quoi ? la télévision." },
      { t: "qcm", q: "« Le chanteur parle à ses admirateurs. » Le COI est…", choix: ["Le chanteur", "à ses admirateurs", "parle"], r: "à ses admirateurs", expl: "Le chanteur parle à qui ? à ses admirateurs." },
      { t: "vf", q: "Le COI est relié au verbe par une préposition.", r: true, expl: "à, de… sont des prépositions." },
      { t: "vf", q: "Le COD est relié au verbe par une préposition.", r: false, expl: "Le COD est placé directement après le verbe, sans préposition." }
    ],
    [
      { t: "classer", q: "Le groupe en gras est-il COD ou COI ?", cases: ["COD", "COI"], items: [["Awa mange <b>une mangue</b>.", "COD"], ["Awa pense <b>à sa mère</b>.", "COI"], ["Moussa lave <b>la voiture</b>.", "COD"], ["Moussa parle <b>de son voyage</b>.", "COI"], ["Fatou écoute <b>la radio</b>.", "COD"], ["Fatou obéit <b>à son père</b>.", "COI"], ["Le berger garde <b>ses moutons</b>.", "COD"], ["Il se souvient <b>de son village</b>.", "COI"]], expl: "Pas de préposition : COD. Avec à ou de : COI." },
      { t: "saisie", q: "Écris le COD : « Khady prépare le thiéboudienne. »", r: "le thiéboudienne", expl: "Khady prépare quoi ? le thiéboudienne." },
      { t: "saisie", q: "Écris le COD : « Le maître appelle Ibrahima. »", r: "Ibrahima", expl: "Le maître appelle qui ? Ibrahima." },
      { t: "saisie", q: "Écris le COI : « Les élèves répondent au maître. »", r: "au maître", expl: "Les élèves répondent à qui ? au maître (au = à + le)." },
      { t: "saisie", q: "Écris le COI : « Mamadou rêve de la mer. »", r: "de la mer", expl: "Mamadou rêve de quoi ? de la mer." },
      { t: "qcm", q: "« Le chanteur parle de ses succès musicaux. » Quelle question permet de trouver le COI ?", choix: ["parle de quoi ?", "parle qui ?", "parle où ?"], r: "parle de quoi ?", expl: "Le chanteur parle de quoi ? de ses succès musicaux." },
      { t: "qcm", q: "Dans « Le chanteur parle à ses admirateurs », quelle est la préposition ?", choix: ["à", "ses", "parle"], r: "à", expl: "« à » relie le verbe à son COI." },
      { t: "relier", q: "Relie chaque phrase à la nature de son complément.", paires: [["Je bois du lait.", "COD"], ["Je pense à toi.", "COI"], ["Je cueille des fleurs.", "COD"], ["Je parle de l'école.", "COI"]], expl: "Avec à ou de juste après le verbe : COI." },
      { t: "vf", q: "Dans « Awa téléphone à sa tante », « à sa tante » est un COD.", r: false, expl: "Il y a la préposition « à » : c'est un COI." }
    ],
    [
      { t: "qcm", q: "« La directrice félicite l'élève. » Analyse « l'élève ».", choix: ["groupe nominal, COD de féliciter", "groupe nominal, COI de féliciter", "nom propre, sujet de féliciter"], r: "groupe nominal, COD de féliciter", expl: "La directrice félicite qui ? l'élève, sans préposition : COD." },
      { t: "qcm", q: "« Elle s'intéresse à son travail. » Analyse « travail ».", choix: ["nom commun, COI de s'intéresser", "nom commun, COD de s'intéresser", "nom commun, sujet de s'intéresser"], r: "nom commun, COI de s'intéresser", expl: "Elle s'intéresse à quoi ? à son travail : COI." },
      { t: "vf", q: "Dans « Le car va à Thiès », « à Thiès » est un COI.", r: false, expl: "« à Thiès » répond à la question où ? : c'est un lieu, pas un COI. Le COI répond à « à qui ? à quoi ? de qui ? de quoi ? »." },
      { t: "qcm", q: "Dans « Ibrahima aide sa grand-mère », le complément est…", choix: ["COD", "COI"], r: "COD", expl: "On dit « aider quelqu'un » : Ibrahima aide qui ? sa grand-mère, sans préposition." },
      { t: "qcm", q: "Dans « Ibrahima obéit à sa grand-mère », le complément est…", choix: ["COD", "COI"], r: "COI", expl: "On dit « obéir à quelqu'un » : il y a la préposition à." },
      { t: "trous", q: "Écris COD ou COI pour chaque groupe en gras.", texte: "Aïssatou écrit <b>une lettre</b> ([COD]). Elle pense <b>à son frère</b> ([COI]). Elle parle <b>de sa nouvelle école</b> ([COI]). Elle poste <b>la lettre</b> ([COD]).", expl: "Avec à ou de : COI. Sans préposition : COD." },
      { t: "ordre", q: "Remets les mots dans l'ordre (la phrase contient un COI).", r: "Les enfants obéissent à leurs parents.", expl: "obéir à qui ? à leurs parents : COI." }
    ],
    [
      { t: "dictee", texte: "Le pêcheur répare son filet et parle de sa pêche avec fierté.", expl: "« son filet » : COD de réparer ; « de sa pêche » : COI de parler." },
      { t: "trous", q: "Trouve le complément de chaque verbe et écris sa nature.", texte: "Moussa achète du pain : complément [du pain], nature [COD]. — Moussa pense à son examen : complément [à son examen], nature [COI].", expl: "achète quoi ? (COD) ; pense à quoi ? (COI)." },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un COI ?", choix: ["Khady se moque de son frère.", "Khady regarde son frère.", "Khady appelle son frère.", "Khady attend son frère."], r: "Khady se moque de son frère.", expl: "se moquer de qui ? de son frère : il y a une préposition." },
      { t: "classer", q: "Range ces verbes : se construisent-ils avec un COD ou avec un COI ?", cases: ["avec un COD", "avec un COI"], items: [["manger (quelque chose)", "avec un COD"], ["penser (à quelque chose)", "avec un COI"], ["lire (quelque chose)", "avec un COD"], ["parler (de quelque chose)", "avec un COI"], ["construire (quelque chose)", "avec un COD"], ["obéir (à quelqu'un)", "avec un COI"]], expl: "Si le verbe demande à ou de, son complément est un COI." },
      { t: "dictee", texte: "Fatou lave les assiettes, puis elle téléphone à sa cousine de Saint-Louis.", expl: "« les assiettes » : COD ; « à sa cousine » : COI." }
    ]
  ]
});
