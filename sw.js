/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","62281c29d35579a41cb6506b04906f77"],["/2021/12/05/·自我总结·/index.html","78676c02d5b346e34f68905afb7cad17"],["/2021/12/12/自我总结（三）/index.html","6aa22d528fe2469e8bcea48ef6ddb370"],["/2021/12/18/自我总结（四）/index.html","e781681d96ab5431e9749148f96e9cd5"],["/2022/01/16/自我总结（五）/index.html","5e95d9e510a78acd66630dd0ce5953f3"],["/2022/01/23/【寒假总结】/index.html","d4e3b569f4393878aff8e6aa04e5314d"],["/2022/02/13/【寒假总结】（二）/index.html","c6c79d7b775a520853fd5faa5b0c2fe8"],["/2022/02/20/【寒假总结】（三）/index.html","9116d219b53bcac1d0dc935c0cfd04be"],["/2022/02/26/【每周总结】/index.html","30c3b81c55edcfdfea320f8a2fb1857e"],["/2022/03/06/【音乐网站考核总结】/index.html","c26c55055ce1b4a9dc8dbfe32aa41edd"],["/2022/03/13/音乐网站考核总结（二）/index.html","b25e3f5c67cca748323f0e0c5b25419b"],["/2022/03/18/第四阶段学习总结/index.html","3610f04266174650901ec61a67c5a75b"],["/2022/03/26/SpringMVC/index.html","dd2a86dce50e1f065f540d468d330398"],["/2022/04/02/关于算法学习/index.html","1d95a87ee4a7c12b26557ce854f890d2"],["/2022/04/10/初始项目总结（一）/index.html","ba1e106744c7ff6aa697dedc1eb9d898"],["/2022/04/17/项目总结(二)/index.html","2d0e2e2d4c799685a6e2f069e7e1af22"],["/2022/04/23/音乐项目总结（三）/index.html","5f178ff92f3627acedcd93a177545940"],["/2022/04/30/关于下载音乐的问题/index.html","a9934c4e56ea7084fda8e8f2d69bf267"],["/2022/05/09/项目考核总结/index.html","5070f972a39b27dfeb87c8534a1093cc"],["/2022/05/14/有关Springboot的学习/index.html","17e87a8336717026792d5e0ae19b9405"],["/2022/06/11/关于PS的学习/index.html","21349bfdbe744eed3b05f6964ffdbf0c"],["/2022/06/18/关于redis的学习/index.html","3dc17fe61251e1819f810fce67b3acbb"],["/2022/06/25/redis持久化/index.html","8a94fc92699c8e212bec403a0806b6e3"],["/2022/07/02/Mybatis-plus常用方法/index.html","d4369758890cba81062185a1d3287309"],["/2022/07/23/重建二叉树（算法题）/index.html","8ff4c114ed52a534941006790e83c5df"],["/2022/08/06/对称的二叉树（算法题）/index.html","289086dee2ae3555ccd230e742b3a33f"],["/2022/09/08/分治法(算法)/index.html","bb5ba4b7e9979c2ee6b9860031f7ffac"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","572dc228704480835ebcbbe392820147"],["/2022/09/15/mysql引擎/index.html","43b7237ea5c63440238f0b490fc75b69"],["/2022/10/14/ArrayList/index.html","e21934d7d5469a2117ab0d9f4d4403f5"],["/2022/10/17/LinkList/index.html","4eaead669f16aa00590fcbea2450001e"],["/2022/10/19/Vector/index.html","f1f6b6e7488579ec9b12f99dfe2ebc53"],["/2022/10/30/mysql索引/index.html","7efdb33e67c48a9d0f2abc762fb2af59"],["/2022/11/05/商城项目客服功能/index.html","ec97483f01e8d1928df18cb3a308091c"],["/2022/11/12/商城项目秒杀功能/index.html","846f53ab6323ec7ba551ab68c7f65204"],["/2022/11/20/pc寄存器/index.html","a6bbc6c2911844fe9a868f483d443b13"],["/2022/11/27/集合面试题/index.html","2583f4ecb3ab6fe8dbb41fcb228aac47"],["/about/index.html","51ccdc08bb66c40a61e235749a19fa4a"],["/archives/2021/11/index.html","705fe31122e14a210ff26b06fb48f1cb"],["/archives/2021/12/index.html","0ffc8927cf0c2259ca29ff01ca90db0a"],["/archives/2021/index.html","eed08c2f5f00243ea64f99746de85917"],["/archives/2022/01/index.html","858d5f989409b8e0bb7289da7b007bb7"],["/archives/2022/02/index.html","951a98f1a9c82febada4fae1a854d30f"],["/archives/2022/03/index.html","e8377860add1027eb00177f16ee57c5b"],["/archives/2022/04/index.html","69f47dce3dfa2f2a421df36b4bea764e"],["/archives/2022/05/index.html","72f59ead2327a5b2fae1c154df3d754c"],["/archives/2022/06/index.html","44505db072296661235b580ac8df0dfb"],["/archives/2022/07/index.html","1b85cae54b648c75606234c680a560ff"],["/archives/2022/08/index.html","b09eb4f5b2f3e80c6a358b7f599e6f26"],["/archives/2022/09/index.html","dda080ab1c06ab48108fce319725e59c"],["/archives/2022/10/index.html","c7085d96ddc4e9dbd2d1a006f49d774e"],["/archives/2022/11/index.html","9ec4244e0f590be570005e4c9646dd9d"],["/archives/2022/index.html","efa72c5a04324c19f4d0178dfee594cc"],["/archives/2022/page/2/index.html","fb4969040da2ae5657b2754508c744b1"],["/archives/2022/page/3/index.html","7af8fb189d2af75ab2d95454080a10f1"],["/archives/2022/page/4/index.html","d133adccf1282b409f8cd27be2e45853"],["/archives/index.html","03ab01ec82faddd37a8dad681507be1e"],["/archives/page/2/index.html","68aecce2f0a4b25702e2ccd94b06e7a9"],["/archives/page/3/index.html","768d02796ee86805762da4b295c0c210"],["/archives/page/4/index.html","46c6f10d2f03ee5985b7f58e8fde1920"],["/bangumis/index.html","cca2346817c980239d0ab7b204474cd2"],["/books/index.html","e6e18d3b847468c08a77e457f04149ba"],["/categories/index.html","d81eac9dd50d7c66784e18cf427f2a4b"],["/categories/个人总结/index.html","05820c121aa26850d10bf14c7f384063"],["/categories/学习/index.html","da71c77e6fb56f19d9155ed7218f77cc"],["/categories/学习/page/2/index.html","012adf2204e95ccdf8e747cb0ed13f73"],["/categories/算法/index.html","f24a303187e822e8d2ef3333a25784f0"],["/categories/面试题/index.html","6f703ae6a01e56d1a2e473dec99030be"],["/categories/项目/index.html","584bc6bfe694001e8e22b23fe8875f99"],["/css/back.css","8f1ab41e953881a4b2adfb9bb4981348"],["/css/index.css","e00a921ea5e31604c8adfa12f5bb32b1"],["/css/var.css","5c66eee07c20bac77079727dc9f8dd9e"],["/gallery/index.html","1062cee131db5b02c97f51952dd992f7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","822b72784f82e4e91dc69ce48d781ab8"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","13a807f8e14e1d2b085fc1bb2522c19d"],["/messageboard/index.html","82e89576cfb81c9d00e97cc617590b2a"],["/movies/index.html","fdf0f3645c683d1640fff4c5dabf315b"],["/page/2/index.html","149507fbd6d9d8eb75e241cfb9337f6f"],["/page/3/index.html","5132d1a1c55ed45ccc4f0cda3a832aeb"],["/page/4/index.html","831fc4849abf01914b2b8f4557684016"],["/shuoshuo/index.html","91028b28cc856c12821c31a64d570fa6"],["/sw-register.js","f59ac77183e7fd9e67f911490b3a2080"],["/tags/JVM/index.html","97d2b9ba7b413929f8876a843b1e47f0"],["/tags/Ps/index.html","aa170c2101da81f8fe800658404dedfc"],["/tags/index.html","ba093100c9ef0989df159e32347655d5"],["/tags/java/index.html","48a14fa0d77ff19a37fd2c7ba55e763b"],["/tags/java基础/index.html","f86bbe5968e77c697aadfa5af7d8cf43"],["/tags/假期学习/index.html","9d609c427b911bf91c3e2579b552d9fe"],["/tags/分治法/index.html","f6e6628bf975c8bf4b110f18ad2950e5"],["/tags/前端/index.html","d5d1f4cb25e1417c6a77d07c00ab45b6"],["/tags/学习/index.html","bba60c86c8eb2940641b21dae6a43bb1"],["/tags/数据库/index.html","de089e06189fc30c8b5d758dfce66ea9"],["/tags/日常/index.html","280e96dae2c505c01097bf7005ff027c"],["/tags/树/index.html","6e7f4b9c5f9e3437b54a60587bd2831b"],["/tags/框架/index.html","e15f67f8e23e9b55b102c64455cd3ae2"],["/tags/源码/index.html","89997afed5c177dd788d43be2b0ddad1"],["/tags/算法/index.html","ca844296bbe6b1f4a3162fa79080ccf1"],["/tags/问题/index.html","e5926b7a04e54c8baccde8df1fb6c638"],["/tags/集合/index.html","f719bfaa9f800a637e317ea593055fd9"],["/tags/项目/index.html","96cc095bbff42c2a884f148b6f01c707"]];
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
