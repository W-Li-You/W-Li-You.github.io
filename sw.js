/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","2c8ab4ae66e1d64a01ecea1937322547"],["/2021/12/05/·自我总结·/index.html","d5b162837bee7f84e6c17b00bf17626c"],["/2021/12/12/自我总结（三）/index.html","7f2e7f22c6368787cd9359c8761ca5ea"],["/2021/12/18/自我总结（四）/index.html","63cbb94dd343a355bf23e37df7d3650e"],["/2022/01/16/自我总结（五）/index.html","521c2a3b81674daa25ca9fe99e3ad884"],["/2022/01/23/【寒假总结】/index.html","1746a556149332f369ccfc6b22270204"],["/2022/02/13/【寒假总结】（二）/index.html","52633e073f9db718ce0226279e89c636"],["/2022/02/20/【寒假总结】（三）/index.html","7cfa24360a00fa3638ed097e5d599ad2"],["/2022/02/26/【每周总结】/index.html","29ae1c73be219202c421bcae42cc68b8"],["/2022/03/06/【音乐网站考核总结】/index.html","c718ecc90a4bf85e1813ef31b3217fdf"],["/2022/03/13/音乐网站考核总结（二）/index.html","6b5a8cd0d14ebbe526eaed92ff03275e"],["/2022/03/18/第四阶段学习总结/index.html","49307da016aa2cba3583481bf8f07a0d"],["/2022/03/26/SpringMVC/index.html","82932ea2c9e3009fdf092164e648bc5f"],["/2022/04/02/关于算法学习/index.html","3d350efe05049c6b49d83fc0f8a9a92b"],["/2022/04/10/初始项目总结（一）/index.html","484a01e48ecd755bbce65886f19807eb"],["/2022/04/17/项目总结(二)/index.html","11eb9bc9eb05818f2818582948d61fe5"],["/2022/04/23/音乐项目总结（三）/index.html","f741b551550ab9a7fefae404d7cef99c"],["/2022/04/30/关于下载音乐的问题/index.html","1054294cda89da1933be90b52c508028"],["/2022/05/09/项目考核总结/index.html","eeab887c677250374b65e409d2e1929d"],["/2022/05/14/有关Springboot的学习/index.html","e1c788eaf59a9a1cc20afd40561cf739"],["/2022/06/11/关于PS的学习/index.html","41aebb048ab7e25dfc2febca8a0334b4"],["/2022/06/18/关于redis的学习/index.html","fbdc12b504080ed196500cb64da79292"],["/2022/06/25/redis持久化/index.html","566a64fc27c8560fad2e4a177d4fdf92"],["/2022/07/02/Mybatis-plus常用方法/index.html","2152b1eb8018fcf836b4398216c9c401"],["/2022/07/23/重建二叉树（算法题）/index.html","4c2743d46d4daf72a2e6fe0ed492f89d"],["/2022/08/06/对称的二叉树（算法题）/index.html","b6828240a920e5c7c0bb7bdb45dbc4c8"],["/2022/09/08/分治法(算法)/index.html","16642d0c1865ca82229b54cb0394fca0"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","a96ad80b32ddc6268709a96b2828abed"],["/2022/09/15/mysql引擎/index.html","482d1577da099549ef9eb5a01ca94a13"],["/2022/10/14/ArrayList/index.html","7e78e060c8be7bba9123b3f2af1fbf6f"],["/2022/10/17/LinkList/index.html","08bb133d289524ec19d6bc7c40275b5e"],["/2022/10/19/Vector/index.html","15048612400bca85db13702384710fc7"],["/2022/10/30/mysql索引/index.html","bdd101b80541b393c4256752234c4c6b"],["/2022/11/05/商城项目客服功能/index.html","830242824b17056e1de04db5e442d214"],["/2022/11/12/商城项目秒杀功能/index.html","965eaf455bd90e8a6f7ca49e2bb2c296"],["/2022/11/20/pc寄存器/index.html","93b904055769044aaab318c7bc054e4c"],["/2022/11/27/集合面试题/index.html","e784e89f497706a5e4c55e4214d8df70"],["/2022/12/04/本周小结/index.html","81ccce0f0f428e2addccb22100846479"],["/2022/12/11/全排列（算法）/index.html","4a02b4c37e534af5bfbf6b6edf5dfa14"],["/2023/01/15/背包问题/index.html","ea6ea8a2756e6a3ffb8c0153235a756b"],["/2023/02/05/easyexcel/index.html","d67f7192fd102cff990c96f91597af8e"],["/2023/02/19/JVM面试题/index.html","a233616d80b8df76be982d631828bf78"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","9a8dc5139abd8fc75318c82bf4d9f288"],["/about/index.html","bfb82a098ebcaa2e24a91ecaa3a6c6b1"],["/archives/2021/11/index.html","d2ae0269aff68444d30546351b869f6d"],["/archives/2021/12/index.html","295627659cf0de48f927873ee8bd7d30"],["/archives/2021/index.html","f3d0a8fa309e4deecbba5cf282815cc5"],["/archives/2022/01/index.html","8423e75a1f3b90c1dec6aacf1b046dcf"],["/archives/2022/02/index.html","2c6640c83a293ecec3ede89599302979"],["/archives/2022/03/index.html","bdce368020d596598ea079d6f175cb7c"],["/archives/2022/04/index.html","4f13d8afd172a7e909fd93e21f1ff6fb"],["/archives/2022/05/index.html","b93b08144a88e5153781af39241928ab"],["/archives/2022/06/index.html","e075db073408df9045d815df2d139c33"],["/archives/2022/07/index.html","80a54c63158a324862cbee35d3cc65c9"],["/archives/2022/08/index.html","1f37c5bbf2f255623f973bb2b7d0cdcc"],["/archives/2022/09/index.html","b7939a5a2be1bd7ce04538b281ec7381"],["/archives/2022/10/index.html","ceda7bc0d9d4b3c15901cb8f66accecd"],["/archives/2022/11/index.html","ca3348e194c0277616aa60b1e11552c8"],["/archives/2022/12/index.html","84a0f72584c2bcd427c5a0ab2ce9da5a"],["/archives/2022/index.html","0b3665aa1771338d2bf963398156e3a2"],["/archives/2022/page/2/index.html","40c97ac6d85a04151eb5a2aca414c5d6"],["/archives/2022/page/3/index.html","57599c32df7dbad296046153ab9fbf42"],["/archives/2022/page/4/index.html","9eaadb9271c51efb9e002acd8240566b"],["/archives/2023/01/index.html","22cb978956db7afa4e0922abf913cf48"],["/archives/2023/02/index.html","13d399e94ae29d22d5656214b20e5cc1"],["/archives/2023/index.html","40198fe433735084394f3b44dea5108e"],["/archives/index.html","9d94917553d03967de10ce61876516e3"],["/archives/page/2/index.html","e48bbd3c363332873403c4676cf8412a"],["/archives/page/3/index.html","7ab5370d3b0b5bc72ebc32a4a4c7942b"],["/archives/page/4/index.html","0be0379996eda7d207e0c5709f8f6113"],["/archives/page/5/index.html","5f8023e76f1594ce5ddad328427fae47"],["/bangumis/index.html","80bf8d53334c9ebfefb1a7535c139ff9"],["/categories/index.html","629e1ddd64c1799c3efd8b2c2d7ae953"],["/categories/个人总结/index.html","0ab111367083a0c8479c67d05393ea6b"],["/categories/学习/index.html","ea92531b7718255b9f2134c78b22c628"],["/categories/学习/page/2/index.html","c8b79575d0433f222a2f8ab192549838"],["/categories/算法/index.html","5de51a6281a2789f0f13179b5ba7925c"],["/categories/面试题/index.html","9772789626e919e2a87f94a1d9a6cd3b"],["/categories/项目/index.html","da3c60093a1566699c84b150d4e69817"],["/css/back.css","93f7ed319b604d730b56aa087e8f5691"],["/css/index.css","3d72e7ad9a61a5d6cfcdd54eb228dd1f"],["/css/var.css","8b2b879ab3bfa8a5c3c45c0ee7ff1bcd"],["/gallery/index.html","3bbc37c6efe329f858cb8a36d2a47a9a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","423ac4c1cae90524c23b062fd11239c9"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","d148de70c7707ca6af0a25fa1abd8855"],["/messageboard/index.html","e51633771a3c9e227afdb09288b7d629"],["/page/2/index.html","4a6aeab8d4227431412d95e4c2f6cbac"],["/page/3/index.html","5744ca2bb15287679148e0d23576ffa7"],["/page/4/index.html","5fd58cc88259c5263e65d3a767c36d3e"],["/page/5/index.html","490b72b18bba7fbd59c5ec55fb12ed3e"],["/shuoshuo/index.html","ae8d8c8ea8e634d766cbfe43862162d3"],["/sw-register.js","5944549430566874a03d59b5bd0b951c"],["/tags/JVM/index.html","c6357395c649eda883aa6bfc8db87186"],["/tags/Ps/index.html","867d0e1e5134c1ceffe89bbdf01148db"],["/tags/index.html","1e7e4270b4c05cfa120421d218568736"],["/tags/java/index.html","068442c97957ada4c730a73e46874460"],["/tags/java基础/index.html","8361db841f2f4806b9ee82a7f84d5722"],["/tags/假期学习/index.html","3764ead53b84fd9fcf184662db995427"],["/tags/分治法/index.html","c0983e6dbfd627a0cca200ce08bebb33"],["/tags/前端/index.html","37987837e31e49b5333a122f70a23022"],["/tags/回溯法/index.html","135d590752faa5eb52ade41f74d039cb"],["/tags/学习/index.html","61967cea8824ceaef01e7ad34c1678ac"],["/tags/数据库/index.html","85a17622eedb8ac5b4d3e7b3932f5982"],["/tags/日常/index.html","15aaaa24e19c4ccc245b4a096fe86451"],["/tags/树/index.html","aa7baf055497111200f029332de6a585"],["/tags/框架/index.html","60f491641289d84e88e5d973ee4465d0"],["/tags/源码/index.html","2599a8a50c026ac881d38fbf130706ae"],["/tags/算法/index.html","58f481051efa99bb4a61e09a5f894255"],["/tags/问题/index.html","884e8e5e16d3a03300d17ecb5bbfd4d6"],["/tags/集合/index.html","e1a218eb161f8f4ddb9c961483fd4188"],["/tags/项目/index.html","b9597369a105b998c11156e127df8740"]];
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
