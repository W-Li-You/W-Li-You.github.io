/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","46a3e677b17c704e1d21449d31db9467"],["/2021/12/05/zi-wo-zong-jie/index.html","92ee2bbc32ae816eb69d3c2409965032"],["/2021/12/12/zi-wo-zong-jie-san/index.html","34ce0d9c2b002cfc6f951a6689316aff"],["/2021/12/18/zi-wo-zong-jie-si/index.html","9a45b1f52bd080602b47ccf278882c78"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","df01194c4f6a517f903545f7342c9c2c"],["/2022/01/23/han-jia-zong-jie/index.html","4e2abe20a9bf7ce9125c664b44fbbbf6"],["/2022/02/13/han-jia-zong-jie-er/index.html","5124285a61be08376c42fb7d67e4dd13"],["/2022/02/20/han-jia-zong-jie-san/index.html","a3340e11e168e067b5f0ed77652ac5e7"],["/2022/02/26/mei-zhou-zong-jie/index.html","3acf86055884a1a51ca25d736b6a463a"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","1a17e123eaedb9bd54fe67617172c41d"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","71f16b2e52167dbd17ef69ab313e68a1"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","a1ca500737d2f64369a7e56498daaee4"],["/2022/03/26/springmvc/index.html","80636a054bc4ad2c422df3ca924ba898"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","cc8ff77cf08a79f9cc451a12008ea11a"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","5bfa1c599e89b372f925ea841bc31321"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","38d8abe156b71b000dd03417e2c7e678"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","603cd781e08361b34bbe4c94e8d9e583"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","90c9ff58006a7fdddc02f4a188e3e363"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","c05f8a323d39cbc122aaad1e35f72c11"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","2ec01eb548260417be48567d39312e08"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","dcaf0106ce559c0c0174cd9431f8b402"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","7941aeaf90a2d031a0e4eb3f89e8fdf9"],["/2022/06/25/redis-chi-jiu-hua/index.html","5efc361aa78220e1704a83dc52b3f0cf"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","d71b721939da45e6aa07e8a0afe9a8c1"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","e4c3986fda869d3ad330d0cf63a7965b"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","6b6c4b8690eb10cc3957855f3d5f6a63"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","3ee012e67b8a525d919cc7879206f08f"],["/2022/09/15/mysql-yin-qing/index.html","c7773bd205f8e75c1339411c52825c2c"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","e411e00ff5eedaef874bc60205fc49ba"],["/2022/10/13/arraylist/index.html","972da611bd5f15fe156f1dd7328970a3"],["/2022/10/16/linklist/index.html","3aec455f2c74d52fe87c80762296e425"],["/2022/10/18/vector/index.html","a70e915cc9920b9a72da6b7d007aa22d"],["/2022/10/30/mysql-suo-yin/index.html","6de16695c2321e708f6573168f4b1032"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","f9882aaa34101dbb19b07dd80644a1ab"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","cc84f4563cc4de17d310ec8f9332073f"],["/2022/11/20/pc-ji-cun-qi/index.html","c4fa7d7f5698955f75f9a15b89a3d5a2"],["/2022/11/27/ji-he-mian-shi-ti/index.html","8f19b2a4a4e33fb6fc4a30503d825650"],["/2022/12/04/ben-zhou-xiao-jie/index.html","94b33d71721044d22760e7cb87e19dde"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","6b5a93248eea90850de9162972517128"],["/2023/01/15/bei-bao-wen-ti/index.html","15112e68ac2e0692670fbe40486bdc1a"],["/2023/02/05/easyexcel/index.html","05320d3f84f7e4fede8dd7fd591e0092"],["/2023/02/19/jvm-mian-shi-ti/index.html","9dad11782548d7225573751194794fdd"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","ed5c56d6fbfb9d969e0083ab25d57e5b"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","cd09d69c7d3ff477f83fea56735715e4"],["/2023/03/11/yang-hui-san-jiao/index.html","875c06932e103ed27a10ccfa2c433e95"],["/2023/03/19/he-wei-k/index.html","9a2ea858bb529189fcfe1f19a29e9a33"],["/2023/03/26/juc/index.html","3523728c1d77f4e16b5678f0a02fc8ad"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","51f5f7de5a98a2077a23328a384255c6"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","464e8cdb1876ffd43a5cbb36925a7daa"],["/404.html","6dc1e5e9cd43d5532633cbbd33d59103"],["/about/index.html","843b533d4f356fea6fa57a0c61ad10ae"],["/archives/2021/11/index.html","2affa28fb762be5f5ad1d9e0bb6a072c"],["/archives/2021/12/index.html","1f6de84b71bcea4ae5c75f84d3de24ce"],["/archives/2021/index.html","46b2fa981565fab785cc4251c0c18173"],["/archives/2022/01/index.html","3245d815b3e2a3fffcafdbd20146d6f4"],["/archives/2022/02/index.html","47d8261ea12d2b661b20f71972cc49f1"],["/archives/2022/03/index.html","3644e5ea097a44edb397ed2017dc766c"],["/archives/2022/04/index.html","0c6dbaec28ad72524947943c0ba9eb5d"],["/archives/2022/05/index.html","473dfd7c3303c77176c13615392a49f1"],["/archives/2022/06/index.html","a62f6eeb92e0929d9b234b82e78aa7b6"],["/archives/2022/07/index.html","7adf4c000c6ed2ef467377b7123b5726"],["/archives/2022/08/index.html","3ecc4e86ec100330694899bb568db79a"],["/archives/2022/09/index.html","7afe4e6dd86759cd009697593d543ec9"],["/archives/2022/10/index.html","d383ce1c497e1e8d469c38c0d3ba7bac"],["/archives/2022/11/index.html","83b321cb809bfdea64a0d65ef570cbe0"],["/archives/2022/12/index.html","f4a3718519c0ef83cda3c18401520dec"],["/archives/2022/index.html","8a43c66f37d2edbb4aa5474f5e9e2000"],["/archives/2022/page/2/index.html","b93cdff7e616d5e772bb3e9d181f7c02"],["/archives/2022/page/3/index.html","c78dc9dd5879ac651fc6edbc194b3235"],["/archives/2022/page/4/index.html","1dd319f8b10faa734c9137bca2336a26"],["/archives/2023/01/index.html","608433aa6a34b57b3aa149d3b31a4c06"],["/archives/2023/02/index.html","2b4cb104a6f7f7b1b4cc1de449e8e3c8"],["/archives/2023/03/index.html","88ba7bff0a730099a34badf1092ef61d"],["/archives/2023/04/index.html","07399d9d4a8d9b606cf10a843a4c0f40"],["/archives/2023/index.html","cf2dbac14b8e076484a290896433a8bb"],["/archives/index.html","f007ee32e5dd03d216d2f4b14405375a"],["/archives/page/2/index.html","9af18870a29bd19610d52bcc3a723acc"],["/archives/page/3/index.html","20c199248de517bad690dc0e15340223"],["/archives/page/4/index.html","06c15ab40829b0e50b81785bc10ce369"],["/archives/page/5/index.html","3def2133f8adb11842f34208a5db951c"],["/bangumis/index.html","41be3132ec8ecc923da23e40143ce420"],["/books/index.html","e0b04fa5a34b6c4606fe86b3b052a742"],["/categories/index.html","6e273d8a495a482c9c1774269fd5c1e8"],["/categories/个人总结/index.html","c730c8d63fa68a68ff0bb1c8b3d6b926"],["/categories/学习/index.html","7a36d00bff712f5638990d67f4f9a7ef"],["/categories/学习/page/2/index.html","e26ad619d3f7f739c96939b4d57dac09"],["/categories/学习/page/3/index.html","5c09c4f46795ef9d56ad559b047a45fe"],["/categories/算法/index.html","fd9b43613018589e6cfe1aa315f159cb"],["/categories/面试题/index.html","d6b8cbeadfd238ee3aa218ca5d367ea2"],["/categories/项目/index.html","3c62f824c8bfeba30700e15e7ed46f02"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","f04fe34951f1b6301c51390ceca1430e"],["/friends/index.html","8430fcef50a775f771b934ccde32af5b"],["/gallery/index.html","ada5bce2b0cae0730b237c00e25da615"],["/index.html","f882d0902b8830ed081bc59d1b0e4a0b"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","d8a2bef40bfb862fff7b7c777b596d08"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","c97f20bd34ef143ab6e1e8131ec5ba1b"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","f99c1aa7031c256fe379518f8fcb4ec1"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","4529fc8050b0a6aeb94537cb645e28eb"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","96cd3cc44c9df94aa7bf6d0d290652a7"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","0ec2250e78d268a609c2a0eef12f0c38"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/movies/index.html","33216a6fd435a9605f77709f954a4684"],["/page/2/index.html","e895bd6d07aa8ed3e5eac3a6919e6869"],["/page/3/index.html","d85e2478075b2d74813bc0da2cf77cda"],["/page/4/index.html","cb9088bc668d1f6c2f8f4b8a41e61133"],["/page/5/index.html","72b4094aa66eba9767826e31f9528214"],["/shuoshuo/index.html","7336dab5cc7b5152de9e323d85f597f4"],["/sw-register.js","4f287b1a418004fb093f71b2ba54f6b2"],["/tags/JVM/index.html","2ba7db82ec2e8a51007f8d8283cf92a7"],["/tags/Ps/index.html","18aab24eec01fb9d904693b331672c14"],["/tags/index.html","0cb3b4bdbfb93adb777385a3c441b654"],["/tags/java/index.html","1adf25fffa3462029e827790c3406fba"],["/tags/java基础/index.html","b63a5dd732c4234e859491e5ba794798"],["/tags/二分查找/index.html","9b6ff295d72518560e163708f325cfea"],["/tags/假期学习/index.html","7619a073efc84cccb0ca13465eafc361"],["/tags/分治法/index.html","ffe8b959d418b1447f5f774ba2bca5f5"],["/tags/前端/index.html","d564498466c54b3027715b37e73003ce"],["/tags/前缀和/index.html","522397c2084d7dbb684c670543ed4169"],["/tags/回溯法/index.html","b042cd670c598f8d6d843e5666b0259d"],["/tags/学习/index.html","ff98a5f46bd335d790dc542558bc499c"],["/tags/并发/index.html","8570f69a9e006d1f103b16abc5380682"],["/tags/数据库/index.html","28fe27554bcb72f011f23e912ce7131a"],["/tags/日常/index.html","43a5af26410c08c9c88254b67f912563"],["/tags/树/index.html","8c4ad491391cdeced7a775492fd49852"],["/tags/框架/index.html","ebf3babdf3a8fefd01bc1a74a9eaefa1"],["/tags/源码/index.html","01d60405bf9b2a72bcb93f3d920e6aad"],["/tags/算法/index.html","90d1f474c78c61366f5897b9c4e6626a"],["/tags/问题/index.html","ddab7af3b4204e896b10b58da279ab23"],["/tags/集合/index.html","f89092ab7a790193ae067968f413db7e"],["/tags/项目/index.html","067f6a751a6959f3e24a16d571f6477b"]];
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
