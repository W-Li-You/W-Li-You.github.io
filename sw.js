/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","9e791a565aa20ce945aae67bcd37fd0e"],["/2021/12/05/zi-wo-zong-jie/index.html","f23022d57267659280edfbd42902ba45"],["/2021/12/12/zi-wo-zong-jie-san/index.html","16b883d1c6e8e526d8f3e2b03444dcda"],["/2021/12/18/zi-wo-zong-jie-si/index.html","8a8b3d66371ff83729484b3c875a97cc"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","9e5b758e333a3694c3dd5da14d9362f0"],["/2022/01/23/han-jia-zong-jie/index.html","112439135ff47c1680ca367ea506303f"],["/2022/02/13/han-jia-zong-jie-er/index.html","98b107a8f887375c14408683eaa8b3f3"],["/2022/02/20/han-jia-zong-jie-san/index.html","7053ff986a90af80727b27cc4bb7e6e4"],["/2022/02/26/mei-zhou-zong-jie/index.html","6ebca8133f918a7f32d185e53338f984"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","de8f7a251047ee7e06e4caae877abfd6"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","878605ac92b687c59c7fd6d08d4a96ef"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","f20de3e985a79d2aace328acf4809d91"],["/2022/03/26/springmvc/index.html","46ebc3feeab719b435153cc6e95e4a5c"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","e4041c4d012a6846f5a6e76cdeba6099"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","4f13d4ed4f3fef6f30294ffaec86b6db"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","487e287ebb7b61de8b66e21642e43833"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","c9d83d78283a8a607aea8db2dfbd9a6f"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","0a49b759769313b4dbe53477ac6206b0"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","09ea9ce45e243e75fb46bb465ce253d5"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","5044a4c8f512a1148820dd49647bac91"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","c58c41531680efc59709a907561b1a2e"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","a90ca05f668c4d4f0a523d32fb79c087"],["/2022/06/25/redis-chi-jiu-hua/index.html","3e1a21ad09df5e16216ccdbe224bf7db"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","7302d75383208e346de647ebbd9f5a18"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","b05cba32c726bdc81b0cf9f45d9983bd"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","c3e1d3265060b5a243db86e303af854b"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","c307615dfe3a722eec15bb2d1145220f"],["/2022/09/15/mysql-yin-qing/index.html","6b02d7242e3a5d731bb77c869beb7397"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","7aa11cbebe0d3c05601976ab866987f3"],["/2022/10/14/arraylist/index.html","ffa3ff25709968d5f0ffe6175aa195e8"],["/2022/10/17/linklist/index.html","0468af8300552930abe0b03decba4829"],["/2022/10/19/vector/index.html","f5dc8c189c64949a8a43d84c371b603b"],["/2022/10/30/mysql-suo-yin/index.html","e4c418752c31331f7f51ada5edacaf44"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","65c3920db562a5961f4c308d42545c05"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","240f358e4af14d84b59383aea9bdb7d3"],["/2022/11/20/pc-ji-cun-qi/index.html","6041c4b1278507b9de83389e357d92cf"],["/2022/11/27/ji-he-mian-shi-ti/index.html","6ed96f277e137b7d0861dd48dabc285f"],["/2022/12/04/ben-zhou-xiao-jie/index.html","20ec57be47320958e87718e7e095bf08"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","2c7f03f39340d66793f1fe3676e2b7e1"],["/2023/01/15/bei-bao-wen-ti/index.html","d2228cf2c1a1ec64c81c588b471d67f5"],["/2023/02/05/easyexcel/index.html","e186fbee50bb824bf3c8fc9e63bc48cc"],["/2023/02/19/jvm-mian-shi-ti/index.html","bd7fb6f65a17b86d5351a4450f3b15d8"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","a163f2ae1ede9e2d248e727f2818c742"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","82b51911189485e8417272a3160960c8"],["/2023/03/11/yang-hui-san-jiao/index.html","201236f4e15600bbfcf247a925576ede"],["/2023/03/19/he-wei-k/index.html","4560ba0bca70f0ab4d7f479b732c3f73"],["/2023/03/26/juc/index.html","76abdc9679e6100366f9407dde62abd0"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","44004282ea910379b5638a21ef8b1ad4"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","3e0e10f8da52481f203ca19bbed913b9"],["/about/index.html","a99a2fed17a026f005fb5e6068e62fe8"],["/archives/2021/11/index.html","c003319735a22d9bf5315b986ca19604"],["/archives/2021/12/index.html","c07bb19b1765cf13d71cb1db82be5f0a"],["/archives/2021/index.html","99c58934cc73ee334341a4e004a1144e"],["/archives/2022/01/index.html","02254a920e480875a7fc86e165581a90"],["/archives/2022/02/index.html","03e55405c7694592e6f31505241472d2"],["/archives/2022/03/index.html","54e4ce0a8ddbcc9c5e3d93c7eb425c73"],["/archives/2022/04/index.html","8054c855d59ce0ec277e7b80ec6efa82"],["/archives/2022/05/index.html","6b92f14340e60d7f8b11a20a9073c8a4"],["/archives/2022/06/index.html","1091a255a058c686cb4e973cc950fdaa"],["/archives/2022/07/index.html","1a0ad9cba1f7b380ce94feb7a91a9e18"],["/archives/2022/08/index.html","ba0349a256f76338b9dbbf269827bc4b"],["/archives/2022/09/index.html","449daa01e24d28a13e5e128f694f87da"],["/archives/2022/10/index.html","2ecec6c743a5ba027fea9986fbea4447"],["/archives/2022/11/index.html","13ed3bbad6814c45103ffa67d4a83827"],["/archives/2022/12/index.html","6a0015dec61b84e3dff2879908986c2c"],["/archives/2022/index.html","fcf840d93ced093a74385e2ee7147c76"],["/archives/2022/page/2/index.html","94b9ff2b2e0af63ffb7f2ab02908b733"],["/archives/2022/page/3/index.html","486c1811a6886af2bb440ea3096b6499"],["/archives/2022/page/4/index.html","e95c1f62e8e4fc586349bc12704f7524"],["/archives/2023/01/index.html","1d23aaffa36e5cf3102af10c0e133b62"],["/archives/2023/02/index.html","9a718d8c600744862c387c1f9fdb4193"],["/archives/2023/03/index.html","12ebcf94528b35a0874f537e03f7511e"],["/archives/2023/04/index.html","0757286b8be6cc1387f045d493d90d10"],["/archives/2023/index.html","ea5843b366df3a9917bb3d62f18b5508"],["/archives/index.html","500b9593e7c7987c399b5ada5fc799ff"],["/archives/page/2/index.html","a19d721fc4ff9cdeba586bac8c948776"],["/archives/page/3/index.html","a605090abcdeb70dc096e5659f24b056"],["/archives/page/4/index.html","1841e2c1cf1bf18dc31b0ba102e05fbd"],["/archives/page/5/index.html","feed882901f4a932fcacdb66b90f9ed4"],["/bangumis/index.html","71b4bb6f668d8bbeee6fafa644ebd324"],["/categories/index.html","b14b78f6a03cf5af31157966033abaa1"],["/categories/个人总结/index.html","a5aebde042fb18be7f76d68216439eb7"],["/categories/学习/index.html","8ccaf36e7ff60e26e43d18f62ceddfa5"],["/categories/学习/page/2/index.html","6250c9746725f90d3c6ea0c71f73dbc8"],["/categories/学习/page/3/index.html","e1f1cf066d10a38998dfba61ea465740"],["/categories/算法/index.html","42228ddaaf9532a1c62a4f5341a5c89b"],["/categories/面试题/index.html","75a838eaa74b634b7b084ebbef690b69"],["/categories/项目/index.html","7f635782e87254a2c9cb1afe705ecc0d"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","a7ea8beb7da83c9c6c4dcdb5c288d818"],["/friends/index.html","890fb704d36dbb15fa1a5db16a86fd66"],["/index.html","5eb67d231fdedbc3f2608e4d3384a352"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","0dee33b07cdd2a2f5e1830dec3d48b0f"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","d943629d456f2be71d3cc1086a703589"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","f2dbc54b87ff451c67002398ed15b30f"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","cf96219cf443f5e805ac1906f7a21b5e"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","762b0a7537629a6ad4962430c03f19fd"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","4ea6156124daf42cd05fbfe4c696ad8a"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","5ac60e98f1ea342cbdec8475b23bba47"],["/page/3/index.html","63b4c2be719624a4cb241c7361e14deb"],["/page/4/index.html","9e14cbf9bdf677f69d40307ddcc15250"],["/page/5/index.html","6a4654e6c2a7349b6bf5fb69119bcc5c"],["/sw-register.js","2c3c3f3e25d24307404727f667a44210"],["/tags/JVM/index.html","13597368da7b09ebe17f0dcd304bfda6"],["/tags/Ps/index.html","35123db7ef3cc9a935dcb91f774deaf2"],["/tags/index.html","cbf775aedb564705a2a872fb1bf2b2d8"],["/tags/java/index.html","f52d86846a5baa54523ff003a1360f40"],["/tags/java基础/index.html","641052184260f13b81bfde2b867017fd"],["/tags/二分查找/index.html","08663f60c1796ba35c8e66813ed017a4"],["/tags/假期学习/index.html","a21201b8ec1af36554804110ffb2b381"],["/tags/分治法/index.html","3a68e83c647f645525cd69e369bcce8f"],["/tags/前端/index.html","5fa508a8f9795b3f6521b4045795436d"],["/tags/前缀和/index.html","9e149249e8091ba7fed857a721aa828f"],["/tags/回溯法/index.html","1987f818a4e81b27d60046d42eb5a7ec"],["/tags/学习/index.html","101cb5c674e800d01e2ccec0c43f918a"],["/tags/并发/index.html","618eb707f377964d5a39a2e9a5c97fec"],["/tags/数据库/index.html","68189edca24ebfe750b050bce67482d4"],["/tags/日常/index.html","98757b8d963d966445a5d6ba1c9b7358"],["/tags/树/index.html","f013949ba59855549bf02313524dc0b9"],["/tags/框架/index.html","6b29ea423b94cc906f86247bbabbea69"],["/tags/源码/index.html","460ffdf2614325810e86e59cb54d263d"],["/tags/算法/index.html","ce1c954291f0a21664bb4cb8ca484fd0"],["/tags/问题/index.html","fb33ff2e5d6ad5526a86189669d363cd"],["/tags/集合/index.html","4e602e687a5e952573d9a4762f37024a"],["/tags/项目/index.html","d003dca1fb935ca4d5f12d25f1fe59b2"]];
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
