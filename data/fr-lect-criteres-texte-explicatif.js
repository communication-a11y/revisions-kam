LECONS.push({
  id: "fr-lect-criteres-texte-explicatif",
  cahier: "francais",
  matiere: "Production d'écrits",
  titre: "La fiche de critères de réussite d'un texte explicatif",
  date: "2026-10-07",
  photos: ["DJI_20261118220449_0035_D.jpg", "DJI_20261118220457_0036_D.jpg"],
  retiens:
    "<p><b>Critères</b> (ce que je dois faire…)</p>" +
    "<p><b>Forme du texte : 3 parties</b> (introduction, développement, conclusion)</p><ol>" +
    "<li>J'explique bien ce qu'on me demande : un objet, un phénomène… C'est l'<b>introduction</b> qui dit ce que je dois expliquer.</li>" +
    "<li>J'organise mon texte en <b>paragraphes clairs</b>. Je donne des <b>exemples</b> pour aider à comprendre : c'est le <b>développement</b>.</li>" +
    "<li>Je fais une petite <b>conclusion</b> à la fin.</li></ol>" +
    "<p><b>Fond du texte</b> : je dois employer</p><ul>" +
    "<li>des <b>mots clairs et simples</b> ;</li>" +
    "<li>des <b>connecteurs logiques</b> pour expliquer, comme <b>parce que</b>, <b>donc</b>, <b>par exemple</b>, <b>cependant</b>…</li></ul>" +
    "<p><b>Présentation</b> : je dois</p><ul>" +
    "<li>faire attention à la langue : écrire sans fautes de grammaire… ;</li>" +
    "<li>écrire lisiblement.</li></ul>",
  astuce: "Les connecteurs : <b>parce que</b> donne la cause, <b>donc</b> la conséquence, <b>par exemple</b> annonce un exemple, <b>cependant</b> introduit une opposition.",
  regle: "Un bon texte explicatif a 3 parties (introduction, développement en paragraphes avec des exemples, conclusion), des mots clairs, des connecteurs logiques, et il est écrit sans fautes et lisiblement.",
  niveaux: [
    [
      { t: "qcm", q: "Combien de parties doit avoir mon texte explicatif ?", choix: ["3", "2", "5"], r: "3", expl: "Introduction, développement, conclusion." },
      { t: "qcm", q: "Quelle partie dit ce que je dois expliquer ?", choix: ["l'introduction", "le développement", "la conclusion"], r: "l'introduction", expl: "C'est l'introduction qui dit ce que je dois expliquer." },
      { t: "qcm", q: "Dans quelle partie est-ce que je donne des exemples, en paragraphes clairs ?", choix: ["le développement", "l'introduction", "la conclusion"], r: "le développement", expl: "Le développement explique, avec des exemples." },
      { t: "vf", q: "Je dois employer des mots clairs et simples.", r: true, expl: "C'est un critère du fond du texte." },
      { t: "vf", q: "Dans un texte explicatif, l'écriture n'a pas d'importance si les idées sont bonnes.", r: false, expl: "La présentation compte : écrire lisiblement et sans fautes." },
      { t: "classer", q: "Range ces mots.", cases: ["connecteur logique", "pas un connecteur"], items: [["parce que", "connecteur logique"], ["donc", "connecteur logique"], ["maison", "pas un connecteur"], ["par exemple", "connecteur logique"], ["courir", "pas un connecteur"], ["cependant", "connecteur logique"]], expl: "parce que, donc, par exemple, cependant sont les connecteurs de la leçon." }
    ],
    [
      { t: "relier", q: "Relie chaque connecteur à son rôle.", paires: [["parce que", "donne la cause"], ["donc", "donne la conséquence"], ["par exemple", "annonce un exemple"], ["cependant", "introduit une opposition"]], expl: "Les connecteurs relient les idées de l'explication." },
      { t: "qcm", q: "« Le baobab perd ses feuilles … il veut garder son eau. »", choix: ["parce qu'", "donc", "cependant"], r: "parce qu'", expl: "On donne la cause : parce que (parce qu' devant il)." },
      { t: "qcm", q: "« Il n'a pas plu depuis des mois, … les puits sont presque vides. »", choix: ["donc", "parce que", "par exemple"], r: "donc", expl: "On donne la conséquence : donc." },
      { t: "qcm", q: "« Beaucoup de fruits poussent au Sénégal, … la mangue et l'orange. »", choix: ["par exemple", "donc", "cependant"], r: "par exemple", expl: "On annonce des exemples." },
      { t: "qcm", q: "« Le soleil est très chaud ; … , le soir, il fait plus frais. »", choix: ["cependant", "parce que", "par exemple"], r: "cependant", expl: "On oppose deux idées : cependant." },
      { t: "classer", q: "Range ces critères.", cases: ["forme du texte", "fond du texte", "présentation"], items: [["faire 3 parties", "forme du texte"], ["employer des mots simples", "fond du texte"], ["écrire lisiblement", "présentation"], ["faire une petite conclusion", "forme du texte"], ["utiliser des connecteurs logiques", "fond du texte"], ["écrire sans fautes", "présentation"]], expl: "C'est la fiche de critères du cahier." },
      { t: "saisie", q: "Quel connecteur de la leçon sert à annoncer un exemple ?", r: "par exemple", expl: "par exemple" },
      { t: "trous", q: "Complète la fiche de critères.", texte: "Forme : 3 parties : [introduction], développement, [conclusion]. Fond : des mots clairs et [simples], des connecteurs [logiques].", expl: "Ce sont les critères du cahier." }
    ],
    [
      { t: "qcm", q: "Quelle introduction est la meilleure pour un texte « Comment se forme la pluie ? » ?", choix: ["La pluie tombe souvent en août. Mais comment se forme-t-elle ?", "Il était une fois un nuage gentil.", "Donc la pluie tombe."], r: "La pluie tombe souvent en août. Mais comment se forme-t-elle ?", expl: "L'introduction présente le sujet et dit ce qu'on va expliquer." },
      { t: "qcm", q: "Quelle conclusion est la meilleure pour ce même texte ?", choix: ["Ainsi, l'eau qui s'évapore forme des nuages, puis retombe en pluie.", "Le nuage est blanc.", "Par exemple, il pleut."], r: "Ainsi, l'eau qui s'évapore forme des nuages, puis retombe en pluie.", expl: "Une petite conclusion résume l'explication." },
      { t: "trous", q: "Complète avec le bon connecteur : <i>parce que, donc, par exemple, cependant</i>.", texte: "Il faut se laver les mains [parce que] les microbes sont partout. Les microbes sont invisibles ; [cependant], ils sont dangereux. Ils peuvent donner des maladies, [par exemple] la diarrhée. Lavons-nous [donc] les mains avant de manger.", expl: "cause, opposition, exemple, conséquence." },
      { t: "vf", q: "Un texte explicatif bien organisé est découpé en paragraphes clairs.", r: true, expl: "« J'organise mon texte en paragraphes clairs. »" },
      { t: "qcm", q: "Moussa a écrit un très bon développement mais il a oublié la fin. Quel critère manque ?", choix: ["la petite conclusion", "l'introduction", "les connecteurs"], r: "la petite conclusion", expl: "Il faut faire une petite conclusion à la fin." },
      { t: "qcm", q: "Quelle phrase utilise des mots clairs et simples ?", choix: ["La pluie aide les plantes à pousser.", "La précipitation pluviométrique favorise la croissance végétale.", "Pluie plante pousser aider."], r: "La pluie aide les plantes à pousser.", expl: "Des mots clairs et simples, dans une phrase correcte." }
    ],
    [
      { t: "qcm", q: "Remets dans l'ordre les parties d'un texte explicatif sur la pêche.", choix: ["1. Comment pêche-t-on à Kayar ? 2. Les pêcheurs partent en pirogue et jettent leurs filets. 3. Ainsi, ils rapportent du poisson pour tout le village.", "1. Ainsi, ils rapportent du poisson. 2. Comment pêche-t-on à Kayar ? 3. Les pêcheurs partent en pirogue.", "1. Les pêcheurs partent en pirogue. 2. Ainsi, ils rapportent du poisson. 3. Comment pêche-t-on à Kayar ?"], r: "1. Comment pêche-t-on à Kayar ? 2. Les pêcheurs partent en pirogue et jettent leurs filets. 3. Ainsi, ils rapportent du poisson pour tout le village.", expl: "Introduction (la question), développement (l'explication), conclusion (ainsi…)." },
      { t: "dictee", texte: "Pour expliquer, j'utilise des connecteurs comme parce que, donc et par exemple.", expl: "Les connecteurs logiques de la fiche." },
      { t: "classer", q: "Fatou relit son texte. Range ce qu'elle a fait.", cases: ["critère respecté", "critère pas respecté"], items: [["Elle a fait 3 parties.", "critère respecté"], ["Elle a écrit très vite, on ne peut pas la lire.", "critère pas respecté"], ["Elle a donné des exemples.", "critère respecté"], ["Elle a laissé beaucoup de fautes.", "critère pas respecté"], ["Elle a utilisé « parce que » et « donc ».", "critère respecté"]], expl: "Il faut écrire lisiblement et sans fautes." },
      { t: "saisie", q: "Quel connecteur de la leçon introduit une opposition ?", r: "cependant", expl: "cependant = mais, pourtant." },
      { t: "vf", q: "Dans l'introduction, je dois déjà donner toutes les explications et tous les exemples.", r: false, expl: "L'introduction dit ce que je vais expliquer ; les explications et les exemples sont dans le développement." }
    ]
  ]
});
