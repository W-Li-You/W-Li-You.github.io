/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","2bc2eb32c2daede2609ce4e55d78f489"],["/2021/12/05/·自我总结·/index.html","dde9fcab0669cc92e223e0129401fe58"],["/2021/12/12/自我总结（三）/index.html","1cf4a49c319d1e2878de4da788b4eff4"],["/2021/12/18/自我总结（四）/index.html","4fa78be60f159cfc988c033d9e6eac53"],["/2022/01/16/自我总结（五）/index.html","2f163a9e664ef132f29f407366600f27"],["/2022/01/23/【寒假总结】/index.html","061552e6aee400795b86f8cd8e584ec3"],["/2022/02/13/【寒假总结】（二）/index.html","589a12b8a2afd19083af8fc275e3f188"],["/2022/02/20/【寒假总结】（三）/index.html","88c7006ddb6ebe33df84f3743d0c2106"],["/2022/02/26/【每周总结】/index.html","a70d5323d01fccdf4004e1c0639c0f20"],["/2022/03/06/【音乐网站考核总结】/index.html","8659463ac14336b0ea7e4fa5b17c45b4"],["/2022/03/13/音乐网站考核总结（二）/index.html","d310e37cacd894134101a5cce1ae2c50"],["/2022/03/18/第四阶段学习总结/index.html","0e6b99cc1305242bf895d47ab4d8d467"],["/2022/03/26/SpringMVC/index.html","bfc36e3c32e7f406b4cd0f2c08dc8fe4"],["/2022/04/02/关于算法学习/index.html","e3f1aa186f182791d27316210c618686"],["/2022/04/10/初始项目总结（一）/index.html","26adedccd9223dc81fe313cfcaace2f5"],["/2022/04/17/项目总结(二)/index.html","153adfdb9c678abdcebe95e64bd66d40"],["/2022/04/23/音乐项目总结（三）/index.html","3ffe83cd043c680268dca160ff26927a"],["/2022/04/30/关于下载音乐的问题/index.html","4dc7bfb234d75b147ba1d0911340baf9"],["/2022/05/09/项目考核总结/index.html","757feb02f59422b9ba4225b5ad4a7628"],["/2022/05/14/有关Springboot的学习/index.html","d26528393a01f2bf2eb12479aeb3b99e"],["/2022/06/11/关于PS的学习/index.html","784d452aabc404f67f2266fbbd945014"],["/2022/06/18/关于redis的学习/index.html","3629b893d7b1d7f0c4a29d0ecad6cf8d"],["/2022/06/25/redis持久化/index.html","72706e3a5709c35bea2c136ae1036da4"],["/2022/07/02/Mybatis-plus常用方法/index.html","aefd81cbe4b13755f762c89082d3e1ae"],["/2022/07/23/重建二叉树（算法题）/index.html","74fc64d577dce31cb729c17bb6a78448"],["/2022/08/06/对称的二叉树（算法题）/index.html","6c0c4d22a9d463aa73b61fff1b972b5f"],["/2022/09/08/分治法(算法)/index.html","ec36cc4dff1b088a51788cb37165a671"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","4c82cc2a5a33a46e48d19c104a00629b"],["/2022/09/15/mysql引擎/index.html","d7a74aaf1c4e4f1230376605623a5f33"],["/2022/10/14/ArrayList/index.html","efc4dc503d68cbc6f9c21f45bfd45560"],["/2022/10/17/LinkList/index.html","7dfc167c1364ff3c3d8e9d79bae27707"],["/2022/10/19/Vector/index.html","46504a0d011dcee17511e4c437619b4b"],["/2022/10/30/mysql索引/index.html","e1dea7d2e359f50f103637e6fae299ee"],["/2022/11/05/商城项目客服功能/index.html","359de308d4a9f6e0c071cd39123e680f"],["/2022/11/12/商城项目秒杀功能/index.html","552bf6fcd26871f30535bb21e41ccf15"],["/2022/11/20/pc寄存器/index.html","3c5ef3461b3fea805cdb9deb795f99a8"],["/2022/11/27/集合面试题/index.html","17f8e1d6d4eadab923d2a2794512185f"],["/2022/12/04/本周小结/index.html","74a014906b24189fd86d2c626b19963a"],["/about/index.html","1585faf8f8f5c36e706a7bd2ade65d31"],["/archives/2021/11/index.html","35fc3ae15f6ef0b4b0b9b5a576d12f95"],["/archives/2021/12/index.html","0c63c79b79f273919e1f4ad4e760d7fa"],["/archives/2021/index.html","16adf65d5212b676801c19fe10dccb4a"],["/archives/2022/01/index.html","33988f20e764cbc662a0ab5a66caaa1a"],["/archives/2022/02/index.html","cd2a0e4915b342148091a45229281ceb"],["/archives/2022/03/index.html","5cc0636384eaacbfe5e74b683a1f9d0a"],["/archives/2022/04/index.html","9daf4dece81dae3d44a0e04addba26eb"],["/archives/2022/05/index.html","24e5c0a14b1b5c53c5796bd7168daac2"],["/archives/2022/06/index.html","7fefc7c2f72db2c838b8bf930fc3890a"],["/archives/2022/07/index.html","8fdb3e76836e5c0601872d1b994fbea0"],["/archives/2022/08/index.html","2b8d8ae3afbefa6ba5fbce05961f7f29"],["/archives/2022/09/index.html","8e0c259768b35db0b1496540e9460c44"],["/archives/2022/10/index.html","ecbabbcacb064f1d57a1cb02c2831a8e"],["/archives/2022/11/index.html","b8f1370aaa4fc108f255ffb5226fdca4"],["/archives/2022/12/index.html","b6abb85e2cfa945aaa3982bc2adb73b2"],["/archives/2022/index.html","8b9482cb5165ac3920d3dad5cbbe8782"],["/archives/2022/page/2/index.html","ceef5d0be1dd41f4b679d104c8c84942"],["/archives/2022/page/3/index.html","27093c66e52ebb302a44adf91180dc70"],["/archives/2022/page/4/index.html","260b49c3047e00b04313683f55affc55"],["/archives/index.html","ce3ed945002ed5ce3ab1493ae2a1a39b"],["/archives/page/2/index.html","5fec77c74547991ad05cc7438d695dcc"],["/archives/page/3/index.html","5d97c3f031b9413aaffd209db026a962"],["/archives/page/4/index.html","25d96716ba109e0088c3d0a2869692d5"],["/bangumis/index.html","8700b39d857ee56d4e3b7f789e84dc78"],["/categories/index.html","32785183c6e06a7c4f71df9c40300d21"],["/categories/个人总结/index.html","720388f2e1bae5d15788385775fef083"],["/categories/学习/index.html","6f79521448b6fde4304a850d7c7a7507"],["/categories/学习/page/2/index.html","fd9043537e498147f8d8dc972838d762"],["/categories/算法/index.html","00df315271740c438b16608a0ab4c682"],["/categories/面试题/index.html","7459dbd23d2e80821f875bb827b406d6"],["/categories/项目/index.html","729f35e77c8e19cf083112620d04ad71"],["/css/back.css","157686fa7182e433a9ef6de613b15d50"],["/css/index.css","3ed4f363e8fe07ba915bc0ed63129ed8"],["/css/var.css","bafcc0610388c0d6d11d137e99553c06"],["/gallery/index.html","47fcf2947396bdcddcf2374ceb6ce91c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","5051b125f4908d20087830eb07c40b0c"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","674e1259bb1c57d2e5de6f0f88d43044"],["/messageboard/index.html","92692447ac785984b98e78778e98309f"],["/page/2/index.html","0b60666e484341c0ac7a921b6e14e9f2"],["/page/3/index.html","4746f173ed9fb24188991605837a7978"],["/page/4/index.html","fca6f35e05c8ac41e4cb7bb6b9a5a87d"],["/shuoshuo/index.html","677ea913ae9cb6f3ea69ba925b70bf75"],["/sw-register.js","d01957ed260254f732959055268d40d7"],["/tags/JVM/index.html","842dd14cf5d727902a40f6382e1cf2f0"],["/tags/Ps/index.html","4181eecc29b2879a0bccc3fae5a3218e"],["/tags/index.html","ff032d3caa147bf4ffc65fbbc473d6e2"],["/tags/java/index.html","07ac40be7302d950e08c3202cfb5b947"],["/tags/java基础/index.html","00bfaad61d4ed11ad8ecdef3c82a5785"],["/tags/假期学习/index.html","176ef30552a23be3fc94be342e9ee8ca"],["/tags/分治法/index.html","438ca340f18eaa076513e3cce5656902"],["/tags/前端/index.html","8f814451f92a06c7dfe5889b669a7fc4"],["/tags/学习/index.html","501a90e7613986640eb0f3b917abd8e4"],["/tags/数据库/index.html","792e9b5e25dfde58546e0b9954527f20"],["/tags/日常/index.html","cb9fcd2722d306e17b15a8f382d88417"],["/tags/树/index.html","965c1adbbecab1476b0868bdc0212180"],["/tags/框架/index.html","0b902c86a3ab5f1efe39005acbc2860b"],["/tags/源码/index.html","987f033ea39a6eb0aaba0767511d399e"],["/tags/算法/index.html","0d571282ded9d174e1e3b0c8aa32bc8d"],["/tags/问题/index.html","b246a6b764d3837a238e101918e30858"],["/tags/集合/index.html","981b782ed3d46b6c2310a4abb92502ef"],["/tags/项目/index.html","8830ba8faa9da76de5b2cfb112129378"]];
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
