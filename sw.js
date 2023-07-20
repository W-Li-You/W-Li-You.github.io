/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","b44a3af06e177f6466e5d5b046717e26"],["/2021/12/05/zi-wo-zong-jie/index.html","eef01be2f8f35288b43c5d394ea8b424"],["/2021/12/12/zi-wo-zong-jie-san/index.html","2916c82af3a098c27bb831c8b3ebc2eb"],["/2021/12/18/zi-wo-zong-jie-si/index.html","9192b85bf5624210a3f02a8a84c42354"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","31564af323105845c3a8f73648e1f139"],["/2022/01/23/han-jia-zong-jie/index.html","62b313bcf0d4eee02e47782d7d10e5ed"],["/2022/02/13/han-jia-zong-jie-er/index.html","1b75bf3e6d5cec1207ddd36848f39511"],["/2022/02/20/han-jia-zong-jie-san/index.html","48266308e5d4daf3af7e4983e99ff2c6"],["/2022/02/26/mei-zhou-zong-jie/index.html","7b9f3ccdd81af1a9eb6b5959f253d939"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","8e3382d253bd339900e26d53d40ac531"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","30ef64681b23826ac4ce859f1933321a"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","e5aef22155056b9d98594b1765bb99e4"],["/2022/03/26/springmvc/index.html","5811eb58faa77ceab1acf565d48f53e1"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","bf220e6482aedff73c33a5ddfd9f7bc8"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","d873705ffba394ed65b5ec1f58046265"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","4dd972b981eb4a216c82936307922002"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","9cd042085b4b8397a0a7b2d10744e4d7"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","2eb11acbbd5b164bd38f9bb719f505e4"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","fef26b11fdb58d3fe7ea670740210ae6"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","f31e07a00fb7b779598efd3f791ee5a4"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","734698fa7de57d23f402feaf6cd427d4"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","243df36ec963ab5d2990086cbc52613b"],["/2022/06/25/redis-chi-jiu-hua/index.html","4efe0fa0044281270ece9bc89a0a89cf"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","af073a6b86206c4b190e880f6a839ec5"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","0d3f1702204ccd9f22376a022138136d"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","2dd54c6f67062d130f28bc231e8aabb2"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","0ffe726620a56e559f079ae2a35e19e5"],["/2022/09/15/mysql-yin-qing/index.html","6f917b3012e3ab7d63020d922ba5480b"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","e92b952eb9beb6d006953672f2604ab5"],["/2022/10/14/arraylist/index.html","ac8a4c33f5f31eb5f464856c87048164"],["/2022/10/17/linklist/index.html","6b780d5718d25b2033fc4bbcaa4d7f7e"],["/2022/10/19/vector/index.html","f0e486599fed8dc054eddfe6afa6ec59"],["/2022/10/30/mysql-suo-yin/index.html","3fcb69cab849b419c5486fdd121c2bbe"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","bcb96a7c63e5d0fc9188c2d1773a967e"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","66e1493977b49ca9da2635dcc7590a54"],["/2022/11/20/pc-ji-cun-qi/index.html","35aa051cbf5cc59c48cfc8660868e9bb"],["/2022/11/27/ji-he-mian-shi-ti/index.html","01c2c5512e0ab3a67f8de8edf0db14b2"],["/2022/12/04/ben-zhou-xiao-jie/index.html","b9f61b523fa6abb9b4e197f251640538"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","8d944926782bbf46f93456c1d741a7eb"],["/2023/01/15/bei-bao-wen-ti/index.html","ce20d524ef34cfa0c84e72cc411ee72d"],["/2023/02/05/easyexcel/index.html","522d5694494c9d531796dd98bc459da0"],["/2023/02/19/jvm-mian-shi-ti/index.html","728b43b300df45b49c0e0e56386c8aa4"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","e70a3aff0a2a1f98270a7d36a1c5b4ef"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","d9355b8de3177c2c113e10241c6db597"],["/2023/03/11/yang-hui-san-jiao/index.html","e7b7bc113d70d19309eb8cd7e9908fed"],["/2023/03/19/he-wei-k/index.html","13bd63e688023a850b7033e59a71513b"],["/2023/03/26/juc/index.html","07130967ce3598df8388fbff7c90a7d9"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","7559d8ebd2bfbc9fb9850dfe30949181"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","db5011b8e84844b75db64020514d38f5"],["/about/index.html","a02bee46ce6caff0408076b47034b318"],["/archives/2021/11/index.html","ee015eecc9ee73cba1386dcbe7f2640e"],["/archives/2021/12/index.html","e7315bf62b2f4fd015aae85bb40020f0"],["/archives/2021/index.html","193d8a958582c6ca476d9985a9d79783"],["/archives/2022/01/index.html","d1883bea6fad06cc165356fcf45f7fd0"],["/archives/2022/02/index.html","4aca7aab19f30f617b6f2d47c2294944"],["/archives/2022/03/index.html","6791972234a5c15b02f9a639e14e5355"],["/archives/2022/04/index.html","6ad59eb02b92d2dbc026f15710b847a2"],["/archives/2022/05/index.html","b0ad48ba1e497468737ec36e7da56b04"],["/archives/2022/06/index.html","362f41d85f8a4eef1fefe522d9ae207a"],["/archives/2022/07/index.html","d4114819824c2132648e9e3302017bba"],["/archives/2022/08/index.html","b0bff163c88385ab404737a78cd49230"],["/archives/2022/09/index.html","c3b82e7796f681aa4b9c2250292c0166"],["/archives/2022/10/index.html","5fc4031ffa2fc47bb83812e5acb0343a"],["/archives/2022/11/index.html","0b7ecd3512d02db221630204473c5234"],["/archives/2022/12/index.html","4595f64c3e515a2acd0f35b0c5d25d6f"],["/archives/2022/index.html","b5badafabac8c7ef9dc9c9ebfef53e60"],["/archives/2022/page/2/index.html","e8787aa4e55c28587f4a631a2d869a44"],["/archives/2022/page/3/index.html","1426b41204ea0d3d2480e48eeb9d9ad3"],["/archives/2022/page/4/index.html","bb3210c508e079370cb760a48884662b"],["/archives/2023/01/index.html","c6f47185c40cfeb988fc1b0ab2f56c2a"],["/archives/2023/02/index.html","dca5a4483d39d1dd56e04eee62f9366a"],["/archives/2023/03/index.html","7b5f1a85ce6b3ab67d2b46bb78b7e332"],["/archives/2023/04/index.html","2b5eb26f32384607a268d3a0159b75e5"],["/archives/2023/index.html","b53e5068fcffe97fa0b349a79464eaf2"],["/archives/index.html","4ae1fbb2cf9888ef2d39642c075c9d1b"],["/archives/page/2/index.html","ec087adf7abc04cb740afdb0cb4e56a7"],["/archives/page/3/index.html","bba4f243f131d9f0b7bc6b516d5af737"],["/archives/page/4/index.html","c6b64da2a30cba7f0bd13cc1b46c23a8"],["/archives/page/5/index.html","2739492e18048ef3fe8e676adf0e8873"],["/bangumis/index.html","b402fdc80611daa906f0a6288189b748"],["/categories/index.html","8196cef3835a2eadd4b44edb5495f5ca"],["/categories/个人总结/index.html","0d2ca069260bfdf963b3dfb70f425c46"],["/categories/学习/index.html","6602a8f2eacf74a9826f562dd3987276"],["/categories/学习/page/2/index.html","54011ab2565805e7df06ee6c06dcc715"],["/categories/学习/page/3/index.html","78f0e8cdfed6d898e1b75f1a2e8b4f78"],["/categories/算法/index.html","a3a48cb16266fab8b16da67757ee13d7"],["/categories/面试题/index.html","2041d6ff2e881d652960bc82566ce8d9"],["/categories/项目/index.html","9d2586a26b9a401ac6ad46bf547950a8"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","a7ea8beb7da83c9c6c4dcdb5c288d818"],["/friends/index.html","13eddbc88cbd983b4ff561bd816e6476"],["/index.html","fb7351d30da37bbf5570b32949184bd6"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","0dee33b07cdd2a2f5e1830dec3d48b0f"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","d943629d456f2be71d3cc1086a703589"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","f2dbc54b87ff451c67002398ed15b30f"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","cf96219cf443f5e805ac1906f7a21b5e"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","762b0a7537629a6ad4962430c03f19fd"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","4ea6156124daf42cd05fbfe4c696ad8a"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","5649c8db3bccbdfe63d9cdba9650b122"],["/page/3/index.html","fc177878eeb44f4b464d7bf453dbb326"],["/page/4/index.html","6800147eaac32a113dff2310136a05e5"],["/page/5/index.html","d8bca225cc17568145ca49d7ea93678e"],["/sw-register.js","6e5eafbb605ec8dbdd77792ad31b039f"],["/tags/JVM/index.html","fdf8f22cb9557e73e4c7ada7b530fdad"],["/tags/Ps/index.html","1a92c81de671e608f3501e5425f7af97"],["/tags/index.html","6e2c98a219a6c27f487ba8d3b1b44d8c"],["/tags/java/index.html","7b1d4f4d5d35554366751eda5de8e596"],["/tags/java基础/index.html","c64a9966b101109b57a16a582c6fe06f"],["/tags/二分查找/index.html","feb6322a5a32446a2405fde35a06fd5e"],["/tags/假期学习/index.html","556f345ba16aa7aa2ac8cdb8db27482c"],["/tags/分治法/index.html","e854125452dec7bed686836784421e02"],["/tags/前端/index.html","cfa41dc2635026ff4c805ffe59b907d5"],["/tags/前缀和/index.html","34d8bef08514e27c6ed78d9b3fb5d42a"],["/tags/回溯法/index.html","9124d589b2ec4d45602056e173c8e7df"],["/tags/学习/index.html","d7018ae37d77dff956cdb810ed7b5b3d"],["/tags/并发/index.html","a6e9415a07d9201f784769e51dcbe221"],["/tags/数据库/index.html","e193c91a8ffa68173cacb3401d797feb"],["/tags/日常/index.html","1b6c553f1b82b708d1460b4a6ed64d5a"],["/tags/树/index.html","9313c2b8f2f2548272168c383b284223"],["/tags/框架/index.html","ddb991864620a66b24460bdf20d3ec1f"],["/tags/源码/index.html","09baa966ad3b0849021b288d1884a715"],["/tags/算法/index.html","5aad8a43b4000aaee88c53004b5f4dcf"],["/tags/问题/index.html","4c49171716e0fe298ab24dddb96ca1b1"],["/tags/集合/index.html","fd448943fd3fac763f0612b32313e8bd"],["/tags/项目/index.html","987839fabc35d8cf88f11ccf5f004411"]];
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
