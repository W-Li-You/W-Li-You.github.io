/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","e9dc8e2db2306f67a47da5918d13b686"],["/2021/12/05/·自我总结·/index.html","906acd250a4308c9e9120c01f50624a2"],["/2021/12/12/自我总结（三）/index.html","9296f2dd4fc42c0d7e3c28cafee23d9a"],["/2021/12/18/自我总结（四）/index.html","81b4a3ac41ba818bbf22b14bbdca9179"],["/2022/01/16/自我总结（五）/index.html","289d45dac85292e4f9b9ad23a8800701"],["/2022/01/23/【寒假总结】/index.html","62207f05b8fff7f4cc0dfa38631c7d34"],["/2022/02/13/【寒假总结】（二）/index.html","14dfe75647cc38649632702cad5af793"],["/2022/02/20/【寒假总结】（三）/index.html","04d7be67c270007431040c567688d8bd"],["/2022/02/26/【每周总结】/index.html","478a9e3a7eeb7ecffc8a0ad01dc8a160"],["/2022/03/06/【音乐网站考核总结】/index.html","735c8c3f6cadc988f5781c0de03b127a"],["/2022/03/13/音乐网站考核总结（二）/index.html","ebcce69ed8259e6a4fa506f137e24d20"],["/2022/03/18/第四阶段学习总结/index.html","30f1ba74a9bf7241deb069770ede7e5c"],["/2022/03/26/SpringMVC/index.html","8cf3ec215bfda9f0042b062492d887bf"],["/2022/04/02/关于算法学习/index.html","1477818108c73815f2417cf65a8bcf02"],["/2022/04/10/初始项目总结（一）/index.html","1928cb518739c1e97ea93c334098aa5b"],["/2022/04/17/项目总结(二)/index.html","efba56bc70398e38ee5a8979bbcdcb7c"],["/2022/04/23/音乐项目总结（三）/index.html","1b9d8f916f2e108c8d6db450d96ccac2"],["/2022/04/30/关于下载音乐的问题/index.html","84797ff56bd3a8ab080294cf1cd3ace7"],["/2022/05/09/项目考核总结/index.html","d21255c01d2c66cd8651463b03a4fa8f"],["/2022/05/14/有关Springboot的学习/index.html","364639abc4a4adb74ccb4a7d8ee6699d"],["/2022/06/11/关于PS的学习/index.html","18c6ed2dbf4526f20880e8e940b6b2b5"],["/2022/06/18/关于redis的学习/index.html","d15b48f97598cd118fdfd6742121ab64"],["/2022/06/25/redis持久化/index.html","6fa3f0d818317a11b14fa6dd21dfabb1"],["/2022/07/02/Mybatis-plus常用方法/index.html","c26ffe078e0617f012d876247f3b0464"],["/2022/07/23/重建二叉树（算法题）/index.html","241a80687207aaaafb9fb1184a3465b1"],["/2022/08/06/对称的二叉树（算法题）/index.html","06edf1feabd92cb5d965e0536188b439"],["/2022/09/08/分治法(算法)/index.html","45e0237e7deda9102adaeeb7c7c175fc"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","4b624607752a7af114248b2e982a35c5"],["/2022/09/15/mysql引擎/index.html","6a2f70d99c1fd5c7bb5a6d55422297e8"],["/2022/10/14/ArrayList/index.html","4019cc73336fd7852e5baf66bf01d132"],["/2022/10/17/LinkList/index.html","5466aa287837b3ab356b57b6a46d6ed5"],["/2022/10/19/Vector/index.html","128b1b0fc95656109afdd3642b8d2104"],["/2022/10/30/mysql索引/index.html","b4a7477dd37da75c84101453e1dc44f1"],["/2022/11/05/商城项目客服功能/index.html","82843d2218a6d9b0b4673cb7fdcb1ef8"],["/2022/11/12/商城项目秒杀功能/index.html","5179d8f27df5e9cc41bc1b9f1c9d72bd"],["/2022/11/20/pc寄存器/index.html","27ff6210ad999e67d485358ef94ea2a0"],["/2022/11/27/集合面试题/index.html","2dc830fa25fa807b53e11104920113bc"],["/2022/12/04/本周小结/index.html","51b712d9a93879c930f8d63161cf05c5"],["/2022/12/11/全排列（算法）/index.html","8160f98295c3a0ff450488687eb02c80"],["/2023/01/15/背包问题/index.html","e0bf74ab0ac0d41a06921306e405af36"],["/2023/02/05/easyexcel/index.html","586257925aceac4e806f9b68543add7c"],["/2023/02/19/JVM面试题/index.html","5c6c60762a9768ee9d123951720d2cf0"],["/about/index.html","375d5303f608a122ada9c0a231277da1"],["/archives/2021/11/index.html","3542420380c8a0fc58a50989c23bca75"],["/archives/2021/12/index.html","b42bd8053fc42293ebad72745171d180"],["/archives/2021/index.html","a87e140daaec506da2b37355cd27626b"],["/archives/2022/01/index.html","20c1d3ae8d3e028845defe12f4d7ceac"],["/archives/2022/02/index.html","b64458a3cdeaa64a3c54e3b78eef316a"],["/archives/2022/03/index.html","992952d3e945ba6af2965addc4931e69"],["/archives/2022/04/index.html","864153b7d3d4569f6175d3007e28d2f5"],["/archives/2022/05/index.html","d80d5cd090c751c85d38ab6c43e5ffd7"],["/archives/2022/06/index.html","a588ce1cc1f59fe391327a750ca5d46f"],["/archives/2022/07/index.html","dfc136f47190e0e0ede57c4d21227d1d"],["/archives/2022/08/index.html","699ed5e1a042209fb08e83a9cef358b1"],["/archives/2022/09/index.html","b4e7e9f3e618c645ec93bb118df96cb4"],["/archives/2022/10/index.html","33b0148fb0bd17752afcbea5a66fc269"],["/archives/2022/11/index.html","08a15e77a3b9c292a2a1e216b6fe04b6"],["/archives/2022/12/index.html","9582f76dd6426f1fdb5c818acad467b3"],["/archives/2022/index.html","132460138c1b7a095b974a3dd17087bb"],["/archives/2022/page/2/index.html","2c8daab1f07755aa38751f1887a6e479"],["/archives/2022/page/3/index.html","dc12ae17ab0ff198442af9aa74e8dc2b"],["/archives/2022/page/4/index.html","894660fbf2312889c019f12f2d25b69c"],["/archives/2023/01/index.html","9b2bc00e0f6ca98444f3b4c20e82a0e7"],["/archives/2023/02/index.html","eaa3ef7ceccbfab74c1537d1dc903f89"],["/archives/2023/index.html","39dbdc4f40c9c98385d904327f647baa"],["/archives/index.html","c25dc4cee4152884680db88a59488471"],["/archives/page/2/index.html","0175ca85d8d4eff557fcc6b14a54a319"],["/archives/page/3/index.html","a25b328d4908a6efbf79282b56801a24"],["/archives/page/4/index.html","d0005f627780a9b7e8f2f93d5ed41676"],["/archives/page/5/index.html","60bac519b6c3d6cb84284d99c3788666"],["/bangumis/index.html","38c5ae43e79cb812211dc7c08fbbc2b9"],["/categories/index.html","f7502eca2d822b21c2bf782f667a7503"],["/categories/个人总结/index.html","90857de4bede2419641825540c4272be"],["/categories/学习/index.html","128b913b0947dd83fd3f13d8e55e702b"],["/categories/学习/page/2/index.html","63449eec6f6f11acb6a75ae3afc3c251"],["/categories/算法/index.html","f656e7d12082ff3475c31ddbe43dfec4"],["/categories/面试题/index.html","f4d909ccc52e9f4968398a52c0f67b07"],["/categories/项目/index.html","80ae3bb78cad4e5860f4cdce7700eba6"],["/css/back.css","107c787f1ce295d3b1458b6f4373f7f2"],["/css/index.css","303576a82e56e26d776598d2261b500e"],["/css/var.css","ea4b0fca5ec7766dca3ff7d2f17681a3"],["/gallery/index.html","372fdf4e3dd6d93e8e20176018fb68f5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","3758c3822e654897228395332586fc47"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","dfc3043e9b4c6ad9dd9b7a5a9510062a"],["/messageboard/index.html","2bd12391fc20b63c381137059bc3c401"],["/page/2/index.html","32ca906d6871ed949c71d1b5dec293c4"],["/page/3/index.html","a9de96e9243be7f5fd14cf6d4b2ba736"],["/page/4/index.html","18ebd3ca4eb9d17dda47b270e757b4fc"],["/page/5/index.html","06e4d425484a4fb932de7946d8443030"],["/shuoshuo/index.html","155b9cf4c1c7b3af57a1e8c247699967"],["/sw-register.js","c4ef51b6775a992976f69ae1b7769447"],["/tags/JVM/index.html","82e8a0e9239996f3e923bc00d1ce8874"],["/tags/Ps/index.html","e78fc6ea2c778d6e749b5890493ceb83"],["/tags/index.html","be5c9042095618f8fad9f1da35504518"],["/tags/java/index.html","61d8c16e07b17c18da68c484d70845c6"],["/tags/java基础/index.html","aaf1957f864e24f68c80fd57eeb0adab"],["/tags/假期学习/index.html","27d9765d85f03699d034e34478091501"],["/tags/分治法/index.html","0b7e4cf91e2b2a213bf30cd9938a2bd3"],["/tags/前端/index.html","12415eeff9f2a4ae73924c360dd39af7"],["/tags/回溯法/index.html","64c055e6c6aceaa1b0304318f0a438d5"],["/tags/学习/index.html","8719dd97fbab4f4801fdc218df4aaf21"],["/tags/数据库/index.html","3c085169984b7ad44468eb42b5c0ad49"],["/tags/日常/index.html","ea2e9f69b0bfd4b7421585745480a724"],["/tags/树/index.html","2aebc29ed3ab014d4ce425a49048c5ac"],["/tags/框架/index.html","012e55cdf5e8798b95798bcc95688d84"],["/tags/源码/index.html","389b028995eed50edc690e3710423e3e"],["/tags/算法/index.html","e7305a6408ed75b75c56b3f14ba4808d"],["/tags/问题/index.html","24a50984c38f5ed8613ce465bff47cb9"],["/tags/集合/index.html","0bef3a18b876f36f76950c2555a818de"],["/tags/项目/index.html","627db746cfbec9a3efba40d17b45d1b8"]];
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
