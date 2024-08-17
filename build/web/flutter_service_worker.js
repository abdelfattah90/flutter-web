'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2285f8581196406658424dcde7e5330d",
"assets/AssetManifest.bin.json": "38c85238e9d6d8ca6b676da0a7cbbe3f",
"assets/AssetManifest.json": "6a4213c1ceeb1ed8ca814a4b88e2c91d",
"assets/assets/fonts/alquranalkareem.ttf": "60b9f9d3674a0dd451e7a483edaafad3",
"assets/assets/fonts/dinnext.ttf": "61b1e04ff205cd324350749648fe16fc",
"assets/assets/fonts/droid.ttf": "791f577ddc8e608ef0d842d070bcac23",
"assets/assets/fonts/khebrat.ttf": "2daad281903d63c54e67c0bba8b606cb",
"assets/assets/fonts/swissra.otf": "f447a4e8356eb47017ac6377b049e366",
"assets/assets/fonts/wessam.ttf": "047a33f5a9a3c1490b0e0382d5b07ccd",
"assets/assets/images/arabic-language.png": "6814d675d50cd8ec7d0d7fcd0b387e0a",
"assets/assets/images/bukhari.png": "eba55b3a2b96c70ad9467ff050be6707",
"assets/assets/images/calendar.png": "69ed5cd3bb652d9308dfe9dc8c52fbb4",
"assets/assets/images/calendar_2024/month_1.png": "1c1127aaf6ec8a64de9dd4f2a93e59cd",
"assets/assets/images/calendar_2024/month_10.png": "a1a804c69aaaabd5f11c9dac0d99e4e8",
"assets/assets/images/calendar_2024/month_11.png": "e2acb3a82daabadc857a2c8ea8eeb775",
"assets/assets/images/calendar_2024/month_12.png": "f21ebb8deaa4726f4bdf3dfa8f84cd81",
"assets/assets/images/calendar_2024/month_2.png": "b3ec13016113a507f6a78e6b30993adc",
"assets/assets/images/calendar_2024/month_3.png": "46213c677111539a4440ff5b607ec90e",
"assets/assets/images/calendar_2024/month_4.png": "008d025c1c78b0d3498fb69e640dccd6",
"assets/assets/images/calendar_2024/month_5.png": "979bb298d6c7a79d6381ef92fa6a1550",
"assets/assets/images/calendar_2024/month_6.png": "1aa3dbae50d07fdf9fd5e2c15e53e6e4",
"assets/assets/images/calendar_2024/month_7.png": "afd2f0d94695a01a119f4f136fcb2770",
"assets/assets/images/calendar_2024/month_8.png": "546141c3a1fb5e9880a2af94f5b738d8",
"assets/assets/images/calendar_2024/month_9.png": "ebce23aa9abb4ad5b7e2dbc185f6c80f",
"assets/assets/images/dua-reverse.png": "129dc46f09124de012f3bfebee2dcb8f",
"assets/assets/images/dua.png": "8a80ae327594650ef8af6cf073b7ad1a",
"assets/assets/images/dua_quran.png": "911b0bfbbbf25ed7f8327f8622270b4e",
"assets/assets/images/equestrian.png": "23009a1b641b1b3cf52da3dfa014da9b",
"assets/assets/images/frametop-pa.png": "13820a9bfb59acd6c3335ef471d109fb",
"assets/assets/images/frame_up.png": "68d68c7bd49f33bb192c5581a9f04894",
"assets/assets/images/info.png": "617e981290739552a724e460ec69abeb",
"assets/assets/images/islamic-frame.png": "74682c1c4d2d76178d13af3b4e8fa202",
"assets/assets/images/islamic_ai.jpg": "8d4a274a260875b0854df9608c648c5c",
"assets/assets/images/jana/home.png": "7305d4447af0b72093d48d163a313ba7",
"assets/assets/images/jana/masjid_nabawi.png": "b19de734a97332e69014185e6255af78",
"assets/assets/images/jana/one.png": "4f2db0ab68c373d3d90a566bdcd6be6f",
"assets/assets/images/jana/palm.png": "04a530f2fc2c58611a1e7e17c92b7d9e",
"assets/assets/images/jana/plant.png": "2fb93c3be4aa76707f3b7afd25211a05",
"assets/assets/images/jana/praise.png": "b48b7adbb1bd773de36a3356c1d860f0",
"assets/assets/images/jana/tasbih.png": "03728a4bf637e18c105d574eda521475",
"assets/assets/images/jana/treasure-chest.png": "a5560e1d72a01a574a0e4451b558e80b",
"assets/assets/images/ji.png": "cae7db6162fd6499462ed7c6994f9ab5",
"assets/assets/images/launcher_icon.png": "52c56756715896d929863cb0c01ff6be",
"assets/assets/images/masjid-night.jpg": "6cf5f130df7a710d0190bc5beb71fa4c",
"assets/assets/images/masjid.jpg": "8afbc4a9e3a4f1f47d836085eb14f5ef",
"assets/assets/images/menu-dark.png": "6564db7405c6dc7a861223c770fa6335",
"assets/assets/images/menu-light.png": "46433b498eb8721d81119aac57854a5a",
"assets/assets/images/moon-dark.png": "ac9d3469c3e638d2a2d9d1aa02d083c7",
"assets/assets/images/moon.png": "d1fd19ff1fd3dc79df9d14877b57b9b7",
"assets/assets/images/moon2.png": "34a74e7dc92b7486646a85b4408d48a2",
"assets/assets/images/nabi_calligraphy.png": "f60f342ca877692bc89a770c5852a37f",
"assets/assets/images/photo-camera.png": "ab892350d158e5b308776e56859e1bcd",
"assets/assets/images/prophet_mohamed.png": "52c56756715896d929863cb0c01ff6be",
"assets/assets/images/rashiduns/abobakr.png": "f5217e8a683206bbdb21ee377c8976a5",
"assets/assets/images/rashiduns/ali.png": "758edab8e954978ef900f591dcc42f57",
"assets/assets/images/rashiduns/omar.png": "70bf8a23de22544fa22f6cbd7c999fd1",
"assets/assets/images/rashiduns/usman.png": "171aba8cc32e9f9d2aa86a86d8374747",
"assets/assets/images/rashiduns.png": "3746df8bcf3531cfb484b69308c8ebcd",
"assets/assets/images/sujud.png": "f09d6887f3e26d2666c258aa98b6eea8",
"assets/assets/images/sun.png": "91fec56895faafa04b77d76bcf5dd962",
"assets/assets/images/sunrise.png": "d7d174a7fd4c2c751a7fa7424cdd1a74",
"assets/FontManifest.json": "dc57674c47e526fc09cdbe9177915316",
"assets/fonts/MaterialIcons-Regular.otf": "9350eff9dddc2ba44070036fad47b892",
"assets/NOTICES": "4ff7d5e872c3aba83c5b3bcfc38b9787",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa5134e96f61407152b397e3e057195c",
"/": "aa5134e96f61407152b397e3e057195c",
"main.dart.js": "5eba55d4be7a95a7145eb718f3bcd5e5",
"manifest.json": "42f2cd0391b15bcf298daca71ef3d03b",
"version.json": "26cea99c6e2de4b48e66403801b0b231"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
