/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","c9625f74f27c4ce2b22020879a0066b4"],["/2021/12/05/zi-wo-zong-jie/index.html","a5af360d56e7678e232273f1e550573c"],["/2021/12/12/zi-wo-zong-jie-san/index.html","533ca2fbecc5b462d7ec763d8df7291f"],["/2021/12/18/zi-wo-zong-jie-si/index.html","05fde821592ee8d83fd0ec9c0cff24c8"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","0d78a7121c7a598073cdbc0c27d03985"],["/2022/01/23/han-jia-zong-jie/index.html","b09edf9e9eb1782d383dc957980469b6"],["/2022/02/13/han-jia-zong-jie-er/index.html","6a4a5489d97ddf863d48b47ff79532cd"],["/2022/02/20/han-jia-zong-jie-san/index.html","1e165ea8895d8a4b0834f3445c6a1e2b"],["/2022/02/26/mei-zhou-zong-jie/index.html","c36a3ebbdef33eb0154df12c1ac5f139"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","9244acbb5b35e1cc372aa4be4b657023"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","93228c4d692045efe35c0902814f6686"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","48ca7fb091ab789ec799d93e2b204a2e"],["/2022/03/26/springmvc/index.html","46f3a415b6d1974b42b49a49e9dfd0ad"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","17acc17086cab25725edd919e1b631eb"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","25fb4439d3a862c5a2cdb9d6fecd6a80"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","dab06294bae96b1df6fde59563bafec4"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","9a5b669f9acecb021b714b7503b0f948"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","a9849d6403d83931b4893bebd52257b3"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","e5065ca21b4e9dac82865158941eacd4"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","22157c7ec6cac89a80e2e6e1815614a9"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","2b2f3f5e130c2c9dd1fd559fa18a9627"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","9764162d39596c239a61c61c97760d02"],["/2022/06/25/redis-chi-jiu-hua/index.html","2f0ce73599f6190c6b8f5c4143c8e6e8"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","fe0f9e405a4ef8f299c79267d4a432dd"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","c2d4a818eace2da413a11bde0e19759f"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","39dd582cccddaf036ea2cf3628efbb31"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","a6964e8eb2e1f625b5a14f2bbf61da15"],["/2022/09/15/mysql-yin-qing/index.html","0ab52dd7dabd78af6293bf23f88ef3f7"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","0d6c52384f679c22387d46ccada7aac7"],["/2022/10/14/arraylist/index.html","8e4d218c00a0547d513844ef58ff00e1"],["/2022/10/17/linklist/index.html","ad9cf2d3c6bb4df937f72bb38a70935d"],["/2022/10/19/vector/index.html","68e5f509952569b64ac60a3c33eba91b"],["/2022/10/30/mysql-suo-yin/index.html","d7076469913f219c1aa5f9ee2f92ff22"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","8667d4c8e3b1074bccf04636baf4ae89"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","636d8ead33e66dbfe1428e7dbda3b589"],["/2022/11/20/pc-ji-cun-qi/index.html","c633377cff48c4f722c9c0963cc277c8"],["/2022/11/27/ji-he-mian-shi-ti/index.html","3d3f7a8e96829954a54cedc9f702e25c"],["/2022/12/04/ben-zhou-xiao-jie/index.html","b465c2d354c4b0fb311bf8758290afcf"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","4afedd32bfcff116618fbadd46ac0797"],["/2023/01/15/bei-bao-wen-ti/index.html","e44dd7be7f5468489602d48b7ad810b0"],["/2023/02/05/easyexcel/index.html","28ca156ff63af629851c086922fe2cef"],["/2023/02/19/jvm-mian-shi-ti/index.html","17a7745658991cb8ee436fd611102f21"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","e05b48b7bfaca125baf32b283e7b74e3"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","c67bce8b20153bf3a4baaf0b85bb43cb"],["/2023/03/11/yang-hui-san-jiao/index.html","c35ce65362f0210cd7f1f4c962c0ed35"],["/2023/03/19/he-wei-k/index.html","8b68c960ccaade43492a9afe68696ffa"],["/2023/03/26/juc/index.html","aeb6e6a6802d3a53e85755151f8399c1"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","483d8e487df38c46e675387431063a84"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","89f1903454000d459b4a538d2021b30e"],["/404.html","2f98fc4809fc3d622dc3552361beab47"],["/about/index.html","4044560d19c64bbfcda915b1eeb275c9"],["/archives/2021/11/index.html","75336906a1b88b3e85f51c2b706c7080"],["/archives/2021/12/index.html","8afb0ac3b12c59eed98969ba41e272a9"],["/archives/2021/index.html","82aea9c7eff8a54cedf06d8cca16e0eb"],["/archives/2022/01/index.html","b562298c5372929b982b70f1d4ede7db"],["/archives/2022/02/index.html","4cb8220505cbd8d10755eadb8f4f731c"],["/archives/2022/03/index.html","80989f9e527802d8fa4bef02234995da"],["/archives/2022/04/index.html","f7c223582b5f2a2130d97b1f326685c7"],["/archives/2022/05/index.html","332f8f192332cd5029986fd8bdc9c477"],["/archives/2022/06/index.html","bce7ce18d9a4c8ea18f4b5a910878efc"],["/archives/2022/07/index.html","063dffd496c1075d426984487ae021e8"],["/archives/2022/08/index.html","791ffb6c4b691f0421361782c175317a"],["/archives/2022/09/index.html","e93da69fad9f4536694657861bb6fdcc"],["/archives/2022/10/index.html","cb1ac7309554a65cc5d09176b546b4e8"],["/archives/2022/11/index.html","b569068944213ecb00b985bfc3cee612"],["/archives/2022/12/index.html","8992ecddbf5d706c0dd6ece8e16dbbec"],["/archives/2022/index.html","a558a345e847d2a4f97299c04655ecaa"],["/archives/2022/page/2/index.html","4fda3800dce69ab1dfc2dcacf5b2932e"],["/archives/2022/page/3/index.html","f57bca92387d42141f2271ac66c92c9f"],["/archives/2022/page/4/index.html","6e07f36368694299844dab040deff105"],["/archives/2023/01/index.html","e009fafdf93aaa0ca197a57cd0272803"],["/archives/2023/02/index.html","9acf797238439223cbfbb344fbcff1bb"],["/archives/2023/03/index.html","499150bf2bd84ecaa2afb98667c4b503"],["/archives/2023/04/index.html","3cfce8bc045a55d379924356ee899938"],["/archives/2023/index.html","67690cefa847f23ce84f107314181cf9"],["/archives/index.html","17113679019416fc0dd9b92e57b928f0"],["/archives/page/2/index.html","e3fa3e763009230979a6c4c7e8e522fc"],["/archives/page/3/index.html","2b87416561748ab416f55997b3e8431e"],["/archives/page/4/index.html","b8e32741164154267aba388d3a520cb8"],["/archives/page/5/index.html","17c3f4fdf5f060d4bf85d8ddaff03008"],["/bangumis/index.html","b0b3b8e6d5d1279f1f570e4dd8ff11a1"],["/categories/index.html","9cb5a2b402eafcd9944b6dcf5f3bcd76"],["/categories/个人总结/index.html","4248b1b0dd76ddfa0b817454773aa0c8"],["/categories/学习/index.html","c5e5ee5a20dee3853335d157e6d70a20"],["/categories/学习/page/2/index.html","eebc3845afa574feec4703f2f6115f13"],["/categories/学习/page/3/index.html","2ca98e50cab22d02bc838122083111f5"],["/categories/算法/index.html","900c0b91ab59f0ae1e26029b10ac783c"],["/categories/面试题/index.html","1af8e71b3c611c64deb718798fcfbcac"],["/categories/项目/index.html","1e2df7206f93e5bc9858c86c58c31d3d"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","d36788837fd4bb268c93f636cc2c185f"],["/friends/index.html","0275aefa8eedf8ea8d13b223019c2e5b"],["/gallery/index.html","1ce5e650e7829ded5c68ab94a5b925cc"],["/index.html","cab4d0cbf18cb00be7d300d0dc985db3"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","e5b5e5f93ef30e2c4ffd8d17db7f2434"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","589df72256d9c406265c287cf5243b2a"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","22fe4df971de8de39c86bd33e35a1abd"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","2db4cc9f13dbef7377312fbe59e020fe"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","89b710d3cc1b87eb4308056be206c108"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","f6720b9ffe39fc6e7ada52c47bdf9b16"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","16ba9954eedeb000dceb66fe911ff87b"],["/page/3/index.html","14a8631c7a09a0b5b1a6d87161e14730"],["/page/4/index.html","6af911fecada6a6adfaa82d6c62f778e"],["/page/5/index.html","6e4b7b5476d9dc361154f1be73e7192b"],["/shuoshuo/index.html","5d0e67f6328bbc40c450af50230f9844"],["/sw-register.js","0e7a0afa0e3f26f3a6208e408fcffa8a"],["/tags/JVM/index.html","5b30a241de202e10db528e06801a26e9"],["/tags/Ps/index.html","c1f58e42b0f5c4d6dc8296924e05052e"],["/tags/index.html","47810cf62dda54c583ae890605bb1c17"],["/tags/java/index.html","6e3653320c99e06606a8f628a38a8b74"],["/tags/java基础/index.html","0ca5b6991dc7c46e59341b0bea14e7d7"],["/tags/二分查找/index.html","bbe6c2d0709fce7f4a62d855a0fcb00a"],["/tags/假期学习/index.html","26b347a07b7f0d05ecc87fb722230af6"],["/tags/分治法/index.html","22b3457e796bc57925ae50a0f8e071a3"],["/tags/前端/index.html","0c15623df9e31a0af66fdfc697659c1a"],["/tags/前缀和/index.html","c048f994388c803e856b23cb1259d73f"],["/tags/回溯法/index.html","65a797dd005943f34517e1b6869ed8b7"],["/tags/学习/index.html","8d1adce2a4061d6a6a1c83a31acb0a18"],["/tags/并发/index.html","e45c1907806f8c0f2697bb0be0e02684"],["/tags/数据库/index.html","3a544233ae542d8d9a81bb9ba2974754"],["/tags/日常/index.html","0f1e8cda703bdef5b0a73557a67792fc"],["/tags/树/index.html","36efcb24c6e2afb82321decaf97a753d"],["/tags/框架/index.html","26a506a0d6d1b3a49ce10f6a6084fa27"],["/tags/源码/index.html","6d4794ca91be3c5a45f7825b406e1ee7"],["/tags/算法/index.html","2753dfdfaaf44ff2607419faa3abe9f0"],["/tags/问题/index.html","55a5961642828eb671b532e8d97f4801"],["/tags/集合/index.html","02eebc157e53e7ad87ba32f6aee16ca9"],["/tags/项目/index.html","3c58342b88d72b2004d82bad145c983a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
