/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/第一篇博客^-^/index.html","02689df67878134f90e2abe79aaf6250"],["/2021/12/05/·自我总结·/index.html","00ad6665baca4d43e4d6e7a36c0bcd38"],["/2021/12/12/自我总结（三）/index.html","d0566876e874e766bf86ee0d5fa20a0f"],["/2021/12/18/自我总结（四）/index.html","068bd550ce2a176d104f431df4c72a1e"],["/2022/01/16/自我总结（五）/index.html","e1d36e2d7148e02f2be43097222a4396"],["/2022/01/23/【寒假总结】/index.html","019c12913f8e79dd84d7e254de70c889"],["/2022/02/13/【寒假总结】（二）/index.html","f64cec5b27477b5c2efd9ee1dac50cbd"],["/2022/02/20/【寒假总结】（三）/index.html","d10c99e50efec3fb62a53873f6592e6f"],["/2022/02/26/【每周总结】/index.html","e819fcef631235f0fc39edd878720a83"],["/2022/03/06/【音乐网站考核总结】/index.html","3773945558b61bc8f81bbbfe94382771"],["/2022/03/13/音乐网站考核总结（二）/index.html","fb6fc7d39372434f7015a31e84d3b254"],["/2022/03/18/第四阶段学习总结/index.html","0ca6a6e4fbbf185b3a0f296a082a0a94"],["/2022/03/26/SpringMVC/index.html","590d7c55fa5b11b40e3a0a0d9ae17b73"],["/2022/04/02/关于算法学习/index.html","d7029e8b113d67b63efadbc9c9b0e454"],["/2022/04/10/初始项目总结（一）/index.html","514e083eda30754605e57070cf52c292"],["/2022/04/17/项目总结(二)/index.html","3e6ec1ed7822585c49a514d3a8fad624"],["/2022/04/23/音乐项目总结（三）/index.html","f98495784ec22f1d50cf3305ee85f1e5"],["/2022/04/30/关于下载音乐的问题/index.html","77d6ea12017e561f52a819a7011cec3c"],["/2022/05/09/项目考核总结/index.html","b2e811709352a4843015d13d909d0af6"],["/2022/05/14/有关Springboot的学习/index.html","874aaf3b90fec7c0c96b12e680d908e2"],["/2022/06/11/关于PS的学习/index.html","8cfc88c588b4b49bf1caa2016f84c392"],["/2022/06/18/关于redis的学习/index.html","eee8eccfb90cedc8d0d0f0083aaeaf6a"],["/2022/06/25/redis持久化/index.html","95d3a7093eec7c92d99367069eac81eb"],["/2022/07/02/Mybatis-plus常用方法/index.html","f85d52d331fc91047b90629c6bf0ad01"],["/2022/07/23/重建二叉树（算法题）/index.html","f9212c7f104d6e3897060601250d6699"],["/2022/08/06/对称的二叉树（算法题）/index.html","8d55653df4078a7d95f960548b107f27"],["/2022/09/08/分治法(算法)/index.html","51ca112a65b0355d22cf6411ab1c78e1"],["/2022/09/15/String,StringBuilder,StringBuffer/index.html","112c7b46dc295db6f246d632344e66c3"],["/2022/09/15/mysql引擎/index.html","75a513f2b62c1ba7f39dd4a337d324ad"],["/2022/10/14/ArrayList/index.html","41e252f50b6e0503ad3e7b6a578ef706"],["/2022/10/17/LinkList/index.html","6c4b8505424afeb4007c94e0488aceab"],["/2022/10/19/Vector/index.html","3bb4237d23718b61749074a37c216cff"],["/2022/10/30/mysql索引/index.html","a03bc028e91732c12db50c9537c0bbb3"],["/2022/11/05/商城项目客服功能/index.html","3ab868c04f1dcfc9d49115cab34864cd"],["/2022/11/12/商城项目秒杀功能/index.html","a201983f2c5b569835d88678a8dae6fc"],["/2022/11/20/pc寄存器/index.html","27bffc710c40ee28e53cb63767cb2c5f"],["/2022/11/27/集合面试题/index.html","8625df49675d071406341d7edf0f6b7a"],["/2022/12/04/本周小结/index.html","f4bb908af0320ae48872c47fc0e10bd9"],["/2022/12/11/全排列（算法）/index.html","4fde8684c29cf628cf399eb4dce73e55"],["/2023/01/15/背包问题/index.html","990b992c414d2aef698932f86a32373f"],["/2023/02/05/easyexcel/index.html","fa619077d70f865ab181d7123edcdf13"],["/2023/02/19/JVM面试题/index.html","66ef060449e82c72e576aa457e680054"],["/2023/02/24/JVM-Java内存区域与内存溢出异常/index.html","61e3975b8778481d02c8e4665907812d"],["/2023/03/01/JVM-垃圾收集器与内存分配策略/index.html","e906e63b27a1490d942458eead626c58"],["/2023/03/11/杨辉三角/index.html","46e8742fc7320ed9225131e2108f5a8f"],["/2023/03/19/和为k/index.html","ec1d2e7f0315e4aa8cd05f0d5a6e1ebc"],["/about/index.html","fd37ac0a4a94333e7407694ba0cbbc34"],["/archives/2021/11/index.html","d57092260ee23fef3f0a20610e55c4a8"],["/archives/2021/12/index.html","72c156cbc26e3ecacfdfd6b897ad62e8"],["/archives/2021/index.html","4958333ca64ce6e3cf3b2acd657db0d7"],["/archives/2022/01/index.html","b15d40e913db0116f61489b6b08b925e"],["/archives/2022/02/index.html","1555a868fd7ea4078247ffa6637046a8"],["/archives/2022/03/index.html","62579554045cec3cce8d09dd0a320551"],["/archives/2022/04/index.html","6089749dbd1b35650d0045b99cc0863b"],["/archives/2022/05/index.html","e23a9bf9d43474ab9a0d37bfa8df9997"],["/archives/2022/06/index.html","ded17dd8314e196d405f73c338826974"],["/archives/2022/07/index.html","0f5dab6e94fd00f852ac1b59f7795be8"],["/archives/2022/08/index.html","31dd295b80b422b9e4c6d7a9ef9b9083"],["/archives/2022/09/index.html","4e32a46330bed2df9c0989d5dde724ff"],["/archives/2022/10/index.html","d5d907f04a9d2df00633729519808661"],["/archives/2022/11/index.html","d28272d9b6cc510550a6b05aa5b27e6d"],["/archives/2022/12/index.html","1067967a5c0d472f2d62705ab0140b46"],["/archives/2022/index.html","98a1ca7f6af313791bc6b3a990e42bdb"],["/archives/2022/page/2/index.html","74e17af0ae7a5f11ca6fa3ba23eec96c"],["/archives/2022/page/3/index.html","6a8cff1b0d32b056e450bb68b2cd4878"],["/archives/2022/page/4/index.html","f0587ff684f2efe1857c052dac82c6ac"],["/archives/2023/01/index.html","119a2a49294d474d391cda23998831ce"],["/archives/2023/02/index.html","676facb38f713ed448c869e78bb0dc4e"],["/archives/2023/03/index.html","114efe10ccb65f15b32faf96cef090df"],["/archives/2023/index.html","3a767398183c83d021870457d79d02d0"],["/archives/index.html","11860ab48de0374e53b2de9675b83d34"],["/archives/page/2/index.html","7931a19a1727f185edc2d4afc400243a"],["/archives/page/3/index.html","8b136651cde86a052831722651dfc543"],["/archives/page/4/index.html","70f2030b1ddd27d89b62836eaf85668e"],["/archives/page/5/index.html","cfaf73383c94fa5b5dfd622d4252e943"],["/bangumis/index.html","a07456cb889748f09f0661b5ba8d67f6"],["/categories/index.html","af9c67d0068c3fd90c842c2e8be98359"],["/categories/个人总结/index.html","ba7fc2c1ae3fecc04e1b165b463895d5"],["/categories/学习/index.html","ad135ca6987fa6a8e8f73fbe56c09ac7"],["/categories/学习/page/2/index.html","67dbb32fee6671ba1ab0d003a7c5957b"],["/categories/算法/index.html","0c74cb0efff9146d244c1b74d42975ed"],["/categories/面试题/index.html","4357afdd9dc4d963846dc8929913968b"],["/categories/项目/index.html","89ec32e001105f38818c343ffa78f8e7"],["/css/back.css","4d72fd81e7da972b59145655e4542235"],["/css/index.css","e45d3d6d17a2f27d53630b88e81948cc"],["/css/var.css","d4878f2ffda635dd105dbb4f9d2f8eea"],["/gallery/index.html","280223bbdd0fc2d4bd4e2c010ae89d86"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/null-6289c70f10aca955.jpg","9ac276478dab439af89c5754cbcd044b"],["/index.html","e4ed2881069d21edbf1ecd88ed4891f8"],["/js/back.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","318ece6ea9217face08fd65540c19aec"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","fe209ba0c91cb7bbc49d12fb8e9a4ba2"],["/messageboard/index.html","2f598ba44579db59bd79c02c8fd22fbc"],["/page/2/index.html","3f2f256b87f73ff5171609b850477829"],["/page/3/index.html","253f8a31819b5615c8a64cb5aa7b8158"],["/page/4/index.html","7a3f0df22b0cbb4de083a29133e0cab1"],["/page/5/index.html","eb775fc6596260a899221645645286f3"],["/shuoshuo/index.html","8c0b38e165ce868ae11e9ca4b49bede6"],["/sw-register.js","144166c60837381fd1958904a0d98dc8"],["/tags/JVM/index.html","ba61de25b9fba3c75daeb4561b34c31b"],["/tags/Ps/index.html","f69038de471f41a0dd7015c2370c44d4"],["/tags/index.html","d8aac42dccae28750d9b027fbc61db5a"],["/tags/java/index.html","47c614c6afb5451ded444ac1537156ae"],["/tags/java基础/index.html","7ac7b6a78df12cd5767d885af901b4f1"],["/tags/二分查找/index.html","a241cc600d5f41b6331c92bcaf8ac88d"],["/tags/假期学习/index.html","9843dc0796ddf54572fc72f2a621aa2a"],["/tags/分治法/index.html","3d18c5402db386806ee543378539c083"],["/tags/前端/index.html","78c6a7da429d2227d126c588b6dfb3ea"],["/tags/前缀和/index.html","fc2088714e6543f447546e928eec0a44"],["/tags/回溯法/index.html","e7432b14bb143a047b0ac8555d0b18c3"],["/tags/学习/index.html","f2aedfefea4080215947f12a7ae6453e"],["/tags/数据库/index.html","6b2c3566e5f6e8a6f1a41a9478adc1c7"],["/tags/日常/index.html","5057360095f0e6a91c8f45a1bd5f6f06"],["/tags/树/index.html","b3c6d58a0f6fcfabb49b2584dc1847b4"],["/tags/框架/index.html","f311dd46b23ba9bc81ee1b0863997bcd"],["/tags/源码/index.html","f265b4445278d4a8b2150f37299899c2"],["/tags/算法/index.html","2b835ff4fb6af2abc1d31dd063f83df3"],["/tags/问题/index.html","61b2851aae88c7858e580940b39e4de9"],["/tags/集合/index.html","df97be53b799bf4ef701b82aee099e11"],["/tags/项目/index.html","015a7e1ab252f35436f559ac6bec8ad3"]];
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
