// À VÉRIFIER : le NB du cahier (photo 0097, partielle) cite après les cent-millièmes « les mille-millièmes » : ce rang n'existe pas ; le module écrit « les millionièmes ».
// À VÉRIFIER : photo 0097 sombre et bougée : seul ce qui est lisible avec certitude a été repris (définition, règle, exemple 12,63 > 12,629).
LECONS.push({
  id: "ma-num-comparaison-decimaux",
  cahier: "maths",
  matiere: "Activités numériques",
  titre: "La comparaison des nombres décimaux",
  date: "2026-11-17",
  photos: ["DJI_20261118221252_0097_D.jpg"],
  retiens:
    "<p><b>Comparer</b> deux nombres différents, c'est dire quel est le plus grand ou le plus petit.</p>" +
    "<p>Pour comparer des nombres décimaux, on compare d'abord :</p>" +
    "<ul><li>les <b>parties entières</b>, puis</li><li>les <b>parties décimales</b>.</li></ul>" +
    "<p><b>NB :</b> si les nombres ont la même partie entière, on compare d'abord les <b>dixièmes</b>, puis les <b>centièmes</b>, les <b>millièmes</b>, les dix-millièmes, les cent-millièmes, les millionièmes.</p>" +
    "<p>Ex : 12,63 &gt; 12,629 (même partie entière 12, mêmes dixièmes 6, mais 3 centièmes &gt; 2 centièmes)</p>" +
    "<p>Le signe <b>&gt;</b> se lit « est plus grand que » ; le signe <b>&lt;</b> se lit « est plus petit que ».</p>",
  astuce: "Attention : le nombre qui a le plus de chiffres après la virgule n'est pas forcément le plus grand ! 12,63 &gt; 12,629. Compare rang par rang, en partant de la virgule.",
  regle: "On compare d'abord les parties entières ; si elles sont égales, on compare les dixièmes, puis les centièmes, puis les millièmes…",
  niveaux: [
    [
      { t: "qcm", q: "Pour comparer 25,4 et 31,2, je regarde d'abord…", choix: ["les parties entières", "les dixièmes", "le nombre de chiffres"], r: "les parties entières", expl: "On compare d'abord les parties entières : 25 &lt; 31, donc 25,4 &lt; 31,2." },
      { t: "vf", q: "12,63 &gt; 12,629", r: true, expl: "Même partie entière, mêmes dixièmes (6) ; aux centièmes, 3 &gt; 2." },
      { t: "qcm", q: "Pour comparer 12,63 et 12,629, quel rang fait la différence ?", choix: ["les centièmes (3 et 2)", "les dixièmes", "les parties entières"], r: "les centièmes (3 et 2)", expl: "Parties entières égales (12), dixièmes égaux (6) : ce sont les centièmes qui décident." },
      { t: "qcm", q: "Que veut dire le signe &gt; ?", choix: ["est plus grand que", "est plus petit que", "est égal à"], r: "est plus grand que", expl: "La pointe du signe est tournée vers le plus petit nombre." },
      { t: "relier", q: "Relie : qu'est-ce qu'on compare ensuite ?", paires: [["après les dixièmes", "les centièmes"], ["après les centièmes", "les millièmes"], ["après les millièmes", "les dix-millièmes"], ["après les cent-millièmes", "les millionièmes"]], expl: "Dixièmes, centièmes, millièmes, dix-millièmes, cent-millièmes, millionièmes." },
      { t: "vf", q: "8,5 &lt; 7,9", r: false, expl: "Les parties entières décident : 8 &gt; 7, donc 8,5 &gt; 7,9." }
    ],
    [
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "14,2 [>] 13,9 — 5,07 [<] 5,7 — 0,45 [>] 0,405 — 3,6 [<] 3,61", expl: "14 &gt; 13 ; 0 dixième &lt; 7 dixièmes ; 5 centièmes &gt; 0 centième ; 0 centième &lt; 1 centième." },
      { t: "qcm", q: "Quel est le plus grand nombre ?", choix: ["7,8", "7,08", "7,018", "7,1"], r: "7,8", expl: "Même partie entière 7 ; aux dixièmes, 8 est le plus grand chiffre." },
      { t: "qcm", q: "Quel est le plus petit nombre ?", choix: ["2,405", "2,5", "2,45", "2,54"], r: "2,405", expl: "Dixièmes : 4 &lt; 5. Entre 2,45 et 2,405, aux centièmes : 0 &lt; 5." },
      { t: "saisie", q: "Écris le plus grand de ces deux nombres : 45,3 et 45,29.", r: "45.3", nombre: true, expl: "Mêmes parties entières ; aux dixièmes, 3 &gt; 2. Donc 45,3 &gt; 45,29." },
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "26,1 [>] 25,99 — 0,9 [>] 0,89 — 104,5 [<] 140,5 — 9,999 [<] 10", expl: "On compare d'abord les parties entières (26 &gt; 25 ; 104 &lt; 140 ; 9 &lt; 10). Pour 0,9 et 0,89 : 9 dixièmes &gt; 8 dixièmes." },
      { t: "classer", q: "Compare chaque nombre à 5.", cases: ["plus grand que 5", "plus petit que 5"], items: [["5,1", "plus grand que 5"], ["4,99", "plus petit que 5"], ["5,01", "plus grand que 5"], ["4,9", "plus petit que 5"], ["0,5", "plus petit que 5"], ["15,2", "plus grand que 5"]], expl: "Regarde d'abord la partie entière. 5,1 et 5,01 ont 5 unités et des dixièmes ou centièmes en plus : ils sont plus grands que 5." },
      { t: "vf", q: "3,25 &gt; 3,3", r: false, expl: "Mêmes parties entières ; aux dixièmes, 2 &lt; 3. Donc 3,25 &lt; 3,3." },
      { t: "qcm", q: "Quel rangement va du plus petit au plus grand ?", choix: ["2,5 &lt; 2,51 &lt; 2,6", "2,6 &lt; 2,51 &lt; 2,5", "2,51 &lt; 2,5 &lt; 2,6"], r: "2,5 &lt; 2,51 &lt; 2,6", expl: "2,5 et 2,51 ont 5 dixièmes ; 2,51 a 1 centième de plus. 2,6 a 6 dixièmes." },
      { t: "qcm", q: "Quel nombre est compris entre 4,3 et 4,4 ?", choix: ["4,35", "4,5", "4,03", "43,5"], r: "4,35", expl: "4,35 a 3 dixièmes comme 4,3, avec 5 centièmes en plus, et il est plus petit que 4,4." }
    ],
    [
      { t: "vf", q: "12,629 est plus grand que 12,63, parce qu'il a plus de chiffres après la virgule.", r: false, expl: "Ce n'est pas le nombre de chiffres qui compte : aux centièmes, 2 &lt; 3. Donc 12,629 &lt; 12,63." },
      { t: "qcm", q: "Compare : 0,7 … 0,698", choix: ["&gt;", "&lt;"], r: "&gt;", expl: "Aux dixièmes : 7 &gt; 6. Donc 0,7 &gt; 0,698." },
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "1,005 [<] 1,05 — 18,2 [>] 9,87 — 7,0001 [<] 7,001", expl: "1,005 : 0 centième &lt; 5 centièmes. 18 &gt; 9. 7,0001 : 0 millième &lt; 1 millième." },
      { t: "qcm", q: "Deux nombres ont la même partie entière et les mêmes dixièmes. Que compare-t-on ensuite ?", choix: ["les centièmes", "les parties entières", "les millièmes"], r: "les centièmes", expl: "On avance rang par rang : dixièmes, puis centièmes, puis millièmes." },
      { t: "saisie", q: "Écris le plus petit de ces deux nombres : 0,099 et 0,1.", r: "0.099", nombre: true, expl: "Aux dixièmes : 0 &lt; 1. Donc 0,099 &lt; 0,1." },
      { t: "qcm", q: "Quelle comparaison est FAUSSE ?", choix: ["3,45 &gt; 3,5", "3,45 &lt; 3,5", "3,5 &gt; 3,05", "3,05 &lt; 3,45"], r: "3,45 &gt; 3,5", expl: "Aux dixièmes, 4 &lt; 5 : 3,45 est plus petit que 3,5." },
      { t: "saisie", q: "Quel chiffre des centièmes faut-il écrire pour que 5,2? soit plus grand que 5,28 et plus petit que 5,3 ?", r: "9", expl: "5,29 &gt; 5,28 (9 &gt; 8 centièmes) et 5,29 &lt; 5,3 (2 dixièmes &lt; 3 dixièmes)." }
    ],
    [
      { t: "qcm", q: "Lors d'une course à l'école, Moussa fait 12,45 s, Ibrahima 12,5 s et Mamadou 12,405 s. Le plus rapide a le plus petit temps. Qui gagne ?", choix: ["Mamadou", "Moussa", "Ibrahima"], r: "Mamadou", expl: "12,405 &lt; 12,45 &lt; 12,5 : Mamadou a le plus petit temps." },
      { t: "qcm", q: "Awa pèse 32,6 kg, Fatou 32,58 kg et Khady 32,65 kg. Qui est la plus lourde ?", choix: ["Khady", "Awa", "Fatou"], r: "Khady", expl: "Mêmes parties entières. Dixièmes : 6, 5, 6. Entre 32,6 et 32,65, Khady a 5 centièmes de plus." },
      { t: "qcm", q: "Range du plus grand au plus petit : 4,7 ; 4,07 ; 4,77 ; 4,707.", choix: ["4,77 &gt; 4,707 &gt; 4,7 &gt; 4,07", "4,707 &gt; 4,77 &gt; 4,7 &gt; 4,07", "4,07 &gt; 4,7 &gt; 4,707 &gt; 4,77"], r: "4,77 &gt; 4,707 &gt; 4,7 &gt; 4,07", expl: "4,07 a 0 dixième : il est le plus petit. Les autres ont 7 dixièmes ; aux centièmes : 7 &gt; 0 = 0, puis aux millièmes 4,707 &gt; 4,7." },
      { t: "probleme", consigne: "Pose les opérations sur ton cahier, puis écris chaque résultat (sans point entre les classes).", q: "Au marché, trois sacs de riz pèsent 49,8 kg, 50,15 kg et 49,95 kg.", etapes: [{ q: "Masse du sac le plus lourd :", r: "50.15", unite: "kg" }, { q: "Masse du sac le plus léger :", r: "49.8", unite: "kg" }], expl: "50 &gt; 49, donc 50,15 kg est le plus lourd. Entre 49,8 et 49,95 : 8 dixièmes &lt; 9 dixièmes, donc 49,8 kg est le plus léger." },
      { t: "trous", q: "Écris &gt; ou &lt;.", texte: "0,5 [>] 0,49 — 100,01 [>] 99,99 — 2,349 [<] 2,35", expl: "5 dixièmes &gt; 4 dixièmes ; 100 &gt; 99 ; aux centièmes, 4 &lt; 5." }
    ]
  ]
});
