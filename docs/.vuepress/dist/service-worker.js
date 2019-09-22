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
    "revision": "37b4be8e8d00bcf975c17475ec1aa20c"
  },
  {
    "url": "algorithm/algorithm.html",
    "revision": "570fcdb390c037fe5129ee27f0bb1ac8"
  },
  {
    "url": "algorithm/structure.html",
    "revision": "b184a2da6d04dae33f8d96845e0c55c0"
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
    "url": "assets/js/10.2777a971.js",
    "revision": "2b598253a5fdb428f19defc8f2811136"
  },
  {
    "url": "assets/js/11.f252f3a4.js",
    "revision": "0f25dea4d89deea7d0b146f7e58ba74d"
  },
  {
    "url": "assets/js/12.4b69d0f6.js",
    "revision": "50a1badf50ff9fb080fa6e00f9e64919"
  },
  {
    "url": "assets/js/13.d9f2f1d3.js",
    "revision": "349a2c2ff0ce0935d459d5d999fe2d3a"
  },
  {
    "url": "assets/js/14.61762434.js",
    "revision": "11eeb4dad8193520ac23b83ca7f91453"
  },
  {
    "url": "assets/js/15.1114ec02.js",
    "revision": "c596b3ea623c1a001009510290468139"
  },
  {
    "url": "assets/js/16.4ebaa2cd.js",
    "revision": "49f9db56dfc15dece5cec499a0b6afd1"
  },
  {
    "url": "assets/js/17.922e0da8.js",
    "revision": "9d84274f2831d8a1734b7ec0342af11b"
  },
  {
    "url": "assets/js/18.2ce663cb.js",
    "revision": "016989494444dd2b21dddbe90e89ec9d"
  },
  {
    "url": "assets/js/19.e47ab77b.js",
    "revision": "f7b9373a94b14c29a9032103428d2be9"
  },
  {
    "url": "assets/js/2.bef15829.js",
    "revision": "36d941706a72691aeb466e85f7e7be86"
  },
  {
    "url": "assets/js/20.7be9f156.js",
    "revision": "d265313d8a563a94ac3a6ad186936089"
  },
  {
    "url": "assets/js/21.68b06bef.js",
    "revision": "cdc99ddeb40077b8bf64ae3526136df6"
  },
  {
    "url": "assets/js/22.abf94687.js",
    "revision": "ed9a4c04efe71f9aa985bb142fc608a0"
  },
  {
    "url": "assets/js/23.0029ea1b.js",
    "revision": "00f42e6fa0b75e290c9cc8a35675b683"
  },
  {
    "url": "assets/js/24.ced8b648.js",
    "revision": "fc0bc66a30666567403568be1f3dc609"
  },
  {
    "url": "assets/js/25.2f0ea424.js",
    "revision": "940656185df18fc505bd3c1f717806c3"
  },
  {
    "url": "assets/js/3.1e3cd4d1.js",
    "revision": "78ed479ad5b8556a277a5612eb7cbd8c"
  },
  {
    "url": "assets/js/4.0f104093.js",
    "revision": "6a8b74e78caf92b6218730d8a2b525d3"
  },
  {
    "url": "assets/js/5.1c2c7a5a.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.1f4d15e2.js",
    "revision": "f351c6e2683ddb827f406986fcb411af"
  },
  {
    "url": "assets/js/7.93aa7b63.js",
    "revision": "86e39215b4ead6a720b7de2344322a32"
  },
  {
    "url": "assets/js/8.ce08cc5f.js",
    "revision": "3528fca80ae6811114618a47f078b0a3"
  },
  {
    "url": "assets/js/9.40a48ce4.js",
    "revision": "4652e9107eb6c1813256e25c87b733b6"
  },
  {
    "url": "assets/js/app.9b22d45b.js",
    "revision": "1ad761f881e42352ddf5620cae83e18f"
  },
  {
    "url": "cs/net.html",
    "revision": "3faf8d7a9f91a2137d36f8dd000ecab8"
  },
  {
    "url": "cs/patterns.html",
    "revision": "c844c1c7ecc489296fbb8e3f17134f4e"
  },
  {
    "url": "css/animation.html",
    "revision": "3311e65880f01aaef286e30a68b43963"
  },
  {
    "url": "css/basic.html",
    "revision": "6fc81cbbd2a2d07a27aebbc421605c03"
  },
  {
    "url": "guide/index.html",
    "revision": "9cd38437a4bd746725dc8ed45ab4e878"
  },
  {
    "url": "html5/canvas.html",
    "revision": "c9f2211d8f4cb9b37a4f37666d430f72"
  },
  {
    "url": "html5/svg.html",
    "revision": "ae03f89f290990e0026301ed6329902f"
  },
  {
    "url": "index.html",
    "revision": "6611100c47b017056ed7e544a8e87bfc"
  },
  {
    "url": "js/es5/1.html",
    "revision": "82f9e9f069c4422640d10868787ce2e7"
  },
  {
    "url": "js/es5/2.html",
    "revision": "8dbad1b610c96aa79ed8df113ab31af4"
  },
  {
    "url": "js/es5/index.html",
    "revision": "e20cfd429e94436fd8f9648b8e749951"
  },
  {
    "url": "js/es6.html",
    "revision": "f24b351e3977519027aa0bd9b5bbbfcb"
  },
  {
    "url": "js/nodejs.html",
    "revision": "9eceb67bb022d938f55ec39424521d1b"
  },
  {
    "url": "project/regularization.html",
    "revision": "fb44d2311c6d754f69ee70e26d4a789d"
  },
  {
    "url": "project/test.html",
    "revision": "e01052acb9379e9114f569e02eadc1c6"
  },
  {
    "url": "tool/git.html",
    "revision": "5fcec6fe13d30cd3dcd8a1fa1521f926"
  },
  {
    "url": "tool/webpack.html",
    "revision": "58026ee1b1b36551d83bcf5fd6fd50b8"
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
