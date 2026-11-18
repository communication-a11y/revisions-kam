// À VÉRIFIER : au cahier, « CCM » désigne ici le complément de MOYEN, alors que dans la leçon du 3 novembre « CCM » désignait le complément de MANIÈRE. Le module écrit « CC de moyen » en entier et rappelle la différence.
// Corrections : « posez après le verbe » → « posée après le verbe » ; « pour réussir à son examen » → « pour réussir son examen ».
LECONS.push({
  id: "fr-gram-cc-but-moyen",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Le complément circonstanciel de but (CCB) et le complément circonstanciel de moyen",
  date: "2026-11-10",
  photos: ["DJI_20261118220639_0052_D.jpg", "DJI_20261118220644_0053_D.jpg"],
  retiens:
    "<p>→ Le <b>CC de but (CCB)</b> exprime le but, c'est-à-dire l'objectif que l'on cherche à atteindre ou à éviter. Il répond à la question <b>« dans quel but ? »</b> posée après le verbe.<br>Ex : Elle se bat <b>pour réussir son examen</b>. (CCB)</p>" +
    "<p>→ Le <b>CC de moyen</b> est un mot ou un groupe de mots qui donne des précisions sur l'<b>instrument</b>, l'<b>outil</b> qui sert à réaliser l'action exprimée par le verbe. Il répond à la question <b>« avec quoi ? »</b>.<br>Ex : Je mange avec quoi ? <b>avec mes doigts</b>. (CC de moyen)</p>" +
    "<p>Le CC de moyen est souvent introduit par : avec, de, par, sans, à, au moyen de, grâce à…</p>" +
    "<p><b>Exemple d'analyse</b><br>L'élève trace un cercle avec un crayon.<br>crayon : nom commun de chose, CC de moyen de tracer.</p>" +
    "<p><b>Attention :</b> ne confonds pas le CC de <b>moyen</b> (avec quoi ? → avec un crayon) et le CC de <b>manière</b> (comment ? → avec soin), vu dans la leçon sur les compléments circonstanciels.</p>",
  astuce: "Le but, c'est <b>ce qu'on veut obtenir</b> : souvent « pour… » ou « afin de… ». Le moyen, c'est <b>l'outil</b> : on peut le tenir dans la main ou s'en servir.",
  regle: "CC de but : dans quel but ? (pour réussir, afin de…). CC de moyen : avec quoi ? (l'outil, l'instrument qui sert à faire l'action).",
  niveaux: [
    [
      { t: "qcm", q: "Le CC de but répond à la question…", choix: ["dans quel but ?", "avec quoi ?", "où ?", "quand ?"], r: "dans quel but ?", expl: "Le CCB exprime l'objectif que l'on cherche à atteindre." },
      { t: "qcm", q: "Le CC de moyen indique…", choix: ["l'outil, l'instrument", "le moment", "le lieu"], r: "l'outil, l'instrument", expl: "Il précise avec quoi on fait l'action." },
      { t: "qcm", q: "« Elle se bat pour réussir son examen. » Le CC de but est…", choix: ["pour réussir son examen", "Elle", "se bat"], r: "pour réussir son examen", expl: "Dans quel but se bat-elle ? pour réussir son examen." },
      { t: "qcm", q: "« L'élève trace un cercle avec un crayon. » Le CC de moyen est…", choix: ["avec un crayon", "un cercle", "L'élève"], r: "avec un crayon", expl: "Il trace avec quoi ? avec un crayon." },
      { t: "vf", q: "Le CC de moyen est souvent introduit par « avec », « grâce à » ou « au moyen de ».", r: true, expl: "Ce sont des mots qui introduisent souvent un CC de moyen." },
      { t: "relier", q: "Relie chaque complément à sa question.", paires: [["CC de but", "dans quel but ?"], ["CC de moyen", "avec quoi ?"], ["CC de manière", "comment ?"]], expl: "Trois compléments différents, trois questions différentes." }
    ],
    [
      { t: "classer", q: "Range les groupes en gras : but ou moyen ?", cases: ["but", "moyen"], items: [["Il étudie <b>pour devenir médecin</b>.", "but"], ["Il coupe le pain <b>avec un couteau</b>.", "moyen"], ["Awa économise <b>pour acheter un vélo</b>.", "but"], ["Le pêcheur attrape le poisson <b>avec un filet</b>.", "moyen"], ["Moussa court <b>afin d'arriver à l'heure</b>.", "but"], ["Fatou écrit <b>au stylo</b>.", "moyen"]], expl: "But : ce qu'on veut obtenir. Moyen : l'outil utilisé." },
      { t: "saisie", q: "Écris le CC de moyen : « Le paysan laboure son champ avec une charrue. »", r: "avec une charrue", expl: "Il laboure avec quoi ? avec une charrue." },
      { t: "saisie", q: "Écris le CC de but : « Khady se lève tôt pour aider sa mère. »", r: "pour aider sa mère", expl: "Dans quel but se lève-t-elle tôt ? pour aider sa mère." },
      { t: "saisie", q: "Écris le CC de moyen : « Ibrahima ouvre la porte avec une clé. »", r: "avec une clé", expl: "Il ouvre avec quoi ? avec une clé." },
      { t: "saisie", q: "Écris le CC de but : « Nous lavons nos mains pour éviter les maladies. »", r: "pour éviter les maladies", expl: "Le but peut être ce qu'on cherche à éviter." },
      { t: "qcm", q: "« Je mange avec mes doigts. » « avec mes doigts » est un CC de…", choix: ["but", "moyen", "lieu"], r: "moyen", expl: "Je mange avec quoi ? avec mes doigts : ce sont mes « outils »." },
      { t: "qcm", q: "Quel mot introduit souvent un CC de but ?", choix: ["pour", "sous", "dans"], r: "pour", expl: "« pour » + infinitif exprime souvent le but." },
      { t: "trous", q: "Complète avec un CC de moyen (aide : à la pelle, avec un balai, en pirogue).", texte: "Awa nettoie la cour [avec un balai]. — Les maçons creusent le trou [à la pelle]. — Les pêcheurs traversent le fleuve [en pirogue].", expl: "Chaque groupe indique l'outil ou le moyen utilisé." },
      { t: "vf", q: "Dans « Il travaille dur pour nourrir sa famille », « pour nourrir sa famille » est un CC de moyen.", r: false, expl: "C'est l'objectif : dans quel but travaille-t-il ? C'est un CC de but." }
    ],
    [
      { t: "qcm", q: "« Le menuisier travaille avec soin. » « avec soin » est un CC de…", choix: ["moyen", "manière", "but"], r: "manière", aide: "Le soin, est-ce un outil ?", expl: "Il travaille comment ? avec soin : c'est la manière, pas un outil." },
      { t: "qcm", q: "« Le menuisier travaille avec une scie. » « avec une scie » est un CC de…", choix: ["moyen", "manière", "but"], r: "moyen", expl: "Il travaille avec quoi ? avec une scie : c'est un outil." },
      { t: "classer", q: "Avec « avec » : moyen ou manière ?", cases: ["moyen", "manière"], items: [["Il frappe avec un marteau.", "moyen"], ["Il parle avec gentillesse.", "manière"], ["Elle coud avec une aiguille.", "moyen"], ["Elle chante avec joie.", "manière"], ["Il écrit avec une craie.", "moyen"], ["Il écoute avec attention.", "manière"]], expl: "Un objet qu'on utilise : moyen. Une façon de faire : manière." },
      { t: "qcm", q: "Analyse « crayon » dans « L'élève trace un cercle avec un crayon ».", choix: ["nom commun de chose, CC de moyen de tracer", "nom commun de chose, COD de tracer", "nom commun, CC de but de tracer"], r: "nom commun de chose, CC de moyen de tracer", expl: "C'est l'analyse du cahier." },
      { t: "saisie", q: "Ajoute un CC de but « pour réussir » à la phrase : « Mamadou révise ses leçons. »", r: "Mamadou révise ses leçons pour réussir.", large: true, expl: "Le CC de but se place souvent en fin de phrase." },
      { t: "vf", q: "Dans « Grâce à son téléphone, Awa appelle sa tante », il y a un CC de moyen.", r: true, expl: "Avec quoi appelle-t-elle ? grâce à son téléphone." },
      { t: "trous", q: "Écris « but » ou « moyen » pour chaque groupe en gras.", texte: "Grand-père fend le bois <b>avec une hache</b> ([moyen]) <b>pour faire du feu</b> ([but]).", expl: "La hache est l'outil ; faire du feu est l'objectif." }
    ],
    [
      { t: "dictee", texte: "Le paysan arrose ses plants avec un seau pour obtenir une bonne récolte.", expl: "« avec un seau » : CC de moyen ; « pour obtenir une bonne récolte » : CC de but." },
      { t: "dictee", texte: "Afin de ne pas être en retard, Aïssatou va à l'école à vélo.", expl: "« Afin de ne pas être en retard » : but ; « à vélo » : moyen." },
      { t: "trous", q: "Trouve le CC de moyen et le CC de but : « Le pêcheur répare sa pirogue avec des clous pour repartir en mer. »", texte: "CC de moyen : [avec des clous] — CC de but : [pour repartir en mer]", expl: "avec quoi ? avec des clous ; dans quel but ? pour repartir en mer." },
      { t: "relier", q: "Relie chaque groupe en gras à sa sorte de CC : « <b>Le matin</b>, Moussa arrose <b>avec un arrosoir</b> les fleurs du jardin <b>pour les faire pousser</b>. »", paires: [["Le matin", "CC de temps"], ["avec un arrosoir", "CC de moyen"], ["pour les faire pousser", "CC de but"]], expl: "quand ? avec quoi ? dans quel but ?" },
      { t: "qcm", q: "Dans quelle phrase y a-t-il un CC de but ?", choix: ["Il se couche tôt pour être en forme.", "Il se couche tôt avec plaisir.", "Il se couche tôt dans sa chambre.", "Il se couche tôt à cause de la fatigue."], r: "Il se couche tôt pour être en forme.", expl: "Dans quel but se couche-t-il tôt ? pour être en forme." }
    ]
  ]
});
