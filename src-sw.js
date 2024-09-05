workbox.precaching.precacheAndRoute(self.__precacheManifest)


workbox.routing.registerRoute(
    /https:\/\/toplearn\.com\/flights\.json/,
    // OR /https:\/\/toplearn\.com\/*\.json/,
    new workbox.strategies.NetworkFirst({
       cacheName:"api-cache",
       plugins:[
        new workbox.expiration.Plugin({
            maxEntries:50,
            purgeOnQuotaError:true,
            //if cache is loaded, the previous cache will be deleted👆
            maxAgeSeconds:10 * 86400 //10 days
        })
       ]
    })
)