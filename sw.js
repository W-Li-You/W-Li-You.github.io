/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","4473499eb5a070124676f750388b5a88"],["/2021/12/05/·自我总结·/index.html","fcd332f7eeab4484dd2cb31881628e0e"],["/2021/12/12/自我总结（三）/index.html","586c505b12dc7b82013a40f4f429676d"],["/2021/12/18/自我总结（四）/index.html","f98250a0ab130f628b4afe196eb6b5ad"],["/2022/01/16/自我总结（五）/index.html","6ee16f38c118ddb0a1c3eb3c6a2c66c2"],["/2022/01/23/【寒假总结】/index.html","e042e7869ac597aa196ee0ab8d8bfe60"],["/2022/02/13/【寒假总结】（二）/index.html","95008826b2eec61e4fc8afb23c9e664e"],["/2022/02/20/【寒假总结】（三）/index.html","6fd5e669d4d88797ded084f722084c7f"],["/2022/02/26/【每周总结】/index.html","8e6ab176259e18090bae1ad6894f32a8"],["/2022/03/06/【音乐网站考核总结】/index.html","49948ac0b4be2c521c0bb81ef447dabb"],["/2022/03/13/音乐网站考核总结（二）/index.html","8713d83bd8fb2e3fe8d70005b3170b1a"],["/2022/03/18/第四阶段学习总结/index.html","015600583e90e8a2143380c01d87cbc1"],["/2022/03/26/SpringMVC/index.html","2294204c13010e7ce4ad37ccb96cfd8f"],["/2022/04/02/关于算法学习/index.html","98f40e5c2671735f4f4222577fb4f4d4"],["/2022/04/10/初始项目总结（一）/index.html","848ec485ec072dab55d15ef7f29bb58e"],["/2022/04/17/项目总结(二)/index.html","21553fe22916af75a34ecac7b6be70ad"],["/2022/04/23/音乐项目总结（三）/index.html","ba845fd3b623e9ab51ab64b919fab715"],["/2022/04/30/关于下载音乐的问题/index.html","d7ae1642dd8fa5d6c8adc8773159deee"],["/2022/05/09/项目考核总结/index.html","94618fd1a7d0d3162f89229de80caeaa"],["/2022/05/14/有关Springboot的学习/index.html","ac7ebc83d827d499411df13e9d862c7b"],["/2022/06/11/关于PS的学习/index.html","00d7890df9e2cedcfcbcbe45775d3a51"],["/2022/06/18/关于redis的学习/index.html","794f661e86cd0c2ffab4ee0fe5ef68e6"],["/2022/06/25/redis持久化/index.html","ab595014f59408e989df234e2478f1f6"],["/2022/07/02/Mybatis-plus常用方法/index.html","9d6e5c558d2f6537eb4fff2094a36a2e"],["/2022/07/23/重建二叉树（算法题）/index.html","b86c7353b6a5db303715a0fbf21f00c1"],["/2022/08/06/对称的二叉树（算法题）/index.html","d84e1dc705f04e1151f4e403022a569f"],["/2022/09/08/分治法(算法)/index.html","7b3660c5408bde9c80ccc8532e5934f0"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","ee95aa2cedc9646738ad6fc08e813f6e"],["/2022/09/15/mysql引擎/index.html","908453cfea5c5ef91c380a868be48d36"],["/2022/10/14/ArrayList/index.html","2afe8e0e6425a8baa729258f27881dd0"],["/2022/10/17/LinkList/index.html","42136bdf572ccc0bfccca69769ef2174"],["/2022/10/19/Vector/index.html","0d769a87c14ee5348bd2a496b521a65d"],["/2022/10/30/mysql索引/index.html","63bc7a9ea985c9fbcc73eb48b68e7cdd"],["/2022/11/05/商城项目客服功能/index.html","36b71ac2ba90e844566a0f8aaa6634b2"],["/2022/11/12/商城项目秒杀功能/index.html","8ac580cbd4b732022982f8c81df213cc"],["/2022/11/20/pc寄存器/index.html","2ea0bddd150f9a3ba22a8c65c0398cb9"],["/2022/11/27/集合面试题/index.html","a864a25904f39cbe57e4d383c01105cf"],["/2022/12/04/本周小结/index.html","10f175f33b01b2e193fc6c682b37430c"],["/2022/12/11/全排列（算法）/index.html","84e30efa8c0692533a2756c60dc2035c"],["/2023/01/15/背包问题/index.html","d31e2cd77f7367fd8fbf845eb824f58e"],["/2023/02/05/easyexcel/index.html","fdadf5e1f558472ba4ca82b0cb029fd4"],["/2023/02/19/JVM面试题/index.html","06dcbc321f9910765e73fc285ccda81f"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","f95cb755705b0e8ba9eec1eabdd5bca6"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","dc9e95be7a3764cf18d1dc4b58741fe7"],["/2023/03/11/杨辉三角/index.html","13b1681e874a12f66a143610f17e40a1"],["/about/index.html","b0057c80727c884249b3ac62e33b9f3a"],["/archives/2021/11/index.html","8af23831c76b63f97f455a3d617c84d6"],["/archives/2021/12/index.html","d292b499a00ba36c082a310f2f468745"],["/archives/2021/index.html","1d9d79d9ef26c4e9128e550ae20761b3"],["/archives/2022/01/index.html","762f7bffe905ba66111cd0a238b52c49"],["/archives/2022/02/index.html","ddd9716ee9e90ce8e8d6e5ae528bb80b"],["/archives/2022/03/index.html","5261629bb419bc9dafde1ad361dd3d08"],["/archives/2022/04/index.html","55474f11d1cfa31896891ea455bb2839"],["/archives/2022/05/index.html","e55ee1aa39f443eaa12b47b398c79518"],["/archives/2022/06/index.html","88ce5503c3351e1332f77a8dbf97f742"],["/archives/2022/07/index.html","55d171a54bf8fec27dace54cd9d77d17"],["/archives/2022/08/index.html","80ab0c83eaee72b893bd82690ac0e3b6"],["/archives/2022/09/index.html","32b2ee7115c440213f4600d7d9ce9e6c"],["/archives/2022/10/index.html","b7ba16502f367feccf1f33058676eb6a"],["/archives/2022/11/index.html","05ab03b99b01d9920838753248726a47"],["/archives/2022/12/index.html","c1af72c86e3595816f61adf38c9e35ca"],["/archives/2022/index.html","bbebb183bc75f89d45556dc35ccc46a1"],["/archives/2022/page/2/index.html","d623c3c4aa1d0387a734118d8b8fa6bc"],["/archives/2022/page/3/index.html","9d297e7f027b6f32b7ced6c05064c7d4"],["/archives/2022/page/4/index.html","29b23056ae0c6100fa2a15d320d64ca6"],["/archives/2023/01/index.html","bf7cc87c65f0dce74f6c3125946c3042"],["/archives/2023/02/index.html","8109794c69a051778c9f0d991504d28f"],["/archives/2023/03/index.html","49912b918daa7fe2115e30bbf2a07144"],["/archives/2023/index.html","2c3e65058915d1ddf41eae522aaa13b7"],["/archives/index.html","3ca4ca0dedc10e093583adb77d9b2ac0"],["/archives/page/2/index.html","091f2ff00edb57f8aba5d041cc48397a"],["/archives/page/3/index.html","f66b1d985f32d1a2486b5be451293aac"],["/archives/page/4/index.html","949a565c65e4b059cbe3b17fdf50197c"],["/archives/page/5/index.html","f01e5e9f0cd278f8490ce63cbfaed475"],["/bangumis/index.html","771b17a0eb819793775325674490164d"],["/categories/index.html","55c55e9625e56049c73e237ba69d34c7"],["/categories/个人总结/index.html","b7c1f140978d156a8fd6df7a153fc1a8"],["/categories/学习/index.html","7e252663b594b685aa1e3dce994b425a"],["/categories/学习/page/2/index.html","bad7d981058b61fc5df784a14a45dc93"],["/categories/算法/index.html","2952067e934445dbb26162c0ffd68c8a"],["/categories/面试题/index.html","0c5e7d750e407cda30601a61c0a09721"],["/categories/项目/index.html","a5176c6a70d1a680f2f6e747f60b9e19"],["/css/back.css","c84a87633d392578c98a7c267a033b39"],["/css/index.css","9d2789a710e23113c483351fb1aa024b"],["/css/var.css","774ccdcb6599edc43bc06e4bfdaa60ae"],["/gallery/index.html","508bee61b10fba88eb28c6721acdc48c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","bde9eb26fee8dc40738586925df33a03"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","f6c44fc1506f2226ec403517de25931d"],["/messageboard/index.html","cbbb8f6d7cde2119b31766d85e21d255"],["/page/2/index.html","6c3c860532b2e2b3662e0186c7f0bf71"],["/page/3/index.html","054cc05900b7cbf1d757a95c2c57dc2b"],["/page/4/index.html","fe65b25bcf46bd2209a0ae99c072cdf0"],["/page/5/index.html","aafdba5b3d472d13457550d2e1897827"],["/shuoshuo/index.html","28c30329e412940b3be6477d43b64eab"],["/sw-register.js","3bb1d30b8a362d52804b26c185e4fd3a"],["/tags/JVM/index.html","f5d96cc1bcda35ef4d63ade5065c282d"],["/tags/Ps/index.html","2489df81f7b34c6272c3368be3459aeb"],["/tags/index.html","1386bff662a224dd76891477a2111c46"],["/tags/java/index.html","c2dffd49aaca174b1a0a1523e0903150"],["/tags/java基础/index.html","021a8f95257e4b73adea434f97eecbfd"],["/tags/二分查找/index.html","d17b091aa87bbb44ab45aa3741ba88cc"],["/tags/假期学习/index.html","84e2a33302f788802c281f3cbec205ef"],["/tags/分治法/index.html","43f794eb45ca487a5a57466936bd002d"],["/tags/前端/index.html","46bdb0ef4ae0e7833cf3ffde4d29b59c"],["/tags/回溯法/index.html","71599613ad5a4422171bf99f7358e7f2"],["/tags/学习/index.html","b212725b40b71587bd95ea187cc676bb"],["/tags/数据库/index.html","379bae65834b5511be96f941c92b14c9"],["/tags/日常/index.html","7d26a6a399813b6823b762a9c61f2a99"],["/tags/树/index.html","4a41ab5cebed5f4e0ee1d240d04575cd"],["/tags/框架/index.html","58cdaceb11d7e096fd43a244f666ac80"],["/tags/源码/index.html","91b218b6a16a3a077d455d770e2aeb59"],["/tags/算法/index.html","dd79d8e1f52641800d374b0124503a06"],["/tags/问题/index.html","9716dbe5bc7c8171d6718dc1eb6687f6"],["/tags/集合/index.html","bdf99549387f0a302a69153bc79d135f"],["/tags/项目/index.html","ab54065ce56711bcb6b25bd7a5d41c07"]];
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
