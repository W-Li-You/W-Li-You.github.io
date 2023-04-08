/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","a2f0997a14db35cc8d54c54f0e8d1629"],["/2021/12/05/·自我总结·/index.html","4b0ea28ce7c64a0fce64733deff9c5c8"],["/2021/12/12/自我总结（三）/index.html","adb4b6572ca801a4b8fa6b733e20cce6"],["/2021/12/18/自我总结（四）/index.html","a8b902a6ea202e4f0def3ee589fba633"],["/2022/01/16/自我总结（五）/index.html","063b8ffb9569d1a11794184034f4e9c5"],["/2022/01/23/【寒假总结】/index.html","65787ec7a2da1aa8d46c53238d73482b"],["/2022/02/13/【寒假总结】（二）/index.html","8dcfe1e811464cd6bf67ef317fc4cead"],["/2022/02/20/【寒假总结】（三）/index.html","805cba2ed5ff7cfe244ebcb4aa1ef1be"],["/2022/02/26/【每周总结】/index.html","5f850d55fcfa288de143fb7818369158"],["/2022/03/06/【音乐网站考核总结】/index.html","f8a009f9cb4377ee217d8d1df60b53ce"],["/2022/03/13/音乐网站考核总结（二）/index.html","6d685dc80d51a82c0fbcbb1e2c3b8208"],["/2022/03/18/第四阶段学习总结/index.html","366d3742fdfeed50a6983d46cbdb9c32"],["/2022/03/26/SpringMVC/index.html","fc91a79857eb05a24727ba7f1098938a"],["/2022/04/02/关于算法学习/index.html","70506273d3e0d833d9d7b5087d35d9da"],["/2022/04/10/初始项目总结（一）/index.html","1d53b5dab2255ed100541a29df647590"],["/2022/04/17/项目总结(二)/index.html","2a744d40149f45eaa71290941f4ab479"],["/2022/04/23/音乐项目总结（三）/index.html","6be9e0de0e40288e3a5c8ace60a19855"],["/2022/04/30/关于下载音乐的问题/index.html","63e711027592583d13c0701a61f6ce67"],["/2022/05/09/项目考核总结/index.html","cea7a0329d9cd95905291cf612cff0ad"],["/2022/05/14/有关Springboot的学习/index.html","7cc5012daff7d6a662c91a95c4140087"],["/2022/06/11/关于PS的学习/index.html","9656268adaf99d4b2ec52760c5c23305"],["/2022/06/18/关于redis的学习/index.html","5e698efdbe75981cc06f7aa9b83228c7"],["/2022/06/25/redis持久化/index.html","d3d82836e2edc2f7fdfe2f88017e66d0"],["/2022/07/02/Mybatis-plus常用方法/index.html","aa2c787b6163cd5f2ef46ebec9c8c3d3"],["/2022/07/23/重建二叉树（算法题）/index.html","25382b144c11e4e65b3147d1e75909bb"],["/2022/08/06/对称的二叉树（算法题）/index.html","2d3acdb7b45e6041b3efbd0465b70baa"],["/2022/09/08/分治法(算法)/index.html","14180f5e0fe8cb4b16c1ab7cc5050297"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","f191e5177267771c50ae2c6274759bfc"],["/2022/09/15/mysql引擎/index.html","d1325fa9960e3d2b97885a1167dcebec"],["/2022/10/14/ArrayList/index.html","53fd185365d5ce5e5a968255613b4329"],["/2022/10/17/LinkList/index.html","3755d2048ddb32ee9ec0e1caa6c3791b"],["/2022/10/19/Vector/index.html","d04a6cba02d8247707e3e1d630b7514a"],["/2022/10/30/mysql索引/index.html","574423426877b57169cac3b951bdae8a"],["/2022/11/05/商城项目客服功能/index.html","0f12af2ff7a244e6ea59d564a6963a90"],["/2022/11/12/商城项目秒杀功能/index.html","2f60dd72696e3a13599fabe7c089ea0f"],["/2022/11/20/pc寄存器/index.html","5148757098f1c5e1846719ed87a3ffa1"],["/2022/11/27/集合面试题/index.html","9c215847adbc9e8e1ddad9e452ffba75"],["/2022/12/04/本周小结/index.html","1c6512267239e40e7881035f8135d7ab"],["/2022/12/11/全排列（算法）/index.html","4f0dc0a4bdf2ef4d5a7a8d075d047311"],["/2023/01/15/背包问题/index.html","8cd5dce47bbb496215ea59d391bc8a89"],["/2023/02/05/easyexcel/index.html","0f308997030d2d9810cf64cb84d91d8b"],["/2023/02/19/JVM面试题/index.html","5752afc594fe4a91c5bc3c94cd7832a9"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","8367e6b0f775889a7c1bc3896b59836c"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","45fa055f40f2d5b38b9150d08c803f22"],["/2023/03/11/杨辉三角/index.html","e7ad32bab8878a75f9b0a38774b99ecb"],["/2023/03/19/和为k/index.html","d32abcf4a173865abd6c6a415b3e04f5"],["/2023/03/26/JUC/index.html","ccd89b1b9a0140598acfd060cb50fda4"],["/2023/04/02/并发_并发编程的挑战/index.html","bef8c15971868fbdb8cd52521e87c5f6"],["/2023/04/08/并发_Java并发机制的底层实现原理/index.html","e35aeefb51a630bf47a95906e15e4a7d"],["/about/index.html","a9403d23ff855c26a8651bc65960452b"],["/archives/2021/11/index.html","41e9662e0bfa337cfc00ba947c02fa2c"],["/archives/2021/12/index.html","85987bd79242fdf35c8256641d5ae799"],["/archives/2021/index.html","be48cd248e1016145df9e78f893239ae"],["/archives/2022/01/index.html","aa15553cd023454edb93109d73efb7e8"],["/archives/2022/02/index.html","ccd106c3216a424412d5487de4ac3af5"],["/archives/2022/03/index.html","f5d054dc9184d3bf0fae66edf98e8d25"],["/archives/2022/04/index.html","dbf561534417969cd14e0fe2c84ca670"],["/archives/2022/05/index.html","3cd607c54ff5d4f5863c30236f23e7d8"],["/archives/2022/06/index.html","503fbcedb10c00485c4f2eb8780e3565"],["/archives/2022/07/index.html","a6a71f44a83a375fe96fa518fd7a6856"],["/archives/2022/08/index.html","8f9986024a85569934cf40c89ac76a3a"],["/archives/2022/09/index.html","4109f76fb1ec2355e6f435d30302806d"],["/archives/2022/10/index.html","29a90bd93d48a285647436a4511d6259"],["/archives/2022/11/index.html","b2484a18bdbc2a8f9da30e536f3ebd52"],["/archives/2022/12/index.html","de9f3d0755472351d5ae96f782c9eaf3"],["/archives/2022/index.html","2c42d330c42e81436feb2419564da9f2"],["/archives/2022/page/2/index.html","c51bafc87543deb30ee97578452df8fa"],["/archives/2022/page/3/index.html","9afb8071910939b446d90166fc287005"],["/archives/2022/page/4/index.html","3c73b691c5a199ead9b5c246a28dc20d"],["/archives/2023/01/index.html","64b26d9077291f4d8edc0a03d2438884"],["/archives/2023/02/index.html","8ac2bc62a2db05aefce3ecea05a5ae3b"],["/archives/2023/03/index.html","4df69a9404e08241d70ce0b921bd67e7"],["/archives/2023/04/index.html","4377722764b0287c053e9b7270130914"],["/archives/2023/index.html","389da4ac37c0d81ad67c147651817dbf"],["/archives/index.html","5ea32f52aadef413b714e48a65e25a65"],["/archives/page/2/index.html","fcc5cef3dc7b2f73360aeef48829b1d6"],["/archives/page/3/index.html","6a51ccfe550ff5f05b7a85ef31fc78e4"],["/archives/page/4/index.html","a1c2604065d5d78328dd0865a25fb3b4"],["/archives/page/5/index.html","08e7a4a409d21b1c06ce9a8cb8079f81"],["/bangumis/index.html","28d26add60b79c245c80704c6fd3807b"],["/categories/index.html","ecf95cad233ee77cff03d10c3b0e98b5"],["/categories/个人总结/index.html","21b090c7f24cd393486d0ca879a6278d"],["/categories/学习/index.html","970a2d71fab4830c0d3178b0d886b43f"],["/categories/学习/page/2/index.html","f1b38c57d01b1e5600805a863011c794"],["/categories/学习/page/3/index.html","91a364c7e3f495610d0217f4d72c0079"],["/categories/算法/index.html","146eda9b2f510b1988d33da2d0b356ad"],["/categories/面试题/index.html","2d064b84be994999a99d0ad86c86f3b6"],["/categories/项目/index.html","963adb0be49b5d35841ed3cf14987aaf"],["/css/back.css","9a7d63e1b1ae264fe4c4025359ced981"],["/css/index.css","3a9f4e5f3f9fdc26a4e4fcee4f3e893f"],["/css/var.css","c3dc6bfc368ece3473f3aaf7dfff62f8"],["/gallery/index.html","98de734681280f7a26bd62f930820e94"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","e8c13c0be57c8d5415e43e12784b9fe6"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","d920177db53a448bbdb5bdf5123e5951"],["/messageboard/index.html","3188c4ac111a0478189a8e96ee476bce"],["/page/2/index.html","23d4379a56b1138825fdcbd813b217a3"],["/page/3/index.html","17b86a99dd3ba7c5f01c5a3478bedbc3"],["/page/4/index.html","196d7043e8ba33f2b93bbae77c73908a"],["/page/5/index.html","e3c37c52c084872ef8dd25a0f0e49160"],["/shuoshuo/index.html","0e1c5677edf3136db9272418df8748d9"],["/sw-register.js","715e2ea0e4a274ee80e8f069deb2492a"],["/tags/JVM/index.html","4352404bdeb1475feed80c0c9a27843b"],["/tags/Ps/index.html","dcc4abced2232b21add42f55fb807c38"],["/tags/index.html","56e455b1e0ee3d04916a3776175d68b1"],["/tags/java/index.html","7fc269522097d41687903b759e9f3ad2"],["/tags/java基础/index.html","6366514a5f353b984e94f73f69673c6b"],["/tags/二分查找/index.html","be2fa3104760a42a3c02805a5aaed517"],["/tags/假期学习/index.html","2318eadbe869cfa0069d3dd24c054985"],["/tags/分治法/index.html","20b06cac8c6c850dae486cfe047bb389"],["/tags/前端/index.html","10d2f2d1024741c34a958665a4989617"],["/tags/前缀和/index.html","e6d3b450343f108569be935f9ebd54d8"],["/tags/回溯法/index.html","95bf8ec14c0644d4f6abb3684960eb69"],["/tags/学习/index.html","3010395235eb84ab4af1add315eca188"],["/tags/并发/index.html","91b02f1fcb2728f86395c239cd53c6be"],["/tags/数据库/index.html","c310b2de75e1adc46110171d8b80e735"],["/tags/日常/index.html","7b2a1777dcb5d6c9069f7eed7f38d153"],["/tags/树/index.html","0d92636b87b02996ab6992309c025b30"],["/tags/框架/index.html","b336575998d84ec476d622c5ff2a9443"],["/tags/源码/index.html","d7dee0f38396407fdb5439134154d6dc"],["/tags/算法/index.html","bdc67b794320c2ad925f7030184d0bbe"],["/tags/问题/index.html","7f52f41a17feb9c31781f2eb23d6738b"],["/tags/集合/index.html","6bb8e539c9909230c144bd0da39f53a2"],["/tags/项目/index.html","f46b19bb8b20c7a5132f8509ca970776"]];
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
