/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","f674a715f5985beb6888e3a53edb4e71"],["/2021/12/05/·自我总结·/index.html","be0e0e1b760be36498d6eadba79b951f"],["/2021/12/12/自我总结（三）/index.html","23d14243e9a289509dc8a5ec69a82900"],["/2021/12/18/自我总结（四）/index.html","243b1243990f0d40579000a7e91ab897"],["/2022/01/16/自我总结（五）/index.html","2bf2a32884b6a9d0a2c4b08fd4cdfc2d"],["/2022/01/23/【寒假总结】/index.html","ca5bd8f2a99efbc4cd52a014978c99b0"],["/2022/02/13/【寒假总结】（二）/index.html","c40eb166cccd79997504d3db7c03c56f"],["/2022/02/20/【寒假总结】（三）/index.html","5d8d3c428512541db7ce8b9d3b6755cb"],["/2022/02/26/【每周总结】/index.html","71362b8b20f0ab740f7713ab8a96abcd"],["/2022/03/06/【音乐网站考核总结】/index.html","243bf11dd2572cd7ce12faa700210368"],["/2022/03/13/音乐网站考核总结（二）/index.html","afb6d13f38ba3aff4449857f8e0a8795"],["/2022/03/18/第四阶段学习总结/index.html","4756b6abc1cccb01be354f0093d4f204"],["/2022/03/26/SpringMVC/index.html","52c8167bcd78072d541a4d4fddf7d4ee"],["/2022/04/02/关于算法学习/index.html","aa8dccb29c2058107f8d2ea90aa87854"],["/2022/04/10/初始项目总结（一）/index.html","33425673e2d0af7cc898d55804a0ab30"],["/2022/04/17/项目总结(二)/index.html","0395c8a78eb39ae03651a9a3bb2b919b"],["/2022/04/23/音乐项目总结（三）/index.html","f446262cd8a1aebc6fbc6e66d27edf8b"],["/2022/04/30/关于下载音乐的问题/index.html","acf3188f79994dc04086df5447c832f6"],["/2022/05/09/项目考核总结/index.html","0943fdb11bcd432fc736fda5cd958d89"],["/2022/05/14/有关Springboot的学习/index.html","f5ce3efcbe15d3bb9d37bd075e94d2cd"],["/2022/06/11/关于PS的学习/index.html","6df99ccf20d7a57a9d5d8113874b8b52"],["/2022/06/18/关于redis的学习/index.html","3964354ce3d30a79175d284dd2af8816"],["/2022/06/25/redis持久化/index.html","085089ebba9165f3773ce6bffc6163e6"],["/2022/07/02/Mybatis-plus常用方法/index.html","3aa8a61108f0df2ec91ac6aa51abc442"],["/2022/07/23/重建二叉树（算法题）/index.html","8365a3a2fc2d571675e8bb2bd9cab0b4"],["/2022/08/06/对称的二叉树（算法题）/index.html","20cbb97ac441d89b587c3c09d457c0d8"],["/2022/09/08/分治法(算法)/index.html","960dae3946fa532446f6937b8838d49e"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","ccc5523305216e945d5cbcf39307eb79"],["/2022/09/15/mysql引擎/index.html","b2667f7d80635da90ba8ff6b939bfbdc"],["/2022/10/14/ArrayList/index.html","ab14dff261c18c417192db2858d33100"],["/2022/10/17/LinkList/index.html","81b9f3c699f18a6acf6ebf4365dcc19b"],["/2022/10/19/Vector/index.html","ab88b8a5c328771490b4c5a41b26179a"],["/2022/10/30/mysql索引/index.html","9d10ef01198f0e802ad0cf1c2d7a411d"],["/2022/11/05/商城项目客服功能/index.html","3c53d5e7106bb100905aac07bcf11e48"],["/2022/11/12/商城项目秒杀功能/index.html","a0043c6747cefbe87d74612e548ea331"],["/2022/11/20/pc寄存器/index.html","a04c3afcffc92f3939d8b021bc91f88f"],["/2022/11/27/集合面试题/index.html","9992fbad0f3ed1cfeaad8c00ea71c1fc"],["/about/index.html","58985cd85f52a242fc208b013a315b39"],["/archives/2021/11/index.html","efece9d3874a3fd825cb200a33d31627"],["/archives/2021/12/index.html","804b2c89ea1af5a2d83f26a7107219ea"],["/archives/2021/index.html","f224a8a8bbf0b4c8cc24dbda88b51a64"],["/archives/2022/01/index.html","45bd0f35130144a4f29a6873fd6310df"],["/archives/2022/02/index.html","0ff635cec76c77a565a7d06acfd256bf"],["/archives/2022/03/index.html","01ee9a302628428a34ce059a12f7bbc1"],["/archives/2022/04/index.html","6f3f30ee714ba4dbb6d669b3730679dd"],["/archives/2022/05/index.html","f7b90ae24da764ff769d26c925dbc757"],["/archives/2022/06/index.html","9cf31f57a5c69c6a289ff5173d9f13fe"],["/archives/2022/07/index.html","bf0354903616d7c5b2b0badaf3f6b28a"],["/archives/2022/08/index.html","dcfabf62d913995611c1307f241d8c0e"],["/archives/2022/09/index.html","7e38557179958669427889353ea4eea1"],["/archives/2022/10/index.html","64b53a3b0a7dd76e0f24d7d274932580"],["/archives/2022/11/index.html","3f6e5b953c2c93f02fc9e8fd51622921"],["/archives/2022/index.html","d3a667f6d6937c6807584c06546b940b"],["/archives/2022/page/2/index.html","0e1a31ceb79d7224babcb499a536d925"],["/archives/2022/page/3/index.html","7b8632143dcdd72895c0580e3e9f7b0c"],["/archives/2022/page/4/index.html","e071fee52a519a66bfa30f5ce606b7b2"],["/archives/index.html","4a9ab2c91e5095f60b35c68a58e44ac1"],["/archives/page/2/index.html","6e8eba1939d9539817340249e65b2943"],["/archives/page/3/index.html","fa13a5258ec4b0eee1657ac2cfbb1054"],["/archives/page/4/index.html","0b40f17f3b23c3c3943f6fc2f43eb803"],["/bangumis/index.html","e8f599f071bd0863b8fc0a7c6ed53553"],["/categories/index.html","1679e39ac29fd2fdc6688523fef1d537"],["/categories/个人总结/index.html","f64682b355c89c63b876afbaba1976b4"],["/categories/学习/index.html","f62c958914ec2f6da267f0a3bf36b8bc"],["/categories/学习/page/2/index.html","315a73d6fee6ca046b7aa45dc0acc0c4"],["/categories/算法/index.html","ae30a6611e9bb180aef7ff675d0280fc"],["/categories/面试题/index.html","6592b3d19bd5b220677d15e5ac3e2944"],["/categories/项目/index.html","84fd7505060c8aac9b61c11eb4f39f98"],["/css/back.css","827e25cee33ddcd040428ab01fd9a209"],["/css/index.css","1167ca62203f0014d94d72cfe1033905"],["/css/var.css","5bea041a6547e6b731f61ea648b26e88"],["/gallery/index.html","28868a12c5e6251a9d57c64759a8ecbe"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","10b7ccade629c6f917cce5e754015263"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","a575dfd8c0c051efee008db8b649b494"],["/messageboard/index.html","bec4e42ccccb2fd436da2e4887e1bc8f"],["/page/2/index.html","4af85b7ec548d70c89f7d8b5e2005ff3"],["/page/3/index.html","57623d791d7b137ac296a4c15de03d83"],["/page/4/index.html","910eb1650882e6685f785130df9d4f45"],["/shuoshuo/index.html","fc947ec9f31fb44d19ecf47123a27db5"],["/sw-register.js","2dc4349a7d03a5cebade6cb0b28b006b"],["/tags/JVM/index.html","56dd638f19f5e3a45e0fce2505ac241a"],["/tags/Ps/index.html","b39f3c182f40d665d2bd7eaf17a05516"],["/tags/index.html","d34bbf5428ae74303262aa5900a34a6f"],["/tags/java/index.html","6cc9c4806d5d0612f23c9d8d6e7f5543"],["/tags/java基础/index.html","405e7133eeae529dc82fdc44ba07c478"],["/tags/假期学习/index.html","e1b2a7a11e35ff006f3c8b2e272d0bef"],["/tags/分治法/index.html","967e3bebe4da385b53ffa4ec5c54f855"],["/tags/前端/index.html","3c92cb911bb9ee88e170688108432a0e"],["/tags/学习/index.html","15ce8399207bcec9cd4905b1f7253baa"],["/tags/数据库/index.html","55c16c8dd5a5e7261ac8f85d1f38e7c0"],["/tags/日常/index.html","24c97947d4a04b1a9166445f1708eab6"],["/tags/树/index.html","537385c466d3227cf6d92421be6422c8"],["/tags/框架/index.html","e2442170afeb21e5c90bba88f59b5884"],["/tags/源码/index.html","cd1d6dc6210d700a465c178bd36db96c"],["/tags/算法/index.html","5e93e483e039631cb14c9b5eed636e2a"],["/tags/问题/index.html","1740c43eb100e0f59a76fd45c7bd4482"],["/tags/集合/index.html","58461322403e7e7ea5d05e27939f8025"],["/tags/项目/index.html","4aa55cf3020c5da85ea708a249dcd281"]];
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
