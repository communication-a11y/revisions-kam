// À VÉRIFIER : sur la photocopie « Leçon 25 », l'élève a écrit « avitaminose » sous « Protéines » ; c'est faux (le kwashiorkor est une carence en protéines, pas en vitamines). Corrigé dans le module.
// À VÉRIFIER : la photocopie range myopie, presbytie, hypermétropie et glaucome parmi les maladies dues au manque de vitamine A ; ce n'est pas exact. Le module ne garde que la cécité nocturne (mal voir la nuit), qui est bien liée au manque de vitamine A.
LECONS.push({
  id: "vdsm-carences-avitaminose",
  cahier: "vivre",
  matiere: "Vivre dans son milieu",
  titre: "Les carences nutritionnelles et l'avitaminose",
  date: "2026-11-10",
  photos: ["DJI_20261118221629_0119_D.jpg", "DJI_20261118221643_0120_D.jpg", "DJI_20261118221722_0121_D.jpg"],
  retiens:
    "<p>On parle de <b>carences alimentaires</b> quand l'organisme manque de nutriments essentiels dont il a besoin pour fonctionner normalement.</p>" +
    "<p>Une <b>avitaminose</b> est une carence de <b>vitamines</b> : c'est l'ensemble des troubles dus à l'absence d'une vitamine, par carence totale et prolongée. Elle peut entraîner une malnutrition, parfois mortelle, ou des maladies plus ou moins graves.</p>" +
    "<p><b>Les causes de la malnutrition</b> : la sous-alimentation (ne pas manger assez) ; une alimentation pas assez variée, qui manque d'apports essentiels.</p>" +
    "<p>Une alimentation déséquilibrée peut entraîner des <b>maladies nutritionnelles</b> : la cécité, le béribéri, le scorbut, le rachitisme, le kwashiorkor, l'anémie, le goitre, la pellagre, l'obésité, le marasme…</p>" +
    "<table><tr><th>Carence</th><th>Maladie</th><th>Signes</th><th>Solutions</th></tr>" +
    "<tr><td>vitamine C</td><td><b>scorbut</b></td><td>saignement des gencives, fatigue, chute des dents</td><td>manger assez de fruits et de légumes</td></tr>" +
    "<tr><td>vitamine B1</td><td><b>béribéri</b></td><td>faiblesse des muscles, amaigrissement, problèmes nerveux et du cœur</td><td>manger des céréales, des haricots</td></tr>" +
    "<tr><td>vitamine B3</td><td><b>pellagre</b></td><td>lésions de la peau, diarrhée, troubles nerveux</td><td>manger assez de viande</td></tr>" +
    "<tr><td>vitamine D</td><td><b>rachitisme</b></td><td>os fragiles, troubles de la croissance</td><td>produits laitiers, aliments riches en calcium</td></tr>" +
    "<tr><td>vitamine A</td><td><b>troubles des yeux</b>, surtout la cécité nocturne</td><td>on voit mal la nuit, vision floue</td><td>lait, légumes et fruits</td></tr>" +
    "<tr><td>protéines (ce n'est pas une vitamine)</td><td><b>kwashiorkor</b></td><td>fatigue, amaigrissement, gonflement du ventre, troubles digestifs</td><td>manger assez de viande, de lait et de poisson</td></tr></table>" +
    "<p><b>Attention</b> : le kwashiorkor est une carence en <b>protéines</b>, ce n'est donc <b>pas</b> une avitaminose.</p>",
  astuce: "« A-vitamin-ose » : <b>a-</b> veut dire « sans ». Avitaminose = maladie « sans vitamine ». Et pour se souvenir : <b>C</b> comme <b>C</b>itron contre le scorbut ; <b>D</b> comme <b>D</b>ents et os solides contre le rachitisme.",
  regle: "Une carence, c'est un manque d'un nutriment essentiel ; une avitaminose, c'est un manque de vitamine. Vitamine C → scorbut, B1 → béribéri, B3 → pellagre, D → rachitisme, A → cécité nocturne ; protéines → kwashiorkor (pas une avitaminose).",
  niveaux: [
    [
      { t: "qcm", q: "On parle de carence alimentaire quand…", choix: ["l'organisme manque de nutriments essentiels", "on mange trop de fruits", "on boit beaucoup d'eau"], r: "l'organisme manque de nutriments essentiels", expl: "Carence = manque." },
      { t: "qcm", q: "Une avitaminose est une carence de…", choix: ["vitamines", "sucre", "eau"], r: "vitamines", expl: "A-vitamin-ose : maladie due au manque de vitamine." },
      { t: "vf", q: "Une alimentation pas assez variée peut causer la malnutrition.", r: true, expl: "C'est une des deux causes citées au cahier." },
      { t: "qcm", q: "Le scorbut est dû au manque de…", choix: ["vitamine C", "vitamine D", "protéines"], r: "vitamine C", expl: "Vitamine C → scorbut. On la trouve dans les fruits et les légumes." },
      { t: "qcm", q: "Le rachitisme est dû au manque de…", choix: ["vitamine D", "vitamine C", "vitamine B1"], r: "vitamine D", expl: "Vitamine D → rachitisme : les os deviennent fragiles." },
      { t: "vf", q: "La sous-alimentation, c'est ne pas manger assez.", r: true, expl: "Sous-alimenté = qui mange moins que ce dont il a besoin." }
    ],
    [
      { t: "relier", q: "Relie chaque carence à la maladie qu'elle provoque.", paires: [["vitamine C", "scorbut"], ["vitamine B1", "béribéri"], ["vitamine B3", "pellagre"], ["vitamine D", "rachitisme"], ["protéines", "kwashiorkor"]], expl: "C'est le tableau de la leçon 25." },
      { t: "relier", q: "Relie chaque maladie à un de ses signes.", paires: [["scorbut", "saignement des gencives"], ["rachitisme", "os fragiles"], ["kwashiorkor", "gonflement du ventre"], ["pellagre", "lésions de la peau"]], expl: "Chaque maladie a ses signes propres." },
      { t: "qcm", q: "Que faut-il manger pour éviter le scorbut ?", choix: ["des fruits et des légumes", "seulement du riz blanc", "des bonbons"], r: "des fruits et des légumes", expl: "Ils apportent la vitamine C." },
      { t: "qcm", q: "Le manque de vitamine A peut faire que…", choix: ["l'on voit mal la nuit", "les gencives saignent", "le ventre gonfle"], r: "l'on voit mal la nuit", expl: "La vision amoindrie la nuit (cécité nocturne) vient du manque de vitamine A." },
      { t: "saisie", q: "Quelle maladie est due au manque de vitamine B1 ?", r: ["le béribéri", "béribéri"], expl: "Vitamine B1 → béribéri." },
      { t: "vf", q: "Pour éviter le rachitisme, il faut des produits laitiers et des aliments riches en calcium.", r: true, expl: "C'est la solution indiquée au cahier." },
      { t: "classer", q: "Range chaque maladie selon ce qui manque.", cases: ["une vitamine", "des protéines"], items: [["le scorbut", "une vitamine"], ["le béribéri", "une vitamine"], ["la pellagre", "une vitamine"], ["le rachitisme", "une vitamine"], ["le kwashiorkor", "des protéines"]], expl: "Seul le kwashiorkor vient d'un manque de protéines." },
      { t: "qcm", q: "Quels aliments évitent le kwashiorkor ?", choix: ["la viande, le lait et le poisson", "le sucre et le thé", "l'eau seulement"], r: "la viande, le lait et le poisson", expl: "Ils sont riches en protéines." },
      { t: "trous", q: "Complète.", texte: "Une [avitaminose] est une carence de vitamines. Le manque de vitamine C donne le [scorbut] ; le manque de vitamine D donne le [rachitisme].", expl: "C → scorbut ; D → rachitisme." }
    ],
    [
      { t: "vf", q: "Le kwashiorkor est une avitaminose.", r: false, expl: "Piège : le kwashiorkor vient d'un manque de protéines. Les protéines ne sont pas des vitamines." },
      { t: "qcm", q: "Laquelle de ces maladies n'est PAS une avitaminose ?", choix: ["le kwashiorkor", "le scorbut", "le béribéri", "la pellagre"], r: "le kwashiorkor", expl: "Scorbut, béribéri et pellagre viennent d'un manque de vitamine ; le kwashiorkor, d'un manque de protéines." },
      { t: "qcm", q: "Que veut dire le préfixe <b>a-</b> dans « avitaminose » ?", choix: ["sans", "beaucoup", "avec"], r: "sans", expl: "A-vitaminose : sans vitamine, comme a-normal (pas normal)." },
      { t: "saisie", q: "Quelle maladie est due au manque de vitamine B3 ?", r: ["la pellagre", "pellagre"], expl: "Vitamine B3 → pellagre." },
      { t: "relier", q: "Relie chaque carence à l'aliment qui la combat (d'après le cahier).", paires: [["vitamine C", "fruits et légumes"], ["vitamine B1", "céréales et haricots"], ["vitamine D", "produits laitiers"], ["protéines", "viande et poisson"]], expl: "Chaque solution apporte ce qui manque." },
      { t: "vf", q: "Une avitaminose peut entraîner une malnutrition mortelle si elle dure longtemps.", r: true, expl: "La photocopie dit qu'elle peut être fatale ou donner des maladies plus ou moins graves." },
      { t: "qcm", q: "Fatou a les gencives qui saignent et elle est très fatiguée. Elle mange rarement des fruits. Quelle maladie peut-on soupçonner ?", choix: ["le scorbut", "le rachitisme", "le kwashiorkor"], r: "le scorbut", expl: "Gencives qui saignent + pas de fruits = manque de vitamine C." }
    ],
    [
      { t: "qcm", q: "Un petit enfant a le ventre gonflé, il maigrit et il est fatigué. Il ne mange presque jamais de viande, de lait ni de poisson. De quoi souffre-t-il sans doute ?", choix: ["du kwashiorkor, un manque de protéines", "du scorbut, un manque de vitamine C", "de la pellagre, un manque de vitamine B3"], r: "du kwashiorkor, un manque de protéines", expl: "Ventre gonflé + amaigrissement + manque de viande, lait et poisson : kwashiorkor." },
      { t: "trous", q: "Complète le texte.", texte: "Les causes de la malnutrition sont la [sous-alimentation] et une alimentation pas assez [variée]. Le manque de vitamine B1 donne le [béribéri] et le manque de protéines donne le [kwashiorkor].", expl: "Causes et maladies de la leçon." },
      { t: "classer", q: "Avitaminose ou pas ?", cases: ["avitaminose", "pas une avitaminose"], items: [["le scorbut", "avitaminose"], ["le rachitisme", "avitaminose"], ["le béribéri", "avitaminose"], ["le kwashiorkor", "pas une avitaminose"], ["la pellagre", "avitaminose"]], expl: "Seul le kwashiorkor ne vient pas d'un manque de vitamine." },
      { t: "qcm", q: "Moussa ne mange que du riz blanc tous les jours. Que lui conseiller ?", choix: ["varier ses repas avec des fruits, des légumes, du poisson et du lait", "manger encore plus de riz blanc", "sauter des repas"], r: "varier ses repas avec des fruits, des légumes, du poisson et du lait", expl: "Une alimentation variée évite les carences." },
      { t: "saisie", q: "Comment appelle-t-on une maladie due au manque de vitamine ? Une …", r: "avitaminose", expl: "A (sans) + vitamine + ose (maladie)." },
      { t: "vf", q: "L'obésité fait partie des maladies nutritionnelles citées au cahier.", r: true, expl: "Une alimentation déséquilibrée peut aussi donner l'obésité." }
    ]
  ]
});
