/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96cddcae0b0f34278076dcc6812311e9"
  },
  {
    "url": "assets/css/0.styles.916e4787.css",
    "revision": "5e112e62928df583850db56c2b0740e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.bef15829.js",
    "revision": "36d941706a72691aeb466e85f7e7be86"
  },
  {
    "url": "assets/js/3.1e3cd4d1.js",
    "revision": "78ed479ad5b8556a277a5612eb7cbd8c"
  },
  {
    "url": "assets/js/4.1770c72f.js",
    "revision": "2ec90952cde48156040a04fcfad97ae1"
  },
  {
    "url": "assets/js/5.1c2c7a5a.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.03c1e63c.js",
    "revision": "1f43e92ce53757be8e8f1a438b5ee734"
  },
  {
    "url": "assets/js/7.66807493.js",
    "revision": "4cd828b5b3c9fbdff8b917a02acd3be3"
  },
  {
    "url": "assets/js/app.769eed80.js",
    "revision": "9118255152713f3a4ffe1ed6ee760c39"
  },
  {
    "url": "index.html",
    "revision": "273574bcd5d171c50c9ea01abec95040"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
