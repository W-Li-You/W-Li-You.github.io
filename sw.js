/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","98343f15a7d5de593f0dbff7768a609e"],["/2021/12/05/·自我总结·/index.html","3cebc54fe49e2ad41a72880eaf903c73"],["/2021/12/12/自我总结（三）/index.html","9665e11b2f7482fa9385df91d0621372"],["/2021/12/18/自我总结（四）/index.html","5a366fc50bfacb7170db0f4d0b59d902"],["/2022/01/16/自我总结（五）/index.html","d689b5998f3da6b9e7ec84a405ec2eb0"],["/2022/01/23/【寒假总结】/index.html","5b4a5f55a74bb8931de4b31747d23f69"],["/2022/02/13/【寒假总结】（二）/index.html","af09e4981c368841b073d6e596daa3e1"],["/2022/02/20/【寒假总结】（三）/index.html","4277c863d7e05191d9c9f205aa6b34a0"],["/2022/02/26/【每周总结】/index.html","249c5c095072cef5a8a11afc74669045"],["/2022/03/06/【音乐网站考核总结】/index.html","f3d0250417026773895d1b3e434335fb"],["/2022/03/13/音乐网站考核总结（二）/index.html","fd854092e4e16813fd3867f9466cbf75"],["/2022/03/18/第四阶段学习总结/index.html","e529dd7ccaaa047bfb3e8dd14e901f49"],["/2022/03/26/SpringMVC/index.html","cd46e2c636f5059dde3278be1f27728f"],["/2022/04/02/关于算法学习/index.html","df4f755d2daeb331e268e78d93f5e8c8"],["/2022/04/10/初始项目总结（一）/index.html","fa0f7a4e0a5572dd4670cb073b857da0"],["/2022/04/17/项目总结(二)/index.html","4f78a9c9e4774e9e21d34bc1653185e2"],["/2022/04/23/音乐项目总结（三）/index.html","4f936b70b907a1d498830adb1ee6dfe6"],["/2022/04/30/关于下载音乐的问题/index.html","6ef0b32cd6bdbd456bc720e5206dae0e"],["/2022/05/09/项目考核总结/index.html","baed5ebb10893598b4911e23a91aa32f"],["/2022/05/14/有关Springboot的学习/index.html","ac31c9a4e1827d03bb7f7f86210d7eae"],["/2022/06/11/关于PS的学习/index.html","4c4493028e3906234e7a77578ac86fa2"],["/2022/06/18/关于redis的学习/index.html","aeed41c88d62ce6ff56bc5b14a8b0c07"],["/2022/06/25/redis持久化/index.html","4446ab44e7cd758023c1d173fff9e296"],["/2022/07/02/Mybatis-plus常用方法/index.html","0dfb5a9adfc223356b48b5ef910eb427"],["/2022/07/23/重建二叉树（算法题）/index.html","62974173a2a23d66a0ff906fae6f2714"],["/2022/08/06/对称的二叉树（算法题）/index.html","763d3f6a84a23b6a6279e612c53acc05"],["/2022/09/08/分治法(算法)/index.html","01e3e13d37248876aa5a267ce11d8ed1"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","ccc60b9fe06253af4b123858ae7437c4"],["/2022/09/15/mysql引擎/index.html","b98fccb1a53bf23efc2d618b697d0759"],["/2022/10/14/ArrayList/index.html","234221dc00266c8e71f2eda1c3f4fb88"],["/2022/10/17/LinkList/index.html","8ea0f05c2328e9a9565720370f02af28"],["/2022/10/19/Vector/index.html","7ffeed5a6c42dfe46db70a7d6b78d36e"],["/2022/10/30/mysql索引/index.html","44de82e7557175be3d1855d0924bc3bb"],["/2022/11/05/商城项目客服功能/index.html","58e02f31017db3cc5898dec0619e9d20"],["/2022/11/12/商城项目秒杀功能/index.html","4e95a64fbb1df0edf7dd1f0167825a3c"],["/2022/11/20/pc寄存器/index.html","4a59bf249d7d0e42aae9cd9c3a3cc472"],["/2022/11/27/集合面试题/index.html","b79a5462957652c46e646654745334de"],["/about/index.html","f5908c1480416f366dfa7114cdeedf94"],["/archives/2021/11/index.html","eef72a6f004b1c56bc8ee09860ac55e6"],["/archives/2021/12/index.html","35e5ec594d186c4670a5498c14dd0600"],["/archives/2021/index.html","62d8f34db7bcf5cc36f68e9338bf3362"],["/archives/2022/01/index.html","1f9cb38ad971776764bbfe968bbe17b4"],["/archives/2022/02/index.html","b05dd2a1121009e50392d36f6659f14a"],["/archives/2022/03/index.html","045a8a8dacd497ef8403ea28acaa4da2"],["/archives/2022/04/index.html","de22a8d7f4471310fb3fb201941337b6"],["/archives/2022/05/index.html","9efd3e9ec9661e7c5c6d4293b712662b"],["/archives/2022/06/index.html","a83333fcd8ac083f18074b9d47dd7a5a"],["/archives/2022/07/index.html","78296e227e7a172cd3dd9c80d82a9b86"],["/archives/2022/08/index.html","1cc1f877432fd5297ac1c4c33041c13b"],["/archives/2022/09/index.html","55a3aa31db1684343bc9213a2026c5b0"],["/archives/2022/10/index.html","d2cc4f2e563c685e353364dc1259f28d"],["/archives/2022/11/index.html","fd9f59ca702198ea4d04dc81c49d51e8"],["/archives/2022/index.html","ba02b0ca54420b1a8f97bcd4180d5e16"],["/archives/2022/page/2/index.html","abcd59639ad1d58e3d436382bdcca69e"],["/archives/2022/page/3/index.html","121e2a21f833051e43165cdf3ecefb94"],["/archives/2022/page/4/index.html","d1b43d8df2760bbf71ef8632dd6b84dd"],["/archives/index.html","daae57a46ca3ca5cf73214fe2bcef1e8"],["/archives/page/2/index.html","5c7b6803b9816ba5e89e6341fcd56581"],["/archives/page/3/index.html","46269f737f2712e531e0ee0a59d2a145"],["/archives/page/4/index.html","05b117a83137aac9f6a449cf28f43889"],["/bangumis/index.html","24201e9ad71f4a108828237b4ca13e27"],["/categories/index.html","1ee5ef32ec915ffda97dab8f6b5f36ca"],["/categories/个人总结/index.html","29ce1724e841057e6a4538ba7bce46c0"],["/categories/学习/index.html","e777b49ed28539cc2821d572ae428483"],["/categories/学习/page/2/index.html","6922c016fde4f783a699459f4781fe9d"],["/categories/算法/index.html","eac4d6e75c906132b54245350c7ad987"],["/categories/面试题/index.html","37bbb7135618c578a6a1ae770b6517d0"],["/categories/项目/index.html","ac5ddada68d6b3c3acc63171dc9400ab"],["/css/back.css","d784f0f6e5d6e4229eb288b7947112fd"],["/css/index.css","da2a162dc4f159b181699bb25ed0e9be"],["/css/var.css","171bee52c5d32b71d2b2208d1f502e7f"],["/gallery/index.html","1669ebf26e9bbbc717728b0c75de67f9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","5ad1ac47a7ee616ffa54b436a897f79e"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","fa90bfe740a59ea3e8eee163c9681fea"],["/messageboard/index.html","8d3825d499724971b3b5cbecc7866ff0"],["/page/2/index.html","e1eeba9a6e6f169e95da5ff93989118f"],["/page/3/index.html","d58bef25e2f2b1a4b3c2d8e260781622"],["/page/4/index.html","2edd1ab0ed717d84b68a2855b8e8055d"],["/shuoshuo/index.html","cea717c992d848554ef74d4c43fe3187"],["/sw-register.js","a3f9636ab0ae05e756259a6ae9f9eed5"],["/tags/JVM/index.html","06919966405fd66cea45e6decc0974ec"],["/tags/Ps/index.html","b48cea8e57b0a74b6001d7486fee8e45"],["/tags/index.html","807f47dae0df273a4d3276e3f9d2034e"],["/tags/java/index.html","39a4180b482aeb0752c83d0e22f4f17e"],["/tags/java基础/index.html","6a6d9693a462e6acbe03250a3df279de"],["/tags/假期学习/index.html","0fc5a70b189dea09b22934d0d79583a0"],["/tags/分治法/index.html","7095bd737e6cf39fe15ac052caf663b7"],["/tags/前端/index.html","8b85727d04d6705b1c089a17e08eb2c4"],["/tags/学习/index.html","c91fbaa14eccd2a5c72d4503d2be5d3b"],["/tags/数据库/index.html","5796bd56b077f83fcfe59a029a629448"],["/tags/日常/index.html","236bf886f904e8bf48940c27b68200fa"],["/tags/树/index.html","d4489c4e29aaf3bd8c801ec6646f2196"],["/tags/框架/index.html","0f9b849c771bed1ffb2e5d17a27483ba"],["/tags/源码/index.html","6307ed3d001ae999f2766444dc864613"],["/tags/算法/index.html","89ba4f0106afa171c13fc7409ef50eae"],["/tags/问题/index.html","8c4b535a91718d5792c690b02224287f"],["/tags/集合/index.html","766de515d407a05b22b56660bdcdb617"],["/tags/项目/index.html","95261d9a1c55a73a47145fd55fdc8422"]];
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
