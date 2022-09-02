'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9f147ddaa9f2ae35d38a5c564fd3d13c",
".git/config": "a2fb63169eec4d414496572a636ef75f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "d922e84359c881a6e600eba52c8cf68e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59c007ab1a815657ded5eff96942c8b6",
".git/logs/refs/heads/main": "ab43524601c8c9f180a7a4b526af8940",
".git/logs/refs/remotes/origin/main": "a592dd3609b3eafa3816e5042c92cd04",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/07/638622fe5fa4616875ca7541e9fd4e7b0e8255": "76db13571c48f24f93a3158d8a7cd559",
".git/objects/0b/37d8bfb4b91733a3fd7890da411ed7af8763c5": "7e049e5f92213275a4570be8ef61fe04",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/ef21d49e657caca25301c6b3858476c8ac389a": "5344f757e94d5c02bfe8c06667a33ac9",
".git/objects/17/850ab989d4928a2cd59802193ca8967a374b0f": "2e9b168e772adda2365a32cd58536ec5",
".git/objects/18/904c211e81faa1f2907283e4c7de600bc9d40f": "9fe4ae6638004db419dbb164f33eda31",
".git/objects/1d/acd1666b04855330ba0f10838bd59b746b3c0a": "73593e5331a143982cbfe22310090494",
".git/objects/23/1491c1865a1d5ef80ff08260ef6cfa60a1d1ee": "d2ed1a567d635cfedf2658605b8d4d9d",
".git/objects/24/6d599753120769fd61d164a8c1bff70465a4e1": "0e6f054c54d1dcf0037c447b4f432809",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/e5e3be5f90131ca5b330f072659eb74d10fc46": "5c193d989608742d6d226a82d25108d4",
".git/objects/2a/794073e0eca7147238681d4efe15813983d8fd": "3993eb104f0a744e97f498c7a4d654b8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/addd96807d9b84c8d062b8b1431bc62b4ee9be": "45d8e25b98ded92ec5c677f5caeaa0cd",
".git/objects/33/b71a99fc5a992f407d6b2a3e649e3858934286": "07529256d35e91f7cc6190bfd332024b",
".git/objects/36/c9c746f7871886e394dfe1691b9e10703dd5a1": "f3ced7a5e7dbbc0da227458d0be97148",
".git/objects/37/93127337212e4ec5c4d44a55be3f41728cb4f4": "5e79da2b05f123dababc45b461e7022a",
".git/objects/3a/4c8faa48fa2ddad29b0c4f9cdc625c338a4ed1": "5acbd32403b61974f673b16d027a0d1e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5d/f384b31d6185cb8ca59bb87703629ef186ffea": "fb399e9d796a3fca5636c4d7a052d391",
".git/objects/63/4226431b1b059606484643809697bb624fe867": "93aeb837d94e54642bc546258df5b316",
".git/objects/6e/1f3eca0533d1e6b8df856a3871217266946c49": "f355be77b8936255a385546a77d0db67",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/94a9fdc04e2499cf1372809da13cd965940a35": "9fdcb811b06a303885ed27dd735c8070",
".git/objects/78/b98661225aec53b586b6972a8374c67e4c2137": "7d66491a99b31a86c7bab4425f5bf924",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/99/90f16bb93e88c2d7ffba07e10566040e68a0ed": "3196e3e92d89d701ba630758c58d5055",
".git/objects/99/bd1bea9ea40aa43344225f598d50e695b500c7": "7437f139f464689ca5fc997724b6d024",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/ae45a2d16a76acbb1d4e1cd5d64293a278504c": "291b0f0090a5d5f41a5166f9f6f7e3e7",
".git/objects/c4/cdb1ea078a087e26a6db082f20d7f53b198998": "48592ecee6cb4c018e6c3bad4d234a31",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/70288c8c407625cabc01bd6ca210bd9b140a99": "b1016edb1033fe957b8b0947f885ff58",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b3fbc432c5cc2ebc423532e0d5a94101d6112a": "e8a90ab76ee5fbfc8ac4681bfd54f404",
".git/objects/f5/bdec440572eff7fb20dbc3bc3ef1880bd69661": "672836d7b73820c5d918ac4ebe2bb924",
".git/refs/heads/main": "e4c8caef441d7e4c3ea37198e14d6826",
".git/refs/remotes/origin/main": "e4c8caef441d7e4c3ea37198e14d6826",
"assets/AssetManifest.json": "29b459299bbb4cb2a52babeb35b17892",
"assets/assets/26807.jpg": "84b7be1943f06d86ea38cbdd5155718f",
"assets/assets/268071920.jpg": "3ffdc657ef85329ef4605152eb1131f7",
"assets/assets/26807svg.svg": "f707667fa774a55817eafd89e9eced81",
"assets/assets/cover.jpg": "6e34b8ced4e8e01163ff6a1d5d2be21b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c6c8fc470b39379ad834def19bc43cc7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/sn_progress_dialog/assets/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/sn_progress_dialog/example/assets/completed.png": "3e65bf4ed5f8b0f808b57fecdb26b7d1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3c3ca8eb681ca95d7928872b72848c6e",
"/": "3c3ca8eb681ca95d7928872b72848c6e",
"main.dart.js": "596bbe83d4d84786f262c74e51ab96d1",
"manifest.json": "3c0f6b9b8db5f210161a77e9460b8da2",
"version.json": "bd8f509adb571e2225799ae25b798f0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
