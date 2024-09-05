workbox.precaching.precacheAndRoute(self.__precacheManifest)


workbox.routing.registerRoute(
    /https:\/\/toplearn\.com\/flights\.json/,
    // OR /https:\/\/toplearn\.com\/*\.json/,
    new workbox.strategies.NetworkFirst({
       cacheName:"api-cache" 
    })
)