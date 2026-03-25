// CHeck if service worker exists in browser

if (navigator.serviceWorker) {
  // Register service worker
  navigator.serviceWorker
    // pass path of the sw file here
    .register("./sw.js", {
      scope: "./",
    })
    .then((resp) => {
      console.log("Service worker registered successfully");
      console.log("RESP", resp);
    })
    .catch((err) => {
      console.log("There was an error registering service worker");
      console.log("ERROR: -", err);
    });
}
