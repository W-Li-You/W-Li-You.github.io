/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","00b6bacd8c07bab35db7758d5ee93230"],["/2021/12/05/·自我总结·/index.html","d7918de1dee85577117d1b8830695dba"],["/2021/12/12/自我总结（三）/index.html","6aa795e0acae54b6f63b53b13747f8f9"],["/2021/12/18/自我总结（四）/index.html","cff6cd0a3cc2d66d1f8ff077f043826f"],["/2022/01/16/自我总结（五）/index.html","d6dbd6cd2143de85a8be40e967c4390a"],["/2022/01/23/【寒假总结】/index.html","07a137401ab7df9e6f0bf7e4989663c5"],["/2022/02/13/【寒假总结】（二）/index.html","caef5a481018e7de76bbc91df3a6ba9f"],["/2022/02/20/【寒假总结】（三）/index.html","2bbc6854cbcf75b84b0005256e423831"],["/2022/02/26/【每周总结】/index.html","b819b7a3ed83799d77e2d70776f87d79"],["/2022/03/06/【音乐网站考核总结】/index.html","eb52d10280d9af30596abeba72f20846"],["/2022/03/13/音乐网站考核总结（二）/index.html","f93e59a313d11dc3923501a531ff12f0"],["/2022/03/18/第四阶段学习总结/index.html","5da9bd92b496a815c2f810f67ae1c80a"],["/2022/03/26/SpringMVC/index.html","81fe54c99f217df07a4f653f22cbb7e0"],["/2022/04/02/关于算法学习/index.html","538fc1c07a2d24dd9bffca407a57736c"],["/2022/04/10/初始项目总结（一）/index.html","b7d922cd8f5ee330fbd782a72dbc5494"],["/2022/04/17/项目总结(二)/index.html","bea816d3b1407e65635cc8ac8ba6f9be"],["/2022/04/23/音乐项目总结（三）/index.html","fe4c15b11ae1bfdc764121d9b54a9780"],["/2022/04/30/关于下载音乐的问题/index.html","966d41d41e1e8a3f70f0f3eceb5f1582"],["/2022/05/09/项目考核总结/index.html","524c7856ba8be396951fe57b7e68ae34"],["/2022/05/14/有关Springboot的学习/index.html","5b739ada8acc16cf7bcaa16202edbe7a"],["/2022/06/11/关于PS的学习/index.html","5d159812283f6380ae9d08a2b189f58c"],["/2022/06/18/关于redis的学习/index.html","849fa6817b1a5a48837f446f19dca78b"],["/2022/06/25/redis持久化/index.html","93f7b692ea1a066a6c493b6f1300053d"],["/2022/07/02/Mybatis-plus常用方法/index.html","f48718af2b94011e70bfe2e0aebcd61c"],["/2022/07/23/重建二叉树（算法题）/index.html","c7bb94fcce84472f4a56e2802d95607e"],["/2022/08/06/对称的二叉树（算法题）/index.html","505ca7fd74d43a19590f97359afeb7bd"],["/2022/09/08/分治法(算法)/index.html","71d9fad06eb273e729653bd02c4b9e6f"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","b8599e2af0742c6fec709601ef855bef"],["/2022/09/15/mysql引擎/index.html","ced2f9350906028a7f310caad2cfa419"],["/2022/10/14/ArrayList/index.html","22b15ff4a45836fdb0a629734b3b47a3"],["/2022/10/17/LinkList/index.html","ec8223e24dbcac9066025295e34691e4"],["/2022/10/19/Vector/index.html","d2a5888fc5b5f7e2fbe4eb59c8f32abc"],["/2022/10/30/mysql索引/index.html","e2c71959f7a6ce35e7df58453d99d8cc"],["/2022/11/05/商城项目客服功能/index.html","c008bc83f1243c8fc9b2ec42ff31ad66"],["/2022/11/12/商城项目秒杀功能/index.html","8e1553a64ed1fe98964977b7f2bd7f88"],["/2022/11/20/pc寄存器/index.html","98a219f9da6663c8df8dbfa1fe1b5c5d"],["/2022/11/27/集合面试题/index.html","20f6d31a878ef34effdfb8141aeaacc1"],["/about/index.html","5a7b766bd64770d1c1b169975c78252e"],["/archives/2021/11/index.html","329351ec8332c191dd279ea420d8e53e"],["/archives/2021/12/index.html","c62c8d1c231ceafa8229651183e801d9"],["/archives/2021/index.html","843f12ef71cb43c7f3b21c873d371fa4"],["/archives/2022/01/index.html","3e1f6b90c2d9a72c5886fce7de134e13"],["/archives/2022/02/index.html","0f98946b3c22ff5e6bdeae381ef87f2a"],["/archives/2022/03/index.html","d3082964c33a704c38c84dbaf4255c48"],["/archives/2022/04/index.html","b721e31e32d7a2d3ff43885086f569e6"],["/archives/2022/05/index.html","4a63542086ebd1711359194d92d115b9"],["/archives/2022/06/index.html","a875af2ec98ed97b19c144229dea875b"],["/archives/2022/07/index.html","81d3416de41b934f1cfeb2f4a2d3bd5a"],["/archives/2022/08/index.html","538bcaaa6d9481145af692a4b2da507c"],["/archives/2022/09/index.html","5e7e7680d0c15e2ec3ca61dce1c69689"],["/archives/2022/10/index.html","662290d6bcc05fd30484c36cc59bb787"],["/archives/2022/11/index.html","f55bb316ea21d2c1b1e50b041b691fba"],["/archives/2022/index.html","d686e4efb951e488411f18e37ea930d7"],["/archives/2022/page/2/index.html","d66eb3180ef382eda28672bce945a228"],["/archives/2022/page/3/index.html","b1db74a85431529de994f65472841080"],["/archives/2022/page/4/index.html","6f97e5b63ff26b6ec2d968796af3468f"],["/archives/index.html","8e2ed36658a5e46b92a11799e0f4d05d"],["/archives/page/2/index.html","c45cfe669377cb2c50cd254a7689a741"],["/archives/page/3/index.html","fbe482c937ae095de4418c0681ec47c8"],["/archives/page/4/index.html","4354b6e48be1faf679bc2c0a4c62bb7a"],["/bangumis/index.html","03400c4f9adf6e00cc9301f8311883de"],["/books/index.html","6d6361abab282054a6da2cc512751550"],["/categories/index.html","970afdae310759a51d64a428d33a6173"],["/categories/个人总结/index.html","ba83a57592cfaf5f796aee1b69b59bcb"],["/categories/学习/index.html","9f8090c483c2048952a0556b399a55ca"],["/categories/学习/page/2/index.html","e62d7a1a5d1835b3c07cf813a24b0a02"],["/categories/算法/index.html","7a139cbe1dc6073a8945f028e0b5be8d"],["/categories/面试题/index.html","320b768c3e4bc8dcff3afe91c7ab9055"],["/categories/项目/index.html","4360bd3dadad6937e8e2c4ef6eccecaa"],["/css/back.css","287ebac5f4811e28ec6d40b53b8ea464"],["/css/index.css","ec1153b06a4f45bedd39c39b64da504f"],["/css/var.css","e53533fdcaca7f489e1978203aee5b9e"],["/gallery/index.html","54ebe3d6a56e952fb37567ecd8b9f7ee"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","171b3604503cb73181f5c4aa2bd06a06"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","394b0e59afbc55699b79869d6007803e"],["/messageboard/index.html","25d06e074fc2dfd8dd926d83426765eb"],["/movies/index.html","5aa63e70d791c809de8507d8dc8358d9"],["/page/2/index.html","428ac8dc638f7204574ba171b89bcde4"],["/page/3/index.html","1bfe4f893aacff055f7940201d94eae4"],["/page/4/index.html","57d1b2c7f89a47fe33ca4f29281d8772"],["/shuoshuo/index.html","c85294b2befdbea8096dad6603e762da"],["/sw-register.js","3b129a24648f98b4c065a243ea8fc7d9"],["/tags/JVM/index.html","a6dc00235485546afd36ce4965c1423e"],["/tags/Ps/index.html","43d4c1d7c0e6161517cb9790d3a84435"],["/tags/index.html","0d6c99f18baf3cbf5e32532c3cdc5851"],["/tags/java/index.html","195ecac50748e3ad72d4bb8f496886e4"],["/tags/java基础/index.html","60ec4f071675be301c8114247edb0f21"],["/tags/假期学习/index.html","e394f1da77840327f0890a6d222165e0"],["/tags/分治法/index.html","ca8b51c952a3d150dba6f32f72c54453"],["/tags/前端/index.html","212d9de1e85934eb3f23898c6adca8b7"],["/tags/学习/index.html","063f3504fd0993126b09a12e50332728"],["/tags/数据库/index.html","22e045615dc14c32aaede05869a439fd"],["/tags/日常/index.html","610584d7bae168b7633bbb77fbafeab3"],["/tags/树/index.html","d6847d56de04f84efb0b4d9956627cc1"],["/tags/框架/index.html","841a074aeb64f9f97b899fb5ce08b811"],["/tags/源码/index.html","65e848f6d03f50281e9f962af9b99a72"],["/tags/算法/index.html","60b4851a33206810af0d06f670155d81"],["/tags/问题/index.html","787c68d9af912c038ea3e2b945d83ac4"],["/tags/集合/index.html","aa3f8b6b2667627e255217d69651f638"],["/tags/项目/index.html","99bebd15ab814763e8d3ce2446e6ec8a"]];
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
