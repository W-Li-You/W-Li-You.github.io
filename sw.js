/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","60eeb7485647c683bc645b7d0b97ce55"],["/2021/12/05/·自我总结·/index.html","44267430acd32e43fbb209e17479580e"],["/2021/12/12/自我总结（三）/index.html","cdcaaeb5e17469d6d6799571f08f0036"],["/2021/12/18/自我总结（四）/index.html","5aa92426957adf0fc0c767d7ab122423"],["/2022/01/16/自我总结（五）/index.html","46679cdfda9bb93c736536cf25dcd1a1"],["/2022/01/23/【寒假总结】/index.html","87cd6790eb7902427b33c33ebf50a1ca"],["/2022/02/13/【寒假总结】（二）/index.html","5a40d21f6bca36884274c7eba866edde"],["/2022/02/20/【寒假总结】（三）/index.html","bc052f9ffc25a8663ca657bae1c1546e"],["/2022/02/26/【每周总结】/index.html","ad0b5f65d114b5c16dffc780ae2cad47"],["/2022/03/06/【音乐网站考核总结】/index.html","f58587a48f3d74dc77a164591b82cf95"],["/2022/03/13/音乐网站考核总结（二）/index.html","02463b6b57e72c29364c9931531e1f47"],["/2022/03/18/第四阶段学习总结/index.html","d99b0a1ddc2e62bb15beda80a68c7c59"],["/2022/03/26/SpringMVC/index.html","999de9e6d12b437b7f0a90175ab78267"],["/2022/04/02/关于算法学习/index.html","137fe37d5c540beacb876eebf5784393"],["/2022/04/10/初始项目总结（一）/index.html","757110ddd3796a5c15460ab4466046dd"],["/2022/04/17/项目总结(二)/index.html","3dcd0914f5a69fc6a8899018a4108250"],["/2022/04/23/音乐项目总结（三）/index.html","784232980d92f18ac864904f006a5d75"],["/2022/04/30/关于下载音乐的问题/index.html","d6bae4cae2464e0bc2231fd929e69663"],["/2022/05/09/项目考核总结/index.html","2bb9a954ae1eb11c6ef19c4e12dc71b6"],["/2022/05/14/有关Springboot的学习/index.html","f9ba21074f8d4c21848755fbb6330aa4"],["/2022/06/11/关于PS的学习/index.html","44b1174d4ea35fa81fe560b4f9645682"],["/2022/06/18/关于redis的学习/index.html","0d07125bd7b34a3b5c24dfeeb99bf494"],["/2022/06/25/redis持久化/index.html","6740731a253e497178621a8d8e515216"],["/2022/07/02/Mybatis-plus常用方法/index.html","1b3a9f89bb71f54e7502a87f82f4e70b"],["/2022/07/23/重建二叉树（算法题）/index.html","3850acdbeba26e0e578f97ab62fb5627"],["/2022/08/06/对称的二叉树（算法题）/index.html","c7c45f0eacbcec9d6cdfbf94ff079f74"],["/2022/09/08/分治法(算法)/index.html","a8369c95d1baddfff1def933e46d31e1"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","b0feef337108b86cf216cacedd6e4187"],["/2022/09/15/mysql引擎/index.html","4e2b391d71e1fc1cb1068a1a1c67da1e"],["/2022/10/14/ArrayList/index.html","3b4a6a7836c73a1f47e36be0509ee320"],["/2022/10/17/LinkList/index.html","e202a83456b39f0d47a22292325231e0"],["/2022/10/19/Vector/index.html","c32710fc4e38846df7f57831e9d3befa"],["/2022/10/30/mysql索引/index.html","f1a6d4e8f20547645f4fa81291c67069"],["/2022/11/05/商城项目客服功能/index.html","1cdd0fbaa61752954be89a991081aff3"],["/2022/11/12/商城项目秒杀功能/index.html","f12c082c4a17933d4a4d9ca715714014"],["/2022/11/20/pc寄存器/index.html","8b71328cc740ace80ac2f2e1d81a42f2"],["/2022/11/27/集合面试题/index.html","647f3620408eeaf469a9bd9ee0b3f257"],["/2022/12/04/本周小结/index.html","98bd33ac90fe954e7f3b43d432a91ef3"],["/2022/12/11/全排列（算法）/index.html","f9ae982a7b68421aebb4e4b7e5266480"],["/2023/01/15/背包问题/index.html","46a2b6edd727327c29e51f4835bc2c96"],["/2023/02/05/easyexcel/index.html","fa8b5575f95900952de428cd54c39798"],["/2023/02/19/JVM面试题/index.html","59a90fcddfc5c2214048960023e323a5"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","3715c232215c885865ef0577b1a74589"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","294e495afbeb3bef0cd1201fb4cace1c"],["/2023/03/11/杨辉三角/index.html","9d303654df44a4b1b5280bfa4d3bb6b4"],["/2023/03/19/和为k/index.html","c6fc1748284ff4ee1fd497b39700b956"],["/about/index.html","0323901074c4a6c273027dd2ed5c856a"],["/archives/2021/11/index.html","637af2d63bcafacb1a8f3084cb922e6b"],["/archives/2021/12/index.html","48a1a1ffa0dbcd24a3f7e49e3b445af0"],["/archives/2021/index.html","404734d4396ad0a0d1ba6f1a704a9814"],["/archives/2022/01/index.html","96bdc3998d8da7734ba7cef53604e612"],["/archives/2022/02/index.html","5a6e7799ea627ba58b36155299157f91"],["/archives/2022/03/index.html","86bae5db0a3ff47ef97ad8188df21993"],["/archives/2022/04/index.html","0efaf816b2d0847f6f2e6ad27179a67b"],["/archives/2022/05/index.html","cac9ce50a5e64106fce251846a0999b9"],["/archives/2022/06/index.html","e5a3cd61ac552b991d1db1a9686a4805"],["/archives/2022/07/index.html","ecfdd3d5e51d3e22783a69353fb7c250"],["/archives/2022/08/index.html","287ae8d4dd8ca5b7c0e8f6756537b41d"],["/archives/2022/09/index.html","bb0f06db58520267421dd8398a260d30"],["/archives/2022/10/index.html","1350ac981563f408cb5cd87e0005f6db"],["/archives/2022/11/index.html","90a240052f8070f06926b27e1800f80e"],["/archives/2022/12/index.html","119dd4c2e2cd8be96b4f4391f567e7d8"],["/archives/2022/index.html","387976e694709184035b061d819841cb"],["/archives/2022/page/2/index.html","4a39d37b46efdf93933cc2a670cff56d"],["/archives/2022/page/3/index.html","0d6758511bb3a596787cef06099d82af"],["/archives/2022/page/4/index.html","9d45fb1a21bc38c0c4f671c19fc5e8d6"],["/archives/2023/01/index.html","1cc3784514e8446bb70f77a8880f9af1"],["/archives/2023/02/index.html","89b5ff17b003706bfcc43dd08a3b113b"],["/archives/2023/03/index.html","65a8a7aacdf4d39740386e006fa0139f"],["/archives/2023/index.html","2eddc890afb5e3997815a0ee9d2990a6"],["/archives/index.html","a09b8e9d27f70fb9cc0e7cd5bb1284e1"],["/archives/page/2/index.html","223e72cea6b6a7b40d370142f0a60627"],["/archives/page/3/index.html","b560bd29bd733899f2eb998d6fa3daed"],["/archives/page/4/index.html","3a0d3b06a36f4f59e13ce577b2ccb777"],["/archives/page/5/index.html","c47e2bdb400d2d4082a0f375c52821f7"],["/bangumis/index.html","ca78c9244a61ce047a6c25fc7c8f480f"],["/categories/index.html","d006cb425d569266e535c39a67946456"],["/categories/个人总结/index.html","23ab94600772fa4c7a7cfc7e83d54ecd"],["/categories/学习/index.html","6fc3342e522f0a52315ad155662db139"],["/categories/学习/page/2/index.html","e56370d2ddee4375e7bbb06706cbba3a"],["/categories/算法/index.html","e90ad0c0b2240fdd87c56aeb2aaeb163"],["/categories/面试题/index.html","e6b1cf02955c8cff901602bf25322037"],["/categories/项目/index.html","9ada2f4419827891738baab7fef0cd3c"],["/css/back.css","3f1a48bbb0445da03e2398d53f21f588"],["/css/index.css","a0b0fca938f52552c582139ea0d723ea"],["/css/var.css","8062876eebdbc5afa17888052970546f"],["/gallery/index.html","fb29368750fcf9a33ac8aa3dd54a3ed1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","1f8924a34fd20eff8599c7ab2f7aedd4"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","fc7d750652f347876767594bf80c8a0f"],["/messageboard/index.html","0fb068b6197facee124e78cb6b5f38ba"],["/page/2/index.html","98b1bde25464ffa84325eb039573bf47"],["/page/3/index.html","7d24f651c0f2c5f44954d9da49eae271"],["/page/4/index.html","d51f5e94be8e52edd3c7610eec8396e2"],["/page/5/index.html","0e28defa1abfe85ae1595301fcf637b1"],["/shuoshuo/index.html","cfbcbd9031e4489d3f86d0744ddcfedb"],["/sw-register.js","6a67bd12667da617b44541376ed92c68"],["/tags/JVM/index.html","c4aed7e4055a6aea4ff172cf9164013c"],["/tags/Ps/index.html","53e02de7b8f6733922678387a2c7af5d"],["/tags/index.html","499ffcec947a690c35413d439d1c08fd"],["/tags/java/index.html","ba8402af4f4795e8006dfb595466c39c"],["/tags/java基础/index.html","0b7d8bd6f39139576e8e3538ba98baa3"],["/tags/二分查找/index.html","55f1277d5e49761f96a3756f94cba56e"],["/tags/假期学习/index.html","2dab79dc7879297c1a376a1ab793479c"],["/tags/分治法/index.html","891ec129fe3f13966a818e385be4ef6c"],["/tags/前端/index.html","08857641f2912931406b4a923a8fea3d"],["/tags/前缀和/index.html","b99becbf3cf421f72753f20d995133c2"],["/tags/回溯法/index.html","7f98cee8db4c81686689b2cd837c0686"],["/tags/学习/index.html","3e3c5546ecb12eb5531530472036a0b7"],["/tags/数据库/index.html","4c5b7b92492cafbad67e1e9a8cddb462"],["/tags/日常/index.html","c69b880b3eea7925a84c839f563362e2"],["/tags/树/index.html","846ebc74f03f355b8d27c155d9f84904"],["/tags/框架/index.html","407199befc7814eeea2385df5bbd0a54"],["/tags/源码/index.html","f9ff06c36bc65e966599089313115b64"],["/tags/算法/index.html","1c10fde4b09446dbb0af1f4856dbcdd9"],["/tags/问题/index.html","d34d00f8d160f8cfef7b7ea72797b205"],["/tags/集合/index.html","b12e9980cceac470a397f496346c2937"],["/tags/项目/index.html","e8c1ce083c6a0ad752efffd857e0670e"]];
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
