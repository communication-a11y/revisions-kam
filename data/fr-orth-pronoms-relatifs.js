LECONS.push({
  id: "fr-orth-pronoms-relatifs",
  cahier: "francais",
  matiere: "Orthographe",
  titre: "Les pronoms relatifs",
  date: "2026-11-26",
  photos: ["2026-11-26_03.jpg"],
  retiens:
    "<p>Le <b>pronom relatif</b> remplace un nom ou un pronom pour éviter une répétition.</p>" +
    "<p>Ex : Je vois l'homme ; l'homme joue à la corde.<br>→ Je vois l'homme <b>qui</b> joue à la corde.</p>" +
    "<p>Il introduit la proposition subordonnée relative.</p>" +
    "<ul><li>Les pronoms relatifs <b>invariables</b> sont : <b>qui, que, dont, quoi, où</b>.</li>" +
    "<li>Les pronoms relatifs <b>variables</b> sont : <b>lequel, laquelle, lesquels, lesquelles, auquel, auxquels</b>…</li></ul>" +
    "<p>Ex : L'homme <b>auquel</b> tu parles est mon père.</p>",
  astuce: "Les pronoms variables changent comme le nom qu'ils remplacent : <b>le</b> stylo → lequel ; <b>la</b> table → laquelle ; <b>les</b> stylos → lesquels ; <b>les</b> tables → lesquelles.",
  regle: "Le pronom relatif remplace un nom pour éviter de le répéter ; qui, que, dont, quoi, où ne changent jamais ; lequel, laquelle, lesquels, lesquelles s'accordent avec le nom remplacé.",
  niveaux: [
    [
      { t: "qcm", q: "À quoi sert le pronom relatif ?", choix: ["à éviter une répétition", "à relier deux verbes", "à poser une question"], r: "à éviter une répétition", expl: "Il remplace un nom ou un pronom déjà dit." },
      { t: "classer", q: "Invariable ou variable ?", cases: ["invariable", "variable"], items: [["qui", "invariable"], ["dont", "invariable"], ["où", "invariable"], ["quoi", "invariable"], ["laquelle", "variable"], ["lesquels", "variable"], ["auquel", "variable"], ["lesquelles", "variable"]], expl: "qui, que, dont, quoi, où ne changent jamais de forme." },
      { t: "vf", q: "« Que » est un pronom relatif variable.", r: false, expl: "« que » est invariable : il ne change jamais." },
      { t: "qcm", q: "« Je vois l'homme qui joue à la corde. » Quel nom « qui » remplace-t-il ?", choix: ["l'homme", "la corde", "je"], r: "l'homme", expl: "C'est l'homme qui joue : « qui » évite de répéter « l'homme »." },
      { t: "qcm", q: "Combien y a-t-il de pronoms relatifs invariables dans la leçon ?", choix: ["5", "3", "7"], r: "5", expl: "qui, que, dont, quoi, où." }
    ],
    [
      { t: "qcm", q: "« Le livre ___ je lis est passionnant. »", choix: ["que", "qui", "dont"], r: "que", expl: "« je » est déjà le sujet : on emploie « que »." },
      { t: "qcm", q: "« La fille ___ chante est ma sœur. »", choix: ["qui", "que", "où"], r: "qui", expl: "« qui » est le sujet de « chante »." },
      { t: "qcm", q: "« Le village ___ je suis né est près de Kaolack. »", choix: ["où", "que", "qui"], r: "où", expl: "« où » indique le lieu." },
      { t: "qcm", q: "« Le film ___ tu parles est drôle. »", choix: ["dont", "que", "lequel"], r: "dont", expl: "On parle DE quelque chose : « dont »." },
      { t: "trous", q: "Complète avec qui, que ou où.", texte: "Voici le marché [où] maman achète le poisson [que] nous mangeons. Le vendeur [qui] le pêche vient de Soumbédioune.", expl: "où : le lieu ; que : complément ; qui : sujet." },
      { t: "saisie", q: "Évite la répétition : « J'ai une sœur. Ma sœur habite à Thiès. » → J'ai une sœur … habite à Thiès.", r: "qui", expl: "« qui » remplace « ma sœur », sujet de « habite »." },
      { t: "relier", q: "Relie chaque nom au pronom variable qui lui convient.", paires: [["le stylo", "lequel"], ["la table", "laquelle"], ["les stylos", "lesquels"], ["les tables", "lesquelles"]], expl: "Le pronom variable prend le genre et le nombre du nom remplacé." },
      { t: "vf", q: "Dans « L'homme auquel tu parles est mon père », « auquel » est un pronom relatif.", r: true, expl: "C'est l'exemple du cahier : « auquel » remplace « l'homme »." }
    ],
    [
      { t: "qcm", q: "« La chaise sur ___ tu es assis est cassée. »", choix: ["laquelle", "lequel", "lesquels"], r: "laquelle", expl: "« la chaise » est féminin singulier : laquelle." },
      { t: "qcm", q: "« Les amis avec ___ je joue sont gentils. »", choix: ["lesquels", "lesquelles", "lequel"], r: "lesquels", expl: "« les amis » est masculin pluriel : lesquels." },
      { t: "qcm", q: "« Les questions ___ tu réponds sont faciles. »", choix: ["auxquelles", "auxquels", "auquel"], r: "auxquelles", expl: "On répond À quelque chose ; « les questions » est féminin pluriel : auxquelles." },
      { t: "qcm", q: "« Les jeux ___ tu penses sont chers. »", choix: ["auxquels", "auquel", "lesquelles"], r: "auxquels", expl: "Penser À ; « les jeux » est masculin pluriel : auxquels." },
      { t: "qcm", q: "Dans quelle phrase « où » est-il un pronom relatif ?", choix: ["La ville où j'habite est belle.", "Où vas-tu ?", "Tu préfères le thé ou le café ?"], r: "La ville où j'habite est belle.", expl: "Il remplace « la ville » ; dans « Où vas-tu ? », il pose une question." },
      { t: "vf", q: "Dans « Qui est là ? », « qui » est un pronom relatif.", r: false, expl: "Ici « qui » pose une question : il ne remplace aucun nom." },
      { t: "saisie", q: "Complète : « Le stylo avec … j'écris est rouge. » (pronom variable)", r: "lequel", expl: "« le stylo » : masculin singulier → lequel." }
    ],
    [
      { t: "trous", q: "Complète avec le bon pronom relatif.", texte: "Le maître [que] nous aimons nous a raconté une histoire [dont] je me souviens. C'est l'histoire d'un roi [qui] vivait dans un village [où] il pleuvait toujours.", expl: "que : complément ; dont : se souvenir DE ; qui : sujet ; où : le lieu." },
      { t: "dictee", texte: "La pirogue dans laquelle mon père pêche est peinte en bleu.", expl: "« laquelle » : la pirogue est féminin singulier." },
      { t: "saisie", q: "Évite la répétition : « Voici la maison. Mon oncle habite dans la maison. » → Voici la maison … mon oncle habite.", r: "où", expl: "« où » remplace « dans la maison » (le lieu). Attention à l'accent." },
      { t: "classer", q: "Quel pronom convient ?", cases: ["lequel", "laquelle", "lesquelles"], items: [["le couteau avec ___ je coupe", "lequel"], ["le bus dans ___ je monte", "lequel"], ["la natte sur ___ je dors", "laquelle"], ["les filles avec ___ je danse", "lesquelles"]], expl: "Le pronom s'accorde avec le nom remplacé." },
      { t: "qcm", q: "Quelle phrase est correcte ?", choix: ["L'ami auquel j'écris habite à Ziguinchor.", "L'ami auxquelles j'écris habite à Ziguinchor.", "L'ami laquelle j'écris habite à Ziguinchor."], r: "L'ami auquel j'écris habite à Ziguinchor.", expl: "Écrire À un ami (masculin singulier) : auquel." }
    ]
  ]
});
