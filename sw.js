/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","4ab4da02800482897671091efd4ab425"],["/2021/12/05/zi-wo-zong-jie/index.html","30bc4bc7ce31eec74b7e163f72a03dbd"],["/2021/12/12/zi-wo-zong-jie-san/index.html","9af39135e37e0d90c35a20b35dce31d7"],["/2021/12/18/zi-wo-zong-jie-si/index.html","8923aa65ffb439d8632717ba0b36996d"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","efd4ef81a12ae351422f85fb4eadcb0d"],["/2022/01/23/han-jia-zong-jie/index.html","ee3bf149c3c94dbefa4869c006a82587"],["/2022/02/13/han-jia-zong-jie-er/index.html","dfb6960c68f92be7b492108b4c0f161d"],["/2022/02/20/han-jia-zong-jie-san/index.html","8cc5f11c49e9f1ddfcd6299266ef0e77"],["/2022/02/26/mei-zhou-zong-jie/index.html","dd4dd41be5c4a34120c3d7cc60477d7a"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","8e40ac906435cec4088c6041d3bfc225"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","2c211f23645f609169017edbfeb6e208"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","49eee933f18209799114f167e5f8818f"],["/2022/03/26/springmvc/index.html","18fb847a80f00458b501bb834a7eb63d"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","6fa30506d8a46dbace0742f535f57e20"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","e86b89fc0f0f5c78dc4700010555ce23"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","fd12d6c7b365d8b4632037a42a4013c5"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","9cad79f794c1ba1212611d710c490cd5"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","b094826d9272d85b968abc30724ee8c1"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","b32866a2eeae469576c7f3db9fe0fa13"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","c5557813a37ad97b8de73893dc694f0b"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","9f02d6df2b172e51f2e5151a07d702d5"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","d14b8bc523fc3bedbf16b19a251b0d88"],["/2022/06/25/redis-chi-jiu-hua/index.html","6c85cc8e3d5d051e9619c8a56f2906e8"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","f6243d2da03ac76193ac8821e78caf05"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","1ea1413165ca247f853747533d502164"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","25dbf7b2acb4eb99f57aeac66937c6b2"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","4e44ee2da5864df93b8b43af318213e5"],["/2022/09/15/mysql-yin-qing/index.html","49c8e61c3051810b60b70221e35180a4"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","5454fcb8ca3ed90cedb937c2e508c76c"],["/2022/10/14/arraylist/index.html","5f8e840f3122b93e647e2d36124b00b4"],["/2022/10/17/linklist/index.html","ea1b9eb1fd4e7cb58a4a8d22b87f05b5"],["/2022/10/19/vector/index.html","9074db0d485061f68c49e6b154e55015"],["/2022/10/30/mysql-suo-yin/index.html","f3c1802cf0dc1e2241f748b670a4b1ab"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","4ba3cfdce8a28ba709d683ab8f791e35"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","f369b76feb410ad28056b8b20b65ebfa"],["/2022/11/20/pc-ji-cun-qi/index.html","c7704b2fda8ed379487f15eb618d837f"],["/2022/11/27/ji-he-mian-shi-ti/index.html","f42e457fbfe5422b3ab6afaad0413590"],["/2022/12/04/ben-zhou-xiao-jie/index.html","fbef00d1e725f2432ffadd39dd131c3f"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","1017b240df34ab6f9833f49ea93338ad"],["/2023/01/15/bei-bao-wen-ti/index.html","d0680a69ae73a3f340af10955547311d"],["/2023/02/05/easyexcel/index.html","9daed06348dbcc941cacd8a4bb897f56"],["/2023/02/19/jvm-mian-shi-ti/index.html","c181d080c77850d26dd7cf61912ffacb"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","c2c66dc7aa6b985f5569b7c1e8c00db8"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","dfac4436169f913057a9150b4a57d581"],["/2023/03/11/yang-hui-san-jiao/index.html","9a34e882d5ecf1d8c16fd2c52ba7b058"],["/2023/03/19/he-wei-k/index.html","7b5309033582bdac4895ccfb68a6fa01"],["/2023/03/26/juc/index.html","c2c5ba554e7fcd298006383b501aef8c"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","52eddaf44c19caf655864326287a16c9"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","4320c5e6f14934690698b4d2e42f6c77"],["/about/index.html","63f7135e1813f0da5c951003e229e401"],["/archives/2021/11/index.html","2c83af707f594a8c3cd9de93ca6bfc97"],["/archives/2021/12/index.html","32e01f3ad8c1131f899a09f3e803b6eb"],["/archives/2021/index.html","1010318d3dc2de781d35884111b240f2"],["/archives/2022/01/index.html","e5317e8435cbcab65e79f7b9a0576423"],["/archives/2022/02/index.html","26741f3cd185ec2541ea767e36b4460d"],["/archives/2022/03/index.html","ff7d26d062c943f3cce0ad419a68b28a"],["/archives/2022/04/index.html","1bacd9627caf79d7cd1f7176bf006e03"],["/archives/2022/05/index.html","0a16556464e77820caaa50ebf2a9b0b7"],["/archives/2022/06/index.html","85060053ea14d766f28b0b10be3cb76a"],["/archives/2022/07/index.html","5be59491e4af0c7d09925caf27612f7b"],["/archives/2022/08/index.html","74017884f679cc08778ac273947a4a83"],["/archives/2022/09/index.html","c5f863fd067382cd18be10d0c10b611f"],["/archives/2022/10/index.html","c68f5a1ab94b8e7a497fb837ad58f833"],["/archives/2022/11/index.html","359493105e4df1156967f25f8c4f36ca"],["/archives/2022/12/index.html","eecb606198ec7d2ac40fa8a5aec5c009"],["/archives/2022/index.html","a4e545b84a9855d6439231c5808d073a"],["/archives/2022/page/2/index.html","63decc97e00e865373bbfe68cdacb4e0"],["/archives/2022/page/3/index.html","5929325b0b098efcb66486b613ac9a6e"],["/archives/2022/page/4/index.html","1d24d83523164e8ae098b5f8db462073"],["/archives/2023/01/index.html","5adb64e44e5829d25de4db73b1793dda"],["/archives/2023/02/index.html","a47fb61b1e0052a882b0134d76fc7d4e"],["/archives/2023/03/index.html","0d18c92976cc6e1ac97d4feaad8761d4"],["/archives/2023/04/index.html","d848e2a740ae149067a0c2334dc07b3d"],["/archives/2023/index.html","33c6810c6ced4e3b1c2fca1adfa466f3"],["/archives/index.html","0138c215ceaf649db17ca9bc5b938535"],["/archives/page/2/index.html","b9c732005d18cc4ab57a878387b1aeb9"],["/archives/page/3/index.html","8af5b234f51ee72258883aa9149d69c6"],["/archives/page/4/index.html","4b956409b84c3689a79a08be8ae7713e"],["/archives/page/5/index.html","60b1af9433a51f0e1da5925c2a30694a"],["/bangumis/index.html","0142cb18e74dc29d04a0f477e8ec314e"],["/books/index.html","6baefbbac11699c3a67dcb66562bcb5b"],["/categories/index.html","c9c1862d91bca647de17f597531237a1"],["/categories/个人总结/index.html","ad4124fa1020f5adbd26bf3255884d9c"],["/categories/学习/index.html","da9c497290f632856ac566213a118e2f"],["/categories/学习/page/2/index.html","eeb3d790e3733fa93ff2a71364a5dec7"],["/categories/学习/page/3/index.html","b06ef609163d2c44a5d8a7470c25baf8"],["/categories/算法/index.html","a353e8f9809f9ccdaecbc13bf3802461"],["/categories/面试题/index.html","0612887a5b0493cffce9ce4a2eb78172"],["/categories/项目/index.html","6173aa94c2e4415d2ff898f3173e6138"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","60733ec9e76c26f01aee26cd3951e381"],["/friends/index.html","9fce3b594d4218e1b674fa91fe42a5e3"],["/gallery/index.html","9bbf2a88b3f7971216212ad83730d797"],["/index.html","498d7a4610451d3bf99dcec511848fa4"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","f92228635ec8da6a32bb977ca0584a1b"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","6c1922e5216d8324108a7f67586c038a"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","f82a8a94f39d871a4391ac5e91689449"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","6a318d9cc0c36c8f03208bfddb3ba7ba"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","a834b8ab25b549f20df8999e8e8becf6"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","a67aefb01988cd9c6ce0283bb25f856b"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/movies/index.html","f65e9101c11fb4584ed1a23021ebe6bb"],["/page/2/index.html","8ac4983e8f93b131860086b5baef3e2f"],["/page/3/index.html","3a45f67640f23dcdda6e8671f9c1df19"],["/page/4/index.html","4ce1e0c33478122a46966360531b802a"],["/page/5/index.html","c909ceb65acca2926958ec240d09d000"],["/shuoshuo/index.html","c4b55984c14d61c8bd8d453d8b3845c5"],["/sw-register.js","ba972d797d991e88b4360ca418b71061"],["/tags/JVM/index.html","3154035afa3526f0d9a99a39e5f1848c"],["/tags/Ps/index.html","b31cf662296a4ec69a20406d22d4e8cc"],["/tags/index.html","bc76f7186aa477f8bb4a75dc4466da31"],["/tags/java/index.html","139fc75e12375d9017c51865033f1cc5"],["/tags/java基础/index.html","25721c865df0a744d7169625cbc2273a"],["/tags/二分查找/index.html","0798de6f9f33eb8b6c48b38f62252add"],["/tags/假期学习/index.html","5ea24a342ce79262a6196d0c397f3779"],["/tags/分治法/index.html","0ef8e8b0476e6804ce81fb6e1b087363"],["/tags/前端/index.html","678b0f59537414f2b1d82c6d93163bbc"],["/tags/前缀和/index.html","f026f69f84ac75e954e969427db0f69b"],["/tags/回溯法/index.html","66fdc2900fe177b93ea5294b749cf1ac"],["/tags/学习/index.html","f256a1c3a840a146f1c94688b9793a48"],["/tags/并发/index.html","2dba4c6c3058e4d82db5f248b90523f5"],["/tags/数据库/index.html","810555029d079fdb24538991338fe781"],["/tags/日常/index.html","bdd1c3c0b1cc5d1c702261a45212a019"],["/tags/树/index.html","abcc83a6ba24ccc40eb262bb525fb123"],["/tags/框架/index.html","d6403cba5e99e6564abe18244ba392bd"],["/tags/源码/index.html","4e57a143aa589a6f8e177b661fb1d76f"],["/tags/算法/index.html","a71f35db9ac87185708b6e4f0c351f55"],["/tags/问题/index.html","21ac66332a2d67fb47a95a618c1b4900"],["/tags/集合/index.html","fa613f489e15de3c3eeb063e3babb4d5"],["/tags/项目/index.html","e71dddd7eef66e621021c0838f5001b8"]];
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
