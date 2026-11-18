// À VÉRIFIER : le cahier (photo 0143) date la conquête de l'Égypte par les Perses « vers 1100 avant Jésus-Christ ». La date historique est 525 av. J.-C. (vers 1100 av. J.-C., c'est la fin du Nouvel Empire). Le module donne 525 av. J.-C.
LECONS.push({
  id: "hi-egypte-ancienne",
  cahier: "histgeo",
  matiere: "Histoire",
  titre: "L'Égypte ancienne",
  date: "2026-10-08",
  photos: ["DJI_20261118222120_0143_D.jpg", "DJI_20261118222127_0144_D.jpg"],
  retiens:
    "<table><tr><th>Époques</th><th>Faits marquants</th></tr>" +
    "<tr><td><b>Ancien Empire</b></td><td>unification du pays par le pharaon, avec <b>Memphis</b> comme capitale ; construction des <b>pyramides</b></td></tr>" +
    "<tr><td><b>Moyen Empire</b></td><td>transfert de la capitale à <b>Thèbes</b></td></tr>" +
    "<tr><td><b>Nouvel Empire</b></td><td>période de prospérité et de puissance ; construction des <b>temples</b></td></tr></table>" +
    "<p><b>La civilisation égyptienne</b> : les Égyptiens adoraient <b>plusieurs dieux</b> (Horus, Isis, Amon…). Ils étaient de grands artistes (architectes, sculpteurs).</p>" +
    "<p><b>La société</b> était divisée, du haut vers le bas : 1. le <b>pharaon</b> ; 2. les hauts fonctionnaires ; 3. les prêtres ; 4. les scribes ; 5. les artisans et les paysans ; 6. les esclaves.</p>" +
    "<p>Après ces trois époques vient la période de <b>décadence</b> : l'empire est conquis par les <b>Perses</b> en <b>525 avant Jésus-Christ</b>.</p>" +
    "<p>Les Égyptiens utilisaient une écriture appelée <b>hiéroglyphes</b>, déchiffrée par <b>Jean-François Champollion</b> en <b>1822</b>.</p>" +
    "<p>Les <b>pyramides</b> servaient de tombeaux aux pharaons. Les <b>temples</b> servaient de lieux de culte.</p>",
  astuce: "Ancien → <b>M</b>emphis et pyra<b>m</b>ides ; Moyen → <b>T</b>hèbes ; Nouvel → <b>t</b>emples.",
  regle: "Trois époques : Ancien Empire (Memphis, pyramides), Moyen Empire (capitale à Thèbes), Nouvel Empire (prospérité, temples). Le roi s'appelle le pharaon ; l'écriture, ce sont les hiéroglyphes.",
  niveaux: [
    [
      { t: "qcm", q: "Comment s'appelait le roi de l'Égypte ancienne ?", choix: ["le pharaon", "le Mansa", "le Tounka"], r: "le pharaon", expl: "Le pharaon est au sommet de la société égyptienne." },
      { t: "qcm", q: "À quoi servaient les pyramides ?", choix: ["de tombeaux aux pharaons", "de marchés", "de ports"], r: "de tombeaux aux pharaons", expl: "Les pyramides étaient les tombeaux des pharaons." },
      { t: "vf", q: "Les Égyptiens adoraient plusieurs dieux.", r: true, expl: "Par exemple Horus, Isis, Amon." },
      { t: "qcm", q: "Comment s'appelle l'écriture des anciens Égyptiens ?", choix: ["les hiéroglyphes", "l'alphabet latin", "le braille"], r: "les hiéroglyphes", expl: "Les hiéroglyphes ont été déchiffrés par Champollion en 1822." },
      { t: "qcm", q: "Combien d'époques (empires) compte l'histoire de l'Égypte ancienne dans ta leçon ?", choix: ["trois", "deux", "six"], r: "trois", expl: "Ancien Empire, Moyen Empire, Nouvel Empire." },
      { t: "vf", q: "Les temples servaient de lieux de culte.", r: true, expl: "On y priait les dieux." }
    ],
    [
      { t: "relier", q: "Relie chaque époque à son fait marquant.", paires: [["Ancien Empire", "construction des pyramides"], ["Moyen Empire", "capitale transférée à Thèbes"], ["Nouvel Empire", "construction des temples"]], expl: "C'est le tableau de la leçon." },
      { t: "relier", q: "Relie.", paires: [["Memphis", "capitale de l'Ancien Empire"], ["Thèbes", "capitale du Moyen Empire"], ["Champollion", "déchiffre les hiéroglyphes"], ["les Perses", "conquièrent l'Égypte"]], expl: "Noms importants de la leçon." },
      { t: "saisie", q: "En quelle année Champollion a-t-il déchiffré les hiéroglyphes ?", r: "1822", nombre: true, expl: "En 1822." },
      { t: "saisie", q: "Quelle était la capitale de l'Ancien Empire ?", r: "Memphis", expl: "Le pharaon unifie le pays avec Memphis comme capitale." },
      { t: "saisie", q: "Quelle ville devient capitale au Moyen Empire ?", r: "Thèbes", aide: "Attention à l'accent et au h.", expl: "Au Moyen Empire, la capitale est transférée à Thèbes." },
      { t: "qcm", q: "Lequel de ces noms est un dieu égyptien ?", choix: ["Amon", "Soundiata", "Askia"], r: "Amon", expl: "Horus, Isis et Amon sont des dieux égyptiens." },
      { t: "trous", q: "Complète.", texte: "Les pyramides servaient de [tombeaux] aux pharaons. Les [temples] servaient de lieux de culte.", expl: "Deux grands monuments égyptiens." },
      { t: "vf", q: "Le Nouvel Empire est une période de prospérité et de puissance.", r: true, expl: "C'est aussi l'époque de la construction des temples." },
      { t: "qcm", q: "Qui est tout en haut de la société égyptienne ?", choix: ["le pharaon", "les prêtres", "les scribes"], r: "le pharaon", expl: "Le pharaon, puis les hauts fonctionnaires, les prêtres, les scribes, les artisans et paysans, les esclaves." }
    ],
    [
      { t: "qcm", q: "Qui a conquis l'Égypte pendant sa période de décadence ?", choix: ["les Perses", "les Almoravides", "les Marocains"], r: "les Perses", expl: "Les Perses ont conquis l'Égypte en 525 av. J.-C." },
      { t: "qcm", q: "En quelle année les Perses ont-ils conquis l'Égypte ?", choix: ["525 avant Jésus-Christ", "1822", "622"], r: "525 avant Jésus-Christ", expl: "En 525 av. J.-C. (1822 est la date de Champollion, 622 celle de l'hégire)." },
      { t: "vf", q: "Les pyramides ont été construites au Nouvel Empire.", r: false, expl: "Les pyramides datent de l'Ancien Empire ; le Nouvel Empire construit des temples." },
      { t: "qcm", q: "Dans la société égyptienne, qui est en bas ?", choix: ["les esclaves", "les scribes", "les prêtres"], r: "les esclaves", expl: "Les esclaves sont au dernier rang." },
      { t: "classer", q: "Range ces mots.", cases: ["dieu", "groupe de la société"], items: [["Horus", "dieu"], ["les scribes", "groupe de la société"], ["Isis", "dieu"], ["les prêtres", "groupe de la société"], ["Amon", "dieu"], ["les paysans", "groupe de la société"]], expl: "Horus, Isis et Amon sont des dieux ; les autres sont des groupes sociaux." },
      { t: "saisie", q: "Qui a déchiffré les hiéroglyphes ? (son nom de famille)", r: "Champollion", expl: "Jean-François Champollion, en 1822." },
      { t: "vf", q: "Les Égyptiens étaient de grands artistes : architectes et sculpteurs.", r: true, expl: "Les pyramides et les temples le montrent." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Sous l'Ancien Empire, le pharaon unifie le pays avec [Memphis] comme capitale et fait construire les [pyramides]. Au Moyen Empire, la capitale passe à [Thèbes]. Le Nouvel Empire construit les [temples]. L'écriture égyptienne, les [hiéroglyphes], a été déchiffrée en [1822].", expl: "Toute la leçon en un texte." },
      { t: "qcm", q: "Remets la société dans l'ordre, du haut vers le bas. Quelle suite est juste ?", choix: ["pharaon – hauts fonctionnaires – prêtres – scribes – artisans et paysans – esclaves", "esclaves – scribes – pharaon – prêtres – paysans", "prêtres – pharaon – esclaves – scribes – hauts fonctionnaires"], r: "pharaon – hauts fonctionnaires – prêtres – scribes – artisans et paysans – esclaves", expl: "C'est l'ordre de la leçon." },
      { t: "relier", q: "Relie chaque date à son événement.", paires: [["525 av. J.-C.", "conquête de l'Égypte par les Perses"], ["1822", "déchiffrement des hiéroglyphes"], ["622", "l'hégire"]], expl: "Attention à ne pas confondre les dates de deux leçons d'histoire." },
      { t: "vf", q: "Thèbes était la capitale de l'Ancien Empire.", r: false, expl: "La capitale de l'Ancien Empire était Memphis ; Thèbes devient capitale au Moyen Empire." },
      { t: "classer", q: "Range chaque fait dans son époque.", cases: ["Ancien Empire", "Moyen Empire", "Nouvel Empire"], items: [["unification du pays", "Ancien Empire"], ["construction des pyramides", "Ancien Empire"], ["capitale à Thèbes", "Moyen Empire"], ["prospérité et puissance", "Nouvel Empire"], ["construction des temples", "Nouvel Empire"]], expl: "C'est le tableau de la leçon." }
    ]
  ]
});
