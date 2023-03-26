/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","2d07a4728934e46985fdc9ed465bd539"],["/2021/12/05/·自我总结·/index.html","e3fb5bd1d7bada4cb5b41a4f909c428b"],["/2021/12/12/自我总结（三）/index.html","76cb68cc8ee90e6e93cad469f19e8b0d"],["/2021/12/18/自我总结（四）/index.html","eca382fa5decff3201d03ac5f5987233"],["/2022/01/16/自我总结（五）/index.html","01215cce141537f3a6e830b63eeaa2d8"],["/2022/01/23/【寒假总结】/index.html","b0d81b90e5f73d6b801f8450f960177e"],["/2022/02/13/【寒假总结】（二）/index.html","e4a6cc5863769e4eadd16a1e505eb6cf"],["/2022/02/20/【寒假总结】（三）/index.html","acb6788cba2fc50ed3b25a9fe6a613b1"],["/2022/02/26/【每周总结】/index.html","847143db0b72cd48b45538114bfa3d0d"],["/2022/03/06/【音乐网站考核总结】/index.html","8f199de219d6d272eadedceee224ddfb"],["/2022/03/13/音乐网站考核总结（二）/index.html","9f1d71c3a1ced9b9ed0c00777f15d9d6"],["/2022/03/18/第四阶段学习总结/index.html","957c24c1c402c52c2307d52b59dbd08f"],["/2022/03/26/SpringMVC/index.html","4ea2127b6819ac1f10e004437c63413e"],["/2022/04/02/关于算法学习/index.html","0ab8568b0ba123e55658f3e424354f40"],["/2022/04/10/初始项目总结（一）/index.html","2ebd5a8a92ad66b33875d92624e60eeb"],["/2022/04/17/项目总结(二)/index.html","789a396df0e1eeb93d07c38e5ef24c20"],["/2022/04/23/音乐项目总结（三）/index.html","1e584d41aa3866c3592528e567485169"],["/2022/04/30/关于下载音乐的问题/index.html","16fdb6795d0ebece511b37d1909d8f84"],["/2022/05/09/项目考核总结/index.html","f45e582183321e99dcfe02ea63c1e3ad"],["/2022/05/14/有关Springboot的学习/index.html","8be278d24a34143670960c7bc38df95e"],["/2022/06/11/关于PS的学习/index.html","53c5256f8656bafbd800635d37a490d2"],["/2022/06/18/关于redis的学习/index.html","26286398e7ee306d8f296bb4c4783329"],["/2022/06/25/redis持久化/index.html","dd16778f262d52e412b0bff138ea0249"],["/2022/07/02/Mybatis-plus常用方法/index.html","fb93e748bbdcb1426c1093150a5f759f"],["/2022/07/23/重建二叉树（算法题）/index.html","4a9c69689b7bbfa3bcf0efaded9174bb"],["/2022/08/06/对称的二叉树（算法题）/index.html","c306feee43f51e0396c0e23ba1300752"],["/2022/09/08/分治法(算法)/index.html","58d9c5332475b1802fb2fde3dce3b5f6"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","f35dffdb2a97dc4b5c730104e841fca7"],["/2022/09/15/mysql引擎/index.html","342baf56ddf7f3602058db522d05d712"],["/2022/10/14/ArrayList/index.html","b8e1186baaadc4e37bf4cea78eb9a28b"],["/2022/10/17/LinkList/index.html","64301a84c78578df4dff77c055abe3ee"],["/2022/10/19/Vector/index.html","92a2cc90fc9cffb046ccf14ab11be167"],["/2022/10/30/mysql索引/index.html","a6dc1bfd8b8ade6615dcde1d5828c496"],["/2022/11/05/商城项目客服功能/index.html","427a3bd2063af1084f90e047c318729a"],["/2022/11/12/商城项目秒杀功能/index.html","9392331e9d7e60f63ad3660f51c18576"],["/2022/11/20/pc寄存器/index.html","ee9aa9075866b86f81bb8eb3ece0a914"],["/2022/11/27/集合面试题/index.html","b83065a8774151ebb99f435101602557"],["/2022/12/04/本周小结/index.html","a9ca996a4756c7fd709d6c8d566c65b3"],["/2022/12/11/全排列（算法）/index.html","ec7173f56ee1d30784cec17ec244a551"],["/2023/01/15/背包问题/index.html","b21804d49d2fd69da426efbf39157770"],["/2023/02/05/easyexcel/index.html","3829452b176ff74d47b74194de9334ce"],["/2023/02/19/JVM面试题/index.html","5f3b8842dd87ca0e8eff65d966ea8239"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","8574e7b162baea5b3a8c02efe88cd52b"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","1c65d38c7896a2e07903dac3520da67d"],["/2023/03/11/杨辉三角/index.html","f4fd063d8be4460f5350ed060f50cb7b"],["/2023/03/19/和为k/index.html","8691b00ee0cbafab71e711bad5898f0f"],["/2023/03/26/JUC/index.html","da296acb8c3b81ebdc3afd4f1bbc68bb"],["/about/index.html","9299a7babf57a043fbbcf12a49cba16b"],["/archives/2021/11/index.html","1e45249f8eb226315e11d600ffe67c18"],["/archives/2021/12/index.html","89c31eaceaff03a1064bd89fc159c8a9"],["/archives/2021/index.html","0f2bf77183dbdfe51921edae3ab7bd93"],["/archives/2022/01/index.html","dedb2b73c717aca7700d87ece3270395"],["/archives/2022/02/index.html","7958cca5bc1b0d39619f9c2d0a6d5a23"],["/archives/2022/03/index.html","36093d0d22fa722cb657815ee8e5c758"],["/archives/2022/04/index.html","9e1032f1c453a8040c4e8fb582343682"],["/archives/2022/05/index.html","8acebacf44718d0c79dcbd65ea27d223"],["/archives/2022/06/index.html","ee83c6fa30dff71a695866934cf75322"],["/archives/2022/07/index.html","c4c6cc43e40d3541228972f716710698"],["/archives/2022/08/index.html","0c4cf39526072fbbad158d9e3887675e"],["/archives/2022/09/index.html","f0b4c4e9e3a55f478861d3d523913c01"],["/archives/2022/10/index.html","c45f524e469d940e8bccc947a87776c5"],["/archives/2022/11/index.html","64751ddb3f18e763b762a04661e81d33"],["/archives/2022/12/index.html","556067bdb0b50bf7e1df5d87aafa797d"],["/archives/2022/index.html","e02d72ab41e2031e742a899a5e89229d"],["/archives/2022/page/2/index.html","9424aff896fcb838235dda3956aaee9f"],["/archives/2022/page/3/index.html","c10d5405b790a03dd00e8ae556aa4718"],["/archives/2022/page/4/index.html","f6e07d705ffeb009a271cd1aee267eae"],["/archives/2023/01/index.html","26d3dc1d6e5a49622be1a777b83def4f"],["/archives/2023/02/index.html","3ddac69dbe4f14cf9c9ec3d203dfa273"],["/archives/2023/03/index.html","67a5f583aa821ba0bc745f5d7a2488e4"],["/archives/2023/index.html","af6634350349620f8328bc0a90a83c5b"],["/archives/index.html","536b9a302c325811da1a79d4496fc5f1"],["/archives/page/2/index.html","f1ba85672e7482ed20301be331546b86"],["/archives/page/3/index.html","482f6756df4ad9183f0ab45cf285837a"],["/archives/page/4/index.html","1da4341c087dad1deb36bf7de3accf6b"],["/archives/page/5/index.html","02a1445ac505577c3f9f7dd620c20079"],["/bangumis/index.html","49246e8193f39f0afb8de325ab5393cb"],["/categories/index.html","8de76b08e6d9ed3d5f2c12b83780ce5c"],["/categories/个人总结/index.html","19357ad506eb1c53ef42d5b58cb64362"],["/categories/学习/index.html","8e51fb90d035e30fdba217bf238f1a5c"],["/categories/学习/page/2/index.html","a1d8fa212a422fcfc4d989b174d76a9c"],["/categories/算法/index.html","0427972a427cc07da6a480fe09cbb7c4"],["/categories/面试题/index.html","add6930c139f8bd031a545752317e7b9"],["/categories/项目/index.html","6af380ee6dfc246ab76fd004fe0db2aa"],["/css/back.css","b268e052e1a56de6e2120af8e42509de"],["/css/index.css","ab334436a9705c3a8a6ff3bab63cd742"],["/css/var.css","b90baa7a15db506fc83eebe26596a9fc"],["/gallery/index.html","7aec3c3b3d33d7ae2fb29ea6a3776def"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","cd83d5c29561a1ff61b9dc59f1f3a829"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","83dc0aca0011f44982057a7cbe0e2263"],["/messageboard/index.html","e9c20948c2ee8127bc09ec1127d3d1c5"],["/page/2/index.html","513645b001d967ea76538560cb5f7d4b"],["/page/3/index.html","97242c6f1d39abf1bdcc8cc163e4e50c"],["/page/4/index.html","50ea22e3d88ea1bfc00ff9a4ff8e4348"],["/page/5/index.html","4135a1e63258b0ffb7b2c2c1b0659e34"],["/shuoshuo/index.html","8bd16f1ec0789fed9cb6830a8376294b"],["/sw-register.js","c3b0815e96fa6552a3c66aae0a393dfd"],["/tags/JUC/index.html","fef47a060f44550d61353da4d7615e66"],["/tags/JVM/index.html","79e87bd52c21f69b00146f7c3a107140"],["/tags/Ps/index.html","59b4c9881e513c66d93c77eed72bab05"],["/tags/index.html","c4a2ad016fd587bb190da743e3f868e7"],["/tags/java/index.html","c87d30d185db79eb5f6974846a85ce1f"],["/tags/java基础/index.html","0228bdbf956b01736d7676664c040bf8"],["/tags/二分查找/index.html","315647828741eaf676212cd623f2a9b4"],["/tags/假期学习/index.html","84d9f500cb3953ee9d10d2de4bd15851"],["/tags/分治法/index.html","c5e20efa3331abcb66c4634eda80bae2"],["/tags/前端/index.html","15beaffaa08a8954b652910e43198c88"],["/tags/前缀和/index.html","c8c0a67eabb63c0ebba8c22648d8dc74"],["/tags/回溯法/index.html","48184e54cb666bcc40fdd7ee6838ae2d"],["/tags/学习/index.html","841126c2b713f7b2ce93e30dc995f3ae"],["/tags/数据库/index.html","6ca59e04be6cf4b2785a69a38f5c51b0"],["/tags/日常/index.html","2920fff9d5a283654fdba22c80cd87ed"],["/tags/树/index.html","820c2d8119ab2f455335c1da320d842c"],["/tags/框架/index.html","95a1c20d101acbdc1ab9019740ab7a75"],["/tags/源码/index.html","e07574cff321dc4b752cd83d5e18783a"],["/tags/算法/index.html","f184f994b446b29172683f17ce6ea2bc"],["/tags/问题/index.html","d2efe1f9f0cec4feab2b1399add6adaa"],["/tags/集合/index.html","14b98d8f13d76b7dca8c0eddebbf20eb"],["/tags/项目/index.html","7e4b1fec6ead30196d077e6e8b675239"]];
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
