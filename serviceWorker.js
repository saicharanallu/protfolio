const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
  "assets/img/Chaitanya.png",
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