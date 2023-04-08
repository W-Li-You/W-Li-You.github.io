/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","42b84d54054a86e2acee45dd5b2b30a4"],["/2021/12/05/·自我总结·/index.html","672de6ffb14db4e0d571fcf613cda3a9"],["/2021/12/12/自我总结（三）/index.html","eac7a688abe74a00b3a43e0e4b0ef3ff"],["/2021/12/18/自我总结（四）/index.html","2af7e3f65d1b902473659654b301242f"],["/2022/01/16/自我总结（五）/index.html","7fdc8150db738d739c95689d795be34f"],["/2022/01/23/【寒假总结】/index.html","c46823816b991aebe90accd567474472"],["/2022/02/13/【寒假总结】（二）/index.html","628ef91723ab74a48b92ef62f2e881fe"],["/2022/02/20/【寒假总结】（三）/index.html","83577f28c7ebdcce5010702979cdaf5c"],["/2022/02/26/【每周总结】/index.html","06747dbf6c8a38f09901efc919588efc"],["/2022/03/06/【音乐网站考核总结】/index.html","905cda8bf9e1a57b76c1ff2025580c6f"],["/2022/03/13/音乐网站考核总结（二）/index.html","9038c0f4475bbab8245fbf7822ffb0c6"],["/2022/03/18/第四阶段学习总结/index.html","35bd0466a080ee6e6c513cdd17aa8a06"],["/2022/03/26/SpringMVC/index.html","40380698bde6cc5b2c04d28d5abf641b"],["/2022/04/02/关于算法学习/index.html","c01f11af152c1c3ead93b3401893092a"],["/2022/04/10/初始项目总结（一）/index.html","c3c5799888e68913183c57316f20db45"],["/2022/04/17/项目总结(二)/index.html","91d4c808d24405bb899f04c7de5ad9a7"],["/2022/04/23/音乐项目总结（三）/index.html","50a7299fd53aa91fca4d05aceb983cc2"],["/2022/04/30/关于下载音乐的问题/index.html","c5523a5696283c4de2b509fb64423a9b"],["/2022/05/09/项目考核总结/index.html","57ae990bf6cc1ba8f04efcd839c9aea4"],["/2022/05/14/有关Springboot的学习/index.html","9922fef33d2b570af79c253765922f3a"],["/2022/06/11/关于PS的学习/index.html","5b069bf11919b921f3fa26a324f888a1"],["/2022/06/18/关于redis的学习/index.html","d3507ca77d8d01153fc03175acaeb40b"],["/2022/06/25/redis持久化/index.html","194004f85b03bf67e126759e12b9bdad"],["/2022/07/02/Mybatis-plus常用方法/index.html","078b391d1f72e37e920f1ddf408e07e5"],["/2022/07/23/重建二叉树（算法题）/index.html","1cd6eb1dc059483f88991378071b98da"],["/2022/08/06/对称的二叉树（算法题）/index.html","01f6072f80436b446f4e429dc5ca3c26"],["/2022/09/08/分治法(算法)/index.html","465e80c87627f52701eb653bb49a19ac"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","dcf8017a7a32f9429e8e2c92f297fd7e"],["/2022/09/15/mysql引擎/index.html","4f1bc518372ea6ec68bc66e83451dcef"],["/2022/10/14/ArrayList/index.html","1cab464545c319a7b7f5ecc538b2a0e5"],["/2022/10/17/LinkList/index.html","125aec4dba2d13286f621c070c285bbd"],["/2022/10/19/Vector/index.html","630c3ced2a7685c703b7e7db7e7a74c9"],["/2022/10/30/mysql索引/index.html","4dda93614e0e92ecc412a39ce4917fd8"],["/2022/11/05/商城项目客服功能/index.html","ada898b85c1983a72416a7ad67125d06"],["/2022/11/12/商城项目秒杀功能/index.html","3ed8eab81abcebd9127e053449593008"],["/2022/11/20/pc寄存器/index.html","adca8de17ed9a978184a597c13a9e595"],["/2022/11/27/集合面试题/index.html","ae230b714d7cd0728060446b3eb026b4"],["/2022/12/04/本周小结/index.html","a66ef4044d09cb5e41cbc479f7d65b3a"],["/2022/12/11/全排列（算法）/index.html","ce7f9dd848680feb12d0266e9c4cb3b6"],["/2023/01/15/背包问题/index.html","1d2715a55b0b5fca22b646189fbe13f7"],["/2023/02/05/easyexcel/index.html","6cd9e56cdce409f5a05d8a9e30aeda50"],["/2023/02/19/JVM面试题/index.html","ad9a7cead6de14e82dca6843bf93cd96"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","11cb5b89304d5bdc45e4adab58736b1b"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","ff973b42c8ff5d9c104ddd0d37e042a5"],["/2023/03/11/杨辉三角/index.html","0731558c12961039abc3df3b4d3592cb"],["/2023/03/19/和为k/index.html","8ac7ef4319e3383e1da6ecaf0d8e399e"],["/2023/03/26/JUC/index.html","89ca0d5c46228263e3d623021df435e7"],["/2023/04/02/并发_并发编程的挑战/index.html","85688ad968b299e211f0a612ee8665a6"],["/2023/04/08/并发_Java并发机制的底层实现原理/index.html","a450c55f5c81563c7de7e952b5e42b89"],["/about/index.html","71f9de624da7e87612aa549d2283e6ab"],["/archives/2021/11/index.html","abeac456b5c1acf04a02e886c63e83a1"],["/archives/2021/12/index.html","075ad8cdcc8a32765c6da8b19e005588"],["/archives/2021/index.html","b6b855b94551d059f1c2ddca8d299444"],["/archives/2022/01/index.html","012ca0b5cf5d82f63217613a3087232e"],["/archives/2022/02/index.html","37c12d0242e55d1589a5882f86c67174"],["/archives/2022/03/index.html","3471a3a2c25106cc2b4f66c7181ddab6"],["/archives/2022/04/index.html","e265138e48dd0cc6b82930ab9939789a"],["/archives/2022/05/index.html","2613cca1cc51f689345aee532dbb7ef5"],["/archives/2022/06/index.html","0d965d72227390e714ea4aa55a96f76f"],["/archives/2022/07/index.html","ec845e16e5c91a5786ecf51ee5cad129"],["/archives/2022/08/index.html","085b8f50a520b57680d6ffbe3dcc34fe"],["/archives/2022/09/index.html","202e9d27e394e667cdd1d25016acf1dc"],["/archives/2022/10/index.html","de3581d2f51312f826824403816ecbc9"],["/archives/2022/11/index.html","84e22d2c46d5259c70ab9ff03079bb55"],["/archives/2022/12/index.html","f8b0019f88aa7f2a41a706727ba9bca0"],["/archives/2022/index.html","4372c19dcb918804a102824dcaa09723"],["/archives/2022/page/2/index.html","0fc345fe6360d4b54034939de2df54c8"],["/archives/2022/page/3/index.html","af34c73b41e40a14270486dd02b91bf5"],["/archives/2022/page/4/index.html","f778937bd5636fcb1e7f53968e875beb"],["/archives/2023/01/index.html","d1721d7af1519efbc8548d78c157643b"],["/archives/2023/02/index.html","372506acafec2ee6730cc4e25d4464f4"],["/archives/2023/03/index.html","9d174b1f0f32cf4f19f515159dcca568"],["/archives/2023/04/index.html","dcc0724b65c93a8b6b7919cec55fedbe"],["/archives/2023/index.html","1096091189022131361b765050d1eaf3"],["/archives/index.html","b884d0a9e2d3f36f78b6e7c43699f44d"],["/archives/page/2/index.html","63823c9719f563ba9f224d36aab3ab6e"],["/archives/page/3/index.html","047587d302a2727094ee1ecffb2ef416"],["/archives/page/4/index.html","c37c7086d58d786cb0e8379458f90d03"],["/archives/page/5/index.html","0067001b7dd7fb2b8de7d55e3db9edb4"],["/bangumis/index.html","21fc23a73d62599d940d4111de68e99a"],["/categories/index.html","3035b414c55db1a15b544be8d4220cb1"],["/categories/个人总结/index.html","b515f1eb0fa2fb784718fe93991aabe8"],["/categories/学习/index.html","cc57f16d44f0f1d62e4fb09ea9f65998"],["/categories/学习/page/2/index.html","e153e2814ab359b8b4672dd7b9ed6781"],["/categories/学习/page/3/index.html","e8421b05a68f49bc34c07d26cd3077da"],["/categories/算法/index.html","e6b996806cca14dddbd335070b2b0f90"],["/categories/面试题/index.html","36e7c26ffe1e30dbdaefc2d5b5c35f62"],["/categories/项目/index.html","d42bfef5d4358961e8d95c30c8405791"],["/css/back.css","761cb95e4317efd12d8ec8838a3cec60"],["/css/index.css","ac9ad07d9bb28814b476313f6a172625"],["/css/var.css","bbe06447479b1f307f9a46fecfc1e080"],["/gallery/index.html","03efaa82beb40e90ad8ee5b1a4c01a63"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","98eec1076f84af85aa7065b4f4c6dc0c"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","5171bc2acdac40d85d48f29021eb63b9"],["/messageboard/index.html","79bc3f8ca36fd7b50a102219d4e94734"],["/page/2/index.html","af0e64227ed9b396661637b24c014f35"],["/page/3/index.html","9d6db7a9794bdafb287e7b26850a8238"],["/page/4/index.html","79044b35012e5b294b0ffb8b5e7f1bc0"],["/page/5/index.html","ee5a9dd8c7a9bdb69efa78fdadd35222"],["/shuoshuo/index.html","41b57a8abfebbb65de840e5c7d1d8315"],["/sw-register.js","0c3657959d2a95df272a881103b9857f"],["/tags/JVM/index.html","35fe7f603a7892c9c96a7ede617c1e5e"],["/tags/Ps/index.html","a8c17e476b32e0897f5055d45e1d53a3"],["/tags/index.html","e1d9221784390170de1cecef394e3158"],["/tags/java/index.html","44a805b8f94a13cf17a9b016659aebcb"],["/tags/java基础/index.html","123c1dc5cfb0a172bdad66362ed1eb97"],["/tags/二分查找/index.html","b8137ffd223d250c8713a035756857b8"],["/tags/假期学习/index.html","45cc2e36c74b54ee22e703e28d407d6a"],["/tags/分治法/index.html","0528dd3d7fe40162aaf6ce0bdc010d5f"],["/tags/前端/index.html","fcd900d7f642ee6976de77684df3ad1d"],["/tags/前缀和/index.html","d8f8474227f671d600b73e963de67592"],["/tags/回溯法/index.html","e9fafbaaf30c5f2550de0ee5098bb723"],["/tags/学习/index.html","cf16478bc9ddbfb3be2204bfdf967ddb"],["/tags/并发/index.html","949ab3ca66fc559eb95228cdd80ecf98"],["/tags/数据库/index.html","af492e26fa10e9f84ec4e73929cbf8c9"],["/tags/日常/index.html","bcafb1c394f980ea182e6315baff8640"],["/tags/树/index.html","61bca28cb5aac1d5da7d34c19347a19b"],["/tags/框架/index.html","9abaf69cd1d7b68f6aa7c57b72fcaf8c"],["/tags/源码/index.html","27a3ff122f05ea81a37d3d598505a10d"],["/tags/算法/index.html","2429d49e9d9f30442961e0e3a9e5cea3"],["/tags/问题/index.html","5f21b6ea77b4e9b90ba85f64f155d4f1"],["/tags/集合/index.html","87a1fb23a36cf5c226c091b1260464de"],["/tags/项目/index.html","10e8562b7c6b38f100b0ca51407afe2b"]];
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
