/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","834c7619d5ccd411feb24f8af83d863d"],["/2021/12/05/zi-wo-zong-jie/index.html","8d90cec9a595744b9d5f46c9041a9b8d"],["/2021/12/12/zi-wo-zong-jie-san/index.html","c2446fe2d1d2e82f5b26cb3b9c95f6ac"],["/2021/12/18/zi-wo-zong-jie-si/index.html","0d55e20cb5a3c45eb5ae94176918f906"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","c296f6a38b502f4976182b51c12efb66"],["/2022/01/23/han-jia-zong-jie/index.html","f0a380521d2f00b6e7d9434d9aa64696"],["/2022/02/13/han-jia-zong-jie-er/index.html","7ee4c3bab39c56a8a8f2a70246cdac15"],["/2022/02/20/han-jia-zong-jie-san/index.html","0ca7fbf8d6a80052011c87466323c9df"],["/2022/02/26/mei-zhou-zong-jie/index.html","cc03e0fc1ffac4dfe02963ebf5cd2ac8"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","39f018797b59e3998fca3a2bec1e3ef6"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","aac128aecd3f7957a7880c0bdee5fdfb"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","0a7dca2f046dfca8808e2e7f61a60423"],["/2022/03/26/springmvc/index.html","6a26b6cb9b72388e610f66ad19c0ab56"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","0a4a67128395639465af83d0f052f964"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","1d126fed6a416ae6d9177d338a49628b"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","3caef12582526ba1b857c75d57ec70db"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","c016b1ed85df213805ec7f9ccae3de23"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","69ebd9c0bda0905af7bd381347442d81"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","3033cf20c62edaa990cda940401c5256"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","4057020bbad44dc5e50beac6c20bab0c"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","d2d51e543813b9b83ea0eaedd88f65a7"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","346d0d3465c119624975f8df2dee5d82"],["/2022/06/25/redis-chi-jiu-hua/index.html","b8f6bb6fb4e7faf9e398d44ef08fbbba"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","dcb1a98d3e09ac7ca300b578efb2d316"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","d484d7eb679160afff0097b8f68bbab2"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","4e2148d06fa8ef5a3b6427b5155e80e2"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","3ff0d37c675368f8b9c1d672f39e1c9a"],["/2022/09/15/mysql-yin-qing/index.html","f392361477e228f52dfd3d9ffe9c1a57"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","14362f2d1e1187141cc975643c5cd92f"],["/2022/10/14/arraylist/index.html","59b79b7a58980d53dc517797e622f1a8"],["/2022/10/17/linklist/index.html","38d05180a7a413fbd4e897cda27ac715"],["/2022/10/19/vector/index.html","b2c51b01c6c1ce1785114a9d2252c489"],["/2022/10/30/mysql-suo-yin/index.html","77676ff11f94cdb5cc89a44dde904a68"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","a849b25a38efd3d7d7808201bb9b9979"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","6c00157ca63efe0f6a5ee644ee33abcc"],["/2022/11/20/pc-ji-cun-qi/index.html","44a26a52019619f41967209e2489a2de"],["/2022/11/27/ji-he-mian-shi-ti/index.html","ef71f48f4755c6ab6122cd1686eee390"],["/2022/12/04/ben-zhou-xiao-jie/index.html","16f3c7adae42c41249fca50c04906be2"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","a9c93a6471b4359d2b7b2d184e5431eb"],["/2023/01/15/bei-bao-wen-ti/index.html","94dd345032bfa49ab383846c1f068e6a"],["/2023/02/05/easyexcel/index.html","35b46c9edc230567014f60bdd15f8129"],["/2023/02/19/jvm-mian-shi-ti/index.html","5460bfdd89a27dcb9ca2cfaeec0601a9"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","02f6835f624760df3aa2f3dc26fd8078"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","07c9b2b954d3da4226094b97218b8851"],["/2023/03/11/yang-hui-san-jiao/index.html","cc5650f7f2f8c178a480f40b1716f456"],["/2023/03/19/he-wei-k/index.html","857e7005a833ba420b54b011cf248e08"],["/2023/03/26/juc/index.html","9dfa7f23d16f5c8f824ca97c8094c98f"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","975e0314a8343fc6e0fd9d7f975e2729"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","1f58b15e7e245b78028d4508a4932c48"],["/about/index.html","8449095c5b116ba8a8da02c591837bc2"],["/archives/2021/11/index.html","7ee710699f920f75ccb1c9b16a7548ca"],["/archives/2021/12/index.html","893d639a1951e8bc5eca520be416bb1c"],["/archives/2021/index.html","5251b0d729f4c3dd03438f73e7969c06"],["/archives/2022/01/index.html","2cd10e9387c088cf53cd4f2e901a4524"],["/archives/2022/02/index.html","30e1bff530b51800ac88acfe94c6f2cc"],["/archives/2022/03/index.html","319a48dffe0fc7a3a14d7a9942280512"],["/archives/2022/04/index.html","5281e3d33a3dac30564dba46495ed79a"],["/archives/2022/05/index.html","4c2f8d1e5881e24dc397810db865aa25"],["/archives/2022/06/index.html","a7ad03aa363f96ef70d883b0ee921068"],["/archives/2022/07/index.html","936378ef93385bb09e91758871dfe534"],["/archives/2022/08/index.html","50395d75b7f6da7afdcdf65ba5024f8f"],["/archives/2022/09/index.html","1ca5a60edcc1e5a1331d241cc1f28844"],["/archives/2022/10/index.html","fa3061efa4e868d14426639aec910a3c"],["/archives/2022/11/index.html","92cbf396e9708b9a287013db12461d0d"],["/archives/2022/12/index.html","a86541e2c6bb78ce97f6f657cc706d7b"],["/archives/2022/index.html","5bd398f89001de6a0d59385f79e652d9"],["/archives/2022/page/2/index.html","0c8c681d01e20cbe2f759499c2a0dbaf"],["/archives/2022/page/3/index.html","d990491233c491f751cb7ebff193dea8"],["/archives/2022/page/4/index.html","97c9e30be49deb602a1cbcdeeb8f455f"],["/archives/2023/01/index.html","00dc87ae99632d81335a31e9db1a1793"],["/archives/2023/02/index.html","e03c4438a09c00645b1c48acb5419caf"],["/archives/2023/03/index.html","abc7ba6dc6e8568af599251dcd5d73a5"],["/archives/2023/04/index.html","deb7abaf30bc86c13d5bb5197d021537"],["/archives/2023/index.html","163c4d759e9c355c52736a0880b439de"],["/archives/index.html","f0fc1c1341c05c1a8f07ed13707cf268"],["/archives/page/2/index.html","a029a5b5cd68e8bbf462e0fd8e96a435"],["/archives/page/3/index.html","4c575333d1e36b5a2605e32e3bf4c38f"],["/archives/page/4/index.html","e3162aa5c94d3b0ce09a9f3915619f4f"],["/archives/page/5/index.html","dd6ce4a1d9baa61b93dbe5af44b1ac0d"],["/bangumis/index.html","5280a6c6bbe1f59e269c83cd234fa665"],["/books/index.html","a683420d4cb0e57a8c4dc1fa2b1dc33c"],["/categories/index.html","34bdda795d0df5fe931004bfedce3151"],["/categories/个人总结/index.html","1f976c54c366dfc0b73afd53e27cef03"],["/categories/学习/index.html","4b45ee9e2d0b12dedbdd3e2878fded5d"],["/categories/学习/page/2/index.html","70ed4d56817a48706c9f8f6f16b3e2a8"],["/categories/学习/page/3/index.html","06d1ffb4d3b9e9a6dc84b04704aee1ea"],["/categories/算法/index.html","bff316efa613aee2946ff721cf06ce44"],["/categories/面试题/index.html","9c82ec3a51bf19d25f3c7e451a01fb62"],["/categories/项目/index.html","6a01a691472468416cccf976c0e144b0"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","103f2bde81dbf0270a54c22d85c20592"],["/friends/index.html","04e7916573b070b615c52a09328ccfcb"],["/gallery/index.html","734ac85df001e73c29208eb125c71999"],["/index.html","6e8ba14594beb555b7afbc8196dcc468"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","b04add62f3bfb921b2f04fa869b7c545"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","f1371b7968cd2d02bdec0f61992e2872"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","8a8500909d1baeb9f7a1da109147ad6b"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","9f3b34dd298b2bc4c441fef35c5955bf"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","269387065b8027f3ee5ac64ae0f533e9"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","f2b05a565d933d9bd6e7e4bc23dc3cd7"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/movies/index.html","73404f69c2b36daad93841b880fbe4ee"],["/page/2/index.html","0c5b48a1612f194f87a9c0f96e255c0b"],["/page/3/index.html","04593050043327e954c66ac337897f20"],["/page/4/index.html","0ca60a2f8f096b2c5afe89aedd486f4b"],["/page/5/index.html","80cfd277349ad6cec0e0d7761391f5e3"],["/sw-register.js","a061924179b85b597c1696ee17d83784"],["/tags/JVM/index.html","b74e7ec7a5dc035c81f7a26349c4aa2d"],["/tags/Ps/index.html","3d111974c74a0673dfe1c7a27a278695"],["/tags/index.html","1a585fcf77dc90cfdfc83dae770d305b"],["/tags/java/index.html","099980f2d99ab5bd4fd89a9979823a4b"],["/tags/java基础/index.html","e002cd4ae1c81042013a60fb1b421632"],["/tags/二分查找/index.html","ab1aae4a2dbde0d5f2ca6fe00ad663e8"],["/tags/假期学习/index.html","1645a807ef613f0385ed7892f71a9b61"],["/tags/分治法/index.html","d58aeb55584a7c5f34bdca93dcd4d60b"],["/tags/前端/index.html","1a78f005ccc49e90adc6f06f1012cc68"],["/tags/前缀和/index.html","cc69e918f3d6a9abf9694d49d20116f2"],["/tags/回溯法/index.html","ff5a83f085809bc26ff3335f36bb5a8d"],["/tags/学习/index.html","5c1cfb5420eba99fcc3938ee01ed78d7"],["/tags/并发/index.html","f94260f7d5bb3ba2f15b806a2ef21388"],["/tags/数据库/index.html","9f82f5df2067f893df76acb93d26822b"],["/tags/日常/index.html","05b38fb326e79b55d6086d73448b29dd"],["/tags/树/index.html","2a739a53efaea72a6730c37c0e9afeb7"],["/tags/框架/index.html","f531a85da897f00b4210fbab252cd577"],["/tags/源码/index.html","7328c8f502b604ad567f83fbd76e0d93"],["/tags/算法/index.html","a281547999155b3ba7129ceb9fc71d9a"],["/tags/问题/index.html","3b95810ce0a181288751371ac02e10d3"],["/tags/集合/index.html","b4ace02dc8e4a05486810b3ea4b4fbe2"],["/tags/项目/index.html","16d72e68a910069cd08ac66511382947"]];
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
