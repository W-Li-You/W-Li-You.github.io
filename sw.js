/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","c8620de4acfe9735f2504563b5059a78"],["/2021/12/05/·自我总结·/index.html","1eb571d77aa0ded9308e1a4e55be6622"],["/2021/12/12/自我总结（三）/index.html","52b023529dafb3c2340f67114b55bac2"],["/2021/12/18/自我总结（四）/index.html","dcbeb4f9439f8f02750e8fd218fa45db"],["/2022/01/16/自我总结（五）/index.html","7058fe6a3234ae069323915a08516605"],["/2022/01/23/【寒假总结】/index.html","7fcf216b7c5c7fe30bd3216d0ec512a3"],["/2022/02/13/【寒假总结】（二）/index.html","45f3feae60bca58842999358a5da885c"],["/2022/02/20/【寒假总结】（三）/index.html","5c5d86f317f917bf1db4e6a8f8429c37"],["/2022/02/26/【每周总结】/index.html","5588ea34de8b87cf426dd0c046b8d7da"],["/2022/03/06/【音乐网站考核总结】/index.html","67485450baa248087d8795607330e60d"],["/2022/03/13/音乐网站考核总结（二）/index.html","341ee1f0762141963ad637eb34c461cd"],["/2022/03/18/第四阶段学习总结/index.html","f8caac00e7ac1890d03dfd3de6fc6d11"],["/2022/03/26/SpringMVC/index.html","e866605cd5eb8b936c3dc3ba94ef5860"],["/2022/04/02/关于算法学习/index.html","0f05d0a93dd047c53bc46c8bd9677c4b"],["/2022/04/10/初始项目总结（一）/index.html","27f699fde29c223608801c0ef2a1ecf0"],["/2022/04/17/项目总结(二)/index.html","9b94e7b8b48dfffc0d163292a65b75e5"],["/2022/04/23/音乐项目总结（三）/index.html","90506cfee0a1da4a1479b4741bfca5a7"],["/2022/04/30/关于下载音乐的问题/index.html","10034be87d351dd9c403de1bc2873733"],["/2022/05/09/项目考核总结/index.html","50fd0c2ec4f8bda2cef11f31af87b4f2"],["/2022/05/14/有关Springboot的学习/index.html","9409aeeb19f5430c71d86b972d6c976f"],["/2022/06/11/关于PS的学习/index.html","9ccd88a04d096c8fe7e70f01ead298a7"],["/2022/06/18/关于redis的学习/index.html","5f672e7666abb07e5678f46caf3ca552"],["/2022/06/25/redis持久化/index.html","c54c7cee86d51d280ef76706348b4682"],["/2022/07/02/Mybatis-plus常用方法/index.html","52acb108ff9765b4f0dead4ff742f13b"],["/2022/07/23/重建二叉树（算法题）/index.html","ccbd05dddb9f4307ef100d8133ab9a26"],["/2022/08/06/对称的二叉树（算法题）/index.html","6932fe9d00e27b1789fd4e5a48ba7f63"],["/2022/09/08/分治法(算法)/index.html","12569c50e2d933881c1e2510b68294ab"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","af620168016ef4d25ef08a364053bf47"],["/2022/09/15/mysql引擎/index.html","9d31a40a99950b805b0028b7a94eef12"],["/2022/10/14/ArrayList/index.html","d7aa888dd9c4a9eafdff7bbbefa2ad4c"],["/2022/10/17/LinkList/index.html","0e8bdc39559e46154b65fc86f5bef59a"],["/2022/10/19/Vector/index.html","a445375467b3f13ab22ecbfb553e5153"],["/2022/10/30/mysql索引/index.html","3ab37ea6cd2f14230b53ea790508cdc7"],["/2022/11/05/商城项目客服功能/index.html","456ee0202191433f286fc5fcf9296624"],["/2022/11/12/商城项目秒杀功能/index.html","be7018ba703095e882b35e60429f3a5e"],["/2022/11/20/pc寄存器/index.html","0dea23785f8546f12031f8bafe93b55c"],["/about/index.html","29b9917cd7a39aef86a564e39a8e318d"],["/archives/2021/11/index.html","6497bdb724536d4d643c35fdb94ff1ee"],["/archives/2021/12/index.html","f642418b49eec87763be376049294b17"],["/archives/2021/index.html","969af4c546a2513484476a6be5904da7"],["/archives/2022/01/index.html","601dfd74d6f3c30ee7be54ba4d1098ee"],["/archives/2022/02/index.html","445397ae48b0116829c95941f037f84b"],["/archives/2022/03/index.html","9f333b33f30ff0e463ad901ff42259e4"],["/archives/2022/04/index.html","bc4d463b05c53edf9bbefb68fa9a15f9"],["/archives/2022/05/index.html","db093581bb239f3783f3b5672b22e145"],["/archives/2022/06/index.html","ed26210f64f2223442b7ca7a3fea0c93"],["/archives/2022/07/index.html","1a26fccd3f5cff6bafdfdd9da372a80b"],["/archives/2022/08/index.html","c68f46f776c1433de90f3c20f08778e8"],["/archives/2022/09/index.html","cfce40b3f64226c7e06abc24147b82c5"],["/archives/2022/10/index.html","c070d0cb8d532a28620debce1a811a73"],["/archives/2022/11/index.html","e57b99a7a35aaf4a4d1751a663b6dcf8"],["/archives/2022/index.html","a629f2285a3cc59b8196c50524614cc3"],["/archives/2022/page/2/index.html","1c23542ad2253bb636378c9d4417d8c2"],["/archives/2022/page/3/index.html","e0f3346414f2f9e973b25e94bebe2c42"],["/archives/2022/page/4/index.html","0a8c62f8449a9a2b385c53b24f5ca894"],["/archives/index.html","9c987e9185832e215d143b61edd8a291"],["/archives/page/2/index.html","ab4d9f355e33198430146479599de776"],["/archives/page/3/index.html","a1c5a11ec934756eee3291e1a8a923b9"],["/archives/page/4/index.html","7befc8af0e8f142def016188549b318b"],["/bangumis/index.html","e93f6e61314d813cada7ede878f95a0b"],["/categories/index.html","041e8ece51bbc4f9776924d046ea7724"],["/categories/个人总结/index.html","2b131e4781ce51167d3a59447818b17c"],["/categories/学习/index.html","0bdbcea8829340405957bb7544be4404"],["/categories/学习/page/2/index.html","9fa58569450bb1c84fe1ab5aa4bf5638"],["/categories/算法/index.html","09d72bda04ec6865dbae3ae622144336"],["/categories/项目/index.html","4d8ec91bfd2146d84f01b6a5d8693b0c"],["/css/back.css","6e2b815a93330dd39cca4d4c4c38da89"],["/css/index.css","2849e47ac5e2f551ee71e76fd9fe84b6"],["/css/var.css","94fc03804d72cb071f46362c381f9104"],["/gallery/index.html","78c1abce4d38e26f24f8418b3559b1e4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","4b14ec1d55bc7f2591d7e25cdd55fa29"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","3b5af4a6fb19d9c773747b80927de470"],["/messageboard/index.html","0292bc8a4eccef430939688596e1ba9e"],["/page/2/index.html","06e579c1f8a9bd7debb9676ffbd12282"],["/page/3/index.html","5639054cf872cf0897ff23193a79bb4c"],["/page/4/index.html","03cb3c1d260f80b86e027c722f2bbac9"],["/shuoshuo/index.html","6235b8e35ca43649464574d02beb726f"],["/sw-register.js","57c30960a70145de9281d104be7e7f2c"],["/tags/JVM/index.html","f8df568f1799a58cf10aef397a02633e"],["/tags/Ps/index.html","a09be02a9b5fc5ec478ac426414983fe"],["/tags/index.html","f6022bc15869a8ecdf29b9c883c9d789"],["/tags/java/index.html","c54b739fea4905bb1450c6dd9c26124f"],["/tags/java基础/index.html","c73cfc9bc94b1214e2abdcd0a088a123"],["/tags/假期学习/index.html","524c9b6ef6133fe30eaff9e02ba58fe3"],["/tags/分治法/index.html","93483553ae155672dfe1a917355e6d22"],["/tags/前端/index.html","18ea56dce280c1be83a881fab4746c7d"],["/tags/数据库/index.html","0f015be010dca9b8bc7c6503c94fa8a4"],["/tags/日常/index.html","8bc22736e3d57f224d59fba227a2ad29"],["/tags/树/index.html","6cbcdefaacb4d2f9dc26c437726bb50a"],["/tags/框架/index.html","7bbe2f4b07485ffef94984b4ebfd71c6"],["/tags/源码/index.html","9e29f1f7a424117fb773c5da75087838"],["/tags/算法/index.html","e7ad98884400cc6094f61436cf44aead"],["/tags/问题/index.html","5d7dd41d5276402e51ffd539ff734e0a"],["/tags/项目/index.html","3c509372226aabf97cf303b31e56c836"]];
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
