/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","64d0682d6746eaa1419273dbe3504ae8"],["/2021/12/05/zi-wo-zong-jie/index.html","cb835f09d8fa3ca1e42d282e271443fb"],["/2021/12/12/zi-wo-zong-jie-san/index.html","b99fb4d801032f8f2717e9bb40aaf55b"],["/2021/12/18/zi-wo-zong-jie-si/index.html","e3ebcc5092f9e9604855cefbcd949a37"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","59b7cbc517f314517d48017b351d493b"],["/2022/01/23/han-jia-zong-jie/index.html","a32f6d8471cb2d02424fc96154cfb34f"],["/2022/02/13/han-jia-zong-jie-er/index.html","c47ca9e1c48d7e4bbeda6a0ab84e9a1e"],["/2022/02/20/han-jia-zong-jie-san/index.html","ab83eebd186f0f7a9df818597cb65af4"],["/2022/02/26/mei-zhou-zong-jie/index.html","8f752985ea74f614b144d937ad83109d"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","3b65eea7822934cd36a972df3d6d39b4"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","c81f2193fb5d4c5d942e293d736fd198"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","e846f0529b20be56d9e498ca4f47a543"],["/2022/03/26/springmvc/index.html","cf2b5fa4e0ccbe893886469d68e4f43f"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","2cf0daa0abaa5d61e20861960209cfbe"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","699f1af8e46450259d5ce5ad1b696e40"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","ee803dd1a706273a980407d13b493bd0"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","e68cf1be0d439940e77e144d1d234ec3"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","7e823a6a17e34ae755ad2994363c04d1"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","c781b50f61ceff3cba958c0af2e4b2d3"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","aa76ac643910c0c001e20bf64419b3f9"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","25f049f3dbbd4fc3e04e81fe6ee3c01f"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","f215b52efaab9c005dea4139fe0fe6e7"],["/2022/06/25/redis-chi-jiu-hua/index.html","f623fdb002dad0d83a85116e4ad2e2d5"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","e17215b24d89665bb2671ed4854c2348"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","9066d9e936196e53da0ace38abd52d93"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","66968cc8f7222af300be6dac0f6b6bc3"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","32d670f45dccb9b4b02877e571f29474"],["/2022/09/15/mysql-yin-qing/index.html","84800d15e4853b0c6bf50c52a887d21f"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","85109964bf0f56fcc898caeff10314e5"],["/2022/10/14/arraylist/index.html","2ca49b25527cb1685fab2a3fe21bcf57"],["/2022/10/17/linklist/index.html","c1b5d26d96013fd0809777a850ed6462"],["/2022/10/19/vector/index.html","ace77ed40016255246b7cf1c6cd61748"],["/2022/10/30/mysql-suo-yin/index.html","6b4e4947a10488f172894e657d45d7c6"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","2d244299ad2ee362294086937d8fa35b"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","7bf18c41ad13b494c97f3cef2d5c5ec8"],["/2022/11/20/pc-ji-cun-qi/index.html","9457f5cde17fcd3bedb183c346017845"],["/2022/11/27/ji-he-mian-shi-ti/index.html","a7cc1647a4e505381bf3b1ebadb87ca9"],["/2022/12/04/ben-zhou-xiao-jie/index.html","974df69be19b7c0c4bb8fa45abca994e"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","ee44f64550cb9d8814bd0381b5b17cec"],["/2023/01/15/bei-bao-wen-ti/index.html","7a026611ba228d191c11d747d736550b"],["/2023/02/05/easyexcel/index.html","3fee4232ca2cd92405fc3b114866db44"],["/2023/02/19/jvm-mian-shi-ti/index.html","16e8f94e17e2b6841172899aea1e491e"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","15d256d6e4c0372c7401e4a7990b7d79"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","e02c6e22bbb91166a9014f875c665f27"],["/2023/03/11/yang-hui-san-jiao/index.html","1548d0d2d9ca750724418adf3d7032f7"],["/2023/03/19/he-wei-k/index.html","474019db18a213f2550bf90e148ad028"],["/2023/03/26/juc/index.html","ea3acb3785e2f9604100d70281c034e4"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","e134bc4fdbb682b6942f634880389ca4"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","96affb50eba1e436e86d17d40acba64c"],["/about/index.html","dca84a2bef9001717b6be94338c0e2f1"],["/archives/2021/11/index.html","518e94cd23a66ad2966eb9ca4e449d68"],["/archives/2021/12/index.html","3bac75b880308be07fc86ac1facce968"],["/archives/2021/index.html","c08dc634598f2b96cb4366f00688f1a1"],["/archives/2022/01/index.html","d5f29e1c4539d178aabf4a315ca49361"],["/archives/2022/02/index.html","9d91121ff81e73aa80c829f2e7b7956c"],["/archives/2022/03/index.html","a1e462073b2e9472770555c33fcab26b"],["/archives/2022/04/index.html","fa2accbbcd5b0004b5820f32e4015068"],["/archives/2022/05/index.html","d9e91708884817114839a5b1b2e3c639"],["/archives/2022/06/index.html","0ac8146c0e192589fa41c89f54d555e6"],["/archives/2022/07/index.html","753e71e812d1b5e09e9fee20e07571b6"],["/archives/2022/08/index.html","1705171d9a8e0c1573960ca14bab5cab"],["/archives/2022/09/index.html","46700d6eda9657280c4d071a2233150c"],["/archives/2022/10/index.html","5db87a866891a790184712cdff3bf48b"],["/archives/2022/11/index.html","651f35c366312cd386486eef1ea5b41d"],["/archives/2022/12/index.html","f233f76c78e08717f0fc23688981f514"],["/archives/2022/index.html","dac7a15432a2bfa02a6c61703316e26c"],["/archives/2022/page/2/index.html","822ef150376c00d87e3e6c9cad1c0097"],["/archives/2022/page/3/index.html","8864bd094203446c359b04c029c9d9f8"],["/archives/2022/page/4/index.html","dfbc5cac3f9ec06656f4da4f76285c21"],["/archives/2023/01/index.html","ff9d1c82ed0a98fa8ed9d30bc963180d"],["/archives/2023/02/index.html","2f51cf9a58ec353960219d7d36811a13"],["/archives/2023/03/index.html","070d41158339560ad900a181d5d6b1f1"],["/archives/2023/04/index.html","963231b05a39d2a24a62d381156862cf"],["/archives/2023/index.html","561f7a53e8f2edb5838bc29071343155"],["/archives/index.html","71dd2250243f26415de41fc38c8d51a4"],["/archives/page/2/index.html","2dd5971e407ba276c73fde997969b884"],["/archives/page/3/index.html","879eb8fcdb9e4b2d54886b5e9b20b40f"],["/archives/page/4/index.html","0e1dd093797de826895b3771048626e8"],["/archives/page/5/index.html","bf3f835373192bdbcb26ec6dc811065e"],["/bangumis/index.html","e522ea0bf01e13d55ed583a3ec12b4af"],["/books/index.html","e35dd4029f0634fbb0e15adcd82b4a88"],["/categories/index.html","b72ffd9b926f47d579062ebf6d8c3a82"],["/categories/个人总结/index.html","cd24e77edb8b216c992e15a172144479"],["/categories/学习/index.html","1374e0e6c364a25f6b387f0a84acb492"],["/categories/学习/page/2/index.html","df3788d19d98dc71ddc249325b927965"],["/categories/学习/page/3/index.html","d60f14fe7556a73c3c10fa7c07720ac7"],["/categories/算法/index.html","8cb27ed8426c8eb3a71e85c4460fcaa4"],["/categories/面试题/index.html","e156448d499e7b45b7007e4a0b54989e"],["/categories/项目/index.html","2173ba690719ec94027fb5f1cf9cfa36"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","c7fccc94d131f478a8e401790d3dccdc"],["/friends/index.html","c75ea9805d46317b58f7fa3740f012a6"],["/gallery/index.html","48b06c082edf3eff4933e8fcb07e9272"],["/index.html","5f00ed37a8c389cc8f632e9ccab61e88"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","571c5efd964ffd9a59a0f23a5c983a9d"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","22312173fec4a6ecab7d86fc2d1e2919"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","f0a3c7315aaa88326c110516db4c35f2"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","258dec5b8295b3952a392261164aa26e"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","2d08da4b18ce634c1c59e0eb6d0b961d"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","7335a18929cc4bbcb6cdcb730b0916fd"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/movies/index.html","5f08376535fb0a7476a1b3346764b0ff"],["/page/2/index.html","d8ff082bd7e8d74034b9b3d90ee57eed"],["/page/3/index.html","17f79885d5f72ca75e5ea89c891a0408"],["/page/4/index.html","2f1eb63145ad3f0d769e53914b298e7c"],["/page/5/index.html","292cfe8741920c83ea8075c975839942"],["/sw-register.js","d711ad708203ea0d6c1f59da05dffca9"],["/tags/JVM/index.html","51025a19e9d9aeca3504467e9ba031df"],["/tags/Ps/index.html","c4bc41c4ed6a1935f31d6889158cea4e"],["/tags/index.html","6486acdc3d6e763c5326881579bc4d0e"],["/tags/java/index.html","d60981dccc7ef66f6a1580b361b299e9"],["/tags/java基础/index.html","98973a23e8abdf22128bb484a49cf24a"],["/tags/二分查找/index.html","8bfc97d5b63ffc1e68b8dfeea1809142"],["/tags/假期学习/index.html","6e876ba13f7f5c975ff706ed94a8de06"],["/tags/分治法/index.html","0ad0465eb5fa4d7148e20f2cf25b37f0"],["/tags/前端/index.html","7ed07994f802548b361758c92a6a4fe8"],["/tags/前缀和/index.html","a04b13f6b993cfcdb08ed5a3651678ed"],["/tags/回溯法/index.html","0f7400b9a02aca17c6e5000599e1dffb"],["/tags/学习/index.html","df1ca8d00e995f648ddbeb4d4d9cd79c"],["/tags/并发/index.html","ac17f46fece8a69a207f35fc8e258ffc"],["/tags/数据库/index.html","8538d96de22a2c12e729b6d95b36e3e3"],["/tags/日常/index.html","4130fb5e380fa04405063db705b1e96f"],["/tags/树/index.html","e00cae7aaf7b3c12c13b08e5e4aee6f7"],["/tags/框架/index.html","f9edbc0b10c93cdf5b64fa1c5b2a5fe5"],["/tags/源码/index.html","fbba78f37157d38d7d420c3e59c785c7"],["/tags/算法/index.html","68b4b1ec87b5ddc75a8591595a178b16"],["/tags/问题/index.html","7a945d6247f60e738accd38d69085e52"],["/tags/集合/index.html","6662873b27ff4cf03c73f1b83ec233de"],["/tags/项目/index.html","0d4aa8f6a726dff9ddfb04a7e4bba872"]];
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
