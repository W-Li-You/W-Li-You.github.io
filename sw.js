/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","4e90b674c21539ac48c2d122016cb66f"],["/2021/12/05/·自我总结·/index.html","8b3e603b562664774118d1870f2ed9b7"],["/2021/12/12/自我总结（三）/index.html","ed260d833214c282877749080707ea98"],["/2021/12/18/自我总结（四）/index.html","89b016c9465bb1e51df39ccf674049f4"],["/2022/01/16/自我总结（五）/index.html","f96557bf342714b802f43b71e1bc5210"],["/2022/01/23/【寒假总结】/index.html","ad01c894ecd4fca1270195f8e5af40d3"],["/2022/02/13/【寒假总结】（二）/index.html","695ef2ca4c3f4d6b4081d5677194c6d9"],["/2022/02/20/【寒假总结】（三）/index.html","33defa5b613162d544ff571738489cf2"],["/2022/02/26/【每周总结】/index.html","54e8a92799f74a4ea2471d1b93a024a4"],["/2022/03/06/【音乐网站考核总结】/index.html","79567a66c8f225c5be3772bb49d4ad33"],["/2022/03/13/音乐网站考核总结（二）/index.html","48c460072490e625ee9dfee27c8b2a91"],["/2022/03/18/第四阶段学习总结/index.html","0ef48bdbe61bc1717a15fa8dcddf0c35"],["/2022/03/26/SpringMVC/index.html","5eef303fac4c38fa051e026e1dbc625a"],["/2022/04/02/关于算法学习/index.html","af57345187a85c7e634c946cf39b8a19"],["/2022/04/10/初始项目总结（一）/index.html","9c8761f789d390fea781ba003a730b22"],["/2022/04/17/项目总结(二)/index.html","da117d22bf1eeb0cdb846a9573daada6"],["/2022/04/23/音乐项目总结（三）/index.html","99aa2d2895de2cc7250ec7f2ed5d6766"],["/2022/04/30/关于下载音乐的问题/index.html","763df04ea37aff79cb0dab35406b427f"],["/2022/05/09/项目考核总结/index.html","775e8faa459b73caef101865d629558f"],["/2022/05/14/有关Springboot的学习/index.html","cb13b60d90cc7c17a841c1d1774db98f"],["/2022/06/11/关于PS的学习/index.html","49ffe1663065ae6d2948e130fff760c2"],["/2022/06/18/关于redis的学习/index.html","54bf418ce17edafc89c2eae56c082689"],["/2022/06/25/redis持久化/index.html","d77fdfa72c1bb9654bad498638805de9"],["/2022/07/02/Mybatis-plus常用方法/index.html","e84b6b2de7574859a07cbe3a4f3cc33c"],["/2022/07/23/重建二叉树（算法题）/index.html","213cd5e72f00d471f55b3b4f42d47506"],["/2022/08/06/对称的二叉树（算法题）/index.html","7c572f5de30f6767ab166af3d5b9f0be"],["/2022/09/08/分治法(算法)/index.html","a2dc3b150bfd770b3ea4860470f71a04"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","da345ec24d9614344338e9d7e589f506"],["/2022/09/15/mysql引擎/index.html","2f308dce6b45612b5b0a8fd15bafccf4"],["/2022/10/14/ArrayList/index.html","e62e811f2b097d421bb007ce609fc8dd"],["/2022/10/17/LinkList/index.html","4746524079030bae572a9d1bf91cdfcd"],["/2022/10/19/Vector/index.html","72a7f141735db5a2608078306365ec1e"],["/2022/10/30/mysql索引/index.html","bc7e9ed2815bc92286c5cab0380dabd3"],["/2022/11/05/商城项目客服功能/index.html","25de265b2d14ae373909bf417f8e2310"],["/2022/11/12/商城项目秒杀功能/index.html","9424262bd9df7a7c9768fe31346c0730"],["/2022/11/20/pc寄存器/index.html","6b4834b4915f85e0664dcad7b5a6f307"],["/2022/11/27/集合面试题/index.html","7f7e8f1aafb5fb18c13b0fe489fb85ca"],["/2022/12/04/本周小结/index.html","2a6bd079de1f49336cccdaa32636e222"],["/2022/12/11/全排列（算法）/index.html","0b4d61a0543820da48fa687f87641f85"],["/2023/01/15/背包问题/index.html","d330cb28af0fa3b51696dfa4d0bce3a5"],["/2023/02/05/easyexcel/index.html","e1d27826f0b9e108b75e7f6ac1cca562"],["/2023/02/19/JVM面试题/index.html","a40173dbdc658c946525d8053ec72ec2"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","728adfdede79e2833c21d5f14838a3d1"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","e2f103265fafac61138c02d35abdebc7"],["/2023/03/11/杨辉三角/index.html","7c47e0886e6e22af64db51ec060f43b6"],["/2023/03/19/和为k/index.html","ff89654e4fb7c02672c3b524f980892c"],["/2023/03/26/JUC/index.html","24e53eeb78b29e8a95ba22d0a7a28545"],["/2023/04/02/并发_并发编程的挑战/index.html","687f49b6086546cbb9e1cdb86a8679af"],["/2023/04/08/并发_Java并发机制的底层实现原理/index.html","1e5f4fd1a4046680cf739fd8d75ab3f2"],["/about/index.html","eab00a37ce018a35d4595b0ba459eac3"],["/archives/2021/11/index.html","d941fa26b3b10868e2b009c48bd2ed74"],["/archives/2021/12/index.html","688c63275ef7bfd0f5a41576c3bad68f"],["/archives/2021/index.html","ba2cb54ada5b20b892e1b8a605bb15d7"],["/archives/2022/01/index.html","db619447a6f1e7b231f1744288bf1567"],["/archives/2022/02/index.html","99b4e44e4c1aac52ff2657c18a5100ef"],["/archives/2022/03/index.html","77de8f0ef54804db664cad98d55f3bd5"],["/archives/2022/04/index.html","d28c9afe4db066a9c60ed18baf351f9c"],["/archives/2022/05/index.html","818bb3b32870e9a2890137325e9f5c2f"],["/archives/2022/06/index.html","08189551be3c33152af6442be558aa0c"],["/archives/2022/07/index.html","a680363517e68fb2e39458be14055317"],["/archives/2022/08/index.html","520c42567a244dfd12aa349ffe53abb3"],["/archives/2022/09/index.html","560b1278716106fb7cd77fc71309b6ba"],["/archives/2022/10/index.html","e105e8be11d7bd7eb71f09d02f841cc2"],["/archives/2022/11/index.html","c8e075525337d32418f5f75b3b272aaf"],["/archives/2022/12/index.html","4ed6999875a95ef53a02174739b13668"],["/archives/2022/index.html","79416724b2c3ed6de41908216b7dc0ba"],["/archives/2022/page/2/index.html","1fecfb1ae1fc578ea244e9d26ddd45b7"],["/archives/2022/page/3/index.html","7a655cd976df1cc0845a2769ad3097ec"],["/archives/2022/page/4/index.html","69d4a60496acf094c0dd434e6726b741"],["/archives/2023/01/index.html","eb062f96c1eba7b29f9ddd3b7dc5bd3d"],["/archives/2023/02/index.html","b74b30bc7c7906081fa2b23850232992"],["/archives/2023/03/index.html","0a34bff54a808002785221cd1eb87d81"],["/archives/2023/04/index.html","00ac25da55a816bc2540458b3a3f97b5"],["/archives/2023/index.html","15009b32ff8ef01b7cf7ce05d3e4e7a0"],["/archives/index.html","623d4b6455e2af979b85e2693ab1f878"],["/archives/page/2/index.html","051952a23e01dd55242c3c9826cf6d9e"],["/archives/page/3/index.html","78b12481cb4415c1becae2367cf8c638"],["/archives/page/4/index.html","7eecce4666bc35ba097804915fc8d6ac"],["/archives/page/5/index.html","572d030dba248a99de52793ff5dbf48a"],["/bangumis/index.html","b9ffd5df416119d7a5f60720dc2ed61e"],["/categories/index.html","5b7c9abdf22acdfc8f97264d6db50327"],["/categories/个人总结/index.html","dc53c29c5f5a64b80c96f6fc8e386248"],["/categories/学习/index.html","26ec051671355415750f337248a15a39"],["/categories/学习/page/2/index.html","dc879493d2b77b8d8d60a105e6ec8f21"],["/categories/学习/page/3/index.html","39c0885e38cb13408c1ee259695e6d5f"],["/categories/算法/index.html","66d210605d22337a922e200522ee566e"],["/categories/面试题/index.html","ddb170f26b344c0c579076e894c618a4"],["/categories/项目/index.html","cad2bab1d7f1a4fb02076de374971c1a"],["/css/back.css","ac663d539dc678e8f63807ce5d75e395"],["/css/index.css","030194166ef53cd5f783187814f0fa01"],["/css/var.css","2e55dcfd23aeec4a3a318dede6a3b925"],["/gallery/index.html","035484ce443e5ec09cdfb22c4ea0193e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","54035d090907a965b6974b3c35aa25bd"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","11aeaa05625439406612c17372359517"],["/messageboard/index.html","3ce51c6c947674653ef312a9f521c6ef"],["/page/2/index.html","fadfa8ee5cf32cdb884483b6dbb43fcd"],["/page/3/index.html","108b9169746e3826813c39ed3ed61b5b"],["/page/4/index.html","f97403bc55eedbdfaa2629a6a29bc283"],["/page/5/index.html","0f37025f20f4eea8d0134188a6dec701"],["/shuoshuo/index.html","e7fcd7bc31b2878212408d959ea3452e"],["/sw-register.js","f051cd09cb9546d0b4b6ee709b0c850d"],["/tags/JVM/index.html","498b04e3f23a1b6ade29d6a9bd9b76d8"],["/tags/Ps/index.html","3ffc35bac52361bfc589edfc2b1bdc66"],["/tags/index.html","d2d7e673c78a2e77cbd046eaa3b687e4"],["/tags/java/index.html","f2b4f5a92f3c642219bb6458f89a04a9"],["/tags/java基础/index.html","8c8e2de22858db8a873455704a10dfc2"],["/tags/二分查找/index.html","c079646c0ff70f4682edcab62a1d4881"],["/tags/假期学习/index.html","0fccbc3e8cf987e45ac2d2ffbb8e8f79"],["/tags/分治法/index.html","dcf8b39356a91075b5164113439f89a2"],["/tags/前端/index.html","733268d6fa8462a6b77a5701cec5eba6"],["/tags/前缀和/index.html","4d77404de4dce7b7fdee4f7e6aa688b5"],["/tags/回溯法/index.html","d1d4971ef479b74dbfdaf2d14696340d"],["/tags/学习/index.html","1d72319d37b9a8383f328e57f6c2b897"],["/tags/并发/index.html","63d5ca35b6fd66a44c1b533f9ab31a72"],["/tags/数据库/index.html","7212c53da351fbfd4e9c24b9ab01d0fa"],["/tags/日常/index.html","6c172c2f0d582999b0eb0b8ce09d13f6"],["/tags/树/index.html","378b091ca6a237763ac9aad35ac46ecc"],["/tags/框架/index.html","2184a05925564f1671a7b65caab5544a"],["/tags/源码/index.html","60bb75f66ed9a1a06808e49c137a6880"],["/tags/算法/index.html","9e950cdf8db42e91095a310ac5c4ac7e"],["/tags/问题/index.html","2185762f3a1572506e540fbec1c9d8a2"],["/tags/集合/index.html","cdd715161517a3b926ab93c12624abd5"],["/tags/项目/index.html","5dcad981b3466aa2352d823b6b13679a"]];
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
