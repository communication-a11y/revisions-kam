// À VÉRIFIER : dans cette leçon, le cahier abrège « CCM » pour le complément de MANIÈRE ; dans la leçon du 10 novembre, « CCM » désigne le complément de MOYEN. Le module écrit « CC de manière » en entier pour éviter la confusion.
// Corrections : « chambre : CCL » → « dans sa chambre : CCL » ; « A force du travailler : CC Cause d'aller tomber » → « à force de travailler : CC de cause de tomber » ; « Avec précaution : G N » → nature non reprise (c'est un groupe introduit par une préposition).
LECONS.push({
  id: "fr-gram-complements-circonstanciels",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les compléments circonstanciels (CC)",
  date: "2026-11-03",
  photos: ["DJI_20261118220623_0049_D.jpg", "DJI_20261118220630_0050_D.jpg"],
  retiens:
    "<p>Dans une phrase, les <b>compléments circonstanciels</b> apportent des précisions de <b>temps</b>, de <b>lieu</b>, de <b>manière</b>, de <b>cause</b>… En général, le CC peut être <b>supprimé</b> ou <b>déplacé</b>. On les appelle aussi les <b>compléments de phrase</b>.</p>" +
    "<p>Pour les trouver, on pose une question après le verbe :</p>" +
    "<table><tr><th>complément</th><th>question</th></tr>" +
    "<tr><td>CC de temps (CCT)</td><td>quand ?</td></tr>" +
    "<tr><td>CC de lieu (CCL)</td><td>où ?</td></tr>" +
    "<tr><td>CC de manière</td><td>comment ?</td></tr>" +
    "<tr><td>CC de cause</td><td>pourquoi ? pour quelle raison ?</td></tr></table>" +
    "<p>Ex : <b>La nuit</b>, il travaille <b>avec précaution</b> <b>dans sa chambre</b>. Il va tomber malade <b>à force de travailler</b>.</p>" +
    "<p><b>Exemple d'analyse</b><br>nuit : nom commun, CCT de travailler.<br>avec précaution : CC de manière de travailler.<br>dans sa chambre : CCL de travailler.<br>à force de travailler : CC de cause de tomber.</p>",
  astuce: "Essaie de déplacer ou d'enlever le groupe : si la phrase tient encore debout, c'est souvent un CC. « Il travaille dans sa chambre » → « Dans sa chambre, il travaille. »",
  regle: "Le CC précise les circonstances de l'action : quand ? (temps), où ? (lieu), comment ? (manière), pourquoi ? (cause). On peut en général le supprimer ou le déplacer.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque complément à sa question.", paires: [["CC de temps", "quand ?"], ["CC de lieu", "où ?"], ["CC de manière", "comment ?"], ["CC de cause", "pourquoi ?"]], expl: "Chaque CC répond à une question posée après le verbe." },
      { t: "qcm", q: "« La nuit, il travaille. » « La nuit » est un complément de…", choix: ["temps", "lieu", "manière", "cause"], r: "temps", expl: "Il travaille quand ? la nuit." },
      { t: "qcm", q: "« Il travaille dans sa chambre. » « dans sa chambre » est un complément de…", choix: ["temps", "lieu", "manière", "cause"], r: "lieu", expl: "Il travaille où ? dans sa chambre." },
      { t: "qcm", q: "« Il travaille avec précaution. » « avec précaution » est un complément de…", choix: ["temps", "lieu", "manière", "cause"], r: "manière", expl: "Il travaille comment ? avec précaution." },
      { t: "vf", q: "En général, on peut supprimer ou déplacer un complément circonstanciel.", r: true, expl: "C'est pour cela qu'on les appelle aussi compléments de phrase." },
      { t: "vf", q: "Pour trouver le CC de cause, on pose la question « où ? ».", r: false, expl: "Le CC de cause répond à « pourquoi ? » ou « pour quelle raison ? »." }
    ],
    [
      { t: "classer", q: "Range les groupes en gras.", cases: ["temps", "lieu", "manière", "cause"], items: [["<b>Demain</b>, nous irons à Thiès.", "temps"], ["Les enfants jouent <b>dans la cour</b>.", "lieu"], ["Awa marche <b>lentement</b>.", "manière"], ["Il est absent <b>à cause de la pluie</b>.", "cause"], ["<b>Le samedi</b>, Moussa va au champ.", "temps"], ["Le car roule <b>vers Saint-Louis</b>.", "lieu"], ["Fatou parle <b>avec douceur</b>.", "manière"], ["Le malade tremble <b>de fièvre</b>.", "cause"]], expl: "quand ? où ? comment ? pourquoi ?" },
      { t: "saisie", q: "Écris le CC de lieu : « Les pêcheurs se reposent sous le grand arbre. »", r: "sous le grand arbre", expl: "Ils se reposent où ? sous le grand arbre." },
      { t: "saisie", q: "Écris le CC de temps : « Chaque matin, Khady balaie la cour. »", r: "Chaque matin", expl: "Elle balaie quand ? chaque matin." },
      { t: "saisie", q: "Écris le CC de manière : « Le vieux pêcheur répare son filet avec patience. »", r: "avec patience", expl: "Il répare comment ? avec patience." },
      { t: "saisie", q: "Écris le CC de cause : « La route est fermée à cause des travaux. »", r: "à cause des travaux", expl: "Pourquoi la route est-elle fermée ? à cause des travaux." },
      { t: "qcm", q: "« Il va tomber malade à force de travailler. » « à force de travailler » est un CC de…", choix: ["temps", "lieu", "manière", "cause"], r: "cause", expl: "Pourquoi va-t-il tomber malade ? à force de travailler." },
      { t: "qcm", q: "Quelle question pose-t-on pour trouver le CC de temps ?", choix: ["quand ?", "où ?", "comment ?", "pourquoi ?"], r: "quand ?", expl: "Le CCT répond à « quand ? »." },
      { t: "trous", q: "Écris la question qui permet de trouver chaque CC en gras.", texte: "Il dort <b>dans la chambre</b> : [où] ? — Il dort <b>depuis midi</b> : [quand] ? — Il dort <b>profondément</b> : [comment] ? — Il dort <b>de fatigue</b> : [pourquoi] ?", expl: "Lieu : où ? Temps : quand ? Manière : comment ? Cause : pourquoi ?" },
      { t: "ordre", q: "Remets la phrase dans l'ordre en commençant par le CC de temps.", r: "Le soir, Mamadou révise ses leçons.", expl: "Le CC de temps « Le soir » est déplacé en tête, suivi d'une virgule." }
    ],
    [
      { t: "saisie", q: "Déplace le CC de lieu au début de la phrase : « Les enfants jouent au ballon sur la plage. »", r: "Sur la plage, les enfants jouent au ballon.", large: true, expl: "On peut déplacer le CC ; en tête de phrase, on met une virgule après." },
      { t: "saisie", q: "Supprime le CC de temps : « Hier, Awa a acheté des mangues. »", r: "Awa a acheté des mangues.", large: true, expl: "Sans le CC « Hier », la phrase garde son sens." },
      { t: "qcm", q: "Dans « Moussa mange une mangue sous le manguier », quel groupe peut être supprimé ?", choix: ["sous le manguier", "une mangue", "Moussa"], r: "sous le manguier", expl: "« sous le manguier » est un CC de lieu. « une mangue » est le COD et « Moussa » le sujet." },
      { t: "vf", q: "Dans « Awa regarde la télévision », « la télévision » est un CC.", r: false, expl: "On ne peut pas le déplacer : c'est un COD (regarde quoi ?)." },
      { t: "relier", q: "Analyse chaque CC de la phrase : « La nuit, il travaille avec précaution dans sa chambre. »", paires: [["La nuit", "CC de temps"], ["avec précaution", "CC de manière"], ["dans sa chambre", "CC de lieu"]], expl: "quand ? comment ? où ?" },
      { t: "qcm", q: "« Grâce à sa gentillesse, Khady a beaucoup d'amis. » « Grâce à sa gentillesse » est un CC de…", choix: ["cause", "manière", "lieu"], r: "cause", expl: "Pour quelle raison a-t-elle beaucoup d'amis ? grâce à sa gentillesse." },
      { t: "trous", q: "Complète la phrase avec les CC demandés (aide : au marché, vite, ce matin).", texte: "[Ce matin] (temps), maman est allée [au marché] (lieu) et elle est revenue [vite] (manière).", expl: "quand ? où ? comment ?" }
    ],
    [
      { t: "dictee", texte: "Le samedi matin, les femmes vendent leurs légumes au marché de Thiès.", expl: "« Le samedi matin » : CC de temps ; « au marché de Thiès » : CC de lieu." },
      { t: "dictee", texte: "À cause du vent, les pêcheurs rentrent lentement au port.", expl: "Cause : à cause du vent ; manière : lentement ; lieu : au port." },
      { t: "trous", q: "Écris la sorte de chaque CC en gras (temps, lieu, manière, cause).", texte: "<b>Pendant les vacances</b> ([temps]), Ibrahima travaille <b>dans le champ de son père</b> ([lieu]). Il travaille <b>avec courage</b> ([manière]), mais il s'arrête souvent <b>à cause de la chaleur</b> ([cause]).", expl: "quand ? où ? comment ? pourquoi ?" },
      { t: "qcm", q: "Combien de CC y a-t-il dans « Hier, à Dakar, il a plu très fort » ?", choix: ["un", "deux", "trois"], r: "trois", expl: "Hier (temps), à Dakar (lieu), très fort (manière)." },
      { t: "saisie", q: "Écris le CC de cause : « Les élèves sont restés en classe à cause de l'orage. »", r: "à cause de l'orage", expl: "Pourquoi sont-ils restés ? à cause de l'orage." }
    ]
  ]
});
