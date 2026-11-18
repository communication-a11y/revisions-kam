// À VÉRIFIER : le cahier écrit « Kanka Moussa » (photo 0147) ; l'orthographe usuelle est « Kankou Moussa », retenue ici.
// À VÉRIFIER : les dates des attaques des Touaregs et des Mossis et de la conquête par le Songhaï sont illisibles (photos 0148 et 0152). Le module dit seulement « au 15e siècle », comme le tableau récapitulatif ; aucune de ces dates n'est demandée.
LECONS.push({
  id: "hi-empire-mali",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'empire du Mali",
  date: "2026-10-19",
  photos: ["DJI_20261118222140_0146_D.jpg", "DJI_20261118222145_0147_D.jpg", "DJI_20261118222153_0148_D.jpg"],
  retiens:
    "<p><b>Les débuts de l'empire</b> : l'empire du Mali est né des <b>ruines de l'empire du Ghana</b>. Au <b>13<sup>e</sup> siècle</b>, le pays mandingue était divisé en petits royaumes dominés par le <b>royaume sosso</b> de <b>Soumangourou Kanté</b>. <b>Soundiata Keïta</b>, fils d'un roi, réunit une armée et, à la <b>bataille de Kirina</b> en <b>1235</b>, il anéantit le Sosso.</p>" +
    "<p><b>Souverains et titres</b> :</p>" +
    "<ul><li>Soundiata porta le titre de <b>Mansa</b> (l'empereur) ;</li>" +
    "<li>à sa mort, en <b>1255</b>, il laissa un empire solide où il avait fait régner la paix et la sécurité ;</li>" +
    "<li>plus tard, l'empire fut dirigé par <b>Kankou Moussa</b>, qui fit son <b>pèlerinage à La Mecque</b> en <b>1324</b> ;</li>" +
    "<li>la capitale de l'empire était <b>Niani</b>.</li></ul>" +
    "<p><b>Organisation administrative</b> : l'empire avait un gouvernement dirigé par un premier ministre, le <b>vizir</b>, et des <b>farba</b> qui dirigeaient les régions. Il disposait d'une puissante armée.</p>" +
    "<p><b>Économie</b> : les revenus venaient des <b>tributs</b> payés par les royaumes vassaux, des <b>taxes</b> sur le commerce et des <b>impôts</b> payés par les populations.</p>" +
    "<p><b>Déclin</b> : l'empire déclina à cause des attaques des <b>Touaregs</b> et des <b>Mossis</b>. Au <b>15<sup>e</sup> siècle</b>, il fut conquis par l'<b>empire songhaï</b>.</p>",
  astuce: "<b>M</b>ali : <b>M</b>ansa, <b>M</b>oussa, La <b>M</b>ecque… et Soundiata vainqueur à <b>K</b>irina contre le <b>K</b>anté du Sosso.",
  regle: "Le Mali est fondé par Soundiata Keïta après la bataille de Kirina (1235) contre Soumangourou Kanté. L'empereur porte le titre de Mansa ; la capitale est Niani ; Kankou Moussa fait le pèlerinage à La Mecque en 1324.",
  niveaux: [
    [
      { t: "qcm", q: "Qui a fondé l'empire du Mali ?", choix: ["Soundiata Keïta", "Sonni Ali Ber", "Amary Ngoné Sobel Fall"], r: "Soundiata Keïta", expl: "Soundiata Keïta, vainqueur à Kirina en 1235." },
      { t: "qcm", q: "Quel titre portait l'empereur du Mali ?", choix: ["Mansa", "Tounka", "Askia"], r: "Mansa", expl: "Mansa veut dire l'empereur." },
      { t: "qcm", q: "Quelle était la capitale du Mali ?", choix: ["Niani", "Koumbi-Saleh", "Gao"], r: "Niani", expl: "Niani pour le Mali, Koumbi-Saleh pour le Ghana, Gao pour le Songhaï." },
      { t: "vf", q: "L'empire du Mali est né des ruines de l'empire du Ghana.", r: true, expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Qui dirigeait le royaume sosso ?", choix: ["Soumangourou Kanté", "Kankou Moussa", "Askia Mohammed"], r: "Soumangourou Kanté", expl: "Soundiata l'a vaincu à Kirina." },
      { t: "vf", q: "Kankou Moussa a fait le pèlerinage à La Mecque.", r: true, expl: "En 1324." }
    ],
    [
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1235", "bataille de Kirina"], ["1255", "mort de Soundiata"], ["1324", "pèlerinage de Kankou Moussa"], ["15e siècle", "conquête par le Songhaï"]], expl: "Les grandes dates de l'empire du Mali." },
      { t: "saisie", q: "En quelle année a eu lieu la bataille de Kirina ?", r: "1235", nombre: true, expl: "En 1235, Soundiata anéantit le Sosso." },
      { t: "saisie", q: "En quelle année Kankou Moussa a-t-il fait son pèlerinage à La Mecque ?", r: "1324", nombre: true, expl: "En 1324." },
      { t: "saisie", q: "Quelle était la capitale de l'empire du Mali ?", r: "Niani", expl: "La capitale était Niani." },
      { t: "qcm", q: "Qui dirigeait le gouvernement de l'empire du Mali ?", choix: ["un premier ministre appelé vizir", "le Tounka", "un scribe"], r: "un premier ministre appelé vizir", expl: "Le vizir dirigeait le gouvernement, les farba dirigeaient les régions." },
      { t: "qcm", q: "Que dirigeaient les farba ?", choix: ["les régions", "l'armée marocaine", "les mosquées"], r: "les régions", expl: "Les farba dirigeaient les régions de l'empire." },
      { t: "trous", q: "Complète.", texte: "Soundiata Keïta porta le titre de [Mansa]. Il mourut en [1255] en laissant un empire solide.", expl: "Mansa = l'empereur." },
      { t: "vf", q: "Les revenus du Mali venaient des tributs, des taxes sur le commerce et des impôts.", r: true, expl: "C'est la partie « économie » de la leçon." },
      { t: "qcm", q: "Quel empire a conquis le Mali au 15e siècle ?", choix: ["l'empire songhaï", "l'empire du Ghana", "l'Égypte"], r: "l'empire songhaï", expl: "Le Songhaï (Gao) a conquis le Mali." }
    ],
    [
      { t: "qcm", q: "Au 13e siècle, comment était organisé le pays mandingue ?", choix: ["en petits royaumes dominés par le Sosso", "en un seul grand empire", "en colonies européennes"], r: "en petits royaumes dominés par le Sosso", expl: "Soundiata a uni ces royaumes après avoir vaincu le Sosso." },
      { t: "vf", q: "Soundiata Keïta a perdu la bataille de Kirina.", r: false, expl: "Il l'a gagnée : il a anéanti le Sosso en 1235." },
      { t: "classer", q: "Range ces mots.", cases: ["organisation", "économie", "déclin"], items: [["le vizir", "organisation"], ["les farba", "organisation"], ["les tributs", "économie"], ["les taxes sur le commerce", "économie"], ["les attaques des Touaregs", "déclin"], ["les attaques des Mossis", "déclin"]], expl: "Les trois parties de la deuxième leçon sur le Mali." },
      { t: "qcm", q: "Qu'est-ce qu'un tribut ?", choix: ["ce que paient les royaumes vassaux à l'empire", "un marché de poissons", "une arme de chasse"], r: "ce que paient les royaumes vassaux à l'empire", expl: "Les royaumes vassaux (soumis) payaient un tribut à l'empire." },
      { t: "saisie", q: "Comment s'appelle la bataille gagnée par Soundiata en 1235 ?", r: ["Kirina", "la bataille de Kirina"], expl: "La bataille de Kirina." },
      { t: "relier", q: "Relie chaque personnage à ce qu'il a fait.", paires: [["Soundiata Keïta", "fonde l'empire du Mali"], ["Soumangourou Kanté", "roi du Sosso, vaincu à Kirina"], ["Kankou Moussa", "pèlerinage à La Mecque"]], expl: "Trois personnages de la leçon." },
      { t: "vf", q: "Les Touaregs et les Mossis ont attaqué l'empire du Mali.", r: true, expl: "Ces attaques ont causé son déclin." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'empire du Mali est né des ruines du [Ghana]. Soundiata Keïta vainquit Soumangourou Kanté à [Kirina] en 1235. L'empereur portait le titre de [Mansa] et la capitale était [Niani]. Kankou Moussa fit son pèlerinage à La Mecque en [1324].", expl: "Toute la leçon en un texte." },
      { t: "probleme", q: "Soundiata gagne la bataille de Kirina en 1235 et meurt en 1255. Kankou Moussa part à La Mecque en 1324.", etapes: [{ q: "Étape 1 : combien d'années Soundiata a-t-il vécu après Kirina ?", r: "20", unite: "ans" }, { q: "Étape 2 : combien d'années séparent la mort de Soundiata du pèlerinage de Kankou Moussa ?", r: "69", unite: "ans" }], expl: "1255 − 1235 = 20 ; 1324 − 1255 = 69." },
      { t: "qcm", q: "Remets dans l'ordre : quelle suite est juste ?", choix: ["bataille de Kirina – mort de Soundiata – pèlerinage de Kankou Moussa – conquête par le Songhaï", "pèlerinage de Kankou Moussa – bataille de Kirina – mort de Soundiata – conquête par le Songhaï", "conquête par le Songhaï – bataille de Kirina – pèlerinage de Kankou Moussa – mort de Soundiata"], r: "bataille de Kirina – mort de Soundiata – pèlerinage de Kankou Moussa – conquête par le Songhaï", expl: "1235, 1255, 1324, puis le 15e siècle." },
      { t: "vf", q: "Le Ghana a conquis le Mali en 1240.", r: false, expl: "C'est l'inverse : en 1240, le Mali a conquis le Ghana." },
      { t: "relier", q: "Relie chaque empire à sa capitale.", paires: [["Ghana", "Koumbi-Saleh"], ["Mali", "Niani"], ["Songhaï", "Gao"]], expl: "Les trois capitales des grands empires." }
    ]
  ]
});
