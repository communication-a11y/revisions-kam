LECONS.push({
  id: "fr-conj-passe-simple-3e-groupe",
  cahier: "francais",
  matiere: "Conjugaison",
  titre: "Le passé simple des verbes du 3e groupe",
  date: "2026-11-25",
  photos: ["2026-11-25_21.jpg", "2026-11-25_20.jpg", "2026-11-25_18.jpg"],
  retiens:
    "<p>• Beaucoup de verbes du 3<sup>e</sup> groupe ont des terminaisons en <b>i</b> au passé simple : <b>-is, -is, -it, -îmes, -îtes, -irent</b>.<br>Sentir : je sentis… nous sentîmes…</p>" +
    "<p>• Pour certains verbes, surtout ceux terminés par <b>-re</b>, le radical est modifié.<br>faire : je fis… nous fîmes — conduire : je conduisis… vous conduisîtes — mettre : je mis… ils mirent — permettre : tu permis… nous permîmes</p>" +
    "<p>• Certains verbes ont des terminaisons en <b>u</b> : <b>-us, -us, -ut, -ûmes, -ûtes, -urent</b>.<br>connaître : je connus — vouloir : je voulus — paraître : je parus — savoir : je sus — pouvoir : tu pus — devoir : je dus</p>" +
    "<p>• Les verbes <b>venir</b> et <b>tenir</b> (et leurs dérivés) ont des terminaisons particulières : <b>-ins, -ins, -int, -înmes, -întes, -inrent</b>.<br>je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent</p>" +
    "<table><tr><th>1<sup>er</sup> groupe</th><th>2<sup>e</sup> groupe</th><th>3<sup>e</sup> en i</th><th>3<sup>e</sup> en u</th><th>venir, tenir</th></tr>" +
    "<tr><td>-ai</td><td>-is</td><td>-is</td><td>-us</td><td>-ins</td></tr>" +
    "<tr><td>-as</td><td>-is</td><td>-is</td><td>-us</td><td>-ins</td></tr>" +
    "<tr><td>-a</td><td>-it</td><td>-it</td><td>-ut</td><td>-int</td></tr>" +
    "<tr><td>-âmes</td><td>-îmes</td><td>-îmes</td><td>-ûmes</td><td>-înmes</td></tr>" +
    "<tr><td>-âtes</td><td>-îtes</td><td>-îtes</td><td>-ûtes</td><td>-întes</td></tr>" +
    "<tr><td>-èrent</td><td>-irent</td><td>-irent</td><td>-urent</td><td>-inrent</td></tr></table>",
  astuce: "Au passé simple, <b>nous</b> et <b>vous</b> portent toujours un accent circonflexe : nous fîmes, vous sûtes, nous vînmes.",
  regle: "Au passé simple, les verbes du 3e groupe se terminent en -is, -is, -it, -îmes, -îtes, -irent ou en -us, -us, -ut, -ûmes, -ûtes, -urent ; venir et tenir font -ins, -ins, -int, -înmes, -întes, -inrent.",
  niveaux: [
    [
      { t: "qcm", q: "« je sentis » : quelle est la terminaison ?", choix: ["-is", "-us", "-ai"], r: "-is", expl: "Sentir fait partie des verbes en i : je sentis." },
      { t: "qcm", q: "Passé simple de « savoir » avec « je » :", choix: ["je sus", "je savis", "je savai"], r: "je sus", expl: "Savoir fait partie des verbes en u : je sus." },
      { t: "qcm", q: "Passé simple de « venir » avec « il » :", choix: ["il vint", "il venit", "il venut"], r: "il vint", expl: "Venir a des terminaisons particulières : il vint." },
      { t: "vf", q: "Au passé simple, « faire » donne « je fis ».", r: true, expl: "Le radical change : fai- devient f- : je fis." },
      { t: "qcm", q: "Avec « nous », les terminaisons en i s'écrivent…", choix: ["-îmes", "-imes", "-ïmes"], r: "-îmes", expl: "Accent circonflexe : nous sentîmes, nous fîmes." },
      { t: "classer", q: "Terminaisons en i ou en u ?", cases: ["en i", "en u"], items: [["je fis", "en i"], ["je mis", "en i"], ["je sus", "en u"], ["je voulus", "en u"], ["je sentis", "en i"], ["je dus", "en u"]], expl: "Il faut connaître le verbe : faire, mettre, sentir en i ; savoir, vouloir, devoir en u." }
    ],
    [
      { t: "saisie", q: "Mettre, passé simple : ils …", r: "mirent", expl: "Mettre : je mis… ils mirent." },
      { t: "saisie", q: "Faire, passé simple : nous …", r: "fîmes", expl: "Nous fîmes, avec un accent circonflexe." },
      { t: "saisie", q: "Conduire, passé simple : vous …", r: "conduisîtes", expl: "Conduire : je conduisis… vous conduisîtes." },
      { t: "saisie", q: "Pouvoir, passé simple : tu …", r: "pus", expl: "Pouvoir : tu pus." },
      { t: "saisie", q: "Connaître, passé simple : je …", r: "connus", expl: "Connaître : je connus." },
      { t: "saisie", q: "Tenir, passé simple : ils …", r: "tinrent", expl: "Comme venir : ils vinrent, ils tinrent." },
      { t: "trous", q: "Conjugue « vouloir » au passé simple.", texte: "je [voulus], tu [voulus], il [voulut], nous [voulûmes], vous [voulûtes], ils [voulurent]", expl: "Terminaisons en u : -us, -us, -ut, -ûmes, -ûtes, -urent." },
      { t: "relier", q: "Relie chaque verbe à sa forme du passé simple.", paires: [["paraître", "je parus"], ["devoir", "je dus"], ["permettre", "tu permis"], ["sentir", "nous sentîmes"]], expl: "Les exemples de la leçon." },
      { t: "trous", q: "Conjugue « venir » au passé simple.", texte: "je [vins], tu [vins], il [vint], nous [vînmes], vous [vîntes], ils [vinrent]", expl: "Venir : -ins, -ins, -int, -înmes, -întes, -inrent." }
    ],
    [
      { t: "qcm", q: "Laquelle de ces formes est juste ?", choix: ["nous dûmes", "nous dumes", "nous dûmmes"], r: "nous dûmes", expl: "Accent circonflexe et un seul m : nous dûmes." },
      { t: "qcm", q: "« il vit » : de quel verbe s'agit-il au passé simple ?", choix: ["voir", "vivre", "venir"], r: "voir", expl: "Voir : je vis, il vit. (Venir fait il vint.)" },
      { t: "saisie", q: "Revenir, passé simple : nous …", r: "revînmes", expl: "Les dérivés de venir se conjuguent comme lui : nous revînmes." },
      { t: "saisie", q: "Mets au passé simple : « Moussa (prendre) son cartable. »", r: "prit", expl: "Prendre : il prit (radical modifié, terminaison en i)." },
      { t: "classer", q: "Range selon le groupe de terminaisons.", cases: ["-is, -it…", "-us, -ut…", "-ins, -int…"], items: [["dire", "-is, -it…"], ["écrire", "-is, -it…"], ["lire", "-us, -ut…"], ["boire", "-us, -ut…"], ["tenir", "-ins, -int…"], ["devenir", "-ins, -int…"]], expl: "Il dit, il écrivit ; il lut, il but ; il tint, il devint." },
      { t: "vf", q: "Au passé simple, « ils » se termine toujours par -rent.", r: true, expl: "-èrent, -irent, -urent, -inrent : toujours -rent." },
      { t: "qcm", q: "Quelle phrase est au passé simple ?", choix: ["Ils vinrent au marché.", "Ils venaient au marché.", "Ils viendront au marché."], r: "Ils vinrent au marché.", expl: "Venaient : imparfait ; viendront : futur." }
    ],
    [
      { t: "trous", q: "Mets les verbes entre parenthèses au passé simple.", texte: "Hier, Fatou [vint] (venir) à la maison. Elle [fit] (faire) ses devoirs et [voulut] (vouloir) jouer. Nous [mîmes] (mettre) la table et nous [sûmes] (savoir) qu'elle resterait dîner.", expl: "venir → vint ; faire → fit ; vouloir → voulut ; mettre → mîmes ; savoir → sûmes." },
      { t: "dictee", texte: "Les pêcheurs vinrent tôt et mirent leurs pirogues à la mer.", expl: "venir → vinrent ; mettre → mirent." },
      { t: "dictee", texte: "Nous fîmes nos devoirs, puis nous pûmes enfin jouer dans la cour.", expl: "faire → fîmes ; pouvoir → pûmes, avec l'accent circonflexe." },
      { t: "saisie", q: "Récris au passé simple : « Ils doivent partir. » → « Ils … partir. »", r: "durent", expl: "Devoir : ils durent." },
      { t: "qcm", q: "Quelle série est entièrement juste ?", choix: ["je connus, tu sentis, il tint", "je connis, tu sentus, il tenit", "je connus, tu sentus, il tint"], r: "je connus, tu sentis, il tint", expl: "connaître → u ; sentir → i ; tenir → in." }
    ]
  ]
});
