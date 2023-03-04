/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","7f0bbd18b677723daa3e4b6237e6625e"],["/2021/12/05/·自我总结·/index.html","bbadd28c1c58b7c938fde9ebc70c4f9d"],["/2021/12/12/自我总结（三）/index.html","3b92d9aad6044868ac5c69962a3ca14e"],["/2021/12/18/自我总结（四）/index.html","5731d1a3c65cef633e83ed423f780370"],["/2022/01/16/自我总结（五）/index.html","045125f5110ec243444b24983cdace67"],["/2022/01/23/【寒假总结】/index.html","f7b1330ed90677eb4f4a224cf83301b8"],["/2022/02/13/【寒假总结】（二）/index.html","178c91e0e3444137c20b8ac3bd03aab8"],["/2022/02/20/【寒假总结】（三）/index.html","ff1ab302abd3c8af567414d0cd663c65"],["/2022/02/26/【每周总结】/index.html","aff5f3da8d19f72284188b5d9b7197b1"],["/2022/03/06/【音乐网站考核总结】/index.html","153b7c2592a8773c32ebfc82ebd82766"],["/2022/03/13/音乐网站考核总结（二）/index.html","cf36b419198e31786e3740e70224665b"],["/2022/03/18/第四阶段学习总结/index.html","7142b8cfcd1b7abcf4da69143593afb8"],["/2022/03/26/SpringMVC/index.html","2eca0190e8f41c8782a3de0917a599d4"],["/2022/04/02/关于算法学习/index.html","d711feb37136f03202ba51568d2e3a1b"],["/2022/04/10/初始项目总结（一）/index.html","a4375416925d2baa5a227e86bf59ace3"],["/2022/04/17/项目总结(二)/index.html","7f2360622ee930c0315fc715c4101525"],["/2022/04/23/音乐项目总结（三）/index.html","6f93b855a2434b4457b5100ffc25ce42"],["/2022/04/30/关于下载音乐的问题/index.html","86b329016626133cdbfdd2c273a4e1de"],["/2022/05/09/项目考核总结/index.html","a34a04f9bb631294179d857449e1df9b"],["/2022/05/14/有关Springboot的学习/index.html","93511244b877500f1db0631e518d8cf8"],["/2022/06/11/关于PS的学习/index.html","3c45c4fbe05c42757a82607a397dc452"],["/2022/06/18/关于redis的学习/index.html","0f171ad6a2906c3d6cee2ee88932a886"],["/2022/06/25/redis持久化/index.html","598c94549a2c4aeded73f3db1bf63223"],["/2022/07/02/Mybatis-plus常用方法/index.html","cc333e433877101b9fe571b6b9cb2857"],["/2022/07/23/重建二叉树（算法题）/index.html","4ef653a09db13aa383fd2de0b6b06b9c"],["/2022/08/06/对称的二叉树（算法题）/index.html","1a5a762052fd33f337d7c757e7141634"],["/2022/09/08/分治法(算法)/index.html","8c27e2dd339dec0ba0d793c683117ecd"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","a9c1b4b425c5317411abecaf64f586ea"],["/2022/09/15/mysql引擎/index.html","c08e032db7eb68ca7a2f4941a9e8d6f8"],["/2022/10/14/ArrayList/index.html","ead75748195a1d0c8216fe9d67b5a30b"],["/2022/10/17/LinkList/index.html","25ddcfb8bbcc0336595606d30e197fd5"],["/2022/10/19/Vector/index.html","4a29d40a5698085952bbd7e93864c00b"],["/2022/10/30/mysql索引/index.html","ccb670a70a45e85d77e092110ab317b3"],["/2022/11/05/商城项目客服功能/index.html","8e6901581784796ee010bb1cb1a4dc57"],["/2022/11/12/商城项目秒杀功能/index.html","9e80853bddb4b610d5a6e9353e0de1b7"],["/2022/11/20/pc寄存器/index.html","ce4f82bbc0b7f7fc63467b63f620dc75"],["/2022/11/27/集合面试题/index.html","39c86599b62e2aa7fe72096d1051bc50"],["/2022/12/04/本周小结/index.html","bb40442bb400cd0522aabeecd2509dd0"],["/2022/12/11/全排列（算法）/index.html","79974011effd2e3192809eef9448409b"],["/2023/01/15/背包问题/index.html","f058d8c126ae6ad2a85c6af5b8f2cb75"],["/2023/02/05/easyexcel/index.html","162d2cd3ea538ecc60a47374b15e564f"],["/2023/02/19/JVM面试题/index.html","bb7a89f07a3449b37f95552d939c5d68"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","e515b3aa1c16cc0b4ebcb33ed4b0e303"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","4f8b79430f1c87d2713772b739e79468"],["/about/index.html","af061b02cfcc3d0a60159cd7faacd34b"],["/archives/2021/11/index.html","94a9ec3c29e71c77d493ae2406b042f4"],["/archives/2021/12/index.html","0127b6a288ea29195bf341e0436eef77"],["/archives/2021/index.html","278d6bdecc39153c5173f40289a1b894"],["/archives/2022/01/index.html","6a855703a601587cac582367ac1f1d96"],["/archives/2022/02/index.html","7e19ba083c9c00098dd5902fb248c1e3"],["/archives/2022/03/index.html","fec8b400407a618e3aeb16201f6ab4b4"],["/archives/2022/04/index.html","bd89248b84ed048368d0d9674ae17854"],["/archives/2022/05/index.html","83d75c812b434a9063f63bd615afbedb"],["/archives/2022/06/index.html","e8369da7cf062395eb78cb5bff584071"],["/archives/2022/07/index.html","df28b538c01724d21bc4c7ae4f4d26a0"],["/archives/2022/08/index.html","6a93af18d6c4a3b9ed1bb58ea5dcac53"],["/archives/2022/09/index.html","cdc9aa71f54aeae547c0929937d9d47f"],["/archives/2022/10/index.html","fd8d14c6f39dfa55d098fe03e6d8908d"],["/archives/2022/11/index.html","a8784f8bed48ec5aaa59eaeeada74bbe"],["/archives/2022/12/index.html","8201930311b99f14119fa30c1ddf4014"],["/archives/2022/index.html","4d54384dee178b9e9d5c7e44ff263481"],["/archives/2022/page/2/index.html","9bd34f96f132da102d5026bd11206333"],["/archives/2022/page/3/index.html","23d5fe2ca2e13135c485630f04b513eb"],["/archives/2022/page/4/index.html","b14b903f1fcfab32a966623a7d8e6350"],["/archives/2023/01/index.html","4576f7f4f6f11beb692b531e8d8bdd65"],["/archives/2023/02/index.html","1131dfa1c3e3767de5619d517514e956"],["/archives/2023/03/index.html","29b4186714cd829fd65a1941288a8580"],["/archives/2023/index.html","3821052045a7bb0d8c44ae6316ed07b6"],["/archives/index.html","dca9002cbbbdae35acbeacbec4da4a3c"],["/archives/page/2/index.html","c488a1f3ce9870dad460315ce37adde3"],["/archives/page/3/index.html","d39ed1dad92067ab9029684d7b7161cd"],["/archives/page/4/index.html","a2b5949db27ec3c2f84d6ac78e436d19"],["/archives/page/5/index.html","ea4fcd696401204f632b3ecec1fb62d1"],["/bangumis/index.html","701b025b19a25c034a76473d9573bd51"],["/categories/index.html","cc4c7d778ea3a1ed2e7515ff4354b596"],["/categories/个人总结/index.html","3c8200f5347dd7f30ff062c6145a636a"],["/categories/学习/index.html","23c6bb3b70335eb324197ff2125b1ce6"],["/categories/学习/page/2/index.html","61a68017e7bfeb16527b92aa73c3cbae"],["/categories/算法/index.html","dea33cd423d5203c3e2b49f2b0120a72"],["/categories/面试题/index.html","5790a5f527edc70e83152bbd0d8812e0"],["/categories/项目/index.html","95c34a474935679e788007e2505402c9"],["/css/back.css","695dc2537ca25e5cc6aeb63b2a612789"],["/css/index.css","9061f632c407edf3985c197b068430c8"],["/css/var.css","3827e268b142d0c5db7593f925a86704"],["/gallery/index.html","cf9e4bcd793d34a44892c804f9a08554"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","de14d89e6708e0d772e43b5bc1f5048c"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","47dd68990c14b272d25299508dec8993"],["/messageboard/index.html","5e7388c116e825b5cff81ded6ca2e464"],["/page/2/index.html","2eb72448d67be9ce99f43175f8ab8d9c"],["/page/3/index.html","e12344358bd0f908d5a25743598a4977"],["/page/4/index.html","63f6f2152c7c1bf6065b8bdf692dc17c"],["/page/5/index.html","c4ad7172ca00254bde143c9323030b30"],["/shuoshuo/index.html","fe78935dc08453e3dbd0b140b403244e"],["/sw-register.js","ebe0eb7e9c49596c6fa376a1dacb12f4"],["/tags/JVM/index.html","708686685819d0b6e357650fb146a9d9"],["/tags/Ps/index.html","9bee877119bea1fc05030f73f8f9605f"],["/tags/index.html","5f2ef85b90e9d75c030c39cc5fb4f51a"],["/tags/java/index.html","60b9da966512c71fbde298564cf59aa3"],["/tags/java基础/index.html","ef1d862a92bb1408ccf351c2e61b39c5"],["/tags/假期学习/index.html","44e04652043828332dc49ccac80e8de2"],["/tags/分治法/index.html","ee402684c816e0039d41686bfbe8e9ac"],["/tags/前端/index.html","2f761adc18a752b4b0db18ff84e55189"],["/tags/回溯法/index.html","6c8087427e5128b8e52736d1746c3c2e"],["/tags/学习/index.html","bd0392ec730b58779ed5c11ce7baff3e"],["/tags/数据库/index.html","b1c516c4976b87b9dc859f89604d4e9e"],["/tags/日常/index.html","cbad0ef5d55e8f7529406113483b6936"],["/tags/树/index.html","42f3ff32ca11e646ade8e1b62af4b15a"],["/tags/框架/index.html","73c97dc01045338e6cf57aa8521c6f48"],["/tags/源码/index.html","30a9db3f897530182b4195887de471bf"],["/tags/算法/index.html","0d289bbaaa0279b3050a33dc65224cbb"],["/tags/问题/index.html","f16364447be689806cdc107ef8a5de5c"],["/tags/集合/index.html","656bb8537c62541d495f771b22c2c236"],["/tags/项目/index.html","f0cb5d5f9a27c6afb8a06af131dba9dc"]];
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
