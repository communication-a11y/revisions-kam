/* Révisions de Kam — moteur d'exercices hors ligne.
   Les leçons sont dans lecons.js (window.LECONS), une entrée par leçon. */
"use strict";

var CAHIERS = [
  { id: "francais", nom: "Français", detail: "Grammaire, conjugaison, orthographe, vocabulaire", couv: "#c21f32" },
  { id: "maths", nom: "Mathématiques", detail: "Nombres, mesures, géométrie, problèmes", couv: "#1c3f94" },
  { id: "histgeo", nom: "Histoire et géographie", detail: "", couv: "#17803d" },
  { id: "sciences", nom: "Sciences", detail: "Initiation scientifique et technologique", couv: "#d9822b" },
  { id: "vivre", nom: "Vivre ensemble", detail: "Vivre ensemble, vivre dans son milieu", couv: "#7b3fa0" },
  { id: "anglais", nom: "Anglais", detail: "", couv: "#0e8c8c" }
];
var NIVEAUX = [
  { nom: "Je découvre", detail: "Pour bien comprendre la règle" },
  { nom: "Je m'entraîne", detail: "Les exercices de base" },
  { nom: "Je me perfectionne", detail: "Plus difficile, avec des pièges" },
  { nom: "Défi", detail: "Comme à l'examen" }
];
var SEUIL = 0.7; // 70 % pour débloquer le niveau suivant
var CLE = "kam-revisions-v1";

var LECONS = (window.LECONS || []).slice().sort(function (a, b) { return (a.date || "").localeCompare(b.date || ""); });
var parId = {};
LECONS.forEach(function (l) { parId[l.id] = l; });

/* ---------------- Mémoire ---------------- */
var etat = charger();
function charger() {
  var vide = { prenom: "Kamelia", etoiles: 0, niveaux: {}, erreurs: [], journal: [], code: "" };
  try { var s = JSON.parse(localStorage.getItem(CLE)); if (s && (!s.prenom || s.prenom === "Kam")) s.prenom = "Kamelia"; return s ? Object.assign(vide, s) : vide; }
  catch (e) { return vide; }
}
function sauver() { try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) {} }

/* ---------------- Outils ---------------- */
var app = document.getElementById("app");
function h(tag, attrs) {
  var el = document.createElement(tag);
  if (attrs) for (var k in attrs) {
    var v = attrs[k];
    if (v == null || v === false) continue;
    if (k === "html") el.innerHTML = v;
    else if (k === "text") el.textContent = v;
    else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (var i = 2; i < arguments.length; i++) ajouter(el, arguments[i]);
  return el;
}
function ajouter(el, c) {
  if (c == null || c === false) return;
  if (Array.isArray(c)) { c.forEach(function (x) { ajouter(el, x); }); return; }
  el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
}
function vider() { app.innerHTML = ""; window.scrollTo(0, 0); }
function melanger(t) { t = t.slice(); for (var i = t.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = t[i]; t[i] = t[j]; t[j] = x; } return t; }
function dateFr(iso) {
  if (!iso) return "";
  var m = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  var p = iso.split("-"); return parseInt(p[2], 10) + " " + m[parseInt(p[1], 10) - 1];
}
function jour() { return new Date().toISOString().slice(0, 10); }
function plusJours(n) { var d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }

function norm(s, casse) {
  s = String(s == null ? "" : s).normalize("NFC").replace(/[’ʼ`]/g, "'").replace(/[  ]/g, " ").replace(/\s+/g, " ").trim();
  s = s.replace(/\s*([.!;:?])$/, "").replace(/\s+([,;:!?])/g, "$1");
  return casse ? s : s.toLowerCase();
}
function nombre(s) {
  s = String(s).replace(/[  \s]/g, "");
  if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, ""); // 5.000.250 : points de séparation des classes
  s = s.replace(",", ".").replace(/[a-zA-Zàéèêç²³°%]+\.?$/, "");
  return s === "" || isNaN(s) ? NaN : parseFloat(s);
}
function egal(reponse, attendues, ex) {
  attendues = Array.isArray(attendues) ? attendues : [attendues];
  return attendues.some(function (a) {
    if (ex && ex.nombre) { var x = nombre(reponse), y = nombre(a); return !isNaN(x) && Math.abs(x - y) < 1e-9; }
    return norm(reponse, ex && ex.casse) === norm(a, ex && ex.casse);
  });
}

function parler(texte) {
  if (!("speechSynthesis" in window)) return false;
  speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(texte);
  u.lang = "fr-FR"; u.rate = 0.8;
  var voix = speechSynthesis.getVoices().filter(function (v) { return /^fr/i.test(v.lang); });
  if (voix.length) u.voice = voix[0];
  speechSynthesis.speak(u);
  return true;
}

function etoilesPour(score) { return score >= 0.9 ? 3 : score >= SEUIL ? 2 : score >= 0.5 ? 1 : 0; }
function infoNiveau(lid, n) { return etat.niveaux[lid + ":" + n]; }
function niveauOuvert(lid, n) { if (n === 0) return true; var p = infoNiveau(lid, n - 1); return !!(p && p.best >= SEUIL); }
function niveauxDe(l) { return (l.niveaux || []).filter(function (x) { return x && x.length; }); }
function erreursDues() { var j = jour(); return etat.erreurs.filter(function (e) { return e.due <= j && trouverEx(e.k); }); }
function trouverEx(k) {
  var p = k.split(":"); var l = parId[p[0]]; if (!l) return null;
  var niv = l.niveaux[+p[1]]; return niv && niv[+p[2]] ? { lecon: l, n: +p[1], i: +p[2], ex: niv[+p[2]] } : null;
}

/* ---------------- Écrans ---------------- */
function barre(retour, titreRetour) {
  return h("div", { class: "haut" },
    retour ? h("button", { class: "retour", onclick: function () { location.hash = retour; } }, titreRetour || "Retour") : h("span"),
    h("span", { class: "etoiles", "aria-label": etat.etoiles + " étoiles" }, h("b", null, "★"), " " + etat.etoiles));
}

function ecranAccueil() {
  vider();
  var dues = erreursDues();
  var h1 = h("h1", null, "Bonjour " + etat.prenom + " !");
  ajouter(app, [barre(), h1]);
  ajouter(app, h("p", null, LECONS.length ? "Choisis un cahier pour réviser une leçon." : "Aucune leçon pour le moment."));
  if (dues.length) {
    ajouter(app, h("button", { class: "revoir", onclick: function () { lancerSession(seriesRevision(), "Mes erreurs à revoir", "#/"); } },
      h("strong", null, "À revoir aujourd'hui : "), dues.length + (dues.length > 1 ? " questions" : " question"),
      " que tu avais ratées. On les refait ?"));
  }
  var grille = h("div", { class: "cahiers" });
  CAHIERS.forEach(function (c) {
    var n = LECONS.filter(function (l) { return l.cahier === c.id; }).length;
    if (!n) return;
    grille.appendChild(h("button", { class: "cahier", style: "--couv:" + c.couv, onclick: function () { location.hash = "#/cahier/" + c.id; } },
      h("span", { class: "etiquette" }, h("span", { class: "cursive" }, c.nom), c.detail ? h("small", null, c.detail) : null),
      h("span", { class: "compte" }, n + (n > 1 ? " leçons" : " leçon"))));
  });
  ajouter(app, grille);
  if (LECONS.length > 1) {
    ajouter(app, h("button", { class: "examen", onclick: function () { lancerSession(seriesExamen(), "Examen blanc", "#/"); } }, "Examen blanc : 20 questions mélangées"));
  }
  ajouter(app, h("div", { class: "pied" },
    h("button", { class: "lien", onclick: function () { location.hash = "#/parent"; } }, "Espace parent")));
}

function ecranCahier(cid) {
  var c = CAHIERS.filter(function (x) { return x.id === cid; })[0];
  if (!c) { location.hash = "#/"; return; }
  vider();
  ajouter(app, [barre("#/", "Mes cahiers"), h("h1", null, c.nom)]);
  var ul = h("ul", { class: "lecons" });
  LECONS.filter(function (l) { return l.cahier === cid; }).slice().reverse().forEach(function (l) {
    var mini = h("span", { class: "niv-mini", "aria-label": "niveaux réussis" });
    niveauxDe(l).forEach(function (_, n) { var inf = infoNiveau(l.id, n); mini.appendChild(h("span", { class: inf && inf.best >= SEUIL ? "ok" : "" }, "★")); });
    ul.appendChild(h("li", null,
      h("span", { class: "dans-marge" }, dateFr(l.date)),
      h("button", { class: "lecon", onclick: function () { location.hash = "#/lecon/" + l.id; } },
        h("span", { class: "titre" }, h("small", null, l.matiere), l.titre), mini)));
  });
  ajouter(app, ul);
}

function ecranLecon(lid) {
  var l = parId[lid];
  if (!l) { location.hash = "#/"; return; }
  vider();
  ajouter(app, barre("#/cahier/" + l.cahier, "Retour au cahier"));
  if (l.date) ajouter(app, [h("div", { class: "date" }, dateFr(l.date)), h("div", { class: "trait" })]);
  ajouter(app, h("h1", null, l.matiere + " : " + l.titre));
  ajouter(app, h("div", { class: "retiens" }, h("span", { class: "etiq" }, "Je retiens"), h("div", { html: l.retiens })));
  if (l.astuce) ajouter(app, h("div", { class: "astuce", html: "<b>Astuce : </b>" + l.astuce }));
  if (l.retiens && "speechSynthesis" in window) {
    ajouter(app, h("button", { class: "lien", onclick: function () { var d = document.createElement("div"); d.innerHTML = l.retiens; parler(d.textContent); } }, "Écouter la leçon"));
  }
  ajouter(app, h("h2", null, "Mes exercices"));
  var ol = h("ol", { class: "etapes" });
  niveauxDe(l).forEach(function (exos, n) {
    var inf = infoNiveau(l.id, n), ouvert = niveauOuvert(l.id, n);
    var score = inf ? h("span", { class: "score" }, h("b", null, "★★★".slice(0, etoilesPour(inf.best)) || "–"), h("br"), Math.round(inf.best * 100) + " %")
      : h("span", { class: "score" }, ouvert ? exos.length + " questions" : "Réussis d'abord le niveau " + n);
    ol.appendChild(h("li", null, h("button", {
      class: "etape", disabled: !ouvert,
      onclick: function () { lancerSession(exos.map(function (ex, i) { return { lecon: l, n: n, i: i, ex: ex }; }), NIVEAUX[n].nom, "#/lecon/" + l.id, { lid: l.id, n: n }); }
    }, h("span", { class: "num" }, String(n + 1)), h("span", null, NIVEAUX[n].nom, h("small", null, NIVEAUX[n].detail)), score)));
  });
  ajouter(app, ol);
}

/* ---------------- Séries ---------------- */
function seriesRevision() {
  return melanger(erreursDues()).slice(0, 15).map(function (e) { var t = trouverEx(e.k); t.revision = true; return t; });
}
function seriesExamen() {
  var tout = [];
  LECONS.forEach(function (l) { (l.niveaux || []).forEach(function (niv, n) { if (n >= 1) (niv || []).forEach(function (ex, i) { tout.push({ lecon: l, n: n, i: i, ex: ex }); }); }); });
  return melanger(tout).slice(0, 20);
}

/* ---------------- Session d'exercices ---------------- */
var session = null;
function lancerSession(items, titre, retour, cible) {
  if (!items.length) return;
  session = { items: items, i: 0, justes: 0, titre: titre, retour: retour, cible: cible || null, debut: Date.now() };
  if (location.hash !== "#/exercice") location.hash = "#/exercice"; else afficherQuestion();
}

function afficherQuestion() {
  if (!session) { location.hash = "#/"; return; }
  var it = session.items[session.i], ex = it.ex;
  vider();
  ajouter(app, h("div", { class: "haut" },
    h("button", { class: "retour", onclick: function () { if (confirm("Arrêter cette série ?")) { var r = session.retour; session = null; location.hash = r; } } }, "Arrêter"),
    h("span", { class: "etoiles" }, (session.i + 1) + " / " + session.items.length)));
  ajouter(app, h("div", { class: "progression" }, h("div", { style: "width:" + (100 * session.i / session.items.length) + "%" })));
  if (it.revision || !session.cible) ajouter(app, h("div", { class: "consigne" }, it.lecon.matiere + " : " + it.lecon.titre));

  var zone = h("div");
  var valider = h("button", { class: "valider", disabled: true }, "Valider");
  var ctrl = TYPES[ex.t](ex, zone, function (ok) { valider.disabled = !ok; });
  ajouter(app, zone);
  if (zone.querySelector("input:not([inputmode=decimal])")) ajouter(app, barreAccents(zone));
  var pied = h("div", null, valider);
  if (ex.aide) {
    var aideBtn = h("button", { class: "indice", onclick: function () { aideBtn.replaceWith(h("div", { class: "aide-texte" }, "Indice : " + ex.aide)); } }, "Un indice ?");
    pied.appendChild(aideBtn);
  }
  ajouter(app, pied);
  valider.addEventListener("click", function () {
    var res = ctrl.corriger();
    valider.remove(); if (aideBtn) aideBtn.remove();
    noter(it, res.ok);
    var bloc = h("div", { class: "retour-ex " + (res.ok ? "bien" : "pasbien") },
      h("div", { class: "tampon" }, res.ok ? choisir(["Bravo !", "Très bien !", "Exact !", "Super !"]) : "Pas tout à fait…"),
      !res.ok && res.corrige ? h("div", { class: "corrige", html: "La bonne réponse : <b>" + res.corrige + "</b>" }) : null,
      ex.expl ? h("div", { html: ex.expl }) : null,
      !res.ok && it.lecon.regle ? h("div", { class: "souviens", html: "<b>Souviens-toi : </b>" + it.lecon.regle }) : null);
    ajouter(app, bloc);
    var suite = h("button", { class: "valider", style: "margin-top:24px", onclick: function () {
      session.i++; if (session.i < session.items.length) afficherQuestion(); else afficherResultat();
    } }, session.i + 1 < session.items.length ? "Question suivante" : "Voir mon résultat");
    ajouter(app, suite);
    suite.focus();
  });
}
/* Barre d'accents : insère la lettre dans le dernier champ touché. */
function barreAccents(zone) {
  var dernier = zone.querySelector("input");
  zone.addEventListener("focusin", function (e) { if (e.target.tagName === "INPUT") dernier = e.target; });
  var barre = h("div", { class: "accents" });
  "é è ê à â î ï ô û ù ç ë œ".split(" ").forEach(function (l) {
    barre.appendChild(h("button", { class: "accent", type: "button", onmousedown: function (e) { e.preventDefault(); }, onclick: function () {
      if (!dernier || dernier.disabled) return;
      var d = dernier.selectionStart == null ? dernier.value.length : dernier.selectionStart, f = dernier.selectionEnd == null ? d : dernier.selectionEnd;
      dernier.value = dernier.value.slice(0, d) + l + dernier.value.slice(f);
      dernier.focus(); dernier.setSelectionRange(d + 1, d + 1);
      dernier.dispatchEvent(new Event("input"));
    } }, l));
  });
  return barre;
}
function choisir(t) { return t[Math.floor(Math.random() * t.length)]; }

function noter(it, ok) {
  var k = it.lecon.id + ":" + it.n + ":" + it.i;
  var e = etat.erreurs.filter(function (x) { return x.k === k; })[0];
  if (ok) {
    session.justes++; etat.etoiles++;
    if (e) { e.boite++; if (e.boite >= 3) etat.erreurs = etat.erreurs.filter(function (x) { return x !== e; }); else e.due = plusJours([1, 3, 7][e.boite]); }
  } else {
    if (e) { e.boite = 0; e.due = plusJours(1); e.fois = (e.fois || 1) + 1; }
    else etat.erreurs.push({ k: k, boite: 0, due: plusJours(1), fois: 1 });
  }
  sauver();
}

function afficherResultat() {
  var total = session.items.length, score = session.justes / total, n = etoilesPour(score);
  var sec = Math.round((Date.now() - session.debut) / 1000);
  etat.journal.push({ d: new Date().toISOString(), titre: session.cible ? parId[session.cible.lid].titre + " (" + NIVEAUX[session.cible.n].nom + ")" : session.titre, justes: session.justes, total: total, sec: sec });
  if (etat.journal.length > 300) etat.journal = etat.journal.slice(-300);
  var suivantOuvert = false;
  if (session.cible) {
    var k = session.cible.lid + ":" + session.cible.n, inf = etat.niveaux[k] || { best: 0, essais: 0 };
    var avant = inf.best >= SEUIL;
    inf.best = Math.max(inf.best, score); inf.essais++; inf.dernier = jour(); inf.dernierScore = score;
    etat.niveaux[k] = inf;
    suivantOuvert = !avant && inf.best >= SEUIL && session.cible.n + 1 < niveauxDe(parId[session.cible.lid]).length;
  }
  sauver();
  vider();
  var gros = h("div", { class: "grosses-etoiles", "aria-label": n + " étoiles sur 3" });
  for (var i = 0; i < 3; i++) gros.appendChild(h("span", { class: i < n ? "ok" : "" }, "★"));
  var message = score === 1 ? "Parfait, tout est juste !" : score >= 0.9 ? "Excellent travail !" : score >= SEUIL ? "Bien joué, tu as compris !" : score >= 0.5 ? "C'est un bon début. Relis la leçon et réessaie." : "Relis bien la leçon, puis recommence : tu vas y arriver.";
  var s = session;
  ajouter(app, h("div", { class: "resultat" },
    h("h1", null, s.titre), gros,
    h("p", { style: "font-size:26px" }, s.justes + " bonnes réponses sur " + total),
    h("p", null, message),
    suivantOuvert ? h("p", { style: "color:var(--vert)" }, "Le niveau suivant est débloqué !") : null,
    h("div", { class: "actions" },
      s.cible ? h("button", { class: "secondaire", onclick: function () { var l = parId[s.cible.lid]; lancerSession(l.niveaux[s.cible.n].map(function (ex, i) { return { lecon: l, n: s.cible.n, i: i, ex: ex }; }), s.titre, s.retour, s.cible); } }, "Recommencer") : null,
      h("button", { class: "valider", onclick: function () { session = null; location.hash = s.retour; } }, "Continuer"))));
}

/* ---------------- Types d'exercices ----------------
   Chaque type dessine l'exercice dans `zone`, appelle pret(true) quand on peut valider,
   et renvoie { corriger: fn → { ok, corrige } }. */
function question(zone, consigne, q) {
  if (consigne) zone.appendChild(h("div", { class: "consigne" }, consigne));
  if (q) zone.appendChild(h("div", { class: "question", html: q }));
}
var TYPES = {
  qcm: function (ex, zone, pret) {
    question(zone, ex.consigne || "Choisis la bonne réponse.", ex.q);
    var choisi = null, boutons = [];
    var grille = h("div", { class: "choix" });
    melanger(ex.choix).forEach(function (c) {
      var b = h("button", { class: "btn-choix", html: c, onclick: function () { boutons.forEach(function (x) { x.classList.remove("choisi"); }); b.classList.add("choisi"); choisi = c; pret(true); } });
      b._val = c; boutons.push(b); grille.appendChild(b);
    });
    zone.appendChild(grille);
    return { corriger: function () {
      var ok = choisi === ex.r;
      boutons.forEach(function (b) { b.disabled = true; if (b._val === ex.r) b.classList.add("juste"); else if (b._val === choisi) b.classList.add("faux"); });
      return { ok: ok, corrige: ok ? null : ex.r };
    } };
  },
  vf: function (ex, zone, pret) {
    return TYPES.qcm({ consigne: ex.consigne || "Vrai ou faux ?", q: ex.q, choix: ["Vrai", "Faux"], r: ex.r ? "Vrai" : "Faux" }, zone, pret);
  },
  saisie: function (ex, zone, pret) {
    question(zone, ex.consigne || "Écris ta réponse.", ex.q);
    var champ = h("input", { class: "champ" + (ex.large ? " large" : ""), type: "text", inputmode: ex.nombre ? "decimal" : "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false",
      oninput: function () { pret(champ.value.trim() !== ""); },
      onkeydown: function (e) { if (e.key === "Enter" && champ.value.trim()) { var v = document.querySelector(".valider"); if (v && !v.disabled) v.click(); } } });
    zone.appendChild(h("div", { class: "saisie" }, champ, ex.unite ? h("span", { class: "unite" }, ex.unite) : null));
    setTimeout(function () { champ.focus(); }, 50);
    return { corriger: function () {
      var ok = egal(champ.value, ex.r, ex); champ.disabled = true; champ.classList.add(ok ? "juste" : "faux");
      var r = Array.isArray(ex.r) ? ex.r[0] : ex.r;
      return { ok: ok, corrige: ok ? null : r + (ex.unite ? " " + ex.unite : "") };
    } };
  },
  trous: function (ex, zone, pret) {
    question(zone, ex.consigne || "Complète.", ex.q);
    var champs = [], p = h("div", { class: "trou-texte" });
    ex.texte.split(/(\[[^\]]+\])/).forEach(function (morceau) {
      var m = morceau.match(/^\[([^\]]+)\]$/);
      if (!m) { p.appendChild(h("span", { html: morceau })); return; }
      var rep = m[1].split("|");
      var c = h("input", { class: "champ", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", size: Math.max(4, rep[0].length + 1),
        oninput: function () { pret(champs.every(function (x) { return x.value.trim() !== ""; })); } });
      c._rep = rep; champs.push(c); p.appendChild(c);
    });
    zone.appendChild(p);
    setTimeout(function () { if (champs[0]) champs[0].focus(); }, 50);
    return { corriger: function () {
      var tout = true;
      champs.forEach(function (c) { var ok = egal(c.value, c._rep, ex); tout = tout && ok; c.disabled = true; c.classList.add(ok ? "juste" : "faux"); if (!ok) c.value = c.value + " → " + c._rep[0]; c.size = c.value.length + 1; });
      return { ok: tout, corrige: null };
    } };
  },
  ordre: function (ex, zone, pret) {
    question(zone, ex.consigne || "Touche les mots dans le bon ordre pour écrire la phrase.", ex.q);
    var mots = ex.r.split(" "), construite = [];
    var ligne = h("div", { class: "phrase-construite" }), reserve = h("div", { class: "jetons" });
    function maj() { pret(construite.length === mots.length); }
    melanger(mots.map(function (m, i) { return { m: m, i: i }; })).forEach(function (o) {
      var j = h("button", { class: "jeton", text: o.m });
      j.addEventListener("click", function () {
        if (j.parentNode === reserve) {
          var copie = h("button", { class: "jeton", text: o.m });
          copie.addEventListener("click", function () { if (copie._fige) return; copie.remove(); construite.splice(construite.indexOf(o.m + "\u0000" + o.i), 1); j.classList.remove("place"); maj(); });
          construite.push(o.m + "\u0000" + o.i); ligne.appendChild(copie); j.classList.add("place"); maj();
        }
      });
      reserve.appendChild(j);
    });
    zone.appendChild(ligne); zone.appendChild(reserve);
    return { corriger: function () {
      var phrase = construite.map(function (x) { return x.split("\u0000")[0]; }).join(" ");
      var ok = norm(phrase, true) === norm(ex.r, true);
      Array.prototype.forEach.call(ligne.children, function (c) { c._fige = true; });
      ligne.style.borderColor = ok ? "var(--vert)" : "var(--rouge)";
      return { ok: ok, corrige: ok ? null : ex.r };
    } };
  },
  classer: function (ex, zone, pret) {
    question(zone, ex.consigne || "Touche un mot, puis la case où il doit aller.", ex.q);
    var actif = null, place = {};
    var reserve = h("div", { class: "jetons" }), cases = h("div", { class: "cases" });
    var boites = ex.cases.map(function (nom) {
      var b = h("button", { class: "case" }, h("h3", null, nom));
      b.addEventListener("click", function () { if (!actif) return; b.appendChild(actif); place[actif._val] = nom; actif.classList.remove("actif"); actif = null; pret(Object.keys(place).length === ex.items.length); });
      cases.appendChild(b); return b;
    });
    melanger(ex.items).forEach(function (it) {
      var j = h("button", { class: "jeton", html: it[0] }); j._val = it[0]; j._bon = it[1];
      j.addEventListener("click", function (e) {
        e.stopPropagation();
        if (j.disabled) return;
        if (actif) actif.classList.remove("actif");
        if (actif === j) { actif = null; return; }
        actif = j; j.classList.add("actif");
      });
      reserve.appendChild(j);
    });
    zone.appendChild(reserve); zone.appendChild(cases);
    return { corriger: function () {
      var tout = true;
      zone.querySelectorAll(".case .jeton").forEach(function (j) { var ok = place[j._val] === j._bon; tout = tout && ok; j.disabled = true; j.style.borderColor = ok ? "var(--vert)" : "var(--rouge)"; if (!ok) j.innerHTML += " <small class='corrige'>(" + j._bon + ")</small>"; });
      boites.forEach(function (b) { b.disabled = true; });
      return { ok: tout, corrige: null };
    } };
  },
  relier: function (ex, zone, pret) {
    question(zone, ex.consigne || "Relie : touche un élément à gauche, puis celui qui va avec à droite.", ex.q);
    var g = melanger(ex.paires.map(function (p, i) { return { t: p[0], i: i }; })), d = melanger(ex.paires.map(function (p, i) { return { t: p[1], i: i }; }));
    var choixG = null, liens = {}, grille = h("div", { class: "relier" }), bg = [], bd = [];
    var couleurs = ["#1c3f94", "#17803d", "#d9822b", "#7b3fa0", "#0e8c8c", "#c21f32", "#5d6170", "#b8860b"];
    var colG = h("div", { style: "display:grid;gap:12px" }), colD = h("div", { style: "display:grid;gap:12px" });
    g.forEach(function (o) { var b = h("button", { class: "btn-choix", html: o.t }); b._i = o.i; b.addEventListener("click", function () { if (b.disabled) return; bg.forEach(function (x) { x.classList.remove("choisi"); }); b.classList.add("choisi"); choixG = b; }); bg.push(b); colG.appendChild(b); });
    d.forEach(function (o) { var b = h("button", { class: "btn-choix", html: o.t }); b._i = o.i; b.addEventListener("click", function () {
      if (b.disabled || !choixG) return;
      for (var k in liens) if (liens[k] === b) delete liens[k];
      liens[choixG._i] = b;
      var c = couleurs[Object.keys(liens).indexOf(String(choixG._i)) % couleurs.length];
      choixG.style.borderColor = c; b.style.borderColor = c; choixG.classList.remove("choisi"); choixG.classList.add("lie"); b.classList.add("lie"); choixG = null;
      pret(Object.keys(liens).length === ex.paires.length);
    }); bd.push(b); colD.appendChild(b); });
    grille.appendChild(colG); grille.appendChild(colD); zone.appendChild(grille);
    return { corriger: function () {
      var tout = true;
      bg.forEach(function (b) { var ok = liens[b._i] && liens[b._i]._i === b._i; tout = tout && ok; b.disabled = true; b.classList.remove("lie"); b.classList.add(ok ? "juste" : "faux"); b.style.borderColor = ""; });
      bd.forEach(function (b) { b.disabled = true; b.classList.remove("lie"); b.style.borderColor = ""; });
      return { ok: tout, corrige: tout ? null : ex.paires.map(function (p) { return p[0] + " → " + p[1]; }).join("<br>") };
    } };
  },
  dictee: function (ex, zone, pret) {
    question(zone, ex.consigne || "Écoute la phrase, puis écris-la sans faute.", ex.q);
    var peut = "speechSynthesis" in window;
    zone.appendChild(h("button", { class: "ecouter", onclick: function () { parler(ex.texte); } }, peut ? "Écouter la phrase" : "Lecture impossible sur cet appareil"));
    var champ = h("input", { class: "champ large", type: "text", autocomplete: "off", autocapitalize: "sentences", spellcheck: "false", oninput: function () { pret(champ.value.trim() !== ""); } });
    zone.appendChild(h("div", { class: "saisie" }, champ));
    setTimeout(function () { parler(ex.texte); }, 400);
    return { corriger: function () {
      var a = norm(champ.value, true).replace(/[.,;:!?]/g, "").split(" "), b = norm(ex.texte, true).replace(/[.,;:!?]/g, "").split(" ");
      var ok = a.length === b.length && a.every(function (m, i) { return m.toLowerCase() === b[i].toLowerCase(); });
      champ.disabled = true; champ.classList.add(ok ? "juste" : "faux");
      var marque = ex.texte.split(" ").map(function (m, i) { var x = m.replace(/[.,;:!?]/g, ""); return a[i] && a[i].toLowerCase() === x.toLowerCase() ? m : "<u>" + m + "</u>"; }).join(" ");
      return { ok: ok, corrige: ok ? null : marque };
    } };
  },
  probleme: function (ex, zone, pret) {
    question(zone, ex.consigne || "Lis bien le problème, puis réponds à chaque étape.", ex.q);
    var champs = [];
    ex.etapes.forEach(function (et) {
      var c = h("input", { class: "champ", type: "text", inputmode: "decimal", autocomplete: "off", oninput: function () { pret(champs.every(function (x) { return x.value.trim() !== ""; })); } });
      c._et = et; champs.push(c);
      zone.appendChild(h("div", { style: "margin-bottom:8px" }, h("div", { html: et.q }), h("div", { class: "saisie", style: "margin-bottom:12px" }, c, et.unite ? h("span", { class: "unite" }, et.unite) : null)));
    });
    return { corriger: function () {
      var tout = true;
      champs.forEach(function (c) { var et = c._et; var ok = egal(c.value, et.r, { nombre: et.texte ? false : true }); tout = tout && ok; c.disabled = true; c.classList.add(ok ? "juste" : "faux"); if (!ok) c.value += " → " + (Array.isArray(et.r) ? et.r[0] : et.r); });
      return { ok: tout, corrige: null };
    } };
  }
};

/* ---------------- Espace parent ---------------- */
function ecranParent() {
  vider();
  ajouter(app, [barre("#/", "Accueil"), h("h1", null, "Espace parent")]);
  if (!etat.code) {
    ajouter(app, h("p", null, "Choisissez un code à 4 chiffres pour protéger cet espace (les réglages et l'effacement des progrès)."));
    var c1 = h("input", { class: "champ code", type: "password", inputmode: "numeric", maxlength: 4 });
    ajouter(app, [c1, h("p"), h("button", { class: "valider", onclick: function () { if (/^\d{4}$/.test(c1.value)) { etat.code = c1.value; sauver(); sessionStorage.setItem("parent", "1"); ecranParent(); } else alert("Il faut 4 chiffres."); } }, "Enregistrer le code")]);
    return;
  }
  if (sessionStorage.getItem("parent") !== "1") {
    ajouter(app, h("p", null, "Entrez votre code."));
    var c = h("input", { class: "champ code", type: "password", inputmode: "numeric", maxlength: 4, oninput: function () { if (c.value === etat.code) { sessionStorage.setItem("parent", "1"); ecranParent(); } } });
    ajouter(app, c); setTimeout(function () { c.focus(); }, 50);
    return;
  }
  // Activité
  var sept = new Date(); sept.setDate(sept.getDate() - 7);
  var semaine = etat.journal.filter(function (j) { return new Date(j.d) >= sept; });
  var minutes = Math.round(semaine.reduce(function (s, j) { return s + Math.min(j.sec, 1800); }, 0) / 60);
  ajouter(app, h("h2", null, "Cette semaine"));
  ajouter(app, h("p", null, semaine.length + " séries faites, environ " + minutes + " minutes de travail, " + etat.erreurs.length + " questions dans la liste à revoir."));
  // Par leçon
  ajouter(app, h("h2", null, "Par leçon"));
  var t = h("table", { class: "tableau" }, h("tr", null, h("th", null, "Leçon"), h("th", null, "Niveaux (meilleur score)"), h("th", null, "Dernière fois")));
  LECONS.forEach(function (l) {
    var cells = niveauxDe(l).map(function (_, n) { var inf = infoNiveau(l.id, n); return inf ? (n + 1) + " : " + Math.round(inf.best * 100) + " % (" + inf.essais + " essai" + (inf.essais > 1 ? "s" : "") + ")" : (n + 1) + " : –"; }).join("<br>");
    var derniers = niveauxDe(l).map(function (_, n) { var inf = infoNiveau(l.id, n); return inf ? inf.dernier : ""; }).filter(Boolean).sort();
    t.appendChild(h("tr", null, h("td", null, l.matiere + " : " + l.titre), h("td", { html: cells }), h("td", null, derniers.length ? dateFr(derniers[derniers.length - 1]) : "jamais")));
  });
  ajouter(app, t);
  // Erreurs fréquentes
  var freq = etat.erreurs.slice().sort(function (a, b) { return (b.fois || 1) - (a.fois || 1); }).slice(0, 12).map(function (e) { return { e: e, x: trouverEx(e.k) }; }).filter(function (o) { return o.x; });
  if (freq.length) {
    ajouter(app, h("h2", null, "Ce qui lui pose problème"));
    var te = h("table", { class: "tableau" }, h("tr", null, h("th", null, "Leçon"), h("th", null, "Question"), h("th", null, "Ratée")));
    freq.forEach(function (o) {
      var q = o.x.ex.q || o.x.ex.texte || o.x.ex.r || ""; var d = document.createElement("div"); d.innerHTML = String(q);
      te.appendChild(h("tr", null, h("td", null, o.x.lecon.titre), h("td", null, d.textContent.slice(0, 120)), h("td", null, (o.e.fois || 1) + " fois")));
    });
    ajouter(app, te);
  }
  // Historique
  ajouter(app, h("h2", null, "Dernières séries"));
  var th = h("table", { class: "tableau" }, h("tr", null, h("th", null, "Quand"), h("th", null, "Série"), h("th", null, "Score"), h("th", null, "Durée")));
  etat.journal.slice(-25).reverse().forEach(function (j) {
    var d = new Date(j.d);
    th.appendChild(h("tr", null, h("td", null, d.toLocaleDateString("fr-FR") + " " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })), h("td", null, j.titre), h("td", null, j.justes + "/" + j.total), h("td", null, Math.max(1, Math.round(j.sec / 60)) + " min")));
  });
  ajouter(app, etat.journal.length ? th : h("p", { class: "vide" }, "Aucune série pour l'instant."));
  // Réglages
  ajouter(app, h("h2", null, "Réglages"));
  var prenom = h("input", { class: "champ", value: etat.prenom });
  ajouter(app, h("div", { class: "saisie" }, h("span", null, "Prénom affiché :"), prenom, h("button", { class: "secondaire", onclick: function () { etat.prenom = prenom.value.trim() || "Kamelia"; sauver(); alert("Enregistré."); } }, "Enregistrer")));
  ajouter(app, h("p", { class: "vide" }, LECONS.length + " leçons dans l'application. Version du contenu : " + (window.VERSION_CONTENU || "?") + "."));
  ajouter(app, h("div", { class: "pied" },
    h("button", { class: "lien", onclick: function () { sessionStorage.removeItem("parent"); location.hash = "#/"; } }, "Fermer l'espace parent"),
    h("button", { class: "lien", onclick: function () { if (confirm("Effacer tous les progrès de " + etat.prenom + " ? Ce n'est pas réversible.")) { var code = etat.code, p = etat.prenom; localStorage.removeItem(CLE); etat = charger(); etat.code = code; etat.prenom = p; sauver(); ecranParent(); } } }, "Effacer les progrès")));
}

/* ---------------- Navigation ---------------- */
function router() {
  var p = (location.hash || "#/").slice(2).split("/");
  if (p[0] !== "exercice" && session) session = null;
  if (p[0] === "cahier") ecranCahier(p[1]);
  else if (p[0] === "lecon") ecranLecon(decodeURIComponent(p[1]));
  else if (p[0] === "exercice") afficherQuestion();
  else if (p[0] === "parent") ecranParent();
  else ecranAccueil();
}
window.addEventListener("hashchange", router);
router();

if ("serviceWorker" in navigator && location.protocol === "https:") {
  navigator.serviceWorker.register("sw.js");
}
