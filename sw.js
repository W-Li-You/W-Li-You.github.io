/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","a000df6eb935b7fa07d3f6eefcca523d"],["/2021/12/05/·自我总结·/index.html","b5c66c00aa1c5c000112ef2f5309946c"],["/2021/12/12/自我总结（三）/index.html","ebd2918eb7faec89d1db784f19d2626d"],["/2021/12/18/自我总结（四）/index.html","bbfc6330c7a3c85d195f6e0872a22b9b"],["/2022/01/16/自我总结（五）/index.html","670cb9b177f4e1e306caae1f709d1d25"],["/2022/01/23/【寒假总结】/index.html","de507a9446bc579679fc5c7e53763ca3"],["/2022/02/13/【寒假总结】（二）/index.html","6e68a4d142e65b3325aa0a62a16fe2db"],["/2022/02/20/【寒假总结】（三）/index.html","545ebf78d8710b557237adbcded287c1"],["/2022/02/26/【每周总结】/index.html","113ef4da09641aac5a18b2884a12e821"],["/2022/03/06/【音乐网站考核总结】/index.html","4b1e5da3e74e84e75249e0f079d68bb2"],["/2022/03/13/音乐网站考核总结（二）/index.html","9017b34ef53411cf1130f7684f965b22"],["/2022/03/18/第四阶段学习总结/index.html","19777a2484387ab726cf19368ad56e1c"],["/2022/03/26/SpringMVC/index.html","65ce8cb694f5abade92ae56c2930e405"],["/2022/04/02/关于算法学习/index.html","aa304211262a4fb82c338e3e9e3cebed"],["/2022/04/10/初始项目总结（一）/index.html","e567366ad726f06f5e695032710b42d0"],["/2022/04/17/项目总结(二)/index.html","c0202c653ee1bb8d33ae1394cf68a254"],["/2022/04/23/音乐项目总结（三）/index.html","a983edab7692dce1a341a3ac95f0fff8"],["/2022/04/30/关于下载音乐的问题/index.html","f6e3cc43f0729481ce93ff3ce5a2420a"],["/2022/05/09/项目考核总结/index.html","a6508237cdac153c2086229932980a70"],["/2022/05/14/有关Springboot的学习/index.html","0d9691d13c642152310cfa5a35c001b8"],["/2022/06/11/关于PS的学习/index.html","2ceb6c9056b891f4e0f63e9f2e7ee38e"],["/2022/06/18/关于redis的学习/index.html","681aee1ea1250e2f13ae46e176f045d7"],["/2022/06/25/redis持久化/index.html","8111dfa9557c4904ce6c1d88d692401d"],["/2022/07/02/Mybatis-plus常用方法/index.html","33c36cc577c884e12b7805cd2e2874ac"],["/2022/07/23/重建二叉树（算法题）/index.html","b2d8484a2d45c19fd0e07314918d8f08"],["/2022/08/06/对称的二叉树（算法题）/index.html","134f1ef23cc5db0f6896a653f1ff49b3"],["/2022/09/08/分治法(算法)/index.html","3d9e30ed8894b743a77bc4804ecdd947"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","64eb9f249c8850a0bdfb35c971ea3293"],["/2022/09/15/mysql引擎/index.html","be2392775cfa030ea8613e82ae1ed5dd"],["/2022/10/14/ArrayList/index.html","cd6343d1179e526d04e9247c9af2e743"],["/2022/10/17/LinkList/index.html","f3cc29c8eb99c1cce00b96b81d9f3b00"],["/2022/10/19/Vector/index.html","de901f5279687e343538103bdcb16150"],["/2022/10/30/mysql索引/index.html","775f6db55aae32b752041dc3cc6a240b"],["/2022/11/05/商城项目客服功能/index.html","b0fdc780bbe287ed3f599c2e0511cc2e"],["/2022/11/12/商城项目秒杀功能/index.html","34e0518a8c1cf93103b1cf646c199086"],["/2022/11/20/pc寄存器/index.html","495d673c3523cbaab1ca9a806ea1752a"],["/2022/11/27/集合面试题/index.html","c1b11298e9f130c106b3f49f8e1e1366"],["/2022/12/04/本周小结/index.html","dac1fb09c76c6b01a28b28bcd8655c68"],["/2022/12/11/全排列（算法）/index.html","b58d90047b312fe26b3afb33c6b0cc6a"],["/2023/01/15/背包问题/index.html","2a4807728137fa4f9a9548b8a6c477a2"],["/about/index.html","d92bef1f940456d95e82b689fcbae680"],["/archives/2021/11/index.html","a7173d7067f6f0f746cad75931e125f2"],["/archives/2021/12/index.html","e4eee82ffd79e501a2bf4aeddfceccd7"],["/archives/2021/index.html","ddcd73db236f4bdbe5333b4a5877b95a"],["/archives/2022/01/index.html","eb730c2b410fc3489e5ce7cbce37dce9"],["/archives/2022/02/index.html","703fb2fa07004339a11115bf1183b82f"],["/archives/2022/03/index.html","f243c5001dc7d92d4276f7c6a07937d6"],["/archives/2022/04/index.html","87144d71b83cb198979327e2b7994f2c"],["/archives/2022/05/index.html","2536bac917f0f7df84f26f92392ac82e"],["/archives/2022/06/index.html","25cea4ed586a01aeaf306c429f9fb26e"],["/archives/2022/07/index.html","5e14f73b19efe3737e729d7e7a78921e"],["/archives/2022/08/index.html","993052acbd42cc39453ab63484aeb7ac"],["/archives/2022/09/index.html","9e6d4baf21dfd2e64eb2045f73a6cdb0"],["/archives/2022/10/index.html","1d934b6a5f6c82f2f8231915687841c9"],["/archives/2022/11/index.html","5b38422fb653200513eaaa203d965f1b"],["/archives/2022/12/index.html","0323c0457b7564cf8dff10bb03e871bc"],["/archives/2022/index.html","ab36cba8009b1258e5d9174dd404c4ef"],["/archives/2022/page/2/index.html","871de168da98ad9301adf6265fa334a0"],["/archives/2022/page/3/index.html","7f1561041d110707703fc73205e82c99"],["/archives/2022/page/4/index.html","07092ddfe77e2bb4801ed51542e50287"],["/archives/2023/01/index.html","2d8214364c9aa037b4c6e84dc9c67d07"],["/archives/2023/index.html","0bee4946f706599b6e21843e7520dabf"],["/archives/index.html","0156f5ca670ab5da986505f6693f4c2a"],["/archives/page/2/index.html","f0866e88cc33dbe5738385d854d84e0a"],["/archives/page/3/index.html","796ef38e61ae1103370cc0a947de22ee"],["/archives/page/4/index.html","2716e22eeaff78f7c8f60d7cece3d2c0"],["/bangumis/index.html","1dafb34a90f85b3b2b8d9b350b8e166d"],["/categories/index.html","e3a1cfde13eaabab62a33cd001b86a40"],["/categories/个人总结/index.html","ce9075f260c85255d14db0c189df4bcb"],["/categories/学习/index.html","354bf6ff0a65172d9a594d04364dba31"],["/categories/学习/page/2/index.html","43410643cf2bb860569ca5e65724ec01"],["/categories/算法/index.html","c5d9b931e1e4b3c6f54f9376d513fdec"],["/categories/面试题/index.html","329d0a3cb9b6fc40725b05aa191cae17"],["/categories/项目/index.html","c8be3e16008ac781b3301004f94ab9e3"],["/css/back.css","fd613484ee4fcf3be3048e43c7720639"],["/css/index.css","9c95b96c982257bb7a9dc1eaac28d68a"],["/css/var.css","309fddd6baccd5526de90d79eecde1be"],["/gallery/index.html","9f2d547ba8fe22bda6c6c7a316934825"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","1cab6d73b7838b98cecdee21812263be"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","11bcc309cb37f82da305db8cf7b7a56d"],["/messageboard/index.html","d4f87cd781cf48a009b18fb26929aa4d"],["/page/2/index.html","808f48c212d1a8bcd935c09b62ff1f88"],["/page/3/index.html","7360cd9c190dc581c456bdf57b70ffce"],["/page/4/index.html","52491fe3e169768eb0f9b5918f17225f"],["/shuoshuo/index.html","3268741fab3be8de4ad488fb8746a63f"],["/sw-register.js","8209e59d47ecf15c00c189eeae40f4c8"],["/tags/JVM/index.html","a4175403ffb2de874cafe4b853c1c1b6"],["/tags/Ps/index.html","edaccddec46a9b964b4d17f2e011a776"],["/tags/index.html","9d16c5b3ddf226c34f4127c84f7ee3c0"],["/tags/java/index.html","22598eb57000752c5e012339cf44a824"],["/tags/java基础/index.html","d57ce311453cf735abcfe93027f9c6b9"],["/tags/假期学习/index.html","9c98464957237a0619dd73a65b0195a6"],["/tags/分治法/index.html","01635314b44264d0bf8b5df85f76c257"],["/tags/前端/index.html","8d697bf7f7e60994d14a916b433802a7"],["/tags/回溯法/index.html","6e5e8a9dde5ec8162653d94edaf46192"],["/tags/学习/index.html","1a2e01268431b01ed7cab665037216bc"],["/tags/数据库/index.html","6f0991ae00b47b62394c3f1effcd6724"],["/tags/日常/index.html","1242816f2c95c9e405a6dabaadff8ec1"],["/tags/树/index.html","9e5c26bf8a72dfe6543ed38dbfc606ea"],["/tags/框架/index.html","ac58be2f6552437fb91fc12d06f1baa1"],["/tags/源码/index.html","39a82b581db9d6d4489dd79ee0b37ae6"],["/tags/算法/index.html","0f160e1cadc15cef39fbf3a3f202af0d"],["/tags/问题/index.html","8518466740c19306f386c61d485fd682"],["/tags/集合/index.html","a48d937e8429ae18414c71c242f2416e"],["/tags/项目/index.html","b1de2158523ca592283de8483d80005c"]];
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
