// À VÉRIFIER : le tableau (photo 2026-11-25_02) dit « bataille de Dékheulé contre Faidherbe (fin 19e siècle) ».
// Dékheulé a eu lieu en 1886 contre les troupes françaises ; Faidherbe avait quitté le Sénégal en 1865. Le module écrit « contre les Français ».
// Orthographe : « Koli Tengala » → Koli Tenguella.
LECONS.push({
  id: "hi-royaumes-senegal-tableau",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Les royaumes du Sénégal : capitales, souverains, faits marquants",
  date: "2026-11-19",
  photos: ["2026-11-25_02.jpg", "2026-11-25_09.jpg"],
  retiens:
    "<table><tr><th>Royaume</th><th>Capitale</th><th>Souverain</th><th>Faits marquants</th></tr>" +
    "<tr><td><b>Tékrour</b> (Fouta Toro)</td><td>Mboumba</td><td>Almamy</td><td>création vers le 9<sup>e</sup> siècle ; conquête par Koli Tenguella et création du Fouta Toro (15<sup>e</sup> siècle) ; révolte des marabouts musulmans</td></tr>" +
    "<tr><td><b>Djolof</b></td><td>Yang-Yang</td><td>Bourba</td><td>fondation par Ndiadiane Ndiaye (13<sup>e</sup> ou 14<sup>e</sup> siècle) ; domination des autres royaumes ; bataille de Danki (1549) : défaite devant l'armée du Cayor</td></tr>" +
    "<tr><td><b>Cayor</b></td><td>Mboul</td><td>Damel</td><td>victoire sur le Djolof et indépendance après Danki ; Lat Dior devient Damel (1862) ; bataille de Dékheulé contre les Français (fin du 19<sup>e</sup> siècle)</td></tr>" +
    "<tr><td><b>Baol</b></td><td>Lambaye</td><td>Tègne</td><td>indépendance après Danki ; unification avec le Cayor : Amary Ngoné Sobel devient Damel-Tègne</td></tr>" +
    "<tr><td><b>Walo</b></td><td>Nder</td><td>Brack</td><td>fondation par Barka Mbodj ; guerre contre les Maures du Trarza (1769) ; mariage de Ndjeumbeut Mbodj (1833) ; suicide collectif des femmes de Nder</td></tr>" +
    "<tr><td><b>Sine</b></td><td>Mbissel, Diakhao</td><td>Bour</td><td>fondation par Meïssa Waly Dione (14<sup>e</sup> siècle) ; résistance à l'islamisation jusqu'au 19<sup>e</sup> siècle</td></tr>" +
    "<tr><td><b>Saloum</b></td><td>Kahone</td><td>Bour</td><td>fondation par Mbégane Ndour</td></tr>" +
    "<tr><td><b>Rip</b></td><td>Nioro</td><td>Almamy</td><td>bataille de Pathé Badiane ; guerre sainte de Maba Diakhou Ba (1860) et défaite contre Coumba Ndoffène (1867)</td></tr>" +
    "</table>",
  astuce: "Retiens les titres par paires : <b>Damel</b> (Cayor) et <b>Tègne</b> (Baol) — Amary Ngoné Sobel fut les deux, Damel-Tègne ; <b>Bour</b> pour les deux royaumes sereer, Sine et Saloum ; <b>Almamy</b> pour le Tékrour et le Rip.",
  regle: "Chaque royaume a sa capitale et le titre de son souverain : Tékrour (Mboumba, Almamy), Djolof (Yang-Yang, Bourba), Cayor (Mboul, Damel), Baol (Lambaye, Tègne), Walo (Nder, Brack), Sine (Diakhao, Bour), Saloum (Kahone, Bour), Rip (Nioro, Almamy).",
  niveaux: [
    [
      { t: "qcm", q: "Quel est le titre du souverain du Cayor ?", choix: ["Damel", "Brack", "Bourba"], r: "Damel", expl: "Le souverain du Cayor s'appelle le Damel." },
      { t: "qcm", q: "Quelle est la capitale du Walo ?", choix: ["Nder", "Kahone", "Mboul"], r: "Nder", expl: "Le Walo avait pour capitale Nder, et son souverain était le Brack." },
      { t: "qcm", q: "Qui a fondé le Djolof ?", choix: ["Ndiadiane Ndiaye", "Lat Dior", "Maba Diakhou Ba"], r: "Ndiadiane Ndiaye", expl: "Le Djolof a été fondé par Ndiadiane Ndiaye au 13e ou au 14e siècle." },
      { t: "vf", q: "Le souverain du Sine et celui du Saloum portaient tous les deux le titre de Bour.", r: true, expl: "On disait le Bour Sine et le Bour Saloum." },
      { t: "qcm", q: "Quel royaume a été battu à Danki en 1549 ?", choix: ["le Djolof", "le Cayor", "le Rip"], r: "le Djolof", expl: "À Danki, le Djolof a été battu par l'armée du Cayor." }
    ],
    [
      { t: "relier", q: "Relie chaque royaume à sa capitale.", paires: [["Djolof", "Yang-Yang"], ["Cayor", "Mboul"], ["Baol", "Lambaye"], ["Saloum", "Kahone"], ["Rip", "Nioro"]], expl: "C'est la colonne « Capitale » du tableau." },
      { t: "relier", q: "Relie chaque royaume au titre de son souverain.", paires: [["Djolof", "Bourba"], ["Walo", "Brack"], ["Baol", "Tègne"], ["Cayor", "Damel"], ["Tékrour", "Almamy"]], expl: "C'est la colonne « Titre du souverain »." },
      { t: "saisie", q: "Qui a fondé le Saloum ?", r: "Mbégane Ndour", expl: "Le Saloum a été fondé par Mbégane Ndour." },
      { t: "qcm", q: "Qui a fondé le Sine ?", choix: ["Meïssa Waly Dione", "Barka Mbodj", "Koli Tenguella"], r: "Meïssa Waly Dione", expl: "Meïssa Waly Dione a fondé le Sine au 14e siècle." },
      { t: "saisie", q: "En quelle année Lat Dior est-il devenu Damel du Cayor ?", r: "1862", nombre: true, expl: "Lat Dior devient Damel en 1862." },
      { t: "qcm", q: "Quel autre nom donne-t-on au Tékrour ?", choix: ["le Fouta Toro", "le Djolof", "le Baol"], r: "le Fouta Toro", expl: "Koli Tenguella conquiert le Tékrour et crée le Fouta Toro au 15e siècle." },
      { t: "trous", q: "Complète.", texte: "Le Walo a été fondé par Barka [Mbodj]. Sa capitale était [Nder] et son souverain s'appelait le [Brack].", expl: "La ligne du Walo dans le tableau." },
      { t: "vf", q: "Le Sine a résisté à l'islamisation jusqu'au 19e siècle.", r: true, expl: "C'est un fait marquant du Sine." }
    ],
    [
      { t: "qcm", q: "Pourquoi Amary Ngoné Sobel porte-t-il le titre de Damel-Tègne ?", choix: ["parce qu'il a réuni le Cayor et le Baol", "parce qu'il a fondé le Walo", "parce qu'il a battu les Maures"], r: "parce qu'il a réuni le Cayor et le Baol", expl: "Damel = roi du Cayor ; Tègne = roi du Baol. Il régnait sur les deux." },
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1549", "bataille de Danki"], ["1862", "Lat Dior devient Damel"], ["1833", "mariage de Ndjeumbeut Mbodj"], ["1867", "défaite de Maba Diakhou Ba"]], expl: "Les dates du tableau." },
      { t: "qcm", q: "Contre qui Maba Diakhou Ba a-t-il été battu en 1867 ?", choix: ["Coumba Ndoffène", "Lat Dior", "Ndiadiane Ndiaye"], r: "Coumba Ndoffène", expl: "Le chef du Rip, Maba Diakhou Ba, a été battu par Coumba Ndoffène, Bour du Sine." },
      { t: "classer", q: "Range ces faits selon le royaume.", cases: ["Walo", "Cayor", "Rip"], items: [["suicide collectif des femmes de Nder", "Walo"], ["guerre contre les Maures du Trarza", "Walo"], ["Lat Dior devient Damel", "Cayor"], ["bataille de Dékheulé", "Cayor"], ["guerre sainte de Maba Diakhou Ba", "Rip"], ["bataille de Pathé Badiane", "Rip"]], expl: "Chaque fait appartient à la ligne d'un royaume du tableau." },
      { t: "vf", q: "Le Baol a gagné son indépendance après la bataille de Danki.", r: true, expl: "Comme le Cayor, le Baol se libère du Djolof après Danki." },
      { t: "qcm", q: "Lequel de ces souverains n'est PAS un Bour ?", choix: ["le souverain du Walo", "le souverain du Sine", "le souverain du Saloum"], r: "le souverain du Walo", expl: "Le souverain du Walo est le Brack." }
    ],
    [
      { t: "trous", q: "Complète.", texte: "Le Djolof avait pour capitale [Yang-Yang] et son souverain était le [Bourba]. En [1549], il fut battu à Danki par l'armée du [Cayor].", expl: "Le Djolof dominait les autres royaumes jusqu'à Danki." },
      { t: "probleme", q: "Le Djolof a été battu à Danki en 1549. Lat Dior est devenu Damel en 1862.", etapes: [{ q: "Combien d'années séparent ces deux événements ?", r: "313", unite: "ans" }], expl: "1862 − 1549 = 313 ans." },
      { t: "classer", q: "Range ces royaumes selon le titre de leur souverain.", cases: ["Bour", "Almamy", "autre titre"], items: [["Sine", "Bour"], ["Saloum", "Bour"], ["Tékrour", "Almamy"], ["Rip", "Almamy"], ["Walo", "autre titre"], ["Cayor", "autre titre"]], expl: "Bour : Sine et Saloum. Almamy : Tékrour et Rip. Walo : Brack ; Cayor : Damel." },
      { t: "qcm", q: "Quelle capitale va avec le souverain appelé Tègne ?", choix: ["Lambaye", "Mboul", "Diakhao", "Nioro"], r: "Lambaye", expl: "Le Tègne régnait sur le Baol, capitale Lambaye." },
      { t: "relier", q: "Relie chaque fondateur à son royaume.", paires: [["Ndiadiane Ndiaye", "Djolof"], ["Barka Mbodj", "Walo"], ["Meïssa Waly Dione", "Sine"], ["Mbégane Ndour", "Saloum"]], expl: "Les fondateurs cités dans le tableau." }
    ]
  ]
});
