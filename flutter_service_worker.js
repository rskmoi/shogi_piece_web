'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/logs/HEAD": "13f4de162de52e2638388665af3ec0ca",
"/.git/logs/refs/heads/gh-pages": "3ae01429f3baa5b46185358c7dd3d294",
"/.git/logs/refs/heads/master": "581a41967cb3f4e59b07810aca08ecad",
"/.git/logs/refs/remotes/origin/gh-pages": "6f0c80f532dcd6793f382cba0a390f1c",
"/.git/logs/refs/remotes/origin/master": "5d49c34d827a1503480dccb114dddb0f",
"/.git/index": "88c25b2d896339bb72a74b29342bee86",
"/.git/objects/14/e6416f52a107eca2daaa159be15fa62e8fc37e": "484edc862d1ea6cac2b68016721068b5",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/ea/5811a3ea4eda5d54b81472882371c244c21455": "bfc2f25f19555d76f786f0c3f1c3196f",
"/.git/objects/fb/2851ccd090fb8b7cf856fb79407295c8deef3f": "73d664708e488f777a124eb77af23cbb",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/8e/33694e6bed0fb67bdee3676418c1589ee7dcb4": "f898bde01004005dd2abe375bdce4f91",
"/.git/objects/77/4865fa8b83ba9241744a16204497d1185f5090": "f69856eb709171ce4a3c0ec33615a0d5",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/4f/e91488de6616e32bb926f10527db2824acc801": "3249a8f1cff98e1fd64c8eff2d9760d2",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/df/ef8667685f55cf4c70cd6c08401dbdce95d116": "a878fd2b435f8c5327773c3a1ad75c3f",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/5e/cd1b38a926f88c049b0eae0250b57a0a674dfc": "01760380604fd46503c4f6b52d75f4a5",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/3b/e9328011f06a473a2912a7a3e9c343ad538da3": "7a63e5833675f88e91445c45920a0be2",
"/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"/.git/refs/heads/gh-pages": "3002474e797eaf0690cc817a1efd9fda",
"/.git/refs/heads/master": "3002474e797eaf0690cc817a1efd9fda",
"/.git/refs/remotes/origin/gh-pages": "3002474e797eaf0690cc817a1efd9fda",
"/.git/refs/remotes/origin/master": "3002474e797eaf0690cc817a1efd9fda",
"/.git/config": "822654373e196f43c2bec9e4529e899b",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/main.dart.js": "af71c6c19255ad0138c720b95b790a64",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "bdaa262c09f3af018db70dd1e59d44a1",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/index.html": "2f72917f5ce6dd9c7d205025220af4ad"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
