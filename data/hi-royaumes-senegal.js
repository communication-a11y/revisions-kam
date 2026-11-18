// À VÉRIFIER : le cahier (photo 0153) écrit « En 1549 (17e siècle) ». L'année 1549 appartient au 16e siècle ; le module écrit 16e siècle.
LECONS.push({
  id: "hi-royaumes-senegal",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "Les royaumes du Sénégal avant l'arrivée des Blancs en Afrique",
  date: "2026-11-16",
  photos: ["DJI_20261118222216_0153_D.jpg"],
  retiens:
    "<p>Avant l'arrivée des Blancs, le Sénégal était formé d'<b>États</b> (royaumes) construits par des populations qui avaient le même passé et étaient liées par la parenté de sang ou la <b>parenté à plaisanterie</b>.</p>" +
    "<p>Les sociétés étaient stables et divisées en <b>castes</b>.</p>" +
    "<p>Le choix du roi se faisait selon les règles du <b>matrilignage</b> (par la lignée de la mère).</p>" +
    "<p>L'économie reposait sur l'<b>agriculture</b>, l'<b>élevage</b>, la <b>pêche</b> et les <b>échanges</b> avec les empires du Soudan et les Arabo-Berbères du Sahara.</p>" +
    "<p>En <b>1549</b> (16<sup>e</sup> siècle), <b>Amary Ngoné Sobel Fall</b> remporta une brillante victoire à <b>Danki</b> sur le <b>Grand Djolof</b>. Ainsi, plusieurs royaumes vassaux comme le <b>Cayor</b>, le <b>Baol</b>, le <b>Walo</b>, le <b>Sine</b>, le <b>Saloum</b>… ont réussi peu à peu à se libérer de la domination du Djolof.</p>",
  astuce: "1549 : le « 15 » ne donne pas le siècle ! De 1501 à 1600, c'est le <b>16<sup>e</sup></b> siècle.",
  regle: "Les royaumes du Sénégal avaient des sociétés en castes et choisissaient le roi par le matrilignage. En 1549, à Danki, Amary Ngoné Sobel Fall bat le Grand Djolof : le Cayor, le Baol, le Walo, le Sine, le Saloum se libèrent.",
  niveaux: [
    [
      { t: "qcm", q: "Avant l'arrivée des Blancs, comment était organisé le Sénégal ?", choix: ["en plusieurs États (royaumes)", "en un seul pays avec un président", "en colonies"], r: "en plusieurs États (royaumes)", expl: "Le Sénégal était formé de plusieurs royaumes." },
      { t: "vf", q: "Les sociétés de ces royaumes étaient divisées en castes.", r: true, expl: "C'est ce que dit la leçon." },
      { t: "qcm", q: "Qui a remporté la victoire de Danki en 1549 ?", choix: ["Amary Ngoné Sobel Fall", "Soundiata Keïta", "Askia Mohammed"], r: "Amary Ngoné Sobel Fall", expl: "Amary Ngoné Sobel Fall a battu le Grand Djolof." },
      { t: "qcm", q: "Contre quel royaume a eu lieu la bataille de Danki ?", choix: ["le Grand Djolof", "le Ghana", "le Maroc"], r: "le Grand Djolof", expl: "Amary Ngoné Sobel Fall a battu le Grand Djolof." },
      { t: "vf", q: "Le roi était choisi selon les règles du matrilignage.", r: true, expl: "Matrilignage : on suit la lignée de la mère." }
    ],
    [
      { t: "saisie", q: "En quelle année a eu lieu la bataille de Danki ?", r: "1549", nombre: true, expl: "En 1549." },
      { t: "qcm", q: "À quel siècle appartient l'année 1549 ?", choix: ["au 16e siècle", "au 15e siècle", "au 17e siècle"], r: "au 16e siècle", aide: "Le 16e siècle va de 1501 à 1600.", expl: "1549 est entre 1501 et 1600 : c'est le 16e siècle." },
      { t: "classer", q: "Range ces noms.", cases: ["royaume vassal libéré", "royaume dominant"], items: [["le Cayor", "royaume vassal libéré"], ["le Baol", "royaume vassal libéré"], ["le Walo", "royaume vassal libéré"], ["le Grand Djolof", "royaume dominant"], ["le Sine", "royaume vassal libéré"], ["le Saloum", "royaume vassal libéré"]], expl: "Le Djolof dominait ; les autres royaumes se sont libérés après Danki." },
      { t: "qcm", q: "Sur quoi reposait l'économie des royaumes ?", choix: ["l'agriculture, l'élevage, la pêche et les échanges", "les usines et le pétrole", "le tourisme"], r: "l'agriculture, l'élevage, la pêche et les échanges", expl: "Ils échangeaient aussi avec les empires du Soudan et les Arabo-Berbères." },
      { t: "trous", q: "Complète.", texte: "En [1549], Amary Ngoné Sobel Fall remporta une victoire à [Danki] sur le Grand [Djolof].", expl: "La bataille de Danki." },
      { t: "vf", q: "Après Danki, le Cayor et le Baol se sont libérés du Djolof.", r: true, expl: "Plusieurs royaumes vassaux se sont libérés peu à peu." },
      { t: "qcm", q: "Avec qui les royaumes du Sénégal faisaient-ils des échanges ?", choix: ["avec les empires du Soudan et les Arabo-Berbères du Sahara", "avec l'Amérique", "avec la Chine"], r: "avec les empires du Soudan et les Arabo-Berbères du Sahara", expl: "C'est ce que dit la leçon." },
      { t: "saisie", q: "Où Amary Ngoné Sobel Fall a-t-il remporté sa victoire ?", r: "Danki", expl: "À Danki, en 1549." }
    ],
    [
      { t: "qcm", q: "Que veut dire « royaume vassal » ?", choix: ["un royaume soumis à un autre royaume", "un royaume très riche", "un royaume au bord de la mer"], r: "un royaume soumis à un autre royaume", expl: "Le Cayor, le Baol, le Walo… étaient soumis au Djolof avant de se libérer." },
      { t: "vf", q: "1549 appartient au 15e siècle.", r: false, expl: "1549 appartient au 16e siècle (de 1501 à 1600)." },
      { t: "qcm", q: "Les populations de ces royaumes étaient unies par…", choix: ["un même passé, la parenté de sang ou la parenté à plaisanterie", "une même usine", "une même équipe de football"], r: "un même passé, la parenté de sang ou la parenté à plaisanterie", expl: "La parenté à plaisanterie lie encore aujourd'hui des familles et des ethnies du Sénégal." },
      { t: "classer", q: "Range : vrai ou faux ?", cases: ["vrai", "faux"], items: [["Le Djolof dominait plusieurs royaumes.", "vrai"], ["Les sociétés étaient divisées en castes.", "vrai"], ["Le roi était élu par tout le peuple.", "faux"], ["Danki a eu lieu en 1235.", "faux"]], expl: "Le roi était choisi par le matrilignage ; Danki date de 1549 (1235, c'est Kirina)." },
      { t: "saisie", q: "Quel royaume a été battu à Danki ? Le Grand …", r: "Djolof", expl: "Le Grand Djolof." },
      { t: "relier", q: "Relie.", paires: [["Danki", "victoire de 1549"], ["Amary Ngoné Sobel Fall", "vainqueur de Danki"], ["matrilignage", "choix du roi par la lignée de la mère"], ["castes", "division de la société"]], expl: "Les mots-clés de la leçon." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Avant l'arrivée des Blancs, le Sénégal était formé de plusieurs [royaumes]. Les sociétés étaient divisées en [castes]. En 1549, au [16]e siècle, Amary Ngoné Sobel Fall battit le Grand Djolof à [Danki]. Le Cayor, le Baol, le Walo, le Sine et le [Saloum] se libérèrent peu à peu.", expl: "Toute la leçon en un texte." },
      { t: "relier", q: "Ne confonds pas les dates : relie chaque événement à son année.", paires: [["Kirina", "1235"], ["Danki", "1549"], ["conquête du Songhaï par les Marocains", "1591"]], expl: "Kirina : Soundiata (Mali). Danki : Amary Ngoné Sobel Fall (Sénégal). 1591 : fin de la puissance songhaï." },
      { t: "probleme", q: "La bataille de Kirina a eu lieu en 1235 et celle de Danki en 1549.", etapes: [{ q: "Combien d'années séparent ces deux batailles ?", r: "314", unite: "ans" }], expl: "1549 − 1235 = 314." },
      { t: "qcm", q: "Lequel de ces noms n'est PAS un royaume du Sénégal cité dans la leçon ?", choix: ["Niani", "Cayor", "Walo", "Sine"], r: "Niani", expl: "Niani est la capitale de l'empire du Mali." },
      { t: "vf", q: "Après la victoire de Danki, le Djolof est devenu encore plus puissant.", r: false, expl: "Au contraire, ses royaumes vassaux ont commencé à se libérer." }
    ]
  ]
});
