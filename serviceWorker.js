const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "assets/img/Chaitanya.png",
  "assets/img/Electric Vechiles and Mobility.png",
  "assets/img/Green Energy.jpg",
  "assets/img/Hackerrank.png",
  "assets/img/sasi.png",
  "assets/img/gmrit.png",
  "assets/img/location.png",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})