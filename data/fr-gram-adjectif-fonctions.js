// Corrections : « mis en opposition » → « mis en apposition » ; « épithèctes » → « épithètes ».
LECONS.push({
  id: "fr-gram-adjectif-fonctions",
  cahier: "francais",
  matiere: "Grammaire",
  titre: "L'adjectif : épithète, attribut, mis en apposition",
  date: "2026-11-19",
  photos: ["2026-11-19_01.jpg", "2026-11-19_02.jpg"],
  retiens:
    "<p>→ L'adjectif <b>qualifie le nom</b> qu'il accompagne.</p>" +
    "<p>→ Quand l'adjectif appartient au groupe nominal, on dit qu'il est <b>épithète</b> du nom.<br>Ex : Ce film montre de <b>magnifiques</b> animaux <b>sauvages</b>.<br>Les adjectifs « magnifiques » et « sauvages » appartiennent au groupe nominal dont le nom est « animaux ». Ce sont des épithètes de ce nom.</p>" +
    "<p>→ L'adjectif relié au nom par un <b>verbe d'état</b> est <b>attribut du sujet</b>.<br>Ex : Ces lions paraissent bien <b>tristes</b> dans leur cage.<br>L'adjectif « tristes » est séparé du nom « lions » par le verbe « paraître ».<br>Les principaux verbes d'état sont : <b>être, sembler, devenir, paraître, avoir l'air</b>.</p>" +
    "<p>→ L'adjectif relié au nom par une <b>virgule</b> est <b>mis en apposition</b>.<br>Ex : <b>Peureux</b>, le chat se cache sous la table.</p>",
  astuce: "Regarde ce qu'il y a entre l'adjectif et le nom :<br>• rien → <b>épithète</b> (un chat <b>noir</b>) ;<br>• un verbe d'état → <b>attribut</b> (le chat <b>est</b> noir) ;<br>• une virgule → <b>apposition</b> (<b>Noir</b>, le chat…).",
  regle: "L'adjectif collé au nom dans le groupe nominal est épithète ; relié au nom par un verbe d'état (être, sembler, devenir, paraître, avoir l'air), il est attribut du sujet ; séparé du nom par une virgule, il est mis en apposition.",
  niveaux: [
    [
      { t: "qcm", q: "L'adjectif qualificatif donne un renseignement sur…", choix: ["le nom", "le verbe", "la ponctuation"], r: "le nom", expl: "L'adjectif qualifie le nom qu'il accompagne." },
      { t: "qcm", q: "« Ce film montre de <b>magnifiques</b> animaux sauvages. » L'adjectif en gras est…", choix: ["épithète", "attribut du sujet", "mis en apposition"], r: "épithète", expl: "« magnifiques » appartient au groupe nominal « de magnifiques animaux sauvages » : il est épithète du nom « animaux »." },
      { t: "qcm", q: "« Ces lions paraissent bien <b>tristes</b> dans leur cage. » L'adjectif en gras est…", choix: ["attribut du sujet", "épithète", "mis en apposition"], r: "attribut du sujet", expl: "« tristes » est relié au nom « lions » par le verbe d'état « paraître »." },
      { t: "qcm", q: "« <b>Peureux</b>, le chat se cache sous la table. » L'adjectif en gras est…", choix: ["mis en apposition", "épithète", "attribut du sujet"], r: "mis en apposition", expl: "« Peureux » est séparé du nom « chat » par une virgule." },
      { t: "vf", q: "Être, sembler, devenir, paraître et avoir l'air sont des verbes d'état.", r: true, expl: "Ce sont les principaux verbes d'état de la leçon." },
      { t: "vf", q: "L'adjectif épithète est séparé du nom par une virgule.", r: false, expl: "L'épithète est collé au nom, dans le groupe nominal. Avec une virgule, l'adjectif est mis en apposition." }
    ],
    [
      { t: "classer", q: "Range chaque adjectif en gras selon sa fonction.", cases: ["épithète", "attribut du sujet", "mis en apposition"], items: [["une robe <b>bleue</b>", "épithète"], ["Awa semble <b>fatiguée</b>.", "attribut du sujet"], ["<b>Joyeux</b>, Moussa rentre de l'école.", "mis en apposition"], ["un <b>grand</b> baobab", "épithète"], ["Le ciel devient <b>gris</b>.", "attribut du sujet"], ["<b>Affamés</b>, les enfants courent à table.", "mis en apposition"]], expl: "Collé au nom : épithète. Après un verbe d'état : attribut. Avec une virgule : apposition." },
      { t: "saisie", q: "Écris l'adjectif attribut du sujet : « Le ciel devient gris. »", r: "gris", expl: "« gris » est relié au nom « ciel » par le verbe d'état « devenir »." },
      { t: "saisie", q: "Écris le verbe d'état : « Awa semble fatiguée. »", r: "semble", expl: "« sembler » est un verbe d'état : il relie « fatiguée » au sujet « Awa »." },
      { t: "qcm", q: "Lequel de ces verbes n'est PAS un verbe d'état ?", choix: ["manger", "devenir", "paraître", "sembler"], r: "manger", expl: "Les verbes d'état de la leçon sont : être, sembler, devenir, paraître, avoir l'air." },
      { t: "trous", q: "Écris les deux adjectifs épithètes, dans l'ordre de la phrase : « Moussa a un beau vélo rouge. »", texte: "[beau] et [rouge]", expl: "« beau » et « rouge » appartiennent au groupe nominal « un beau vélo rouge » : ils sont épithètes du nom « vélo »." },
      { t: "qcm", q: "« Fatou a l'air <b>contente</b>. » L'adjectif en gras est…", choix: ["attribut du sujet", "épithète", "mis en apposition"], r: "attribut du sujet", expl: "« avoir l'air » est un verbe d'état : « contente » est attribut du sujet « Fatou »." },
      { t: "relier", q: "Relie chaque fonction à ce qui la reconnaît.", paires: [["épithète", "collé au nom"], ["attribut du sujet", "après un verbe d'état"], ["mis en apposition", "séparé par une virgule"]], expl: "C'est ce qui se trouve entre l'adjectif et le nom qui donne la fonction." },
      { t: "saisie", q: "Écris le nom qualifié par l'adjectif : « Peureux, le chat se cache sous la table. »", r: "chat", expl: "« Peureux » qualifie le nom « chat »." },
      { t: "qcm", q: "« Les mangues <b>mûres</b> sont au marché. » L'adjectif en gras est…", choix: ["épithète", "attribut du sujet", "mis en apposition"], r: "épithète", expl: "« mûres » est collé au nom « mangues », dans le groupe nominal « les mangues mûres »." }
    ],
    [
      { t: "qcm", q: "« Le thé est <b>chaud</b>. » L'adjectif en gras est…", choix: ["attribut du sujet", "épithète", "mis en apposition"], r: "attribut du sujet", expl: "Le verbe d'état « être » relie « chaud » au nom « thé »." },
      { t: "qcm", q: "« Le thé <b>chaud</b> est sur la table. » L'adjectif en gras est…", choix: ["épithète", "attribut du sujet", "mis en apposition"], r: "épithète", aide: "Qu'y a-t-il entre « thé » et « chaud » ?", expl: "« chaud » est collé au nom « thé ». Le verbe « est » vient après : il ne relie pas « chaud » au nom." },
      { t: "vf", q: "Dans « Il semble malade », l'adjectif « malade » est épithète.", r: false, expl: "« sembler » est un verbe d'état : « malade » est attribut du sujet « Il »." },
      { t: "classer", q: "Verbe d'état ou non ?", cases: ["verbe d'état", "autre verbe"], items: [["sembler", "verbe d'état"], ["devenir", "verbe d'état"], ["avoir l'air", "verbe d'état"], ["paraître", "verbe d'état"], ["courir", "autre verbe"], ["chanter", "autre verbe"], ["regarder", "autre verbe"], ["porter", "autre verbe"]], expl: "Retiens les cinq verbes d'état de la leçon : être, sembler, devenir, paraître, avoir l'air." },
      { t: "ordre", q: "Remets les mots dans l'ordre pour mettre l'adjectif « Joyeuse » en apposition.", r: "Joyeuse, Awa danse dans la cour.", expl: "L'adjectif mis en apposition est séparé du nom par une virgule." },
      { t: "qcm", q: "« Les élèves deviennent <b>sages</b>. » Quel nom l'adjectif « sages » qualifie-t-il ?", choix: ["élèves", "deviennent", "les"], r: "élèves", expl: "Le verbe d'état « devenir » relie « sages » au sujet « élèves »." },
      { t: "qcm", q: "« <b>Fatiguée</b>, Khady s'assoit sous l'arbre. » L'adjectif en gras est…", choix: ["mis en apposition", "épithète", "attribut du sujet"], r: "mis en apposition", expl: "« Fatiguée » est séparé du nom « Khady » par une virgule." }
    ],
    [
      { t: "dictee", texte: "Ces lions paraissent bien tristes dans leur cage.", expl: "« tristes » est attribut du sujet « lions » : il prend un s, comme lui." },
      { t: "dictee", texte: "Peureux, le petit chat noir se cache sous la table.", expl: "« Peureux » est mis en apposition ; « petit » et « noir » sont épithètes de « chat »." },
      { t: "classer", q: "« <b>Heureux</b>, le <b>vieux</b> pêcheur paraît <b>fier</b> de sa <b>grande</b> pirogue. » Range les adjectifs.", cases: ["épithète", "attribut du sujet", "mis en apposition"], items: [["Heureux", "mis en apposition"], ["vieux", "épithète"], ["fier", "attribut du sujet"], ["grande", "épithète"]], expl: "« Heureux » : virgule. « vieux » et « grande » : collés au nom. « fier » : après le verbe d'état « paraître »." },
      { t: "qcm", q: "Dans quelle phrase l'adjectif « calme » est-il attribut du sujet ?", choix: ["Ce matin, la mer est calme.", "La mer calme brille au soleil.", "Calme, la mer brille au soleil.", "Les pêcheurs aiment la mer calme."], r: "Ce matin, la mer est calme.", expl: "Dans « la mer est calme », le verbe d'état « être » relie « calme » au nom « mer »." },
      { t: "trous", q: "Écris la fonction de l'adjectif en gras (épithète, attribut ou apposition).", texte: "« Ibrahima est <b>malade</b>. » → [attribut|attribut du sujet] — « <b>Malade</b>, Ibrahima reste au lit. » → [apposition|mis en apposition|mise en apposition] — « un enfant <b>malade</b> » → [épithète]", expl: "Le même adjectif change de fonction selon sa place : après un verbe d'état, avec une virgule, ou collé au nom." },
      { t: "qcm", q: "« Le marché de Sandaga semble <b>immense</b>. » Analyse l'adjectif en gras.", choix: ["attribut du sujet « marché »", "épithète du nom « Sandaga »", "mis en apposition"], r: "attribut du sujet « marché »", expl: "Qu'est-ce qui semble immense ? le marché. « sembler » est un verbe d'état." }
    ]
  ]
});
