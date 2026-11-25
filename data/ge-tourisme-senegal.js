// Orthographe corrigée : « Niokolokoba » → Niokolo-Koba.
LECONS.push({
  id: "ge-tourisme-senegal",
  cahier: "histgeo",
  matiere: "Géographie",
  titre: "Le tourisme au Sénégal",
  date: "2026-11-25",
  photos: ["2026-11-25_23.jpg"],
  retiens:
    "<p>Le tourisme est l'une des plus importantes activités économiques du Sénégal. Les <b>belles plages</b>, le <b>bon climat</b>, les <b>sites historiques</b>, la <b>diversité culturelle</b>… font que le Sénégal attire de nombreux touristes.</p>" +
    "<p>Les principaux sites touristiques sont :</p>" +
    "<ul><li><b>Dakar</b> : le parc de Hann, l'île de Gorée, la Maison des esclaves, le village artisanal de Soumbédioune, le lac Rose, le monument de la Renaissance africaine…</li>" +
    "<li><b>Thiès</b> : la réserve de Bandia, l'île de Joal-Fadiouth, les plages de Saly, de la Somone…</li>" +
    "<li><b>Saint-Louis</b> : le parc national des oiseaux du Djoudj, la langue de Barbarie, le musée Jean Mermoz, le pont Faidherbe…</li>" +
    "<li><b>Tambacounda</b> : le parc national du Niokolo-Koba</li>" +
    "<li><b>Ziguinchor</b> : le parc de la Basse-Casamance, l'île de Karabane, la station balnéaire du Cap Skirring…</li>" +
    "<li><b>Sine-Saloum</b> : le parc national du delta du Saloum, les îles du Saloum</li></ul>",
  astuce: "Pour chaque région, retiens un site phare : Dakar → Gorée ; Thiès → Bandia ; Saint-Louis → Djoudj ; Tamba → Niokolo-Koba ; Ziguinchor → Cap Skirring ; Sine-Saloum → delta du Saloum.",
  regle: "Le tourisme est une activité économique importante au Sénégal grâce aux plages, au climat, aux sites historiques et à la diversité culturelle ; chaque région a ses sites touristiques.",
  niveaux: [
    [
      { t: "qcm", q: "Le tourisme au Sénégal est…", choix: ["une des plus importantes activités économiques", "une activité interdite", "une activité sans importance"], r: "une des plus importantes activités économiques", expl: "C'est la première phrase de la leçon." },
      { t: "qcm", q: "Dans quelle région se trouve l'île de Gorée ?", choix: ["Dakar", "Ziguinchor", "Tambacounda"], r: "Dakar", expl: "Gorée, avec la Maison des esclaves, est à Dakar." },
      { t: "qcm", q: "Où se trouve le parc national du Niokolo-Koba ?", choix: ["à Tambacounda", "à Dakar", "à Thiès"], r: "à Tambacounda", expl: "C'est le grand parc de Tamba." },
      { t: "vf", q: "Les belles plages et le bon climat attirent les touristes au Sénégal.", r: true, expl: "Comme les sites historiques et la diversité culturelle." },
      { t: "qcm", q: "Le parc des oiseaux du Djoudj se trouve…", choix: ["à Saint-Louis", "à Ziguinchor", "au Sine-Saloum"], r: "à Saint-Louis", expl: "Saint-Louis : Djoudj, langue de Barbarie, pont Faidherbe." }
    ],
    [
      { t: "relier", q: "Relie chaque site à sa région.", paires: [["réserve de Bandia", "Thiès"], ["pont Faidherbe", "Saint-Louis"], ["Cap Skirring", "Ziguinchor"], ["lac Rose", "Dakar"], ["delta du Saloum", "Sine-Saloum"]], expl: "C'est la liste de la leçon." },
      { t: "classer", q: "Range ces sites.", cases: ["Dakar", "Saint-Louis", "Ziguinchor"], items: [["parc de Hann", "Dakar"], ["village artisanal de Soumbédioune", "Dakar"], ["langue de Barbarie", "Saint-Louis"], ["parc du Djoudj", "Saint-Louis"], ["île de Karabane", "Ziguinchor"], ["parc de la Basse-Casamance", "Ziguinchor"]], expl: "Chaque région a ses sites." },
      { t: "qcm", q: "Quelle île se trouve dans la région de Thiès ?", choix: ["Joal-Fadiouth", "Gorée", "Karabane"], r: "Joal-Fadiouth", expl: "Gorée : Dakar ; Karabane : Ziguinchor." },
      { t: "saisie", q: "Quel monument de Dakar porte le nom de la « Renaissance africaine » ? Le monument de la …", r: ["Renaissance africaine", "renaissance africaine"], expl: "Le monument de la Renaissance africaine, à Dakar." },
      { t: "trous", q: "Complète.", texte: "Les plages de [Saly] et de la Somone sont dans la région de Thiès. La station balnéaire du Cap [Skirring] est en Casamance.", expl: "Les grandes plages touristiques du Sénégal." },
      { t: "qcm", q: "Lequel n'est PAS une raison citée pour la venue des touristes ?", choix: ["la neige", "les belles plages", "les sites historiques", "la diversité culturelle"], r: "la neige", expl: "Il n'y a pas de neige au Sénégal !" },
      { t: "vf", q: "La Maison des esclaves se trouve sur l'île de Gorée.", r: true, expl: "C'est un site historique très visité." },
      { t: "qcm", q: "Les îles du Saloum se trouvent…", choix: ["au Sine-Saloum", "à Saint-Louis", "à Dakar"], r: "au Sine-Saloum", expl: "Avec le parc national du delta du Saloum." }
    ],
    [
      { t: "classer", q: "Parc naturel ou site historique et culturel ?", cases: ["parc ou réserve naturelle", "site historique ou culturel"], items: [["parc du Djoudj", "parc ou réserve naturelle"], ["réserve de Bandia", "parc ou réserve naturelle"], ["Niokolo-Koba", "parc ou réserve naturelle"], ["Maison des esclaves", "site historique ou culturel"], ["pont Faidherbe", "site historique ou culturel"], ["village artisanal de Soumbédioune", "site historique ou culturel"]], expl: "Les parcs protègent les animaux et la nature ; les sites historiques racontent le passé." },
      { t: "qcm", q: "Un touriste veut voir des oiseaux. Où lui conseilles-tu d'aller ?", choix: ["au parc du Djoudj", "au village de Soumbédioune", "au pont Faidherbe"], r: "au parc du Djoudj", expl: "Le parc national des oiseaux du Djoudj, à Saint-Louis." },
      { t: "qcm", q: "Une famille veut acheter des objets d'artisanat à Dakar. Où va-t-elle ?", choix: ["au village artisanal de Soumbédioune", "au Niokolo-Koba", "à la langue de Barbarie"], r: "au village artisanal de Soumbédioune", expl: "On y trouve des artisans et leurs objets." },
      { t: "vf", q: "Le tourisme rapporte de l'argent au pays.", r: true, expl: "C'est une activité économique importante." },
      { t: "relier", q: "Relie chaque région à son parc.", paires: [["Tambacounda", "Niokolo-Koba"], ["Saint-Louis", "Djoudj"], ["Ziguinchor", "Basse-Casamance"], ["Sine-Saloum", "delta du Saloum"]], expl: "Les grands parcs nationaux de la leçon." },
      { t: "saisie", q: "Quel lac de la région de Dakar est célèbre pour sa couleur ? Le lac …", r: "Rose", expl: "Le lac Rose." }
    ],
    [
      { t: "trous", q: "Complète le résumé.", texte: "Le tourisme est une activité [économique] importante. Les touristes viennent pour les belles [plages], le bon [climat], les sites historiques et la diversité [culturelle].", expl: "Les raisons du succès du tourisme au Sénégal." },
      { t: "qcm", q: "Un circuit visite Gorée, puis Bandia, puis le Djoudj. Dans quel ordre traverse-t-il les régions ?", choix: ["Dakar, Thiès, Saint-Louis", "Thiès, Dakar, Ziguinchor", "Saint-Louis, Tamba, Dakar"], r: "Dakar, Thiès, Saint-Louis", expl: "Gorée : Dakar ; Bandia : Thiès ; Djoudj : Saint-Louis." },
      { t: "classer", q: "Range ces sites selon leur région.", cases: ["Thiès", "Ziguinchor", "Sine-Saloum"], items: [["Saly", "Thiès"], ["Somone", "Thiès"], ["Karabane", "Ziguinchor"], ["Cap Skirring", "Ziguinchor"], ["îles du Saloum", "Sine-Saloum"], ["delta du Saloum", "Sine-Saloum"]], expl: "Les sites de la leçon." },
      { t: "qcm", q: "Lequel de ces sites n'est PAS à Dakar ?", choix: ["la langue de Barbarie", "le parc de Hann", "l'île de Gorée", "le lac Rose"], r: "la langue de Barbarie", expl: "La langue de Barbarie est à Saint-Louis." },
      { t: "vf", q: "Le pont Faidherbe se trouve à Ziguinchor.", r: false, expl: "Il est à Saint-Louis." }
    ]
  ]
});
