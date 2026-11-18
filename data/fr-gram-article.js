// Précision : dans l'exemple d'analyse, le cahier écrit « Des : article contracté » ; le module écrit « article défini contracté » (de + les), comme dans la règle.
LECONS.push({
  id: "fr-gram-article",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "Un déterminant : l'article",
  date: "2026-10-06",
  photos: ["DJI_20261118220426_0033_D.jpg"],
  retiens:
    "<p>L'article est un compagnon indispensable du <b>nom</b> : c'est un <b>déterminant</b>. Le déterminant <b>précède le nom</b> et varie en genre et en nombre avec ce nom.</p>" +
    "<p>Les principaux articles sont :</p>" +
    "<table><tr><th></th><th>singulier</th><th>pluriel</th></tr>" +
    "<tr><td>articles <b>définis</b></td><td>le, la, l'</td><td>les</td></tr>" +
    "<tr><td>articles <b>indéfinis</b></td><td>un, une</td><td>des</td></tr></table>" +
    "<p>Les articles <b>définis contractés</b> :</p>" +
    "<table><tr><td>à + le = <b>au</b></td><td>de + le = <b>du</b></td></tr>" +
    "<tr><td>à + les = <b>aux</b></td><td>de + les = <b>des</b></td></tr></table>" +
    "<p>Ex : <b>Les</b> femmes me chassent <b>des</b> cuisines.</p>" +
    "<p><b>Exemple d'analyse</b><br><b>Les</b> : article défini, détermine « femmes », féminin pluriel.<br><b>des</b> : article défini contracté (de + les), détermine « cuisines », féminin pluriel.</p>",
  astuce: "Pour savoir si <b>des</b> est contracté, remplace le nom par un nom au singulier : « chassées <b>des</b> cuisines » → « chassées <b>de la</b> cuisine ». Si on retrouve « de », c'est un article contracté.",
  regle: "L'article se place devant le nom et s'accorde avec lui. Définis : le, la, l', les. Indéfinis : un, une, des. Contractés : au, aux, du, des.",
  niveaux: [
    [
      { t: "qcm", q: "L'article se place…", choix: ["devant le nom", "après le nom", "après le verbe"], r: "devant le nom", expl: "Le déterminant précède le nom." },
      { t: "qcm", q: "Quel mot est un article indéfini ?", choix: ["le", "une", "la", "les"], r: "une", expl: "Les articles indéfinis sont un, une, des." },
      { t: "vf", q: "« le, la, l', les » sont des articles définis.", r: true, expl: "Au singulier le, la, l' ; au pluriel les." },
      { t: "vf", q: "L'article varie en genre et en nombre avec le nom.", r: true, expl: "le garçon, la fille, les enfants : l'article change avec le nom." },
      { t: "classer", q: "Range ces articles.", cases: ["défini", "indéfini"], items: [["le", "défini"], ["un", "indéfini"], ["la", "défini"], ["une", "indéfini"], ["les", "défini"], ["l'", "défini"]], expl: "Définis : le, la, l', les. Indéfinis : un, une, des." },
      { t: "relier", q: "Relie chaque contraction à l'article qu'elle donne.", paires: [["à + le", "au"], ["à + les", "aux"], ["de + le", "du"], ["de + les", "des"]], expl: "Ce sont les quatre articles définis contractés." }
    ],
    [
      { t: "trous", q: "Complète avec le, la, l' ou les.", texte: "[la] pirogue — [le] filet — [l']arbre — [les] pêcheurs — [l']école", expl: "Devant une voyelle, le et la deviennent l'." },
      { t: "trous", q: "Complète avec un, une ou des.", texte: "[une] mangue — [un] mouton — [des] enfants — [une] calebasse", expl: "un (masculin), une (féminin), des (pluriel)." },
      { t: "trous", q: "Remplace « à le », « à les », « de le », « de les » par l'article contracté.", texte: "Je vais [au] marché. — Il parle [aux] élèves. — Elle revient [du] champ. — Il sort [des] classes.", expl: "à + le = au ; à + les = aux ; de + le = du ; de + les = des." },
      { t: "qcm", q: "Dans « Les femmes me chassent des cuisines », quel est le genre et le nombre de « Les » ?", choix: ["masculin singulier", "féminin pluriel", "féminin singulier"], r: "féminin pluriel", expl: "« Les » détermine « femmes », féminin pluriel." },
      { t: "saisie", q: "Mets au pluriel : « la chèvre »", r: "les chèvres", expl: "la → les, et le nom prend un s." },
      { t: "saisie", q: "Mets au pluriel : « un cahier »", r: "des cahiers", expl: "un → des." },
      { t: "qcm", q: "Quel article convient ? « Moussa joue … ballon. »", choix: ["au", "aux", "à le", "du"], r: "au", expl: "On ne dit pas « à le » : à + le = au." },
      { t: "vf", q: "On peut écrire « Je vais à le marché ».", r: false, expl: "« à le » se contracte toujours en « au » : Je vais au marché." },
      { t: "qcm", q: "Quel article convient ? « Nous parlons … voisins. »", choix: ["à les", "aux", "au", "des"], r: "aux", expl: "à + les = aux." }
    ],
    [
      { t: "qcm", q: "« J'achète <b>des</b> mangues. » Ici, « des » est…", choix: ["un article indéfini", "un article défini contracté"], r: "un article indéfini", expl: "Au singulier on dirait « une mangue » : « des » est le pluriel de « une »." },
      { t: "qcm", q: "« Il revient <b>des</b> champs. » Ici, « des » est…", choix: ["un article indéfini", "un article défini contracté"], r: "un article défini contracté", expl: "Au singulier on dirait « du champ » : des = de + les." },
      { t: "trous", q: "Complète avec au, aux, du ou des.", texte: "Le car arrive [au] garage. — Elle donne du mil [aux] poules. — Le parfum [du] jasmin. — La voix [des] enfants.", expl: "à + le = au ; à + les = aux ; de + le = du ; de + les = des." },
      { t: "saisie", q: "Mets au pluriel : « l'oiseau du village »", r: "les oiseaux des villages", expl: "l' → les ; du → des ; oiseau → oiseaux." },
      { t: "vf", q: "Dans « la porte du garage », « du » est formé de « de + le ».", r: true, expl: "du = de + le." },
      { t: "relier", q: "Relie chaque article souligné à sa nature.", paires: [["<b>Les</b> enfants jouent.", "article défini"], ["<b>Un</b> enfant joue.", "article indéfini"], ["Il parle <b>aux</b> enfants.", "article défini contracté"]], expl: "les : défini ; un : indéfini ; aux = à + les : contracté." },
      { t: "saisie", q: "Mets au singulier : « Les filles reviennent des puits. »", r: "La fille revient du puits.", large: true, expl: "les → la ; des (de + les) → du (de + le)." }
    ],
    [
      { t: "dictee", texte: "Le matin, les enfants vont au marché avec un panier.", expl: "Le, les : définis ; au = à + le ; un : indéfini." },
      { t: "trous", q: "Écris la nature de chaque article (défini, indéfini, contracté).", texte: "<b>La</b> maîtresse ([défini]) donne <b>un</b> livre ([indéfini]) <b>aux</b> élèves ([contracté]).", expl: "la : défini ; un : indéfini ; aux = à + les : défini contracté." },
      { t: "qcm", q: "Analyse « du » dans « Elle sort du marché ».", choix: ["article défini contracté, détermine marché, masculin singulier", "article indéfini, détermine marché, masculin pluriel", "article défini, détermine Elle, féminin singulier"], r: "article défini contracté, détermine marché, masculin singulier", expl: "du = de + le, devant « marché », masculin singulier." },
      { t: "dictee", texte: "Mon oncle revient des champs et parle aux voisins du quartier.", expl: "des = de + les ; aux = à + les ; du = de + le." },
      { t: "saisie", q: "Mets au pluriel : « Le pêcheur parle au marchand. »", r: "Les pêcheurs parlent aux marchands.", large: true, expl: "le → les ; au → aux ; le verbe s'accorde : parlent." }
    ]
  ]
});
