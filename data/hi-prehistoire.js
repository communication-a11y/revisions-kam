LECONS.push({
  id: "hi-prehistoire",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "La préhistoire et ses caractéristiques (Paléolithique et Néolithique)",
  date: "2026-09-24",
  photos: ["DJI_20261118222051_0139_D.jpg", "DJI_20261118222101_0140_D.jpg"],
  retiens:
    "<p>La <b>préhistoire</b> désigne à la fois la <b>période</b> où l'homme a vécu avant l'histoire, et la <b>science</b> qui étudie ce passé humain jusqu'au travail des métaux.</p>" +
    "<p>Pendant cette période, les outils et les techniques de production ont évolué :</p>" +
    "<ul><li>l'homme a d'abord connu l'<b>âge de la pierre taillée</b>, ou <b>Paléolithique</b> : il est un <b>prédateur nomade</b> qui vit de chasse, de pêche et de cueillette ;</li>" +
    "<li>il devient ensuite, pendant l'<b>âge de la pierre polie</b>, ou <b>Néolithique</b>, un <b>producteur sédentaire</b> qui pratique l'agriculture et l'élevage.</li></ul>" +
    "<table><tr><th></th><th>Paléolithique</th><th>Néolithique</th></tr>" +
    "<tr><td><b>Outils et armes</b></td><td>pierre taillée, bifaces, outils en os (harpons…)</td><td>pierre polie (meule, hameçon, couteau…)</td></tr>" +
    "<tr><td><b>Activités</b></td><td>chasse, pêche, cueillette</td><td>élevage, agriculture, pêche, poterie, tissage…</td></tr>" +
    "<tr><td><b>Habitat</b></td><td>grottes, cavernes, huttes</td><td>villages, cases…</td></tr>" +
    "<tr><td><b>Alimentation</b></td><td>aliments crus, fruits</td><td>aliments cuits (découverte du feu)</td></tr>" +
    "<tr><td><b>Organisation sociale</b></td><td>nomadisme, vie en communauté</td><td>sédentarisme (division du travail…), enterrement des morts</td></tr></table>",
  astuce: "<b>Paléo</b>lithique = pierre taillée, on se <b>promène</b> (nomade). <b>Néo</b>lithique = pierre polie, on reste au village (sédentaire) : <b>n</b>éo comme <b>n</b>ouveau.",
  regle: "Au Paléolithique (pierre taillée), l'homme est un prédateur nomade : chasse, pêche, cueillette. Au Néolithique (pierre polie), il devient un producteur sédentaire : agriculture, élevage, villages.",
  niveaux: [
    [
      { t: "qcm", q: "La préhistoire, c'est la période où l'homme a vécu…", choix: ["avant l'histoire", "après l'invention de l'écriture", "au temps des empires"], r: "avant l'histoire", expl: "La préhistoire va jusqu'au travail des métaux, avant l'histoire." },
      { t: "qcm", q: "Le Paléolithique est aussi appelé l'âge de la pierre…", choix: ["taillée", "polie", "dorée"], r: "taillée", expl: "Paléolithique = âge de la pierre taillée." },
      { t: "qcm", q: "Le Néolithique est aussi appelé l'âge de la pierre…", choix: ["polie", "taillée", "cassée"], r: "polie", expl: "Néolithique = âge de la pierre polie." },
      { t: "vf", q: "Au Paléolithique, l'homme est un nomade qui vit de chasse, de pêche et de cueillette.", r: true, expl: "C'est un prédateur nomade : il prend dans la nature ce qu'il trouve." },
      { t: "vf", q: "Au Néolithique, l'homme pratique l'agriculture et l'élevage.", r: true, expl: "Il devient un producteur sédentaire." },
      { t: "classer", q: "Range chaque activité dans la bonne période.", cases: ["Paléolithique", "Néolithique"], items: [["la cueillette", "Paléolithique"], ["l'agriculture", "Néolithique"], ["la chasse", "Paléolithique"], ["l'élevage", "Néolithique"], ["la poterie", "Néolithique"], ["le tissage", "Néolithique"]], expl: "Paléolithique : on prend dans la nature. Néolithique : on produit." }
    ],
    [
      { t: "classer", q: "Range chaque habitat dans la bonne période.", cases: ["Paléolithique", "Néolithique"], items: [["les grottes", "Paléolithique"], ["les cavernes", "Paléolithique"], ["les villages", "Néolithique"], ["les cases", "Néolithique"], ["les huttes", "Paléolithique"]], expl: "Le nomade s'abrite dans des grottes, des cavernes, des huttes ; le sédentaire construit des villages et des cases." },
      { t: "classer", q: "Range chaque outil dans la bonne période.", cases: ["Paléolithique", "Néolithique"], items: [["le biface", "Paléolithique"], ["le harpon en os", "Paléolithique"], ["la meule en pierre polie", "Néolithique"], ["l'hameçon en pierre polie", "Néolithique"], ["la pierre taillée", "Paléolithique"]], expl: "Pierre taillée et os au Paléolithique ; pierre polie au Néolithique." },
      { t: "qcm", q: "Que mangeait surtout l'homme du Paléolithique ?", choix: ["des aliments crus et des fruits", "du riz cuit", "du pain"], r: "des aliments crus et des fruits", expl: "Au Paléolithique, les aliments sont crus ; la cuisson vient au Néolithique dans le tableau du cahier." },
      { t: "qcm", q: "Au Néolithique, les aliments sont…", choix: ["cuits, grâce au feu", "toujours crus", "achetés au marché"], r: "cuits, grâce au feu", expl: "Le tableau du cahier indique la cuisson des aliments avec la découverte du feu." },
      { t: "saisie", q: "Comment appelle-t-on un homme qui se déplace sans cesse et n'a pas de demeure fixe ?", r: "nomade", aide: "C'est le contraire de sédentaire.", expl: "Le nomade se déplace ; le sédentaire reste sur place." },
      { t: "saisie", q: "Comment appelle-t-on un homme qui reste vivre au même endroit ?", r: "sédentaire", expl: "Au Néolithique, l'homme devient sédentaire." },
      { t: "relier", q: "Relie chaque période à son autre nom.", paires: [["Paléolithique", "âge de la pierre taillée"], ["Néolithique", "âge de la pierre polie"]], expl: "Ce sont les deux grandes périodes de la préhistoire." },
      { t: "vf", q: "L'enterrement des morts apparaît au Néolithique, d'après ton tableau.", r: true, expl: "Le tableau le place dans l'organisation sociale du Néolithique." },
      { t: "trous", q: "Complète.", texte: "Au Paléolithique, l'homme est un [prédateur] nomade. Au Néolithique, il devient un [producteur] sédentaire.", expl: "Le prédateur prend dans la nature ; le producteur fait pousser et élève." }
    ],
    [
      { t: "qcm", q: "Pourquoi l'homme du Néolithique est-il devenu sédentaire ?", choix: ["parce qu'il cultivait ses champs et élevait ses bêtes", "parce qu'il n'avait plus de jambes", "parce qu'il habitait des grottes"], r: "parce qu'il cultivait ses champs et élevait ses bêtes", expl: "Pour s'occuper des cultures et des troupeaux, il faut rester sur place : on construit des villages." },
      { t: "vf", q: "La préhistoire est seulement une période : ce n'est pas une science.", r: false, expl: "Le mot désigne à la fois la période ET la science qui étudie ce passé." },
      { t: "qcm", q: "Un chasseur suit les troupeaux d'antilopes et dort dans une grotte. À quelle période vit-il ?", choix: ["au Paléolithique", "au Néolithique"], r: "au Paléolithique", expl: "Chasse, déplacements et grottes : c'est le Paléolithique." },
      { t: "qcm", q: "Une famille cultive du mil, fabrique des pots en terre et vit dans une case. À quelle période ?", choix: ["au Néolithique", "au Paléolithique"], r: "au Néolithique", expl: "Agriculture, poterie et case : c'est le Néolithique." },
      { t: "classer", q: "Range ces mots.", cases: ["Paléolithique", "Néolithique"], items: [["prédateur", "Paléolithique"], ["producteur", "Néolithique"], ["nomadisme", "Paléolithique"], ["sédentarisme", "Néolithique"], ["division du travail", "Néolithique"], ["vie en communauté nomade", "Paléolithique"]], expl: "Le Néolithique est le temps des producteurs sédentaires." },
      { t: "saisie", q: "Jusqu'à quelle grande découverte va la préhistoire ? Le travail des …", r: "métaux", expl: "La préhistoire étudie le passé humain jusqu'au travail des métaux." },
      { t: "vf", q: "Le biface est un outil en pierre polie du Néolithique.", r: false, expl: "Le biface est en pierre taillée : il date du Paléolithique." }
    ],
    [
      { t: "trous", q: "Complète le texte.", texte: "Pendant la préhistoire, l'homme a d'abord connu l'âge de la pierre [taillée], ou [Paléolithique]. Il vivait de chasse, de pêche et de [cueillette]. Puis, pendant l'âge de la pierre [polie], ou Néolithique, il a pratiqué l'agriculture et l'[élevage].", expl: "Résumé de la leçon." },
      { t: "relier", q: "Relie chaque caractéristique du Néolithique à son domaine.", paires: [["la pierre polie", "outils"], ["l'agriculture", "activités"], ["les villages", "habitat"], ["les aliments cuits", "alimentation"], ["le sédentarisme", "organisation sociale"]], expl: "Ce sont les colonnes du tableau du cahier." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["L'homme passe de la vie nomade à la vie sédentaire.", "L'homme passe de la vie sédentaire à la vie nomade.", "L'homme a toujours vécu dans des villages."], r: "L'homme passe de la vie nomade à la vie sédentaire.", expl: "Du Paléolithique (nomade) au Néolithique (sédentaire)." },
      { t: "vf", q: "Au Paléolithique, l'homme vit de chasse, de pêche et d'agriculture.", r: false, expl: "L'agriculture apparaît au Néolithique. Au Paléolithique, c'est la cueillette." },
      { t: "classer", q: "Défi : range tout ce que tu sais.", cases: ["Paléolithique", "Néolithique"], items: [["harpon en os", "Paléolithique"], ["tissage", "Néolithique"], ["caverne", "Paléolithique"], ["case", "Néolithique"], ["fruits crus", "Paléolithique"], ["enterrement des morts", "Néolithique"], ["chasse", "Paléolithique"], ["élevage", "Néolithique"]], expl: "Pierre taillée et vie nomade d'un côté ; pierre polie et vie au village de l'autre." }
    ]
  ]
});
