/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","d46254319b817143c03f26e0bfd63a01"],["/2021/12/05/·自我总结·/index.html","9a4c61fa4e6b8027f6ff8bb29249cbf1"],["/2021/12/12/自我总结（三）/index.html","20961235796b8f8f59d8ba8cfb305f49"],["/2021/12/18/自我总结（四）/index.html","f71885e5028c36806e62840a3829ff22"],["/2022/01/16/自我总结（五）/index.html","f99dfdbfc1c5ddb0fe5b65260c10321f"],["/2022/01/23/【寒假总结】/index.html","303d0ee45dd1730c521f8c03e99398d7"],["/2022/02/13/【寒假总结】（二）/index.html","a19c00ff3c1e5aad8d8b875df3abe50f"],["/2022/02/20/【寒假总结】（三）/index.html","4f206e658fa4de376686f64f8f22bebd"],["/2022/02/26/【每周总结】/index.html","e477bc2b5b2299037c550e5e1a7bf5d6"],["/2022/03/06/【音乐网站考核总结】/index.html","3c2ef09fbe1c781afa4371a6ecee8604"],["/2022/03/13/音乐网站考核总结（二）/index.html","4d744276438eabc51459977fa55f6e17"],["/2022/03/18/第四阶段学习总结/index.html","7a4c18e6cfe478534291201f7d7e315d"],["/2022/03/26/SpringMVC/index.html","9c8c3d4bdd5e573313c07f94995ccc43"],["/2022/04/02/关于算法学习/index.html","663636f1ce8a7cb6406375442883dc33"],["/2022/04/10/初始项目总结（一）/index.html","8349cfbc2325e63212828f215c5fdc30"],["/2022/04/17/项目总结(二)/index.html","556c51902adf6db4085144724b3a25f6"],["/2022/04/23/音乐项目总结（三）/index.html","85eeddd780d803f7a73a467345fdd4a6"],["/2022/04/30/关于下载音乐的问题/index.html","9b3991e9577db7640145bdec1f5d6f1a"],["/2022/05/09/项目考核总结/index.html","b47b6d016384ff1fb60d0540ddd67a13"],["/2022/05/14/有关Springboot的学习/index.html","c91d243e53cc95e08f4ea7d1d6047a5b"],["/2022/06/11/关于PS的学习/index.html","86dd4ff702a5c543c40e6175972d6fb8"],["/2022/06/18/关于redis的学习/index.html","e306b9ddb0c6261ec625b18ebbb38016"],["/2022/06/25/redis持久化/index.html","0b8a05b9669bac5ec42acecb0262c93a"],["/2022/07/02/Mybatis-plus常用方法/index.html","10f65e24003c6bd7166f14108f6757b1"],["/2022/07/23/重建二叉树（算法题）/index.html","04cf17803e4137f7142294404a2a78ba"],["/2022/08/06/对称的二叉树（算法题）/index.html","b4e687e92740b5503c1f6b469397bfe5"],["/2022/09/08/分治法(算法)/index.html","7a7784db46b529c838bc2982d162bea1"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","5040ac2178eac7c294b265b6b95b9bd4"],["/2022/09/15/mysql引擎/index.html","cfd54d87a68334abd8dd467b51f33de2"],["/2022/10/14/ArrayList/index.html","cff84a4dde68ae8757969eb9d26bb02f"],["/2022/10/17/LinkList/index.html","36661f5f51d55d80adb996beba22dde1"],["/2022/10/19/Vector/index.html","0ea466efd86a0047961c9ae3fbe49f71"],["/2022/10/30/mysql索引/index.html","7373023a12114bd10388a22307700838"],["/2022/11/05/商城项目客服功能/index.html","1da70a78409f1410a114c5a9f6462f00"],["/2022/11/12/商城项目秒杀功能/index.html","aa218dbf5da047296e4989189303a1c7"],["/2022/11/20/pc寄存器/index.html","7d7c7090910dbee741736f42283d0a24"],["/2022/11/27/集合面试题/index.html","dfa991646317de7c6ce0dd27ae2d7867"],["/2022/12/04/本周小结/index.html","a9c610a4d35cc037ad17c7df442c49ee"],["/2022/12/11/全排列（算法）/index.html","dd8d1c7fabf7c82b84d0ba49e697c533"],["/2023/01/15/背包问题/index.html","fe4317c04571414f5ad190359877ddcd"],["/2023/02/05/easyexcel/index.html","6f81690649c4c52ff138fbc2d9e953d0"],["/2023/02/19/JVM面试题/index.html","363169feb0f3bbe0d39bc7f445b82221"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","51e8f9f7414a798db21384dcdf8129d2"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","6da1075b21fa59258e5e70c0de042f23"],["/2023/03/11/杨辉三角/index.html","340f7c08aa90ae3d80a4e83abbda46fb"],["/2023/03/19/和为k/index.html","b08356f9251175d2eebeb45f57fef500"],["/2023/03/26/JUC/index.html","17988949ad3e41e589f26eb0045e917f"],["/2023/04/02/并发_并发编程的挑战/index.html","e552127036fc07f279c18069cc662edf"],["/about/index.html","8ef52bad2a1d02c72291674b485cd753"],["/archives/2021/11/index.html","7411748d9ed77615f892f014f2174890"],["/archives/2021/12/index.html","e7e0734e35171ccd1b167559e62842c4"],["/archives/2021/index.html","808c1861c7dd88244705f60d61e6b996"],["/archives/2022/01/index.html","170c300f7c59fb85ff4d5ede083d846a"],["/archives/2022/02/index.html","871ff12a78a53c758629075cb1746e96"],["/archives/2022/03/index.html","d44175cb5f392ac9443866abe29a10e7"],["/archives/2022/04/index.html","d7e62701ea5a776a95c4900a5489c5aa"],["/archives/2022/05/index.html","fe2f5831e677645a58935fcb13f19b8d"],["/archives/2022/06/index.html","91808b78e78e741b99f05716592b15a4"],["/archives/2022/07/index.html","3d1ef278091871ad1d3421cbef154801"],["/archives/2022/08/index.html","44a32de11627bf207efcefbda1d076fa"],["/archives/2022/09/index.html","9e057ca3f634710eba7d81f479f378cd"],["/archives/2022/10/index.html","7c6d7aafb6f0c2ac7b5312ed5bbf1669"],["/archives/2022/11/index.html","dd2f3da202cb5606673f879865c71e3a"],["/archives/2022/12/index.html","403d994c980f151accd3dbc65dc8d6b6"],["/archives/2022/index.html","ff65f87d4f21322cb1cc2dae88207eb8"],["/archives/2022/page/2/index.html","5e476c06feec9ff54d9f883b82c022b7"],["/archives/2022/page/3/index.html","398410c4b782867c052e3aa9bd36b13c"],["/archives/2022/page/4/index.html","55ec12dc739078fa772d75a6c9a48b65"],["/archives/2023/01/index.html","8c87c606a8cd955aa60d88b052dda0a5"],["/archives/2023/02/index.html","467359b9d43e578a23c3a0addc6f12c1"],["/archives/2023/03/index.html","390cbb59dc55b408e348c6004e01cd5a"],["/archives/2023/04/index.html","daee8713c419d6608b63a6fee6162f5d"],["/archives/2023/index.html","7deb170512a051b49142293e4ed2dad8"],["/archives/index.html","01c3ad531c22ccf582cead8235f44ca8"],["/archives/page/2/index.html","0b22cf3e6a83e2da84a85f3d4fca93eb"],["/archives/page/3/index.html","2ef01ecaa940d76e59ce432455ba9048"],["/archives/page/4/index.html","6f297b2176d6b35c61b84c3401de06d5"],["/archives/page/5/index.html","1d3f83c20e91ad31cdbecef602d74515"],["/bangumis/index.html","9d41d2ee686f9af19b01baec1887ac9e"],["/categories/index.html","ac4d64199f818b0210ae1f3aed102e49"],["/categories/个人总结/index.html","7ebdc66489d3fbbb598473e4ce5ee6c4"],["/categories/学习/index.html","b2d58ac562b7b363b275b962f304caa8"],["/categories/学习/page/2/index.html","449dba0632be5d82a6d249fee42a0d73"],["/categories/算法/index.html","6b78688e8fd34ef5a8071216ffc90056"],["/categories/面试题/index.html","754f61052c09baebcd4f1d2fa5550168"],["/categories/项目/index.html","2c87e9ad8f33b692f63c6711a88993f1"],["/css/back.css","fc4a1a2d68412b45736ae8d6500d0a85"],["/css/index.css","1c94b2c9eec60ae77ae47581fd3bda13"],["/css/var.css","19602cf46a8ea4df219168eac46ce8bb"],["/gallery/index.html","0ac7ceaeda9813aefdd7b63d1198d68c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","3274791173d48b320937b7d2592d7c1f"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","77fdf6d05e6f4e38dd0297866e1adcc5"],["/messageboard/index.html","3f7d7edd7a0605f1328b8c9d60af7ed7"],["/page/2/index.html","cad988023fc61e16765ee925722ee016"],["/page/3/index.html","c7cf25796ee85784f713d1c31de36954"],["/page/4/index.html","d299a8d534e27c508e0765dc7783973c"],["/page/5/index.html","cff95ee9bb5cc40e24e04a869373a996"],["/shuoshuo/index.html","5766b7473740cb1c30ded75eb615a575"],["/sw-register.js","7dbc0c8d1c705f56a3eb83508604c1ce"],["/tags/JVM/index.html","763e306c4dbc0b9473f397213a731405"],["/tags/Ps/index.html","f3f5cbfde158bf8b7937abeeea5dda50"],["/tags/index.html","cd4d127a37b0491e108bc158d929f950"],["/tags/java/index.html","7b0cc021c95d94f3d6d4f3395cc61cbb"],["/tags/java基础/index.html","159bdc468094a7b634d3b6660b06dbaf"],["/tags/二分查找/index.html","33539010c7134bc8cdc6fd353a02b923"],["/tags/假期学习/index.html","d18e62165a0334688f3cd199e8323eb9"],["/tags/分治法/index.html","197588479d57a910008d0c0724562911"],["/tags/前端/index.html","78578a7119fc1b17b38f6333fd308a56"],["/tags/前缀和/index.html","93fe3a5c4fc4f2ba1f4d0ba3c8c3e2b8"],["/tags/回溯法/index.html","22a8a79026e0b07b9f756208e3c076aa"],["/tags/学习/index.html","4c5e8352629812969620f3b2c5cab4c0"],["/tags/并发/index.html","0d03e2936c35f26f541e3f143227d79b"],["/tags/数据库/index.html","f25ab12a83920e6464b8cb171c8c8d6e"],["/tags/日常/index.html","8c1a97bf9727acd8cf0a680d7495f83e"],["/tags/树/index.html","680ad47968c17175835ae6d72fd71c81"],["/tags/框架/index.html","c4f884f51aae41c94ba5c3018f466f66"],["/tags/源码/index.html","7f2b89d17326bed26065729e6a49deb5"],["/tags/算法/index.html","ce4a1c8ccc284c35496b9ff4d5e29495"],["/tags/问题/index.html","da45afd25b3aa014364cee51df0ffbae"],["/tags/集合/index.html","7228c32555d51d6ae9bcbba8d293c10f"],["/tags/项目/index.html","fe458c31afb9c9054e96759a3ceb5c90"]];
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
