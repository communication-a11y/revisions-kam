LECONS.push({
  id: "ma-mes-masse-brute-nette-tare",
  cahier: "maths",
  matiere: "Activités de mesure",
  titre: "Les mesures de masse : masse brute, masse nette, tare",
  date: "2026-10-06",
  photos: ["DJI_20261118220934_0074_D.jpg"],
  retiens:
    "<ul><li>La <b>masse brute</b> (MB), c'est le contenant + le contenu.</li>" +
    "<li>La <b>masse nette</b> (MN), c'est le contenu seul.</li>" +
    "<li>La <b>tare</b> (t), c'est la masse du contenant vide.</li></ul>" +
    "<table><tr><th>Je cherche</th><th>Formule</th></tr>" +
    "<tr><td>la masse brute</td><td>MB = MN + t</td></tr>" +
    "<tr><td>la masse nette</td><td>MN = MB − t</td></tr>" +
    "<tr><td>la tare</td><td>t = MB − MN</td></tr></table>" +
    "<p>Exemple : un bidon vide pèse 1 kg (tare). On y met 20 kg d'huile (masse nette). Le bidon plein pèse 21 kg (masse brute).</p>",
  astuce: "<b>Brute</b> = tout ce qu'on pose sur la balance. <b>Nette</b> = seulement ce qu'on achète ou ce qu'on mange. <b>Tare</b> = l'emballage.",
  regle: "Masse brute = masse nette + tare. Pour trouver l'une des trois, on additionne ou on soustrait les deux autres, toujours dans la même unité.",
  niveaux: [
    [
      { t: "qcm", q: "Un sac de riz plein posé sur la balance : ce que la balance indique est…", choix: ["la masse brute", "la masse nette", "la tare"], r: "la masse brute", expl: "La balance pèse le sac (contenant) et le riz (contenu) : c'est la masse brute." },
      { t: "qcm", q: "La masse du bidon vide s'appelle…", choix: ["la tare", "la masse nette", "la masse brute"], r: "la tare", expl: "La tare est la masse du contenant vide." },
      { t: "qcm", q: "La masse de l'huile seule, sans le bidon, s'appelle…", choix: ["la masse nette", "la masse brute", "la tare"], r: "la masse nette", expl: "La masse nette, c'est le contenu seul." },
      { t: "classer", q: "Contenant ou contenu ?", cases: ["contenant (tare)", "contenu (masse nette)"], items: [["le bocal", "contenant (tare)"], ["la confiture", "contenu (masse nette)"], ["le carton", "contenant (tare)"], ["les mangues", "contenu (masse nette)"], ["le sac", "contenant (tare)"], ["le ciment", "contenu (masse nette)"]], expl: "Le contenant est l'emballage (sa masse est la tare) ; le contenu est ce qu'il y a dedans (masse nette)." },
      { t: "relier", q: "Relie chaque formule à ce qu'elle permet de calculer.", paires: [["MN + t", "la masse brute"], ["MB − t", "la masse nette"], ["MB − MN", "la tare"]], expl: "MB = MN + t ; MN = MB − t ; t = MB − MN." },
      { t: "vf", q: "La masse brute est toujours plus grande que la masse nette.", r: true, expl: "La masse brute contient la masse nette plus la tare." }
    ],
    [
      { t: "saisie", q: "Masse nette : 50 kg de riz. Tare : 0,5 kg. Masse brute = … kg", r: "50,5", nombre: true, unite: "kg", expl: "MB = MN + t = 50 + 0,5 = 50,5 kg." },
      { t: "saisie", q: "Masse brute d'un bidon d'huile : 21 kg. Tare : 1,5 kg. Masse nette = … kg", r: "19,5", nombre: true, unite: "kg", expl: "MN = MB − t = 21 − 1,5 = 19,5 kg." },
      { t: "saisie", q: "Masse brute d'une caisse de poissons : 32 kg. Masse nette : 30 kg. Tare = … kg", r: "2", nombre: true, unite: "kg", expl: "t = MB − MN = 32 − 30 = 2 kg." },
      { t: "saisie", q: "Masse brute d'un pot de confiture : 450 g. Masse nette : 370 g. Tare = … g", r: "80", nombre: true, unite: "g", expl: "t = MB − MN = 450 − 370 = 80 g." },
      { t: "saisie", q: "Masse nette d'un paquet de café : 250 g. Tare : 15 g. Masse brute = … g", r: "265", nombre: true, unite: "g", expl: "MB = MN + t = 250 + 15 = 265 g." },
      { t: "saisie", q: "Masse brute d'un panier de tomates : 12 kg. Panier vide : 2 kg. Masse nette = … kg", r: "10", nombre: true, unite: "kg", expl: "MN = MB − t = 12 − 2 = 10 kg." },
      { t: "saisie", q: "Masse brute d'un sac d'oignons : 25,4 kg. Masse nette : 25 kg. Tare = … kg", r: "0,4", nombre: true, unite: "kg", expl: "t = MB − MN = 25,4 − 25 = 0,4 kg." },
      { t: "trous", q: "Complète les formules.", texte: "MB = MN [+] t — MN = MB [−|-] t — t = MB − [MN]", expl: "On additionne pour trouver la masse brute ; on soustrait pour trouver la masse nette ou la tare." }
    ],
    [
      { t: "saisie", q: "Masse brute d'un carton de biscuits : 12 kg. Tare : 800 g. Masse nette = … kg", r: "11,2", nombre: true, unite: "kg", aide: "Mets d'abord les deux masses dans la même unité.", expl: "12 kg = 12 000 g ; 12 000 − 800 = 11 200 g = 11,2 kg." },
      { t: "saisie", q: "Masse nette d'un bidon de lait : 4,5 kg. Le bidon vide pèse 300 g. Masse brute = … kg", r: "4,8", nombre: true, unite: "kg", expl: "300 g = 0,3 kg ; 4,5 + 0,3 = 4,8 kg." },
      { t: "qcm", q: "Une caisse pèse 18 kg pleine et 3 kg vide. Quelle opération donne la masse du contenu ?", choix: ["18 − 3", "18 + 3", "18 × 3", "18 : 3"], r: "18 − 3", expl: "MN = MB − t = 18 − 3 = 15 kg." },
      { t: "vf", q: "Si la tare vaut 0 kg, la masse brute est égale à la masse nette.", r: true, expl: "MB = MN + 0 = MN : il n'y a pas d'emballage à peser." },
      { t: "qcm", q: "Moussa dit : « Mon sac de mil pèse 52 kg sur la balance, donc j'ai 52 kg de mil. » A-t-il raison ?", choix: ["Non, il faut enlever la masse du sac vide.", "Oui, la balance donne la masse du mil.", "Non, il faut ajouter la masse du sac."], r: "Non, il faut enlever la masse du sac vide.", expl: "52 kg est la masse brute. La masse du mil (nette) = 52 kg − tare." },
      { t: "saisie", q: "Masse brute d'une bouteille de gaz : 18,5 kg. Masse du gaz : 6 kg. Tare (bouteille vide) = … kg", r: "12,5", nombre: true, unite: "kg", expl: "t = MB − MN = 18,5 − 6 = 12,5 kg." }
    ],
    [
      { t: "probleme", q: "Un camion transporte 40 sacs de ciment. Chaque sac contient 50 kg de ciment et le sac vide pèse 200 g.", etapes: [{ q: "Étape 1 : masse nette totale du ciment (en kg)", r: "2000", unite: "kg" }, { q: "Étape 2 : tare totale des 40 sacs (en kg)", r: "8", unite: "kg" }, { q: "Étape 3 : masse brute du chargement (en kg)", r: "2008", unite: "kg" }], expl: "50 kg × 40 = 2 000 kg ; 200 g × 40 = 8 000 g = 8 kg ; MB = 2 000 + 8 = 2 008 kg." },
      { t: "probleme", q: "Aïssatou pèse son panier de mangues : 15 kg. Le panier vide pèse 1,2 kg. Elle vend les mangues 500 F le kilogramme.", etapes: [{ q: "Étape 1 : masse nette des mangues (en kg)", r: "13,8", unite: "kg" }, { q: "Étape 2 : somme gagnée (en F)", r: "6900", unite: "F" }], expl: "MN = 15 − 1,2 = 13,8 kg ; 13,8 × 500 = 6 900 F. On ne vend que la masse nette." },
      { t: "probleme", q: "Une boîte de sardines pèse 125 g pleine. Les sardines seules pèsent 100 g. Ibrahima achète 6 boîtes.", etapes: [{ q: "Étape 1 : tare d'une boîte (en g)", r: "25", unite: "g" }, { q: "Étape 2 : masse brute des 6 boîtes (en g)", r: "750", unite: "g" }, { q: "Étape 3 : masse nette des 6 boîtes (en g)", r: "600", unite: "g" }], expl: "t = 125 − 100 = 25 g ; 125 × 6 = 750 g ; 100 × 6 = 600 g." },
      { t: "probleme", q: "Un commerçant reçoit une caisse de savons de 24 kg (masse brute). La caisse vide pèse 2 kg. Chaque savon pèse 400 g.", etapes: [{ q: "Étape 1 : masse nette des savons (en kg)", r: "22", unite: "kg" }, { q: "Étape 2 : masse nette en g", r: "22000", unite: "g" }, { q: "Étape 3 : nombre de savons dans la caisse", r: "55" }], expl: "MN = 24 − 2 = 22 kg = 22 000 g ; 22 000 : 400 = 55 savons." },
      { t: "trous", q: "Complète le tableau (masses en kg).", nombre: true, texte: "MB = 60 ; t = 4 ; MN = [56] — MN = 35 ; t = 1,5 ; MB = [36,5|36.5] — MB = 9 ; MN = 8,2 ; t = [0,8|0.8]", expl: "MN = 60 − 4 = 56 ; MB = 35 + 1,5 = 36,5 ; t = 9 − 8,2 = 0,8." }
    ]
  ]
});
