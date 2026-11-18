// Corrections : « Elle sépare » → « Il sépare » (le point-virgule est masculin) ; « une explication de rapporter un discours » → « une explication ou de rapporter un discours » ; exemple « lave-toi » → « Lave-toi. »
LECONS.push({
  id: "fr-orth-ponctuation",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les signes de ponctuation",
  date: "2026-09-15",
  photos: ["DJI_20261118220052_0013_D.jpg", "DJI_20261118220108_0014_D.jpg"],
  retiens:
    "<ul>" +
    "<li>Le <b>point (.)</b> se met à la fin d'une phrase qui donne une information. Le <b>point d'interrogation (?)</b> s'utilise quand on pose une question. Le <b>point d'exclamation (!)</b> sert à exprimer une émotion.</li>" +
    "<li>La <b>virgule (,)</b> marque une petite pause.</li>" +
    "<li>Le <b>point-virgule (;)</b> marque une pause plus longue que la virgule. Il sépare deux parties d'une phrase.</li>" +
    "<li>Les <b>deux-points (:)</b> permettent d'introduire une explication ou de rapporter un discours.</li>" +
    "<li>Les <b>guillemets (« »)</b> servent à écrire un dialogue.</li>" +
    "</ul>" +
    "<p><b>NB :</b> quand un verbe comme hurler, crier, dire introduit des paroles, on met deux-points avant les guillemets.<br>Ex : Mon père me dit : « Lave-toi. »</p>",
  astuce: "Pour rapporter des paroles, pense au trio : <b>verbe de parole + deux-points + guillemets</b>. Ex : Awa crie : « Attends-moi ! »",
  regle: "Le point termine une information, ? une question, ! une émotion. La virgule est une petite pause, le point-virgule une pause plus longue. Les deux-points et les guillemets introduisent des paroles.",
  niveaux: [
    [
      { t: "relier", q: "Relie chaque signe à son nom.", paires: [[".", "le point"], [",", "la virgule"], [";", "le point-virgule"], [":", "les deux-points"], ["« »", "les guillemets"]], expl: "Ce sont les signes de ponctuation de la leçon." },
      { t: "qcm", q: "Quel signe marque une petite pause ?", choix: ["la virgule", "le point", "le point d'interrogation"], r: "la virgule", expl: "La virgule marque une petite pause." },
      { t: "qcm", q: "Quel signe termine une question ?", choix: ["?", "!", "."], r: "?", expl: "On met un point d'interrogation quand on pose une question." },
      { t: "qcm", q: "À quoi servent les guillemets ?", choix: ["à écrire un dialogue", "à poser une question", "à marquer une petite pause"], r: "à écrire un dialogue", expl: "Les guillemets encadrent les paroles." },
      { t: "vf", q: "Le point-virgule marque une pause plus longue que la virgule.", r: true, expl: "Il sépare deux parties d'une phrase." },
      { t: "vf", q: "Le point d'exclamation sert à exprimer une émotion.", r: true, expl: "Ex : Quelle surprise !" }
    ],
    [
      { t: "trous", q: "Mets le bon signe à la fin de chaque phrase : . ? ou !", texte: "Le car arrive à midi [.] — Où as-tu mis mon cahier [?] — Quelle chaleur aujourd'hui [!] — Fatou habite à Rufisque [.]", expl: "Information : point. Question : ?. Émotion : !." },
      { t: "qcm", q: "Quelle phrase est bien ponctuée ?", choix: ["Mon père me dit : « Lave-toi. »", "Mon père me dit « Lave-toi. »", "Mon père me dit, Lave-toi."], r: "Mon père me dit : « Lave-toi. »", expl: "Après un verbe de parole : deux-points, puis guillemets." },
      { t: "qcm", q: "Quel signe faut-il avant les guillemets dans « Le maître dit … « Silence ! » » ?", choix: [":", ";", "?"], r: ":", expl: "Le verbe « dire » introduit des paroles : on met deux-points." },
      { t: "trous", q: "Ajoute les virgules qui manquent dans cette liste.", texte: "Au marché, maman achète des oignons[,] des tomates[,] du poisson et du riz.", expl: "Dans une liste, on sépare les mots par des virgules ; le dernier est relié par « et »." },
      { t: "classer", q: "Range chaque signe selon son rôle.", cases: ["termine une phrase", "marque une pause dans la phrase"], items: [[".", "termine une phrase"], ["?", "termine une phrase"], ["!", "termine une phrase"], [",", "marque une pause dans la phrase"], [";", "marque une pause dans la phrase"]], expl: "Le point, ? et ! terminent la phrase ; la virgule et le point-virgule marquent des pauses." },
      { t: "qcm", q: "Les deux-points permettent…", choix: ["d'introduire une explication ou de rapporter un discours", "de terminer une phrase", "de poser une question"], r: "d'introduire une explication ou de rapporter un discours", expl: "C'est ce que dit la règle." },
      { t: "vf", q: "On met des deux-points après « crier » quand il introduit des paroles.", r: true, expl: "Hurler, crier, dire… introduisent des paroles : deux-points puis guillemets." },
      { t: "saisie", q: "Écris le nom du signe qui sépare deux parties d'une phrase avec une pause plus longue que la virgule.", r: "le point-virgule", expl: "Le point-virgule (;)." },
      { t: "ordre", q: "Remets la phrase dans l'ordre.", r: "Awa demande : « Où est mon sac ? »", expl: "Verbe de parole, deux-points, guillemets, et le point d'interrogation dans les guillemets." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est bien ponctuée ?", choix: ["Il pleut fort ; les enfants restent à la maison.", "Il pleut fort les enfants ; restent à la maison.", "Il pleut ; fort les enfants restent à la maison."], r: "Il pleut fort ; les enfants restent à la maison.", expl: "Le point-virgule sépare les deux parties de la phrase." },
      { t: "qcm", q: "Dans « Moussa est content : il a réussi son examen », les deux-points introduisent…", choix: ["une explication", "un dialogue", "une question"], r: "une explication", expl: "« il a réussi son examen » explique pourquoi il est content." },
      { t: "vf", q: "« Ma mère crie « Viens manger ! » » est bien ponctué.", r: false, expl: "Il manque les deux-points après « crie » : Ma mère crie : « Viens manger ! »" },
      { t: "qcm", q: "Quelle est la bonne ponctuation ?", choix: ["Le maître dit : « Fermez vos cahiers. »", "Le maître dit ; « Fermez vos cahiers. »", "Le maître dit, Fermez vos cahiers.", "Le maître dit : Fermez vos cahiers ?"], r: "Le maître dit : « Fermez vos cahiers. »", expl: "Deux-points après « dit », puis les paroles entre guillemets, avec une majuscule et un point." },
      { t: "trous", q: "Complète avec le bon signe : , ; : ou ?", texte: "Khady a acheté trois choses[:] du pain, du lait et du sucre. — Veux-tu venir avec nous[?] — Le soleil se couche[;] les pêcheurs rentrent au port.", expl: "Deux-points avant une énumération qui explique ; ? pour la question ; point-virgule entre deux parties." },
      { t: "relier", q: "Relie chaque phrase au signe qui manque à la fin.", paires: [["Que ce pagne est beau", "!"], ["As-tu soif", "?"], ["Le marché ouvre à huit heures", "."]], expl: "Émotion : ! ; question : ? ; information : point." },
      { t: "qcm", q: "Où faut-il mettre la virgule ? « Le matin … Ibrahima va chercher de l'eau. »", choix: ["après « Le matin »", "après « Ibrahima »", "après « chercher »"], r: "après « Le matin »", expl: "La virgule marque une petite pause après le complément placé en tête." }
    ],
    [
      { t: "dictee", texte: "Mon père me dit : « Lave-toi vite, nous partons à Thiès ! »", expl: "Deux-points avant les guillemets ; virgule pour la petite pause ; point d'exclamation pour l'émotion." },
      { t: "dictee", texte: "Aïssatou demande à sa mère : « Pouvons-nous aller à la plage ? »", expl: "Deux-points, guillemets, et le point d'interrogation à l'intérieur." },
      { t: "trous", q: "Remets la ponctuation dans ce petit texte.", texte: "Moussa entre dans la classe[.] Il crie[:] « Bonjour tout le monde[!] » Le maître lui demande[:] « Pourquoi es-tu en retard[?] »", expl: "Point pour l'information, deux-points avant les paroles, ! pour l'émotion, ? pour la question." },
      { t: "qcm", q: "Fatou appelle à l'aide. Quelle est la bonne ponctuation ?", choix: ["Fatou hurle : « Au secours ! »", "Fatou hurle : « Au secours ? »", "Fatou hurle « Au secours. »", "Fatou hurle, au secours !"], r: "Fatou hurle : « Au secours ! »", expl: "Hurler introduit des paroles : deux-points, guillemets ; c'est un cri, donc un point d'exclamation." },
      { t: "qcm", q: "Combien de signes de ponctuation différents vois-tu dans cette phrase ?<br>Awa dit : « Tu viens ? »", choix: ["deux", "trois", "quatre"], r: "trois", expl: "Les deux-points, les guillemets et le point d'interrogation." }
    ]
  ]
});
