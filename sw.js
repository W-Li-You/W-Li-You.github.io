/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","417b65bb2681d36d778e6ee4c98a05f2"],["/2021/12/05/zi-wo-zong-jie/index.html","896ccff1c5f90466b8ac52016d60cb73"],["/2021/12/12/zi-wo-zong-jie-san/index.html","2bc6cbaf36c3f9ae4f6bad1f479630bc"],["/2021/12/18/zi-wo-zong-jie-si/index.html","201e3eb0e44b75594c3811a8eb96640a"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","a337083e62d52ba80ecdcd4ab032a31b"],["/2022/01/23/han-jia-zong-jie/index.html","0cf5083c7ebca6db77c2cc2454940da7"],["/2022/02/13/han-jia-zong-jie-er/index.html","b0fc94c429307115e717fe2d959cc566"],["/2022/02/20/han-jia-zong-jie-san/index.html","606568724c82a19aec73b562162101b5"],["/2022/02/26/mei-zhou-zong-jie/index.html","60f70e4940a8c35ddfae7163d6b6e9d7"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","34aec33940f1d04b69e5389b082cc430"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","4398e20a33efcda1b386d770fc2c6a43"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","8927dca2f83bab08159877d533e1b804"],["/2022/03/26/springmvc/index.html","581cb945f812eb948dfcfe501b2f595d"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","663488656c365a602933ad5422e6a341"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","e7ba926fb7ed7c4248feb852fdce75dc"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","863c021bf968047ba9c19c84805f1c6b"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","1f38e7813ca18410417ea257ba448ca7"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","23f20a4d741a19f4d2c5352636f28314"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","cbd529185f0f9e061db9db2073c398ee"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","e0c355b73fa8dc98d6b80f0d044174de"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","4bb478f9923264c262b28061994eeeb7"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","7b40d69bee1eb9fec547b212dc31e94c"],["/2022/06/25/redis-chi-jiu-hua/index.html","0a8345f2bd65c1b280a07c6bd53fe796"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","d8125b1b7eb34379df5c57c9fe92c721"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","255d81f64415f210025a5b7e98907eb2"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","9d883ab130e1e8f1e05c3522a6fb885b"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","c9ff295868c43ab40c6149604c9757b5"],["/2022/09/15/mysql-yin-qing/index.html","4f5162842686a6c33c623cf8d56ab6fd"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","ff4071af0195e7afc6ec65251dd71a1d"],["/2022/10/13/arraylist/index.html","aebeaa3ce0a092ec2b677a34ee4a5aa9"],["/2022/10/16/linklist/index.html","30790622d958b018ed8eda9a0c143f3f"],["/2022/10/18/vector/index.html","e3e841e1dd2a53812eae94ee37eb6978"],["/2022/10/30/mysql-suo-yin/index.html","06c8b0c9e9e413c37ca591eff4e10ac0"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","377b2e20696350268e0c2ecb9e4e0d87"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","051bc7b70b8b1f21662d33c929bebe96"],["/2022/11/20/pc-ji-cun-qi/index.html","5966e891be12ca33d4fc88e26bba9264"],["/2022/11/27/ji-he-mian-shi-ti/index.html","a1bddaf3e56fac2a340a7bf567ed1dba"],["/2022/12/04/ben-zhou-xiao-jie/index.html","7a50ca92b30444f6fcf9a384effecb3e"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","9c76a233a6072343f792c4cba76ede06"],["/2023/01/13/niu-ke-div2/index.html","01c7cd95d40828f5f76fcc252db56ae6"],["/2023/01/15/bei-bao-wen-ti/index.html","8d5de98c0aa3afbdb78125e9c5f3035f"],["/2023/02/05/easyexcel/index.html","3559597876b207b50e1805903c4d89c6"],["/2023/02/10/kafka-jian-jie/index.html","850d1c36444599f2ac4f077562a5c3e9"],["/2023/02/19/jvm-mian-shi-ti/index.html","1b4679e024d4acbf8aa4433896ae1108"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","4c8b71d46d8a80720dea86e166043b9f"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","b43d9a28b1732b66783ed992a0d13455"],["/2023/03/01/kafka-sheng-chan-zhe/index.html","90b0ab78a9734926746da9371b927c2f"],["/2023/03/11/yang-hui-san-jiao/index.html","e7b4bee55052460fa6f9694c4f811315"],["/2023/03/19/he-wei-k/index.html","afa118740ed8ee4c86afc3e337672981"],["/2023/03/26/juc/index.html","824cac362449fd7b11229d54e89884c3"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","8ba1939255cac10275931ee5a82879c9"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","213253e756df29413002efa76caf1584"],["/2023/04/20/mysql-gao-ji-yi/index.html","06647e90a20f6c29457277af011cd9a3"],["/2023/05/01/mysql-gao-ji-er/index.html","c93ff8f8d07007d7fed32ecd43fe5acb"],["/2023/05/11/mysql-suo/index.html","dabfb388392ff85ed1e3a142f109297f"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","7db7376f07a824f9bf6a00f40479267c"],["/2023/05/23/mysql-ri-zhi/index.html","162a3ee81b3f251b7236c95758797eb1"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","1e38f3cbf7de9eda097ad50b077cbb91"],["/2023/07/15/xml-jie-xi/index.html","201c4957d4cbadfb14ac9140b52f5460"],["/2023/08/21/mvc-zu-jian/index.html","1644a80a7af48aed19162ea4afba278f"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","a49adfa351d67efbf167c5cb3a62c1f3"],["/2023/10/10/dan-li-mo-shi/index.html","b5416f3c9595b4c55133bda29d4784ed"],["/2023/11/23/hua-dong-chuang-kou/index.html","a7c536597f1226877750d8437331f689"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","98acc4f61f1e8fea349e6dca138a258b"],["/404.html","8895ff9f4810afa5b41c03ae7fbe7b67"],["/about/index.html","8ccadb27b82710d29040d73b102e3ac8"],["/archives/2021/11/index.html","75336906a1b88b3e85f51c2b706c7080"],["/archives/2021/12/index.html","8afb0ac3b12c59eed98969ba41e272a9"],["/archives/2021/index.html","82aea9c7eff8a54cedf06d8cca16e0eb"],["/archives/2022/01/index.html","b562298c5372929b982b70f1d4ede7db"],["/archives/2022/02/index.html","4cb8220505cbd8d10755eadb8f4f731c"],["/archives/2022/03/index.html","80989f9e527802d8fa4bef02234995da"],["/archives/2022/04/index.html","f7c223582b5f2a2130d97b1f326685c7"],["/archives/2022/05/index.html","332f8f192332cd5029986fd8bdc9c477"],["/archives/2022/06/index.html","bce7ce18d9a4c8ea18f4b5a910878efc"],["/archives/2022/07/index.html","063dffd496c1075d426984487ae021e8"],["/archives/2022/08/index.html","791ffb6c4b691f0421361782c175317a"],["/archives/2022/09/index.html","e93da69fad9f4536694657861bb6fdcc"],["/archives/2022/10/index.html","e2e5ff3782853a5db9648210ad466fe9"],["/archives/2022/11/index.html","b569068944213ecb00b985bfc3cee612"],["/archives/2022/12/index.html","8992ecddbf5d706c0dd6ece8e16dbbec"],["/archives/2022/index.html","6e00c0416e50a166716aa03f62c07dce"],["/archives/2022/page/2/index.html","4fda3800dce69ab1dfc2dcacf5b2932e"],["/archives/2022/page/3/index.html","f57bca92387d42141f2271ac66c92c9f"],["/archives/2022/page/4/index.html","6e07f36368694299844dab040deff105"],["/archives/2023/01/index.html","d18a164fde9f7e99f29f2e67f079bdd5"],["/archives/2023/02/index.html","f2e86889715275a3eb0537092323cac9"],["/archives/2023/03/index.html","c64156ca3d3db9e09d97d2133caa33f3"],["/archives/2023/04/index.html","cd99b22ccd69450eba4fbf408d4cb847"],["/archives/2023/05/index.html","fbcda11f69d35edb9defc260a8339052"],["/archives/2023/06/index.html","a663ec222a7205b7fc9490267ef15ff5"],["/archives/2023/07/index.html","508679a022f331531b304700ed97c603"],["/archives/2023/08/index.html","adb1abc93dcf0122eec204a11271872e"],["/archives/2023/09/index.html","d1a74d178760ca2c64d0e2aa3d476111"],["/archives/2023/10/index.html","d02cfac884702eb54b65dfd8c828b434"],["/archives/2023/11/index.html","92018f981a7249e61500d26397b71dba"],["/archives/2023/12/index.html","0f52f81bc63f517d87f1f4076ca8ff18"],["/archives/2023/index.html","f8aa7b0da82415f6e19ddcf1a68942af"],["/archives/2023/page/2/index.html","495950217c66c3a8435b5fd313ec4c3c"],["/archives/2023/page/3/index.html","ecf16077331c0adb2afb232d197dd6d1"],["/archives/index.html","9a50d2d2a14bc80081933275a92001c7"],["/archives/page/2/index.html","898298f54739f06a3c974c2d4fdfa6de"],["/archives/page/3/index.html","d34e1f71e73502f523b40fd824eb8199"],["/archives/page/4/index.html","ee78926db434a2cf17e849063ef5034f"],["/archives/page/5/index.html","3a004c5bbf6edd3265742796c3ae2466"],["/archives/page/6/index.html","301b1070fee819070681153b5524657a"],["/archives/page/7/index.html","73f3071e046a019a0b84e94df31d5bbb"],["/bangumis/index.html","140729a53ab7c05892681808ea91deaf"],["/categories/index.html","1145287234a928aad7281ed881f7d248"],["/categories/个人总结/index.html","4248b1b0dd76ddfa0b817454773aa0c8"],["/categories/学习/index.html","52a68b0697162258670b0a013b7cea6f"],["/categories/学习/page/2/index.html","b4e0a92e6bb494d04613d42c8eea191c"],["/categories/学习/page/3/index.html","d2d453f81f2cebe5abc92ec2db93c037"],["/categories/学习/page/4/index.html","c4c0e900abeacca8eea84ab88ec411c2"],["/categories/算法/index.html","bac09bd524343dde61d5e08c447a070e"],["/categories/算法/page/2/index.html","03d144d0301924ded66173722f6dd183"],["/categories/面试题/index.html","1af8e71b3c611c64deb718798fcfbcac"],["/categories/项目/index.html","00b7723a70e05f098ac0858355a6ed84"],["/categories/项目/page/2/index.html","f7f389dec232240cf0b5f658ef8e01d8"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","f8f01c4daaf0712ca6e8666748241688"],["/friends/index.html","33d419fd79ad7bf118a7419c5b6c9d25"],["/gallery/index.html","077504de3a8569ad0184add82068b742"],["/index.html","75f81ae415eaa3af7131d62f585597e1"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","fc649d0d82efe41ec79ff5e43e1f7a05"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","eabd623d4baba5ff992b851b779f7f6d"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","e951ad9bb5db77d90e22727e10de9e45"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","672b8ec6da01631c7c6c942c45ed3704"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","fe2d42625916fb34cf78f5fccbccfe03"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","0fb593ba2bec48fe75b3516e5eb5b8d0"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","fcdf477266178cc0fa14340e2b533dfa"],["/page/3/index.html","4688ee41af7a499d76f8331559a0a06e"],["/page/4/index.html","5ff66e12ff824f45853c507f67a15ee0"],["/page/5/index.html","41f20cf16e1fd29b6ee0a3689118fbed"],["/page/6/index.html","fc3d5f60a9afda0b89b77ed737b40f27"],["/page/7/index.html","efb8c57b6d072e40ab774d390abe8c45"],["/shuoshuo/index.html","08cf979a83bb2a4569616d76c2bf0e1a"],["/sw-register.js","e07cadb99d660ea76ee987e0ae10cde3"],["/tags/JVM/index.html","5b30a241de202e10db528e06801a26e9"],["/tags/Ps/index.html","c1f58e42b0f5c4d6dc8296924e05052e"],["/tags/dp/index.html","ee8a6d9032ab13effe85e3a15ee3b93a"],["/tags/index.html","e0ae67ff9201d4c79315cfff3695103c"],["/tags/java/index.html","6e3653320c99e06606a8f628a38a8b74"],["/tags/java基础/index.html","0ca5b6991dc7c46e59341b0bea14e7d7"],["/tags/中间件/index.html","58e6bb36ea2de86c61da7c58d7cd7cd6"],["/tags/二分查找/index.html","bbe6c2d0709fce7f4a62d855a0fcb00a"],["/tags/假期学习/index.html","affb625c728b5ee7a09e9d2a4ef8a9d4"],["/tags/分治法/index.html","22b3457e796bc57925ae50a0f8e071a3"],["/tags/前端/index.html","0c15623df9e31a0af66fdfc697659c1a"],["/tags/前缀和/index.html","c048f994388c803e856b23cb1259d73f"],["/tags/回溯法/index.html","65a797dd005943f34517e1b6869ed8b7"],["/tags/学习/index.html","8d1adce2a4061d6a6a1c83a31acb0a18"],["/tags/并发/index.html","e45c1907806f8c0f2697bb0be0e02684"],["/tags/数据库/index.html","9f83c658ccd04f2ed036d3e7e8622041"],["/tags/日常/index.html","0f1e8cda703bdef5b0a73557a67792fc"],["/tags/树/index.html","36efcb24c6e2afb82321decaf97a753d"],["/tags/框架/index.html","9fb915ed121dd28e4c475dd74093b1ff"],["/tags/比赛补题/index.html","0bf25be244a5ad8be284f8e9f2dab3ec"],["/tags/源码/index.html","c6be687f9c8dabd013201eacd9e38847"],["/tags/滑动窗口/index.html","b6a89eb8a51e91a1de150ae3f7d3e6db"],["/tags/算法/index.html","2753dfdfaaf44ff2607419faa3abe9f0"],["/tags/设计模式/index.html","ce6a032140f6a790fb701b1b588bc8ec"],["/tags/问题/index.html","55a5961642828eb671b532e8d97f4801"],["/tags/集合/index.html","02eebc157e53e7ad87ba32f6aee16ca9"],["/tags/项目/index.html","ecbefb8fdbe3afb41c38defe7fc7ce2b"]];
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
