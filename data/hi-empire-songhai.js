// À VÉRIFIER : le cahier (photo 0152) écrit que l'empire songhaï entra en déclin « après les attaques de Berbères (Almoravides) au 17e siècle ». Les Almoravides appartiennent au 11e siècle (ils attaquent le Ghana en 1052-1076) et ne sont pas liés à la chute du Songhaï. Le module garde seulement : conquête marocaine en 1591, puis déclin et divisions (17e siècle).
LECONS.push({
  id: "hi-empire-songhai",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'empire du Songhaï ou de Gao",
  date: "2026-11-02",
  photos: ["DJI_20261118222153_0148_D.jpg", "DJI_20261118222156_0149_D.jpg", "DJI_20261118222207_0151_D.jpg", "DJI_20261118222211_0152_D.jpg"],
  retiens:
    "<p><b>Origines, situation et étendue</b> : l'empire de Gao (ou empire songhaï) a été créé après le déclin de l'empire du Mali, au <b>15<sup>e</sup> siècle</b>. Il s'étendait autour de la <b>boucle du Niger</b>.</p>" +
    "<p><b>Souverains, titres et organisation</b> :</p>" +
    "<ul><li><b>Sonni Ali Ber</b>, ou Sonni Ali le Grand, a libéré le pays de la domination du Mali. Il appartenait à la dynastie des <b>Sonni</b> (de <b>1464 à 1492</b>) ;</li>" +
    "<li>à sa mort, en 1492, son fils le remplaça, mais il fut destitué par <b>Askia Mohammed</b> (de <b>1493 à 1528</b>), qui conduisit l'empire à son <b>apogée</b> au <b>16<sup>e</sup> siècle</b> ;</li>" +
    "<li>la capitale de l'empire était <b>Gao</b> ; le roi portait le titre de <b>Sonni</b>, puis d'<b>Askia</b>.</li></ul>" +
    "<p><b>Organisation économique</b> : les revenus reposaient sur les impôts du port, sur l'agriculture, l'artisanat et le <b>commerce transsaharien</b>.</p>" +
    "<p><b>Le déclin</b> : l'empire était menacé par ses voisins. En <b>1591</b>, il fut conquis par les <b>troupes marocaines</b>, puis il entra en déclin et se divisa (17<sup>e</sup> siècle).</p>",
  astuce: "Le Songhaï, c'est <b>G</b>ao, le dernier des trois empires : <b>S</b>onni d'abord, <b>A</b>skia ensuite, puis les Marocains en 1591.",
  regle: "Le Songhaï (capitale Gao) naît au 15e siècle après le déclin du Mali. Sonni Ali Ber le libère ; Askia Mohammed le mène à son apogée au 16e siècle ; les Marocains le conquièrent en 1591.",
  niveaux: [
    [
      { t: "qcm", q: "Quelle était la capitale de l'empire songhaï ?", choix: ["Gao", "Niani", "Koumbi-Saleh"], r: "Gao", expl: "C'est pourquoi on l'appelle aussi l'empire de Gao." },
      { t: "qcm", q: "Après le déclin de quel empire le Songhaï a-t-il été créé ?", choix: ["l'empire du Mali", "l'empire du Ghana", "l'Égypte ancienne"], r: "l'empire du Mali", expl: "Il est né au 15e siècle, après le déclin du Mali." },
      { t: "vf", q: "Sonni Ali Ber a libéré le pays de la domination du Mali.", r: true, expl: "On l'appelle aussi Sonni Ali le Grand." },
      { t: "qcm", q: "Qui a conduit l'empire songhaï à son apogée ?", choix: ["Askia Mohammed", "Soundiata Keïta", "le Kaya Maghan"], r: "Askia Mohammed", expl: "Askia Mohammed, au 16e siècle." },
      { t: "qcm", q: "Qui a conquis l'empire songhaï en 1591 ?", choix: ["les troupes marocaines", "les Perses", "les Almoravides"], r: "les troupes marocaines", expl: "Les troupes du Maroc, en 1591." },
      { t: "vf", q: "Les rois du Songhaï portaient le titre de Mansa.", r: false, expl: "Ils portaient le titre de Sonni, puis d'Askia. Mansa est le titre du Mali." }
    ],
    [
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["1464 à 1492", "règne de la dynastie des Sonni (Sonni Ali Ber)"], ["1493 à 1528", "règne d'Askia Mohammed"], ["16e siècle", "apogée du Songhaï"], ["1591", "conquête marocaine"]], expl: "Les grandes dates de l'empire songhaï." },
      { t: "saisie", q: "En quelle année les troupes marocaines ont-elles conquis l'empire songhaï ?", r: "1591", nombre: true, expl: "En 1591." },
      { t: "saisie", q: "Quelle était la capitale de l'empire songhaï ?", r: "Gao", expl: "Gao." },
      { t: "qcm", q: "À quel siècle se situe l'apogée du Songhaï ?", choix: ["au 16e siècle", "au 10e siècle", "au 14e siècle"], r: "au 16e siècle", expl: "10e siècle : Ghana ; 14e siècle : Mali ; 16e siècle : Songhaï." },
      { t: "qcm", q: "Quels titres portaient les rois du Songhaï ?", choix: ["Sonni, puis Askia", "Tounka, puis Mansa", "Pharaon, puis Mansa"], r: "Sonni, puis Askia", expl: "D'abord la dynastie des Sonni, puis celle des Askia." },
      { t: "trous", q: "Complète.", texte: "Sonni Ali Ber appartenait à la dynastie des [Sonni]. Il fut suivi par son fils, destitué par [Askia] Mohammed.", expl: "Deux dynasties : Sonni puis Askia." },
      { t: "vf", q: "Le Songhaï s'étendait autour de la boucle du Niger.", r: true, expl: "C'est sa situation dans la leçon." },
      { t: "qcm", q: "Sur quoi reposaient les revenus de l'empire songhaï ?", choix: ["les impôts, l'agriculture, l'artisanat et le commerce transsaharien", "les usines de ciment", "la vente de pétrole"], r: "les impôts, l'agriculture, l'artisanat et le commerce transsaharien", expl: "C'est l'organisation économique de l'empire." },
      { t: "vf", q: "Sonni Ali Ber est mort en 1492.", r: true, expl: "Il a régné jusqu'en 1492." }
    ],
    [
      { t: "qcm", q: "Que s'est-il passé après la mort de Sonni Ali Ber ?", choix: ["son fils le remplaça, puis fut destitué par Askia Mohammed", "les Almoravides prirent Gao", "le Ghana conquit le Songhaï"], r: "son fils le remplaça, puis fut destitué par Askia Mohammed", expl: "Askia Mohammed prit le pouvoir en 1493." },
      { t: "vf", q: "Après 1591, le Songhaï devint encore plus puissant.", r: false, expl: "Après la conquête marocaine, il entra en déclin et se divisa." },
      { t: "saisie", q: "Comment appelle-t-on aussi Sonni Ali Ber ? Sonni Ali le …", r: "Grand", expl: "Sonni Ali Ber = Sonni Ali le Grand." },
      { t: "relier", q: "Relie chaque personnage à ce qu'il a fait.", paires: [["Sonni Ali Ber", "libère le pays du Mali"], ["Askia Mohammed", "mène l'empire à son apogée"], ["les troupes marocaines", "conquièrent l'empire en 1591"]], expl: "Les acteurs de l'histoire du Songhaï." },
      { t: "qcm", q: "Combien d'années a régné Askia Mohammed (de 1493 à 1528) ?", choix: ["35 ans", "28 ans", "53 ans"], r: "35 ans", expl: "1528 − 1493 = 35." },
      { t: "classer", q: "Range ces informations.", cases: ["Songhaï", "Mali"], items: [["Gao", "Songhaï"], ["Niani", "Mali"], ["Askia", "Songhaï"], ["Mansa", "Mali"], ["1591", "Songhaï"], ["Kirina", "Mali"]], expl: "Ne mélange pas les deux empires." },
      { t: "vf", q: "Les Almoravides ont fait tomber le Songhaï au 17e siècle.", r: false, expl: "Les Almoravides sont du 11e siècle et ont attaqué le Ghana. Le Songhaï a été conquis par les Marocains en 1591." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "L'empire songhaï, dont la capitale était [Gao], est né au 15e siècle après le déclin du [Mali]. Sonni Ali Ber le libéra. Askia [Mohammed] le conduisit à son apogée au 16e siècle. En [1591], il fut conquis par les troupes [marocaines].", expl: "Toute la leçon en un texte." },
      { t: "probleme", q: "Sonni Ali Ber règne de 1464 à 1492. Askia Mohammed règne de 1493 à 1528.", etapes: [{ q: "Étape 1 : combien d'années a duré le règne de Sonni Ali Ber ?", r: "28", unite: "ans" }, { q: "Étape 2 : combien d'années se sont écoulées entre la fin du règne d'Askia Mohammed (1528) et la conquête marocaine (1591) ?", r: "63", unite: "ans" }], expl: "1492 − 1464 = 28 ; 1591 − 1528 = 63." },
      { t: "qcm", q: "Remets dans l'ordre : quelle suite est juste ?", choix: ["Sonni Ali Ber – Askia Mohammed – conquête marocaine", "Askia Mohammed – Sonni Ali Ber – conquête marocaine", "conquête marocaine – Sonni Ali Ber – Askia Mohammed"], r: "Sonni Ali Ber – Askia Mohammed – conquête marocaine", expl: "1464-1492, 1493-1528, puis 1591." },
      { t: "relier", q: "Relie chaque empire à son titre royal.", paires: [["Ghana", "Tounka"], ["Mali", "Mansa"], ["Songhaï", "Sonni ou Askia"]], expl: "Chaque empire a son titre." },
      { t: "vf", q: "Le Songhaï est le plus récent des trois grands empires (Ghana, Mali, Songhaï).", r: true, expl: "Ghana (apogée au 10e siècle), Mali (14e siècle), Songhaï (16e siècle)." }
    ]
  ]
});
