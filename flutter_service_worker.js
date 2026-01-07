'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1f86cbe1484fef6f908b4e5c4caede61",
"assets/AssetManifest.bin.json": "25988f2b9d757397a16d54913bf04f9e",
"assets/AssetManifest.json": "7cfe35b392641892be7153a72a0951ec",
"assets/assets/images/4493104.png": "23a81fbfc3477df68de80e2b18788679",
"assets/assets/images/59271.jpg": "deeef84f183f4ac7ea916230daf18f56",
"assets/assets/images/alerts.png": "981c1d591cb6302756118fb061419e8e",
"assets/assets/images/bell.png": "bfe7a99aa1336237541a18410c5434d9",
"assets/assets/images/BuyNowpreview.png": "f5258e65924833d58537e2c78133bfb5",
"assets/assets/images/component.jpg": "4b01851848bd95388073568555b08a3e",
"assets/assets/images/devices.png": "27e7e31c49848131e0538b1fe2c78802",
"assets/assets/images/device_health.png": "2a7468ddafe8097d98821b6360419794",
"assets/assets/images/FIOTALTEREDLOGO.png": "65aa0df94401ea38da0be2c1a5c94c7d",
"assets/assets/images/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/images/Image_2.png": "829384def64b5bf50cb2bc469f332de7",
"assets/assets/images/img.png": "b5e1f709e06bce056bd5758d5ed291f1",
"assets/assets/images/img_1.png": "15288da2ea138850f571b2faf32f4d51",
"assets/assets/images/indoor-plants-studio%2520(1).jpg": "189780545d6103548ed4fb81d2e6855a",
"assets/assets/images/indoor-plants-studio.jpg": "9300814d4775c7cfeb4b9bcadc39d3c3",
"assets/assets/images/iot_dashboard.jpg": "dfc2a63f3a3a3d4fe6ad322dc9de888f",
"assets/assets/images/iot_images.png": "a45d2f6008957f702427d074d114729c",
"assets/assets/images/loginBackground.jpg": "c2ec39b36d290d22a7133b73cca17665",
"assets/assets/images/loginBackground.png": "b8c4c348506164704ff2cc42121ec155",
"assets/assets/images/logout_4227931.png": "0da73846b52f6b91a6a14aaf4ec9b6fb",
"assets/assets/images/Payment.png": "78b45e3eb3490d8d7582ba384fbfd751",
"assets/assets/images/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/route.png": "c6856fd6b7e9fcaf9adea3141145b0c4",
"assets/assets/images/stocks.png": "4af892d0f0da259674f4e20def0072a6",
"assets/assets/images/Subscription.png": "da8916673024f856160c4de0a20ca541",
"assets/assets/images/user-logout%2520(1).png": "5da46ac538c525957bd968a0e5421714",
"assets/assets/images/users.png": "af0273fdedd519e50efd42594a1aae26",
"assets/assets/newjson/vintage.json": "e60bc4adfa7eaa880b6ceae53aa0150b",
"assets/FontManifest.json": "36566366cde1a92faa9873206915521b",
"assets/fonts/MaterialIcons-Regular.otf": "ca429d8f78484d1d71c111d78a636b4d",
"assets/NOTICES": "f98fc30311e43634e3b576971d6ed0bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "d935299e773d7f84c35d19911e466578",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "a99dd178f602a0c486ca2299a9ca9b1b",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "2cdcec8b1f60fde352b7799951b071a1",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "f60046245192c7141a4f3f08cb17fc59",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "954abb69395b8bed50cf076b7af3afc8",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "c40cc5b3828ae2e9f5575c74d131c3f3",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "5f38246e98b39a8d7d70ef316ad2af78",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"Dataviewer.html": "dde46807a1b7e8befe021377453c6a5f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "86bea4738f206eeed044dfb4bc5125a3",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "51300403cfa4a636b785721db175000b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f170d2ed52005860ecef8d960d2f0d71",
"/": "f170d2ed52005860ecef8d960d2f0d71",
"main.dart.js": "a6b955c27a47ab2a11145185d92c8f4a",
"manifest.json": "da87a1d513f3c5f53a84241c8a809dfa",
"version.json": "01208e021b9ddd6d25d0f5485ca234d9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
