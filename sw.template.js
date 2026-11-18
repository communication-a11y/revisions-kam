// Garde l'application disponible hors ligne. La version change à chaque nouvelle leçon.
var CACHE = "kam-__VERSION__";
var FICHIERS = ["./", "index.html", "style.css", "app.js", "lecons.js", "manifest.webmanifest",
  "icone-192.png", "icone-512.png", "fonts/andika-400.woff2", "fonts/andika-700.woff2", "fonts/cursive.woff2"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
// Réseau d'abord (pour recevoir les nouvelles leçons), cache si pas de connexion.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copie = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copie); }); return r;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
});
