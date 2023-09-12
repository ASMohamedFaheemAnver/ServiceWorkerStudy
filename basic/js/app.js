const APP = {
  SW: null,
  init() {
    // This will be false if it is http without localhost
    console.log({ condition: "serviceWorker" in navigator });
    if ("serviceWorker" in navigator) {
      // scope: '/' means, the service worker controls the root where is exist
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          APP.SW =
            registration.installing ||
            registration.waiting ||
            registration.active;
          console.log({ msg: "Service worker is registered." });
        });
      // See if the page is currently has a service worker
      if (navigator.serviceWorker.controller) {
        console.log({ msg: "Registered service worker exist." });
      }
      // Detect when a new or updated service worker is installed or activated.
      // If we made change in sw.js it will be trigger this function, to make it faster go to service worker in chrome inspect and skipWaiting
      navigator.serviceWorker.oncontrollerchange = (ev) => {
        console.log({ msg: "Controller changed." });
      };

      // Unregister service workers
      // navigator.serviceWorker.getRegistrations().then((registrations) => {
      //   for (let reg of registrations) {
      //     reg.unregister().then((isUnregistered) => {
      //       console.log({ isUnregistered });
      //     });
      //   }
      // });
    } else {
      console.log({ msg: "Check if ur in localhost or https protocol." });
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
