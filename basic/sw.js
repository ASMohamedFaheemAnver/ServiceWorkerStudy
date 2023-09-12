console.log({ msg: "Sw running." });

// self represent itself
// console.log({ self });

self.addEventListener("install", (ev) => {
  console.log({ msg: "Install" });
});
self.addEventListener("activate", (ev) => {
  console.log({ msg: "Activate" });
});

self.addEventListener("fetch", (ev) => {
  console.log({ msg: "Fetch", request: ev.request });
});

self.addEventListener("message", (ev) => {
  console.log({ msg: "Message" });
});
