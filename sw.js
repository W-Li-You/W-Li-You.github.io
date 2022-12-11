/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","b3f01afe721c4fc7a8d94db1c17c3c44"],["/2021/12/05/·自我总结·/index.html","f45bca660ed4c555255b1ea188851449"],["/2021/12/12/自我总结（三）/index.html","1e5e5e5c6c600d5b862f98ef64bb0295"],["/2021/12/18/自我总结（四）/index.html","5b3dca41a5d90746be91bf2afa8d9fc8"],["/2022/01/16/自我总结（五）/index.html","94fc8b30ee6fb3420d615aaa9a2a835d"],["/2022/01/23/【寒假总结】/index.html","d4f2ba192c6bcd6e8d445820e94f969e"],["/2022/02/13/【寒假总结】（二）/index.html","d0213bdff4fb550954d2284304c38523"],["/2022/02/20/【寒假总结】（三）/index.html","0573aa65b4fc2100cd4115b5e814bc19"],["/2022/02/26/【每周总结】/index.html","717e52e8b7e5f4de3b7a7c09d86c6af5"],["/2022/03/06/【音乐网站考核总结】/index.html","173b3e22bfdf85692d540abe29b62133"],["/2022/03/13/音乐网站考核总结（二）/index.html","af6ae8de30645cdf9a042c0eff4a83ab"],["/2022/03/18/第四阶段学习总结/index.html","856fd8768462e787b815b7ba8dbe294c"],["/2022/03/26/SpringMVC/index.html","4592f3db47f369a516964dbb57f1233f"],["/2022/04/02/关于算法学习/index.html","28a77a49011a7ded0679a3f9530a8b53"],["/2022/04/10/初始项目总结（一）/index.html","730fef4db3110821d0ecc4d57b86618a"],["/2022/04/17/项目总结(二)/index.html","2364fabe0a7f9f0cf7145b22f8e7cfbc"],["/2022/04/23/音乐项目总结（三）/index.html","f3c2faf014fa52fe83c362c98619513e"],["/2022/04/30/关于下载音乐的问题/index.html","23275a9e67215be4845743eba2bc7211"],["/2022/05/09/项目考核总结/index.html","f8abe359fba41690d245a3f20c3a641b"],["/2022/05/14/有关Springboot的学习/index.html","77629350e376813559bcbc8f5818f316"],["/2022/06/11/关于PS的学习/index.html","2524c952b81f13a0f842612507c34243"],["/2022/06/18/关于redis的学习/index.html","cb2c988d55f90366f943629fea60d42b"],["/2022/06/25/redis持久化/index.html","7cff69bb86f2d948e02c498d1d062884"],["/2022/07/02/Mybatis-plus常用方法/index.html","aae93f319de65b09bfd7cae0781fa2b2"],["/2022/07/23/重建二叉树（算法题）/index.html","98d7afcece7f0c10df60778d245ff6bb"],["/2022/08/06/对称的二叉树（算法题）/index.html","79256c449f0113c7eff824a9f14c7a4d"],["/2022/09/08/分治法(算法)/index.html","f707fe1ce900eddf260b6296d37d2687"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","0a9100a992555b77e33f172631d85da1"],["/2022/09/15/mysql引擎/index.html","a0e74402061783d27d9f53ebdd2c666c"],["/2022/10/14/ArrayList/index.html","6ded77dc00f4bad25915f3096fbc838b"],["/2022/10/17/LinkList/index.html","eb4a96a7ec911da4abdcbc9cba9a2407"],["/2022/10/19/Vector/index.html","17789a6d5058bf9754acc8d7213f3c18"],["/2022/10/30/mysql索引/index.html","917a9c998436be1627e68d3e682020a3"],["/2022/11/05/商城项目客服功能/index.html","effe1c5d7fa37ab4b1c1b4749a2a14ee"],["/2022/11/12/商城项目秒杀功能/index.html","92a615425446d69af26e393f9153c5b1"],["/2022/11/20/pc寄存器/index.html","6d3faee65d5569c462a4c87a2691e44a"],["/2022/11/27/集合面试题/index.html","7b1a763239be834eee6232adced83707"],["/2022/12/04/本周小结/index.html","46818908ed79f898dcd54ba369167908"],["/2022/12/11/全排列（算法）/index.html","8a68f59ddee4b6e76966eeb90d98562f"],["/about/index.html","7a273736d4ab35fb25ca28f4545c927a"],["/archives/2021/11/index.html","7be7d4b030ce384e2c4ac3a53c838fd0"],["/archives/2021/12/index.html","fed117b7ada12521f9df72a77e4a52e6"],["/archives/2021/index.html","a2483a7944d9bca863e3f94301af5627"],["/archives/2022/01/index.html","093dba9638bc36ac045259d52b88ccee"],["/archives/2022/02/index.html","036f1e9e6050c5dc2084b6f38d34ade3"],["/archives/2022/03/index.html","65a824cc45c2df89b7edc9bfdc79ebf1"],["/archives/2022/04/index.html","e521f2d350c86db34b4e34a886772c2a"],["/archives/2022/05/index.html","a6e5c0b6172ec449acb89ff28d672610"],["/archives/2022/06/index.html","d6da715ec425b0a40ace0c2d5ba3648a"],["/archives/2022/07/index.html","e96e7947f511a12c7605e9f1db820d1b"],["/archives/2022/08/index.html","6e46411be3b45f0294af05a168d331d4"],["/archives/2022/09/index.html","4f9171e8d40950efa30d5146c3e6de88"],["/archives/2022/10/index.html","1b92bffa8ea222c23819c93c2accdfed"],["/archives/2022/11/index.html","aedd0d9ec2eb2c5d57f912c59a5d7d2d"],["/archives/2022/12/index.html","659d6ca0352a9d6f6177064b51a1237d"],["/archives/2022/index.html","3e792e3161aac7cacf73dbb358921b23"],["/archives/2022/page/2/index.html","bf9774f89fa362ae247047c8e7debae0"],["/archives/2022/page/3/index.html","dd7f2d74d40f70779d40247131ed00ce"],["/archives/2022/page/4/index.html","65da227298a16a6c0c6e3e838ae91fb0"],["/archives/index.html","eefb28b51ea6146fd9900723e931b309"],["/archives/page/2/index.html","760a003a77212b6494aefa3f276ff483"],["/archives/page/3/index.html","2dbe1c7c2d21984ce1d8fbbda0a484c9"],["/archives/page/4/index.html","defa95b7c46b6b3c98e10eb522175151"],["/bangumis/index.html","2c2e27ce35b2439525dcef4a2a76ceca"],["/categories/index.html","d9b8d9f80b03a3fbc8f632238651ad9e"],["/categories/个人总结/index.html","867935e00297c5761266dab26ddb790f"],["/categories/学习/index.html","9b8f25b5e4671af1613fa8a068568b3d"],["/categories/学习/page/2/index.html","781644632645cd9d88322ccfe9d5be82"],["/categories/算法/index.html","814006547ac660e227722309d768022c"],["/categories/面试题/index.html","fa63ff549ff67c5871bd97c0b550de83"],["/categories/项目/index.html","5c58a8fe6d5315ac81225111614a8ac9"],["/css/back.css","979daf241e693d9920a62d744cdf3bac"],["/css/index.css","cb6be6513309b4d6403478399f8b7cf6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","838cb9cdcea830bdc1e9ced627a196b1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","8e6eab9b9868f284e34fc2f2d68573f3"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","cf7047ab815220dde4078a8de49e9192"],["/messageboard/index.html","c36dc10e8340accabc3c19f3cf243e8f"],["/page/2/index.html","a151e4c82417d34213b7338cea912012"],["/page/3/index.html","e47d74324b959526ea04c91dd3c12a68"],["/page/4/index.html","1a0ec6ebcc49864ad44dfcab6b4f1d71"],["/shuoshuo/index.html","de078bd368e51057b17188eea7584495"],["/sw-register.js","6b3f8791dcfcd0b17a04e890fd2c3d4a"],["/tags/JVM/index.html","a68a11bbfcac06c60440da963ecca799"],["/tags/Ps/index.html","97f5c9afd4b25174be80e0125fdaf93d"],["/tags/index.html","716d9c1d066f5690f7823a388d7bb818"],["/tags/java/index.html","d59cd3c9adf7a79286ac7e7f9078cf5e"],["/tags/java基础/index.html","e85a5b6c56d17fdb6880bc64cd5c76e1"],["/tags/假期学习/index.html","16fffcfc3b932e7c6073e37461f6be0e"],["/tags/分治法/index.html","8e57e9794f42c1150bdff22ffec5783e"],["/tags/前端/index.html","09d7e928f12a450d6b1c5ff06a583726"],["/tags/回溯法/index.html","d71ed444ce6ae9f1cb8e4c236081721a"],["/tags/学习/index.html","a1ef5265e07b0f00f03607dbbbe0d764"],["/tags/数据库/index.html","f2a11b0163eedf977016f241f0952194"],["/tags/日常/index.html","ff2918e87297e0d8d229e6d0660af560"],["/tags/树/index.html","7c8111cb57d547bcd5246f77a25aca99"],["/tags/框架/index.html","bef00c179b614a0c728f4c0adb981478"],["/tags/源码/index.html","198399cb9aa7610897f5b267af62a495"],["/tags/算法/index.html","49f5ea35f3862e6381891008758aa75a"],["/tags/问题/index.html","71252489ea54282cd5638570780898db"],["/tags/集合/index.html","b5706ddfe6e8da2a45969a7d6acc3853"],["/tags/项目/index.html","bfb3b079cabf7c9763a8e6914bebd04d"]];
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
