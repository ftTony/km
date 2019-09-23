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
    "revision": "52942b5874c164f54f7157af75bb39b9"
  },
  {
    "url": "about/contact.png",
    "revision": "b972cae221221d7f92d6063fc1eeecf4"
  },
  {
    "url": "about/index.html",
    "revision": "db7d37a8e54e9ea4d91cf6bfce4f7419"
  },
  {
    "url": "assets/css/0.styles.63e2627a.css",
    "revision": "25c28df916c387a9e4242d393a33da5f"
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
    "url": "assets/js/11.e33561f7.js",
    "revision": "730b2cc83f311176912a2791e36b318a"
  },
  {
    "url": "assets/js/12.4d5c726e.js",
    "revision": "b3dd545b48dce7a53da7f41107bb310a"
  },
  {
    "url": "assets/js/13.5423fb16.js",
    "revision": "0b8b4af8c31fbdd774be9650cd6ef53c"
  },
  {
    "url": "assets/js/14.a11130db.js",
    "revision": "5b86dedaca81f3126f80cb54d2a71e6a"
  },
  {
    "url": "assets/js/15.1a09e37e.js",
    "revision": "f621b0e465b318ed1f81d064110fb63e"
  },
  {
    "url": "assets/js/16.0edb1b4d.js",
    "revision": "744ff17cd6dc2535dcb87085bf1d5075"
  },
  {
    "url": "assets/js/17.55950e0b.js",
    "revision": "01598cc710e7df4b47786a4489e2b69d"
  },
  {
    "url": "assets/js/18.9d9cb82f.js",
    "revision": "ffa24fbe6928f6e8091937c9baf88a36"
  },
  {
    "url": "assets/js/19.b65d0ead.js",
    "revision": "837b5a73849e6ea3c4ee23c28d95b188"
  },
  {
    "url": "assets/js/2.d829aec4.js",
    "revision": "8f0fe5b22fef91463c83636704f5bf48"
  },
  {
    "url": "assets/js/20.5932421e.js",
    "revision": "994a4e07fdbc792f4c0544798cd87509"
  },
  {
    "url": "assets/js/21.be35f789.js",
    "revision": "72e25e410954a4962c127636de56e097"
  },
  {
    "url": "assets/js/22.5a064a39.js",
    "revision": "11b313b50204f93669e06ee29be0b515"
  },
  {
    "url": "assets/js/23.2ed5ca24.js",
    "revision": "b31301b9d99a6ebdfd43969963cdea37"
  },
  {
    "url": "assets/js/24.658acbaf.js",
    "revision": "1738a16720337e9f03805eef21816ef9"
  },
  {
    "url": "assets/js/25.f3c235dc.js",
    "revision": "994901f6197874777161504cdd50c2ea"
  },
  {
    "url": "assets/js/26.e71a8668.js",
    "revision": "eb13351902694367f0f128bb85b64633"
  },
  {
    "url": "assets/js/27.5a31dab0.js",
    "revision": "2b240f63cd8642fb8b792ac94a128c90"
  },
  {
    "url": "assets/js/28.7fb7fca0.js",
    "revision": "27d2b787b6fb771e5802aee04dd10b08"
  },
  {
    "url": "assets/js/29.d2939282.js",
    "revision": "d5fb3fde24e0c5bb5ef583a9b0f8f153"
  },
  {
    "url": "assets/js/3.7b1884f5.js",
    "revision": "1117b51aa44d9798e7949df619615dc9"
  },
  {
    "url": "assets/js/30.3276dab1.js",
    "revision": "b210e6a75e148f87fcdef1d0ced2bb0f"
  },
  {
    "url": "assets/js/31.db912cbc.js",
    "revision": "3c50f1b3bb562f8dd720f73dda4f6c95"
  },
  {
    "url": "assets/js/32.6203a38e.js",
    "revision": "d9e747d9deec9380befd38b4fc2a12d7"
  },
  {
    "url": "assets/js/33.da8500f7.js",
    "revision": "93bbdd1d7cbe33444d91ddc0b1743016"
  },
  {
    "url": "assets/js/4.5ae4fc72.js",
    "revision": "1feb9ee8e62a2e5d22731084759c852f"
  },
  {
    "url": "assets/js/5.348af5f5.js",
    "revision": "91bef36cda4ee74da084e51fbe9ed450"
  },
  {
    "url": "assets/js/6.767d154e.js",
    "revision": "c49a74b9dd1125875e80b927f3e88144"
  },
  {
    "url": "assets/js/7.ab3b3dbf.js",
    "revision": "dfd0f90e53da8a813524abaa7bf7bbbd"
  },
  {
    "url": "assets/js/8.da3e37ab.js",
    "revision": "3742ade85756f9a83c53a0a7b0e8f8af"
  },
  {
    "url": "assets/js/9.6fe3626f.js",
    "revision": "edf3cb319718e59558e02178c3a84346"
  },
  {
    "url": "assets/js/app.50bdcd58.js",
    "revision": "1edf7ca6c46ac211e60863c304ba7823"
  },
  {
    "url": "cs/index.html",
    "revision": "c870850c9f00923b96368f9c2bce52fb"
  },
  {
    "url": "cs/net.html",
    "revision": "448d8259e49f196de9e38180ab5ea34e"
  },
  {
    "url": "cs/patterns.html",
    "revision": "6729d34362c0464177bcc42445d3f637"
  },
  {
    "url": "css/animation.html",
    "revision": "5d245db4e0c18b2590ba6eca7046e600"
  },
  {
    "url": "css/basic.html",
    "revision": "d494687478dc496aab9d4b67e8f27232"
  },
  {
    "url": "css/index.html",
    "revision": "592d6929ce27d167c13267277cdeb73d"
  },
  {
    "url": "hero.jpg",
    "revision": "e95e8491dec29f42c1d3c90884a64ec2"
  },
  {
    "url": "html5/canvas.html",
    "revision": "c3d45f5b54bf65f6b42357ce15b9ea21"
  },
  {
    "url": "html5/index.html",
    "revision": "52b07f73181242336a871a50bc75cc7f"
  },
  {
    "url": "html5/svg.html",
    "revision": "515a7360e2e922cd4b9a24a31d654ab8"
  },
  {
    "url": "index.html",
    "revision": "c2a75b1d995e4b0b7721650838c4a469"
  },
  {
    "url": "interview-question/index.html",
    "revision": "758c1234a650909c0d3b8d3fffd78590"
  },
  {
    "url": "js/array.gif",
    "revision": "9f246c86c6643d7dabaaac7556b64b2d"
  },
  {
    "url": "js/array01.jpg",
    "revision": "3760a437d041018b73ca8e92c99bcb9c"
  },
  {
    "url": "js/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "js/bom.png",
    "revision": "9c51ea85de36112e4a34dbd66708569c"
  },
  {
    "url": "js/browser-deom1-excute-animate.gif",
    "revision": "778d214a75a2a7a0abd63b891d357b4f"
  },
  {
    "url": "js/browser-deom2-excute-animate.gif",
    "revision": "d1ca0d6b13501044a5f74c99becbcd3d"
  },
  {
    "url": "js/clone.png",
    "revision": "9687ab66218c7857a356b5760aca975f"
  },
  {
    "url": "js/clone01.png",
    "revision": "373b5ac4c36df7b1b28170f824cc48b9"
  },
  {
    "url": "js/clone02.png",
    "revision": "a443ff5fda942db1996809b10b39924d"
  },
  {
    "url": "js/ct_js_integer_binary_number18.gif",
    "revision": "108638539b9a7e628c3948985e9d445d"
  },
  {
    "url": "js/ct_js_integer_binary_signed_32bits.gif",
    "revision": "67e00279e9e80ff460ba27a88431ee2c"
  },
  {
    "url": "js/dom.gif",
    "revision": "3f0053c62fe01bd6752591bb76447091"
  },
  {
    "url": "js/dom01.gif",
    "revision": "bd27035211657f094793e6a8356f6616"
  },
  {
    "url": "js/dom02.gif",
    "revision": "f4c4b8d3a641fe0ac4c645a7562589d6"
  },
  {
    "url": "js/dom03.gif",
    "revision": "906efc33aa7dfe8df338ae7aecdc0866"
  },
  {
    "url": "js/es5-prototype.html",
    "revision": "245251c13093a003cffbe0f99b91284d"
  },
  {
    "url": "js/es5-this.html",
    "revision": "8118732f8951671ef6801b3f6018c82c"
  },
  {
    "url": "js/es5-type.html",
    "revision": "fec9390b9fc3fe5dfde16c4f075ecc67"
  },
  {
    "url": "js/es6-let-const.html",
    "revision": "53ef70c5f0b67cc4eca72f88ea3a5f06"
  },
  {
    "url": "js/event.png",
    "revision": "4f8df9a7cd5deff158a29ed509dd6193"
  },
  {
    "url": "js/eventloop.png",
    "revision": "8188022f1a910db866c31688853d3673"
  },
  {
    "url": "js/eventloop01.png",
    "revision": "62234a86892c41b1378faab9778268d1"
  },
  {
    "url": "js/eventloop02.png",
    "revision": "f9e1f9cafc637418f5146a580810ba90"
  },
  {
    "url": "js/eventloop03.png",
    "revision": "a9ff08d7f8c8ffc0eb15040318d2b451"
  },
  {
    "url": "js/eventloop04.png",
    "revision": "1cb4fff9152582319d8101aa1f5bb972"
  },
  {
    "url": "js/eventloop05.jpg",
    "revision": "80f6e345e69b43b125771ce3778a0d3b"
  },
  {
    "url": "js/eventloop05.png",
    "revision": "e90acc24b41fd143638dc2f77d7acdfd"
  },
  {
    "url": "js/eventloop06.png",
    "revision": "c17d9a25b1e28bc3ceedffd0abd26eac"
  },
  {
    "url": "js/eventloop07.png",
    "revision": "d5a49496337df6c7f8d420278820e805"
  },
  {
    "url": "js/eventloop08.png",
    "revision": "3961603ca1b19432647ee415cc4b661c"
  },
  {
    "url": "js/eventloop09.png",
    "revision": "72d26b0eafbba5920e65d380cbf7cdd9"
  },
  {
    "url": "js/eventloop10.png",
    "revision": "336c06ec72c52bac93614a34b9b43221"
  },
  {
    "url": "js/eventloop11.png",
    "revision": "2d2260626fc802f8d13da8e50f73c06b"
  },
  {
    "url": "js/extends01.png",
    "revision": "ef3b0a19185df913dd1827489d2755ce"
  },
  {
    "url": "js/fn.gif",
    "revision": "597b2dab49dfa6f0adbb931c2b74bdbf"
  },
  {
    "url": "js/index.html",
    "revision": "ff234b9709b476ed3a288c858f620397"
  },
  {
    "url": "js/nodejs-deom-excute-animate.gif",
    "revision": "963090bd3b681de3313b4466b234f4f0"
  },
  {
    "url": "js/nodejs.html",
    "revision": "83ea56f9f4e7ca02639b407e5d98e4df"
  },
  {
    "url": "js/precision.png",
    "revision": "7267a58b29892c3b723e3d6c3f73905a"
  },
  {
    "url": "js/precision01.png",
    "revision": "2038480c70ce879e866767be10d74686"
  },
  {
    "url": "js/proto01.png",
    "revision": "b39153146868e9585a6609d7da47595e"
  },
  {
    "url": "js/proto02.png",
    "revision": "4c229d612309d0db6298f5cb2a98013b"
  },
  {
    "url": "js/proto03.png",
    "revision": "30ff3a4431d92979ee34c63ba82ce311"
  },
  {
    "url": "js/proto04.png",
    "revision": "ce84dd122b59cc71ee74965cdd2b7c3b"
  },
  {
    "url": "js/proto05.png",
    "revision": "9ce40276079527eaa90a6f1bb960953a"
  },
  {
    "url": "js/run01.png",
    "revision": "7e86baeca2c5470deb29acae4ce99d38"
  },
  {
    "url": "js/run02.png",
    "revision": "f774237e19ffe9dbae3d2a610e95acf0"
  },
  {
    "url": "js/run03.png",
    "revision": "3faccaea6f5809485ec9ea3d998defc9"
  },
  {
    "url": "js/run04.png",
    "revision": "877a8effd726f4f25101248aba4a8e46"
  },
  {
    "url": "js/run05.png",
    "revision": "5d7abfdb67622fd7783c27ab6b79a07d"
  },
  {
    "url": "js/run06.png",
    "revision": "0b81dd8c32a096f6834ca973d94ba43e"
  },
  {
    "url": "js/run07.png",
    "revision": "41e8181e7fc040b82db98b1f180c7b56"
  },
  {
    "url": "js/run08.png",
    "revision": "53c9d922e11907794d76212e8b59f394"
  },
  {
    "url": "js/run09.png",
    "revision": "638d8adcfa8fdd594ddd4de88a7ca9bd"
  },
  {
    "url": "js/run10.png",
    "revision": "eedb87d647c71dc1e8f86c12a657d085"
  },
  {
    "url": "js/run11.png",
    "revision": "678e74cd73011772aaed4fa1ab9a53b6"
  },
  {
    "url": "js/run12.png",
    "revision": "8838d116612ed1d704766efc7208f620"
  },
  {
    "url": "js/run13.png",
    "revision": "a31e68d99c1377f3c88fdb2eb08b0260"
  },
  {
    "url": "js/run14.png",
    "revision": "8d216e47db242d11374a3093c01a3a3b"
  },
  {
    "url": "js/run15.png",
    "revision": "b48c028915ca521fc8072e8c4fc76820"
  },
  {
    "url": "js/run16.png",
    "revision": "b48c028915ca521fc8072e8c4fc76820"
  },
  {
    "url": "js/run17.png",
    "revision": "df17001ce10ebdcf7199f623f8bb1fcd"
  },
  {
    "url": "js/run18.png",
    "revision": "87d032d433d51a48cbd3993e7cb1ecb3"
  },
  {
    "url": "js/run19.png",
    "revision": "8fee877eea5946741a36d245a704c50a"
  },
  {
    "url": "js/run20.png",
    "revision": "25d4a41e8dcb23f8f13f2bf3a95052aa"
  },
  {
    "url": "js/run21.png",
    "revision": "56aefbd3ba0598b65bdbcef7743ad811"
  },
  {
    "url": "js/run22.png",
    "revision": "3c5731beb6245e22bff432c26afa27a6"
  },
  {
    "url": "js/run23.png",
    "revision": "08708b4d1a727063a580773d1cfd43a7"
  },
  {
    "url": "js/run24.png",
    "revision": "7ad116b26f7a66f81a7c7f1c080821d9"
  },
  {
    "url": "js/run25.png",
    "revision": "df812ce399f322d9149c872ae6f461c0"
  },
  {
    "url": "js/run26.png",
    "revision": "c0adeb34942ad76d7c2e3af2091e4d20"
  },
  {
    "url": "js/run27.png",
    "revision": "2dd7f3e9ecce7419cc12d30e22499551"
  },
  {
    "url": "js/run28.png",
    "revision": "e5189df1c6b20a0cd840aae09e1384c9"
  },
  {
    "url": "js/run29.png",
    "revision": "6c03e338724641e6dd18720b324f5ef9"
  },
  {
    "url": "js/run30.gif",
    "revision": "36b2f3bc79c6022323386b77276629ee"
  },
  {
    "url": "js/run30.png",
    "revision": "781d93e5f50f63c05271acd99f447961"
  },
  {
    "url": "js/scope01.png",
    "revision": "4de8a6cc95de8d4f21082cc88b3f536c"
  },
  {
    "url": "js/scope02.png",
    "revision": "17307bb6eb357841319c4edb3a1bf88a"
  },
  {
    "url": "js/scope03.png",
    "revision": "218007181f76e91f484c70a6e1fc7c7b"
  },
  {
    "url": "js/scope04.png",
    "revision": "c18eb78c58bb075a2030e6b63ca213b7"
  },
  {
    "url": "js/scope05.png",
    "revision": "49065a3ee473f619e7788720bb22ee0c"
  },
  {
    "url": "js/scope06.png",
    "revision": "8279baba95a70c8add42234835026a04"
  },
  {
    "url": "js/scope07.png",
    "revision": "a482433509e45fba8efc426b863fe8b6"
  },
  {
    "url": "js/type.jpg",
    "revision": "555af56e2fa99ab4f70561771fb53bbc"
  },
  {
    "url": "js/v8.png",
    "revision": "eae038e935e38073e17418bd38a38cbe"
  },
  {
    "url": "materials/index.html",
    "revision": "810eb9f15ab0d52d3052a93103ded35b"
  },
  {
    "url": "project/index.html",
    "revision": "10bbba6f61d4b2171338cc92d4b2d360"
  },
  {
    "url": "project/regularization.html",
    "revision": "9fd5581e7b1e4b31c67601551eeffc4f"
  },
  {
    "url": "project/test.html",
    "revision": "32e0549f2ad73e00b432c8968110ba8b"
  },
  {
    "url": "timg.jpg",
    "revision": "a9ec95dca65b20b481af6c89f1c65203"
  },
  {
    "url": "tool/docker.html",
    "revision": "f372885107c067c8f0a101756d2d958f"
  },
  {
    "url": "tool/git.html",
    "revision": "da21ca3e81d39b4b5c6a5effa3200931"
  },
  {
    "url": "tool/index.html",
    "revision": "90c7924e8c499ec558bd7ee25a165908"
  },
  {
    "url": "tool/nginx.html",
    "revision": "3b60c5f991b28fa051d4e970bbb7b1ca"
  },
  {
    "url": "tool/webpack.html",
    "revision": "71f870cfc8119714135ed551b2990d57"
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
