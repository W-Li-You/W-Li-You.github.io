/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","76bc20cead228ffeae61d1fc5861ffb5"],["/2021/12/05/·自我总结·/index.html","f2b970d746767142ce579cbf2120df1c"],["/2021/12/12/自我总结（三）/index.html","7b0a8ff0b2b40ed8b661cf081ce800e7"],["/2021/12/18/自我总结（四）/index.html","816fa77da009af8a9a8f1bc35d56470b"],["/2022/01/16/自我总结（五）/index.html","2a3a4af6575d1ccdaa02182b4c608630"],["/2022/01/23/【寒假总结】/index.html","37cf24073b4a37eded4cd80785af4e60"],["/2022/02/13/【寒假总结】（二）/index.html","0561e713ee2dc52a6fe7fccab3151792"],["/2022/02/20/【寒假总结】（三）/index.html","319b3e44cfcf4dfd920a175457d23166"],["/2022/02/26/【每周总结】/index.html","8fcb90509c8c11bdb8e8d2e881268fdb"],["/2022/03/06/【音乐网站考核总结】/index.html","3e2f99fe06a5632e5c9edf8edde78885"],["/2022/03/13/音乐网站考核总结（二）/index.html","422c22536bfdb3e0bcab3c3436c91e6f"],["/2022/03/18/第四阶段学习总结/index.html","f31ea70ae204ca3e55a34af5f0dc67f7"],["/2022/03/26/SpringMVC/index.html","f158f4c716ce6a3bd9b62a70e01aea39"],["/2022/04/02/关于算法学习/index.html","47e408c6dfe5a93163a317d7dad66e33"],["/2022/04/10/初始项目总结（一）/index.html","ed8f7270136f027ad8a552bfb01b7ee1"],["/2022/04/17/项目总结(二)/index.html","18fd287525f37a9cbf76a06b91e9a46b"],["/2022/04/23/音乐项目总结（三）/index.html","14086f237ec1297674d477eb128d36b5"],["/2022/04/30/关于下载音乐的问题/index.html","f36a6b246028bd1d07b6d2f271869781"],["/2022/05/09/项目考核总结/index.html","3a4aeb81427602fcf7f3fbae1b3538a9"],["/2022/05/14/有关Springboot的学习/index.html","6b99fc20c97148895dec538de87856f7"],["/2022/06/11/关于PS的学习/index.html","cdb3d2977e030d3fa096d9da633772d3"],["/2022/06/18/关于redis的学习/index.html","f03da798c17d7b5cc535e0350b1ff9e7"],["/2022/06/25/redis持久化/index.html","3803995377ef9216f528b0d8ac0e55bd"],["/2022/07/02/Mybatis-plus常用方法/index.html","2797184ee8d0b6d39e8411a91d2224c8"],["/2022/07/23/重建二叉树（算法题）/index.html","638cacc9f5cca043a192591d6427c672"],["/2022/08/06/对称的二叉树（算法题）/index.html","4d3ca7c9bf7558fd7069bc2fff585884"],["/2022/09/08/分治法(算法)/index.html","5e3e3f4d4d2ec30869464534e7f59c80"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","7bdda30445d7f333e81644cb4eb1ceb9"],["/2022/09/15/mysql引擎/index.html","bb527c57901eb26d4b7268eefc11cbc5"],["/2022/10/14/ArrayList/index.html","a9bc509229a52b9f52363f4441f5aa45"],["/2022/10/17/LinkList/index.html","1437bdf3c32264df2dd92efdcd5c98a2"],["/2022/10/19/Vector/index.html","ec691f99e2a6a575923a7fa152b2d4e3"],["/2022/10/30/mysql索引/index.html","64681764a3dd916de4133e9eaa24a46b"],["/2022/11/05/商城项目客服功能/index.html","9349a0a271dfb2c1c683b7844da0f20c"],["/2022/11/12/商城项目秒杀功能/index.html","55a2396130908c6523728be102cd73d5"],["/2022/11/20/pc寄存器/index.html","a773c0eb68816466018a192fda9eda3f"],["/2022/11/27/集合面试题/index.html","8090fc7414ae909e9d3d76a584612486"],["/2022/12/04/本周小结/index.html","fc0be806a550c1bc1905e7c47c662ee6"],["/2022/12/11/全排列（算法）/index.html","5322988388b5c22a5e02a10bc80f715a"],["/2023/01/15/背包问题/index.html","1e51f9b974602242af86d97903e8fc84"],["/2023/02/05/easyexcel/index.html","0f3aac3ac9858722a2044cf6282674a3"],["/2023/02/19/JVM面试题/index.html","428506576a661232de01a6dc10c9288e"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","383d4f9fc889373ba3dde41740b82b03"],["/about/index.html","27ae620fd5e306873b7ef57e8f92e315"],["/archives/2021/11/index.html","87a1d5641986593949f95f9d06459aad"],["/archives/2021/12/index.html","e51c009e3863f374bda49c813eae6215"],["/archives/2021/index.html","a784af92aef3f3504839d13c01fcd9d9"],["/archives/2022/01/index.html","353e515472e7b483305780a23d44293a"],["/archives/2022/02/index.html","e621f450a85ec6f02915bdb518903170"],["/archives/2022/03/index.html","1f17c6fe3eec550511d6c502d1c84f57"],["/archives/2022/04/index.html","c46ccef812a94aecb4eb67dce1c2416e"],["/archives/2022/05/index.html","98a281e41e1028a6da604f12d6149d25"],["/archives/2022/06/index.html","af633f93c37c76f668158b17e31e23ff"],["/archives/2022/07/index.html","3b53e3d2e16a3bdadc3db82609ed1f87"],["/archives/2022/08/index.html","b3acaa29630a9ab7439b3ffb7adc3213"],["/archives/2022/09/index.html","e69c25d10d53537f99727f7d3e961e3c"],["/archives/2022/10/index.html","740a1c705d83dd94ae352c114cb05b0f"],["/archives/2022/11/index.html","8cdc8ac76d815444ec81f5d0c00d5de0"],["/archives/2022/12/index.html","b6536d3d96ba19752f3d0ea9ddcfe833"],["/archives/2022/index.html","063123199da4ca5ff0856021e56e752d"],["/archives/2022/page/2/index.html","4acfbe8d261664b9b04cd9fd559ad349"],["/archives/2022/page/3/index.html","ca95e0f795307d12f044626eeb853f9b"],["/archives/2022/page/4/index.html","feff36eb29743df81e3c1e4afbb3e706"],["/archives/2023/01/index.html","ddf436673ccc788ea1fbcba74ea9f9c2"],["/archives/2023/02/index.html","cb35990ff2516a80db60c05709977e2b"],["/archives/2023/index.html","28ac520f2ec0876b6cb753d53cca8deb"],["/archives/index.html","3b7394770264ff7fc2896cde566f34e7"],["/archives/page/2/index.html","df4f6b7504ff5ed8df1ce52c23e40f8f"],["/archives/page/3/index.html","2c361ff11e0b57692c8ff112dafeb215"],["/archives/page/4/index.html","764ceb33bb3a5959338cb39fd89f111c"],["/archives/page/5/index.html","2453d807dc3dbdec4dba0f6dcab56ec3"],["/bangumis/index.html","23b774e3f2988f80f54b19a56b12d271"],["/categories/index.html","ede0830b7bad2801aabed7880b8584fd"],["/categories/个人总结/index.html","2e695e5043db19c3a508b73b64ca0b78"],["/categories/学习/index.html","23221676c96e4611b97d61a495bc2483"],["/categories/学习/page/2/index.html","b7a4c3777d767dcc79b25a898e174dae"],["/categories/算法/index.html","b39f87952e4978f322a3bc99c5213e78"],["/categories/面试题/index.html","4ad09b66dae3893b0a8269e016886f94"],["/categories/项目/index.html","179eb1f2a8d4c11e7d9c85af9ec514a9"],["/css/back.css","c19a73bd74b0e08242dd3c4dc463651f"],["/css/index.css","99022cfce29f3386c10e35ebd0170a58"],["/css/var.css","b65758365f8a3114876b8de70517b2a1"],["/gallery/index.html","821398978da539abe11e3d1e8be1b0ae"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","10e940d8dea4b9eaf19c54cd5f7d394f"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","70feef3dcf27b98cd904989ee13f4ff9"],["/messageboard/index.html","01a42103ba8d350c5ee9ad93fa0e9284"],["/page/2/index.html","7d237adf017f04f187c4500a314e6eac"],["/page/3/index.html","1717ee32b04c6dd020cb56b612cd35ad"],["/page/4/index.html","4e3e01eb493b76f723aec0743ba44579"],["/page/5/index.html","4e0eefb81d3029bbbd6f30d1a5fd3cd3"],["/shuoshuo/index.html","97a237527a0fce1b8c1199339518b6cd"],["/sw-register.js","9f353e080ac7c99ced97a000f68de4be"],["/tags/JVM/index.html","ed8764ae2aa0e516e3062b9c6bbaf765"],["/tags/Ps/index.html","52932290210e6948a82bbab639d95bd5"],["/tags/index.html","224bc1ef6ddcf693e2ceabfdda172c7d"],["/tags/java/index.html","1080630d8985e5675dcce9e2881ada48"],["/tags/java基础/index.html","9aaff1ba07592103f9a43df549139588"],["/tags/假期学习/index.html","051a640fb164dd16ccf883f249c1902a"],["/tags/分治法/index.html","69b4c1ebdce327deea476aa25fe1132a"],["/tags/前端/index.html","74734d2935607ea242eb9a83decb9fe4"],["/tags/回溯法/index.html","10ad727a43fce4067c943dc171af4b65"],["/tags/学习/index.html","23aff28ad414e8cb58e4c2f285a0792a"],["/tags/数据库/index.html","8f0a7d88d9a805ed4cc087f64deea3ec"],["/tags/日常/index.html","5a85663b3fb010515652d8d0a3cd68e2"],["/tags/树/index.html","a38ac5c9b2f8278addbfa976788ef5a9"],["/tags/框架/index.html","b78e73e3da7efa5f2400440471248c19"],["/tags/源码/index.html","9f2737208e5aefb8dda1e72dd118f109"],["/tags/算法/index.html","c6e32f26d38c9cfd7407c48f3d1e105f"],["/tags/问题/index.html","11621a134494a91baa8382fbc050fe0e"],["/tags/集合/index.html","d42a106ee31aa9fbdad43522587618f2"],["/tags/项目/index.html","2ff6be6a73efa12f5fc82d23366d469e"]];
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
