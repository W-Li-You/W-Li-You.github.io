/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","2b7bd9a612f438b11e0789f28d6d7c82"],["/2021/12/05/·自我总结·/index.html","6e87eb97a06c634da3f3a79caf534037"],["/2021/12/12/自我总结（三）/index.html","fb27d2b39001d7ae2bdc05832529ae4a"],["/2021/12/18/自我总结（四）/index.html","2184d27d92d570834b2bbb5313e68095"],["/2022/01/16/自我总结（五）/index.html","a49d0c673e5571aaa8b0a7a7fce8c006"],["/2022/01/23/【寒假总结】/index.html","72f86a1ac172feb2eb738da184dd03f0"],["/2022/02/13/【寒假总结】（二）/index.html","3aace9e9960330c72258713f495c1337"],["/2022/02/20/【寒假总结】（三）/index.html","06180a5ef38fc4b92aef040d89907fb8"],["/2022/02/26/【每周总结】/index.html","e04c80959a7f0f02588628df33e5fdae"],["/2022/03/06/【音乐网站考核总结】/index.html","0bde5a825cf45fa5e43dabc5796d6b7e"],["/2022/03/13/音乐网站考核总结（二）/index.html","ce24a63a0693466e3ffca71b9a2ff44a"],["/2022/03/18/第四阶段学习总结/index.html","47fd1ba04ba12d12b963c547ceb908fc"],["/2022/03/26/SpringMVC/index.html","efa7203ebd006a9df770850a55efc516"],["/2022/04/02/关于算法学习/index.html","95967150bb2fecc0c4b7b79ffebc5fef"],["/2022/04/10/初始项目总结（一）/index.html","f7a92248a0f40ac7066ef1d30c068d0e"],["/2022/04/17/项目总结(二)/index.html","48237e61ddb498510451524ae0ff36de"],["/2022/04/23/音乐项目总结（三）/index.html","9d918f8889e2462192ebe745793d9a44"],["/2022/04/30/关于下载音乐的问题/index.html","efe6166aec7862de095f5901a29f36e4"],["/2022/05/09/项目考核总结/index.html","5c2c46d9b57bfdb98010a39acf2fb193"],["/2022/05/14/有关Springboot的学习/index.html","731a57cd7f6c0a17c47ab7d15a55af37"],["/2022/06/11/关于PS的学习/index.html","fc0841c938203a5004e6d0ce7674dcfd"],["/2022/06/18/关于redis的学习/index.html","5715e618c811b14a674d6167ec272cd0"],["/2022/06/25/redis持久化/index.html","24f1cd8465319971690f30347ba63060"],["/2022/07/02/Mybatis-plus常用方法/index.html","c4d760873ce21caad6972429efe9942a"],["/2022/07/23/重建二叉树（算法题）/index.html","ae5d2a2770ce2b0b490bca6de09eb448"],["/2022/08/06/对称的二叉树（算法题）/index.html","340d65b5cf479ab95500a588fd1a36f0"],["/2022/09/08/分治法(算法)/index.html","e22f1404256244830670b2c758501a42"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","1a333f5af13aa5fc0d7eacd114116929"],["/2022/09/15/mysql引擎/index.html","3e32740f797d4414e44c7d4122b8a1c3"],["/2022/10/14/ArrayList/index.html","119bce7ee2cde3b10ea9c185dddc568a"],["/2022/10/17/LinkList/index.html","0841b302e6416f98197af2e5d971a37e"],["/2022/10/19/Vector/index.html","f9e60d2b87e28d8057f5cc5202195021"],["/2022/10/30/mysql索引/index.html","103e81df818aaa4b91d51856c7dd25ca"],["/2022/11/05/商城项目客服功能/index.html","6eeadadc357983806c25071097341cf0"],["/2022/11/12/商城项目秒杀功能/index.html","39d18142c3b3925fb4fa725a86752279"],["/2022/11/20/pc寄存器/index.html","c0dd4c8ee2f12edf1d992773af06c52c"],["/2022/11/27/集合面试题/index.html","ca6b2440d7aa71ae94ce5a373107da39"],["/2022/12/04/本周小结/index.html","af380bf2e832483828251853f6d0d3ca"],["/2022/12/11/全排列（算法）/index.html","6cd134c69637a8ef5c0a5440273183ab"],["/2023/01/15/背包问题/index.html","6ba8ce59135181c1f3e29afb14ee1e30"],["/2023/02/05/easyexcel/index.html","38b0cfd984ee54ba74405b5a3d1cf99a"],["/2023/02/19/JVM面试题/index.html","6a876350c76b658693524a03f85513e1"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","a1901ac39e33ad7bca39d06ca27cd0e5"],["/about/index.html","74aec0fe91e5da102fea9cec0b985d3e"],["/archives/2021/11/index.html","0209e7d9a64345587a66315694279527"],["/archives/2021/12/index.html","9769ceb0f81891a04b7f87359c909480"],["/archives/2021/index.html","19df59e2a4ab4cc7b035637d42013aba"],["/archives/2022/01/index.html","6c2b0f79bdc07f024d4600a0ae88a534"],["/archives/2022/02/index.html","5a51e31573bb99ad0f2039278f87d240"],["/archives/2022/03/index.html","f7951b16ce943b625a56b4e3250509a7"],["/archives/2022/04/index.html","82f00a9620fee3fb895f1a1bd8cad91a"],["/archives/2022/05/index.html","0c2b15a597be610413b787df1b58a8e8"],["/archives/2022/06/index.html","bbe6942c5f7a32246e24faa8227a3d8d"],["/archives/2022/07/index.html","a97623394c8eff115b725fcdca2ddecb"],["/archives/2022/08/index.html","9c7e97e88d573dd15259b02450721a69"],["/archives/2022/09/index.html","de1467fe6d1804d0edb5e667cbfc7758"],["/archives/2022/10/index.html","930e3d8ab0e2efe4c2ad02d31ab9a2ad"],["/archives/2022/11/index.html","2784d0b674e940b8e864f8109f9642ca"],["/archives/2022/12/index.html","02263400e0cb92824f0013fc49e047c9"],["/archives/2022/index.html","b3c7ab31522a15ef255c7c15c33966bf"],["/archives/2022/page/2/index.html","4af6a8c24808c61ae2036b7b13e79abd"],["/archives/2022/page/3/index.html","e21bae4e281ebc14f2f8a7daab90f34b"],["/archives/2022/page/4/index.html","b9ae59891eb010e73578d7e58cfbd78b"],["/archives/2023/01/index.html","f0d1df50a1342aa5bb20aa74ae7c8a1d"],["/archives/2023/02/index.html","1536565042bdfadbdbbbe9dc115e64da"],["/archives/2023/index.html","891ef4a348b41eedcfd965046c0c9c71"],["/archives/index.html","093101d1c09ecbc79b68be80dd04198c"],["/archives/page/2/index.html","714d218a2d6ea7bc88588c2db11c3d00"],["/archives/page/3/index.html","8289a44fd55f4934996e1aa404229f48"],["/archives/page/4/index.html","9ac6f9a2fb93587e99c016f906b52324"],["/archives/page/5/index.html","e9a85700ec88ab037fa235c4367e6d02"],["/bangumis/index.html","6714be54482e3e53e85ae40ea134c106"],["/categories/index.html","56c3707deca82001013ba82ac08454cb"],["/categories/个人总结/index.html","64e7c3ea974e4c15e14b0504af475db4"],["/categories/学习/index.html","d13d21ede137ea08486a595a52ca25c0"],["/categories/学习/page/2/index.html","1e3ab28fd79657004fc27c444f4ad3d6"],["/categories/算法/index.html","8beef713c06b42ff7fdb9125aeefd961"],["/categories/面试题/index.html","a2c71c7368753e2656d3735a05a2427d"],["/categories/项目/index.html","49e6fd6d1ecb0f38747f60c0dcbf639a"],["/css/back.css","944d9d4c02c9e39697c26f7f7115d5f2"],["/css/index.css","dea6c5c8cd55fed10dc9362efea2e21f"],["/css/var.css","46a8d086cb2e2f878eeeca1313d9e966"],["/gallery/index.html","646481b4467fa55a3345a9fb0a1f3f52"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","df2f18b49a8531dc5add5020f2584ff9"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","dae8bfbfcb321882bb8ab45463a6618b"],["/messageboard/index.html","b6fd9a3098dbd55dcc5877ab05be4168"],["/page/2/index.html","b92f55da5933d8c02f1c7201a15d3595"],["/page/3/index.html","472cf4d90c28af70e31b5bfa7b8323ca"],["/page/4/index.html","6965007637d38c43b1bc9fba78315c80"],["/page/5/index.html","86ce377682f704a5784fa76929b19d1d"],["/shuoshuo/index.html","fc552f2b9bfd0e4e9478d5d435535ca7"],["/sw-register.js","7b3e6983f1b18b90b84f47f91cc673b3"],["/tags/JVM/index.html","5dcd61a83f49333ee9d31f7536aa3628"],["/tags/Ps/index.html","8b461c71b0233101d25af0e51a0d7bdf"],["/tags/index.html","55830113f6f5d27c98d165785b5ce76f"],["/tags/java/index.html","e914093291268d1ff1797432e66d53d3"],["/tags/java基础/index.html","eda80375804f1e64970642794d331adc"],["/tags/假期学习/index.html","7980887dc5c16534ddc59ba52ebff652"],["/tags/分治法/index.html","f5b273a1e44d5e5100ee421461e54c73"],["/tags/前端/index.html","ba6766c7452fb166f5b901a6740b959b"],["/tags/回溯法/index.html","97f5989ae8d972d542fa4b42c3967cd7"],["/tags/学习/index.html","f9830d783187c64e6575460833c11faa"],["/tags/数据库/index.html","fa46548d7df9b7dd7755868962ca3d41"],["/tags/日常/index.html","e074ac09c94e00cbb8659267c060fabe"],["/tags/树/index.html","1bc3815fbe4e1582213e4cc11e6e65fe"],["/tags/框架/index.html","abbc00431915046aaf2951085b913a27"],["/tags/源码/index.html","73eadd397a492f8afac7264432cb31dc"],["/tags/算法/index.html","6ec32d4c71df54d5a689a4a29a98abb8"],["/tags/问题/index.html","6606a8f7c97ef3a78d1365cebee9a2d3"],["/tags/集合/index.html","9c1b965f70d1de2552573a4de4031d27"],["/tags/项目/index.html","05600b3fc986b4d05633b9e214522074"]];
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
