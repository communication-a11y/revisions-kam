LECONS.push({
  id: "ma-mes-masses",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de masse : le kg, ses multiples et ses sous-multiples",
  date: "2026-09-30",
  photos: ["DJI_20261118220859_0069_D.jpg", "DJI_20261118220908_0070_D.jpg"],
  retiens:
    "<p>Pour connaître la masse (le poids) d'un corps, on le pèse en utilisant les unités de masse, dont l'unité principale est le <b>gramme (g)</b>.</p>" +
    "<p>Pour peser des objets très lourds, le <b>kilogramme (kg)</b> est trop petit : on utilise alors le <b>quintal (q)</b> ou la <b>tonne (t)</b>.</p>" +
    "<table><tr><th>t</th><th>q</th><th>·</th><th>kg</th><th>hg</th><th>dag</th><th>g</th><th>dg</th><th>cg</th><th>mg</th></tr>" +
    "<tr><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr>" +
    "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>" +
    "<p>La colonne marquée d'un point, entre q et kg, est celle des dizaines de kilogrammes : elle n'a pas de nom.</p>" +
    "<p><b>1 t = 10 q = 1 000 kg</b> ; <b>1 q = 100 kg</b><br><b>1 kg = 1 000 g</b> ; <b>1 g = 1 000 mg</b></p>" +
    "<p>Dans un nombre de kilogrammes, le chiffre des <b>centaines</b> représente les <b>quintaux</b> et le chiffre des <b>mille</b> représente les <b>tonnes</b>. Exemple : 3 475 kg = 3 t 4 q 75 kg.</p>",
  astuce: "Un sac de riz de 100 kg, c'est <b>1 quintal</b>. Dix sacs de 100 kg, c'est <b>1 tonne</b>.",
  regle: "1 t = 10 q = 1 000 kg ; 1 q = 100 kg ; 1 kg = 1 000 g ; 1 g = 1 000 mg. Dans le tableau, chaque colonne vaut 10 fois celle de droite.",
  niveaux: [
    [
      { t: "qcm", q: "Pour peser un camion chargé, quelle unité choisit-on ?", choix: ["la tonne", "le gramme", "le milligramme", "le litre"], r: "la tonne", expl: "Pour les objets très lourds, le kg est trop petit : on utilise la tonne ou le quintal." },
      { t: "qcm", q: "Combien de kilogrammes dans 1 quintal ?", choix: ["10 kg", "100 kg", "1 000 kg"], r: "100 kg", expl: "1 q = 100 kg." },
      { t: "qcm", q: "Combien de kilogrammes dans 1 tonne ?", choix: ["100 kg", "1 000 kg", "10 kg"], r: "1 000 kg", expl: "1 t = 1 000 kg = 10 q." },
      { t: "vf", q: "1 kg = 1 000 g.", r: true, expl: "kg, hg, dag, g : trois colonnes, donc 1 kg = 1 000 g." },
      { t: "relier", q: "Relie les masses égales.", paires: [["1 t", "10 q"], ["1 q", "100 kg"], ["1 kg", "1 000 g"], ["1 g", "1 000 mg"]], expl: "Ce sont les égalités à connaître par cœur." },
      { t: "classer", q: "Plus lourd ou plus léger que 1 kg ?", cases: ["plus lourd que 1 kg", "plus léger que 1 kg"], items: [["1 q", "plus lourd que 1 kg"], ["1 g", "plus léger que 1 kg"], ["1 t", "plus lourd que 1 kg"], ["1 hg", "plus léger que 1 kg"], ["1 mg", "plus léger que 1 kg"], ["1 dag", "plus léger que 1 kg"]], expl: "Le quintal et la tonne sont à gauche du kg dans le tableau ; hg, dag, g, mg sont à droite." }
    ],
    [
      { t: "saisie", q: "2 t = … kg", r: "2000", nombre: true, unite: "kg", expl: "1 t = 1 000 kg, donc 2 t = 2 000 kg." },
      { t: "saisie", q: "3 q = … kg", r: "300", nombre: true, unite: "kg", expl: "1 q = 100 kg, donc 3 q = 300 kg." },
      { t: "saisie", q: "5 kg = … g", r: "5000", nombre: true, unite: "g", expl: "1 kg = 1 000 g, donc 5 kg = 5 000 g." },
      { t: "saisie", q: "4 g = … mg", r: "4000", nombre: true, unite: "mg", expl: "1 g = 1 000 mg, donc 4 g = 4 000 mg." },
      { t: "saisie", q: "6 t = … q", r: "60", nombre: true, unite: "q", expl: "1 t = 10 q, donc 6 t = 60 q." },
      { t: "saisie", q: "500 kg = … q", r: "5", nombre: true, unite: "q", expl: "100 kg = 1 q, donc 500 kg = 5 q." },
      { t: "saisie", q: "7 000 g = … kg", r: "7", nombre: true, unite: "kg", expl: "1 000 g = 1 kg, donc 7 000 g = 7 kg." },
      { t: "saisie", q: "8 000 kg = … t", r: "8", nombre: true, unite: "t", expl: "1 000 kg = 1 t, donc 8 000 kg = 8 t." },
      { t: "trous", q: "Complète l'ordre des unités, de la plus grande à la plus petite.", texte: "t — [q] — · — kg — [hg] — dag — [g] — dg — cg — [mg]", expl: "t, q, (dizaines de kg), kg, hg, dag, g, dg, cg, mg." }
    ],
    [
      { t: "saisie", q: "2 500 kg = … t", r: "2,5", nombre: true, unite: "t", expl: "2 500 kg = 2 t 500 kg = 2,5 t." },
      { t: "saisie", q: "1,5 kg = … g", r: "1500", nombre: true, unite: "g", expl: "1,5 kg = 1 kg 500 g = 1 500 g." },
      { t: "saisie", q: "250 g = … kg", r: "0,25", nombre: true, unite: "kg", expl: "250 g = 0 kg 2 hg 5 dag = 0,25 kg." },
      { t: "saisie", q: "3 t 4 q = … kg", r: "3400", nombre: true, unite: "kg", expl: "3 t = 3 000 kg ; 4 q = 400 kg ; 3 000 + 400 = 3 400 kg." },
      { t: "saisie", q: "3 475 kg = 3 t … q 75 kg", r: "4", nombre: true, unite: "q", aide: "Regarde le chiffre des centaines.", expl: "Dans un nombre de kg, le chiffre des centaines donne les quintaux : 3 475 kg = 3 t 4 q 75 kg." },
      { t: "qcm", q: "Dans 6 820 kg, que représente le chiffre 6 ?", choix: ["des tonnes", "des quintaux", "des kilogrammes", "des grammes"], r: "des tonnes", expl: "Le chiffre des mille, dans un nombre de kg, représente les tonnes : 6 820 kg = 6 t 8 q 20 kg." },
      { t: "qcm", q: "Quelle masse est la plus lourde ?", choix: ["1,2 t", "11 q", "1 150 kg", "1 000 000 g"], r: "1,2 t", aide: "Convertis tout en kilogrammes.", expl: "1,2 t = 1 200 kg ; 11 q = 1 100 kg ; 1 150 kg ; 1 000 000 g = 1 000 kg. C'est 1,2 t." },
      { t: "vf", q: "1 t = 100 q.", r: false, expl: "1 t = 10 q seulement (et 1 000 kg)." }
    ],
    [
      { t: "probleme", q: "Un camion transporte 25 sacs de riz de 50 kg chacun du port de Dakar à Thiès.", etapes: [{ q: "Étape 1 : masse du chargement (en kg)", r: "1250", unite: "kg" }, { q: "Étape 2 : cette masse en tonnes", r: "1,25", unite: "t" }], expl: "50 kg × 25 = 1 250 kg ; 1 250 kg = 1,25 t." },
      { t: "probleme", q: "Un cultivateur récolte 3 t d'arachide. Il la met dans des sacs de 1 q.", etapes: [{ q: "Étape 1 : 3 t en quintaux", r: "30", unite: "q" }, { q: "Étape 2 : nombre de sacs remplis", r: "30" }], expl: "1 t = 10 q, donc 3 t = 30 q, soit 30 sacs d'un quintal." },
      { t: "probleme", q: "La cantine de l'école a reçu 4 q de riz. Elle en utilise 25 kg par jour.", etapes: [{ q: "Étape 1 : 4 q en kg", r: "400", unite: "kg" }, { q: "Étape 2 : nombre de jours de repas", r: "16" }], expl: "4 q = 400 kg ; 400 kg : 25 kg = 16 jours." },
      { t: "probleme", q: "Au marché, Fatou achète 2 kg de sucre, 500 g de café et 750 g de lait en poudre.", etapes: [{ q: "Étape 1 : 2 kg en g", r: "2000", unite: "g" }, { q: "Étape 2 : masse totale des achats (en g)", r: "3250", unite: "g" }, { q: "Étape 3 : cette masse en kg", r: "3,25", unite: "kg" }], expl: "2 kg = 2 000 g ; 2 000 + 500 + 750 = 3 250 g = 3,25 kg." },
      { t: "trous", q: "Complète.", nombre: true, texte: "1 t = [10] q = [1000] kg ; 1 q = [100] kg ; 1 kg = [1000] g ; 1 g = [1000] mg", expl: "Ce sont les égalités de la leçon." }
    ]
  ]
});
