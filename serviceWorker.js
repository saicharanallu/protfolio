const protifolio = "protifolio"
const assets = [
  "/",
  "/index.html",
  "assets/css/styles.css",
  "assets/css/swiper-bundle.min.css",
  "assets/js/main.js",
  "assets/js/mixitup.min.js",
  "assets/js/scrollreveal.min.js",
  "assets/js/swiper-bundle.min.js",
  "assets/img/Chaitanya.png",
  "assets/img/Electric Vechiles and Mobility.png",
  "assets/img/Green Energy.jpg",
  "assets/img/Hackerrank.png",
  "assets/img/Sasi.png",
  "assets/img/gmrit.png",
  "assets/img/location.png",
  "assets/img/profile.jpg",
  "assets/img/our Energy Future.png",
  "assets/pdf",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(protifolio).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
