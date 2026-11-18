// Assemble les leçons de data/*.js dans lecons.js et met à jour la version hors ligne.
import fs from "node:fs";
const dir = new URL("./", import.meta.url).pathname;
const fichiers = fs.readdirSync(dir + "data").filter(f => f.endsWith(".js")).sort();
const version = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "");
let out = `var LECONS = window.LECONS = [];\nwindow.VERSION_CONTENU = "${version}";\n`;
for (const f of fichiers) out += `\n/* ---- ${f} ---- */\n` + fs.readFileSync(dir + "data/" + f, "utf8") + "\n";
fs.writeFileSync(dir + "lecons.js", out);
fs.writeFileSync(dir + "sw.js", fs.readFileSync(dir + "sw.template.js", "utf8").replace("__VERSION__", version));
// Vérification : chaque leçon et chaque exercice doivent être bien formés.
globalThis.window = {}; (0, eval)(out);
const L = window.LECONS, ids = new Set(); let n = 0, erreurs = [];
const types = ["qcm","vf","saisie","trous","ordre","classer","relier","dictee","probleme"];
for (const l of L) {
  if (ids.has(l.id)) erreurs.push("id en double : " + l.id); ids.add(l.id);
  for (const k of ["id","cahier","matiere","titre","retiens","regle","niveaux"]) if (!l[k]) erreurs.push(`${l.id}: champ ${k} manquant`);
  (l.niveaux||[]).forEach((niv, ni) => niv.forEach((ex, i) => {
    n++; const w = `${l.id} niv${ni+1} #${i+1}`;
    if (!types.includes(ex.t)) erreurs.push(`${w}: type inconnu ${ex.t}`);
    if (ex.t === "qcm" && !(ex.choix||[]).includes(ex.r)) erreurs.push(`${w}: la réponse n'est pas dans les choix`);
    if (ex.t === "vf" && typeof ex.r !== "boolean") erreurs.push(`${w}: r doit être true/false`);
    if (ex.t === "trous" && !/\[[^\]]+\]/.test(ex.texte||"")) erreurs.push(`${w}: aucun trou`);
    if (ex.t === "classer" && ex.items.some(it => !ex.cases.includes(it[1]))) erreurs.push(`${w}: case inconnue`);
    if (ex.t === "probleme" && !(ex.etapes||[]).length) erreurs.push(`${w}: aucune étape`);
    if (["saisie","ordre"].includes(ex.t) && !ex.r) erreurs.push(`${w}: réponse manquante`);
  }));
}
console.log(`${L.length} leçons, ${n} exercices, version ${version}`);
if (erreurs.length) { console.log(erreurs.join("\n")); process.exit(1); }
