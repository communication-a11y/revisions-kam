// À VÉRIFIER : après « sauf la clé ou clef », le cahier ajoute un mot peu lisible (probablement « l'acné ») : non repris dans le module.
// À VÉRIFIER : pour les noms qui expriment le contenu (une assiettée, une brouettée), le cahier ne dit pas explicitement qu'ils s'écrivent -ée ; c'est le sens de l'« Attention » et c'est la règle habituelle. Le module l'écrit.
// Corrections : « une brouette » → « une brouettée » (nom de contenu) ; « la jette » → « la jetée » ; « Tous les noms femins par le son [é] » → « Tous les noms féminins terminés par le son [é] ».
LECONS.push({
  id: "fr-orth-noms-feminins-ee-te-tie",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les noms féminins en -ée, -té, -tié",
  date: "2026-09-29",
  photos: ["DJI_20261118220345_0028_D.jpg", "DJI_20261118220350_0029_D.jpg"],
  retiens:
    "<p>→ Les noms féminins terminés par le son [é] s'écrivent avec <b>-ée</b>.<br>Ex : la vallée, la soirée, la gorgée, la cheminée…<br>Sauf : la clé (ou la clef).</p>" +
    "<p>→ Les noms terminés en <b>-té</b> ou en <b>-tié</b> se terminent généralement par <b>-é</b>.<br>Ex : la santé, la fidélité, la pitié, la moitié.</p>" +
    "<p><b>Attention :</b></p><ul>" +
    "<li>Les noms qui expriment un <b>contenu</b> s'écrivent <b>-ée</b> : une assiettée (le contenu d'une assiette), une brouettée (le contenu d'une brouette).</li>" +
    "<li><b>6 noms</b> ne suivent pas la règle et s'écrivent <b>-tée</b> : la dictée, la jetée, la montée, la pâtée, la portée, la butée.</li></ul>",
  astuce: "Pour les noms en <b>-té</b> : pense à la <b>santé</b>, à la <b>liberté</b> : un seul é. Les 6 rebelles en <b>-tée</b> : « Après la <b>dictée</b>, on monte la <b>montée</b> vers la <b>jetée</b> ; le chien mange sa <b>pâtée</b> avec la <b>portée</b> de chiots, jusqu'à la <b>butée</b>. »",
  regle: "Nom féminin en [é] → -ée (la vallée), sauf la clé. Nom en -té ou -tié → -é (la santé, la moitié), sauf les noms de contenu (une assiettée) et dictée, jetée, montée, pâtée, portée, butée.",
  niveaux: [
    [
      { t: "qcm", q: "Les noms féminins terminés par le son [é] s'écrivent en général…", choix: ["-ée", "-é", "-er"], r: "-ée", expl: "la vallée, la soirée, la gorgée : -ée." },
      { t: "qcm", q: "Les noms terminés en -té ou -tié se terminent généralement par…", choix: ["-é", "-ée", "-er"], r: "-é", expl: "la santé, la fidélité, la pitié, la moitié : -é." },
      { t: "vf", q: "« la clé » est une exception : elle s'écrit sans e final.", r: true, expl: "On écrit la clé (ou la clef)." },
      { t: "vf", q: "On écrit « la santée ».", r: false, expl: "Nom en -té → -é : la santé." },
      { t: "classer", q: "Range ces noms selon leur terminaison.", cases: ["-ée", "-é"], items: [["la vallée", "-ée"], ["la santé", "-é"], ["la soirée", "-ée"], ["la pitié", "-é"], ["la cheminée", "-ée"], ["la moitié", "-é"]], expl: "Son [é] en général → -ée ; noms en -té ou -tié → -é." },
      { t: "qcm", q: "Combien de noms en -tée font exception à la règle des noms en -té ?", choix: ["2", "6", "10"], r: "6", expl: "la dictée, la jetée, la montée, la pâtée, la portée, la butée." }
    ],
    [
      { t: "trous", q: "Complète avec -ée ou -é.", texte: "la soir[ée] — la libert[é] — la gorg[ée] — la beaut[é] — la journ[ée] — l'amiti[é]", expl: "journée, soirée, gorgée : -ée ; liberté, beauté, amitié : -é." },
      { t: "saisie", q: "Écris le nom : ce qu'on boit d'un seul coup, c'est une gorg…", r: "gorgée", expl: "Nom féminin en [é] → -ée." },
      { t: "saisie", q: "Écris le nom : la fin de la journée, avant la nuit, c'est la soir…", r: "soirée", expl: "Nom féminin en [é] → -ée." },
      { t: "saisie", q: "Écris le nom : le fait d'être en bonne forme, c'est la san…", r: "santé", expl: "Nom en -té → -é." },
      { t: "saisie", q: "Écris le nom : une des deux parties égales d'un tout, c'est la moi…", r: "moitié", expl: "Nom en -tié → -é." },
      { t: "qcm", q: "Quel nom est bien écrit ?", choix: ["la fidélité", "la fidélitée", "la fidéliter"], r: "la fidélité", expl: "Nom en -té → -é." },
      { t: "qcm", q: "Quel nom est bien écrit ?", choix: ["la vallée", "la vallé", "la valée"], r: "la vallée", expl: "Nom féminin en [é] → -ée." },
      { t: "relier", q: "Relie chaque début de mot à sa fin.", paires: [["la pit", "ié"], ["la chemin", "ée"], ["la clé", "(exception, sans e)"], ["la propret", "é"]], expl: "pitié, cheminée, clé, propreté." },
      { t: "vf", q: "« la pitié » et « l'amitié » se terminent par -é.", r: true, expl: "Noms en -tié → -é." }
    ],
    [
      { t: "qcm", q: "Quel nom en -té fait exception et s'écrit -tée ?", choix: ["la dictée", "la santé", "la beauté", "la bonté"], r: "la dictée", expl: "La dictée fait partie des 6 exceptions." },
      { t: "classer", q: "Noms en [té] : règle (-té) ou exception (-tée) ?", cases: ["-té (règle)", "-tée (exception)"], items: [["la santé", "-té (règle)"], ["la jetée", "-tée (exception)"], ["la bonté", "-té (règle)"], ["la montée", "-tée (exception)"], ["la fierté", "-té (règle)"], ["la pâtée", "-tée (exception)"], ["la portée", "-tée (exception)"], ["la fidélité", "-té (règle)"]], expl: "Les 6 exceptions : dictée, jetée, montée, pâtée, portée, butée." },
      { t: "saisie", q: "Écris le nom de contenu : le contenu d'une assiette, c'est une assiet…", r: "assiettée", expl: "Les noms qui expriment un contenu s'écrivent -ée : une assiettée." },
      { t: "saisie", q: "Écris le nom de contenu : le contenu d'une brouette, c'est une brouet…", r: "brouettée", expl: "Nom de contenu → -ée : une brouettée." },
      { t: "saisie", q: "Écris le nom (exception) : la nourriture qu'on donne au chien, c'est la pât…", r: "pâtée", expl: "« la pâtée » est une des 6 exceptions." },
      { t: "vf", q: "« la montée » suit la règle des noms en -té.", r: false, expl: "C'est une exception : la montée." },
      { t: "trous", q: "Complète ce texte.", texte: "Après la dict[ée], Awa a mangé une assiett[ée] de riz. Elle souhaite une bonne san[té] à sa grand-mère.", expl: "dictée (exception), assiettée (nom de contenu), santé (-té)." }
    ],
    [
      { t: "dictee", texte: "Pendant la soirée, les pêcheurs se promènent sur la jetée de Saint-Louis.", expl: "soirée (-ée) ; jetée (une des 6 exceptions)." },
      { t: "dictee", texte: "Grâce à sa bonté et à sa fidélité, Moussa a gardé la moitié de son goûter pour Ibrahima.", expl: "bonté, fidélité, moitié : -é." },
      { t: "trous", q: "Complète ce texte.", texte: "Pendant la journ[ée], le maçon transporte une brouett[ée] de sable. En haut de la mont[ée], il boit une gorg[ée] d'eau et retrouve sa bonne humeur et sa san[té].", expl: "journée, gorgée (-ée) ; brouettée (nom de contenu) ; montée (exception) ; santé (-té)." },
      { t: "qcm", q: "Quelle phrase ne contient aucune faute ?", choix: ["La beauté de la vallée nous émerveille.", "La beautée de la vallée nous émerveille.", "La beauté de la vallé nous émerveille.", "La beautée de la vallé nous émerveille."], r: "La beauté de la vallée nous émerveille.", expl: "beauté (-té → -é) ; vallée (-ée)." },
      { t: "relier", q: "Relie chaque nom à la règle qu'il suit.", paires: [["la cheminée", "féminin en [é] → -ée"], ["la liberté", "nom en -té → -é"], ["une assiettée", "nom de contenu → -ée"], ["la portée", "une des 6 exceptions"], ["la clé", "exception sans e"]], expl: "Règles et exceptions de la leçon." }
    ]
  ]
});
