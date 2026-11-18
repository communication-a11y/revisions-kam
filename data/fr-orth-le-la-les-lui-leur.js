// Ajout : « leur placé devant un verbe ne prend jamais de s » ne figure pas mot pour mot dans cette leçon, mais découle de la correction de la leçon précédente (le cahier écrivait « leurs » parmi les pronoms) ; c'est le piège d'orthographe de la leçon.
LECONS.push({
  id: "fr-orth-le-la-les-lui-leur",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Le, la, les, l', lui, leur devant un verbe",
  date: "2026-10-15",
  photos: ["DJI_20261118220539_0043_D.jpg", "DJI_20261118220547_0044_D.jpg"],
  retiens:
    "<p>Placés <b>devant un verbe</b>, le, la, les, l', lui, leur sont des <b>pronoms personnels compléments</b>.</p>" +
    "<ul><li><b>le, la, les, l'</b> sont <b>COD</b>.<br>Ex : Je <b>le</b> vois. (Je vois qui ? le maître)</li>" +
    "<li><b>lui, leur</b> sont <b>COI</b>.<br>Ex : Il <b>lui</b> demande comment il fait. (Il demande à qui ? à lui)</li></ul>" +
    "<p><b>Attention :</b> devant un verbe, <b>leur</b> est un pronom : il ne prend jamais de <b>s</b>. Ex : Je <b>leur</b> parle.</p>" +
    "<p>Devant un <b>nom</b>, le, la, les, l' sont des <b>articles</b> : <b>le</b> maître, <b>la</b> porte.</p>",
  astuce: "Regarde le mot qui suit : un <b>verbe</b> → c'est un pronom (je <b>la</b> regarde) ; un <b>nom</b> → c'est un article (<b>la</b> porte). Pour leur : si tu peux dire « lui » à la place, c'est le pronom, sans s.",
  regle: "Devant un verbe, le, la, les, l' sont des pronoms COD et lui, leur des pronoms COI. Le pronom leur ne prend jamais de s.",
  niveaux: [
    [
      { t: "qcm", q: "Devant un verbe, « le, la, les, l' » sont…", choix: ["des pronoms personnels compléments", "des articles", "des noms"], r: "des pronoms personnels compléments", expl: "Devant un verbe, ce sont des pronoms." },
      { t: "qcm", q: "Devant un verbe, « le, la, les, l' » ont la fonction de…", choix: ["COD", "COI", "sujet"], r: "COD", expl: "Je le vois : je vois qui ? le (maître) : COD." },
      { t: "qcm", q: "Devant un verbe, « lui, leur » ont la fonction de…", choix: ["COI", "COD", "sujet"], r: "COI", expl: "Il lui demande : il demande à qui ? à lui : COI." },
      { t: "vf", q: "Dans « Je le vois », « le » est un article.", r: false, expl: "« le » est devant le verbe « vois » : c'est un pronom, COD." },
      { t: "vf", q: "Le pronom « leur » placé devant un verbe ne prend jamais de s.", r: true, expl: "Je leur parle, je leur donne : jamais de s." },
      { t: "classer", q: "Le mot en gras est-il devant un verbe ou devant un nom ?", cases: ["pronom (devant un verbe)", "article (devant un nom)"], items: [["Je <b>la</b> regarde.", "pronom (devant un verbe)"], ["<b>La</b> porte est ouverte.", "article (devant un nom)"], ["Tu <b>les</b> appelles.", "pronom (devant un verbe)"], ["<b>Les</b> élèves arrivent.", "article (devant un nom)"], ["Il <b>l'</b>aime.", "pronom (devant un verbe)"], ["<b>L'</b>école est fermée.", "article (devant un nom)"]], expl: "Devant un verbe : pronom. Devant un nom : article." }
    ],
    [
      { t: "trous", q: "Remplace le groupe en gras par le, la, l' ou les.", texte: "Je vois <b>le maître</b> → Je [le] vois. — Awa lave <b>la marmite</b> → Awa [la] lave. — Il range <b>ses cahiers</b> → Il [les] range. — Tu aimes <b>ton école</b> → Tu [l']aimes.", expl: "Masculin : le ; féminin : la ; pluriel : les ; devant une voyelle : l'." },
      { t: "trous", q: "Remplace le groupe en gras par lui ou leur.", texte: "Il parle <b>à son ami</b> → Il [lui] parle. — Je téléphone <b>à mes parents</b> → Je [leur] téléphone. — Nous obéissons <b>au maître</b> → Nous [lui] obéissons.", expl: "Un seul : lui ; plusieurs : leur (sans s)." },
      { t: "qcm", q: "« Les enfants ont faim ; maman … donne du riz. »", choix: ["leur", "leurs", "les"], r: "leur", expl: "Maman donne du riz à qui ? aux enfants → leur, sans s." },
      { t: "qcm", q: "« J'ai vu Fatou et je … ai parlé. »", choix: ["lui", "la", "leur"], r: "lui", expl: "J'ai parlé à qui ? à Fatou → lui (COI)." },
      { t: "qcm", q: "« J'ai vu Fatou et je … ai saluée. »", choix: ["l'", "lui", "leur"], r: "l'", expl: "J'ai salué qui ? Fatou → la, qui devient l' devant une voyelle (COD)." },
      { t: "saisie", q: "Quelle est la fonction de « lui » dans « Il lui demande comment il fait » ?", r: "COI", expl: "Il demande à qui ? à lui : COI." },
      { t: "saisie", q: "Quelle est la fonction de « les » dans « Maman les reçoit » ?", r: "COD", expl: "Maman reçoit qui ? les (invités) : COD." },
      { t: "relier", q: "Relie chaque pronom à sa fonction.", paires: [["le", "COD"], ["la", "COD"], ["lui", "COI"], ["leur", "COI"]], expl: "le, la, les, l' : COD ; lui, leur : COI." },
      { t: "vf", q: "« Je leurs écris une lettre. » est bien écrit.", r: false, expl: "Devant le verbe, « leur » est un pronom : pas de s. Je leur écris." }
    ],
    [
      { t: "classer", q: "Dans chaque phrase, « leur » est-il devant un verbe ou devant un nom ?", cases: ["pronom devant un verbe", "devant un nom"], items: [["Je leur parle.", "pronom devant un verbe"], ["C'est leur maison.", "devant un nom"], ["Il leur donne du pain.", "pronom devant un verbe"], ["Leur chien aboie.", "devant un nom"], ["Nous leur écrivons.", "pronom devant un verbe"], ["J'aime leur jardin.", "devant un nom"]], expl: "Le pronom « leur » est devant un verbe et ne prend jamais de s." },
      { t: "saisie", q: "Récris la phrase en remplaçant « à ses cousins » par un pronom : « Khady envoie une lettre à ses cousins. »", r: "Khady leur envoie une lettre.", large: true, expl: "à ses cousins → leur (COI), placé devant le verbe, sans s." },
      { t: "saisie", q: "Récris la phrase en remplaçant « la radio » par un pronom : « Grand-père écoute la radio. »", r: "Grand-père l'écoute.", large: true, expl: "la radio → la, qui devient l' devant une voyelle." },
      { t: "qcm", q: "Dans « Le maître les félicite », « les » est…", choix: ["pronom personnel, COD de féliciter", "article défini", "pronom personnel, COI de féliciter"], r: "pronom personnel, COD de féliciter", expl: "Devant le verbe ; le maître félicite qui ? les (élèves) : COD." },
      { t: "trous", q: "Complète avec le, la, les, lui ou leur.", texte: "Moussa a un vélo neuf ; il [le] nettoie chaque jour. Ses amis [l']admirent et il [leur] prête parfois son vélo.", expl: "le vélo → le (COD) ; Moussa → l' (COD, devant une voyelle) ; à ses amis → leur (COI)." },
      { t: "vf", q: "Dans « Elle leur offre des bonbons », « leur » est COI.", r: true, expl: "Elle offre des bonbons à qui ? à eux → leur (COI)." }
    ],
    [
      { t: "dictee", texte: "Les invités sont arrivés ; maman les accueille et leur offre du jus de bissap.", expl: "« les » : COD ; « leur » : COI, sans s devant le verbe." },
      { t: "dictee", texte: "Mon petit frère a perdu son ballon ; je le cherche partout et je lui promets de le retrouver.", expl: "« le » (COD) ; « lui » (COI)." },
      { t: "trous", q: "Complète ce texte.", texte: "Les élèves attendent le maître. Quand il arrive, ils [le] saluent. Le maître [leur] distribue les cahiers et [leur] demande de travailler en silence.", expl: "saluer qui ? le maître → le (COD) ; distribuer à qui ? aux élèves → leur (COI, sans s)." },
      { t: "qcm", q: "Quelle phrase est bien écrite ?", choix: ["Je leur prête mes livres.", "Je leurs prête mes livres.", "Je leur prête mes livre.", "Je leurs prêtent mes livres."], r: "Je leur prête mes livres.", expl: "Le pronom leur ne prend pas de s ; « mes livres » est au pluriel." },
      { t: "relier", q: "Relie chaque phrase au pronom qui convient.", paires: [["Tu vois la mer ? Je … vois.", "la"], ["Tu vois tes amis ? Je … vois.", "les"], ["Tu parles à tes amis ? Je … parle.", "leur"], ["Tu parles à Awa ? Je … parle.", "lui"]], expl: "COD : la, les ; COI : lui, leur." }
    ]
  ]
});
