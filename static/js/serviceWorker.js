
const CACHE_NAME = "updated mycache"
self.addEventListener('install', async event => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
        '/'
    ]);
    // console.log("Begin Intall");
    await self.skipWaiting();
})
self.addEventListener('activate', async event => {
    const keys = await caches.keys();
    for(let k of keys) {
        if (k !== CACHE_NAME) {
            await caches.delete(k)
        }
    }
    // console.log("activate:", event);
    await self.clients.claim();
})
self.addEventListener('fetch', async event => {
    // event.respondWith(
    //     Promise.resolve(
    //         new Response("Hello by service worker")
    //     )
    //     )
    // console.log("fetch:", event);
})


