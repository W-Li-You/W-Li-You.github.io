/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","60f2829c50287720869a132a6099fb35"],["/2021/12/05/·自我总结·/index.html","28781e34f219fa553130473ccc576628"],["/2021/12/12/自我总结（三）/index.html","d7f3a2587094179021f02c9c7f2411a4"],["/2021/12/18/自我总结（四）/index.html","d1b2b135dfddcc36023a46f641879b14"],["/2022/01/16/自我总结（五）/index.html","8da05598d8482db4ec062691362ab653"],["/2022/01/23/【寒假总结】/index.html","b8bccceec15ad7aee81b9c29d7f7d562"],["/2022/02/13/【寒假总结】（二）/index.html","5ff6414e2921b50534f67c68bd69125e"],["/2022/02/20/【寒假总结】（三）/index.html","d37056d757c2e95d6a5a1b915509d562"],["/2022/02/26/【每周总结】/index.html","f76cddb3df1f258375a2d34a103bf3ef"],["/2022/03/06/【音乐网站考核总结】/index.html","8eb497d5718e1f295b113691c47aa8ac"],["/2022/03/13/音乐网站考核总结（二）/index.html","1a2123ce1182ae2aa734d2f5bc33d20d"],["/2022/03/18/第四阶段学习总结/index.html","9ca2745588905875bff1fb902c726da1"],["/2022/03/26/SpringMVC/index.html","b4bb223aff993468a497bcfecf753bbd"],["/2022/04/02/关于算法学习/index.html","0875639a2977a101028685379a77992c"],["/2022/04/10/初始项目总结（一）/index.html","2c6242c992a8a991456af8419892f9bc"],["/2022/04/17/项目总结(二)/index.html","0d707065858de08057cd0f68ce832c2d"],["/2022/04/23/音乐项目总结（三）/index.html","e63db0b516db79f8a91cc458b2f413b1"],["/2022/04/30/关于下载音乐的问题/index.html","3bb28357b0c0e48269e8862f1b28c0c7"],["/2022/05/09/项目考核总结/index.html","05acd7ed7dbfd8836d1a640a6da3615c"],["/2022/05/14/有关Springboot的学习/index.html","10206ece24406d3787dfd2c3044b8d33"],["/2022/06/11/关于PS的学习/index.html","16df80ff36041621c69f2426ab5cc25b"],["/2022/06/18/关于redis的学习/index.html","9f30632b8dcee89a4ddbd66cfa749b55"],["/2022/06/25/redis持久化/index.html","d3dfc66354bcb49c3b92c5a31188f61e"],["/2022/07/02/Mybatis-plus常用方法/index.html","5c2202ae825d4178bde85cb61f314c9d"],["/2022/07/23/重建二叉树（算法题）/index.html","4f35aaabf47585fdd024346e3134e67b"],["/2022/08/06/对称的二叉树（算法题）/index.html","e14f0864219e750e37dc79983928b626"],["/2022/09/08/分治法(算法)/index.html","c19f5fccf2c26d9e0221c9a299cb377b"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","09b072ed29cb225883de408a4330700b"],["/2022/09/15/mysql引擎/index.html","94576bc3c44a9f86dc1328b065bcb9f9"],["/2022/10/14/ArrayList/index.html","74799e9ca80d31ba3d21524c61ee0b67"],["/2022/10/17/LinkList/index.html","5fc27e5624601c49e8cf2679736fac77"],["/2022/10/19/Vector/index.html","31b43b5a81de713d65cd57c4eaac2926"],["/2022/10/30/mysql索引/index.html","46cd58157e07f802ac9f070c29461250"],["/2022/11/05/商城项目客服功能/index.html","ec88d1554ef93eb66f3000408a8c0258"],["/2022/11/12/商城项目秒杀功能/index.html","317abe5bf2b0535dd7e2f092fe05b808"],["/2022/11/20/pc寄存器/index.html","5b59f7e9cc982e88a8f19d8202c8bc29"],["/2022/11/27/集合面试题/index.html","65673c7c474488c5ba62e26fafdc0dd4"],["/2022/12/04/本周小结/index.html","b56a643843ed91b642f13dcefa11bb01"],["/about/index.html","f06ced5d89278bf5cf6446f5e52a19e8"],["/archives/2021/11/index.html","9165f7c7102713790c77a213d1ff5ac9"],["/archives/2021/12/index.html","6d61fa7ae8c236ad95fc03c0969a1f2d"],["/archives/2021/index.html","30c0c6d465782af0e274233e36f41f87"],["/archives/2022/01/index.html","837305f2abba213288d643b6721684da"],["/archives/2022/02/index.html","d10ca3b5239d9cccbe61f42dbcd97ada"],["/archives/2022/03/index.html","5ed5d3a06176c3b087c04aa3c6f99a3d"],["/archives/2022/04/index.html","04d5e01b341db7114c3da239bc04417a"],["/archives/2022/05/index.html","a673c6a01c043dc6a3026280ebef49a0"],["/archives/2022/06/index.html","21123a90ded823d45dbb5976cc5bf28c"],["/archives/2022/07/index.html","056796ebbf730aec574668a36a0fdb38"],["/archives/2022/08/index.html","e054175eca5d45f7d65a28911a283bb2"],["/archives/2022/09/index.html","4ec3a2ed5d384ba2001ba2e9d1fbbe9b"],["/archives/2022/10/index.html","2defa2e8cf5603ae83a74e049565488b"],["/archives/2022/11/index.html","004370c7005d2b53b20a49e41e0b9848"],["/archives/2022/12/index.html","0fdcfc3576c97c8b4bf1928390dc1447"],["/archives/2022/index.html","7217915ddce06fad99302a0a71aec871"],["/archives/2022/page/2/index.html","f202073499e39bc84175b3a454159e8d"],["/archives/2022/page/3/index.html","13c2ce89939a91af3fef9cee82abd6ea"],["/archives/2022/page/4/index.html","6c32bc36f59288f673f40f5f10bc67fd"],["/archives/index.html","e985da06f91eedb333372cd5ebaafcd5"],["/archives/page/2/index.html","5b8933dfaa3d6b5a0903a2bfdcd55076"],["/archives/page/3/index.html","188f8721cfee3cc58d3ea96222f0d41a"],["/archives/page/4/index.html","bc19da615a057c487816fc241acf7ef7"],["/bangumis/index.html","d41d792b06a151f24df9b31b7c84ddf5"],["/categories/index.html","63a692057a729e4d901cd13f5b1f33ac"],["/categories/个人总结/index.html","5682200946704f0b81a35797e3da5f3a"],["/categories/学习/index.html","bad31acdde0b119ed3c929d73985da1e"],["/categories/学习/page/2/index.html","e06df9851cd2afe206cf829b5f145f87"],["/categories/算法/index.html","add89769e9408d0505f61d371bdc4915"],["/categories/面试题/index.html","aa14a454ba6ae739c79396f53b72680e"],["/categories/项目/index.html","bd8eca01a64c28ed70ad67a926c783a2"],["/css/back.css","82d197e55b66f026320cc2dd321c50ff"],["/css/index.css","8d4ac128f84d1393eff7fa56aeb38b20"],["/css/var.css","26c55da3c6418b5ab0fa5d411b242c53"],["/gallery/index.html","8c103d05bc2adbe58ec32ff75ca5fc2b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","12a8b0b5355d28efd56e51c897eced3c"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","367733800965b662d72e5d3503e8625b"],["/messageboard/index.html","31fd779134d1b325653c590e5d23788b"],["/page/2/index.html","84af03e9c81f519733c3afb436d8ec09"],["/page/3/index.html","673bd7b1d825fee37ab5fa96d536be79"],["/page/4/index.html","89f3c39783b7196241d56230d044c31c"],["/shuoshuo/index.html","5974afb5494d69270091f49a07a36262"],["/sw-register.js","5826f5a541028d2ccbea668590de9ad8"],["/tags/JVM/index.html","f802452977df635defbdc21b597782ee"],["/tags/Ps/index.html","3bce0e30dd8388c780b917de7dd70982"],["/tags/index.html","88e2a326455f0942070886763a3234de"],["/tags/java/index.html","3fd0d89d8dc8f5bde8da34c8423e99cb"],["/tags/java基础/index.html","a8f02898d6ea2cb96edd2374732f53b4"],["/tags/假期学习/index.html","d6751ca33fbf585103bd07f383d5aaed"],["/tags/分治法/index.html","878352558805b06cec989b3324114a75"],["/tags/前端/index.html","bb73a4c5d7f73818429bfa9d4e027658"],["/tags/学习/index.html","3161e4299c62943901b7cdcd1fe648b3"],["/tags/数据库/index.html","9d22ce420c6924cf22c9149497a9498f"],["/tags/日常/index.html","546e4cc610014614d3fd954e57576b6e"],["/tags/树/index.html","39d2334ff2e21d57e9ff1cb1a0303b14"],["/tags/框架/index.html","05e6e065d160886f26f302538ad28ef8"],["/tags/源码/index.html","9c28efb1c21bfa70f5aaf5a4b53b6249"],["/tags/算法/index.html","16fc87f9a87794c7c2389f6467ac7677"],["/tags/问题/index.html","879b03014baf1c5384e32c5ed9f98099"],["/tags/集合/index.html","d3a291724cbfd62ecf83925c821a1b8b"],["/tags/项目/index.html","91ad8e9f4813a9640a314436a5946fc2"]];
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
