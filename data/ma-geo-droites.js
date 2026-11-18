// Date absente de la page (photo 0067) : leçon placée au vendredi 25 septembre 2026, entre la page du 23-25 septembre et celle du 28 septembre.
LECONS.push({
  id: "ma-geo-droites",
  cahier: "maths",
  matiere: "Géométrie",
  titre: "Les droites : sécantes, perpendiculaires, parallèles",
  date: "2026-09-25",
  photos: ["DJI_20261118220833_0067_D.jpg", "DJI_20261118220845_0068_D.jpg"],
  retiens:
    "<p>Des droites sont <b>sécantes</b> quand elles se coupent en un point.</p>" +
    "<p>Deux droites sont <b>perpendiculaires</b> quand elles sont sécantes en formant des <b>angles droits</b>.</p>" +
    "<p>Deux droites <b>parallèles</b> ne se rencontrent jamais : elles gardent le <b>même écartement</b> entre elles.</p>" +
    "<table><tr><th>Droites</th><th>Se coupent ?</th><th>Angles droits ?</th></tr>" +
    "<tr><td>sécantes</td><td>oui, en un point</td><td>pas forcément</td></tr>" +
    "<tr><td>perpendiculaires</td><td>oui, en un point</td><td>oui</td></tr>" +
    "<tr><td>parallèles</td><td>jamais</td><td>—</td></tr></table>",
  astuce: "Pense aux lettres : <b>X</b> = deux droites sécantes ; <b>T</b> ou <b>+</b> = perpendiculaires ; <b>=</b> = parallèles.",
  regle: "Sécantes : elles se coupent en un point. Perpendiculaires : elles se coupent en formant des angles droits. Parallèles : elles ne se rencontrent jamais et gardent le même écartement.",
  niveaux: [
    [
      { t: "qcm", q: "Deux droites qui se coupent en un point sont…", choix: ["sécantes", "parallèles", "confondues"], r: "sécantes", expl: "Se couper en un point, c'est la définition de droites sécantes." },
      { t: "qcm", q: "Deux droites qui ne se rencontrent jamais sont…", choix: ["parallèles", "sécantes", "perpendiculaires"], r: "parallèles", expl: "Les droites parallèles gardent le même écartement : elles ne se rencontrent jamais." },
      { t: "qcm", q: "Deux droites qui se coupent en formant des angles droits sont…", choix: ["perpendiculaires", "parallèles", "illimitées"], r: "perpendiculaires", expl: "Perpendiculaires = sécantes avec des angles droits." },
      { t: "relier", q: "Relie chaque lettre ou signe au type de droites qu'il rappelle.", paires: [["X", "sécantes"], ["T", "perpendiculaires"], ["=", "parallèles"]], expl: "X : deux traits qui se croisent en biais ; T : un angle droit ; = : deux traits qui ne se touchent jamais." },
      { t: "vf", q: "Deux droites parallèles gardent toujours le même écartement.", r: true, expl: "C'est ce qui les empêche de se rencontrer." },
      { t: "vf", q: "Deux droites parallèles se coupent très loin.", r: false, expl: "Des droites parallèles ne se rencontrent jamais, même très loin." }
    ],
    [
      { t: "classer", q: "Range chaque exemple de la vie courante.", cases: ["parallèles", "perpendiculaires"], items: [["les deux rails d'un chemin de fer", "parallèles"], ["le bord du haut et le bord de gauche d'une feuille", "perpendiculaires"], ["les lignes d'un cahier", "parallèles"], ["un poteau bien droit et le sol plat", "perpendiculaires"], ["les deux bords d'une route droite", "parallèles"], ["les deux traits de la croix d'une fenêtre", "perpendiculaires"]], expl: "Parallèles : même écartement, jamais de rencontre. Perpendiculaires : elles se coupent en formant un angle droit." },
      { t: "saisie", q: "Des droites qui se coupent en un point sont dites …", r: "sécantes", expl: "Sécantes : elles se coupent." },
      { t: "saisie", q: "Des droites qui ne se rencontrent jamais sont dites …", r: "parallèles", expl: "Parallèles : même écartement." },
      { t: "saisie", q: "Des droites sécantes qui forment des angles droits sont dites …", r: "perpendiculaires", expl: "Perpendiculaires : des angles droits à l'intersection." },
      { t: "qcm", q: "Deux droites perpendiculaires forment combien d'angles droits à leur point de rencontre ?", choix: ["4", "1", "2"], r: "4", expl: "Comme le signe +, elles forment 4 angles droits autour du point." },
      { t: "trous", q: "Complète.", texte: "Les droites (D1) et (D2) se coupent : elles sont [sécantes]. Si elles forment des angles droits, elles sont [perpendiculaires]. Les droites (D3) et (D4) ne se rencontrent jamais : elles sont [parallèles].", expl: "Sécantes, perpendiculaires, parallèles." },
      { t: "qcm", q: "Quel outil permet de vérifier que deux droites sont perpendiculaires ?", choix: ["l'équerre", "le compas", "le rapporteur seul"], r: "l'équerre", expl: "L'équerre a un angle droit : on la pose au point de rencontre pour vérifier." },
      { t: "vf", q: "Des droites perpendiculaires sont aussi des droites sécantes.", r: true, expl: "Elles se coupent en un point : elles sont sécantes, avec en plus des angles droits." }
    ],
    [
      { t: "vf", q: "Deux droites sécantes sont toujours perpendiculaires.", r: false, expl: "Elles peuvent se couper en biais, comme un X : elles ne forment alors pas d'angles droits." },
      { t: "vf", q: "Deux droites parallèles peuvent être sécantes.", r: false, expl: "Des parallèles ne se rencontrent jamais ; des sécantes se coupent. C'est impossible d'être les deux." },
      { t: "qcm", q: "Les deux traits de la lettre X…", choix: ["sont sécants mais pas perpendiculaires", "sont parallèles", "sont perpendiculaires"], r: "sont sécants mais pas perpendiculaires", expl: "Ils se croisent en biais : sécants, sans angle droit." },
      { t: "qcm", q: "Les deux traits du signe +…", choix: ["sont perpendiculaires", "sont parallèles", "ne se coupent pas"], r: "sont perpendiculaires", expl: "Ils se coupent en formant 4 angles droits." },
      { t: "qcm", q: "Dans la lettre H, les deux grands traits verticaux sont…", choix: ["parallèles", "sécants", "perpendiculaires"], r: "parallèles", expl: "Ils gardent le même écartement et ne se rencontrent jamais." },
      { t: "qcm", q: "Dans la lettre H, le petit trait du milieu et un grand trait vertical sont…", choix: ["perpendiculaires", "parallèles", "confondus"], r: "perpendiculaires", expl: "Le trait horizontal coupe le trait vertical en formant un angle droit." },
      { t: "classer", q: "Range chaque phrase : vraie ou fausse ?", cases: ["vraie", "fausse"], items: [["Des perpendiculaires se coupent en un point.", "vraie"], ["Des parallèles se coupent en un point.", "fausse"], ["Des sécantes ont toujours des angles droits.", "fausse"], ["Des parallèles gardent le même écartement.", "vraie"]], expl: "Seules les perpendiculaires ont forcément des angles droits ; les parallèles ne se coupent jamais." }
    ],
    [
      { t: "qcm", q: "Dans un carré, deux côtés opposés (face à face) sont…", choix: ["parallèles", "perpendiculaires", "sécants"], r: "parallèles", expl: "Ils sont face à face et gardent le même écartement." },
      { t: "qcm", q: "Dans un carré, deux côtés qui se touchent à un sommet sont…", choix: ["perpendiculaires", "parallèles", "illimités"], r: "perpendiculaires", expl: "Ils se coupent au sommet en formant un angle droit." },
      { t: "trous", q: "Complète la leçon.", texte: "Des droites sont sécantes quand elles se [coupent] en un point. Deux droites sont perpendiculaires quand elles sont sécantes en formant des angles [droits]. Deux droites parallèles ne se rencontrent [jamais] : elles gardent le même [écartement].", expl: "Ce sont les trois définitions du cahier." },
      { t: "qcm", q: "La droite (D1) est perpendiculaire à (D3), et la droite (D2) est aussi perpendiculaire à (D3). Comment sont (D1) et (D2) ?", choix: ["parallèles", "perpendiculaires", "sécantes en biais"], r: "parallèles", aide: "Pense aux barreaux d'une échelle posés sur un montant.", expl: "Comme les barreaux d'une échelle, deux droites perpendiculaires à la même droite sont parallèles." },
      { t: "relier", q: "Relie chaque description à son nom.", paires: [["se coupent en biais, sans angle droit", "sécantes non perpendiculaires"], ["se coupent avec 4 angles droits", "perpendiculaires"], ["même écartement, jamais de rencontre", "parallèles"]], expl: "C'est le résumé de la leçon." }
    ]
  ]
});
