/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","441ee440859b90d9889d16396f5a8dbb"],["/2021/12/05/zi-wo-zong-jie/index.html","699f946eef05467ae92b3532af38e457"],["/2021/12/12/zi-wo-zong-jie-san/index.html","82109e25b4cce1c975365058c95facac"],["/2021/12/18/zi-wo-zong-jie-si/index.html","e73e60ecc5a0cbd1d85c37e1ca4ecb21"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","7764213dad4467249ea7959998144206"],["/2022/01/23/han-jia-zong-jie/index.html","d733682d8115a3465c60eecadf8c48b2"],["/2022/02/13/han-jia-zong-jie-er/index.html","2f94b6b53a47a8976d05b62f10f0c03a"],["/2022/02/20/han-jia-zong-jie-san/index.html","e9d34c23691a96e9db12582e1ffaefb4"],["/2022/02/26/mei-zhou-zong-jie/index.html","3c794d3d37ec601a4daabee73c1d21ee"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","e90e10a3f1e8bc5f486e2dccea0bbe63"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","cb4cc4305a68c740f4b0f4eb1dcab82e"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","80ed26a5ecabec5a10d59e5e88ea9cdc"],["/2022/03/26/springmvc/index.html","f1c58ee48843b4e9c8553df34279d0de"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","f0397343ea6ef9bebd063f2a8ad147e2"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","f6032b9a468a017d73f28d9e3177eda0"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","12d0894962c229ee904f1133c4a0b193"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","a4cc51c28c5508f1c0549ceab3f4ac34"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","544f2776196f7f23def5fb1301cff13b"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","aa6da2a92c05696615cdb8f6d6643599"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","2a346506b8c20066848c7664b335ced6"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","a58704ecf62c330daf406e195154bd9e"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","eb52a94e039750664680f432e7be684a"],["/2022/06/25/redis-chi-jiu-hua/index.html","1a37cc6eb1d80def40f2ea90fc75604b"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","c8306f342ac3e913f92002964fe3f129"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","f0573f8064c2f2520cbfdb7a003d4083"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","fdf58cb5fb9c7225c49a435ea806dd85"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","305f8b1b81311ee5291255e57e5ba88b"],["/2022/09/15/mysql-yin-qing/index.html","8012045a4d28192712b5836026438934"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","e16ef43056fba6f668b5f6c3714b831f"],["/2022/10/13/arraylist/index.html","92e4943e7196ca79a73e3d03681f3170"],["/2022/10/16/linklist/index.html","2b2d916df1650fded9a05a2c345d77f2"],["/2022/10/18/vector/index.html","06554a5a98e454064e636ea5a3c359df"],["/2022/10/30/mysql-suo-yin/index.html","c0c34d90e09eed4df6f2f14e94e1097c"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","4351203e44f18149db5655265d76afe3"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","d804196ba2fa91a5e50be9c25d523579"],["/2022/11/20/pc-ji-cun-qi/index.html","321720d4524ecdb9d60393f56fd9ab46"],["/2022/11/27/ji-he-mian-shi-ti/index.html","53d07da9f9913d2e427821f9cc845959"],["/2022/12/04/ben-zhou-xiao-jie/index.html","edb344df250a72bfa99c9cfdc6634bd8"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","347e23d14caae2f0bc8a779cd6379ef8"],["/2023/01/15/bei-bao-wen-ti/index.html","814fc2a760b95a51c219b2c0715e7afc"],["/2023/02/05/easyexcel/index.html","3c5206ede94e76bd9987781bdc6eb5c7"],["/2023/02/19/jvm-mian-shi-ti/index.html","fce66c3e9d857ede7b8dc354dccfc2da"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","3ad5c8137e65dcdecc9694c6a8585751"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","6dc78932b4d08f81fac956968c3ba6e7"],["/2023/03/11/yang-hui-san-jiao/index.html","b5e7c8819a59958ad138e041cba5f68a"],["/2023/03/19/he-wei-k/index.html","ea3a32b8887ac011560a4b485280690a"],["/2023/03/26/juc/index.html","aaa89593ea7be937b53c41ab39810f15"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","309697d2d7bf94694f97e06def024fff"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","67fa0044061108ccada4acfb2b919d54"],["/2023/04/20/mysql-gao-ji-yi/index.html","33c6e891a08793bd4ffe45d90fc40037"],["/2023/05/01/mysql-gao-ji-er/index.html","80d0ce545abb04ff4bbd39b1d25a901c"],["/2023/05/11/mysql-suo/index.html","28c80156a211fc76972ad923481ca10a"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","8c0a51ee8e6b8a136edbe7ac8aa8f24b"],["/2023/05/23/mysql-ri-zhi/index.html","61ad246706c72b047a043f06199f9270"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","9a33834f5c6e21a5aac75c67997a3368"],["/2023/07/15/xml-jie-xi/index.html","5d9fe0664a27f0000d95cd4d05085afd"],["/2023/08/21/mvc-zu-jian/index.html","a9c7758e3a38a4814d69eb2b43d10ecd"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","e6a6c1a94ed3a267fb17781ba0144927"],["/2023/10/10/dan-li-mo-shi/index.html","a2fdfc8f126f2fffab1e817c319c01dc"],["/2023/11/23/hua-dong-chuang-kou/index.html","c6e24692cf6aa03027a93a924c179fd6"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","76944cf0716da15d1f6ff6460d238e25"],["/2024/01/13/niu-ke-div2/index.html","9eb52ba648bed5098ae3248ff60cdf90"],["/2024/02/10/kafka-jian-jie/index.html","5774ae10d939301a90d3dc6cfd41b97e"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","aaf29ea62366bb60978136c6e0617d79"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","e63409142c6f86dbffcb024701d4b886"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","6448588b8721555e75bb80a88996965d"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","92de85b52f68ae87177e30a4428d86fe"],["/2025/07/20/clean-code-notes/index.html","987c8780829335883ec61738d9893fef"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","785c93933ef9979e1f399e8926e753da"],["/2025/09/05/rocketmq-rebalance/index.html","440a9a01ae26697a91d5e0136773bc1f"],["/2025/10/20/redis-bigkey/index.html","41da44d9245a1e7d5d4d3591ea9824b7"],["/2025/11/15/online-oom-jprofiler/index.html","78cb574bcb6955c47abd42758f874a37"],["/2025/12/05/grove-high-output-management-1/index.html","c566fed8bd23dda35e2e40c749e6c035"],["/2025/12/20/huawei-management-strategy/index.html","b33f70a6e1a5afa5e8be26743af6e614"],["/2026/01/05/grove-high-output-management-2/index.html","1b91523db5d8ff93baffa0843ea43a17"],["/2026/01/15/rocketmq-internals/index.html","4e4ff8ac8a40e8f870bde6aa3acc7778"],["/2026/01/25/huawei-management-cadre/index.html","463ab6897e4398be42c3f75c5d6a7ccb"],["/2026/02/08/grove-high-output-management-3/index.html","0a6581446f71b36414b9828b399ab5ad"],["/2026/02/16/es-segment-commitpoint-translog/index.html","1252a2a15391486deeb129bc350310f5"],["/2026/02/25/huawei-performance-incentive/index.html","9bc5a9ce0cf6723cad2e653e905fa8dc"],["/2026/03/05/es-near-realtime-search-crud/index.html","66417602283a468f410c3282348d67bc"],["/2026/03/12/grove-high-output-management-4/index.html","a7ee9b1b6864c4f280a2f7065f0c5b09"],["/2026/03/25/comprehensive-budget-management/index.html","a30794a2558b1c7d92ae4da99a262a25"],["/2026/04/15/grove-high-output-management-5/index.html","aaa18a6593ea36fcbd200175251a5f06"],["/2026/04/28/ipd-integrated-product-development/index.html","44588fede8e2e56009e64546ed9541c6"],["/2026/05/05/grove-high-output-management-6/index.html","fc8199d629dc31e56e8d467e0825b5e7"],["/2026/06/08/es-pit-point-in-time/index.html","fe17eff9784af2dbd3c82e982976fd85"],["/2026/06/22/es-relevance-scoring/index.html","cf2289c61fdb7490b135aaf30ec44969"],["/404.html","868571524338a9c9c7f55c92d3a9cf59"],["/about/index.html","3cdd2757cb83dc9e0c61eba3d726642d"],["/archives/2021/11/index.html","ef6fb3754bf89bb9416ff8a52998df1e"],["/archives/2021/12/index.html","ff8e5eaae9c2ae5e3a189b77e3d22c8c"],["/archives/2021/index.html","5a59479bd28c3fded8bacf0e8eaee952"],["/archives/2022/01/index.html","cb49868fcd30cd908720fa2afdadec08"],["/archives/2022/02/index.html","b3bb91703e2f1157304308a86f8bb27c"],["/archives/2022/03/index.html","c407e7bc35a17eb06ca217712babb668"],["/archives/2022/04/index.html","358845b2336ce1ef6b330b6887be5ba0"],["/archives/2022/05/index.html","63fcbdd608aad2c03b448786c1cb7e03"],["/archives/2022/06/index.html","b654623235d6b08db087fe2a09e87a6d"],["/archives/2022/07/index.html","0bcd899a84d181717d241f34fccfacaf"],["/archives/2022/08/index.html","04039e9fe8748586c3ceee31ca6ae7da"],["/archives/2022/09/index.html","b49a36675b1e4b18db6a916eb3c61dd4"],["/archives/2022/10/index.html","39bb2358a7038e5ab6c2ef0185d7b7e0"],["/archives/2022/11/index.html","2941b99671b1b5388ddebd3e23641238"],["/archives/2022/12/index.html","4922bd3fd6572dbbe15375d8ee28cd00"],["/archives/2022/index.html","25c555d9d1bf94b75c919c320fd0d018"],["/archives/2022/page/2/index.html","d3cd23aefdbcde5f8ad5dafdeaf1ea9f"],["/archives/2022/page/3/index.html","79d6ba32689e41b3e3072b854c4dd1ee"],["/archives/2022/page/4/index.html","d67d013df3e1068e08e66646e27cf462"],["/archives/2023/01/index.html","a19878ba3e84d2fa1970c956e5d48f38"],["/archives/2023/02/index.html","cb04ab258258e1601153501c4465ece8"],["/archives/2023/03/index.html","c37f09ac42c6fddf9cb6d62c4576f027"],["/archives/2023/04/index.html","e28669d6c8d162a85ce410798f7d16c1"],["/archives/2023/05/index.html","9633b204a79d1e5a245671e2d6a03c96"],["/archives/2023/06/index.html","da9f993f78530ee10a6b0392bb02d047"],["/archives/2023/07/index.html","7e91261696ba83145a18f25982951029"],["/archives/2023/08/index.html","95e1cc990cf4f391782d1b70469ad38a"],["/archives/2023/09/index.html","42c358d961508bf6bf6e4aac86740ffe"],["/archives/2023/10/index.html","3c9876ca48f9deb3fd91e1d7872298e2"],["/archives/2023/11/index.html","092351fef9fb5c9719f3c7206fbf0209"],["/archives/2023/12/index.html","6a691f42e1ebcc26467078edaa7f047d"],["/archives/2023/index.html","c4473ceac9dd8980eda98eb59b79fd1c"],["/archives/2023/page/2/index.html","4d40a8ccc3e7a3d82fed232177d6e48a"],["/archives/2023/page/3/index.html","a186ce69546f03ec4355c2fb46751b4d"],["/archives/2024/01/index.html","72dda81bfb5e7668605e04719604833b"],["/archives/2024/02/index.html","005aa20b310938b2bb53797114d17eac"],["/archives/2024/03/index.html","3c7d97e4ba309efbee2e3f00e4fc9e5d"],["/archives/2024/index.html","51cd7cdb03652b78f6c8ddbad487f04b"],["/archives/2025/06/index.html","c577020d7294d8aab4d4f746f3d8c35e"],["/archives/2025/07/index.html","66d0d3dabd89559fe9ee03ef73a88913"],["/archives/2025/08/index.html","bbf43d137e07eb129d4bad3dffda5809"],["/archives/2025/09/index.html","d854ced263da2b13a0d5b1d945199ebc"],["/archives/2025/10/index.html","1c9f10c7862f17e35e163345e72e55a6"],["/archives/2025/11/index.html","7e3be57f1b704cd34e01bceec106a24e"],["/archives/2025/12/index.html","2a44522cea19ab96b7e2ce24456ba823"],["/archives/2025/index.html","84fc4758d5bf7ef572137c0c6ac8f630"],["/archives/2026/01/index.html","bc9e3ef697453835bc3caeba21e8cc20"],["/archives/2026/02/index.html","46ee71b9323c84dededd929a0b2595c3"],["/archives/2026/03/index.html","1c741298a3d2e03b6586caa2730d464d"],["/archives/2026/04/index.html","2a6f6e56b3901b284449fcd4c754eae6"],["/archives/2026/05/index.html","426d9601f93277bd82f48b170413e862"],["/archives/2026/06/index.html","29e1fa92515510fe5c47f2a558763c4d"],["/archives/2026/index.html","d11c83fa939b10962ab8db42ff14eac9"],["/archives/2026/page/2/index.html","1c808afc0aad956820cbceffcd9d301b"],["/archives/index.html","65ed3fb2f4fbacd2f3bd5ac19b6ed428"],["/archives/page/2/index.html","658129939b1bdeb2c45aae35a2cee9e2"],["/archives/page/3/index.html","5e433161f02611193d60a7381d0d29fc"],["/archives/page/4/index.html","af9c45bfc8309489e15241726e2b1417"],["/archives/page/5/index.html","6f6e90c818cde71ccf35d5ed8ce0e53b"],["/archives/page/6/index.html","4f922bb51844b54b6ef00548b186246a"],["/archives/page/7/index.html","cf8e27114950b4aa4536bf7bf05534cb"],["/archives/page/8/index.html","bd99a2f368aeb8cf681ff340e1226084"],["/archives/page/9/index.html","cbff5a265e871b258758fd72ca9afecd"],["/bangumis/index.html","0eecf7eff170567eafa3ddb9ffc5ef13"],["/categories/Java/index.html","5b20b9d1a29f8573d0c4cd3b8058a108"],["/categories/Java/page/2/index.html","e107ba3e35074a3323a5e0073a193610"],["/categories/index.html","f9b3efd91d8e7ae79d46d9b3ae731239"],["/categories/中间件/index.html","fbbf10e069dd287e65a01ef7f9213a10"],["/categories/数据库/index.html","ed758cad0e03c161b37cb71eb4c92d75"],["/categories/框架/index.html","565cebf313f9d5e5f73227b4ce0f779f"],["/categories/算法/index.html","a75e3987d8782cccda6e77a92f7c2866"],["/categories/算法/page/2/index.html","2bb3a4704b9dc2fda0797cd9dacf8820"],["/categories/管理/index.html","04f98e66750d63cdd6319a047467fbbe"],["/categories/设计模式/index.html","73c9724a9fd433d5d753bbc3d7fa1166"],["/categories/读书笔记/index.html","652533594a41d0789d486d2bba417568"],["/categories/问题排查/index.html","a5bf79783b871aa8e8ead8e1a6cc4d8b"],["/categories/随笔/index.html","642db96028bc6520fbae8c358356dbbc"],["/categories/随笔/page/2/index.html","a9c9da13d50c8f5150bfdd2678de4157"],["/categories/项目实战/index.html","fd2b178310e1c369e456708c272e086a"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","9a99c4ba9ca5f13d14a94ccf2a43963d"],["/gallery/index.html","cf2bbc6de550e24fa00fda0b03db10e2"],["/index.html","19f0da3b4f71f025e83ec48a3f10c48b"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","4037645bef69d3a6c01a227f6ea1fa3f"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","9af427ddd4756047736de8c6fcd08b38"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","791ecd4cca68474bf92d5f62b6c32b08"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","3a35d7439e7106d9e3386df190d27411"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","9ac4a192f46531d0fa3318aaec308e1e"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","0eafc5a68329ba03e93721a729e1b709"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","fd164c03fb50666b25d7eadf050d25c7"],["/page/3/index.html","5f5975592aa70b62835d68d7aa6316f6"],["/page/4/index.html","ccf65012dd3c12e970aae73cb1578459"],["/page/5/index.html","7e49ab3526ff07b8ade1576b98edda7f"],["/page/6/index.html","918474fe9b0ed0f504def3a44fe6a6c1"],["/page/7/index.html","37bb78af9cfd4f590868d6880c4908d3"],["/page/8/index.html","eece0ee51eaf0f4b7274be20c81ee10c"],["/page/9/index.html","fb66242a3be38b42b77fca32bbcb2f3a"],["/shuoshuo/index.html","8f2bdf4cc6233189c9ef93002f92e85e"],["/sw-register.js","1d87e8475b5caf1757ddb303cbf44f60"],["/tags/EasyExcel/index.html","2f7df061c27c8a145c56a0744b037de8"],["/tags/Elasticsearch/index.html","a726c02731cd5493f3e129f8d32f5e17"],["/tags/IPD/index.html","77afcdc147fd24e78b6d7328239759d2"],["/tags/JSP/index.html","9056f512082a24b9c306cfe29f46e732"],["/tags/JUC/index.html","6c0792e03ba801193cad6cbf3ac37ab4"],["/tags/JVM/index.html","a89871db8d629311384ae67b7c996336"],["/tags/Java/index.html","a18a20a66838b597ef66f732632db1b1"],["/tags/JavaWeb/index.html","700b051ec2451d63a4bfa93cbd8827db"],["/tags/Java基础/index.html","3ca48abdae45bb47447031f9da67cc5a"],["/tags/Kafka/index.html","fa6c9cd99c2fa8aea8fb52496bfddcf7"],["/tags/MyBatis/index.html","0a9f06bf74d77765916c999b96fb340a"],["/tags/MySQL/index.html","74f6372f52b83db0e85d62182e6d7a8c"],["/tags/ORM/index.html","1f3f13c19cfef6c1d8eb912d1164f03f"],["/tags/PS/index.html","1611c641eadc3dacd22905e08a198370"],["/tags/Redis/index.html","30864ddc4316291241289b3fc3a71f6b"],["/tags/RocketMQ/index.html","bd39c39168f1fb652f7d98aa91a8f5cc"],["/tags/Spring/index.html","a1e9e40a4a817b981b8d1eb5091745f6"],["/tags/SpringBoot/index.html","3fe9bc0197163216f42b077a364be58b"],["/tags/XML/index.html","83f8244a4f3fb967ade21147dd66ea16"],["/tags/index.html","6a0a23ad907f8bc073f3f22a3939eb03"],["/tags/二叉树/index.html","987f1237a896d1d2d63c1eb39695ac5c"],["/tags/产品研发/index.html","67b82f6e277091e56835222db852f129"],["/tags/人才管理/index.html","2748d4cee824d38046c2b3cf05107544"],["/tags/分布式系统/index.html","17e2c64c50a2d6e5c973c733faa21b4e"],["/tags/分治法/index.html","42aa0a337aaf2a33b291993f13254126"],["/tags/前缀和/index.html","a3eb6d06523a3c2c1b9d70ee96b0c59f"],["/tags/动态规划/index.html","cf060d9fe6be25d6b5e249d9f9982dfd"],["/tags/华为/index.html","ce672bf134f88119aba69096ebeadb7c"],["/tags/回溯法/index.html","66f0c477f7d3edf07e542a37e7a2bf52"],["/tags/字符串/index.html","a6047f418139021f222c27cf6f77ac48"],["/tags/工具库/index.html","de172b081227856430a34c3692bc68c5"],["/tags/并发/index.html","73b217562a5d1035149398cd98adb486"],["/tags/性能优化/index.html","e70888152df609c8ec6f088b1e5dae33"],["/tags/成长记录/index.html","a9b9864f41c038958d74140b2b02b70a"],["/tags/成长记录/page/2/index.html","0ed11077667e560397a0de11b7860982"],["/tags/战略/index.html","5af565be6e0a5e5b4278d6867863e0f4"],["/tags/搜索引擎/index.html","da30ed3213ca3b60fbfbf04ce712fa86"],["/tags/框架/index.html","faaf2f5bdf96acc7818146e3a3762772"],["/tags/比赛补题/index.html","6d5b0df221188da4837f56de3aa0849a"],["/tags/消息队列/index.html","f6b078d3f8544e13465135852f7d65f2"],["/tags/源码/index.html","6ac37400749a7d10b74b6677a9a46de5"],["/tags/滑动窗口/index.html","e5c6abc9ec6854ac9cd283a976fcecc9"],["/tags/算法/index.html","74f38ce0df9b15c346e2b8169c7521b8"],["/tags/算法/page/2/index.html","e8541bb24a4431ec89ea0eda7322594e"],["/tags/管理/index.html","270bb287ace71e1e0d94055d86c36e8d"],["/tags/管理/page/2/index.html","b7fc9b79c5f206056bdc3d094d0b20bf"],["/tags/绩效管理/index.html","7d235ec199cbb6b70ce3eef580a37801"],["/tags/规范/index.html","fb42c04cd2fed54dd3158f2adfd3eb8b"],["/tags/设计模式/index.html","422b340639b0a0858cc5bec0b5cfd485"],["/tags/读书笔记/index.html","117fba336a4ccf6ae20598c2c3a48254"],["/tags/财经/index.html","1848941ebc5251a07cc87f111a569f76"],["/tags/软件工程/index.html","b221b2d2046243f7ccb708ddb73468d9"],["/tags/问题排查/index.html","a7498d8b57c490999d7c3f13a973239d"],["/tags/集合/index.html","44046983b0638f9ef8dac3da5ff30c9a"],["/tags/面试/index.html","520a78c244556fb5b6a38d9fd36215b9"],["/tags/项目/index.html","dcf96c7ea71819043986dfa6acff6a51"],["/tags/预算管理/index.html","36161808ce63d1c9ebcebf18ced07514"],["/tags/高并发/index.html","f3be721479eb4a043ebf93522f5e547b"]];
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
