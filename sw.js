/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","c168847514cce6d7ebae584d722bcd18"],["/2021/12/05/·自我总结·/index.html","a8b83bea55ded17471ecd987284407bf"],["/2021/12/12/自我总结（三）/index.html","6a18dbf3d8b31bc4be1300fd7470b3d9"],["/2021/12/18/自我总结（四）/index.html","35926f897ca85aee1d05197c1f9db596"],["/2022/01/16/自我总结（五）/index.html","f29441656a982f741bb16e0ca1657983"],["/2022/01/23/【寒假总结】/index.html","2e5662c71fe8b2178977e574131caf8f"],["/2022/02/13/【寒假总结】（二）/index.html","c4fdbe3b9a56da691a8b91717ee7a2f0"],["/2022/02/20/【寒假总结】（三）/index.html","e95e59db93d37bbc2cf6f39594b70ecf"],["/2022/02/26/【每周总结】/index.html","9684fafac6001f504e38868d4ac35b72"],["/2022/03/06/【音乐网站考核总结】/index.html","877372c73489b415d1f5a92cadf6b669"],["/2022/03/13/音乐网站考核总结（二）/index.html","635054603c55b001543bba93ce47d3d0"],["/2022/03/18/第四阶段学习总结/index.html","8b28fc2625e8e7779920388e77f2ea40"],["/2022/03/26/SpringMVC/index.html","d985c62fce1428174adfc006f5bcc518"],["/2022/04/02/关于算法学习/index.html","e82caaeb9bfce049f882548081362e82"],["/2022/04/10/初始项目总结（一）/index.html","9b9e51c7cfaa8fd20b9c0ec737ff1c1c"],["/2022/04/17/项目总结(二)/index.html","3f3032b94d97a8efbb63ebda543b83aa"],["/2022/04/23/音乐项目总结（三）/index.html","75b4d234f6daf005aa14a4d9af009ba4"],["/2022/04/30/关于下载音乐的问题/index.html","db3c9357e89b114e451e92a83f3dfd23"],["/2022/05/09/项目考核总结/index.html","af3f2789db5d829be366b0d6da253488"],["/2022/05/14/有关Springboot的学习/index.html","0d5d2ca9b82e96f044682f846f2f5e37"],["/2022/06/11/关于PS的学习/index.html","47b2146c06b8c13078eeea3dd93e1051"],["/2022/06/18/关于redis的学习/index.html","dbece1c318b7e6bb90653898dcfce726"],["/2022/06/25/redis持久化/index.html","5ccaedb01fef3fa31492485883a53b03"],["/2022/07/02/Mybatis-plus常用方法/index.html","2b5d1e3e37849e4ef5ed95da22f26725"],["/2022/07/23/重建二叉树（算法题）/index.html","a6fbf01514a2eb38ee219275e4f87332"],["/2022/08/06/对称的二叉树（算法题）/index.html","df19f104c1b3aafe63a93b4b6fffd3d8"],["/2022/09/08/分治法(算法)/index.html","0dfb121cf67487579d31dc05085f1495"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","a1b8121e218ed36e3f8d37aa7d3933c9"],["/2022/09/15/mysql引擎/index.html","63c8d42dd2accbde7daf0784b2da5b80"],["/2022/10/14/ArrayList/index.html","f9f5295c91e33512d591dac1de777a4c"],["/2022/10/17/LinkList/index.html","3dcc5122b7bc416656182a70cba6416a"],["/2022/10/19/Vector/index.html","c898f15352bb096df3b98aaa6aeb5e7d"],["/2022/10/30/mysql索引/index.html","bdd9776695fd7e67caeba50e6b94b775"],["/2022/11/05/商城项目客服功能/index.html","b025b88171086e1297893f10abc86c65"],["/2022/11/12/商城项目秒杀功能/index.html","7d5ce95fd771b271c1638b2e14d01c4e"],["/2022/11/20/pc寄存器/index.html","923698e3b01d3a26a5d62262ce778a02"],["/2022/11/27/集合面试题/index.html","a5a91b505dda40aef23afd8216fa07d6"],["/2022/12/04/本周小结/index.html","75ef22ee80420d84950b59ff5c873696"],["/2022/12/11/全排列（算法）/index.html","40b7a04302ec10eb61be511cec7baf09"],["/2023/01/15/背包问题/index.html","bd63314dc5f07a569a09eef1f2d1097a"],["/2023/02/05/easyexcel/index.html","5758c7cf90b0204161c3359a6ea4b108"],["/2023/02/19/JVM面试题/index.html","6a97c7b558a9c7c95cf313e8c139f281"],["/about/index.html","52bf899887e61b2e76a5c103da5f8099"],["/archives/2021/11/index.html","eb62508d9aadf6d79ea882c916f8c98c"],["/archives/2021/12/index.html","cda111787ee7681c8962031f15833639"],["/archives/2021/index.html","bad6e77800762a335054e9ea5411d226"],["/archives/2022/01/index.html","85722086a72bca4b66eb621f16fffe52"],["/archives/2022/02/index.html","5a1e532e4c1389baa0e06806c088a3af"],["/archives/2022/03/index.html","7f9b0e719ea9707b24c527a87a22a02a"],["/archives/2022/04/index.html","ab9d29b07af11d035f1049b630f4bfc0"],["/archives/2022/05/index.html","911712e7bd027ea77890f32adc23eb33"],["/archives/2022/06/index.html","5f39bdaf8234bf98e413a9dd58319ab4"],["/archives/2022/07/index.html","c7a6f5dbce369b325517df8b881a6736"],["/archives/2022/08/index.html","68d4f7a2e67a99ab8a8fda9f3437c258"],["/archives/2022/09/index.html","a8b328aca87e54264d1ddef2529c260c"],["/archives/2022/10/index.html","898b0d59c62df8fe4d9dfa6fd24ff50d"],["/archives/2022/11/index.html","a678c7600faa3a44a01f34440a484832"],["/archives/2022/12/index.html","e6fcbd94d1a176ab5859fafe92a263c1"],["/archives/2022/index.html","a405d23e8a06a10ed2f22aeeed0f29cb"],["/archives/2022/page/2/index.html","fdd722900156e4a5d4e12199139c7c8c"],["/archives/2022/page/3/index.html","d871163066234a1c59d43f49382765d5"],["/archives/2022/page/4/index.html","10f01390b09d4ed7935b78cdbf4e4edd"],["/archives/2023/01/index.html","0b8357b21cbc35d698a1f05d43927f0a"],["/archives/2023/02/index.html","c41df095f1d9c7e9dd7db3f29b8845ee"],["/archives/2023/index.html","96db711e8e2a5a414412c1ecc43f8a62"],["/archives/index.html","ea63482e3f2e19bcc2c4378072ed870d"],["/archives/page/2/index.html","6400be4631ccbf3c24d59478e9166cf7"],["/archives/page/3/index.html","b0838401e104bf245b974629c0f89de9"],["/archives/page/4/index.html","f4e0275754c67ea938b4fb91059a0a13"],["/archives/page/5/index.html","77cecbda85eb48bf3a21eb5b3831bb4d"],["/bangumis/index.html","285fbc402db5cc80441ea220b5a138f6"],["/categories/index.html","5464f48b3a4027c7751bbaf282be128d"],["/categories/个人总结/index.html","62ea16cceb3550cd4a685b9c486b3530"],["/categories/学习/index.html","918c7b6a43236edf512c10be06974168"],["/categories/学习/page/2/index.html","f1ba2feb82dfd1e35b6292474706da3a"],["/categories/算法/index.html","d42dba4eaad9b2d91a84578657d90638"],["/categories/面试题/index.html","61f2a75225ccda70411938ea5838d9f4"],["/categories/项目/index.html","8279267b71e785dade43d041ca077a9c"],["/css/back.css","3a38d44e40b585a5a053f96edd2075d6"],["/css/index.css","de4ba766d147df9e62fa90bbb20e2683"],["/css/var.css","9caa6b45b56f067a3cea72f534672f38"],["/gallery/index.html","0efc0994358e0129d4462650f797730e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","5e66484c764f078f28c0e85b82b7ce97"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","61bc1c018aa174613dbc295365aa9dd7"],["/messageboard/index.html","f779768b34568845be818f04c02aa180"],["/page/2/index.html","7bd806b49d2529675f9129444651d6bb"],["/page/3/index.html","b3b5606c5674990ab83b9aadc9fb45dc"],["/page/4/index.html","c33494912c8bd48370b2e9e99e27eab9"],["/page/5/index.html","b7eeef8658a0024e471c645a68e69b1f"],["/shuoshuo/index.html","d66e34a8019bb2c1bc02b3b7d32a9f5a"],["/sw-register.js","694096277cd8daa854bb86309dfd55e2"],["/tags/JVM/index.html","2729a652793e346b93c40fe410163e69"],["/tags/Ps/index.html","bf586336163274a5cefe3d06439fd328"],["/tags/index.html","0e8d53493a57a1948c38c02c89cbe3ed"],["/tags/java/index.html","536925e19f8ab4f309b442163e9e0c57"],["/tags/java基础/index.html","53e7b8bf9a5b7310f486cb86194bd721"],["/tags/假期学习/index.html","964e48813454ba42b07756bbae60803b"],["/tags/分治法/index.html","b8a2a28b97b08244b504e8b6605eac98"],["/tags/前端/index.html","227dc03e3155547e93e2518eaf0baa0d"],["/tags/回溯法/index.html","ad120e23321539d2d77da5e88e1fa790"],["/tags/学习/index.html","a6314a9e81dea0b64265536ce6c72cfb"],["/tags/数据库/index.html","a35a200d215663f36ac9314eca2d701a"],["/tags/日常/index.html","a0a9486dc8eb318c80da0694818d7e8f"],["/tags/树/index.html","7c7b73cb21f7eb3d13d79b298d7ee3f8"],["/tags/框架/index.html","099d1ccd90aa1bd67b9c385b0512631b"],["/tags/源码/index.html","afd19e1a720aaf00909094bbdeadddba"],["/tags/算法/index.html","63d84ceaedaddb43bba3ef76884cf5d6"],["/tags/问题/index.html","844e6cbe5b776ae706fe432fe83d6b96"],["/tags/集合/index.html","60fb7b35fe64debf3f55f818b26f333d"],["/tags/项目/index.html","3743172aec78ff9ddd5cbbff7ab0282d"]];
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
