// À VÉRIFIER : dans la liste des pronoms compléments, le cahier écrit « tu » et « leurs » ; corrigé en « te » et « leur » (le pronom personnel leur ne prend jamais de s).
// À VÉRIFIER : la définition du cahier s'arrête à « désigne celui, celle, ceux, celles qui parle » ; le module la complète (qui parle, à qui l'on parle, dont on parle).
LECONS.push({
  id: "fr-gram-pronoms-personnels",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les pronoms personnels",
  date: "2026-10-15",
  photos: ["DJI_20261118220534_0042_D.jpg", "DJI_20261118220539_0043_D.jpg"],
  retiens:
    "<p>Le pronom personnel désigne la personne qui parle, celle à qui l'on parle ou celle dont on parle.</p>" +
    "<p>→ Les pronoms personnels <b>sujets</b> sont : je, tu, il, elle, nous, vous, ils, elles.</p>" +
    "<p>→ Les pronoms personnels <b>compléments</b> se placent en général <b>avant le verbe</b>.<br>Ex : La directrice <b>les</b> convoque.</p>" +
    "<p>Les pronoms personnels compléments sont : me, te, se, moi, toi, lui, leur, le, la, les, l', nous, vous.</p>" +
    "<p>Ces pronoms <b>remplacent des noms</b>.<br>Ex : Les invités sont arrivés et maman <b>les</b> reçoit. (les = les invités)</p>" +
    "<p><b>Exemple d'analyse</b><br><b>les</b> : pronom personnel, COD du verbe recevoir.</p>",
  astuce: "Pour savoir ce que remplace le pronom, cherche le nom dans la phrase d'avant : « Les invités sont arrivés et maman <b>les</b> reçoit » → maman reçoit <b>les invités</b>.",
  regle: "Le pronom personnel remplace un nom. Sujets : je, tu, il, elle, nous, vous, ils, elles. Compléments (en général avant le verbe) : me, te, se, le, la, l', les, lui, leur, nous, vous…",
  niveaux: [
    [
      { t: "qcm", q: "Un pronom personnel sert à…", choix: ["remplacer un nom", "relier deux phrases", "décrire un nom"], r: "remplacer un nom", expl: "Les pronoms remplacent des noms." },
      { t: "classer", q: "Range ces pronoms personnels.", cases: ["sujet", "complément"], items: [["je", "sujet"], ["me", "complément"], ["tu", "sujet"], ["te", "complément"], ["ils", "sujet"], ["leur", "complément"], ["elle", "sujet"], ["lui", "complément"]], expl: "je, tu, il, elle, ils, elles sont sujets ; me, te, lui, leur, le, la, les sont compléments." },
      { t: "vf", q: "« nous » et « vous » peuvent être sujets ou compléments.", r: true, expl: "Nous partons (sujet). Il nous appelle (complément)." },
      { t: "qcm", q: "« La directrice <b>les</b> convoque. » Où est placé le pronom complément ?", choix: ["avant le verbe", "après le verbe", "à la fin de la phrase"], r: "avant le verbe", expl: "Le pronom complément se place avant le verbe." },
      { t: "qcm", q: "Quel est le pronom sujet dans « Elles cuisinent le mafé » ?", choix: ["Elles", "le", "mafé"], r: "Elles", expl: "Qui est-ce qui cuisine ? Elles : pronom personnel sujet." },
      { t: "vf", q: "« tu » est un pronom complément.", r: false, expl: "« tu » est sujet. Le pronom complément de la même personne est « te » : il te parle." }
    ],
    [
      { t: "trous", q: "Remplace le groupe en gras par un pronom sujet.", texte: "<b>Awa</b> danse → [Elle] danse. — <b>Les pêcheurs</b> partent → [Ils] partent. — <b>Moussa et moi</b> jouons → [Nous] jouons. — <b>Les filles</b> chantent → [Elles] chantent.", expl: "Il, elle, ils, elles remplacent des noms ; « Moussa et moi » = nous." },
      { t: "qcm", q: "« Les invités sont arrivés et maman <b>les</b> reçoit. » « les » remplace…", choix: ["les invités", "maman", "arrivés"], r: "les invités", expl: "Maman reçoit les invités : les = les invités." },
      { t: "qcm", q: "« J'ai vu Fatou et je <b>la</b> salue. » « la » remplace…", choix: ["Fatou", "je", "vu"], r: "Fatou", expl: "Je salue Fatou : la = Fatou." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Le maître appelle <b>Ibrahima</b>. » → Le maître … appelle.", r: "l'", expl: "« le » devient « l' » devant une voyelle : le maître l'appelle." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Je lave <b>les assiettes</b>. » → Je … lave.", r: "les", expl: "Les assiettes (pluriel) → les." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Khady parle <b>à sa sœur</b>. » → Khady … parle.", r: "lui", expl: "à sa sœur → lui." },
      { t: "saisie", q: "Remplace le groupe en gras par un pronom : « Le maître parle <b>aux élèves</b>. » → Le maître … parle.", r: "leur", aide: "Attention : pas de s.", expl: "aux élèves → leur, sans s." },
      { t: "relier", q: "Relie le pronom sujet au pronom complément de la même personne.", paires: [["je", "me"], ["tu", "te"], ["nous", "nous"], ["vous", "vous"]], expl: "je → me, tu → te, nous → nous, vous → vous." },
      { t: "vf", q: "Dans « Mon père nous emmène à Thiès », « nous » est complément.", r: true, expl: "Le sujet est « Mon père » ; « nous » est placé avant le verbe et le complète." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Il te donne un livre.", "Il tu donne un livre.", "Il toi donne un livre."], r: "Il te donne un livre.", expl: "Devant le verbe, le pronom complément est « te »." },
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["Je leur parle.", "Je leurs parle.", "Je les parle à."], r: "Je leur parle.", expl: "Le pronom personnel « leur » ne prend jamais de s." },
      { t: "saisie", q: "Récris la phrase en remplaçant « les mangues » par un pronom : « Awa achète les mangues. »", r: "Awa les achète.", large: true, expl: "Le pronom complément se place avant le verbe : Awa les achète." },
      { t: "saisie", q: "Récris la phrase en remplaçant « à ses parents » par un pronom : « Moussa obéit à ses parents. »", r: "Moussa leur obéit.", large: true, expl: "à ses parents → leur, placé avant le verbe." },
      { t: "qcm", q: "Analyse « les » dans « Maman les reçoit ».", choix: ["pronom personnel, COD du verbe recevoir", "article défini, détermine reçoit", "pronom personnel, sujet du verbe recevoir"], r: "pronom personnel, COD du verbe recevoir", expl: "Devant le verbe, « les » est un pronom : maman reçoit qui ? les (invités)." },
      { t: "vf", q: "Dans « Les enfants jouent », « Les » est un pronom personnel.", r: false, expl: "Ici, « Les » est devant un nom (enfants) : c'est un article." },
      { t: "trous", q: "Complète avec le bon pronom complément.", texte: "Où sont tes chaussures ? Je [les] cherche. — As-tu vu Mamadou ? Je [lui] ai téléphoné. — Tes cousins t'attendent ; tu dois [leur] écrire.", expl: "les (COD pluriel) ; lui (à Mamadou) ; leur (à tes cousins)." }
    ],
    [
      { t: "dictee", texte: "Les invités sont arrivés et maman les reçoit dans le salon.", expl: "« les » est un pronom complément placé avant le verbe." },
      { t: "dictee", texte: "Mes grands-parents habitent à Kaolack ; je leur téléphone chaque dimanche.", expl: "« leur » devant un verbe ne prend pas de s." },
      { t: "trous", q: "Remplace chaque groupe en gras par un pronom (sujet ou complément).", texte: "<b>Fatou</b> ([Elle]) prépare le repas. <b>Ses frères</b> ([Ils]) l'aident. Elle sert <b>le riz</b> → elle [le] sert. Elle donne de l'eau <b>à ses frères</b> → elle [leur] donne de l'eau.", expl: "Elle, ils (sujets) ; le, leur (compléments)." },
      { t: "classer", q: "Le mot en gras est-il un pronom personnel ou un article ?", cases: ["pronom personnel", "article"], items: [["Je <b>la</b> vois.", "pronom personnel"], ["<b>La</b> pluie tombe.", "article"], ["Il <b>les</b> range.", "pronom personnel"], ["<b>Les</b> cahiers sont neufs.", "article"], ["Tu <b>le</b> manges.", "pronom personnel"], ["<b>Le</b> car arrive.", "article"]], expl: "Devant un verbe : pronom. Devant un nom : article." },
      { t: "saisie", q: "Récris la phrase en remplaçant les deux groupes en gras par des pronoms : « <b>Le maître</b> félicite <b>les élèves</b>. »", r: "Il les félicite.", large: true, expl: "Le maître → Il (sujet) ; les élèves → les (complément, avant le verbe)." }
    ]
  ]
});
