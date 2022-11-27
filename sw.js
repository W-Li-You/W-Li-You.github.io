/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","c33ab74db4183c552f18c273817d786b"],["/2021/12/05/·自我总结·/index.html","3c6f771e8f9b263a76c8c93cab8e6e5a"],["/2021/12/12/自我总结（三）/index.html","9f812d63f824b7783340059226f807c7"],["/2021/12/18/自我总结（四）/index.html","6df445728f1f48cd138fdc54e42b4b6f"],["/2022/01/16/自我总结（五）/index.html","322d35640d4612c0f119095f0053635b"],["/2022/01/23/【寒假总结】/index.html","f017fa4c42370e243c56fc0ada37738d"],["/2022/02/13/【寒假总结】（二）/index.html","b1bb0c13541428c5a4a5e4a862dbba89"],["/2022/02/20/【寒假总结】（三）/index.html","2282b7113bf72473746e5337328c6e29"],["/2022/02/26/【每周总结】/index.html","591886ee852b4c0e6a7e2135dfb00a10"],["/2022/03/06/【音乐网站考核总结】/index.html","00ffa4b38becfccbef0299cc016fea6a"],["/2022/03/13/音乐网站考核总结（二）/index.html","1b0062a43a709b1f29c7903ad5cd79d3"],["/2022/03/18/第四阶段学习总结/index.html","1a86ddbf820d8a226be62495970bd3d2"],["/2022/03/26/SpringMVC/index.html","27a9be92d7f5b5b9c55c65c71baa124e"],["/2022/04/02/关于算法学习/index.html","d14ee7faf7c7df5ef1c213e50eea50d2"],["/2022/04/10/初始项目总结（一）/index.html","8f00228d0f56163e410717e0b4242426"],["/2022/04/17/项目总结(二)/index.html","1a941d21a6093e307c6ad900238c3235"],["/2022/04/23/音乐项目总结（三）/index.html","7526d5cbce7acdfcf9f8afd5e51a1a9f"],["/2022/04/30/关于下载音乐的问题/index.html","b875dac45dacf63c7a0c08dc80718af0"],["/2022/05/09/项目考核总结/index.html","2de2ed0653022bfc5fa47c62ed554856"],["/2022/05/14/有关Springboot的学习/index.html","7a248474db26b7d22a9a3303f10a9b64"],["/2022/06/11/关于PS的学习/index.html","b1459f2e806990add25a1d47d71fdc09"],["/2022/06/18/关于redis的学习/index.html","7ce4bc700abf4001ed877d25ea1e46ea"],["/2022/06/25/redis持久化/index.html","bc15f7dbe069f41e10bfd2c7566ac44f"],["/2022/07/02/Mybatis-plus常用方法/index.html","a963ece05db81e84bf2b05107485b4d4"],["/2022/07/23/重建二叉树（算法题）/index.html","b7887fb08b1a385eadf59e0784e2c581"],["/2022/08/06/对称的二叉树（算法题）/index.html","8bc7a3dad24cbd1ef46679dc3b1f6be1"],["/2022/09/08/分治法(算法)/index.html","92c14fb6cbcbbfc4cd88dc713f853e2b"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","9ae89f3ce5ae69bb32f4fae95744bc5d"],["/2022/09/15/mysql引擎/index.html","0cc1ea60e00a5cafcec75f83638672a6"],["/2022/10/14/ArrayList/index.html","9e21f724d8be5f8f35864ad109f95e46"],["/2022/10/17/LinkList/index.html","a2a4e30d6e31779386fb9207a462403d"],["/2022/10/19/Vector/index.html","33c050b192e9ebec7eca921c950a071d"],["/2022/10/30/mysql索引/index.html","62ced35879ef4b4d2a7d6ba511a03fbc"],["/2022/11/05/商城项目客服功能/index.html","a8faf8b50522d200b1ddefbe22c7dbd4"],["/2022/11/12/商城项目秒杀功能/index.html","8bb9b502360225f2eae90c714caadf85"],["/2022/11/20/pc寄存器/index.html","08c64c4bea2648de7fd933f8978ea60c"],["/about/index.html","307a1625fd0ed41305c20a547262c3c6"],["/archives/2021/11/index.html","a36b602c896913952c0a67bac87507ec"],["/archives/2021/12/index.html","437e151799354b6e51529c7cf8ef5d03"],["/archives/2021/index.html","f2fa6f795bbf7164b3927adc99c1c1ee"],["/archives/2022/01/index.html","9ffece9b8778dfdb970c56a7fa1877fb"],["/archives/2022/02/index.html","3442be9b2bae54fa1a5dc9e1e24042ba"],["/archives/2022/03/index.html","f0a64435bef5ceec5a2f6b22e741c64b"],["/archives/2022/04/index.html","6930e8fdb89c48a60c391bd7c8381f4b"],["/archives/2022/05/index.html","eaddf08c3281711c1e126f7de5b54c1a"],["/archives/2022/06/index.html","d93c8501c5761cf68637c5dbd8e92db4"],["/archives/2022/07/index.html","03d781d4932688d9cec311eb959f2792"],["/archives/2022/08/index.html","f112c560a696c0003fd5614b2b39405f"],["/archives/2022/09/index.html","6c136e3d1ca89859fc4d286f3976ea3f"],["/archives/2022/10/index.html","d4db94ec1cffe0e89caa024f5c668aaa"],["/archives/2022/11/index.html","30f1efa8195b6dce700fe8ca64b7db75"],["/archives/2022/index.html","cf10bb0cbfa58d9cea8967f4c79d7c35"],["/archives/2022/page/2/index.html","dd810ebc3d6947ee6e04527319eb986b"],["/archives/2022/page/3/index.html","2f2157d2732860e63d7562c2a396ffd7"],["/archives/2022/page/4/index.html","1b54bb6c8b5cb16de469ac00856400b4"],["/archives/index.html","dec9539ec54bac3414482b2d2494ba6a"],["/archives/page/2/index.html","4f729902de290bd55135b89128396549"],["/archives/page/3/index.html","d12eee9042f2225cc21d90e37edff498"],["/archives/page/4/index.html","6e0823dbd388e706d316ac7e9d5ce85c"],["/bangumis/index.html","de4fb3bd01f739aa85e5b670aee24352"],["/categories/index.html","5b6ef228fc5468a78c5e182933a154eb"],["/categories/个人总结/index.html","ab90ccd9685aa2e736cf3a4e2684da5d"],["/categories/学习/index.html","3519b40407571209cd6bc0d597da53aa"],["/categories/学习/page/2/index.html","acce96f33b0c863430283673d7b2c287"],["/categories/算法/index.html","2a0c485333175c8d3e68b13503f3ab7f"],["/categories/项目/index.html","13e082c246e21c78770e00d2453d732e"],["/css/back.css","96e4c88a84567b0938f5c8abfc72f844"],["/css/index.css","769e7346c7ebff7db936911ec3ace894"],["/css/var.css","07ad90d7a4d4c4f9d388143ca3602c32"],["/gallery/index.html","cc1d4b8c3543c9d46bddd841ad8e0814"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","fc40a2d74b17e757c62782d88ad37510"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","a044712432133e8a995f18f7b7a1dbaa"],["/messageboard/index.html","013615fc51e54ebab9866ab0256f108f"],["/page/2/index.html","9460af0ae6a142b2667fd947327e3deb"],["/page/3/index.html","d104102235c075b582580937b50024c1"],["/page/4/index.html","28272a7b0e77cf15e2d0b9ea4b7a6e9a"],["/shuoshuo/index.html","e4728177246ce20de28fb4893dd381f3"],["/sw-register.js","1b0e78a67fc1319ed37a68c1c5703a4d"],["/tags/JVM/index.html","3f6051e6fcf0fe595cd88c3acaf4f40b"],["/tags/Ps/index.html","fe71cbe57e40ca21073f9609244d367b"],["/tags/index.html","d841ebd8c347ac7e96b4646a53fd085e"],["/tags/java/index.html","4bdeaebd75b8150b2a945eacbe497973"],["/tags/java基础/index.html","11c5be0d43027d01fcbb1d90b10aec68"],["/tags/假期学习/index.html","85130f491a22b0d03c054e3efad8b1b6"],["/tags/分治法/index.html","d7e2c3ce50575b84ce3f77dfc650a2ad"],["/tags/前端/index.html","eb73ca789f8fbd33c83a568e052a825a"],["/tags/数据库/index.html","9cc135586df7746f0ba3925a68a20990"],["/tags/日常/index.html","870d829aab9f2a81504dc4012b74a221"],["/tags/树/index.html","7b6de2d17d681d9f1de8396828094a62"],["/tags/框架/index.html","9760db59040365d032056844ace44b02"],["/tags/源码/index.html","6145e38140fb382ade2513853e89a1d9"],["/tags/算法/index.html","0610cca8ad73b3f6043468001d1e7d04"],["/tags/问题/index.html","4bdf34069e90ce6a698652a4c83a3df3"],["/tags/项目/index.html","4e326a4952ad2b5bd3da209319ffd94d"]];
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
