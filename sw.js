/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","36f7dcc8ec0112e7f8ac762baa33adb8"],["/2021/12/05/·自我总结·/index.html","2056da28b1247cda994627e41b8b7348"],["/2021/12/12/自我总结（三）/index.html","f8a796941c18509fe82e3d9b1536632e"],["/2021/12/18/自我总结（四）/index.html","318694d36d9b0530579926c108747940"],["/2022/01/16/自我总结（五）/index.html","ca0a1a6eea6a130bd84a154e626648e8"],["/2022/01/23/【寒假总结】/index.html","b0a2ee94bf374db1cb69b0dceda7304f"],["/2022/02/13/【寒假总结】（二）/index.html","32e567322899aca8ad50d1f9b8e2ddc3"],["/2022/02/20/【寒假总结】（三）/index.html","df0a4f2831f10efc5c45449822ca2036"],["/2022/02/26/【每周总结】/index.html","d3168ad7c46d8cd8b153906053f3ffa2"],["/2022/03/06/【音乐网站考核总结】/index.html","91dc34d06acf04fbb0d67cf247a160b7"],["/2022/03/13/音乐网站考核总结（二）/index.html","77a0ef81d6ed41aa9e90ce0118454b4b"],["/2022/03/18/第四阶段学习总结/index.html","1a6cce8913df5b978b9713259138d58f"],["/2022/03/26/SpringMVC/index.html","abd8e8cc9194a4dab82e75d8822c3b63"],["/2022/04/02/关于算法学习/index.html","bb365821045503394374ae6c8aa7cec2"],["/2022/04/10/初始项目总结（一）/index.html","095cdbd6e841cedbb968507f462efbac"],["/2022/04/17/项目总结(二)/index.html","506be124a04f2659a8592917f3ac37d4"],["/2022/04/23/音乐项目总结（三）/index.html","f7ee2a946c6cbbd313c66f052bf47e2b"],["/2022/04/30/关于下载音乐的问题/index.html","8620629e229289cfec50bcfeb27a0db8"],["/2022/05/09/项目考核总结/index.html","f7052c5d1adf299826a188d397480938"],["/2022/05/14/有关Springboot的学习/index.html","23f64a87753f0b0c38a0baefc7d5b64f"],["/2022/06/11/关于PS的学习/index.html","e09087ce14d4af5bd16069352134edfb"],["/2022/06/18/关于redis的学习/index.html","f384d332ec17d45a67169101af809e2b"],["/2022/06/25/redis持久化/index.html","9b6e0490695a9276411ecdf088e57e51"],["/2022/07/02/Mybatis-plus常用方法/index.html","73d8b579330ba4839998cb92b4f397a5"],["/2022/07/23/重建二叉树（算法题）/index.html","49db5e4bde1af675879d4c4c0b8c9330"],["/2022/08/06/对称的二叉树（算法题）/index.html","ca1417ad6d29f074b273413d8337eedb"],["/2022/09/08/分治法(算法)/index.html","380d22b0f4a38e143f3f28c52fe9e174"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","fe5db7eefa9dc2429f81d9e22de2e760"],["/2022/09/15/mysql引擎/index.html","4ff387d9a5765ac0e746fda34818cdc0"],["/2022/10/14/ArrayList/index.html","1b60a82bba2314760a71562f07abb863"],["/2022/10/17/LinkList/index.html","bc297cdf532ad6923423d8c595f419a6"],["/2022/10/19/Vector/index.html","b90f9a1e0d9c5586c24db3fa55e53bd6"],["/2022/10/30/mysql索引/index.html","cc5bd0bae60a08c81a89563e58996d95"],["/2022/11/05/商城项目客服功能/index.html","a8051674d34dc97389b659379c75d9ac"],["/2022/11/12/商城项目秒杀功能/index.html","f5891c84d94f29745cbfe0693d91771c"],["/2022/11/20/pc寄存器/index.html","a11fb2359f028c0628475d3400d6b2fb"],["/2022/11/27/集合面试题/index.html","c823fc82adb98e4ae26e20817dbbce92"],["/2022/12/04/本周小结/index.html","6464ba7dd805cd3eae400af2882065df"],["/2022/12/11/全排列（算法）/index.html","2fc606a1862226d92e7b159285de9ec2"],["/2023/01/15/背包问题/index.html","e65d4ac1e9612cf8c1a65497970eac0b"],["/2023/02/05/easyexcel/index.html","0671b8466379ccd4545e94d44b4e60cf"],["/2023/02/19/JVM面试题/index.html","2ee3f4e38ee257c642cca0c11f1aa734"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","2e85f5bddb2d2d5810977dc6872c7fb5"],["/about/index.html","a07a2454da93f50bbd023b818451e980"],["/archives/2021/11/index.html","5a40288dfd201bde24d7e9c18d13f430"],["/archives/2021/12/index.html","2ae86573e25a892c3cb44ce438fbb5cd"],["/archives/2021/index.html","be04df413e0bce70e5bfc721e49bd580"],["/archives/2022/01/index.html","e8c1863b89c807134581ce7a4371c939"],["/archives/2022/02/index.html","8b9ee0637d58c13aa2586dca2367629f"],["/archives/2022/03/index.html","3b2f79028f4042663a6fdff3cc90190e"],["/archives/2022/04/index.html","3b1d2b5de52d034ac52879ff8de13595"],["/archives/2022/05/index.html","5a6e854c2a1d1614fd6c5086a3f740f7"],["/archives/2022/06/index.html","4b499bfec2f5f98df78b8218d1fa8442"],["/archives/2022/07/index.html","77f301337c4721dcc6e3a3cff11cb52f"],["/archives/2022/08/index.html","2515f78a7a357513c153a94c9cc59cbd"],["/archives/2022/09/index.html","ce44b40ea56baafdf9a5fee2b363830e"],["/archives/2022/10/index.html","b77dff417f1800cf751093567a56aa9f"],["/archives/2022/11/index.html","b3b519ce793e0fe7643466d6831fad26"],["/archives/2022/12/index.html","24d9797af65d7b96977ec195651707f9"],["/archives/2022/index.html","6acdb800f4355a958d287afb409b31cf"],["/archives/2022/page/2/index.html","3c7e7a8455ad8bf50a3518091c6f1ee1"],["/archives/2022/page/3/index.html","d6be9b899e6ac9fc1402b676915c435e"],["/archives/2022/page/4/index.html","de3d7a90e6d674d42d01fd531681bd14"],["/archives/2023/01/index.html","45171c489a88242c06d754e06ed4cb55"],["/archives/2023/02/index.html","6b94c868d69b5b6223bfc0f87c2688ba"],["/archives/2023/index.html","d0acacbea90a17f5cfebe2853ef65537"],["/archives/index.html","4c381535bc82f5d7159d592a9a08e98d"],["/archives/page/2/index.html","7dfb4dd626114ababb82dd24c660b30d"],["/archives/page/3/index.html","ef5ca7859d94f74dfbc5930b3cf17955"],["/archives/page/4/index.html","5301c42498b38f51208d44a34d3c35cf"],["/archives/page/5/index.html","3f787a08862f07a99e92f2d3bda87c11"],["/bangumis/index.html","efa9205da2a523c3b09c62feef2d4fc8"],["/categories/index.html","7964853dbc6ed98ff002f2117a2aaacf"],["/categories/个人总结/index.html","96276318572e8e98e35daedf1afd2d93"],["/categories/学习/index.html","04e0f6d683e28ceabdaaf5426dee966e"],["/categories/学习/page/2/index.html","3414a2ee01001a89ed0037b07276e014"],["/categories/算法/index.html","283ee81e0041d710a5d83d4248c588f9"],["/categories/面试题/index.html","c20d669bb77d382e4c8f6287509befba"],["/categories/项目/index.html","f7f459b23128dc48fe7431a79ba29d0a"],["/css/back.css","7f92bd9f4dc11ca7e9131e635f10677d"],["/css/index.css","1d5ad853b49963c9659b963c07004a2f"],["/css/var.css","44be2d8c48dcf1a6948c5ee67522ae20"],["/gallery/index.html","ccfdf6624e179a1362a150e775d9174d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","10e7c23f07aedc36ffa06ba0f1432030"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","4c67a50e1ad92f045c14f1240d7ec5f5"],["/messageboard/index.html","9e07146d6bc01272091d502f8493e71c"],["/page/2/index.html","1d909f8c3ecd36eca88a76070add4a80"],["/page/3/index.html","0c5fb8e92729c4d86a5ee1b751c06511"],["/page/4/index.html","cfbc50fac10a54809472868fc0cb25a2"],["/page/5/index.html","1da26a1474ff19882965cf1a158d24b2"],["/shuoshuo/index.html","092e7d92bdaf9a7e0c7b521e7a80dc24"],["/sw-register.js","40bf8b3d4681c32cdfabb872a8019506"],["/tags/JVM/index.html","3ff0f46047ef4de6d07289f115506ee3"],["/tags/Ps/index.html","8e62802bd2793307801e4a1357692fec"],["/tags/index.html","a361c302a370871563b22ce42a9e21f1"],["/tags/java/index.html","ed8a1a03f59ff8cbe1492aaf4500e6df"],["/tags/java基础/index.html","a986a02488aa586a26d4d88523efc09f"],["/tags/假期学习/index.html","6517515d3b08691197c887d0b4c4ce9f"],["/tags/分治法/index.html","b4bfa236085856ed7c4d92b8517ed532"],["/tags/前端/index.html","e5841289a377d4ce3fb64f8c4d887988"],["/tags/回溯法/index.html","655a956860e2286e3549b87f4a74a443"],["/tags/学习/index.html","95ba5099a408c5c8cb799c7347bb6ad1"],["/tags/数据库/index.html","563392962d805cd1cad11b1f1514717d"],["/tags/日常/index.html","c2b761880c969f3111e037346829c8b0"],["/tags/树/index.html","66e1f61f7d83faf2e9100c7b04dfb7bf"],["/tags/框架/index.html","15a6070c6108c32dece6ad89729dd4ff"],["/tags/源码/index.html","fd71154c842a8154b0a45c0f867bd746"],["/tags/算法/index.html","45a80baebd3496ac4351c648daaf6ce3"],["/tags/问题/index.html","cdd3d2dfb343d76286f4ccecb48398a2"],["/tags/集合/index.html","c3bb867a1d6b4fa8e79afc6c155e0861"],["/tags/项目/index.html","81a1e6ccf4947f717c3f0c993bb56bd8"]];
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
