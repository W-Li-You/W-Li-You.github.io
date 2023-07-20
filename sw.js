/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","50beaed08407a91402a46b82d00acbda"],["/2021/12/05/zi-wo-zong-jie/index.html","3aed24d5132b2efa919aa7b476a54651"],["/2021/12/12/zi-wo-zong-jie-san/index.html","a4f18329284a4e1b2594350e9b653c1a"],["/2021/12/18/zi-wo-zong-jie-si/index.html","63b1530f773bda01cf278ddc176274ae"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","7538bdb2ef9cf229f374aeb788e23879"],["/2022/01/23/han-jia-zong-jie/index.html","281bf14c5ceaff9e3a0f4f09360c5bc6"],["/2022/02/13/han-jia-zong-jie-er/index.html","37577098382238bf2e3a514a33ee6db4"],["/2022/02/20/han-jia-zong-jie-san/index.html","b930e820c3a4bb37ee27ca8ad79a721e"],["/2022/02/26/mei-zhou-zong-jie/index.html","e27b28d9bbb98bc589eef9a45bc2f026"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","12e6328161e3880060fc68c4ba149723"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","42bc9b8ebe92e01400ea7d0ba571167c"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","73289b21587ca72a2c461876de77cafc"],["/2022/03/26/springmvc/index.html","7a3059974e3242970b33446e226499a2"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","027301f9fae40236b186b09ec7346db3"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","cd1316d30326fde932c3d861bb69ac5b"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","2b3cdaf4550af4f3f1ae99d7890ae352"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","4b2e6022634d1d9ad2d9b24d1e476298"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","ce510872ff9c0aca86fc67fc0c9b8d66"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","b818cd515f5efe3f38843de4b13cfe52"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","55bd2b93f2afcbef1803b7ebbbccd5fe"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","deead29128ed0f60172d4b6cb2624419"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","481dd18d3fa5a277633a991cb32fb4db"],["/2022/06/25/redis-chi-jiu-hua/index.html","0fa60145172321fbb7e6f1812bdc51fc"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","e8bf364974f0391cea34c9d0c7dab7dc"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","3161eb46eabb58d80d4c856da7604103"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","df70c22989158339087b3cbe26fcbb11"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","b7999161ef3544ec85f4606560970e21"],["/2022/09/15/mysql-yin-qing/index.html","5fd23071c3e8c6fe710e4fceb561c468"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","8ccee32ef4b7cf9a27d705eefa18c31b"],["/2022/10/14/arraylist/index.html","041ad4f3894018c401bfbd1a451e0800"],["/2022/10/17/linklist/index.html","a54b604ce374d1b1f4e60d239ad3304d"],["/2022/10/19/vector/index.html","9882d17632a373020e09602f21904f57"],["/2022/10/30/mysql-suo-yin/index.html","a73dc501a1c5582f11993df981ba91b1"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","c8a0e9618e04211b1b91eb8c8af5504c"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","bdaf319d63e0c586eccc3bdc2bf5f7fb"],["/2022/11/20/pc-ji-cun-qi/index.html","4408d63480bc1de3a0077b8cace50fdc"],["/2022/11/27/ji-he-mian-shi-ti/index.html","46e3d49b993e4e9d91bf64480be9057e"],["/2022/12/04/ben-zhou-xiao-jie/index.html","bf58ca8c9a00096ff73ae2ef84873e90"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","9326b46435a142971b210ff82f8acaa4"],["/2023/01/15/bei-bao-wen-ti/index.html","e5db7980c9dd2e630c956bb6388edcf5"],["/2023/02/05/easyexcel/index.html","ac3a72fffddec6fe42b4032c6341c6e1"],["/2023/02/19/jvm-mian-shi-ti/index.html","620d69ae36e19473def83e60a2ab3305"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","f453c8e1bd1efeb637e09502cb747147"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","b9ed83d2f07bb4821d0389309be86957"],["/2023/03/11/yang-hui-san-jiao/index.html","737ebba0fd43d9fd212fa4b8ce0dffd6"],["/2023/03/19/he-wei-k/index.html","3b44755f0e3be0e858c3a6b282a050ce"],["/2023/03/26/juc/index.html","87d86961dd378d65df0e3eca41e7515f"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","d5125019996c07682eb82dcce57acba1"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","da34d406a330b65f31bf0422626f9873"],["/about/index.html","8542867f8d1ebe13e987847997e73370"],["/archives/2021/11/index.html","660232cc45313eda6cc755a03ccde146"],["/archives/2021/12/index.html","eca24bbd0d3b12977ce0703740c86b4b"],["/archives/2021/index.html","83b609bd41004c2a1fa543f0ac54cd54"],["/archives/2022/01/index.html","d506efc916be3860a9a0c9dc7d2bcbcf"],["/archives/2022/02/index.html","51a09d52600c67a7f0b966d94c36e459"],["/archives/2022/03/index.html","aebd6b859a3772ff7eb69bbfcc4b573a"],["/archives/2022/04/index.html","310dafd7afb973e4d6f05b912e06f59a"],["/archives/2022/05/index.html","c8ee05aaff3bba6d30627bca0e55c97d"],["/archives/2022/06/index.html","c3fbb5ff1e5cf3ecc02bae0a785ab1a7"],["/archives/2022/07/index.html","b661a7fcaf267d15079b9c25fe4178df"],["/archives/2022/08/index.html","5ae59d32fe6e59f989c81e4644559579"],["/archives/2022/09/index.html","def23a92f26f7a4bacb068dccf19a6f6"],["/archives/2022/10/index.html","857c9409e636fb5f2640c64b5ca32541"],["/archives/2022/11/index.html","69679f98c952b3e6d818a27b91edacf9"],["/archives/2022/12/index.html","c535cc5fc84b7443f1ca47cbe8e03d3f"],["/archives/2022/index.html","dd742dab7101d5afff17679abc50c8c0"],["/archives/2022/page/2/index.html","9a59763ee87bff74108b5f6e80c073f8"],["/archives/2022/page/3/index.html","cbfd94d5506ed183881aa260e5d1d561"],["/archives/2022/page/4/index.html","4abce302741c38fcaded8842f8717098"],["/archives/2023/01/index.html","425992f220d8b453dd34785a8ca394b0"],["/archives/2023/02/index.html","aba27b0f623dc894f58402befee4a438"],["/archives/2023/03/index.html","141a9edab3f20e9ac1b133805cb9d17f"],["/archives/2023/04/index.html","2eb3928ec7e1cc1da5b934f07db9320a"],["/archives/2023/index.html","25d11e4c2eba6d38cc5e453c36c8640e"],["/archives/index.html","ff0f0799b2081d47f6bdff2e8d522ea3"],["/archives/page/2/index.html","53a77312f096b3b346765a4697762921"],["/archives/page/3/index.html","d0363838740e3673d29c23deff763e85"],["/archives/page/4/index.html","0b734389267212f1ab9da3a916f386d7"],["/archives/page/5/index.html","61665e6a23a5db3c70162bd519348daf"],["/bangumis/index.html","a99b5059cea59f596b1220c7a5d3a066"],["/books/index.html","3dba7f6d7c25fa636343c96b8e3bab44"],["/categories/index.html","0925e77c0ddbf9fc10ae02287d48cd1a"],["/categories/个人总结/index.html","15bf39e18b773a7043d5e89706e2e488"],["/categories/学习/index.html","f631fb43f69056fcc1ee7f6a77a9ccc2"],["/categories/学习/page/2/index.html","00db9cb69a2d7cae584897f852a8e2ea"],["/categories/学习/page/3/index.html","afafd6928ad588d3b8ffdad8baf13550"],["/categories/算法/index.html","1e22b5e35c57db310d3e2cee92ba5ddb"],["/categories/面试题/index.html","a1ab2b73fcaba9ed8133fcb7066fa81e"],["/categories/项目/index.html","885a3925a5313f9cf3ccd2777a621f6f"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","bd39d83ccdde67638a3542d843b3e5fb"],["/friends/index.html","f3f8a817720703b0a0cf53fb7ce7c713"],["/gallery/index.html","b91abbc8588c5b9cb82a8835d3dda7eb"],["/index.html","9c586b25ec1516f1741319c14ab913f9"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","3dc6e98dd0b40578b5455c5c35a11ec8"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","04bcba4d2e951053f1013338a5597980"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","48417ac53e53c8a2bda478b5a391ed99"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","d4bb1a1edf43790722124cdf7390464d"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","ba2b578bffbcd4f1ecb72281810531eb"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","204fd20e8853f7254a471ee23af907ef"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/movies/index.html","0ea7faa108bdc9ad44116b739108e635"],["/page/2/index.html","0ad58de9695b561bbdd4c91a05df1461"],["/page/3/index.html","c8697048326b1b330b91a159c5a41850"],["/page/4/index.html","880768fb01ab368ad233635fe3bbd0d7"],["/page/5/index.html","e3d170e9eebfcfae54c83153b7fafdec"],["/sw-register.js","2b779b6e9874581d8f21e57357bc1f1b"],["/tags/JVM/index.html","3477e6df3e524a0d00d12a37a0197ac1"],["/tags/Ps/index.html","a3e740889771139153f6229b9ee909fe"],["/tags/index.html","7512770e209129c922dbf6aa94737ce0"],["/tags/java/index.html","e93c3b8cd379d642dcf331e78f1771c5"],["/tags/java基础/index.html","97d17fafa7ab9d6bb07327a9ca55b8a9"],["/tags/二分查找/index.html","370084e96c8ad62d0502c7bb4dad63d6"],["/tags/假期学习/index.html","22efc7a995a796b1a471d15c3038c4ff"],["/tags/分治法/index.html","a39dd800fdad0a7e92090bc179303253"],["/tags/前端/index.html","5e1be7680529ba4b384a647b306e3861"],["/tags/前缀和/index.html","69307a6cbe8aee6d2155fc86242f368e"],["/tags/回溯法/index.html","6701303e3d40c674eda6ef7c34b669aa"],["/tags/学习/index.html","45dbb0252940d7e85cc8823863ad2dcb"],["/tags/并发/index.html","6e732c06b63ab9ec2b0ce6dec4973be0"],["/tags/数据库/index.html","6d35c74f2d761004f2cfdf6858f62ed5"],["/tags/日常/index.html","b88e9ea96bc8d369d679919372fe3046"],["/tags/树/index.html","7c45a26ed294200e2df54eb37141994d"],["/tags/框架/index.html","562a12b6ee2cdc43c14c257dc1207603"],["/tags/源码/index.html","6e4b3e0b17bbb589b6b22f943fca2cd4"],["/tags/算法/index.html","4f7b2e177540735442af2cdf8d70be6c"],["/tags/问题/index.html","d1844b01a73fc232fcb374971757d04c"],["/tags/集合/index.html","e3d4779ca8b4b849810680ad14cea048"],["/tags/项目/index.html","13f99d79167f488ffbbb992a0209e06c"]];
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
