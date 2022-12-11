/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","bf026da89ee7facdcc1da90e59bdeacc"],["/2021/12/05/·自我总结·/index.html","eed98f8ff634c54251f285c09acf7408"],["/2021/12/12/自我总结（三）/index.html","9221438bba50a5a7f206545c57f784d1"],["/2021/12/18/自我总结（四）/index.html","be8e2b4a90e66a1f09332cb1c933e0de"],["/2022/01/16/自我总结（五）/index.html","6d288be3538242992ffd60316246a532"],["/2022/01/23/【寒假总结】/index.html","80745602b3ee17c1a3fbed4c026f983c"],["/2022/02/13/【寒假总结】（二）/index.html","430e60511fbd8382f619c4ef14c71dbe"],["/2022/02/20/【寒假总结】（三）/index.html","cd615ef260a5bfdb25b1c740649e4408"],["/2022/02/26/【每周总结】/index.html","658f8c5e3d7aa8c8c6a7a5f6dc1353ba"],["/2022/03/06/【音乐网站考核总结】/index.html","7cbe69a76ccde0d4d1dbd55864713f0a"],["/2022/03/13/音乐网站考核总结（二）/index.html","6807e70aae5bb3c7812e9b16c2ea5f26"],["/2022/03/18/第四阶段学习总结/index.html","06cf6639322b3f2166c4d05129d53102"],["/2022/03/26/SpringMVC/index.html","6523499ce089362ca8a5b09b074e5672"],["/2022/04/02/关于算法学习/index.html","d83ec26b791c88e95e3ed84d276532eb"],["/2022/04/10/初始项目总结（一）/index.html","7b1e69d676143f570d807394d75c6a27"],["/2022/04/17/项目总结(二)/index.html","826f04c5182dbe129e8f9ac20fa65359"],["/2022/04/23/音乐项目总结（三）/index.html","336fd92891a18da8d609ae6312f042b8"],["/2022/04/30/关于下载音乐的问题/index.html","6fe46912ff2bf02ee7e4fe7bf3eecb3c"],["/2022/05/09/项目考核总结/index.html","f0a535716354856e1e4997ca83256079"],["/2022/05/14/有关Springboot的学习/index.html","62483fb3c2988d947a043d58e5b97b96"],["/2022/06/11/关于PS的学习/index.html","3f6320bb433065c4cae407dc8f07742d"],["/2022/06/18/关于redis的学习/index.html","1124b58d2da14d9ceba9062abb40b701"],["/2022/06/25/redis持久化/index.html","f10721d6d434a2189df71f6f3f77011b"],["/2022/07/02/Mybatis-plus常用方法/index.html","aee4f6099046db81da782e9a92c26ab8"],["/2022/07/23/重建二叉树（算法题）/index.html","15fc500144ae7ee43c38fbb2e1b9a195"],["/2022/08/06/对称的二叉树（算法题）/index.html","f9a327f1398ff7a4dd7e88174f2cffa4"],["/2022/09/08/分治法(算法)/index.html","853164d7b120ec56c8b109ac0dfab211"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","2007b474d5bf987fdbd5d9cfe7f10913"],["/2022/09/15/mysql引擎/index.html","f997a6fa87e8dbd9588e51ecede26c32"],["/2022/10/14/ArrayList/index.html","b98655d67c432ae51da529815e98547b"],["/2022/10/17/LinkList/index.html","b24448f40d88073d8e3468e99d191f4e"],["/2022/10/19/Vector/index.html","c49149bbe6450ff56d133fc62c2ca654"],["/2022/10/30/mysql索引/index.html","a1d2e77f86c9e5aa8927aa95371ffeb3"],["/2022/11/05/商城项目客服功能/index.html","d1fdcf983287be0fb9fd753b16548929"],["/2022/11/12/商城项目秒杀功能/index.html","2fc02b8767fdb1d49eeb39aee17efb01"],["/2022/11/20/pc寄存器/index.html","24bd0f8c77759de73732c12194ae6c44"],["/2022/11/27/集合面试题/index.html","9d3dcb4aaa23e2a121faedd16b9c002f"],["/2022/12/04/本周小结/index.html","b758e384adda5b284f5c3a0ccfbaf84f"],["/2022/12/11/全排列（算法）/index.html","e4c1a72be513f9dca923adbe954dfe77"],["/about/index.html","097643b4f78c3524e9141f40f75a9ff1"],["/archives/2021/11/index.html","74cb64138c1e413e96fcab70e3a40534"],["/archives/2021/12/index.html","d7d8e3408f116edce753ae9ede63b259"],["/archives/2021/index.html","57a4da2d876133fbe2315ea06a6d1a4d"],["/archives/2022/01/index.html","e7ab5457fa14cef0e5d55a910d2d7c14"],["/archives/2022/02/index.html","57fa849ba84cd03c4b468375c7f41b2f"],["/archives/2022/03/index.html","25695659734b6b0a138acdbcbfd2c85b"],["/archives/2022/04/index.html","dd7ff41a13ed48957e08295f8828dc83"],["/archives/2022/05/index.html","a7cf20dcb843262d8a4c7218d5a5acf5"],["/archives/2022/06/index.html","8985204af32ab5ff9d4a25be7d79ab67"],["/archives/2022/07/index.html","efe529514fe4895e2899d1d4ec73a29d"],["/archives/2022/08/index.html","6d6d903beb683c388490656e9b7066fe"],["/archives/2022/09/index.html","c5f8b75a071613c93efdf24dd5156a5c"],["/archives/2022/10/index.html","f9f51c79ce2e0541745ab9bf9a9c7deb"],["/archives/2022/11/index.html","c0f458d560c49adfec27c58c5b2515fd"],["/archives/2022/12/index.html","310c4414e52e825aadf78ac7a371d07a"],["/archives/2022/index.html","fb09678412990c9fd720cf6a1fad83aa"],["/archives/2022/page/2/index.html","9db13550641e5706769666e9fe797694"],["/archives/2022/page/3/index.html","f98bd71fbddf13762d267342d8c8b244"],["/archives/2022/page/4/index.html","53856541cad08af96aa1ee1a8f31c9eb"],["/archives/index.html","d9c0733c16765a454d75275db0bf447b"],["/archives/page/2/index.html","a047ec8d32c64969b32e7c56d631077d"],["/archives/page/3/index.html","d5dcb9b8913422902b2f5b2b127d2ce9"],["/archives/page/4/index.html","d5fc58a653fcb5a01c73ad350fd74bac"],["/bangumis/index.html","22f882186918f10313ab51d5bfd78287"],["/books/index.html","66aadd6dc3d09a8a612953ef3f5f6b28"],["/categories/index.html","aea03042db6a68c6f777af318871907b"],["/categories/个人总结/index.html","c0bca4df895add280a4ddb0dad64dcb2"],["/categories/学习/index.html","5b030507a81ed586a49599e271dc2f93"],["/categories/学习/page/2/index.html","d6a18565871932d4ace395ba1046dd80"],["/categories/算法/index.html","6b71e653720d7d4330f0f6c227f13a4e"],["/categories/面试题/index.html","585476cfec3a39c34b1e3f40d6ab54b5"],["/categories/项目/index.html","46753ee0b2125ec759b6009523b742ed"],["/css/back.css","dd3db2a5b7d6889e374e58babc9bae8a"],["/css/index.css","cdbe2219e49af918d7bddea04b261458"],["/css/var.css","941433e4eddb29fa43d0a575fb2f7665"],["/gallery/index.html","68207bb4edea30d4b4645bb1147961e9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","1498243d9d3ef881704440c8654e65d1"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","452b32f1f548a4dab78858f34d40c9e6"],["/messageboard/index.html","bf440cf9ec90b15ab9dcb8e5200eb68f"],["/movies/index.html","d24a72f96ce12fa9d6c36300ff571994"],["/page/2/index.html","3fead246b743f73e12992bc8bad22f09"],["/page/3/index.html","13726f6a63533111e24f14aad441e0df"],["/page/4/index.html","3678f1af4af224802cccb674d2937c49"],["/shuoshuo/index.html","f517d7bf38a216afea7ebb7b36971fc7"],["/sw-register.js","5df7319e0414cc88e4a5bb6cd80d3b9e"],["/tags/JVM/index.html","7abccbda5db4ede65c921f3d19d23934"],["/tags/Ps/index.html","f2623155c5dd07fe84d01cf669cffd6a"],["/tags/index.html","bff3f8bbad564f2c0430e8b2d916426d"],["/tags/java/index.html","4f26a38151f2972fc1331ccd6cedf942"],["/tags/java基础/index.html","7d6794bbdc166dad9db64877db436a24"],["/tags/假期学习/index.html","ed48c482dd65268671c81bc22654bcbf"],["/tags/分治法/index.html","c603ce65b4d3276112a1e5f6f789e398"],["/tags/前端/index.html","84a81efe5d7619e713754f46e6e0d864"],["/tags/回溯法/index.html","dca55b830f72a35186a2001e10ba69d4"],["/tags/学习/index.html","1f1e1e3af204f8e6c89e315d21ec2526"],["/tags/数据库/index.html","a59b858d1b4044c9cd91bef420f5b00e"],["/tags/日常/index.html","eddce080495fe4a0bfce51721afc5bf0"],["/tags/树/index.html","d970a37bc197492028737cd862b3d022"],["/tags/框架/index.html","42db6f6079d981c1c502155050c324b7"],["/tags/源码/index.html","1e2b1fb2daa8546268baf4abc41c40c5"],["/tags/算法/index.html","2e3f3036af70affc813500312d1de8dd"],["/tags/问题/index.html","757b363a181c44a9ba61bcc791e31039"],["/tags/集合/index.html","00fb7a44d5939102a5f780c30fd29835"],["/tags/项目/index.html","2cb4759e81a8fa96864f1cabdc27ae59"]];
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
