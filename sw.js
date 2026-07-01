/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","73c38873fd78b3e2f2bc0008c4c9624d"],["/2021/12/05/zi-wo-zong-jie/index.html","2ddb8f31cdf0869f6f21c208264c08a8"],["/2021/12/12/zi-wo-zong-jie-san/index.html","127ba195175b0b90a23d5adb04b85e87"],["/2021/12/18/zi-wo-zong-jie-si/index.html","0b37e4ee09d2e5fcabca99be7d737983"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","12e3c4793c0d86203834b0b1c4434704"],["/2022/01/23/han-jia-zong-jie/index.html","85be10678e4acef2f1cea4e19a9596f4"],["/2022/02/13/han-jia-zong-jie-er/index.html","b52d31fea73d5912de8a5b4f14d58488"],["/2022/02/20/han-jia-zong-jie-san/index.html","affb63cbdc7af2eff32562ba568d59df"],["/2022/02/26/mei-zhou-zong-jie/index.html","693aff1a537916d42f6f59b1877f38f1"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","cc3bea93b8bf814006ee500094153544"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","1b431b8bbad2536c4545516292a22c14"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","a69231896aefaaed12cc40f38302a0b0"],["/2022/03/26/springmvc/index.html","58ec4f862a321e1549042a9db78fd48e"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","efc7fe540a15e0028a7a968a1bb2a0ed"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","7cbde22d02fb1f0095e2b1f5cecd3ee7"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","9a52edb737350c1d8dac344d64be9d7f"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","492ae474a6821a96002ed46ac624c268"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","91529f4c34131e09f8ac353d820f0104"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","3be7c9a9a338b1b1f8af0256052cc193"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","60fd9f6a6335fba1c16e1b52703c06f9"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","7319042ea96a892770f4377f61517bb9"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","264785ea01630c65e36e2e69b33c5304"],["/2022/06/25/redis-chi-jiu-hua/index.html","a7bff6e4dac37daffda1ffb3902a810d"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","538fa5569c5e3f3f834b7b95478ea67f"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","edd2827599d464d7e62a38ea9dde2ccb"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","529e051d7478b41fdb7a2cc93322c5b5"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","cb7428e930294608b70e0ac737cc794b"],["/2022/09/15/mysql-yin-qing/index.html","2c0e3116876e0ee346b3f359a1bc0a4a"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","75671869cf6962530548e4e2b038ac3f"],["/2022/10/13/arraylist/index.html","1e254399a05687b093fa99bd119978db"],["/2022/10/16/linklist/index.html","7c4452111e0f5f53170f39b2f399f4f2"],["/2022/10/18/vector/index.html","3072046ed1b7cbacd2e69509e8497527"],["/2022/10/30/mysql-suo-yin/index.html","8474b2022895a2ca49c811f95c0a366e"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","17d5743048f2095dde7891e2c055de41"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","86e392409b8963a34b59da17593e649c"],["/2022/11/20/pc-ji-cun-qi/index.html","61392640281f22876b9a0a61ac1b1d69"],["/2022/11/27/ji-he-mian-shi-ti/index.html","a9ae163c217bae89013d7826cede9a43"],["/2022/12/04/ben-zhou-xiao-jie/index.html","a78839eeaba330323c840dcb7f41f693"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","023d4b032cd56e2ab69b2e395e90216c"],["/2023/01/15/bei-bao-wen-ti/index.html","6eec61aed9a3c60259708710dd0ef99d"],["/2023/02/05/easyexcel/index.html","e9e05fad78fe3acffb218f4404e914e3"],["/2023/02/19/jvm-mian-shi-ti/index.html","2455b442b4b63fb2cb021b30106a1091"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","5e4498d9a6a3d70954d7ad399e530fd0"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","3bef31a80927aa7e7726d7e39952ea20"],["/2023/03/11/yang-hui-san-jiao/index.html","fa117b70a33e101454759db26e1a1024"],["/2023/03/19/he-wei-k/index.html","ee278d35ef348ddbc7c690071ed8e526"],["/2023/03/26/juc/index.html","c69de3c163774f37dfea84a95a518576"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","3548569f33b369dcc6aa294107072f64"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","b57c7184f7de04331b11ac1ff661e8c4"],["/2023/04/20/mysql-gao-ji-yi/index.html","ffcefa6d15b04f721d4df320ab16bca2"],["/2023/05/01/mysql-gao-ji-er/index.html","af9d75e8dfc1937bc4cdf19c7e22b630"],["/2023/05/11/mysql-suo/index.html","b4fb8d6af4d8c1c669ce514115ece412"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","54a7368d1db0d6004ae05b85d5c1e9b6"],["/2023/05/23/mysql-ri-zhi/index.html","9655c1548438b59b592e33b8d929b9a9"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","bfe89d8677150966c77a9d8764903174"],["/2023/07/15/xml-jie-xi/index.html","5bad2424f52b0e58916376330bc2de18"],["/2023/08/21/mvc-zu-jian/index.html","44a8a99e5704d6439e7ae458ed5b91b2"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","7fc78672328aedc8c8c4fcde92a7597d"],["/2023/10/10/dan-li-mo-shi/index.html","0d2f488a1e020a30ab44f7378ff101d0"],["/2023/11/23/hua-dong-chuang-kou/index.html","ab965b2b5b59350d87706538af190488"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","1011b6d8be1605ac885ba9b12abbf522"],["/2024/01/13/niu-ke-div2/index.html","53d22d32536bb140ef46a88ec51b7f9b"],["/2024/02/10/kafka-jian-jie/index.html","fe1343b66cf2354896e8ea22abdf4912"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","a6859a004b9e1e636e33adc72168c969"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","83bccbb2a4de25a02d3334b09884debd"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","8ed6835bdd724b352301b5d59fc6b113"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","2f52f255644d030945b0b6648bc3e825"],["/2025/07/20/clean-code-notes/index.html","d84161ab76b7661f3b2ffa64e51fe170"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","5d78de38d1b8cc70f4827f085c237999"],["/2025/09/05/rocketmq-rebalance/index.html","be1565bfedfbc572775b773337b23b59"],["/2025/10/20/redis-bigkey/index.html","2cb42c51936294d78e3db6f7294e4156"],["/2025/11/15/online-oom-jprofiler/index.html","94f249ee8fb192ccb57a3da52f2db000"],["/2025/12/05/grove-high-output-management-1/index.html","ce45bfb7ea137112c299d7815b349baa"],["/2025/12/20/huawei-management-strategy/index.html","1eca23de4830a6df4390200ba1978912"],["/2026/01/05/grove-high-output-management-2/index.html","1a5ae35183828b03a433cb5a45df04df"],["/2026/01/15/rocketmq-internals/index.html","ea7cf1957199ab051cb5a761620dea42"],["/2026/01/25/huawei-management-cadre/index.html","bf780a1469db0a9186c048f9c8c625c9"],["/2026/02/08/grove-high-output-management-3/index.html","e7701bf06291179459921710072cb1c5"],["/2026/02/16/es-segment-commitpoint-translog/index.html","3600f13b0fad75a1a0f43230322b47f4"],["/2026/02/25/huawei-performance-incentive/index.html","a12af3ce079d384c0e152ff1301b39c0"],["/2026/03/05/es-near-realtime-search-crud/index.html","cd49ab6284c1b465a7fd99bf6273f32a"],["/2026/03/12/grove-high-output-management-4/index.html","796b9f904fab40d78ba64a120ecb9ce0"],["/2026/03/25/comprehensive-budget-management/index.html","a81a7f15b6593add4b6e785f4cb80be5"],["/2026/04/15/grove-high-output-management-5/index.html","9a46c6819616adc4f793af13ef79b802"],["/2026/04/28/ipd-integrated-product-development/index.html","e6d95c7f3de347e121b6e7050b731972"],["/2026/05/05/grove-high-output-management-6/index.html","050e5a17e54914a4c18a83163857a4f6"],["/2026/06/08/es-pit-point-in-time/index.html","9eed50b6bdbff17b5e9891f533417422"],["/2026/06/22/es-relevance-scoring/index.html","a37de1fd1ebe84ab0e1302ed74e0bd1c"],["/404.html","0e90737cfd8a36898b029a08d14ae992"],["/about/index.html","eb58e53339fa9a7daa651903ceb9af21"],["/archives/2021/11/index.html","c6a39a8225057ca624cefdb2099e3888"],["/archives/2021/12/index.html","159812cbd35f40728a8080cded1259fc"],["/archives/2021/index.html","21f5dd90b85dcb725a6af80b136e4450"],["/archives/2022/01/index.html","4a9cd206b8b3622c5365f4ba8a28464a"],["/archives/2022/02/index.html","feeecb981ee1068eda0693e232758bb8"],["/archives/2022/03/index.html","635715df0523237054eb81fda48092e9"],["/archives/2022/04/index.html","00ce3c9b683a814e1635c81c73e641d1"],["/archives/2022/05/index.html","e4b263ae261b16a0c4453ad63b054e0e"],["/archives/2022/06/index.html","6b57cfb35e09fa36715aa3280619c5aa"],["/archives/2022/07/index.html","683939828eb8f45abac97168ba96f1f2"],["/archives/2022/08/index.html","4611fae39627d7f272a493a50999e415"],["/archives/2022/09/index.html","fe3ed72398433103924d2e2247bdc90b"],["/archives/2022/10/index.html","97b2267725f1f9c3ed96d265b5b78fc4"],["/archives/2022/11/index.html","2147cc123ff1fb6148d9060847915840"],["/archives/2022/12/index.html","cf6a2319ff8f491bb0fa10f24a338aa1"],["/archives/2022/index.html","3e4f28aef1ff8ed0a7936a82df057632"],["/archives/2022/page/2/index.html","41c61e799db885e50104d4cbc5bdd2f0"],["/archives/2022/page/3/index.html","6c60dae7ccc712efb29660ae66d04991"],["/archives/2022/page/4/index.html","00c9d684c81a943d161804777a13895d"],["/archives/2023/01/index.html","446838b22160ad662ce6ab2f4d8fe003"],["/archives/2023/02/index.html","f8595b4fb5dded0c016ff641f3b23b26"],["/archives/2023/03/index.html","d000db0ffe891779e4b8ab1d5c1fcda5"],["/archives/2023/04/index.html","dbdfd49ee9b86ad9336990fa1a3b83b7"],["/archives/2023/05/index.html","6dcd94e94c89f1b944267c8f7244358f"],["/archives/2023/06/index.html","766f46ea7223802be165a87e2a90d17d"],["/archives/2023/07/index.html","f2c9ec5473650cfb6d6820d96ec0c6f0"],["/archives/2023/08/index.html","8c56af0be24b1f4dd1d4902935068bf7"],["/archives/2023/09/index.html","41c660ab771b05663fe9fde8ded6551c"],["/archives/2023/10/index.html","45c092b0111de6dc1d8ef88a1d8a433e"],["/archives/2023/11/index.html","becfe384d6c50bc83475a9e53fee9104"],["/archives/2023/12/index.html","9f563a1928c967d7c63558ffad7bc160"],["/archives/2023/index.html","b26440dd1d3407cc44d55f43910d52c6"],["/archives/2023/page/2/index.html","090323d66e0d061a5139723ace06a365"],["/archives/2023/page/3/index.html","08f5ec6ec149839d4746bd874ca005cb"],["/archives/2024/01/index.html","579e225997461df8a3926e226cca0dcf"],["/archives/2024/02/index.html","a651c383e60e1c7bb7a02c5126d9af3b"],["/archives/2024/03/index.html","0d8b8b386560f3c8be22473ee8c0f0e8"],["/archives/2024/index.html","8136d2d2cd24009236d35dd7bd25c3ba"],["/archives/2025/06/index.html","a0fba3ed8ff63a30d9c8ec69a88698a0"],["/archives/2025/07/index.html","5fb7f53297a253fd8431cbae27668098"],["/archives/2025/08/index.html","0c6ca905f7f354f3583dfb4b07d13503"],["/archives/2025/09/index.html","71ff7212dd916cce75fcee5da9149410"],["/archives/2025/10/index.html","ae4b0216bf3e73fc825864326e68f586"],["/archives/2025/11/index.html","81530413e6b97b8a758abe94e56a3afb"],["/archives/2025/12/index.html","f7b0b0f10dd95120baafc88e20181def"],["/archives/2025/index.html","5e256100766af93d69d39da6ae47cde3"],["/archives/2026/01/index.html","d185f0ae24696ceae98a5d36ded4ab1f"],["/archives/2026/02/index.html","ac993c7fe96065bf1a27ad2f88b809b1"],["/archives/2026/03/index.html","24ace783bf71a2e30d6e663b32e4ef75"],["/archives/2026/04/index.html","9fcc1d84fb94faed9cb786d23c4b1b56"],["/archives/2026/05/index.html","f318d041e0be4936525dc7f434d74cb2"],["/archives/2026/06/index.html","08ad33b46235f46e94bab828a928281c"],["/archives/2026/index.html","5e2edd5dd584d57ec74f0ed360e02194"],["/archives/2026/page/2/index.html","ea09af6b73d8d667b2af410e773e71ca"],["/archives/index.html","c7ce58e9acdcc5b18966e331c6ba67ad"],["/archives/page/2/index.html","2326d9aad6c5a484471a1a43144f1863"],["/archives/page/3/index.html","5637a23dc46a4f9c4a4e2e0577d1d79e"],["/archives/page/4/index.html","8eb459f42fe0ba09a50f20bfc543be95"],["/archives/page/5/index.html","57ae0b7d2222b330a5149692aa14e93d"],["/archives/page/6/index.html","f1faf7f85f1f5cc801e20e437ece0771"],["/archives/page/7/index.html","0799d087beb347d29a7640618dd27f78"],["/archives/page/8/index.html","3b8944f80f14df2d8a7602fff18a6006"],["/archives/page/9/index.html","3c50d3cc0b8f0524ef36a0ba6cedd02f"],["/bangumis/index.html","6539dab5e3908e21d4a2e1f67ecf7113"],["/categories/Java/index.html","6673d9afdd1dde0b697ede2615ae9067"],["/categories/Java/page/2/index.html","99750181389a9291636b42fa7e02a260"],["/categories/index.html","7485f3c572cb3850ca54fa9cf281d253"],["/categories/中间件/index.html","42f1a63f99acee2d6b16fad4edf39316"],["/categories/数据库/index.html","771a05a68b6c990a1ec79bef93abe9d9"],["/categories/框架/index.html","0f34a4bfcc18862bdbd3bccb805724ef"],["/categories/算法/index.html","65d35046d667a08023d3b1ed62fa56b9"],["/categories/算法/page/2/index.html","083c99857babd3c8c724768eeb224df8"],["/categories/管理/index.html","bc7ccfb2546806b3d42095e9effb1aac"],["/categories/设计模式/index.html","9774c38dffa8018f95ae90a5c6fb089c"],["/categories/读书笔记/index.html","05566f7a3a1035c3f2a6643df14c235c"],["/categories/问题排查/index.html","3b916ee3fbab54563aff5cadddd5218e"],["/categories/随笔/index.html","d016f5e51a2a4b683fe05793714b8237"],["/categories/随笔/page/2/index.html","8af3dea1d29638065fa0836e34db8b28"],["/categories/项目实战/index.html","6158c2cf16f706fbfcc06f56c5d02821"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","24da0d9b0a55cfc8450a05616fce68ac"],["/friends/index.html","3d0171ebfa2665038a0044a3a5873b95"],["/gallery/index.html","86dd2ea868e1d891416bae795391bc82"],["/index.html","d0ee74918047860ab413881123cb2252"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","d2ea8007c281f7bb2b33e38bf2b6f003"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","c499d5f03e2cbcbd3f7a92b8a2ebcc5e"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","4a5bec1f03be714dab58f2cb3682ca01"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","2dc3c97352d1afd77f8279e7bb64d224"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","2853f4fab13a58e1ab98baf2335849d5"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","f32d7e0e988f2278b6216c3040f05128"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","9ae510fbab8eb8dc2a34876d6f618c5c"],["/page/3/index.html","10abb790b8ef654360e6a68965555f6b"],["/page/4/index.html","bac98e55476643f171d25834f43b64e0"],["/page/5/index.html","08e0b403cf03ae380122eada83ea1ba7"],["/page/6/index.html","4afce1fd3b12930f51297c7e37d3e437"],["/page/7/index.html","99de561e854403f8b86ca342bf18d729"],["/page/8/index.html","2e5df68327200f341c9c2faff0cc9403"],["/page/9/index.html","ac282e5999340a5731e8a1697b72ba96"],["/shuoshuo/index.html","162d58bad8fe74d83631951e3d3928e1"],["/sw-register.js","e21ad04396ecbce086372e3db0d361bf"],["/tags/EasyExcel/index.html","235364ee5fb2a9cf25b621df71b0498b"],["/tags/Elasticsearch/index.html","fc63fed9d949e9d57e243a57f1dd1835"],["/tags/IPD/index.html","a0b82400ad07effd19c2c3045749d02e"],["/tags/JSP/index.html","7a7467de3f92529dd8ceea73d63ec37f"],["/tags/JUC/index.html","3767f57dded1ad589c4a18ba30e0e5f4"],["/tags/JVM/index.html","f722ae21771353a20bd507d035a3225e"],["/tags/Java/index.html","3cc1f22c6882736096074f138582655a"],["/tags/JavaWeb/index.html","75bded477d6a96eae9d433bdf50dfcb9"],["/tags/Java基础/index.html","faccae629ba1e852950aa275e7efde2f"],["/tags/Kafka/index.html","4527a7a3d42150557efbfa7746af8cce"],["/tags/MyBatis/index.html","4f95641d2627257b2f95c310adeb6292"],["/tags/MySQL/index.html","328e629f23ac21edcfc1cab27701012d"],["/tags/ORM/index.html","022183b8e6a1ecd667c304a4ae321b4b"],["/tags/PS/index.html","f9fc67a171b70048d6b5228c2b27c948"],["/tags/Redis/index.html","5f2734be01b3dddefad6559ce00491d4"],["/tags/RocketMQ/index.html","e1849630437f04f448960a4ad477ffc5"],["/tags/Spring/index.html","ac5fb999828c5a41bc3ca4ced198fc72"],["/tags/SpringBoot/index.html","565842bfc60cc55f75d0918f06598d5f"],["/tags/XML/index.html","9a38be02107b2412674913b376954895"],["/tags/index.html","faf21a884d8ab577b2ded04b5ec618d3"],["/tags/二叉树/index.html","760bcffe4dbf51630e0a4a154c042831"],["/tags/产品研发/index.html","abc932c0d95653ea47734d34736bad82"],["/tags/人才管理/index.html","8830fb99d7296a90d98c3b11aa371ac9"],["/tags/分布式系统/index.html","c49e932f09e94d58209e08f66c6b3a26"],["/tags/分治法/index.html","f4cbbf1e2bd85860e6fa75d88f003c30"],["/tags/前缀和/index.html","75df1d7b4bd1ac03c3e727234a2f25f9"],["/tags/动态规划/index.html","48723c5a464ece28f9da570108114a6e"],["/tags/华为/index.html","ddcd86071eae0d257d33ddbdf760a943"],["/tags/回溯法/index.html","30b93be1035fdc368bc8e5a32e0a1ece"],["/tags/字符串/index.html","35f6121d0bfd45170716f2cc67e124bd"],["/tags/工具库/index.html","18f28d00e3bf8fb60236de7c0fdeffdd"],["/tags/并发/index.html","0deb817082fe0d9ae2e19427fd05f24a"],["/tags/性能优化/index.html","811907c4bf26a654a1e488ac85f4b50d"],["/tags/成长记录/index.html","3fc9abe9fb0e3ac22d4f91e06860237f"],["/tags/成长记录/page/2/index.html","aadcafd9c1f5bc85381501a35df9bfad"],["/tags/战略/index.html","b7c6a097c49dcc121af6de2d94b09873"],["/tags/搜索引擎/index.html","67ccd4851afbf0049b36ae7568609d3e"],["/tags/框架/index.html","eaf2756ceeabee9c168e535babb9cc79"],["/tags/比赛补题/index.html","b4ef1e6f35f012138ffc5b0949294ac3"],["/tags/消息队列/index.html","1cb3c366498845913dd33349ccb8d14f"],["/tags/源码/index.html","6c45b9d5c5baeb8dcaf6fee6d6cbb19f"],["/tags/滑动窗口/index.html","194d8895a44a8ab54cf62836bdc3de93"],["/tags/算法/index.html","8fe05bce1e4332de6fc264e07ce0147b"],["/tags/算法/page/2/index.html","67ff9478bad24a57e064b414462153a9"],["/tags/管理/index.html","9df44717d75bfb8d490aee6c6f820ffa"],["/tags/管理/page/2/index.html","1227307e16253b2e133f0882dc36d3fb"],["/tags/绩效管理/index.html","4eca9fe3c4de7920192cb46c8e93178c"],["/tags/规范/index.html","cb621058ef27825cdb6223d8eacc53fc"],["/tags/设计模式/index.html","752c12908bd4e77eba60b3226f75edd2"],["/tags/读书笔记/index.html","5450cf59997d7e6c4ec4494cd0c55548"],["/tags/财经/index.html","2eb755293c9fbfdd9d249e826d3aa467"],["/tags/软件工程/index.html","42846ffd7c82a4635be73d21c55ed9b0"],["/tags/问题排查/index.html","7a07869ae337bd8ea1a1aa134f987592"],["/tags/集合/index.html","93def765d0a233563d6b1eaace6c9c65"],["/tags/面试/index.html","4ecca825d6cb41c37931fac9358fa511"],["/tags/项目/index.html","dd8b2621075a6ee271ae946549cdd7cf"],["/tags/预算管理/index.html","a35a270defe13e0d114355bb9f5fef40"],["/tags/高并发/index.html","0b32b6a54e26a0f26be64f8b48eb30c7"]];
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
