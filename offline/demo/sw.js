// Runs when then install event runs
// Happens on page load
const CACHES_NAME = "demo/v1";
self.addEventListener("install", (e) => {
  // create cache and put assets in the browser cache
  e.waitUntil(
    caches.open(CACHES_NAME).then((cache) => {
      cache.addAll([
        "./index.html",
        "./script.js",
        "./styles.css",
        "./photo.jpeg",
      ]);
    }),
  );
});

// Runs when activate evenet runs
self.addEventListener("activate", (e) => {
  // clean up useless cache.
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHES_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Runs when fetch event runs - everytime a file is requested from the server
self.addEventListener("fetch", (e) => {
  // first ,make network call, fetch the data, store it in cache and return the result
  // if network is not available fetch from cache and return the cached result
  e.respondWith(
    // make network call
    fetch(e.request)
      .then((resp) => {
        const clonedData = resp.clone();
        caches.open(CACHES_NAME).then((cache) => {
          // store network call in cache
          cache.put(e.request, clonedData);
        });
        // return network call result
        console.log("Returning from network");
        return resp;
      })
      .catch(() => {
        // return from cache if cache macthes
        console.log("Returning from cache");
        return caches
          .match(e.request)
          .then((file) => file || new Response("Not found", { status: 404 }));
      }),
  );
});
