const protifolio = "protifolio"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "assets/img/Chaitanya.png",
  "assets/img/Electric Vechiles and Mobility.png",
  "assets/img/Green Energy.jpg",
  "assets/img/Hackerrank.png",
  "assets/img/Sasi.png",
  "assets/img/gmrit.png",
  "assets/img/location.png",
  "assets/img/profile.jpg",
  "assets/img/our Energy Future.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(protifolio).then(cache => {
      cache.addAll(assets)
    })
  )
})