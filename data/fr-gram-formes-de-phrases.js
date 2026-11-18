// À VÉRIFIER : au cahier, « Une phrase dont le sujet est mis à la forme interrogative » est confus ; le module écrit « Une phrase mise à la forme interrogative ou interro-négative ».
// Corrections : « ou négation » → « ou négative » ; « Les forme négative » → « La forme négative » ; « n'ont ils pas » → « n'ont-ils pas ».
LECONS.push({
  id: "fr-gram-formes-de-phrases",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Les formes de phrases",
  date: "2026-09-22",
  photos: ["DJI_20261118220234_0021_D.jpg", "DJI_20261118220310_0024_D.jpg"],
  retiens:
    "<p>La phrase déclarative peut être à la forme <b>affirmative</b> (positive) ou à la forme <b>négative</b>.</p>" +
    "<p>La forme négative s'oppose à la forme affirmative. En général, elle contient des <b>mots de négation</b> : ne… pas, ne… plus, ne… jamais, ne… point, ne… guère…</p>" +
    "<p>Ex : Les élèves recopient la leçon. (affirmative)<br>Les élèves <b>ne</b> recopient <b>pas</b> la leçon. (négative)</p>" +
    "<p>Une phrase mise à la forme <b>interrogative</b> ou <b>interro-négative</b> demande l'inversion du sujet (le sujet passe après le verbe).</p>" +
    "<p>Ex : Les passagers ont-ils préparé les bagages ? (interrogative)<br>Les passagers <b>n'</b>ont-ils <b>pas</b> préparé les bagages ? (interro-négative)</p>",
  astuce: "La négation, ce sont deux mots qui entourent le verbe : <b>ne</b> devant, <b>pas</b> (ou plus, jamais…) derrière. Devant une voyelle, ne devient <b>n'</b>.",
  regle: "La forme négative contient deux mots de négation autour du verbe (ne… pas, ne… plus, ne… jamais…). La forme interro-négative pose une question à la forme négative, avec le sujet inversé.",
  niveaux: [
    [
      { t: "qcm", q: "« Les élèves recopient la leçon. » Cette phrase est à la forme…", choix: ["affirmative", "négative", "interro-négative"], r: "affirmative", expl: "Il n'y a aucun mot de négation : la phrase est affirmative." },
      { t: "qcm", q: "« Les élèves ne recopient pas la leçon. » Cette phrase est à la forme…", choix: ["affirmative", "négative", "interrogative"], r: "négative", expl: "Elle contient « ne… pas » : elle est négative." },
      { t: "vf", q: "La forme affirmative s'appelle aussi la forme positive.", r: true, expl: "Affirmative = positive." },
      { t: "vf", q: "« ne… jamais » est un mot de négation.", r: true, expl: "ne… pas, ne… plus, ne… jamais, ne… point, ne… guère sont des mots de négation." },
      { t: "classer", q: "Range ces phrases selon leur forme.", cases: ["affirmative", "négative"], items: [["Awa chante bien.", "affirmative"], ["Awa ne chante jamais.", "négative"], ["Il pleut à Ziguinchor.", "affirmative"], ["Il ne pleut plus.", "négative"], ["Moussa n'aime pas le lait.", "négative"], ["Moussa aime le lait.", "affirmative"]], expl: "Une phrase négative contient des mots de négation." },
      { t: "qcm", q: "Quels mots entourent le verbe dans « Je ne mange guère » ?", choix: ["ne… guère", "je… mange", "ne… mange"], r: "ne… guère", expl: "« ne… guère » est un mot de négation en deux parties." }
    ],
    [
      { t: "saisie", q: "Mets à la forme négative avec « ne… pas » : « Fatou regarde la télévision. »", r: "Fatou ne regarde pas la télévision.", large: true, expl: "On place « ne » avant le verbe et « pas » après." },
      { t: "saisie", q: "Mets à la forme négative avec « ne… plus » : « Mon frère joue au football. »", r: "Mon frère ne joue plus au football.", large: true, expl: "ne + verbe + plus." },
      { t: "saisie", q: "Mets à la forme négative avec « ne… jamais » : « Ibrahima arrive en retard. »", r: "Ibrahima n'arrive jamais en retard.", large: true, aide: "Devant une voyelle, « ne » devient « n' ».", expl: "« arrive » commence par une voyelle : ne → n'." },
      { t: "saisie", q: "Mets à la forme affirmative : « Khady ne lave pas le linge. »", r: "Khady lave le linge.", large: true, expl: "On enlève les deux mots de négation." },
      { t: "qcm", q: "« Les passagers ont-ils préparé les bagages ? » Cette phrase est…", choix: ["affirmative", "négative", "interrogative", "interro-négative"], r: "interrogative", expl: "Elle pose une question, sans mot de négation." },
      { t: "qcm", q: "« Les passagers n'ont-ils pas préparé les bagages ? » Cette phrase est…", choix: ["affirmative", "négative", "interrogative", "interro-négative"], r: "interro-négative", expl: "C'est une question avec « n'… pas » : interro-négative." },
      { t: "relier", q: "Relie chaque phrase à sa forme.", paires: [["Tu viens.", "affirmative"], ["Tu ne viens pas.", "négative"], ["Viens-tu ?", "interrogative"], ["Ne viens-tu pas ?", "interro-négative"]], expl: "Quatre façons de dire une même idée." },
      { t: "trous", q: "Complète avec le mot de négation qui manque.", texte: "Je ne bois [pas] de café. — Il [ne] dort jamais l'après-midi. — Nous ne sortons [plus] le soir, depuis l'accident.", expl: "La négation a toujours deux parties." },
      { t: "vf", q: "Dans une phrase interrogative, le sujet peut passer après le verbe.", r: true, expl: "C'est l'inversion du sujet : « Ont-ils préparé… ? »" }
    ],
    [
      { t: "qcm", q: "Quelle phrase est bien écrite à la forme négative ?", choix: ["Il n'a pas faim.", "Il a pas faim.", "Il ne a pas faim.", "Il n'a faim."], r: "Il n'a pas faim.", expl: "Il faut les deux mots : n' (devant une voyelle) et pas." },
      { t: "qcm", q: "Quelle phrase est interro-négative ?", choix: ["Aimes-tu le mafé ?", "N'aimes-tu pas le mafé ?", "Tu n'aimes pas le mafé.", "Tu aimes le mafé."], r: "N'aimes-tu pas le mafé ?", expl: "Une question + une négation, avec le sujet inversé." },
      { t: "saisie", q: "Mets à la forme interrogative avec inversion du sujet : « Tu connais Saint-Louis. »", r: "Connais-tu Saint-Louis ?", large: true, expl: "Le sujet « tu » passe après le verbe, avec un trait d'union." },
      { t: "saisie", q: "Mets à la forme interro-négative : « Vous avez fini ? »", r: "N'avez-vous pas fini ?", large: true, expl: "n' + verbe-sujet + pas : « N'avez-vous pas fini ? »" },
      { t: "vf", q: "« Ils mangent jamais de viande. » est une phrase négative bien écrite.", r: false, expl: "Il manque « ne » : « Ils ne mangent jamais de viande. »" },
      { t: "trous", q: "Complète avec ne ou n'.", texte: "Elle [n']écoute pas. — Nous [ne] partons plus. — Je [n']oublie jamais mes affaires. — Tu [ne] parles guère.", expl: "Devant une voyelle, ne devient n'." },
      { t: "ordre", q: "Remets les mots dans l'ordre pour faire une phrase interro-négative.", r: "Les enfants n'ont-ils pas mangé ?", expl: "Sujet + n' + verbe-ils + pas + participe." }
    ],
    [
      { t: "dictee", texte: "Mamadou ne va plus au champ, car il n'a pas de charrette.", expl: "Deux négations : ne… plus et n'… pas." },
      { t: "dictee", texte: "Les pêcheurs n'ont-ils pas ramené de poisson ce matin ?", expl: "Phrase interro-négative : n'… pas, sujet inversé « ont-ils »." },
      { t: "saisie", q: "Mets à la forme négative avec « ne… jamais » : « Aïssatou oublie son cahier. »", r: "Aïssatou n'oublie jamais son cahier.", large: true, expl: "« oublie » commence par une voyelle : n'… jamais." },
      { t: "trous", q: "Écris la forme de chaque phrase : affirmative, négative, interrogative ou interro-négative.", texte: "La pirogue est-elle rentrée ? ([interrogative]) — Non, elle n'est pas rentrée. ([négative]) — Le vent ne souffle-t-il pas trop fort ? ([interro-négative]) — Le vent souffle fort. ([affirmative])", expl: "Cherche le point d'interrogation et les mots de négation." },
      { t: "qcm", q: "Une seule de ces phrases est à la forme négative. Laquelle ?", choix: ["Il n'est jamais en retard.", "Il est rarement en retard.", "Est-il en retard ?", "Comme il est en retard !"], r: "Il n'est jamais en retard.", expl: "Seule cette phrase contient deux mots de négation (n'… jamais). « rarement » n'est pas un mot de négation." }
    ]
  ]
});
