// Corrections des exemples du cahier : « Argentian » → « Argentinian » ; « too church » → « to church » ;
// « Youre are awesome girl » → « You are an awesome girl » ; « It is hungry lion » → « It is a hungry lion ».
// L'exemple « She is doin King wate » (illisible ou mal recopié) n'est pas repris.
LECONS.push({
  id: "an-subject-object-pronouns",
  cahier: "anglais",
  matiere: "Grammar",
  titre: "Subject and object pronouns (les pronoms sujets et compléments)",
  date: "2026-11-03",
  photos: ["2026-11-25_07.jpg", "2026-11-25_06.jpg", "2026-11-25_05.jpg"],
  retiens:
    "<p><b>A) Subject pronouns</b> (pronoms sujets) : ils font l'action, ils se placent <b>avant le verbe</b>.</p>" +
    "<table><tr><th>singular</th><th>plural</th></tr>" +
    "<tr><td>I = je</td><td>we = nous</td></tr>" +
    "<tr><td>you = tu</td><td>you = vous</td></tr>" +
    "<tr><td>he = il (a man, a boy)<br>she = elle (a woman, a girl)<br>it = il, elle (one animal, one object)</td><td>they = ils, elles</td></tr></table>" +
    "<p>Ex : <b>They</b> are going to the restaurant. <b>We</b> have exercises. <b>It</b> is a hungry lion.</p>" +
    "<p><b>B) Object pronouns</b> (pronoms compléments) : ils se placent <b>après le verbe</b> ou après un petit mot comme <i>with</i>.</p>" +
    "<table><tr><th>subject</th><th>object</th><th>en français</th></tr>" +
    "<tr><td>I</td><td><b>me</b></td><td>me, moi</td></tr>" +
    "<tr><td>you</td><td><b>you</b></td><td>te, toi</td></tr>" +
    "<tr><td>he</td><td><b>him</b></td><td>lui, le, l'</td></tr>" +
    "<tr><td>she</td><td><b>her</b></td><td>lui, la, l'</td></tr>" +
    "<tr><td>it</td><td><b>it</b></td><td>le, la, l', lui</td></tr>" +
    "<tr><td>we</td><td><b>us</b></td><td>nous</td></tr>" +
    "<tr><td>you</td><td><b>you</b></td><td>vous</td></tr>" +
    "<tr><td>they</td><td><b>them</b></td><td>les, eux, elles, leur</td></tr></table>" +
    "<p><b>A smart little girl</b> (page 52) : She likes the Argentinian player → She likes <b>him</b>. She goes to church with her mum → with <b>her</b> ; her dad → <b>him</b> ; her brothers → <b>them</b>.</p>",
  astuce: "Avant le verbe : <b>I, he, she, we, they</b>. Après le verbe : <b>me, him, her, us, them</b>. <b>you</b> et <b>it</b> ne changent pas.",
  regle: "Le pronom sujet se place avant le verbe (I, you, he, she, it, we, you, they) ; le pronom complément se place après le verbe ou après with, to… (me, you, him, her, it, us, you, them).",
  niveaux: [
    [
      { t: "qcm", q: "« Je » se dit en anglais…", choix: ["I", "me", "we"], r: "I", expl: "I = je. Il s'écrit toujours avec une majuscule." },
      { t: "qcm", q: "Pour parler d'une fille, on utilise…", choix: ["she", "he", "it"], r: "she", expl: "she = elle (a woman, a girl)." },
      { t: "qcm", q: "Pour parler d'un animal ou d'un objet, on utilise…", choix: ["it", "he", "she"], r: "it", expl: "it = one animal or one object." },
      { t: "relier", q: "Relie chaque pronom sujet à sa traduction.", paires: [["I", "je"], ["he", "il"], ["she", "elle"], ["we", "nous"], ["they", "ils, elles"]], expl: "Ce sont les pronoms sujets de la leçon." },
      { t: "vf", q: "« They » veut dire « ils » ou « elles ».", r: true, expl: "they = ils / elles, au pluriel." },
      { t: "qcm", q: "Le pronom complément de « he » est…", choix: ["him", "her", "his"], r: "him", expl: "he → him : She likes him." }
    ],
    [
      { t: "relier", q: "Relie chaque pronom sujet à son pronom complément.", paires: [["I", "me"], ["he", "him"], ["she", "her"], ["we", "us"], ["they", "them"]], expl: "you et it ne changent pas." },
      { t: "qcm", q: "Remplace « Moussa » : « ___ is my friend. »", choix: ["He", "She", "It"], r: "He", expl: "Moussa est un garçon : he. Il est avant le verbe : pronom sujet." },
      { t: "qcm", q: "Remplace « the cat » : « ___ is black. »", choix: ["It", "He", "They"], r: "It", expl: "Un animal : it." },
      { t: "qcm", q: "Remplace « Awa and Fatou » : « ___ are sisters. »", choix: ["They", "We", "She"], r: "They", expl: "Deux personnes : they (ils, elles)." },
      { t: "qcm", q: "« She likes the Argentinian player. » → « She likes ___. »", choix: ["him", "he", "them"], r: "him", expl: "Un joueur, après le verbe : him." },
      { t: "qcm", q: "« She goes to church with her mum. » → « She goes to church with ___. »", choix: ["her", "she", "him"], r: "her", expl: "Sa maman, après with : her." },
      { t: "saisie", q: "Écris le pronom complément : « I see her brothers. » → « I see ___. »", r: "them", expl: "Ses frères, plusieurs personnes, après le verbe : them." },
      { t: "classer", q: "Pronom sujet ou pronom complément ?", cases: ["subject", "object"], items: [["I", "subject"], ["we", "subject"], ["they", "subject"], ["me", "object"], ["us", "object"], ["them", "object"], ["him", "object"], ["she", "subject"]], expl: "Sujets : I, he, she, we, they. Compléments : me, him, her, us, them." }
    ],
    [
      { t: "qcm", q: "Quelle phrase est juste ?", choix: ["She likes him.", "Her likes he.", "She likes he."], r: "She likes him.", expl: "Sujet avant le verbe : she. Complément après : him." },
      { t: "qcm", q: "« Come with ___ ! » (avec nous)", choix: ["us", "we", "our"], r: "us", expl: "Après with, on met le pronom complément : us." },
      { t: "saisie", q: "Écris le pronom complément : « Look at the lion! » → « Look at ___! »", r: "it", expl: "Un animal : it (il ne change pas)." },
      { t: "qcm", q: "Quel pronom ne change pas entre sujet et complément ?", choix: ["you", "I", "they"], r: "you", expl: "you reste you (et it reste it)." },
      { t: "relier", q: "Relie chaque pronom complément à sa traduction.", paires: [["me", "me, moi"], ["him", "lui, le"], ["her", "lui, la"], ["us", "nous"], ["them", "les, eux, leur"]], expl: "C'est le tableau des object pronouns." },
      { t: "qcm", q: "« ___ is a hungry lion. »", choix: ["It", "Him", "Them"], r: "It", expl: "Avant le verbe, pour un animal : it." },
      { t: "saisie", q: "Écris le pronom sujet : « Fatou and I have exercises. » → « ___ have exercises. »", r: "we", expl: "Fatou et moi = nous : we." }
    ],
    [
      { t: "trous", q: "Complète avec le bon pronom (he, she, him, her, them).", texte: "Fara has two brothers. [She] loves [them]. Her dad is kind ; she goes to the market with [him]. Her mum is a teacher ; [she] works at school.", expl: "Sujet avant le verbe (she), complément après (them, him)." },
      { t: "ordre", q: "Remets les mots dans l'ordre.", r: "She always goes to church with her mum.", expl: "Sujet + verbe + complément : She goes to church with her mum." },
      { t: "qcm", q: "« You are an awesome girl, Fara! » Qui est « you » ?", choix: ["Fara", "her mum", "her brothers"], r: "Fara", expl: "On parle à Fara : you = Fara." },
      { t: "classer", q: "Remplace le mot en gras : quel pronom ?", cases: ["him", "her", "them"], items: [["I help <b>my father</b>.", "him"], ["I help <b>my sister</b>.", "her"], ["I help <b>my friends</b>.", "them"], ["She calls <b>Moussa</b>.", "him"], ["She calls <b>Khady</b>.", "her"], ["She calls <b>the children</b>.", "them"]], expl: "Un garçon/homme : him. Une fille/femme : her. Plusieurs : them." },
      { t: "qcm", q: "Traduis : « Je les vois. »", choix: ["I see them.", "Me see they.", "I see they."], r: "I see them.", expl: "je = I (sujet) ; les = them (complément)." }
    ]
  ]
});
