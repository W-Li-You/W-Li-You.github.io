/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","9e1ccb9d811d334cf0fb73db3968c9fb"],["/2021/12/05/·自我总结·/index.html","42619421a7194f11a905ed113f3dc255"],["/2021/12/12/自我总结（三）/index.html","798b36e65a2548f01cfd1c4e35bbf415"],["/2021/12/18/自我总结（四）/index.html","fced469591f55a462293adb9b69e8a1e"],["/2022/01/16/自我总结（五）/index.html","791de6ebe49684f78a74662684d6357a"],["/2022/01/23/【寒假总结】/index.html","b7d7979998834f49139920bdd486e6df"],["/2022/02/13/【寒假总结】（二）/index.html","1d744416b8abb1a171a0ae0010360e2e"],["/2022/02/20/【寒假总结】（三）/index.html","910d4d25e00bc020eb7a0cb242b2846f"],["/2022/02/26/【每周总结】/index.html","7d04df9a93aa41f8a2fabe8622d3ff05"],["/2022/03/06/【音乐网站考核总结】/index.html","c9118148478912b3e8f78acd1f983338"],["/2022/03/13/音乐网站考核总结（二）/index.html","a549af4148134b2d184b61ddb3ac5e80"],["/2022/03/18/第四阶段学习总结/index.html","7e3fccc748309fd867c8b321f1f293ae"],["/2022/03/26/SpringMVC/index.html","83485fb24aa4316508d512451bb9bf99"],["/2022/04/02/关于算法学习/index.html","9cfb9598c895ff803ea76cb8f4e75010"],["/2022/04/10/初始项目总结（一）/index.html","fb907c3abf4a66eb3ef06723a1b6af2b"],["/2022/04/17/项目总结(二)/index.html","159317fd46783355fce7df86f929e9a7"],["/2022/04/23/音乐项目总结（三）/index.html","e5322f2282960bac2e22d85716fcf682"],["/2022/04/30/关于下载音乐的问题/index.html","7e27509bbbf3ce598973934a2525cd6e"],["/2022/05/09/项目考核总结/index.html","1afb28e51ed99beb41555284bfc56d00"],["/2022/05/14/有关Springboot的学习/index.html","4c863cafe5f4f1f366e0a01513679c1e"],["/2022/06/11/关于PS的学习/index.html","6c2944703ff9655253fd5eb28b7a07b8"],["/2022/06/18/关于redis的学习/index.html","f9e66620a03ad48178082c1ede52044b"],["/2022/06/25/redis持久化/index.html","f3b6fd68d02f25282980beab2c522281"],["/2022/07/02/Mybatis-plus常用方法/index.html","08a53af75890a7e32eb77cc8d5d9998b"],["/2022/07/23/重建二叉树（算法题）/index.html","1125a6b6a310bde0dcd6a1bdaf94aeca"],["/2022/08/06/对称的二叉树（算法题）/index.html","beb65e81cde3e0f03fe092099df01a17"],["/2022/09/08/分治法(算法)/index.html","ec8ca203ac9725e0943f032edb1e3b34"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","46e1a3afa99ffbf5a563ffb9e3830905"],["/2022/09/15/mysql引擎/index.html","6e933316ed3619a4712e58b1c9388a60"],["/2022/10/14/ArrayList/index.html","c25f3b4f72c62ea5b59b36f410ee82a2"],["/2022/10/17/LinkList/index.html","89b07dcfd9946e9997a6bc9fc7e003fa"],["/2022/10/19/Vector/index.html","70f03eab5b9b2965cf7e5bc30ac8cb73"],["/2022/10/30/mysql索引/index.html","354c07e018b7bd84ab1fa9be5429ef03"],["/2022/11/05/商城项目客服功能/index.html","34eb655d79082884ef41a797081877dd"],["/2022/11/12/商城项目秒杀功能/index.html","7a38add6c362196a5866f980e36f2dce"],["/2022/11/20/pc寄存器/index.html","7fb4bc7a42bb594f8b614518e982286c"],["/2022/11/27/集合面试题/index.html","e963d3582c03689aa056d77c9f6b80a4"],["/2022/12/04/本周小结/index.html","13a674e34078972bcf2c8aeba89c5bec"],["/2022/12/11/全排列（算法）/index.html","41b1bcb64f8e90ba4ecccab7766b737f"],["/2023/01/15/背包问题/index.html","f48ccc27152a56fb66b90e85213896a6"],["/2023/02/05/easyexcel/index.html","cb3d77c96e61a19aa8608fda597693e8"],["/2023/02/19/JVM面试题/index.html","2b0a545c1a0cd6c5c489d032d9730ab5"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","98a37141fbfca56f201e0f8e7fbedd0e"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","c66f51346fe7cdaa8c789b5bb38e7d5a"],["/2023/03/11/杨辉三角/index.html","88de7f30d11d4bef756c5509e62ed4e9"],["/about/index.html","32ac6ff27252cfd74cdab4b8d541d864"],["/archives/2021/11/index.html","f0bb34269ecd9b8434fc28f1057257d4"],["/archives/2021/12/index.html","30d31cb9a162560eb34ca6525a268852"],["/archives/2021/index.html","18feffa0a61f0b96bb45a9eb19bd2f8c"],["/archives/2022/01/index.html","1c8407fbd0cec470069ba8a3991b8411"],["/archives/2022/02/index.html","e5c683cda62ef024911025d59587bf20"],["/archives/2022/03/index.html","9594fffbc1e26c50e90889a6c8530453"],["/archives/2022/04/index.html","f894d85a6440fd3fa27c3bf5c624b134"],["/archives/2022/05/index.html","b76ac813063332c84b3912fc60f53609"],["/archives/2022/06/index.html","b80f25413edfd59ee0d13b85ac1e136d"],["/archives/2022/07/index.html","59a815ecd126cf62ba6e7fcaccbf97a6"],["/archives/2022/08/index.html","1312d9aaa217784d695db6b38a9c624f"],["/archives/2022/09/index.html","ea59ce2d68168cfd86613eb451cde078"],["/archives/2022/10/index.html","b89a38f20f8d729394a02eb7adf06f54"],["/archives/2022/11/index.html","8572a008ca0111dd7807c948a32b950e"],["/archives/2022/12/index.html","9730e84174a7a86f559d647a1f6aeda2"],["/archives/2022/index.html","5e90b70f17156f07aefefff1491f7e89"],["/archives/2022/page/2/index.html","acfc67182088d9fd9f9c06ec04f90ec6"],["/archives/2022/page/3/index.html","37427fcef2f1f3d61f6dd70c76d47533"],["/archives/2022/page/4/index.html","303b665adf943e1f0fe4d4bdf33702f5"],["/archives/2023/01/index.html","87c57b0def839c8e905254c9c43c525b"],["/archives/2023/02/index.html","c2cb6c3f7f4f4c72a61c9279360f8596"],["/archives/2023/03/index.html","90f1152b3e59b97ae9090028b762244d"],["/archives/2023/index.html","2836da4bac8e20ac56bb8ceb14d5d494"],["/archives/index.html","a79e71e0f20a161d77157045f0f762f9"],["/archives/page/2/index.html","626f7f37fd9d79c83ec5e95f1bc86073"],["/archives/page/3/index.html","5f8ffbea8b811f7e01ae10186b9a0609"],["/archives/page/4/index.html","2b81bd7c5be87f0fe2d3ec98b38e79e8"],["/archives/page/5/index.html","0b586440a1b8548caa8485f85848bfe1"],["/bangumis/index.html","fc4cdca68ea2a8489a95fd425145bb3b"],["/categories/index.html","b5b0804007208590a5e1c63fccf7bc2a"],["/categories/个人总结/index.html","270dbe61736df8774bc55e1606238e84"],["/categories/学习/index.html","ccf7c6d2d62bd9eea59dabdcb6d5fde0"],["/categories/学习/page/2/index.html","ce35451cd0d1a745b98297c74f9f469d"],["/categories/算法/index.html","d2a0452594bdefbf818787521a49c4e8"],["/categories/面试题/index.html","782e5ce2b4a5921579909f15e31fb81c"],["/categories/项目/index.html","1c70412740cb9fdceec63128bb834b63"],["/css/back.css","f0773e49e1f72411220101035c71ae41"],["/css/index.css","4cdbe0b48c37d65f732b676c150ebe0b"],["/css/var.css","835140791f665ad89574243f2bf504ae"],["/gallery/index.html","726998b29fd2d15edd7b6a0abbd4579c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","6b7a9b15aef781b0024b4a475810a160"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","53b97aed37312172fd937880c34ce918"],["/messageboard/index.html","084a97fbfb3dce369ace6a09a02517e0"],["/page/2/index.html","ba92f4001727d51aea6caf3faba2f8c6"],["/page/3/index.html","634309a8625284a70d83b723766fac24"],["/page/4/index.html","1395622600402581e9de17497c00eca6"],["/page/5/index.html","1fe297be18c82d137e9803729d774378"],["/shuoshuo/index.html","f2ce8fe61a6f5aef551ef72c40b34942"],["/sw-register.js","2cea258679d9467eba59acc8a95c164d"],["/tags/JVM/index.html","691ebca2f79b674c9c24cb6374faf896"],["/tags/Ps/index.html","ca99133c02a690357f7b6d88c0ed2168"],["/tags/index.html","5ff76fd3fff17b0ed8fd3d121f92f6ff"],["/tags/java/index.html","a9e180d65ae82b12a1762f5695bf711b"],["/tags/java基础/index.html","e4e2c6d56621d6d0f8cd4c2e69b99d69"],["/tags/二分查找/index.html","6530560fea81d14585d9d631e3fa513a"],["/tags/假期学习/index.html","6cfa24409a92dd30bf3754c7d0a6f48a"],["/tags/分治法/index.html","48f40a1fe2a8a899bbdf275543250a45"],["/tags/前端/index.html","8b96e9e5866d82bdabb44f6b005ebcdb"],["/tags/回溯法/index.html","1387af3b57ecff4584e3d4c6fc30d15e"],["/tags/学习/index.html","c39ea68eff6c38832794b5af6144ff9c"],["/tags/数据库/index.html","ef4a8af3cc3a3446fd3c1dfd2bf12498"],["/tags/日常/index.html","2e144e62db60644b63b66c455c85038a"],["/tags/树/index.html","f4b8fb92ab8d1dcfd15f6ea9d3f38299"],["/tags/框架/index.html","f3fdd37df60f5e3e4c63692f0ff033b1"],["/tags/源码/index.html","ad1e84b3bdc480017dedd69d0dd7129f"],["/tags/算法/index.html","41b1565f33e6e2b7a1c60336bf45fbdc"],["/tags/问题/index.html","fb0bd0f4b61e0286f0e1fb247a3e5664"],["/tags/集合/index.html","fde7e2e77e66e4f4287e987dc28001b6"],["/tags/项目/index.html","ad9bc3dc7268aed65593c461d894048a"]];
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
